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
        $("#side-form").css("display","none");
        $("#formControl").addClass(notVisible);
        $("#formControl").removeClass(visible);
        $("#show-control-text").text("SHOW");
        isVisible=false;
    }else{
        // Shows Form
        $("#side-form").css("display","flex");
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

const init = () => {

    console.log("script running..");

    $(window).resize(function(){

        if ($(window).width() <= 800) {  

           $("#body").css("background-color","red");

     }     
    });

    // EVENTS
    $("#importantInactive").click(toggleImportant);
    $("#formControl").click(toggleForm);
    $("#addTaskIcon").click(toggleForm);
    $("#menu-bars").click(toggleMenu);

 }

window.onload=init;