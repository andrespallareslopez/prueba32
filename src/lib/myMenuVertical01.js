'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mymenuvertical01 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _utilContainer = require('src/componentsImports/utilContainer.js');

var _tmplverticalmenu = require('src/components/menu-vertical/tmplverticalmenu01.html!text');

var _tmplverticalmenu2 = _interopRequireDefault(_tmplverticalmenu);

var _templatepanelscrollbind = require('src/components/panel/templatepanelscrollbind.html!text');

var _templatepanelscrollbind2 = _interopRequireDefault(_templatepanelscrollbind);

var _templatepanelscrollbind3 = require('src/components/panel/templatepanelscrollbind-01.html!text');

var _templatepanelscrollbind4 = _interopRequireDefault(_templatepanelscrollbind3);

var _templatepanelscrollbind5 = require('src/components/panel/templatepanelscrollbind-02.html!text');

var _templatepanelscrollbind6 = _interopRequireDefault(_templatepanelscrollbind5);

var _templatepanelscrollbind7 = require('src/components/panel/templatepanelscrollbind-03.html!text');

var _templatepanelscrollbind8 = _interopRequireDefault(_templatepanelscrollbind7);

var _templatepanelscrollbind9 = require('src/components/panel/templatepanelscrollbind-04.html!text');

var _templatepanelscrollbind10 = _interopRequireDefault(_templatepanelscrollbind9);

var _templatepanelscrollbind11 = require('src/components/panel/templatepanelscrollbind-05.html!text');

var _templatepanelscrollbind12 = _interopRequireDefault(_templatepanelscrollbind11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenatemplatescrollbindstring = '\n\n<div id={{id}} class="wrapper page child" >\n    <div class="nav" data-bind-html="content:onLoadContent">\n        <nav  >\n           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left" data-bind-style="display:cadena" data-bind-on="click:onClick" >\n             <span class="fa fa-chevron-left" ></span>\n             <span class="texto-btn" data-bind-to="text:labelback" > Back</span>\n           </button>\n        </nav>\n    </div>  \n    <div class="main" >\n       <main>\n          <div class="box content" data-bind-html=\'include:src/shared/templ/list-collection.html\' >\n                \n          </div>\n       </main>\n    </div>\n    <div class="footer">\n        <footer  data-bind-html=\'property:textTemplate\'>\n            \n        </footer>\n    </div>\n</div>\n';

var cadenamenuverticalstring = '\n\n<div class="menu-vertical01"  >\n <div class="container-menu-scroll" >\n                <ul class="items " >\n                    <li class="parent element pr"><a class="element-link gr ripple" href="#" >Link 1<span class="fa fa-chevron-right push-float-right" ></span></a>\n                         <div class="sub-menu sb" >\n                           <a class="element-link el ripple" href="#/plantilla1" data-panel-id="template01" >SubLink 1</a>\n                           <a class="element-link el ripple" href="#/plantilla2" data-panel-id="template02" >SubLink 2</a>\n                           <a class="element-link el ripple" href="#/plantilla3" data-panel-id="template03" >SubLink 3</a>\n                           <a class="element-link el ripple" href="#/plantilla4" data-panel-id="template04" >SubLink 4</a>\n                           <a class="element-link el ripple" href="#/plantilla5" data-panel-id="template05" >SubLink 5</a>\n                         </div>\n                    </li>\n                    <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 2<span class="fa fa-chevron-right push-float-right" ></span></a>\n                         <div class="sub-menu sb" >\n                           <a class="element-link el ripple" href="#/plantilla6" data-panel-id="template06" >SubLink 1</a>\n                           <a class="element-link el ripple" href="#/plantilla7" data-panel-id="template07" >SubLink 2</a>\n                           <a class="element-link el ripple" href="#/plantilla8" data-panel-id="template08" >SubLink 3</a>\n                           <a class="element-link el ripple" href="#/plantilla9" data-panel-id="template09" >SubLink 4</a>\n                           <a class="element-link el ripple" href="#/plantilla10" data-panel-id="template10" >SubLink 5</a>\n                         </div>\n                    </li>\n                    <li class="element item itm" ><a class="element-link el ripple" href="#/plantilla11">Link 3\n                        <!--\n                        <span class="fa-fix-chevron-right push-float-right" ></span>\n                        -->\n                    </a>\n                    \n                    </li>\n                    <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 4<span class="fa fa-chevron-right push-float-right" ></span></a>\n                       <div class="sub-menu sb" >\n                           <a class="element-link el ripple" href="#" >SubLink 1</a>\n                           <a class="element-link el ripple" href="#" >SubLink 2</a>\n                           <a class="element-link el ripple" href="#" >SubLink 3</a>\n                           <a class="element-link el ripple" href="#" >SubLink 4</a>\n                           <a class="element-link el ripple" href="#" >SubLink 5</a>\n                       </div>\n                    </li>\n                     <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 5<span class="fa fa-chevron-right push-float-right" ></span></a>\n                       <div class="sub-menu sb" >\n                           <a class="element-link el ripple" href="#" >SubLink 1</a>\n                           <a class="element-link el ripple" href="#" >SubLink 2</a>\n                           <a class="element-link el ripple" href="#" >SubLink 3</a>\n                           <a class="element-link el ripple" href="#" >SubLink 4</a>\n                           <a class="element-link el ripple" href="#" >SubLink 5</a>\n                       </div>\n                    </li>\n                </ul>\n              </div>\n              <button id="btn-slide-up" class="slide-button top" ><i class="fa fa-chevron-up fa-2x"></i></button>\n              <button id="btn-slide-down" class="slide-button bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>\n    </div>  \n\n';

var mymenuvertical01 = exports.mymenuvertical01 = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-menu-vertical-01',
    textTemplate: cadenamenuverticalstring,
    cssUrls: ['src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css', 'src/components/list/03List-collections.css'],
    importsUrl: [{ url: 'src/componentsImports/UXScroll.js', typemodule: 'module' }, { url: 'src/componentsImports/UXScrollV.js', typemodule: 'module' }, { url: 'src/componentsImports/UXAccordeon.js', typemodule: 'module' }, { url: 'src/componentsImports/bindOn.js', typemodule: 'module' }, { url: 'src/componentsImports/bindElement.js', typemodule: 'module' }, { url: 'src/componentsImports/bindComponent.js', typemodule: 'module' }]
}), _dec(_class = function () {
    function mymenuvertical01() {
        _classCallCheck(this, mymenuvertical01);
    }

    _createClass(mymenuvertical01, [{
        key: 'initevent',
        value: function initevent(options, id) {
            /* 
            new controls.UXButtonScroll({
                id:id,
                containerComponent:".menu-vertical01",
                items:".items",
                scroll:".container-menu-scroll",
                item:".gr"
            })
            */
            /*
            new controls.UXScroll({
                id:id,
                containerComponent:".menu-vertical01",
                items:".items",
                scroll:".container-menu-scroll",
                item:".gr" 
            })
            */
            new controls.UXScrollV({
                id: id
            });
            new controls.UXAccordeon({
                id: id,
                onClickMenu: function onClickMenu(e) {
                    //console.dir(e)
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
                            template = _templatepanelscrollbind4.default;
                            break;
                        case 'template03':
                            template = _templatepanelscrollbind6.default;
                            break;
                        case 'template04':
                            template = _templatepanelscrollbind8.default;
                            break;
                        case 'template05':
                            template = _templatepanelscrollbind10.default;
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

                            break;
                        case 'template10':

                            break;

                    }
                    new controls.UXLoadPanel({
                        id: id,
                        textTemplate: function (template) {
                            return template;
                        }(template)
                    });

                    //template = cadenatemplatescrollbindstring
                    /*
                    var html=util.buildtemplate({
                        source:template,
                        data:{id:id},
                        typeInsertHTML:components.enumInsertHTML.customElement
                    })
                    */

                    //console.dir(html)

                    /*
                    removeContainer(self.options.containerView); 
                    */
                }

            });
        }
    }]);

    return mymenuvertical01;
}()) || _class);