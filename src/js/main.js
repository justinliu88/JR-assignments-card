$(document).ready(function() {
    $("#noLIke").click(function() {
        $("#yesLike").css("visibility", "visible");
    });

    $("#yesLike").click(function() {
        $("#yesLike").css("visibility", "hidden");
    })
})