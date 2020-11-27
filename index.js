"use strict"

// idea #1 ======================================= 
// ideas sobre referencia en JS

const myObject = {}

const myReference = myObject


// idea #2
// ideas sobre los objetos más rápidos de JS

const myMap = new Map()

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
