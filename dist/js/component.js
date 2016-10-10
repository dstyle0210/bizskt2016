function component_item(a){this.target=a}component_item.prototype.start=function(){this.target.addClass("component_ui_item"),$(".component_ui_item").on("mouseenter",function(){$(this).addClass("on")}).on("mouseleave",function(){$(this).removeClass("on")})},component_item.prototype.destroy=function(){$(".component_ui_item").off("mouseenter mouseleave").removeClass("component_ui_item")};
function component_pwcheck(a){this.wrap=$(a),this.init()}component_pwcheck.prototype.init=function(){$(".component-customer-list").append(this.wrap),this.wrap.hide()},component_pwcheck.prototype.open=function(){this.wrap.css({top:($(".component-customer-list").height()-this.wrap.height())/2}),this.wrap.show()},component_pwcheck.prototype.close=function(){this.wrap.hide()};
function component_requestPhone(a,b){this.used=!0,this.target=a,this.obj=$(this.target),this.gap=b?b:0}component_requestPhone.prototype.open=function(a,b){if(this.used){var c=$(a).offset();this.obj.css({position:"absolute",top:c.top+this.gap,left:c.left+this.gap,"z-index":"100"}),$(document.body).append(this.obj),b&&$(b).focus()}},component_requestPhone.prototype.close=function(){this.used&&(this.obj.attr("style",""),$("#layerBasket").append(this.obj))},component_requestPhone.prototype.destroy=function(){this.used=!1};
function component_tooltip(a){this.caller=$(a),this.init()}component_tooltip.prototype.init=function(){var a=this;this.caller.css({cursor:"pointer"}),this.caller.on("click",function(){a.close();var b=$(this).attr("tooltip");$(b).show()})},component_tooltip.prototype.close=function(){$(".component-tooltip").hide()};
/* --------- 실행부분 --------- */
/**
 * 컴포넌트 : 상품아이템이 존재 할경우 마우스온오프 컨트롤.
 * js/component/item.js
 * Fn.start() => UI기능 시작
 * Fn.destroy() => UI기능 삭제.

var control_item;
$(function(){
	control_item = new component_item($(".component-item"));
	control_item.start();
});
 */

/**
 * 컴포넌트 : 상담신청하기 딤드레이어 실행.
 * Fn.open() => 레이어 열기
 * Fn.close() => 레이어 닫기
 * Fn.destroy() => UI기능 삭제.

var control_requestPhone;
$(function(){
	control_requestPhone = new component_requestPhone("#requestOutboundLayer",10);
});
 */

/**
 * 컴포넌트 : 신청페이지 툴팁 실행
 * Fn.close() => 툴팁 닫기
 */
var control_tooltip;
$(function(){
	control_tooltip = new component_tooltip("*[tooltip]");
});


/**
 * 컴포넌트 : QNA 비밀번호 실행
 * Fn.oepn(target) => 레이어 열기 (target => 열고자 하는 위치의 엘리먼트)
 * Fn.close() => 레이어 닫기

var control_pwcheck;
$(function(){
	control_pwcheck = new component_pwcheck("#pwcheckWrap");
});
 */

















