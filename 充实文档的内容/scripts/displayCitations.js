/**
 * Created by ���� on 2017/2/23.
 */
function displayCitations(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;

    //ȡ����������
    var quotes=document.getElementsByTagName("blockquote");
    //��������
    for(var i=0;i<quotes.length;i++){
        //���û��cite���ԣ�����ѭ��
        if(!quotes[i].getAttribute("cite")) continue;
        //����cite����
        var url=quotes[i].getAttribute("cite");
        //ȡ�������ֵ�����Ԫ�ؽڵ�
        var quoteChildren=quotes[i].getElementsByTagName("*");
        //���û��Ԫ�ؽڵ㣬����ѭ��
        if(quoteChildren.length<1) continue;
        //ȡ�������е����һ��Ԫ�ؽڵ�
        var elem=quoteChildren[quoteChildren.length-1];
        //�������
        var link=document.createElement("a");
        var link_text=document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        //�ѱ����ӵ������е����һ��Ԫ�ؽڵ�
        elem.appendChild(superscript);
    }
}

addloadEvent(displayCitations);