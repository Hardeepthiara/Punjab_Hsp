$(function() {
    $("a.drawer-menu").click(function() {
        $('.float-menu').addClass('active');
    });
    $(".push-drawer,.float-menu ul li a,.float-menu .backdrop").click(function() {
        $('.float-menu').removeClass('active');
    });
    $(".sidebar ul li a").click(function() {
        $(".sidebar ul li a").removeClass("active");
        $(this).addClass("active");
    });
});

function indianFormat(num) {

    if (num < 0) {
        var val = Math.abs(num) + "";
        var outputStr = val.charAt(val.length - 1) + "";
        for (var i = val.length - 2; i >= 0; i -= 2) {
            outputStr = "," + val.charAt(i - 1) + "" + val.charAt(i) + "" + outputStr;
        }
        return "-" + (outputStr.charAt(0) === "," ? outputStr.substring(1, outputStr.length) : outputStr);
    }
    if (!isNaN(num)) {
        var val = num + "";
        var outputStr = val.charAt(val.length - 1) + "";
        for (var i = val.length - 2; i >= 0; i -= 2) {
            outputStr = "," + val.charAt(i - 1) + "" + val.charAt(i) + "" + outputStr;
        }
        return (outputStr.charAt(0) === "," ? outputStr.substring(1, outputStr.length) : outputStr);
    }
}