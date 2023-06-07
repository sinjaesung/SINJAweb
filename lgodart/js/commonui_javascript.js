function execute_comment(){


    function commonpopup_related_eventintialize(){
        //팝업관련 요소 제어.
        let popupclosebtns=document.getElementsByClassName("javascript_popupclose");
        let popupopenbtns=document.getElementsByClassName("javascript_popupopen");

        for(let j=0; j<popupclosebtns.length; j++){
            let item=popupclosebtns[j];

            item.onclick=popupclose;
        }
        for(let j=0; j<popupopenbtns.length; j++){
            let item=popupopenbtns[j];

            item.onclick=popupopen;
        }
            
        function popupclose(event){
            let parentRoot=event.target;

            for(let s=0; s<500; s++){
                parentRoot=parentRoot.parentElement;
                console.log('[parentRootss:',parentRoot);
                if(parentRoot.className.indexOf('javascript_popupwindow')!=-1){
                    break;
                }
            }
            //parentRoot.setAttribute('toggle_status','closed');
            let identifier_target=parentRoot.getAttribute("targetindex");

            let popupTarget=document.querySelector(`[targetindex='${identifier_target}']`);
            //let mobile_popupTarget=document.querySelector(`MOBILE [targetindex='${identifier_target}']`);

            //popupTarget.setAttribute("toggle_status","closed");
            //mobile_popupTarget.setAttribute("toggle_status","closed");

            popupTarget.style.display='none';
        }
        function popupopen(event){
            let Targetstring=event.target.getAttribute("popupTarget");
            console.log('Targetstring',Targetstring);
            let popupTarget=document.querySelector(`[targetindex='${Targetstring}']`);
            //let mobile_popupTarget=document.querySelector(`MOBILE [targetindex='${identifier_target}']`);

            //popupTarget.setAttribute("toggle_status","closed");
            //mobile_popupTarget.setAttribute("toggle_status","closed");
            popupTarget.style.display='block';
        }
    }
    commonpopup_related_eventintialize();
     
    //navBg관련 nav활성화시에 navBg가 켜지는데, navBg가 켜진상태는 display:block상태일때로 간주하고, 켜졌을떄 네비활성화로 간주하고 html overflow:hidden처리.
    window.setInterval(function(){
        let navBg=document.querySelector(`[targetindex='navBg']`);

        let nav_isactive=navBg.style.display=='block'?true:false;
        if(nav_isactive){
            document.documentElement.style.overflow='hidden';
        }else{
            document.documentElement.style.overflow='visible';
        }
    },100);


    let plan_adapt_deleteTarget;//삭제 예정 타깃
    function commonui_javascript_event_initialize(){

       //모두동의,특정 그룹포함하는 mother개념 라디오,체크박스 체크시에 하위관련그룹체크박스들 모두 체크/언체크
        let allcheckToggle_triggerss=document.querySelectorAll(`[targetindex='allcheckToggle_trigger']`);
        for(let s=0;s<allcheckToggle_triggerss.length; s++){
            let item=allcheckToggle_triggerss[s];
        
            item.addEventListener("click",allcheckToggle_trigger,false);
        }   
        
        let deleteTarget_adapts=document.getElementsByClassName("javascript_deleteTarget_adapt");
        for(let s=0;s<deleteTarget_adapts.length; s++){
            let item=deleteTarget_adapts[s];
        
            item.addEventListener("click",deleteTarget_plan_adapt,false);
        }   
        let javascript_planadapt_deletes=document.getElementsByClassName("javascript_planadapt_delete");
        for(let s=0;s<javascript_planadapt_deletes.length; s++){
            let item=javascript_planadapt_deletes[s];
        
            item.addEventListener("click",plandelete_execute,false);
        }   

        let javascript_slideToggles=document.getElementsByClassName("javascript_slideToggle");
        for(let s=0;s<javascript_slideToggles.length; s++){
            let item=javascript_slideToggles[s];
        
            item.addEventListener("click",SlideToggle_trigger,false);
        }   
        let  javascript_iconToggles=document.getElementsByClassName("javascript_iconToggle");
        for(let s=0;s<javascript_iconToggles.length; s++){
            let item=javascript_iconToggles[s];
        
            item.addEventListener("click",iconToggle_trigger,false);
        }   
        
        let  move_triggers=document.getElementsByClassName("javascript_moveTrigger");
        for(let s=0;s<move_triggers.length; s++){
            let item=move_triggers[s];
        
            item.addEventListener("click",move_trigger,false);
        }   
        let  viewunview_triggers=document.getElementsByClassName("javascript_viewunviewTrigger");
        for(let s=0;s<viewunview_triggers.length; s++){
            let item=viewunview_triggers[s];
        
            item.addEventListener("click",viewunview_trigger,false);
        }   

        let  childinsert_triggers=document.getElementsByClassName("javascript_childinsertTrigger");
        for(let s=0;s<childinsert_triggers.length; s++){
            let item=childinsert_triggers[s];
        
            item.addEventListener("click",childinsert_trigger,false);
        }   


        let  radioselect_viewunview_triggers=document.getElementsByClassName("javascript_radioselect_viewunview");
        for(let s=0;s<radioselect_viewunview_triggers.length; s++){
            let item=radioselect_viewunview_triggers[s];
        
            item.addEventListener("click",radioselect_viewunview_trigger,false);
        }  

        let  radioselect_txtchange_triggers=document.getElementsByClassName("javascript_radioselect_txtchange");
        for(let s=0;s<radioselect_txtchange_triggers.length; s++){
            let item=radioselect_txtchange_triggers[s];
        
            item.addEventListener("click",radioselect_txtchange_trigger,false);
        }  

        let  checkboxselect_txtchange_triggers=document.getElementsByClassName("javascript_checkboxselect_txtchange");
        for(let s=0;s<checkboxselect_txtchange_triggers.length; s++){
            let item=checkboxselect_txtchange_triggers[s];
        
            item.addEventListener("click",checkboxselect_txtchange_trigger,false);
        } 
        
        let  javascript_keyboard_keyupTriggers=document.getElementsByClassName("javascript_keyboard_keyupTrigger");
        for(let s=0;s<javascript_keyboard_keyupTriggers.length; s++){
            let item=javascript_keyboard_keyupTriggers[s];
        
            item.addEventListener("keyup",javascript_keyboard_keyupTrigger,false);
        }
        let  checkbox_scoreSelect_triggers=document.getElementsByClassName("javascript_checkbox_scoreSelect");
        for(let s=0;s<checkbox_scoreSelect_triggers.length; s++){
            let item=checkbox_scoreSelect_triggers[s];
        
            item.addEventListener("click",checkbox_scoreSelect_trigger,false);
        }
        let  inputform_fileuploadchange_triggers=document.getElementsByClassName("javascript_inputform_fileuploadchange");
        for(let s=0;s<inputform_fileuploadchange_triggers.length; s++){
            let item=inputform_fileuploadchange_triggers[s];
        
            item.addEventListener("change",inputform_fileuploadchange_trigger,false);
        }
 
        let load_htmlMore_triggers=document.getElementsByClassName("javascript_load_htmlMore");
        for(let s=0;s<load_htmlMore_triggers.length; s++){
            let item=load_htmlMore_triggers[s];
        
            item.addEventListener("click",load_htmlMore_trigger,false);
        }
 
        let specifyList_sort_triggers=document.getElementsByClassName("javascript_specifyList_sort");
        for(let s=0;s<specifyList_sort_triggers.length; s++){
            let item=specifyList_sort_triggers[s];
        
            item.addEventListener("click",specifyList_sort_trigger,false);
        }
        let prevpageMove_triggers=document.getElementsByClassName("javascript_prevpageMove");
        for(let s=0;s<prevpageMove_triggers.length; s++){
            let item=prevpageMove_triggers[s];
        
            item.addEventListener("click",prevpageMove_trigger,false);
        }
        let effect_triggers=document.getElementsByClassName("javascript_effectTrigger");
        for(let s=0;s<effect_triggers.length; s++){
            let item=effect_triggers[s];
            let target_data=JSON.parse(item.getAttribute("targetdata"));
            let eventtypes=target_data['event_per_effects'];
            for(let e in eventtypes){
                item.addEventListener(e,effect_adapt_trigger,false);
            }
        }
        let styleEffectTrigger=document.getElementsByClassName("javascript_StyleEffectTrigger");
        for(let s=0;s<styleEffectTrigger.length; s++){
            let item=styleEffectTrigger[s];
            let target_data=JSON.parse(item.getAttribute("targetdata"));

            for(let events in target_data){
                item.addEventListener(events,styleEffect_adapt_trigger,false);
            }
        }

        let displayblockgroup_triggers=document.getElementsByClassName("javascript_displayblockgroup_Trigger");
        for(let s=0;s<displayblockgroup_triggers.length; s++){
            let item=displayblockgroup_triggers[s];
            
            item.addEventListener("click",displayblockgroup_trigger,false);
        }
        
        
    }

    commonui_javascript_event_initialize();

    function prevpageMove_trigger(event){
        console.log("==>페이지 뒤로 이동!");
        history.back();
    }
    function specifyList_sort_trigger(event){
        console.log('specifyList_sort_trigger:',event.target);
        let target=event.target;

        if(target.className.indexOf("javascript_specifyList_sort")==-1){
            target=parentTargetfind(target,"javascript_specifyList_sort");
        }
       
        let targetdata=JSON.parse(target.getAttribute("targetdata"));

        let targetgroupString=targetdata['targetGroupString'];
        let specifyListsortTarget=targetdata['specifyListsortTarget'];
        specifyListsortTarget=document.querySelector(`[targetindex*=${specifyListsortTarget}]`);
        console.log("대상타깃:",specifyListsortTarget);

        let sorttype=targetdata['sort'];

        let targetGroups=document.getElementsByClassName(targetgroupString);
        let targetGroups_=[];
        for(let s=0; s<targetGroups.length; s++){
            let item=targetGroups[s];
            if(item.className.indexOf("javascript_notincludes")==-1){
                targetGroups_.push(item);
            }
        }
        targetGroups=Array.from(targetGroups_);

        console.log("정렬기준 ,기준값들 상태:",sorttype,targetGroups);

        targetGroups.sort(function(a,b){
            if(a.getAttribute(sorttype)  > b.getAttribute(sorttype)) return -1;
            if( a.getAttribute(sorttype)  === b.getAttribute(sorttype)) return 0;
            if(a.getAttribute(sorttype)  < b.getAttribute(sorttype)) return 1;
        })
        console.log("정렬후 ",targetGroups);

        for(let j=0; j<targetGroups.length; j++){
            let item=targetGroups[j];
            specifyListsortTarget.appendChild(item);
        }
    }
    function load_htmlMore_trigger(event){
        console.log('load_htmlMore_trigger:',event.target);
        let target=event.target;

        if(target.className.indexOf("javascript_load_htmlMore")==-1){
            target=parentTargetfind(target,"javascript_load_htmlMore");
        }
       
        let targetdata=JSON.parse(target.getAttribute("targetdata"));
        let loadhtmlMoreSrc=targetdata['loadhtmlMoreSrc'];
        console.log("불러올 타깃html:",loadhtmlMoreSrc);
        loadhtmlMoreSrc=document.querySelector(`[targetindex*=${loadhtmlMoreSrc}]`);
        console.log("불러올 타깃html:",loadhtmlMoreSrc);

        let loadhtmlMoreClone=loadhtmlMoreSrc.cloneNode(true);

        loadhtmlMoreClone.classList.remove("javascript_notincludes");
        loadhtmlMoreClone.removeAttribute("targetindex");
        loadhtmlMoreClone.style.height='auto';
        
        let loadhtmlMoreTarget=targetdata['loadhtmlMoreTarget'];
        console.log("loadhtmlMoreTarget:",loadhtmlMoreTarget);
        loadhtmlMoreTarget=document.querySelector(`[targetindex*=${loadhtmlMoreTarget}]`);

        console.log("loadhtmlMoreTarget:",loadhtmlMoreTarget);
        loadhtmlMoreTarget.appendChild(loadhtmlMoreClone);

       let javascript_dynamic_values=loadhtmlMoreClone.getAttribute("dynamic_values").split('^');
       let infoStoreObject={};

       //score,date,..임의 values에 관련된 connect child elements node찾기 반환.
        for(let d=0; d<javascript_dynamic_values.length; d++){
            let item=javascript_dynamic_values[d];
            let find_item='javascript_'+javascript_dynamic_values[d]+'_dynamic';
            
            infoStoreObject[find_item]=[];
            findchild_elements(loadhtmlMoreClone,find_item,infoStoreObject);
            console.log("getStore elementss:",infoStoreObject);
            
            javascript_dynamic_values[d]=find_item;

        }
        console.log("javascript dynaic valuess findss:",javascript_dynamic_values,infoStoreObject);

        //score adpat
        let randomCount_score=Math.floor(5*Math.random());
        console.log("randomCountscore:",randomCount_score);
        let find_score_dynamics=infoStoreObject['javascript_score_dynamic'];
        for(let s=0; s<find_score_dynamics.length; s++){
            let item=find_score_dynamics[s];
            item.src="img/mobile/reviewstar.png";
        }
        for(let s=0; s<=randomCount_score; s++){
            infoStoreObject['javascript_score_dynamic'][s].src="img/mobile/reviewstar0.png";
        }
        loadhtmlMoreClone.setAttribute('score',randomCount_score+1);

    
        // 시작 날짜 ~ 종료 날짜 date adapt
        let randomDate=getRandomDate(new Date(2022, 1, 1), new Date());
        console.log("랜덤날짜:",randomDate);
        let year=randomDate.getFullYear();
        let month=randomDate.getMonth()+1;
        let day=randomDate.getDate();
        console.log('year,month,day:',year,month,day);
        infoStoreObject['javascript_date_dynamic'][0].innerHTML += `&nbsp;&nbsp;  |${year}-${month}-${day}`;
        loadhtmlMoreClone.setAttribute("date",`${year}-${month}-${day}`);

    }
    
    function javascript_dynamicadded_element_removeTrigger(event){
        let target=event.target;
        let parentTarget=parentTargetfind(target,"javascript_dynamicadded_element_removeTarget");

        console.log("javascript_dynamicadded_element_removeTrigger:",target,parentTarget);

        parentTarget.remove();
    }
    function inputform_fileuploadchange_trigger(event){
        console.log('inputform_fileuploadchange_trigger:',event.target);
        let target=event.target;

        if(target.className.indexOf("javascript_inputform_fileuploadchange")==-1){
            target=parentTargetfind(target,"javascript_inputform_fileuploadchange");
        }
       
        console.log('targfet filesss:',target.files);
        let targetdata=JSON.parse(target.getAttribute("targetdata"));
        let inputformfileuploadchangeTarget=targetdata['inputformfileuploadchangeTarget'];
        inputformfileuploadchangeTarget=document.querySelector(`[targetindex*=${inputformfileuploadchangeTarget}]`);

        let clonecopyTarget=targetdata['clonecopyTarget'];
        clonecopyTarget=document.querySelector(`[targetindex*=${clonecopyTarget}]`);
        console.log("clonsecopp :",clonecopyTarget);

       
        let files=target.files;
        [...files].forEach(file=>{
            if(!file.type.match("image/.*")){
                alert("이미지 파일만 업로드 가능합니다");
                return false;
            }
        });

        //업로드 파일 순회
        [...files].forEach(file=>{
            let reader=new FileReader();
            reader.onload=(e)=>{
                console.log("reader on loaddsss:",e.currentTarget.result);
                let preview=document.createElement("IMG");
                preview.src=e.currentTarget.result;
                console.log("prevew??:",preview);
                
                let cloneNode=clonecopyTarget.cloneNode(true);
                cloneNode.removeAttribute("targetindex");
                cloneNode.style.display='inline-block';

                let cloneNodechildren=cloneNode.children;
                for(let j=0; j<cloneNodechildren.length; j++){
        
                    let item=cloneNodechildren[j];
                    if(item.tagName=='IMG'){
                        item.src=preview.src;
                    }
                    if(item.className.indexOf("javascript_dynamicadded_element_remove")!=-1){
                        item.onclick=javascript_dynamicadded_element_removeTrigger;
                    }
                }
                inputformfileuploadchangeTarget.appendChild(cloneNode);

            };
            reader.readAsDataURL(file);
        })
        
    }
    function checkbox_scoreSelect_trigger(event){
        //event.preventDefault();

        console.log('checkbox_scoreSelect_trigger:',event.target);
        let target=event.target;
      
        if(target.className.indexOf("javascript_checkbox_scoreSelect")==-1){
            target=parentTargetfind(target,"javascript_checkbox_scoreSelect");
        }
        
        let target_namegroup=target.name;
        let target_namegroup_elements=document.querySelectorAll(`[name=${target_namegroup}]`);
       
        let checked_nowvalue=target.value;

      
        console.log("nowcheckvalue:",checked_nowvalue);
        for(let j=0; j<target_namegroup_elements.length; j++){
            target_namegroup_elements[j].checked=false;
        }
        for(let i=1; i<=checked_nowvalue; i++){
            console.log("targetnamegroup[eleettss:",target_namegroup_elements[i-1]);
            target_namegroup_elements[i-1].checked=true;
        }
    }

    function javascript_keyboard_keyupTrigger(event){
        console.log('javascript_keyboard_keyupTrigger:',event.target,event.key);
        let target=event.target;

        if(target.className.indexOf("javascript_keyboard_keyupTrigger")==-1){
            target=parentTargetfind(target,"javascript_keyboard_keyupTrigger");
        }
        let targetdata=JSON.parse(target.getAttribute("targetdata"));
        console.log('targetdatass:',targetdata);
        let inputtingtrack=targetdata['inputtingtrack'];
        let display_target=targetdata['keyboardkeyupTriggerTarget'];

        display_target=document.querySelector(`[targetindex*='${display_target}']`);

        console.log('triggerfrom_get:',display_target,inputtingtrack,target.value);
        switch(inputtingtrack){
            case 'length':
                display_target.innerText=target.value.length;
            break;

            case 'raw':
                display_target.innerText = target.value;
            break;
        }
    }

    function checkboxselect_txtchange_trigger(event){
        console.log('checkboxselect_txtchange_trigger:',event.target);
        let target=event.target;

        if(target.className.indexOf("javascript_checkboxselect_txtchange")==-1){
            target=parentTargetfind(target,"javascript_checkboxselect_txtchange");
        }
        console.log("발견타깃:",target,target.value,target.name);

        let targetdata=JSON.parse(target.getAttribute("targetdata"));

        let checkboxselecttxtchangeTarget=document.querySelector(`[targetindex*=${targetdata['checkboxselecttxtchangeTarget']}`);

        let checkboxnamegroup_chkvalues=document.querySelectorAll(`[name=${target.name}]:checked`);
        let chk_values=[];
        for(let j=0; j<checkboxnamegroup_chkvalues.length; j++){
            chk_values.push(checkboxnamegroup_chkvalues[j].value);
        }
        //checkboxnamegroup_chkvalues=Array.from(checkboxnamegroup_chkvalues);
        console.log("checkboxnamegroup_chkvalues:",checkboxnamegroup_chkvalues,chk_values);

        checkboxselecttxtchangeTarget.innerText=chk_values.join(',');
    }

    function radioselect_txtchange_trigger(event){
        console.log('radioselect_viewunview_trigger:',event.target);
        let target=event.target;

        if(target.className.indexOf("javascript_radioselect_txtchange")==-1){
            target=parentTargetfind(target,"javascript_radioselect_txtchange");
        }
        console.log("발견타깃:",target,target.value);

        let targetdata=JSON.parse(target.getAttribute("targetdata"));

        let radioselecttxtchangeTarget=targetdata['radioselecttxtchangeTarget'];

        radioselecttxtchangeTarget=document.querySelector(`[targetindex*=${radioselecttxtchangeTarget}]`);
        radioselecttxtchangeTarget.innerText=target.value;
    }
    function radioselect_viewunview_trigger(event){
        console.log('radioselect_viewunview_trigger:',event.target);
        let target=event.target;

        if(target.className.indexOf("javascript_radioselect_viewunview")==-1){
            target=parentTargetfind(target,"javascript_radioselect_viewunview");
        }
        console.log("발견타깃:",target);

        let targetdata=JSON.parse(target.getAttribute("targetdata"));
        let radioselectviewunviewTarget=targetdata['radioselectviewunviewTarget'];
        let radioselectviewunviewgroup=targetdata['radioselectviewunviewgroup'];

        radioselectviewunviewgroup=document.getElementsByClassName(radioselectviewunviewgroup);
        for(let r=0; r<radioselectviewunviewgroup.length; r++){
            let item=radioselectviewunviewgroup[r];
            console.log("radioselectview 관련그룹:",item);
            item.style.height='0px';
        }
        console.log(radioselectviewunviewTarget,radioselectviewunviewgroup)
        radioselectviewunviewTarget=document.querySelector(`[targetindex*=${radioselectviewunviewTarget}]`);

        radioselectviewunviewTarget.style.height='auto';
    }
    function childinsert_trigger(event){
        console.log('childinsertTriggersss:',event.target);
        let target=event.target;

        if(target.className.indexOf("javascript_childinsertTrigger")==-1){
            target=parentTargetfind(target,"javascript_childinsertTrigger");
        }
        console.log("발견타깃:",target);
        let targetdata=JSON.parse(target.getAttribute("targetdata"));
        let childinsertTriggerTarget=targetdata['childinsertTriggerTarget'];
        let childinsertedTarget=targetdata['childinsertedTarget'];

        childinsertTriggerTarget=document.querySelector(`[targetindex*=${childinsertTriggerTarget}]`);
        childinsertedTarget=document.querySelector(`[targetindex*=${childinsertedTarget}]`);

        console.log(childinsertTriggerTarget,childinsertedTarget);

        childinsertTriggerTarget.appendChild(childinsertedTarget);
    }

  
    function viewunview_trigger(event){
        console.log('viewunview_trigger triggerss 실행',event.target);
        let target=event.target;
        let targetdatas=JSON.parse(target.getAttribute("targetdata"));

        let viewunviewTarget=targetdatas['viewunviewTarget'];
        viewunviewTarget=document.querySelector(`[targetindex*=${viewunviewTarget}]`);

        let action_to_value=targetdatas['viewunviewto'];

        viewunviewTarget.style.display=action_to_value;
    }
    function displayblockgroup_trigger(event){
        console.log("displayblockgroup triggerss실행:",event.target);

        let target=event.target;
        if(target.className.indexOf("javascript_displayblockgroup_Trigger")==-1){
            target=parentTargetfind(target,"javascript_displayblockgroup_Trigger");
        }
        console.log("javascript_displayblockgroup_Trigger find target realss:",target);

        let targetdatas=JSON.parse(target.getAttribute("targetdata"));

        let Target=targetdatas['Target'];
        let target_related_groups=targetdatas['groupid'];

        let target_related_groups_elements=document.querySelectorAll(`[targetindex='${target_related_groups}']`);
        for(let s=0; s<target_related_groups_elements.length;s++){
            let item=target_related_groups_elements[s];
            item.style.display='none';
        }
        Target=document.querySelectorAll(`[targetindex*='${Target}']`);
        for(let t=0; t<Target.length; t++){
            let local_item=Target[t];
            local_item.style.display='block';
        }
       // Target.style.display='block';
    }
    function effect_adapt_trigger(event){
        console.log("effect adapt trigger tirgterss실행:",event.target,event.type);

        let target=event.target;
        let event_type=event.type;
        if(target.className.indexOf("javascript_effectTrigger")==-1){
            target=parentTargetfind(target,"javascript_effectTrigger");
        }
        console.log("effect adapt tirgger find target realss:",target);

        let targetdatas=JSON.parse(target.getAttribute("targetdata"));
        //let effects=targetdatas['effects'];
        let event_per_effects=targetdatas['event_per_effects'];

        let matching_effects=event_per_effects[event_type].split('^');        
        console.log("발생 이벤트 및 매칭 이펙트들:",event_type,matching_effects);
        
        let effectTarget=targetdatas['effectTarget'];
        effectTarget=effectTarget.split('^');
        
        
        for(let s=0; s<effectTarget.length; s++){
            let target_local=effectTarget[s];

            for(let effects=0; effects<matching_effects.length; effects++){
                let item_local=matching_effects[effects];

                let effects_function=effect_functions[item_local];

                console.log("target_local and local effectss",target_local,effects_function);

                effects_function(target_local);
            }
        }
    } 

    function styleEffect_adapt_trigger(event){
        event.preventDefault();
        //console.log("styleEffect_adapt_trigger adapt trigger tirgterss실행:",event.target,event.type);

        let target=event.target;
        let event_type=event.type;

        if(target.className.indexOf("javascript_StyleEffectTrigger")==-1){
            target=parentTargetfind(target,"javascript_StyleEffectTrigger");
        }
        //console.log("effect adapt tirgger find target realss:",target);

        let targetdatas=JSON.parse(target.getAttribute("targetdata"));
        //let effects=targetdatas['effects'];

        let style_datas=targetdatas[event_type]['style_datas'];  
        //console.log("발생 이벤트 및 매칭 이펙트들:",event_type,style_datas);
        
        let flag_object={};
        let random_queue_string=randomString();//하나의 그룹event그룹 (mouseleave,mojuseenter등등..)때이ㅡ 관련 타깃들에 가해지는 animateing들은 모두 동시사건으로 간주한다.
        if(event_type==='mouseleave'){
            random_queue_string+=`@[${event_type}]@`;//하나의 그룹event그룹 (mouseleave,mojuseenter등등..)때이ㅡ 관련 타깃들에 가해지는 animateing들은 모두 동시사건으로 간주한다.
        }
        flag_object['queue_index']=random_queue_string;
        flag_object['triggerEventObject']=target;
        flag_object['effectTargets']=[];

        for(let s=0; s<style_datas.length; s++){
            let style_item_big=style_datas[s];
            let target_local=style_item_big['target'];
            let target=document.querySelector(`[targetindex=${target_local}]`);
            let effectType=style_item_big['effectType'];

           // for(let t=0; t<targets.length; t++){
            let local_target_item=target;
            let style_parameters=style_item_big[`${effectType}_parameters`];
            console.log("타깃>>>>======Startsss==================",local_target_item);

            flag_object['effectTargets'].push(target);

            if(effectType=='animate'){
                console.log("aniate pararmeterss:",style_parameters);
                for(let a=0; a<style_parameters.length; a++){
                    let style_item_animate=style_parameters[a];
                    let styleproperty=style_item_animate['property'];
                    let from=style_item_animate['from'];
                    let to=style_item_animate['to'];
                    let units=style_item_animate['units'];
                    let duration=style_item_animate['duration'];

                    //console.log("적용 animateingsss:",styleproperty,from,to,units,duration);

                    animate_execute(flag_object,local_target_item,styleproperty,from,to,units,duration);
                }
            }else if(effectType=='instant'){
                for(let s in style_parameters){
                    //console.log('적용 instant stylesss:',s,style_parameters[s]);

                    local_target_item.style.setProperty(s,style_parameters[s]);
                    local_target_item.style[s]=style_parameters[s];
                }
            }
            console.log("==>>>타깃=====>endsss====================");
           // }
        }
    }

    
    //아이콘 토클 변화.특정 조작가함.
    function iconToggle_trigger(event){
        console.log('iconToggle_trigger 실행',event.target)
        let target=event.target;

        if(target.className.indexOf("javascript_iconToggle")==-1){
            target=parentTargetfind(target,"javascript_iconToggle");
        }
        console.log('targetsss:',target);
        var toggle_status=target.getAttribute("toggle_status");
        //let original_targetdata=JSON.parse(target.getAttribute("targetdata"));
        let targetdata=JSON.parse(target.getAttribute("targetdata"));
        let iconTarget=targetdata['iconTarget'];
        let iconEffect=targetdata['iconEffect'];
        console.log('iconEffect:',iconEffect,effect_functions);

        let effectFunction=effect_functions[iconEffect];

        if(toggle_status==='opened'){
        
            //iconTarget.style.transform='rotate(180deg)';
            effectFunction(iconTarget,'rotate(180deg)');
            //target.setAttribute('toggle_status','closed');
        }else{
            
            //iconTarget.style.transform='none';
            effectFunction(iconTarget,'none');
            //target.setAttribute('toggle_status','opened');
        }
    }
    function iconChange_trigger(triggertype,target,targetdatas){
        console.log("iconChnage trigger실행:",target,targetdatas);

        target.classList.add(targetdatas['effect']);

        target.setAttribute("toggle_status","closed");
    }


    function plandelete_execute(event){
        delete_trigger(plan_adapt_deleteTarget);
    }
    function deleteTarget_plan_adapt(event){
        let targetString=event.target.getAttribute("adapt_deleteTarget");
        plan_adapt_deleteTarget= targetString;

        console.log("삭제 타깃지정:",plan_adapt_deleteTarget);
    }
    function delete_trigger(targetString){
        console.log('deleteTarget triggerss 실행',targetString);

        let target=document.querySelector(`[targetindex*=${targetString}]`);
        target.remove();
    }


    function SlideToggle_trigger(event){
        //var triggertarget=event.target;//트리거타입:slideToggle,twinkToggle,.......
        console.log('SlideToggle_trigger 실행',event.target)
        let target=event.target;
        if(target.className.indexOf("javascript_slideToggle")==-1){
            target=parentTargetfind(target,"javascript_slideToggle");
        }
        let targetdatas=JSON.parse(target.getAttribute("targetdata"));
        let targetSring=targetdatas['slideTarget'];

        var toggle_status=target.getAttribute('toggle_status');
        // let original_targetdata=JSON.parse(target.getAttribute("targetdata"));

        if(toggle_status=='opened'){
            $(`[targetindex*=${targetSring}]`).slideUp();
        // targetdatas['toggle_status']='closed';

            //original_targetdata[triggertype]=targetdatas;//updatingss
            //let resultss=JSON.stringify(original_targetdata);
            target.setAttribute('toggle_status','closed');
        }else{
            $(`[targetindex*=${targetSring}]`).slideDown();
        // targetdatas['toggle_status']='opened';

        // original_targetdata[triggertype]=targetdatas;//updatingss
            //let resultss=JSON.stringify(original_targetdata);
            target.setAttribute('toggle_status','opened');
        }
    }


    
    
    function allcheckToggle_trigger(event){
        event.preventDefault();
        console.log('allcheckToggle_trigger',event.target);

        let target;
        
        if(event.target.tagName=='LABEL' || event.target.className.indexOf("checklabel")!=-1){
           target=event.target;
        }else{
            console.log("target이 img:",event.target.tagName);
            target=event.target;
            for(let j=0; j<100; j++){
                target=target.parentElement;
                console.log('target:',target);
                if(target.tagName=='LABEL' || target.className.indexOf("checklabel")!=-1){
                    break;
                }
            }
        }
        console.log('get Target:',target);

        let targetdatas=JSON.parse(target.getAttribute("targetdata"));
        let checkgroupid=targetdatas['groupid'];
        let checkgroup_indexes=targetdatas['match_group_targets'].split('^');

        let checkbox_mother=document.querySelector(`[targetindex*=${checkgroupid}]`);

        console.log("checkgroupid,targetdatas,checkgroup_indexes,checkbox_mother",targetdatas,checkgroupid,checkgroup_indexes,checkbox_mother);

        if(checkbox_mother.checked){
            checkbox_mother.checked=false;
            for(let s=0; s<checkgroup_indexes.length; s++){
                let targetindexs=checkgroupid+'_'+checkgroup_indexes[s];
    
                let local_target=document.querySelector(`[targetindex*=${targetindexs}]`);
                local_target.checked=false;
            }
        }else{
            checkbox_mother.checked=true;
            for(let s=0; s<checkgroup_indexes.length; s++){
                let targetindexs=checkgroupid+'_'+checkgroup_indexes[s];
    
                let local_target=document.querySelector(`[targetindex*=${targetindexs}]`);
                local_target.checked=true;
            }
        }
    }

    function checklistdelete_trigger(triggertype,match_group_string){
        console.log('checklistdelete triggerss 실행',triggertype,match_group_string);
        var match_group_elements=document.querySelectorAll(`[targetindex*='${match_group_string}']`);//group checkbox전체동의 체크요소 연관 그룹 체크박스그룹들..

        var checked_targets=[];
        for(let g=0; g<match_group_elements.length; g++){
            let group_targetitem=match_group_elements[g];
            console.log('grouptargetitmsss:',group_targetitem,group_targetitem.checked);
            if(group_targetitem.checked){
            checked_targets.push(group_targetitem); 
            }
        }
        console.log('삭제할 타깃들:',checked_targets);

        for(let d=0; d<checked_targets.length; d++){
            let delete_relTarget=checked_targets[d];
            for(let inner=0; inner<100; inner++){
                delete_relTarget=delete_relTarget.parentElement;

                if(delete_relTarget.className.indexOf("javascript_cartbody")!=-1){
                    console.log('삭제할 대상 타깃!:',delete_relTarget);
                    delete_relTarget.remove();
                    break;
                }
            }
        }
    }
   
    
    function move_trigger(event){
        console.log('move_trigger triggerss 실행',event.target);

        let target=event.target;
        let targetdata=JSON.parse(event.target.getAttribute("targetdata"));
        let targetString=targetdata['moveTarget'];
        
        let move_action_to_direction=targetdata['moveto'].split('|')[0];//0% -100%
        let move_action_to_value=targetdata['moveto'].split('|')[1];//0% -100%

        console.log('move action to direct,value:',move_action_to_direction,move_action_to_value,$(`[targetindex*='${targetString}']`));


        switch(move_action_to_direction){
            case 'left':
                $(`[targetindex*='${targetString}']`).animate({
                    'left' : move_action_to_value
                })
            break;

            case 'top':
                $(`[targetindex*='${targetString}']`).animate({
                    'top' : move_action_to_value
                })
            break;

            case 'bottom':
                $(`[targetindex*='${targetString}']`).animate({
                    'bottom' : move_action_to_value
                })
            break;

            case 'right':
                $(`[targetindex*='${targetString}']`).animate({
                    'right' : move_action_to_value
                })
            break;
        }
    }
    
};


execute_comment();

    