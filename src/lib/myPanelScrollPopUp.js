'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mypanelscrollpopup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenaPanelScrollString = '\n    <button id="btn-footer-menu01" class="nav-mobile center-v push-float-right ripple" >\n    <i class="fa fa-ellipsis-h fa-2x" ></i>\n    </button>\n    <div id="footer01" class="footer-menu" >\n    <div class="panel-scroll" >\n    <div class="panel-scroll-content" >\n    <div class="panel-scroll-item" >\n    <ul id="menupopup01" class="menu-popup01" >\n    <li class="element item itm"><a class="element-link el ripple" href="#/template1">Link 1</a></li>\n    <li class="element item itm"><a class="element-link el ripple" href="#/template2">Link 2</a></li> \n    <li class="element item itm"><a class="element-link el ripple" href="#/template3">Link 3</a></li> \n    <li class="element item itm"><a class="element-link el ripple" href="#/template4">Link 4</a></li> \n    <li class="element item itm"><a class="element-link el ripple" href="#/template5">Link 5</a></li>  \n    <li class="element item itm"><a class="element-link el ripple" href="#/template6">Link 6</a></li> \n    <li class="element item itm"><a class="element-link el ripple" href="#/template7">Link 7</a></li> \n    <li class="element item itm"><a class="element-link el ripple" href="#/template8">Link 8</a></li> \n    <li class="element item itm"><a class="element-link el ripple" href="#/template9">Link 9</a></li> \n    <li class="element item itm"><a class="element-link el ripple" href="#/template10">Link 10</a></li> \n    </ul>\n    </div>\n    </div>\n    <button id="btn-slide-up" class="slide-button-panel top" ><i class="fa fa-chevron-up fa-2x"></i></button>\n    <button id="btn-slide-down" class="slide-button-panel bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>\n    </div>\n    </div>\n';
var mypanelscrollpopup = exports.mypanelscrollpopup = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-panel-scroll-popup',
    textTemplate: cadenaPanelScrollString,
    cssUrls: ['src/components/panel/04PanelScroll02.css', 'src/components/footer/03Menu-popup01.css', 'src/components/footer/04footermenu01.css'],
    importsUrl: [{ url: 'src/componentsImports/componentspanel01.js', typemodule: 'module' }]

}), _dec(_class = function () {
    function mypanelscrollpopup() {
        _classCallCheck(this, mypanelscrollpopup);
    }

    _createClass(mypanelscrollpopup, [{
        key: 'initevent',
        value: function initevent(options, id) {
            console.log("estoy dentro de mypanelscrollpopup");
            //console.log(id)
            /*
            var scrollPanel=new controls.panelScroll({
                nameid:"#root ",
                container:".main .content",
                containerComponent:".panel-scroll-01",
                endScroll:function(){
                  console.log("estoy al final del scroll");
                },
                //scroll:".panel-scroll-content",
                //items:".panel-scroll-item",
                item:".list-collection li"
                //btnup:"#btn-slide-up",
                //btndown:"#btn-slide-down",
                //fnClickElement:clickElementAccordion
             });
             scrollPanel.initevent();
             */
            $("#btn-footer-menu01").click(function (event) {
                console.log("estoy en boton footer");
                event.preventDefault();
                if ($(".footer-menu").hasClass("expand-footer")) {
                    $(".footer-menu").removeClass("expand-footer");
                } else {
                    $(".footer-menu").addClass("expand-footer");
                }
            });
        }
    }, {
        key: 'reloaddata',
        value: function reloaddata(options, id) {
            //console.log("estoy en reload")
            //console.log(id)
        }
    }]);

    return mypanelscrollpopup;
}()) || _class);