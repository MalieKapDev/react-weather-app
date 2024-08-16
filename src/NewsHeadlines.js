import React, { useEffect, useState } from "react";
import axios from "axios";

import "./NewsHeadlines.css";

const countryCodesMapping = {
  Argentina: "ar",
  Australia: "au",
  Austria: "at",
  Belgium: "be",
  Brazil: "br",
  Bulgaria: "bg",
  Canada: "ca",
  China: "cn",
  Colombia: "co",
  Cuba: "cu",
  Czechia: "cz",
  Egypt: "eg",
  France: "fr",
  Germany: "de",
  Greece: "gr",
  "Hong Kong": "hk",
  Hungary: "hu",
  India: "in",
  Indonesia: "id",
  Ireland: "ie",
  Israel: "il",
  Italy: "it",
  Japan: "jp",
  Latvia: "lv",
  Lithuania: "lt",
  Malaysia: "my",
  Mexico: "mx",
  Morocco: "ma",
  Netherlands: "nl",
  "New Zealand": "nz",
  Nigeria: "ng",
  Norway: "no",
  Philippines: "ph",
  Poland: "pl",
  Portugal: "pt",
  Romania: "ro",
  Russia: "ru",
  "Saudi Arabia": "sa",
  Serbia: "rs",
  Singapore: "sg",
  Slovakia: "sk",
  Slovenia: "si",
  "South Africa": "za",
  "South Korea": "kr",
  Sweden: "se",
  Switzerland: "ch",
  Taiwan: "tw",
  Thailand: "th",
  Turkey: "tr",
  "United Arab Emirates": "ae",
  Ukraine: "ua",
  "United Kingdom of Great Britain and Northern Ireland": "gb",
  "United States of America": "us",
  Venezuela: "ve",
};

export default function NewsHeadlines({ country }) {
  const [headlines, setHeadlines] = useState([]);
  const [headlinesLoaded, setHeadlinesLoaded] = useState(false);

  useEffect(() => {
    if (country) {
      const countryCode = countryCodesMapping[country];

      if (countryCode) {
        setHeadlines([]);
        setHeadlinesLoaded(false);

        const apiUrl = `/.netlify/functions/getNews?countryCode=${countryCode}`;

        axios
          .get(apiUrl)
          .then((response) => {
            setHeadlines(response.data.articles);
            setHeadlinesLoaded(true);
          })
          .catch((error) => console.log(error));
      }
    }
  }, [country]);

  if (!country || !headlinesLoaded) {
    return null;
  }

  return (
    <div className="mt-3">
      <h5>
        Top 3 headlines in <span>{country}:</span>
      </h5>
      {headlines.map((headline, index) => (
        <div key={index} className="pb-3">
          <h5 className="Headline">‣ {headline.title}</h5>
          <p className="Author">
            <i>Author: {headline.author}</i>
          </p>
          <a
            className="Article-url"
            href={headline.url}
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}
