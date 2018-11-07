import { Link } from "react-router";
export default React.createClass({
    render() {
        return (
            <div className="cartnew_leisure">
                <p>
                    购物车里还没有好吃的，您可以
            </p>
                <Link to="home">回首页逛逛</Link>
            </div>
        )
    }
})