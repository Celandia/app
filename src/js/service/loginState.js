var jsonp = require("fetch-jsonp");
var async = require("async");
import store from "../store/store";
import { hashHistory } from "react-router";

export default function (user, login , that) {
    var re = /^1\d{10}$/
    if (re.test(user)) {
        if (login.type == "code") {
            //验证码
            jsonp(`http://localhost/ylovey/loginbytel.php?user=${user}&code=${login.code}`)
                .then(r => r.json())
                .then(data => {
                    if(data.code == 1){
                        // var storage = window.sessionStorage;
                        // storage.setItem("user",user);
                        //将登录用户存入store中
                        var action = {
                            type : "USER",
                            data : {user:user}
                        }
                        store.dispatch(action);
                        hashHistory.goBack()
                    }else if(data.code == 2){
                        alert(data.msg)
                        // var storage = window.sessionStorage;
                        // storage.setItem("user",user);
                        var action = {
                            type : "USER",
                            data : {user:user}
                        }
                        store.dispatch(action);
                        hashHistory.goBack()
                    }else{
                        that.setState({msgtel : data.msg})
                    }
                })
        } else {
            //密码
            jsonp(`http://localhost/ylovey/loginbyaccount.php?user=${user}&password=${login.password}`)
            .then(r => r.json())
            .then(data => {
                if(data.code == 1){
                    var action = {
                        type : "USER",
                        data : {user:user}
                    }
                    store.dispatch(action);
                    hashHistory.goBack();
                }else{
                    that.setState({msgaccount : data.msg})
                }
            })
        }
    } else {
        if (login.type == "code"){
            that.setState({msgtel :"手机号格式错误"})
        }else{
            that.setState({msgaccount :"手机号格式错误"})
        }
    }

}