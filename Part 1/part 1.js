//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...

//1
function createStudent(name,age,education,nationality){
	return {
		name:name,
		age:age,
		education:education,
		nationality:nationality

	};

}
var student1=createStudent("Rwaida","27","Computer Science","Yemni");
var student1=createStudent("hadeel","24"," Computer engineering","syrian");
var students=[];

function showFriend(frinedData){
	return frinedData.name+"  with the age of  "+frinedData.age+" and with "+frinedData.education;

}

function addStudent(student){
	students.push(student);

}
addStudent(student1);
addStudent(student2);

function avergeStudents(students){
	
	var result=0;
	for (var i = 0; i < students.length; i++) {
		result=result+students[i].age;
	}
	return result/students.length;


}


/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...
function square(n){
	return n*n;

} 

function rangeSquared(n1,n2){
	var arr=[];
	var result=null ;
	if(n2===undefined){
		if (n1%2===0) {
			result=square(n1);
			return result
		}
	}
		else{

	
	for (var i = n1; i < n2+1; i++) {
		if(i%2===0){
			result=square(i);
			arr.push(result);
		}
		
	}
	return arr;
}

}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
function leader(arr){
	var newarr=[];

	for (var i = 0; i < arr.length; i++) {
		if(arr[i]>arr[i+1]){
			newarr.push(arr[i])

		}
		
		}
		return newarr;
}

