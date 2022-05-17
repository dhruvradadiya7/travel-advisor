import axios from 'axios';
import { getAccessToken, resetAccessToken } from './FlightsFunctions';

const fetchAvalibaleFilghts = async (departingDate, goingToDate, departingLocation, goingToLocation) => new Promise(async (resolve, reject) => {
    try {
        const flights = await axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${departingLocation}&destinationLocationCode=${goingToLocation}&departureDate=${departingDate}&adults=1`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        resolve(flights);
    } catch (e) {
        if (e.response.status === 401) {
            resetAccessToken(fetchAvalibaleFilghts());
        } else {
            reject(e);
        }
    }
});

export default fetchAvalibaleFilghts;
