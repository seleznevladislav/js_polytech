/////////////////////////////////////////1
function absValue(x) {
	if (x >= 0) return x;
	if (x < 0) return x / -1;
}

const number = absValue(0);
//console.log(number);
////////////////////////////////////////2
function isPolindrome(word) {
	let answer1 = '';
	let answer2 = '';
	for (let i in word){
		answer1 += word[i];
	}
	for (let i = word.length-1; i >= 0; i--){
		answer2 += word[i];
	}
	if (answer1 == answer2){
		console.log('true');
	} else {
		console.log('false');
	}
}
//const word = isPolindrome('довод');
////////////////////////////////////////3
function matrixAddition(matrix1, matrix2){
	let answerFinal = '';
	if (matrix1.length == matrix2.length){
		for (let i = 0; i < matrix1.length; i++){
			if (matrix1[i].length == matrix2[i].length){
				for (let x = 0; x < matrix1.length; x++){
					for (let y = 0; y < matrix1[x].length; y++){
						const answer = matrix1[x][y] + matrix2[x][y];
					 	answerFinal += `${answer}\t`;
					}
					answerFinal += '\n';
				}
				console.log(answerFinal);
			}
			break;
		}
	} else {
		console.log('Операция не выполнима');
	}
}

// const arr1 = [[1,2,3], [2,4]];

// const x = arr1[0][0] + arr1[1][0];
// console.log(arr1[0].length);

// matrixAddition([[1,2]], [[9,8],[7,6]]);
////////////////////////////////////////4
const obj = {
	group:  '201-323',
	lastName: 'Селезнев',
	firstName: 'Владислав'
};
// console.log(`Список свойств: ${Object.keys(obj)}.`);
// console.log(`Студент ${obj['firstName']} ${obj['lastName']} учится в ${obj['group']} группе.`);
////////////////////////////////////////5
const slider = function(){
	let arrowRight = document.getElementById('rightArrow');
	let arrowLeft = document.getElementById('leftArrow');
	let arr = document.querySelectorAll('.natureImg');
	let count = 0;
	arr[count].style.display = 'flex';
	arrowRight.addEventListener('click', () =>{
		if (arr.length - 1 > count){
			count++;
			arr[count].style.display = 'flex';
		}
	})
	arrowLeft.addEventListener('click', () =>{
		if (count != 0){
			arr[count].style.display = 'none';
			count --
			arr[count].style.display = 'flex';
		}
	})
}

slider();