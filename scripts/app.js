var nonImportant="far fa-star";
var importantClass="fas fa-star";
var isImportant=false;


var visible="fa-angle-double-right";
var notVisible="fa-angle-double-left";
var isVisible=false;

var isMenu=false;

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

    // Clear Form
    $("#txtTitle").val("");
    $("#txtDueDate").val("");
    $("#txtContact").val("");
    $("#txtLocation").val("");
    $("#txtDescription").val("");
    $("#clrPicker").val("000");


    displayTask(newTask);
    console.log(newTask);

}


const displayTask = (task) => {
//Create the sintax

let  card=`
<div class="task-item">
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
    <button class=btnDelete onClick="deleteTask();">Delete</button>
    </div>
    
    
    

<div>
`;

// Append the sintax to an element on the screen
$("#taskList").append(card);


}

const deleteTask = () => {

    console.log("Task deleted");

}

const init = () => {

    console.log("script running..");

   

    // EVENTS
    $("#importantInactive").click(toggleImportant);
    $("#formControl").click(toggleForm);
    $("#addTaskIcon").click(toggleForm);
    $("#menu-bars").click(toggleMenu);
    $("#btnSave").click(saveTask);
 }

window.onload=init;