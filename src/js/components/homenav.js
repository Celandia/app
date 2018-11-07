import {Link} from "react-router";

var NavItem = React.createClass({
    propTypes : {
        navObj : React.PropTypes.object
    },
    render() {
        var {src,text,path} = this.props.navObj;
        return (
            <li>
                <Link to={`/${path}`}>
                    <img src={src}/>
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
                {src : "images/cz.jpg",text:"充值",path:"home"},
                {src : "images/yh.jpg",text:"银行活动",path:"classify"},
                {src : "images/lp.jpg",text:"本来礼品",path:"car"},
                {src : "images/dh.jpg",text:"兑换专区",path:"my"}
              ]
        }
    },
    render() {
        var DomList = this.state.navList.map((item,index) => {
            return <NavItem navObj={item} key={index} />
        });
        return (
                <ul className="homenav">
                    {DomList}
                </ul>
        )
    }
});
