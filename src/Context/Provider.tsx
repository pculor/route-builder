import React, { useReducer, createContext } from 'react';
import { WayPoint, WayPoints } from './types.d';


type ActionType =
  | {
      payload: WayPoint;
      type: 'ADD_WAYPOINT';
    }
  | { payload: number; type: 'REMOVE_WAYPOINT' }
  | {
      payload: WayPoints;
      type: 'REORDER_WAYPOINTS';
    };

type WaypointContext = [WayPoints, React.Dispatch<ActionType>];

interface WayPointsProviderProps {
  children: React.ReactNode;
}

const initialContext: WaypointContext = [[], () => null];

export const WaypointsContext = createContext<WaypointContext>(initialContext);

export const Provider = ({ children }: WayPointsProviderProps): JSX.Element => {
  const initialState: WayPoints = [];

  const reducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
      case 'ADD_WAYPOINT': {
        const wayPointArr = [...state, { id: action.payload.id, coord: action.payload.coord }];
        return wayPointArr;
      }

      case 'REMOVE_WAYPOINT': {
        return state.filter(item => item.id !== action.payload);
      }

      case 'REORDER_WAYPOINTS': {
        return action.payload;
      }

      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WaypointsContext.Provider value={[state, dispatch]}>{children}</WaypointsContext.Provider>
  );
};
