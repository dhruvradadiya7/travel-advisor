import axios from 'axios';
import { getAccessToken, resetAccessToken } from './FlightsFunctions';

const fetchAvalibaleFilghts = async (departingDate, goingToDate, departingLocation, goingToLocation) => new Promise(async (resolve, reject) => {
    try {
        const flights = await axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${departingLocation}&destinationLocationCode=${goingToLocation}&departureDate=${departingDate}&adults=1&max=10`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        resolve(flights);
    } catch (e) {
        if (e.response.status === 401) {
            resetAccessToken(() => fetchAvalibaleFilghts(departingDate, goingToDate, departingLocation, goingToLocation));
        } else {
            reject(e);
        }
    }
});


export const fetchAvalibaleTours = (goingToLocation) => new Promise(async (resolve, reject) => {
    try {
        const airport = await axios.get(`https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${goingToLocation}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        const geoCode = airport.data?.data?.[0]?.geoCode;
        if (geoCode) {
            const tours = await axios.get(`https://test.api.amadeus.com/v1/shopping/activities?longitude=${geoCode.longitude}&latitude=${geoCode.latitude}&radius=20`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            resolve(tours);
        } else {
            resolve({ data: { errors: [] } })
        }
    } catch (e) {
        if (e.response.status === 401) {
            resetAccessToken(() => fetchAvalibaleTours(goingToLocation));
        } else {
            reject(e);
        }
    }
})


export const fetchGuideLines = async (goingToLocation) => new Promise(async (resolve, reject) => {
    try {
        const guideLines = await axios.get(`https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=${goingToLocation}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        resolve(guideLines);
    } catch (e) {
        if (e.response.status === 401) {
            resetAccessToken(() => fetchGuideLines(goingToLocation));
        } else {
            reject(e);
        }
    }
});

export default fetchAvalibaleFilghts;
