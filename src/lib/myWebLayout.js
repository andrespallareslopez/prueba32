'use strict';

Object.defineProperty(exports, "__esModule", {
          value: true
});
exports.weblayout = undefined;

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var weblayout = exports.weblayout = (_dec = (0, _componentDecorator.Component)({
          //container:".container .pages",
          selector: 'my-layout',
          pathTemplate: "src/shared/templ/",
          nametemplate: $(".container .pages").data("template"),
          cssUrls: ['src/components/layouts/03layout02/03layout02.css', 'src/components/menu-horizontal/03menu-horizontal01.css', 'src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css', 'src/components/layouts/03layout02/03transition02.css'],
          importsUrl: ["bower/mousetrap/mousetrap.min.js", "node_modules/inputmask/dist/inputmask/inputmask.js", "bower/hammerjs/hammer.min.js", "src/shared/js/behaviors03layout02.js"]
}), _dec(_class = function weblayout() {
          _classCallCheck(this, weblayout);
}) || _class);