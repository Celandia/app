import { Link } from "react-router";
import goodsmapState from "../service/goodsmapState";
import { hashHistory } from "react-router";
import store from "../store/store";
import GoodsmapUI from "./goodsMapUI";
var jsonp = require("fetch-jsonp");

export default React.createClass({
    getInitialState() {
        return store.getState().goodsmap;
    },
    updateView() {
        this.setState(store.getState().goodsmap);
    },
    componentDidMount() {
        this.removeUpdate = store.subscribe(this.updateView);
        var sort = this.props.location.pathname.split("/")[2]     
        store.dispatch(goodsmapState(sort));
    },
    componentWillReceiveProps(item){
         var action = {
            type: "ENPTY",
            data: {}
        }
        store.dispatch(action)
        var sort = item.location.pathname.split("/")[2]
        store.dispatch(goodsmapState(sort));
    },
    componentWillUnmount() {
        this.removeUpdate();
    },
    add(goodsID){//加入购物车
        return function(){
            var user = store.getState().login.user;
            if(user){
                jsonp(`http://localhost/ylovey/buyaddgoods.php?user=${user}&goodsID=${goodsID}&num=1`)
                .then(r=>r.json())
                .then(data=>{
                    alert(data.msg)
                })
            }else{
                alert("请登录")
                hashHistory.push('/login');
            }
        }
    },
    render() {
        this.state.goodslist = this.state.goodslist ? this.state.goodslist : []
        return (
            <div className="category_list" style={{ paddingTop: "0.9rem" }}>
                <GoodsmapUI list={this.state.goodslist} add={this.add}/>
            </div>
        )
    }
})