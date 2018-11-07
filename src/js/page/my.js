import Footer from "../components/footer";
import store from "../store/store";
// import myState from "../service/myState";
import { hashHistory   } from "react-router";

export default React.createClass({
    getInitialState() {
        var user = store.getState().login.user;
        var title = ""
        if(!user){
            user="请登录";
            title = "请登录"
        }else{
            title = "退出登录"
        }
        return {
            title : "请登录",
            user: user
        }        
    },
    componentDidMount() {
        if(this.state.user != "请登录"){
            this.setState({title:"退出登录"})
        }
    },
    quit(){
        if(this.state.user != "请登录"){
            //退出登录
            var action = {
                type : "QUIT",
                data : {}
            }
            store.dispatch(action);
            hashHistory.push('/login'); 
        }else{
            hashHistory.push('/login');
        }        
    },
    render() {
        return (
            <div className="ind_content">
                <div className="mycenter_new_tit">
                    <div className="pic">
                        <p>注册会员</p>
                        <em><a href="javascript:;"><img src="images/package_head.jpg" /></a></em>
                    </div>
                    <p className="name">{this.state.user}</p>
                    <a href="javascript:;" className="experience">0成长值</a>
                </div>
                <div className="order">
                    <dl>
                        <dt>
                            <p>我的订单</p>
                            <a href="javascript:;">查看全部订单</a>
                        </dt>
                        <dd>
                            <a href="javascript:;"><em></em>
                                <img src="images/20161212icon_A@2x.png" />
                                <p>待支付</p>
                            </a>
                            <a href="javascript:;"><em></em>
                                <img src="images/20161212icon_B@2x.png" />
                                <p>配送中</p>
                            </a>
                            <a href="javascript:;"><em></em>
                                <img src="images/20161212icon_C@2x.png" />
                                <p>待评价</p>
                            </a>
                            <a href="javascript:;">
                                <img src="images/20161212icon_D@2x.png" />
                                <p>退换货</p>
                            </a>
                        </dd>
                    </dl>
                </div>
                <div className="img">
                    <img src="images/my.jpg"/>
                </div>
                <div className="outbtn"><a href="javascript:;" onClick={this.quit}>{this.state.title}</a></div>
                <Footer/>
            </div>
        )
    }
})