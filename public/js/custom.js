//
//
//  $("#services1").submit(function (event) {
//     event.preventDefault();
//     var x = $("#services1 #email").val();
//     if (x == "") {
//       $(".packageForm .msg").html("Please fill empty fileds.");
//     } else {
//       $.ajax({
//         type: "POST",
//         url: "http://cms.techbay.co/api/sendServiceMail",
//         data: $("#services1").serialize(),
//         success: function () {},
//       });
//       $("#services1")[0].reset();
//       $(".packageForm .msg").html("");
//       $("#services1").css("display", "none");
//       $(".packageForm .messageBox").fadeIn();
//     }
//   }
//   );
//
//   $("#click-check").on('click', function(){
// console.log("I was clicked");
//
//   } );
// 