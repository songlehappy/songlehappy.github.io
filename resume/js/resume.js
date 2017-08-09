
//创建resume 对象

var resume = {
    //$节点存放点
    dom: {},
    //初始化
    initResume: function () {
        this.getDom();
        this.detialScroll();
        
    },
    //增加$节点
    getDom: function () {
        this.dom.wrap = $('section').get(0);
        this.dom.resumeMsg = $('.resume-msg');
        this.dom.subDetial = $('.detial div');

    },
    //detial部分滚动
    detialScroll: function () {
        var dom = this.dom;
        var myscroll = new IScroll(dom.wrap, {
            mouseWheel: true,
            scrollbars: true,
        })
        $(dom.wrap).scroll(function(){
            console.log($(this).scrollTop())
        });
        this.clickmsg(myscroll);
    },
    //点击个人信息跳转
    clickmsg: function (myscroll) {
        var dom = this.dom;
        dom.resumeMsg.on('click', 'li', function () {
            var index = $(this).index();
            // console.log($(this).index());
            myscroll.scrollToElement(dom.subDetial.get(index), 1000)
            
        })
    },

}


//开始进入
$(function () {
    resume.initResume();
    new WOW({
        boxClass: 'hello',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
    }).init();
})

