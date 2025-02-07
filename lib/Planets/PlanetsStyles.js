"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var spin = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nfrom {\n  transform: rotate(0);\n}\nto{\n  transform: rotate(359deg);\n}\n"])));
var PlanetsStyles = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .orbit {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid ", ";\n    border-radius: 50%;\n  }\n\n  .earth-orbit {\n    width: 165px;\n    height: 165px;\n    animation: ", " 12s linear 0s infinite;\n  }\n\n  .venus-orbit {\n    width: 120px;\n    height: 120px;\n    animation: ", " 7.4s linear 0s infinite;\n  }\n\n  .mercury-orbit {\n    width: 90px;\n    height: 90px;\n    animation: ", " 3s linear 0s infinite;\n  }\n\n  .planet {\n    position: absolute;\n    top: -5px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: ", ";\n  }\n\n  .sun {\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    background-color: #ffab91;\n  }\n"])), function (_ref) {
  var color = _ref.color;
  return color.split('')[0] === '#' ? "".concat(color, "4d") : color;
}, spin, spin, spin, function (_ref2) {
  var color = _ref2.color;
  return color;
});
var _default = PlanetsStyles;
exports["default"] = _default;