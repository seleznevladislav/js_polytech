const modalForm = function(){
	let openBtn = document.querySelector('.modal-window-btn');
	let modalWndw = document.querySelector('.modal-window');
	let body = document.querySelector('body');
	let cross = document.querySelector('.cross');
	let form = document.querySelector('form');

	openBtn.addEventListener('click', function(){
		modalWndw.style.display = 'flex';
		body.style.overflow = 'hidden';
		// console.log(modalWndw);
	});
	cross.addEventListener('click', ()=>{
		modalWndw.style.display = '';
		body.style.overflow = '';
	})
	body.addEventListener('click', (event)=>{
	console.log(event.target);
	if ((event.target !== openBtn) && (event.target != modalWndw)){
		modalWndw.style.display = '';
		body.style.overflow = '';
	}	
	 })
};

modalForm();