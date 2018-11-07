var Bytel = React.createClass({
    login(){
        var user = this.refs.user.value
        var code = this.refs.code.value
        return this.props.login(user,code)
    },
    render() {
        var msg = this.props.msg ? this.props.msg : null;
        return (
            <ul>
                <li className="ico01">
                    <a href="javascript:;" className="yzm no">获取验证码</a>
                    <p><input ref="user" defaultValue={this.props.user} type="tel" placeholder="请输入您的手机号" />
                        {/* <a href="#" className="close"></a> */}
                    </p>
                </li>
                <li className="ico03">
                    <p><input ref="code" defaultValue={this.props.code} type="tel" placeholder="请输入验证码" />
                        {/* <a href="#" className="close"></a> */}
                    </p>
                </li>
                <div id="pageMsg" className="prompt" style={{color:"#FF9600",float: "left",marginTop:"0.1rem"}}>{msg}</div>
                <div className="btn">
                    <p className="prompt">未注册过的手机将自动保存为本来账户</p>

                    <a href="javascript:;" className="login none_bg" onClick={this.login}>登录</a>
                </div>
            </ul>
        )
    }
})
var Byaccount = React.createClass({
    login(){
        var user = this.refs.user.value
        var password = this.refs.password.value
        return this.props.login(user,password)
    },
    render() {
        var msg = this.props.msg ? this.props.msg : null;
        return (
            <ul>
            <li className="ico02">
                <p>
                    <input ref="user" defaultValue={this.props.user} type="text" placeholder="手机号/邮箱/用户名"/>
                    {/* <a href="javascript:;" className="close" style="display: none;"></a> */}
                </p>
            </li>
            <li className="ico04">
                <a href="javascript:;" className="eye "></a>
                <p>
                    <input ref="password" defaultValue={this.props.password} className="long on" type="password" placeholder="请输入密码"/>
                {/* <a href="javascript:;" className="close" style="display: none;"></a> */}
                </p>
            </li>
            {/* <li className="ico05" id="verifyArea" style="display:none;">
                <em id="verifyReset"><img id="verifyImg" src="https://m.benlai.com/reVryImg/loadVryImg/6896"/></em>
                <p>
                    <input id="loginVerify" name="loginVerify" type="text" placeholder="请输入验证码"/>
                    <a href="javascript:;" className="close"></a>
                </p>
            </li> */}
            <div id="pageMsg" className="prompt" style={{color:"#FF9600",float: "left",marginTop:"0.1rem"}}>{msg}</div>
            <div className="btn">
                <a href="javascript:;" className="login none_bg" onClick={this.login}>登  录</a>
                <a href="javascript:;" className="forget">忘记密码</a>
                <p className="protocol"><label className="on"><input type="radio" name="options"/>我已阅读并同意本来生活网</label><a href="javascript:;" >《用户使用协议》</a></p>
            </div>
        </ul>
        )
    }
})

export {Bytel , Byaccount}