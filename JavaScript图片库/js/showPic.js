/**
 * Created by ���� on 2017/2/11.
 */

/********************************/
/********����onload�¼�**********/
/*����Ҫ�õ��ĺ����󶨵���������*/
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
/*����insertBefore��������һ��insertAfter����*/
/**********������Ԫ�غ����һ��Ԫ��***********/
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
/**����һ��imgԪ�غ�һ��pԪ��****/
/***�����ǲ��뵽ͼƬ�б�ĺ���***/
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
/*********����ͼƬ������*********/
/****�������ʱ����showPic����***/
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
/***��ռλ��ͼƬ�л���Ŀ��ͼƬ***/
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
/************�󶨺���************/
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

