/// <reference path="../../../typings/index.d.ts" />

;(function(ns,values,$){
   
   ns.searchaction01=function(opcion){
        console.log("estoy en searchaction01");
        //console.dir(values.router);
        $("#input-search").on("keydown",function(e){
          if ( !$(".form-search").hasClass("open-progress")){
             $(".form-search").addClass("open-progress"); 
          }  
        });
        $("#input-search").on("keyup", debounce(function (e) {
          //console.dir(e);
          //console.dir($("#input-search").val());
          values.router.setRoute("/grupos/grupobySearch/"+$("#input-search").val());
          $(".form-search").removeClass("open-progress");
          
        },300));
   };
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
   
})(this.actions||(this.actions={}),this.values,jQuery);

