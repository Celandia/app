var jsonp = require("fetch-jsonp");
var async = require("async");

export default (dispatch,getState)=>{
    var homeone = {
        bannerList: [],
        goodsList:[],
        homegoodslist:[]
    };
    async.parallel({
        bannerList : callback => {
            //首页轮播图接口
            var list = [
                {imgSrc: "images/banner1.jpg"},
                {imgSrc: "images/banner2.jpg"},
                {imgSrc: "images/banner3.jpg"},
                {imgSrc: "images/banner4.jpg"},
                {imgSrc: "images/banner5.jpg"}
            ]
            callback(null,list);
        },
        goodsList : callback => {
            var list = [
                {imgSrc: "images/good.jpg"},
                {imgSrc: "images/goods.jpg"},
                {imgSrc: "images/goods3.jpg"},
                {imgSrc: "images/goods4.jpg"},
                {imgSrc: "images/goods1.jpg"},
                {imgSrc: "images/goods2.jpg"},
                {imgSrc: "images/goods5.jpg"},
                {imgSrc: "images/goods6.jpg"},
                {imgSrc: "images/goods7.jpg"},
                {imgSrc: "images/goods8.jpg"},
                {imgSrc: "images/goods9.jpg"},
                {imgSrc: "images/goods10.jpg"},
            ]
            callback(null,list);
        },
        homegoodslist : callback => {
            jsonp("http://localhost/ylovey/goods.php")
            .then(r=>r.json())
            .then(data => {
                callback(null,data);
            })
        }
    },(error,data) => {
        homeone.bannerList = data.bannerList;
        homeone.goodsList = data.goodsList;
        homeone.homegoodslist = data.homegoodslist;
        var action = {
            type : "INIT_HOMEONE_PAGE",
            data : homeone
        }
        dispatch(action)
    })
}