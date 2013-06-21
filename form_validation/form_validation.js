var login, email, name, timezone, homepage, about, notify;

function isEmpty(input) {

if(!input.value.trim().length) {
alert("enter value in " + input.id);
return 0;
}
return 1;
}

function validateEmail() {
var expression = "[a-zA-Z]+\d*[a-zA-Z]*@[a-zA-Z]+\d*[a-zA-Z]*[.][a-z]{2,4}";
if (!email.value.match(expression)) {
alert("Please enter valid email");
return 0;
}
return 1;
}


function validateName() {
//alert("abc def".trim());
var i,char;
for (i=0;i<name.value.length;i+=1) {
char = name.value.charAt(i);
//alert(char);
if((char<'A'||char>'z'||(char>'Z' && char <'a')) && char !== ' ') {
alert("Enter valid name");
return 0;
}
}
return 1;
}

function isInvalidTimezone() {
if (!timezone.selectedIndex) {//select at index 0
alert("Please select a time zone");
return 0;
}
return 1;
}

function validateHomePage() {

var e = "[a-zA-Z0-9]+[.][a-zA-Z]{2,4}";
//alert("str:" +str);
//alert("home:" +homepage.value);
if (!homepage.value.match(e)) {
alert("please enter valid url");
return 0;
}
return 1;
}

function checkMinLengthAbout() {
if (about.value.length<50) {
alert("Please enter some more text in about");
return 0;
}
return 1;
}

function validate() {
//alert("validate");
//alert(about.id);
var flag =1 ;
flag=isEmpty(login);
if(!flag) {
return;
}

flag=isEmpty(email);
if(!flag) {
return;
}

flag=validateEmail();
if(!flag) {
return;
}

flag=isEmpty(name);
if(!flag) {
return;
}

flag=validateName();
if(!flag) {
return;
}

flag=isInvalidTimezone();
if(!flag) {
return;
}

flag=isEmpty(homepage);
if(!flag) {
return;
}

flag=validateHomePage();
if(!flag) {
return;
}

flag=isEmpty(about);
if(!flag) {
return;
}

flag=checkMinLengthAbout();

if(!flag) {
return;
}

if (notify.checked)
alert("recieve notification");

}

function initialize()
{
alert("start");
login = document.getElementById("login");
email = document.getElementById("email");
name = document.getElementById("name");
timezone = document.getElementById("timezone");
homepage = document.getElementById("homepage");
about = document.getElementById("about");
notify = document.getElementById("notify");
}
