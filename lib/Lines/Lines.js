"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Preloader = require("../Preloader");

var _LinesStyles = _interopRequireDefault(require("./LinesStyles"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var items = new Array(6).fill('');

var Lines = function Lines(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("ul", null, items.map(function (i, key) {
    return _react["default"].createElement("li", {
      key: key.toString()
    });
  })));
};

Lines.propTypes = {
  className: _propTypes["default"].string
};
var StyledLines = (0, _styledComponents["default"])(Lines)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _LinesStyles["default"]);

var _default = (0, _Preloader.withPreloader)(StyledLines);

exports["default"] = _default;