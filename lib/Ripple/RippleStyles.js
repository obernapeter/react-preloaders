"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ripple = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nfrom {\n  transform: scale(0);\n  opacity: 1;\n}\n\nto {\n  transform: scale(1);\n  opacity: 0;\n}\n"])));
var Ripple = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n  div {\n    opacity:0;\n    animation: 1.5s ", " infinite;\n    position: absolute;\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n    border: 5px solid ", ";\n    &:nth-child(2) {\n      animation-delay: 0.5s;\n    }\n  }\n"])), ripple, function (props) {
  return props.color;
});
var _default = Ripple;
exports["default"] = _default;