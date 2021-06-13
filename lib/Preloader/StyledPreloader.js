"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PreloaderStyles = _interopRequireDefault(require("./PreloaderStyles"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledPreloader = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _PreloaderStyles["default"]);

function Preloader(_ref) {
  var children = _ref.children,
      background = _ref.background,
      color = _ref.color,
      time = _ref.time,
      customLoading = _ref.customLoading,
      animation = _ref.animation;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var childrenWithProp = _react["default"].Children.map(children, function (child) {
    return _react["default"].cloneElement(child, {
      color: color
    });
  });

  var bodyScroll = function bodyScroll() {
    document.body.style.overflow = loading ? 'hidden' : null;
    document.body.style.height = loading ? '100%' : null;
    document.body.style.width = loading ? '100%' : null;
    document.body.style.position = loading ? 'fixed' : null;
  };

  var generateAnimation = function generateAnimation() {
    var animate = animation && animation.split('-');
    return {
      name: animate && animate[0],
      direction: animate && animate[1]
    };
  };

  var detectBg = function detectBg() {
    if (background === 'blur') {
      return 'rgba(94, 85, 85, 0.32941176470588235)';
    }

    return background;
  };

  bodyScroll();
  (0, _react.useEffect)(function () {
    if (customLoading === false) {
      setTimeout(function () {
        setLoading(false);
      }, time);
    }

    if (customLoading === undefined) {
      document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
          setTimeout(function () {
            setLoading(false);
          }, time);
        }
      };
    }
  }, [customLoading]);
  (0, _react.useEffect)(function () {
    if (background === 'blur') {
      var nodes = Object.values(document.getElementById('preloader').parentNode.childNodes).filter(function (i) {
        return i.id !== 'preloader';
      });
      nodes.forEach(function (el) {
        // eslint-disable-next-line no-param-reassign
        el.style.filter = loading ? 'blur(5px)' : 'blur(0px)';
      });
    }
  }, [loading]);
  return _react["default"].createElement(StyledPreloader, {
    animation: generateAnimation(),
    background: detectBg(),
    loadingStatus: loading,
    id: "preloader"
  }, childrenWithProp);
}

Preloader.propTypes = {
  time: _propTypes["default"].number,
  background: _propTypes["default"].string,
  color: _propTypes["default"].string,
  animation: _propTypes["default"].string,
  children: _propTypes["default"].element,
  customLoading: _propTypes["default"].bool
};
Preloader.defaultProps = {
  time: 1300,
  background: '#f7f7f7',
  color: '#2D2D2D',
  animation: 'fade'
};
var _default = Preloader;
exports["default"] = _default;