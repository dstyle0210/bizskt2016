$(function(){
    Mod.phoneList();

    Mod.offerSecHeight();
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
    offerSecHeight:function(){

    }
};