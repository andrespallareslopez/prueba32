'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mybuttonsearch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenabuttonsearchstring = '\n<form class="form-search push-float-right" >\n  <button id="btn-form-search" class="nav-mobile nav-mobile-search btn-search ripple" >\n    <span class="fa fa-search fa-2x" ></span>\n  </button>\n  <input id="input-search" placeholder="Search..." class="input-search" type="text" />\n  <button id="btn-form-close" class="nav-mobile nav-mobile-search btn-search btn-search-close" >\n    <span class="fa fa-times fa-2x" ></span>\n  </button>\n</form>\n';

var mybuttonsearch = exports.mybuttonsearch = (_dec = (0, _componentDecorator.Component)({
  selector: 'my-button-search',
  textTemplate: cadenabuttonsearchstring,
  cssUrls: ['src/components/search/03search.css']
}), _dec(_class = function () {
  function mybuttonsearch() {
    _classCallCheck(this, mybuttonsearch);
  }

  _createClass(mybuttonsearch, [{
    key: 'initevent',
    value: function initevent(options, id) {
      //console.dir(options)
      $("#" + id + " " + "#btn-form-search").on("click", function (evt) {
        evt.preventDefault();
        $("#" + id + " .form-search").toggleClass("open-search");
      });
      $("#" + id + " " + "#btn-form-close").on("click", function (evt) {
        evt.preventDefault();
        $("#" + id + " " + " .form-search").toggleClass("open-search");
      });
    }
  }]);

  return mybuttonsearch;
}()) || _class);
/*
 $(document).on("click","#btn-form-search",function(evt){
           evt.preventDefault();  
           $(".form-search").toggleClass("open-search");        
             
         });
         $(document).on("click","#btn-form-close",function(evt){
        
           $(".form-search").toggleClass("open-search");
           evt.preventDefault();
         });
*/