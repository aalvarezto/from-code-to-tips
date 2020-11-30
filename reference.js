"use strict"

// Variable vs valor

let variable = "primer valor"

const variable2 = {
	segundo: "valor"
}

/**
 * Esto nos va a ayudar a entender a que
 * nos referimos cuando hablamos de 
 * valores en JavaScript.
 */

// Ejemplo de primitivo y no primitivo
const primitive = "a string"

const notPrimitive = {
	an: "object"
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
 * Si queremos modificar una variable que
 * contiene un valor primitivo, debemos 
 * reasignar la variable con el nuevo valor.
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