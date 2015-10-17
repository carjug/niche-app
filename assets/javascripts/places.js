$( function() {
  $( "#city-search" ).click(function () {
    event.preventDefault();
    var places_div = $("div.places");
    var button     = $(this);
    var method     = button.attr("method");
    var city       = $("#city").val();
    var url        = "http://localhost:3000/places/" + city;

    $.ajax(url, {
      type: method,
      dataType: 'json',
      success: function (data, textStatus, jqHXR) {
        // places.append(data)
        if (jqHXR.status == 200) {
        var places = data
          for(i = 0; i < places.length; i++) {
            // console.log(places[i])
            var place = makePlace(places[i]);

            places_div.append(place)
          }
        }

        // console.log(data)
      }
    })
  });
});

function makePlace(obj) {
  var ul = $("<ul></ul>");
  var li = $("<li></li>");

  li.html(obj.name)
  ul.html(li)

  return ul
}
