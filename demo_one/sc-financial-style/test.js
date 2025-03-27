! function o(r, i, a) {
  function c(t, e) {
    if (!i[t]) {
      if (!r[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (l) return l(t, !0);
        throw (e = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", e
      }
      n = i[t] = {
        exports: {}
      }, r[t][0].call(n.exports, function(e) {
        return c(r[t][1][e] || e)
      }, n, n.exports, o, r, i, a)
    }
    return i[t].exports
  }
  for (var l = "function" == typeof require && require, e = 0; e < a.length; e++) c(a[e]);
  return c
}({
  1: [function(e, t, n) {
    "use strict";

    function r(e) {
      return function(e) {
        if (Array.isArray(e)) return o(e)
      }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || function(e, t) {
        var n;
        if (e) return "string" == typeof e ? o(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o
    }

    function l(e) {
      return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function i(t, e) {
      var n, o = Object.keys(t);
      return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), o.push.apply(o, n)), o
    }

    function h(o) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? i(Object(r), !0).forEach(function(e) {
          var t, n;
          t = o, n = r[e = e], (e = c(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e))
        })
      }
      return o
    }

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, c(o.key), o)
      }
    }

    function c(e) {
      e = function(e, t) {
        if ("object" !== l(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 === n) return ("string" === t ? String : Number)(e);
        n = n.call(e, t || "default");
        if ("object" !== l(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
      }(e, "string");
      return "symbol" === l(e) ? e : String(e)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var s = new(function() {
      function e() {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
      var t, n, o;
      return t = e, (n = [{
        key: "init",
        value: function() {
          var p = this,
            b = 1,
            e = document.querySelector(".sc-financial-style"),
            _ = JSON.parse(e.getAttribute("data-req-json")),
            g = {
              q1: "",
              q2: "",
              q3: ""
            },
            q = {
              q1: "",
              q2: "",
              q3: ""
            };
          document.addEventListener("click", function(e) {
            var t, n, o, r, i = e.target,
              a = document.querySelector(".sc-financial-style__segment-one"),
              c = document.querySelector(".sc-financial-style__segment-two"),
              l = document.querySelector(".sc-financial-style__segment-three"),
              s = document.querySelector(".sc-financial-style__segment-four"),
              u = document.querySelector(".sc-financial-style__question-one"),
              d = document.querySelector(".sc-financial-style__question-two"),
              m = document.querySelector(".sc-financial-style__question-three"),
              y = "",
              f = "scFSMosuleSelectedAnswers";
            if (e.target.closest(".closebutton") && e.target.closest(".c-modal").querySelector(".sc-financial-style") && setTimeout(function() {
                p.handleSubmittedField()
              }, 500), i.classList.contains("sc-financial-style__segment-one-button")) b = 1, a.style.display = "none", c.style.display = "block", l.style.display = "none";
            else if (i.classList.contains("sc-financial-style__segment-two-button")) switch (b) {
                case 2:
                  null === document.querySelector('input[name="radio-box-q2"]:checked') ? document.querySelector(".sc-financial-style__error-container").classList.remove("hide") : (document.querySelector(".sc-financial-style__error-container").classList.add("hide"), r = document.querySelector('input[name="radio-box-q2"]:checked').value, y = (document.querySelector('input[name="radio-box-q2"]:checked').closest("div").querySelector("div") ? document.querySelector('input[name="radio-box-q2"]:checked').closest("div").querySelector("div") : document.querySelector('input[name="radio-box-q2"]:checked').closest("div").querySelector("label")).innerHTML, g = p._objectSpread(p._objectSpread({}, g), {}, {
                    q2: r,
                    q3: ""
                  }), q = p._objectSpread(p._objectSpread({}, q), {}, {
                    q2: y,
                    q3: ""
                  }), Utils.setLocalStorageWithExpiry(f, g, 1728e5), document.querySelector(".sc-financial-style__segment-two .sc-financial-style__segment-two-button").innerHTML = _.q2ResultText, document.querySelector(".sc-financial-style__segment-two .sc-financial-style__segment-two-button").setAttribute("title", _.q2ResultText), b = 3, u.style.display = "none", d.style.display = "none", m.style.display = "block");
                  break;
                case 3:
                  null === document.querySelector('input[name="radio-box-q3"]:checked') ? document.querySelector(".sc-financial-style__error-container").classList.remove("hide") : (document.querySelector(".sc-financial-style__error-container").classList.add("hide"), r = document.querySelector('input[name="radio-box-q3"]:checked').value, y = document.querySelector('input[name="radio-box-q3"]:checked').closest("div").querySelector("div").innerHTML, g = p._objectSpread(p._objectSpread({}, g), {}, {
                    q3: r
                  }), q = p._objectSpread(p._objectSpread({}, q), {}, {
                    q3: y
                  }), Utils.setLocalStorageWithExpiry(f, g, 1728e5), null != (t = _.result) && null != (t = t[g.q1]) && null != (t = t[g.q2]) && null != (t = t[g.q3]) && t.adjectives && (document.querySelector(".sc-financial-style__segment-three-prod-name").innerHTML = null == (t = _.result) || null == (t = t[g.q1]) || null == (t = t[g.q2]) || null == (t = t[g.q3]) ? void 0 : t.adjectives), null != (t = _.result) && null != (t = t[g.q1]) && null != (t = t[g.q2]) && null != (t = t[g.q3]) && t.description && (document.querySelector(".sc-financial-style__segment-three-prod-desc").innerHTML = null == (t = _.result) || null == (t = t[g.q1]) || null == (t = t[g.q2]) || null == (t = t[g.q3]) ? void 0 : t.description), p.commonAdobeScript(), window.digitalData.form = h({}, q), window.digitalData.ctaName = i.innerHTML, t = h(h({}, digitalData), {}, {
                    event: "formEnd"
                  }), window.adobeDataLayer.push(t), c.style.display = "none", l.style.display = "block");
                  break;
                default:
                  null === document.querySelector('input[name="radio-box-q1"]:checked') ? document.querySelector(".sc-financial-style__error-container").classList.remove("hide") : (document.querySelector(".sc-financial-style__error-container").classList.add("hide"), r = document.querySelector('input[name="radio-box-q1"]:checked').value, y = document.querySelector('input[name="radio-box-q1"]:checked').closest("div").querySelector("label").innerHTML, g = {
                    q1: r,
                    q2: "",
                    q3: ""
                  }, q = {
                    q1: y,
                    q2: "",
                    q3: ""
                  }, Utils.setLocalStorageWithExpiry(f, g, 1728e5), _.q2[r] && ("image" === (t = _.q2[r]).type ? (document.querySelector(".sc-financial-style__question-two .sc-financial-style__question-text").innerHTML = t.questionText, t.options && (n = "", t.options.forEach(function(e, t) {
                    n += '<div class="sc-financial-style__answer-box">\n                    <div class="sc-financial-style__q2-answers">\n <div class="sc-financial-style__q2-input-label">'.concat(e.optDesc, '</div>   \n \t\t\t\t\t  <input\n                        type="radio"\n                        class="sc-financial-style__q2-input"\n                        id="radio-box-q2-').concat(t + 1, '"\n                        tabindex="-1"\n                        name="radio-box-q2"\n                        value="').concat(e.optValue, '"\n                        ') + "" + '\n                      />\n                      <label class="sc-financial-style__q2-label sc-financial-style__img-label" for="radio-box-q2-'.concat(t + 1, '" tabindex="0">\n                        <img src="').concat(e.optText, '" class="sc-financial-style__answer-img" alt="" loading="lazy">\n                      </label>\n                    </div>\n                  </div>')
                  }), document.querySelector(".sc-financial-style__question-two .sc-financial-style__answer-container").innerHTML = n)) : (document.querySelector(".sc-financial-style__question-two .sc-financial-style__question-text").innerHTML = t.questionText, t.options && (o = "", t.options.forEach(function(e, t) {
                    o += '<div class="sc-financial-style__answer-box">\n                    <div class="sc-radio-box sc-financial-style__full-width">\n                      <input\n                        type="radio"\n                        class="sc-radio-box__input"\n                        id="radio-box-q2-'.concat(t + 1, '"\n                        tabindex="-1"\n                        name="radio-box-q2"\n                        value="').concat(e.optValue, '" />\n                      <label class="sc-radio-box__input-label" for="radio-box-q2-').concat(t + 1, '" tabindex="0">').concat(e.optLabel, ". ").concat(e.optText, "</label>\n                    </div>\n                  </div>")
                  }), document.querySelector(".sc-financial-style__question-two .sc-financial-style__answer-container").innerHTML = o))), document.querySelector(".sc-financial-style__segment-two .sc-financial-style__back-btn").style.display = "flex", (r = document.querySelector(".sc-financial-style__segment-two .sc-financial-style__segment-two-button")) && (r.classList.remove("sc-financial-style__full-width"), r.classList.add("sc-financial-style__segment-next-btn")), b = 2, u.style.display = "none", d.style.display = "block", m.style.display = "none")
              } else if (i.classList.contains("sc-financial-style__back-btn")) 2 === (b -= 1) ? (document.querySelector(".sc-financial-style__segment-two .sc-financial-style__segment-two-button").innerHTML = _.q2NextBtnText, document.querySelector(".sc-financial-style__segment-two .sc-financial-style__segment-two-button").title = _.q2NextBtnText, u.style.display = "none", d.style.display = "block") : (document.querySelector(".sc-financial-style__segment-two .sc-financial-style__back-btn").style.display = "none", (e = document.querySelector(".sc-financial-style__segment-two .sc-financial-style__segment-two-button")) && (e.classList.remove("sc-financial-style__segment-next-btn"), e.classList.add("sc-financial-style__full-width")), u.style.display = "block", d.style.display = "none"), m.style.display = "none";
              else if (i.classList.contains("sc-financial-style__segment-three-button")) document.querySelector(".sc-financial-style__questions").value = Utils.getLocalStorageWithExpiry(f), l.style.display = "none", s.style.display = "block";
            else if (i.classList.contains("sc-financial-style__segment-four-button")) {
              if (!p.financialFormValid()) return !1;
              p.sendFormData(), i.style.display = "none"
            } else(i.classList.contains("icon-modal-close") || i.classList.contains("icon-modal-close-mobile")) && (p.commonAdobeScript(), window.digitalData.ctaName = "close", window.digitalData.context = "close", window.digitalData.ctaPosition = "lightbox", window.digitalData.ctaType = "link", window.digitalData.customLinkClick = {
              customLinkText: "close",
              customLinkRegion: "right lightbox",
              customLinkType: "close"
            }, a = h(h({}, digitalData), {}, {
              event: "ctaClick"
            }), window.adobeDataLayer.push(a))
          })
        }
      }, {
        key: "financialFormValid",
        value: function() {
          var e, t = !0,
            n = ("" === document.querySelector(".sc-input__name").value ? (t = !1, document.querySelector(".sc-form__error-name").classList.remove("hide")) : document.querySelector(".sc-form__error-name").classList.add("hide"), document.querySelector(".sc-input__input--phonenumber").value),
            o = document.querySelector(".sc-input__country").value,
            n = ("" === n || n.length < 8 || "" === o ? (t = !1, document.querySelector(".sc-form__error-contact").classList.remove("hide")) : document.querySelector(".sc-form__error-contact").classList.add("hide"), document.querySelector(".sc-input__input-email").value),
            r = ("" !== n && (o = n.indexOf("@"), e = n.lastIndexOf("."), 0 < o && o + 1 < e && e < n.length - 1 ? document.querySelector(".sc-form__error-email").classList.add("hide") : (t = !1, document.querySelector(".sc-form__error-email").classList.remove("hide"))), document.querySelector(".sc-input__input-membership").value);
          if ("" !== r) {
            var i = 0;
            if (10 != r.length) t = !1, document.querySelector(".sc-form__error-membership").classList.remove("hide");
            else if (r[0] < 1) t = !1, document.querySelector(".sc-form__error-membership").classList.remove("hide");
            else {
              for (var a = 1; a < r.length; a++) i += r[a - 1] * a;
              i % 10 != r[9] ? (t = !1, document.querySelector(".sc-form__error-membership").classList.remove("hide")) : document.querySelector(".sc-form__error-membership").classList.add("hide")
            }
          } else t = !1, document.querySelector(".sc-form__error-membership").classList.remove("hide");
          return "" === document.querySelector(".sc-input__input-membership-family-name").value ? (t = !1, document.querySelector(".sc-form__error-membership-family-name").classList.remove("hide")) : document.querySelector(".sc-form__error-membership-family-name").classList.add("hide"), "" === document.querySelector(".sc-input__input-membership-given-name").value ? (t = !1, document.querySelector(".sc-form__error-membership-given-name").classList.remove("hide")) : document.querySelector(".sc-form__error-membership-given-name").classList.add("hide"), "0" === document.querySelector(".sc-select__branch").value ? (t = !1, document.querySelector(".sc-form__error-branch").classList.remove("hide")) : document.querySelector(".sc-form__error-branch").classList.add("hide"), t
        }
      }, {
        key: "handleSubmittedField",
        value: function() {
          var e = document.querySelectorAll(".modular-form-container");
          e.length && e.forEach(function(e) {
            e.classList.remove("hide")
          })
        }
      }, {
        key: "sendFormData",
        value: function() {
          var e = this.prepareXMLData(),
            i = document.querySelector(".sc-financial-style__segment-four .sc-form.modular-form"),
            a = i.getAttribute("data-form-id"),
            t = i.getAttribute("data-url"),
            c = new XMLHttpRequest;
          c.open("POST", t, !0), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF8"), c.onload = function(e) {
            if (200 === c.status) {
              e = e.target.responseText;
              if (0 <= e.indexOf("Failed")) return t = '<div class="failureNote">' + i.getAttribute("data-failure-message") + "</div>", document.querySelector(".sc-financial-style__message").innerHTML = t, !(document.querySelector(".sc-financial-style__message").style.display = "block");
              var t = a.toUpperCase(),
                t = e.indexOf(t),
                n = e.indexOf("<", t),
                e = e.substring(t, n),
                t = '<div class="sc-financial-style__successMsg">' + i.getAttribute("data-success-message") + ' <span class="sgrID">' + e + "</span></div>",
                o = (document.querySelector(".sc-financial-style__message").innerHTML = t, document.querySelector(".sc-financial-style__message").style.display = "block", document.querySelectorAll(".sc-form__col"));
              if (o.length)
                for (var r = 0; r < o.length; r++) o[r].classList.add("hide");
              document.querySelector(".sc-financial-style__button-container").classList.add("hide");
              n = document.querySelector(".sc-financial-style__segment-four-notes");
              n && n.classList.add("hide")
            } else {
              e = '<div class="failureNote">' + i.getAttribute("data-failure-message") + "</div>";
              document.querySelector(".sc-financial-style__message").innerHTML = e, document.querySelector(".sc-financial-style__message").style.display = "block"
            }
          }, this.adobeFormSuccess("submit"), c.send("formXML=" + e.trim())
        }
      }, {
        key: "adobeFormSuccess",
        value: function(e) {
          if (void 0 !== window.adobeDataLayer) {
            var t = ["alphabetic-text", "alphanumeric-text", "number", "phone", "email", "text"];
            if ("object" == l(window.digitalData)) {
              this.commonAdobeScript();
              var n = "",
                o = "",
                r = document.querySelector(".sc-financial-style__segment-four-wrapper").querySelectorAll(".modular-form .modular-form-container");
              if (r.length)
                for (var i = 0; i < r.length; i++) {
                  var a = r[i].getAttribute("data-field-type"),
                    c = r[i].getAttribute("data-xml-key");
                  a && c && (n += n ? ":" + c : c, t.includes(a) ? (c = r[i].querySelector("input").value, o += o ? ":" + c : c) : "phone-code" == a ? (c = r[i].querySelector(".code").value + r[i].querySelector(".phone-field").value, o += o ? ":" + c : c) : "email" == a ? (c = r[i].querySelector("email").value, o += o ? ":" + c : c) : "text" == a ? (c = r[i].querySelector("text").value, o += o ? ":" + c : c) : "dropdown" == a ? (c = r[i].querySelector("select").value, o += o ? ":" + c : c) : "checkbox" == a || "toggle" == a ? (c = (c = r[i].querySelector("input:checked")) || "0" == c ? "yes" : "no", o += o ? ":" + c : c) : "radio" == a ? (c = r[i].querySelector("input:checked").value, o += o ? ":" + c : c) : "checkbox-view-list" == a && (c = (c = r[i].querySelector("input:checked")) || "0" == c ? "yes" : "no", o += o ? ":" + c : c))
                }
              n = n.toLowerCase(), o = o.toLowerCase(), window.digitalData.customLinkClick = {
                customLinkText: e,
                customLinkRegion: "left bottom",
                customLinkType: "button"
              }, window.digitalData.form.formFields = [], window.digitalData.form.formFields.push({
                formFieldName: n,
                formFieldValue: o
              });
              e = h(h({}, digitalData), {}, {
                event: "ctaClick"
              });
              return window.adobeDataLayer.push(e), {
                labelText: n,
                labelValue: o
              }
            }
          }
        }
      }, {
        key: "commonAdobeScript",
        value: function() {
          var e, t;
          "object" == l(window.digitalData) && (e = document.querySelector(".modular-form"), window.digitalData.page.pageInfo.buildDetails = "web3.0", window.digitalData.page.pageInfo.libDetails = _satellite.environment.stage, this.getIntExtCampaignInfo(), t = window.digitalData.page.pageInfo.pageName.split(":"), window.digitalData.product = [], window.digitalData.product.push({
            productInfo: {
              productID: this.productId,
              productName: this.productName,
              productCategory: t[4],
              productSubcategory: t[5]
            }
          }), window.digitalData.customLinkClick = {
            customLinkText: "na",
            customLinkRegion: "na",
            customLinkType: "na"
          }, window.digitalData.user = window.digitalData.user || {}, window.digitalData.user.userInfo = {
            userStatus: "guest",
            userType: "NTB",
            segment: t[2],
            loginType: "na",
            userID: "na"
          }, window.digitalData.form = {
            formName: "na" == this.productName ? t[6] : this.productName,
            formStepName: "na",
            formType: t[3],
            formPlatform: "udp-form",
            formID: e && e.getAttribute("data-form-id") ? e.getAttribute("data-form-id") : "na"
          }, t[7] = "na" == this.productName ? t[6] : this.productName, window.digitalData.page.pageInfo.pageName = t.join(":"))
        }
      }, {
        key: "getIntExtCampaignInfo",
        value: function() {
          var e, t, n = ["intcid", "subChanCode", "referId", "instance", "camp_id", "pid", "promoCode", "promo", "state"],
            o = "",
            r = "",
            i = [],
            a = window.location.search,
            c = "",
            l = "";
          for (e in (a = a && a.substring(1)) && (i = a.split("&")), n) {
            var s = Utils.getCookie(n[e]),
              u = Utils.getLocalStorageWithExpiry(n[e]);
            o && (o += ":", r += ":"), o += n[e], r += s || u || "na"
          }
          for (t in n = ["aggregator_code", "aggregator_type", "aggregator_instance"])
            if (o && (o += ":", r += ":"), o += n[t], i.length) {
              var d, m = !1,
                y = void 0;
              for (d in i)
                if ((y = i[d].split("="))[0].toLowerCase() == n[t]) {
                  m = !0;
                  break
                } r += m ? y[1] : "na"
            } else r += "na";
          if (i.length)
            for (var f in i) {
              f = i[f].split("="); - 1 === n.indexOf(f[0].toLowerCase()) && ("" != l && (c += ":", l += ":"), c += f[0], l += f[1], "productid" == f[0].toLowerCase() ? this.productId = f[1].toLowerCase() : "productname" == f[0].toLowerCase() && (this.productName = f[1].toLowerCase()))
            }
          return "" == c && (l = c = "na"), {
            intName: o.toLowerCase(),
            intVal: r.toLowerCase(),
            extName: c.toLowerCase(),
            extVal: l.toLowerCase()
          }
        }
      }, {
        key: "prepareXMLData",
        value: function() {
          var e = document.querySelector(".modular-form"),
            t = e.getAttribute("data-form-id"),
            n = {},
            e = (n.product = e.getAttribute("data-product-name"), "AER796" == t || "AER462" == t),
            o = document.querySelectorAll(".c-modal.is-open .modular-form-container");
          if (o.length)
            for (var r = 0; r < o.length; r++) {
              var i = o[r].getAttribute("data-field-type"),
                a = o[r].getAttribute("data-xml-key");
              i && a && ("alphabetic-text" == i ? n[a] = o[r].querySelector("input").value : "phone-code" == i ? n[a] = (o[r].querySelector(".code").value + o[r].querySelector(".phone-field").value).trim() : "phone" == i || "email" == i || "text" == i ? n[a] = o[r].querySelector("input").value : "textarea" == i ? n[a] = o[r].querySelector("textarea").value : "dropdown" == i ? n[a] = o[r].querySelector("select").value : "toggle" == i ? n[a] = o[r].querySelector("input:checked") ? "yes" : "no" : "radio" !== i && "checkbox" !== i || (i = o[r].querySelector("input:checked"), n[a] = i ? i.value : ""))
            }
          var c, l = document.querySelector(".code"),
            s = 0,
            l = (l && l.getAttribute("minlength"), s = s || 8, e && (n.contact = n.contact.length >= s ? n.contact : n.email), Utils.browserDetect.searchString(Utils.browserDetect.dataBrowser) || "Other"),
            e = Utils.browserDetect.searchVersion(navigator.userAgent) || Utils.browserDetect.searchVersion(navigator.appVersion) || "Unknown",
            s = (n["browser-info"] = l + " " + e, n["os-info"] = Utils.getDeviceDetails().os, n.country = Utils.getCurrentCountry(), n["device-info"] = "m" === Utils.getDeviceDetails().deviceInfo ? "mobile" : "desktop", n.fullurl = encodeURIComponent(window.location.href), Utils.convertQueryStringToJsonObject(Utils.getPageUrl().queryString)),
            u = (n["product-name"] = s.productName || "", n["campaign-id"] = s.campaign_id || "", n["session-id"] = this.sessionId(), Utils.constants.ALLOWABLE_QUERYSTRING.scb);
          for (c in u) {
            var d = Utils.getCookie(u[c]);
            d ? n["".concat(u[c])] = d : (d = Utils.getLocalStorageWithExpiry(u[c]), n["".concat(u[c])] = d || "")
          }
          if (f = (f = window.modularXML).replace(new RegExp("data-form-id", "gi"), t), Object.keys(n).length)
            for (var m in n) var y = "data-".concat(m),
              f = f.split(y).join(n[m]);
          return f.trim()
        }
      }, {
        key: "sessionId",
        value: function() {
          return r(Array(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 120)).map(function() {
            return Math.random().toString(36).substr(2, 1)
          }).join("")
        }
      }, {
        key: "_objectSpread",
        value: function(t) {
          for (var n = this, e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n._ownKeys(Object(o), !0).forEach(function(e) {
              n._defineProperty(t, e, o[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : n._ownKeys(Object(o)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            })
          }
          return t
        }
      }, {
        key: "_ownKeys",
        value: function(t, e) {
          var n, o = Object.keys(t);
          return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })), o.push.apply(o, n)), o
        }
      }, {
        key: "_defineProperty",
        value: function(e, t, n) {
          return (t = this._toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }
      }, {
        key: "_toPropertyKey",
        value: function(e) {
          e = this._toPrimitive(e, "string");
          return "symbol" === this._typeof(e) ? e : String(e)
        }
      }, {
        key: "_toPrimitive",
        value: function(e, t) {
          if ("object" !== this._typeof(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 === n) return ("string" === t ? String : Number)(e);
          n = n.call(e, t || "default");
          if ("object" !== this._typeof(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
      }, {
        key: "_typeof",
        value: function(e) {
          return this._typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, this._typeof(e)
        }
      }]) && a(t.prototype, n), o && a(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }());
    document.onreadystatechange = function() {
      "complete" === document.readyState && s.init()
    }, n.default = s
  }, {}]
}, {}, [1]);