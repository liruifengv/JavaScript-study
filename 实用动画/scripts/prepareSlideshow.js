/**
 * Created by ���� on 2017/2/28.
 */
function prepareSlideshow(){
    //ȷ�������֧��DOM����
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    //ȷ��Ԫ���Ƿ����
    if(!document.getElementById("linklist")) return false;
    if(!document.getElementById("preview")) return false;
    //ΪͼƬӦ����ʽ
    var preview=document.getElementById("preview");
    preview.style.position="absolute";
    /*
    preview.style.top="0px";
    preview.style.left="0px";
    */

    //ȡ�ñ��е���������
    var list=document.getElementById("linklist");
    var links=document.getElementsByTagName("a");
    //Ϊmouseover�¼���Ӷ���Ч��
    links[0].onmouseover=function(){
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover=function(){
        moveElement("preview",-200,0,10);
    }
    links[2].onmouseover=function(){
        moveElement("preview",-300,0,10);
    }
}
addloadEvent(prepareSlideshow);
