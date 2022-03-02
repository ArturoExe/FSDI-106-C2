//object constructor
function Dog(name,age){
    this.name=name;
    this.age=age;
}


function objects(){
    //Object litera;
    let d1={
    name:"fido",
    age:3
    }


    console.log(d1);


    let d2=new Dog("nala",4);
    console.log(d2);
}

class Dog{
    ///   
    constructor(){

    }
}



//Exec the fn..
objects();