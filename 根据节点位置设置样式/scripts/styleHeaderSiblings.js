/**
 * Created by æ…√Œ on 2017/2/23.
 */
function styleHeaderSiblings(tag,theclass){
    var headers=document.getElementsByTagName(tag);
    var elem;
    for(var i=0;i<headers.length;i++){
        elem=getNextElement(headers[i].nextSibling);
        addClass(elem,theclass);
    }
}
function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}

addloadEvent(function(){
    styleHeaderSiblings("h1","intro");
});