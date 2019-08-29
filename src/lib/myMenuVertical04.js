'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mymenuvertical04 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _utilContainer = require('src/componentsImports/utilContainer.js');

var _templatepanelscrollbind = require('src/components/panel/templatepanelscrollbind-01.html!text');

var _templatepanelscrollbind2 = _interopRequireDefault(_templatepanelscrollbind);

var _templatepanelscrollbind3 = require('src/components/panel/templatepanelscrollbind-02.html!text');

var _templatepanelscrollbind4 = _interopRequireDefault(_templatepanelscrollbind3);

var _templatepanelscrollbind5 = require('src/components/panel/templatepanelscrollbind-03.html!text');

var _templatepanelscrollbind6 = _interopRequireDefault(_templatepanelscrollbind5);

var _templatepanelscrollbind7 = require('src/components/panel/templatepanelscrollbind-04.html!text');

var _templatepanelscrollbind8 = _interopRequireDefault(_templatepanelscrollbind7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenatemplatescrollbindstring = '\n\n<div id={{id}} class="wrapper page child" >\n    <div class="nav" data-bind-html="content:onLoadContent">\n        <nav  >\n           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left" data-bind-style="display:cadena" data-bind-on="click:onClick" >\n             <span class="fa fa-chevron-left" ></span>\n             <span class="texto-btn" data-bind-to="text:labelback" > Back</span>\n           </button>\n        </nav>\n    </div>  \n    <div class="main" >\n       <main>\n          <div class="box content" data-bind-html=\'include:src/shared/templ/list-collection.html\' >\n                \n          </div>\n       </main>\n    </div>\n    <div class="footer">\n        <footer  data-bind-html=\'property:textTemplate\'>\n            \n        </footer>\n    </div>\n</div>\n';

var cadenamenuverticalstring = '\n<ul class="menu-vertical-04">\n                <li class="parent element pr"><a class="element-link gr menu text ripple" href="#" >Link 1<span class="fa fa-chevron-right push-float-right" ></span></a>\n                    <ul class="sub-menu sb" >\n                        <li class="" ><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>\n                        <li class="" ><a class="element-link el ripple" href="#/controller/action1" data-panel-id="template01" >SubLink 1</a></li>\n                        <li class="" ><a class="element-link el ripple" href="#/controller/action2" data-panel-id="template02" >SubLink 2</a></li>\n                        <li class="" ><a class="element-link el ripple" href="#/controller/action3" data-panel-id="template03" >SubLink 3</a></li>\n                        <li class=""><a class="element-link el ripple" href="#/controller/action4" data-panel-id="template04" >SubLink 4</a></li>\n                        <li class=""><a class="element-link el ripple" href="#/controller/action5" data-panel-id="template05" >SubLink 5</a></li>     \n                    </ul>  \n                    \n                </li>\n                <li class="parent element pr" ><a class="element-link gr menu text ripple" href="#">Link 2<span class="fa fa-chevron-right push-float-right" ></span></a>\n                    <ul class="sub-menu sb" >\n                       <li class=""><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action1" data-panel-id="template06" >SubLink 11</a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action2"  data-panel-id="template07" >SubLink 22</a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action3"  data-panel-id="template08" >SubLink 33</a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action4"  data-panel-id="template09" >SubLink 44</a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action5"  data-panel-id="template10" >SubLink 55</a></li>\n                    </ul>\n                    \n                </li>\n                <li class="element no-pr" ><a class="element-link gr menu text ripple" href="#/controller/action3">Link 3\n                    <!--\n                    <span class="fa-fix-chevron-right push-float-right" ></span>\n                    -->\n                </a>\n                </li>\n                <li class="parent element pr" ><a class="element-link gr menu text ripple" href="#">Link 4<span class="fa fa-chevron-right push-float-right" ></span></a>\n                    <ul class="sub-menu sb" >\n                       <li class=""><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 1</a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 2</a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 3</a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 4</a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 5</a></li>\n                    </ul> \n                    \n                </li>\n            </ul>\n\n';

var mymenuvertical04 = exports.mymenuvertical04 = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-menu-vertical-04',
    textTemplate: cadenamenuverticalstring,
    cssUrls: ['src/components/menu-vertical/03Menu-vertical-04/03Menu-vertical-04.css'],
    importsUrl: [{ url: 'src/componentsImports/UXScroll.js', typemodule: 'module' }, { url: 'src/componentsImports/UXScrollV.js', typemodule: 'module' }, { url: 'src/componentsImports/UXMenuPanel.js', typemodule: 'module' }, { url: 'src/componentsImports/UXLoadPanel.js', typemodule: 'module' }, { url: 'src/componentsImports/bindOn.js', typemodule: 'module' }, { url: 'src/componentsImports/bindElement.js', typemodule: 'module' }, { url: 'src/componentsImports/bindComponent.js', typemodule: 'module' }]
}), _dec(_class = function () {
    function mymenuvertical04() {
        _classCallCheck(this, mymenuvertical04);
    }

    _createClass(mymenuvertical04, [{
        key: 'initevent',
        value: function initevent(options, id) {
            new controls.UXMenuPanel({ id: id,
                onClickMenu: function onClickMenu(e) {
                    console.log('Estoy en onClickMenu');
                    e.preventDefault();
                    console.log($(e.target).data("panel-id"));
                    console.log("estoy dentro de onclickmenu personalizada");
                    var id = $(e.target).data("panel-id");
                    var template;
                    switch (id) {
                        case 'template01':
                            console.log("estoy en " + id);
                            template = cadenatemplatescrollbindstring;
                            break;
                        case 'template02':
                            console.log("estoy en " + id);
                            template = _templatepanelscrollbind2.default;
                            break;
                        case 'template03':
                            template = _templatepanelscrollbind4.default;
                            break;
                        case 'template04':
                            template = _templatepanelscrollbind6.default;
                            break;
                        case 'template05':
                            template = _templatepanelscrollbind8.default;
                            break;
                        case 'template06':
                            template = '<my-page-collection-01 id="template06"></my-page-collection-01>';
                            break;
                        case 'template07':
                            template = '<my-page-form-01 id="template07" ></my-page-form-01>';
                            break;
                        case 'template08':
                            template = '<my-page-search-01 id="template08" ></my-page-search-01>';
                            break;
                        case 'template09':
                            template = '<my-page-load-spinner-01 id="template09" ></my-page-load-spinner-search-01>';
                            break;
                        case 'template10':

                            break;

                    }

                    new controls.UXLoadPanel({ id: id,
                        textTemplate: function (template) {
                            return template;
                        }(template)
                    });
                }
            });
        }
    }]);

    return mymenuvertical04;
}()) || _class);