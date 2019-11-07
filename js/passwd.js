function PasGenCountHTML(chars,length,count)
{
 document.write("<ol>");
 for (let j=0; j<count; j++)
     document.write("<li><samp>"+PasGenHTML(chars,length)+"</samp>");
 document.write("</ol>");
}

/**
 * @return {string}
 */
function PasGenHTML(chars,length)
{
let res="";
let r;
let i;
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
