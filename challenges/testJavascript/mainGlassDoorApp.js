// main js
//fetch and display data

//  fetch is based on the web.API ... so without a server (aka via   file:///C:/Users/javier%20olayis/Desktop/index.html)
//     you will get a CORS error
//  ... therefore to make it work "without" a server & "run" from node you need to add the following require:
var fetch = require('node-fetch');
//  ... & now "voila" ... no CORS error!
//  Happy Hunting ~ G2.0

function fetchDataUrl( searchQuery  ){
	/*fetch("https://api.glassdoor.com/api/api.htm?q="+searchQuery+"v=1&format=json&t.p=216072&t.k=gnFZ3pppFCq&action=employers&q=pharmaceuticals&userip=67.245.145.191&useragent=Mozilla").then( function (response){*/
/*	fetch("http://api.glassdoor.com/api/api.htm?t.p=216072&t.k=gnFZ3pppFCq&userip=67.245.145.191&useragent=Mozilla&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1").then( function (response){	
		return response.json();
	}).then(function(data){
		console.log("this is the data", data)
		printOut(data);
		return data
	}).catch(function(data){
		console.log("data err", data);
	});

*/

/*fetch( "http://api.glassdoor.com/api/api.htm?t.p=216072&t.k=gnFZ3pppFCq&userip=67.245.145.191&useragent=Mozilla&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1").then(function(response){*/
fetch("https://api.glassdoor.com/api/api.htm?q="+searchQuery+"v=1&format=json&t.p=216072&t.k=gnFZ3pppFCq&action=employers&q=pharmaceuticals&userip=67.245.145.191&useragent=Mozilla").then(  function (response){
    //c(response.json())

    return response.json();
  }).then( function(data){
    //console.log(data);
    //update the containter
    console.log("this works")
    printOut(data)
    

  }).catch(function(data){
    console.log( data);
  } )



}



fetchDataUrl( "sotware");

function printOut(data){

	for( let elem in data){
		//for(let data in elem)
		console.log( elem+" :  "+ data[elem]);
		if(elem==="response"){
			for(let item in data[elem])console.log("response: "+item+": "+data[elem][item]);
		}

	}

}

