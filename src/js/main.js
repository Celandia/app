import {render} from "react-dom";
import RouteCom from "./router/routerCom";

require('./static/flexible');

require("../css/main.less");

document.documentElement.style.fontSize = `${document.documentElement.clientWidth / 750 * 200}px`;


render(<RouteCom/>,document.getElementById("app"));
