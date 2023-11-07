import React, { useContext, useState } from 'react';
import { WaypointsContext } from '../../../Context/Provider';
import Icon from '../../atoms/Icon';
import { WayPoint } from '../../../Context/types.d';
import { StyledList } from '../../atoms/List';
import { Button } from '../../atoms/Buttons';

interface OnDragEvent<T = HTMLElement> extends React.DragEvent<T> {
    parentNode?: T;
    target: EventTarget & { parentNode?: T };
};


const RouteList = (): JSX.Element => {
    const [waypoints, waypointsDispatch] = useContext(WaypointsContext);
  
    const [draggedItem, setDraggedItem] = useState<WayPoint | null>(null);
    const [dragEntered, setDragEntered] = useState(false);
  
  
    const onDragStart = (e: OnDragEvent<HTMLElement>, ind: number) => {
      setDraggedItem(waypoints[ind]);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData(
        'text/html',
        typeof e.parentNode !== 'undefined' ? e.parentNode.toString() : ''
      );
      if (e.target.parentNode) e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };
  
    const onDragOver = (e: OnDragEvent<HTMLElement | HTMLLIElement>, ind: number) => {
      e.preventDefault();
      const draggedOverItem = waypoints[ind];
  
      if (draggedItem === draggedOverItem) {
        return;
      }
  
      const items = waypoints.filter((item: WayPoint) => item !== draggedItem);
      if (draggedItem) items.splice(ind, 0, draggedItem);
  
      waypointsDispatch({ type: 'REORDER_WAYPOINTS', payload: items });
    };
  
    const onDragEnter = () => {
      setDragEntered(true);
    };
  
    const onDragEnd = () => {
      setDragEntered(false);
      setDraggedItem(null);
    };
  
    const removeWayPoint = (id: number) => {
      waypointsDispatch({ type: 'REMOVE_WAYPOINT', payload: id });
    };
  
    return (
      <StyledList>
        {waypoints.length > 0 &&
          waypoints.map((point: WayPoint, index: number) => (
            <li
              key={point.id}
              className={`${draggedItem === point ? 'isDragging' : ''} ${
                dragEntered ? 'isDraggedIn' : ''
              }`}
              onDragOver={e => onDragOver(e, index)}
              onDragEnter={() => onDragEnter()}
            >
              <div
                className='bars'
                draggable="true"
                onDragStart={e => onDragStart(e, index)}
                onDragEnd={() => onDragEnd()}
              >
                <Icon iconName='bars' className='icon' />
              </div>
              <span className='title'>
                Waypoint {index + 1}
              </span>
              <Button type="button" className='trash' onClick={() => removeWayPoint(point.id)}>
                <Icon iconName="trash" className='icon' />
              </Button>
            </li>
          ))}
      </StyledList>
    );
  };

  export default RouteList;