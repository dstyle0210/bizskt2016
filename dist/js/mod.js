$(function(){
    Mod.phoneList();
    Mod.accList();
    Mod.tabUi();
});

var Mod = {
    /*! IE8 수정됨 */
    // 핸드폰 리스트 서포트 : Modernizr 필수
    phoneList : function() {
        var modPhoneList = $(".mod-phoneList");
        if (modPhoneList.length && !Modernizr.nthchild) {
            modPhoneList.each(function () {
                var me = $(this);
                me.find(".mod-phoneItem:first-child,.mod-phoneItem:nth-child(6n+0)").addClass("no-nthchild-left");
                me.find(".mod-phoneItem:nth-child(-n+5)").addClass("no-nthchild-top");
            });
        };
    },
    // 악세사리 리스트 서포트 : Modernizr 필수
    accList:function(){
        var modAccList = $(".mod-accList");
        if (modAccList.length && !Modernizr.nthchild) {
            modAccList.each(function () {
                var me = $(this);
                if(modAccList.hasClass("type-5up")){
                    me.find(".mod-accItem:first-child,.mod-accItem:nth-child(5n+1)").addClass("no-nthchild-left");
                    me.find(".mod-accItem:nth-child(-n+5)").addClass("no-nthchild-top");
                }else if(modAccList.hasClass("type-6up")){
                    me.find(".mod-accItem:first-child,.mod-accItem:nth-child(6n+1)").addClass("no-nthchild-left");
                    me.find(".mod-accItem:nth-child(-n+6)").addClass("no-nthchild-top");
                }
            });
        };
    },
    // 탭 링크영역 서포트 : Modernizr 필수
    tabUi:function(){
        var modTab = $(".tab-link");
        if (modTab.length && !Modernizr.nthchild) {
            if(modTab.hasClass("tab-3up")){
                modTab.find("li").eq(1).css({"left":"33.2%"});
                modTab.find("li").eq(2).css({"left":"66.4%"});
            }else if(modTab.hasClass("tab-2up")){
                modTab.find("li").eq(1).css({"left":"50%"});
            };
        }
    }
    /*! // IE8 수정됨 */
};

/**
 * 프로그래스에 링크 삽입하는 스크립트.
 * @param linkArr : 링크경로들(배열)
 * @param n : 탭의 갯수
 * @example : stepAppendLink( ["http://a.com","http://b.com"] , 4);
 */
function stepAppendLink(linkArr,n){
    var stepDiv = $("#stepDiv");
    var wid = (100/n)+"%";
    $(linkArr).each(function(idx,link){
        var a = $("<a href='"+link+"'></a>").attr("style","display:inline-block;width:"+wid+";height:60px");
        stepDiv.append(a);
    });
};

/**
 * LNB의 해피포인트 계산기
 * @param wrapperId : "#아이디" 로 삽입.
 * @method happyPointFn.calc() // 남은 해피포인트 계단 및 입력하기
 * @method happyPointFn.getOriginPoint() // 초기에 입력된 해피포인트 (숫자형)
 * @method happyPointFn.getOptionPoint() // 옵션에 적용된 해피포인트 (숫자형)
 * @method happyPointFn.getModulusPoint() // 남은 해피포인트 (숫자형)
 */
var happyPointClass = function(wrapperId){
    this.init = function(wrapperId){
        var o = {};
        o.div = $(wrapperId);
        o.originDiv = o.div.find(".point i").eq(0);
        o.resultDiv = o.div.find(".point i").eq(1).css({"font-size":"21px"});
        o.originPoint = (o.originDiv.html().match(/[0-9]/gi).join(""))*1;
        this.o = o;
    };
    this.getOriginPoint = function(){
        return this.o.originPoint;
    };
    this.getOptionPoint = function(){
        var o = this.o;
        var optPoint = 0;
        o.div.find(".mod-accItem").each(function(){
            var sel = $(this).find("select").val();
            var point = $(this).attr("point")*1;
            optPoint += sel*point;
        });
        return optPoint;
    };
    this.getModulusPoint = function(){
        return (this.o.originPoint - this.getOptionPoint());
    };
    this.calc = function(){
        var o = this.o;
        var modulusPoint = this.getModulusPoint();
        if(modulusPoint<0){
            alert("해피포인트가 부족합니다.");
            //   return;
        };
        var pointStr = (modulusPoint+"").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        o.resultDiv.html(pointStr+" point");
    };

    this.init(wrapperId);
    this.calc();
};