export default (state = { goodslist:[], buygoods:[],eidt: false,eidttitle:"编辑",check : "choose"}, action) => {
    var { type, data } = action;
    switch (type) {
        case "INIT_BUY_PAGE":
            return data;
            break;
        default:
            return state;
            break;
    }
}