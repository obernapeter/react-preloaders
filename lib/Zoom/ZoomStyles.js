"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sdelay = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n0%,\n40%,\n100% {\n  transform: scaleY(0.6);\n}\n20% {\n  transform: scaleY(1);\n}\n"])));
var ZoomStyles = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 100px auto;\n  width: 50px;\n  height: 60px;\n  text-align: center;\n  font-size: 10px;\n  > div {\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    margin: 2px;\n    background: ", ";\n    animation: ", " 1.2s infinite ease-in-out;\n  }\n  .rect2 {\n    animation-delay: -1.1s;\n  }\n  .rect3 {\n    animation-delay: -1s;\n  }\n  .rect4 {\n    animation-delay: -0.9s;\n  }\n  .rect5 {\n    animation-delay: -0.8s;\n  }\n"])), function (props) {
  return props.color;
}, sdelay);
var _default = ZoomStyles;
exports["default"] = _default;