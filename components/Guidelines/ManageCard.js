/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from "react";

const ManageCard = (props) => {
  const countryCode = props.countryCode;
  const [visible, setVisible] = useState(true);
  const ShowDetail = () => {
    //I have added my api Bearer auth code in this api /container/GuidlinsContains
    //const datasam = await getTravelRestrictionsByCountry('US');
    //console.log(datasam.data.area.name);
    setVisible(!visible);
  };
  const datasam = {
    meta: {
      links: {
        self: "https://test.api.amadeus.com/v1/diseases/covid19-area-report?countryCode=US",
      },
    },
    data: {
      area: {
        name: "United States of America",
        iataCode: "US",
        areaType: "Country",
      },
      summary:
        "<p>Authorities have imposed international travel restrictions from late February 2020 – one month after the first cases were detected in the country – and nationwide social distancing guidelines from late March 2020. The country has the highest case and fatality figures in the world. From March 2020, stay-at-home lockdown began to be implemented as the virus spread across the country. All states began reopening as of June 2020 at widely varying paces, before reimposing restrictions from October 2020, and then moving once more to lift most remaining measures as of April 2021 while implementing vaccination campaigns. Approximately 100,000 cases per day were reported nationwide as of May.</p>",
      diseaseRiskLevel: "Medium",
      diseaseInfection: {
        date: "2022-05-08",
        level: "Extreme",
        rate: 247.86,
        infectionMapLink:
          "https://www.nytimes.com/interactive/2021/us/covid-cases.html",
      },
      diseaseCases: {
        date: "2022-05-17",
        deaths: 1000189,
        confirmed: 82726107,
      },
      hotspots:
        "<p>Alaska, Colorado, Texas, Kentucky, Virginia, North Carolina, New York, New Jersey, Vermont, New Hampshire, Maine, Connecticut, Rhode Island, Massachusetts</p>",
      dataSources: {
        covidDashboardLink:
          "https://data.commercialappeal.com/covid-19-hospital-capacity/",
        governmentSiteLink:
          "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
      },
      areaRestrictions: [
        {
          date: "2022-05-05",
          text: "<p>American, United, Delta, Southwest, JetBlue, Allegiant, Hawaiian and Alaska Airlines have suspended hundreds of domestic flights due to COVID-19-related staff shortages.</p> <p>The Centers for Disease Control (CDC) announced that domestic travellers who are fully vaccinated against COVID-19, defined as two weeks having passed since obtaining their final dose of the vaccine, do not need to get tested before or after travel and do not need to self-quarantine. Domestic travellers are recommended to take a viral test 1-3 days before departure and to self-quarantine for 7 days upon arrival. Travellers should get tested again 3-5 days after arrival; if a test is not available or results are delayed, travellers should self-quarantine for a total of 10 days.</p>",
          restrictionType: "Domestic Travel",
        },
        {
          date: "2022-05-05",
          text: "<p>In areas where COVID-19 hospitalisations are high, non-urgent surgeries will be suspended and ambulance services will not be dispatched for non-life threatening emergencies. Long wait times are certain due to staff shortages at public and private healthcare providers nationwide.</p>",
          restrictionType: "Others",
        },
      ],
      areaAccessRestriction: {
        transportation: {
          date: "2022-05-05",
          text: "<p>International flights are subject to suspension on short notice in response to country-specific travel bans.</p>",
          transportationType: "FLIGHT",
          isBanned: "No",
        },
        declarationDocuments: {
          date: "2022-05-05",
          text: '<p><strong>Travel (PLF) document</strong><br>All travellers aged two and older must complete an Attestation Form prior to departure. Proof of being fully vaccinated or exempt from this requirement is required for each noncitizen who is a nonimmigrant arriving or transiting by air, as well as via land ports of entry and ferry terminals.</p>\n<p>Further details can be found at <a href="https://www.cdc.gov/quarantine/fr-proof-negative-test.html">https://www.cdc.gov/quarantine/fr-proof-negative-test.html</a></p>\n',
          documentRequired: "Yes",
          travelDocumentationLink:
            "https://www.cdc.gov/quarantine/pdf/Combined-Passenger-Attestation-Amended-Testing-Order-12-02-2021-p.pdf",
        },
        entry: {
          date: "2022-05-05",
          text: "<p>Air travellers over the age of two, who have been fully vaccinated against COVID-19 and present a negative COVID-19 test no older than 24 hours or proof of recovery no older than 90 days are allowed entry. Travellers via land ports of entry or ferry terminals, excluding US citizens, Lawful Permanent Residents and US nationals, are required to be fully vaccinated but no pre-travel testing is required. Face masks are no longer mandatory for the journey and travellers are required to share their telephone number and email address for contact tracing. An ongoing judicial review mey force the the measure to be reimposed.</p> <p>Embassies and consulates have resumed routine visa services but have broad discretion to determine how to prioritize visa appointments among the range of visa classes as safely as possible, subject to local conditions and restrictions.</p>",
          ban: "No",
          rules:
            "https://www.cdc.gov/coronavirus/2019-ncov/travelers/from-other-countries.html",
          exemptions:
            "https://www.nafsa.org/regulatory-information/covid-19-restrictions-us-visas-and-entry",
          borderBan: [
            {
              borderType: "maritimeBorderBan",
              status: "Partially Open",
            },
            {
              borderType: "landBorderBan",
              status: "Partially Open",
            },
          ],
        },
        diseaseTesting: {
          date: "2022-05-05",
          text: '<p><strong>Before travel</strong></p><p>All passengers on inbound international flights, excluding from American Samoa, Guam and the Northern Marianas Islands, Puerto Rico and the US Virgin Islands, must present a negative COVID-19 test result not older than one day or medical documentation confirming that the traveller has contracted and recovered from COVID-19 in the past 90 days before boarding a flight to the US. An at-home NAAT or antigen SARS-CoV-2 viral test authorised by the Food and Drug Administration (FDA) may be used for this requirement. Officials have imposed a one-day validity period for testing as a more flexible option than a strict 24 hours before departure time, meaning that a negative test obtained at any time on the day prior to travel will be valid.</p>\n<p>Foreign passengers must be fully vaccinated to enter the US.</p>\n<p>Children between the ages of 2 and 17 travelling with fully vaccinated parents or guardians are also subject to pre-departure testing requirements.</p>\n<p>Flight crews, maritime crews with valid visas, diplomats, military personnel and urgent humanitarian or medical cases, including travellers unable to procure a pre-departure test at their point of embarkation, are exempt. Fully vaccinated travellers via land ports of entry and ferry terminals are also exempt. A list of exemptions to testing is available at <a href="https://www.cdc.gov/quarantine/pdf/Global-Airline-Testing-Order-RPWSigned-Encrypted-p.pdf">https://www.cdc.gov/quarantine/pdf/Global-Airline-Testing-Order-RPWSigned-Encrypted-p.pdf</a>.</p>\n<p>All transit passengers on inbound international flights over the age of two must present a negative COVID-19 test result not older than 24 hours or medical documentation confirming that the traveller has contracted and recovered from COVID-19 in the past 90 days before boarding a flight to the US. Travellers arriving from American Samoa, Guam and the Northern Marianas Islands, Puerto Rico and the US Virgin Islands are exempt. An at-home NAAT or antigen SARS-CoV-2 viral test authorised by the Food and Drug Administration (FDA) may be used for this requirement. Officials have imposed a one-day validity period for testing as a more flexible option than a strict 24 hours before departure time, meaning that a negative test obtained at any time on the day prior to travel will be valid.</p>\n',
          isRequired: "Yes",
          when: "Before travel",
          requirement: "Mandatory",
          rules:
            "https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-international-air-travelers.html#:~:text=On%20January%2012%2C%202021%2C%20CDC,airline%20before%20boarding%20the%20flight.",
          testType: "PCR, Antigen, NAAT",
          minimumAge: 2,
          validityPeriod: {
            delay: "P24H",
            referenceDateType: "Departure",
          },
        },
        tracingApplication: {
          date: "2022-05-05",
          isRequired: "No",
        },
        quarantineModality: {
          date: "2022-05-09",
          text: '<p>Travellers who are not fully vaccinated but are allowed entry by air through an exception are required to self-quarantine for seven days upon arrival. The list of exceptions can be consulted <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/proof-of-vaccination.html#faq">here</a>. Travellers who have recovered from COVID-19 in the past 90 days are exempt.</p>\n<p>Travellers who have not completed the minimum vaccination course, as well as travellers who have not received a booster shot, are recommended to self-quarantine for five days upon arrival.</p>\n',
          eligiblePerson: "Some travellers",
          quarantineType: "Self",
          duration: 7,
          rules:
            "https://www.cdc.gov/coronavirus/2019-ncov/travelers/noncitizens-US-air-travel.html#anchor_1634928804881",
        },
        mask: {
          date: "2022-05-05",
          text: "<p>Some states and territories require residents to wear masks in indoor public spaces. Violators may be subject to fines and be denied entry to businesses and use of public transport. Most states and territories have voluntary measures or measures restricted to specific venues and municipalities.</p> <p>Enforcement varies widely and is not consistently enforced below the federal level. A mandate requiring travellers to wear a mask on inter-state transport, including at airports and onboard flights, trains, planes, intercity buses and ferries, was suspended on 18 April pending a judical review of its constitutionality. The rule was in place until 3 May before its suspension. The Centers for Disease Control and Prevention (CDC) continues to recommend all travellers wear masks on airplanes, trains, buses and all other means of public transport.</p>",
          isRequired: "Recommended",
        },
        exit: {
          date: "2022-05-05",
          text: "<p>There are no exit restrictions though international travel to high-COVID-19 risk destinations is strongly discouraged.</p>",
          specialRequirements: "No",
          rulesLink:
            "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/",
          isBanned: "No",
        },
        otherRestriction: {},
        diseaseVaccination: {
          date: "2022-05-05",
          text: '<p>Non-resident inbound travellers over the age of 18 on non-essential business must be fully vaccinated against COVID-19 with vaccines approved by the US Food and Drug Administration (FDA) or World Health Organization (WHO).</p> <p>Travellers on non-tourist visas (excludes B-1 and B-2) arriving from approximately 50 listed countries where less than 10 percent of the population is vaccinated due to the unavailability of vaccines will be permitted entry as humanitarian cases. The list is updated weekly at <a href="https://www.cdc.gov/quarantine/order-safe-travel/technical-instructions.html" target="_blank" rel="noopener">https://www.cdc.gov/quarantine/order-safe-travel/technical-instructions.html</a>.</p>',
          isRequired: "Yes",
          referenceLink:
            "https://www.cdc.gov/coronavirus/2019-ncov/travelers/proof-of-vaccination.html#covid-vaccines",
          acceptedCertificates: [
            "Paper Certificate",
            " EU Digital COVID Certificate",
            " NHS Covid Pass",
            " CDC Covid Vaccination Card",
            " Vietnam certificate",
          ],
          qualifiedVaccines: [
            "Pfizer - 14 days after second dose.",
            "AstraZeneca (Vaxzevria) - 14 days after second dose.",
            "Vaxevria (South Korea) - 14 days after second dose.",
            "Covishield (India) - 14 days after second dose.",
            "Johnson & Johnson - 14 days after first dose.",
            "Sinopharm (Beijing) - 14 days after second dose.",
            "CoronaVac - 14 days after second dose.",
            "Moderna - 14 days after second dose.",
            "Covaxin - 14 days after second dose.",
            "Nuvaxovid (Novavax) - 14 days after second dose.",
            "Covovax (Novavax) - 14 days after second dose.",
            "Covifenz - 14 days after second dose.",
          ],
          policy: "Yes",
          exemptions: "Entry Ban",
        },
      },
      areaPolicy: {
        date: "2022-05-05",
        text: "<p>Limited federal policies for quarantine and testing are in effect nationwide. Most policy decisions are implemented at the state, county and municipal level.</p>",
        status: "Distancing",
        startDate: "2020-03-16",
        endDate: "indef",
        referenceLink: "https://www.covid.gov/",
      },
      relatedArea: [
        {
          methods: ["GET"],
          rel: "Parent",
        },
      ],
      areaVaccinated: [
        {
          date: "2022-05-06",
          vaccinationDoseStatus: "oneDose",
          percentage: 81.672,
        },
        {
          date: "2022-05-15",
          vaccinationDoseStatus: "fully",
          percentage: 66.45,
        },
      ],
      type: "covid19-area-report",
    },
  };
  return (
    <div className="card">
      <div className="container">
        <div className="cnt-code">
          <p>
            {countryCode.Name}( {countryCode.Code} )
          </p>
        </div>
        <div onClick={() => ShowDetail()}>
          {visible === true ? (
            <p className="show-hide"> show detail</p>
          ) : (
            <p className="show-hide">hide detail</p>
          )}
        </div>
      </div>
      {visible === true
        ? visible
        : !visible && (
            <div>
              <div className="detail-card">
                Risk Level : {datasam.data.diseaseRiskLevel}
              </div>

              <div className="detail-card">Summary : <br/>{datasam.data.summary}</div>

              <div className="detail-card hotspot"> <p>Hotspot : <br/>{datasam.data.hotspots}</p></div>
              <div className="detail-card hotspot"> <p>Accepted vaccines : <br/>{datasam.data.areaAccessRestriction.diseaseVaccination.qualifiedVaccines}</p></div>
              
            </div>
          )}
    </div>
  );
};

export default ManageCard;
