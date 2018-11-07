import { Link } from "react-router";



var GoodsItem = React.createClass({
    propTypes : {
        goods : React.PropTypes.object
    },
    addcar(goodsID){
        return this.props.add(goodsID) 
    },
    render() {
        var {imgSrc,name,text,goodsID,price,oldprice} = this.props.goods;
        return (
            <dl>
                <a href="javascript:;" className="btn" onClick={this.addcar(goodsID)}></a>
                <Link to={`/goodsinfo/${goodsID}`}>
                    <dt>
                        <img src={imgSrc} />
                    </dt>
                    <dd>
                        <p className="name"> {name}</p>
                        <p className="text">{text}</p>
                        <p className="price">¥<span>{price}</span>.00
                            <font>{oldprice}</font>
                        </p>
                    </dd>
                </Link>
            </dl>
        )
    }
})


export default React.createClass({
    render() {
        var domList = this.props.list.map((item,index) => {
            return <GoodsItem goods={item} key={index}  add={this.props.add}/>
        });
        return (
        <div className="index_cms_list">
            <div className="tit"><a href="javascript:;"><img src="images/1f30fe1c41374970907d71109596f6b0.jpg" /></a></div>
            {domList}
        </div>
        );
    }
});