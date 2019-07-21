
require('font-awesome')
//require('layout')
//require('transition')
require('header01')
//require('buttons')
//require('menu-horizontal')
//require('menu-vertical')
//require('form-login')
//require('form-login-01')
//require('ripple')
//require('panel01')
//require('panel02')
//require('list-collection')
//require('search')
//require('form-fix-basic-01')
//require('pikadaycss')
//require('tethercss')
//require('uxdatalistcss')
var $ = require('jquery')
//var util = require('util01')
// var behaviors = require('behaviors')
//var actions = {}

//util.addNameSpace(actions, require('actions'))

// var components = require('components')

// util.addNameSpace(components, require('menuverticalscroll'))
// util.addNameSpace(components, require('panel-scroll'))

$(function () {
  if ($('.container .pages').data('template')) {
    //var nameaction = $('.container .pages').data('action')
    //actions[nameaction]()
    
    /*
    var container = new components.Container({
      container: '.container .pages',
      pathTemplate: 'src/shared/templ/',
      nametemplate: $('.container .pages').data('template')
    })
    container.promise.then(function (mutation) {
      behaviors.navbuttonsactionsroot02()
      behaviors.menuhorizontal01({})
      behaviors.menuvertical01({
        nameid: '#menu-vertical02',
        containerComponent: '.menu-vertical01'
      })
      var scrollmenu = new components.MenuVerticalScroll({
        nameid: '#menu-vertical02',
        containerComponent: '.menu-vertical01'
      })
      scrollmenu.initevent()

      var cadenascroll = require('../templ/scroll02.html')
      var scroll = new components.Container({
        nameid: '#root ',
        container: '.main .content',
        textTemplate: cadenascroll
      }, {
        renderName: 'renderTemplateRaw'
      })
      scroll.promise.then(function (mutation) {
        var scrollPanel = new components.PanelScroll({
          nameid: '#root ',
          container: '.main .content',
          containerComponent: '.panel-scroll-01',
          //item: '.list-collection li',
          item: '.group .input'
        })
        var cadenaform = require('../templ/form-key-01.html')
        // console.log(cadenaform)
        var form01 = new components.Container({
          container: '#root .panel-scroll-01 .panel-scroll-item',
          textTemplate: cadenaform
        }, {
          renderName: 'renderTemplateRaw'
        })
        form01.create(function (options) {
          actions.formfixbasic01()
          scrollPanel.initevent()
        })
        
        //var fn = Function('panelform01').bind(behaviors)
        //console.dir(fn)
        
        //var cadenalist01 = require('../templ/list-collection.html')
        //var list01=new components.Container({
        //  container: '#root .panel-scroll-01 .panel-scroll-item',
        //  textTemplate: cadenalist01
        //}, {
        //  renderName: 'renderTemplateRaw'
        //})
          
      })
    })
    */
  }
})
