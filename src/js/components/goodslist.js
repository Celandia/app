var GoodsItem = React.createClass({
    propTypes : {
        goods : React.PropTypes.object
    },
    render() {
        var {imgSrc} = this.props.goods;
        return (
            <li>
                <a>
                    <img src={imgSrc}/>
                </a>
            </li>
        )
    }
})


export default React.createClass({
    render() {
        var domList = this.props.list.map((item,index) => {
            return <GoodsItem goods={item} key={index} />
        });
        return (
            <ul className="goods-list">{domList}</ul>
        );
    }
});