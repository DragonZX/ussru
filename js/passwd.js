function PasGenCountHTML(chars,length,count)
{
 document.write("<ol>");
 for (j=0;j<count;j++)
     document.write("<li><samp>"+PasGenHTML(chars,length)+"</samp>");
 document.write("</ol>");
}

function PasGenHTML(chars,length)
{
var res="";
var r;
var i;
  for (i=1;i<=length;i++)
    {
     r=Math.floor(Math.random()*chars.length);
     res=res+chars.substring(r,r+1);
    }   
res = res.replace("&","&amp;");
res = res.replace(">","&gt;");
res = res.replace("<","&lt;");
return res
}
