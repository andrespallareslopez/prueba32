# Apuntes Javascript

### **Number Formatting Using string.replace in JavaScript

https://blog.tompawlak.org/number-currency-formatting-javascript

___

- Peligros con el ámbito de las variables
- Técnicas eficientes de programación orientada a        - objetos con JavaScript: constructores, prototipos,     - herencia, encapsulación, polimorfismo, espacios de       nombre, interfaces...
- Clausuras y otros conceptos importantes
- Controlando el valor de contexto
- Reflexión e introspección
- Trabajo con el DOM: jerarquías, recursión,               colecciones “vivas” y “estáticas”, localización de       elementos, modificación dinámica multi-navegador…
- Manejo avanzado de eventos en páginas web: gestión       unificada y multi-navegador
- Subclasificación
- Trabajo avanzado con funciones
- Funciones anónimas
-  Modularización y organización de código
-  Inyección de dependencias
-  Optimización de carga de scripts
-  JSON, JSONP, CORS
-  El modo estricto de JavaScript
-  Uso práctico de la consola y sus comandos
-  Nuevas funciones y tipos de datos en ES6
-  Nuevas formas de declarar variables y su efecto en el    ámbito, this, etc…
-  Nuevos tipos de colecciones y agrupamientos de           información
- Promesas
- Operador flecha, pérdida de this, uso de lambdas
- Mejoras y cambios en definición y notación de objetos
-  Uso de literales de cadena y plantillas
-  Símbolos y sus aplicaciones avanzadas
-  Weakmaps
-  Desestructuración de datos y el operador “spread”
- Nuevos tipos de bucles y sus aplicaciones
- Iteradores y generadores
-  Programación orientada a objetos en ECMAScript 2015
-  Creación y uso de proxies.
-  Transpilación a ES5

___

### **Javascript - Regex to validate date format [duplicate]**

http://stackoverflow.com/questions/7388001/javascript-regex-to-validate-date-format

~~~
var regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

"22-03-1981".match(dateReg) // matches
"22.03-1981".match(dateReg) // does not match
"22.03.1981".match(dateReg) // matches
~~~

~~~
function isDate(str) {    
  var parms = str.split(/[\.\-\/]/);
  var yyyy = parseInt(parms[2],10);
  var mm   = parseInt(parms[1],10);
  var dd   = parseInt(parms[0],10);
  var date = new Date(yyyy,mm-1,dd,0,0,0,0);
  return mm === (date.getMonth()+1) && 
         dd === date.getDate() && 
       yyyy === date.getFullYear();
}
~~~

~~~
function mmIsDate(str) {

    if (str == undefined) { return false; }

    var parms = str.split(/[\.\-\/]/);

    var yyyy = parseInt(parms[2], 10);

    if (yyyy < 1900) { return false; }

    var mm = parseInt(parms[1], 10);
    if (mm < 1 || mm > 12) { return false; }

    var dd = parseInt(parms[0], 10);
    if (dd < 1 || dd > 31) { return false; }

    var dateCheck = new Date(yyyy, mm - 1, dd);
    return (dateCheck.getDate() === dd && (dateCheck.getMonth() === mm - 1) && dateCheck.getFullYear() === yyyy);

};
~~~

___

### **JavaScript Decimal Place Restriction With RegEx**

http://stackoverflow.com/questions/468655/javascript-decimal-place-restriction-with-regex


The . character has special meaning in RegEx so needs escaping.

~~~
/^(?:\d*\.\d{1,2}|\d+)$/
~~~

This matches 123.45, 123.4, 123 and .2, .24 but not emtpy string, 123., 123.456


___

### **Display two decimal places, no rounding**

http://stackoverflow.com/questions/4187146/display-two-decimal-places-no-rounding

~~~
var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
~~~

___


