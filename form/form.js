/**
 * Created by Administrator on 2017/3/28.
 */
document.getElementById("formContainer")
    .onsubmit=function () {
    var pwdEle=
        document.getElementById("password");
    var confirmPwd=
        document.querySelector("#confirmPwd");

    var mobinumber=
        document.querySelector("#mobinumber");

    var password=pwdEle.value;
    var conPwd=confirmPwd.value ;
    console.log(password);
    console.log(conPwd);
    if(password!==conPwd){
        alert("!两次输入不一致！");
        return false;
    }
function isMobileNumber(num) {
    var isMobileNumber=
        /^1[34578]\d{9}$/.test(num);
    return isMobileNumber;
}
var flag=isMobileNumber(mobinumber.value);
    if (!flag){
        alert("手机号格式错误！");
        return false;
    }
};
