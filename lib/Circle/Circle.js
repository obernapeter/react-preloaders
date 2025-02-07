"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Preloader = require("../Preloader");

var _CircleStyles = _interopRequireDefault(require("./CircleStyles"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Circle = function Circle(_ref) {
  var className = _ref.className,
      color = _ref.color;
  return _react["default"].createElement("svg", {
    className: className,
    height: "50",
    width: "50"
  }, _react["default"].createElement("circle", {
    className: "path",
    cx: "25",
    cy: "25",
    r: "20",
    stroke: color,
    fill: "none",
    strokeWidth: "2.5",
    strokeMiterlimit: "10"
  }));
};

Circle.propTypes = {
  className: _propTypes["default"].string,
  color: _propTypes["default"].string
};
var StyledCircle = (0, _styledComponents["default"])(Circle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _CircleStyles["default"]);

var _default = (0, _Preloader.withPreloader)(StyledCircle);

exports["default"] = _default;