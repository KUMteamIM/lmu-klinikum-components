import React, { useState } from "react";

const DEFAULT_CONFIG = {
  notice:
    "Zur Verbesserung der Funktion unserer Seite verwenden wir Cookies. Bitte beachten Sie, dass mit deaktivierten Cookies einige Dienste nicht mehr funktionieren (z.B. Formulare absenden).",
  accept: "OK",
  url: "https://www.lmu-klinikum.de/cookies/41fa08aa421f0f09",
  url_label: "Ausführliche Hinweise zu Cookies",
};

interface DefaultConfig {
  notice: string,
  accept: string,
  url?: string,
  url_label?: string
}

interface PropDefs {
  config: DefaultConfig,
  expires: Date,
}

/**
 * Include a Cookie Notice banner in your page
 * @param {config} | object with notice, accept, url*, url_label* (*=optional)
 */
const CommonCookieNotice = ({ config, expires }:PropDefs) => {
  const { notice, accept, url, url_label } = config;
  const [accepted, setAccepted] = useState(
    document.cookie.includes("acceptedCookies=yes")
  );

  const onAccept = () => {
    setAccepted(true);
    document.cookie = `acceptedCookies=yes;expires=${expires.toUTCString()}`;
  };

  if (accepted) return null;

  return (
    <div className="cookie-notice">
      <div>
        <i>{notice}</i>
      </div>
      {url && url_label && (
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            ➜ {url_label}
          </a>
        </div>
      )}
      <div>
        <button className="button-lg" onClick={onAccept}>
          {accept}
        </button>
      </div>
    </div>
  );
};

CommonCookieNotice.defaultProps = {
  config: DEFAULT_CONFIG,
  expires: new Date(Date.now() + 1000 * 3600 * 365),
};

export default CommonCookieNotice;
