/**
 * Created by ���� on 2017/2/23.
 */
function displayAccesskeys(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    //ȡ���ĵ��е���������
    var links=document.getElementsByTagName("a");
    //����һ�����飬������ʼ�
    var akeys=new Array();
    //��������
    for(var i=0;i<links.length;i++){
        var current_link=links[i]
        //���û��accesskey���ԣ�����ѭ��
        if(!current_link.getAttribute("accesskey")) continue;
        //ȡ��accesskey��ֵ
        var key=current_link.getAttribute("accesskey");
        //ȡ�������ı�
        var text=current_link.lastChild.nodeValue;
        //��ӵ�����
        akeys[key]=text;
    }
    //�����б�
    var list=document.createElement("ul");
    //�������ʼ�
    for(key in akeys){
        var text=akeys[key];
        //���������б����е��ַ���
        var str=key + ":" + text;
        //�����б���
        var item =document.createElement("li");
        var item_text=document.createTextNode(str);
        item.appendChild(item_text);
        //���б�����ӵ��б���
        list.appendChild(item);
    }
    //��������
    var header=document.createElement("h3");
    var header_text=document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    //�ѱ�����ӵ�ҳ������
    document.body.appendChild(header);
    //���б���ӵ�ҳ������
    document.body.appendChild(list);
}

addloadEvent(displayAccesskeys);