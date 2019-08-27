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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenamenuverticalstring = '\n<ul class="menu-vertical-04">\n                <li class="parent element pr"><a class="element-link gr menu text ripple" href="#" >Link 1<span class="fa fa-chevron-right push-float-right" ></span></a>\n                    <ul class="sub-menu sb" >\n                        <li class="" ><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>\n                        <li class="" ><a class="element-link el ripple" href="#/controller/action1" >SubLink 1</a></li>\n                        <li class="" ><a class="element-link el ripple" href="#/controller/action2" >SubLink 2</a></li>\n                        <li class="" ><a class="element-link el ripple" href="#/controller/action3" >SubLink 3</a></li>\n                        <li class=""><a class="element-link el ripple" href="#/controller/action4" >SubLink 4</a></li>\n                        <li class=""><a class="element-link el ripple" href="#/controller/action5" >SubLink 5</a></li>     \n                    </ul>  \n                    \n                </li>\n                <li class="parent element pr" ><a class="element-link gr menu text ripple" href="#">Link 2<span class="fa fa-chevron-right push-float-right" ></span></a>\n                    <ul class="sub-menu sb" >\n                       <li class=""><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action1" >SubLink 11</a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action2" >SubLink 22</a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action3" >SubLink 33</a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action4" >SubLink 44</a></li>\n                       <li class=""><a class="element-link el ripple" href="#/controller2/action5" >SubLink 55</a></li>\n                    </ul>\n                    \n                </li>\n                <li class="element no-pr" ><a class="element-link gr menu text ripple" href="#/controller/action3">Link 3\n                    <!--\n                    <span class="fa-fix-chevron-right push-float-right" ></span>\n                    -->\n                </a>\n                </li>\n                <li class="parent element pr" ><a class="element-link gr menu text ripple" href="#">Link 4<span class="fa fa-chevron-right push-float-right" ></span></a>\n                    <ul class="sub-menu sb" >\n                       <li class=""><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 1</a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 2</a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 3</a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 4</a></li>\n                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 5</a></li>\n                    </ul> \n                    \n                </li>\n            </ul>\n\n';

var mymenuvertical04 = exports.mymenuvertical04 = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-menu-vertical-04',
    textTemplate: cadenamenuverticalstring,
    cssUrls: ['src/components/menu-vertical/03Menu-vertical-04/03Menu-vertical-04.css'],
    importsUrl: [{ url: 'src/componentsImports/UXScroll.js', typemodule: 'module' }, { url: 'src/componentsImports/UXScrollV.js', typemodule: 'module' }, { url: 'src/componentsImports/bindOn.js', typemodule: 'module' }, { url: 'src/componentsImports/bindElement.js', typemodule: 'module' }, { url: 'src/componentsImports/bindComponent.js', typemodule: 'module' }]
}), _dec(_class = function () {
    function mymenuvertical04() {
        _classCallCheck(this, mymenuvertical04);
    }

    _createClass(mymenuvertical04, [{
        key: 'initevent',
        value: function initevent(options, id) {
            var containerMenu = '.menu-vertical-04';
            console.log(containerMenu);
            $(containerMenu).on("click", ".sb .el,.itm .el", function (event) {
                //event.preventDefault();

                console.log("Estoy en sub-element");
                //".current-element"
                $(containerMenu + " .sb .el," + containerMenu + " .itm .el").removeClass("current-element");
                $(event.target).addClass("current-element");
            });

            $(containerMenu).on("click", ".pr>.gr,.sb .bk", function (event) {
                event.preventDefault();

                console.log("estoy en menu");
                //console.dir($(this).text());
                //$().toggleClass("expand");
                console.dir(event.target);

                $(containerMenu + " .pr .gr").removeClass("current-menu");
                if ($(containerMenu + " .pr").hasClass("expand")) {
                    //console.log(event.target.innerText);
                    //console.dir( $("containerMenu .parent .element-link.expand")[0].innerText);    
                    if (event.target.innerText === $(containerMenu + " .pr.expand")[0].innerText) {
                        console.log("son iguales");
                        $(containerMenu + " .pr").removeClass("expand");
                    } else {
                        console.log("no son iguales");
                        $(containerMenu + " .pr").removeClass("expand");
                        mytimer = setTimeout(function () {
                            $(event.target).addClass("current-menu");
                            $(event.target.parentNode).addClass("expand");
                            clearTimeout(mytimer);
                        }, 300);
                    }
                } else {
                    $(containerMenu).addClass('open-panel');
                    var mytimer = setTimeout(function () {
                        $(event.target).addClass("current-menu");
                        console.dir(event.target.parentNode);
                        $(event.target.parentNode).addClass("expand");

                        clearTimeout(mytimer);
                    }, 50);
                }
            });
            $(containerMenu).on("click", ".sub-menu .back-element", function (e) {
                console.log("estoy en back");

                $(containerMenu + " .pr").removeClass("expand");
                $(containerMenu + " .pr .gr").removeClass("current-menu");

                var mytimer = setTimeout(function () {

                    $(containerMenu).removeClass('open-panel');
                    clearTimeout(mytimer);
                }, 50);
            });
        }
    }]);

    return mymenuvertical04;
}()) || _class);