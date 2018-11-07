var jsonp = require("fetch-jsonp");
var async = require("async");
import store from "../store/store";

export default  (dispatch,getState)=>{
    async.parallel({
        buy : callback => {
             var user = store.getState().login.user;
            jsonp(`http://localhost/ylovey/buygoodsget.php?user=${user}`)
            .then(r=>r.json())
            .then(data=>{
                for(var i=0;i<data.length;i++){
                    data[i].choose = "choose no";
                }
                var empty = false;
                if(data.length == 0){
                    var empty = true;
                }
                var buy = {
                    buygoods : data,
                    empty,  
                }
                callback(null,buy);
            })   
        },
        goodslist : callback => {
            jsonp("http://localhost/ylovey/goods.php")
            .then(r => r.json())
            .then(data => {
                callback(null,data);
            })
        }
    },(error,data) => {
        var obj = {
            buygoods : data.buy.buygoods,
            total : 0,
            empty : data.buy.empty,
            check : "choose no",
            goodslist : data.goodslist
        }
        var action = {
            type : "INIT_BUY_PAGE",
            data : obj
        }
        dispatch(action)
    })
    
}