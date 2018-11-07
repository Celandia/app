export default (state = {bannerlist:[]},action) => {
    var {type , data} = action;
    switch (type) {
        case "INIT_GOODSLISTINFO_PAGE":
            return data;
            break;
        case "ENPTY":
            return data;
            break;
        default:
            return state;
            break;
    }
}