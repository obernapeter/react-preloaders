"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sdelay = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%,\n  40%,\n  100% {\n    transform: translateY(-10px);\n    -webkit-transform: translateY(-10px);\n  }\n  20% {\n    transform: translateY(-20px);\n    -webkit-transform: translateY(-20px);\n  }\n"])));
var DotsStyles = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 30px;\n  text-align: center;\n  font-size: 10px;\n  > div {\n    background: ", ";\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    margin: 0 10px;\n    display: inline-block;\n    animation: ", " 0.7s infinite ease-in-out;\n  }\n  .circ2 {\n    animation-delay: -0.6s;\n  }\n  .circ3 {\n    animation-delay: -0.5s;\n  }\n  .circ4 {\n    animation-delay: -0.4s;\n  }\n  .circ5 {\n    animation-delay: -0.3s;\n  }\n"])), function (props) {
  return props.color;
}, sdelay);
var _default = DotsStyles;
exports["default"] = _default;