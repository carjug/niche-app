// $(function () {
//   garbageCollect();

// $( ".login" ).click(function () {
//     garbageCollect();
//     event.preventDefault();
//     var button = $(this);

//     renderLogin(button);
//   });

//   $("#login").click(function () {
//       event.preventDefault();
//       var button    = $(this);
//       var messages  = $("div.message");
//       var method    = button.attr("method");
//       var name      = $("#userL").val();
//       var pass      = $("#passwordL").val();

//       var url  = "http://localhost:3000/login/" + name + "/" + pass

//       $.ajax(url, {
//         type: method,
//         dataType: 'json',
//         error: function (jqHXR){
//           if (jqHXR.status == 400 || jqHXR.status == 404) {
//             messages.addClass("alert alert-danger");
//             messages.append("Please try again");
//             renderLogin(button);
//           }
//         },
//         success: function (data, textStatus, jqHXR) {
//           if (jqHXR.status == 200) {
//             var user = data.username

//             console.log(user)
//             Session = data.id;
//             showLoggedInState(user);
//           }
//         }
//       });
//     });

//   $( "#sign-up" ).click(function () {
//       garbageCollect();
//       event.preventDefault();
//       var button = $(this);

//       renderRegistration(button);
//     });

//     $("#register").click(function () {
//       event.preventDefault();
//       var button    = $(this);
//       var messages  = $("div.message");
//       var method    = button.attr("method");
//       var email     = $("#email").val();
//       var name      = $("#user").val();
//       var pass      = $("#password").val();
//       var pass_conf = $("#password-confirmation").val();

//       var url  = "http://localhost:3000/register/" + name + "/" + pass + "/" + pass_conf

//       $.ajax(url, {
//         type: method,
//         dataType: 'json',
//         error: function (jqHXR){
//           if (jqHXR.status == 400 || jqHXR.status == 404) {
//             messages.addClass("alert alert-danger");
//             messages.append("Please try again");
//             renderRegistration(button);
//           }
//         },
//         success: function (data, textStatus, jqHXR) {
//           if (jqHXR.status == 200) {
//             var user = data.username
//             Session = data.id;
//             showLoggedInState(user);
//           }
//         }
//       });
//     });
//   });

//   function garbageCollect() {
//     $(".places").empty();
//     $(".message").empty();
//   }

//   function renderLogin(element) {
//     if(element.hasClass("login") == true ) {
//       element.parents("header").slideUp("fast");
//     }
//     $(".login-form").css("display", "block");
//     $(".user-previews").css("display", "none");

//     var boxes = $(".box");
//     boxes.val("");
//   }

//   function renderRegistration(element) {
//     if(element.hasClass("register") == true ) {
//       element.parents("header").slideUp("fast");
//     }
//     $(".sign-up-form").css("display", "block");
//     $(".user-previews").css("display", "none");

//     var boxes = $(".box");
//     boxes.val("");
//   }

//   function showLoggedInState(user) {
//     if(Session) {
//       $(".sign-up-form").css("display", "none");
//       $("#sign-up").css("display", "none");
//       $(".login-form").css("display", "none");
//       $(".login").toggleClass("logout")
//       $(".logout").text("Log Out")

//       $("header").slideDown();
//     }
//   }

