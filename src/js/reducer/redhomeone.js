export default (state = {bannerList:[],goodsList:[],homegoodslist:[]},action) => {
    var {type , data} = action;
    switch (type) {
        case "INIT_HOMEONE_PAGE":
            return data;
            break;
    
        default:
            return state;
            break;
    }
}