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


const testRequest = () => { 
    //https://restclass.azurewebsites.net/api/test

        $.ajax({
            type:"GET",
            url:"https://restclass.azurewebsites.net/api/test",
            success:function(e){
                console.log("Request succeded",e);
            },
            error:function(e){

                console.log("Request failed",e)
            }

        });


}


//Exec the fn..
objects();
// testRequest();