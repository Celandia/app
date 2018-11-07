import store from "../store/store";
import ClassifyState from "../service/classifyState";
import ClassifyUI from "./classifynavUI";
export default React.createClass({
    getInitialState(){//获取store中state的数据状态
        return store.getState().classify;
    },
    updateView(){
        this.setState(store.getState().classify);//获取store中数据变化后,重新获取数据的方法
    },
    componentDidMount(){
        this.removeUpdate = store.subscribe(this.updateView);//向store注册更新视图的方法
        var navnum = this.props.location.pathname.split("/")[2]
        store.dispatch(ClassifyState(navnum));
    },
    componentWillReceiveProps(item){//路径改变时重新获取路径
        var num = item.location.pathname.split("/")[2]
        store.dispatch(ClassifyState(num));
    },
    componentWillUnmount(){
        this.removeUpdate();//当这个组件卸载的时候,移除更新方法
    },
    render() {
        return <ClassifyUI obj={this.state}/>
    }    
})