"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n"])));
var dash = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124;\n  }\n"])));
var CircleStyles = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  animation: ", " 2s linear infinite;\n  height: 50px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transition: all 0.2s ease;\n  transform: translate(-50%, -50%) rotate(360deg);\n  width: 50px;\n  z-index: 4;\n  .path {\n    stroke-dasharray: 1, 500;\n    stroke-dashoffset: 0;\n    animation: ", " 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n    stroke-linecap: round;\n  }\n"])), rotate, dash);
var _default = CircleStyles;
exports["default"] = _default;