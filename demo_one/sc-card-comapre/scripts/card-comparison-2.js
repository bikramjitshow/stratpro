(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = {
          exports: {},
        });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        /* global JQuery */
        //Card selection tab
        var CardSelect =
          /*#__PURE__*/
          (function () {
            function CardSelect() {
              _classCallCheck(this, CardSelect);
            }

            _createClass(CardSelect, [
              {
                key: "init",
                value: function init() {
                  var that = this;
                  var device = that.numberOfCards(); //Detect which types of device is using

                  (function ($) {
                    $(".m-persistent-bar").addClass("sticky-hidden"); //Hide default sticky bar
                    //Add/Remove cards for compare

                    $("body").on("click", ".compare-btn", function (event) {
                      that.addRemoveCard(
                        that,
                        $(event.currentTarget).attr("data-for")
                      ); //Method of Add/Remove cards for compare
                    }); //Selected categories and show correspondent cards

                    $("body").on(
                      "click",
                      ".card-compare-tab-buttons button",
                      function (event) {
                        var attr = $(event.currentTarget).attr("data-filter"); //Getting attributes value

                        $("button").removeClass("button-active"); //Deactivate previously/default selected categories

                        $(event.currentTarget).addClass("button-active"); //Activate clicked category

                        if (attr != "all") {
                          $(".card-compare-tab-content")
                            .find(".card-box")
                            .hide();
                          $(attr).show();
                        } else {
                          $(".card-compare-tab-content")
                            .find(".card-box")
                            .show();
                        }
                      }
                    ); //Show Compare Data popup

                    $("body").on(
                      "click",
                      ".compare-action-btn",
                      function (event) {
                        $(
                          ".popup-single-loan-box, .single-loan-box-blank"
                        ).hide();
                        var totalCard = $(".compare-main").length; //Check how many cards are selected

                        console.log("totalCard", totalCard);
                        if (totalCard == 0) {
                          //No card selected for compare
                          return;
                        } else if (totalCard == 1) {
                          //One card selected for compare
                          $(".card-selection-error").text(
                            "Please select minimum 2 cards to compare"
                          );
                          return;
                        } //Selected multiple cards

                        $(".single-compare-result-box")
                          .find(
                            ".compare-box-close, .compare-result-grid, .show-promotioin"
                          )
                          .toggleClass("show-card-info hide-card-info");
                        $(".compare-result-box").fadeIn(200); //total cards selected based on device and

                        while (totalCard < device) {
                          totalCard++;
                          $(".apply-now-back-".concat(totalCard)).show(); //Show add more card box
                        }

                        $("body").css({
                          overflow: "hidden",
                        }); //Hidden page scroll

                        return false;
                      }
                    ); //Remove Cards

                    $("body").on(
                      "click",
                      ".compare-box-close",
                      function (event) {
                        var popup_ids = $(event.currentTarget)
                          .siblings()
                          .find(".compare-btn")
                          .attr("data-for");
                        $(event.currentTarget).parent().remove();
                        that.addRemoveCard(that, popup_ids); //Method for add/remove cards for compare

                        var total = $(".single-compare-card").length;

                        if (total == 0) {
                          //Close the modal if no card selected
                          $(".single-compare-result-box")
                            .find(
                              ".compare-box-close, .compare-result-grid, .show-promotioin"
                            )
                            .toggleClass("show-card-info hide-card-info");
                        }
                      }
                    ); //minimize/open compare card sticky

                    $("body").on("click", ".show-and-hide", function (event) {
                      event.preventDefault();
                      $(".compare-section").toggleClass("hide-card-sticky");
                      $(".show-and-hide").toggleClass("show-icon");
                      $(".show-and-hide a").text(
                        $(".show-and-hide a").text() == "Show" ? "Hide" : "Show"
                      );
                    }); //Method for remove cards

                    $("body").on("click", ".remove-card", function (event) {
                      var ids = $(event.currentTarget).attr("data-identity"); //Getting remove btn number

                      ids = ids.substr(11);
                      $(".clone-cards-".concat(ids)).remove(); //Remove selected cards

                      that.addRemoveCard(that, ids); //Method for add/remove cards for compare

                      var total = $(".single-compare-card").length; //Checking total selected cards

                      if (total == 0) {
                        //Close the modal if no card selected
                        $(".single-compare-result-box")
                          .find(
                            ".compare-box-close, .compare-result-grid, .show-promotioin"
                          )
                          .toggleClass("show-card-info hide-card-info");
                      }
                    }); //If Click Outside close the cards modal

                    $(window).click(function (event) {
                      if (
                        $(event.target).hasClass("apply-now-back-btn-2") ||
                        $(event.target).hasClass(
                          "compare-result-box-inner-relative"
                        )
                      ) {
                        event.preventDefault();
                        $(".compare-result-box").fadeOut(200);
                        setTimeout(function () {
                          $("body").css({
                            overflow: "auto",
                          }); //activate page scroll
                        }, 500);
                        $(".single-compare-result-box")
                          .find(
                            ".compare-box-close, .compare-result-grid, .show-promotioin"
                          )
                          .toggleClass("show-card-info hide-card-info");
                      }
                    }); //Close the cards modal if clicked close button

                    $("body").on("click", ".close-btn", function (e) {
                      e.preventDefault();
                      $(".compare-result-box").fadeOut(200);
                      setTimeout(function () {
                        $("body").css({
                          overflow: "auto",
                        }); //activate page scroll
                      }, 500);
                      $(".single-compare-result-box")
                        .find(
                          ".compare-box-close, .compare-result-grid, .show-promotioin"
                        )
                        .toggleClass("show-card-info hide-card-info");
                    });
                  })(jQuery);
                }, //Method for add/remove cards for compare
              },
              {
                key: "addRemoveCard",
                value: function addRemoveCard(that, ids) {
                  var device = that.numberOfCards(); //Detect which types of device is using

                  (function ($) {
                    $(".add-blank-card").remove();
                    var total = $(".single-compare-card").length; //Checking cards are selected or not

                    console.log(that, ids);
                    console.log("single-compare-card length -- ", total);
                    console.log(
                      `datafor ${ids} -- `,
                      $("[data-for='" + ids + "']").hasClass("compare-main")
                    );
                    if (
                      $("[data-for= ".concat(ids, "]")).hasClass("compare-main")
                    ) {
                      //Card is already selected
                      //Remove Card
                      $(".single-loan-box-blank").hide(); //Hide popup blank

                      $("[data-for= ".concat(ids, "]")).removeClass(
                        "compare-main"
                      ); //Remove from compare cards sticky

                      $(".single-compare-result-box")
                        .children(".card-compare-".concat(ids))
                        .remove();
                      $(".clone-cards-".concat(ids)).remove(); //Remove card divs from modal

                      $(".card-selection-error").text("");
                      total = $(".single-compare-card").length; //Get total selected cards

                      $(".card-compare-".concat(ids)).toggleClass("active");

                      if (total == 0) {
                        //No card available
                        $(".card-compare-sticky").css({
                          display: "none",
                        });
                        $(".compare-result-box").fadeOut(200);
                        setTimeout(function () {
                          $("body").css({
                            overflow: "auto",
                          }); //activate page scroll
                        }, 500);
                      } else {
                        var temp = "";
                        $(".compare-section").removeClass("hide-card-sticky");
                        $(".show-and-hide a").text("Hide");
                        $(".single-blank-card").removeClass("show"); //hide all add more card box
                        //Add blank cards div in temp variables

                        while (total < device) {
                          $(".add-blank-card-sm-".concat(total)).addClass(
                            "show"
                          ); //Show add more card box

                          total++;
                          $(".apply-now-back-".concat(total)).show();
                        }

                        $(".compare-selected-cards").append(temp); //Added blank cards div in Compare Cards Sticky

                        $(".card-selection-error").text(""); //Remove error texts

                        $(".card-compare-sticky").css({
                          display: "block",
                        });
                      }
                    } else {
                      //You have reached cards limit in compare cards Sticky
                      $(".compare-section").removeClass("hide-card-sticky");
                      $(".show-and-hide a").text("Hide");

                      if (total >= device) {
                        $(".card-selection-error")
                          .addClass("cannot-add-2-cards")
                          .text(
                            "You cannot select more than ".concat(
                              device,
                              " cards"
                            )
                          ); //Add error text message
                      } else {
                        //You have slots for add cards in compare cards Sticky
                        $(".card-compare-sticky").css({
                          display: "block",
                        });
                        var cardClone = $(".card-compare-".concat(ids)).clone(); //Clone selected card divs for Compare Cards Sticky

                        $(".card-compare-".concat(ids)).toggleClass("active"); //Active/deactivate selected cards

                        $("[data-for= ".concat(ids, "]")).addClass(
                          "compare-main"
                        );
                        var html =
                          '<div class="single-compare-card compare-activated-card clone-cards-'.concat(
                            ids,
                            '">\n          <p>'
                          ) +
                          // $(".card-compare-".concat(ids))
                          //   .children(".title")
                          //   .children(".card-name")
                          $(".card-compare-".concat(ids))
                            .find(".sc-casa-product-list__title")
                            .text() +
                          '</p><div class="single-compare-card-image">\n                  <span class="remove-card" data-identity="card-close-'.concat(
                            ids,
                            '">-</span>\n                  <img src="'
                          ) +
                          $(".card-compare-".concat(ids))
                            .find("img")
                            .attr("src") +
                          '" alt=""></div></div>'; //Add selected card divs in temp variables

                        $(".add-blank-card-sm-0").before(html); //Added selected and blank cards div in Compare Cards Sticky
                        //Add blank cards div in temp variables

                        $(".single-blank-card").removeClass("show"); //Hide all add more card box

                        while (total < device - 1) {
                          $(".add-blank-card-sm-".concat(total)).addClass(
                            "show"
                          ); //Show add more card box

                          total++;
                        }

                        $(".card-selection-error").text(""); //Remove error message

                        $(".apply-now-back-2").before(cardClone); //Clone cards in Compare Cards Modal
                      }
                    }
                  })(jQuery);
                }, //Number of cards supported by device
              },
              {
                key: "numberOfCards",
                value: function numberOfCards() {
                  if (window.matchMedia("(max-width: 767px)").matches) {
                    return 2; //Mobile support 2 cards
                  }

                  return 3; //desktop, tabs, etc support 3 cards
                },
              },
            ]);

            return CardSelect;
          })();

        var instance = new CardSelect();
        document.addEventListener("DOMContentLoaded", function () {
          instance.init();
        });
        var _default = instance;
        exports.default = _default;
      },
      {},
    ],
  },
  {},
  [1]
);
