"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Preloader = require("../Preloader");

var _CubeStyles = _interopRequireDefault(require("./CubeStyles"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Cube = function Cube(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("span", null));
};

Cube.propTypes = {
  className: _propTypes["default"].string
};
var StyledCube = (0, _styledComponents["default"])(Cube)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _CubeStyles["default"]);

var _default = (0, _Preloader.withPreloader)(StyledCube);

exports["default"] = _default;