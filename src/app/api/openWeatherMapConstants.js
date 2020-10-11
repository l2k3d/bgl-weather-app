export const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const OWM_API_KEY = '18466a4781781c13bcb742738c5e2a8b';
export const OWM_SECURITY = `&appid=${OWM_API_KEY}`;

export const CURRENT_WEATHER = (location,units) => {return`${BASE_URL}/weather?q=${location}&units=${units}${OWM_SECURITY}`}
