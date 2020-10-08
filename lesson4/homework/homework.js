let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -2, -3, -4, -5, -6, -7, -8,
		-9, -10 ];

function sortNumbers(num1, num2) {
	if (num1 > num2)
		return 1;
	if (num1 < num2)
		return -1;
	if (num1 == num2)
		return 0;
}

array.sort(sortNumbers);
console.log(array);
console.log("__________")
console.log(array.reverse());
let pozitivnuiArr = [];
let negativnuArr = [];

function sortNumbersToArray(num1) {
//	if (0 <= num1) {
//		pozitivnuiArr.push(num1);
//	}
//	if (num1 < 0) {
//		negativnuArr.push(num1);
//	}
//}
if(num1 - 0 >= 0 ){
	pozitivnuiArr.push(num1);
} 
else{
	negativnuArr.push(num1);
}
}
array.filter(sortNumbersToArray);
console.log("+" + pozitivnuiArr);
console.log("-" + negativnuArr);

let studentArr = [];

let student1 = {
	yearOfStuding : 5,
	facultyName : "Student1"
};
let student2 = {
	yearOfStuding : 5,
	facultyName : "Student2"
};
let student3 = {
	yearOfStuding : 5,
	facultyName : "Student3"
};
let student4 = {
	yearOfStuding : 5,
	facultyName : "Student4"
};
let student5 = {
	yearOfStuding : 5,
	facultyName : "Student5"
};
let student6 = {
	yearOfStuding : 5,
	facultyName : "Student6"
};
let student7 = {
	yearOfStuding : 5,
	facultyName : "Student7"
};
let student8 = {
	yearOfStuding : 5,
	facultyName : "Student8"
};
let student9 = {
	yearOfStuding : 5,
	facultyName : "Student9"
};
let student0 = {
	yearOfStuding : 5,
	facultyName : "Student0"
};

function getName(arr) {
	return arr.facultyName;
}

studentArr.push(student0, student1, student2, student3, student4, student5,
		student6, student7, student8, student9);

let nameArr = studentArr.map(getName);
console.log(nameArr);

function getAgeSum(sum, curentAge) {
	return sum + curentAge.yearOfStuding;
}

let sumArrAge = studentArr.reduce(getAgeSum, 0);
console.log(sumArrAge);