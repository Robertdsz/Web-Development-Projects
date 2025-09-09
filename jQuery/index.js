$(document).keydown(function(event){
    $("h1").text(event.key).attr("class", "title");
})