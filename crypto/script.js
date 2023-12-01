var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
	async: true,
	scrossDomain: true,
	url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
	method: "GET",
	headers: {},
};

$.ajax(settings).done(function (response) {
	btc.innerHTML = response.bitcoin.usd;
	eth.innerHTML = response.ethereum.usd;
	doge.innerHTML = response.dogecoin.usd;
});

// function isMyName() {
// 	const mynameDiv = document.createElement("div");
// 	mynameDiv.classList.add("my-name");
// 	mynameDiv.textContent = `I am called Atanga Cheboh Clifford`;
// 	document.body.appendChild(mynameDiv);
// }
// let my = isMyName();
// console.log(my);
// // let p = new Promise((resolve, reject) => {
// // 	let a = 1 + 1;
// // 	if (a == 2) {
// // 		resolve("success");
// // 	} else {
// // 		reject("Failed");
// // 	}
// // });
// // //then is when the code success and catch is when the code fails
// // p.then((message) => {
// // 	console.log("this is the then " + message);
// // }).catch((message) => {
// // 	console.log("This is in the catch " + message);
// // });

// const img = document.querySelector("img");
// fetch("https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats", {
// 	mode: "cors",
// })
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then(function (response) {
// 		img.src = response.data.images.original.url;
// 	});
