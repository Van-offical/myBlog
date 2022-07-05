$(function(){
    $(".loading").show()
})
window.onload = function(){
    $(".loading").hide()
    $(".onSelect").css("left",14*index+27+"vw")
    $(".link a").mouseenter(function(){
        $(".onSelect").css("left", (14*$(this).index())+27+"vw")
    })
    $(".link a").mouseout(function(){
        $(".onSelect").css("left",14*index+27+"vw")
    })
}