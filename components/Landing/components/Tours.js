import { ReactComponent as Save } from 'icons/save-icon.svg';
import { ReactComponent as Browser } from 'icons/browser.svg';

export const truncTitle = (title, length) => {
  let newTitle;
  try {
    newTitle = title.substring(0, length);
    if (newTitle.length === title.length) {
      return title;
    }
    return `${newTitle}...`;
  } catch {
    return title;
  }
};

export const Tour = ({ data = {}, handleSaveFlights, saved }) => (
  <div className="searched-card_tour frss">
    <img src={data.pictures?.[0]} alt="searched-card_img" />
    <div className="searched-card_tour-content fccs">
      <h3>{data.name}</h3>
      <p>
        {truncTitle(data.shortDescription, 180)}
      </p>
      <h4>
        Price:
        {' '}
        {data?.price?.amount}
        {' '}
        {data?.price?.currencyCode}
      </h4>
    </div>
    <div className="searched-card_tour-action-box fcss">
      <button className="global_save-btn frsc white" type="button" onClick={() => window.open(data.bookingLink, '_blank')}>
        <Browser className="add-btn" />
        <h2 className="add-lbl">Book Now</h2>
      </button>
      <button className="global_save-btn frsc" type="button" onClick={handleSaveFlights}>
        <Save className="add-btn" />
        <h2 className="add-lbl">{saved ? 'Saved' : 'Save'}</h2>
      </button>
    </div>
  </div>
);

const Tours = ({
  tours, handleSaveTours, validateSaveStatus, saved,
}) => (
  <div className="searched-card-container tours">
    <div className="searched-card-content fcss">
      <h2 className="landing-searched_title">
        {saved ? 'Saved' : 'Available'}
        {' '}
        Tours & activites
      </h2>
      <div className="searched-card_tour-component fcss">
        {tours.length ? tours.map((tour, index) => {
          const saved = validateSaveStatus(tour);
          return <Tour data={tour} handleSaveFlights={() => handleSaveTours(tour)} saved={saved} key={index} />;
        }) : <h4 className='empty-message'>No tours & activites found for searched location!</h4>}
      </div>
    </div>
  </div>
);

export default Tours;
