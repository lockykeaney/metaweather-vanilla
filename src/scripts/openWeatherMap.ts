const API_KEY = '66185097d9b8c7d68eb1cd567308c6a4';

type OpenWeatherMapParams = {
    lat?: number;
    lon?: number
}

const createUrl = (params: any) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const queryString = Object.keys(params).map((key: string) => key + '=' + params[key]).join('&');
    return `${baseUrl}?${queryString}&units=metric&appid=${API_KEY}`;
}

export const fetchWeatherCoordinates = async (params: any) => {
    const url = createUrl(params);
    try {
        const res = await fetch(url)
        return await res.json()
    } catch (err) {
        throw err
    }
}