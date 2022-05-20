import dayjs from 'dayjs';
import React from 'react';

export const removeHTMLTags = (content) => content?.replace(/<\/?[^>]+(>|$)/g, '');

const Guidelines = ({ data }) => (
  <div className="searched-card-container tours">
    <div className="searched-card-content fcss">
      <h2 className="landing-searched_title">Travel Restriction & Guidelines</h2>
      <div className="landing-searched_guideline-content">
        <h2>{data?.area?.name}</h2>
        <p>{removeHTMLTags(data?.summary)}</p>
        <br />
        <h3>Covid Updates</h3>
        <div className="frcb row">
          <p>
            <strong>Total Cases: </strong>
            {data?.diseaseCases?.confirmed || 0}
          </p>
          <p>
            <strong>Total Deaths: </strong>
            {data?.diseaseCases?.deaths || 0}
          </p>
          <p>
            <strong>Risk Level: </strong>
            {data?.diseaseRiskLevel || 0}
          </p>
          <p>
            <strong>Last Updated: </strong>
            {dayjs(data?.diseaseCases?.date).format('DD MMM, YYYY')}
          </p>
        </div>
        <div className="frcb row">
          <p>
            <strong>Infection Level: </strong>
            {data?.diseaseInfection?.level}
          </p>
          <p>
            <strong>Infection Rate: </strong>
            {data?.diseaseInfection?.rate || 0}
          </p>
          <p>
            <strong>Last Updated: </strong>
            {dayjs(data?.diseaseInfection?.date).format('DD MMM, YYYY')}
          </p>
          <a href={data?.diseaseInfection?.infectionMapLink} target="_blank" rel="noreferrer">Infection Map</a>
        </div>
        <p>
          <strong>Hotspots: </strong>
          {removeHTMLTags(data?.hotspots || '')}
        </p>
        <div className="frcb row">
          {data?.dataSources?.covidDashboardLink && <a href={data?.dataSources?.covidDashboardLink} target="_blank" rel="noreferrer">Covid Dashboard</a>}
          {data?.dataSources?.governmentSiteLink && <a href={data?.dataSources?.governmentSiteLink} target="_blank" rel="noreferrer">Government Site</a>}
        </div>
        <br />
        <h3>Area Restriction</h3>
        {data?.areaRestrictions && data.areaRestrictions.map((restriction, index) => (
          <React.Fragment key={index}>
            <div className="frcb row">
              <p><strong>{restriction?.restrictionType}</strong></p>
              <p>
                <strong>Last Updated: </strong>
                {dayjs(restriction?.date).format('DD MMM, YYYY')}
              </p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: restriction.text }} />
          </React.Fragment>
        ))}
        <br />
        <div className="frcb row">
          <h3><strong>On arrival</strong></h3>
          <p>
            <strong>Last Updated: </strong>
            {dayjs(data?.areaAccessRestriction?.entry?.date).format('DD MMM, YYYY')}
          </p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: data?.areaAccessRestriction?.entry?.text }} />
        <br />
        <div className="frcb row">
          <h3><strong>Disease Testing</strong></h3>
          <p>
            <strong>Last Updated: </strong>
            {dayjs(data?.areaAccessRestriction?.diseaseTesting?.date).format('DD MMM, YYYY')}
          </p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: data?.areaAccessRestriction?.diseaseTesting?.text }} />
      </div>
    </div>
  </div>
);

export default Guidelines;
