import Banner from "../components/banner";
import GoodsList from "../components/goodslist";
import Homenav from "../components/homenav";
import store from "../store/store";
import homeoneState from "../service/homeoneState";

export default React.createClass({
    getInitialState(){
        return store.getState().homeone;
    },
    updateView(){
        this.setState(store.getState().homeone);
    },
    componentDidMount(){
        this.removeUpdate = store.subscribe(this.updateView);
        store.dispatch(homeoneState);
    },
    componentWillUnmount(){
        this.removeUpdate();
    },
    render() {
        return (   
            <div className="recommend">
                <Banner list={this.state.bannerList}/>
                <div>
                    <a href="javascript:;">
                        <img src="images/new.jpg" alt="" style={{width: "100%",height : "auto"}}/>
                    </a>
                </div>
                <Homenav/>
                <GoodsList list={this.state.goodsList}/> 
            </div>
        )
    }
})