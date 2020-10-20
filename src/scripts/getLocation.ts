type Coords = {
    latitude: number;
    longitude: number;
}
const getLocation = (): any => {
    console.log('getLocation running');
    const success = (position: Position): Coords => {
        const { latitude, longitude } = position.coords        
        return {
            latitude, longitude
        }
    }
    const error = (err: PositionError) => {
        return err
    }
    navigator.geolocation.getCurrentPosition(success, error)
    
    
}
export default getLocation