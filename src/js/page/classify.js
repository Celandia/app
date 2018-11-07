// import Classify from "./classifyUI";
import FooterCom from "../components/footer";
import Search from "../components/search";
import {Link} from "react-router";




export default React.createClass({
    render(){
        return (
        <div>
              <Search hasright={false}/>
              <FooterCom />
              <div className="ind_content" style={{ margin: "0.44rem 0rem 0.49rem 0rem" }}>
                <div className="newlist_submenu">
                    <dl>
                        <Link to="classify/classifyone" activeClassName="on"><font>镇店之宝</font></Link>
                        <Link to="classify/classifytwo" activeClassName="on"><font>水果</font></Link>
                        <Link to="classify/classifythree" activeClassName="on"><font>蔬菜</font></Link>
                        <Link to="classify/classifyfour" activeClassName="on"><font>肉禽蛋品</font></Link>
                        <Link to="classify/classifyfive" activeClassName="on"><font>水产海鲜</font></Link>
                        <Link to="classify/classifysix" activeClassName="on"><font>熟食面点</font></Link>
                        <Link to="classify/classifyseven" activeClassName="on"><font>粮油副食</font></Link>
                        <Link to="classify/classifyeight" activeClassName="on"><font>烘焙乳品</font></Link>
                        <Link to="classify/classifynine" activeClassName="on"><font>休闲食品</font></Link>
                        <Link to="classify/classifyten" activeClassName="on"><font>酒水茶饮</font></Link>
                    </dl>
                </div>
                <div className="newlist_submenu_bg"></div>
                {this.props.children}
            </div>
             
        </div>
        )
    }
})