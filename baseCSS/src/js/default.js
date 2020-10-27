// Default Javascript File
console.log('Base starter, ready to rock and roll!');

$("#btnToggleLearnList").click(function () {
   if( $("#learnList").css("display") === "block"){
       $("#learnList").css("display", "none");
       $("#btnToggleLearnList").text("show");
    }
   else{
       $("#learnList").css("display", "block");
       $("#btnToggleLearnList").text("hide");
   }
})