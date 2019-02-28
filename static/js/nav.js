/*Adds the active class to current navigation link*/

//get path of current page
var currentPath = document.URL;

//get navigation links
var links = document.getElementsByClassName("nav-link");

//loop through navigation links and compare to url
for (var i = 0; i < links.length; i++){
   //check if path matches current page
   if(links[i].href == currentPath){
      links[i].className += " active";
   }
}