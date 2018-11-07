export default (state = {},action) => {
    var {type , data} = action;
    switch (type) {
        case "USER":
            return data;
            break;
        case "QUIT":
            return data;
            break;    
        default:
            return state;
            break;
    }
}