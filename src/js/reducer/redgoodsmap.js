export default (state = { goodslist: [] }, action) => {
    var { type, data } = action;
    switch (type) {
        case "INIT_GOODSMAP_PAGE":
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