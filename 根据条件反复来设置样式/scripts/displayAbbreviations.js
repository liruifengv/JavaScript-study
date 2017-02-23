/**
 * Created by ���� on 2017/2/23.
 */
function displayAbbreviations(){
    if(!document.getElementsByTagName) return false;
    if(!document.createTextNode) return false;
    if(!document.createElement) return false;

    //ȡ���������Դ�
    var abbreviations=document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;
    var defs=new Array();
    //�����������Դ�
    for(var i=0;i<abbreviations.length;i++){
        var corrent_abbr=abbreviations[i];
        var definition=corrent_abbr.getAttribute("title");
        var key=abbreviations[i].lastChild.nodeValue;
        defs[key]=definition;
    }
    //���������б�
    var dlist=document.createElement("dl");
    //��������
    for(key in defs){
        var definition=defs[key];
        //�����������
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //������������
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //��������ӵ������б�
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //��������
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //�ѱ�����ӵ�ҳ������
    document.body.appendChild(header);
    //�Ѷ����б���ӵ�ҳ������
    document.body.appendChild(dlist);
}
addloadEvent(displayAbbreviations);