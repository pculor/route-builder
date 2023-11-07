import { ContentContainer } from '../../atoms/ContentLayoutStyles';
import { useRef, useEffect, useContext } from 'react';
import { WaypointsContext } from '../../../Context/Provider';
import { WayPoint } from '../../../Context/types.d';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [waypoints, waypointsDispatch] = useContext(WaypointsContext);

  useEffect(() => {
    const mapState = L.map('map').setView([36.25, 137.64], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapState);

    mapRef.current = mapState;

    return () => {
      mapRef.current && mapState.remove();
    };
  }, []);

  useEffect(() => {
    const mapState = mapRef.current;
    const onMapClick = (e: L.LeafletMouseEvent) => {
      const id = e.originalEvent.timeStamp;

      waypointsDispatch({
        type: 'ADD_WAYPOINT',
        payload: { id, coord: e.latlng },
      });
    };

    mapState && mapState.on('click', onMapClick);

    return () => {
      mapState && mapState.off('click', onMapClick);
    };
  }, [waypointsDispatch]);

  useEffect(() => {
    const mapState = mapRef.current;
    let layerGroup: L.LayerGroup;

    const icon = (html: string) =>
      L.divIcon({
        className: 'geoTag',
        iconSize: [30, 30],
        html,
      });

    const waypointsArr = waypoints.map((wp: WayPoint, index: number) =>
      L.marker(wp.coord, { icon: icon((index + 1).toString()) }),
    );
    mapState && (layerGroup = L.layerGroup(waypointsArr).addTo(mapState));

    return () => {
      if (layerGroup && mapState) layerGroup.clearLayers();
    };
  }, [waypoints]);

  return <ContentContainer id="map" title="Route Builder" />;
};

export default Map;
