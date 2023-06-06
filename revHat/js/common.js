$(function(){
    let prevPage=document.getElementById("prevPage");

    if(prevPage){
        prevPage.onclick=function(e){
            console.log("what?:",e);
//e.preventDefault();
            history.back();
        };
    }

});
