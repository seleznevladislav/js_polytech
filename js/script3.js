let inputOut = document.querySelector('#cityOut');
let inputIn = document.querySelector('#cityIn');
const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;
let findBtn = document.querySelector('.find');
let time = document.querySelector('#date');
let radioOne = document.querySelector('#Child');
let radioTwo = document.querySelector('#Parent');
const data = {};
const modalForm = function(){
	let openBtn = document.querySelector('.modal-window-btn');
	let modalWndw = document.querySelector('.modal-window');
	let body = document.querySelector('body');
	let cross = document.querySelector('.cross');
	let parentDiv = document.querySelector('.parentDiv');

	

	openBtn.addEventListener('click', function(){
		modalWndw.style.display = 'flex';
		body.style.overflow = 'hidden';
		parentDiv.style.width = '100%';
		parentDiv.style.height = '100%';
		parentDiv.style.background = 'rgba(0,0,0, 0.3)';	
	});
	cross.addEventListener('click', ()=>{
		modalWndw.style.display = '';
		body.style.overflow = '';
		parentDiv.style.width = '';
		parentDiv.style.height = '';
		parentDiv.style.background = '';	
	})
	parentDiv.addEventListener('click', (event)=>{
		// console.log(event.target);
		modalWndw.style.display = '';
	  body.style.overflow = '';
		parentDiv.style.width = '';
		parentDiv.style.height = '';
		parentDiv.style.background = '';	
		modalWndw.stopPropagation;
		// console.log(event.target);
	 })
	 body.addEventListener('click', ()=>{
	 })
	 parentDiv.addEventListener('click', ()=>{

	 })
	 modalWndw.addEventListener('click', (e)=>{
		 e.stopPropagation();
	 })
	 inputOut.addEventListener('blur', checkOut);
	 inputIn.addEventListener('blur', checkIn);
	 findBtn.addEventListener('click',(event)=>buttonFunc(event));
};

function checkOut(){
		if (inputOut.validity.valueMissing){
			document.forms[0].reportValidity();
			inputOut.style.border = '.5px solid red';
			inputOut.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.6)';
			inputOut.setCustomValidity('Поле должно быть заполненым!');
		} else if (!cyrillicPattern.test(inputOut.value)){
			inputOut.setCustomValidity('Только русские буквы!');
			document.forms[0].reportValidity();
			inputOut.style.border = '.5px solid red';
			inputOut.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
		}
		else{
			// inputOut.setCustomValidity('');
			console.log(inputOut.value)
			inputOut.style.border = '.5px solid green';
			inputOut.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
			data[`Город отъезда`] = inputOut.value;
		}
}
function checkIn(){
	if (inputIn.validity.valueMissing){
		document.forms[0].reportValidity();
		inputIn.style.border = '.5px solid red';
		inputIn.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
		inputIn.setCustomValidity('Поле должно быть заполненым!');
	}	else if (!cyrillicPattern.test(inputIn.value)){
		document.forms[0].reportValidity();
		inputIn.setCustomValidity('Только русские буквы!');
		inputIn.style.border = '.5px solid red';
		inputIn.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
	}
	else{
		inputIn.style.border = '.5px solid green';
		inputIn.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
		data[`Город приезда`] = inputIn.value;
	}
}
function buttonFunc(event){
	event.preventDefault();
	data[`Дата`] = time.value;
	if (radioTwo.value === 'on') data[`Тип билета`] = 'Взрослый';
	if (radioOne.value === 'on') data[`Тип билета`] = 'Деткский';
	console.table(data);
}	

modalForm();