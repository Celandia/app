import { Link } from "react-router"
import Search from "../components/goodssearch";
import Cargoodslist from "./cargoodslist";

export default React.createClass({
    getDefaultProps() {
        return {
            choose: "choose no",
            total: 0,
            check: "choose no",
            eidt: false,
            empty:true
        }
    },
    choose(index, choose) {//选中
        return this.props.choose(index, choose)
    },
    checkall() {//全选
        return this.props.checkall()
    },
    add(index) {//增加
        var that = this;
        return function () {
            that.refs[index].value++;
            var num = that.refs[index].value
            that.props.changenum(index, num)
        }
    },
    reduce(index) {//减少
        var that = this;
        return function () {
            if (that.refs[index].value > 1) {
                that.refs[index].value--;
                var num = that.refs[index].value
                that.props.changenum(index, num)
            }
        }
    },
    delete() {//删除
        this.props.delete()
    },
    render() {
        var list = this.props.buygoods?this.props.buygoods:[];
        var eidt = this.props.eidt ? <a href="javascript:;" onClick={this.delete} className="btn">删除</a> : <div style={{ float: "right" }}>
            <Link to="pay" className="btn">去结算</Link>
            <div className="box">
                <p className="word01">合计:<span>¥{this.props.total}</span></p>
            </div>
        </div>;

        //购物车为空时,就不出现结算
        var empty = this.props.empty ? null : <div className="cartnew_foot" >
        <a href="javascript:;" className={this.props.check} onClick={this.checkall}>全选</a>
        {eidt}
    </div> ;
        return (
            <div>
{
list.map((item, index) => {
    return (
        <div key={index} className="cartnew_list">
            <div className="only_sku noline">
                <div className="sku">
                    <dl>


<dt name="swipex" style={{ marginLeft: "0rem" }}>
    <div className="quantity">

        <a href="javascript:;" className="jian" onClick={this.reduce(index)}></a>
        <input type="tel" ref={index} defaultValue={item.num} />
        <a href="javascript:;" className="jia" onClick={this.add(index)}></a>

    </div>
    <a href="javascript:;" className={item.choose} onClick={this.choose(index, item.choose)}></a>
    <a href="javascript:;" className="pic">
        <div className="box">
            <img src={item.imgSrc} />
        </div>
        <p className="name">{item.name}</p>
        <p className="ico">不可用券</p>
        <p className="price">¥<span>{item.price}</span></p>
    </a>
</dt>

                        <dd><a href="javascript:;"></a></dd>
                    </dl>
                </div>
            </div>
        </div>
    )
})
}
                {/* <div className="cartnew_foot" >
                    <a href="javascript:;" className={this.props.check} onClick={this.checkall}>全选</a>
                    {eidt}
                </div> */}
                {empty}
            </div>
        )
    }
})