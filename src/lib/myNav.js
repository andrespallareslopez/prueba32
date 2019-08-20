'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.Nav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _componentDecoratorInput = require('src/componentsImports/componentDecoratorInput.js');

var _nav = require('src/shared/templ/nav01.html!text');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
   var desc = {};
   Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
   });
   desc.enumerable = !!desc.enumerable;
   desc.configurable = !!desc.configurable;

   if ('value' in desc || desc.initializer) {
      desc.writable = true;
   }

   desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
   }, desc);

   if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
   }

   if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
   }

   return desc;
}

var cadenanavstring = '\n<button type="button" id="btn-toggle-left" class="nav-mobile ripple push-float-left">\n   <i class="fa fa-bars fa-2x" ></i>  \n</button>\n\n<button type="button" id="btn-toggle-right" class="nav-mobile ripple push-float-right">\n   <i class="fa fa-list fa-2x" ></i>\n</button>\n<button type="button" id="btn-toggle-sign-in" class="nav-mobile ripple push-float-right">\n   <i class="fa fa-sign-in fa-2x" ></i>  \n</button>\n<my-button-search id="buttonsearch01" ></my-button-search>\n\n';

var Nav = exports.Nav = (_dec = (0, _componentDecorator.Component)({
   selector: 'my-nav',
   textTemplate: cadenanavstring,
   cssUrls: ['src/components/buttons/03buttonmovile01.css'],
   importsUrl: ["src/shared/js/behaviors03layout02.js"]
}), _dec2 = (0, _componentDecoratorInput.Input)('prop1'), _dec(_class = (_class2 = function () {
   function Nav() {
      _classCallCheck(this, Nav);
   }

   _createClass(Nav, [{
      key: 'initevent',
      value: function initevent(options) {
         //console.dir(options)
         console.log("estoy en initevent en nav");
         //console.dir(window.behaviors)
         window.behaviors.navButtons03layout02();
         this.title = "titulo 1";
      }
   }, {
      key: 'afterinit',
      value: function afterinit(options, id) {
         console.log('estoy en afterinit!! en nav');
      }
   }, {
      key: 'title',
      get: function get() {
         return this.titulo;
      },
      set: function set(value) {
         this.titulo = value;
      }
   }]);

   return Nav;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'title', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'title'), _class2.prototype)), _class2)) || _class);