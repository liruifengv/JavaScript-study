/**
 * Created by æ…√Œ on 2017/2/11.
 */
function showPic(whichPic){
    if(!document.getElementById("placeholder")) return false;
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder")
    if(placeholder.nodeName!="IMG")return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text=whichPic.getAttribute("title") ? whichPic.getAttribute("title"): "";
        var description=document.getElementById("description");
        if(description.firstChild.nodeType===3){
            description.firstChild.nodeValue=text;
        }
    }
   return true;
}
/*
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);

}
window.onload=countBodyChildren;
*/
function prepareGallery(){
    if(!document.getElementsByTagName) {
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this)?false:true;
        }

       // links[i].onkeypress=links[i].onclick;

    }
}
window.onload=prepareGallery;

