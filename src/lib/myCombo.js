'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mycombo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _inputcombo = require('src/shared/templ/inputcombo01.html!text');

var _inputcombo2 = _interopRequireDefault(_inputcombo);

var _datalistmesas = require('src/shared/templ/datalistmesas.html!text');

var _datalistmesas2 = _interopRequireDefault(_datalistmesas);

var _datalistarticulos = require('src/shared/templ/datalistarticulos.html!text');

var _datalistarticulos2 = _interopRequireDefault(_datalistarticulos);

var _listInMemory = require('src/shared/js/listInMemory.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mycombo = exports.mycombo = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-combo',
    textTemplate: _inputcombo2.default,
    cssUrls: ['bower/tether/dist/css/tether.css', 'src/components/panel/04PanelScroll01.css', 'src/components/list/03datalist01.css'],
    importsUrl: ['bower/tether/dist/js/tether.js', { url: 'src/componentsImports/UXDataList.js', typemodule: 'module' }, { url: 'src/componentsImports/UXButtonScroll.js', typemodule: 'module' }]
}), _dec(_class = function () {
    function mycombo() {
        _classCallCheck(this, mycombo);
    }

    _createClass(mycombo, [{
        key: 'initevent',
        value: function initevent(options, id) {
            var scroll;
            var datalist;
            //console.log(id);
            datalist = new controls.UXDataList({
                id: id,
                clearContainer: true,
                /*
                data:(function(id){
                 if (id=="combo01")    
                  return   {articulos:articulos}
                 else if(id=="combo02")
                   return {mesas:mesas}
                })(id),
                */
                /*
                textTemplate:(function(id){
                   if (id=="combo01")
                     return cadenadataarticulos
                   else if (id=="combo02")
                     return cadenadatamesas
                })(id),
                */
                onButtonClick: function onButtonClick(options) {
                    if (id == "combo01") datalist.setData({ articulos: _listInMemory.articulos }, id, _datalistarticulos2.default);else if (id == "combo02") datalist.setData({ mesas: _listInMemory.mesas }, id, _datalistmesas2.default);

                    scroll = new controls.UXButtonScroll({
                        id: id + 'datalist',
                        onItemClick: function onItemClick(value, target) {
                            console.dir(target);
                            //console.log("estoy dentro de onItemClick")
                            datalist.$inputText.val(value);
                            datalist.toggle();
                            scroll.destroy();
                        }
                    });
                },
                onClose: function onClose() {
                    scroll.destroy();
                }
            });
        }
    }]);

    return mycombo;
}()) || _class);