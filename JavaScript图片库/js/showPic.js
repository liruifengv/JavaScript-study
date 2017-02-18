/**
 * Created by 旧梦 on 2017/2/11.
 */

/********************************/
/********共享onload事件**********/
/*把需要用到的函数绑定的匿名函数*/
/********************************/
function addloadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}


/*********************************************/
/*根据insertBefore函数创建一个insertAfter函数*/
/**********在已有元素后插入一个元素***********/
/*********************************************/
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

/********************************/
/**创建一个img元素和一个p元素****/
/***把它们插入到图片列表的后面***/
/********************************/
function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;

    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","img/1.jpg");
    placeholder.setAttribute("alt","my picture gallery")


    var description=document.createElement("p");
    description.setAttribute("id","description");

    var desctext=document.createTextNode("Choose an image");

    description.appendChild(desctext);

    var gallery=document.getElementById("imageGallery");

    insertAfter(placeholder,gallery);

    insertAfter(description,placeholder);
}

/********************************/
/*********遍历图片库链接*********/
/****点击链接时调用showPic函数***/
/********************************/
function prepareGallery(){
    if(!document.getElementsByTagName) {
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imageGallery")){
        return false;
    }
    var gallery=document.getElementById("imageGallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this);
        }

         links[i].onkeypress=links[i].onclick;

    }
}
/********************************/
/***把占位符图片切换成目标图片***/
/********************************/
function showPic(whichPic){
    if(!document.getElementById("placeholder")) return true;
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder")
    placeholder.setAttribute("src",source);
    if(!document.getElementById("description")) return false;
    if(whichPic.getAttribute("title")){
        var text=whichPic.getAttribute("title");
    }else{
        var text="";
    }
        var description=document.getElementById("description");
        if(description.firstChild.nodeType==3){
            description.firstChild.nodeValue=text;
        }
    return false;
}

/********************************/
/************绑定函数************/
/********************************/
addloadEvent(preparePlaceholder);
addloadEvent(prepareGallery);

/*
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}
window.onload=countBodyChildren;
*/

