"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CommonSpinner = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSpinners = require("react-spinners");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CommonSpinner = _ref => {
  let {
    children,
    loading
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sweet-loading",
    style: {
      textAlign: "center"
    }
  }, children, /*#__PURE__*/_react.default.createElement(_reactSpinners.BeatLoader, {
    size: 8,
    loading: loading
  }));
};

exports.CommonSpinner = CommonSpinner;
CommonSpinner.defaultProps = {
  loading: true
};
var _default = CommonSpinner;
exports.default = _default;