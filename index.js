"use strict"

// idea #1 ======================================= 
// ideas sobre referencia en JS

const myObject = {}
const myReference = myObject


// idea #2
// ideas sobre los objetos más rápidos de JS
const myMap = new Map()

const myObj = {
	ke1: value1,
	ke2: value2,
	ke3: value3,
}

// desde el constructor se usan tuplets key/value dentro de un array

const myMap = new Map([
	[key1, value1],
	[key2, value2],
	[key3, value3],
])

// desde la función "set" 

const myMap = new Map()
	.set(key1, value1)
	.set(key2, value2)
	.set(key3, value3)

const mySet = new Set()

// idea #3 =======================================
// ideas sobre closure

const closureCounter = (initialValue = 0) => {
	let counter = initialValue
	
	return () => {
		counter++
		return counter
	}
}

// idea #4 =======================================
// ideas sobre como funcionan algunos patrones de React por detrás

const fakeUseState = (initialState) => {
	let state = initialState	
	
	return [
		() => state,
		newState => state = newState
	]
}

const [myState, setMyState] = fakeUseState(1)


