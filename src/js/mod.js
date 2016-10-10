$(function(){
    Mod.phoneList();
    Mod.accList();
});

var Mod = {
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
                me.find(".mod-accItem:first-child,.mod-accItem:nth-child(6n+0)").addClass("no-nthchild-left");
                me.find(".mod-accItem:nth-child(-n+5)").addClass("no-nthchild-top");
            });
        };
    }
};