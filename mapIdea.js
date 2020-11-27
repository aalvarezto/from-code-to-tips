"use strict"

// Objeto común
const obj = {
	firstName: "Luisito",
	lastName: "Comunica",
	age: 29,
}

/**
* Este va a ser el objeto que 
* vamos a usar en los siguientes
* ejemplos.
*/


// Conversión de Objeto -> Map
const map = new Map(Object.entries(obj))

// Conversión de Map -> Objeto
const obj = Object.fromEntries(map)

/**
* Estos métodos son de gran útilidad 
* para pasar de un objeto a un map 
* (y viceversa) en pocas líneas.
*/

// Creación desde el constructor 
const map = new Map([
	["firstName", "Luisito"],
	["lastName", "Comunica"],
	["age", 29],
])
/**
* El constructor del objeto "Map()" nos
* permite insertar los valores desde un
* array formado por otros arrays con la
* forma "[key, value]".
* 
* new Map([[key1,value1], [key2,value2]])
*/

// El método "map.set()"
const map = new Map()

map.set("firstName", "Luisito")
map.set("lastName", "Comunica")
map.set("age", 29)

/**
* El método .set() nos va a permitir
* insertar o modificar valores en
* nuestra estructura de datos.
*/

// Cadena con ".set()"
const map = new Map()
	.set("firstName", "Luisito")
	.set("lastName", "Comunica")
	.set("age", 29)

/**
* El método .set() devuelve el Map
* completo con sus referencias. Esto
* nos permite encadenar este método
* de forma sucesiva. 
*/

myMap.has("age")
"age" in obj

myMap.get("age")
myObj["age"]
myObj.age


