export default (state = {},action) => {
    var {type , data} = action;
    switch (type) {
        case "INIT_MY_PAGE":
            return data;
            break;    
        default:
            return state;
            break;
    }
}