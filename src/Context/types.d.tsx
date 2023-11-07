interface WayPoint {
    id: number;
    coord: {
        lat: number;
        lng: number;
    }
}

type WayPoints = WayPoint[] | [];

export type { WayPoint, WayPoints };