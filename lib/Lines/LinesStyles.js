"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sequence1 = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n0% {\n  height: 10px;\n}\n50% {\n  height: 50px;\n}\n100% {\n  height: 10px;\n}\n"])));
var sequence2 = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n0% {\n  height: 20px;\n}\n50% {\n  height: 65px;\n}\n100% {\n  height: 20px;\n}\n"])));
var LinesStyles = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 50%;\n  width: 90px;\n  ul {\n    margin: 0;\n    list-style: none;\n    width: 90px;\n    position: relative;\n    padding: 0;\n    height: 10px;\n    li {\n      position: absolute;\n      width: 2px;\n      height: 0;\n      background: ", ";\n      bottom: 0;\n      &:nth-child(1) {\n        left: 0;\n        animation: ", " 1s ease infinite 0;\n      }\n      &:nth-child(2) {\n        left: 15px;\n        animation: ", " 1s ease infinite 0.1s;\n      }\n      &:nth-child(3) {\n        left: 30px;\n        animation: ", " 1s ease-in-out infinite 0.2s;\n      }\n      &:nth-child(4) {\n        left: 45px;\n        animation: ", " 1s ease-in infinite 0.3s;\n      }\n      &:nth-child(5) {\n        left: 60px;\n        animation: ", " 1s ease-in-out infinite 0.4s;\n      }\n      &:nth-child(6) {\n        left: 75px;\n        animation: ", " 1s ease infinite 0.5s;\n      }\n    }\n  }\n"])), function (props) {
  return props.color;
}, sequence1, sequence2, sequence1, sequence2, sequence1, sequence2);
var _default = LinesStyles;
exports["default"] = _default;