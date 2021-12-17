$(".menu-off").click(function () {
    $(this).removeClass("menu-off");
    $(this).addClass("menu-on");
    $('.floating-button-menu-close').addClass('menu-on');
});
$('.floating-button-menu-close').click(function () {
    $(this).addClass("menu-off");
    $(this).removeClass("menu-on");
    $('.floating-button-menu').toggleClass('menu-on');
});

$("#restaurant_text").click(function () {
    $(this).hide();
    $("#restaurant_img").css("display", "block");
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
$("#restaurant_text").mouseover(function() {
    $(this).css("text-shadow", "1px 1px 1px #555");
 }).mouseleave(function(){
   $(this).css("text-shadow", "0px 0px 0px #555");
});
$('#restaurant_text').css('cursor', 'pointer');
$('#restaurant_img').css('cursor', 'pointer');
$("#restaurant_img").click(function () {
    $(this).hide();
    $("#restaurant_text").css("display", "block");
});

$("#degree_text").mouseover(function() {
    $(this).css("text-shadow", "1px 1px 1px #555");
 }).mouseleave(function(){
   $(this).css("text-shadow", "0px 0px 0px #555");
});
$('#degree_text').css('cursor', 'pointer');
$('#degree_img').css('cursor', 'pointer');
$("#degree_text").click(function () {
    $(this).hide();
    $("#degree_img").css("display", "block");
    $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("#degree_img").click(function () {
    $(this).hide();
    $("#degree_text").css("display", "block");
});

$("#food_text").mouseover(function() {
    $(this).css("text-shadow", "1px 1px 1px #555");
 }).mouseleave(function(){
   $(this).css("text-shadow", "0px 0px 0px #555");
});
$('#food_text').css('cursor', 'pointer');
$('#food_img').css('cursor', 'pointer');
$("#food_text").click(function () {
    $(this).hide();
    $("#food_img").css("display", "block");
    $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("#food_img").click(function () {
    $(this).hide();
    $("#food_text").css("display", "block");
});

