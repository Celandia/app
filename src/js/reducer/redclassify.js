export default (state = {list:[]},action) => {
    var {type , data} = action;
    switch (type) {
        case "INIT_CLASSIFY_PAGE":
            return data;
            break;
    
        default:
            return state;
            break;
    }
}