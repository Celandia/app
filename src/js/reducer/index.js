import {combineReducers} from "redux";
import homeone from "./redhomeone";
import classify from "./redclassify";
import goodsmap from "./redgoodsmap";
import goodslistinfo from "./redgoodslistinfo";
import car from "./redcar";
import my from "./redmy";
import login from "./redlogin";

export default combineReducers({
    homeone,
    classify,
    goodsmap,
    goodslistinfo,
    car,
    my,
    login,
})