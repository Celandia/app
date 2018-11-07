import { Link } from "react-router";
import { hashHistory } from "react-router";
import { Bytel, Byaccount } from "./loginUI";
import loginState from "../service/loginState";
import store from "../store/store";

export default React.createClass({
    getInitialState() {
        return {
            loginway: true,
            tel: "on",
            account: "",
            user: "",
            password: "",
            msgtel: "",
            msgaccount : ""
        }
    },
    bytel() {
        this.setState({
            loginway : true,
            tel : "on",
            account : "",
        })
    },
    byaccount() {
        this.setState({
            loginway : false,
            tel : "",
            account : "on",
        })
    },
    goback() {
        hashHistory.goBack();
    },
    loginbytel(user, code) {
        var obj = {type:"code",code:code}
        loginState(user, obj ,this)
    },
    loginbyaccount(user, password) {
        var obj = {type:"password",password:password}
        loginState(user, obj ,this)
    },
    render() {
        var loginWay = this.state.loginway ? <Bytel login={this.loginbytel} user={this.state.user} password={this.state.password} msg={this.state.msgtel}/> : <Byaccount login={this.loginbyaccount} user={this.state.user} password={this.state.password} msg={this.state.msgaccount}/>;
        return (
            <div className="login17">
                <dl>
                    <dt>
                        <p className="top_back"><a href="javascript:;" className="close" onClick={this.goback}></a></p>
                        <p>登录</p>
                    </dt>
                    <dd>
                        <ol>
                            <a href="javascript:;" onClick={this.bytel} className={this.state.tel}>手机号快捷登录</a>
                            <a href="javascript:;" onClick={this.byaccount} className={this.state.account}>帐号密码登录</a>
                        </ol>
                        {loginWay}
                        <ul className="join">
                            <p><font>第三方登录</font></p>
                            <a href="javascript:;" className="ico02"></a>
                            <a href="javascript:;" className="ico04"></a>
                            <a href="javascript:;" className="ico03"></a>
                        </ul>
                    </dd>
                </dl>
            </div>
        )
    }
})


