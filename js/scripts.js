var body = document.querySelector('body');
body.classList.remove('no-js');
body.classList.add('js');

var link = document.querySelector(".hotel-button");
var form = document.querySelector(".booking-fields");
var checkIn = form.querySelector("[id=check-in]");
var checkOut = form.querySelector("[id=check-out]");
var roomAdults = form.querySelector("[id=adults-field]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("booking-fields-js");
  checkIn.focus();
});

form.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !roomAdults.value) {
    evt.preventDefault();
    form.classList.remove("booking-field-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("booking-field-error");
  }
});


function initMap() {
  var element = document.getElementsByClassName("background-map")[0];
  var options = {
    zoom: 10,
    center: {
      lat: 34.857323,
      lng: -111.794933
    }
  };

  var myMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
    position: {
      lat: 34.857323,
      lng: -111.794933
    },
    map: myMap
  });
}
