export type Coords = {
    latitude: number;
    longitude: number;
}

const getLocation = async (): Promise<Coords> => {
    const getPosition = (): Promise<Position>  => {
        return new Promise((resolve, reject) => 
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );
    }
    
    try {
        const pos = await getPosition()
        const { latitude, longitude } = pos.coords      
        return {
            latitude,
            longitude 
        }
    } catch (err) {
        throw console.error(err.message)
    }    
}


export default getLocation