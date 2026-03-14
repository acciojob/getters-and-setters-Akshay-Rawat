//complete this code
class Person {
	constructor(name,age){
		this.name=name
		this.age=age
	}
	get name(){
		return this.name
	}
	set name(mine){
		this.age=mine
	}
	
}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
