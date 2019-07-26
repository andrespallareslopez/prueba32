'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.mycalendar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _inputcalendar = require('src/shared/templ/inputcalendar01.html!text');

var _inputcalendar2 = _interopRequireDefault(_inputcalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mycalendar = exports.mycalendar = (_dec = (0, _componentDecorator.Component)({
   selector: 'my-calendar',
   textTemplate: _inputcalendar2.default,
   cssUrls: ['bower/pikaday/css/pikaday.css', 'bower/tether/dist/css/tether.css'],
   importsUrl: ['bower/moment/moment.js', 'bower/pikaday/pikaday.js', 'bower/tether/dist/js/tether.js', { url: 'src/componentsImports/UXDatePicker.js', typemodule: 'module' }]
}), _dec(_class = function () {
   function mycalendar() {
      _classCallCheck(this, mycalendar);
   }

   _createClass(mycalendar, [{
      key: 'initevent',
      value: function initevent(options, id) {
         //console.log("estoy aqui en init event con id:"+id)

         new controls.UXDatePicker({
            id: id
         });
      }
   }]);

   return mycalendar;
}()) || _class);