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
