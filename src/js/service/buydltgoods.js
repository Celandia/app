var jsonp = require("fetch-jsonp");
var async = require("async");
import store from "../store/store";

export default function(){
        var user = store.getState().login.user;
        //通过商品id以及登录的用户,改变是否选该商品,  改变商品选中状态的接口

        var list = store.getState().car.buygoods ? store.getState().car.buygoods :[]
        var newlist = list.filter((item)=>{
            return item.choose == "choose";
        })
        var goodsIDlist = newlist.map((data=>{
            return data.goodsID;
        }))
        var goodsIDstr = goodsIDlist.join("-");
   
        jsonp(`http://localhost/ylovey/buydltall.php?user=${user}&goodsID=${goodsIDstr}`)
        .then(r=>r.json())
        .then(data=>{
            // console.log(data.msg)
        })
        
}