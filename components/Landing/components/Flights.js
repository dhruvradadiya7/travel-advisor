import dayjs from 'dayjs';
import { ReactComponent as Save } from 'icons/save-icon.svg';
import { useState } from 'react';


const directories = {
  "locations": {
      "ORD": {
          "cityCode": "CHI",
          "countryCode": "US"
      },
      "EWR": {
          "cityCode": "NYC",
          "countryCode": "US"
      },
      "LCY": {
          "cityCode": "LON",
          "countryCode": "GB"
      },
      "CDG": {
          "cityCode": "PAR",
          "countryCode": "FR"
      },
      "BOS": {
          "cityCode": "BOS",
          "countryCode": "US"
      },
      "LGA": {
          "cityCode": "NYC",
          "countryCode": "US"
      },
      "AMS": {
          "cityCode": "AMS",
          "countryCode": "NL"
      },
      "YHZ": {
          "cityCode": "YHZ",
          "countryCode": "CA"
      },
      "IAD": {
          "cityCode": "WAS",
          "countryCode": "US"
      },
      "JFK": {
          "cityCode": "NYC",
          "countryCode": "US"
      },
      "DXB": {
          "cityCode": "DXB",
          "countryCode": "AE"
      },
      "YUL": {
          "cityCode": "YMQ",
          "countryCode": "CA"
      },
      "AUH": {
          "cityCode": "AUH",
          "countryCode": "AE"
      },
      "FRA": {
          "cityCode": "FRA",
          "countryCode": "DE"
      },
      "LHR": {
          "cityCode": "LON",
          "countryCode": "GB"
      },
      "AMD": {
          "cityCode": "AMD",
          "countryCode": "IN"
      },
      "YYZ": {
          "cityCode": "YTO",
          "countryCode": "CA"
      },
      "DOH": {
          "cityCode": "DOH",
          "countryCode": "QA"
      },
      "YTZ": {
          "cityCode": "YTO",
          "countryCode": "CA"
      }
  },
  "aircraft": {
      "223": "AIRBUS  A220-300",
      "320": "AIRBUS A320",
      "321": "AIRBUS A321",
      "332": "AIRBUS A330-200",
      "333": "AIRBUS A330-300",
      "343": "AIRBUS A340-300",
      "359": "AIRBUS A350-900",
      "388": "AIRBUS A380-800",
      "744": "BOEING 747-400",
      "763": "BOEING 767-300/300ER",
      "788": "BOEING 787-8",
      "789": "BOEING 787-9",
      "7M8": "BOEING 737 MAX 8",
      "E7W": "EMBRAER 175 (ENHANCED WINGLETS)",
      "32N": "AIRBUS A320NEO",
      "E90": "EMBRAER 190",
      "E75": "EMBRAER 175",
      "CR7": "CANADAIR REGIONAL JET 700",
      "CR9": "CANADAIR REGIONAL JET 900",
      "77L": "BOEING 777-200LR",
      "73J": "BOEING 737-900",
      "DH4": "DE HAVILLAND DHC-8 400 SERIES",
      "77W": "BOEING 777-300ER",
      "CRJ": "CANADAIR REGIONAL JET",
      "ERJ": "EMBRAER RJ135/140/145"
  },
  "currencies": {
      "EUR": "EURO"
  },
  "carriers": {
      "QR": "QATAR AIRWAYS",
      "KL": "KLM ROYAL DUTCH AIRLINES",
      "AC": "AIR CANADA",
      "6X": "AMADEUS SIX",
      "OS": "AUSTRIAN AIRLINES",
      "AF": "AIR FRANCE",
      "EK": "EMIRATES",
      "AI": "AIR INDIA",
      "DL": "DELTA AIR LINES",
      "UA": "UNITED AIRLINES",
      "EY": "ETIHAD AIRWAYS",
      "LH": "LUFTHANSA",
      "VS": "VIRGIN ATLANTIC"
  }
};
const flightObj = {
  "type": "flight-offer",
  "id": "1",
  "source": "GDS",
  "instantTicketingRequired": false,
  "nonHomogeneous": false,
  "oneWay": false,
  "lastTicketingDate": "2022-05-20",
  "numberOfBookableSeats": 9,
  "itineraries": [
      {
          "duration": "PT25H50M",
          "segments": [
              {
                  "departure": {
                      "iataCode": "YUL",
                      "at": "2022-05-20T17:00:00"
                  },
                  "arrival": {
                      "iataCode": "YYZ",
                      "terminal": "1",
                      "at": "2022-05-20T18:25:00"
                  },
                  "carrierCode": "EY",
                  "number": "3470",
                  "aircraft": {
                      "code": "223"
                  },
                  "operating": {
                      "carrierCode": "AC"
                  },
                  "duration": "PT1H25M",
                  "id": "99",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
              },
              {
                  "departure": {
                      "iataCode": "YYZ",
                      "terminal": "3",
                      "at": "2022-05-20T22:10:00"
                  },
                  "arrival": {
                      "iataCode": "AUH",
                      "terminal": "3",
                      "at": "2022-05-21T19:00:00"
                  },
                  "carrierCode": "EY",
                  "number": "140",
                  "aircraft": {
                      "code": "789"
                  },
                  "operating": {
                      "carrierCode": "EY"
                  },
                  "duration": "PT12H50M",
                  "id": "100",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
              },
              {
                  "departure": {
                      "iataCode": "AUH",
                      "terminal": "3",
                      "at": "2022-05-21T23:35:00"
                  },
                  "arrival": {
                      "iataCode": "AMD",
                      "terminal": "2",
                      "at": "2022-05-22T04:20:00"
                  },
                  "carrierCode": "EY",
                  "number": "288",
                  "aircraft": {
                      "code": "321"
                  },
                  "operating": {
                      "carrierCode": "EY"
                  },
                  "duration": "PT3H15M",
                  "id": "101",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
              }
          ]
      }
  ],
  "price": {
      "currency": "EUR",
      "total": "625.03",
      "base": "373.00",
      "fees": [
          {
              "amount": "0.00",
              "type": "SUPPLIER"
          },
          {
              "amount": "0.00",
              "type": "TICKETING"
          }
      ],
      "grandTotal": "625.03"
  },
  "pricingOptions": {
      "fareType": [
          "PUBLISHED"
      ],
      "includedCheckedBagsOnly": true
  },
  "validatingAirlineCodes": [
      "EY"
  ],
  "travelerPricings": [
      {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
              "currency": "EUR",
              "total": "625.03",
              "base": "373.00"
          },
          "fareDetailsBySegment": [
              {
                  "segmentId": "99",
                  "cabin": "ECONOMY",
                  "fareBasis": "ERV1CA",
                  "class": "E",
                  "includedCheckedBags": {
                      "quantity": 2
                  }
              },
              {
                  "segmentId": "100",
                  "cabin": "ECONOMY",
                  "fareBasis": "ERV1CA",
                  "class": "E",
                  "includedCheckedBags": {
                      "quantity": 2
                  }
              },
              {
                  "segmentId": "101",
                  "cabin": "ECONOMY",
                  "fareBasis": "ERV1CA",
                  "brandedFare": "YV",
                  "class": "E",
                  "includedCheckedBags": {
                      "quantity": 2
                  }
              }
          ]
      }
  ]
}


export const Flight = ({ data, carrierCode }) => {
  const segments = data?.itineraries?.[0]?.segments || [];
  const originSegment = segments[0] || {};
  const destinationSegment = segments[segments.length - 1] || {};
  const [open, setOpen] = useState(false);
  return (
    <div className="searched-flight_component ">
      <div className="searched-flight_component-row frsc">
        <div className="searched-flight_info-block fccc">
          <h3>{originSegment.departure?.iataCode}</h3>
          <h4>{carrierCode[originSegment.carrierCode]}</h4>
          <p className="searched-flight_info_date">{dayjs(originSegment.departure?.at).format('DD MMM, YYYY')}</p>
          {originSegment.departure.terminal && <p className="searched-flight_info_terminal">Terminal {originSegment.departure.terminal}</p>}
        </div>
        <div className="searched-flight_commut-info frcc">
          <img src="/images/commut-arrow.svg" alt="commut-arrow" />
          <p className="searched-flight_commut-time">14h 15m</p>
          <p className="searched-flight_commut-price">67.59 EUR</p>
        </div>
        <div className="searched-flight_info-block fccc">
          <h3>YUL</h3>
          <h4>Montreal</h4>
          <p className="searched-flight_info_date">{dayjs(new Date()).format('DD MMM, YYYY')}</p>
          <p className="searched-flight_info_terminal">Terminal 1</p>
        </div>
        <div className="searched-flight_actions_box fcss">
          <button className="global_save-btn frsc" type="button">
            <Save className="add-btn" />
            <h2 className="add-lbl">Save</h2>
          </button>
          <button type="button" className="detail-toggle_button" onClick={() => setOpen(!open)}>
            {open ? 'Hide' : 'Show'}
            {' '}
            details
          </button>
        </div>
      </div>

      {open ? (
        <div className="search-flight_detailed-component">
          <div className="search-flight_detailed-row frsc">
            <div className="searched-flight_info-block fccc">
              <h3>YUL</h3>
              <h4>Montreal</h4>
              <p className="searched-flight_info_date">{dayjs(new Date()).format('DD MMM, YYYY')}</p>
              <p className="searched-flight_info_terminal">Terminal 1</p>
            </div>
            <div className="searched-flight_commut-info frcc">
              <img src="/images/commut-arrow.svg" alt="commut-arrow" />
              <p className="searched-flight_commut-time">14h 15m</p>
            </div>
            <div className="searched-flight_info-block fccc">
              <h3>YUL</h3>
              <h4>Montreal</h4>
              <p className="searched-flight_info_date">{dayjs(new Date()).format('DD MMM, YYYY')}</p>
              <p className="searched-flight_info_terminal">Terminal 1</p>
            </div>
            <div className="searched-flight_actions_box fcss">
              <p className="flight-number">PR121</p>
            </div>
          </div>

          <div className="search-flight-layover_divider">
            <div className="search-flight-layover fccc">
              <p>layover 3h 30m</p>
            </div>
          </div>

          <div className="search-flight_detailed-row frsc">
            <div className="searched-flight_info-block fccc">
              <h3>YUL</h3>
              <h4>Montreal</h4>
              <p className="searched-flight_info_date">{dayjs(new Date()).format('DD MMM, YYYY')}</p>
              <p className="searched-flight_info_terminal">Terminal 1</p>
            </div>
            <div className="searched-flight_commut-info frcc">
              <img src="/images/commut-arrow.svg" alt="commut-arrow" />
              <p className="searched-flight_commut-time">14h 15m</p>
            </div>
            <div className="searched-flight_info-block fccc">
              <h3>YUL</h3>
              <h4>Montreal</h4>
              <p className="searched-flight_info_date">{dayjs(new Date()).format('DD MMM, YYYY')}</p>
              <p className="searched-flight_info_terminal">Terminal 1</p>
            </div>
            <div className="searched-flight_actions_box fcss">
              <p className="flight-number">PR121</p>
            </div>
          </div>
        </div>
      ) : ''}
    </div>
  );
};

const Flights = () => (
  <div className="searched-card-container">
    <div className="searched-card-content fcss">
      <h2 className="landing-searched_title">Available Flights</h2>

      <div className="searched-card_components fcss">
        <Flight data={flightObj} carrierCode={directories.carriers} />
      </div>
    </div>
  </div>
);

export default Flights;
