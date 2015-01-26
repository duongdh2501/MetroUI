var scale = 170;
var space = 10;
var marginTop = 200;
var marginLeft = 100;
var line = new Array();
var column = new Array();
var currentGroup = 0;
var numberOfGroups = 3;
var sumGroupWidth = [0, 0, 0]; //init size width of group/ groupWidth[1] =  sumGroupWidth[0] + sumGroupWidth[1]/ 3 groups
var sumGroupHeight = [0, 0, 0];
var titleGroupLineHeight = 30;

//init grid size to add box in index,
// MAX boxSize =  gridSize X gridSize
var gridSize = 15;

//setup before ready function, init box index
$(window).bind('setup', function () {
    for (var i = 0; i < gridSize; i++) {
        line[i] = i * (scale + space);
        column[i] = i * (scale + space);
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
        InitBoxDesktopPT();

        //horizontal mouse wheel event
        OnGroupMove();
    } else {//mobile device
        marginLeft = 30;
        marginTop = 110;

        if (window.innerWidth > window.innerHeight) {
            InitBoxMobileLS();
        } else {
            InitBoxMobilePT();
        }

        // Detect whether device supports orientationchange event, otherwise fall back to
        // the resize event.
        var supportsOrientationChange = "onorientationchange" in window,
            orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

        window.addEventListener(orientationEvent, function () {
            document.getElementById("Home_content").innerHTML = "";

            if (window.orientation == 0) {
                InitBoxMobilePT();
            } else {
                InitBoxMobileLS();
            }
        }, false);
    }
});

function InitBoxDesktopPT() { //Initial Boxes on Desktop in Portrait
    $("#Home_content").append($("<div id='arrowLeft' class='icon-arrow-left-3' ></div>"));
    $("#Home_content").append($("<div id='arrowRight' class='icon-arrow-right-3'></div>"));
    $("#Home_content").append($("<div id='filler'/>"));

    //group0
    NewBox(1, 0, "2x2", "slideLeft", "linear-gradient(45deg, #398235 0%,#7bb544 100%)", "rgba(0,150,0,0.5)", column[0], line[0], "BanLamViec-CP.html", "Bàn làm việc",
            "<i class='icon-screen' style='font-size: 145px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
            "<a/>",
            "<div>Bàn làm việc</div>" +
            "<div>Lịch làm việc</div>");
    NewBox(2, 0, "2x1", "slideTop", "linear-gradient(45deg, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%)", "rgba(150, 105, 0, 0.5)", column[2], line[0], "DangKyMa.html", "Đăng ký mã",
            "<i class='icon-key' style='font-size: 90px; margin: 50% 0 0 20%; color: #ffe700)'></i>" +
            "<a/>",
        "<div>Đăng ký mã</div>");

    //group1
    NewBox(3, 1, "2x1", "flipVertical", "linear-gradient(45deg, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)", "rgba(0,0,150,0.5)", column[4], line[0], "#", "Tiến độ dự án",
            "<i class='icon-stats-up' style='font-size: 90px; margin: 50% 0 0 20%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Tiến độ</div>");
    NewBox(4, 1, "1x2", "slideLeft", "linear-gradient(45deg, rgba(170,118,242,1) 0%,rgba(205,159,242,1) 47%,rgba(164,95,216,1) 100%)", "rgba(85, 20, 205, 0.5", column[5], line[0], "#", "Tình hình thực hiên",
            "<i class='icon-copy' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Báo cáo tình hình thực hiện</div>");
    NewBox(5, 1, "1x2", "slideTop", "linear-gradient(45deg, #c5deea 0%,#8abbd7 31%,#066dab 100%)", "rgba(0, 165, 205, 0.5)", column[5], line[1], "#", "Tổng hợp báo cáo",
            "<i class='icon-chart-alt' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Tổng hợp báo cáo</div>");

    //group2
    NewBox(6, 2, "2x2", "slideTop", "linear-gradient(-135deg, rgba(206,0,61,1) 0%,rgba(143,2,34,1) 44%,rgba(109,0,25,1) 100%)", "rgba(80, 0, 0, 0.5)", column[8], line[0], "#", "Cơ cấu tổ chức",
            "<i class='icon-user-3' style='font-size: 145px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Cơ cấu tổ chức</div>");
    NewBox(7, 2, "1x1", "flipVertical", "linear-gradient(45deg, rgba(255,183,107,1) 0%,rgba(255,167,61,1) 50%,rgba(255,124,0,1) 51%,rgba(255,127,4,1) 100%)", "rgba(180, 45, 0, 0.5)", column[10], line[0], "#", "Phân quyền dự án",
            "<i class='icon-grid-view' style='font-size: 90px; margin: 5% 0 0 20%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Phân quyền dự án</div>");
    NewBox(8, 2, "1x2", "flipHorizon", "linear-gradient(45deg, rgba(239,197,202,1) 0%,rgba(210,75,90,1) 50%,rgba(186,39,55,1) 51%,rgba(241,142,153,1) 100%)", "rgba(70, 0, 50, 0.5)", column[10], line[1], "#", "Phân quyền công việc",
            "<i class='icon-history' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Phân quyền công việc</div>");

    //group title 0 1 2
    AddGroupTitle(0, column[0], line[0], "Điều hành");
    AddGroupTitle(1, column[4], line[0], "Báo cáo");
    AddGroupTitle(2, column[8], line[0], "Phân quyền");

    //filler for large background scroll
    $("#filler").css({width: (sumGroupWidth[2] + marginLeft + scale * sumGroupWidth.length), height: "100%"});
}

function InitBoxMobileLS() { //Initial Boxes on Mobile in Landscape
    scale = 70;
    space = 5;
    sumGroupWidth = [0, 0, 0];
    $(window).trigger('setup');
    $("#Home_content").append($("<div id='filler'/>"));
    //group0
    NewBox(1, 0, "2x2", "slideLeft", "linear-gradient(45deg, #398235 0%,#7bb544 100%)", "rgba(0,150,0,0.5)", column[0], line[0], "BanLamViec-CP.html", "Bàn làm việc",
            "<i class='icon-screen' style='font-size: 70px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
            "<a/>",
            "<div>Bàn làm việc</div>" +
            "<div>Lịch làm việc</div>");
    NewBox(2, 0, "2x1", "slideTop", "linear-gradient(45deg, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%)", "rgba(150, 105, 0, 0.5)", column[2], line[0], "#", "Đăng ký mã",
            "<i class='icon-key' style='font-size: 35px; margin: 50% 0 0 20%; color: #ffe700)'></i>" +
            "<a/>",
        "<div>Đăng ký mã</div>");

    //group1
    NewBox(3, 1, "2x1", "flipVertical", "linear-gradient(45deg, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)", "rgba(0,0,150,0.5)", column[4], line[0], "#", "Tiến độ dự án",
            "<i class='icon-stats-up' style='font-size: 35px; margin: 50% 0 0 20%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Tiến độ</div>");
    NewBox(4, 1, "1x2", "slideLeft", "linear-gradient(45deg, rgba(170,118,242,1) 0%,rgba(205,159,242,1) 47%,rgba(164,95,216,1) 100%)", "rgba(85, 20, 205, 0.5", column[5], line[0], "#", "Tình hình thực hiên",
            "<i class='icon-copy' style='font-size: 35px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Báo cáo tình hình thực hiện</div>");
    NewBox(5, 1, "1x2", "slideTop", "linear-gradient(45deg, #c5deea 0%,#8abbd7 31%,#066dab 100%)", "rgba(0, 165, 205, 0.5)", column[5], line[1], "#", "Tổng hợp báo cáo",
            "<i class='icon-chart-alt' style='font-size: 35px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Tổng hợp báo cáo</div>");

    //group2
    NewBox(6, 2, "2x2", "slideTop", "linear-gradient(-135deg, rgba(206,0,61,1) 0%,rgba(143,2,34,1) 44%,rgba(109,0,25,1) 100%)", "rgba(80, 0, 0, 0.5)", column[8], line[0], "#", "Cơ cấu tổ chức",
            "<i class='icon-user-3' style='font-size: 70px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Cơ cấu tổ chức</div>");
    NewBox(7, 2, "1x1", "flipVertical", "linear-gradient(45deg, rgba(255,183,107,1) 0%,rgba(255,167,61,1) 50%,rgba(255,124,0,1) 51%,rgba(255,127,4,1) 100%)", "rgba(180, 45, 0, 0.5)", column[10], line[0], "#", "Phân quyền dự án",
            "<i class='icon-grid-view' style='font-size: 35px; margin: 5% 0 0 20%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Phân quyền dự án</div>");
    NewBox(8, 2, "1x2", "flipHorizon", "linear-gradient(45deg, rgba(239,197,202,1) 0%,rgba(210,75,90,1) 50%,rgba(186,39,55,1) 51%,rgba(241,142,153,1) 100%)", "rgba(70, 0, 50, 0.5)", column[10], line[1], "#", "Phân quyền công việc",
            "<i class='icon-history' style='font-size: 35px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Phân quyền công việc</div>");

    //group title 0 1 2
    AddGroupTitle(0, column[0], line[0], "Điều hành");
    AddGroupTitle(1, column[4], line[0], "Báo cáo");
    AddGroupTitle(2, column[8], line[0], "Phân quyền");

    $("#filler").css({width: (sumGroupWidth[2] + marginLeft + scale * sumGroupWidth.length), height: "100%"});

    $(".titleTop").css({fontSize: "7px"});
    $(".contentFrontBox, .contentBackBox").css({fontSize: "7px"});
}

function InitBoxMobilePT() { //Initial Boxes on Mobile in Portrait
    scale = 145;
    space = 10;
    sumGroupHeight = [0, 0, 0];
    $(window).trigger('setup');
    $("#Home_content").append($("<div id='filler'/>"));
    //group0
    NewBox(1, 0, "2x2", "slideLeft", "linear-gradient(45deg, #398235 0%,#7bb544 100%)", "rgba(0,150,0,0.5)", column[0], line[0], "BanLamViec-CP.html", "Bàn làm việc",
            "<i class='icon-screen' style='font-size: 145px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
            "<a/>",
            "<div>Bàn làm việc</div>" +
            "<div>Lịch làm việc</div>");
    NewBox(2, 0, "1x2", "slideTop", "linear-gradient(45deg, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%)", "rgba(150, 105, 0, 0.5)", column[0], line[2], "#", "Đăng ký mã",
            "<i class='icon-key' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffe700)'></i>" +
            "<a/>",
        "<div>Đăng ký mã</div>");

    //group1
    NewBox(3, 1, "1x2", "flipVertical", "linear-gradient(45deg, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)", "rgba(0,0,150,0.5)", column[0], line[4], "#", "Tiến độ dự án",
            "<i class='icon-stats-up' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Tiến độ</div>");
    NewBox(4, 1, "1x1", "slideLeft", "linear-gradient(45deg, rgba(170,118,242,1) 0%,rgba(205,159,242,1) 47%,rgba(164,95,216,1) 100%)", "rgba(85, 20, 205, 0.5", column[0], line[5], "#", "Tình hình thực hiên",
            "<i class='icon-copy' style='font-size: 90px; margin: 5% 0 0 20%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Báo cáo tình hình thực hiện</div>");
    NewBox(5, 1, "1x1", "slideTop", "linear-gradient(45deg, #c5deea 0%,#8abbd7 31%,#066dab 100%)", "rgba(0, 165, 205, 0.5)", column[1], line[5], "#", "Tổng hợp báo cáo",
            "<i class='icon-chart-alt' style='font-size: 90px; margin: 5% 0 0 20%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Tổng hợp báo cáo</div>");

    //group2
    NewBox(6, 2, "2x2", "slideTop", "linear-gradient(-135deg, rgba(206,0,61,1) 0%,rgba(143,2,34,1) 44%,rgba(109,0,25,1) 100%)", "rgba(80, 0, 0, 0.5)", column[0], line[7], "#", "Cơ cấu tổ chức",
            "<i class='icon-user-3' style='font-size: 145px; margin: 15% 0 0 25%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Cơ cấu tổ chức</div>");
    NewBox(7, 2, "1x1", "flipVertical", "linear-gradient(45deg, rgba(255,183,107,1) 0%,rgba(255,167,61,1) 50%,rgba(255,124,0,1) 51%,rgba(255,127,4,1) 100%)", "rgba(180, 45, 0, 0.5)", column[0], line[10], "#", "Phân quyền dự án",
            "<i class='icon-grid-view' style='font-size: 90px; margin: 5% 0 0 20%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Phân quyền dự án</div>");
    NewBox(8, 2, "1x2", "flipHorizon", "linear-gradient(45deg, rgba(239,197,202,1) 0%,rgba(210,75,90,1) 50%,rgba(186,39,55,1) 51%,rgba(241,142,153,1) 100%)", "rgba(70, 0, 50, 0.5)", column[0], line[9], "#", "Phân quyền công việc",
            "<i class='icon-history' style='font-size: 90px; margin: 5% 0 0 35%; color: #ffffff'></i>" +
            "<a/>",
        "<div>Phân quyền công việc</div>");

    AddGroupTitle(0, column[0], line[0], "Điều hành");
    AddGroupTitle(1, column[0], line[4], "Báo cáo");
    AddGroupTitle(2, column[0], line[7], "Phân quyền");

    $("#filler").css({width: "100%", height: (sumGroupHeight[2] + marginLeft + scale * sumGroupHeight.length)});

    $(".titleTop").css({fontSize: "13px"});
    $(".contentFrontBox, .contentBackBox").css({fontSize: "13px"});
}

function OnGroupMove() {
    var scrolled = false,
        scrollTimeout;

    $("#arrowRight").click(function () {
        GroupToRight();
    });

    $("#arrowLeft").click(function () {
        GroupToLeft();
    });

    $("html, body, #Home_content").on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta, deltaX, deltaY) {
        // absorb scroll
        event.preventDefault();

        // Scrolled yet?
        if (!scrolled) {
            // Note they've scrolled
            scrolled = true;
            // Click appropriate nav
            if (delta < 0) { //scroll right, wheel down
                GroupToRight();
            } else {
                //scroll left, wheel up
                GroupToLeft();
            }
        }

        // Reset the timer
        clearTimeout(scrollTimeout);

        // If the user stops scrolling on millis, they can trigger click w/ next scroll
        scrollTimeout = setTimeout(function () {
            scrolled = false;
        }, 200);
    });
}

//rewrite code if numberOfGroup changed
function GroupToRight() {
    switch (currentGroup) {
        case 0:
            $("#Home_content").animate({
                scrollLeft: sumGroupWidth[0],
                backgroundPosition: -200
            }, 600, "easeInOutQuart");
            currentGroup = 1;
            break;
        case 1:
            $("#Home_content").animate({
                scrollLeft: sumGroupWidth[1],
                backgroundPosition: -400
            }, 600, "easeInOutQuart");
            currentGroup = 2;
            break;
        default:
            $("#Home_content").animate({scrollLeft: sumGroupWidth[1],
                backgroundPosition: -400}, 75, function () {
                $("#Home_content").animate({
                    scrollLeft: "-=15"}, 150);
            });
    }
}
function GroupToLeft() {
    switch (currentGroup) {
        case 2:
            $("#Home_content").animate({
                scrollLeft: sumGroupWidth[0],
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
}

function NewBox(boxID, group, boxSize, effect, colorFront, colorBack, left, top, link, titleTop, contentFront, contentBack) {
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

    var tempMaxsumGroupWidth = parseInt(sizeWidth) + left / (space + scale);
    var tempMaxsumGroupHeight = parseInt(sizeHeight) + top / (space + scale);
    //group size ++
    for (var j = 0; j < numberOfGroups; j++) {
        if (group == j) {
            if (tempMaxsumGroupWidth > sumGroupWidth[j]) {
                sumGroupWidth[j] = tempMaxsumGroupWidth;
            }
            sumGroupWidth[j] = tempMaxsumGroupWidth * (scale + space);

            if (tempMaxsumGroupHeight > sumGroupHeight[j]) {
                sumGroupHeight[j] = tempMaxsumGroupHeight;
            }
            sumGroupHeight[j] = tempMaxsumGroupHeight * (scale + space);
        }
    }

    //box style and slide on page load
    $("#box" + boxID).css({height: boxHeight, width: boxWidth, left: marginLeft + left, top: marginTop + top, position: "absolute"}).hide().show(400);
    AddBoxContent(boxID, contentFront, contentBack, boxHeight, boxWidth, colorFront, colorBack, effect, titleTop);
}

function AddBoxContent(boxID, contentFront, contentBack, boxHeight, boxWidth, colorFront, colorBack, effect, titleTop) {
    $("#box" + boxID).append($("<div class='contentBackBox' id='contentBackBox" + boxID + "'style='position: absolute'>" + contentBack + "</div>"));
    $("#box" + boxID).append($("<div class='contentFrontBox' id='contentFrontBox" + boxID + "' style='position: absolute; height:" + boxHeight + "px; width:" + boxWidth + "px; background:" + colorFront + "'>" + "<div class='titleTop' id='titleTop" + boxID + "'>" + titleTop + "</div>" + contentFront + "</div>"));
    $("#titleTop" + boxID).css({width: boxWidth * 3 / 4 });
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
        $("#titleGroup" + group).css({left: marginLeft + left, top: marginTop + top - titleGroupLineHeight, position: "absolute", width: sumGroupWidth[0]});
    } else {
        $("#titleGroup" + group).css({left: marginLeft + left, top: marginTop + top - titleGroupLineHeight, position: "absolute", /*Highest box scale*/ width: scale * 2});
    }
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
/* ---------------------------------*/
