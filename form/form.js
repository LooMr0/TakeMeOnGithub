/**
 * Created by Administrator on 2017/3/28.
 */
document.getElementById("formContainer")
    .onsubmit=function () {
    var pwdEle=
        document.getElementById("password");
    var confirmPwd=
        document.querySelector("#confirmPwd");
    var password=pwdEle.value;
    var conPwd=confirmPwd.value ;
    console.log(password);
    console.log(conPwd);
    if(password!==conPwd){
        alert("!两次输入不一致！");
        return false;
    }

};
