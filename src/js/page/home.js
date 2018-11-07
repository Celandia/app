import FooterCom from "../components/footer";
import store from "../store/store";
import Search from "../components/search";
import {Link} from "react-router";

export default React.createClass({
    getInitialState() {
        var user = store.getState().login.user;
        var isuser = null;
        var hasright = null;
            if(user){
                isuser = true;
                hasright = false;
            }else{
                isuser = false;
                hasright = true;
            }
        return {
            isuser: isuser,
            hasright : hasright
        }
    },
    render() {
        return (
            <div>
                <Search isuser={this.state.isuser} hasright={this.state.hasright}/>
                <FooterCom />
                <div className="index_cms_menu " id="pageNavi" style={{marginTop: "0.44rem",overflowY:"hidden"}}>
                    <div style={{ position: "relative",overflowY:"hidden",paddingBottom:"0.05rem"}}>
                        <dl style={{ width: "7rem"}} className="nav">
                            <dt>
                                <a href="javascript:;"><img src={require("../../images/71bbcac6-2133-c8fa-1071-cf846ea00b1e.jpg")} /></a>
                            </dt>
                            <dd>
                                <Link to="home/homeone" activeClassName="active on"><span>推荐</span></Link>
                                 <Link to="home/hometwo" activeClassName="active on"><span>水果</span></Link>
                                 <Link to="home/homethree" activeClassName="active on"><span>蔬菜</span></Link>
                                 <Link to="home/homefour" activeClassName="active on"><span>肉类</span></Link>
                                 <Link to="home/homefive" activeClassName="active on"><span>酒饮</span></Link>
                                 <Link to="home/homesix" activeClassName="active on"><span>零食</span></Link>
                                 <Link to="home/homeseven" activeClassName="active on"><span>熟食</span></Link>
                                 <Link to="home/homeeight" activeClassName="active on"><span>酒饮</span></Link>
                                 <Link to="home/homenine" activeClassName="active on"><span>乳品</span></Link>
                                 <Link to="home/hometen" activeClassName="active on"><span>厨具</span></Link>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
})