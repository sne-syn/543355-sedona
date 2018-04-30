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
