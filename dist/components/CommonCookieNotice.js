"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DEFAULT_CONFIG = {
  title: 'Wir verwenden Cookies',
  notice: "Zur Verbesserung der Funktion unserer Seite verwenden wir Cookies. Bitte beachten Sie, dass mit deaktivierten Cookies einige Dienste nicht mehr funktionieren (z.B. Formulare absenden).",
  accept: "Cookies akzeptieren",
  url: "https://www.lmu-klinikum.de/cookies/41fa08aa421f0f09",
  url_label: "Ausführliche Hinweise zu Cookies"
};
/**
 * Include a Cookie Notice banner in your page
 * @param {config} | object with notice, accept, url*, url_label* (*=optional)
 */
const CommonCookieNotice = _ref => {
  let {
    config,
    expires
  } = _ref;
  const {
    notice,
    accept,
    url,
    url_label,
    title
  } = config;
  const [accepted, setAccepted] = (0, _react.useState)(document.cookie.includes("acceptedCookies=yes"));
  const onAccept = () => {
    setAccepted(true);
    document.cookie = "acceptedCookies=yes;expires=".concat(expires.toUTCString());
  };
  if (accepted) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cookie-notice"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cookie-notice-content"
  }, /*#__PURE__*/_react.default.createElement("div", null, title && /*#__PURE__*/_react.default.createElement("h3", null, title), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("i", null, notice))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "button-lg",
    onClick: onAccept
  }, accept)), url && url_label && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, "\u279C ", url_label))));
};
CommonCookieNotice.defaultProps = {
  config: DEFAULT_CONFIG,
  title: '',
  expires: new Date(Date.now() + 1000 * 3600 * 365)
};
var _default = CommonCookieNotice;
exports.default = _default;