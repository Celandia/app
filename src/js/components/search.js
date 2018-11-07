import { Link } from "react-router";
import { hashHistory } from "react-router";

export default React.createClass({
    getDefaultProps() {
        return {
            hasright: true,
            hasgoback: false,
            hasplace: true,
            isuser: false,
            showcar: false,
            hassan: false,
            num:"",
            show : "none"
        }
    },
    showmy(){
        return this.props.showmy()
    },
    render() {
        var place = this.props.hasplace ? <Link to="/home" className="city uhide">北京</Link> : null;
        var goback = this.props.hasgoback ? <Link to="classify" className="back uhide"></Link> : null;
        var rightBtn = this.props.hasright ? <div className="uhide"><Link to="login" className="link">登录</Link> </div> : null;
        var userBtn = this.props.isuser ? <div className="uhide"><Link to="my" className="personal"></Link> </div> : null;
        var carBtn = this.props.showcar ? <Link to="car" href="javascript:;" className="buy uhide"><em className="digital">{this.props.num}</em></Link> : null;
        var sanBtn = this.props.hassan ? <div className="menu uhide"><dl><dt><a className="moremenu" href="javascript:;" onClick={this.showmy}></a></dt><dd id="showmy" style={{display: this.props.show}}><Link to="home" className="ico01">首页</Link><Link to="classify" className="ico02">分类</Link><Link to="my" className="ico04 noline" >我的本来</Link></dd> </dl></div> : null;
        return (
            <div className="index_new_top index_new">
                {goback}
                {place}
                <div className="search_new_top">
                    <div className="input">
                        <a href="javascript:;"><img src={require("../../images/login_n_ico05_0e143fe9.png")} /></a>
                        <input type="text" placeholder="优级果148元10斤" className="textgt06" />
                    </div>
                </div>
                {carBtn}
                {sanBtn}
                {rightBtn}
                {userBtn}
            </div>
        )
    }
});










/* 
<div class="index_new_top cate2_new" id="category_top" style="top: 0px; margin-top: 0px;">
 
    <div class="search_new_top">
        <div class="input" id="search">
            <a href="javascript:;"><img src="images/login_n_ico05_0e143fe9.png"></a>
           <input id="searchkey" type="hidden" filter="off" value="褚橙优级果148元10斤"></div>
    </div>
    <a id="showMycart" href="javascript:;" class="buy uhide"></a>
    <a id="showMycart" href="javascript:;" target="_self" class="buy uhide">
        <em class="digital">4</em>
    </a>
    <div class="menu uhide">
        <dl>
            <dt><a class="moremenu" href="javascript:;"></a></dt>
            <dd>
                <Link to="home" class="ico01">首页</Link>
                <Link to="classify" class="ico02">分类</Link>
                <Link to="my" class="ico04 noline" >我的本来</Link>
            </dd>
        </dl>
    </div>

</div>
*/
