import axios from 'axios';
import { getAccessToken, resetAccessToken } from './FlightsFunctions';

const getTravelRestrictionsByCountry = async (countryCode) => new Promise(async (resolve, reject) =>{
    try{
        const restrictionData = await axios.get(`https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=${countryCode}`,{ headers: { Authorization: `Bearer JUkAZjcFOauYHPDn8jrsM2w0kHJh` } });
        resolve(restrictionData);
    } catch (e) {
        reject(e);
    }
});

export default getTravelRestrictionsByCountry;