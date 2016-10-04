$(function(){
    Mod.phoneList();
});

var Mod = {
    // 핸드폰 리스트 서포트 : Modernizr 필수
    phoneList : function() {
        if (!Modernizr.nthchild) {
            $(".mod-phoneList").each(function () {
                $(this).find(".mod-phoneItem:first-child,.mod-phoneItem:nth-child(6n+0)").addClass("no-nthchild-left");
                $(this).find(".mod-phoneItem:nth-child(-n+5)").addClass("no-nthchild-top");
            });
        };
    }
};