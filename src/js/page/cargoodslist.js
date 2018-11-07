import { Link } from "react-router";
import store from "../store/store";
import { hashHistory } from "react-router";
var jsonp = require("fetch-jsonp");

var GoodsItem = React.createClass({
    addcar(goodsID) {
        return this.props.addcar(goodsID)
    },
    render() {
        var { name, imgSrc, price, oldPrice, goodsID, text } = this.props.goods;
        var oldPricespan = oldPrice==0 ? null : <font>¥{oldPrice}</font>;
        return (
            <dl className="left">
                <a href="javascript:;" onClick={this.addcar(goodsID)} className="btn"></a>
                <Link to={`/goodsinfo/${goodsID}`}>
                    <dt>
                        <img src={imgSrc} />
                    </dt>
                    <dd>
                        <p className="name">{name}</p>
                        <p className="text">{text}</p>
                        <p className="price">
                            <span> ¥{price}</span>{oldPricespan}</p>
                    </dd>
                </Link>
            </dl>
        )
    }
});





export default React.createClass({
    addcar(goodsID) {
        return function () {
            var user = store.getState().login.user;
            if (user) {
                jsonp(`http://localhost/ylovey/buyaddgoods.php?user=${user}&goodsID=${goodsID}&num=1`)
                    .then(r => r.json())
                    .then(data => {
                        alert(data.msg)
                    })
            } else {
                alert("请登录")
                hashHistory.push('/login');
            }
        }
    },
    render() {
        var list = this.props.goodslist ? this.props.goodslist : []
        var domList = list.map((item, index) => {
            return <GoodsItem goods={item} key={index} addcar={this.addcar} />
        })
        return (
            <div style={{ float: "left", width: "100%" }}>
                <div className="cartnew_hotlist">
                    <div className="tit"><p><font>优惠推荐</font></p></div>
                    {domList}
                </div>
            </div>
        )
    }
})