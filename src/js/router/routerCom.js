import {hashHistory , Router , Route , IndexRedirect} from "react-router";
import Root from "../page/root";
import Home from "../page/home";
import Homeone from "../page/homeone";
import Hometwo from "../page/hometwo";
import Classify from "../page/classify";
import Classifynav from "../page/classifynav";
import Car from "../page/car";
import My from "../page/my";
import Pay from "../page/pay";
import Middle from "../page/middle";
import Goodslist from "../page/goodslist";
import GoodsMap from "../page/goodsMap";
import Goodsinfo from "../page/goodsinfo";
import Login from "../page/login";

export default React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                 <Route path="/" component={Root}>
                    <IndexRedirect to="home"/>
                    <Route path="home" component={Home}>
                        <IndexRedirect to="homeone"/>
                        <Route path="homeone" component={Homeone}></Route>
                        <Route path="hometwo" component={Hometwo}></Route>
                        <Route path="homethree" component={Homeone}></Route>
                        <Route path="homefour" component={Hometwo}></Route>
                        <Route path="homefive" component={Homeone}></Route>
                        <Route path="homesix" component={Hometwo}></Route>
                        <Route path="homeseven" component={Homeone}></Route>
                        <Route path="homeeight" component={Hometwo}></Route>
                        <Route path="homenine" component={Homeone}></Route>
                        <Route path="hometen" component={Hometwo}></Route>
                    </Route>
                    <Route path="classify" component={Classify}>
                        <IndexRedirect to="classifyone"/>
                        <Route path="classifyone" component={Classifynav}></Route>
                        <Route path="classifytwo" component={Classifynav}></Route>
                        <Route path="classifythree" component={Classifynav}></Route>
                        <Route path="classifyfour" component={Classifynav}></Route>
                        <Route path="classifyfive" component={Classifynav}></Route>
                        <Route path="classifysix" component={Classifynav}></Route>
                        <Route path="classifyseven" component={Classifynav}></Route>
                        <Route path="classifyeight" component={Classifynav}></Route>
                        <Route path="classifynine" component={Classifynav}></Route>
                        <Route path="classifyten" component={Classifynav}></Route>
                    </Route>
                    <Route path="car" component={Car}/>
                    <Route path="my" component={My}/>
                    <Route path="middle" component={Middle}/>
                    
                    <Route path="goodslist" component={Goodslist}>
                        <IndexRedirect to="goodsone"/>
                        <Route path="goodsone" component={GoodsMap}></Route>
                        <Route path="goodstwo" component={GoodsMap}></Route>
                        <Route path="goodsthree" component={GoodsMap}></Route>
                    </Route>
                    <Route path="goodsinfo/:goodsID" component={Goodsinfo}/>
                    <Route path="login" component={Login}/>
                    <Route path="pay" component={Pay}/>
                </Route>
            </Router>
        )
    }
})