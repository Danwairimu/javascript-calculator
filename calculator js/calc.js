const display=document.getElementById("display");
function actionbuttons(input){
    display.value+=input;
}
function clr(){
display.value="";
}
function add(){
display.value=eval(display);
}