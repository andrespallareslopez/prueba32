'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mySlidePanel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
/*
    podemos trabajar tanto con templates react como
    con cadena de texto
*/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _listInMemory = require('src/shared/js/listInMemory.js');

var _slide = require('src/components/slides/slide01.html!text');

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  en el hueco que se ve con el div className="slide-items" ahi es donde
  se va a inyectar los paneles .
*/
var slidePanelContainerReact = _react2.default.createElement(
    'div',
    { className: 'slide-container' },
    _react2.default.createElement(
        'button',
        { className: 'slide-button left' },
        _react2.default.createElement('i', { className: 'fa fa-chevron-left fa-2x' })
    ),
    _react2.default.createElement('div', { className: 'slide-items' }),
    _react2.default.createElement(
        'button',
        { className: 'slide-button right' },
        _react2.default.createElement('i', { className: 'fa fa-chevron-right fa-2x' })
    )
);

var mySlidePanel = exports.mySlidePanel = (_dec = (0, _componentDecorator.Component)({
    selector: "my-slide-panel",
    ReactDOM: _reactDom2.default,
    templateReact: slidePanelContainerReact,
    //textTemplate:cadenaSlidePanel,
    cssUrls: ['src/components/slides/04slide-container.css', 'src/components/list/03List-group-buttons.css'],
    importsUrl: ['bower/hammerjs/hammer.min.js', { url: 'src/componentsImports/componentsslidePanels.js', typemodule: 'module' }]
}), _dec(_class = function () {
    function mySlidePanel() {
        _classCallCheck(this, mySlidePanel);
    }

    _createClass(mySlidePanel, [{
        key: 'initevent',
        value: function initevent(options, id) {
            //console.log("estoy dentro de slidepanel")

            var self = this;
            if (id == "panelCategorias") {
                /******************************** */
                /* le pongo un timerout para que le tiempo */
                /* a calcular bien la anchura, para que le de tiempo
                este componente tiene este problema, captura el
                evento resize y calcula, ajusta el tamaño de los
                cuadros pero en una primera carga, puede encontrarse
                con height y width mas pequeños de lo normal
                */
                var mytimer = setTimeout(function () {
                    DrawPanelReactDetail("categoria", self, _listInMemory.categorias, id);
                }, 350);
            }
        }
    }]);

    return mySlidePanel;
}()) || _class);


function DrawPanelReactDetail(nameDescription, self, datos, id) {
    var slidePanelDetailReact = function slidePanelDetailReact(self, nameDescripcion) {
        //console.log(nameDescripcion)
        return _react2.default.createElement(
            'ul',
            { className: 'slide-container-items' },
            self.sizes.pages.map(function (page, index) {
                return _react2.default.createElement(
                    'li',
                    { className: 'slide-item', key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'list-grp-buttons list-center' },
                        page.slides.map(function (slide, index) {
                            //console.dir(slide);
                            return _react2.default.createElement(
                                'a',
                                { className: 'list-grp-button box-shadow-3', key: index, 'data-codigo': slide.codigo, href: '#' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'list-grp-content-top' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'list-grp-content-text list-grp-context-text-center' },
                                        slide[nameDescripcion]
                                    )
                                )
                            );
                        })
                    )
                );
            })
        );
    };

    var myslidePanelDetail = new controls.slidePanels({
        container: ".slide-container .slide-items",
        ReactDOM: _reactDom2.default,
        nameDescription: nameDescription,
        data: datos,
        templateReact: slidePanelDetailReact
        //textTemplate:cadenaSlidePanelDetail
    });
    //no podemos utilizar en el slidePaneld el initevent, ya 
    //se utiliza internamente, si lo ponemos sobreescribiremos
    //el que hay y el componente dejara de funcionar
    myslidePanelDetail.create(function (options) {
        var self = this;
        //console.log("estoy dentro de slide panel detail")
        //console.log(id)
        //en jquery hay que poner el # delante para detectar el id element
        $("#" + id + " a.list-grp-button").on("click", function (e) {
            e.preventDefault();
            //console.dir(this)
            //console.dir(e.target)
            console.log($(this).data("codigo"));
            var codigo = $(this).data("codigo");
            var url = 'http://185.194.60.156:8085/datasnap/rest/TServerMethods1/GetArticulos/' + codigo;

            $.ajax({
                url: url
            }).done(function (result) {
                //console.dir(result)
                var result = JSON.parse(result);
                var articulos = result.items;
                console.dir(articulos);
            }).fail(function (e) {
                console.dir(e.error);
            }).always(function () {});
        });
    });
}