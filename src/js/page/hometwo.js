import Banner from "../components/banner";
import Homegoodslist from "../components/homegoodslist";
import GoodsList from "../components/goodslist";
import store from "../store/store";
import homeoneState from "../service/homeoneState";
import { hashHistory } from "react-router";
var jsonp = require("fetch-jsonp");

export default React.createClass({
    getInitialState() {
        return store.getState().homeone;
    },
    updateView() {
        this.setState(store.getState().homeone);
    },
    componentDidMount() {
        this.removeUpdate = store.subscribe(this.updateView);
        store.dispatch(homeoneState);
    },
    componentWillUnmount() {
        this.removeUpdate();
    },
    add(goodsID){
        return function(){
            var user = store.getState().login.user;
            if(user){
                jsonp(`http://localhost/ylovey/buyaddgoods.php?user=${user}&goodsID=${goodsID}&num=1&choose=choose`)
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
        return (
            <div className="recommend">
                <Banner list={this.state.bannerList} />
                <div>
                    <a href="javascript:;">
                        <img src="images/apple.jpg" alt="" style={{ width: "100%", height: "auto" }} />
                    </a>
                </div>
                <div className="index_cms_submenu">
                    <ul>
                        <li><a href="javascript:;"><img src="images/e26f0bc5-aad1-4672-a1a8-f06a716572b1_n-n.jpg" /></a></li>
                        <li><a href="javascript:;"><img src="images/183bb88d-acf0-4319-b2ac-56d646a2e426_n-n.jpg" /></a></li>
                        <li><a href="javascript:;"><img src="images/f9e927dd-c706-45d0-a921-1b77998ccc87_n-n.jpg" /></a></li>
                        <li><a href="javascript:;"><img src="images/1d81b981-5971-483e-ac5a-93c18e185d8b_n-n.jpg" /></a></li>
                    </ul>
                </div>
                <div className="index_cms_submenu">
                    <ul>
                        <li><a href="javascript:;"><img src="images/c2caf5e1-4094-4c0a-b4f3-ffee279175f5_n-n.jpg" /></a></li>
                        <li><a href="javascript:;"><img src="images/84bd8758-28bb-474b-8436-b1411a54c797_n-n.jpg" /></a></li>
                        <li><a href="javascript:;"><img src="images/660b73c7-a618-418d-bdd5-4e6345bb5570_n-n.jpg" /></a></li>
                        <li><a href="javascript:;"><img src="images/dd30682e-64f7-4280-8224-f2fc379ad867_n-n.jpg" /></a></li>
                    </ul>
                </div>
                <Homegoodslist list={this.state.homegoodslist}  add={this.add}/>
            </div>
        )
    }
})