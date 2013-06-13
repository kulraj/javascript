
var colours;
var call1;
var cnone;
 



function myfun()
{
colours=document.getElementsByClassName("colour");
call1=document.getElementById("call");
cnone=document.getElementById("cnone");
call1.checked=false;
cnone.checked=false;
for (var i=0;i<colours.length;i++)
{
colours[i].checked=false;
}
}




function checkall()
{
cnone.checked = false;
for (var i=0;i<colours.length;i++)
{
colours[i].checked=true;
}


}

function checknone()
{

call1.checked=false;
for (var i=0;i<colours.length;i++)
{
colours[i].checked=false;
}
}
