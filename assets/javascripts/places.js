$( function() {
  $( "#sign-up" ).click(function () {
    event.preventDefault();
    var button = $(this);
    renderRegistration(button);
  });

  $("#register").click(function () {
    event.preventDefault();

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
          var apology = sendApology();

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

function sendApology() {
  var p = $("<p></p>");
  var apology = "Sorry! There are no places in our database for that city."

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
