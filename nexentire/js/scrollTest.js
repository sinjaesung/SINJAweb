function scroll_trigger(){

    let scrollevent_queue_native=[];
   
    return async function scroll_stickycontainer(){
        let nowscrollY=window.scrollY;
        let screenWidth=window.innerWidth;
       // console.log("======>scroll_stickycontainer===============================");
        //console.log("nowscrollY:",nowscrollY,scrollevent_queue_native);

        //main executinssons start
        let javascript_scrolls_sticky=document.getElementsByClassName(`javascript_scrolls_sticky`);
    
        for(let s=0; s<javascript_scrolls_sticky.length; s++){
            let scroll_item=javascript_scrolls_sticky[s];
    
            let targetdata=JSON.parse(scroll_item.getAttribute("javascript_scrolls_sticky"));
            let resolution_range=targetdata['resolution_range'];
            let resolution_start=parseInt(resolution_range.split('~')[0]);
            let resolution_end=parseInt(resolution_range.split('~')[1]);

            scroll_item.style=null;
            
            if(screenWidth >= resolution_start && screenWidth <= resolution_end){
                let sticky_container_target=document.querySelector(`[targetindex='${targetdata['sticky_container_target']}']`);

                let container_offsetStart=element_offsetTop_finds(sticky_container_target);
                let container_offsetEnd=container_offsetStart + sticky_container_target.offsetHeight;
               // console.log(`해당 지정범위내에서만 반응:`,screenWidth,resolution_start,resolution_end);
                //console.log("mother container및 mother containber offset start~end and scrollY:",sticky_container_target,container_offsetStart,nowscrollY,container_offsetEnd);

                if(nowscrollY < container_offsetStart){
                    scroll_item.style.position='absolute';
                    scroll_item.style.bottom='auto';
                    scroll_item.style.top='0%';
                    //scroll_item.style.setProperty('position','absolute','important');
                    //scroll_item.style.setProperty('bottom','auto');
                    //scroll_item.style.setProperty('top','0%','important');

                }else if(nowscrollY >= container_offsetStart && nowscrollY <= (container_offsetEnd-700)){
                    scroll_item.style.position='fixed';
                    scroll_item.style.bottom='auto';
                    scroll_item.style.top='2%';

                    //scroll_item.style.setProperty('position','fixed','important');
                   
                }else if(nowscrollY > (container_offsetEnd-700)){
                    scroll_item.style.position='absolute';
                    scroll_item.style.bottom='0%';
                    scroll_item.style.top='auto';

                    //scroll_item.style.setProperty('position','absolute','important');

                }
            }
          
        }
        //main executeion ends...
       
    }
}
let scroll_action_local=scroll_trigger();
window.onscroll=scroll_action_local;
window.onresize=scroll_action_local;
scroll_action_local();