$(document).ready(function () {
    $(".filter-tkd").click(function () {
        $(".kobudo, .taichi, .martialspirit, .bbyg, .selfdefense").fadeOut(200);
        $(".tkd").fadeIn(200);
    });
    $(".filter-kobudo").click(function () {
        $(".tkd, .taichi, .martialspirit, .bbyg, .selfdefense").fadeOut(200);
        $(".kobudo").fadeIn(200);
    });
    $(".filter-taichi").click(function () {
        $(".tkd, .kobudo, .martialspirit, .bbyg, .selfdefense").fadeOut(200);
        $(".taichi").fadeIn(200);
    });
    $(".filter-martialspirit").click(function () {
        $(".tkd, .kobudo, .taichi, .bbyg, .selfdefense").fadeOut(200);
        $(".martialspirit").fadeIn(200);
    });
    $(".filter-bbyg").click(function () {
        $(".tkd, .kobudo, .taichi, .martialspirit, .selfdefense").fadeOut(200);
        $(".bbyg").fadeIn(200);
    });
    $(".filter-selfdefense").click(function () {
        $(".tkd, .kobudo, .taichi, .martialspirit, .bbyg").fadeOut(200);
        $(".selfdefense").fadeIn(200);
    });
    
    $(".filter-all").click(function () {
        $(".tkd, .kobudo, .taichi, .martialspirit, .bbyg, .selfdefense").fadeIn(200);
    });

    // $(".filter-all").click(function () {
    //     $(".tech, .arch, .nature, .nature1").fadeIn(200);
    // });
});