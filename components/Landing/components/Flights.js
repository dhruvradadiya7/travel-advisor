import dayjs from 'dayjs';
import { ReactComponent as Save } from 'icons/save-icon.svg';
import React, { useState } from 'react';

export const parseDuration = (duration) => duration.slice(2).replace('H', 'H ');

export const secondsToDhms = (seconds) => {
  if (!seconds) {
    return 0;
  }
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const dDisplay = d > 0 ? `${d}d ` : '';
  const hDisplay = h > 0 ? `${h}h ` : '';
  const mDisplay = m > 0 ? `${m}m ` : '';
  const sDisplay = s > 0 ? `${s}s ` : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

export const Flight = ({ data, handleSaveFlights, saved }) => {
  const segments = data?.itineraries?.[0]?.segments || [];
  const originSegment = segments[0] || {};
  const destinationSegment = segments[segments.length - 1] || {};
  const [open, setOpen] = useState(false);
  return (
    <div className="searched-flight_component ">
      <div className="searched-flight_component-row frsc">
        <div className="searched-flight_info-block fccc">
          <h3>{originSegment.departure?.iataCode}</h3>
          <h4>{originSegment.carrierCode?.toLowerCase()}</h4>
          <p className="searched-flight_info_date">{dayjs(originSegment.departure?.at).format('DD MMM, YYYY')}</p>
          {originSegment.departure.terminal && (
            <p className="searched-flight_info_terminal">
              Terminal
              {' '}
              {originSegment.departure.terminal}
            </p>
          )}
        </div>
        <div className="searched-flight_commut-info frcc">
          <img src="/images/commut-arrow.svg" alt="commut-arrow" />
          <p className="searched-flight_commut-time">{parseDuration(originSegment.duration)}</p>
          <p className="searched-flight_commut-price">
            {data?.price?.grandTotal}
            {' '}
            {data?.price?.currency}
          </p>
        </div>
        <div className="searched-flight_info-block fccc">
          <h3>{destinationSegment.arrival?.iataCode}</h3>
          <h4>{destinationSegment.carrierCode?.toLowerCase()}</h4>
          <p className="searched-flight_info_date">{dayjs(destinationSegment.arrival?.at).format('DD MMM, YYYY')}</p>
          {destinationSegment.arrival.terminal && (
            <p className="searched-flight_info_terminal">
              Terminal
              {' '}
              {destinationSegment.arrival.terminal}
            </p>
          )}
        </div>
        <div className="searched-flight_actions_box fcss">
          <button className="global_save-btn frsc" type="button" onClick={handleSaveFlights}>
            <Save className="add-btn" />
            <h2 className="add-lbl">{saved ? 'Saved' : 'Save'}</h2>
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
          {
            segments.map((segment, index) => (
              <React.Fragment key={index}>
                <div className="search-flight_detailed-row frsc">
                  <div className="searched-flight_info-block fccc">
                    <h3>{segment?.departure?.iataCode}</h3>
                    <h4>{segment?.carrierCode?.toLowerCase()}</h4>
                    <p className="searched-flight_info_date">{dayjs(segment?.departure?.at).format('DD MMM, YYYY')}</p>
                    {segment?.departure?.terminal && (
                      <p className="searched-flight_info_terminal">
                        Terminal
                        {' '}
                        {segment?.departure?.terminal}
                      </p>
                    )}
                  </div>
                  <div className="searched-flight_commut-info frcc">
                    <img src="/images/commut-arrow.svg" alt="commut-arrow" />
                    <p className="searched-flight_commut-time">{parseDuration(segment.duration)}</p>
                  </div>
                  <div className="searched-flight_info-block fccc">
                    <h3>{segment?.arrival?.iataCode}</h3>
                    <h4>{segment?.carrierCode?.toLowerCase()}</h4>
                    <p className="searched-flight_info_date">{dayjs(segment?.arrival?.at).format('DD MMM, YYYY')}</p>
                    {segment?.arrival?.terminal && (
                      <p className="searched-flight_info_terminal">
                        Terminal
                        {' '}
                        {segment?.arrival?.terminal}
                      </p>
                    )}
                  </div>
                  <div className="searched-flight_actions_box fcss">
                    <p className="flight-number">
                      {segment?.carrierCode}
                      {segment?.aircraft?.code}
                    </p>
                  </div>
                </div>

                {segments[index + 1] && (
                <div className="search-flight-layover_divider">
                  <div className="search-flight-layover fccc">
                    <p>
                      layover
                      {' '}
                      {segment?.arrival?.at && segments[index + 1].departure?.at && secondsToDhms(dayjs(segments[index + 1].departure?.at).diff(segment?.arrival?.at, 'seconds', true))}
                    </p>
                  </div>
                </div>
                )}

              </React.Fragment>
            ))
          }
        </div>
      ) : ''}
    </div>
  );
};

const Flights = ({
  flights = [], carriers = [], handleSaveFlights, validateSaveStatus, saved,
}) => (
  <div className="searched-card-container">
    <div className="searched-card-content fcss">
      <h2 className="landing-searched_title">
        {saved ? 'Saved' : 'Available'}
        {' '}
        Flights
      </h2>

      <div className="searched-card_components fcss">
        {flights.map((flightObj, index) => {
          const segments = flightObj?.itineraries[0]?.segments;
          const updateSegments = segments.map((e) => ({ ...e, carrierCode: carriers[e.carrierCode] || e.carrierCode }));
          flightObj.itineraries[0].segments = updateSegments;
          const saved = validateSaveStatus(flightObj);
          return <Flight key={index} data={flightObj} carrierCode={carriers} handleSaveFlights={() => handleSaveFlights(flightObj)} saved={saved} />;
        })}
      </div>
    </div>
  </div>
);

export default Flights;
