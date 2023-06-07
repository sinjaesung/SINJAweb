function animate(){
    let execution_queue=[];

    return function execution_function(flag_object,target_item,styleProperty,style_originalval,style_nextval,units,anim_duration){
        return new Promise(function(resolve,reject){
            //console.log("====================execution_function======================");
            //console.log(target_item,styleProperty,style_originalval,style_nextval,units,anim_duration);

            let function_ids=window.setInterval(repeating_function_part,1);
            let timercnt=0;

            let queue_info={};
            queue_info['object']=flag_object['triggerEventObject'];
            queue_info['group']=flag_object['queue_index'];
            queue_info['functionid']=function_ids;

            execution_queue.push(queue_info);
            console.log("===>>aniamte executing quesuess상태:((현재 함수functionidss):",execution_queue,queue_info);

            //for(let e=0; e<execution_queue.length; e++){
               // let execution_history_item=execution_queue[e];
                //console.log("기존 queuehistory itemss and 현재가장최근 ",execution_history_item,queue_info);

                //mouseleave와 같은것
                //if((queue_info['group']!=execution_history_item['group'] && queue_info['object']!=execution_history_item['object'] && execution_history_item['group'].indexOf('@[mouseleave]@')==-1) ){
                    
                let clear_filtered=execution_queue.filter((element)=> ( (element['group']==queue_info['group'] && element['object']==queue_info['object'] || element['group'].indexOf('@[mouseleave]@')!=-1))?(true):(clearInterval(element['functionid'])) );//현재 그룹 or object이거나 ||mouseLeave인 모든 요소들은 모두 남김.
                execution_queue=clear_filtered;
                console.log("clearReferencesss update exeuctionquee:",execution_queue);
                //for(let e=0; e<execution_queue.length; e++){

                    //let function_id_refer=execution_history_item['functionid'];

                    //clearInterval(function_id_refer);

                //}
                //}
            //}
            function repeating_function_part(){
                //console.log("repeating funcdtio partsss timercnt",timercnt);
        
                //let originalvalue=window.getComputedStyle(ScrollActionTarget0,null)['right'];
                let originvalue=parseInt(style_originalval);
                let to_value=parseInt(style_nextval);
                //let target_now_stylevalue=parseFloat(target_item.style[styleProperty].split(units)[0]);

                
                let add_amount=( ((to_value - originvalue)/anim_duration)*timercnt);
                //console.log(`add_amount??:`,((to_value-originvalue)/anim_duration) *timercnt);

                let adapt_values=originvalue + add_amount;
                //console.log("orginal, to values:",originvalue,to_value);
                //console.log("adapt_values+units;:",adapt_values,units);

                target_item.style[styleProperty]= adapt_values+units;
               
                
                timercnt++;
                if(timercnt>anim_duration){
                    //alert("실행종료!!!");
                    clearInterval(function_ids);

                    let clear_filtered=execution_queue.filter((element)=> element['functionid']!=function_ids);
                    execution_queue=clear_filtered;
                    console.log("clearReferencesss update exeuctionquee:",execution_queue);
                    resolve(true);
                }
            }
        });
    }
}
let animate_execute=animate();
//console.log("aniamte exeucdtwss:",animate_execute);
//animate_execute(document.getElementById('test'),'right','-600','0','%',200);