const CurrentWeather = (weather: any) => {
    const appElement: HTMLElement | null = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = 'CurrentWeather'
    }
}

export default CurrentWeather