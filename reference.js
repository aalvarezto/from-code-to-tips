"use strict"

/*

Esto forma parte de la serie de: Valores y Referencia en JavaScript.

El concepto de valor (value) es es simple pero potente, es uno de los pilares del lenguaje. 

Su conocimiento es fundamental, al punto que el desconocimiento puede llevarnos a errores (bugs) bastante difíciles de arreglar si no comprendemos estos comportamientos clave de JavaScript.

La idea es concentrarse en como se comporta el lenguaje al invocar, asignar o reasignar una variable.

*/

// Variable vs valor

let variable = "primer valor"

const variable2 = {
	data: "segundo valor"
}

/**
* Esto nos va a ayudar a entender a que
* nos referimos cuando hablamos de 
* valores en JavaScript.
*/

// Ejemplo de primitivo y no primitivo
const primitive = "una string"

const notPrimitive = {
	data: "un objeto"
}

/**
* En JavaScript tenemos dos tipos de
* valores, primitivos y no primitivos
*/


// Primitivos
String
Number
Boolean
BigInt
Symbol
undefined

/**
* Por definición existen estos 6 tipos
* de primitivos. 
*/


// Caso "null"

null

/**
* null también es considerado primitivo,
* pero tiene algunas consideraciones de 
* tipo. 
* 
* Probar: console.log(typeof null)
*/

// Algunos ejemplos de no primitivos

Object
Array
Function
Map()
Set()

/**
* Estos son sólo algunos ejemplos. Pero
* cualquier tipo de valor que no sea un
* primitivo entra en esta categoría.
*/

// Los primitivos son inmutables
let str = "un ejemplo"
str.toUpperCase()
console.log(str) // "un ejemplo"

str = str.toUpperCase()
console.log(str) // "UN EJEMPLO"

/**
* Los primitivos son siempre inmutables.
* 
* Al modificar una variable que contiene
* un valor primitivo, siempre reasignamos
* la variable con el nuevo valor.
*/

// Los No primitivos son mutables

const arr = ["soy"]
arr.push("mutable")
console.log(arr) // ["soy", "mutable"]

/**
* Los valores no primitivos conservan
* su referencia hacia el valor original.
*/

// Copias por valor
// VS
// Copias por referencia

/**
* IMPORTANTE!
* 
* Los primitivos son copiados por valor.
* 
* Los no primitivos son copiados por 
* referencia.
*/

// Caso de copia por valor
let A = "soy inmutable"
let B = A

console.log(A) // "soy inmutable"
console.log(B) // "soy inmutable"

B = "pero reasignable"

console.log(A) // "soy inmutable"
console.log(B) // "pero reasignable"

// Caso de copia por referencia
let A = { data: "soy referencia" }
let B = A

console.log(A.data) // "soy referencia"
console.log(B.data) // "soy referencia"

B.data = "sigo en original"

console.log(A.data) // "sigo en original"
console.log(B.data) // "sigo en original"