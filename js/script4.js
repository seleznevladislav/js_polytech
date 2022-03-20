let button = document.querySelector('.modal-window-btn');
const urlRequest = 'https://jsonplaceholder.typicode.com/photos';
const post = document.querySelector('.posts');

function sendRequest(method, url){
	return fetch(url)
		.then( response => {
			return response.json();
		})
}

function show(array){
	let key;
	array = array.splice(0, 12);
	for (key in array){
		
		 post.innerHTML += `
				<li class="listing">
					<div class="listingDiv">
						<h4>${array[key].title}</h4>
						<img src="${array[key].url}" style="height: 160px; width: 240px;">
					</div>
				</li>
		 `
		console.log(key);
	}
}

button.addEventListener('click', ()=>{
	sendRequest('GET', urlRequest)
	.then( data =>{ console.log(data.splice(0, 10))
		return data})
	.then( array => show(array))
	.catch( err =>{ console.error(err)});
})
