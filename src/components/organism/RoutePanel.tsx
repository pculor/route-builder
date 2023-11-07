import { useContext } from 'react';
import { WaypointsContext } from '../../Context/Provider';
import { WayPoint } from '../../Context/types.d';
import RouteList from '../molecules/RouteList';
import { SideBar } from '../atoms/ContentLayoutStyles';
import { Button } from '../atoms/Buttons';

const RoutePanel = () => {
  const [waypoints] = useContext(WaypointsContext);

  const onClick = () => {
    const gpxData = `<?xml version="1.0" encoding="UTF-8"?>
    <gpx creator="Komoot Route Builder" version="1.0">
      <trk>
        <name>Example gpx route</name>
        <trkseg>
          ${waypoints
            .map(
              (waypoint: WayPoint, index: number) =>
                `<trkpt lat="${waypoint.coord.lat}" lon="${waypoint.coord.lng}"><name>${
                  index + 1
                }</name></trkpt>`,
            )
            .join('\n')}
        </trkseg>
      </trk>
    </gpx>`;

    const element = document.createElement('a');
    element.setAttribute('href', `data:text/xml;charset=utf-8,${encodeURIComponent(gpxData)}`);
    element.setAttribute('download', 'my-komoot-route.gpx');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <SideBar>
      <h1 className="title">Route Builder</h1>
      <hr className="hr" />
      <RouteList />
      {waypoints.length > 0 && (
        <Button type="button" className="downloadRouteBtn" onClick={onClick}>
          Download your route
        </Button>
      )}
    </SideBar>
  );
};

export default RoutePanel;
