"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Preloader = require("../Preloader");

var _ZoomStyles = _interopRequireDefault(require("./ZoomStyles"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var items = new Array(5).fill('');

var Zoom = function Zoom(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("div", {
    className: className
  }, items.map(function (i, key) {
    return _react["default"].createElement("div", {
      key: key.toString(),
      className: "rect".concat(key + 1)
    });
  }));
};

Zoom.propTypes = {
  className: _propTypes["default"].string
};
var StyledZoom = (0, _styledComponents["default"])(Zoom)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _ZoomStyles["default"]);

var _default = (0, _Preloader.withPreloader)(StyledZoom);

exports["default"] = _default;