import { Coords } from './getLocation';
const URL = 'http://localhost:3001/';

export const fetchWoeid =  async (coords: Coords): Promise<any> => {
    const { latitude, longitude} = coords
    try {
        const res = await fetch(`${URL}api/location/search/?lattlong=${latitude},${longitude}`)
        const data = await res.json()        
        return data[0].woeid
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchWeatherWithId =  async (woeid: number): Promise<any> => {    
    try {
        const res = await fetch(`${URL}api/location/${woeid}`)
        const data = await res.json() 
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchWeatherBySearch =  async (search: string): Promise<any> => {    
    try {
        const res = await fetch(`${URL}api/location/search/?query=${search}`)
        const data = await res.json() 
        return data
    } catch (err) {
        throw new Error(err)
    }
}