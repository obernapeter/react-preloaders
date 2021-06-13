"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loader = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral([" {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  25% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  75% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n"])));
var loaderInner = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["  {\n  0% {\n    height: 0%;\n  }\n  25% {\n    height: 0%;\n  }\n  50% {\n    height: 100%;\n  }\n  75% {\n    height: 100%;\n  }\n  100% {\n    height: 0%;\n  }\n}\n"])));
var CubeStyles = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border: 4px solid ", ";\n  animation: ", " 2s infinite ease;\n  span {\n    vertical-align: top;\n    display: inline-block;\n    width: 100%;\n    background-color: ", ";\n    animation: ", " 2s infinite ease-in;\n  }\n"])), function (props) {
  return props.color;
}, loader, function (props) {
  return props.color;
}, loaderInner);
var _default = CubeStyles;
exports["default"] = _default;