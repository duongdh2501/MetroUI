var scale = 145;
var space = 10;
var marginTop = 200;
var marginLeft = 100;
var line = new Array();
var column = new Array();
var currentGroup = 0;
var currentBox = 1;
var groupWidth = [0, 0, 0]; //init size width of group/ 3 groups
var groupHeight = [0, 0, 0];
var titleGroupLineHeight = 30;
var displayState = 0; //0: normal metro. 1: Spin metro
//init grid size to add box in index,
// MAX boxSize =  gridSize X gridSize
var gridSize = 15;

//setup before ready function, init box index
$(window).bind('setup', function () {
    for (var i = 0; i < gridSize; i++) {
        line[i] = scale * i + space * i;
        column[i] = scale * i + space * i;
    }
});

$(document).ready(function () {
    var strDevice = navigator.userAgent;
    //call setup function
    $(window).trigger('setup');
    //add topbar
    $('#topbar').load('CP-header.html');

    //Add boxes to grid
    //box size: height X width
    // Max box index = gridSize -1
    //avaialbe effect: "", slideLeft, slideTop, flipVertical, flipHorizon
    if (strDevice.toLowerCase().search("mobile") == -1) { //check if device is moblie or not: not mobile
        //group0
        NewBox(1, 0, "2x2", "slideLeft", "green", "rgba(0,150,0,0.5)", column[0], line[0], "BanLamViec-CP.html",
                "<div class='titleTop'>Bàn làm việc</div>" +
                "<i class='icon-screen' style='font-size: 145px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
                "<a/>",
                "<div>Bàn làm việc</div>" +
                "<div>Lịch làm việc</div>");
        NewBox(2, 0, "2x1", "slideTop", "rgba(200, 155, 0, 1)", "rgba(150, 105, 0, 0.5)", column[2], line[0], "#",
                "<div class='titleTop'>Đăng ký mã</div>" +
                "<i class='icon-key' style='font-size: 90px; margin: 50% 0 0 20%; color: #ffe700)'></i>" +
                "<a/>",
            "<div>Đăng ký mã</div>");

        //group1
        NewBox(3, 0, "2x1", "flipVertical", "blue", "rgba(0,0,150,0.5)", column[4], line[0], "#",
                "<div class='titleTop'>Tiến độ dự án</div>" +
                "<i class='icon-stats-up' style='font-size: 90px; margin: 50% 0 0 20%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Tiến độ</div>");
        NewBox(4, 1, "1x2", "slideLeft", "rgba(135, 70, 255, 1)", "rgba(85, 20, 205, 0.5", column[5], line[0], "#",
                "<div class='titleTop'>Tình hình thực hiên</div>" +
                "<i class='icon-copy' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Báo cáo tình hình thực hiện</div>");
        NewBox(5, 1, "1x2", "slideTop", "rgba(0, 215, 255, 1)", "rgba(0, 165, 205, 0.5)", column[5], line[1], "#",
                "<div class='titleTop'>Tổng hợp báo cáo</div>" +
                "<i class='icon-chart-alt' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Tổng hợp báo cáo</div>");

        //group2
        NewBox(6, 1, "2x2", "slideTop", "rgba(130, 0, 15, 1)", "rgba(80, 0, 0, 0.5)", column[8], line[0], "#",
                "<div class='titleTop'>Cơ cấu tổ chức</div>" +
                "<i class='icon-user-3' style='font-size: 145px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Cơ cấu tổ chức</div>");
        NewBox(7, 2, "1x1", "flipVertical", "rgba(230, 95, 0, 1)", "rgba(180, 45, 0, 0.5)", column[10], line[0], "#",
                "<div class='titleTop'>Phân quyền dự án</div>" +
                "<i class='icon-grid-view' style='font-size: 90px; margin: 10% 0 0 20%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Phân quyền dự án</div>");
        NewBox(8, 2, "1x2", "flipHorizon", "rgba(120, 0, 100, 1)", "rgba(70, 0, 50, 0.5)", column[10], line[1], "#",
                "<div class='titleTop'>Phân quyền công việc</div>" +
                "<i class='icon-history' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Phân quyền công việc</div>");

        //group title 0 1 2
        AddGroupTitle(0, column[0], line[0], "Điều hành");
        AddGroupTitle(1, column[4], line[0], "Báo cáo");
        AddGroupTitle(2, column[8], line[0], "Phân quyền");

        //filler for large background scroll
        $("#filler").css({width: ((groupWidth[0] + groupWidth[1] + groupWidth[2]) * (scale + space) + marginLeft + scale * groupWidth.length), height: "100%"});

        //horizontal mouse wheel event
        OnMouseWheel();
    } else {//mobile device
        marginLeft = 30;
        marginTop = 150;
        //group0
        NewBox(1, 0, "2x2", "slideLeft", "green", "rgba(0,150,0,0.5)", column[0], line[0], "BanLamViec-CP.html",
                "<div class='titleTop'>Bàn làm việc</div>" +
                "<i class='icon-user' style='font-size: 145px; margin: 20% 0 0 25%; color: #ffffff'></i>" +
                "<a/>",
                "<div>Bàn làm việc</div>" +
                "<div>Lịch làm việc</div>");
        NewBox(2, 0, "1x2", "slideTop", "red", "rgba(150,0,0,0.5)", column[0], line[2], "#",
                "<div class='titleTop'>Đăng ký mã</div>" +
                "<i class='icon-key' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Đăng ký mã</div>");

        //group1
        NewBox(3, 0, "1x2", "flipHorizon", "blue", "rgba(0,0,150,0.5)", column[0], line[4], "#",
                "<div class='titleTop'>box3 title</div>" +
                "<i class='icon-stats-up' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>box 3 back content</div>");
        NewBox(4, 1, "2x2", "", "green", "", column[0], line[5], "#", "content");
        NewBox(5, 1, "1x2", "", "red", "", column[0], line[7], "#", "content");
        NewBox(6, 1, "1x2", "", "yellow", "", column[0], line[8], "#", "content");

        //group2
        NewBox(7, 2, "2x2", "", "green", "", column[0], line[10], "#", "content");
        NewBox(8, 2, "1x2", "", "red", "", column[0], line[12], "#", "content");
        NewBox(9, 2, "1x2", "", "yellow", "", column[0], line[13], "#", "content");

        AddGroupTitle(0, column[0], line[0], "Điều hành");
        AddGroupTitle(1, column[0], line[4], "Báo cáo");
        AddGroupTitle(2, column[0], line[10], "Phân quyền");

        $("#filler").css({width: "100%", height: (groupHeight[0] + groupHeight[1] + groupHeight[2]) * (scale + space) + marginTop + scale * groupHeight.length});
    }

    $('#checkBox1').change(function () {
        if ($('#checkBox1').prop("checked")) {
            scale = 200;
            space = 15;
            marginLeft = 450;
            displayState = 1;
            $("#filler").css({width: 0, height: 0});
            ChangeMetroSpin();
            return;
        }
        scale = 145;
        space = 10;
        marginLeft = 100;
        displayState = 0;
        ChangeMetroNormal();
    });


});

function OnTouchScreen() {
    var circleBoxPerimeter = (scale * 2 + space) * 8;
    var circleBoxRadius = circleBoxPerimeter / (2 * Math.PI);
    var boxYrotate = 360 / 8;

    var scrollTimeout;

    document.getElementById("Home_content").addEventListener('touchmove', function (event, delta, deltaX, deltaY) {
        // absorb scroll
        event.preventDefault();

        // Scrolled yet?
        if (displayState == 0) {

        } else {
            switch (currentBox) {
                case 1:
                    $("#box2").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 4, top: marginTop + 20, transition: "1s"});
                    $("#box3").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 3, top: marginTop + 15, transition: "1s"});
                    $("#box4").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 2, top: marginTop + 10, transition: "1s"});
                    $("#box5").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 1, top: marginTop + 5, transition: "1s"});
                    $("#box6").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                    $("#box7").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 1, top: marginTop + 5, transition: "1s"});
                    $("#box8").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 2, top: marginTop + 10, transition: "1s"});
                    $("#box1").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 3, top: marginTop + 15, transition: "1s"});
                    currentBox = 2;
                    break;
                case 2:
                    $("#box3").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                    $("#box4").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    $("#box5").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box6").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box7").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                    $("#box8").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box1").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box2").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    currentBox = 3;
                    break;
                case 3:
                    $("#box4").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                    $("#box5").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    $("#box6").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box7").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box8").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                    $("#box1").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box2").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box3").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    currentBox = 4;
                    break;
                case 4:
                    $("#box5").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                    $("#box6").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    $("#box7").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box8").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box1").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                    $("#box2").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box3").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box4").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    currentBox = 5;
                    break;
                case 5:
                    $("#box6").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                    $("#box7").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    $("#box8").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box1").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box2").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                    $("#box3").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box4").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box5").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    currentBox = 6;
                    break;
                case 6:
                    $("#box7").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                    $("#box8").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    $("#box1").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box2").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box3").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                    $("#box4").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box5").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box6").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    currentBox = 7;
                    break;
                case 7:
                    $("#box8").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                    $("#box1").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    $("#box2").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box3").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box4").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                    $("#box5").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box6").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box7").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    currentBox = 8;
                    break;
                default :
                    $("#box1").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                    $("#box2").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    $("#box3").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box4").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box5").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                    $("#box6").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                    $("#box7").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                    $("#box8").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                    currentBox = 1;
                    break;
            }
        }

        // Reset the timer
        clearTimeout(scrollTimeout);

        // If the user stops scrolling for 150 millis, they can trigger click w/ next scroll
        scrollTimeout = setTimeout(function () {
            scrolled = false;
        }, 150);
    });
}

var circleBoxPerimeter = (scale * 2 + space) * 8;
var circleBoxRadius = circleBoxPerimeter / (2 * Math.PI) + 150;
var boxYrotate = 360 / 8;

function OnMouseWheel() {
    var group0Width = CalGroupWidth(0);
    var group1Width = CalGroupWidth(1);
    var group2Width = CalGroupWidth(2);


    var scrolled = false,
        scrollTimeout;

    $("html, body, #Home_content").on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta, deltaX, deltaY) {
        // absorb scroll
        event.preventDefault();

        // Scrolled yet?
        if (!scrolled) {
            // Note they've scrolled
            scrolled = true;
            // Click appropriate nav
            if (delta < 0) {
                if (displayState == 0) {
                    switch (currentGroup) {
                        case 0:
                            $("#Home_content").animate({
                                scrollLeft: group0Width,
                                backgroundPosition: -200
                            }, 600, "easeInOutQuart");
                            currentGroup = 1;
                            break;
                        case 1:
                            $("#Home_content").animate({
                                scrollLeft: group0Width + group1Width,
                                backgroundPosition: -400
                            }, 600, "easeInOutQuart");
                            currentGroup = 2;
                            break;
                        default:
                            $("#Home_content").animate({scrollLeft: group0Width + group1Width + group2Width}, 75, function () {
                                $("#Home_content").animate({
                                    scrollLeft: "-=15",
                                    backgroundPosition: -400}, 150);
                            });
                    }
                } else {
                    switch (currentBox) {
                        case 1:
                            $("#box2").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 4, top: marginTop + 20, transition: "1s"});
                            $("#box3").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 3, top: marginTop + 15, transition: "1s"});
                            $("#box4").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 2, top: marginTop + 10, transition: "1s"});
                            $("#box5").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 1, top: marginTop + 5, transition: "1s"});
                            $("#box6").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box7").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 1, top: marginTop + 5, transition: "1s"});
                            $("#box8").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 2, top: marginTop + 10, transition: "1s"});
                            $("#box1").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 3, top: marginTop + 15, transition: "1s"});
                            currentBox = 2;
                            break;
                        case 2:
                            $("#box3").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box4").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box5").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box6").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box7").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box8").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box1").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box2").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 3;
                            break;
                        case 3:
                            $("#box4").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box5").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box6").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box7").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box8").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box1").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box2").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box3").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 4;
                            break;
                        case 4:
                            $("#box5").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box6").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box7").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box8").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box1").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box2").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box3").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box4").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 5;
                            break;
                        case 5:
                            $("#box6").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box7").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box8").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box1").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box2").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box3").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box4").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box5").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 6;
                            break;
                        case 6:
                            $("#box7").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box8").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box1").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box2").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box3").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box4").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box5").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box6").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 7;
                            break;
                        case 7:
                            $("#box8").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box1").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box2").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box3").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box4").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box5").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box6").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box7").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 8;
                            break;
                        default :
                            $("#box1").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box2").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box3").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box4").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box5").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box6").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box7").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box8").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 1;
                            break;
                    }
                }
            } else {
                if (displayState == 0) {
                    //scroll left, wheel up
                    switch (currentGroup) {
                        case 2:
                            $("#Home_content").animate({
                                scrollLeft: group0Width,
                                backgroundPosition: -200
                            }, 600, "easeInOutQuart");
                            currentGroup = 1;
                            break;
                        case 1:
                            $("#Home_content").animate({
                                scrollLeft: 0,
                                backgroundPosition: 0
                            }, 600, "easeInOutQuart");
                            currentGroup = 0;
                            break;
                        default:
                            $("#Home_content").animate({scrollLeft: 0}, 75, function () {
                                $("#Home_content").animate({scrollLeft: "+=15",
                                    backgroundPosition: 0}, 150);
                            });
                    }
                } else {
                    switch (currentBox) {
                        case 1:
                            $("#box8").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 4, top: marginTop + 20, transition: "1s"});
                            $("#box1").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 3, top: marginTop + 15, transition: "1s"});
                            $("#box2").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 2, top: marginTop + 10, transition: "1s"});
                            $("#box3").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 1, top: marginTop + 5, transition: "1s"});
                            $("#box4").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box5").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 1, top: marginTop + 5, transition: "1s"});
                            $("#box6").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 2, top: marginTop + 10, transition: "1s"});
                            $("#box7").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 3, top: marginTop + 15, transition: "1s"});
                            currentBox = 8;
                            break;
                        case 2:
                            $("#box1").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box2").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box3").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box4").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box5").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box6").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box7").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box8").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 1;
                            break;
                        case 3:
                            $("#box2").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box3").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box4").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box5").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box6").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box7").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box8").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box1").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 2;
                            break;
                        case 4:
                            $("#box3").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box4").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box5").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box6").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box7").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box8").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box1").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box2").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 3;
                            break;
                        case 5:
                            $("#box4").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box5").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box6").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box7").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box8").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box1").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box2").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box3").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 4;
                            break;
                        case 6:
                            $("#box5").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box6").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box7").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box8").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box1").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box2").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box3").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box4").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 5;
                            break;
                        case 7:
                            $("#box6").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box7").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box8").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box1").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box2").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box3").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box4").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box5").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 6;
                            break;
                        default :
                            $("#box7").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(1,1)", zIndex: 1, top: marginTop + 20, transition: "1s"});
                            $("#box8").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            $("#box1").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box2").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box3").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop, transition: "1s"});
                            $("#box4").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5, transition: "1s"});
                            $("#box5").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10, transition: "1s"});
                            $("#box6").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15, transition: "1s"});
                            currentBox = 7;
                            break;
                    }
                }
            }
        }

        // Reset the timer
        clearTimeout(scrollTimeout);

        // If the user stops scrolling for 200 millis, they can trigger click w/ next scroll
        scrollTimeout = setTimeout(function () {
            scrolled = false;
        }, 200);
    });
}

function NewBox(boxID, group, boxSize, effect, colorFront, colorBack, left, top, link, contentFront, contentBack) {
    var boxHeight = 0;
    var boxWidth = 0;
    var sizeHeight = boxSize.split("x")[0];
    var sizeWidth = boxSize.split("x")[1];

    //add new box to body
    $("#Home_content").append($("<a id='box" + boxID + "' class='boxes' href='" + link + "'/>"));

    //convert box height and width to px
    for (var i = 1; i <= gridSize; i++) {
        if (sizeHeight == i) {
            boxHeight = scale * i + space * (i - 1);
        }
        if (sizeWidth == i) {
            boxWidth = scale * i + space * (i - 1);
        }
    }

    //group size ++
    for (var j = 0; j < 3; j++) {
        if (group == j) {
            groupWidth[j] += parseInt(sizeWidth);
            groupHeight[j] += parseInt(sizeHeight);
        }
    }

    //box style and slide on page load
    $("#box" + boxID).css({height: boxHeight, width: boxWidth, left: marginLeft + left, top: marginTop + top, position: "absolute"}).hide().show(400);
    AddBoxContent(boxID, contentFront, contentBack, boxHeight, boxWidth, colorFront, colorBack, effect);
}

function AddBoxContent(boxID, contentFront, contentBack, boxHeight, boxWidth, colorFront, colorBack, effect) {
    $("#box" + boxID).append($("<div class='contentBackBox' id='contentBackBox" + boxID + "'style='position: absolute'>" + contentBack + "</div>"));
    $("#box" + boxID).append($("<div class='contentFrontBox' id='contentFrontBox" + boxID + "' style='position: absolute; height:" + boxHeight + "px; width:" + boxWidth + "px; background:" + colorFront + "'>" + contentFront + "</div>"));
    if (effect == "slideLeft") {
        $("#contentBackBox" + boxID).css({right: 0, margin: 15, fontSize: 14, lineHeight: 2});
        $("#box" + boxID).hover(function () {
            $("#contentFrontBox" + boxID).css({marginLeft: -boxWidth * 2 / 3, transition: "1s"});
        }, function () {
            $("#contentFrontBox" + boxID).css({marginLeft: 0, transition: "1s"});
        }).css({backgroundColor: colorBack});
    } else if (effect == "slideTop") {
        $("#contentBackBox" + boxID).css({bottom: 0, margin: 15, fontSize: 14, lineHeight: 2});
        $("#box" + boxID).hover(function () {
            $("#contentFrontBox" + boxID).css({marginTop: -boxHeight * 2 / 3, transition: "1s"});
        }, function () {
            $("#contentFrontBox" + boxID).css({marginTop: 0, transition: "1s"});
        }).css({backgroundColor: colorBack});
    } else if (effect == "flipVertical") {
        $("#contentBackBox" + boxID).css({transform: "rotateY(180deg)", transition: "1s", left: 0, padding: 15, fontSize: 14, lineHeight: 2, height: boxHeight, width: boxWidth});
        $("#box" + boxID).hover(function () {
            $("#contentFrontBox" + boxID).css({transform: "rotateY(180deg)", transition: "1s", backfaceVisibility: "hidden"});
            $("#contentBackBox" + boxID).css({transform: "rotateY(0deg)", backgroundColor: colorBack});
        }, function () {
            $("#contentFrontBox" + boxID).css({transform: "rotateY(0deg)", transition: "1s", backfaceVisibility: "hidden"});
            $("#contentBackBox" + boxID).css({transform: "rotateY(180deg)", backgroundColor: "rgba(0,0,0,0)"});
        });
    } else if (effect == "flipHorizon") {
        $("#contentBackBox" + boxID).css({transform: "rotateX(180deg)", transition: "1s", left: 0, padding: 15, fontSize: 14, lineHeight: 2, height: boxHeight, width: boxWidth});
        $("#box" + boxID).hover(function () {
            $("#contentFrontBox" + boxID).css({transform: "rotateX(180deg)", transition: "1s", backfaceVisibility: "hidden"});
            $("#contentBackBox" + boxID).css({transform: "rotateX(0deg)", backgroundColor: colorBack});
        }, function () {
            $("#contentFrontBox" + boxID).css({transform: "rotateX(0deg)", transition: "1s", backfaceVisibility: "hidden"});
            $("#contentBackBox" + boxID).css({transform: "rotateX(180deg)", backgroundColor: "rgba(0,0,0,0)"});
        });
    }
}

function AddGroupTitle(group, left, top, content) {
    var strDevice = navigator.userAgent;
    //add group title to body
    $("#Home_content").append($("<div id=titleGroup" + group + " class='titleGroup'>" + content + "</div>"));
    //style group title
    if (strDevice.toLowerCase().search("mobile") == -1) { //check if device is moblie or not: not mobile
        $("#titleGroup" + group).css({left: marginLeft + left, top: marginTop + top - titleGroupLineHeight, position: "absolute", width: CalGroupWidth(group)});
    } else {
        $("#titleGroup" + group).css({left: marginLeft + left, top: marginTop + top - titleGroupLineHeight, position: "absolute", /*Highest box scale*/ width: scale * 2});
    }
}

function ChangeMetroSpin() {
    for (var i = 1; i < 10; i++) {
        $("#box" + i).remove();
    }
    for (var j = 0; j < 3; j++) {
        $("#titleGroup" + j).remove();
    }
    NewBox(1, 0, "1x2", "slideLeft", "green", "rgba(0,150,0,0.5)", column[0], line[0], "BanLamViec-CP.html",
            "<div class='titleTop'>Bàn làm việc</div>" +
            "<i class='icon-screen' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
            "<div>Bàn làm việc</div>" +
            "<div>Lịch làm việc</div>");
    NewBox(2, 0, "1x2", "slideTop", "rgba(200, 155, 0, 1)", "rgba(150, 105, 0, 0.5)", column[0], line[0], "#",
            "<div class='titleTop'>Đăng ký mã</div>" +
            "<i class='icon-key' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffe700)'></i>" +
            "<a/>",
        "<div>Đăng ký mã</div>");
    NewBox(3, 0, "1x2", "slideLeft", "blue", "rgba(0,0,150,0.5)", column[0], line[0], "#",
            "<div class='titleTop'>Tiến độ dự án</div>" +
            "<i class='icon-stats-up' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Tiến độ</div>");
    NewBox(4, 1, "1x2", "slideLeft", "rgba(135, 70, 255, 1)", "rgba(85, 20, 205, 0.5", column[0], line[0], "#",
            "<div class='titleTop'>Tình hình thực hiên</div>" +
            "<i class='icon-copy' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Báo cáo tình hình thực hiện</div>");
    NewBox(5, 1, "1x2", "slideTop", "rgba(0, 215, 255, 1)", "rgba(0, 165, 205, 0.5)", column[0], line[0], "#",
            "<div class='titleTop'>Tổng hợp báo cáo</div>" +
            "<i class='icon-chart-alt' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Tổng hợp báo cáo</div>");
    NewBox(6, 1, "1x2", "slideTop", "rgba(130, 0, 15, 1)", "rgba(80, 0, 0, 0.5)", column[0], line[0], "#",
            "<div class='titleTop'>Cơ cấu tổ chức</div>" +
            "<i class='icon-user-3' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Cơ cấu tổ chức</div>");
    NewBox(7, 2, "1x2", "slideLeft", "rgba(230, 95, 0, 1)", "rgba(180, 45, 0, 0.5)", column[0], line[0], "#",
            "<div class='titleTop'>Phân quyền dự án</div>" +
            "<i class='icon-grid-view' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Phân quyền dự án</div>");
    NewBox(8, 2, "1x2", "slideLeft", "rgba(120, 0, 100, 1)", "rgba(70, 0, 50, 0.5)", column[0], line[0], "#",
            "<div class='titleTop'>Phân quyền công việc</div>" +
            "<i class='icon-history' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Phân quyền công việc</div>");

    $("#box1").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )", zIndex: 1, top: marginTop + 20});
    $("#box2").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15 });
    $("#box3").css({transform: "rotateY( " + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10});
    $("#box4").css({transform: "rotateY( " + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5});
    $("#box5").css({transform: "rotateY( 0deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.6,0.6)", zIndex: 0, top: marginTop });
    $("#box6").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.7,0.7)", zIndex: 0, top: marginTop + 5 });
    $("#box7").css({transform: "rotateY( -" + boxYrotate * 2 + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.8,0.8)", zIndex: 1, top: marginTop + 10});
    $("#box8").css({transform: "rotateY( -" + boxYrotate + "deg )" + "translateZ( " + circleBoxRadius + "px )" + "scale(0.9,0.9)", zIndex: 1, top: marginTop + 15});

    OnTouchScreen();
}

function ChangeMetroNormal() {
    currentGroup = 0;
    groupWidth = [0, 0, 0];
    groupHeight = [0, 0, 0];
    for (var i = 1; i < 10; i++) {
        $("#box" + i).remove();
    }
    for (var j = 0; j < 3; j++) {
        $("#titleGroup" + j).remove();
    }
    //Add boxes to grid
    //box size: height X width
    // Max box index = gridSize -1
    //avaialbe effect: "", slideLeft, slideTop, flipVertical, flipHorizon
    if (strDevice.toLowerCase().search("mobile") == -1) { //check if device is moblie or not: not mobile
        //group0
        NewBox(1, 0, "2x2", "slideLeft", "green", "rgba(0,150,0,0.5)", column[0], line[0], "BanLamViec-CP.html",
                "<div class='titleTop'>Bàn làm việc</div>" +
                "<i class='icon-screen' style='font-size: 145px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
                "<a/>",
                "<div>Bàn làm việc</div>" +
                "<div>Lịch làm việc</div>");
        NewBox(2, 0, "2x1", "slideTop", "rgba(200, 155, 0, 1)", "rgba(150, 105, 0, 0.5)", column[2], line[0], "#",
                "<div class='titleTop'>Đăng ký mã</div>" +
                "<i class='icon-key' style='font-size: 90px; margin: 50% 0 0 20%; color: #ffe700)'></i>" +
                "<a/>",
            "<div>Đăng ký mã</div>");

        //group1
        NewBox(3, 0, "2x1", "flipVertical", "blue", "rgba(0,0,150,0.5)", column[4], line[0], "#",
                "<div class='titleTop'>Tiến độ dự án</div>" +
                "<i class='icon-stats-up' style='font-size: 90px; margin: 50% 0 0 20%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Tiến độ</div>");
        NewBox(4, 1, "1x2", "slideLeft", "rgba(135, 70, 255, 1)", "rgba(85, 20, 205, 0.5", column[5], line[0], "#",
                "<div class='titleTop'>Tình hình thực hiên</div>" +
                "<i class='icon-copy' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Báo cáo tình hình thực hiện</div>");
        NewBox(5, 1, "1x2", "slideTop", "rgba(0, 215, 255, 1)", "rgba(0, 165, 205, 0.5)", column[5], line[1], "#",
                "<div class='titleTop'>Tổng hợp báo cáo</div>" +
                "<i class='icon-chart-alt' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Tổng hợp báo cáo</div>");

        //group2
        NewBox(6, 1, "2x2", "slideTop", "rgba(130, 0, 15, 1)", "rgba(80, 0, 0, 0.5)", column[8], line[0], "#",
                "<div class='titleTop'>Cơ cấu tổ chức</div>" +
                "<i class='icon-user-3' style='font-size: 145px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Cơ cấu tổ chức</div>");
        NewBox(7, 2, "1x1", "flipVertical", "rgba(230, 95, 0, 1)", "rgba(180, 45, 0, 0.5)", column[10], line[0], "#",
                "<div class='titleTop'>Phân quyền dự án</div>" +
                "<i class='icon-grid-view' style='font-size: 90px; margin: 10% 0 0 20%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Phân quyền dự án</div>");
        NewBox(8, 2, "1x2", "flipHorizon", "rgba(120, 0, 100, 1)", "rgba(70, 0, 50, 0.5)", column[10], line[1], "#",
                "<div class='titleTop'>Phân quyền công việc</div>" +
                "<i class='icon-history' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Phân quyền công việc</div>");

        //group title 0 1 2
        AddGroupTitle(0, column[0], line[0], "Điều hành");
        AddGroupTitle(1, column[4], line[0], "Báo cáo");
        AddGroupTitle(2, column[8], line[0], "Phân quyền");
        $("#filler").css({width: ((groupWidth[0] + groupWidth[1] + groupWidth[2]) * (scale + space) + marginLeft + scale * groupWidth.length), height: "100%"});

    } else {//mobile device
        marginLeft = 30;
        marginTop = 150;
        //group0
        NewBox(1, 0, "2x2", "slideLeft", "green", "rgba(0,150,0,0.5)", column[0], line[0], "BanLamViec-CP.html",
                "<div class='titleTop'>Bàn làm việc</div>" +
                "<i class='icon-user' style='font-size: 145px; margin: 20% 0 0 25%; color: #ffffff'></i>" +
                "<a/>",
                "<div>Bàn làm việc</div>" +
                "<div>Lịch làm việc</div>");
        NewBox(2, 0, "1x2", "slideTop", "red", "rgba(150,0,0,0.5)", column[0], line[2], "#",
                "<div class='titleTop'>Đăng ký mã</div>" +
                "<i class='icon-key' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>Đăng ký mã</div>");

        //group1
        NewBox(3, 0, "1x2", "flipHorizon", "blue", "rgba(0,0,150,0.5)", column[0], line[4], "#",
                "<div class='titleTop'>box3 title</div>" +
                "<i class='icon-stats-up' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
                "<a/>",
            "<div>box 3 back content</div>");
        NewBox(4, 1, "2x2", "", "green", "", column[0], line[5], "#", "content");
        NewBox(5, 1, "1x2", "", "red", "", column[0], line[7], "#", "content");
        NewBox(6, 1, "1x2", "", "yellow", "", column[0], line[8], "#", "content");

        //group2
        NewBox(7, 2, "2x2", "", "green", "", column[0], line[10], "#", "content");
        NewBox(8, 2, "1x2", "", "red", "", column[0], line[12], "#", "content");
        NewBox(9, 2, "1x2", "", "yellow", "", column[0], line[13], "#", "content");

        AddGroupTitle(0, column[0], line[0], "Điều hành");
        AddGroupTitle(1, column[0], line[4], "Báo cáo");
        AddGroupTitle(2, column[0], line[10], "Phân quyền");

    }
}

function CalGroupWidth(group) {
    return groupWidth[group] * (scale + space);
}

/* ------------- Account --------------------*/
function accountClick() {
    $('.loginBox').hide().show(300);
    $('.loginForm').click(function () {
        return false;
    });
    $(this).mouseup(function (login) {
        if (!($(login.target).parent('.user-id').length > 0)) {
            $('.loginBox').hide(300);
        }
    });
}
function HideLoginBox() {
    $('.loginBox').hide(300);
}
var dhxWinAccounts;
var wAccount;
function QuanLyTaiKhoan() {
    dhxWinAccounts = new dhtmlXWindows();

    wAccount = dhxWinAccounts.createWindow("wAccount", 20, 30, 650, 420);
    wAccount.centerOnScreen();
    wAccount.setText("Quản lý tài khoản");
    wAccount.button("park").hide();
    wAccount.button("minmax1").hide();
    wAccount.setModal(true);
    wAccount.attachURL("QuanLyTaiKhoan.html");
}

function Logout() {
    try {
        if (typeof (Storage) !== "undefined") {
            localStorage.username = "";
            localStorage.password = "";
        }
    }
    catch (e) {
    }
    window.location.href = "DangNhapHeThong.html";
}
function CalHeightScreen(percent) {
    var calScreen;
    var heightscreen = screen.height;
    calScreen = heightscreen / 100 * percent;
    return calScreen;
}
/* ---------------------------------*/
