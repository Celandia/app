import { Link } from "react-router";

var GoodsItem = React.createClass({
    addcar(goodsID){
        return this.props.add(goodsID) 
    },
    render() {
        var { name, imgSrc, price, oldPrice, goodsID ,text ,talk} = this.props.goods;
        return (
            <dl id="list_0">
                <a href="javascript:;" onClick={this.addcar(goodsID)} className="btn"></a>
                <Link to={`/goodsinfo/${goodsID}`}>
                    <dt>
                        <img className="lazy" src={imgSrc}/>
                    </dt>
                    <dd >
                        <p className="name name2">{name}</p>
                        <p className="text">{text}</p><p className="ico01">换购</p>
                        <p className="ico01">返券</p><p className="price"><span>¥{price}</span><font>¥{oldPrice}</font></p>
                        <p className="comment">{talk}条评论<span>好评100%</span></p>
                    </dd>
                </Link>
            </dl>
        )
    }
});

export default React.createClass({
    render() {
        var add = this.props.add
        var domList = this.props.list.map((item, index) => {
            return <GoodsItem goods={item} key={index} add={add}/>
        })

        return (
            <div>
                {domList}
            </div>
        )        
    }
})