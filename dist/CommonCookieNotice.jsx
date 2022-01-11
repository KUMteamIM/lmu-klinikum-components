"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var DEFAULT_CONFIG = {
    notice: "Zur Verbesserung der Funktion unserer Seite verwenden wir Cookies. Bitte beachten Sie, dass mit deaktivierten Cookies einige Dienste nicht mehr funktionieren (z.B. Formulare absenden).",
    accept: "OK",
    url: "https://www.lmu-klinikum.de/cookies/41fa08aa421f0f09",
    url_label: "Ausführliche Hinweise zu Cookies"
};
/**
 * Include a Cookie Notice banner in your page
 * @param {config} | object with notice, accept, url*, url_label* (*=optional)
 */
var CommonCookieNotice = function (_a) {
    var config = _a.config, expires = _a.expires;
    var notice = config.notice, accept = config.accept, url = config.url, url_label = config.url_label;
    var _b = (0, react_1.useState)(document.cookie.includes("acceptedCookies=yes")), accepted = _b[0], setAccepted = _b[1];
    var onAccept = function () {
        setAccepted(true);
        document.cookie = "acceptedCookies=yes;expires=".concat(expires.toUTCString());
    };
    if (accepted)
        return null;
    return (<div className="cookie-notice">
      <div>
        <i>{notice}</i>
      </div>
      {url && url_label && (<div>
          <a href={url} target="_blank" rel="noreferrer">
            ➜ {url_label}
          </a>
        </div>)}
      <div>
        <button className="button-lg" onClick={onAccept}>
          {accept}
        </button>
      </div>
    </div>);
};
CommonCookieNotice.defaultProps = {
    config: DEFAULT_CONFIG,
    expires: new Date(Date.now() + 1000 * 3600 * 365)
};
exports["default"] = CommonCookieNotice;
