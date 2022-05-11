import axios from 'axios';

const setAccessToken = async () => {
  try {
    const result = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', 'grant_type=client_credentials&client_id=dbOGXtlpTsWqgAuvLiSfw9u9FYwqS2Hv&client_secret=Yra1egUqzslsJq4M', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    localStorage.setItem('fl_access_token', result.data.access_token);
  } catch (e) {
    console.log(e);
  }
};

export const getAccessToken = () => localStorage.getItem('fl_access_token');
export default setAccessToken;
