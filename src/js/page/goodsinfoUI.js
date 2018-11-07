import Search from "../components/goodssearch";
import Banner from "../components/banner";

export default React.createClass({
    render() {
        var {name,text,price,oldPrice,goodsID}=this.props.obj
       
        var oldprice = oldPrice !="0" ? <span>¥{oldPrice}.00 </span> : null;
        
        return (
            <div>
                <Search title={"商品详情"}/>
                <div className="ind_content">
                    <div className="banner">
                        <Banner list={this.props.obj.bannerlist} />
                    </div>
                    <div className="new_goods_box">
                        <dl className="info">
                            <div className="name">{name}</div>
                            <div className="word">{text}</div>
                            <div className="price">
                                <p className="now">
                                    ¥<span>{price}</span>.00<font> </font>
                                </p>
                            </div>
                            <div className="oldprice">
                                <p>
                                    {oldprice}
                                </p>
                            </div>
                        </dl>
                    </div>
                    <div className="new_goods_norm">
                        <a href="javascript:;" >
                            <span>已选</span>
                            　{name}
                            <font style={{ color: "#999", float: "right" }}>其他规格 &gt;</font>
                        </a>
                    </div>
                    <div className="new_goods_callout">
                        <dl>
                            <dt>
                                <font><span>包邮</span>北京市满 60.00 元包邮</font>
                                </dt>
                                <dd className="callout">
                                    <a href="javascript:;">
                                        <em>全面质检</em>
                                        <em>资深买手</em>
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
        )
    }
})