
import GoodsinfoUI from "./goodsinfoUI";
import store from "../store/store";
import goodsinfoState from "../service/goodsinfoState";
import { hashHistory } from "react-router";
import { Link } from "react-router";
var jsonp = require("fetch-jsonp");


export default React.createClass({
    getInitialState(){
        return store.getState().goodslistinfo;
    },
    updateView(){
        this.setState(store.getState().goodslistinfo);
    },
    componentDidMount(){
        this.removeUpdate = store.subscribe(this.updateView);
        store.dispatch(goodsinfoState(this.props.params.goodsID));
    },
    componentWillUnmount(){
        this.removeUpdate();
        var action = {
            type: "ENPTY",
            data: {}
        }
        store.dispatch(action)
    },
    addcar(){
        var user = store.getState().login.user;
        var num = this.state.num + 1;
        this.setState({num});
        if(user){
            jsonp(`http://localhost/ylovey/buyaddgoods.php?user=${user}&goodsID=${this.state.goodsID}&num=1`)
        }else{
            alert("请登录")
            hashHistory.push('/login');
        }
    },
    render(){
        this.state.bannerlist = this.state.bannerlist ? this.state.bannerlist : [];
        this.state.num = this.state.num ? this.state.num == 0 ? null: this.state.num : null;
        return (
            <div>
                <GoodsinfoUI obj={this.state}/>
                <div className="new_goods_buy">
                    <Link to="car" className="share ico01 head_buy" ><div className="quantity digital">{this.state.num}</div>购物车</Link>
                    <a href="javascript:;" className="share ico02">收藏</a>
                    <a href="javascript:;" className="share ico03">客服</a>
                    <a href="javascript:;" onClick={this.addcar} className="btn">加入购物车</a>
                </div>
            </div>
    )
    }
})