(function() {
  var container = document.querySelector(".hotels");
  var IMAGE_TIMEOUT = 10000;

  hotels.forEach(function(hotel) {
    var element = getElementFromTemplate(hotel);
    container.appendChild(element);

    // alert(hotel.rating);
  });

  function getElementFromTemplate(data) {
    var template = document.querySelector("#hotel-template");

    if("content" in template) {
      var element = template.content.children[0].cloneNode(true);
    } else {
      var element = template.children[0].cloneNode(true);
    }
    element.querySelector(".hotel-name").textContent = data.title;
    element.querySelector(".hotel-type").textContent = data.type;
    element.querySelector(".hotel-price").textContent = "от " + data.price + " Р.";
    element.querySelector(".hotel-rating").textContent = "Рейтинг: " + data.rating;
    element.querySelector(".hotel-rating").classList.add("hotel-rating-star-" + data.stars);

    var hotelImageContainer = element.querySelector(".hotel-image-container");
    var hotelImage = new Image();

    var imageLoadTimeOut = setTimeout(function() {
      hotelImage.src = "";
      hotelImageContainer.classList.add("hotel-nophoto");
    }, IMAGE_TIMEOUT);

    hotelImage.onload = function() {
      clearTimeout(imageLoadTimeOut);
    }

    hotelImage.onerror = function() {
      hotelImageContainer.classList.add("hotel-nophoto");
    }

    hotelImage.src = data.img;
    hotelImageContainer.appendChild(hotelImage);

    return element;
  }
})();
