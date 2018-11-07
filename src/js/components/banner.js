import Swiper from "swiper";
require("swiper/dist/css/swiper.min.css");

var BannerItem = React.createClass({
    render(){
        var {imgSrc} = this.props.banner;

        return (
            <div className="swiper-slide" >
                <a href="javascript:;">
                    <img src={imgSrc} />
                </a>
            </div>
        )
    }
})
export default React.createClass({
    getDefaultProps(){
        return {
            classText : null,
            pag : true,
            btn : false,
            auto : true
        }
    },
    render() {
        var domList = this.props.list.map((item,index) => {
            return <BannerItem banner={item} key={index} />
        });

        var pag = this.props.page ? <div className="swiper-pagination"></div> : null;
        var btn = this.props.btn ? [<div className="swiper-button-prev"></div>,<div className="swiper-button-next"></div>] : null;
        return (
            <div className={"swiper-container " + this.props.classText}>
                <div className="swiper-wrapper">
                    {domList}
                </div>
                {pag}
                {btn}
          </div >
        )
    },
    componentDidMount(){
        if(this.props.list.length != 0){
            var classText = this.props.classText == null ? ".swiper-container" : "."+this.props.classText; 
            var option = {};

            if (this.props.loop) {
                option.loop = true;
              }
        
              if (this.props.pag) {
                option.pagination = {
                  el: ".swiper-pagination"
                };
              }
        
              if (this.props.btn) {
                option.navigation = {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                };
              }
        
              if(this.props.auto){
                option.autoplay = true;
              }

            this.swiper = new Swiper(classText,option);
        }
    },
    componentDidUpdate(){
        if(this.props.list.length !=0  && !this.swiper){
            var classText = this.props.classText == null ? ".swiper-container" : "."+this.props.classText; 
            var option = {};

            if (this.props.loop) {
                option.loop = true;
              }
        
              if (this.props.pag) {
                option.pagination = {
                  el: ".swiper-pagination"
                };
              }
        
              if (this.props.btn) {
                option.navigation = {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                };
              }
        
              if(this.props.auto){
                option.autoplay = true;
              }

            this.swiper = new Swiper(classText,option);
        }else if(!!this.swiper){
            this.swiper.update();
        }
    }
})