let bgcolor =["blue", "red" , "orange", "brown" ]

for(i=0;i<bgcolor.length;i++){
    $(".color-box ul li").eq(i).css("background-color",bgcolor[i])
}

$(".color-box ul li").click(function(){
     
    let cuurentbg=$(this).css("background-color")
    $(".belal").css("color",cuurentbg)
})

$(".color-box i").click(function(){
    $(".color-options").toggle(2000)
})













$(document).ready(function () {
    $(".loading-screen").fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
  });