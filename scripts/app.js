var nonImportant="far fa-star";
var importantClass="fas fa-star";
var isImportant=false;


var visible="fa-angle-double-right";
var notVisible="fa-angle-double-left";
var isVisible=false;

var isMenu=false;

let taskArray=[];
let index=0;

const toggleImportant = () => {

        console.log("click");

        if(isImportant){
            $("#importantInactive").removeClass(importantClass);
            $("#importantInactive").addClass(nonImportant);
            isImportant=false;
         

        }else{
          
            $("#impotantInactive").removeClass(nonImportant);
            $("#importantInactive").addClass(importantClass);
           isImportant=true;
        
        }   
}


const toggleForm = () => {
    console.log("click");

    if(isVisible){
        // Hide Form
        document.querySelector('#side-form').classList.toggle('form--active')
        $("#formControl").addClass(notVisible);
        $("#formControl").removeClass(visible);
        $("#show-control-text").text("SHOW");
        isVisible=false;
    }else{
        // Shows Form
        document.querySelector('#side-form').classList.toggle('form--active')
        $("#formControl").removeClass(notVisible);
        $("#formControl").addClass(visible);
        $("#show-control-text").text("HIDE");

        isVisible=true;
    }



}

const toggleMenu = () => {
    console.log("click");
   
    
    if(isMenu){
        // Hide Menu
        
      

        $("#menuUl").css("display","none");
        $("#menu-bars").removeClass("fas fa-times");
        $("#menu-bars").addClass("fas fa-bars");
        isMenu=false;
        
        
    
    }else{
        // Show Menu
        $("#menuUl").css("display","flex");
        $("#menu-bars").removeClass("fas fa-bars");
        $("#menu-bars").addClass("fas fa-times");
        $("nav").css({"align-items":"normal"});
        isMenu=true;
      
    }   


}


const saveTask = () => {

    let title=$("#txtTitle").val();
    let dueDate=$("#txtDuedate").val();
    let contact=$("#txtContact").val();
    let location=$("#txtLocation").val();
    let desc=$("#txtDescription").val();
    let color=$("#clrPicker").val();

    let newTask=new Task(isImportant,title,dueDate,contact,location,desc,color);
    let dataStr=JSON.stringify(newTask);
    console.log(dataStr);
    console.log(newTask);

    //save the task into the server
    $.ajax({
        type:"POST",
        url:"https://fsdiapi.azurewebsites.net/api/tasks/",
        data:dataStr,
        contentType:"application/json",
        success:function(e){
            console.log("Request succeded",e);
        },
        error:function(e){

            console.log("Request failed",e)
        }
    });

    // Clear Form
    $("#txtTitle").val("");
    $("#txtDueDate").val("");
    $("#txtContact").val("");
    $("#txtLocation").val("");
    $("#txtDescription").val("");
    $("#clrPicker").val("#000000");

    //Display Task 
    displayTask(newTask);
    console.log(newTask);

}


const displayTask = (task) => {
//Create the sintax

taskArray.push(index);

let  card=`
<div class="task-item" id="item-${index}">
    <div class="task--data-one">
    <h2>${task.title}</h2>
    <p>${task.dueDate}</p>
    </div>
   

    <div class="task--data-two">
    <h3>Contact</h4>
    <p>${task.contact}</p>
    <p>${task.location}</p>
    </div>

    <div class="task--data-three">
    <h3>Additional Information</h3>
    <p>${task.desc}</p>
    <p>${task.color}</p>
    </div>

    <div class='task--data-four'>
    <button class=btnDelete onClick="deleteTask(${index});" >Delete</button>
    </div>
    
    
    

<div>
`;

// Append the sintax to an element on the screen
$("#taskList").append(card);

index++;
    

}

const deleteAllTasks = () => { 

  
    $.ajax({
        type: 'DELETE',
        url: 'https://fsdiapi.azurewebsites.net/api/tasks/clear/ArturoMtz',
        success: () => {
            console.log("Data cleared");
            $("#tasks-list").html(""); //clear the contents of the div
        },
        error: (details) => {
            console.log("Clear failed", details);
        }
    });


}


const deleteTask = (index) => {

    $(`#item-${index}`).remove();
    console.log("Task deleted");

}


const retriveTasks = () => { 
let dataStr;
    $.ajax({
        type:"GET",
        url:"https://fsdiapi.azurewebsites.net/api/tasks/ArturoMtz",  
        success:function(e){
            dataStr=JSON.parse(e);
            console.log("Request succeded");

            for (let i = 0; i < dataStr.length; i++) {
                let task=dataStr[i]
                if(dataStr[i].name=="ArturoMtz"){
                    displayTask(task);

                }else{

                }
            }
            console.log(dataStr.length);
        },
        error:function(e){

            console.log("Request failed",e)
        }
    });




    
}

const init = () => {

    console.log("script running..");

   

    // EVENTS
    $("#importantInactive").click(toggleImportant);
    $("#formControl").click(toggleForm);
    $("#addTaskIcon").click(toggleForm);
    $("#menu-bars").click(toggleMenu);
    $("#btnSave").click(saveTask);
    $("#btnDeleteAllTask").click(deleteAllTasks);

    //Load data from the server
    retriveTasks();

 }

window.onload=init;