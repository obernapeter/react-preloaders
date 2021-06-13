"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate1 = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nfrom {\n  transform: rotate(0deg) scale(0.4, 0.4);\n}\nto {\n  transform: rotate(360deg) scale(0.4, 0.4);\n}\n"])));
var rotate2 = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n"])));
var Circle2Styles = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 200px;\n  position: relative;\n  border: 3px solid transparent;\n  border-radius: 50%;\n  border-top-color: ", ";\n  animation: ", " 0.6s cubic-bezier(0.44, 0.39, 0.32, 1.28) infinite;\n  &:after,\n  :before {\n    content: '';\n    display: block;\n    position: absolute;\n    border: 3px solid transparent;\n    border-radius: 50%;\n  }\n  &:before {\n    animation: ", " 1s linear infinite;\n    top: 20px;\n    bottom: 20px;\n    left: 20px;\n    right: 20px;\n    border-top-color: inherit;\n    filter: brightness(150%);\n  }\n  &:after {\n    animation: ", " 2s linear infinite;\n    top: 43px;\n    bottom: 43px;\n    left: 43px;\n    right: 43px;\n    filter: brightness(180%);\n    border-top-color: inherit;\n  }\n"])), function (props) {
  return props.color;
}, rotate1, rotate2, rotate2);
var _default = Circle2Styles;
exports["default"] = _default;