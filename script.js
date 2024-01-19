const lists = document.querySelectorAll(".list");
console.log(lists);

lists.forEach(function(list){
    list.addEventListener("mouseenter",function(e){
        list.childNodes[3].style.opacity=1;
        list.childNodes[3].style.transform="scale(1) rotateY(-360deg)";
        // list.childNodes[3].style.width="350px";
        // list.childNodes[3].style.height="400px";
        console.log(list.childNodes[3]);
    });
    list.addEventListener("mouseleave", function(e){
        list.childNodes[3].style.opacity=0;
        list.childNodes[3].style.transform="scale(0) rotateX(0deg)";
       
    });
    // list.addEventListener("mousemove", function(e){
    //     list.childNodes[3].style.top=e.y+"px";
    //     list.childNodes[3].style.left=e.x+"px";
    // });
});