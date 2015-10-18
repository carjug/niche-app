$( function() {
  $( "#sign-up" ).click(function () {
    event.preventDefault();
    var button = $(this);
    renderRegistration(button);
  });

  $("#register").click(function () {
    event.preventDefault();
    var button    = $(this);
    var method    = button.attr("method");
    var name      = $("#user").val();
    var pass      = $("#password").val();
    var pass_conf = $("#password-confirmation").val();

    var url  = "http://localhost:3000/register/" + name + "/" + pass + "/" + pass_conf

    $.ajax(url, {
      type: method,
      dataType: 'json',
      success: function (data, textStatus, jqHXR) {
        if (jqHXR.status == 200) {
          var user = data.username
          showLoggedInState(user);

        }
        else if (jqHXR.status == 400) {
          renderRegistration();
        }
      }
    });

  });

  $( "#city-search" ).click(function () {
    event.preventDefault();
    var places_div = $("div.places");
    var messages   = $("div.message");
    var button     = $(this);
    var method     = button.attr("method");
    var city       = $("#city").val();
    var url        = "http://localhost:3000/places/" + city;

    $.ajax(url, {
      type: method,
      dataType: 'json',
      success: function (data, textStatus, jqHXR) {
        if (jqHXR.status == 200) {
        var places = data
          for(i = 0; i < places.length; i++) {
            var place = makePlace(places[i]);

            places_div.append(place)
          }
        }
        else if (jqHXR.status == 204) {
          var apology = sendApology("place");

          messages.append(apology);
        }
      }
    })
  });
});

function renderRegistration(element) {
  element.parents("header").slideUp("fast");
  $(".sign-up-form").css("display", "block");
}

function showLoggedInState(user) {
  $(".sign-up-form").css("display", "none");
  $("#sign-up").css("display", "none");
  $(".login").toggleClass("logout")
  $(".logout").text("Log Out")

  $("header").slideDown();
}

function sendApology(thing) {
  var p = $("<p></p>");
  if(thing == "place") {
    var apology = "Sorry! There are no places in our database for that city.";
  }
  else if(thing == "user") {
    var apology = "User could not be created."
  }

  p.html(apology)

  return p;
}

function makePlace(obj) {
  var ul = $("<ul></ul>");
  var li = $("<li></li>");

  li.html(obj.name)
  ul.html(li)

  return ul
}
