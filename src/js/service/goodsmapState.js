var jsonp = require("fetch-jsonp");
var async = require("async");

export default function (sort) {
    return (dispatch, getState) => {
        //商品列表的接口,需要排序
        switch (sort) {
            case "goodsone":
                jsonp("http://localhost/ylovey/goods.php")
                    .then(r => r.json())
                    .then(data => {
                        var goods = { goodslist: [] };
                        goods.goodslist = data;
                        var action = {
                            type: "INIT_GOODSMAP_PAGE",
                            data: goods
                        }
                        dispatch(action)
                    })
                break;
            case "goodstwo":
                jsonp("http://localhost/ylovey/goodsprice.php")
                    .then(r => r.json())
                    .then(data => {
                        var goods = { goodslist: [] };
                        goods.goodslist = data;
                        var action = {
                            type: "INIT_GOODSMAP_PAGE",
                            data: goods
                        }
                        dispatch(action)
                    })
                break;
            default:
                jsonp("http://localhost/ylovey/goodstalk.php")
                    .then(r => r.json())
                    .then(data => {
                        var goods = { goodslist: [] };
                        goods.goodslist = data;
                        var action = {
                            type: "INIT_GOODSMAP_PAGE",
                            data: goods
                        }
                        dispatch(action)
                    })
                break;
        }



    }
}