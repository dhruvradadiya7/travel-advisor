import axios from 'axios';
import { getAccessToken } from './FlightsFunctions';

const fetchAvalibaleFilghts = async () => {
    const flights = await axios.get('https://test.api.amadeus.com/v2', { headers: { Authorization: `Bearer ${getAccessToken()}` } });
    console.log("flights", flights);
};

export default fetchAvalibaleFilghts;
