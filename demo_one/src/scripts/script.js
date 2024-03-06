$(document).ready(function () {
  //Toggle active card
  $(".card").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("card__disabled")) {
      $(".card").removeClass("card__active").addClass("card__disabled");
      $(this).removeClass("card__disabled").addClass("card__active");
    }
  });

  //Toggle mobile card header active
  $(".cards__header--mb .card__header").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("card__header-disabled")) {
      $(".cards__header--mb .card__header")
        .removeClass("card__header-active")
        .addClass("card__header-disabled");
      $(this).removeClass("card__disabled").addClass("card__header-active");
      updateActiveCards(e);
    }
  });

  // Function to update active card
  function updateActiveCards(cardIndex) {
    var selIndex = cardIndex.currentTarget.attributes.dataindex.value;
    var cards = document.querySelectorAll(".card");
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].attributes.dataindex.value === selIndex) {
        cards[i].classList.remove("card__disabled");
        cards[i].classList.add("card__active");
      } else {
        cards[i].classList.remove("card__active");
        cards[i].classList.add("card__disabled");
      }
    }
  }

  //Card slider for small screen devices
  $(window)
    .resize(function () {
      if ($(window).width() <= 767) {
        var slider = $("#MySliderId");
        var cards = $(".cards__wrap");
        var btns = $(".cards__header--mb .card__header");
        var cardWidth = cards.first().outerWidth(true);

        function adjustCardWidth() {
          cards.eq(0).css("flex", "0 0 " + cardWidth + "px");
          var totalWidth = cardWidth * cards.length + 60;
          slider.width(totalWidth);
        }

        function moveToCenter(index) {
          var currentIndex = index - 1;
          var distanceToMove = currentIndex * cardWidth;
          var translateValue = -distanceToMove + "px";

          cards.eq(currentIndex).css("flex", "0 0 " + cardWidth + "px");
          slider.css("transform", "translateX(" + translateValue + ")");
        }

        adjustCardWidth();

        btns.click(function () {
          var index = $(this).data("index");
          moveToCenter(index);
        });

        $(window).on("resize", function () {
          adjustCardWidth();
        });
      }
    })
    .resize();
});
