function execute_comment(){

    let prevPage=document.getElementById('prevPage');
    if(prevPage){
        console.log("prevPage:",prevPage);
        prevPage.onclick=function(){
            history.back();
        }
    }

    function commonpopup_related_eventintialize(){
        //팝업관련 요소 제어.
        let popupclosebtns=document.getElementsByClassName("javascript_popupclose");

        for(let j=0; j<popupclosebtns.length; j++){
            let item=popupclosebtns[j];

            item.onclick=popupclose;
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
            parentRoot.setAttribute('toggle_status','closed');
            let identifier_target=parentRoot.getAttribute("targetindex");

            let popupTarget=document.querySelector(`[targetindex='${identifier_target}']`);
            //let mobile_popupTarget=document.querySelector(`MOBILE [targetindex='${identifier_target}']`);

            popupTarget.setAttribute("toggle_status","closed");
        //mobile_popupTarget.setAttribute("toggle_status","closed");

            let targetindex=parentRoot.getAttribute('targetindex');
            console.log('targetindex:',targetindex);
            $(`[targetindex='${targetindex}'`).slideUp();
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
    //Event dataSetss categoreis
    var EVENT_CATEGORIES={
        'txtToggle' : txtToggle_trigger,
        'iconToggle' : iconToggle_trigger,
        'SlideToggle' : SlideToggle_trigger,
        'displayblocknone': displayblocknone_trigger,//tabmenu display block noness
        'invisibleimme' :invisibleimme_trigger,
        'iconchanged' : iconChange_trigger,
        'checkToggle':checkToggle_trigger,
        'checklist_delete':checklistdelete_trigger,//체크리스트 체크되어있는 그룹요소제거
        'delete':delete_trigger,//dom 제거
        'move':move_trigger,//left,top,position위치등 제어
        'viewunview':viewunview_trigger,//display none block 등 단일방향단방향
        'scrolloverflow':scrolloverflow_trigger ,//scrolloverflow html요소 트리거

        'fadein':fadein_trigger,
        'fadeout':fadeout_trigger,
        'cloneobject_add':cloneobjectadd_trigger,

        'highlight_inputting':highlight_inputting_trigger,
        'textarea_inputting':textarea_inputting_trigger,
        'inputform_keyboard_inputting_validation':inputform_keyboard_inputting_validation_trigger,
        'inputfinal_validate':inputfinal_validate_trigger
    }

    function commonui_javascript_event_initialize(){
        console.log('이벤트 핸들러 적용========================================>');
        //javascript triggerss globe
        var javascript_triggers=document.getElementsByClassName('javascript_trigger');
        //var slideToggle_targets=document.getElementsBClassName('javascript_slideToggle_Target');
        var javascript_writekeyboard_triggers=document.getElementsByClassName("javascript_trigger_keyboard");

        for(var ss=0; ss<javascript_triggers.length; ss++){
            var trigger_item=javascript_triggers[ss];
            //var trigger_types=trigger_item.getAttribute('triggerType');

        // trigger_types=trigger_types.split('|');//slideToggle|iconToggle|txtToggle
            trigger_item.onclick=click_handle;
            console.log('뭔데?:',trigger_item);
        }
        for(var ss=0; ss<javascript_writekeyboard_triggers.length; ss++){
            let trigger_item=javascript_writekeyboard_triggers[ss];

            trigger_item.onkeyup=keyup_handle;

        }
        function keyup_handle(event){
            console.log('keyup_handle eventsss:',event.target,event.key);
            var event_target=event.target;

            if(event_target.className.indexOf('javascript_trigger')==-1){
                event_target=event_target.parentElement;
            }

            var triggerdata=JSON.parse(event_target.getAttribute('triggerdata'));

            for(let triggertype in triggerdata){
                var triggerdata_local =triggerdata[triggertype];

                var trigger_data_state={};
            
                for(let ss in triggerdata_local){
                    let item_head=ss;
                    let item_value=triggerdata_local[ss];

                    //groupid:xx,index:xx
                    trigger_data_state[item_head]=item_value;

                }
                console.log('triggerdate statesss:',trigger_data_state);

                var trigger_typesper_targetindexs=trigger_data_state['targetindex']?trigger_data_state['targetindex'].split('^'):[];//targetindexxx:90,5,8,...
                console.log("trigger_typesper_targetindexs:",trigger_typesper_targetindexs);
                var match_targets=[];
                var match_group_string="javascript_"+triggertype+"Target"+(trigger_data_state['groupid']==""?"":`group${trigger_data_state['groupid']}`);
                var group_related_targets=document.querySelectorAll(`[targetindex*=${match_group_string}]`);

                for(let s=0; s<trigger_typesper_targetindexs.length; s++){
                    match_targets.push("javascript_"+triggertype+"Target"+(trigger_data_state['groupid']==""?"":`group${trigger_data_state['groupid']}`)+`_${trigger_typesper_targetindexs[s]}`)
                }
            
                var match_event=EVENT_CATEGORIES[triggertype];
                console.log("matchEventsss:",match_event,match_targets,triggertype);

                // var match_target=document.getElementById(match_string);
                // var match_targets=document.querySelectorAll(`[id*=${match_string}]`);//javascript_xxxxxTargetgroupN_1,5,7,9,50

                //get Target datasss(effect,txtdata,groupid,toggle_status....)
                if(match_targets.length>=1){
                    for(let t=0; t<match_targets.length; t++){
                        //let match_target_local=document.getElementById(match_targets[t]);
                        let match_target_local=document.querySelectorAll(`[targetindex*=${match_targets[t]}]`);//targetindex가 같은식별자는 유일하다(각 플랫폼기기 namespace에선 적어도 유일함, 그러나 다중namespace상황일수밖에 없기에 targetindex같은식별자수는 기기수종류와도 같기에 배열일수있다.)
            
                        if(match_target_local && match_target_local.length>=1){
                            console.log("machtargetlocasslss:",match_target_local[0]);
                            //트리거타입별,타겟들 로컬루프
                            let targetdata=JSON.parse(match_target_local[0].getAttribute('targetdata'));
                            //targetdata=targetdata.split('|');
                            let targetdatas={};//txtdata:xx,effecdt:xxx,groupid:xx,toggle_satus:xxx
                
                            for(let actiontype in targetdata){
                                console.log('tagetdatss:',targetdata[actiontype]);
                                
                                console.log('triggertypes,actiontypes:',triggertype,actiontype);
                                if(triggertype === actiontype){//match_event에 해당했던 targetdata item만 저장하여 설정.
                                    
                                    let inner_item=targetdata[actiontype];
                
                                    for(let sss in inner_item){
                                        let item_head=sss;
                                        let item_value=inner_item[sss];
                
                                        targetdatas[item_head]=item_value;
                
                                    }
                
                                }
                            }
                        
                            for(let targetlocals=0; targetlocals<match_target_local.length; targetlocals++){
                                console.log('match_target_fainlss typess:',match_event,match_targets,match_target_local,targetdatas,event.key);
                                console.log('===========================>>>>>>>');
                                match_event(triggertype,match_target_local[targetlocals],targetdatas,match_group_string,trigger_data_state,event.key);
                            }
                        }           
                    }   
                }else{
                    match_event(triggertype,match_group_string,event.key);
                }
            }
        }


        function click_handle(event){
            var event_target=event.target;

            if(event_target.className.indexOf("javascript_trigger")==-1){
                event_target=event_target.parentElement;
            }

            console.log('eventtargetss:',event_target);
            
            var triggerdata=JSON.parse(event_target.getAttribute('triggerdata'));
            //groupid,index
            
            for(let triggertype in triggerdata){

                var triggerdata_local=triggerdata[triggertype];//트리거타입별로 크게 | 존재하고->|안에는 각각 타입별 상세한 내역들 존재

                var triggerper_targetdatas={};
                var trigger_data_state={};
                for(let ss in triggerdata_local){
                    let item_head=ss;
                    let item_value=triggerdata_local[ss];

                    //groupid:xx,index:xx
                    trigger_data_state[item_head]=item_value;

                }
                console.log('triggerdate statesss:',trigger_data_state);


                if(trigger_data_state['clickmenubar']=='true'){
                    //메뉴바관련 타깃였던 경우 clickmenubar형식 타입였던경우에만 해당 타깃의 자식으로써 spanbar막대추가.
                    
                    //let actiontype=event_target.getAttribute("triggerType");
                    console.log('targetssenu:',`PC,mobile tabcontentbar_${triggertype}_group${trigger_data_state['groupid']}`);

                    let menubarTarget=document.querySelector(`[targetindex='tabcontentbar_${triggertype}_group${trigger_data_state['groupid']}']`);
                    //let menubarTargetMobile=document.querySelector(`MOBILE [targetindex='tabcontentbar_${triggertype}_group${trigger_data_state['groupid']}']`);

                    console.log('menubarTarget:',menubarTarget);
                    let target_originindex=event_target.getAttribute("targetindex");

                    let clickTarget=document.querySelector(`[targetindex='${target_originindex}']`);
                    //let clickTargetMobile=document.querySelector(`MOBILE [targetindex='${target_originindex}']`);

                    clickTarget.appendChild(menubarTarget);
                //clickTargetMobile.appendChild(menubarTargetMobile);
                }


                var trigger_typesper_targetindexs=trigger_data_state['targetindex']?trigger_data_state['targetindex'].split('^'):[];//targetindexxx:90,5,8,...
                console.log("trigger_typesper_targetindexs:",trigger_typesper_targetindexs);
                var match_targets=[];
                var match_group_string="javascript_"+triggertype+"Target"+(trigger_data_state['groupid']==""?"":`group${trigger_data_state['groupid']}`);
                var group_related_targets=document.querySelectorAll(`[targetindex*=${match_group_string}]`);

                for(let s=0; s<trigger_typesper_targetindexs.length; s++){
                    match_targets.push("javascript_"+triggertype+"Target"+(trigger_data_state['groupid']==""?"":`group${trigger_data_state['groupid']}`)+`_${trigger_typesper_targetindexs[s]}`)
                }
            
                var match_event=EVENT_CATEGORIES[triggertype];
                console.log("matchEventsss:",match_event,match_targets,triggertype);

                // var match_target=document.getElementById(match_string);
                // var match_targets=document.querySelectorAll(`[id*=${match_string}]`);//javascript_xxxxxTargetgroupN_1,5,7,9,50

                //get Target datasss(effect,txtdata,groupid,toggle_status....)
                if(match_targets.length>=1){
                    for(let t=0; t<match_targets.length; t++){
                        //let match_target_local=document.getElementById(match_targets[t]);
                        let match_target_local=document.querySelectorAll(`[targetindex*=${match_targets[t]}]`);//targetindex가 같은식별자는 유일하다(각 플랫폼기기 namespace에선 적어도 유일함, 그러나 다중namespace상황일수밖에 없기에 targetindex같은식별자수는 기기수종류와도 같기에 배열일수있다.)
            
                        if(match_target_local && match_target_local.length>=1){
                            console.log("machtargetlocasslss:",match_target_local);
                            //트리거타입별,타겟들 로컬루프
                            let targetdata=JSON.parse(match_target_local[0].getAttribute('targetdata'));
                            //targetdata=targetdata.split('|');
                            let targetdatas={};//txtdata:xx,effecdt:xxx,groupid:xx,toggle_satus:xxx
                
                            for(let actiontype in targetdata){
                                console.log('tagetdatss:',targetdata[actiontype]);
                                
                                console.log('triggertypes,actiontypes:',triggertype,actiontype);
                                if(triggertype === actiontype){//match_event에 해당했던 targetdata item만 저장하여 설정.
                                    
                                    let inner_item=targetdata[actiontype];
                
                                    for(let sss in inner_item){
                                        let item_head=sss;
                                        let item_value=inner_item[sss];
                
                                        targetdatas[item_head]=item_value;
                
                                    }
                
                                }
                            }
                        
                            for(let targetlocals=0; targetlocals<match_target_local.length; targetlocals++){
                                console.log('match_target_fainlss typess:',match_event,match_targets,match_target_local,targetdatas);
                                console.log('===========================>>>>>>>');
                                match_event(triggertype,match_target_local[targetlocals],targetdatas,match_group_string,trigger_data_state,event.key);
                            }
                        }           
                    }   
                }else{
                    match_event(triggertype,match_group_string,event.key);
                }
            }
        }
    }
    commonui_javascript_event_initialize();



    function highlight_inputting_trigger(triggertype,target,targetdatas,match_group_string,trigger_data_state,eventkey){
        console.log('highlight_inputting_trigger',triggertype,target,targetdatas,trigger_data_state,match_group_string,eventkey);

        target.innerText=eventkey;

        var triggerfrom_get=targetdatas['triggerfrom'];
        var triggerfromTarget=document.querySelector(`[triggerindex='${triggerfrom_get}']`);

        console.log('triggerfrom_get:',triggerfromTarget,triggerfromTarget.value,triggerfromTarget.value.length);

        let targetindex=target.getAttribute("targetindex");
        $(`[targetindex='${targetindex}']`).stop(true);
        $(`[targetindex='${targetindex}']`).animate({
            'fontSize': '90px'
        },1500, function(){
            $(this).animate({
                'fontSize':'40px',
            },200)
        }
        )
    }
    function textarea_inputting_trigger(triggertype,target,targetdatas,match_group_string,trigger_data_state,eventkey){
        console.log('inputting_textareatrigger',triggertype,target,targetdatas,trigger_data_state,match_group_string,eventkey);

        var triggerfrom_get=targetdatas['triggerfrom'];
        var triggerfromTarget=document.querySelector(`[triggerindex='${triggerfrom_get}']`);

        console.log('triggerfrom_get:',triggerfromTarget,triggerfromTarget.value,triggerfromTarget.value.length);
        switch(targetdatas['inputtingtrack']){
            case 'length':
                target.innerText=triggerfromTarget.value.length;
            break;

            case 'raw':
                target.innerText = triggerfromTarget.value;
            break;
        }
    }
    /*유효성check final관련 local함수*/
    function inputfinal_validate_trigger(triggertype,match_group_string){

        console.log('inputfinal_validate_trigger triggerss 실행',triggertype,match_group_string);
        let javascript_inputvalidate_items=document.getElementsByClassName("javascript_inputvalidate");

        let password_values=[];//password,passwordrepat,password related anothers..

        for(let i=0;i<javascript_inputvalidate_items.length; i++){ 
            let item=javascript_inputvalidate_items[i];
            
            console.log('itemss:',item);

            if(item.getAttribute("type")=="checkbox"){
                console.log("checkbox요소:",item);
                let related_child_checkboxes=document.querySelectorAll(`[targetindex*='${item.getAttribute("targetindex")}']`);

                console.log("related child checkboxess:",related_child_checkboxes);

                for(let c=0; c<related_child_checkboxes.length; c++){
                    let item_=related_child_checkboxes[c];

                    if(!item_.checked){
                        alert("checkboxs관련 모든 요소중에 미체크되어있는것 하나라도 발견시에!");
                        return false;
                    }
                }
            }

            if(item.getAttribute("type")=="text"){
                console.log('item text valuess:',item,item.value);   

                if(item.value=="" || !item.value){
                    alert("요소중 text입력요소중 값이 비어있는것 하나라도 발견의 경우");
                    return false;
                }
            }
            if(item.getAttribute("type")=='password'){
                password_values.push(item.value);
            }

            if(item.getAttribute("type")=="radio"){
                console.log('radio valuess:',item,item.value,item.getAttribute("name"));   
                let name=item.getAttribute("name");
                let radiogroup_checked=document.querySelector(`[name='${name}']:checked`);
                console.log('radio names 관련 요소집합이였다면 그중에서 해당 그룹라디오가 체크되어있는지 여부:',radiogroup_checked);

                //console.log('radio name valuess:',document.querySelector(`[name='${name}']`).value);
                if(!radiogroup_checked || radiogroup_checked===null){
                    alert("요소중 라디오그룹중 체크안되어있는게 하나라도 있는경우");
                    return false;
                }
            }
        
            if(item.getAttribute("isvalid")=="false"){
                alert("validate요소중 값이 유효하지 않은것  하나라도 발견의 경우");
                return false;
            }
        }
        console.log("입력 password valuesss:",password_values);
        
        if(!array_is_allsame_elements(password_values)){
            alert("비밀번호부분을 확인해주세요!");
            return false;
        }
        alert("유효성 통과!");

        return true;
    }

    function inputform_keyboard_inputting_validation_trigger(triggertype,target,targetdatas,match_group_string,trigger_data_state){
        console.log('inputform_keyboard_inputting_validation_trigger',triggertype,target,targetdatas,trigger_data_state,match_group_string);

        var triggerfrom_get=targetdatas['triggerfrom'];
        var triggerfromTarget=document.querySelector(`[triggerindex='${triggerfrom_get}']`);

        var trigger_with_relTargetstring=trigger_data_state['relTargetindex'];
        var trigger_with_relTarget=document.querySelector(`[triggerindex='${trigger_with_relTargetstring}']`);

        console.log('triggerfrom_get:',triggerfromTarget,triggerfromTarget.value,triggerfromTarget.value.length);
        console.log('trigger_with_relTarget',trigger_with_relTarget);
        
        var target_effect=targetdatas['effect'];

        var triggerdata_validation_type=trigger_data_state['validationtype'];

        var isvalid_temp;
    
        switch(triggerdata_validation_type){
            case 'id':
                isvalid_temp=idcheck(triggerfromTarget.value);
            break;

            case 'password':
                isvalid_temp=isPassword(triggerfromTarget.value);
            break;

            case 'password_match':
                isvalid_temp=password_match(trigger_with_relTarget.value,triggerfromTarget.value);
            break;

            case 'name':
                isvalid_temp=isname(triggerfromTarget.value);
            break;

            case 'phone':
                isvalid_temp=isPhoneNumber(triggerfromTarget.value);
            break;

            case 'email':
                isvalid_temp=isEmail(triggerfromTarget.value);
            break;

            case 'birth':
                isvalid_temp=isbirth(triggerfromTarget.value);
            break;
        }
        console.log('isvalids dteapsss:',isvalid_temp);
        if(isvalid_temp){
            triggerfromTarget.setAttribute("isvalid","true");

            switch(target_effect){
                case 'checkbox':
                    checkbox_checking(target,true);
                break;

                case 'viewunview':
                    viewunview_common(target,"none");
                break;
            }
        }else{
            triggerfromTarget.setAttribute("isvalid","false");

            switch(target_effect){
                case 'checkbox':
                    checkbox_checking(target,false);
                break;

                case 'viewunview':
                    viewunview_common(target,"block");
                break;
            }
        }
    }

    function displayblocknone_trigger(triggertype,target,targetdatas,match_group_string){
        console.log('displayblocknone_trigger 실행',triggertype,target,targetdatas,match_group_string);
        var targetindex=target.getAttribute("targetindex");

        var group_related_targets=document.querySelectorAll(`[targetindex*=${match_group_string}]`);

        for(let s=0; s<group_related_targets.length; s++){
            let item=group_related_targets[s];
            let item_targetindex=item.getAttribute("targetindex");

            if(item_targetindex === targetindex){
                //item.style.display='block';
                item.style.removeProperty("height");
                item.style.removeProperty("transform");
                item.style.removeProperty("opacity");
            }else{
                //item.style.display='none';
                item.style.setProperty("height","1px","important");
                item.style.transform='translateX(-100%)';
                item.style.opacity=0;
            }
        }
    }
    function txtToggle_trigger(triggertype,target,targetdatas){
        console.log('txtToggle 실행',target,targetdatas);

        let local_status=targetdatas['txtdata'].split(',');
        let target_innertxtStatus=target.innerText;
        console.log('targetinnertxtStautss:',target_innertxtStatus);
        let target_innertxtStatusindex=local_status.indexOf(target_innertxtStatus);

        let change_index=target_innertxtStatusindex + 1 > 1? 0 :  1;

        target.innerText=local_status[change_index];
    }

    function checkToggle_trigger(triggertype,target,targetdatas,match_group_string){
        console.log('checkToggletriger실행',triggertype,target,targetdatas,match_group_string);
        var match_group_element=document.querySelector(`[targetindex='${match_group_string}']`);//group checkbox전체동의 체크요소
        
    // for(let g=0; g<match_group_elements.length; g++){
            let group_targetitem=match_group_element;
            console.log('grouptargetitmsss:',group_targetitem,group_targetitem.checked);
            if(group_targetitem.checked){
                target.checked=false;//이벤트발동당시에 체크해제상태라면(자바스크립트 핸들러실행시점이 더 먼저다 >html native 이벤트처리보다)
                group_targetitem.setAttribute("isvalid","false");
            }else{
                target.checked=true;
                group_targetitem.setAttribute("isvalid","true");
            }
        //}
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
    function delete_trigger(triggertype,target,targetdatas){
        console.log('deleteTarget triggerss 실행',triggertype,target,targetdatas);

        target.remove();

    }
    function cloneobjectadd_trigger(triggertype,target,targetdatas,match_group_string,trigger_data_state){
        console.log('cloneobjectadd_trigger triggerss 실행',triggertype,target,trigger_data_state);

        var triggerfrom_get=targetdatas['triggerfrom'];
        var triggerfromTarget=document.querySelector(`[triggerindex='${triggerfrom_get}']`);

        var trigger_with_relTargetstring=trigger_data_state['relTargetindex'];
        var trigger_with_relTarget=document.querySelector(`[triggerindex='${trigger_with_relTargetstring}']`);

        console.log('triggerfrom_get:',triggerfromTarget,triggerfromTarget.value,triggerfromTarget.value.length);
        console.log('trigger_with_relTarget',trigger_with_relTarget);

        let clonecopyTarget=trigger_with_relTarget.cloneNode(true);
        
        let create_text_span=document.createElement("span");
        create_text_span.innerText=triggerfromTarget.value;
        let find_insertbefore_target;
        for(cc=0; cc<clonecopyTarget.childNodes.length; cc++){
            let child=clonecopyTarget.childNodes[cc];

            if(child.tagName=='IMG' && child.className.indexOf("xbtn")!=-1){
                find_insertbefore_target=child;
                break;
            }
        }
        let random_targetindex=randomString();
        find_insertbefore_target.setAttribute("triggerdata",`{"delete":{"groupid":"","targetindex":"${random_targetindex}"}}`);
        clonecopyTarget.setAttribute("targetindex",`javascript_deleteTarget_${random_targetindex}`);

        clonecopyTarget.insertBefore(create_text_span,find_insertbefore_target);
        clonecopyTarget.style.display='flex';

        target.appendChild(clonecopyTarget);

        commonui_javascript_event_initialize();//동적 생성된 요소에 대해서 동적으로 갱신update event handling overlapping진행.

    }
    function scrolloverflow_trigger(triggertype,target,targetdatas,match_group_string,trigger_data_state){
        console.log('scrolloverflow_trigger triggerss 실행',triggertype,target,trigger_data_state);

        let action_to_value=trigger_data_state['to'];

        target.style.overflow=action_to_value;
    }
    function viewunview_trigger(triggertype,target,targetdatas,match_group_string,trigger_data_state){
        console.log('viewunview_trigger triggerss 실행',triggertype,target,trigger_data_state);

        let action_to_value=trigger_data_state['to'];

        target.style.display=action_to_value;
    }
    function move_trigger(triggertype,target,targetdatas,match_group_string,trigger_data_state){
        console.log('move_trigger triggerss 실행',triggertype,target,trigger_data_state);

        let move_action_to_direction=trigger_data_state['to'].split('|')[0];//0% -100%
        let move_action_to_value=trigger_data_state['to'].split('|')[1];//0% -100%

        console.log('move action to direct,value:',move_action_to_direction,move_action_to_value);

        let target_index=target.getAttribute("targetindex");

        switch(move_action_to_direction){
            case 'left':
                $(`[targetindex='${target_index}']`).animate({
                    'left' : move_action_to_value
                })
            break;

            case 'top':
                $(`[targetindex='${target_index}']`).animate({
                    'top' : move_action_to_value
                })
            break;

            case 'bottom':
                $(`[targetindex='${target_index}']`).animate({
                    'bottom' : move_action_to_value
                })
            break;

            case 'right':
                $(`[targetindex='${target_index}']`).animate({
                    'right' : move_action_to_value
                })
            break;
        }
    }
    function iconToggle_trigger(triggertype,target,targetdatas){
        console.log('iconToggle_trigger 실행',target,targetdatas)

        var toggle_status=target.getAttribute("toggle_status");
        //let original_targetdata=JSON.parse(target.getAttribute("targetdata"));

        if(toggle_status==='opened'){
        target.classList.add(targetdatas['effect']);
            //targetdatas['toggle_status']='closed';

            //original_targetdata[triggertype]=targetdatas;
            //let resultss=JSON.stringify(original_targetdata);
            target.setAttribute('toggle_status','closed');
        }else{
            target.classList.remove(targetdatas['effect']);
            //targetdatas['toggle_status']='opened';

            //original_targetdata[triggertype]=targetdatas;
            //let resultss=JSON.stringify(original_targetdata);
            target.setAttribute('toggle_status','opened');
        }
    }
    function iconChange_trigger(triggertype,target,targetdatas){
        console.log("iconChnage trigger실행:",target,targetdatas);

        target.classList.add(targetdatas['effect']);

        target.setAttribute("toggle_status","closed");
    }
    function invisibleimme_trigger(triggertype,target,targetdatas){
        console.log('invisibleimme_trigger 실행',target,targetdatas)

        //target.classList.add(targetdatas['effect']);

        
        target.setAttribute('toggle_status','closed');

        target.style.display='none';

    }

    function SlideToggle_trigger(triggertype,target,targetdatas){
        //var triggertarget=event.target;//트리거타입:slideToggle,twinkToggle,.......
        console.log('SlideToggle_trigger 실행',target,targetdatas)

        var toggle_status=target.getAttribute('toggle_status');
    // let original_targetdata=JSON.parse(target.getAttribute("targetdata"));

        if(toggle_status=='opened'){
            $(`[targetindex='${target.getAttribute('targetindex')}']`).slideUp();
        // targetdatas['toggle_status']='closed';

            //original_targetdata[triggertype]=targetdatas;//updatingss
            //let resultss=JSON.stringify(original_targetdata);
            target.setAttribute('toggle_status','closed');
        }else{
            $(`[targetindex='${target.getAttribute('targetindex')}']`).slideDown();
        // targetdatas['toggle_status']='opened';

        // original_targetdata[triggertype]=targetdatas;//updatingss
            //let resultss=JSON.stringify(original_targetdata);
            target.setAttribute('toggle_status','opened');

        }
    }
    function fadein_trigger(triggertype,target,targetdatas){
        console.log('fadeinTrigger실행 ',target,triggertype,targetdatas);

        $(`[targetindex='${target.getAttribute("targetindex")}']`).fadeIn();
    }
    function fadeout_trigger(triggertype,target,targetdatas){
        console.log('fadeoutTrigger실행 ',target,triggertype,targetdatas);

        $(`[targetindex='${target.getAttribute("targetindex")}']`).fadeOut();
    }

};


execute_comment();

    