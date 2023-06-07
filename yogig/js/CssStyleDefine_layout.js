let javascript_Css_define=document.getElementsByClassName("javascript_Css_define");
scaledefine_loading_handle();

window.addEventListener('load',function(){
    console.log("page all loadedds all scriptss executess afterss...");
    scaledefine_screenResizing_handle();
    let pageLoader=document.getElementById('pageLoader');
    if(pageLoader){
        pageLoader.style.display='none';
    }
},null);
scaledefine_screenResizing_handle();

//screen resizing casess element adaptClasslist single one devicerPer matching res Class adapts
function scaledefine_screenResizing_handle(){
    
    let nowscreenwidth=window.innerWidth;
    let matching_resolution;

    for(let e=0; e<javascript_Css_define.length; e++){
        let local_targetitem=javascript_Css_define[e];
        
        if(!local_targetitem.getAttribute("adaptclasslist")){
            continue;//해당 요소 element건너뜀.
        }
        let adaptclassList = local_targetitem.getAttribute("adaptclasslist").split(",");

        let scales_define_css=local_targetitem.getAttribute("javascript_Css_define");//only stringfss. not json
        if(!scales_define_css ){
            continue;//해당 요소element는 제외
        }

        scales_define_css=scales_define_css.split('^');//array list..
        for(let s=0; s<scales_define_css.length; s++){
            let item_local=scales_define_css[s];
            if(!item_local || item_local.indexOf('$')==-1){
                continue;//해당 해상도 styleGroups 건너뜀
            }
            let resolutions=item_local.split('$')[0];//0~xx/xx 형식의 구조

            if(!resolutions || resolutions.indexOf('|')==-1){
                continue;//해당 해상도 styleGroups 건너뜀
            }
            let resolution_detail=resolutions.split('|')[0];
            if(!resolution_detail || resolution_detail.indexOf('~')==-1){
                continue;//해당 해상도 styleGroups 건너뜀
            }
            let resolution_start=resolution_detail.split("~")[0];
            let resolution_end=resolution_detail.split("~")[1];

            if(!resolution_start || !resolution_end || isNaN(resolution_start) || isNaN(resolution_end)){
                continue;//해당 해상도 styleGroups 건너뜀
            }

            if(nowscreenwidth >= resolution_start && nowscreenwidth <= resolution_end){
                matching_resolution = resolution_start+'to'+resolution_end;
                break;
            }
        }
        //console.log("matching resolutsisons:",matching_resolution);
        let findString='-'+matching_resolution;
        findString=findString.replace(/ /g,'');
        findString=findString.replace("\n","");

        let filterd_adaptClassList= adaptclassList.filter(element=>element.indexOf(findString)!=-1);
        //console.log("filteredd adapt classList(screen resziignss!!):",filterd_adaptClassList); 해당해상도에 범위해당하는 classList가 없으면 null or undefined상황.이라면 해당해상도엔 유저가 따로 스타일 지정안한것(실수or고의) 해당해상도에선 지정할 클래스가 없으므로 지정안하면됨.

        let original_classList=local_targetitem.classList;
        //console.log("original_classList:",local_targetitem,original_classList);
        for(let o=0; o<original_classList.length; o++){
            let item=original_classList[o];
            if(item.indexOf("jsclass_")!=-1){
                local_targetitem.classList.remove(item);
            }
        }
        if(filterd_adaptClassList && filterd_adaptClassList[0]){
            local_targetitem.classList.add(filterd_adaptClassList[0]);
        }
    }   
}
//created.. elements per stylesheet indiviual classess...(devices per) and added to elements classList(responseed devicess includes)
function scaledefine_loading_handle(){
    var style=document.createElement('style');
    style.type='text/css';
    document.getElementsByTagName("head")[0].appendChild(style);

    let nowscreenwidth=window.innerWidth;
    for(let e=0; e<javascript_Css_define.length; e++){

        let local_targetitem=javascript_Css_define[e];
        let element_identify_strings=randomString();
        element_identify_strings+= (new Date().getTime());

        let scales_define_css=local_targetitem.getAttribute("javascript_Css_define");//only stringfss. not json

        console.log("=========================모든 개별 타깃[LOOP START]=============================",local_targetitem,scales_define_css,element_identify_strings);
        if(!scales_define_css){
            continue;//해당 요소element는 건너뛴다.
        }
        scales_define_css=scales_define_css.split('^');//array list..

        let target_adaptClassList="";
        let matching_resolution;
        scales_define_css=scales_define_css.filter(function(element) {
            if(element!="" && element){
                return element;
            }
        });
        for(let s=0; s<scales_define_css.length; s++){
            let item_local=scales_define_css[s];
            if(!item_local){
                continue;//0~720xxxxxx,721~1280xxxx,1281~9999xxxx 해상도별 스타일집합 item자체가 비어있던 경우 해당 Listgroup은 건너뜀.(무시)
            }
            let resolutions=item_local.split('$')[0];//0~xx/xx 형식의 구조
            if(!resolutions || resolutions.indexOf("|")==-1){
                continue;//resolutions group 해상도범위|해상도범위해당디자인시안width basis 기준폭 |구분자없던경우 어휘오류간주 해상 해상도groupList자체 건너뜀.
            }

            let resolution_detail=resolutions.split('|')[0];
            if(!resolution_detail || resolution_detail.indexOf('~')==-1){
                continue;
            }

            let resolution_start=resolution_detail.split("~")[0];
            let resolution_end=resolution_detail.split("~")[1];
            if(!resolution_detail || !resolution_start || !resolution_end || isNaN(resolution_start) || isNaN(resolution_end)){
                continue;
            }

            if(nowscreenwidth >= resolution_start && nowscreenwidth <= resolution_end){
                matching_resolution = resolution_start+'to'+resolution_end;
            }
            resolution_detail=resolution_detail.replace('~','to');

            let res_basis=resolutions.split('|')[1];
            let classStyles=item_local.split('$')[1];
            let adaptvalue;
            let adapt_styles="";
            let className=`jsclass_${element_identify_strings}-${resolution_detail}`;
            className=className.replace(/ /g,'');
            className=className.replace('\n','');

            //classStyles=classStyles.split(',');
            if(!classStyles){
                continue;
            }
            classStyles=classStyles.split(';');

            if(!classStyles || classStyles.length==0 || !res_basis || isNaN(res_basis)){
                continue;
            }


            for(let i=0; i<classStyles.length; i++){
                let item=classStyles[i];
                if(!item || item.indexOf(":")==-1){
                    continue; //해상 style detail은 건너뛴다.
                }
                let property=item.split(':')[0];
                let stylevalues=item.split(':')[1];

                if(!property || !stylevalues){
                    continue;//style details에서 프로퍼티,값 둘중 하나라도 빈문자열였던경우 xxxx:xxxfgnjsfdgsd 임의의 값이라도 있으면 다 허용한다 다만 브라우저css render parser가 올바르지 않은 프로퍼티,값지정시 값적용여부 필터처리.
                }

                if(stylevalues.indexOf('fixed')!=-1){    
                    let pureval=stylevalues.replace("fixed","");

                    adaptvalue=pureval+'px';
                }else if(stylevalues.indexOf("response")!=-1){
                    let pureval=stylevalues.replace("response","");

                    adaptvalue=`calc(100vw * (${pureval} / ${res_basis} ))`;
                }else{
                    adaptvalue=stylevalues;//%,vw,등 직접 유저가 임의 custom지정 case
                }
                //console.log("adapt value real:",styleProperty,stylevalue,adaptvalue);
                console.log("styles and values:",resolutions,property,stylevalues,adaptvalue);
                className= className.replace("\n","");
                className= className.replace(/ /g,"");

                console.log("adapt classNamess:",className);
                //local_targetitem.style.setProperty(styleProperty,adaptvalue);

                if(i==classStyles.length-1){
                    adapt_styles += (`${property}:${adaptvalue};`);
                }else{
                    adapt_styles += (`${property}:${adaptvalue};`);
                }
            }//res해상도별(지정custom해상도) styless group listsss
            console.log("adapt classNamess:",className,adapt_styles);
            if(!(style.sheet||{}).insertRule)
                (style.styleSheet || style.sheet).addRule('.'+className, adapt_styles);
            else
                style.sheet.insertRule('.'+className+"{"+adapt_styles+"}",0);

            if(s==(scales_define_css.length-1)){
                target_adaptClassList+= (className);
            }else{
                target_adaptClassList+= (className+",");
            }
           
            console.log("=======================================");
        }
        console.log("===============================================================",matching_resolution,element_identify_strings,target_adaptClassList);
        
        /*let resolution_matching_class;
        if(target_adaptClassList){
            let classLists_adapt=target_adaptClassList.split(',');
            for(let cc=0; cc<classLists_adapt.length; cc++){
                let item=classLists_adapt[cc];
                //console.log("itemsss:",item,item.indexOf(`-${matching_resolution}`),`-${matching_resolution}`);
                let findString='-'+matching_resolution;
                findString=findString.replace("\n","");

                if(item.indexOf(findString)!=-1){
                    resolution_matching_class=item;
                }
            }
        }*/
        //console.log("==resolution_matching_class:",resolution_matching_class);
        //local_targetitem.classList.add(resolution_matching_class);
        local_targetitem.setAttribute("adaptClassList",target_adaptClassList);
    }
    
   // console.log("============================================================================EVENT ENDSSS =========================================================================================================================");
}
window.addEventListener("resize",scaledefine_screenResizing_handle,false);