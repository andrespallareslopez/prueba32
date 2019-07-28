'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mypanelscrollcontent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _scroll = require('src/shared/templ/scroll01.html!text');

var _scroll2 = _interopRequireDefault(_scroll);

var _listInMemory = require('src/shared/js/listInMemory.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mypanelscrollcontent = exports.mypanelscrollcontent = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-panel-scroll-content',
    textTemplate: _scroll2.default,
    cssUrls: ['src/components/panel/04PanelScroll02.css'],
    importsUrl: [{ url: 'src/componentsImports/UXScroll.js', typemodule: 'module' }, { url: 'src/componentsImports/UXPanelScroll.js', typemodule: 'module' }]
}), _dec(_class = function () {
    function mypanelscrollcontent() {
        _classCallCheck(this, mypanelscrollcontent);
    }

    _createClass(mypanelscrollcontent, [{
        key: 'initevent',
        value: function initevent(options, id) {

            //console.log("estoy en mypanelscrollcontent")
            //console.log("id :"+id)
            if (id == "panelMesas") {
                //mylistgrpbuttons.setData(mesas)
                var panelmesasReact = _react2.default.createElement('my-list-grp-buttons', { id: 'list-panel-mesas' });
                var myPanelMesas = new components.container({
                    container: '#tabMesas .panel-scroll-item',
                    ReactDOM: _reactDom2.default,
                    templateReact: panelmesasReact
                });
                myPanelMesas.initevent = function (options, id) {
                    //console.log("estoy en Panel mesas")
                    //console.log("panelMesas Id:"+id)
                    //mylistgrpbuttons.options.data=mesas
                    var $listMesas = $("#list-panel-mesas")[0];
                    //console.dir($listMesas.setData)
                    $listMesas.setData(_listInMemory.mesas, 'list-panel-mesas');
                    //mylistgrpbuttons.setData(mesas,'list-panel-mesas')
                    //$('#list-panel-mesas')[0].render(mylistgrpbuttons.options.templateReact,mesas)
                };

                myPanelMesas.create = function () {
                    //console.log(id)
                    console.log("estoy en panelMesas create");

                    var panel = new controls.UXPanelScroll({
                        id: id,
                        item: ".list-grp-buttons .list-grp-content-top"
                    });
                };
            } else if (id == "panelArticulos") {
                //mylistgrpbuttons.setData(articulos)     
                var panelArticulosReact = _react2.default.createElement('my-list-grp-buttons', { id: 'list-panel-articulos' });
                var myPanelArticulos = new components.container({
                    container: '#tabArticulos .panel-scroll-item',
                    ReactDOM: _reactDom2.default,
                    templateReact: panelArticulosReact
                });
                myPanelArticulos.initevent = function (options, id) {
                    //console.log("estoy en panel Articulos")
                    //console.log("panelArticulos Id:"+id)
                    //mylistgrpbuttons.options.data=articulos
                    //console.dir(mylistgrpbuttons)
                    var $listArticulos = $('#list-panel-articulos')[0];
                    $listArticulos.setData(_listInMemory.articulos, 'list-panel-articulos');
                    //mylistgrpbuttons.setData(articulos,'list-panel-articulos')                                       
                    //$('#list-panel-articulos')[0].render(mylistgrpbuttons.options.templateReact,articulos)
                    //console.dir(mylistgrpbuttons)
                };
                myPanelArticulos.create = function () {
                    console.log("estoy en panelArticulos create");

                    var panel = new controls.UXPanelScroll({
                        id: id,
                        item: ".list-grp-buttons .list-grp-content-top"
                    });
                };
            }
        }
    }]);

    return mypanelscrollcontent;
}()) || _class);