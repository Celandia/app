import {Link} from "react-router";
var List = React.createClass({
    render(){
    var ullist = this.props.ullist;
    return (
        <ul className="middle">
        <li>
            <Link to="goodslist">
                <img className="lazy" src={ullist.imgSrc} style={{ width: "62px", height: "62px" }} />
                <p>{ullist.name}</p>
            </Link>
        </li>
    </ul>
    )
}
})

var Navlist = React.createClass({
    render() {
        var {title,ul} = this.props.nav;
        var UlList = ul.map((item,index) => {
            return <List ullist={item} key={index}/>
        })
        return (
            <dl>
            <dt>
                <Link to="goodslist">{title}</Link>
            </dt>
            <dd>
                {UlList}
            </dd>
        </dl>
        )
    }
})
export default React.createClass({
    render() {
        var obj = this.props.obj;
        var List = obj.list.map((item,index) => {
            return <Navlist nav={item} key={index} />
        });
        return (
            <div className="newlist_all">
                <Link to="goodslist" className="all">全部<font>{obj.title}</font><p></p></Link>
                {List}
            </div>
        )
    }
})