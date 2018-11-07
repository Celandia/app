var jsonp = require("fetch-jsonp");
var async = require("async");

export default function(goodsID){
    return (dispatch,getState)=>{
        //商品详情的接口

        jsonp(`http://localhost/ylovey/goodsbyID.php?goodsID=${goodsID}`)
        .then(r => r.json())
        .then(data => {
            data.bannerlist = eval(data.bannerlist)
            var action = {
                type : "INIT_GOODSLISTINFO_PAGE",
                data : data
            }
            dispatch(action)
        });   
    }
}