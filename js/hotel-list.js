// (function() {
  var container = document.querySelector(".hotels");

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
    return element;
  }
// })();
