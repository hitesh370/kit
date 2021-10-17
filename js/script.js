
var sidenav=document.getElementById('sidenav');
var menubar=document.getElementById('m-menu');
sidenav.style.width="0px";
menubar.onclick=function(){
    if(sidenav.style.width=="0px")sidenav.style.width="250px";
    else sidenav.style.width="0px";
}


var indexvalue=0;
function slideshow(){
    setTimeout(slideshow,2500);
    var x;
    const img=document.querySelectorAll("img");
    for(x=0;x<img.length;x++){
        img[x].style.display="none";
    }
    indexvalue++;
    if(indexvalue>img.length){indexvalue=1}
    img[indexvalue -1].style.display="block";
}