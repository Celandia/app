import { Link } from "react-router";
import { hashHistory } from "react-router";

export default React.createClass({
    getDefaultProps() {
        return {
            hasgoback: true,
            hassan: true,
            title: "",
            haseidt: false,
            eidt : function(){},
            eidttitle: "编辑"
        }
    },
    goback() {
        hashHistory.goBack();
    },
    showmy(){
        if(document.getElementById("showmy").style.display == "none"){
             document.getElementById("showmy").style.display = "block";
        }else{
             document.getElementById("showmy").style.display = "none";
        }
     },
    render() {
        var goback = this.props.hasgoback ? <a href="javascript:;" className="back uhide" onClick={this.goback}></a> : null;
       var sanBtn = this.props.hassan ? <div className="menu uhide"><dl><dt><a className="moremenu" href="javascript:;" onClick={this.showmy}></a></dt><dd id="showmy" style={{display:"none"}}><Link to="home" className="ico01">首页</Link><Link to="classify" className="ico02">分类</Link><Link to="my" className="ico04 noline" >我的本来</Link></dd> </dl></div> : null;
       var eidt = this.props.haseidt ? <a className="edit" onClick={this.props.eidt}>{this.props.eidttitle}</a> : null
        return (
            <div className="index_new_top index_new">
                {goback}
                <div className="search_new_top">
                    <p className="title">{this.props.title}</p>
                </div>
                {sanBtn}
                {eidt}
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
