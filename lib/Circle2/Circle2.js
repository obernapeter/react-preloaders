"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Preloader = require("../Preloader");

var _Circle2Styles = _interopRequireDefault(require("./Circle2Styles"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Circle2 = function Circle2(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("div", {
    className: className
  });
};

Circle2.propTypes = {
  className: _propTypes["default"].string
};
var StyledCircle2 = (0, _styledComponents["default"])(Circle2)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _Circle2Styles["default"]);

var _default = (0, _Preloader.withPreloader)(StyledCircle2);

exports["default"] = _default;