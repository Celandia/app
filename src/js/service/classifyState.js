var jsonp = require("fetch-jsonp");



function Classifynav(navnum) {
    return function (dispatch, getState) {
        // console.log(navnum)
        var nav = {
            title: "镇店之宝",
            list: [
                {
                    title: "本来推荐", ul: [{ name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" }
                    ]
                },
                {
                    title: "料理之味", ul: [{ name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    ]
                },
                {
                    title: "有机食材", ul: [{ name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    { name: "褚橙", imgSrc: "images/914cd23e-b330-4844-bf30-85bb29113701.jpg" },
                    ]
                },

            ]
        }
        var nava = {
            title: "水果",
            list: [
                {
                    title: "本来推荐", ul: [{ name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    { name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    { name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    ]
                },
                {
                    title: "精选水果", ul: [{ name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    { name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    { name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    ]
                },
                {
                    title: "有机食材", ul: [{ name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    { name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    { name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    { name: "佳沛奇异果", imgSrc: "images/e75c14b8-3d48-4c8d-9904-3ab2aa2034be.jpg" },
                    ]
                },

            ]
        }
        var navb = {
            title: "蔬菜",
            list: [
                {
                    title: "热门推荐", ul: [{ name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    { name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    { name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    ]
                },
                {
                    title: "新鲜蔬菜", ul: [{ name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    { name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    { name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    ]
                },
                {
                    title: "礼盒/组合", ul: [{ name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    { name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    { name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    { name: "缤纷番茄", imgSrc: "images/f6763e4c-18fc-43b8-a73b-87f11f8ef0d6.jpg" },
                    ]
                },

            ]
        }
        var navc = {
            title: "肉禽蛋品",
            list: [
                {
                    title: "热门推荐", ul: [{ name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    { name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    { name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    ]
                },
                {
                    title: "牛羊", ul: [{ name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    { name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    { name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    ]
                },
                {
                    title: "猪肉", ul: [{ name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    { name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    { name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    { name: "安格斯牛肉", imgSrc: "images/6537dd16-f693-42e3-96b6-20a5b03efa59.jpg" },
                    ]
                },

            ]
        }
        function navfn(navnum) {
            switch (navnum) {
                case "classifytwo":
                    return nav = nava
                    break;
                case "classifythree":
                    return nav = navb
                    break;
                case "classifyfour":
                    return nav = navc
                    break;
                case "classifyfive":
                    nava.title = "水产海鲜"
                    return nav = nava
                    break;
                case "classifysix":
                    navb.title = "熟食面点"
                    return nav = navb
                    break;
                case "classifyseven":
                    navc.title = "粮油副食"
                    return nav = navc
                    break;
                case "classifyeight":
                    nava.title = "烘焙乳品"
                    return nav = nava
                    break;
                case "classifynine":
                    navb.title = "休闲食品"
                    return nav = navb
                    break;
                case "classifyten":
                    navc.title = "酒水茶饮"
                    return nav = navc
                    break;
                default:
                    return nav
                    break;
            }
        }
        var action = {
            type: "INIT_CLASSIFY_PAGE",
            data: navfn(navnum)
        };
        dispatch(action);

    }
}

export default Classifynav;
