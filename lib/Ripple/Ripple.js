"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Preloader = require("../Preloader");

var _RippleStyles = _interopRequireDefault(require("./RippleStyles"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Ripple = function Ripple(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("div", null), _react["default"].createElement("div", null));
};

Ripple.propTypes = {
  className: _propTypes["default"].string
};
var StyledRipple = (0, _styledComponents["default"])(Ripple)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _RippleStyles["default"]);

var _default = (0, _Preloader.withPreloader)(StyledRipple);

exports["default"] = _default;