import Search from "../components/goodssearch";
import Carbuy from "./carbuy"
import Carempty from "./carempty"
import Cargoodslist from "./cargoodslist"
import store from "../store/store";
import buygoodsState from "../service/buygoodsState";
import buydltgoods from "../service/buydltgoods";
var jsonp = require("fetch-jsonp");

export default React.createClass({
    getInitialState() {
        return store.getState().car;
    },
    updateView() {
        this.setState(store.getState().car);
    },
    componentDidMount() {
        this.removeUpdate = store.subscribe(this.updateView);
        store.dispatch(buygoodsState);
    },
    componentWillUnmount() {
        this.removeUpdate();
        
        var user = store.getState().login.user;
        if(user){
            var list = this.state.buygoods;
            if(list.length!=0){
                var goodsidstr = list[0].goodsID;
                var numstr = list[0].num;
                for(var i=1;i<list.length;i++){
                    goodsidstr = goodsidstr + "-" + list[i].goodsID;
                    numstr = numstr + "-" + list[i].num;
                }
                jsonp(`http://localhost/ylovey/buychange.php?user=${user}&goodsID=${goodsidstr}&num=${numstr}`)
                .then(r=>r.json())
                .then(data => {
                    // console.log(data)
                })
            }
        }
    },
    choose(index,choose){//选中商品
        var that = this;
        return function(e){
            if(e.target.attributes.class.value == "choose"){
                e.target.attributes.class.value = "choose no";
                choose = "choose no";
                
            }else{
                e.target.attributes.class.value = "choose";
                choose = "choose";
            }
            var newlist = that.state.buygoods;
            newlist[index].choose = choose;
            //计算所有选中商品的总和
            var chooselist = that.state.buygoods.filter((item)=>{
                return item.choose == "choose";
            })
            var total = 0;
            for(var i=0;i<chooselist.length;i++){
                total += chooselist[i].total;
            }
            that.setState({
                buygoods : newlist,
                total
            })
        } 
    },
    changenum(index,num){//商品数量的改变
        num = num * 1;
          
        var newlist = this.state.buygoods;
        newlist[index].num = num;
        newlist[index].total = num * newlist[index].price;
        var total = 0;
        for(var i=0;i<newlist.length;i++){
            total += newlist[i].total;
        }
        this.setState({
            buygoods : newlist,
            total
        })
    },
    eidt(){//编辑状态
        if(this.state.eidt){
            this.state.eidt = false
            this.setState({eidttitle:"编辑"})
        }else{
            this.state.eidt = true
            this.setState({eidttitle:"取消"})
        }
    },
    checkall(){//全选
        if(this.state.check == "choose"){
            this.setState({check:"choose no"})
            var newlist = this.state.buygoods.filter((item)=>{
                return item.choose = "choose no"
            })
            var chooselist = this.state.buygoods.filter((item)=>{
                return item.choose == "choose";
            })
            var total = 0;
            for(var i=0;i<chooselist.length;i++){
                total += chooselist[i].total;
            }
            this.setState({buygoods : newlist,total})
        }else{
            this.setState({check:"choose"})
            var newlist = this.state.buygoods.filter((item)=>{
                return item.choose = "choose"
            })
            var chooselist = this.state.buygoods.filter((item)=>{
                return item.choose == "choose";
            })
            var total = 0;
            for(var i=0;i<chooselist.length;i++){
                total += chooselist[i].total;
            }
            this.setState({buygoods : newlist,total})
        }
    },
    delete(){//删除
        buydltgoods();
        var newlist = this.state.buygoods.filter((item)=>{
            return item.choose == "choose no";
        })
        this.setState({buygoods : newlist})
    },
    render() {
        var empty = this.state.empty ? <Carempty/> : null;
        return (
            <div>
                <Search title={"购物车"} hassan={false} haseidt={true} eidt={this.eidt} eidttitle={this.state.eidttitle}/>
                <div>
                    <div className="cartnew_content">
                        <Carbuy delete={this.delete} eidt={this.state.eidt} buygoods={this.state.buygoods} checkall={this.checkall} check={this.state.check} total={this.state.total} choose={this.choose} changenum={this.changenum} empty={this.state.empty}/>
                        {empty}
                    </div>
                    <Cargoodslist goodslist={this.state.goodslist}/>
                </div>
            </div>
        )
    }
})