import Search from "../components/goodssearch";
import { Link } from "react-router";
import store from "../store/store";
var jsonp = require("fetch-jsonp");



export default React.createClass({
    getInitialState() {
        var list =  store.getState().car.buygoods ? store.getState().car.buygoods :[];
        var data =  list.filter((item)=>{
            return item.choose == "choose"
        })
        var total = 0;
        for(var i=0;i<data.length;i++){
            total += data[i].total;
        }
        return {
            buygoods : data,
            total,
        };
    },
    gopay(){
        alert("支付成功")
        var list = this.state.buygoods ? this.state.buygoods : [];
        var idstr = list[0].goodsID;
        for(var i=1;i<list.length;i++){
            idstr = idstr + "-" + list[i].goodsID;
        }
        var user = store.getState().login.user;
        jsonp(`http://localhost/ylovey/pay.php?user=${user}&goodsID=${idstr}`)
        .then(r=>r.json())
        .then(data=>{
            console.log(data)
        })
    },
    render() {
        var list = this.state.buygoods;
        return (
            <div>
                <Search title={"订单信息"} hassan={false} />
                <div className="orderlist">
                    {/* <dl>
                        <a href="javascript:;" className="addre">
                            <p className="text">您还未创建订单地址</p>
                        </a>
                    </dl> */}
                    <dl>
                        <dt>
                            <em>购买商品</em>
                        </dt>

{
    list.map((item, index) => {
        return (
            <dd key={index}>
                <a href="javascript:;">
                    <p>共{item.num}件</p>
                    <ul>
                        <li><img src={item.imgSrc} /></li>
                    </ul>
                </a>
            </dd>
        )
    })

} 

                    </dl>
                </div>
                <div className="pay">
                    <p>应付金额：
                        <span>￥{this.state.total}</span>
                    </p>
                    <a href="javascript:;" onClick={this.gopay}>去支付</a>
                </div>

            </div>
        )
    }
})