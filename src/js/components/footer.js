import {Link} from "react-router";

var NavItem = React.createClass({
    propTypes : {
        navObj : React.PropTypes.object
    },
    render() {
        var {icon,text,path} = this.props.navObj;
        var id=  9;
        return (
            <li>
                <Link to={`/${path}`} activeClassName="active">
                    <div className={"iconfont "+icon} ></div>
                    <p>{text}</p>
                </Link>
            </li>
        )
    }
})
export default React.createClass({
    getInitialState(){
        return {
            navList : [
                {icon : "icon-home",text:"首页",path:"home"},
                {icon : "icon-classify",text:"分类",path:"classify"},
                // {icon : "icon-circle",text:"充值",path:"login"},
                {icon : "icon-car",text:"购物车",path:"car"},
                {icon : "icon-wo",text:"我的本来",path:"my"}
              ]
        }
    },
    render() {
        var DomList = this.state.navList.map((item,index) => {
            return <NavItem navObj={item} key={index} />
        });
        return (
                <ul className="index_new_menu">
                    {DomList}
                </ul>
        )
    }
});
