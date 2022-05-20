import Header from 'components/shared/Header';
import { fetchGuideLines } from 'containers/SearchFlightsContainer';
import { useState } from 'react';
import { useAuth } from 'utils/AuthContext';
import GuidelineCardContent from 'components/Landing/components/Guidelines';

const uniqueObjArray = (myObjArray) => [
  ...new Map(myObjArray.map((item) => [item.countryCode, item])).values(),
];

const GuidelineCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [guidelines, setGuidelines] = useState(null);

  const getGuidelineData = async () => {
    if (guidelines) {
      return setOpen(true);
    }
    try {
      setLoading(true);
      const guideLines = await fetchGuideLines(data.countryCode);
      setGuidelines(guideLines.data?.data);
      setOpen(true);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="guideline-card_box">
      <div className="guideline-card_header frcb">
        <h3>
          {data.country}
          {' '}
          (
          {data.countryCode}
          )
        </h3>
        <button onClick={() => (open ? setOpen(false) : getGuidelineData())} type="button">
          {loading ? 'Loading....' : (
            <>
              {open ? 'Hide' : 'Show'}
              {' '}
              Detail
            </>
          )}
        </button>
      </div>
      {open && (
        <div className="guideline-card_content">
          <GuidelineCardContent data={guidelines} />
        </div>
      )}
    </div>
  );
};

const Guidelines = () => {
  const { masters } = useAuth();

  const filteredMasters = uniqueObjArray(masters || []);
  return (
    <div className="guidelines-body">
      <Header />
      <div className="guidelines-content">
        {filteredMasters.map((cData) => <GuidelineCard key={cData.countryCode} data={cData} />)}
      </div>
    </div>
  );
};

export default Guidelines;
