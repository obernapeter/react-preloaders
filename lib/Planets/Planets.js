"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Preloader = require("../Preloader");

var _PlanetsStyles = _interopRequireDefault(require("./PlanetsStyles"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Planets = function Planets(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("div", {
    className: "earth-orbit orbit"
  }, _react["default"].createElement("div", {
    className: "planet earth"
  }), _react["default"].createElement("div", {
    className: "venus-orbit orbit"
  }, _react["default"].createElement("div", {
    className: "planet venus"
  }), _react["default"].createElement("div", {
    className: "mercury-orbit orbit"
  }, _react["default"].createElement("div", {
    className: "planet mercury"
  }), _react["default"].createElement("div", {
    className: "sun"
  })))));
};

Planets.propTypes = {
  className: _propTypes["default"].string
};
var StyledPlanets = (0, _styledComponents["default"])(Planets)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _PlanetsStyles["default"]);

var _default = (0, _Preloader.withPreloader)(StyledPlanets);

exports["default"] = _default;