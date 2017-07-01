
; (function (ns, values, $) {
  ns.layout02bootstrap = function () {
    var container = new components.Container({
      container: '.container .pages',
      pathTemplate: 'src/shared/templ/',
      nametemplate: $('.container .pages').data('template')  // root29
    })
    container.promise.then(function (mutation) {
      
    })
  }
  ns.layout02 = function () {
    var container = new components.Container({
      container: '.container .pages',
      pathTemplate: 'src/shared/templ/',
      nametemplate: $('.container .pages').data('template')  // root29
    })
    container.promise.then(function (mutation) {
      var navbuttonslayout = $('#root .nav nav').data('behavior')
      console.log(navbuttonslayout)
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
      var nameaction = $('#root .content').data('action')
      ns[nameaction]()
      // ns.panelform01()
    })
  }
  ns.panelform01 = function () {
    var cadenascroll = require('../../../templ/scroll02.html')
    var scroll = new components.Container({
      nameid: '#root',
      container: '.main .content',
      textTemplate: cadenascroll
    }, {
      renderName: 'renderTemplateRaw'
    })
    scroll.promise.then(function (mutation) {
      var scrollPanel = new components.PanelScroll({
        nameid: '#panelprincipal01',
        container: '.main .content',
        containerComponent: '#panelprincipal01.panel-scroll-01',
          // item: '.list-collection li',
        item: '.group .input'
      })

      var cadenaform = require('../../../templ/form-key-01.html')
        // console.log(cadenaform)
      var form01 = new components.Container({
        container: '#root .panel-scroll-01 .panel-scroll-item',
        textTemplate: cadenaform
      }, {
        renderName: 'renderTemplateRaw'
      })
      form01.create(function (options) {
        var nameaction = $('#root .panel-scroll-item').data('action')
        ns[nameaction]()
        // ns.formfixbasic01()
        scrollPanel.initevent()
      })
    })
  }
  ns.formfixbasic01 = function () {
    // console.dir(Inputmask)
    var datos = {
      grupos: [{codgrupo: 1, description: 'Bebida'},
                        {codgrupo: 2, description: 'Pan'},
                        {codgrupo: 3, description: 'Carne'},
                        {codgrupo: 4, description: 'Pescado'},
                        {codgrupo: 5, description: 'Botes'},
                        {codgrupo: 6, description: 'Vinos'},
                        {codgrupo: 7, description: 'Refrescos'},
                        {codgrupo: 8, description: 'Bolleria'},
                        {codgrupo: 9, description: 'Dulces'},
                        {codgrupo: 10, description: 'Frutas'},
                        {codgrupo: 11, description: 'Bizcochos'},
                        {codgrupo: 12, description: 'Pucheros'},
                        {codgrupo: 13, description: 'Tortas'},
                        {codgrupo: 14, description: 'Grano'},
                        {codgrupo: 15, description: 'Pastas'},
                        {codgrupo: 16, description: 'Ensaladas'},
                        {codgrupo: 17, description: 'Pizzas'},
                        {codgrupo: 18, description: 'Horno'},
                        {codgrupo: 19, description: 'Cervezas'},
                        {codgrupo: 20, description: 'Rebozados'},
                        {codgrupo: 21, description: 'Frituras'},
                        {codgrupo: 22, description: 'Yogures'},
                        {codgrupo: 23, description: 'Helados'},
                        {codgrupo: 24, description: 'Licores'},
                        {codgrupo: 25, description: 'Copas'},
                        {codgrupo: 26, description: 'Cafes'},
                        {codgrupo: 27, description: 'Poleos'},
                        {codgrupo: 28, description: 'Hamburguesas'},
                        {codgrupo: 29, description: 'Chips'}]
    }

    $('#form01').submit(function (e) {
      e.preventDefault()
    })
    Inputmask().mask(document.getElementById('fecha1'))
    Inputmask().mask(document.getElementById('fecha'))
    new components.UXDatePicker({
      namefield: 'fecha',
      namepicker: 'calendar1',
      namebutton: 'btn-fecha'
    })
    new components.UXDatePicker({
      namefield: 'fecha1',
      namepicker: 'calendar2',
      namebutton: 'btn-fecha1'
    })
    var cadenadatalist = require('../../../templ/datalist01.html')
    var datalist = new components.UXDataList({
      container: '#datalist01',
      data: datos,
      textTemplate: cadenadatalist,
      namefield: '#busquedatxt',
      namedatalist: '#datalist01',
      namebutton: '#search'
      // btnup: '#btn-slide-up01',
      // btndown: '#btn-slide-down01'
    }, {
      renderName: 'renderTemplateRaw'
    })
    // datalist.initevent()
    var formKey = new components.FormKey({
      nameid: '#form01'
    })

  }
})(this.actions||(this.actions={}),this.values,jQuery
