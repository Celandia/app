
import Search from "../components/search";
import { Link } from "react-router";
// import goodslistState from "../service/goodslistState";
// import store from "../store/store";
// import GoodsMap from "./goodsMap";
export default React.createClass({
    getInitialState() {
        // return store.getState().goodslist;
        return {
            show : "none",
            showmy : "none"
        }
    },
    show() {
        if(this.state.show == "block"){
            this.setState({show : "none"})
        }else{
            this.setState({show : "block"})
            var that = this;
            setTimeout(function() {
                that.setState({show : "none"})
            }, 1000);
        }
    },
    showmy() {
        if(this.state.showmy == "block"){
            this.setState({showmy : "none"})
        }else{
            this.setState({showmy : "block"})
        }
    },
    render() {
        return (
            <div>
                <Search showcar={true} hassan={true} hasplace={false} hasright={false} hasgoback={true} showmy={this.showmy} show={this.state.showmy}/>
                <div className="ind_content">
                    <div className="newlist_s_fixedbox ">
                        <div className="newlist_new_tab" style={{ marginTop: "0.44px" }}>
                            <dl>
                                <dt>
                                    <a href="javascript:;" className="all on" onClick={this.show}>综合</a>
                                </dt>
                                <dd style={{ display: this.state.show }}>
                                    <Link to="/goodslist/goodsone" activeClassName="on" >综合排序</Link>
                                    <Link to="/goodslist/goodstwo" activeClassName="on" >价格排序</Link>
                                    <Link to="/goodslist/goodsthree" activeClassName="on" >销量优先</Link>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="newlist_s_list category mui-scroll-wrapper">
                    <div className="mui-scroll">
                        {/* <GoodsMap list={this.state.goodslist} add={this.addgoods}/> */}
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
})