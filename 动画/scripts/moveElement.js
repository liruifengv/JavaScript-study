/**
 * Created by æ…√Œ on 2017/2/28.
 */

/*
function moveMessage(){
    var elem=document.getElementById("message");
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==200&&ypos==100){
        return true;
    }
    if(xpos<200){
        xpos++;
    }
    if(ypos<100){
        ypos++;
    }
    if(xpos>200){
        xpos--;
    }
    if(ypos>100){
        ypos--;
    }
    elem.style.left=xpos + "px";
    elem.style.top=ypos + "px";
    movement=setTimeout("moveMessage()",10);
}
*/

function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById)  return false;
    if(!document.getElementById(elementID)) return false;
    var elem=document.getElementById(elementID);
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==final_x&&ypos==final_y){
        return true;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left=xpos + "px";
    elem.style.top=ypos + "px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement=setTimeout(repeat,interval);
}
addloadEvent(moveElement);
