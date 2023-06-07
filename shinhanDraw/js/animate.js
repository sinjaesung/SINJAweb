function animate(){
    let execution_queue=[];
    
    //이 animate모델의 경우 기본적으로 현재 활성화되고있는 objectElement,eventType(한요소에서 가장 최근:현재 발생된event)요소에 대해서만 애니메이션play하며, 그외의 기존 queue대기열리스트는 모두 제거한다. 해제형애니메이션 type(mouseleave)에 경우들도 모두 제거하나 그러한 대상들이 관련타깃은 대신에 일괄적으로 모두 instant inlinestyle reset처리.
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
            queue_info['effectTargets']=flag_object['effectTargets'];

            execution_queue.push(queue_info);
            console.log("============>현재 요청활성화 focusing 요청exeuction functions:",flag_object);
            console.log("===>>aniamte executing quesuess상태:((현재 함수functionidss):",execution_queue,queue_info);

            //for(let e=0; e<execution_queue.length; e++){
               // let execution_history_item=execution_queue[e];
                //console.log("기존 queuehistory itemss and 현재가장최근 ",execution_history_item,queue_info);

                //mouseleave와 같은것
                //if((queue_info['group']!=execution_history_item['group'] && queue_info['object']!=execution_history_item['object'] && execution_history_item['group'].indexOf('@[mouseleave]@')==-1) ){
                    
               // let clear_filtered=execution_queue.filter((element)=> ( (element['group']==queue_info['group'] && element['object']==queue_info['object'] || element['group'].indexOf('@[mouseleave]@')!=-1))?(true):(clearInterval(element['functionid'])) );//현재 그룹 or object이거나 ||mouseLeave인 모든 요소들은 모두 남김.
                for(let e=0; e<execution_queue.length; e++){
                    let element_local=execution_queue[e];
                    if(element_local['group'].indexOf("mouseleave")!=-1){
                        //요청type eventType이 mouseleave인것들중에서
                        if(element_local['group']!=queue_info['group'] && !element_local['object']!=queue_info['object']){
                            //요청 eventType(mouseleave or mouseEnter)groupqueueid(현재 요청된 eventQueueid) 도 아니고, 현재 focuosing object도 아닌 (간단히 현재 focusing활성화되어있는 object->eventType)이 아닌 모든 mouseleave타입 queuelist대상들 쿼리
                            console.log(`해당 대상체들 일괄적 우선 inlineStyle css해제(mouseleave등의 해제형타입):`,element_local);
                            let effectTargetss=element_local['effectTargets'];
                            for(let ee=0; ee<effectTargetss.length; ee++){
                                effectTargetss[ee].style=null;
                            }   
                            
                        }
                    }
                }

               let clear_filtered=execution_queue.filter((element)=> ( (element['group']==queue_info['group'] && element['object']==queue_info['object']))?(true):(clearInterval(element['functionid'])));//현재 그룹 or object인것(현재 object>eventType인것만 남김) 나머지 모두 제거!(현재 focusing object->focusing event가 아닌것들 큐anim는 모두 제거) 대신 mouseleave형태의 타입들에 한해서.모두 css reset복귀 처리(instant형태로 진행)

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
                    //mouseleave형태의 일관된 해제형태의 애니메이션의 경우 stack queuelist에서 일괄삭제시(현재 focusing된것 제외한리스트들중) 복귀회귀형 애니메이션(css reset애니메이션)이 모두 해제되는 문제가 생기기에, 이러한 해제형태의 애니메이션은 모두 실행play되기전에 일괄삭제되었을때 바로 css reset되도록 처리. 
                    //이 언어구문에선 모두 reset(mouseleavetype)이 완료된 시점에 실행되는 형태.
                    if(flag_object['queue_index'].indexOf("mouseleave")!=-1){
                        console.log("=======================mouseleave 해제형태의 경우 animation end시에 명시적 inline style reset!!!==================",flag_object);
                        let effectTargetssss_del=flag_object['effectTargets'];
                        for(let r=0; r<effectTargetssss_del.length; r++){
                            effectTargetssss_del[r].style=null;
                        }
                    }
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