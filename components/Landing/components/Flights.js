import dayjs from 'dayjs';
import { ReactComponent as Save } from 'icons/save-icon.svg';
import { useState } from 'react';

export const Flight = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="searched-flight_component ">
      <div className="searched-flight_component-row frsc">
        <div className="searched-flight_info-block fccc">
          <h3>YUL</h3>
          <h4>Montreal</h4>
          <p className="searched-flight_info_date">{dayjs(new Date()).format('DD MMM, YYYY')}</p>
          <p className="searched-flight_info_terminal">Terminal 1</p>
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
        <Flight />
        <Flight />
        <Flight />
      </div>
    </div>
  </div>
);

export default Flights;
