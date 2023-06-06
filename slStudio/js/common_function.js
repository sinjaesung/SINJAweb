/*유효성 체킹 versionsss*/
function idcheck(inputting_value){
    console.log("inputtinvaliudd valuefss:",inputting_value);
     var regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
      
     return regExp.test(inputting_value);
     
 }
 function isEmail(asValue) {
     var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  
     return regExp.test(asValue);
 } 
 function isPhoneNumber(asValue) {
     var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  
     return regExp.test(asValue);
 }
 function isPassword(asValue) {
     console.log("inpupassword valuefss:",asValue);
 
     var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  
     return regExp.test(asValue);
 }
 function isname(asValue){
     return asValue.length>=3?true:false;
 }
 function password_match(password,passwordrepeat){
     console.log("password_match valuefss:",password,passwordrepeat);
 
     return (password===passwordrepeat);
 }
 function isPhoneNumber(asValue) {
     console.log("isPhoneNumber valuefss:",asValue);
 
     var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  
     return regExp.test(asValue);
 }
 function isbirth(asValue){
     console.log("isbirth valuefss:",asValue);
 
     var regExp =/([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
 
     return regExp.test(asValue);
 }
 function isNumber(asValue){
    let regExp = /^[0-9]+$/; 
    
    return regExp.test(asValue);
        
 }
 
 
/*범용함수*/
 function checkbox_checking(target,cond){
    console.log('target checkbox chekcing:',target);
    target.checked=cond;
}
function viewunview_common(target,cond){
    console.log('target viewunview condingtinoss:',target);
    target.style.display=cond;
}

function object_to_string(target){
    let stringss='';
    let keylength=Object.keys(target).length;

    let cnt=0;
    for(let i in target){
        console.log('object keysss:',i)
        if(cnt == (keylength-1)){
            stringss += (`${i}:${target[i]}`);
        }else{
            stringss += (`${i}:${target[i]}|`);
        }
        cnt++;
    }
    console.log('object to stringsss results:',stringss);
    return stringss;
}
function string_to_object(target){
    let array_split=target.split('|');

}
function randomString(){
    return Math.random().toString(36).substr(2,11); // "twozs5xfni"

}
function array_is_allsame_elements(target){

    for(let j=0; j<target.length; j++){
        let item=target[j];
        console.log("현재index요소,이전index요소:",item,target[j-1]);

        if(j>=1){
            if(item !== target[j-1]){
                alert("배열타깃요소 배열원소중 서로다른값을 가진것이 최초로 하나라도 발견시에!");
                return false;
            }
        }
    }
    return true;
}
function getRandomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();
      
    return new Date(startDate + Math.random() * (endDate - startDate));
}
  
function findchild_elements(target,targetString,storeObject){
    //console.log("관련 요소",target,targetString,storeObject);
    
    if(target.className.indexOf(targetString)!=-1 || target.id.indexOf(targetString)!=-1 ){
        //console.log("찾아낸 타깃!:",target);
        storeObject[targetString].push(target);

        return target;
    }

    let childrens=target.children;
    for(let s=0; s<childrens.length; s++){
        let child_item=childrens[s];

        findchild_elements(child_item,targetString,storeObject);//자식이 있던경우 그 자식을 또 재귀탐색.
    }
    return false;
}
function findchild_elements_total(target,targetString,storeObject){
    //console.log("matching targetss:",target,targetString,storeObject);

    if(target.getAttribute('targetindex') && target.getAttribute("targetindex").indexOf(targetString)!=-1){
        //console.log("find matching targetindexsss targetsss ",target,storeObject[targetString]);
        storeObject[targetString].push(target);
    }

    let childrens=target.children;
    for(let s=0; s<childrens.length; s++){
        let child_item=childrens[s];

        findchild_elements_total(child_item,targetString,storeObject);
    }
    return false;//if can't find more childrenss and  return functions!
}

function parentTargetfind(target,findString){
    let parentTarget=target;

    for(let i=0; i<1000;i++){
        parentTarget=parentTarget.parentElement;

        if(parentTarget){
            console.log("target:",parentTarget);
            console.log("parentTRarget:",parentTarget.className);
            if( parentTarget.className.indexOf(findString)!=-1 ){
                break;
            }
        }
       
    }
    console.log("반환 parentTarget:",parentTarget);

    return parentTarget;
 }
 function element_offsetTop_finds(target){
    let parentTarget=target;
    //console.log("parentTarget:",target,parentTarget);
    let offsetTops = parentTarget.offsetTop;
    for(let i=0; i<1000; i++){
        parentTarget=parentTarget.parentElement;
        //console.log("aparentTargetss:",parentTarget);
        if(parentTarget.offsetTop){
            offsetTops += parentTarget.offsetTop;
        }

        if(parentTarget.tagName=='HTML')
            break;
    }
    return offsetTops;
 }

 let effect_functions={
    'rotate180_fix' : rotate180_fix,
    'fadein_simple' : fadein_simple,
    'fadeout_simple' : fadeout_simple,
    'slideup_simple': slideup_simple,
    'slidedown_simple': slidedown_simple
 }
//effect functionss
 function rotate180_fix(targetString,executeString){
    let target=$(`[targetindex=${targetString}]`)[0];

    target.style.transform=executeString;
}

function fadein_simple(targetString){
    console.log('fadein_simple ',targetString);

    let random_red=parseInt(256*(Math.random()) );
    let random_green=parseInt(256*(Math.random()) );
    let random_blue=parseInt(256*(Math.random()) );

    console.log("rand color rgbss:",random_red,random_green,random_blue);

    let target_item=document.querySelector(`[targetindex='${targetString}']`);
    target_item.style.backgroundColor=`rgba(${random_red},${random_green},${random_blue},0.8)`;
    
    $(`[targetindex='${targetString}']`).stop();
    $(`[targetindex='${targetString}']`).fadeIn();
  
}
function fadeout_simple(targetString){
    console.log('fadeout_simple ',targetString);

    $(`[targetindex='${targetString}']`).stop();
    $(`[targetindex='${targetString}']`).fadeOut();
}

function slideup_simple(targetString){
    console.log('slideup_simple ',targetString);
    
    $(`[targetindex*='${targetString}']`).stop();
    $(`[targetindex*='${targetString}']`).slideUp();
}
function slidedown_simple(targetString){
    console.log('slidedown_simple ',targetString);
    
    $(`[targetindex*='${targetString}']`).stop();
    $(`[targetindex*='${targetString}']`).slideDown();
}

