'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
this.listOfEvents = [];
}

EventEmitter.prototype.on = function(funcName, func) {
	console.log(">>2")
	console.log(funcName)			
	console.log( "[]:", this.listOfEvents)	
		console.log(">>this.listOfEvents[funcName]:",this.listOfEvents[funcName])			

	if(  this.listOfEvents[funcName] ){
			console.log(">>3")
			console.log( "[]:", this.listOfEvents)	

	counter++;
	//this.listOfEvents.push(funcName)
	
	}
};

EventEmitter.prototype.trigger = function(funcName, ...args) {

	if(  this.listOfEvents[funcName] ){
			this.on(funcName);

	}else{
		console.log(">>1")
	this.listOfEvents.push(funcName)
	console.log( "[]:", this.listOfEvents)	
	this.on(funcName);
		
	}

};

 let counter = 0;
 let instance = new EventEmitter();
 instance.trigger('increment'); // counter should be 1
 //instance.trigger('increment'); // counter should be 2
 //console.log(counter)




module.exports = EventEmitter;
