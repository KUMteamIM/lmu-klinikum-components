import { useState } from "react";
import "./cookie-notice.css";

const DEFAULT_CONFIG = {
  notice:
    "Zur Verbesserung der Funktion unserer Seite verwenden wir Cookies. Bitte beachten Sie, dass mit deaktivierten Cookies einige Dienste nicht mehr funktionieren (z.B. Formulare absenden).",
  accept: "OK",
  url: "https://www.lmu-klinikum.de/cookies/41fa08aa421f0f09",
  url_label: "Ausführliche Hinweise zu Cookies",
};

/**
 * Include a Cookie Notice banner in your page
 * @param {config} | object with notice, accept, url*, url_label* (*=optional)
 */
const CommonCookieNotice = ({ config, expires }) => {
  const { notice, accept, url, url_label } = config;
  const [accepted, setAccepted] = useState(
    document.cookie.includes("acceptedCookies")
  );

  const onAccept = () => {
    setAccepted(true);
    document.cookie = `acceptedCookies=true;expires=${expires.toUTCString()}`;
  };

  if (accepted) return null;

  return (
    <div className="cookie-notice">
      <div style={{ flex: 4 }}>
        <i>{notice}</i>
      </div>
      {url && url_label && (
        <div style={{ flex: 2 }}>
          <a href={url} target="_blank">
            ➜ {url_label}
          </a>
        </div>
      )}
      <div style={{ flex: 1 }}>
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
