import { ReactComponent as Save } from 'icons/save-icon.svg';
import { ReactComponent as Browser } from 'icons/browser.svg';

export const Tour = () => (
  <div className="searched-card_tour frss">
    <img src="https://images.musement.com/cover/0001/07/prado-museum-tickets_header-6456.jpeg?w=500" alt="searched-card_img" />
    <div className="searched-card_tour-content fccs">
      <h3>Skip-the-line tickets to the Prado Museum</h3>
      <p>
        Book your tickets for the Prado Museum in Madrid, discover masterpieces
        by Velázquez, Goya, Mantegna, Raphael, Tintoretto and access all
        temporary exhibitions.
      </p>
      <h4>Ratings: 4.5</h4>
    </div>
    <div className="searched-card_tour-action-box fcss">
      <button className="global_save-btn frsc white" type="button">
        <Browser className="add-btn" />
        <h2 className="add-lbl">Book Now</h2>
      </button>
      <button className="global_save-btn frsc" type="button">
        <Save className="add-btn" />
        <h2 className="add-lbl">Save</h2>
      </button>
    </div>
  </div>
);

const Tours = () => (
  <div className="searched-card-container tours">
    <div className="searched-card-content fcss">
      <h2 className="landing-searched_title"> Tours & activites</h2>
      <div className="searched-card_tour-component fcss">
        <Tour />
        <Tour />
        <Tour />
      </div>
    </div>
  </div>
);

export default Tours;
