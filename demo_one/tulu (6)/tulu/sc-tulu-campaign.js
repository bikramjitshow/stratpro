(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _scCommonMethods = require("../../../js/sc-common-methods");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ScTuluCampaign = /*#__PURE__*/function () {
  function ScTuluCampaign() {
    _classCallCheck(this, ScTuluCampaign);
  }
  _createClass(ScTuluCampaign, [{
    key: "init",
    value: function init() {
      var that = this;
      that.parentModalId = '';
      that.ScTuluCamp = document.querySelector('.sc-tulu-camp');

      // Get all the tabs in this tab group
      that.tabs = that.ScTuluCamp.querySelectorAll('[data-tab-btn-id]');
      // Get all the content items in this tab group
      that.contents = that.ScTuluCamp.querySelectorAll('.sc-tulu-camp-tab__content-item');
      that.tabs.forEach(function (tab) {
        tab.addEventListener('click', function (event) {
          var targetId = tab.getAttribute('data-tab-btn-id');
          that.handleTabs(targetId);
          var closestBtn = event.target.closest('button');
          if (closestBtn) {
            (0, _scCommonMethods.handleAnalyticsCTA)(event, closestBtn, {
              ctaType: 'button',
              ctaPosition: 'top'
            });
          }
          var closestPdt = event.target.closest('.sc-tulu-camp-product-card__main');
          if (closestPdt) {
            (0, _scCommonMethods.handleAnalyticsCTA)(event, '', {
              context: (0, _scCommonMethods.trim)(closestPdt.querySelector('.sc-tulu-camp-product-card__title').innerText),
              ctaType: 'button',
              xLinkRegion: 'middle',
              ctaPosition: 'middle'
            });
          }
        });
      });
      that.getStartedModal();
      that.asiaMilesYesModal();
      that.handleMissionTracking();
      that.handleModal();
      that.handleQuestionnaire();
      that.objectList();
      that.handleFaqAnalytics();
    }

    /**
     * Fetches and caches the topology data for world continents.
     * Ensures that the topology data is loaded only once.
     */
  }, {
    key: "fetchApiData",
    value: function () {
      var _fetchApiData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
        var data, lastIndex;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (url) {
                _context.next = 2;
                break;
              }
              throw new Error('URL is required to fetch data.');
            case 2:
              // url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/${url}`;
              // console.log("url", url);

              url = url.split('/');
              data = {
                'diversify_page.json': {
                  Fields: [{
                    Value: '5000',
                    Name: 'ConsolidatedAmount'
                  }]
                },
                'levelup_page.json': {
                  Fields: [{
                    Value: '50',
                    Name: 'ConsolidatedAmount'
                  }]
                },
                'tradeup_page.json': {
                  Fields: [{
                    Value: '300',
                    Name: 'ConsolidatedAmount'
                  }]
                },
                'fx.json': {
                  Fields: [{
                    Value: 'N',
                    Name: 'FirstTrade'
                  }]
                },
                'online-equities.json': {
                  Fields: [{
                    Value: 'Y',
                    Name: 'OpenAccount'
                  }, {
                    Value: 'N',
                    Name: 'FirstTrade'
                  }, {
                    Value: 'N',
                    Name: 'CompletionBonus'
                  }]
                },
                'unit-test.json': {
                  Fields: [{
                    Value: 'Y',
                    Name: 'OpenAccount'
                  }, {
                    Value: 'Y',
                    Name: 'FirstTrade'
                  }, {
                    Value: 'Y',
                    Name: 'CompletionBonus'
                  }, {
                    Value: '',
                    Name: 'Finish all actions to earn bonus miles'
                  }]
                },
                'tradeup.json': {
                  Fields: [[{
                    Value: '100',
                    Name: 'RewardValue'
                  }, {
                    Value: '6',
                    Name: 'RewardCount'
                  }, {
                    Value: '200',
                    Name: 'ConsolidatedAmount'
                  }], [{
                    Value: '200',
                    Name: 'RewardValue'
                  }, {
                    Value: '4',
                    Name: 'RewardCount'
                  }, {
                    Value: '800',
                    Name: 'ConsolidatedAmount'
                  }], [{
                    Value: '300',
                    Name: 'RewardValue'
                  }, {
                    Value: '0',
                    Name: 'RewardCount'
                  }, {
                    Value: '1800',
                    Name: 'ConsolidatedAmount'
                  }]]
                },
                'levelup.json': {
                  Fields: [{
                    Value: 'RE101',
                    ArticleReadFlag: 'Y',
                    ArticleConsolidatedAmount: '100',
                    QuizFlag: 'Y',
                    QuizConsolidatedAmount: '100'
                  }, {
                    Value: 'RE102',
                    ArticleReadFlag: 'Y',
                    ArticleConsolidatedAmount: '200',
                    QuizFlag: 'N',
                    QuizConsolidatedAmount: '1300'
                  }, {
                    Value: 'RE103',
                    ArticleReadFlag: 'N',
                    ArticleConsolidatedAmount: '200',
                    QuizFlag: '',
                    QuizConsolidatedAmount: '1300'
                  }, {
                    Value: 'RE104',
                    ArticleReadFlag: 'Y',
                    ArticleConsolidatedAmount: '300',
                    QuizFlag: 'N',
                    QuizConsolidatedAmount: '800'
                  }, {
                    Value: 'RE105',
                    ArticleReadFlag: '',
                    ArticleConsolidatedAmount: '200',
                    QuizFlag: '',
                    QuizConsolidatedAmount: '500'
                  }]
                }
              };
              lastIndex = url[url.length - 1];
              return _context.abrupt("return", data[lastIndex]);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function fetchApiData(_x) {
        return _fetchApiData.apply(this, arguments);
      }
      return fetchApiData;
    }()
  }, {
    key: "getStartedModal",
    value: function getStartedModal() {
      var that = this;
      var queryString = (0, _scCommonMethods.getQueryParam)((0, _scCommonMethods.getPageContext)().queryString, 'param');
      if (queryString === 'yes') {
        that.ScTuluCamp.querySelector('.sc-get-started-yes').classList.add('visible');
      } else {
        that.ScTuluCamp.querySelector('.sc-get-started-no').classList.add('visible');
      }
      document.querySelector('html').classList.add('sc-modal__no-scroll');
      var buttons = that.ScTuluCamp.querySelectorAll('.sc-get-started .sc-tulu-camp-modal__footer .sc-btn--medium');
      if (buttons.length) {
        buttons.forEach(function (button) {
          button.addEventListener('click', function (event) {
            if (!event.target.closest('button').classList.contains('sc-tulu-camp-modal__footer-btn--disabled')) {
              event.target.closest('.sc-get-started').classList.remove('visible');
              document.querySelector('html').classList.remove('sc-modal__no-scroll');
              that.loadConsolidateApi();
              (0, _scCommonMethods.handleAnalyticsCTA)(event, event.target.closest('button'), {
                ctaType: 'button',
                ctaPosition: 'bottom',
                xLinkRegion: 'bottom'
              });
            }
          });
        });
      }
      var checkboxes = that.ScTuluCamp.querySelectorAll(".sc-get-started input[type='checkbox']");
      if (checkboxes.length) {
        checkboxes.forEach(function (checkbox) {
          checkbox.addEventListener('change', function (event) {
            var button = event.target.closest('.sc-get-started').querySelector('.sc-tulu-camp-modal__footer .sc-btn--medium');
            if (event.target.checked) {
              button.classList.remove('sc-tulu-camp-modal__footer-btn--disabled');
            } else {
              button.classList.add('sc-tulu-camp-modal__footer-btn--disabled');
            }
          });
        });
      }
    }
  }, {
    key: "asiaMilesYesModal",
    value: function asiaMilesYesModal() {
      var startButton = document.getElementById('sc-get-started-btn');
      var tcModal = document.getElementById('sc-terms-and-condition');
      var cardMain = document.querySelectorAll('.sc-tulu-camp-product-card__main');
      var mainPage = document.querySelectorAll('.sc-tulu-camp-main');
      var backBtn = document.querySelector('.sc-tulu-camp-header__back');
      if (startButton && tcModal) {
        // scrollButton.addEventListener("click", (event) => {
        //   const closest = event.target.closest("button");
        //   if (
        //     closest &&
        //     !closest.classList.contains(
        //       "sc-tulu-camp-modal__footer-btn--disabled"
        //     )
        //   ) {
        //     event.preventDefault();
        //     tcModal.classList.remove("visible");
        //     document
        //       .querySelector(".sc-modal__no-scroll")
        //       ?.classList.remove("sc-modal__no-scroll");
        //   }
        // });

        cardMain.forEach(function (card) {
          card.addEventListener('click', function () {
            mainPage[0].classList.remove('active');
            mainPage[1].classList.add('active');
          });
        });
        backBtn.addEventListener('click', function (event) {
          mainPage[1].classList.remove('active');
          mainPage[0].classList.add('active');
          document.querySelector("[data-tab-btn-id='1']").classList.add('sc-tulu-camp-tab__head-button--active');
          document.querySelector("[data-tab-content='1']").classList.add('sc-tulu-camp-tab__content-item--active');
          var closestBtn = event.target.closest('button');
          if (closestBtn) {
            (0, _scCommonMethods.handleAnalyticsCTA)(event, closestBtn, {
              ctaType: 'button',
              ctaPosition: 'top',
              xLinkRegion: 'left'
            });
          }
        });
      }
    }
  }, {
    key: "handleMissionTracking",
    value: function () {
      var _handleMissionTracking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _that$ScTuluCamp,
          _this = this;
        var that, consolidates;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              that = this;
              consolidates = (_that$ScTuluCamp = that.ScTuluCamp) === null || _that$ScTuluCamp === void 0 ? void 0 : _that$ScTuluCamp.querySelectorAll('[data-tab-btn-id]');
              if (!(!consolidates || consolidates.length === 0)) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return");
            case 4:
              consolidates.forEach(function (el) {
                el.addEventListener('click', /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
                    var closest, attrName, attrs, _iterator, _step, attr, url, data;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          // Make the callback async
                          closest = event.target.closest('[data-attribute-name]');
                          if (!closest) {
                            _context2.next = 32;
                            break;
                          }
                          attrName = closest.getAttribute('data-attribute-name');
                          if (!attrName) {
                            _context2.next = 32;
                            break;
                          }
                          attrs = that.ScTuluCamp.querySelectorAll("[".concat(attrName, "]"));
                          if (!attrs.length) {
                            _context2.next = 32;
                            break;
                          }
                          // eslint-disable-next-line no-unused-vars
                          _iterator = _createForOfIteratorHelper(attrs);
                          _context2.prev = 7;
                          _iterator.s();
                        case 9:
                          if ((_step = _iterator.n()).done) {
                            _context2.next = 24;
                            break;
                          }
                          attr = _step.value;
                          _context2.prev = 11;
                          url = attr.getAttribute(attrName);
                          _context2.next = 15;
                          return _this.fetchApiData(url);
                        case 15:
                          data = _context2.sent;
                          that.generateHTMLCode(attr, data.Fields, attr.getAttribute('data-design-type'));

                          // Do something with the fetched data, if needed
                          _context2.next = 22;
                          break;
                        case 19:
                          _context2.prev = 19;
                          _context2.t0 = _context2["catch"](11);
                          console.error('Error fetching consolidate data:', _context2.t0);
                        case 22:
                          _context2.next = 9;
                          break;
                        case 24:
                          _context2.next = 29;
                          break;
                        case 26:
                          _context2.prev = 26;
                          _context2.t1 = _context2["catch"](7);
                          _iterator.e(_context2.t1);
                        case 29:
                          _context2.prev = 29;
                          _iterator.f();
                          return _context2.finish(29);
                        case 32:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2, null, [[7, 26, 29, 32], [11, 19]]);
                  }));
                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
              });
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function handleMissionTracking() {
        return _handleMissionTracking.apply(this, arguments);
      }
      return handleMissionTracking;
    }()
  }, {
    key: "generateHTMLCode",
    value: function generateHTMLCode(selector, data) {
      var _this2 = this;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'design-1';
      var that = this;
      if (!data.length) return '';
      if (type === 'design-1') {
        var htmlCode = '';
        data.forEach(function (item) {
          var classMap = {
            Y: 'sc-tulu-camp-timeline__box--active',
            N: 'sc-tulu-camp-timeline__box--progress'
          };
          var modalAttr = '';
          var activeClass = '';
          if (classMap[item.Value]) {
            activeClass = classMap[item.Value];
          } else {
            activeClass = 'sc-tulu-camp-timeline__box--disable';
            modalAttr = 'sc-account-opening-confirmation';
          }
          htmlCode += "<div class=\"sc-tulu-camp-timeline__box ".concat(activeClass, "\" data-modal-selector='").concat(modalAttr, "'>\n            <div class=\"sc-tulu-camp-timeline__box-wrapper\">\n              <div class=\"sc-tulu-camp-timeline__box-title\">\n                ").concat(_this2.textObj[item.Name] || item.Name, "\n              </div>\n              <div class=\"sc-tulu-camp-timeline__box-right\">\n                <div class=\"sc-tulu-camp-timeline__box-icon\">\n                  <svg width=\"13\" height=\"12\" viewBox=\"0 0 13 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z\" fill=\"#939393\"></path>\n                  </svg>\n                </div>\n                <p class=\"sc-tulu-camp-timeline__box-text\">\n                  1000\n                </p>\n              </div>\n            </div>\n          </div>");
        });
        selector.querySelector('.sc-tulu-camp-timeline__wrapper').innerHTML = htmlCode;
      } else if (type === 'design-2') {
        var rewardCount = 0;
        var rewardValue = 0;
        var rewardCountList = [];
        var progressSections = that.ScTuluCamp.querySelectorAll('.sc-tulu-camp-progress__inner');
        data.forEach(function (items, index) {
          var htmlCode = '';
          items.forEach(function (item) {
            if (item.Name === 'RewardCount') {
              rewardCount = Number(item.Value);
            } else if (item.Name === 'RewardValue') {
              rewardValue = Number(item.Value);
            }
          });
          var totalCount = Math.min(progressSections[index].querySelectorAll('li').length, rewardCount + 1);
          rewardCountList.push(rewardCount);
          for (var i = 1; i <= totalCount; i++) {
            var activeClass = '';
            if (rewardCount) {
              if (i <= rewardCount) {
                activeClass = ' sc-tulu-camp-progress__section--completed'; // completed section
              } else if (i > rewardCount) {
                activeClass = ' sc-tulu-camp-progress__section--in-progress'; // current section in progress
              }
            }

            htmlCode += "<li class=\"sc-tulu-camp-progress__section".concat(activeClass, "\">\n                        <div class=\"sc-tulu-camp-progress__content\">\n                          <div class=\"sc-tulu-camp-progress__circle\">\n                            <svg width=\"21\" height=\"16\" viewBox=\"0 0 21 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                              <path d=\"M18.8334 2L7.72224 13.6667L2.16675 7.83333\" stroke=\"#0C3A66\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                            </svg>\n                          </div>\n                          <div class=\"sc-tulu-camp-progress__number\">\n                            <svg width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                              <path d=\"M6.5 0.5L7.89583 5.10417L12.5 6.5L7.89583 7.89583L6.5 12.5L5.10417 7.89583L0.5 6.5L5.10417 5.10417L6.5 0.5Z\" fill=\"#3BBD77\"></path>\n                            </svg>\n                            <span>").concat(rewardValue, "</span>\n                          </div>\n                        </div>\n                        <div class=\"sc-tulu-camp-progress__line\"></div>\n                      </li>");
          }
          for (var _i = 0; _i < rewardCount + 1; _i++) {
            if (progressSections[index].firstElementChild) {
              progressSections[index].firstElementChild.remove();
            }
          }
          progressSections[index].insertAdjacentHTML('afterbegin', htmlCode);
        });

        //Update Finish all tradings
        var updatedProgressSections = that.ScTuluCamp.querySelectorAll('.sc-tulu-camp-progress__inner');

        // Get the last element safely
        var lastElement = updatedProgressSections.length ? updatedProgressSections[updatedProgressSections.length - 1] : null;
        if (lastElement) {
          var lastElementList = lastElement.querySelectorAll('li.sc-tulu-camp-progress__section');
          rewardCountList.forEach(function (value, index) {
            var _updatedProgressSecti;
            var completedSections = ((_updatedProgressSecti = updatedProgressSections[index]) === null || _updatedProgressSecti === void 0 ? void 0 : _updatedProgressSecti.querySelectorAll('li.sc-tulu-camp-progress__section').length) || 0;
            if (lastElementList[index]) {
              lastElementList[index].classList.toggle('sc-tulu-camp-progress__section--completed', value === completedSections);
            }
          });
        }
      } else if (type === 'design-3') {
        var _htmlCode = '';
        data.forEach(function (item) {
          var classMap = {
            Y: ' sc-tulu-camp-timeline__box--active',
            N: ' sc-tulu-camp-timeline__box--progress'
          };
          var activeClass = '';
          if (classMap[item.ArticleReadFlag]) {
            activeClass = classMap[item.ArticleReadFlag];
          } else {
            activeClass = '';
          }
          var progressClass = '';
          if (classMap[item.QuizFlag]) {
            progressClass = classMap[item.QuizFlag];
          } else {
            progressClass = '';
          }
          var modalAttr = '';
          if (item.QuizFlag === 'Y') {
            modalAttr = 'sc-questionnaire';
          }
          _htmlCode += "<div class=\"sc-tulu-camp-wrapper-full__column\"\n            data-level-up-api=\"http://localhost/jQuery-migration/tulu/json/levelup/levelup.json\" data-design-type=\"design-3\">\n            <div class=\"sc-tulu-camp-timeline\">\n              <div class=\"sc-tulu-camp-timeline__wrapper\">\n                <div class=\"sc-tulu-camp-timeline__box".concat(activeClass, "\">\n                  <div class=\"sc-tulu-camp-timeline__box-wrapper\">\n                    <div class=\"sc-tulu-camp-timeline__box-title\">\n                      Read article\n                    </div>\n                    <div class=\"sc-tulu-camp-timeline__box-right\">\n                      <div class=\"sc-tulu-camp-timeline__box-icon\">\n                        <svg width=\"13\" height=\"12\" viewBox=\"0 0 13 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                          <path\n                            d=\"M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z\"\n                            fill=\"#939393\"></path>\n                        </svg>\n                      </div>\n                      <p class=\"sc-tulu-camp-timeline__box-text\">\n                        ").concat(item.ArticleConsolidatedAmount, "\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"sc-tulu-camp-timeline__cvp\">\n                    <div class=\"sc-tulu-camp-timeline__cvp-image\">\n                      <img src=\"https://av.sc.com/sg/content/images/sg-crafting-a-balanced-portfolio-pintile.jpg\"\n                        alt=\"Article Image\">\n                    </div>\n                    <div class=\"sc-tulu-camp-timeline__cvp-item sc-rte\">\n                      <a href=\"https://retail.sc.com/scmobile/hk?ngroute=investment.wealth-needs.detail&amp;article=").concat(item.Value, "\" class=\"sc-tulu-camp-timeline__cvp-title\" title=\"").concat(item.Value, "\" target=\"_blank\">\n                        ").concat(item.Value, "\n                      </a>\n                      <p class=\"sc-tulu-camp-timeline__cvp-text\">\n                        The Beginner\u2019s Guide to REITs: What They Are\n                        and How to Invest\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"sc-tulu-camp-timeline__box").concat(progressClass, "\" data-modal-selector=\"").concat(modalAttr, "\">\n                  <div class=\"sc-tulu-camp-timeline__box-wrapper\">\n                    <div class=\"sc-tulu-camp-timeline__box-title\">\n                      Test your knowledge on the article\n                    </div>\n                    <div class=\"sc-tulu-camp-timeline__box-right\">\n                      <div class=\"sc-tulu-camp-timeline__box-icon\">\n                        <svg width=\"13\" height=\"12\" viewBox=\"0 0 13 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                          <path\n                            d=\"M6.5 0L7.89583 4.60417L12.5 6L7.89583 7.39583L6.5 12L5.10417 7.39583L0.5 6L5.10417 4.60417L6.5 0Z\"\n                            fill=\"#939393\"></path>\n                        </svg>\n                      </div>\n                      <p class=\"sc-tulu-camp-timeline__box-text\">\n                        ").concat(item.QuizConsolidatedAmount, "\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>");
        });
        selector.innerHTML = _htmlCode;
      }
    }
  }, {
    key: "loadConsolidateApi",
    value: function () {
      var _loadConsolidateApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _that$ScTuluCamp2, _that$ScTuluCamp3, _that$ScTuluCamp4;
        var that, consolidates, totalMiles, totalMilesAccumulated, _iterator2, _step2, el, _data$Fields, _data$Fields$, data, value, accumulated, accumulatedValue, childClass, milesSelector, totalAccumulated;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              that = this;
              consolidates = (_that$ScTuluCamp2 = that.ScTuluCamp) === null || _that$ScTuluCamp2 === void 0 ? void 0 : _that$ScTuluCamp2.querySelectorAll('.sc-tulu-camp-product-card__main[data-consolidate]');
              if (!(!consolidates || consolidates.length === 0)) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return");
            case 4:
              // Exit if no elements found
              totalMiles = 0;
              totalMilesAccumulated = 0; // eslint-disable-next-line no-unused-vars
              _iterator2 = _createForOfIteratorHelper(consolidates);
              _context4.prev = 7;
              _iterator2.s();
            case 9:
              if ((_step2 = _iterator2.n()).done) {
                _context4.next = 30;
                break;
              }
              el = _step2.value;
              _context4.prev = 11;
              _context4.next = 14;
              return this.fetchApiData(el.getAttribute('data-consolidate'));
            case 14:
              data = _context4.sent;
              value = Number((_data$Fields = data.Fields) === null || _data$Fields === void 0 ? void 0 : (_data$Fields$ = _data$Fields[0]) === null || _data$Fields$ === void 0 ? void 0 : _data$Fields$.Value) || 0;
              totalMiles += value;
              value = (0, _scCommonMethods.convertNumbers)(that.ScTuluCamp, value);
              accumulated = el.querySelector('.sc-tulu-camp-product-card__progress-total strong');
              if (accumulated) {
                accumulatedValue = accumulated.innerText.trim().replace(/[^0-9.]/g, '');
                accumulatedValue = accumulatedValue ? Number(accumulatedValue) : 0; // Ensure numeric conversion
                totalMilesAccumulated += accumulatedValue;
                accumulated.innerText = (0, _scCommonMethods.convertNumbers)(that.ScTuluCamp, accumulatedValue.toString());
              }

              // Update progress value in the current element
              el.querySelector('.sc-tulu-camp-product-card__progress-value').innerText = value;

              // Find the child class and update its progress value
              childClass = that.ScTuluCamp.querySelector('.' + el.getAttribute('data-child-class'));
              if (childClass) {
                childClass.querySelector('.sc-tulu-camp-product-card__progress-value').innerText = value;
              }
              _context4.next = 28;
              break;
            case 25:
              _context4.prev = 25;
              _context4.t0 = _context4["catch"](11);
              console.error('Error fetching consolidate data:', _context4.t0);
            case 28:
              _context4.next = 9;
              break;
            case 30:
              _context4.next = 35;
              break;
            case 32:
              _context4.prev = 32;
              _context4.t1 = _context4["catch"](7);
              _iterator2.e(_context4.t1);
            case 35:
              _context4.prev = 35;
              _iterator2.f();
              return _context4.finish(35);
            case 38:
              // Update total miles display
              milesSelector = (_that$ScTuluCamp3 = that.ScTuluCamp) === null || _that$ScTuluCamp3 === void 0 ? void 0 : _that$ScTuluCamp3.querySelector('.sc-cvp__middle strong');
              if (milesSelector) {
                milesSelector.innerText = (0, _scCommonMethods.convertNumbers)(that.ScTuluCamp, totalMiles);
              }
              totalAccumulated = (_that$ScTuluCamp4 = that.ScTuluCamp) === null || _that$ScTuluCamp4 === void 0 ? void 0 : _that$ScTuluCamp4.querySelector('.sc-tulu-camp-milescard__desc strong');
              if (totalAccumulated) {
                totalAccumulated.innerText = (0, _scCommonMethods.convertNumbers)(that.ScTuluCamp, totalMilesAccumulated);
              }
            case 42:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[7, 32, 35, 38], [11, 25]]);
      }));
      function loadConsolidateApi() {
        return _loadConsolidateApi.apply(this, arguments);
      }
      return loadConsolidateApi;
    }()
  }, {
    key: "objectList",
    value: function objectList() {
      this.textObj = {
        OpenAccount: 'Open An Account',
        FirstTrade: 'Make your first trade',
        CompletionBonus: 'Completion Bonus'
      };
    }
  }, {
    key: "handleTabs",
    value: function handleTabs(targetId) {
      var that = this;
      var targetContent = that.ScTuluCamp.querySelector(".sc-tulu-camp-tab__content-item[data-tab-content=\"".concat(targetId, "\"]"));
      if (!targetContent) return;

      // Remove active class from all tabs and content items in this tab group
      that.tabs.forEach(function (t) {
        return t.classList.remove('sc-tulu-camp-tab__head-button--active');
      });
      that.contents.forEach(function (c) {
        return c.classList.remove('sc-tulu-camp-tab__content-item--active');
      });

      // Add active class to clicked tab and corresponding content
      var activeTabs = that.ScTuluCamp.querySelectorAll("[data-tab-btn-id=\"".concat(targetId, "\"]"));
      activeTabs.forEach(function (activeTab) {
        if (!activeTab.classList.contains('sc-tooltip')) {
          activeTab.classList.add('sc-tulu-camp-tab__head-button--active');
        }
      });
      targetContent.classList.add('sc-tulu-camp-tab__content-item--active');
    }
  }, {
    key: "handleModal",
    value: function handleModal() {
      var that = this;
      //Open Modal
      that.ScTuluCamp.addEventListener('click', function (event) {
        var modal = event.target.closest('[data-modal-selector]');
        var articleAnchor = event.target.closest('a.sc-tulu-camp-timeline__cvp-title');
        if (modal) {
          var _ref2, _ref3;
          event.preventDefault();
          var selector = modal.getAttribute('data-modal-selector');
          if (selector) {
            var parentModal = event.target.closest('.sc-tulu-camp-modal');
            if (parentModal) {
              that.parentModalId = parentModal.getAttribute('id') || '';
              parentModal.classList.remove('visible');
            }
            var selectedModal = that.ScTuluCamp.querySelector(".".concat(selector));
            if (selectedModal) {
              selectedModal.classList.add('visible');
              document.querySelector('html').classList.add('sc-modal__no-scroll');

              //Activities for questionnaire
              if (selectedModal.closest('.sc-questionnaire')) {
                var feedbackShow = selectedModal.querySelector('.sc-tulu-camp-questionnaire__feedback--show');
                if (feedbackShow) {
                  feedbackShow.classList.remove('sc-tulu-camp-questionnaire__feedback--show');
                }

                //Unchecked all questionnaire radio button
                var questionnaireRadios = selectedModal.querySelectorAll('.sc-questionnaire input[type="radio"]');
                if (questionnaireRadios.length) {
                  questionnaireRadios.forEach(function (radio) {
                    radio.checked = false;
                  });
                }
                var btn = selectedModal.querySelector('.sc-tulu-camp-modal__footer-btn');
                if (btn) {
                  btn.classList.add('sc-tulu-camp-modal__footer-btn--disabled');
                  btn.innerText = btn.getAttribute('data-text-default');
                }
              }
            }
          }
          var ctaObj = {
            ctaType: 'button'
          };
          var anchorElement = event.target.closest('a');
          if (anchorElement) {
            var modalSelector = anchorElement.getAttribute('data-modal-selector');
            if (modalSelector === 'sc-guidance' || modalSelector === 'sc-help') {
              Object.assign(ctaObj, {
                ctaPosition: 'middle',
                xLinkRegion: 'middle'
              });
            } else if (modalSelector === 'sc-terms-and-condition') {
              Object.assign(ctaObj, {
                ctaPosition: 'bottom',
                xLinkRegion: 'bottom'
              });
            }
          }
          var buttonElement = event.target.closest('button');
          if (buttonElement) {
            var _modalSelector = buttonElement.getAttribute('data-modal-selector');
            if (_modalSelector === 'sc-help') {
              Object.assign(ctaObj, {
                ctaPosition: 'top',
                xLinkRegion: 'right'
              });
            }
          }

          //Next Task
          var nextTaskElement = event.target.closest('.sc-tulu-camp-product-card__bottom');
          if (nextTaskElement) {
            var title = (0, _scCommonMethods.trim)(nextTaskElement.closest('.sc-tulu-camp-product-card').querySelector('.sc-tulu-camp-product-card__title').innerText);
            Object.assign(ctaObj, {
              context: "".concat(title, " next task - ") + (0, _scCommonMethods.trim)(nextTaskElement.querySelector('.sc-tulu-camp-product-card__task-desc').innerText),
              ctaPosition: 'middle',
              xLinkRegion: 'middle'
            });
          }

          //Timeline boxes
          var timeLineElement = event.target.closest('.sc-tulu-camp-wrapper-full__column');
          if (timeLineElement) {
            var diversifyTitle = timeLineElement.querySelector('.sc-tulu-camp-wrapper-full__title');
            if (diversifyTitle && diversifyTitle.getAttribute('data-context')) {
              //diversify section
              var _title = (0, _scCommonMethods.trim)(diversifyTitle.getAttribute('data-context'));
              var content = (0, _scCommonMethods.trim)(timeLineElement.querySelector('.sc-tulu-camp-timeline__box-title').innerText);
              Object.assign(ctaObj, {
                context: "".concat(_title, " - ").concat(content),
                ctaPosition: 'middle',
                xLinkRegion: 'middle'
              });
            } else if (timeLineElement.querySelector('.sc-tulu-camp-timeline__box')) {
              //article section
              Object.assign(ctaObj, {
                context: "article test - " + (0, _scCommonMethods.trim)(timeLineElement.querySelector('.sc-tulu-camp-timeline__box-title').innerText),
                ctaPosition: 'middle',
                xLinkRegion: 'middle'
              });
            }
          }
          if ((_ref2 = (_ref3 = anchorElement !== null && anchorElement !== void 0 ? anchorElement : buttonElement) !== null && _ref3 !== void 0 ? _ref3 : nextTaskElement) !== null && _ref2 !== void 0 ? _ref2 : timeLineElement) {
            var _ref4, _ref5;
            (0, _scCommonMethods.handleAnalyticsCTA)(event, (_ref4 = (_ref5 = anchorElement !== null && anchorElement !== void 0 ? anchorElement : buttonElement) !== null && _ref5 !== void 0 ? _ref5 : nextTaskElement) !== null && _ref4 !== void 0 ? _ref4 : timeLineElement, ctaObj);
          }
        } else if (articleAnchor) {
          (0, _scCommonMethods.handleAnalyticsCTA)(event, '', {
            ctaType: 'button',
            context: 'article link - ' + (0, _scCommonMethods.trim)(articleAnchor.innerText),
            xLinkRegion: 'middle',
            ctaPosition: 'middle'
          });
        }
      });

      //Close Modal
      var modalCloses = that.ScTuluCamp.querySelectorAll('.sc-tulu-camp-modal__close');
      if (modalCloses.length) {
        modalCloses.forEach(function (modalClose) {
          modalClose.addEventListener('click', function (event) {
            if (!event.target.closest('.sc-get-started')) {
              event.target.closest('.sc-tulu-camp-modal').classList.remove('visible');
              if (that.parentModalId) {
                that.ScTuluCamp.querySelector(".".concat(that.parentModalId)).classList.add('visible');
                that.parentModalId = '';
              } else {
                document.querySelector('html').classList.remove('sc-modal__no-scroll');
              }
            }
            (0, _scCommonMethods.handleAnalyticsCTA)(event, event.target.closest('button'), {
              ctaType: 'button',
              xLinkRegion: 'left',
              ctaPosition: 'top'
            });
          });
        });
      }

      //handle Download Button
      var downloads = that.ScTuluCamp.querySelectorAll('.sc-tulu-camp-modal__download');
      downloads.forEach(function (download) {
        download.addEventListener('click', function (event) {
          (0, _scCommonMethods.handleAnalyticsCTA)(event, event.target.closest('button'), {
            context: 'download',
            ctaType: 'button',
            xLinkRegion: 'right',
            ctaPosition: 'top'
          });
        });
      });
    }
  }, {
    key: "handleQuestionnaire",
    value: function handleQuestionnaire() {
      var that = this;
      //questionnaire radio
      var questionnaireRadios = that.ScTuluCamp.querySelectorAll('.sc-questionnaire input[type="radio"]');
      if (questionnaireRadios.length) {
        questionnaireRadios.forEach(function (questionnaireRadio) {
          questionnaireRadio.addEventListener('change', function (event) {
            event.target.closest('.sc-tulu-camp-questionnaire').querySelector('.sc-tulu-camp-modal__footer-btn').classList.remove('sc-tulu-camp-modal__footer-btn--disabled');
          });
        });
      }
      var questionnaireLabels = that.ScTuluCamp.querySelectorAll('.sc-questionnaire .sc-radio-box__input-label');
      if (questionnaireLabels.length) {
        questionnaireLabels.forEach(function (questionnaireLabel) {
          questionnaireLabel.addEventListener('click', function (event) {
            event.target.closest('.sc-tulu-camp-questionnaire').querySelector('.sc-tulu-camp-modal__footer-btn').classList.remove('sc-tulu-camp-modal__footer-btn--disabled');
          });
        });
      }
      var continueBtn = that.ScTuluCamp.querySelector('.sc-questionnaire .sc-tulu-camp-modal__footer-btn');
      if (continueBtn) {
        continueBtn.addEventListener('click', function (event) {
          var closest = event.target.closest('.sc-tulu-camp-modal__footer-btn');
          if (!closest.classList.contains('sc-tulu-camp-modal__footer-btn--disabled')) {
            closest.innerText = closest.getAttribute('data-text-continue');
            var selector = that.ScTuluCamp.querySelector('.sc-tulu-camp-questionnaire__feedback--success');
            var context;
            if (selector.className.includes('sc-tulu-camp-questionnaire__feedback--show')) {
              context = 'continue';
              event.target.closest('.sc-tulu-camp-modal').classList.remove('visible');
              document.querySelector('html').classList.remove('sc-modal__no-scroll');
            } else {
              selector.classList.add('sc-tulu-camp-questionnaire__feedback--show');
              context = 'submit - correct';
            }
            (0, _scCommonMethods.handleAnalyticsCTA)(event, closest, {
              ctaType: 'button',
              context: context,
              xLinkRegion: 'bottom',
              ctaPosition: 'bottom'
            });
          }
        });
      }
    }
  }, {
    key: "handleFaqAnalytics",
    value: function handleFaqAnalytics() {
      var that = this;
      var labels = that.ScTuluCamp.querySelectorAll('.sc-faq__accordion-label');
      labels.forEach(function (label) {
        label.addEventListener('click', function (event) {
          var closest = event.target.closest('label');
          (0, _scCommonMethods.handleAnalyticsCTA)(event, closest, {
            ctaType: 'button',
            context: 'faq - ' + (0, _scCommonMethods.trim)(closest.innerText),
            xLinkRegion: 'middle',
            ctaPosition: 'middle'
          });
        });
      });
    }
  }]);
  return ScTuluCampaign;
}();
var instance = new ScTuluCampaign();
instance.init();
var _default = instance;
exports.default = _default;

},{"../../../js/sc-common-methods":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInputNoSlider = exports.validateInput = exports.vLookup = exports.urlBreakdown = exports.trim = exports.triggerPopupViewedTagging = exports.stepFieldErrorStatus = exports.smoothScroll = exports.sliderFieldErrorStatus = exports.sliderErrorStatus = exports.shouldCarryTrackingParams = exports.setLocalStorageWithExpiry = exports.pmt = exports.parseUrl = exports.matchHeight = exports.isMobile = exports.isInternalDomain = exports.isForm = exports.isEmpty = exports.initializeSlider = exports.handleProductsObj = exports.handleProductCalculatorSubmit = exports.handlePersistentBarScroll = exports.handleCalculatorAnalytics = exports.handleAnalyticsCTA = exports.getUrlParamName = exports.getQueryParam = exports.getPosition = exports.getPageUrl = exports.getPageContext = exports.getOuterHeight = exports.getLocalStorageWithExpiry = exports.getIntExtCampaignInfo = exports.getHorizontalPosition = exports.getDeviceDetails = exports.getCurrentEnvironment = exports.getCurrentCountry = exports.getCtaType = exports.getCtaContext = exports.getCookie = exports.getCampaignInfoV2 = exports.getCampaignInfoV1 = exports.getCampaignInfo = exports.getAssetDomain = exports.getAccordionHeading = exports.formatNumbersWithTwoDecimalPlaces = exports.extractQueryParams = exports.extendedPMT = exports.extend = exports.detectOS = exports.debounceEvents = exports.daysInThisMonth = exports.convertQueryStringToJsonObject = exports.convertNumbers = exports.convertMonthsToYearsAndMonths = exports.calculateYearMonth = exports.calculateRanges = exports.calculatePresentValue = exports.calculatePMT = exports.calculateNPER = exports.calculateIRR = exports.calculateFutureValue = exports.calculateEIR = exports.calculateDerivative = exports.calcElementLocation = exports.bundleParam = exports.browserDetect = exports.applyCookieParams = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-useless-escape */
/* global digitalData, scAnalyticsDataArray, _satellite, noUiSlider */
window.scCommonConstants = {
  DEVELOPMENT: 'development',
  PREVIEW: 'preview',
  PRODUCTION: 'production',
  STAGING: 'staging',
  PERSONAL: 'personal',
  PRIORITY: 'priority',
  BUSINESS: 'business',
  CORPORATE: 'corporate',
  PRIVATE: 'private',
  COMMERCIAL: 'commercial',
  LANGUAGES: ['en', 'zh'],
  ALLOWABLE_QUERYSTRING: {
    scb: ['subChanCode', 'camp_id', 'pid', 'promoCode', 'promo', 'referId', 'instance', 'state', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'GiPrm', 'productName', 'truspleBuyerId', 'CTID'],
    others: ['gclid', 'gclsrc'],
    'partner-urls': ['https://www.royalsundaram.in/.*', 'https://www.maxbupa.com/.*', 'https://www.bharti-axagi.co.in/.*', 'https://www.iciciprulife.com/.*', 'https://www.einsure.allianz.com.sg/.*', 'https://www.allianz-travel-insure.com.sg/.*', 'https://www.lin.ee/.*', 'https://www.piapp.com/.*']
  },
  URL_OBJ: ['cmsdev', 'preview', 'standardchartered', 'sc', 'com', 'av', 'assets', 'global', 'development', 'staging', 'digital', 'https', 'cmsstage', 'cms', 'dev', 'zoo']
};

/**
 * Breaks down a given URL into its components.
 * @param {string} currentURL - The URL to be broken down.
 * @returns {Object} An object representing the components of the URL.
 */
var urlBreakdown = function urlBreakdown(currentURL) {
  var parser = parseUrl(currentURL);
  var queryString = parser.search,
    parts = parser.pathname.split('/'),
    hash = parser.hash,
    countryMapping = {
      sgbeta: 'sg'
    };
  if (queryString && queryString.indexOf('?') === 0) {
    queryString = queryString.slice(1);
  }
  var pageURL = {
    domain: null,
    country: null,
    language: null,
    category: null,
    segment: 'personal',
    subcategory: null,
    slug: null,
    queryString: queryString,
    hash: null,
    pathname: document.location.pathname
  };
  pageURL.domain = parser.hostname;
  pageURL.country = parts[1];
  pageURL.language = 'en';
  if (pageURL.country === 'cn' || pageURL.country === 'tw') {
    pageURL.language = 'zh';
  }
  if (parts[2]) {
    pageURL.category = parts[2];
    if (parts[2].length === 2) {
      pageURL.language = parts[2];
      pageURL.category = parts[3];
    }
  }
  if (parts[parts.length - 1] !== '' && parts[parts.length - 1] !== 'index.html') {
    pageURL.slug = parts[parts.length - 1];
  } else {
    pageURL.slug = parts[parts.length - 2];
  }
  if (pageURL.slug) {
    if (pageURL.slug.indexOf('.') !== -1) {
      var slugger = pageURL.slug.split('.');
      pageURL.name = slugger[0];
      pageURL.extension = slugger[1];
    } else {
      pageURL.name = pageURL.slug;
      pageURL.extension = '';
    }
  } else {
    pageURL.slug = '';
    pageURL.name = '';
    pageURL.extension = '';
  }
  if (parts.length <= 4 && window.scCommonConstants.LANGUAGES.indexOf(pageURL.slug) !== -1) {
    pageURL.slug = pageURL.country;
  }
  if (hash) {
    pageURL.hash = hash;
  }
  if (parts.length >= 5) {
    pageURL.subcategory = parts[3];
  }
  if (pageURL.pathname && pageURL.pathname.indexOf('priority') !== -1) {
    pageURL.segment = 'priority';
  } else if (pageURL.pathname && pageURL.pathname.indexOf('business') !== -1) {
    pageURL.segment = 'business';
  }
  if (countryMapping[pageURL.country]) {
    pageURL.country = countryMapping[pageURL.country];
  }
  return pageURL;
};

/**
 * Parses a URL and returns its components.
 * @param {string} url - The URL to parse.
 * @returns {Object} An object representing the parsed URL components.
 */
exports.urlBreakdown = urlBreakdown;
var parseUrl = function parseUrl(url) {
  var parser = document.createElement('a');
  parser.href = url;
  if (parser.protocol != 'mailto:') {
    var link_path = '/' === parser.pathname.charAt(0) ? parser.pathname : '/' + parser.pathname;
  } else {
    link_path = parser.pathname;
  }
  return {
    href: parser.href,
    protocal: parser.protocol,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.hash.indexOf('?') !== -1 ? link_path + parser.hash : link_path,
    rawpath: link_path,
    query: parser.query || parser.search,
    search: parser.query || parser.search,
    hash: parser.hash,
    host: parser.host
  };
};

/**
 * Retrieves the page context from meta tags and URL breakdown.
 * @returns {Object} An object representing the page context.
 */
exports.parseUrl = parseUrl;
var getPageContext = function getPageContext() {
  var $title = document.title;
  var $country = document.querySelector('meta[name="sc:country"]');
  var $language = document.querySelector('meta[name="sc:language"]');
  var $segment = document.querySelector('meta[name="sc:segment"]');
  var $category = document.querySelector('meta[name="sc:categories"]');
  var $subcategory = document.querySelector('meta[name="sc:subcategories"]');
  var $slug = document.querySelector('meta[name="sc:page-slug"]');
  var pageContext = {
    title: null,
    country: null,
    language: null,
    segment: null,
    category: null,
    subcategory: null,
    slug: null
  };
  if ($title) {
    pageContext.title = $title;
  }
  if ($country) {
    pageContext.country = $country.getAttribute('content');
  }
  if ($language) {
    pageContext.language = $language.getAttribute('content');
  }
  if (!pageContext.language) {
    var docLang = document.documentElement.lang;
    if (docLang) {
      // Document language can be in languageCode-countryCode format, e.g en-US.
      // In front-end context, we don't need countryCode part
      pageContext.language = docLang.split('-')[0].toLowerCase();
    }
  }
  if ($segment) {
    pageContext.segment = $segment.getAttribute('content');
  }
  if ($category) {
    pageContext.category = $category.getAttribute('content');
  }
  if ($subcategory) {
    pageContext.subcategory = $subcategory.getAttribute('content');
  }
  if ($slug) {
    pageContext.slug = $slug.getAttribute('content');
  }
  return extend(urlBreakdown(window.location.href), pageContext);
};

/**
 * Extends an object with properties from another object.
 * @param {Object} obj - The object to extend.
 * @param {Object} src - The object providing the new properties.
 * @returns {Object} The extended object.
 */
exports.getPageContext = getPageContext;
var extend = function extend(obj, src) {
  Object.keys(src).forEach(function (key) {
    obj[key] = src[key];
  });
  return obj;
};

/**
 * Gets the current country from the page context or URL.
 * @returns {string} The current country.
 */
exports.extend = extend;
var getCurrentCountry = function getCurrentCountry() {
  var pageContext = getPageContext();
  if (pageContext.country) {
    return pageContext.country;
  }
  return urlBreakdown(window.location.href).country;
};

/**
 * Trims whitespace from a given text.
 * @param {string} text - The text to trim.
 * @returns {string} The trimmed text.
 */
exports.getCurrentCountry = getCurrentCountry;
var trim = function trim(text) {
  if (text) {
    return text.trim();
  }
  return text;
};

/**
 * will moved this function to ExternalLinksDisclaimer once migration complete
 *
 * @param {String} domain domain name
 * @example
 * isInternalDomain('www.sc.com')
 */
exports.trim = trim;
var isInternalDomain = function isInternalDomain(domain, ctaUrl) {
  if (isForm(ctaUrl)) {
    return true;
  }
  // List of all regular expression for internal domains
  var internal = [/^myinfosg.api.gov.sg$/, /^sc.com$/, /^.*\.sc\.com$/, /^standardchartered.com$/, /^.*\.standardchartered\.com/, /^.*\.standardchartered\.com\..*/, /^standardchartered\.co\..*$/, /^.*\.standardchartered\.co\..*$/, /www.wowmanhattan.com.sg/, /saml.singpass.gov.sg/, /scb-sg.onelink.me/, /#null/];
  for (var i = 0; i < internal.length; i++) {
    if (internal[i].test(domain)) {
      return true;
    }
  }
  var partnerUrls = window.scCommonConstants.ALLOWABLE_QUERYSTRING['partner-urls'];
  if (!Array.isArray(partnerUrls) || partnerUrls.length === 0) {
    return false; // No URLs to check
  }

  var partnerStatus = partnerUrls.some(function (url) {
    return new RegExp("^".concat(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), 'i').test(ctaUrl);
  });
  if (!partnerStatus && !document.querySelector('[data-modal-id="external-links-disclaimer"]')) {
    //No disclaimer code added, so directly go to the clicked URL
    return true;
  }
  return partnerStatus;
};

/**
 * capture horizontal click position and return it's left or right
 * @param {Number} xClick horizontal click position
 * @return {String} return it's left or right
 * @example
 * getHorizontalPosition(1000)
 */
exports.isInternalDomain = isInternalDomain;
var getHorizontalPosition = function getHorizontalPosition(xClick) {
  if (!xClick) return 'left';
  var maxWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
  var mktCountryCode = getCurrentCountry();
  if (mktCountryCode !== 'hk' && mktCountryCode !== 'sg') {
    var median = maxWidth / 2;
    return xClick < median ? 'left' : 'right';
  }

  //Sorted array of positions
  var positions = [{
    name: 'left',
    depth: 30
  }, {
    name: mktCountryCode === 'sg' ? 'center' : 'middle',
    depth: 70
  }, {
    name: 'right',
    depth: 100
  }];
  var scrollDepth = xClick * 100 / maxWidth;
  for (var i = 0; i < positions.length; i++) {
    if (scrollDepth < positions[i].depth) {
      return positions[i].name;
    }
  }
};

/**
 * return cookie value
 * @param {String} key is the name of the cookie
 * @return {String} return selected cookie value
 * @example
 * getCookie('subChanCode')
 */
exports.getHorizontalPosition = getHorizontalPosition;
var getCookie = function getCookie(key) {
  var name = key + '=';
  var decodedCookie;
  try {
    //The decodeURIComponent function can throw an error if the cookie value contains invalid encoding, which might happen if special characters are improperly encoded. To fix this, you can add a try-catch block around decodeURIComponent to handle any decoding errors gracefully.
    decodedCookie = decodeURIComponent(document.cookie);
  } catch (e) {
    return null;
  }
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
};

/**
 * Method to get localstorage value.
 * @param {string} key
 */
exports.getCookie = getCookie;
var getLocalStorageWithExpiry = function getLocalStorageWithExpiry(key) {
  var itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  var item = JSON.parse(itemStr);
  var now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

/**
 * calculate vertical position
 * @param {Event} target event of the selector
 * @return {String} return top, middle, bottom, persistent-bar, lightbox etc.
 * @example
 * calcElementLocation(event)
 */

// CTA Postion
exports.getLocalStorageWithExpiry = getLocalStorageWithExpiry;
var calcElementLocation = function calcElementLocation(target) {
  var _ref, _target$closest, _ref2, _ref3, _ref4, _ref5, _ref6, _target$closest2;
  if (!target) return '';
  if (target.closest('.c-modal') || target.closest('.sc-modal')) {
    return 'middle';
  }
  if (typeof target.className === 'string' && typeof target.className.includes !== 'undefined' && (target.className.indexOf('sc-card-comparator__compare-btn') !== -1 || target.className.indexOf('sc-card-comparator__card-remove') !== -1)) {
    return 'bottom';
  }
  var closestTarget = (_ref = (_target$closest = target.closest('a')) !== null && _target$closest !== void 0 ? _target$closest : target.closest('label')) !== null && _ref !== void 0 ? _ref : target;
  var fromTop = parseInt(getPosition(closestTarget), 10) * 100;
  if ((_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_target$closest2 = target.closest('.sc-persistent-bar')) !== null && _target$closest2 !== void 0 ? _target$closest2 : target.closest('.m-persistent-bootom-bar')) !== null && _ref6 !== void 0 ? _ref6 : target.closest('.sc-wealthsaver-calc__sticky')) !== null && _ref5 !== void 0 ? _ref5 : target.closest('.sc-ft-calc__sticky')) !== null && _ref4 !== void 0 ? _ref4 : target.closest('.sc-miles-calc__total-result--sticky')) !== null && _ref3 !== void 0 ? _ref3 : target.closest('.sc-bundled-products__sticky-outer')) !== null && _ref2 !== void 0 ? _ref2 : target.closest('.sc-bundled-products-sticky__sticky')) {
    //Persistent bar in the bottom
    fromTop = parseInt(window.scrollY + window.innerHeight, 10) * 100;
  } else if (target.closest('.m-persistent-bar')) {
    //Persistent bar in the top
    fromTop = parseInt(window.scrollY + 70, 10) * 100;
  }

  //Sorted array of positions
  var positions = [{
    name: 'top',
    depth: 30
  }, {
    name: 'middle',
    depth: 70
  }, {
    name: 'bottom',
    depth: 100
  }];
  var maxHeight = Math.max(document.body.clientHeight, window.outerHeight);
  if (maxHeight <= 0) {
    return '';
  }
  var scrollDepth = fromTop / maxHeight;
  for (var i = 0; i < positions.length; i++) {
    if (scrollDepth < positions[i].depth) {
      return positions[i].name;
    }
  }
  if (typeof target.parentNode.parentNode.className === 'string' && typeof target.parentNode.parentNode.className.includes !== 'undefined' && target.parentNode.parentNode.className.indexOf('sc-hdr__search') !== -1) {
    return 'top';
  }
  return 'bottom';
};
exports.calcElementLocation = calcElementLocation;
var getCurrentEnvironment = function getCurrentEnvironment() {
  var urlObj = window.scCommonConstants.URL_OBJ;
  var domain = getPageUrl().domain;
  if (domain.indexOf(urlObj[3] + '.' + urlObj[4]) !== -1) {
    if (domain === urlObj[0] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return window.scCommonConstants.DEVELOPMENT;
    } else if (domain === urlObj[12] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return window.scCommonConstants.STAGING;
    } else if (domain === urlObj[13] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return window.scCommonConstants.PREVIEW;
    } else {
      return window.scCommonConstants.PRODUCTION;
    }
  } else if (domain === urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4]) {
    if (getPageUrl().pathname.match('^/staging')) {
      return window.scCommonConstants.STAGING;
    } else if (getPageUrl().pathname.match('^/development')) {
      return window.scCommonConstants.DEVELOPMENT;
    } else {
      return window.scCommonConstants.PREVIEW;
    }
  } else {
    return window.scCommonConstants.DEVELOPMENT;
  }
};
exports.getCurrentEnvironment = getCurrentEnvironment;
var getPageUrl = function getPageUrl() {
  return getPageContext();
};

/**
 * get internal and external campaign info
 * @example
 * getIntExtCampaignInfo('in')
 */
exports.getPageUrl = getPageUrl;
var getIntExtCampaignInfo = function getIntExtCampaignInfo(country) {
  var allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  if (country == 'in' || country == 'pk' || country == 'hk') {
    //Special whitelisted parameters
    allowableQueryString = ['aggregator_code', 'aggregator_type', 'aggregator_instance', 'intcid', 'subChanCode', 'referId', 'instance', 'camp_id', 'pid', 'promoCode', 'promo', 'state'];
  }
  var externalCampaignParams = ['cid']; //external campaign parameter(s) for HK
  var total = allowableQueryString.length;
  var intCampaignName = '';
  var intCampaignValue = '';
  var queryStringList = [];
  var queryString = window.location.search;
  var extCampaignName = '';
  var extCampaignValue = '';
  if (queryString) {
    queryString = queryString.substring(1);
    if (queryString) {
      queryStringList = queryString.split('&');
    }
  }
  //Take it from local storage
  var foundParam = false;
  for (var i = 0; i < total; i++) {
    var cookieValue = getCookie(allowableQueryString[i]);
    var localStorageValue = getLocalStorageWithExpiry(allowableQueryString[i]);
    if (cookieValue || localStorageValue) {
      foundParam = true;
      if (intCampaignName && intCampaignValue) {
        intCampaignName += ':';
        intCampaignValue += ':';
      }
      intCampaignName += allowableQueryString[i];
      intCampaignValue += cookieValue || localStorageValue;
    } else {
      if (intCampaignName) {
        intCampaignName += ':';
        intCampaignValue += ':';
      }
      intCampaignName += allowableQueryString[i];
      if (queryStringList.length) {
        var found = false;
        var result = void 0;
        for (var j = 0; j < queryStringList.length; j++) {
          result = queryStringList[j].split('=');
          if (result[0].toLowerCase() == allowableQueryString[i]) {
            found = true;
            break;
          }
        }
        if (found) {
          foundParam = true;
          intCampaignValue += result[1];
        } else {
          intCampaignValue += 'na';
        }
      } else {
        intCampaignValue += 'na';
      }
    }
  }

  //External campaign
  if (queryStringList.length) {
    for (var _i = 0; _i < queryStringList.length; _i++) {
      var _result = queryStringList[_i].split('=');
      if (allowableQueryString.indexOf(_result[0]) === -1) {
        //exclude whitelisted parameters from external campaign
        if (country !== 'hk' || externalCampaignParams.indexOf(_result[0]) !== -1) {
          if (extCampaignValue != '') {
            extCampaignName += ':';
            extCampaignValue += ':';
          }
          extCampaignName += _result[0];
          extCampaignValue += _result[1];
        }
      }
    }
  }
  if (!foundParam && (country == 'in' || country == 'hk')) {
    intCampaignName = '';
    intCampaignValue = '';
  } else {
    intCampaignName = intCampaignName.toLowerCase();
    intCampaignValue = intCampaignValue.toLowerCase();
  }
  if (!extCampaignName) {
    extCampaignName = extCampaignName.toLowerCase();
    extCampaignValue = extCampaignValue.toLowerCase();
  }
  return {
    intName: intCampaignName,
    intVal: intCampaignValue,
    extName: extCampaignName,
    extVal: extCampaignValue
  };
};

/**
 * return absolute position of selected div in px
 * @param {String} element class elements name as an object
 * @return {Number} return horizontal position in px
 * @example
 * getPosition('.selector')
 */
exports.getIntExtCampaignInfo = getIntExtCampaignInfo;
var getPosition = function getPosition(element) {
  if (!element) return '';
  var yPosition = 0;
  while (element) {
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }
  return yPosition;
};

/**
 * Function to detect the user's operating system
 */
exports.getPosition = getPosition;
var detectOS = function detectOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  return 'Unknown';
};

/**
 * check class name and return link type
 * @param {String} className class name of the clicked element
 * @return {String} return link type like link, button, carousel etc
 * @example
 * getCtaType('sc-btn')
 */
// CTA Type
exports.detectOS = detectOS;
var getCtaType = function getCtaType(className, target) {
  var mktCountryCode = getCurrentCountry();
  if (mktCountryCode === 'hk' || mktCountryCode === 'sg') {
    if (target) {
      if (target.closest('.sc-meganav__hamburger, .sc-meganav__close-button, .sc-meganav__login-btn, .sc-meganav__login-close, .c-button, .sc-btn')) {
        return 'button';
      }
      if (target.closest('.sc-meganav__btn-search-mbl')) {
        return 'search';
      }
      if (target.closest('header')) {
        return 'nav-link';
      }
      if (target.closest('.sc-recommend .sc-filter__btn, .sc-digital-guide__tab-item, .sc-tab-minimal__head-button, .sc-right-tab .splide__slide, .sc-tab__item')) {
        return 'tab';
      }
      if (target.closest('.sc-accordion__label, .sc-faq-two-column__label, .sc-faq__accordion-label, .c-plus-minus-accordion___item') && !target.closest('a')) {
        return 'accordion';
      }
      if (target.closest('.sc-quick-tools, .m-quick-links')) {
        return 'quick-links';
      }
    }
    return 'link';
  } else {
    if (target && target.closest('header')) {
      return 'nav-link';
    } else if (target && target.closest('.sc-banner__content')) {
      return 'masthead-button';
    } else if (target && target.closest('.sc-banner-slider__thumbnail')) {
      return 'button';
    } else if (target && target.closest('.sc-benefits-slider-tab__tabs-0')) {
      return 'button';
    } else if (target && target.closest('.sc-banner-przn-block')) {
      return 'widget-button';
    } else if (target && target.closest('.sc-filter__btn')) {
      return 'button';
    } else if (target && target.closest('.sc-quick-tools__links')) {
      return 'quick-link';
    } else if (target && target.closest('.sc-filter')) {
      return 'button';
    } else if (target && target.closest('.sc-digital-guide .splide')) {
      return 'button';
    } else if (target && target.closest('.sc-benefits-slider-tab__tab')) {
      return 'button';
    } else if (target && target.closest('.sc-footer')) {
      return 'footer-link';
    } else if (target && target.closest('.sc-persistent-bar')) {
      return 'persistent-bar-link';
    } else {
      return 'link';
    }
  }
};

/**
 * Track customer interaction for CTA Click.
 */
exports.getCtaType = getCtaType;
var handleAnalyticsCTA = function handleAnalyticsCTA(ev) {
  var targetClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var ctaObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (typeof launchscript === 'undefined' && !document.querySelector('#adobelaunchscript')) {
    //Adobe Analytics not enable for this market
    return;
  }
  var closest = targetClass ? targetClass : ev.target.closest('a');
  var ctaType = ctaObj.ctaType,
    ctaPosition = ctaObj.ctaPosition,
    xLinkRegion = ctaObj.xLinkRegion,
    customLinkText = ctaObj.customLinkText,
    linkName = ctaObj.linkName,
    context = ctaObj.context;
  var mktCountryCode = getCurrentCountry();
  if (!ctaType) {
    ctaType = closest ? getCtaType(closest.className, ev.target) : 'link';
  }
  if (!ctaPosition) {
    ctaPosition = calcElementLocation(ev.target);
  }
  if (!xLinkRegion) {
    xLinkRegion = getHorizontalPosition(ev.clientX);
  }
  if (!customLinkText && closest) {
    var _ref7, _ref8, _closest$getAttribute;
    customLinkText = (_ref7 = (_ref8 = (_closest$getAttribute = closest.getAttribute('title')) !== null && _closest$getAttribute !== void 0 ? _closest$getAttribute : closest.innerText) !== null && _ref8 !== void 0 ? _ref8 : closest.textContent) === null || _ref7 === void 0 ? void 0 : _ref7.trim().toLowerCase();
  }
  if (!linkName) {
    linkName = document.querySelector('title') && document.querySelector('title').innerText ? document.querySelector('title').innerText.toLowerCase() : 'na';
  }
  if (!context) {
    context = getCtaContext(closest);
  }
  var customLinkRegion = xLinkRegion + ' ' + ctaPosition;
  var updatedCtaPosition = ctaPosition;
  if (mktCountryCode === 'sg') {
    updatedCtaPosition = customLinkRegion;
  }
  if (typeof eddlEnabled === 'undefined') {
    //This code is added for the HK market because full EDDL is not implemented in HK market
    digitalData.ctaName = customLinkText;
    digitalData.ctaPosition = ctaPosition;
    if (typeof _satellite !== 'undefined' && typeof _satellite.track === 'function') {
      _satellite.track('callToAction');
    }
    return;
  }
  var titleSelector = document.querySelector('title');
  var ctaName = titleSelector && titleSelector.innerText ? titleSelector.innerText.toLowerCase() : 'na';
  var dataObject;
  if (mktCountryCode === 'sg') {
    dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      customLinkClick: {
        customLinkText: typeof nitroEnabled !== 'undefined' ? context : customLinkText || ctaName,
        customLinkPosition: customLinkRegion,
        customLinkType: ctaType
      },
      event: 'ctaClick',
      href: window.location.href,
      context: context
    });
  } else if (mktCountryCode === 'hk') {
    dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      event: 'ctaClick',
      title: customLinkText,
      href: window.location.href,
      context: context
    });
    dataObject.ctaName = typeof nitroEnabled !== 'undefined' ? context : customLinkText || ctaName;
    dataObject.ctaPosition = customLinkRegion;
    dataObject.ctaType = ctaType;
  } else {
    dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      customLinkClick: {
        customLinkText: typeof nitroEnabled !== 'undefined' ? context : customLinkText,
        customLinkRegion: customLinkRegion,
        customLinkType: ctaType,
        customLinkName: linkName
      },
      event: 'ctaClick',
      title: customLinkText,
      href: window.location.href,
      context: context
    });
    dataObject.ctaName = typeof nitroEnabled !== 'undefined' ? context : customLinkText || ctaName;
    dataObject.ctaPosition = updatedCtaPosition;
    dataObject.ctaType = ctaType;
  }
  scAnalyticsDataArray.push(dataObject);
};

/**
 * Calculate range values based on original PI value.
 */
exports.handleAnalyticsCTA = handleAnalyticsCTA;
var calculateRanges = function calculateRanges(fieldNameValue, currentValue) {
  var newRanges = {
    monthlyIncome: [{
      start: 0,
      end: 10000
    }, {
      start: 10000,
      end: 20000
    }, {
      start: 20000,
      end: 30000
    }, {
      start: 30000,
      end: 40000
    }, {
      start: 40000,
      end: 50000
    }, {
      start: 50000,
      end: 60000
    }, {
      start: 60000,
      end: 70000
    }, {
      start: 70000,
      end: 80000
    }, {
      start: 80000,
      end: 90000
    }, {
      start: 90000,
      end: 100000
    }, {
      start: 100000,
      end: 110000
    }, {
      start: 110000,
      end: 120000
    }, {
      start: 120000
    }],
    loanAmount: [{
      start: 0,
      end: 100000
    }, {
      start: 100000,
      end: 200000
    }, {
      start: 200000,
      end: 300000
    }, {
      start: 300000,
      end: 400000
    }, {
      start: 400000,
      end: 500000
    }, {
      start: 500000,
      end: 600000
    }, {
      start: 600000,
      end: 700000
    }, {
      start: 700000,
      end: 800000
    }, {
      start: 800000,
      end: 900000
    }, {
      start: 900000,
      end: 1000000
    }, {
      start: 1000000
    }],
    repaymentAmount: [{
      start: 0,
      end: 20000
    }, {
      start: 20000,
      end: 50000
    }, {
      start: 50000,
      end: 100000
    }, {
      start: 100000,
      end: 150000
    }, {
      start: 150000,
      end: 200000
    }, {
      start: 200000,
      end: 250000
    }, {
      start: 250000,
      end: 300000
    }, {
      start: 300000,
      end: 350000
    }, {
      start: 350000
    }],
    dailyBalance: [{
      start: 0,
      end: 2000
    }, {
      start: 2000,
      end: 5000
    }, {
      start: 5000,
      end: 10000
    }, {
      start: 10000,
      end: 15000
    }, {
      start: 15000,
      end: 20000
    }, {
      start: 20000,
      end: 25000
    }, {
      start: 25000,
      end: 30000
    }, {
      start: 30000,
      end: 35000
    }, {
      start: 35000,
      end: 50000
    }, {
      start: 50000,
      end: 100000
    }, {
      start: 100000,
      end: 200000
    }, {
      start: 200000,
      end: 300000
    }, {
      start: 3000000,
      end: 500000
    }, {
      start: 500000,
      end: 750000
    }, {
      start: 750000,
      end: 1000000
    }, {
      start: 1000000
    }],
    apr: [{
      start: 0,
      end: 2
    }, {
      start: 2,
      end: 5
    }, {
      start: 5,
      end: 7
    }, {
      start: 7,
      end: 10
    }, {
      start: 10,
      end: 15
    }, {
      start: 15,
      end: 20
    }, {
      start: 20,
      end: 25
    }, {
      start: 25
    }],
    annualIncome: [{
      start: 0,
      end: 120000
    }, {
      start: 120000,
      end: 240000
    }, {
      start: 240000,
      end: 360000
    }, {
      start: 360000,
      end: 480000
    }, {
      start: 480000,
      end: 600000
    }, {
      start: 600000,
      end: 720000
    }, {
      start: 720000,
      end: 840000
    }, {
      start: 840000,
      end: 960000
    }, {
      start: 960000,
      end: 1080000
    }, {
      start: 1080000,
      end: 1200000
    }, {
      start: 1200000,
      end: 1320000
    }, {
      start: 1320000,
      end: 1440000
    }, {
      start: 1440000
    }],
    age: [{
      start: 0,
      end: 18
    }, {
      start: 18,
      end: 25
    }, {
      start: 25,
      end: 35
    }, {
      start: 35,
      end: 45
    }, {
      start: 45,
      end: 55
    }, {
      start: 55,
      end: 65
    }, {
      start: 65,
      end: 75
    }, {
      start: 75
    }],
    transactionAmount: [{
      start: 0,
      end: 100000
    }, {
      start: 100000,
      end: 200000
    }, {
      start: 200000,
      end: 300000
    }, {
      start: 300000,
      end: 400000
    }, {
      start: 400000,
      end: 500000
    }, {
      start: 500000,
      end: 600000
    }, {
      start: 600000,
      end: 700000
    }, {
      start: 700000,
      end: 800000
    }, {
      start: 800000,
      end: 900000
    }, {
      start: 900000,
      end: 1000000
    }, {
      start: 1000000,
      end: 1500000
    }, {
      start: 1500000,
      end: 2000000
    }, {
      start: 2000000,
      end: 3000000
    }, {
      start: 3000000
    }],
    totalSpend: [{
      start: 0,
      end: 1000
    }, {
      start: 1000,
      end: 2000
    }, {
      start: 2000,
      end: 3000
    }, {
      start: 3000,
      end: 4000
    }, {
      start: 4000,
      end: 5000
    }, {
      start: 5000,
      end: 6000
    }, {
      start: 6000,
      end: 7000
    }, {
      start: 7000,
      end: 8000
    }, {
      start: 8000,
      end: 9000
    }, {
      start: 9000,
      end: 10000
    }, {
      start: 10000
    }]
  };
  var calculatedRange = currentValue;
  if (!calculatedRange) {
    calculatedRange = 'na';
  } else {
    var val = parseInt(calculatedRange.toString().replace(/,/g, ''), 10);
    for (var i = 0; i < newRanges[fieldNameValue].length; i++) {
      var startVal = newRanges[fieldNameValue][i].start;
      var endVal = newRanges[fieldNameValue][i].end;
      if (val >= startVal && (endVal ? val < endVal : true)) {
        if (fieldNameValue === 'monthlyIncome') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : 'ge120k';
          break;
        } else if (fieldNameValue === 'loanAmount') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (endVal == 1000000 ? '1m' : (Math.abs(endVal) / 1000).toFixed() + 'k') : 'ge1m';
          break;
        } else if (fieldNameValue === 'transactionAmount') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (startVal >= 1000000 ? Math.abs(startVal) / 1000000 + 'm-lt' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt') + (endVal >= 1000000 ? Math.abs(endVal) / 1000000 + 'm' : (Math.abs(endVal) / 1000).toFixed() + 'k') : 'ge3m';
          break;
        } else if (fieldNameValue === 'annualIncome') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (startVal >= 1000000 ? Math.abs(startVal) / 1000000 + 'm-lt' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt') + (endVal >= 1000000 ? Math.abs(endVal) / 1000000 + 'm' : (Math.abs(endVal) / 1000).toFixed() + 'k') : 'ge1.44m';
          break;
        } else if (fieldNameValue === 'repaymentAmount') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : 'ge350k';
          break;
        } else if (fieldNameValue === 'dailyBalance') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : 'ge1m';
          break;
        } else if (fieldNameValue === 'apr') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + endVal : startVal + '%-lt' + endVal + '%' : 'ge25%';
          break;
        } else if (fieldNameValue === 'age') {
          calculatedRange = endVal ? startVal + '-lt' + endVal : 'ge75';
          break;
        } else if (fieldNameValue === 'totalSpend') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : 'ge10k';
          break;
        }
      }
    }
  }
  return calculatedRange;
};

/**
 * Track customer interaction with calculators.
 */
exports.calculateRanges = calculateRanges;
var handleCalculatorAnalytics = function handleCalculatorAnalytics(calculatorName, fields) {
  if (typeof launchscript === 'undefined' && !document.querySelector('#adobelaunchscript')) {
    //Adobe Analytics not enable for this market
    return;
  }
  var dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
    calculator: {
      name: calculatorName,
      fields: fields
    },
    user: {
      userInfo: {
        userStatus: 'guest',
        userType: 'NTB'
      }
    },
    event: 'calculatorSubmit',
    title: document.title,
    href: window.location.href
  });
  scAnalyticsDataArray.push(dataObject);
};

/**
 * delay 1 second when once moved the slider bar and trigger events
 * @example
 * debounceEvents()
 */
exports.handleCalculatorAnalytics = handleCalculatorAnalytics;
var debounceEvents = function debounceEvents(f, delay) {
  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = window.setTimeout(function () {
      f.apply(context, args);
    }, delay || 500);
  };
};

/**
 * Check if a given URL is a form URL.
 *
 * @param string url The URL.
 *
 * @return bool True if it's form URL, false otherwise.
 */
exports.debounceEvents = debounceEvents;
var isForm = function isForm(url) {
  if (window.scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'] != '' && window.scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'] != undefined) {
    var formRegex = new RegExp(window.scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'], 'gi');
    return formRegex.test(url);
  }
  return false;
};

/**
 * Check if tracking parameters should be carried forward to the given URL.
 *
 * @param string url The URL.
 *
 * @return bool True if parameters should be carried forward. False otherwise.
 */
exports.isForm = isForm;
var shouldCarryTrackingParams = function shouldCarryTrackingParams(url) {
  if (isForm(url)) {
    return true;
  }
  var paramList = ['https://www.royalsundaram.in', 'https://www.maxbupa.com', 'https://www.bharti-axagi.co.in', 'https://www.iciciprulife.com', 'https://www.einsure.allianz.com.sg', 'https://www.allianz-travel-insure.com.sg', 'https://www.lin.ee', 'https://www.piapp.com', 'https://go.fpg.sg', 'https://fairprice.com.sg', 'scmobile://communication-hub'];
  var partnerRegex = [];
  if (paramList && paramList.length > 0) {
    for (var j = 0; j < paramList.length; j++) {
      partnerRegex[j] = new RegExp(paramList[j], 'gi');
    }
  }
  for (var i = 0; i < partnerRegex.length; i++) {
    if (partnerRegex[i].test(url)) {
      return true;
    }
  }
  return false;
};

/**
 * Apply cookie param to given url
 * @param URL of the current page
 * @param target URL
 * @param targetUrlParamsToTakePrecedence Based on this value target url params will be updated.
 */
exports.shouldCarryTrackingParams = shouldCarryTrackingParams;
var applyCookieParams = function applyCookieParams($url) {
  var $swapping_attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var targetUrlParamsToTakePrecedence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var queryString = '';
  var queryParts = [];
  var pageQueryString = '';
  var urlQueryString = '';
  var pageUrl = getPageUrl();
  var allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  var allowableQueryStringOthers = window.scCommonConstants.ALLOWABLE_QUERYSTRING.others;
  var swap_map = {};
  if ($swapping_attrs !== '') {
    var $swappingList = $swapping_attrs.split('|');
    $swappingList.forEach(function (attr) {
      attr = attr.split('=');
      swap_map[attr[0]] = attr[1];
    });
  }
  if (pageUrl.queryString) {
    pageQueryString = pageUrl.queryString;
    if (pageQueryString.indexOf('&') !== -1) {
      queryParts = pageQueryString.split('&');
    } else {
      queryParts.push(pageQueryString);
    }
  }

  // Get query parameters from target URL
  var urlParts = [];
  var urlBreakdownData = urlBreakdown($url);
  if (urlBreakdownData.queryString) {
    urlQueryString = urlBreakdownData.queryString;
    if (urlQueryString.indexOf('&') !== -1) {
      urlParts = urlQueryString.split('&');
    } else {
      urlParts.push(urlQueryString);
    }
  }

  // Get query parameters from Cookie
  var cookieParts = [];
  if (allowableQueryString.length > 0) {
    for (var i = 0; i < allowableQueryString.length; i++) {
      var query = getLocalStorageWithExpiry(allowableQueryString[i]);
      if (query !== null) {
        var allowableQueryStringKey = swap_map[allowableQueryString[i]] ? swap_map[allowableQueryString[i]] : allowableQueryString[i];
        cookieParts.push(allowableQueryStringKey + '=' + encodeURI(query));
      }
    }
  }
  var qsArr = [];
  // User parameter from Page URL
  for (var j = 0; j < queryParts.length; j++) {
    if (queryParts[j] !== '') {
      var ur = queryParts[j].split('=');

      // Allow only whitelisted params from pageUrl.
      if (!allowableQueryStringOthers.includes(ur[0])) {
        continue;
      }

      // If targetUrlParamsToTakePrecedence is true and urlQueryString has the same parameter, then skip from updating the value.
      if (targetUrlParamsToTakePrecedence && urlQueryString.indexOf(ur[0] + '=') !== -1) {
        continue;
      }
      if (qsArr.indexOf(ur[0].toLowerCase()) === -1) {
        if (queryString !== '') {
          queryString += '&';
        }
        var uu = getUrlParamName(ur[0]);
        queryString += uu + '=' + ur[1];
        qsArr.push(ur[0].toLowerCase());
      }
    }
  }

  // User parameter from Cookie only if that parameter does not exist in URL
  for (var l = 0; l < cookieParts.length; l++) {
    if (cookieParts[l] !== '') {
      var co = cookieParts[l].split('=');

      // If targetUrlParamsToTakePrecedence is true and urlQueryString has the same parameter, then skip from updating the value.
      if (targetUrlParamsToTakePrecedence && urlQueryString.indexOf(co[0] + '=') !== -1) {
        continue;
      }
      if (qsArr.indexOf(co[0].toLowerCase()) === -1) {
        if (queryString !== '') {
          queryString += '&';
        }
        var cc = getUrlParamName(co[0]);
        queryString += cc + '=' + co[1];
        qsArr.push(co[0].toLowerCase());
      }
    }
  }

  // Use parameter from target url only if it does not exist in page URL and cookie
  for (var k = 0; k < urlParts.length; k++) {
    if (urlParts[k] !== '') {
      var qs = urlParts[k].split('=');
      if (qsArr.indexOf(qs[0].toLowerCase()) === -1) {
        if (queryString !== '') {
          queryString += '&';
        }
        var qq = getUrlParamName(qs[0]);
        queryString += qq + '=' + qs[1];
      }
    }
  }
  var breakdown = parseUrl($url);
  var queryStringArray = queryString.split('&');
  if (queryString !== '' && queryStringArray.length > 0) {
    queryStringArray.forEach(function (value) {
      breakdown.rawpath = breakdown.rawpath.replace('&' + value, '');
    });
  }
  if (breakdown.protocal === 'mailto:') {
    return "".concat(breakdown.protocal).concat(breakdown.hostname).concat(breakdown.pathname, "?").concat(queryString).concat(breakdown.hash);
  } else {
    if ($swapping_attrs !== '' && $swapping_attrs.indexOf(',') !== -1) {
      queryString = bundleParam(queryString, $swapping_attrs);
    }
    if (breakdown.hash.indexOf('?') !== -1) {
      return "".concat(breakdown.protocal, "//").concat(breakdown.hostname).concat(breakdown.rawpath, "?").concat(queryString).concat(breakdown.hash);
    }
    return "".concat(breakdown.protocal, "//").concat(breakdown.hostname).concat(breakdown.pathname, "?").concat(queryString).concat(breakdown.hash);
  }
};
exports.applyCookieParams = applyCookieParams;
var getUrlParamName = function getUrlParamName(paramName) {
  var index = -1;
  for (var i = 0; i < window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb.length; i++) {
    if (paramName.toLowerCase() === window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb[i].toLowerCase()) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    return window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb[index];
  }
  return paramName;
};

/**
 * bundleParam method used for Params Bundling.
 * If bundle parameters are available then it's replaced by value which are present in the queryString and append it inside the current CTA
 * @param queryString generated new queryString based on data-pass-params & data-cta-url-params-precedence
 * @param $swapping_attrs attributes of swap-attrs
 * bundleParam('#/onboarding?country=SG&products=162,338&campaign=6203,CA001', 'subChanCode,referId=aggregator')
 */
exports.getUrlParamName = getUrlParamName;
var bundleParam = function bundleParam(queryString, $swapping_attrs) {
  var swap_map = {};
  var urlQueryString = window.location.search;
  if (!urlQueryString) return queryString;
  urlQueryString = urlQueryString.substr(1);
  if (!urlQueryString) return queryString;
  urlQueryString = urlQueryString.split('&');
  var allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  $swapping_attrs = $swapping_attrs.split('=');
  swap_map = $swapping_attrs[0].split(',');
  var swap_str = '';
  for (var i = 0; i < swap_map.length; i++) {
    if (allowableQueryString.includes(swap_map[i])) {
      for (var j = 0; j < urlQueryString.length; j++) {
        var list = urlQueryString[j].split('=');
        if (list[0] === swap_map[i]) {
          swap_str += swap_str ? ',' : '';
          swap_str += list[1];
        }
      }
    }
  }
  if (!swap_str) return queryString;
  if (queryString.indexOf($swapping_attrs[1]) === -1) {
    queryString += '&' + $swapping_attrs[1] + "=".concat(swap_str);
  } else {
    var strList = queryString.split('&');
    queryString = '';
    for (var _i2 = 0; _i2 < strList.length; _i2++) {
      var _list = strList[_i2].split('=');
      queryString += queryString ? '&' : '';
      if (_list[0] === $swapping_attrs[1]) {
        queryString += $swapping_attrs[1] + "=".concat(swap_str);
      } else {
        queryString += _list[0] + '=' + _list[1];
      }
    }
  }
  return queryString;
};
exports.bundleParam = bundleParam;
var isEmpty = function isEmpty(obj) {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (_typeof(obj) !== 'object') return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
};
exports.isEmpty = isEmpty;
var convertQueryStringToJsonObject = function convertQueryStringToJsonObject(queryString) {
  var queries = queryString.split('&');
  var json = {};
  for (var i = 0; i < queries.length; i++) {
    var keyValue = queries[i].split('=');
    if (keyValue.length === 2) {
      json[keyValue[0].toLowerCase()] = keyValue[1];
    }
  }
  return json;
};

/**
 * Method to set localStorage with expiry date.
 * @param {string} key LocalStorage key
 * @param {string} value LocalStorage value
 * @param {number} ttl Expiry date
 */
exports.convertQueryStringToJsonObject = convertQueryStringToJsonObject;
var setLocalStorageWithExpiry = function setLocalStorageWithExpiry(key, value, ttl) {
  var now = new Date();

  // `item` is an object which contains the original value.
  // as well as the time when it's supposed to expire
  var item = {
    value: value,
    expiry: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
};

/**
 * This clunky regex is taken directly from http://detectmobilebrowsers.com/
 */
exports.setLocalStorageWithExpiry = setLocalStorageWithExpiry;
var isMobile = function isMobile() {
  var stringCheck = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(stringCheck) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(stringCheck.substr(0, 4));
};

/**
 * added comma after each three digits like 1,000,000
 * @example
 * @param {numbers} 10000
 *convertNumbers(10000)
 */
exports.isMobile = isMobile;
var convertNumbers = function convertNumbers(selector, numbers) {
  if (numbers === '' || !numbers) return 0;
  var returnVal = numbers.toString();
  var tmp = [];
  var fraction = 0;
  if (Number(selector.getAttribute('data-comma-format')) === 2) {
    if (returnVal.indexOf('.') !== -1) {
      var splitValue = returnVal.split('.');
      tmp = splitValue[0].split('').reverse(); //4321
      fraction = parseInt(splitValue[1], 10);
    } else {
      tmp = returnVal.split('').reverse(); //4321
    }

    var strNew = '';
    if (tmp.length > 3) {
      //true
      var lastThree = tmp.splice(0, 3);
      for (var i = 0; i < tmp.length; i++) {
        if (i > 0 && i % 2 == 0) {
          strNew += ',';
        }
        strNew += tmp[i].toString();
      }
      strNew = lastThree.join('') + ',' + strNew;
      strNew = strNew.split('').reverse().join('');
    }
    if (strNew) {
      if (fraction) {
        strNew = '' + strNew + ".".concat(fraction);
      }
      if (strNew.slice(0, 2) == '-,') {
        strNew = strNew.replace(/-,/gi, '-');
      }
      return strNew;
    } else {
      return returnVal;
    }
  } else {
    if (returnVal.indexOf('.') !== -1) {
      var _splitValue = returnVal.split('.');
      tmp = _splitValue[0].split('').reverse(); //4321
      fraction = _splitValue[1];
    } else {
      tmp = returnVal.split('').reverse(); //4321
    }

    var _strNew = '';
    if (tmp.length > 3) {
      //true if it's more than or equal thousands
      for (var _i3 = 0; _i3 < tmp.length; _i3++) {
        if (_i3 > 0 && _i3 % 3 == 0) {
          _strNew += ',';
        }
        _strNew += tmp[_i3].toString();
      }
      _strNew = _strNew.split('').reverse().join('');
    }
    if (_strNew) {
      if (fraction) {
        _strNew = '' + _strNew + ".".concat(fraction);
      }
      return _strNew;
    } else {
      return returnVal;
    }
  }
};
exports.convertNumbers = convertNumbers;
var handleProductCalculatorSubmit = function handleProductCalculatorSubmit(calculatorName, fields) {
  if (typeof digitalData === 'undefined') {
    return; // Exit the function early if digitalData is not defined
  }

  digitalData.calculator = {
    name: calculatorName,
    fields: fields
  };
  if (typeof _satellite !== 'undefined' && typeof _satellite.track === 'function') {
    _satellite.track('calculatorSubmit');
  }

  //update adobeDataLayer with calculator submit event
  if (typeof window.adobeDataLayer !== 'undefined') {
    var dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      event: 'calculatorSubmit'
    });

    //change calculator payload key names for adobeDataLayer object
    var newFields = [];
    var obj = {};
    fields.forEach(function (el) {
      obj = _objectSpread({}, el);
      obj.formFieldName = obj.fieldName;
      delete obj.fieldName;
      obj.formFieldValue = obj.fieldValue;
      delete obj.fieldValue;
      newFields.push(obj);
    });
    var calculator = {
      name: calculatorName,
      fields: newFields
    };
    delete dataObject.calculator;
    dataObject.calculator = calculator;
    window.adobeDataLayer.push(dataObject);
  }
};

/**
 * initialized or update slider based on the sliderInit value
 */
exports.handleProductCalculatorSubmit = handleProductCalculatorSubmit;
var initializeSlider = function initializeSlider(mainSelector, parentSelector) {
  var docElement = document.documentElement;
  var direction = docElement.getAttribute('dir') ? docElement.getAttribute('dir') : null;
  var allSlider = mainSelector.querySelectorAll('.sc-range-slider');
  if (allSlider.length) {
    //Initialize slider
    allSlider.forEach(function (slider) {
      noUiSlider.create(slider, {
        start: Number(slider.getAttribute('data-default')),
        step: Number(slider.getAttribute('data-step')),
        behaviour: 'snap',
        connect: 'lower',
        range: {
          min: Number(slider.getAttribute('data-min')),
          max: Number(slider.getAttribute('data-max')) > 0 ? Number(slider.getAttribute('data-max')) : 10000000
        },
        direction: direction
      });
      var inputField = slider.closest(parentSelector).querySelector('input[class$="-value"]');
      if (inputField) {
        //Slider related with text field
        inputField.value = convertNumbers(mainSelector, slider.getAttribute('data-default'));
      } else {
        var dropdownField = slider.closest(parentSelector).querySelector('select[class$="-value"]');
        if (dropdownField) {
          //Slider related with dropdown field
          dropdownField.value = slider.getAttribute('data-default');
        }
      }
    });
    allSlider.forEach(function (el) {
      el.setAttribute('aria-label', 'Drage here to move slider');
    });
  }
};

/**
 * this method will be call when any key pressed in estimate daily field, pass value to calculateInterest method and return start status
 *
 * @param {Number} start get estimate daily balance number of click      *
 * @example
 * activeInputVal(1, 1200)
 */
exports.initializeSlider = initializeSlider;
var validateInput = function validateInput(selector, sliderClass, errorSelector) {
  var selectedClass = selector.querySelector(".".concat(sliderClass)),
    inputField = selector.querySelector(".".concat(sliderClass, "-value")),
    sliderExist = true,
    minValue,
    maxValue;
  if (inputField) {
    //slider input fields
    minValue = Number(selectedClass.getAttribute('data-min'));
    maxValue = Number(selectedClass.getAttribute('data-max'));
  } else {
    //non slider input fields
    minValue = Number(selectedClass.getAttribute('data-min'));
    maxValue = Number(selectedClass.getAttribute('data-max'));
    inputField = selectedClass;
    sliderExist = false;
  }
  var initValue = inputField.value,
    value = 0;
  errorSelector.classList.add('hide');
  if (!selectedClass.getAttribute('data-decimal')) {
    value = initValue.replace(/[^0-9]+/gi, '').replace(/^0/, ''); //remove all string except 0-9
    if (value != initValue) {
      inputField.value = value;
    }
    if (value) {
      value = parseInt(value, 10);
    }
  } else {
    //if text field supports fraction value
    value = initValue.replace(/[^0-9.]/gi, '').replace(/^0/, '');
    if (value != initValue) {
      inputField.value = value;
    }
    if (!value) {
      value = '';
    } else {
      var raVal = value.split('.');
      if (value === '.') {
        errorSelector.classList.remove('hide');
        return;
      } else if (raVal.length > 2) {
        //more than two floating point
        value = "".concat(raVal[0], ".").concat(raVal[1]);
        inputField.value = value;
        return;
      } else if (raVal[1] && raVal[1].length > 2) {
        value = "".concat(raVal[0], ".") + raVal[1].substr(0, 2);
        inputField.value = value;
        return;
      }
      if (value.slice(-1) === '.') {
        return;
      } else if (raVal[1] && raVal[1].length === 1) {
        value = parseFloat(value).toFixed(1);
      } else {
        value = Number(value);
      }
    }
  }
  if (value > maxValue) {
    //checking text field maximum value
    value = maxValue;
    if (sliderExist) selectedClass.noUiSlider.set([value]); //Push value in NoUiSlider
  } else if (value === '' && minValue > 0) {
    //leave text field as blank and fill it with 0
    value = '';
    errorSelector.classList.remove('hide');
  } else if (value < minValue) {
    errorSelector.classList.remove('hide');
  }
  if (sliderExist) {
    if (value !== '' && value >= minValue) {
      selectedClass.noUiSlider.set([value]); //Push value in NoUiSlider
    } else {
      selectedClass.noUiSlider.set([0]);
    }
  }
  inputField.value = value;
};

/**
 * calculate monthly repayment amount
 * @param {Number} interestRate - interest rate in Int
 * @param {Number} tenor - tenor in number months Int
 * @param {Number} loanAmount - loan amount in Int
 * @param {Number} advancedPayments - advanced payment amount in Int
 * @return {Number} return calculated PMT value
 * Example:
 * calculatePMT(16, 12, 1500000, 0)
 **/
exports.validateInput = validateInput;
var calculatePMT = function calculatePMT(interestRate, tenor, loanAmount) {
  var advancedPayments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var monthlyRate = interestRate / 1200;
  var t1 = 1 + monthlyRate;
  var t3 = Math.pow(t1, tenor - advancedPayments);
  return loanAmount * monthlyRate / (1 - 1 / t3);
};

/**
 * check error status of the slider input fields
 */
exports.calculatePMT = calculatePMT;
var sliderErrorStatus = function sliderErrorStatus(selector, fieldName) {
  var errorStatus = false;
  var allFields = selector.querySelectorAll(fieldName);
  if (allFields.length) {
    for (var i = 0; i < allFields.length; i++) {
      var value = Number(allFields[i].value.replace(/[^0-9.]/gi, ''));
      var className = allFields[i].className.split(' ');
      className = className[className.length - 1].slice(0, -6);
      var slider = selector.querySelector(".".concat(className)),
        minValue = Number(slider.getAttribute('data-min'));
      if (isNaN(value) || value < minValue) {
        errorStatus = errorStatus || true;
      }
    }
  }
  return errorStatus;
};

/**
 * add to digit after floating point
 */
exports.sliderErrorStatus = sliderErrorStatus;
var formatNumbersWithTwoDecimalPlaces = function formatNumbersWithTwoDecimalPlaces(inputString) {
  // Use a regular expression to find numbers (both integer and decimal)
  var regex = /(\d+(\.\d*)?)/g;

  // Replace each matched number with the number formatted to two decimal places
  var filteredResult = inputString.replace(regex, function (match) {
    var number = parseFloat(match);
    if (!isNaN(number)) {
      return number.toFixed(2);
    }
    return match; // If not a valid number, return the original match
  });

  var parts = filteredResult.split('.');
  var result = parseFloat(parts[0] + '.' + parts.slice(1).join('')).toFixed(2);
  return isNaN(result) ? '0.00' : result;
};

/**
 * VLOOKUP is a function in Microsoft Excel (and similar spreadsheet software) that stands for "Vertical Lookup." It is commonly used to search for a value in the first column of a table and return a value in the same row from another column.
 * @param {Number} lookupValue - Replace M14 with the actual value you want to look up
 * @param {Object} tableArray - Add more rows as needed
 * @param {Number} colIndex - Assuming you want to retrieve the value from the second column
 * Example:
 * vLookup(16, [[0, 100], [50, 85], [75, 75]], 2)
 **/
exports.formatNumbersWithTwoDecimalPlaces = formatNumbersWithTwoDecimalPlaces;
var vLookup = function vLookup(lookupValue, tableArray, colIndex) {
  for (var i = 0; i < tableArray.length; i++) {
    var row = tableArray[i];
    var compareValue = row[0]; // Assuming the lookup column is the first column in the tableArray

    if (compareValue <= lookupValue && (i === tableArray.length - 1 || tableArray[i + 1][0] > lookupValue)) {
      return row[colIndex - 1]; // Adjusting for 1-based indexing in Excel
    }
  }

  return undefined; // Return undefined if no match is found
};

/**
 * validate all slider field input
 */
exports.vLookup = vLookup;
var sliderFieldErrorStatus = function sliderFieldErrorStatus(selector, parentClass, errorClass) {
  var closest = selector.closest(parentClass),
    minValue = Number(closest.querySelector('.sc-range-slider').getAttribute('data-min')),
    errorSelector = closest.querySelector(errorClass),
    value = Number(selector.value.replace(/[^0-9]+/gi, ''));
  if (value >= minValue) {
    errorSelector.classList.add('hide');
    return true;
  }
  errorSelector.classList.remove('hide');
  return false;
};

/**
 * check step field error status
 */
exports.sliderFieldErrorStatus = sliderFieldErrorStatus;
var stepFieldErrorStatus = function stepFieldErrorStatus(selector, parentClass, errorClass) {
  var minValue = Number(selector.getAttribute('data-min')),
    errorSelector = selector.closest(parentClass).querySelector(errorClass),
    value = Number(selector.value.replace(/[^0-9]+/gi, ''));
  if (value >= minValue) {
    errorSelector.classList.add('hide');
    return true;
  }
  errorSelector.classList.remove('hide');
  return false;
};

/**
 * The FV function is a financial function that returns the future value of an investment
 * @param {*} rate step up rate
 * @param {*} nper time period
 * @param {*} pmt Since Excel formula has an empty field, we assume it's 0
 * @param {*} pv initial investment amount
 * @param {*} type The Excel formula specifies type as 0
 * @returns
 */
exports.stepFieldErrorStatus = stepFieldErrorStatus;
var calculateFutureValue = function calculateFutureValue(rate, nper, pmt, pv, type) {
  // Calculate the future value
  var roundedNper = Math.round(nper);
  var factor = Math.pow(1 + rate, roundedNper);
  var futureValue = pv * factor + pmt * (1 - factor) / rate;
  if (type === 0) {
    return futureValue;
  } else {
    // If type is not 0, adjust the result
    return futureValue * (1 + rate);
  }
};

/**
 * based on the input month, it's calculate number of year and month
 */
exports.calculateFutureValue = calculateFutureValue;
var convertMonthsToYearsAndMonths = function convertMonthsToYearsAndMonths(months) {
  var years = Math.floor(months / 12);
  var remainingMonths = months % 12;
  return {
    years: years,
    months: remainingMonths
  };
};

/**
 * calculate monthly repayment amount and it's for =PMT(D4/12,D6,0,-D3,0) formula
 * @param {Number} rate: interest rate for each period
 * @param {Number} nper: number of periods
 * @param {Number} pv: present value or principal amount
 * @param {Number} fv: future value or a cash balance after the last payment
 * @return {Number} type: 0 for payments at the end of the period, 1 for payments at the beginning
 * Example:
 * calculatePMT(10/12/100, 10, 0, -1200000, 0)
 **/
exports.convertMonthsToYearsAndMonths = convertMonthsToYearsAndMonths;
var extendedPMT = function extendedPMT(rate, nper, pv, fv, type) {
  if (rate === 0) {
    return -(pv + fv) / nper;
  }
  var pvif = Math.pow(1 + rate, nper);
  var pmt = rate * (fv + pvif * pv) / (pvif - 1);
  if (type === 1) {
    pmt /= 1 + rate;
  }
  return -pmt;
};

/**
 * The calculateNPER function is a financial function that returns the number of periods for loan or investment
 * rate - The interest rate per period.
 * payment - The payment made each period.
 * present - The present value, or total value of all payments now.
 * future - [optional] The future value, or a cash balance you want after the last payment is made. Defaults to 0.
 * type - [optional] When payments are due. 0 = end of period. 1 = beginning of period. Default is 0.
 */
exports.extendedPMT = extendedPMT;
var calculateNPER = function calculateNPER(rate, payment, present, future, type) {
  // Initialize type
  type = typeof type === 'undefined' ? 0 : type;

  // Initialize future value
  future = typeof future === 'undefined' ? 0 : future;

  // Return number of periods
  var num = payment * (1 + rate * type) - future * rate;
  var den = present * rate + payment * (1 + rate * type);
  return Math.log(num / den) / Math.log(1 + rate);
};

/**
 * Calculates the number of years and months from a given number of months.
 *
 * @param {number} numberOfMonths - The total number of months.
 * @returns {String} String with the calculated number of years and months.
 */
exports.calculateNPER = calculateNPER;
var calculateYearMonth = function calculateYearMonth(numberOfMonths) {
  var months = numberOfMonths % 12;
  var years = Math.floor(numberOfMonths / 12);
  if (years > 1) {
    years = "".concat(years, " Year(s)");
  } else if (years === 1) {
    years = "".concat(years, " Year");
  } else {
    years = '';
  }
  if (months > 1) {
    months = " ".concat(months, " Month(s)");
  } else if (months === 1) {
    months = " ".concat(months, " Month");
  } else {
    months = '';
  }
  return "".concat(years).concat(months);
};

/**
 * Calculates the Effective Interest Rate (EIR) or Internal Rate of Return (IRR)
 * using Newton's method.
 *
 * @param {number} periods - Number of compounding periods.
 * @param {number} payment - Periodic payment.
 * @param {number} present - Present value or initial investment.
 * @param {number} future - Future value or final investment.
 * @param {number} type - 0 for ordinary annuity, 1 for annuity due.
 * @param {number} [guess=0.01] - Initial guess for the interest rate. Defaults to 0.01.
 * @returns {number} - Calculated Effective Interest Rate.
 */
exports.calculateYearMonth = calculateYearMonth;
var calculateEIR = function calculateEIR(periods, payment, present, future, type, guess) {
  guess = guess === undefined ? 0.01 : guess;
  future = future === undefined ? 0 : future;
  type = type === undefined ? 0 : type;

  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;

  // Set maximum number of iterations
  var iterMax = 10;

  // Implement Newton's method
  var y,
    y0,
    y1,
    x0,
    x1 = 0,
    f = 0,
    i = 0;
  var rate = guess;
  if (Math.abs(rate) < epsMax) {
    y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
  } else {
    f = Math.exp(periods * Math.log(1 + rate));
    y = present * f + payment * (1 / rate + type) * (f - 1) + future;
  }
  y0 = present + payment * periods + future;
  y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
  i = x0 = 0;
  x1 = rate;
  while (Math.abs(y0 - y1) > epsMax && i < iterMax) {
    rate = (y1 * x0 - y0 * x1) / (y1 - y0);
    x0 = x1;
    x1 = rate;
    if (Math.abs(rate) < epsMax) {
      y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
    } else {
      f = Math.exp(periods * Math.log(1 + rate));
      y = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    y0 = y1;
    y1 = y;
    ++i;
  }
  return rate;
};

/**
 * Calculating the Internal Rate of Return (IRR)
 * * @param {*} cashFlows is an array like [-200000.00, 0, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67] where -200000.00 is the input load amount and 4666.67 is the Monthly Repayment Amount
 */
exports.calculateEIR = calculateEIR;
var calculateIRR = function calculateIRR(cashFlows) {
  var iterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var tolerance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.00001;
  var irr = 0.1; // Initial guess for IRR
  var cashflowValue = 0;
  for (var i = 0; i < iterations; i++) {
    cashflowValue = 0;
    for (var j = 0; j < cashFlows.length; j++) {
      cashflowValue += cashFlows[j] / Math.pow(1 + irr, j);
    }
    var derivative = calculateDerivative(cashFlows, irr);
    irr = irr - cashflowValue / derivative;
    if (Math.abs(cashflowValue) < tolerance) {
      return irr;
    }
  }

  // If the iteration does not converge, return null or handle accordingly
  return null;
};

/**
 * Calculates the derivative of the NPV with respect to the IRR. The iteration continues until the NPV is close enough to zero or the maximum number of iterations is reached.
 */
exports.calculateIRR = calculateIRR;
var calculateDerivative = function calculateDerivative(cashFlows, irr) {
  var derivative = 0;
  for (var i = 0; i < cashFlows.length; i++) {
    derivative -= i * cashFlows[i] / Math.pow(1 + irr, i + 1);
  }
  return derivative;
};

/**
 * Calculates the present value of an investment (PV Method).
 * @param {number} ratePerPeriod - The interest rate per period.
 * @param {number} numberOfPeriods - The total number of periods.
 * @param {number} payment - The payment amount per period.
 * @returns {number} The present value of the investment.
 */
exports.calculateDerivative = calculateDerivative;
var calculatePresentValue = function calculatePresentValue(rate, nper, pmt) {
  return pmt * ((1 - Math.pow(1 + rate, -nper)) / rate);
};

/**
 * Calculates the monthly payment on a loan.
 *
 * @param {number} rate - The monthly interest rate (annual rate divided by 12).
 * @param {number} nper - The total number of payments (years multiplied by 12).
 * @param {number} pv - The present value or loan amount (should be negative as it's an outflow).
 * @returns {number} The monthly payment.
 */
exports.calculatePresentValue = calculatePresentValue;
var pmt = function pmt(rate, nper, pv) {
  if (rate === 0) return -pv / nper;
  var pvif = Math.pow(1 + rate, nper);
  return rate * pv * pvif / (pvif - 1);
};

/**
 * get current elements height including margin top and bottom
 * @param {Object} el - The elements which height need to be calculated
 * getOuterHeight(document.querySelector('#onetrust-banner-sdk'))
 **/
exports.pmt = pmt;
var getOuterHeight = function getOuterHeight(el) {
  if (!el) return 0;
  var elHeight = el.offsetHeight;
  elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
  elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom'));
  return elHeight;
};

/**
 * MatchHeight function to make divs the same height. Use this function only when CSS flexbox is not possible.
 * @param {String} selector - Container class, id, or element.
 */
exports.getOuterHeight = getOuterHeight;
var matchHeight = function matchHeight(selector) {
  var elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  // Get the tallest height by mapping all elements to their offsetHeight and finding the max value
  var tallest = Math.max.apply(Math, _toConsumableArray(_toConsumableArray(elements).map(function (el) {
    return el.offsetHeight;
  })));

  // Set each element's height to the tallest value
  elements.forEach(function (el) {
    el.style.height = "".concat(tallest, "px");
  });
};

/**
 * scroll target position with animation
 * @param {String} target scroll class
 * @param {Number} duration scroll time in ms
 * @param {Number} margin negative value form top
 * @example
 * scroll('body', 500, 90)
 */
exports.matchHeight = matchHeight;
var smoothScroll = function smoothScroll(target, duration) {
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target) return;
  var targetPosition = target.getBoundingClientRect().top - width;
  var startPosition = window.pageYOffset;
  var startTime = null;
  var animation = function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
  var ease = function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
};

/**
 * this method will be call when any key pressed in estimate daily field, pass value to calculateInterest method and return start status
 *
 * @param {Number} start get estimate daily balance number of click      *
 * @example
 * activeInputVal(1, 1200)
 */
exports.smoothScroll = smoothScroll;
var validateInputNoSlider = function validateInputNoSlider(selector, errorSelector) {
  var hideClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var minValue = Number(selector.getAttribute('data-min'));
  var maxValue = Number(selector.getAttribute('data-max'));
  var decimalPlaces = Number(selector.getAttribute('data-decimal'));
  var initValue = selector.value,
    value = 0;
  hideClass ? errorSelector.classList.add('hide') : errorSelector.style.display = 'none';
  if (!decimalPlaces) {
    value = initValue.replace(/[^0-9]+/gi, '').replace(/^0/, ''); //remove all string except 0-9
    if (value != initValue) {
      selector.value = value;
    }
    if (value) {
      value = parseInt(value, 10);
    }
  } else {
    decimalPlaces = Number(decimalPlaces);
    //if text field supports fraction value
    value = initValue.replace(/[^0-9.]/gi, '').replace(/^0/, '');
    if (value != initValue) {
      selector.value = value;
    }
    if (!value) {
      value = '';
    } else {
      var raVal = value.split('.');
      if (value === '.') {
        hideClass ? errorSelector.classList.remove('hide') : errorSelector.style.display = 'block';
        return;
      } else if (raVal.length > decimalPlaces) {
        //more than two floating point
        value = "".concat(raVal[0], ".").concat(raVal[1]);
        selector.value = value;
        return;
      } else if (raVal[1] && raVal[1].length > decimalPlaces) {
        value = "".concat(raVal[0], ".") + raVal[1].substr(0, decimalPlaces);
        selector.value = value;
        return;
      }
      if (value.slice(-1) === '.') {
        return;
      } else if (raVal[1] && raVal[1].length === 1) {
        value = parseFloat(value).toFixed(1);
      } else {
        value = Number(value);
      }
    }
  }
  if (maxValue !== -1 && value > maxValue) {
    //checking text field maximum value
    value = maxValue;
  } else if (value === '' && minValue > 0) {
    //leave text field as blank and fill it with 0
    value = '';
    hideClass ? errorSelector.classList.remove('hide') : errorSelector.style.display = 'block';
  } else if (value < minValue) {
    hideClass ? errorSelector.classList.remove('hide') : errorSelector.style.display = 'block';
  }
  selector.value = value;
};
exports.validateInputNoSlider = validateInputNoSlider;
var getAssetDomain = function getAssetDomain() {
  /* eslint-disable no-undef*/
  if (typeof baseURL === 'undefined' || baseURL === '') {
    var env = getCurrentEnvironment();
    var domain = getPageUrl().domain;
    if (env === window.scCommonConstants.PRODUCTION) {
      return urlObj[11] + '://' + urlObj[5] + '.' + urlObj[3] + '.' + urlObj[4] + '/' + urlObj[6] + '/' + urlObj[7] + '/';
    } else if (env === window.scCommonConstants.DEVELOPMENT) {
      if (domain === urlObj[3] + '.' + urlObj[14]) {
        return '/content/themes/scretail/assets/global/';
      } else if (domain === urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] || domain === urlObj[0] + '.' + urlObj[3] + '.' + urlObj[4]) {
        return urlObj[11] + '://' + urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] + '/' + urlObj[8] + '/' + urlObj[6] + '/' + urlObj[7] + '/';
      } else {
        return '/assets/';
      }
    } else if (env === window.scCommonConstants.STAGING) {
      return urlObj[11] + '://' + urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] + '/' + urlObj[9] + '/' + urlObj[6] + '/' + urlObj[7] + '/';
    } else {
      return urlObj[11] + '://' + urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] + '/' + urlObj[6] + '/' + urlObj[7] + '/';
    }
  } else if (baseURL === '/zoo') {
    return urlObj[11] + '://' + urlObj[10] + '.' + urlObj[3] + '.' + urlObj[4] + '/' + urlObj[15] + '/' + urlObj[6] + '/';
  } else {
    return baseURL;
  }
  /* eslint-enable no-undef*/
};

/**
 * trigger adobe popupViewed event when showing popups
 */
exports.getAssetDomain = getAssetDomain;
var triggerPopupViewedTagging = function triggerPopupViewedTagging(popupName) {
  if (typeof launchscript === 'undefined' && !document.querySelector('#adobelaunchscript')) {
    //Adobe Analytics not enable for this market
    return;
  }
  setTimeout(function () {
    var dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      form: {
        formName: '',
        formStepName: '',
        formType: '',
        formPlatform: ''
      }
    });
    dataObject.form.popupName = popupName;
    dataObject.event = 'popupViewed';
    scAnalyticsDataArray.push(dataObject);
  }, 500);
};
exports.triggerPopupViewedTagging = triggerPopupViewedTagging;
var getCampaignInfoV1 = function getCampaignInfoV1() {
  var pageName = window.digitalData.page.pageInfo.pageName.split(':');
  var allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  if (pageName[0] === 'pk' && pageName[3] === 'udp-form' || pageName[0] === 'in') {
    var campaignData = getIntExtCampaignInfo(pageName[0]);
    window.digitalData.campaign = {
      internal: {
        campaignName: campaignData['intName'],
        campaignValue: campaignData['intVal']
      },
      external: {
        campaignName: campaignData['extName'],
        campaignValue: campaignData['extVal']
      }
    };
  } else {
    var _campaignData = getCampaignInfo(allowableQueryString);
    window.digitalData.campaign = window.digitalData.campaign || {};
    window.digitalData.campaign = {
      internal: {
        campaignName: _campaignData[0],
        campaignValue: _campaignData[1]
      }
    };
  }
};

/**
 * Processes a campaign object and updates the `window.digitalData.campaign` object with the extracted query parameters and values.
 */
exports.getCampaignInfoV1 = getCampaignInfoV1;
var getCampaignInfoV2 = function getCampaignInfoV2(campaignObj) {
  Object.entries(campaignObj).forEach(function (_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
      key = _ref10[0],
      value = _ref10[1];
    if (key === 'internal' || key === 'external') {
      var paramValue = extractQueryParams(value);
      window.digitalData.campaign[key] = {
        campaignName: value[0],
        campaignValue: paramValue ? paramValue.split(':')[1] : 'na'
      };
    } else if (key === 'other') {
      var _paramValue = extractQueryParams(value, true);
      window.digitalData.campaign.otherParams = _paramValue ? _paramValue : '';
    } else if (value.length) {
      value.forEach(function (el) {
        var paramValue = extractQueryParams([el]);
        window.digitalData.campaign[el] = paramValue ? paramValue.split(':')[1] : '';
      });
    }
  });
};

/**
 * Extracts query parameters from the current URL based on inclusion or exclusion rules.
 */
exports.getCampaignInfoV2 = getCampaignInfoV2;
var extractQueryParams = function extractQueryParams() {
  var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var excludeParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);
  var keyValuePairs = [];

  // eslint-disable-next-line no-unused-vars
  var _iterator = _createForOfIteratorHelper(params.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      var shouldInclude = excludeParams ? !queryParams.includes(key) // Exclude certain params
      : queryParams.length === 0 || queryParams.includes(key); // Include all or only specific params

      if (shouldInclude && value) {
        keyValuePairs.push("".concat(key, ":").concat(value));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return keyValuePairs.join('|');
};

/**
 * based on white list parameters return campaignName and campaignValue
 * @param {Object} allowableQueryString are whitelist parameters
 * @return {Object} return collections of campaignName and campaignValue
 * @example
 * getCampaignInfo(['subChanCode', 'camp_id', 'promoCode'])
 */
exports.extractQueryParams = extractQueryParams;
var getCampaignInfo = function getCampaignInfo(allowableQueryString) {
  if (!allowableQueryString.length) return '';
  var total = allowableQueryString.length;
  var campaignName = '';
  var campaignValue = '';
  for (var i = 0; i < total; i++) {
    var cookieValue = getCookie(allowableQueryString[i]);
    var localStorageValue = getLocalStorageWithExpiry(allowableQueryString[i]);
    if (cookieValue || localStorageValue) {
      if (campaignName) {
        campaignName += ':';
        campaignValue += ':';
      }
      campaignName += allowableQueryString[i];
      campaignValue += cookieValue || localStorageValue;
    }
  }
  if (!campaignName) campaignName = 'na';
  if (!campaignValue) campaignValue = 'na';
  return [campaignName, campaignValue];
};

/**
 * Extracts a context string from a DOM element by checking multiple attributes
 * and properties in a prioritized order: `data-context`, `title`, `innerText`,
 * `textContent`, and `aria-label`. Defaults to an empty string if no value is found.
 *
 * @param {Element} closest - The DOM element from which to extract the context.
 * @returns {string} The extracted context, trimmed of leading and trailing whitespace.
 */
exports.getCampaignInfo = getCampaignInfo;
var getCtaContext = function getCtaContext(closest) {
  var _ref11, _ref12, _ref13, _ref14, _closest$getAttribute2;
  var context = (_ref11 = (_ref12 = (_ref13 = (_ref14 = (_closest$getAttribute2 = closest.getAttribute('data-context')) !== null && _closest$getAttribute2 !== void 0 ? _closest$getAttribute2 : closest.getAttribute('title')) !== null && _ref14 !== void 0 ? _ref14 : closest.innerText) !== null && _ref13 !== void 0 ? _ref13 : closest.textContent) !== null && _ref12 !== void 0 ? _ref12 : closest.getAttribute('aria-label')) !== null && _ref11 !== void 0 ? _ref11 : '';
  return String(context).trim();
};

/**
 * getQueryParam method is created because "new URLSearchParams()"" not support in IOS
 * search specific param from the queryString, if found it return value, else return empty
 * @example
 * getQueryParam('subChanCode=2023&referId=xyz&pid=123', 'referId')
 */
exports.getCtaContext = getCtaContext;
var getQueryParam = function getQueryParam(queryString, paramName) {
  // Split the query string into an array of key-value pairs
  var queryParamsList = queryString.split('&');
  var paramValue = '';

  // eslint-disable-next-line no-unused-vars
  var _iterator2 = _createForOfIteratorHelper(queryParamsList),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var param = _step2.value;
      var _param$split = param.split('='),
        _param$split2 = _slicedToArray(_param$split, 2),
        key = _param$split2[0],
        value = _param$split2[1];
      if (key === paramName) {
        //it's case sensitive
        paramValue = value;
        break; // No need to continue once 'referId' is found
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return paramValue;
};

/**
 * Retrieves the heading text of the closest accordion element for a given element.
 *
 * @param {HTMLElement} element - The element for which to find the closest accordion heading.
 * @returns {string} The heading text of the closest accordion, followed by a colon if found; otherwise, an empty string.
 */
exports.getQueryParam = getQueryParam;
var getAccordionHeading = function getAccordionHeading(element) {
  var _accordionElement$que;
  if (!element) return '';
  var accordionElement = element.closest('.sc-accordion, .c-plus-minus-accordion___item');
  if (!accordionElement) return '';
  var headingElement = (_accordionElement$que = accordionElement.querySelector('.sc-heading')) !== null && _accordionElement$que !== void 0 ? _accordionElement$que : accordionElement.querySelector('.accordion-header label');
  if (!headingElement) return '';
  var headingText = trim(headingElement.innerText);
  return headingText ? "".concat(headingText, ":") : '';
};

/**
 * Handles the scroll event and shows or hides the persistent bar based on the scroll position.
 */
exports.getAccordionHeading = getAccordionHeading;
var handlePersistentBarScroll = function handlePersistentBarScroll() {
  var _ref15, _ref16, _window$scrollY, _ref17, _window$innerWidth;
  var persistentBar = document.querySelector('.sc-persistent-bar');
  if (!persistentBar) return;
  var bannerSdk = document.querySelector('#onetrust-banner-sdk');
  if (bannerSdk && bannerSdk.style && bannerSdk.style.display !== 'none') {
    //Don't show persistent bar if oneTrust cookie banner exist
    return;
  }
  var scrollPosition = (_ref15 = (_ref16 = (_window$scrollY = window.scrollY) !== null && _window$scrollY !== void 0 ? _window$scrollY : document.documentElement.scrollTop) !== null && _ref16 !== void 0 ? _ref16 : document.body.scrollTop) !== null && _ref15 !== void 0 ? _ref15 : 0;
  var windowWidth = (_ref17 = (_window$innerWidth = window.innerWidth) !== null && _window$innerWidth !== void 0 ? _window$innerWidth : document.documentElement.clientWidth) !== null && _ref17 !== void 0 ? _ref17 : document.body.clientWidth;
  var scrollLimit = 600;
  var pBarTarget = document.querySelector('[data-persistent-bar-target]');
  if (pBarTarget) {
    var selectedElement = document.querySelector('.' + pBarTarget.getAttribute('data-persistent-bar-target'));
    if (selectedElement) {
      scrollLimit = getOuterHeight(selectedElement) + getPosition(selectedElement);
      if (windowWidth >= 768) {
        //Ignore menu height
        scrollLimit -= 70;
      }
    }
  }
  var pBarSkip = document.querySelector('[data-persistent-bar-skip]');
  var skipFromTop = 0;
  var skipHeight = 0;
  if (pBarSkip) {
    var _selectedElement = document.querySelector('.' + pBarSkip.getAttribute('data-persistent-bar-skip'));
    if (_selectedElement) {
      skipFromTop = getPosition(_selectedElement);
      skipHeight = getOuterHeight(_selectedElement);
      if (windowWidth >= 768) {
        //Ignore menu height
        skipFromTop -= 70;
      }
    }
  }
  var skipDevice = document.querySelector('[data-persistent-bar-skip-device]');
  if (skipDevice) {
    var skipAttr = skipDevice.getAttribute('data-persistent-bar-skip-device');
    var _isMobile = windowWidth < 768;
    if (skipAttr === 'mobile' && _isMobile || skipAttr !== 'mobile' && !_isMobile) {
      skipFromTop = 0;
      skipHeight = 0;
    }
  }
  var screenHeight = window.screen.height;
  screenHeight -= windowWidth < 768 ? 20 : 250;
  if (pBarSkip && scrollPosition + screenHeight >= skipFromTop && scrollPosition <= skipFromTop + skipHeight) {
    //Skip persistent bar for a certain position
    persistentBar.classList.remove('sc-persistent-bar--show');
    document.body.style.marginBottom = 0;
  } else if (scrollPosition > scrollLimit) {
    persistentBar.classList.add('sc-persistent-bar--show');
    var persistentBarHight = getOuterHeight(persistentBar);
    document.body.style.marginBottom = "".concat(persistentBarHight, "px");
  } else {
    persistentBar.classList.remove('sc-persistent-bar--show');
    document.body.style.marginBottom = 0;
  }
};

/**
 * Get the user agent of the current browser
 * @returns {{browserCodename: string, browserName: string, browserVersion: string, cookiesEnabled: boolean, browserLanguage: string, browserOnline: boolean, platform: string, userAgentHeader: string}}
 */
exports.handlePersistentBarScroll = handlePersistentBarScroll;
var getDeviceDetails = function getDeviceDetails() {
  var os = '';
  // eslint-disable-next-line compat/compat
  var nAgt = navigator.userAgent;
  var clientStrings = [{
    s: 'W 10',
    r: /(Windows 10.0|Windows NT 10.0)/
  }, {
    s: 'W 8.1',
    r: /(Windows 8.1|Windows NT 6.3)/
  }, {
    s: 'W 8',
    r: /(Windows 8|Windows NT 6.2)/
  }, {
    s: 'W 7',
    r: /(Windows 7|Windows NT 6.1)/
  }, {
    s: 'W Vista',
    r: /Windows NT 6.0/
  }, {
    s: 'W Server 2003',
    r: /Windows NT 5.2/
  }, {
    s: 'W XP',
    r: /(Windows NT 5.1|Windows XP)/
  }, {
    s: 'W 2000',
    r: /(Windows NT 5.0|Windows 2000)/
  }, {
    s: 'W ME',
    r: /(Win 9x 4.90|Windows ME)/
  }, {
    s: 'W 98',
    r: /(Windows 98|Win98)/
  }, {
    s: 'W 95',
    r: /(Windows 95|Win95|Windows_95)/
  }, {
    s: 'W NT 4.0',
    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
  }, {
    s: 'W CE',
    r: /Windows CE/
  }, {
    s: 'W 3.11',
    r: /Win16/
  }, {
    s: 'Android',
    r: /Android/
  }, {
    s: 'Open BSD',
    r: /OpenBSD/
  }, {
    s: 'Sun OS',
    r: /SunOS/
  }, {
    s: 'L',
    r: /(Linux|X11)/
  }, {
    s: 'iOS',
    r: /(iPhone|iPad|iPod)/
  }, {
    s: 'Mac OS X',
    r: /Mac OS X/
  }, {
    s: 'Mac OS',
    r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
  }, {
    s: 'QNX',
    r: /QNX/
  }, {
    s: 'U',
    r: /UNIX/
  }, {
    s: 'BeOS',
    r: /BeOS/
  }, {
    s: 'OS/2',
    r: /OS\/2/
  }, {
    s: 'Search Bot',
    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
  }];
  for (var id in clientStrings) {
    var cs = clientStrings[id];
    if (cs.r.test(nAgt)) {
      os = cs.s;
      break;
    }
  }
  var osVersion = '';
  if (/Windows/.test(os)) {
    osVersion = /Windows (.*)/.exec(os)[1];
    os = 'Windows';
  }
  switch (os) {
    case 'Mac OS X':
      // eslint-disable-next-line no-case-declarations
      var macMatch = /Mac OS X (10|11[._\d]+)/.exec(nAgt);
      osVersion = macMatch ? macMatch[1] : 'Unknown';
      break;
    case 'Android':
      // eslint-disable-next-line no-case-declarations
      var androidMatch = /Android ([._\d]+)/.exec(nAgt);
      osVersion = androidMatch ? androidMatch[1] : 'Unknown';
      break;
    case 'iOS':
      // eslint-disable-next-line no-case-declarations
      var iOSMatch = /OS (\d+)_(\d+)_?(\d+)?/.exec(nAgt);
      osVersion = iOSMatch ? iOSMatch[1] + '.' + iOSMatch[2] + '.' + (iOSMatch[3] || 0) : 'Unknown';
      break;
  }
  var deviceInfo = 'd';
  if (/Mobi/.test(navigator.userAgent)) {
    deviceInfo = 'm';
  }
  var screenSize = '',
    width = 0,
    height = 0;
  if (screen.width) {
    width = screen.width ? screen.width : '';
    height = screen.height ? screen.height : '';
    screenSize += '' + width + ' x ' + height;
  }

  /* eslint-disable compat/compat */
  return {
    browserCodename: navigator.appCodeName,
    browserName: navigator.appName,
    browserVersion: navigator.appVersion,
    cookiesEnabled: navigator.cookieEnabled,
    browserLanguage: navigator.language,
    browserOnline: navigator.onLine,
    platform: navigator.platform,
    userAgentHeader: navigator.userAgent,
    agentHeader: navigator.getAgent,
    deviceInfo: deviceInfo,
    screenSize: screenSize,
    os: os,
    osVersion: osVersion
  };
  /* eslint-enable compat/compat */
};
exports.getDeviceDetails = getDeviceDetails;
var browserDetect = function browserDetect() {
  var browser = {
    name: '',
    version: '',
    versionSearchString: '',
    dataBrowser: [{
      string: navigator.userAgent,
      subString: 'Edge',
      identity: 'MS Edge'
    }, {
      string: navigator.userAgent,
      subString: 'Edg',
      identity: 'Edge'
    }, {
      string: navigator.userAgent,
      subString: 'MSIE',
      identity: 'Explorer'
    }, {
      string: navigator.userAgent,
      subString: 'Trident',
      identity: 'Explorer'
    }, {
      string: navigator.userAgent,
      subString: 'Firefox',
      identity: 'Firefox'
    }, {
      string: navigator.userAgent,
      subString: 'Opera',
      identity: 'Opera'
    }, {
      string: navigator.userAgent,
      subString: 'OPR',
      identity: 'Opera'
    }, {
      string: navigator.userAgent,
      subString: 'Chrome',
      identity: 'Chrome'
    }, {
      string: navigator.userAgent,
      subString: 'Safari',
      identity: 'Safari'
    }],
    init: function init() {
      this.name = this.searchString(this.dataBrowser) || 'Other';
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'Unknown';
    },
    searchString: function searchString(data) {
      for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string;
        var subString = data[i].subString;
        this.versionSearchString = subString;
        if (dataString.includes(subString)) {
          return data[i].identity;
        }
      }
      return null;
    },
    searchVersion: function searchVersion(dataString) {
      if (!this.versionSearchString) return null;
      var index = dataString.indexOf(this.versionSearchString);
      if (index === -1) {
        return null;
      }
      var rvIndex = dataString.indexOf('rv:');
      if (this.versionSearchString === 'Trident' && rvIndex !== -1) {
        return parseFloat(dataString.substring(rvIndex + 3));
      } else {
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
      }
    }
  };
  browser.init();
  return browser;
};

/**
 * get total number of days in this month
 */
exports.browserDetect = browserDetect;
var daysInThisMonth = function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

/**
 * Handles the transformation and assignment of product-related data
 * into the `window.digitalData.products` array.
 */
exports.daysInThisMonth = daysInThisMonth;
var handleProductsObj = function handleProductsObj() {
  var _window$digitalData$p;
  var pageName = window.digitalData.page.pageInfo.pageName.split(':');
  window.digitalData.products = window.digitalData.products || [];
  window.digitalData.products = [{
    productID: (_window$digitalData$p = window.digitalData.page.productInfo) !== null && _window$digitalData$p !== void 0 && _window$digitalData$p.productId ? window.digitalData.page.productInfo.productId.toLowerCase().trim().replace(/\s+/g, '-') : '',
    productName: pageName[6].toLowerCase().trim().replace(/\s+/g, '-'),
    subProduct1: window.digitalData.page.category.primaryCategory.toLowerCase().trim().replace(/\s+/g, '-'),
    subProduct2: window.digitalData.page.category.subCategory1.toLowerCase().trim().replace(/\s+/g, '-')
  }];
};
exports.handleProductsObj = handleProductsObj;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJuaXRyby9zcmMvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1qb3VybmV5L3NjLXR1bHUtY2FtcGFpZ24vc2MtdHVsdS1jYW1wYWlnbi5qcyIsIm5pdHJvL3NyYy9qcy9zYy1jb21tb24tbWV0aG9kcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUEsZ0JBQUEsR0FBQSxPQUFBO0FBTXVDLFNBQUEsUUFBQSxHQUFBLHNDQUFBLE9BQUEsd0JBQUEsTUFBQSx1QkFBQSxNQUFBLENBQUEsUUFBQSxhQUFBLEdBQUEsa0JBQUEsR0FBQSxnQkFBQSxHQUFBLFdBQUEsR0FBQSx5QkFBQSxNQUFBLElBQUEsR0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBLElBQUEsR0FBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLHFCQUFBLEdBQUEsS0FBQSxPQUFBLENBQUEsR0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLGNBQUEsUUFBQSxFQUFBLFVBQUEsTUFBQSxvQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLEVBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsY0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxxQkFBQSxFQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsSUFBQSxtQkFBQSxJQUFBLFNBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLGdCQUFBLFNBQUEsTUFBQSxVQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLElBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxJQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLGVBQUEsZ0JBQUEsSUFBQSxFQUFBLENBQUEsTUFBQSxVQUFBLEVBQUEsQ0FBQSxNQUFBLG9CQUFBLE1BQUEsUUFBQSxHQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsTUFBQSxTQUFBLENBQUEscUJBQUEsQ0FBQSxzQkFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsbUJBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSwrREFBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGtCQUFBLEdBQUEsRUFBQSxHQUFBLFFBQUEsR0FBQSxZQUFBLEdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsTUFBQSxJQUFBLE9BQUEsS0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQTtBQUFBLFNBQUEsb0JBQUEsa0JBTHZDLHFKQUFBLG1CQUFBLFlBQUEsb0JBQUEsV0FBQSxPQUFBLFNBQUEsT0FBQSxPQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxFQUFBLE1BQUEsR0FBQSxFQUFBLENBQUEsY0FBQSxFQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxjQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsSUFBQSxDQUFBLEtBQUEsS0FBQSxPQUFBLHdCQUFBLE1BQUEsR0FBQSxNQUFBLE9BQUEsY0FBQSxHQUFBLE9BQUEsQ0FBQSxRQUFBLGtCQUFBLG1CQUFBLEdBQUEsT0FBQSxDQUFBLGFBQUEsdUJBQUEsaUJBQUEsR0FBQSxPQUFBLENBQUEsV0FBQSw4QkFBQSxPQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsTUFBQSxZQUFBLE1BQUEsUUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsTUFBQSxtQkFBQSxHQUFBLElBQUEsTUFBQSxZQUFBLE9BQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxLQUFBLGdCQUFBLEtBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsV0FBQSxRQUFBLGNBQUEsR0FBQSxPQUFBLElBQUEsT0FBQSxDQUFBLFNBQUEsWUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLFNBQUEsRUFBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsU0FBQSxHQUFBLE9BQUEsT0FBQSxPQUFBLENBQUEsV0FBQSxnQkFBQSxjQUFBLENBQUEsU0FBQSxlQUFBLEtBQUEsRUFBQSxnQkFBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxNQUFBLFNBQUEsYUFBQSxTQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxtQkFBQSxJQUFBLFlBQUEsR0FBQSxFQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsY0FBQSxHQUFBLGFBQUEsSUFBQSxXQUFBLEdBQUEsRUFBQSxHQUFBLFFBQUEsT0FBQSxDQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsZ0JBQUEsZ0JBQUEsVUFBQSxjQUFBLGtCQUFBLGNBQUEsMkJBQUEsU0FBQSxpQkFBQSxPQUFBLE1BQUEsQ0FBQSxpQkFBQSxFQUFBLGNBQUEscUNBQUEsUUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEVBQUEsdUJBQUEsR0FBQSxRQUFBLElBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxNQUFBLFFBQUEsdUJBQUEsSUFBQSx1QkFBQSxLQUFBLEVBQUEsSUFBQSxNQUFBLENBQUEsSUFBQSxDQUFBLHVCQUFBLEVBQUEsY0FBQSxNQUFBLGlCQUFBLEdBQUEsdUJBQUEsT0FBQSxFQUFBLEdBQUEsMEJBQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLGlCQUFBLFlBQUEsc0JBQUEsU0FBQSxnQ0FBQSxPQUFBLFdBQUEsTUFBQSxJQUFBLE1BQUEsQ0FBQSxTQUFBLEVBQUEsTUFBQSxZQUFBLEdBQUEsZ0JBQUEsT0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLHNCQUFBLGNBQUEsU0FBQSxFQUFBLFdBQUEsYUFBQSxPQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsUUFBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLEdBQUEsU0FBQSxFQUFBLEdBQUEsbUJBQUEsTUFBQSxDQUFBLElBQUEsUUFBQSxNQUFBLEdBQUEsTUFBQSxDQUFBLEdBQUEsRUFBQSxLQUFBLEdBQUEsTUFBQSxDQUFBLEtBQUEsU0FBQSxLQUFBLGdCQUFBLE9BQUEsQ0FBQSxLQUFBLEtBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLGVBQUEsV0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsV0FBQSxLQUFBLElBQUEsTUFBQSxTQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxnQkFBQSxHQUFBLElBQUEsTUFBQSxVQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxRQUFBLFdBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsV0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsR0FBQSxTQUFBLEVBQUEsT0FBQSxDQUFBLE1BQUEsZ0JBQUEsS0FBQSxXQUFBLE1BQUEsVUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsU0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsU0FBQSxlQUFBLEVBQUEsY0FBQSxvQkFBQSxLQUFBLFdBQUEsTUFBQSxNQUFBLEVBQUEsR0FBQSxhQUFBLDJCQUFBLGVBQUEsV0FBQSxXQUFBLE9BQUEsRUFBQSxNQUFBLElBQUEsTUFBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsZ0JBQUEsZUFBQSxHQUFBLGVBQUEsR0FBQSxlQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLEVBQUEsMEJBQUEsSUFBQSwwQkFBQSxxQkFBQSxpQkFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsUUFBQSxLQUFBLHNDQUFBLE1BQUEsRUFBQSxHQUFBLHdCQUFBLEtBQUEsWUFBQSxLQUFBLHNEQUFBLEtBQUEsb0JBQUEsTUFBQSxRQUFBLEdBQUEsU0FBQSxVQUFBLFdBQUEsT0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLFVBQUEsUUFBQSxHQUFBLE9BQUEsQ0FBQSxRQUFBLE1BQUEsUUFBQSxRQUFBLGNBQUEsR0FBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQSxPQUFBLE9BQUEsY0FBQSxRQUFBLGNBQUEsS0FBQSxnQkFBQSxtQkFBQSxjQUFBLHFCQUFBLE9BQUEsQ0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsS0FBQSxHQUFBLE9BQUEsQ0FBQSxHQUFBLHNCQUFBLE9BQUEsQ0FBQSxNQUFBLDZCQUFBLEtBQUEsUUFBQSxLQUFBLGdCQUFBLE9BQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUFBLGlCQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLENBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxHQUFBLEdBQUEsS0FBQSxvQkFBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxvQkFBQSxNQUFBLENBQUEsSUFBQSxRQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsSUFBQSxtQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLGdCQUFBLHFCQUFBLEtBQUEsRUFBQSxNQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLENBQUEsSUFBQSxrQkFBQSxNQUFBLENBQUEsSUFBQSxLQUFBLEtBQUEsZ0JBQUEsT0FBQSxDQUFBLE1BQUEsWUFBQSxPQUFBLENBQUEsR0FBQSxHQUFBLE1BQUEsQ0FBQSxHQUFBLG1CQUFBLG9CQUFBLFFBQUEsRUFBQSxPQUFBLFFBQUEsVUFBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLEVBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsVUFBQSxPQUFBLFNBQUEsS0FBQSxNQUFBLFNBQUEsT0FBQSxDQUFBLFFBQUEscUJBQUEsVUFBQSxJQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsTUFBQSxLQUFBLE9BQUEsQ0FBQSxNQUFBLGFBQUEsT0FBQSxDQUFBLEdBQUEsR0FBQSxTQUFBLEVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUEsT0FBQSxlQUFBLE9BQUEsQ0FBQSxNQUFBLGtCQUFBLFVBQUEsS0FBQSxPQUFBLENBQUEsTUFBQSxZQUFBLE9BQUEsQ0FBQSxHQUFBLE9BQUEsU0FBQSx1Q0FBQSxVQUFBLGlCQUFBLGdCQUFBLE1BQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxDQUFBLFFBQUEsRUFBQSxPQUFBLENBQUEsR0FBQSxtQkFBQSxNQUFBLENBQUEsSUFBQSxTQUFBLE9BQUEsQ0FBQSxNQUFBLFlBQUEsT0FBQSxDQUFBLEdBQUEsR0FBQSxNQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLFNBQUEsZ0JBQUEsTUFBQSxJQUFBLEdBQUEsTUFBQSxDQUFBLEdBQUEsU0FBQSxJQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLFVBQUEsSUFBQSxJQUFBLENBQUEsS0FBQSxFQUFBLE9BQUEsQ0FBQSxJQUFBLEdBQUEsUUFBQSxDQUFBLE9BQUEsZUFBQSxPQUFBLENBQUEsTUFBQSxLQUFBLE9BQUEsQ0FBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLEdBQUEsR0FBQSxTQUFBLEdBQUEsT0FBQSxDQUFBLFFBQUEsU0FBQSxnQkFBQSxJQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsTUFBQSxZQUFBLE9BQUEsQ0FBQSxHQUFBLE9BQUEsU0FBQSxzQ0FBQSxPQUFBLENBQUEsUUFBQSxTQUFBLGdCQUFBLGNBQUEsYUFBQSxJQUFBLFFBQUEsS0FBQSxLQUFBLE1BQUEsRUFBQSxJQUFBLFlBQUEsSUFBQSxLQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQUEsSUFBQSxXQUFBLElBQUEsS0FBQSxLQUFBLENBQUEsVUFBQSxHQUFBLElBQUEsS0FBQSxLQUFBLENBQUEsUUFBQSxHQUFBLElBQUEsV0FBQSxVQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsY0FBQSxjQUFBLEtBQUEsUUFBQSxNQUFBLEdBQUEsS0FBQSxDQUFBLFVBQUEsUUFBQSxNQUFBLENBQUEsSUFBQSxvQkFBQSxNQUFBLENBQUEsR0FBQSxFQUFBLEtBQUEsQ0FBQSxVQUFBLEdBQUEsTUFBQSxhQUFBLFFBQUEsV0FBQSxTQUFBLFVBQUEsTUFBQSxNQUFBLGFBQUEsV0FBQSxDQUFBLE9BQUEsQ0FBQSxZQUFBLGNBQUEsS0FBQSxpQkFBQSxPQUFBLFFBQUEsUUFBQSxRQUFBLFFBQUEsY0FBQSxHQUFBLFFBQUEsQ0FBQSxjQUFBLE9BQUEsY0FBQSxTQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsUUFBQSw0QkFBQSxRQUFBLENBQUEsSUFBQSxTQUFBLFFBQUEsT0FBQSxLQUFBLENBQUEsUUFBQSxDQUFBLE1BQUEsU0FBQSxDQUFBLE9BQUEsSUFBQSxZQUFBLEtBQUEsYUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLE1BQUEsT0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLFFBQUEsRUFBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxTQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsU0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxZQUFBLElBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxlQUFBLElBQUEsRUFBQSxVQUFBLGVBQUEsV0FBQSxhQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxpQkFBQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLGNBQUEsQ0FBQSxFQUFBLG1CQUFBLEtBQUEsRUFBQSwwQkFBQSxFQUFBLFlBQUEsU0FBQSxjQUFBLENBQUEsMEJBQUEsbUJBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSwwQkFBQSxFQUFBLGlCQUFBLHdCQUFBLE9BQUEsQ0FBQSxtQkFBQSxhQUFBLE1BQUEsUUFBQSxJQUFBLHdCQUFBLE1BQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxXQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsaUJBQUEsNkJBQUEsSUFBQSxDQUFBLFdBQUEsSUFBQSxJQUFBLENBQUEsSUFBQSxPQUFBLE9BQUEsQ0FBQSxJQUFBLGFBQUEsTUFBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsMEJBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxHQUFBLDBCQUFBLEVBQUEsTUFBQSxDQUFBLE1BQUEsRUFBQSxpQkFBQSx5QkFBQSxNQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxHQUFBLE1BQUEsS0FBQSxPQUFBLENBQUEsS0FBQSxhQUFBLEdBQUEsYUFBQSxPQUFBLEVBQUEsR0FBQSxPQUFBLHFCQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsRUFBQSxtQkFBQSxpQ0FBQSxPQUFBLENBQUEsYUFBQSxHQUFBLGFBQUEsRUFBQSxPQUFBLENBQUEsS0FBQSxhQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLFdBQUEsRUFBQSxXQUFBLGVBQUEsV0FBQSxLQUFBLFdBQUEsR0FBQSxPQUFBLE9BQUEsSUFBQSxPQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsV0FBQSxHQUFBLFdBQUEsVUFBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxPQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLE1BQUEsV0FBQSxNQUFBLENBQUEsSUFBQSxHQUFBLE1BQUEsQ0FBQSxLQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsV0FBQSxxQkFBQSxDQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsRUFBQSxFQUFBLGlCQUFBLGdCQUFBLE1BQUEsQ0FBQSxFQUFBLEVBQUEsY0FBQSxpQ0FBQSxNQUFBLENBQUEsRUFBQSw2REFBQSxPQUFBLENBQUEsSUFBQSxhQUFBLEdBQUEsUUFBQSxNQUFBLEdBQUEsTUFBQSxDQUFBLEdBQUEsR0FBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxNQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLFVBQUEsSUFBQSxDQUFBLE9BQUEsYUFBQSxLQUFBLFdBQUEsSUFBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsSUFBQSxDQUFBLEdBQUEsUUFBQSxHQUFBLElBQUEsTUFBQSxTQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsR0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxXQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxRQUFBLE9BQUEsQ0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLE9BQUEsQ0FBQSxTQUFBLEtBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLFdBQUEsTUFBQSxhQUFBLGFBQUEsSUFBQSxXQUFBLElBQUEsV0FBQSxJQUFBLFFBQUEsS0FBQSxHQUFBLFNBQUEsT0FBQSxJQUFBLFlBQUEsUUFBQSxjQUFBLE1BQUEsZ0JBQUEsR0FBQSxHQUFBLFNBQUEsT0FBQSxVQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsSUFBQSxhQUFBLFdBQUEsSUFBQSxrQkFBQSxJQUFBLENBQUEsTUFBQSxPQUFBLE1BQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxNQUFBLEtBQUEsRUFBQSxJQUFBLENBQUEsS0FBQSxjQUFBLElBQUEsSUFBQSxTQUFBLE1BQUEsSUFBQSxXQUFBLEtBQUEsU0FBQSxJQUFBLFdBQUEsVUFBQSxRQUFBLFVBQUEsSUFBQSxVQUFBLGtCQUFBLFVBQUEsQ0FBQSxJQUFBLFFBQUEsVUFBQSxDQUFBLEdBQUEsY0FBQSxJQUFBLEtBQUEsaUJBQUEsV0FBQSxrQkFBQSxTQUFBLGFBQUEsSUFBQSxRQUFBLFNBQUEsTUFBQSxPQUFBLGtCQUFBLE9BQUEsR0FBQSxFQUFBLE1BQUEsV0FBQSxNQUFBLENBQUEsSUFBQSxZQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQUEsU0FBQSxFQUFBLE9BQUEsQ0FBQSxJQUFBLEdBQUEsR0FBQSxFQUFBLE1BQUEsS0FBQSxPQUFBLENBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxHQUFBLEdBQUEsU0FBQSxLQUFBLE1BQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLEtBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxLQUFBLENBQUEsVUFBQSxpQkFBQSxLQUFBLENBQUEsTUFBQSxTQUFBLE1BQUEsYUFBQSxLQUFBLENBQUEsTUFBQSxTQUFBLElBQUEsUUFBQSxRQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLGVBQUEsVUFBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxxQkFBQSxRQUFBLElBQUEsVUFBQSxhQUFBLElBQUEsR0FBQSxLQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxnQkFBQSxJQUFBLEdBQUEsS0FBQSxDQUFBLFVBQUEsU0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLFVBQUEsY0FBQSxRQUFBLGFBQUEsSUFBQSxHQUFBLEtBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBLHFCQUFBLFVBQUEsWUFBQSxLQUFBLHFEQUFBLElBQUEsR0FBQSxLQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsVUFBQSxZQUFBLE1BQUEsV0FBQSxPQUFBLElBQUEsRUFBQSxHQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxLQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxLQUFBLENBQUEsTUFBQSxTQUFBLElBQUEsSUFBQSxNQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsd0JBQUEsSUFBQSxHQUFBLEtBQUEsQ0FBQSxVQUFBLFFBQUEsWUFBQSxHQUFBLEtBQUEsYUFBQSxZQUFBLGlCQUFBLElBQUEsbUJBQUEsSUFBQSxLQUFBLFlBQUEsQ0FBQSxNQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsSUFBQSxZQUFBLENBQUEsVUFBQSxLQUFBLFlBQUEsY0FBQSxNQUFBLEdBQUEsWUFBQSxHQUFBLFlBQUEsQ0FBQSxVQUFBLGNBQUEsTUFBQSxDQUFBLElBQUEsR0FBQSxJQUFBLEVBQUEsTUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEVBQUEsWUFBQSxTQUFBLE1BQUEsZ0JBQUEsSUFBQSxHQUFBLFlBQUEsQ0FBQSxVQUFBLEVBQUEsZ0JBQUEsU0FBQSxRQUFBLENBQUEsTUFBQSxNQUFBLFFBQUEsV0FBQSxTQUFBLE1BQUEsRUFBQSxRQUFBLG9CQUFBLE1BQUEsQ0FBQSxJQUFBLFFBQUEsTUFBQSxDQUFBLEdBQUEscUJBQUEsTUFBQSxDQUFBLElBQUEsbUJBQUEsTUFBQSxDQUFBLElBQUEsUUFBQSxJQUFBLEdBQUEsTUFBQSxDQUFBLEdBQUEsZ0JBQUEsTUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLFFBQUEsR0FBQSxHQUFBLE1BQUEsQ0FBQSxHQUFBLE9BQUEsTUFBQSxrQkFBQSxJQUFBLHlCQUFBLE1BQUEsQ0FBQSxJQUFBLElBQUEsUUFBQSxVQUFBLElBQUEsR0FBQSxRQUFBLEdBQUEsZ0JBQUEsS0FBQSxNQUFBLFdBQUEsT0FBQSxVQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxLQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxLQUFBLENBQUEsVUFBQSxLQUFBLFVBQUEsY0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxLQUFBLENBQUEsUUFBQSxHQUFBLGFBQUEsQ0FBQSxLQUFBLEdBQUEsZ0JBQUEsT0FBQSxLQUFBLFdBQUEsT0FBQSxNQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxLQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxLQUFBLENBQUEsTUFBQSxLQUFBLE1BQUEsUUFBQSxNQUFBLEdBQUEsS0FBQSxDQUFBLFVBQUEsa0JBQUEsTUFBQSxDQUFBLElBQUEsUUFBQSxNQUFBLEdBQUEsTUFBQSxDQUFBLEdBQUEsRUFBQSxhQUFBLENBQUEsS0FBQSxZQUFBLE1BQUEsZ0JBQUEsS0FBQSw4QkFBQSxhQUFBLFdBQUEsY0FBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLE9BQUEsZ0JBQUEsUUFBQSxLQUFBLFFBQUEsRUFBQSxNQUFBLENBQUEsUUFBQSxHQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsb0JBQUEsTUFBQSxVQUFBLEdBQUEsR0FBQSxTQUFBLEdBQUEsZ0JBQUEsT0FBQSxPQUFBO0FBQUEsU0FBQSxtQkFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLGNBQUEsSUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxPQUFBLEtBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxXQUFBLEtBQUEsSUFBQSxNQUFBLENBQUEsS0FBQSxpQkFBQSxJQUFBLENBQUEsSUFBQSxJQUFBLE9BQUEsQ0FBQSxLQUFBLFlBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxFQUFBLDZCQUFBLElBQUEsU0FBQSxJQUFBLEdBQUEsU0FBQSxhQUFBLE9BQUEsV0FBQSxPQUFBLEVBQUEsTUFBQSxRQUFBLEdBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLFlBQUEsTUFBQSxLQUFBLElBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxVQUFBLEtBQUEsY0FBQSxPQUFBLEdBQUEsSUFBQSxrQkFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLFdBQUEsR0FBQSxLQUFBLEtBQUEsQ0FBQSxTQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFB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LEVBQ0Q7TUFDRSxLQUFLLEVBQUU7SUFDVCxDQUFDLENBQ0Y7SUFDRCxVQUFVLEVBQUUsQ0FDVjtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUN6QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQVEsQ0FBQyxFQUMvQjtNQUFFLEtBQUssRUFBRTtJQUFRLENBQUMsQ0FDbkI7SUFDRCxlQUFlLEVBQUUsQ0FDZjtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUN4QjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUM1QjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM3QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRTtJQUFPLENBQUMsQ0FDbEI7SUFDRCxZQUFZLEVBQUUsQ0FDWjtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUN2QjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUMxQjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUMzQjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUM1QjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUM1QjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUM1QjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUM1QjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUM1QjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU0sQ0FBQyxFQUM1QjtNQUFFLEtBQUssRUFBRSxLQUFLO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM3QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxPQUFPO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUMvQjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQVEsQ0FBQyxFQUMvQjtNQUFFLEtBQUssRUFBRTtJQUFRLENBQUMsQ0FDbkI7SUFDRCxHQUFHLEVBQUUsQ0FDSDtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQUUsQ0FBQyxFQUNwQjtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQUUsQ0FBQyxFQUNwQjtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQUUsQ0FBQyxFQUNwQjtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQUcsQ0FBQyxFQUNyQjtNQUFFLEtBQUssRUFBRSxFQUFFO01BQUUsR0FBRyxFQUFFO0lBQUcsQ0FBQyxFQUN0QjtNQUFFLEtBQUssRUFBRSxFQUFFO01BQUUsR0FBRyxFQUFFO0lBQUcsQ0FBQyxFQUN0QjtNQUFFLEtBQUssRUFBRSxFQUFFO01BQUUsR0FBRyxFQUFFO0lBQUcsQ0FBQyxFQUN0QjtNQUFFLEtBQUssRUFBRTtJQUFHLENBQUMsQ0FDZDtJQUNELFlBQVksRUFBRSxDQUNaO01BQ0UsS0FBSyxFQUFFLENBQUM7TUFDUixHQUFHLEVBQUU7SUFDUCxDQUFDLEVBQ0Q7TUFDRSxLQUFLLEVBQUUsTUFBTTtNQUNiLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFLEtBQUssRUFBRSxNQUFNO01BQ2IsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0UsS0FBSyxFQUFFLE1BQU07TUFDYixHQUFHLEVBQUU7SUFDUCxDQUFDLEVBQ0Q7TUFDRSxLQUFLLEVBQUUsTUFBTTtNQUNiLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFLEtBQUssRUFBRSxNQUFNO01BQ2IsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0UsS0FBSyxFQUFFLE1BQU07TUFDYixHQUFHLEVBQUU7SUFDUCxDQUFDLEVBQ0Q7TUFDRSxLQUFLLEVBQUUsTUFBTTtNQUNiLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFLEtBQUssRUFBRSxNQUFNO01BQ2IsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0UsS0FBSyxFQUFFLE9BQU87TUFDZCxHQUFHLEVBQUU7SUFDUCxDQUFDLEVBQ0Q7TUFDRSxLQUFLLEVBQUUsT0FBTztNQUNkLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFLEtBQUssRUFBRSxPQUFPO01BQ2QsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0UsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUNGO0lBQ0QsR0FBRyxFQUFFLENBQ0g7TUFBRSxLQUFLLEVBQUUsQ0FBQztNQUFFLEdBQUcsRUFBRTtJQUFHLENBQUMsRUFDckI7TUFBRSxLQUFLLEVBQUUsRUFBRTtNQUFFLEdBQUcsRUFBRTtJQUFHLENBQUMsRUFDdEI7TUFBRSxLQUFLLEVBQUUsRUFBRTtNQUFFLEdBQUcsRUFBRTtJQUFHLENBQUMsRUFDdEI7TUFBRSxLQUFLLEVBQUUsRUFBRTtNQUFFLEdBQUcsRUFBRTtJQUFHLENBQUMsRUFDdEI7TUFBRSxLQUFLLEVBQUUsRUFBRTtNQUFFLEdBQUcsRUFBRTtJQUFHLENBQUMsRUFDdEI7TUFBRSxLQUFLLEVBQUUsRUFBRTtNQUFFLEdBQUcsRUFBRTtJQUFHLENBQUMsRUFDdEI7TUFBRSxLQUFLLEVBQUUsRUFBRTtNQUFFLEdBQUcsRUFBRTtJQUFHLENBQUMsRUFDdEI7TUFBRSxLQUFLLEVBQUU7SUFBRyxDQUFDLENBQ2Q7SUFDRCxpQkFBaUIsRUFBRSxDQUNqQjtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUN6QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQU8sQ0FBQyxFQUM5QjtNQUFFLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBRyxFQUFFO0lBQVEsQ0FBQyxFQUMvQjtNQUFFLEtBQUssRUFBRSxPQUFPO01BQUUsR0FBRyxFQUFFO0lBQVEsQ0FBQyxFQUNoQztNQUFFLEtBQUssRUFBRSxPQUFPO01BQUUsR0FBRyxFQUFFO0lBQVEsQ0FBQyxFQUNoQztNQUFFLEtBQUssRUFBRSxPQUFPO01BQUUsR0FBRyxFQUFFO0lBQVEsQ0FBQyxFQUNoQztNQUFFLEtBQUssRUFBRTtJQUFRLENBQUMsQ0FDbkI7SUFDRCxVQUFVLEVBQUUsQ0FDVjtNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUN2QjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUMxQjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUMxQjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUMxQjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUMxQjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUMxQjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUMxQjtNQUFFLEtBQUssRUFBRSxJQUFJO01BQUUsR0FBRyxFQUFFO0lBQUssQ0FBQyxFQUMxQjtNQUFFLEtBQUssRUFBRSxJQUFJ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QUcsQ0FBQztJQUN2QixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FDMUQsV0FBVyxDQUFDLENBQUMsQ0FDYixJQUFJLENBQUMsQ0FBQyxDQUNOLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQ3ZCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUN2RCxXQUFXLENBQUMsQ0FBQyxDQUNiLElBQUksQ0FBQyxDQUFDLENBQ04sT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHO0VBQ3hCLENBQUMsQ0FDRjtBQUNILENBQUM7QUFBQyxPQUFBLENBQUEsaUJBQUEsR0FBQSxpQkFBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7XG4gIGdldFF1ZXJ5UGFyYW0sXG4gIGdldFBhZ2VDb250ZXh0LFxuICBjb252ZXJ0TnVtYmVycyxcbiAgaGFuZGxlQW5hbHl0aWNzQ1RBLFxuICB0cmltXG59IGZyb20gJy4uLy4uLy4uL2pzL3NjLWNvbW1vbi1tZXRob2RzJztcbmNsYXNzIFNjVHVsdUNhbXBhaWduIHtcbiAgaW5pdCgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LnBhcmVudE1vZGFsSWQgPSAnJztcbiAgICB0aGF0LlNjVHVsdUNhbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2MtdHVsdS1jYW1wJyk7XG5cbiAgICAvLyBHZXQgYWxsIHRoZSB0YWJzIGluIHRoaXMgdGFiIGdyb3VwXG4gICAgdGhhdC50YWJzID0gdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYi1idG4taWRdJyk7XG4gICAgLy8gR2V0IGFsbCB0aGUgY29udGVudCBpdGVtcyBpbiB0aGlzIHRhYiBncm91cFxuICAgIHRoYXQuY29udGVudHMgPSB0aGF0LlNjVHVsdUNhbXAucXVlcnlTZWxlY3RvckFsbCgnLnNjLXR1bHUtY2FtcC10YWJfX2NvbnRlbnQtaXRlbScpO1xuXG4gICAgdGhhdC50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYi1idG4taWQnKTtcbiAgICAgICAgdGhhdC5oYW5kbGVUYWJzKHRhcmdldElkKTtcblxuICAgICAgICBjb25zdCBjbG9zZXN0QnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgICAgICBpZiAoY2xvc2VzdEJ0bikge1xuICAgICAgICAgIGhhbmRsZUFuYWx5dGljc0NUQShldmVudCwgY2xvc2VzdEJ0biwge1xuICAgICAgICAgICAgY3RhVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICBjdGFQb3NpdGlvbjogJ3RvcCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsb3Nlc3RQZHQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNjLXR1bHUtY2FtcC1wcm9kdWN0LWNhcmRfX21haW4nKTtcbiAgICAgICAgaWYgKGNsb3Nlc3RQZHQpIHtcbiAgICAgICAgICBoYW5kbGVBbmFseXRpY3NDVEEoZXZlbnQsICcnLCB7XG4gICAgICAgICAgICBjb250ZXh0OiB0cmltKGNsb3Nlc3RQZHQucXVlcnlTZWxlY3RvcignLnNjLXR1bHUtY2FtcC1wcm9kdWN0LWNhcmRfX3RpdGxlJykuaW5uZXJUZXh0KSxcbiAgICAgICAgICAgIGN0YVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgeExpbmtSZWdpb246ICdtaWRkbGUnLFxuICAgICAgICAgICAgY3RhUG9zaXRpb246ICdtaWRkbGUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhhdC5nZXRTdGFydGVkTW9kYWwoKTtcbiAgICB0aGF0LmFzaWFNaWxlc1llc01vZGFsKCk7XG4gICAgdGhhdC5oYW5kbGVNaXNzaW9uVHJhY2tpbmcoKTtcbiAgICB0aGF0LmhhbmRsZU1vZGFsKCk7XG4gICAgdGhhdC5oYW5kbGVRdWVzdGlvbm5haXJlKCk7XG4gICAgdGhhdC5vYmplY3RMaXN0KCk7XG4gICAgdGhhdC5oYW5kbGVGYXFBbmFseXRpY3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGFuZCBjYWNoZXMgdGhlIHRvcG9sb2d5IGRhdGEgZm9yIHdvcmxkIGNvbnRpbmVudHMuXG4gICAqIEVuc3VyZXMgdGhhdCB0aGUgdG9wb2xvZ3kgZGF0YSBpcyBsb2FkZWQgb25seSBvbmNlLlxuICAgKi9cbiAgYXN5bmMgZmV0Y2hBcGlEYXRhKHVybCkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VSTCBpcyByZXF1aXJlZCB0byBmZXRjaCBkYXRhLicpO1xuICAgIH1cblxuICAgIC8vIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfToke3dpbmRvdy5sb2NhdGlvbi5wb3J0fS8ke3VybH1gO1xuICAgIC8vIGNvbnNvbGUubG9nKFwidXJsXCIsIHVybCk7XG5cbiAgICB1cmwgPSB1cmwuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAnZGl2ZXJzaWZ5X3BhZ2UuanNvbic6IHtcbiAgICAgICAgRmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgVmFsdWU6ICc1MDAwJyxcbiAgICAgICAgICAgIE5hbWU6ICdDb25zb2xpZGF0ZWRBbW91bnQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJ2xldmVsdXBfcGFnZS5qc29uJzoge1xuICAgICAgICBGaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBWYWx1ZTogJzUwJyxcbiAgICAgICAgICAgIE5hbWU6ICdDb25zb2xpZGF0ZWRBbW91bnQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJ3RyYWRldXBfcGFnZS5qc29uJzoge1xuICAgICAgICBGaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBWYWx1ZTogJzMwMCcsXG4gICAgICAgICAgICBOYW1lOiAnQ29uc29saWRhdGVkQW1vdW50J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICdmeC5qc29uJzoge1xuICAgICAgICBGaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBWYWx1ZTogJ04nLFxuICAgICAgICAgICAgTmFtZTogJ0ZpcnN0VHJhZGUnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJ29ubGluZS1lcXVpdGllcy5qc29uJzoge1xuICAgICAgICBGaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBWYWx1ZTogJ1knLFxuICAgICAgICAgICAgTmFtZTogJ09wZW5BY2NvdW50J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVmFsdWU6ICdOJyxcbiAgICAgICAgICAgIE5hbWU6ICdGaXJzdFRyYWRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVmFsdWU6ICdOJyxcbiAgICAgICAgICAgIE5hbWU6ICdDb21wbGV0aW9uQm9udXMnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJ3VuaXQtdGVzdC5qc29uJzoge1xuICAgICAgICBGaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBWYWx1ZTogJ1knLFxuICAgICAgICAgICAgTmFtZTogJ09wZW5BY2NvdW50J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVmFsdWU6ICdZJyxcbiAgICAgICAgICAgIE5hbWU6ICdGaXJzdFRyYWRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVmFsdWU6ICdZJyxcbiAgICAgICAgICAgIE5hbWU6ICdDb21wbGV0aW9uQm9udXMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBWYWx1ZTogJycsXG4gICAgICAgICAgICBOYW1lOiAnRmluaXNoIGFsbCBhY3Rpb25zIHRvIGVhcm4gYm9udXMgbWlsZXMnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJ3RyYWRldXAuanNvbic6IHtcbiAgICAgICAgRmllbGRzOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBWYWx1ZTogJzEwMCcsXG4gICAgICAgICAgICAgIE5hbWU6ICdSZXdhcmRWYWx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFZhbHVlOiAnNicsXG4gICAgICAgICAgICAgIE5hbWU6ICdSZXdhcmRDb3VudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFZhbHVlOiAnMjAwJyxcbiAgICAgICAgICAgICAgTmFtZTogJ0NvbnNvbGlkYXRlZEFtb3VudCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVmFsdWU6ICcyMDAnLFxuICAgICAgICAgICAgICBOYW1lOiAnUmV3YXJkVmFsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBWYWx1ZTogJzQnLFxuICAgICAgICAgICAgICBOYW1lOiAnUmV3YXJkQ291bnQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBWYWx1ZTogJzgwMCcsXG4gICAgICAgICAgICAgIE5hbWU6ICdDb25zb2xpZGF0ZWRBbW91bnQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFZhbHVlOiAnMzAwJyxcbiAgICAgICAgICAgICAgTmFtZTogJ1Jld2FyZFZhbHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVmFsdWU6ICcwJyxcbiAgICAgICAgICAgICAgTmFtZTogJ1Jld2FyZENvdW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVmFsdWU6ICcxODAwJyxcbiAgICAgICAgICAgICAgTmFtZTogJ0NvbnNvbGlkYXRlZEFtb3VudCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAnbGV2ZWx1cC5qc29uJzoge1xuICAgICAgICBGaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBWYWx1ZTogJ1JFMTAxJyxcbiAgICAgICAgICAgIEFydGljbGVSZWFkRmxhZzogJ1knLFxuICAgICAgICAgICAgQXJ0aWNsZUNvbnNvbGlkYXRlZEFtb3VudDogJzEwMCcsXG4gICAgICAgICAgICBRdWl6RmxhZzogJ1knLFxuICAgICAgICAgICAgUXVpekNvbnNvbGlkYXRlZEFtb3VudDogJzEwMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFZhbHVlOiAnUkUxMDInLFxuICAgICAgICAgICAgQXJ0aWNsZVJlYWRGbGFnOiAnWScsXG4gICAgICAgICAgICBBcnRpY2xlQ29uc29saWRhdGVkQW1vdW50OiAnMjAwJyxcbiAgICAgICAgICAgIFF1aXpGbGFnOiAnTicsXG4gICAgICAgICAgICBRdWl6Q29uc29saWRhdGVkQW1vdW50OiAnMTMwMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFZhbHVlOiAnUkUxMDMnLFxuICAgICAgICAgICAgQXJ0aWNsZVJlYWRGbGFnOiAnTicsXG4gICAgICAgICAgICBBcnRpY2xlQ29uc29saWRhdGVkQW1vdW50OiAnMjAwJyxcbiAgICAgICAgICAgIFF1aXpGbGFnOiAnJyxcbiAgICAgICAgICAgIFF1aXpDb25zb2xpZGF0ZWRBbW91bnQ6ICcxMzAwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVmFsdWU6ICdSRTEwNCcsXG4gICAgICAgICAgICBBcnRpY2xlUmVhZEZsYWc6ICdZJyxcbiAgICAgICAgICAgIEFydGljbGVDb25zb2xpZGF0ZWRBbW91bnQ6ICczMDAnLFxuICAgICAgICAgICAgUXVpekZsYWc6ICdOJyxcbiAgICAgICAgICAgIFF1aXpDb25zb2xpZGF0ZWRBbW91bnQ6ICc4MDAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBWYWx1ZTogJ1JFMTA1JyxcbiAgICAgICAgICAgIEFydGljbGVSZWFkRmxhZzogJycsXG4gICAgICAgICAgICBBcnRpY2xlQ29uc29saWRhdGVkQW1vdW50OiAnMjAwJyxcbiAgICAgICAgICAgIFF1aXpGbGFnOiAnJyxcbiAgICAgICAgICAgIFF1aXpDb25zb2xpZGF0ZWRBbW91bnQ6ICc1MDAnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxhc3RJbmRleCA9IHVybFt1cmwubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIGRhdGFbbGFzdEluZGV4XTtcblxuICAgIC8vIHRyeSB7XG4gICAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAvLyAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgIC8vICAgICAgIGBGYWlsZWQgdG8gZmV0Y2ggZGF0YTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gXG4gICAgLy8gICAgICk7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJGZXRjaCBBUEkgRXJyb3I6XCIsIGVycm9yKTtcbiAgICAvLyAgIHRocm93IGVycm9yO1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldFN0YXJ0ZWRNb2RhbCgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IGdldFF1ZXJ5UGFyYW0oZ2V0UGFnZUNvbnRleHQoKS5xdWVyeVN0cmluZywgJ3BhcmFtJyk7XG4gICAgaWYgKHF1ZXJ5U3RyaW5nID09PSAneWVzJykge1xuICAgICAgdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3IoJy5zYy1nZXQtc3RhcnRlZC15ZXMnKS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuU2NUdWx1Q2FtcC5xdWVyeVNlbGVjdG9yKCcuc2MtZ2V0LXN0YXJ0ZWQtbm8nKS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5jbGFzc0xpc3QuYWRkKCdzYy1tb2RhbF9fbm8tc2Nyb2xsJyk7XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLnNjLWdldC1zdGFydGVkIC5zYy10dWx1LWNhbXAtbW9kYWxfX2Zvb3RlciAuc2MtYnRuLS1tZWRpdW0nXG4gICAgKTtcbiAgICBpZiAoYnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWV2ZW50LnRhcmdldFxuICAgICAgICAgICAgICAuY2xvc2VzdCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucygnc2MtdHVsdS1jYW1wLW1vZGFsX19mb290ZXItYnRuLS1kaXNhYmxlZCcpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNjLWdldC1zdGFydGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NjLW1vZGFsX19uby1zY3JvbGwnKTtcbiAgICAgICAgICAgIHRoYXQubG9hZENvbnNvbGlkYXRlQXBpKCk7XG5cbiAgICAgICAgICAgIGhhbmRsZUFuYWx5dGljc0NUQShldmVudCwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLCB7XG4gICAgICAgICAgICAgIGN0YVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICBjdGFQb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHhMaW5rUmVnaW9uOiAnYm90dG9tJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGF0LlNjVHVsdUNhbXAucXVlcnlTZWxlY3RvckFsbChcIi5zYy1nZXQtc3RhcnRlZCBpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xuICAgIGlmIChjaGVja2JveGVzLmxlbmd0aCkge1xuICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxuICAgICAgICAgICAgLmNsb3Nlc3QoJy5zYy1nZXQtc3RhcnRlZCcpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnNjLXR1bHUtY2FtcC1tb2RhbF9fZm9vdGVyIC5zYy1idG4tLW1lZGl1bScpO1xuICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NjLXR1bHUtY2FtcC1tb2RhbF9fZm9vdGVyLWJ0bi0tZGlzYWJsZWQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NjLXR1bHUtY2FtcC1tb2RhbF9fZm9vdGVyLWJ0bi0tZGlzYWJsZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXNpYU1pbGVzWWVzTW9kYWwoKSB7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2MtZ2V0LXN0YXJ0ZWQtYnRuJyk7XG4gICAgY29uc3QgdGNNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYy10ZXJtcy1hbmQtY29uZGl0aW9uJyk7XG4gICAgY29uc3QgY2FyZE1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2MtdHVsdS1jYW1wLXByb2R1Y3QtY2FyZF9fbWFpbicpO1xuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjLXR1bHUtY2FtcC1tYWluJyk7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy10dWx1LWNhbXAtaGVhZGVyX19iYWNrJyk7XG5cbiAgICBpZiAoc3RhcnRCdXR0b24gJiYgdGNNb2RhbCkge1xuICAgICAgLy8gc2Nyb2xsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIC8vICAgY29uc3QgY2xvc2VzdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuICAgICAgLy8gICBpZiAoXG4gICAgICAvLyAgICAgY2xvc2VzdCAmJlxuICAgICAgLy8gICAgICFjbG9zZXN0LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgIC8vICAgICAgIFwic2MtdHVsdS1jYW1wLW1vZGFsX19mb290ZXItYnRuLS1kaXNhYmxlZFwiXG4gICAgICAvLyAgICAgKVxuICAgICAgLy8gICApIHtcbiAgICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gICAgIHRjTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAvLyAgICAgZG9jdW1lbnRcbiAgICAgIC8vICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNjLW1vZGFsX19uby1zY3JvbGxcIilcbiAgICAgIC8vICAgICAgID8uY2xhc3NMaXN0LnJlbW92ZShcInNjLW1vZGFsX19uby1zY3JvbGxcIik7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuXG4gICAgICBjYXJkTWFpbi5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIG1haW5QYWdlWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIG1haW5QYWdlWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBtYWluUGFnZVsxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbWFpblBhZ2VbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYi1idG4taWQ9JzEnXWApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3NjLXR1bHUtY2FtcC10YWJfX2hlYWQtYnV0dG9uLS1hY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFiLWNvbnRlbnQ9JzEnXWApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3NjLXR1bHUtY2FtcC10YWJfX2NvbnRlbnQtaXRlbS0tYWN0aXZlJyk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VzdEJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTtcbiAgICAgICAgaWYgKGNsb3Nlc3RCdG4pIHtcbiAgICAgICAgICBoYW5kbGVBbmFseXRpY3NDVEEoZXZlbnQsIGNsb3Nlc3RCdG4sIHtcbiAgICAgICAgICAgIGN0YVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgY3RhUG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgeExpbmtSZWdpb246ICdsZWZ0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVNaXNzaW9uVHJhY2tpbmcoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgY29uc29saWRhdGVzID0gdGhhdC5TY1R1bHVDYW1wPy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWItYnRuLWlkXScpO1xuICAgIGlmICghY29uc29saWRhdGVzIHx8IGNvbnNvbGlkYXRlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGNvbnNvbGlkYXRlcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICAvLyBNYWtlIHRoZSBjYWxsYmFjayBhc3luY1xuICAgICAgICBjb25zdCBjbG9zZXN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWF0dHJpYnV0ZS1uYW1lXScpO1xuICAgICAgICBpZiAoY2xvc2VzdCkge1xuICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gY2xvc2VzdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlLW5hbWUnKTtcbiAgICAgICAgICBpZiAoYXR0ck5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJzID0gdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJOYW1lfV1gKTtcbiAgICAgICAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBhdHRycykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBhdHRyLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mZXRjaEFwaURhdGEodXJsKTtcbiAgICAgICAgICAgICAgICAgIHRoYXQuZ2VuZXJhdGVIVE1MQ29kZShhdHRyLCBkYXRhLkZpZWxkcywgYXR0ci5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVzaWduLXR5cGUnKSk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBmZXRjaGVkIGRhdGEsIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb25zb2xpZGF0ZSBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVIVE1MQ29kZShzZWxlY3RvciwgZGF0YSwgdHlwZSA9ICdkZXNpZ24tMScpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgaWYgKHR5cGUgPT09ICdkZXNpZ24tMScpIHtcbiAgICAgIGxldCBodG1sQ29kZSA9ICcnO1xuICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgICAgICBZOiAnc2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gtLWFjdGl2ZScsXG4gICAgICAgICAgTjogJ3NjLXR1bHUtY2FtcC10aW1lbGluZV9fYm94LS1wcm9ncmVzcydcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG1vZGFsQXR0ciA9ICcnO1xuICAgICAgICBsZXQgYWN0aXZlQ2xhc3MgPSAnJztcbiAgICAgICAgaWYgKGNsYXNzTWFwW2l0ZW0uVmFsdWVdKSB7XG4gICAgICAgICAgYWN0aXZlQ2xhc3MgPSBjbGFzc01hcFtpdGVtLlZhbHVlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmVDbGFzcyA9ICdzYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveC0tZGlzYWJsZSc7XG4gICAgICAgICAgbW9kYWxBdHRyID0gJ3NjLWFjY291bnQtb3BlbmluZy1jb25maXJtYXRpb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbENvZGUgKz0gYDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveCAke2FjdGl2ZUNsYXNzfVwiIGRhdGEtbW9kYWwtc2VsZWN0b3I9JyR7bW9kYWxBdHRyfSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMudGV4dE9ialtpdGVtLk5hbWVdIHx8IGl0ZW0uTmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTMgMTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02LjUgMEw3Ljg5NTgzIDQuNjA0MTdMMTIuNSA2TDcuODk1ODMgNy4zOTU4M0w2LjUgMTJMNS4xMDQxNyA3LjM5NTgzTDAuNSA2TDUuMTA0MTcgNC42MDQxN0w2LjUgMFpcIiBmaWxsPVwiIzkzOTM5M1wiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgMTAwMFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgfSk7XG4gICAgICBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcuc2MtdHVsdS1jYW1wLXRpbWVsaW5lX193cmFwcGVyJykuaW5uZXJIVE1MID0gaHRtbENvZGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVzaWduLTInKSB7XG4gICAgICBsZXQgcmV3YXJkQ291bnQgPSAwO1xuICAgICAgbGV0IHJld2FyZFZhbHVlID0gMDtcbiAgICAgIGxldCByZXdhcmRDb3VudExpc3QgPSBbXTtcbiAgICAgIGNvbnN0IHByb2dyZXNzU2VjdGlvbnMgPSB0aGF0LlNjVHVsdUNhbXAucXVlcnlTZWxlY3RvckFsbCgnLnNjLXR1bHUtY2FtcC1wcm9ncmVzc19faW5uZXInKTtcblxuICAgICAgZGF0YS5mb3JFYWNoKChpdGVtcywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGh0bWxDb2RlID0gJyc7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uTmFtZSA9PT0gJ1Jld2FyZENvdW50Jykge1xuICAgICAgICAgICAgcmV3YXJkQ291bnQgPSBOdW1iZXIoaXRlbS5WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLk5hbWUgPT09ICdSZXdhcmRWYWx1ZScpIHtcbiAgICAgICAgICAgIHJld2FyZFZhbHVlID0gTnVtYmVyKGl0ZW0uVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdG90YWxDb3VudCA9IE1hdGgubWluKFxuICAgICAgICAgIHByb2dyZXNzU2VjdGlvbnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykubGVuZ3RoLFxuICAgICAgICAgIHJld2FyZENvdW50ICsgMVxuICAgICAgICApO1xuICAgICAgICByZXdhcmRDb3VudExpc3QucHVzaChyZXdhcmRDb3VudCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdG90YWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGFjdGl2ZUNsYXNzID0gJyc7XG5cbiAgICAgICAgICBpZiAocmV3YXJkQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChpIDw9IHJld2FyZENvdW50KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzID0gJyBzYy10dWx1LWNhbXAtcHJvZ3Jlc3NfX3NlY3Rpb24tLWNvbXBsZXRlZCc7IC8vIGNvbXBsZXRlZCBzZWN0aW9uXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiByZXdhcmRDb3VudCkge1xuICAgICAgICAgICAgICBhY3RpdmVDbGFzcyA9ICcgc2MtdHVsdS1jYW1wLXByb2dyZXNzX19zZWN0aW9uLS1pbi1wcm9ncmVzcyc7IC8vIGN1cnJlbnQgc2VjdGlvbiBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWxDb2RlICs9IGA8bGkgY2xhc3M9XCJzYy10dWx1LWNhbXAtcHJvZ3Jlc3NfX3NlY3Rpb24ke2FjdGl2ZUNsYXNzfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjLXR1bHUtY2FtcC1wcm9ncmVzc19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtdHVsdS1jYW1wLXByb2dyZXNzX19jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjFcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjEgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTguODMzNCAyTDcuNzIyMjQgMTMuNjY2N0wyLjE2Njc1IDcuODMzMzNcIiBzdHJva2U9XCIjMEMzQTY2XCIgc3Ryb2tlLXdpZHRoPVwiM1wiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtcHJvZ3Jlc3NfX251bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxMyAxM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02LjUgMC41TDcuODk1ODMgNS4xMDQxN0wxMi41IDYuNUw3Ljg5NTgzIDcuODk1ODNMNi41IDEyLjVMNS4xMDQxNyA3Ljg5NTgzTDAuNSA2LjVMNS4xMDQxNyA1LjEwNDE3TDYuNSAwLjVaXCIgZmlsbD1cIiMzQkJENzdcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtyZXdhcmRWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtdHVsdS1jYW1wLXByb2dyZXNzX19saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV3YXJkQ291bnQgKyAxOyBpKyspIHtcbiAgICAgICAgICBpZiAocHJvZ3Jlc3NTZWN0aW9uc1tpbmRleF0uZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2dyZXNzU2VjdGlvbnNbaW5kZXhdLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcm9ncmVzc1NlY3Rpb25zW2luZGV4XS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sQ29kZSk7XG4gICAgICB9KTtcblxuICAgICAgLy9VcGRhdGUgRmluaXNoIGFsbCB0cmFkaW5nc1xuICAgICAgY29uc3QgdXBkYXRlZFByb2dyZXNzU2VjdGlvbnMgPSB0aGF0LlNjVHVsdUNhbXAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJy5zYy10dWx1LWNhbXAtcHJvZ3Jlc3NfX2lubmVyJ1xuICAgICAgKTtcblxuICAgICAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgc2FmZWx5XG4gICAgICBjb25zdCBsYXN0RWxlbWVudCA9IHVwZGF0ZWRQcm9ncmVzc1NlY3Rpb25zLmxlbmd0aFxuICAgICAgICA/IHVwZGF0ZWRQcm9ncmVzc1NlY3Rpb25zW3VwZGF0ZWRQcm9ncmVzc1NlY3Rpb25zLmxlbmd0aCAtIDFdXG4gICAgICAgIDogbnVsbDtcblxuICAgICAgaWYgKGxhc3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxhc3RFbGVtZW50TGlzdCA9IGxhc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLnNjLXR1bHUtY2FtcC1wcm9ncmVzc19fc2VjdGlvbicpO1xuXG4gICAgICAgIHJld2FyZENvdW50TGlzdC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wbGV0ZWRTZWN0aW9ucyA9XG4gICAgICAgICAgICB1cGRhdGVkUHJvZ3Jlc3NTZWN0aW9uc1tpbmRleF0/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLnNjLXR1bHUtY2FtcC1wcm9ncmVzc19fc2VjdGlvbicpXG4gICAgICAgICAgICAgIC5sZW5ndGggfHwgMDtcblxuICAgICAgICAgIGlmIChsYXN0RWxlbWVudExpc3RbaW5kZXhdKSB7XG4gICAgICAgICAgICBsYXN0RWxlbWVudExpc3RbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICAgICAgICAgICdzYy10dWx1LWNhbXAtcHJvZ3Jlc3NfX3NlY3Rpb24tLWNvbXBsZXRlZCcsXG4gICAgICAgICAgICAgIHZhbHVlID09PSBjb21wbGV0ZWRTZWN0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Rlc2lnbi0zJykge1xuICAgICAgbGV0IGh0bWxDb2RlID0gJyc7XG4gICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgICAgIFk6ICcgc2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gtLWFjdGl2ZScsXG4gICAgICAgICAgTjogJyBzYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveC0tcHJvZ3Jlc3MnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGl2ZUNsYXNzID0gJyc7XG4gICAgICAgIGlmIChjbGFzc01hcFtpdGVtLkFydGljbGVSZWFkRmxhZ10pIHtcbiAgICAgICAgICBhY3RpdmVDbGFzcyA9IGNsYXNzTWFwW2l0ZW0uQXJ0aWNsZVJlYWRGbGFnXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmVDbGFzcyA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2dyZXNzQ2xhc3MgPSAnJztcbiAgICAgICAgaWYgKGNsYXNzTWFwW2l0ZW0uUXVpekZsYWddKSB7XG4gICAgICAgICAgcHJvZ3Jlc3NDbGFzcyA9IGNsYXNzTWFwW2l0ZW0uUXVpekZsYWddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzQ2xhc3MgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW9kYWxBdHRyID0gJyc7XG4gICAgICAgIGlmIChpdGVtLlF1aXpGbGFnID09PSAnWScpIHtcbiAgICAgICAgICBtb2RhbEF0dHIgPSAnc2MtcXVlc3Rpb25uYWlyZSc7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sQ29kZSArPSBgPGRpdiBjbGFzcz1cInNjLXR1bHUtY2FtcC13cmFwcGVyLWZ1bGxfX2NvbHVtblwiXG4gICAgICAgICAgICBkYXRhLWxldmVsLXVwLWFwaT1cImh0dHA6Ly9sb2NhbGhvc3QvalF1ZXJ5LW1pZ3JhdGlvbi90dWx1L2pzb24vbGV2ZWx1cC9sZXZlbHVwLmpzb25cIiBkYXRhLWRlc2lnbi10eXBlPVwiZGVzaWduLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjLXR1bHUtY2FtcC10aW1lbGluZV9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveCR7YWN0aXZlQ2xhc3N9XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSZWFkIGFydGljbGVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTMgMTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTYuNSAwTDcuODk1ODMgNC42MDQxN0wxMi41IDZMNy44OTU4MyA3LjM5NTgzTDYuNSAxMkw1LjEwNDE3IDcuMzk1ODNMMC41IDZMNS4xMDQxNyA0LjYwNDE3TDYuNSAwWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM5MzkzOTNcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNjLXR1bHUtY2FtcC10aW1lbGluZV9fYm94LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS5BcnRpY2xlQ29uc29saWRhdGVkQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2N2cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19jdnAtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYXYuc2MuY29tL3NnL2NvbnRlbnQvaW1hZ2VzL3NnLWNyYWZ0aW5nLWEtYmFsYW5jZWQtcG9ydGZvbGlvLXBpbnRpbGUuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkFydGljbGUgSW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2N2cC1pdGVtIHNjLXJ0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JldGFpbC5zYy5jb20vc2Ntb2JpbGUvaGs/bmdyb3V0ZT1pbnZlc3RtZW50LndlYWx0aC1uZWVkcy5kZXRhaWwmYW1wO2FydGljbGU9JHtpdGVtLlZhbHVlfVwiIGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19jdnAtdGl0bGVcIiB0aXRsZT1cIiR7aXRlbS5WYWx1ZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS5WYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzYy10dWx1LWNhbXAtdGltZWxpbmVfX2N2cC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgQmVnaW5uZXLigJlzIEd1aWRlIHRvIFJFSVRzOiBXaGF0IFRoZXkgQXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgSG93IHRvIEludmVzdFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gke3Byb2dyZXNzQ2xhc3N9XCIgZGF0YS1tb2RhbC1zZWxlY3Rvcj1cIiR7bW9kYWxBdHRyfVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjLXR1bHUtY2FtcC10aW1lbGluZV9fYm94LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjLXR1bHUtY2FtcC10aW1lbGluZV9fYm94LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGVzdCB5b3VyIGtub3dsZWRnZSBvbiB0aGUgYXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjLXR1bHUtY2FtcC10aW1lbGluZV9fYm94LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjLXR1bHUtY2FtcC10aW1lbGluZV9fYm94LWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMyAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNi41IDBMNy44OTU4MyA0LjYwNDE3TDEyLjUgNkw3Ljg5NTgzIDcuMzk1ODNMNi41IDEyTDUuMTA0MTcgNy4zOTU4M0wwLjUgNkw1LjEwNDE3IDQuNjA0MTdMNi41IDBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzkzOTM5M1wiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLlF1aXpDb25zb2xpZGF0ZWRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9KTtcbiAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9IGh0bWxDb2RlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGxvYWRDb25zb2xpZGF0ZUFwaSgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBjb25zb2xpZGF0ZXMgPSB0aGF0LlNjVHVsdUNhbXA/LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLnNjLXR1bHUtY2FtcC1wcm9kdWN0LWNhcmRfX21haW5bZGF0YS1jb25zb2xpZGF0ZV0nXG4gICAgKTtcbiAgICBpZiAoIWNvbnNvbGlkYXRlcyB8fCBjb25zb2xpZGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm47IC8vIEV4aXQgaWYgbm8gZWxlbWVudHMgZm91bmRcbiAgICBsZXQgdG90YWxNaWxlcyA9IDA7XG4gICAgbGV0IHRvdGFsTWlsZXNBY2N1bXVsYXRlZCA9IDA7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGNvbnNvbGlkYXRlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hBcGlEYXRhKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb25zb2xpZGF0ZScpKTtcbiAgICAgICAgbGV0IHZhbHVlID0gTnVtYmVyKGRhdGEuRmllbGRzPy5bMF0/LlZhbHVlKSB8fCAwO1xuICAgICAgICB0b3RhbE1pbGVzICs9IHZhbHVlO1xuICAgICAgICB2YWx1ZSA9IGNvbnZlcnROdW1iZXJzKHRoYXQuU2NUdWx1Q2FtcCwgdmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGFjY3VtdWxhdGVkID0gZWwucXVlcnlTZWxlY3RvcignLnNjLXR1bHUtY2FtcC1wcm9kdWN0LWNhcmRfX3Byb2dyZXNzLXRvdGFsIHN0cm9uZycpO1xuXG4gICAgICAgIGlmIChhY2N1bXVsYXRlZCkge1xuICAgICAgICAgIGxldCBhY2N1bXVsYXRlZFZhbHVlID0gYWNjdW11bGF0ZWQuaW5uZXJUZXh0LnRyaW0oKS5yZXBsYWNlKC9bXjAtOS5dL2csICcnKTtcbiAgICAgICAgICBhY2N1bXVsYXRlZFZhbHVlID0gYWNjdW11bGF0ZWRWYWx1ZSA/IE51bWJlcihhY2N1bXVsYXRlZFZhbHVlKSA6IDA7IC8vIEVuc3VyZSBudW1lcmljIGNvbnZlcnNpb25cbiAgICAgICAgICB0b3RhbE1pbGVzQWNjdW11bGF0ZWQgKz0gYWNjdW11bGF0ZWRWYWx1ZTtcbiAgICAgICAgICBhY2N1bXVsYXRlZC5pbm5lclRleHQgPSBjb252ZXJ0TnVtYmVycyh0aGF0LlNjVHVsdUNhbXAsIGFjY3VtdWxhdGVkVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcHJvZ3Jlc3MgdmFsdWUgaW4gdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuc2MtdHVsdS1jYW1wLXByb2R1Y3QtY2FyZF9fcHJvZ3Jlc3MtdmFsdWUnKS5pbm5lclRleHQgPSB2YWx1ZTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBjaGlsZCBjbGFzcyBhbmQgdXBkYXRlIGl0cyBwcm9ncmVzcyB2YWx1ZVxuICAgICAgICBjb25zdCBjaGlsZENsYXNzID0gdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3IoJy4nICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNoaWxkLWNsYXNzJykpO1xuICAgICAgICBpZiAoY2hpbGRDbGFzcykge1xuICAgICAgICAgIGNoaWxkQ2xhc3MucXVlcnlTZWxlY3RvcignLnNjLXR1bHUtY2FtcC1wcm9kdWN0LWNhcmRfX3Byb2dyZXNzLXZhbHVlJykuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvbnNvbGlkYXRlIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0b3RhbCBtaWxlcyBkaXNwbGF5XG4gICAgY29uc3QgbWlsZXNTZWxlY3RvciA9IHRoYXQuU2NUdWx1Q2FtcD8ucXVlcnlTZWxlY3RvcignLnNjLWN2cF9fbWlkZGxlIHN0cm9uZycpO1xuICAgIGlmIChtaWxlc1NlbGVjdG9yKSB7XG4gICAgICBtaWxlc1NlbGVjdG9yLmlubmVyVGV4dCA9IGNvbnZlcnROdW1iZXJzKHRoYXQuU2NUdWx1Q2FtcCwgdG90YWxNaWxlcyk7XG4gICAgfVxuICAgIGNvbnN0IHRvdGFsQWNjdW11bGF0ZWQgPSB0aGF0LlNjVHVsdUNhbXA/LnF1ZXJ5U2VsZWN0b3IoJy5zYy10dWx1LWNhbXAtbWlsZXNjYXJkX19kZXNjIHN0cm9uZycpO1xuICAgIGlmICh0b3RhbEFjY3VtdWxhdGVkKSB7XG4gICAgICB0b3RhbEFjY3VtdWxhdGVkLmlubmVyVGV4dCA9IGNvbnZlcnROdW1iZXJzKHRoYXQuU2NUdWx1Q2FtcCwgdG90YWxNaWxlc0FjY3VtdWxhdGVkKTtcbiAgICB9XG4gIH1cblxuICBvYmplY3RMaXN0KCkge1xuICAgIHRoaXMudGV4dE9iaiA9IHtcbiAgICAgIE9wZW5BY2NvdW50OiAnT3BlbiBBbiBBY2NvdW50JyxcbiAgICAgIEZpcnN0VHJhZGU6ICdNYWtlIHlvdXIgZmlyc3QgdHJhZGUnLFxuICAgICAgQ29tcGxldGlvbkJvbnVzOiAnQ29tcGxldGlvbiBCb251cydcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVGFicyh0YXJnZXRJZCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IHRhcmdldENvbnRlbnQgPSB0aGF0LlNjVHVsdUNhbXAucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuc2MtdHVsdS1jYW1wLXRhYl9fY29udGVudC1pdGVtW2RhdGEtdGFiLWNvbnRlbnQ9XCIke3RhcmdldElkfVwiXWBcbiAgICApO1xuICAgIGlmICghdGFyZ2V0Q29udGVudCkgcmV0dXJuO1xuXG4gICAgLy8gUmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIGFsbCB0YWJzIGFuZCBjb250ZW50IGl0ZW1zIGluIHRoaXMgdGFiIGdyb3VwXG4gICAgdGhhdC50YWJzLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoJ3NjLXR1bHUtY2FtcC10YWJfX2hlYWQtYnV0dG9uLS1hY3RpdmUnKSk7XG4gICAgdGhhdC5jb250ZW50cy5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKCdzYy10dWx1LWNhbXAtdGFiX19jb250ZW50LWl0ZW0tLWFjdGl2ZScpKTtcblxuICAgIC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gY2xpY2tlZCB0YWIgYW5kIGNvcnJlc3BvbmRpbmcgY29udGVudFxuICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSB0aGF0LlNjVHVsdUNhbXAucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGFiLWJ0bi1pZD1cIiR7dGFyZ2V0SWR9XCJdYCk7XG4gICAgYWN0aXZlVGFicy5mb3JFYWNoKGFjdGl2ZVRhYiA9PiB7XG4gICAgICBpZiAoIWFjdGl2ZVRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ3NjLXRvb2x0aXAnKSkge1xuICAgICAgICBhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZCgnc2MtdHVsdS1jYW1wLXRhYl9faGVhZC1idXR0b24tLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRhcmdldENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2MtdHVsdS1jYW1wLXRhYl9fY29udGVudC1pdGVtLS1hY3RpdmUnKTtcbiAgfVxuXG4gIGhhbmRsZU1vZGFsKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIC8vT3BlbiBNb2RhbFxuICAgIHRoYXQuU2NUdWx1Q2FtcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1vZGFsLXNlbGVjdG9yXScpO1xuICAgICAgY29uc3QgYXJ0aWNsZUFuY2hvciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhLnNjLXR1bHUtY2FtcC10aW1lbGluZV9fY3ZwLXRpdGxlJyk7XG4gICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtc2VsZWN0b3InKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50TW9kYWwgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNjLXR1bHUtY2FtcC1tb2RhbCcpO1xuICAgICAgICAgIGlmIChwYXJlbnRNb2RhbCkge1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRNb2RhbElkID0gcGFyZW50TW9kYWwuZ2V0QXR0cmlidXRlKCdpZCcpIHx8ICcnO1xuICAgICAgICAgICAgcGFyZW50TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTW9kYWwgPSB0aGF0LlNjVHVsdUNhbXAucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3J9YCk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkTW9kYWwpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NMaXN0LmFkZCgnc2MtbW9kYWxfX25vLXNjcm9sbCcpO1xuXG4gICAgICAgICAgICAvL0FjdGl2aXRpZXMgZm9yIHF1ZXN0aW9ubmFpcmVcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE1vZGFsLmNsb3Nlc3QoJy5zYy1xdWVzdGlvbm5haXJlJykpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmVlZGJhY2tTaG93ID0gc2VsZWN0ZWRNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuc2MtdHVsdS1jYW1wLXF1ZXN0aW9ubmFpcmVfX2ZlZWRiYWNrLS1zaG93J1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoZmVlZGJhY2tTaG93KSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2tTaG93LmNsYXNzTGlzdC5yZW1vdmUoJ3NjLXR1bHUtY2FtcC1xdWVzdGlvbm5haXJlX19mZWVkYmFjay0tc2hvdycpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy9VbmNoZWNrZWQgYWxsIHF1ZXN0aW9ubmFpcmUgcmFkaW8gYnV0dG9uXG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9ubmFpcmVSYWRpb3MgPSBzZWxlY3RlZE1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJy5zYy1xdWVzdGlvbm5haXJlIGlucHV0W3R5cGU9XCJyYWRpb1wiXSdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHF1ZXN0aW9ubmFpcmVSYWRpb3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb25uYWlyZVJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcbiAgICAgICAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGJ0biA9IHNlbGVjdGVkTW9kYWwucXVlcnlTZWxlY3RvcignLnNjLXR1bHUtY2FtcC1tb2RhbF9fZm9vdGVyLWJ0bicpO1xuICAgICAgICAgICAgICBpZiAoYnRuKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3NjLXR1bHUtY2FtcC1tb2RhbF9fZm9vdGVyLWJ0bi0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJUZXh0ID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10ZXh0LWRlZmF1bHQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdGFPYmogPSB7IGN0YVR5cGU6ICdidXR0b24nIH07XG5cbiAgICAgICAgY29uc3QgYW5jaG9yRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhJyk7XG4gICAgICAgIGlmIChhbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgbW9kYWxTZWxlY3RvciA9IGFuY2hvckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXNlbGVjdG9yJyk7XG4gICAgICAgICAgaWYgKG1vZGFsU2VsZWN0b3IgPT09ICdzYy1ndWlkYW5jZScgfHwgbW9kYWxTZWxlY3RvciA9PT0gJ3NjLWhlbHAnKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0YU9iaiwge1xuICAgICAgICAgICAgICBjdGFQb3NpdGlvbjogJ21pZGRsZScsXG4gICAgICAgICAgICAgIHhMaW5rUmVnaW9uOiAnbWlkZGxlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb2RhbFNlbGVjdG9yID09PSAnc2MtdGVybXMtYW5kLWNvbmRpdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3RhT2JqLCB7XG4gICAgICAgICAgICAgIGN0YVBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgeExpbmtSZWdpb246ICdib3R0b20nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgICAgICBpZiAoYnV0dG9uRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IG1vZGFsU2VsZWN0b3IgPSBidXR0b25FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC1zZWxlY3RvcicpO1xuICAgICAgICAgIGlmIChtb2RhbFNlbGVjdG9yID09PSAnc2MtaGVscCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3RhT2JqLCB7XG4gICAgICAgICAgICAgIGN0YVBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgeExpbmtSZWdpb246ICdyaWdodCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vTmV4dCBUYXNrXG4gICAgICAgIGNvbnN0IG5leHRUYXNrRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2MtdHVsdS1jYW1wLXByb2R1Y3QtY2FyZF9fYm90dG9tJyk7XG4gICAgICAgIGlmIChuZXh0VGFza0VsZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRyaW0oXG4gICAgICAgICAgICBuZXh0VGFza0VsZW1lbnRcbiAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5zYy10dWx1LWNhbXAtcHJvZHVjdC1jYXJkJylcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5zYy10dWx1LWNhbXAtcHJvZHVjdC1jYXJkX190aXRsZScpLmlubmVyVGV4dFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBPYmplY3QuYXNzaWduKGN0YU9iaiwge1xuICAgICAgICAgICAgY29udGV4dDpcbiAgICAgICAgICAgICAgYCR7dGl0bGV9IG5leHQgdGFzayAtIGAgK1xuICAgICAgICAgICAgICB0cmltKFxuICAgICAgICAgICAgICAgIG5leHRUYXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2MtdHVsdS1jYW1wLXByb2R1Y3QtY2FyZF9fdGFzay1kZXNjJykuaW5uZXJUZXh0XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBjdGFQb3NpdGlvbjogJ21pZGRsZScsXG4gICAgICAgICAgICB4TGlua1JlZ2lvbjogJ21pZGRsZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVGltZWxpbmUgYm94ZXNcbiAgICAgICAgY29uc3QgdGltZUxpbmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zYy10dWx1LWNhbXAtd3JhcHBlci1mdWxsX19jb2x1bW4nKTtcbiAgICAgICAgaWYgKHRpbWVMaW5lRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IGRpdmVyc2lmeVRpdGxlID0gdGltZUxpbmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy10dWx1LWNhbXAtd3JhcHBlci1mdWxsX190aXRsZScpO1xuICAgICAgICAgIGlmIChkaXZlcnNpZnlUaXRsZSAmJiBkaXZlcnNpZnlUaXRsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGV4dCcpKSB7XG4gICAgICAgICAgICAvL2RpdmVyc2lmeSBzZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRyaW0oZGl2ZXJzaWZ5VGl0bGUuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRleHQnKSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdHJpbShcbiAgICAgICAgICAgICAgdGltZUxpbmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveC10aXRsZScpLmlubmVyVGV4dFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdGFPYmosIHtcbiAgICAgICAgICAgICAgY29udGV4dDogYCR7dGl0bGV9IC0gJHtjb250ZW50fWAsXG4gICAgICAgICAgICAgIGN0YVBvc2l0aW9uOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgeExpbmtSZWdpb246ICdtaWRkbGUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVMaW5lRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2MtdHVsdS1jYW1wLXRpbWVsaW5lX19ib3gnKSkge1xuICAgICAgICAgICAgLy9hcnRpY2xlIHNlY3Rpb25cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3RhT2JqLCB7XG4gICAgICAgICAgICAgIGNvbnRleHQ6XG4gICAgICAgICAgICAgICAgYGFydGljbGUgdGVzdCAtIGAgK1xuICAgICAgICAgICAgICAgIHRyaW0odGltZUxpbmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy10dWx1LWNhbXAtdGltZWxpbmVfX2JveC10aXRsZScpLmlubmVyVGV4dCksXG4gICAgICAgICAgICAgIGN0YVBvc2l0aW9uOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgeExpbmtSZWdpb246ICdtaWRkbGUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5jaG9yRWxlbWVudCA/PyBidXR0b25FbGVtZW50ID8/IG5leHRUYXNrRWxlbWVudCA/PyB0aW1lTGluZUVsZW1lbnQpIHtcbiAgICAgICAgICBoYW5kbGVBbmFseXRpY3NDVEEoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGFuY2hvckVsZW1lbnQgPz8gYnV0dG9uRWxlbWVudCA/PyBuZXh0VGFza0VsZW1lbnQgPz8gdGltZUxpbmVFbGVtZW50LFxuICAgICAgICAgICAgY3RhT2JqXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcnRpY2xlQW5jaG9yKSB7XG4gICAgICAgIGhhbmRsZUFuYWx5dGljc0NUQShldmVudCwgJycsIHtcbiAgICAgICAgICBjdGFUeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICBjb250ZXh0OiAnYXJ0aWNsZSBsaW5rIC0gJyArIHRyaW0oYXJ0aWNsZUFuY2hvci5pbm5lclRleHQpLFxuICAgICAgICAgIHhMaW5rUmVnaW9uOiAnbWlkZGxlJyxcbiAgICAgICAgICBjdGFQb3NpdGlvbjogJ21pZGRsZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0Nsb3NlIE1vZGFsXG4gICAgY29uc3QgbW9kYWxDbG9zZXMgPSB0aGF0LlNjVHVsdUNhbXAucXVlcnlTZWxlY3RvckFsbCgnLnNjLXR1bHUtY2FtcC1tb2RhbF9fY2xvc2UnKTtcbiAgICBpZiAobW9kYWxDbG9zZXMubGVuZ3RoKSB7XG4gICAgICBtb2RhbENsb3Nlcy5mb3JFYWNoKG1vZGFsQ2xvc2UgPT4ge1xuICAgICAgICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zYy1nZXQtc3RhcnRlZCcpKSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNjLXR1bHUtY2FtcC1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIGlmICh0aGF0LnBhcmVudE1vZGFsSWQpIHtcbiAgICAgICAgICAgICAgdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoYXQucGFyZW50TW9kYWxJZH1gKS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgIHRoYXQucGFyZW50TW9kYWxJZCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NjLW1vZGFsX19uby1zY3JvbGwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGVBbmFseXRpY3NDVEEoZXZlbnQsIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSwge1xuICAgICAgICAgICAgY3RhVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB4TGlua1JlZ2lvbjogJ2xlZnQnLFxuICAgICAgICAgICAgY3RhUG9zaXRpb246ICd0b3AnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9oYW5kbGUgRG93bmxvYWQgQnV0dG9uXG4gICAgY29uc3QgZG93bmxvYWRzID0gdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zYy10dWx1LWNhbXAtbW9kYWxfX2Rvd25sb2FkJyk7XG4gICAgZG93bmxvYWRzLmZvckVhY2goZG93bmxvYWQgPT4ge1xuICAgICAgZG93bmxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGhhbmRsZUFuYWx5dGljc0NUQShldmVudCwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLCB7XG4gICAgICAgICAgY29udGV4dDogJ2Rvd25sb2FkJyxcbiAgICAgICAgICBjdGFUeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICB4TGlua1JlZ2lvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBjdGFQb3NpdGlvbjogJ3RvcCdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVF1ZXN0aW9ubmFpcmUoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgLy9xdWVzdGlvbm5haXJlIHJhZGlvXG4gICAgY29uc3QgcXVlc3Rpb25uYWlyZVJhZGlvcyA9IHRoYXQuU2NUdWx1Q2FtcC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5zYy1xdWVzdGlvbm5haXJlIGlucHV0W3R5cGU9XCJyYWRpb1wiXSdcbiAgICApO1xuICAgIGlmIChxdWVzdGlvbm5haXJlUmFkaW9zLmxlbmd0aCkge1xuICAgICAgcXVlc3Rpb25uYWlyZVJhZGlvcy5mb3JFYWNoKHF1ZXN0aW9ubmFpcmVSYWRpbyA9PiB7XG4gICAgICAgIHF1ZXN0aW9ubmFpcmVSYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0XG4gICAgICAgICAgICAuY2xvc2VzdCgnLnNjLXR1bHUtY2FtcC1xdWVzdGlvbm5haXJlJylcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuc2MtdHVsdS1jYW1wLW1vZGFsX19mb290ZXItYnRuJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdzYy10dWx1LWNhbXAtbW9kYWxfX2Zvb3Rlci1idG4tLWRpc2FibGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlc3Rpb25uYWlyZUxhYmVscyA9IHRoYXQuU2NUdWx1Q2FtcC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5zYy1xdWVzdGlvbm5haXJlIC5zYy1yYWRpby1ib3hfX2lucHV0LWxhYmVsJ1xuICAgICk7XG4gICAgaWYgKHF1ZXN0aW9ubmFpcmVMYWJlbHMubGVuZ3RoKSB7XG4gICAgICBxdWVzdGlvbm5haXJlTGFiZWxzLmZvckVhY2gocXVlc3Rpb25uYWlyZUxhYmVsID0+IHtcbiAgICAgICAgcXVlc3Rpb25uYWlyZUxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnRhcmdldFxuICAgICAgICAgICAgLmNsb3Nlc3QoJy5zYy10dWx1LWNhbXAtcXVlc3Rpb25uYWlyZScpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnNjLXR1bHUtY2FtcC1tb2RhbF9fZm9vdGVyLWJ0bicpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2MtdHVsdS1jYW1wLW1vZGFsX19mb290ZXItYnRuLS1kaXNhYmxlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRpbnVlQnRuID0gdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnNjLXF1ZXN0aW9ubmFpcmUgLnNjLXR1bHUtY2FtcC1tb2RhbF9fZm9vdGVyLWJ0bidcbiAgICApO1xuICAgIGlmIChjb250aW51ZUJ0bikge1xuICAgICAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3Nlc3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNjLXR1bHUtY2FtcC1tb2RhbF9fZm9vdGVyLWJ0bicpO1xuICAgICAgICBpZiAoIWNsb3Nlc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYy10dWx1LWNhbXAtbW9kYWxfX2Zvb3Rlci1idG4tLWRpc2FibGVkJykpIHtcbiAgICAgICAgICBjbG9zZXN0LmlubmVyVGV4dCA9IGNsb3Nlc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXRleHQtY29udGludWUnKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoYXQuU2NUdWx1Q2FtcC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5zYy10dWx1LWNhbXAtcXVlc3Rpb25uYWlyZV9fZmVlZGJhY2stLXN1Y2Nlc3MnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgY29udGV4dDtcbiAgICAgICAgICBpZiAoc2VsZWN0b3IuY2xhc3NOYW1lLmluY2x1ZGVzKCdzYy10dWx1LWNhbXAtcXVlc3Rpb25uYWlyZV9fZmVlZGJhY2stLXNob3cnKSkge1xuICAgICAgICAgICAgY29udGV4dCA9ICdjb250aW51ZSc7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNjLXR1bHUtY2FtcC1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdzYy1tb2RhbF9fbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ3NjLXR1bHUtY2FtcC1xdWVzdGlvbm5haXJlX19mZWVkYmFjay0tc2hvdycpO1xuICAgICAgICAgICAgY29udGV4dCA9ICdzdWJtaXQgLSBjb3JyZWN0JztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGVBbmFseXRpY3NDVEEoZXZlbnQsIGNsb3Nlc3QsIHtcbiAgICAgICAgICAgIGN0YVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIHhMaW5rUmVnaW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgIGN0YVBvc2l0aW9uOiAnYm90dG9tJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGYXFBbmFseXRpY3MoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgbGFiZWxzID0gdGhhdC5TY1R1bHVDYW1wLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zYy1mYXFfX2FjY29yZGlvbi1sYWJlbCcpO1xuICAgIGxhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjbG9zZXN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xhYmVsJyk7XG4gICAgICAgIGhhbmRsZUFuYWx5dGljc0NUQShldmVudCwgY2xvc2VzdCwge1xuICAgICAgICAgIGN0YVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIGNvbnRleHQ6ICdmYXEgLSAnICsgdHJpbShjbG9zZXN0LmlubmVyVGV4dCksXG4gICAgICAgICAgeExpbmtSZWdpb246ICdtaWRkbGUnLFxuICAgICAgICAgIGN0YVBvc2l0aW9uOiAnbWlkZGxlJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IFNjVHVsdUNhbXBhaWduKCk7XG5pbnN0YW5jZS5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cbi8qIGdsb2JhbCBkaWdpdGFsRGF0YSwgc2NBbmFseXRpY3NEYXRhQXJyYXksIF9zYXRlbGxpdGUsIG5vVWlTbGlkZXIgKi9cbndpbmRvdy5zY0NvbW1vbkNvbnN0YW50cyA9IHtcbiAgREVWRUxPUE1FTlQ6ICdkZXZlbG9wbWVudCcsXG4gIFBSRVZJRVc6ICdwcmV2aWV3JyxcbiAgUFJPRFVDVElPTjogJ3Byb2R1Y3Rpb24nLFxuICBTVEFHSU5HOiAnc3RhZ2luZycsXG4gIFBFUlNPTkFMOiAncGVyc29uYWwnLFxuICBQUklPUklUWTogJ3ByaW9yaXR5JyxcbiAgQlVTSU5FU1M6ICdidXNpbmVzcycsXG4gIENPUlBPUkFURTogJ2NvcnBvcmF0ZScsXG4gIFBSSVZBVEU6ICdwcml2YXRlJyxcbiAgQ09NTUVSQ0lBTDogJ2NvbW1lcmNpYWwnLFxuXG4gIExBTkdVQUdFUzogWydlbicsICd6aCddLFxuXG4gIEFMTE9XQUJMRV9RVUVSWVNUUklORzoge1xuICAgIHNjYjogW1xuICAgICAgJ3N1YkNoYW5Db2RlJyxcbiAgICAgICdjYW1wX2lkJyxcbiAgICAgICdwaWQnLFxuICAgICAgJ3Byb21vQ29kZScsXG4gICAgICAncHJvbW8nLFxuICAgICAgJ3JlZmVySWQnLFxuICAgICAgJ2luc3RhbmNlJyxcbiAgICAgICdzdGF0ZScsXG4gICAgICAndXRtX3NvdXJjZScsXG4gICAgICAndXRtX21lZGl1bScsXG4gICAgICAndXRtX2NhbXBhaWduJyxcbiAgICAgICd1dG1fdGVybScsXG4gICAgICAndXRtX2NvbnRlbnQnLFxuICAgICAgJ0dpUHJtJyxcbiAgICAgICdwcm9kdWN0TmFtZScsXG4gICAgICAndHJ1c3BsZUJ1eWVySWQnLFxuICAgICAgJ0NUSUQnXG4gICAgXSxcbiAgICBvdGhlcnM6IFsnZ2NsaWQnLCAnZ2Nsc3JjJ10sXG4gICAgJ3BhcnRuZXItdXJscyc6IFtcbiAgICAgICdodHRwczovL3d3dy5yb3lhbHN1bmRhcmFtLmluLy4qJyxcbiAgICAgICdodHRwczovL3d3dy5tYXhidXBhLmNvbS8uKicsXG4gICAgICAnaHR0cHM6Ly93d3cuYmhhcnRpLWF4YWdpLmNvLmluLy4qJyxcbiAgICAgICdodHRwczovL3d3dy5pY2ljaXBydWxpZmUuY29tLy4qJyxcbiAgICAgICdodHRwczovL3d3dy5laW5zdXJlLmFsbGlhbnouY29tLnNnLy4qJyxcbiAgICAgICdodHRwczovL3d3dy5hbGxpYW56LXRyYXZlbC1pbnN1cmUuY29tLnNnLy4qJyxcbiAgICAgICdodHRwczovL3d3dy5saW4uZWUvLionLFxuICAgICAgJ2h0dHBzOi8vd3d3LnBpYXBwLmNvbS8uKidcbiAgICBdXG4gIH0sXG5cbiAgVVJMX09CSjogW1xuICAgICdjbXNkZXYnLFxuICAgICdwcmV2aWV3JyxcbiAgICAnc3RhbmRhcmRjaGFydGVyZWQnLFxuICAgICdzYycsXG4gICAgJ2NvbScsXG4gICAgJ2F2JyxcbiAgICAnYXNzZXRzJyxcbiAgICAnZ2xvYmFsJyxcbiAgICAnZGV2ZWxvcG1lbnQnLFxuICAgICdzdGFnaW5nJyxcbiAgICAnZGlnaXRhbCcsXG4gICAgJ2h0dHBzJyxcbiAgICAnY21zc3RhZ2UnLFxuICAgICdjbXMnLFxuICAgICdkZXYnLFxuICAgICd6b28nXG4gIF1cbn07XG5cbi8qKlxuICogQnJlYWtzIGRvd24gYSBnaXZlbiBVUkwgaW50byBpdHMgY29tcG9uZW50cy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50VVJMIC0gVGhlIFVSTCB0byBiZSBicm9rZW4gZG93bi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudHMgb2YgdGhlIFVSTC5cbiAqL1xuY29uc3QgdXJsQnJlYWtkb3duID0gY3VycmVudFVSTCA9PiB7XG4gIHZhciBwYXJzZXIgPSBwYXJzZVVybChjdXJyZW50VVJMKTtcbiAgdmFyIHF1ZXJ5U3RyaW5nID0gcGFyc2VyLnNlYXJjaCxcbiAgICBwYXJ0cyA9IHBhcnNlci5wYXRobmFtZS5zcGxpdCgnLycpLFxuICAgIGhhc2ggPSBwYXJzZXIuaGFzaCxcbiAgICBjb3VudHJ5TWFwcGluZyA9IHtcbiAgICAgIHNnYmV0YTogJ3NnJ1xuICAgIH07XG4gIGlmIChxdWVyeVN0cmluZyAmJiBxdWVyeVN0cmluZy5pbmRleE9mKCc/JykgPT09IDApIHtcbiAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nLnNsaWNlKDEpO1xuICB9XG4gIHZhciBwYWdlVVJMID0ge1xuICAgIGRvbWFpbjogbnVsbCxcbiAgICBjb3VudHJ5OiBudWxsLFxuICAgIGxhbmd1YWdlOiBudWxsLFxuICAgIGNhdGVnb3J5OiBudWxsLFxuICAgIHNlZ21lbnQ6ICdwZXJzb25hbCcsXG4gICAgc3ViY2F0ZWdvcnk6IG51bGwsXG4gICAgc2x1ZzogbnVsbCxcbiAgICBxdWVyeVN0cmluZzogcXVlcnlTdHJpbmcsXG4gICAgaGFzaDogbnVsbCxcbiAgICBwYXRobmFtZTogZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWVcbiAgfTtcblxuICBwYWdlVVJMLmRvbWFpbiA9IHBhcnNlci5ob3N0bmFtZTtcbiAgcGFnZVVSTC5jb3VudHJ5ID0gcGFydHNbMV07XG4gIHBhZ2VVUkwubGFuZ3VhZ2UgPSAnZW4nO1xuXG4gIGlmIChwYWdlVVJMLmNvdW50cnkgPT09ICdjbicgfHwgcGFnZVVSTC5jb3VudHJ5ID09PSAndHcnKSB7XG4gICAgcGFnZVVSTC5sYW5ndWFnZSA9ICd6aCc7XG4gIH1cblxuICBpZiAocGFydHNbMl0pIHtcbiAgICBwYWdlVVJMLmNhdGVnb3J5ID0gcGFydHNbMl07XG4gICAgaWYgKHBhcnRzWzJdLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGFnZVVSTC5sYW5ndWFnZSA9IHBhcnRzWzJdO1xuICAgICAgcGFnZVVSTC5jYXRlZ29yeSA9IHBhcnRzWzNdO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSAhPT0gJycgJiYgcGFydHNbcGFydHMubGVuZ3RoIC0gMV0gIT09ICdpbmRleC5odG1sJykge1xuICAgIHBhZ2VVUkwuc2x1ZyA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIHBhZ2VVUkwuc2x1ZyA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdO1xuICB9XG5cbiAgaWYgKHBhZ2VVUkwuc2x1Zykge1xuICAgIGlmIChwYWdlVVJMLnNsdWcuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgdmFyIHNsdWdnZXIgPSBwYWdlVVJMLnNsdWcuc3BsaXQoJy4nKTtcbiAgICAgIHBhZ2VVUkwubmFtZSA9IHNsdWdnZXJbMF07XG4gICAgICBwYWdlVVJMLmV4dGVuc2lvbiA9IHNsdWdnZXJbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VVUkwubmFtZSA9IHBhZ2VVUkwuc2x1ZztcbiAgICAgIHBhZ2VVUkwuZXh0ZW5zaW9uID0gJyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhZ2VVUkwuc2x1ZyA9ICcnO1xuICAgIHBhZ2VVUkwubmFtZSA9ICcnO1xuICAgIHBhZ2VVUkwuZXh0ZW5zaW9uID0gJyc7XG4gIH1cblxuICBpZiAocGFydHMubGVuZ3RoIDw9IDQgJiYgd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLkxBTkdVQUdFUy5pbmRleE9mKHBhZ2VVUkwuc2x1ZykgIT09IC0xKSB7XG4gICAgcGFnZVVSTC5zbHVnID0gcGFnZVVSTC5jb3VudHJ5O1xuICB9XG5cbiAgaWYgKGhhc2gpIHtcbiAgICBwYWdlVVJMLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgaWYgKHBhcnRzLmxlbmd0aCA+PSA1KSB7XG4gICAgcGFnZVVSTC5zdWJjYXRlZ29yeSA9IHBhcnRzWzNdO1xuICB9XG5cbiAgaWYgKHBhZ2VVUkwucGF0aG5hbWUgJiYgcGFnZVVSTC5wYXRobmFtZS5pbmRleE9mKCdwcmlvcml0eScpICE9PSAtMSkge1xuICAgIHBhZ2VVUkwuc2VnbWVudCA9ICdwcmlvcml0eSc7XG4gIH0gZWxzZSBpZiAocGFnZVVSTC5wYXRobmFtZSAmJiBwYWdlVVJMLnBhdGhuYW1lLmluZGV4T2YoJ2J1c2luZXNzJykgIT09IC0xKSB7XG4gICAgcGFnZVVSTC5zZWdtZW50ID0gJ2J1c2luZXNzJztcbiAgfVxuXG4gIGlmIChjb3VudHJ5TWFwcGluZ1twYWdlVVJMLmNvdW50cnldKSB7XG4gICAgcGFnZVVSTC5jb3VudHJ5ID0gY291bnRyeU1hcHBpbmdbcGFnZVVSTC5jb3VudHJ5XTtcbiAgfVxuXG4gIHJldHVybiBwYWdlVVJMO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBVUkwgYW5kIHJldHVybnMgaXRzIGNvbXBvbmVudHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIFVSTCB0byBwYXJzZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHBhcnNlZCBVUkwgY29tcG9uZW50cy5cbiAqL1xuY29uc3QgcGFyc2VVcmwgPSB1cmwgPT4ge1xuICB2YXIgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwYXJzZXIuaHJlZiA9IHVybDtcbiAgaWYgKHBhcnNlci5wcm90b2NvbCAhPSAnbWFpbHRvOicpIHtcbiAgICB2YXIgbGlua19wYXRoID0gJy8nID09PSBwYXJzZXIucGF0aG5hbWUuY2hhckF0KDApID8gcGFyc2VyLnBhdGhuYW1lIDogJy8nICsgcGFyc2VyLnBhdGhuYW1lO1xuICB9IGVsc2Uge1xuICAgIGxpbmtfcGF0aCA9IHBhcnNlci5wYXRobmFtZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhyZWY6IHBhcnNlci5ocmVmLFxuICAgIHByb3RvY2FsOiBwYXJzZXIucHJvdG9jb2wsXG4gICAgaG9zdG5hbWU6IHBhcnNlci5ob3N0bmFtZSxcbiAgICBwb3J0OiBwYXJzZXIucG9ydCxcbiAgICBwYXRobmFtZTogcGFyc2VyLmhhc2guaW5kZXhPZignPycpICE9PSAtMSA/IGxpbmtfcGF0aCArIHBhcnNlci5oYXNoIDogbGlua19wYXRoLFxuICAgIHJhd3BhdGg6IGxpbmtfcGF0aCxcbiAgICBxdWVyeTogcGFyc2VyLnF1ZXJ5IHx8IHBhcnNlci5zZWFyY2gsXG4gICAgc2VhcmNoOiBwYXJzZXIucXVlcnkgfHwgcGFyc2VyLnNlYXJjaCxcbiAgICBoYXNoOiBwYXJzZXIuaGFzaCxcbiAgICBob3N0OiBwYXJzZXIuaG9zdFxuICB9O1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHBhZ2UgY29udGV4dCBmcm9tIG1ldGEgdGFncyBhbmQgVVJMIGJyZWFrZG93bi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHBhZ2UgY29udGV4dC5cbiAqL1xuY29uc3QgZ2V0UGFnZUNvbnRleHQgPSAoKSA9PiB7XG4gIHZhciAkdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgdmFyICRjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwic2M6Y291bnRyeVwiXScpO1xuICB2YXIgJGxhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwic2M6bGFuZ3VhZ2VcIl0nKTtcbiAgdmFyICRzZWdtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwic2M6c2VnbWVudFwiXScpO1xuICB2YXIgJGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwic2M6Y2F0ZWdvcmllc1wiXScpO1xuICB2YXIgJHN1YmNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwic2M6c3ViY2F0ZWdvcmllc1wiXScpO1xuICB2YXIgJHNsdWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJzYzpwYWdlLXNsdWdcIl0nKTtcblxuICB2YXIgcGFnZUNvbnRleHQgPSB7XG4gICAgdGl0bGU6IG51bGwsXG4gICAgY291bnRyeTogbnVsbCxcbiAgICBsYW5ndWFnZTogbnVsbCxcbiAgICBzZWdtZW50OiBudWxsLFxuICAgIGNhdGVnb3J5OiBudWxsLFxuICAgIHN1YmNhdGVnb3J5OiBudWxsLFxuICAgIHNsdWc6IG51bGxcbiAgfTtcblxuICBpZiAoJHRpdGxlKSB7XG4gICAgcGFnZUNvbnRleHQudGl0bGUgPSAkdGl0bGU7XG4gIH1cblxuICBpZiAoJGNvdW50cnkpIHtcbiAgICBwYWdlQ29udGV4dC5jb3VudHJ5ID0gJGNvdW50cnkuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gIH1cblxuICBpZiAoJGxhbmd1YWdlKSB7XG4gICAgcGFnZUNvbnRleHQubGFuZ3VhZ2UgPSAkbGFuZ3VhZ2UuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gIH1cblxuICBpZiAoIXBhZ2VDb250ZXh0Lmxhbmd1YWdlKSB7XG4gICAgdmFyIGRvY0xhbmcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZztcbiAgICBpZiAoZG9jTGFuZykge1xuICAgICAgLy8gRG9jdW1lbnQgbGFuZ3VhZ2UgY2FuIGJlIGluIGxhbmd1YWdlQ29kZS1jb3VudHJ5Q29kZSBmb3JtYXQsIGUuZyBlbi1VUy5cbiAgICAgIC8vIEluIGZyb250LWVuZCBjb250ZXh0LCB3ZSBkb24ndCBuZWVkIGNvdW50cnlDb2RlIHBhcnRcbiAgICAgIHBhZ2VDb250ZXh0Lmxhbmd1YWdlID0gZG9jTGFuZy5zcGxpdCgnLScpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCRzZWdtZW50KSB7XG4gICAgcGFnZUNvbnRleHQuc2VnbWVudCA9ICRzZWdtZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICB9XG5cbiAgaWYgKCRjYXRlZ29yeSkge1xuICAgIHBhZ2VDb250ZXh0LmNhdGVnb3J5ID0gJGNhdGVnb3J5LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICB9XG5cbiAgaWYgKCRzdWJjYXRlZ29yeSkge1xuICAgIHBhZ2VDb250ZXh0LnN1YmNhdGVnb3J5ID0gJHN1YmNhdGVnb3J5LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICB9XG5cbiAgaWYgKCRzbHVnKSB7XG4gICAgcGFnZUNvbnRleHQuc2x1ZyA9ICRzbHVnLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICB9XG5cbiAgcmV0dXJuIGV4dGVuZCh1cmxCcmVha2Rvd24od2luZG93LmxvY2F0aW9uLmhyZWYpLCBwYWdlQ29udGV4dCk7XG59O1xuXG4vKipcbiAqIEV4dGVuZHMgYW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyBmcm9tIGFub3RoZXIgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIFRoZSBvYmplY3QgdG8gZXh0ZW5kLlxuICogQHBhcmFtIHtPYmplY3R9IHNyYyAtIFRoZSBvYmplY3QgcHJvdmlkaW5nIHRoZSBuZXcgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBleHRlbmRlZCBvYmplY3QuXG4gKi9cbmNvbnN0IGV4dGVuZCA9IChvYmosIHNyYykgPT4ge1xuICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgb2JqW2tleV0gPSBzcmNba2V5XTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGN1cnJlbnQgY291bnRyeSBmcm9tIHRoZSBwYWdlIGNvbnRleHQgb3IgVVJMLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGN1cnJlbnQgY291bnRyeS5cbiAqL1xuY29uc3QgZ2V0Q3VycmVudENvdW50cnkgPSAoKSA9PiB7XG4gIHZhciBwYWdlQ29udGV4dCA9IGdldFBhZ2VDb250ZXh0KCk7XG4gIGlmIChwYWdlQ29udGV4dC5jb3VudHJ5KSB7XG4gICAgcmV0dXJuIHBhZ2VDb250ZXh0LmNvdW50cnk7XG4gIH1cbiAgcmV0dXJuIHVybEJyZWFrZG93bih3aW5kb3cubG9jYXRpb24uaHJlZikuY291bnRyeTtcbn07XG5cbi8qKlxuICogVHJpbXMgd2hpdGVzcGFjZSBmcm9tIGEgZ2l2ZW4gdGV4dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0cmltbWVkIHRleHQuXG4gKi9cbmNvbnN0IHRyaW0gPSB0ZXh0ID0+IHtcbiAgaWYgKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC50cmltKCk7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59O1xuXG4vKipcbiAqIHdpbGwgbW92ZWQgdGhpcyBmdW5jdGlvbiB0byBFeHRlcm5hbExpbmtzRGlzY2xhaW1lciBvbmNlIG1pZ3JhdGlvbiBjb21wbGV0ZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gZG9tYWluIG5hbWVcbiAqIEBleGFtcGxlXG4gKiBpc0ludGVybmFsRG9tYWluKCd3d3cuc2MuY29tJylcbiAqL1xuY29uc3QgaXNJbnRlcm5hbERvbWFpbiA9IChkb21haW4sIGN0YVVybCkgPT4ge1xuICBpZiAoaXNGb3JtKGN0YVVybCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBMaXN0IG9mIGFsbCByZWd1bGFyIGV4cHJlc3Npb24gZm9yIGludGVybmFsIGRvbWFpbnNcbiAgY29uc3QgaW50ZXJuYWwgPSBbXG4gICAgL15teWluZm9zZy5hcGkuZ292LnNnJC8sXG4gICAgL15zYy5jb20kLyxcbiAgICAvXi4qXFwuc2NcXC5jb20kLyxcbiAgICAvXnN0YW5kYXJkY2hhcnRlcmVkLmNvbSQvLFxuICAgIC9eLipcXC5zdGFuZGFyZGNoYXJ0ZXJlZFxcLmNvbS8sXG4gICAgL14uKlxcLnN0YW5kYXJkY2hhcnRlcmVkXFwuY29tXFwuLiovLFxuICAgIC9ec3RhbmRhcmRjaGFydGVyZWRcXC5jb1xcLi4qJC8sXG4gICAgL14uKlxcLnN0YW5kYXJkY2hhcnRlcmVkXFwuY29cXC4uKiQvLFxuICAgIC93d3cud293bWFuaGF0dGFuLmNvbS5zZy8sXG4gICAgL3NhbWwuc2luZ3Bhc3MuZ292LnNnLyxcbiAgICAvc2NiLXNnLm9uZWxpbmsubWUvLFxuICAgIC8jbnVsbC9cbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVybmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGludGVybmFsW2ldLnRlc3QoZG9tYWluKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFydG5lclVybHMgPSB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuQUxMT1dBQkxFX1FVRVJZU1RSSU5HWydwYXJ0bmVyLXVybHMnXTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkocGFydG5lclVybHMpIHx8IHBhcnRuZXJVcmxzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTsgLy8gTm8gVVJMcyB0byBjaGVja1xuICB9XG5cbiAgY29uc3QgcGFydG5lclN0YXR1cyA9IHBhcnRuZXJVcmxzLnNvbWUodXJsID0+XG4gICAgbmV3IFJlZ0V4cChgXiR7dXJsLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyl9YCwgJ2knKS50ZXN0KGN0YVVybClcbiAgKTtcblxuICBpZiAoIXBhcnRuZXJTdGF0dXMgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZGFsLWlkPVwiZXh0ZXJuYWwtbGlua3MtZGlzY2xhaW1lclwiXScpKSB7XG4gICAgLy9ObyBkaXNjbGFpbWVyIGNvZGUgYWRkZWQsIHNvIGRpcmVjdGx5IGdvIHRvIHRoZSBjbGlja2VkIFVSTFxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBwYXJ0bmVyU3RhdHVzO1xufTtcblxuLyoqXG4gKiBjYXB0dXJlIGhvcml6b250YWwgY2xpY2sgcG9zaXRpb24gYW5kIHJldHVybiBpdCdzIGxlZnQgb3IgcmlnaHRcbiAqIEBwYXJhbSB7TnVtYmVyfSB4Q2xpY2sgaG9yaXpvbnRhbCBjbGljayBwb3NpdGlvblxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm4gaXQncyBsZWZ0IG9yIHJpZ2h0XG4gKiBAZXhhbXBsZVxuICogZ2V0SG9yaXpvbnRhbFBvc2l0aW9uKDEwMDApXG4gKi9cbmNvbnN0IGdldEhvcml6b250YWxQb3NpdGlvbiA9IHhDbGljayA9PiB7XG4gIGlmICgheENsaWNrKSByZXR1cm4gJ2xlZnQnO1xuICBjb25zdCBtYXhXaWR0aCA9IE1hdGgubWF4KFxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLFxuICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICApO1xuICBjb25zdCBta3RDb3VudHJ5Q29kZSA9IGdldEN1cnJlbnRDb3VudHJ5KCk7XG4gIGlmIChta3RDb3VudHJ5Q29kZSAhPT0gJ2hrJyAmJiBta3RDb3VudHJ5Q29kZSAhPT0gJ3NnJykge1xuICAgIGNvbnN0IG1lZGlhbiA9IG1heFdpZHRoIC8gMjtcbiAgICByZXR1cm4geENsaWNrIDwgbWVkaWFuID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgfVxuXG4gIC8vU29ydGVkIGFycmF5IG9mIHBvc2l0aW9uc1xuICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2xlZnQnLFxuICAgICAgZGVwdGg6IDMwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBta3RDb3VudHJ5Q29kZSA9PT0gJ3NnJyA/ICdjZW50ZXInIDogJ21pZGRsZScsXG4gICAgICBkZXB0aDogNzBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdyaWdodCcsXG4gICAgICBkZXB0aDogMTAwXG4gICAgfVxuICBdO1xuICBjb25zdCBzY3JvbGxEZXB0aCA9ICh4Q2xpY2sgKiAxMDApIC8gbWF4V2lkdGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNjcm9sbERlcHRoIDwgcG9zaXRpb25zW2ldLmRlcHRoKSB7XG4gICAgICByZXR1cm4gcG9zaXRpb25zW2ldLm5hbWU7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIHJldHVybiBjb29raWUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgaXMgdGhlIG5hbWUgb2YgdGhlIGNvb2tpZVxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm4gc2VsZWN0ZWQgY29va2llIHZhbHVlXG4gKiBAZXhhbXBsZVxuICogZ2V0Q29va2llKCdzdWJDaGFuQ29kZScpXG4gKi9cbmNvbnN0IGdldENvb2tpZSA9IGtleSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBrZXkgKyAnPSc7XG4gIGxldCBkZWNvZGVkQ29va2llO1xuXG4gIHRyeSB7XG4gICAgLy9UaGUgZGVjb2RlVVJJQ29tcG9uZW50IGZ1bmN0aW9uIGNhbiB0aHJvdyBhbiBlcnJvciBpZiB0aGUgY29va2llIHZhbHVlIGNvbnRhaW5zIGludmFsaWQgZW5jb2RpbmcsIHdoaWNoIG1pZ2h0IGhhcHBlbiBpZiBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGltcHJvcGVybHkgZW5jb2RlZC4gVG8gZml4IHRoaXMsIHlvdSBjYW4gYWRkIGEgdHJ5LWNhdGNoIGJsb2NrIGFyb3VuZCBkZWNvZGVVUklDb21wb25lbnQgdG8gaGFuZGxlIGFueSBkZWNvZGluZyBlcnJvcnMgZ3JhY2VmdWxseS5cbiAgICBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGMgPSBjYVtpXTtcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIE1ldGhvZCB0byBnZXQgbG9jYWxzdG9yYWdlIHZhbHVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5jb25zdCBnZXRMb2NhbFN0b3JhZ2VXaXRoRXhwaXJ5ID0ga2V5ID0+IHtcbiAgY29uc3QgaXRlbVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIC8vIGlmIHRoZSBpdGVtIGRvZXNuJ3QgZXhpc3QsIHJldHVybiBudWxsXG4gIGlmICghaXRlbVN0cikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1TdHIpO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAvLyBjb21wYXJlIHRoZSBleHBpcnkgdGltZSBvZiB0aGUgaXRlbSB3aXRoIHRoZSBjdXJyZW50IHRpbWVcbiAgaWYgKG5vdy5nZXRUaW1lKCkgPiBpdGVtLmV4cGlyeSkge1xuICAgIC8vIElmIHRoZSBpdGVtIGlzIGV4cGlyZWQsIGRlbGV0ZSB0aGUgaXRlbSBmcm9tIHN0b3JhZ2VcbiAgICAvLyBhbmQgcmV0dXJuIG51bGxcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBpdGVtLnZhbHVlO1xufTtcblxuLyoqXG4gKiBjYWxjdWxhdGUgdmVydGljYWwgcG9zaXRpb25cbiAqIEBwYXJhbSB7RXZlbnR9IHRhcmdldCBldmVudCBvZiB0aGUgc2VsZWN0b3JcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJuIHRvcCwgbWlkZGxlLCBib3R0b20sIHBlcnNpc3RlbnQtYmFyLCBsaWdodGJveCBldGMuXG4gKiBAZXhhbXBsZVxuICogY2FsY0VsZW1lbnRMb2NhdGlvbihldmVudClcbiAqL1xuXG4vLyBDVEEgUG9zdGlvblxuY29uc3QgY2FsY0VsZW1lbnRMb2NhdGlvbiA9IHRhcmdldCA9PiB7XG4gIGlmICghdGFyZ2V0KSByZXR1cm4gJyc7XG4gIGlmICh0YXJnZXQuY2xvc2VzdCgnLmMtbW9kYWwnKSB8fCB0YXJnZXQuY2xvc2VzdCgnLnNjLW1vZGFsJykpIHtcbiAgICByZXR1cm4gJ21pZGRsZSc7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIHRhcmdldC5jbGFzc05hbWUgPT09ICdzdHJpbmcnICYmXG4gICAgdHlwZW9mIHRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgKHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignc2MtY2FyZC1jb21wYXJhdG9yX19jb21wYXJlLWJ0bicpICE9PSAtMSB8fFxuICAgICAgdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdzYy1jYXJkLWNvbXBhcmF0b3JfX2NhcmQtcmVtb3ZlJykgIT09IC0xKVxuICApIHtcbiAgICByZXR1cm4gJ2JvdHRvbSc7XG4gIH1cblxuICBjb25zdCBjbG9zZXN0VGFyZ2V0ID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKSA/PyB0YXJnZXQuY2xvc2VzdCgnbGFiZWwnKSA/PyB0YXJnZXQ7XG4gIGxldCBmcm9tVG9wID0gcGFyc2VJbnQoZ2V0UG9zaXRpb24oY2xvc2VzdFRhcmdldCksIDEwKSAqIDEwMDtcbiAgaWYgKFxuICAgIHRhcmdldC5jbG9zZXN0KCcuc2MtcGVyc2lzdGVudC1iYXInKSA/P1xuICAgIHRhcmdldC5jbG9zZXN0KCcubS1wZXJzaXN0ZW50LWJvb3RvbS1iYXInKSA/P1xuICAgIHRhcmdldC5jbG9zZXN0KCcuc2Mtd2VhbHRoc2F2ZXItY2FsY19fc3RpY2t5JykgPz9cbiAgICB0YXJnZXQuY2xvc2VzdCgnLnNjLWZ0LWNhbGNfX3N0aWNreScpID8/XG4gICAgdGFyZ2V0LmNsb3Nlc3QoJy5zYy1taWxlcy1jYWxjX190b3RhbC1yZXN1bHQtLXN0aWNreScpID8/XG4gICAgdGFyZ2V0LmNsb3Nlc3QoJy5zYy1idW5kbGVkLXByb2R1Y3RzX19zdGlja3ktb3V0ZXInKSA/P1xuICAgIHRhcmdldC5jbG9zZXN0KCcuc2MtYnVuZGxlZC1wcm9kdWN0cy1zdGlja3lfX3N0aWNreScpXG4gICkge1xuICAgIC8vUGVyc2lzdGVudCBiYXIgaW4gdGhlIGJvdHRvbVxuICAgIGZyb21Ub3AgPSBwYXJzZUludCh3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCwgMTApICogMTAwO1xuICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KCcubS1wZXJzaXN0ZW50LWJhcicpKSB7XG4gICAgLy9QZXJzaXN0ZW50IGJhciBpbiB0aGUgdG9wXG4gICAgZnJvbVRvcCA9IHBhcnNlSW50KHdpbmRvdy5zY3JvbGxZICsgNzAsIDEwKSAqIDEwMDtcbiAgfVxuXG4gIC8vU29ydGVkIGFycmF5IG9mIHBvc2l0aW9uc1xuICBsZXQgcG9zaXRpb25zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICd0b3AnLFxuICAgICAgZGVwdGg6IDMwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbWlkZGxlJyxcbiAgICAgIGRlcHRoOiA3MFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2JvdHRvbScsXG4gICAgICBkZXB0aDogMTAwXG4gICAgfVxuICBdO1xuICBsZXQgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIHdpbmRvdy5vdXRlckhlaWdodCk7XG4gIGlmIChtYXhIZWlnaHQgPD0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBsZXQgc2Nyb2xsRGVwdGggPSBmcm9tVG9wIC8gbWF4SGVpZ2h0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzY3JvbGxEZXB0aCA8IHBvc2l0aW9uc1tpXS5kZXB0aCkge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uc1tpXS5uYW1lO1xuICAgIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmRleE9mKCdzYy1oZHJfX3NlYXJjaCcpICE9PSAtMVxuICApIHtcbiAgICByZXR1cm4gJ3RvcCc7XG4gIH1cbiAgcmV0dXJuICdib3R0b20nO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudEVudmlyb25tZW50ID0gKCkgPT4ge1xuICB2YXIgdXJsT2JqID0gd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLlVSTF9PQko7XG4gIHZhciBkb21haW4gPSBnZXRQYWdlVXJsKCkuZG9tYWluO1xuICBpZiAoZG9tYWluLmluZGV4T2YodXJsT2JqWzNdICsgJy4nICsgdXJsT2JqWzRdKSAhPT0gLTEpIHtcbiAgICBpZiAoZG9tYWluID09PSB1cmxPYmpbMF0gKyAnLicgKyB1cmxPYmpbM10gKyAnLicgKyB1cmxPYmpbNF0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuREVWRUxPUE1FTlQ7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09IHVybE9ialsxMl0gKyAnLicgKyB1cmxPYmpbM10gKyAnLicgKyB1cmxPYmpbNF0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuU1RBR0lORztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gdXJsT2JqWzEzXSArICcuJyArIHVybE9ialszXSArICcuJyArIHVybE9ials0XSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5zY0NvbW1vbkNvbnN0YW50cy5QUkVWSUVXO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLlBST0RVQ1RJT047XG4gICAgfVxuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gdXJsT2JqWzFdICsgJy4nICsgdXJsT2JqWzJdICsgJy4nICsgdXJsT2JqWzRdKSB7XG4gICAgaWYgKGdldFBhZ2VVcmwoKS5wYXRobmFtZS5tYXRjaCgnXi9zdGFnaW5nJykpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuU1RBR0lORztcbiAgICB9IGVsc2UgaWYgKGdldFBhZ2VVcmwoKS5wYXRobmFtZS5tYXRjaCgnXi9kZXZlbG9wbWVudCcpKSB7XG4gICAgICByZXR1cm4gd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLkRFVkVMT1BNRU5UO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLlBSRVZJRVc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuREVWRUxPUE1FTlQ7XG4gIH1cbn07XG5cbmNvbnN0IGdldFBhZ2VVcmwgPSAoKSA9PiB7XG4gIHJldHVybiBnZXRQYWdlQ29udGV4dCgpO1xufTtcblxuLyoqXG4gKiBnZXQgaW50ZXJuYWwgYW5kIGV4dGVybmFsIGNhbXBhaWduIGluZm9cbiAqIEBleGFtcGxlXG4gKiBnZXRJbnRFeHRDYW1wYWlnbkluZm8oJ2luJylcbiAqL1xuY29uc3QgZ2V0SW50RXh0Q2FtcGFpZ25JbmZvID0gY291bnRyeSA9PiB7XG4gIGxldCBhbGxvd2FibGVRdWVyeVN0cmluZyA9IHdpbmRvdy5zY0NvbW1vbkNvbnN0YW50cy5BTExPV0FCTEVfUVVFUllTVFJJTkcuc2NiO1xuICBpZiAoY291bnRyeSA9PSAnaW4nIHx8IGNvdW50cnkgPT0gJ3BrJyB8fCBjb3VudHJ5ID09ICdoaycpIHtcbiAgICAvL1NwZWNpYWwgd2hpdGVsaXN0ZWQgcGFyYW1ldGVyc1xuICAgIGFsbG93YWJsZVF1ZXJ5U3RyaW5nID0gW1xuICAgICAgJ2FnZ3JlZ2F0b3JfY29kZScsXG4gICAgICAnYWdncmVnYXRvcl90eXBlJyxcbiAgICAgICdhZ2dyZWdhdG9yX2luc3RhbmNlJyxcbiAgICAgICdpbnRjaWQnLFxuICAgICAgJ3N1YkNoYW5Db2RlJyxcbiAgICAgICdyZWZlcklkJyxcbiAgICAgICdpbnN0YW5jZScsXG4gICAgICAnY2FtcF9pZCcsXG4gICAgICAncGlkJyxcbiAgICAgICdwcm9tb0NvZGUnLFxuICAgICAgJ3Byb21vJyxcbiAgICAgICdzdGF0ZSdcbiAgICBdO1xuICB9XG4gIGxldCBleHRlcm5hbENhbXBhaWduUGFyYW1zID0gWydjaWQnXTsgLy9leHRlcm5hbCBjYW1wYWlnbiBwYXJhbWV0ZXIocykgZm9yIEhLXG4gIGxldCB0b3RhbCA9IGFsbG93YWJsZVF1ZXJ5U3RyaW5nLmxlbmd0aDtcbiAgbGV0IGludENhbXBhaWduTmFtZSA9ICcnO1xuICBsZXQgaW50Q2FtcGFpZ25WYWx1ZSA9ICcnO1xuICBsZXQgcXVlcnlTdHJpbmdMaXN0ID0gW107XG4gIGxldCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gIGxldCBleHRDYW1wYWlnbk5hbWUgPSAnJztcbiAgbGV0IGV4dENhbXBhaWduVmFsdWUgPSAnJztcblxuICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nLnN1YnN0cmluZygxKTtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nTGlzdCA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJyk7XG4gICAgfVxuICB9XG4gIC8vVGFrZSBpdCBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgbGV0IGZvdW5kUGFyYW0gPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgbGV0IGNvb2tpZVZhbHVlID0gZ2V0Q29va2llKGFsbG93YWJsZVF1ZXJ5U3RyaW5nW2ldKTtcbiAgICBsZXQgbG9jYWxTdG9yYWdlVmFsdWUgPSBnZXRMb2NhbFN0b3JhZ2VXaXRoRXhwaXJ5KGFsbG93YWJsZVF1ZXJ5U3RyaW5nW2ldKTtcblxuICAgIGlmIChjb29raWVWYWx1ZSB8fCBsb2NhbFN0b3JhZ2VWYWx1ZSkge1xuICAgICAgZm91bmRQYXJhbSA9IHRydWU7XG4gICAgICBpZiAoaW50Q2FtcGFpZ25OYW1lICYmIGludENhbXBhaWduVmFsdWUpIHtcbiAgICAgICAgaW50Q2FtcGFpZ25OYW1lICs9ICc6JztcbiAgICAgICAgaW50Q2FtcGFpZ25WYWx1ZSArPSAnOic7XG4gICAgICB9XG4gICAgICBpbnRDYW1wYWlnbk5hbWUgKz0gYWxsb3dhYmxlUXVlcnlTdHJpbmdbaV07XG4gICAgICBpbnRDYW1wYWlnblZhbHVlICs9IGNvb2tpZVZhbHVlIHx8IGxvY2FsU3RvcmFnZVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW50Q2FtcGFpZ25OYW1lKSB7XG4gICAgICAgIGludENhbXBhaWduTmFtZSArPSAnOic7XG4gICAgICAgIGludENhbXBhaWduVmFsdWUgKz0gJzonO1xuICAgICAgfVxuICAgICAgaW50Q2FtcGFpZ25OYW1lICs9IGFsbG93YWJsZVF1ZXJ5U3RyaW5nW2ldO1xuICAgICAgaWYgKHF1ZXJ5U3RyaW5nTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcXVlcnlTdHJpbmdMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcXVlcnlTdHJpbmdMaXN0W2pdLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgaWYgKHJlc3VsdFswXS50b0xvd2VyQ2FzZSgpID09IGFsbG93YWJsZVF1ZXJ5U3RyaW5nW2ldKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgZm91bmRQYXJhbSA9IHRydWU7XG4gICAgICAgICAgaW50Q2FtcGFpZ25WYWx1ZSArPSByZXN1bHRbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW50Q2FtcGFpZ25WYWx1ZSArPSAnbmEnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnRDYW1wYWlnblZhbHVlICs9ICduYSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9FeHRlcm5hbCBjYW1wYWlnblxuICBpZiAocXVlcnlTdHJpbmdMaXN0Lmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlTdHJpbmdMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gcXVlcnlTdHJpbmdMaXN0W2ldLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoYWxsb3dhYmxlUXVlcnlTdHJpbmcuaW5kZXhPZihyZXN1bHRbMF0pID09PSAtMSkge1xuICAgICAgICAvL2V4Y2x1ZGUgd2hpdGVsaXN0ZWQgcGFyYW1ldGVycyBmcm9tIGV4dGVybmFsIGNhbXBhaWduXG4gICAgICAgIGlmIChjb3VudHJ5ICE9PSAnaGsnIHx8IGV4dGVybmFsQ2FtcGFpZ25QYXJhbXMuaW5kZXhPZihyZXN1bHRbMF0pICE9PSAtMSkge1xuICAgICAgICAgIGlmIChleHRDYW1wYWlnblZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICBleHRDYW1wYWlnbk5hbWUgKz0gJzonO1xuICAgICAgICAgICAgZXh0Q2FtcGFpZ25WYWx1ZSArPSAnOic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4dENhbXBhaWduTmFtZSArPSByZXN1bHRbMF07XG4gICAgICAgICAgZXh0Q2FtcGFpZ25WYWx1ZSArPSByZXN1bHRbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIWZvdW5kUGFyYW0gJiYgKGNvdW50cnkgPT0gJ2luJyB8fCBjb3VudHJ5ID09ICdoaycpKSB7XG4gICAgaW50Q2FtcGFpZ25OYW1lID0gJyc7XG4gICAgaW50Q2FtcGFpZ25WYWx1ZSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGludENhbXBhaWduTmFtZSA9IGludENhbXBhaWduTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGludENhbXBhaWduVmFsdWUgPSBpbnRDYW1wYWlnblZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgaWYgKCFleHRDYW1wYWlnbk5hbWUpIHtcbiAgICBleHRDYW1wYWlnbk5hbWUgPSBleHRDYW1wYWlnbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBleHRDYW1wYWlnblZhbHVlID0gZXh0Q2FtcGFpZ25WYWx1ZS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW50TmFtZTogaW50Q2FtcGFpZ25OYW1lLFxuICAgIGludFZhbDogaW50Q2FtcGFpZ25WYWx1ZSxcbiAgICBleHROYW1lOiBleHRDYW1wYWlnbk5hbWUsXG4gICAgZXh0VmFsOiBleHRDYW1wYWlnblZhbHVlXG4gIH07XG59O1xuXG4vKipcbiAqIHJldHVybiBhYnNvbHV0ZSBwb3NpdGlvbiBvZiBzZWxlY3RlZCBkaXYgaW4gcHhcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbGVtZW50IGNsYXNzIGVsZW1lbnRzIG5hbWUgYXMgYW4gb2JqZWN0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHJldHVybiBob3Jpem9udGFsIHBvc2l0aW9uIGluIHB4XG4gKiBAZXhhbXBsZVxuICogZ2V0UG9zaXRpb24oJy5zZWxlY3RvcicpXG4gKi9cbmNvbnN0IGdldFBvc2l0aW9uID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuICcnO1xuICBsZXQgeVBvc2l0aW9uID0gMDtcbiAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICB5UG9zaXRpb24gKz0gZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnNjcm9sbFRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgfVxuICByZXR1cm4geVBvc2l0aW9uO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBkZXRlY3QgdGhlIHVzZXIncyBvcGVyYXRpbmcgc3lzdGVtXG4gKi9cbmNvbnN0IGRldGVjdE9TID0gKCkgPT4ge1xuICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuXG4gIC8vIGlPUyBkZXRlY3Rpb25cbiAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSkge1xuICAgIHJldHVybiAnaU9TJztcbiAgfVxuXG4gIC8vIEFuZHJvaWQgZGV0ZWN0aW9uXG4gIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkge1xuICAgIHJldHVybiAnQW5kcm9pZCc7XG4gIH1cblxuICByZXR1cm4gJ1Vua25vd24nO1xufTtcblxuLyoqXG4gKiBjaGVjayBjbGFzcyBuYW1lIGFuZCByZXR1cm4gbGluayB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNsaWNrZWQgZWxlbWVudFxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm4gbGluayB0eXBlIGxpa2UgbGluaywgYnV0dG9uLCBjYXJvdXNlbCBldGNcbiAqIEBleGFtcGxlXG4gKiBnZXRDdGFUeXBlKCdzYy1idG4nKVxuICovXG4vLyBDVEEgVHlwZVxuY29uc3QgZ2V0Q3RhVHlwZSA9IChjbGFzc05hbWUsIHRhcmdldCkgPT4ge1xuICBjb25zdCBta3RDb3VudHJ5Q29kZSA9IGdldEN1cnJlbnRDb3VudHJ5KCk7XG4gIGlmIChta3RDb3VudHJ5Q29kZSA9PT0gJ2hrJyB8fCBta3RDb3VudHJ5Q29kZSA9PT0gJ3NnJykge1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoXG4gICAgICAgICAgJy5zYy1tZWdhbmF2X19oYW1idXJnZXIsIC5zYy1tZWdhbmF2X19jbG9zZS1idXR0b24sIC5zYy1tZWdhbmF2X19sb2dpbi1idG4sIC5zYy1tZWdhbmF2X19sb2dpbi1jbG9zZSwgLmMtYnV0dG9uLCAuc2MtYnRuJ1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdidXR0b24nO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuc2MtbWVnYW5hdl9fYnRuLXNlYXJjaC1tYmwnKSkge1xuICAgICAgICByZXR1cm4gJ3NlYXJjaCc7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJ2hlYWRlcicpKSB7XG4gICAgICAgIHJldHVybiAnbmF2LWxpbmsnO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXQuY2xvc2VzdChcbiAgICAgICAgICAnLnNjLXJlY29tbWVuZCAuc2MtZmlsdGVyX19idG4sIC5zYy1kaWdpdGFsLWd1aWRlX190YWItaXRlbSwgLnNjLXRhYi1taW5pbWFsX19oZWFkLWJ1dHRvbiwgLnNjLXJpZ2h0LXRhYiAuc3BsaWRlX19zbGlkZSwgLnNjLXRhYl9faXRlbSdcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAndGFiJztcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoXG4gICAgICAgICAgJy5zYy1hY2NvcmRpb25fX2xhYmVsLCAuc2MtZmFxLXR3by1jb2x1bW5fX2xhYmVsLCAuc2MtZmFxX19hY2NvcmRpb24tbGFiZWwsIC5jLXBsdXMtbWludXMtYWNjb3JkaW9uX19faXRlbSdcbiAgICAgICAgKSAmJlxuICAgICAgICAhdGFyZ2V0LmNsb3Nlc3QoJ2EnKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnYWNjb3JkaW9uJztcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLnNjLXF1aWNrLXRvb2xzLCAubS1xdWljay1saW5rcycpKSB7XG4gICAgICAgIHJldHVybiAncXVpY2stbGlua3MnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ2xpbmsnO1xuICB9IGVsc2Uge1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsb3Nlc3QoJ2hlYWRlcicpKSB7XG4gICAgICByZXR1cm4gJ25hdi1saW5rJztcbiAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xvc2VzdCgnLnNjLWJhbm5lcl9fY29udGVudCcpKSB7XG4gICAgICByZXR1cm4gJ21hc3RoZWFkLWJ1dHRvbic7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsb3Nlc3QoJy5zYy1iYW5uZXItc2xpZGVyX190aHVtYm5haWwnKSkge1xuICAgICAgcmV0dXJuICdidXR0b24nO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbG9zZXN0KCcuc2MtYmVuZWZpdHMtc2xpZGVyLXRhYl9fdGFicy0wJykpIHtcbiAgICAgIHJldHVybiAnYnV0dG9uJztcbiAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xvc2VzdCgnLnNjLWJhbm5lci1wcnpuLWJsb2NrJykpIHtcbiAgICAgIHJldHVybiAnd2lkZ2V0LWJ1dHRvbic7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsb3Nlc3QoJy5zYy1maWx0ZXJfX2J0bicpKSB7XG4gICAgICByZXR1cm4gJ2J1dHRvbic7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsb3Nlc3QoJy5zYy1xdWljay10b29sc19fbGlua3MnKSkge1xuICAgICAgcmV0dXJuICdxdWljay1saW5rJztcbiAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xvc2VzdCgnLnNjLWZpbHRlcicpKSB7XG4gICAgICByZXR1cm4gJ2J1dHRvbic7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsb3Nlc3QoJy5zYy1kaWdpdGFsLWd1aWRlIC5zcGxpZGUnKSkge1xuICAgICAgcmV0dXJuICdidXR0b24nO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbG9zZXN0KCcuc2MtYmVuZWZpdHMtc2xpZGVyLXRhYl9fdGFiJykpIHtcbiAgICAgIHJldHVybiAnYnV0dG9uJztcbiAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xvc2VzdCgnLnNjLWZvb3RlcicpKSB7XG4gICAgICByZXR1cm4gJ2Zvb3Rlci1saW5rJztcbiAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xvc2VzdCgnLnNjLXBlcnNpc3RlbnQtYmFyJykpIHtcbiAgICAgIHJldHVybiAncGVyc2lzdGVudC1iYXItbGluayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluayc7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFRyYWNrIGN1c3RvbWVyIGludGVyYWN0aW9uIGZvciBDVEEgQ2xpY2suXG4gKi9cbmNvbnN0IGhhbmRsZUFuYWx5dGljc0NUQSA9IChldiwgdGFyZ2V0Q2xhc3MgPSAnJywgY3RhT2JqID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiBsYXVuY2hzY3JpcHQgPT09ICd1bmRlZmluZWQnICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRvYmVsYXVuY2hzY3JpcHQnKSkge1xuICAgIC8vQWRvYmUgQW5hbHl0aWNzIG5vdCBlbmFibGUgZm9yIHRoaXMgbWFya2V0XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNsb3Nlc3QgPSB0YXJnZXRDbGFzcyA/IHRhcmdldENsYXNzIDogZXYudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcblxuICBsZXQgeyBjdGFUeXBlLCBjdGFQb3NpdGlvbiwgeExpbmtSZWdpb24sIGN1c3RvbUxpbmtUZXh0LCBsaW5rTmFtZSwgY29udGV4dCB9ID0gY3RhT2JqO1xuXG4gIGNvbnN0IG1rdENvdW50cnlDb2RlID0gZ2V0Q3VycmVudENvdW50cnkoKTtcbiAgaWYgKCFjdGFUeXBlKSB7XG4gICAgY3RhVHlwZSA9IGNsb3Nlc3QgPyBnZXRDdGFUeXBlKGNsb3Nlc3QuY2xhc3NOYW1lLCBldi50YXJnZXQpIDogJ2xpbmsnO1xuICB9XG5cbiAgaWYgKCFjdGFQb3NpdGlvbikge1xuICAgIGN0YVBvc2l0aW9uID0gY2FsY0VsZW1lbnRMb2NhdGlvbihldi50YXJnZXQpO1xuICB9XG5cbiAgaWYgKCF4TGlua1JlZ2lvbikge1xuICAgIHhMaW5rUmVnaW9uID0gZ2V0SG9yaXpvbnRhbFBvc2l0aW9uKGV2LmNsaWVudFgpO1xuICB9XG5cbiAgaWYgKCFjdXN0b21MaW5rVGV4dCAmJiBjbG9zZXN0KSB7XG4gICAgY3VzdG9tTGlua1RleHQgPSAoY2xvc2VzdC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgPz8gY2xvc2VzdC5pbm5lclRleHQgPz8gY2xvc2VzdC50ZXh0Q29udGVudClcbiAgICAgID8udHJpbSgpXG4gICAgICAudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlmICghbGlua05hbWUpIHtcbiAgICBsaW5rTmFtZSA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykuaW5uZXJUZXh0XG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKS5pbm5lclRleHQudG9Mb3dlckNhc2UoKVxuICAgICAgICA6ICduYSc7XG4gIH1cblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gZ2V0Q3RhQ29udGV4dChjbG9zZXN0KTtcbiAgfVxuXG4gIGNvbnN0IGN1c3RvbUxpbmtSZWdpb24gPSB4TGlua1JlZ2lvbiArICcgJyArIGN0YVBvc2l0aW9uO1xuXG4gIGxldCB1cGRhdGVkQ3RhUG9zaXRpb24gPSBjdGFQb3NpdGlvbjtcbiAgaWYgKG1rdENvdW50cnlDb2RlID09PSAnc2cnKSB7XG4gICAgdXBkYXRlZEN0YVBvc2l0aW9uID0gY3VzdG9tTGlua1JlZ2lvbjtcbiAgfVxuICBpZiAodHlwZW9mIGVkZGxFbmFibGVkID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vVGhpcyBjb2RlIGlzIGFkZGVkIGZvciB0aGUgSEsgbWFya2V0IGJlY2F1c2UgZnVsbCBFRERMIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiBISyBtYXJrZXRcbiAgICBkaWdpdGFsRGF0YS5jdGFOYW1lID0gY3VzdG9tTGlua1RleHQ7XG4gICAgZGlnaXRhbERhdGEuY3RhUG9zaXRpb24gPSBjdGFQb3NpdGlvbjtcbiAgICBpZiAodHlwZW9mIF9zYXRlbGxpdGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBfc2F0ZWxsaXRlLnRyYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBfc2F0ZWxsaXRlLnRyYWNrKCdjYWxsVG9BY3Rpb24nKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRpdGxlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuICBjb25zdCBjdGFOYW1lID1cbiAgICB0aXRsZVNlbGVjdG9yICYmIHRpdGxlU2VsZWN0b3IuaW5uZXJUZXh0ID8gdGl0bGVTZWxlY3Rvci5pbm5lclRleHQudG9Mb3dlckNhc2UoKSA6ICduYSc7XG4gIGxldCBkYXRhT2JqZWN0O1xuICBpZiAobWt0Q291bnRyeUNvZGUgPT09ICdzZycpIHtcbiAgICBkYXRhT2JqZWN0ID0ge1xuICAgICAgLi4uZGlnaXRhbERhdGEsXG4gICAgICBjdXN0b21MaW5rQ2xpY2s6IHtcbiAgICAgICAgY3VzdG9tTGlua1RleHQ6IHR5cGVvZiBuaXRyb0VuYWJsZWQgIT09ICd1bmRlZmluZWQnID8gY29udGV4dCA6IGN1c3RvbUxpbmtUZXh0IHx8IGN0YU5hbWUsXG4gICAgICAgIGN1c3RvbUxpbmtQb3NpdGlvbjogY3VzdG9tTGlua1JlZ2lvbixcbiAgICAgICAgY3VzdG9tTGlua1R5cGU6IGN0YVR5cGVcbiAgICAgIH0sXG4gICAgICBldmVudDogJ2N0YUNsaWNrJyxcbiAgICAgIGhyZWY6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH07XG4gIH0gZWxzZSBpZiAobWt0Q291bnRyeUNvZGUgPT09ICdoaycpIHtcbiAgICBkYXRhT2JqZWN0ID0ge1xuICAgICAgLi4uZGlnaXRhbERhdGEsXG4gICAgICBldmVudDogJ2N0YUNsaWNrJyxcbiAgICAgIHRpdGxlOiBjdXN0b21MaW5rVGV4dCxcbiAgICAgIGhyZWY6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH07XG4gICAgZGF0YU9iamVjdC5jdGFOYW1lID0gdHlwZW9mIG5pdHJvRW5hYmxlZCAhPT0gJ3VuZGVmaW5lZCcgPyBjb250ZXh0IDogY3VzdG9tTGlua1RleHQgfHwgY3RhTmFtZTtcbiAgICBkYXRhT2JqZWN0LmN0YVBvc2l0aW9uID0gY3VzdG9tTGlua1JlZ2lvbjtcbiAgICBkYXRhT2JqZWN0LmN0YVR5cGUgPSBjdGFUeXBlO1xuICB9IGVsc2Uge1xuICAgIGRhdGFPYmplY3QgPSB7XG4gICAgICAuLi5kaWdpdGFsRGF0YSxcbiAgICAgIGN1c3RvbUxpbmtDbGljazoge1xuICAgICAgICBjdXN0b21MaW5rVGV4dDogdHlwZW9mIG5pdHJvRW5hYmxlZCAhPT0gJ3VuZGVmaW5lZCcgPyBjb250ZXh0IDogY3VzdG9tTGlua1RleHQsXG4gICAgICAgIGN1c3RvbUxpbmtSZWdpb246IGN1c3RvbUxpbmtSZWdpb24sXG4gICAgICAgIGN1c3RvbUxpbmtUeXBlOiBjdGFUeXBlLFxuICAgICAgICBjdXN0b21MaW5rTmFtZTogbGlua05hbWVcbiAgICAgIH0sXG4gICAgICBldmVudDogJ2N0YUNsaWNrJyxcbiAgICAgIHRpdGxlOiBjdXN0b21MaW5rVGV4dCxcbiAgICAgIGhyZWY6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH07XG4gICAgZGF0YU9iamVjdC5jdGFOYW1lID0gdHlwZW9mIG5pdHJvRW5hYmxlZCAhPT0gJ3VuZGVmaW5lZCcgPyBjb250ZXh0IDogY3VzdG9tTGlua1RleHQgfHwgY3RhTmFtZTtcbiAgICBkYXRhT2JqZWN0LmN0YVBvc2l0aW9uID0gdXBkYXRlZEN0YVBvc2l0aW9uO1xuICAgIGRhdGFPYmplY3QuY3RhVHlwZSA9IGN0YVR5cGU7XG4gIH1cbiAgc2NBbmFseXRpY3NEYXRhQXJyYXkucHVzaChkYXRhT2JqZWN0KTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlIHJhbmdlIHZhbHVlcyBiYXNlZCBvbiBvcmlnaW5hbCBQSSB2YWx1ZS5cbiAqL1xuY29uc3QgY2FsY3VsYXRlUmFuZ2VzID0gKGZpZWxkTmFtZVZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHtcbiAgY29uc3QgbmV3UmFuZ2VzID0ge1xuICAgIG1vbnRobHlJbmNvbWU6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogMTAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAxMDAwMCxcbiAgICAgICAgZW5kOiAyMDAwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDIwMDAwLFxuICAgICAgICBlbmQ6IDMwMDAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGFydDogMzAwMDAsXG4gICAgICAgIGVuZDogNDAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiA0MDAwMCxcbiAgICAgICAgZW5kOiA1MDAwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDUwMDAwLFxuICAgICAgICBlbmQ6IDYwMDAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGFydDogNjAwMDAsXG4gICAgICAgIGVuZDogNzAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiA3MDAwMCxcbiAgICAgICAgZW5kOiA4MDAwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDgwMDAwLFxuICAgICAgICBlbmQ6IDkwMDAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGFydDogOTAwMDAsXG4gICAgICAgIGVuZDogMTAwMDAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGFydDogMTAwMDAwLFxuICAgICAgICBlbmQ6IDExMDAwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDExMDAwMCxcbiAgICAgICAgZW5kOiAxMjAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAxMjAwMDBcbiAgICAgIH1cbiAgICBdLFxuICAgIGxvYW5BbW91bnQ6IFtcbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMTAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiAxMDAwMDAsIGVuZDogMjAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiAyMDAwMDAsIGVuZDogMzAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiAzMDAwMDAsIGVuZDogNDAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA0MDAwMDAsIGVuZDogNTAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA1MDAwMDAsIGVuZDogNjAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA2MDAwMDAsIGVuZDogNzAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA3MDAwMDAsIGVuZDogODAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA4MDAwMDAsIGVuZDogOTAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA5MDAwMDAsIGVuZDogMTAwMDAwMCB9LFxuICAgICAgeyBzdGFydDogMTAwMDAwMCB9XG4gICAgXSxcbiAgICByZXBheW1lbnRBbW91bnQ6IFtcbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMjAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDIwMDAwLCBlbmQ6IDUwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA1MDAwMCwgZW5kOiAxMDAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDEwMDAwMCwgZW5kOiAxNTAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDE1MDAwMCwgZW5kOiAyMDAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDIwMDAwMCwgZW5kOiAyNTAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDI1MDAwMCwgZW5kOiAzMDAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDMwMDAwMCwgZW5kOiAzNTAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDM1MDAwMCB9XG4gICAgXSxcbiAgICBkYWlseUJhbGFuY2U6IFtcbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMjAwMCB9LFxuICAgICAgeyBzdGFydDogMjAwMCwgZW5kOiA1MDAwIH0sXG4gICAgICB7IHN0YXJ0OiA1MDAwLCBlbmQ6IDEwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiAxMDAwMCwgZW5kOiAxNTAwMCB9LFxuICAgICAgeyBzdGFydDogMTUwMDAsIGVuZDogMjAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDIwMDAwLCBlbmQ6IDI1MDAwIH0sXG4gICAgICB7IHN0YXJ0OiAyNTAwMCwgZW5kOiAzMDAwMCB9LFxuICAgICAgeyBzdGFydDogMzAwMDAsIGVuZDogMzUwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDM1MDAwLCBlbmQ6IDUwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA1MDAwMCwgZW5kOiAxMDAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDEwMDAwMCwgZW5kOiAyMDAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDIwMDAwMCwgZW5kOiAzMDAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDMwMDAwMDAsIGVuZDogNTAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA1MDAwMDAsIGVuZDogNzUwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiA3NTAwMDAsIGVuZDogMTAwMDAwMCB9LFxuICAgICAgeyBzdGFydDogMTAwMDAwMCB9XG4gICAgXSxcbiAgICBhcHI6IFtcbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMiB9LFxuICAgICAgeyBzdGFydDogMiwgZW5kOiA1IH0sXG4gICAgICB7IHN0YXJ0OiA1LCBlbmQ6IDcgfSxcbiAgICAgIHsgc3RhcnQ6IDcsIGVuZDogMTAgfSxcbiAgICAgIHsgc3RhcnQ6IDEwLCBlbmQ6IDE1IH0sXG4gICAgICB7IHN0YXJ0OiAxNSwgZW5kOiAyMCB9LFxuICAgICAgeyBzdGFydDogMjAsIGVuZDogMjUgfSxcbiAgICAgIHsgc3RhcnQ6IDI1IH1cbiAgICBdLFxuICAgIGFubnVhbEluY29tZTogW1xuICAgICAge1xuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiAxMjAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAxMjAwMDAsXG4gICAgICAgIGVuZDogMjQwMDAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGFydDogMjQwMDAwLFxuICAgICAgICBlbmQ6IDM2MDAwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDM2MDAwMCxcbiAgICAgICAgZW5kOiA0ODAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiA0ODAwMDAsXG4gICAgICAgIGVuZDogNjAwMDAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGFydDogNjAwMDAwLFxuICAgICAgICBlbmQ6IDcyMDAwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDcyMDAwMCxcbiAgICAgICAgZW5kOiA4NDAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiA4NDAwMDAsXG4gICAgICAgIGVuZDogOTYwMDAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGFydDogOTYwMDAwLFxuICAgICAgICBlbmQ6IDEwODAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAxMDgwMDAwLFxuICAgICAgICBlbmQ6IDEyMDAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAxMjAwMDAwLFxuICAgICAgICBlbmQ6IDEzMjAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAxMzIwMDAwLFxuICAgICAgICBlbmQ6IDE0NDAwMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAxNDQwMDAwXG4gICAgICB9XG4gICAgXSxcbiAgICBhZ2U6IFtcbiAgICAgIHsgc3RhcnQ6IDAsIGVuZDogMTggfSxcbiAgICAgIHsgc3RhcnQ6IDE4LCBlbmQ6IDI1IH0sXG4gICAgICB7IHN0YXJ0OiAyNSwgZW5kOiAzNSB9LFxuICAgICAgeyBzdGFydDogMzUsIGVuZDogNDUgfSxcbiAgICAgIHsgc3RhcnQ6IDQ1LCBlbmQ6IDU1IH0sXG4gICAgICB7IHN0YXJ0OiA1NSwgZW5kOiA2NSB9LFxuICAgICAgeyBzdGFydDogNjUsIGVuZDogNzUgfSxcbiAgICAgIHsgc3RhcnQ6IDc1IH1cbiAgICBdLFxuICAgIHRyYW5zYWN0aW9uQW1vdW50OiBbXG4gICAgICB7IHN0YXJ0OiAwLCBlbmQ6IDEwMDAwMCB9LFxuICAgICAgeyBzdGFydDogMTAwMDAwLCBlbmQ6IDIwMDAwMCB9LFxuICAgICAgeyBzdGFydDogMjAwMDAwLCBlbmQ6IDMwMDAwMCB9LFxuICAgICAgeyBzdGFydDogMzAwMDAwLCBlbmQ6IDQwMDAwMCB9LFxuICAgICAgeyBzdGFydDogNDAwMDAwLCBlbmQ6IDUwMDAwMCB9LFxuICAgICAgeyBzdGFydDogNTAwMDAwLCBlbmQ6IDYwMDAwMCB9LFxuICAgICAgeyBzdGFydDogNjAwMDAwLCBlbmQ6IDcwMDAwMCB9LFxuICAgICAgeyBzdGFydDogNzAwMDAwLCBlbmQ6IDgwMDAwMCB9LFxuICAgICAgeyBzdGFydDogODAwMDAwLCBlbmQ6IDkwMDAwMCB9LFxuICAgICAgeyBzdGFydDogOTAwMDAwLCBlbmQ6IDEwMDAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDEwMDAwMDAsIGVuZDogMTUwMDAwMCB9LFxuICAgICAgeyBzdGFydDogMTUwMDAwMCwgZW5kOiAyMDAwMDAwIH0sXG4gICAgICB7IHN0YXJ0OiAyMDAwMDAwLCBlbmQ6IDMwMDAwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDMwMDAwMDAgfVxuICAgIF0sXG4gICAgdG90YWxTcGVuZDogW1xuICAgICAgeyBzdGFydDogMCwgZW5kOiAxMDAwIH0sXG4gICAgICB7IHN0YXJ0OiAxMDAwLCBlbmQ6IDIwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDIwMDAsIGVuZDogMzAwMCB9LFxuICAgICAgeyBzdGFydDogMzAwMCwgZW5kOiA0MDAwIH0sXG4gICAgICB7IHN0YXJ0OiA0MDAwLCBlbmQ6IDUwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDUwMDAsIGVuZDogNjAwMCB9LFxuICAgICAgeyBzdGFydDogNjAwMCwgZW5kOiA3MDAwIH0sXG4gICAgICB7IHN0YXJ0OiA3MDAwLCBlbmQ6IDgwMDAgfSxcbiAgICAgIHsgc3RhcnQ6IDgwMDAsIGVuZDogOTAwMCB9LFxuICAgICAgeyBzdGFydDogOTAwMCwgZW5kOiAxMDAwMCB9LFxuICAgICAgeyBzdGFydDogMTAwMDAgfVxuICAgIF1cbiAgfTtcbiAgbGV0IGNhbGN1bGF0ZWRSYW5nZSA9IGN1cnJlbnRWYWx1ZTtcbiAgaWYgKCFjYWxjdWxhdGVkUmFuZ2UpIHtcbiAgICBjYWxjdWxhdGVkUmFuZ2UgPSAnbmEnO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YWwgPSBwYXJzZUludChjYWxjdWxhdGVkUmFuZ2UudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcnKSwgMTApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3UmFuZ2VzW2ZpZWxkTmFtZVZhbHVlXS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHN0YXJ0VmFsID0gbmV3UmFuZ2VzW2ZpZWxkTmFtZVZhbHVlXVtpXS5zdGFydDtcbiAgICAgIGxldCBlbmRWYWwgPSBuZXdSYW5nZXNbZmllbGROYW1lVmFsdWVdW2ldLmVuZDtcbiAgICAgIGlmICh2YWwgPj0gc3RhcnRWYWwgJiYgKGVuZFZhbCA/IHZhbCA8IGVuZFZhbCA6IHRydWUpKSB7XG4gICAgICAgIGlmIChmaWVsZE5hbWVWYWx1ZSA9PT0gJ21vbnRobHlJbmNvbWUnKSB7XG4gICAgICAgICAgY2FsY3VsYXRlZFJhbmdlID0gZW5kVmFsXG4gICAgICAgICAgICA/IHN0YXJ0VmFsID09IDBcbiAgICAgICAgICAgICAgPyBzdGFydFZhbCArICctbHQnICsgKE1hdGguYWJzKGVuZFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgKyAnaydcbiAgICAgICAgICAgICAgOiAoTWF0aC5hYnMoc3RhcnRWYWwpIC8gMTAwMCkudG9GaXhlZCgpICtcbiAgICAgICAgICAgICAgICAnay1sdCcgK1xuICAgICAgICAgICAgICAgIChNYXRoLmFicyhlbmRWYWwpIC8gMTAwMCkudG9GaXhlZCgpICtcbiAgICAgICAgICAgICAgICAnaydcbiAgICAgICAgICAgIDogJ2dlMTIwayc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGROYW1lVmFsdWUgPT09ICdsb2FuQW1vdW50Jykge1xuICAgICAgICAgIGNhbGN1bGF0ZWRSYW5nZSA9IGVuZFZhbFxuICAgICAgICAgICAgPyBzdGFydFZhbCA9PSAwXG4gICAgICAgICAgICAgID8gc3RhcnRWYWwgKyAnLWx0JyArIChNYXRoLmFicyhlbmRWYWwpIC8gMTAwMCkudG9GaXhlZCgpICsgJ2snXG4gICAgICAgICAgICAgIDogKE1hdGguYWJzKHN0YXJ0VmFsKSAvIDEwMDApLnRvRml4ZWQoKSArXG4gICAgICAgICAgICAgICAgJ2stbHQnICtcbiAgICAgICAgICAgICAgICAoZW5kVmFsID09IDEwMDAwMDAgPyAnMW0nIDogKE1hdGguYWJzKGVuZFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgKyAnaycpXG4gICAgICAgICAgICA6ICdnZTFtJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZE5hbWVWYWx1ZSA9PT0gJ3RyYW5zYWN0aW9uQW1vdW50Jykge1xuICAgICAgICAgIGNhbGN1bGF0ZWRSYW5nZSA9IGVuZFZhbFxuICAgICAgICAgICAgPyBzdGFydFZhbCA9PSAwXG4gICAgICAgICAgICAgID8gc3RhcnRWYWwgKyAnLWx0JyArIChNYXRoLmFicyhlbmRWYWwpIC8gMTAwMCkudG9GaXhlZCgpICsgJ2snXG4gICAgICAgICAgICAgIDogKHN0YXJ0VmFsID49IDEwMDAwMDBcbiAgICAgICAgICAgICAgICAgID8gTWF0aC5hYnMoc3RhcnRWYWwpIC8gMTAwMDAwMCArICdtLWx0J1xuICAgICAgICAgICAgICAgICAgOiAoTWF0aC5hYnMoc3RhcnRWYWwpIC8gMTAwMCkudG9GaXhlZCgpICsgJ2stbHQnKSArXG4gICAgICAgICAgICAgICAgKGVuZFZhbCA+PSAxMDAwMDAwXG4gICAgICAgICAgICAgICAgICA/IE1hdGguYWJzKGVuZFZhbCkgLyAxMDAwMDAwICsgJ20nXG4gICAgICAgICAgICAgICAgICA6IChNYXRoLmFicyhlbmRWYWwpIC8gMTAwMCkudG9GaXhlZCgpICsgJ2snKVxuICAgICAgICAgICAgOiAnZ2UzbSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGROYW1lVmFsdWUgPT09ICdhbm51YWxJbmNvbWUnKSB7XG4gICAgICAgICAgY2FsY3VsYXRlZFJhbmdlID0gZW5kVmFsXG4gICAgICAgICAgICA/IHN0YXJ0VmFsID09IDBcbiAgICAgICAgICAgICAgPyBzdGFydFZhbCArICctbHQnICsgKE1hdGguYWJzKGVuZFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgKyAnaydcbiAgICAgICAgICAgICAgOiAoc3RhcnRWYWwgPj0gMTAwMDAwMFxuICAgICAgICAgICAgICAgICAgPyBNYXRoLmFicyhzdGFydFZhbCkgLyAxMDAwMDAwICsgJ20tbHQnXG4gICAgICAgICAgICAgICAgICA6IChNYXRoLmFicyhzdGFydFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgKyAnay1sdCcpICtcbiAgICAgICAgICAgICAgICAoZW5kVmFsID49IDEwMDAwMDBcbiAgICAgICAgICAgICAgICAgID8gTWF0aC5hYnMoZW5kVmFsKSAvIDEwMDAwMDAgKyAnbSdcbiAgICAgICAgICAgICAgICAgIDogKE1hdGguYWJzKGVuZFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgKyAnaycpXG4gICAgICAgICAgICA6ICdnZTEuNDRtJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZE5hbWVWYWx1ZSA9PT0gJ3JlcGF5bWVudEFtb3VudCcpIHtcbiAgICAgICAgICBjYWxjdWxhdGVkUmFuZ2UgPSBlbmRWYWxcbiAgICAgICAgICAgID8gc3RhcnRWYWwgPT0gMFxuICAgICAgICAgICAgICA/IHN0YXJ0VmFsICsgJy1sdCcgKyAoTWF0aC5hYnMoZW5kVmFsKSAvIDEwMDApLnRvRml4ZWQoKSArICdrJ1xuICAgICAgICAgICAgICA6IChNYXRoLmFicyhzdGFydFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgK1xuICAgICAgICAgICAgICAgICdrLWx0JyArXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKGVuZFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgK1xuICAgICAgICAgICAgICAgICdrJ1xuICAgICAgICAgICAgOiAnZ2UzNTBrJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZE5hbWVWYWx1ZSA9PT0gJ2RhaWx5QmFsYW5jZScpIHtcbiAgICAgICAgICBjYWxjdWxhdGVkUmFuZ2UgPSBlbmRWYWxcbiAgICAgICAgICAgID8gc3RhcnRWYWwgPT0gMFxuICAgICAgICAgICAgICA/IHN0YXJ0VmFsICsgJy1sdCcgKyAoTWF0aC5hYnMoZW5kVmFsKSAvIDEwMDApLnRvRml4ZWQoKSArICdrJ1xuICAgICAgICAgICAgICA6IChNYXRoLmFicyhzdGFydFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgK1xuICAgICAgICAgICAgICAgICdrLWx0JyArXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKGVuZFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgK1xuICAgICAgICAgICAgICAgICdrJ1xuICAgICAgICAgICAgOiAnZ2UxbSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGROYW1lVmFsdWUgPT09ICdhcHInKSB7XG4gICAgICAgICAgY2FsY3VsYXRlZFJhbmdlID0gZW5kVmFsXG4gICAgICAgICAgICA/IHN0YXJ0VmFsID09IDBcbiAgICAgICAgICAgICAgPyBzdGFydFZhbCArICctbHQnICsgZW5kVmFsXG4gICAgICAgICAgICAgIDogc3RhcnRWYWwgKyAnJS1sdCcgKyBlbmRWYWwgKyAnJSdcbiAgICAgICAgICAgIDogJ2dlMjUlJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZE5hbWVWYWx1ZSA9PT0gJ2FnZScpIHtcbiAgICAgICAgICBjYWxjdWxhdGVkUmFuZ2UgPSBlbmRWYWwgPyBzdGFydFZhbCArICctbHQnICsgZW5kVmFsIDogJ2dlNzUnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkTmFtZVZhbHVlID09PSAndG90YWxTcGVuZCcpIHtcbiAgICAgICAgICBjYWxjdWxhdGVkUmFuZ2UgPSBlbmRWYWxcbiAgICAgICAgICAgID8gc3RhcnRWYWwgPT0gMFxuICAgICAgICAgICAgICA/IHN0YXJ0VmFsICsgJy1sdCcgKyAoTWF0aC5hYnMoZW5kVmFsKSAvIDEwMDApLnRvRml4ZWQoKSArICdrJ1xuICAgICAgICAgICAgICA6IChNYXRoLmFicyhzdGFydFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgK1xuICAgICAgICAgICAgICAgICdrLWx0JyArXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKGVuZFZhbCkgLyAxMDAwKS50b0ZpeGVkKCkgK1xuICAgICAgICAgICAgICAgICdrJ1xuICAgICAgICAgICAgOiAnZ2UxMGsnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjYWxjdWxhdGVkUmFuZ2U7XG59O1xuXG4vKipcbiAqIFRyYWNrIGN1c3RvbWVyIGludGVyYWN0aW9uIHdpdGggY2FsY3VsYXRvcnMuXG4gKi9cbmNvbnN0IGhhbmRsZUNhbGN1bGF0b3JBbmFseXRpY3MgPSAoY2FsY3VsYXRvck5hbWUsIGZpZWxkcykgPT4ge1xuICBpZiAodHlwZW9mIGxhdW5jaHNjcmlwdCA9PT0gJ3VuZGVmaW5lZCcgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZG9iZWxhdW5jaHNjcmlwdCcpKSB7XG4gICAgLy9BZG9iZSBBbmFseXRpY3Mgbm90IGVuYWJsZSBmb3IgdGhpcyBtYXJrZXRcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGRhdGFPYmplY3QgPSB7XG4gICAgLi4uZGlnaXRhbERhdGEsXG4gICAgY2FsY3VsYXRvcjoge1xuICAgICAgbmFtZTogY2FsY3VsYXRvck5hbWUsXG4gICAgICBmaWVsZHM6IGZpZWxkc1xuICAgIH0sXG4gICAgdXNlcjoge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgdXNlclN0YXR1czogJ2d1ZXN0JyxcbiAgICAgICAgdXNlclR5cGU6ICdOVEInXG4gICAgICB9XG4gICAgfSxcbiAgICBldmVudDogJ2NhbGN1bGF0b3JTdWJtaXQnLFxuICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICBocmVmOiB3aW5kb3cubG9jYXRpb24uaHJlZlxuICB9O1xuICBzY0FuYWx5dGljc0RhdGFBcnJheS5wdXNoKGRhdGFPYmplY3QpO1xufTtcblxuLyoqXG4gKiBkZWxheSAxIHNlY29uZCB3aGVuIG9uY2UgbW92ZWQgdGhlIHNsaWRlciBiYXIgYW5kIHRyaWdnZXIgZXZlbnRzXG4gKiBAZXhhbXBsZVxuICogZGVib3VuY2VFdmVudHMoKVxuICovXG5jb25zdCBkZWJvdW5jZUV2ZW50cyA9IChmLCBkZWxheSkgPT4ge1xuICBsZXQgdGltZXIgPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBmLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIGRlbGF5IHx8IDUwMCk7XG4gIH07XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gVVJMIGlzIGEgZm9ybSBVUkwuXG4gKlxuICogQHBhcmFtIHN0cmluZyB1cmwgVGhlIFVSTC5cbiAqXG4gKiBAcmV0dXJuIGJvb2wgVHJ1ZSBpZiBpdCdzIGZvcm0gVVJMLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNvbnN0IGlzRm9ybSA9IHVybCA9PiB7XG4gIGlmIChcbiAgICB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuQUxMT1dBQkxFX1FVRVJZU1RSSU5HWydmb3JtLXVybHMnXSAhPSAnJyAmJlxuICAgIHdpbmRvdy5zY0NvbW1vbkNvbnN0YW50cy5BTExPV0FCTEVfUVVFUllTVFJJTkdbJ2Zvcm0tdXJscyddICE9IHVuZGVmaW5lZFxuICApIHtcbiAgICB2YXIgZm9ybVJlZ2V4ID0gbmV3IFJlZ0V4cCh3aW5kb3cuc2NDb21tb25Db25zdGFudHMuQUxMT1dBQkxFX1FVRVJZU1RSSU5HWydmb3JtLXVybHMnXSwgJ2dpJyk7XG4gICAgcmV0dXJuIGZvcm1SZWdleC50ZXN0KHVybCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0cmFja2luZyBwYXJhbWV0ZXJzIHNob3VsZCBiZSBjYXJyaWVkIGZvcndhcmQgdG8gdGhlIGdpdmVuIFVSTC5cbiAqXG4gKiBAcGFyYW0gc3RyaW5nIHVybCBUaGUgVVJMLlxuICpcbiAqIEByZXR1cm4gYm9vbCBUcnVlIGlmIHBhcmFtZXRlcnMgc2hvdWxkIGJlIGNhcnJpZWQgZm9yd2FyZC4gRmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jb25zdCBzaG91bGRDYXJyeVRyYWNraW5nUGFyYW1zID0gdXJsID0+IHtcbiAgaWYgKGlzRm9ybSh1cmwpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIHBhcmFtTGlzdCA9IFtcbiAgICAnaHR0cHM6Ly93d3cucm95YWxzdW5kYXJhbS5pbicsXG4gICAgJ2h0dHBzOi8vd3d3Lm1heGJ1cGEuY29tJyxcbiAgICAnaHR0cHM6Ly93d3cuYmhhcnRpLWF4YWdpLmNvLmluJyxcbiAgICAnaHR0cHM6Ly93d3cuaWNpY2lwcnVsaWZlLmNvbScsXG4gICAgJ2h0dHBzOi8vd3d3LmVpbnN1cmUuYWxsaWFuei5jb20uc2cnLFxuICAgICdodHRwczovL3d3dy5hbGxpYW56LXRyYXZlbC1pbnN1cmUuY29tLnNnJyxcbiAgICAnaHR0cHM6Ly93d3cubGluLmVlJyxcbiAgICAnaHR0cHM6Ly93d3cucGlhcHAuY29tJyxcbiAgICAnaHR0cHM6Ly9nby5mcGcuc2cnLFxuICAgICdodHRwczovL2ZhaXJwcmljZS5jb20uc2cnLFxuICAgICdzY21vYmlsZTovL2NvbW11bmljYXRpb24taHViJ1xuICBdO1xuICB2YXIgcGFydG5lclJlZ2V4ID0gW107XG4gIGlmIChwYXJhbUxpc3QgJiYgcGFyYW1MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhcmFtTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgcGFydG5lclJlZ2V4W2pdID0gbmV3IFJlZ0V4cChwYXJhbUxpc3Rbal0sICdnaScpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydG5lclJlZ2V4Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBhcnRuZXJSZWdleFtpXS50ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEFwcGx5IGNvb2tpZSBwYXJhbSB0byBnaXZlbiB1cmxcbiAqIEBwYXJhbSBVUkwgb2YgdGhlIGN1cnJlbnQgcGFnZVxuICogQHBhcmFtIHRhcmdldCBVUkxcbiAqIEBwYXJhbSB0YXJnZXRVcmxQYXJhbXNUb1Rha2VQcmVjZWRlbmNlIEJhc2VkIG9uIHRoaXMgdmFsdWUgdGFyZ2V0IHVybCBwYXJhbXMgd2lsbCBiZSB1cGRhdGVkLlxuICovXG5cbmNvbnN0IGFwcGx5Q29va2llUGFyYW1zID0gKCR1cmwsICRzd2FwcGluZ19hdHRycyA9ICcnLCB0YXJnZXRVcmxQYXJhbXNUb1Rha2VQcmVjZWRlbmNlID0gZmFsc2UpID0+IHtcbiAgdmFyIHF1ZXJ5U3RyaW5nID0gJyc7XG4gIHZhciBxdWVyeVBhcnRzID0gW107XG4gIHZhciBwYWdlUXVlcnlTdHJpbmcgPSAnJztcbiAgdmFyIHVybFF1ZXJ5U3RyaW5nID0gJyc7XG4gIHZhciBwYWdlVXJsID0gZ2V0UGFnZVVybCgpO1xuICB2YXIgYWxsb3dhYmxlUXVlcnlTdHJpbmcgPSB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuQUxMT1dBQkxFX1FVRVJZU1RSSU5HLnNjYjtcbiAgdmFyIGFsbG93YWJsZVF1ZXJ5U3RyaW5nT3RoZXJzID0gd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLkFMTE9XQUJMRV9RVUVSWVNUUklORy5vdGhlcnM7XG4gIHZhciBzd2FwX21hcCA9IHt9O1xuICBpZiAoJHN3YXBwaW5nX2F0dHJzICE9PSAnJykge1xuICAgIGxldCAkc3dhcHBpbmdMaXN0ID0gJHN3YXBwaW5nX2F0dHJzLnNwbGl0KCd8Jyk7XG4gICAgJHN3YXBwaW5nTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGF0dHIgPSBhdHRyLnNwbGl0KCc9Jyk7XG4gICAgICBzd2FwX21hcFthdHRyWzBdXSA9IGF0dHJbMV07XG4gICAgfSk7XG4gIH1cbiAgaWYgKHBhZ2VVcmwucXVlcnlTdHJpbmcpIHtcbiAgICBwYWdlUXVlcnlTdHJpbmcgPSBwYWdlVXJsLnF1ZXJ5U3RyaW5nO1xuICAgIGlmIChwYWdlUXVlcnlTdHJpbmcuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgcXVlcnlQYXJ0cyA9IHBhZ2VRdWVyeVN0cmluZy5zcGxpdCgnJicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVBhcnRzLnB1c2gocGFnZVF1ZXJ5U3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgcXVlcnkgcGFyYW1ldGVycyBmcm9tIHRhcmdldCBVUkxcbiAgdmFyIHVybFBhcnRzID0gW107XG4gIHZhciB1cmxCcmVha2Rvd25EYXRhID0gdXJsQnJlYWtkb3duKCR1cmwpO1xuICBpZiAodXJsQnJlYWtkb3duRGF0YS5xdWVyeVN0cmluZykge1xuICAgIHVybFF1ZXJ5U3RyaW5nID0gdXJsQnJlYWtkb3duRGF0YS5xdWVyeVN0cmluZztcbiAgICBpZiAodXJsUXVlcnlTdHJpbmcuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgdXJsUGFydHMgPSB1cmxRdWVyeVN0cmluZy5zcGxpdCgnJicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmxQYXJ0cy5wdXNoKHVybFF1ZXJ5U3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgcXVlcnkgcGFyYW1ldGVycyBmcm9tIENvb2tpZVxuICB2YXIgY29va2llUGFydHMgPSBbXTtcblxuICBpZiAoYWxsb3dhYmxlUXVlcnlTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsb3dhYmxlUXVlcnlTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBxdWVyeSA9IGdldExvY2FsU3RvcmFnZVdpdGhFeHBpcnkoYWxsb3dhYmxlUXVlcnlTdHJpbmdbaV0pO1xuXG4gICAgICBpZiAocXVlcnkgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGFsbG93YWJsZVF1ZXJ5U3RyaW5nS2V5ID0gc3dhcF9tYXBbYWxsb3dhYmxlUXVlcnlTdHJpbmdbaV1dXG4gICAgICAgICAgPyBzd2FwX21hcFthbGxvd2FibGVRdWVyeVN0cmluZ1tpXV1cbiAgICAgICAgICA6IGFsbG93YWJsZVF1ZXJ5U3RyaW5nW2ldO1xuICAgICAgICBjb29raWVQYXJ0cy5wdXNoKGFsbG93YWJsZVF1ZXJ5U3RyaW5nS2V5ICsgJz0nICsgZW5jb2RlVVJJKHF1ZXJ5KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHFzQXJyID0gW107XG4gIC8vIFVzZXIgcGFyYW1ldGVyIGZyb20gUGFnZSBVUkxcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBxdWVyeVBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgaWYgKHF1ZXJ5UGFydHNbal0gIT09ICcnKSB7XG4gICAgICB2YXIgdXIgPSBxdWVyeVBhcnRzW2pdLnNwbGl0KCc9Jyk7XG5cbiAgICAgIC8vIEFsbG93IG9ubHkgd2hpdGVsaXN0ZWQgcGFyYW1zIGZyb20gcGFnZVVybC5cbiAgICAgIGlmICghYWxsb3dhYmxlUXVlcnlTdHJpbmdPdGhlcnMuaW5jbHVkZXModXJbMF0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0YXJnZXRVcmxQYXJhbXNUb1Rha2VQcmVjZWRlbmNlIGlzIHRydWUgYW5kIHVybFF1ZXJ5U3RyaW5nIGhhcyB0aGUgc2FtZSBwYXJhbWV0ZXIsIHRoZW4gc2tpcCBmcm9tIHVwZGF0aW5nIHRoZSB2YWx1ZS5cbiAgICAgIGlmICh0YXJnZXRVcmxQYXJhbXNUb1Rha2VQcmVjZWRlbmNlICYmIHVybFF1ZXJ5U3RyaW5nLmluZGV4T2YodXJbMF0gKyAnPScpICE9PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHFzQXJyLmluZGV4T2YodXJbMF0udG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICAgIGlmIChxdWVyeVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSAnJic7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXUgPSBnZXRVcmxQYXJhbU5hbWUodXJbMF0pO1xuXG4gICAgICAgIHF1ZXJ5U3RyaW5nICs9IHV1ICsgJz0nICsgdXJbMV07XG4gICAgICAgIHFzQXJyLnB1c2godXJbMF0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXNlciBwYXJhbWV0ZXIgZnJvbSBDb29raWUgb25seSBpZiB0aGF0IHBhcmFtZXRlciBkb2VzIG5vdCBleGlzdCBpbiBVUkxcbiAgZm9yICh2YXIgbCA9IDA7IGwgPCBjb29raWVQYXJ0cy5sZW5ndGg7IGwrKykge1xuICAgIGlmIChjb29raWVQYXJ0c1tsXSAhPT0gJycpIHtcbiAgICAgIHZhciBjbyA9IGNvb2tpZVBhcnRzW2xdLnNwbGl0KCc9Jyk7XG5cbiAgICAgIC8vIElmIHRhcmdldFVybFBhcmFtc1RvVGFrZVByZWNlZGVuY2UgaXMgdHJ1ZSBhbmQgdXJsUXVlcnlTdHJpbmcgaGFzIHRoZSBzYW1lIHBhcmFtZXRlciwgdGhlbiBza2lwIGZyb20gdXBkYXRpbmcgdGhlIHZhbHVlLlxuICAgICAgaWYgKHRhcmdldFVybFBhcmFtc1RvVGFrZVByZWNlZGVuY2UgJiYgdXJsUXVlcnlTdHJpbmcuaW5kZXhPZihjb1swXSArICc9JykgIT09IC0xKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocXNBcnIuaW5kZXhPZihjb1swXS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9ICcmJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYyA9IGdldFVybFBhcmFtTmFtZShjb1swXSk7XG5cbiAgICAgICAgcXVlcnlTdHJpbmcgKz0gY2MgKyAnPScgKyBjb1sxXTtcbiAgICAgICAgcXNBcnIucHVzaChjb1swXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBVc2UgcGFyYW1ldGVyIGZyb20gdGFyZ2V0IHVybCBvbmx5IGlmIGl0IGRvZXMgbm90IGV4aXN0IGluIHBhZ2UgVVJMIGFuZCBjb29raWVcbiAgZm9yICh2YXIgayA9IDA7IGsgPCB1cmxQYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgIGlmICh1cmxQYXJ0c1trXSAhPT0gJycpIHtcbiAgICAgIHZhciBxcyA9IHVybFBhcnRzW2tdLnNwbGl0KCc9Jyk7XG5cbiAgICAgIGlmIChxc0Fyci5pbmRleE9mKHFzWzBdLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICBpZiAocXVlcnlTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gJyYnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHFxID0gZ2V0VXJsUGFyYW1OYW1lKHFzWzBdKTtcbiAgICAgICAgcXVlcnlTdHJpbmcgKz0gcXEgKyAnPScgKyBxc1sxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIGJyZWFrZG93biA9IHBhcnNlVXJsKCR1cmwpO1xuXG4gIGxldCBxdWVyeVN0cmluZ0FycmF5ID0gcXVlcnlTdHJpbmcuc3BsaXQoJyYnKTtcbiAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJyAmJiBxdWVyeVN0cmluZ0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICBxdWVyeVN0cmluZ0FycmF5LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGJyZWFrZG93bi5yYXdwYXRoID0gYnJlYWtkb3duLnJhd3BhdGgucmVwbGFjZSgnJicgKyB2YWx1ZSwgJycpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGJyZWFrZG93bi5wcm90b2NhbCA9PT0gJ21haWx0bzonKSB7XG4gICAgcmV0dXJuIGAke2JyZWFrZG93bi5wcm90b2NhbH0ke2JyZWFrZG93bi5ob3N0bmFtZX0ke2JyZWFrZG93bi5wYXRobmFtZX0/JHtxdWVyeVN0cmluZ30ke2JyZWFrZG93bi5oYXNofWA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCRzd2FwcGluZ19hdHRycyAhPT0gJycgJiYgJHN3YXBwaW5nX2F0dHJzLmluZGV4T2YoJywnKSAhPT0gLTEpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gYnVuZGxlUGFyYW0ocXVlcnlTdHJpbmcsICRzd2FwcGluZ19hdHRycyk7XG4gICAgfVxuICAgIGlmIChicmVha2Rvd24uaGFzaC5pbmRleE9mKCc/JykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gYCR7YnJlYWtkb3duLnByb3RvY2FsfS8vJHticmVha2Rvd24uaG9zdG5hbWV9JHticmVha2Rvd24ucmF3cGF0aH0/JHtxdWVyeVN0cmluZ30ke2JyZWFrZG93bi5oYXNofWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke2JyZWFrZG93bi5wcm90b2NhbH0vLyR7YnJlYWtkb3duLmhvc3RuYW1lfSR7YnJlYWtkb3duLnBhdGhuYW1lfT8ke3F1ZXJ5U3RyaW5nfSR7YnJlYWtkb3duLmhhc2h9YDtcbiAgfVxufTtcblxuY29uc3QgZ2V0VXJsUGFyYW1OYW1lID0gcGFyYW1OYW1lID0+IHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLkFMTE9XQUJMRV9RVUVSWVNUUklORy5zY2IubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoXG4gICAgICBwYXJhbU5hbWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgIHdpbmRvdy5zY0NvbW1vbkNvbnN0YW50cy5BTExPV0FCTEVfUVVFUllTVFJJTkcuc2NiW2ldLnRvTG93ZXJDYXNlKClcbiAgICApIHtcbiAgICAgIGluZGV4ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIHJldHVybiB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuQUxMT1dBQkxFX1FVRVJZU1RSSU5HLnNjYltpbmRleF07XG4gIH1cbiAgcmV0dXJuIHBhcmFtTmFtZTtcbn07XG5cbi8qKlxuICogYnVuZGxlUGFyYW0gbWV0aG9kIHVzZWQgZm9yIFBhcmFtcyBCdW5kbGluZy5cbiAqIElmIGJ1bmRsZSBwYXJhbWV0ZXJzIGFyZSBhdmFpbGFibGUgdGhlbiBpdCdzIHJlcGxhY2VkIGJ5IHZhbHVlIHdoaWNoIGFyZSBwcmVzZW50IGluIHRoZSBxdWVyeVN0cmluZyBhbmQgYXBwZW5kIGl0IGluc2lkZSB0aGUgY3VycmVudCBDVEFcbiAqIEBwYXJhbSBxdWVyeVN0cmluZyBnZW5lcmF0ZWQgbmV3IHF1ZXJ5U3RyaW5nIGJhc2VkIG9uIGRhdGEtcGFzcy1wYXJhbXMgJiBkYXRhLWN0YS11cmwtcGFyYW1zLXByZWNlZGVuY2VcbiAqIEBwYXJhbSAkc3dhcHBpbmdfYXR0cnMgYXR0cmlidXRlcyBvZiBzd2FwLWF0dHJzXG4gKiBidW5kbGVQYXJhbSgnIy9vbmJvYXJkaW5nP2NvdW50cnk9U0cmcHJvZHVjdHM9MTYyLDMzOCZjYW1wYWlnbj02MjAzLENBMDAxJywgJ3N1YkNoYW5Db2RlLHJlZmVySWQ9YWdncmVnYXRvcicpXG4gKi9cblxuY29uc3QgYnVuZGxlUGFyYW0gPSAocXVlcnlTdHJpbmcsICRzd2FwcGluZ19hdHRycykgPT4ge1xuICBsZXQgc3dhcF9tYXAgPSB7fTtcbiAgbGV0IHVybFF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgaWYgKCF1cmxRdWVyeVN0cmluZykgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICB1cmxRdWVyeVN0cmluZyA9IHVybFF1ZXJ5U3RyaW5nLnN1YnN0cigxKTtcbiAgaWYgKCF1cmxRdWVyeVN0cmluZykgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICB1cmxRdWVyeVN0cmluZyA9IHVybFF1ZXJ5U3RyaW5nLnNwbGl0KCcmJyk7XG5cbiAgY29uc3QgYWxsb3dhYmxlUXVlcnlTdHJpbmcgPSB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuQUxMT1dBQkxFX1FVRVJZU1RSSU5HLnNjYjtcbiAgJHN3YXBwaW5nX2F0dHJzID0gJHN3YXBwaW5nX2F0dHJzLnNwbGl0KCc9Jyk7XG4gIHN3YXBfbWFwID0gJHN3YXBwaW5nX2F0dHJzWzBdLnNwbGl0KCcsJyk7XG4gIGxldCBzd2FwX3N0ciA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN3YXBfbWFwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbG93YWJsZVF1ZXJ5U3RyaW5nLmluY2x1ZGVzKHN3YXBfbWFwW2ldKSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB1cmxRdWVyeVN0cmluZy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgbGlzdCA9IHVybFF1ZXJ5U3RyaW5nW2pdLnNwbGl0KCc9Jyk7XG4gICAgICAgIGlmIChsaXN0WzBdID09PSBzd2FwX21hcFtpXSkge1xuICAgICAgICAgIHN3YXBfc3RyICs9IHN3YXBfc3RyID8gJywnIDogJyc7XG4gICAgICAgICAgc3dhcF9zdHIgKz0gbGlzdFsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXN3YXBfc3RyKSByZXR1cm4gcXVlcnlTdHJpbmc7XG5cbiAgaWYgKHF1ZXJ5U3RyaW5nLmluZGV4T2YoJHN3YXBwaW5nX2F0dHJzWzFdKSA9PT0gLTEpIHtcbiAgICBxdWVyeVN0cmluZyArPSAnJicgKyAkc3dhcHBpbmdfYXR0cnNbMV0gKyBgPSR7c3dhcF9zdHJ9YDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgc3RyTGlzdCA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJyk7XG4gICAgcXVlcnlTdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ID0gc3RyTGlzdFtpXS5zcGxpdCgnPScpO1xuICAgICAgcXVlcnlTdHJpbmcgKz0gcXVlcnlTdHJpbmcgPyAnJicgOiAnJztcbiAgICAgIGlmIChsaXN0WzBdID09PSAkc3dhcHBpbmdfYXR0cnNbMV0pIHtcbiAgICAgICAgcXVlcnlTdHJpbmcgKz0gJHN3YXBwaW5nX2F0dHJzWzFdICsgYD0ke3N3YXBfc3RyfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeVN0cmluZyArPSBsaXN0WzBdICsgJz0nICsgbGlzdFsxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufTtcblxuY29uc3QgaXNFbXB0eSA9IG9iaiA9PiB7XG4gIC8vIG51bGwgYW5kIHVuZGVmaW5lZCBhcmUgXCJlbXB0eVwiXG4gIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gQXNzdW1lIGlmIGl0IGhhcyBhIGxlbmd0aCBwcm9wZXJ0eSB3aXRoIGEgbm9uLXplcm8gdmFsdWVcbiAgLy8gdGhhdCB0aGF0IHByb3BlcnR5IGlzIGNvcnJlY3QuXG4gIGlmIChvYmoubGVuZ3RoID4gMCkgcmV0dXJuIGZhbHNlO1xuICBpZiAob2JqLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gSWYgaXQgaXNuJ3QgYW4gb2JqZWN0IGF0IHRoaXMgcG9pbnRcbiAgLy8gaXQgaXMgZW1wdHksIGJ1dCBpdCBjYW4ndCBiZSBhbnl0aGluZyAqYnV0KiBlbXB0eVxuICAvLyBJcyBpdCBlbXB0eT8gIERlcGVuZHMgb24geW91ciBhcHBsaWNhdGlvbi5cbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBPdGhlcndpc2UsIGRvZXMgaXQgaGF2ZSBhbnkgcHJvcGVydGllcyBvZiBpdHMgb3duP1xuICAvLyBOb3RlIHRoYXQgdGhpcyBkb2Vzbid0IGhhbmRsZVxuICAvLyB0b1N0cmluZyBhbmQgdmFsdWVPZiBlbnVtZXJhdGlvbiBidWdzIGluIElFIDwgOVxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGNvbnZlcnRRdWVyeVN0cmluZ1RvSnNvbk9iamVjdCA9IHF1ZXJ5U3RyaW5nID0+IHtcbiAgdmFyIHF1ZXJpZXMgPSBxdWVyeVN0cmluZy5zcGxpdCgnJicpO1xuICB2YXIganNvbiA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5VmFsdWUgPSBxdWVyaWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKGtleVZhbHVlLmxlbmd0aCA9PT0gMikge1xuICAgICAganNvbltrZXlWYWx1ZVswXS50b0xvd2VyQ2FzZSgpXSA9IGtleVZhbHVlWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBqc29uO1xufTtcblxuLyoqXG4gKiBNZXRob2QgdG8gc2V0IGxvY2FsU3RvcmFnZSB3aXRoIGV4cGlyeSBkYXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBMb2NhbFN0b3JhZ2Uga2V5XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgTG9jYWxTdG9yYWdlIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gdHRsIEV4cGlyeSBkYXRlXG4gKi9cbmNvbnN0IHNldExvY2FsU3RvcmFnZVdpdGhFeHBpcnkgPSAoa2V5LCB2YWx1ZSwgdHRsKSA9PiB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgLy8gYGl0ZW1gIGlzIGFuIG9iamVjdCB3aGljaCBjb250YWlucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gIC8vIGFzIHdlbGwgYXMgdGhlIHRpbWUgd2hlbiBpdCdzIHN1cHBvc2VkIHRvIGV4cGlyZVxuICBjb25zdCBpdGVtID0ge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBleHBpcnk6IG5vdy5nZXRUaW1lKCkgKyB0dGxcbiAgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG59O1xuXG4vKipcbiAqIFRoaXMgY2x1bmt5IHJlZ2V4IGlzIHRha2VuIGRpcmVjdGx5IGZyb20gaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cbiAqL1xuY29uc3QgaXNNb2JpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0cmluZ0NoZWNrID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYTtcbiAgcmV0dXJuIChcbiAgICAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChcbiAgICAgIHN0cmluZ0NoZWNrXG4gICAgKSB8fFxuICAgIC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoXG4gICAgICBzdHJpbmdDaGVjay5zdWJzdHIoMCwgNClcbiAgICApXG4gICk7XG59O1xuXG4vKipcbiAqIGFkZGVkIGNvbW1hIGFmdGVyIGVhY2ggdGhyZWUgZGlnaXRzIGxpa2UgMSwwMDAsMDAwXG4gKiBAZXhhbXBsZVxuICogQHBhcmFtIHtudW1iZXJzfSAxMDAwMFxuICpjb252ZXJ0TnVtYmVycygxMDAwMClcbiAqL1xuY29uc3QgY29udmVydE51bWJlcnMgPSAoc2VsZWN0b3IsIG51bWJlcnMpID0+IHtcbiAgaWYgKG51bWJlcnMgPT09ICcnIHx8ICFudW1iZXJzKSByZXR1cm4gMDtcbiAgbGV0IHJldHVyblZhbCA9IG51bWJlcnMudG9TdHJpbmcoKTtcbiAgbGV0IHRtcCA9IFtdO1xuICBsZXQgZnJhY3Rpb24gPSAwO1xuICBpZiAoTnVtYmVyKHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1jb21tYS1mb3JtYXQnKSkgPT09IDIpIHtcbiAgICBpZiAocmV0dXJuVmFsLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgIGxldCBzcGxpdFZhbHVlID0gcmV0dXJuVmFsLnNwbGl0KCcuJyk7XG4gICAgICB0bXAgPSBzcGxpdFZhbHVlWzBdLnNwbGl0KCcnKS5yZXZlcnNlKCk7IC8vNDMyMVxuICAgICAgZnJhY3Rpb24gPSBwYXJzZUludChzcGxpdFZhbHVlWzFdLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCA9IHJldHVyblZhbC5zcGxpdCgnJykucmV2ZXJzZSgpOyAvLzQzMjFcbiAgICB9XG5cbiAgICBsZXQgc3RyTmV3ID0gJyc7XG4gICAgaWYgKHRtcC5sZW5ndGggPiAzKSB7XG4gICAgICAvL3RydWVcbiAgICAgIGxldCBsYXN0VGhyZWUgPSB0bXAuc3BsaWNlKDAsIDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0bXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAwICYmIGkgJSAyID09IDApIHtcbiAgICAgICAgICBzdHJOZXcgKz0gJywnO1xuICAgICAgICB9XG4gICAgICAgIHN0ck5ldyArPSB0bXBbaV0udG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHN0ck5ldyA9IGxhc3RUaHJlZS5qb2luKCcnKSArICcsJyArIHN0ck5ldztcbiAgICAgIHN0ck5ldyA9IHN0ck5ld1xuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAoc3RyTmV3KSB7XG4gICAgICBpZiAoZnJhY3Rpb24pIHtcbiAgICAgICAgc3RyTmV3ID0gJycgKyBzdHJOZXcgKyBgLiR7ZnJhY3Rpb259YDtcbiAgICAgIH1cbiAgICAgIGlmIChzdHJOZXcuc2xpY2UoMCwgMikgPT0gJy0sJykge1xuICAgICAgICBzdHJOZXcgPSBzdHJOZXcucmVwbGFjZSgvLSwvZ2ksICctJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyTmV3O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocmV0dXJuVmFsLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgIGxldCBzcGxpdFZhbHVlID0gcmV0dXJuVmFsLnNwbGl0KCcuJyk7XG4gICAgICB0bXAgPSBzcGxpdFZhbHVlWzBdLnNwbGl0KCcnKS5yZXZlcnNlKCk7IC8vNDMyMVxuICAgICAgZnJhY3Rpb24gPSBzcGxpdFZhbHVlWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgPSByZXR1cm5WYWwuc3BsaXQoJycpLnJldmVyc2UoKTsgLy80MzIxXG4gICAgfVxuXG4gICAgbGV0IHN0ck5ldyA9ICcnO1xuICAgIGlmICh0bXAubGVuZ3RoID4gMykge1xuICAgICAgLy90cnVlIGlmIGl0J3MgbW9yZSB0aGFuIG9yIGVxdWFsIHRob3VzYW5kc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0bXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAwICYmIGkgJSAzID09IDApIHtcbiAgICAgICAgICBzdHJOZXcgKz0gJywnO1xuICAgICAgICB9XG4gICAgICAgIHN0ck5ldyArPSB0bXBbaV0udG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHN0ck5ldyA9IHN0ck5ld1xuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAoc3RyTmV3KSB7XG4gICAgICBpZiAoZnJhY3Rpb24pIHtcbiAgICAgICAgc3RyTmV3ID0gJycgKyBzdHJOZXcgKyBgLiR7ZnJhY3Rpb259YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHJOZXc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0Q2FsY3VsYXRvclN1Ym1pdCA9IChjYWxjdWxhdG9yTmFtZSwgZmllbGRzKSA9PiB7XG4gIGlmICh0eXBlb2YgZGlnaXRhbERhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuOyAvLyBFeGl0IHRoZSBmdW5jdGlvbiBlYXJseSBpZiBkaWdpdGFsRGF0YSBpcyBub3QgZGVmaW5lZFxuICB9XG5cbiAgZGlnaXRhbERhdGEuY2FsY3VsYXRvciA9IHtcbiAgICBuYW1lOiBjYWxjdWxhdG9yTmFtZSxcbiAgICBmaWVsZHM6IGZpZWxkc1xuICB9O1xuICBpZiAodHlwZW9mIF9zYXRlbGxpdGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBfc2F0ZWxsaXRlLnRyYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgX3NhdGVsbGl0ZS50cmFjaygnY2FsY3VsYXRvclN1Ym1pdCcpO1xuICB9XG5cbiAgLy91cGRhdGUgYWRvYmVEYXRhTGF5ZXIgd2l0aCBjYWxjdWxhdG9yIHN1Ym1pdCBldmVudFxuICBpZiAodHlwZW9mIHdpbmRvdy5hZG9iZURhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgZGF0YU9iamVjdCA9IHtcbiAgICAgIC4uLmRpZ2l0YWxEYXRhLFxuICAgICAgZXZlbnQ6ICdjYWxjdWxhdG9yU3VibWl0J1xuICAgIH07XG5cbiAgICAvL2NoYW5nZSBjYWxjdWxhdG9yIHBheWxvYWQga2V5IG5hbWVzIGZvciBhZG9iZURhdGFMYXllciBvYmplY3RcbiAgICBsZXQgbmV3RmllbGRzID0gW107XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZpZWxkcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIG9iaiA9IHsgLi4uZWwgfTtcbiAgICAgIG9iai5mb3JtRmllbGROYW1lID0gb2JqLmZpZWxkTmFtZTtcbiAgICAgIGRlbGV0ZSBvYmouZmllbGROYW1lO1xuICAgICAgb2JqLmZvcm1GaWVsZFZhbHVlID0gb2JqLmZpZWxkVmFsdWU7XG4gICAgICBkZWxldGUgb2JqLmZpZWxkVmFsdWU7XG4gICAgICBuZXdGaWVsZHMucHVzaChvYmopO1xuICAgIH0pO1xuICAgIGxldCBjYWxjdWxhdG9yID0ge1xuICAgICAgbmFtZTogY2FsY3VsYXRvck5hbWUsXG4gICAgICBmaWVsZHM6IG5ld0ZpZWxkc1xuICAgIH07XG4gICAgZGVsZXRlIGRhdGFPYmplY3QuY2FsY3VsYXRvcjtcbiAgICBkYXRhT2JqZWN0LmNhbGN1bGF0b3IgPSBjYWxjdWxhdG9yO1xuXG4gICAgd2luZG93LmFkb2JlRGF0YUxheWVyLnB1c2goZGF0YU9iamVjdCk7XG4gIH1cbn07XG5cbi8qKlxuICogaW5pdGlhbGl6ZWQgb3IgdXBkYXRlIHNsaWRlciBiYXNlZCBvbiB0aGUgc2xpZGVySW5pdCB2YWx1ZVxuICovXG5jb25zdCBpbml0aWFsaXplU2xpZGVyID0gKG1haW5TZWxlY3RvciwgcGFyZW50U2VsZWN0b3IpID0+IHtcbiAgY29uc3QgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgZGlyZWN0aW9uID0gZG9jRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID8gZG9jRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpIDogbnVsbDtcbiAgY29uc3QgYWxsU2xpZGVyID0gbWFpblNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zYy1yYW5nZS1zbGlkZXInKTtcbiAgaWYgKGFsbFNsaWRlci5sZW5ndGgpIHtcbiAgICAvL0luaXRpYWxpemUgc2xpZGVyXG4gICAgYWxsU2xpZGVyLmZvckVhY2goZnVuY3Rpb24oc2xpZGVyKSB7XG4gICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcbiAgICAgICAgc3RhcnQ6IE51bWJlcihzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQnKSksXG4gICAgICAgIHN0ZXA6IE51bWJlcihzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSksXG4gICAgICAgIGJlaGF2aW91cjogJ3NuYXAnLFxuICAgICAgICBjb25uZWN0OiAnbG93ZXInLFxuICAgICAgICByYW5nZToge1xuICAgICAgICAgIG1pbjogTnVtYmVyKHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJykpLFxuICAgICAgICAgIG1heDpcbiAgICAgICAgICAgIE51bWJlcihzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpKSA+IDBcbiAgICAgICAgICAgICAgPyBOdW1iZXIoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXgnKSlcbiAgICAgICAgICAgICAgOiAxMDAwMDAwMFxuICAgICAgICB9LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBzbGlkZXIuY2xvc2VzdChwYXJlbnRTZWxlY3RvcikucXVlcnlTZWxlY3RvcignaW5wdXRbY2xhc3MkPVwiLXZhbHVlXCJdJyk7XG4gICAgICBpZiAoaW5wdXRGaWVsZCkge1xuICAgICAgICAvL1NsaWRlciByZWxhdGVkIHdpdGggdGV4dCBmaWVsZFxuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gY29udmVydE51bWJlcnMobWFpblNlbGVjdG9yLCBzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkcm9wZG93bkZpZWxkID0gc2xpZGVyXG4gICAgICAgICAgLmNsb3Nlc3QocGFyZW50U2VsZWN0b3IpXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtjbGFzcyQ9XCItdmFsdWVcIl0nKTtcbiAgICAgICAgaWYgKGRyb3Bkb3duRmllbGQpIHtcbiAgICAgICAgICAvL1NsaWRlciByZWxhdGVkIHdpdGggZHJvcGRvd24gZmllbGRcbiAgICAgICAgICBkcm9wZG93bkZpZWxkLnZhbHVlID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWZhdWx0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFsbFNsaWRlci5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRHJhZ2UgaGVyZSB0byBtb3ZlIHNsaWRlcicpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbCB3aGVuIGFueSBrZXkgcHJlc3NlZCBpbiBlc3RpbWF0ZSBkYWlseSBmaWVsZCwgcGFzcyB2YWx1ZSB0byBjYWxjdWxhdGVJbnRlcmVzdCBtZXRob2QgYW5kIHJldHVybiBzdGFydCBzdGF0dXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgZ2V0IGVzdGltYXRlIGRhaWx5IGJhbGFuY2UgbnVtYmVyIG9mIGNsaWNrICAgICAgKlxuICogQGV4YW1wbGVcbiAqIGFjdGl2ZUlucHV0VmFsKDEsIDEyMDApXG4gKi9cbmNvbnN0IHZhbGlkYXRlSW5wdXQgPSAoc2VsZWN0b3IsIHNsaWRlckNsYXNzLCBlcnJvclNlbGVjdG9yKSA9PiB7XG4gIGxldCBzZWxlY3RlZENsYXNzID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihgLiR7c2xpZGVyQ2xhc3N9YCksXG4gICAgaW5wdXRGaWVsZCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYC4ke3NsaWRlckNsYXNzfS12YWx1ZWApLFxuICAgIHNsaWRlckV4aXN0ID0gdHJ1ZSxcbiAgICBtaW5WYWx1ZSxcbiAgICBtYXhWYWx1ZTtcblxuICBpZiAoaW5wdXRGaWVsZCkge1xuICAgIC8vc2xpZGVyIGlucHV0IGZpZWxkc1xuICAgIG1pblZhbHVlID0gTnVtYmVyKHNlbGVjdGVkQ2xhc3MuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpKTtcbiAgICBtYXhWYWx1ZSA9IE51bWJlcihzZWxlY3RlZENsYXNzLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXgnKSk7XG4gIH0gZWxzZSB7XG4gICAgLy9ub24gc2xpZGVyIGlucHV0IGZpZWxkc1xuICAgIG1pblZhbHVlID0gTnVtYmVyKHNlbGVjdGVkQ2xhc3MuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpKTtcbiAgICBtYXhWYWx1ZSA9IE51bWJlcihzZWxlY3RlZENsYXNzLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXgnKSk7XG4gICAgaW5wdXRGaWVsZCA9IHNlbGVjdGVkQ2xhc3M7XG4gICAgc2xpZGVyRXhpc3QgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBpbml0VmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlLFxuICAgIHZhbHVlID0gMDtcblxuICBlcnJvclNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgaWYgKCFzZWxlY3RlZENsYXNzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWNpbWFsJykpIHtcbiAgICB2YWx1ZSA9IGluaXRWYWx1ZS5yZXBsYWNlKC9bXjAtOV0rL2dpLCAnJykucmVwbGFjZSgvXjAvLCAnJyk7IC8vcmVtb3ZlIGFsbCBzdHJpbmcgZXhjZXB0IDAtOVxuICAgIGlmICh2YWx1ZSAhPSBpbml0VmFsdWUpIHtcbiAgICAgIGlucHV0RmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vaWYgdGV4dCBmaWVsZCBzdXBwb3J0cyBmcmFjdGlvbiB2YWx1ZVxuICAgIHZhbHVlID0gaW5pdFZhbHVlLnJlcGxhY2UoL1teMC05Ll0vZ2ksICcnKS5yZXBsYWNlKC9eMC8sICcnKTtcbiAgICBpZiAodmFsdWUgIT0gaW5pdFZhbHVlKSB7XG4gICAgICBpbnB1dEZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByYVZhbCA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBpZiAodmFsdWUgPT09ICcuJykge1xuICAgICAgICBlcnJvclNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChyYVZhbC5sZW5ndGggPiAyKSB7XG4gICAgICAgIC8vbW9yZSB0aGFuIHR3byBmbG9hdGluZyBwb2ludFxuICAgICAgICB2YWx1ZSA9IGAke3JhVmFsWzBdfS4ke3JhVmFsWzFdfWA7XG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChyYVZhbFsxXSAmJiByYVZhbFsxXS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHZhbHVlID0gYCR7cmFWYWxbMF19LmAgKyByYVZhbFsxXS5zdWJzdHIoMCwgMik7XG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAocmFWYWxbMV0gJiYgcmFWYWxbMV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodmFsdWUgPiBtYXhWYWx1ZSkge1xuICAgIC8vY2hlY2tpbmcgdGV4dCBmaWVsZCBtYXhpbXVtIHZhbHVlXG4gICAgdmFsdWUgPSBtYXhWYWx1ZTtcbiAgICBpZiAoc2xpZGVyRXhpc3QpIHNlbGVjdGVkQ2xhc3Mubm9VaVNsaWRlci5zZXQoW3ZhbHVlXSk7IC8vUHVzaCB2YWx1ZSBpbiBOb1VpU2xpZGVyXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnICYmIG1pblZhbHVlID4gMCkge1xuICAgIC8vbGVhdmUgdGV4dCBmaWVsZCBhcyBibGFuayBhbmQgZmlsbCBpdCB3aXRoIDBcbiAgICB2YWx1ZSA9ICcnO1xuICAgIGVycm9yU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9IGVsc2UgaWYgKHZhbHVlIDwgbWluVmFsdWUpIHtcbiAgICBlcnJvclNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfVxuXG4gIGlmIChzbGlkZXJFeGlzdCkge1xuICAgIGlmICh2YWx1ZSAhPT0gJycgJiYgdmFsdWUgPj0gbWluVmFsdWUpIHtcbiAgICAgIHNlbGVjdGVkQ2xhc3Mubm9VaVNsaWRlci5zZXQoW3ZhbHVlXSk7IC8vUHVzaCB2YWx1ZSBpbiBOb1VpU2xpZGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkQ2xhc3Mubm9VaVNsaWRlci5zZXQoWzBdKTtcbiAgICB9XG4gIH1cbiAgaW5wdXRGaWVsZC52YWx1ZSA9IHZhbHVlO1xufTtcblxuLyoqXG4gKiBjYWxjdWxhdGUgbW9udGhseSByZXBheW1lbnQgYW1vdW50XG4gKiBAcGFyYW0ge051bWJlcn0gaW50ZXJlc3RSYXRlIC0gaW50ZXJlc3QgcmF0ZSBpbiBJbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0ZW5vciAtIHRlbm9yIGluIG51bWJlciBtb250aHMgSW50XG4gKiBAcGFyYW0ge051bWJlcn0gbG9hbkFtb3VudCAtIGxvYW4gYW1vdW50IGluIEludFxuICogQHBhcmFtIHtOdW1iZXJ9IGFkdmFuY2VkUGF5bWVudHMgLSBhZHZhbmNlZCBwYXltZW50IGFtb3VudCBpbiBJbnRcbiAqIEByZXR1cm4ge051bWJlcn0gcmV0dXJuIGNhbGN1bGF0ZWQgUE1UIHZhbHVlXG4gKiBFeGFtcGxlOlxuICogY2FsY3VsYXRlUE1UKDE2LCAxMiwgMTUwMDAwMCwgMClcbiAqKi9cbmNvbnN0IGNhbGN1bGF0ZVBNVCA9IChpbnRlcmVzdFJhdGUsIHRlbm9yLCBsb2FuQW1vdW50LCBhZHZhbmNlZFBheW1lbnRzID0gMCkgPT4ge1xuICBsZXQgbW9udGhseVJhdGUgPSBpbnRlcmVzdFJhdGUgLyAxMjAwO1xuICBsZXQgdDEgPSAxICsgbW9udGhseVJhdGU7XG4gIGxldCB0MyA9IE1hdGgucG93KHQxLCB0ZW5vciAtIGFkdmFuY2VkUGF5bWVudHMpO1xuICByZXR1cm4gKGxvYW5BbW91bnQgKiBtb250aGx5UmF0ZSkgLyAoMSAtIDEgLyB0Myk7XG59O1xuXG4vKipcbiAqIGNoZWNrIGVycm9yIHN0YXR1cyBvZiB0aGUgc2xpZGVyIGlucHV0IGZpZWxkc1xuICovXG5jb25zdCBzbGlkZXJFcnJvclN0YXR1cyA9IChzZWxlY3RvciwgZmllbGROYW1lKSA9PiB7XG4gIGxldCBlcnJvclN0YXR1cyA9IGZhbHNlO1xuICBjb25zdCBhbGxGaWVsZHMgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKGZpZWxkTmFtZSk7XG4gIGlmIChhbGxGaWVsZHMubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxGaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGFsbEZpZWxkc1tpXS52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2dpLCAnJykpO1xuICAgICAgbGV0IGNsYXNzTmFtZSA9IGFsbEZpZWxkc1tpXS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVtjbGFzc05hbWUubGVuZ3RoIC0gMV0uc2xpY2UoMCwgLTYpO1xuICAgICAgY29uc3Qgc2xpZGVyID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApLFxuICAgICAgICBtaW5WYWx1ZSA9IE51bWJlcihzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpKTtcbiAgICAgIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPCBtaW5WYWx1ZSkge1xuICAgICAgICBlcnJvclN0YXR1cyA9IGVycm9yU3RhdHVzIHx8IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvclN0YXR1cztcbn07XG5cbi8qKlxuICogYWRkIHRvIGRpZ2l0IGFmdGVyIGZsb2F0aW5nIHBvaW50XG4gKi9cbmNvbnN0IGZvcm1hdE51bWJlcnNXaXRoVHdvRGVjaW1hbFBsYWNlcyA9IGlucHV0U3RyaW5nID0+IHtcbiAgLy8gVXNlIGEgcmVndWxhciBleHByZXNzaW9uIHRvIGZpbmQgbnVtYmVycyAoYm90aCBpbnRlZ2VyIGFuZCBkZWNpbWFsKVxuICBjb25zdCByZWdleCA9IC8oXFxkKyhcXC5cXGQqKT8pL2c7XG5cbiAgLy8gUmVwbGFjZSBlYWNoIG1hdGNoZWQgbnVtYmVyIHdpdGggdGhlIG51bWJlciBmb3JtYXR0ZWQgdG8gdHdvIGRlY2ltYWwgcGxhY2VzXG4gIGxldCBmaWx0ZXJlZFJlc3VsdCA9IGlucHV0U3RyaW5nLnJlcGxhY2UocmVnZXgsIG1hdGNoID0+IHtcbiAgICBjb25zdCBudW1iZXIgPSBwYXJzZUZsb2F0KG1hdGNoKTtcbiAgICBpZiAoIWlzTmFOKG51bWJlcikpIHtcbiAgICAgIHJldHVybiBudW1iZXIudG9GaXhlZCgyKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoOyAvLyBJZiBub3QgYSB2YWxpZCBudW1iZXIsIHJldHVybiB0aGUgb3JpZ2luYWwgbWF0Y2hcbiAgfSk7XG4gIGNvbnN0IHBhcnRzID0gZmlsdGVyZWRSZXN1bHQuc3BsaXQoJy4nKTtcbiAgY29uc3QgcmVzdWx0ID0gcGFyc2VGbG9hdChwYXJ0c1swXSArICcuJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpKS50b0ZpeGVkKDIpO1xuICByZXR1cm4gaXNOYU4ocmVzdWx0KSA/ICcwLjAwJyA6IHJlc3VsdDtcbn07XG5cbi8qKlxuICogVkxPT0tVUCBpcyBhIGZ1bmN0aW9uIGluIE1pY3Jvc29mdCBFeGNlbCAoYW5kIHNpbWlsYXIgc3ByZWFkc2hlZXQgc29mdHdhcmUpIHRoYXQgc3RhbmRzIGZvciBcIlZlcnRpY2FsIExvb2t1cC5cIiBJdCBpcyBjb21tb25seSB1c2VkIHRvIHNlYXJjaCBmb3IgYSB2YWx1ZSBpbiB0aGUgZmlyc3QgY29sdW1uIG9mIGEgdGFibGUgYW5kIHJldHVybiBhIHZhbHVlIGluIHRoZSBzYW1lIHJvdyBmcm9tIGFub3RoZXIgY29sdW1uLlxuICogQHBhcmFtIHtOdW1iZXJ9IGxvb2t1cFZhbHVlIC0gUmVwbGFjZSBNMTQgd2l0aCB0aGUgYWN0dWFsIHZhbHVlIHlvdSB3YW50IHRvIGxvb2sgdXBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YWJsZUFycmF5IC0gQWRkIG1vcmUgcm93cyBhcyBuZWVkZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xJbmRleCAtIEFzc3VtaW5nIHlvdSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIHRoZSBzZWNvbmQgY29sdW1uXG4gKiBFeGFtcGxlOlxuICogdkxvb2t1cCgxNiwgW1swLCAxMDBdLCBbNTAsIDg1XSwgWzc1LCA3NV1dLCAyKVxuICoqL1xuY29uc3Qgdkxvb2t1cCA9IChsb29rdXBWYWx1ZSwgdGFibGVBcnJheSwgY29sSW5kZXgpID0+IHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IHRhYmxlQXJyYXlbaV07XG4gICAgdmFyIGNvbXBhcmVWYWx1ZSA9IHJvd1swXTsgLy8gQXNzdW1pbmcgdGhlIGxvb2t1cCBjb2x1bW4gaXMgdGhlIGZpcnN0IGNvbHVtbiBpbiB0aGUgdGFibGVBcnJheVxuXG4gICAgaWYgKFxuICAgICAgY29tcGFyZVZhbHVlIDw9IGxvb2t1cFZhbHVlICYmXG4gICAgICAoaSA9PT0gdGFibGVBcnJheS5sZW5ndGggLSAxIHx8IHRhYmxlQXJyYXlbaSArIDFdWzBdID4gbG9va3VwVmFsdWUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gcm93W2NvbEluZGV4IC0gMV07IC8vIEFkanVzdGluZyBmb3IgMS1iYXNlZCBpbmRleGluZyBpbiBFeGNlbFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7IC8vIFJldHVybiB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmRcbn07XG5cbi8qKlxuICogdmFsaWRhdGUgYWxsIHNsaWRlciBmaWVsZCBpbnB1dFxuICovXG5jb25zdCBzbGlkZXJGaWVsZEVycm9yU3RhdHVzID0gKHNlbGVjdG9yLCBwYXJlbnRDbGFzcywgZXJyb3JDbGFzcykgPT4ge1xuICBjb25zdCBjbG9zZXN0ID0gc2VsZWN0b3IuY2xvc2VzdChwYXJlbnRDbGFzcyksXG4gICAgbWluVmFsdWUgPSBOdW1iZXIoY2xvc2VzdC5xdWVyeVNlbGVjdG9yKCcuc2MtcmFuZ2Utc2xpZGVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpKSxcbiAgICBlcnJvclNlbGVjdG9yID0gY2xvc2VzdC5xdWVyeVNlbGVjdG9yKGVycm9yQ2xhc3MpLFxuICAgIHZhbHVlID0gTnVtYmVyKHNlbGVjdG9yLnZhbHVlLnJlcGxhY2UoL1teMC05XSsvZ2ksICcnKSk7XG5cbiAgaWYgKHZhbHVlID49IG1pblZhbHVlKSB7XG4gICAgZXJyb3JTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZXJyb3JTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogY2hlY2sgc3RlcCBmaWVsZCBlcnJvciBzdGF0dXNcbiAqL1xuY29uc3Qgc3RlcEZpZWxkRXJyb3JTdGF0dXMgPSAoc2VsZWN0b3IsIHBhcmVudENsYXNzLCBlcnJvckNsYXNzKSA9PiB7XG4gIGNvbnN0IG1pblZhbHVlID0gTnVtYmVyKHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1taW4nKSksXG4gICAgZXJyb3JTZWxlY3RvciA9IHNlbGVjdG9yLmNsb3Nlc3QocGFyZW50Q2xhc3MpLnF1ZXJ5U2VsZWN0b3IoZXJyb3JDbGFzcyksXG4gICAgdmFsdWUgPSBOdW1iZXIoc2VsZWN0b3IudmFsdWUucmVwbGFjZSgvW14wLTldKy9naSwgJycpKTtcblxuICBpZiAodmFsdWUgPj0gbWluVmFsdWUpIHtcbiAgICBlcnJvclNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBlcnJvclNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBUaGUgRlYgZnVuY3Rpb24gaXMgYSBmaW5hbmNpYWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBmdXR1cmUgdmFsdWUgb2YgYW4gaW52ZXN0bWVudFxuICogQHBhcmFtIHsqfSByYXRlIHN0ZXAgdXAgcmF0ZVxuICogQHBhcmFtIHsqfSBucGVyIHRpbWUgcGVyaW9kXG4gKiBAcGFyYW0geyp9IHBtdCBTaW5jZSBFeGNlbCBmb3JtdWxhIGhhcyBhbiBlbXB0eSBmaWVsZCwgd2UgYXNzdW1lIGl0J3MgMFxuICogQHBhcmFtIHsqfSBwdiBpbml0aWFsIGludmVzdG1lbnQgYW1vdW50XG4gKiBAcGFyYW0geyp9IHR5cGUgVGhlIEV4Y2VsIGZvcm11bGEgc3BlY2lmaWVzIHR5cGUgYXMgMFxuICogQHJldHVybnNcbiAqL1xuY29uc3QgY2FsY3VsYXRlRnV0dXJlVmFsdWUgPSAocmF0ZSwgbnBlciwgcG10LCBwdiwgdHlwZSkgPT4ge1xuICAvLyBDYWxjdWxhdGUgdGhlIGZ1dHVyZSB2YWx1ZVxuICBjb25zdCByb3VuZGVkTnBlciA9IE1hdGgucm91bmQobnBlcik7XG4gIGNvbnN0IGZhY3RvciA9IE1hdGgucG93KDEgKyByYXRlLCByb3VuZGVkTnBlcik7XG4gIGNvbnN0IGZ1dHVyZVZhbHVlID0gcHYgKiBmYWN0b3IgKyAocG10ICogKDEgLSBmYWN0b3IpKSAvIHJhdGU7XG5cbiAgaWYgKHR5cGUgPT09IDApIHtcbiAgICByZXR1cm4gZnV0dXJlVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdHlwZSBpcyBub3QgMCwgYWRqdXN0IHRoZSByZXN1bHRcbiAgICByZXR1cm4gZnV0dXJlVmFsdWUgKiAoMSArIHJhdGUpO1xuICB9XG59O1xuXG4vKipcbiAqIGJhc2VkIG9uIHRoZSBpbnB1dCBtb250aCwgaXQncyBjYWxjdWxhdGUgbnVtYmVyIG9mIHllYXIgYW5kIG1vbnRoXG4gKi9cbmNvbnN0IGNvbnZlcnRNb250aHNUb1llYXJzQW5kTW9udGhzID0gbW9udGhzID0+IHtcbiAgY29uc3QgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTtcbiAgY29uc3QgcmVtYWluaW5nTW9udGhzID0gbW9udGhzICUgMTI7XG4gIHJldHVybiB7IHllYXJzLCBtb250aHM6IHJlbWFpbmluZ01vbnRocyB9O1xufTtcblxuLyoqXG4gKiBjYWxjdWxhdGUgbW9udGhseSByZXBheW1lbnQgYW1vdW50IGFuZCBpdCdzIGZvciA9UE1UKEQ0LzEyLEQ2LDAsLUQzLDApIGZvcm11bGFcbiAqIEBwYXJhbSB7TnVtYmVyfSByYXRlOiBpbnRlcmVzdCByYXRlIGZvciBlYWNoIHBlcmlvZFxuICogQHBhcmFtIHtOdW1iZXJ9IG5wZXI6IG51bWJlciBvZiBwZXJpb2RzXG4gKiBAcGFyYW0ge051bWJlcn0gcHY6IHByZXNlbnQgdmFsdWUgb3IgcHJpbmNpcGFsIGFtb3VudFxuICogQHBhcmFtIHtOdW1iZXJ9IGZ2OiBmdXR1cmUgdmFsdWUgb3IgYSBjYXNoIGJhbGFuY2UgYWZ0ZXIgdGhlIGxhc3QgcGF5bWVudFxuICogQHJldHVybiB7TnVtYmVyfSB0eXBlOiAwIGZvciBwYXltZW50cyBhdCB0aGUgZW5kIG9mIHRoZSBwZXJpb2QsIDEgZm9yIHBheW1lbnRzIGF0IHRoZSBiZWdpbm5pbmdcbiAqIEV4YW1wbGU6XG4gKiBjYWxjdWxhdGVQTVQoMTAvMTIvMTAwLCAxMCwgMCwgLTEyMDAwMDAsIDApXG4gKiovXG5jb25zdCBleHRlbmRlZFBNVCA9IChyYXRlLCBucGVyLCBwdiwgZnYsIHR5cGUpID0+IHtcbiAgaWYgKHJhdGUgPT09IDApIHtcbiAgICByZXR1cm4gLShwdiArIGZ2KSAvIG5wZXI7XG4gIH1cblxuICB2YXIgcHZpZiA9IE1hdGgucG93KDEgKyByYXRlLCBucGVyKTtcbiAgdmFyIHBtdCA9IChyYXRlICogKGZ2ICsgcHZpZiAqIHB2KSkgLyAocHZpZiAtIDEpO1xuXG4gIGlmICh0eXBlID09PSAxKSB7XG4gICAgcG10IC89IDEgKyByYXRlO1xuICB9XG4gIHJldHVybiAtcG10O1xufTtcblxuLyoqXG4gKiBUaGUgY2FsY3VsYXRlTlBFUiBmdW5jdGlvbiBpcyBhIGZpbmFuY2lhbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG51bWJlciBvZiBwZXJpb2RzIGZvciBsb2FuIG9yIGludmVzdG1lbnRcbiAqIHJhdGUgLSBUaGUgaW50ZXJlc3QgcmF0ZSBwZXIgcGVyaW9kLlxuICogcGF5bWVudCAtIFRoZSBwYXltZW50IG1hZGUgZWFjaCBwZXJpb2QuXG4gKiBwcmVzZW50IC0gVGhlIHByZXNlbnQgdmFsdWUsIG9yIHRvdGFsIHZhbHVlIG9mIGFsbCBwYXltZW50cyBub3cuXG4gKiBmdXR1cmUgLSBbb3B0aW9uYWxdIFRoZSBmdXR1cmUgdmFsdWUsIG9yIGEgY2FzaCBiYWxhbmNlIHlvdSB3YW50IGFmdGVyIHRoZSBsYXN0IHBheW1lbnQgaXMgbWFkZS4gRGVmYXVsdHMgdG8gMC5cbiAqIHR5cGUgLSBbb3B0aW9uYWxdIFdoZW4gcGF5bWVudHMgYXJlIGR1ZS4gMCA9IGVuZCBvZiBwZXJpb2QuIDEgPSBiZWdpbm5pbmcgb2YgcGVyaW9kLiBEZWZhdWx0IGlzIDAuXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZU5QRVIgPSAocmF0ZSwgcGF5bWVudCwgcHJlc2VudCwgZnV0dXJlLCB0eXBlKSA9PiB7XG4gIC8vIEluaXRpYWxpemUgdHlwZVxuICB0eXBlID0gdHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnID8gMCA6IHR5cGU7XG5cbiAgLy8gSW5pdGlhbGl6ZSBmdXR1cmUgdmFsdWVcbiAgZnV0dXJlID0gdHlwZW9mIGZ1dHVyZSA9PT0gJ3VuZGVmaW5lZCcgPyAwIDogZnV0dXJlO1xuXG4gIC8vIFJldHVybiBudW1iZXIgb2YgcGVyaW9kc1xuICBjb25zdCBudW0gPSBwYXltZW50ICogKDEgKyByYXRlICogdHlwZSkgLSBmdXR1cmUgKiByYXRlO1xuICBjb25zdCBkZW4gPSBwcmVzZW50ICogcmF0ZSArIHBheW1lbnQgKiAoMSArIHJhdGUgKiB0eXBlKTtcbiAgcmV0dXJuIE1hdGgubG9nKG51bSAvIGRlbikgLyBNYXRoLmxvZygxICsgcmF0ZSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiB5ZWFycyBhbmQgbW9udGhzIGZyb20gYSBnaXZlbiBudW1iZXIgb2YgbW9udGhzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZk1vbnRocyAtIFRoZSB0b3RhbCBudW1iZXIgb2YgbW9udGhzLlxuICogQHJldHVybnMge1N0cmluZ30gU3RyaW5nIHdpdGggdGhlIGNhbGN1bGF0ZWQgbnVtYmVyIG9mIHllYXJzIGFuZCBtb250aHMuXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZVllYXJNb250aCA9IG51bWJlck9mTW9udGhzID0+IHtcbiAgbGV0IG1vbnRocyA9IG51bWJlck9mTW9udGhzICUgMTI7XG4gIGxldCB5ZWFycyA9IE1hdGguZmxvb3IobnVtYmVyT2ZNb250aHMgLyAxMik7XG4gIGlmICh5ZWFycyA+IDEpIHtcbiAgICB5ZWFycyA9IGAke3llYXJzfSBZZWFyKHMpYDtcbiAgfSBlbHNlIGlmICh5ZWFycyA9PT0gMSkge1xuICAgIHllYXJzID0gYCR7eWVhcnN9IFllYXJgO1xuICB9IGVsc2Uge1xuICAgIHllYXJzID0gJyc7XG4gIH1cblxuICBpZiAobW9udGhzID4gMSkge1xuICAgIG1vbnRocyA9IGAgJHttb250aHN9IE1vbnRoKHMpYDtcbiAgfSBlbHNlIGlmIChtb250aHMgPT09IDEpIHtcbiAgICBtb250aHMgPSBgICR7bW9udGhzfSBNb250aGA7XG4gIH0gZWxzZSB7XG4gICAgbW9udGhzID0gJyc7XG4gIH1cblxuICByZXR1cm4gYCR7eWVhcnN9JHttb250aHN9YDtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgRWZmZWN0aXZlIEludGVyZXN0IFJhdGUgKEVJUikgb3IgSW50ZXJuYWwgUmF0ZSBvZiBSZXR1cm4gKElSUilcbiAqIHVzaW5nIE5ld3RvbidzIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcGVyaW9kcyAtIE51bWJlciBvZiBjb21wb3VuZGluZyBwZXJpb2RzLlxuICogQHBhcmFtIHtudW1iZXJ9IHBheW1lbnQgLSBQZXJpb2RpYyBwYXltZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHByZXNlbnQgLSBQcmVzZW50IHZhbHVlIG9yIGluaXRpYWwgaW52ZXN0bWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmdXR1cmUgLSBGdXR1cmUgdmFsdWUgb3IgZmluYWwgaW52ZXN0bWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIC0gMCBmb3Igb3JkaW5hcnkgYW5udWl0eSwgMSBmb3IgYW5udWl0eSBkdWUuXG4gKiBAcGFyYW0ge251bWJlcn0gW2d1ZXNzPTAuMDFdIC0gSW5pdGlhbCBndWVzcyBmb3IgdGhlIGludGVyZXN0IHJhdGUuIERlZmF1bHRzIHRvIDAuMDEuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIENhbGN1bGF0ZWQgRWZmZWN0aXZlIEludGVyZXN0IFJhdGUuXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZUVJUiA9IChwZXJpb2RzLCBwYXltZW50LCBwcmVzZW50LCBmdXR1cmUsIHR5cGUsIGd1ZXNzKSA9PiB7XG4gIGd1ZXNzID0gZ3Vlc3MgPT09IHVuZGVmaW5lZCA/IDAuMDEgOiBndWVzcztcbiAgZnV0dXJlID0gZnV0dXJlID09PSB1bmRlZmluZWQgPyAwIDogZnV0dXJlO1xuICB0eXBlID0gdHlwZSA9PT0gdW5kZWZpbmVkID8gMCA6IHR5cGU7XG5cbiAgLy8gU2V0IG1heGltdW0gZXBzaWxvbiBmb3IgZW5kIG9mIGl0ZXJhdGlvblxuICB2YXIgZXBzTWF4ID0gMWUtMTA7XG5cbiAgLy8gU2V0IG1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcbiAgdmFyIGl0ZXJNYXggPSAxMDtcblxuICAvLyBJbXBsZW1lbnQgTmV3dG9uJ3MgbWV0aG9kXG4gIHZhciB5LFxuICAgIHkwLFxuICAgIHkxLFxuICAgIHgwLFxuICAgIHgxID0gMCxcbiAgICBmID0gMCxcbiAgICBpID0gMDtcbiAgdmFyIHJhdGUgPSBndWVzcztcbiAgaWYgKE1hdGguYWJzKHJhdGUpIDwgZXBzTWF4KSB7XG4gICAgeSA9IHByZXNlbnQgKiAoMSArIHBlcmlvZHMgKiByYXRlKSArIHBheW1lbnQgKiAoMSArIHJhdGUgKiB0eXBlKSAqIHBlcmlvZHMgKyBmdXR1cmU7XG4gIH0gZWxzZSB7XG4gICAgZiA9IE1hdGguZXhwKHBlcmlvZHMgKiBNYXRoLmxvZygxICsgcmF0ZSkpO1xuICAgIHkgPSBwcmVzZW50ICogZiArIHBheW1lbnQgKiAoMSAvIHJhdGUgKyB0eXBlKSAqIChmIC0gMSkgKyBmdXR1cmU7XG4gIH1cbiAgeTAgPSBwcmVzZW50ICsgcGF5bWVudCAqIHBlcmlvZHMgKyBmdXR1cmU7XG4gIHkxID0gcHJlc2VudCAqIGYgKyBwYXltZW50ICogKDEgLyByYXRlICsgdHlwZSkgKiAoZiAtIDEpICsgZnV0dXJlO1xuICBpID0geDAgPSAwO1xuICB4MSA9IHJhdGU7XG4gIHdoaWxlIChNYXRoLmFicyh5MCAtIHkxKSA+IGVwc01heCAmJiBpIDwgaXRlck1heCkge1xuICAgIHJhdGUgPSAoeTEgKiB4MCAtIHkwICogeDEpIC8gKHkxIC0geTApO1xuICAgIHgwID0geDE7XG4gICAgeDEgPSByYXRlO1xuICAgIGlmIChNYXRoLmFicyhyYXRlKSA8IGVwc01heCkge1xuICAgICAgeSA9IHByZXNlbnQgKiAoMSArIHBlcmlvZHMgKiByYXRlKSArIHBheW1lbnQgKiAoMSArIHJhdGUgKiB0eXBlKSAqIHBlcmlvZHMgKyBmdXR1cmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGYgPSBNYXRoLmV4cChwZXJpb2RzICogTWF0aC5sb2coMSArIHJhdGUpKTtcbiAgICAgIHkgPSBwcmVzZW50ICogZiArIHBheW1lbnQgKiAoMSAvIHJhdGUgKyB0eXBlKSAqIChmIC0gMSkgKyBmdXR1cmU7XG4gICAgfVxuICAgIHkwID0geTE7XG4gICAgeTEgPSB5O1xuICAgICsraTtcbiAgfVxuICByZXR1cm4gcmF0ZTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRpbmcgdGhlIEludGVybmFsIFJhdGUgb2YgUmV0dXJuIChJUlIpXG4gKiAqIEBwYXJhbSB7Kn0gY2FzaEZsb3dzIGlzIGFuIGFycmF5IGxpa2UgWy0yMDAwMDAuMDAsIDAsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjcsIDQ2NjYuNjddIHdoZXJlIC0yMDAwMDAuMDAgaXMgdGhlIGlucHV0IGxvYWQgYW1vdW50IGFuZCA0NjY2LjY3IGlzIHRoZSBNb250aGx5IFJlcGF5bWVudCBBbW91bnRcbiAqL1xuY29uc3QgY2FsY3VsYXRlSVJSID0gKGNhc2hGbG93cywgaXRlcmF0aW9ucyA9IDEwMCwgdG9sZXJhbmNlID0gMC4wMDAwMSkgPT4ge1xuICBsZXQgaXJyID0gMC4xOyAvLyBJbml0aWFsIGd1ZXNzIGZvciBJUlJcbiAgbGV0IGNhc2hmbG93VmFsdWUgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgY2FzaGZsb3dWYWx1ZSA9IDA7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNhc2hGbG93cy5sZW5ndGg7IGorKykge1xuICAgICAgY2FzaGZsb3dWYWx1ZSArPSBjYXNoRmxvd3Nbal0gLyBNYXRoLnBvdygxICsgaXJyLCBqKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZXJpdmF0aXZlID0gY2FsY3VsYXRlRGVyaXZhdGl2ZShjYXNoRmxvd3MsIGlycik7XG4gICAgaXJyID0gaXJyIC0gY2FzaGZsb3dWYWx1ZSAvIGRlcml2YXRpdmU7XG5cbiAgICBpZiAoTWF0aC5hYnMoY2FzaGZsb3dWYWx1ZSkgPCB0b2xlcmFuY2UpIHtcbiAgICAgIHJldHVybiBpcnI7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIGl0ZXJhdGlvbiBkb2VzIG5vdCBjb252ZXJnZSwgcmV0dXJuIG51bGwgb3IgaGFuZGxlIGFjY29yZGluZ2x5XG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXJpdmF0aXZlIG9mIHRoZSBOUFYgd2l0aCByZXNwZWN0IHRvIHRoZSBJUlIuIFRoZSBpdGVyYXRpb24gY29udGludWVzIHVudGlsIHRoZSBOUFYgaXMgY2xvc2UgZW5vdWdoIHRvIHplcm8gb3IgdGhlIG1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnMgaXMgcmVhY2hlZC5cbiAqL1xuY29uc3QgY2FsY3VsYXRlRGVyaXZhdGl2ZSA9IChjYXNoRmxvd3MsIGlycikgPT4ge1xuICBsZXQgZGVyaXZhdGl2ZSA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXNoRmxvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBkZXJpdmF0aXZlIC09IChpICogY2FzaEZsb3dzW2ldKSAvIE1hdGgucG93KDEgKyBpcnIsIGkgKyAxKTtcbiAgfVxuICByZXR1cm4gZGVyaXZhdGl2ZTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgcHJlc2VudCB2YWx1ZSBvZiBhbiBpbnZlc3RtZW50IChQViBNZXRob2QpLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhdGVQZXJQZXJpb2QgLSBUaGUgaW50ZXJlc3QgcmF0ZSBwZXIgcGVyaW9kLlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mUGVyaW9kcyAtIFRoZSB0b3RhbCBudW1iZXIgb2YgcGVyaW9kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXltZW50IC0gVGhlIHBheW1lbnQgYW1vdW50IHBlciBwZXJpb2QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcHJlc2VudCB2YWx1ZSBvZiB0aGUgaW52ZXN0bWVudC5cbiAqL1xuY29uc3QgY2FsY3VsYXRlUHJlc2VudFZhbHVlID0gKHJhdGUsIG5wZXIsIHBtdCkgPT4ge1xuICByZXR1cm4gcG10ICogKCgxIC0gTWF0aC5wb3coMSArIHJhdGUsIC1ucGVyKSkgLyByYXRlKTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbW9udGhseSBwYXltZW50IG9uIGEgbG9hbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcmF0ZSAtIFRoZSBtb250aGx5IGludGVyZXN0IHJhdGUgKGFubnVhbCByYXRlIGRpdmlkZWQgYnkgMTIpLlxuICogQHBhcmFtIHtudW1iZXJ9IG5wZXIgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBheW1lbnRzICh5ZWFycyBtdWx0aXBsaWVkIGJ5IDEyKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwdiAtIFRoZSBwcmVzZW50IHZhbHVlIG9yIGxvYW4gYW1vdW50IChzaG91bGQgYmUgbmVnYXRpdmUgYXMgaXQncyBhbiBvdXRmbG93KS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBtb250aGx5IHBheW1lbnQuXG4gKi9cbmNvbnN0IHBtdCA9IChyYXRlLCBucGVyLCBwdikgPT4ge1xuICBpZiAocmF0ZSA9PT0gMCkgcmV0dXJuIC1wdiAvIG5wZXI7XG4gIGNvbnN0IHB2aWYgPSBNYXRoLnBvdygxICsgcmF0ZSwgbnBlcik7XG4gIHJldHVybiAocmF0ZSAqIHB2ICogcHZpZikgLyAocHZpZiAtIDEpO1xufTtcblxuLyoqXG4gKiBnZXQgY3VycmVudCBlbGVtZW50cyBoZWlnaHQgaW5jbHVkaW5nIG1hcmdpbiB0b3AgYW5kIGJvdHRvbVxuICogQHBhcmFtIHtPYmplY3R9IGVsIC0gVGhlIGVsZW1lbnRzIHdoaWNoIGhlaWdodCBuZWVkIHRvIGJlIGNhbGN1bGF0ZWRcbiAqIGdldE91dGVySGVpZ2h0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvbmV0cnVzdC1iYW5uZXItc2RrJykpXG4gKiovXG5jb25zdCBnZXRPdXRlckhlaWdodCA9IGVsID0+IHtcbiAgaWYgKCFlbCkgcmV0dXJuIDA7XG4gIGxldCBlbEhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcbiAgZWxIZWlnaHQgKz0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSk7XG4gIGVsSGVpZ2h0ICs9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykpO1xuICByZXR1cm4gZWxIZWlnaHQ7XG59O1xuXG4vKipcbiAqIE1hdGNoSGVpZ2h0IGZ1bmN0aW9uIHRvIG1ha2UgZGl2cyB0aGUgc2FtZSBoZWlnaHQuIFVzZSB0aGlzIGZ1bmN0aW9uIG9ubHkgd2hlbiBDU1MgZmxleGJveCBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgLSBDb250YWluZXIgY2xhc3MsIGlkLCBvciBlbGVtZW50LlxuICovXG5jb25zdCBtYXRjaEhlaWdodCA9IHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBpZiAoIWVsZW1lbnRzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIC8vIEdldCB0aGUgdGFsbGVzdCBoZWlnaHQgYnkgbWFwcGluZyBhbGwgZWxlbWVudHMgdG8gdGhlaXIgb2Zmc2V0SGVpZ2h0IGFuZCBmaW5kaW5nIHRoZSBtYXggdmFsdWVcbiAgY29uc3QgdGFsbGVzdCA9IE1hdGgubWF4KC4uLlsuLi5lbGVtZW50c10ubWFwKGVsID0+IGVsLm9mZnNldEhlaWdodCkpO1xuXG4gIC8vIFNldCBlYWNoIGVsZW1lbnQncyBoZWlnaHQgdG8gdGhlIHRhbGxlc3QgdmFsdWVcbiAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gYCR7dGFsbGVzdH1weGA7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBzY3JvbGwgdGFyZ2V0IHBvc2l0aW9uIHdpdGggYW5pbWF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0IHNjcm9sbCBjbGFzc1xuICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIHNjcm9sbCB0aW1lIGluIG1zXG4gKiBAcGFyYW0ge051bWJlcn0gbWFyZ2luIG5lZ2F0aXZlIHZhbHVlIGZvcm0gdG9wXG4gKiBAZXhhbXBsZVxuICogc2Nyb2xsKCdib2R5JywgNTAwLCA5MClcbiAqL1xuY29uc3Qgc21vb3RoU2Nyb2xsID0gKHRhcmdldCwgZHVyYXRpb24sIHdpZHRoID0gMCkgPT4ge1xuICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICBsZXQgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gd2lkdGg7XG4gIGxldCBzdGFydFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcblxuICBjb25zdCBhbmltYXRpb24gPSBjdXJyZW50VGltZSA9PiB7XG4gICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgbGV0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgbGV0IHJ1biA9IGVhc2UodGltZUVsYXBzZWQsIHN0YXJ0UG9zaXRpb24sIHRhcmdldFBvc2l0aW9uLCBkdXJhdGlvbik7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHJ1bik7XG4gICAgaWYgKHRpbWVFbGFwc2VkIDwgZHVyYXRpb24pIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICB9O1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICBjb25zdCBlYXNlID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICB0IC89IGQgLyAyO1xuICAgIGlmICh0IDwgMSkgcmV0dXJuIChjIC8gMikgKiB0ICogdCArIGI7XG4gICAgdC0tO1xuICAgIHJldHVybiAoLWMgLyAyKSAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgfTtcbn07XG5cbi8qKlxuICogdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsIHdoZW4gYW55IGtleSBwcmVzc2VkIGluIGVzdGltYXRlIGRhaWx5IGZpZWxkLCBwYXNzIHZhbHVlIHRvIGNhbGN1bGF0ZUludGVyZXN0IG1ldGhvZCBhbmQgcmV0dXJuIHN0YXJ0IHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCBnZXQgZXN0aW1hdGUgZGFpbHkgYmFsYW5jZSBudW1iZXIgb2YgY2xpY2sgICAgICAqXG4gKiBAZXhhbXBsZVxuICogYWN0aXZlSW5wdXRWYWwoMSwgMTIwMClcbiAqL1xuY29uc3QgdmFsaWRhdGVJbnB1dE5vU2xpZGVyID0gKHNlbGVjdG9yLCBlcnJvclNlbGVjdG9yLCBoaWRlQ2xhc3MgPSAnJykgPT4ge1xuICBjb25zdCBtaW5WYWx1ZSA9IE51bWJlcihzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJykpO1xuICBjb25zdCBtYXhWYWx1ZSA9IE51bWJlcihzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JykpO1xuICBsZXQgZGVjaW1hbFBsYWNlcyA9IE51bWJlcihzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVjaW1hbCcpKTtcblxuICBsZXQgaW5pdFZhbHVlID0gc2VsZWN0b3IudmFsdWUsXG4gICAgdmFsdWUgPSAwO1xuXG4gIGhpZGVDbGFzcyA/IGVycm9yU2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnaGlkZScpIDogKGVycm9yU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gIGlmICghZGVjaW1hbFBsYWNlcykge1xuICAgIHZhbHVlID0gaW5pdFZhbHVlLnJlcGxhY2UoL1teMC05XSsvZ2ksICcnKS5yZXBsYWNlKC9eMC8sICcnKTsgLy9yZW1vdmUgYWxsIHN0cmluZyBleGNlcHQgMC05XG4gICAgaWYgKHZhbHVlICE9IGluaXRWYWx1ZSkge1xuICAgICAgc2VsZWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRlY2ltYWxQbGFjZXMgPSBOdW1iZXIoZGVjaW1hbFBsYWNlcyk7XG4gICAgLy9pZiB0ZXh0IGZpZWxkIHN1cHBvcnRzIGZyYWN0aW9uIHZhbHVlXG4gICAgdmFsdWUgPSBpbml0VmFsdWUucmVwbGFjZSgvW14wLTkuXS9naSwgJycpLnJlcGxhY2UoL14wLywgJycpO1xuICAgIGlmICh2YWx1ZSAhPSBpbml0VmFsdWUpIHtcbiAgICAgIHNlbGVjdG9yLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByYVZhbCA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBpZiAodmFsdWUgPT09ICcuJykge1xuICAgICAgICBoaWRlQ2xhc3NcbiAgICAgICAgICA/IGVycm9yU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgOiAoZXJyb3JTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAocmFWYWwubGVuZ3RoID4gZGVjaW1hbFBsYWNlcykge1xuICAgICAgICAvL21vcmUgdGhhbiB0d28gZmxvYXRpbmcgcG9pbnRcbiAgICAgICAgdmFsdWUgPSBgJHtyYVZhbFswXX0uJHtyYVZhbFsxXX1gO1xuICAgICAgICBzZWxlY3Rvci52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHJhVmFsWzFdICYmIHJhVmFsWzFdLmxlbmd0aCA+IGRlY2ltYWxQbGFjZXMpIHtcbiAgICAgICAgdmFsdWUgPSBgJHtyYVZhbFswXX0uYCArIHJhVmFsWzFdLnN1YnN0cigwLCBkZWNpbWFsUGxhY2VzKTtcbiAgICAgICAgc2VsZWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAocmFWYWxbMV0gJiYgcmFWYWxbMV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobWF4VmFsdWUgIT09IC0xICYmIHZhbHVlID4gbWF4VmFsdWUpIHtcbiAgICAvL2NoZWNraW5nIHRleHQgZmllbGQgbWF4aW11bSB2YWx1ZVxuICAgIHZhbHVlID0gbWF4VmFsdWU7XG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnICYmIG1pblZhbHVlID4gMCkge1xuICAgIC8vbGVhdmUgdGV4dCBmaWVsZCBhcyBibGFuayBhbmQgZmlsbCBpdCB3aXRoIDBcbiAgICB2YWx1ZSA9ICcnO1xuICAgIGhpZGVDbGFzcyA/IGVycm9yU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpIDogKGVycm9yU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICB9IGVsc2UgaWYgKHZhbHVlIDwgbWluVmFsdWUpIHtcbiAgICBoaWRlQ2xhc3MgPyBlcnJvclNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSA6IChlcnJvclNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snKTtcbiAgfVxuICBzZWxlY3Rvci52YWx1ZSA9IHZhbHVlO1xufTtcblxuY29uc3QgZ2V0QXNzZXREb21haW4gPSAoKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmKi9cbiAgaWYgKHR5cGVvZiBiYXNlVVJMID09PSAndW5kZWZpbmVkJyB8fCBiYXNlVVJMID09PSAnJykge1xuICAgIHZhciBlbnYgPSBnZXRDdXJyZW50RW52aXJvbm1lbnQoKTtcbiAgICB2YXIgZG9tYWluID0gZ2V0UGFnZVVybCgpLmRvbWFpbjtcbiAgICBpZiAoZW52ID09PSB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuUFJPRFVDVElPTikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdXJsT2JqWzExXSArXG4gICAgICAgICc6Ly8nICtcbiAgICAgICAgdXJsT2JqWzVdICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgdXJsT2JqWzNdICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgdXJsT2JqWzRdICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdXJsT2JqWzZdICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdXJsT2JqWzddICtcbiAgICAgICAgJy8nXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZW52ID09PSB3aW5kb3cuc2NDb21tb25Db25zdGFudHMuREVWRUxPUE1FTlQpIHtcbiAgICAgIGlmIChkb21haW4gPT09IHVybE9ialszXSArICcuJyArIHVybE9ialsxNF0pIHtcbiAgICAgICAgcmV0dXJuICcvY29udGVudC90aGVtZXMvc2NyZXRhaWwvYXNzZXRzL2dsb2JhbC8nO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZG9tYWluID09PSB1cmxPYmpbMV0gKyAnLicgKyB1cmxPYmpbMl0gKyAnLicgKyB1cmxPYmpbNF0gfHxcbiAgICAgICAgZG9tYWluID09PSB1cmxPYmpbMF0gKyAnLicgKyB1cmxPYmpbM10gKyAnLicgKyB1cmxPYmpbNF1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHVybE9ialsxMV0gK1xuICAgICAgICAgICc6Ly8nICtcbiAgICAgICAgICB1cmxPYmpbMV0gK1xuICAgICAgICAgICcuJyArXG4gICAgICAgICAgdXJsT2JqWzJdICtcbiAgICAgICAgICAnLicgK1xuICAgICAgICAgIHVybE9ials0XSArXG4gICAgICAgICAgJy8nICtcbiAgICAgICAgICB1cmxPYmpbOF0gK1xuICAgICAgICAgICcvJyArXG4gICAgICAgICAgdXJsT2JqWzZdICtcbiAgICAgICAgICAnLycgK1xuICAgICAgICAgIHVybE9ials3XSArXG4gICAgICAgICAgJy8nXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJy9hc3NldHMvJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVudiA9PT0gd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLlNUQUdJTkcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHVybE9ialsxMV0gK1xuICAgICAgICAnOi8vJyArXG4gICAgICAgIHVybE9ialsxXSArXG4gICAgICAgICcuJyArXG4gICAgICAgIHVybE9ialsyXSArXG4gICAgICAgICcuJyArXG4gICAgICAgIHVybE9ials0XSArXG4gICAgICAgICcvJyArXG4gICAgICAgIHVybE9ials5XSArXG4gICAgICAgICcvJyArXG4gICAgICAgIHVybE9ials2XSArXG4gICAgICAgICcvJyArXG4gICAgICAgIHVybE9ials3XSArXG4gICAgICAgICcvJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdXJsT2JqWzExXSArXG4gICAgICAgICc6Ly8nICtcbiAgICAgICAgdXJsT2JqWzFdICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgdXJsT2JqWzJdICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgdXJsT2JqWzRdICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdXJsT2JqWzZdICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdXJsT2JqWzddICtcbiAgICAgICAgJy8nXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChiYXNlVVJMID09PSAnL3pvbycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdXJsT2JqWzExXSArXG4gICAgICAnOi8vJyArXG4gICAgICB1cmxPYmpbMTBdICtcbiAgICAgICcuJyArXG4gICAgICB1cmxPYmpbM10gK1xuICAgICAgJy4nICtcbiAgICAgIHVybE9ials0XSArXG4gICAgICAnLycgK1xuICAgICAgdXJsT2JqWzE1XSArXG4gICAgICAnLycgK1xuICAgICAgdXJsT2JqWzZdICtcbiAgICAgICcvJ1xuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2VVUkw7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiovXG59O1xuXG4vKipcbiAqIHRyaWdnZXIgYWRvYmUgcG9wdXBWaWV3ZWQgZXZlbnQgd2hlbiBzaG93aW5nIHBvcHVwc1xuICovXG5jb25zdCB0cmlnZ2VyUG9wdXBWaWV3ZWRUYWdnaW5nID0gcG9wdXBOYW1lID0+IHtcbiAgaWYgKHR5cGVvZiBsYXVuY2hzY3JpcHQgPT09ICd1bmRlZmluZWQnICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRvYmVsYXVuY2hzY3JpcHQnKSkge1xuICAgIC8vQWRvYmUgQW5hbHl0aWNzIG5vdCBlbmFibGUgZm9yIHRoaXMgbWFya2V0XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxldCBkYXRhT2JqZWN0ID0ge1xuICAgICAgLi4uZGlnaXRhbERhdGEsXG4gICAgICBmb3JtOiB7XG4gICAgICAgIGZvcm1OYW1lOiAnJyxcbiAgICAgICAgZm9ybVN0ZXBOYW1lOiAnJyxcbiAgICAgICAgZm9ybVR5cGU6ICcnLFxuICAgICAgICBmb3JtUGxhdGZvcm06ICcnXG4gICAgICB9XG4gICAgfTtcbiAgICBkYXRhT2JqZWN0LmZvcm0ucG9wdXBOYW1lID0gcG9wdXBOYW1lO1xuICAgIGRhdGFPYmplY3QuZXZlbnQgPSAncG9wdXBWaWV3ZWQnO1xuICAgIHNjQW5hbHl0aWNzRGF0YUFycmF5LnB1c2goZGF0YU9iamVjdCk7XG4gIH0sIDUwMCk7XG59O1xuXG5jb25zdCBnZXRDYW1wYWlnbkluZm9WMSA9ICgpID0+IHtcbiAgbGV0IHBhZ2VOYW1lID0gd2luZG93LmRpZ2l0YWxEYXRhLnBhZ2UucGFnZUluZm8ucGFnZU5hbWUuc3BsaXQoJzonKTtcbiAgbGV0IGFsbG93YWJsZVF1ZXJ5U3RyaW5nID0gd2luZG93LnNjQ29tbW9uQ29uc3RhbnRzLkFMTE9XQUJMRV9RVUVSWVNUUklORy5zY2I7XG4gIGlmICgocGFnZU5hbWVbMF0gPT09ICdwaycgJiYgcGFnZU5hbWVbM10gPT09ICd1ZHAtZm9ybScpIHx8IHBhZ2VOYW1lWzBdID09PSAnaW4nKSB7XG4gICAgbGV0IGNhbXBhaWduRGF0YSA9IGdldEludEV4dENhbXBhaWduSW5mbyhwYWdlTmFtZVswXSk7XG4gICAgd2luZG93LmRpZ2l0YWxEYXRhLmNhbXBhaWduID0ge1xuICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgY2FtcGFpZ25OYW1lOiBjYW1wYWlnbkRhdGFbJ2ludE5hbWUnXSxcbiAgICAgICAgY2FtcGFpZ25WYWx1ZTogY2FtcGFpZ25EYXRhWydpbnRWYWwnXVxuICAgICAgfSxcbiAgICAgIGV4dGVybmFsOiB7XG4gICAgICAgIGNhbXBhaWduTmFtZTogY2FtcGFpZ25EYXRhWydleHROYW1lJ10sXG4gICAgICAgIGNhbXBhaWduVmFsdWU6IGNhbXBhaWduRGF0YVsnZXh0VmFsJ11cbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGxldCBjYW1wYWlnbkRhdGEgPSBnZXRDYW1wYWlnbkluZm8oYWxsb3dhYmxlUXVlcnlTdHJpbmcpO1xuICAgIHdpbmRvdy5kaWdpdGFsRGF0YS5jYW1wYWlnbiA9IHdpbmRvdy5kaWdpdGFsRGF0YS5jYW1wYWlnbiB8fCB7fTtcbiAgICB3aW5kb3cuZGlnaXRhbERhdGEuY2FtcGFpZ24gPSB7XG4gICAgICBpbnRlcm5hbDoge1xuICAgICAgICBjYW1wYWlnbk5hbWU6IGNhbXBhaWduRGF0YVswXSxcbiAgICAgICAgY2FtcGFpZ25WYWx1ZTogY2FtcGFpZ25EYXRhWzFdXG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBQcm9jZXNzZXMgYSBjYW1wYWlnbiBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIGB3aW5kb3cuZGlnaXRhbERhdGEuY2FtcGFpZ25gIG9iamVjdCB3aXRoIHRoZSBleHRyYWN0ZWQgcXVlcnkgcGFyYW1ldGVycyBhbmQgdmFsdWVzLlxuICovXG5jb25zdCBnZXRDYW1wYWlnbkluZm9WMiA9IGNhbXBhaWduT2JqID0+IHtcbiAgT2JqZWN0LmVudHJpZXMoY2FtcGFpZ25PYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdpbnRlcm5hbCcgfHwga2V5ID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICBjb25zdCBwYXJhbVZhbHVlID0gZXh0cmFjdFF1ZXJ5UGFyYW1zKHZhbHVlKTtcbiAgICAgIHdpbmRvdy5kaWdpdGFsRGF0YS5jYW1wYWlnbltrZXldID0ge1xuICAgICAgICBjYW1wYWlnbk5hbWU6IHZhbHVlWzBdLFxuICAgICAgICBjYW1wYWlnblZhbHVlOiBwYXJhbVZhbHVlID8gcGFyYW1WYWx1ZS5zcGxpdCgnOicpWzFdIDogJ25hJ1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ290aGVyJykge1xuICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IGV4dHJhY3RRdWVyeVBhcmFtcyh2YWx1ZSwgdHJ1ZSk7XG4gICAgICB3aW5kb3cuZGlnaXRhbERhdGEuY2FtcGFpZ24ub3RoZXJQYXJhbXMgPSBwYXJhbVZhbHVlID8gcGFyYW1WYWx1ZSA6ICcnO1xuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IGV4dHJhY3RRdWVyeVBhcmFtcyhbZWxdKTtcbiAgICAgICAgd2luZG93LmRpZ2l0YWxEYXRhLmNhbXBhaWduW2VsXSA9IHBhcmFtVmFsdWUgPyBwYXJhbVZhbHVlLnNwbGl0KCc6JylbMV0gOiAnJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIEV4dHJhY3RzIHF1ZXJ5IHBhcmFtZXRlcnMgZnJvbSB0aGUgY3VycmVudCBVUkwgYmFzZWQgb24gaW5jbHVzaW9uIG9yIGV4Y2x1c2lvbiBydWxlcy5cbiAqL1xuXG5jb25zdCBleHRyYWN0UXVlcnlQYXJhbXMgPSAocXVlcnlQYXJhbXMgPSBbXSwgZXhjbHVkZVBhcmFtcyA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zZWFyY2gpO1xuICBjb25zdCBrZXlWYWx1ZVBhaXJzID0gW107XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBwYXJhbXMuZW50cmllcygpKSB7XG4gICAgY29uc3Qgc2hvdWxkSW5jbHVkZSA9IGV4Y2x1ZGVQYXJhbXNcbiAgICAgID8gIXF1ZXJ5UGFyYW1zLmluY2x1ZGVzKGtleSkgLy8gRXhjbHVkZSBjZXJ0YWluIHBhcmFtc1xuICAgICAgOiBxdWVyeVBhcmFtcy5sZW5ndGggPT09IDAgfHwgcXVlcnlQYXJhbXMuaW5jbHVkZXMoa2V5KTsgLy8gSW5jbHVkZSBhbGwgb3Igb25seSBzcGVjaWZpYyBwYXJhbXNcblxuICAgIGlmIChzaG91bGRJbmNsdWRlICYmIHZhbHVlKSB7XG4gICAgICBrZXlWYWx1ZVBhaXJzLnB1c2goYCR7a2V5fToke3ZhbHVlfWApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBrZXlWYWx1ZVBhaXJzLmpvaW4oJ3wnKTtcbn07XG5cbi8qKlxuICogYmFzZWQgb24gd2hpdGUgbGlzdCBwYXJhbWV0ZXJzIHJldHVybiBjYW1wYWlnbk5hbWUgYW5kIGNhbXBhaWduVmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbGxvd2FibGVRdWVyeVN0cmluZyBhcmUgd2hpdGVsaXN0IHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmV0dXJuIGNvbGxlY3Rpb25zIG9mIGNhbXBhaWduTmFtZSBhbmQgY2FtcGFpZ25WYWx1ZVxuICogQGV4YW1wbGVcbiAqIGdldENhbXBhaWduSW5mbyhbJ3N1YkNoYW5Db2RlJywgJ2NhbXBfaWQnLCAncHJvbW9Db2RlJ10pXG4gKi9cbmNvbnN0IGdldENhbXBhaWduSW5mbyA9IGFsbG93YWJsZVF1ZXJ5U3RyaW5nID0+IHtcbiAgaWYgKCFhbGxvd2FibGVRdWVyeVN0cmluZy5sZW5ndGgpIHJldHVybiAnJztcbiAgbGV0IHRvdGFsID0gYWxsb3dhYmxlUXVlcnlTdHJpbmcubGVuZ3RoO1xuICBsZXQgY2FtcGFpZ25OYW1lID0gJyc7XG4gIGxldCBjYW1wYWlnblZhbHVlID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgIGxldCBjb29raWVWYWx1ZSA9IGdldENvb2tpZShhbGxvd2FibGVRdWVyeVN0cmluZ1tpXSk7XG4gICAgbGV0IGxvY2FsU3RvcmFnZVZhbHVlID0gZ2V0TG9jYWxTdG9yYWdlV2l0aEV4cGlyeShhbGxvd2FibGVRdWVyeVN0cmluZ1tpXSk7XG4gICAgaWYgKGNvb2tpZVZhbHVlIHx8IGxvY2FsU3RvcmFnZVZhbHVlKSB7XG4gICAgICBpZiAoY2FtcGFpZ25OYW1lKSB7XG4gICAgICAgIGNhbXBhaWduTmFtZSArPSAnOic7XG4gICAgICAgIGNhbXBhaWduVmFsdWUgKz0gJzonO1xuICAgICAgfVxuICAgICAgY2FtcGFpZ25OYW1lICs9IGFsbG93YWJsZVF1ZXJ5U3RyaW5nW2ldO1xuICAgICAgY2FtcGFpZ25WYWx1ZSArPSBjb29raWVWYWx1ZSB8fCBsb2NhbFN0b3JhZ2VWYWx1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKCFjYW1wYWlnbk5hbWUpIGNhbXBhaWduTmFtZSA9ICduYSc7XG4gIGlmICghY2FtcGFpZ25WYWx1ZSkgY2FtcGFpZ25WYWx1ZSA9ICduYSc7XG4gIHJldHVybiBbY2FtcGFpZ25OYW1lLCBjYW1wYWlnblZhbHVlXTtcbn07XG5cbi8qKlxuICogRXh0cmFjdHMgYSBjb250ZXh0IHN0cmluZyBmcm9tIGEgRE9NIGVsZW1lbnQgYnkgY2hlY2tpbmcgbXVsdGlwbGUgYXR0cmlidXRlc1xuICogYW5kIHByb3BlcnRpZXMgaW4gYSBwcmlvcml0aXplZCBvcmRlcjogYGRhdGEtY29udGV4dGAsIGB0aXRsZWAsIGBpbm5lclRleHRgLFxuICogYHRleHRDb250ZW50YCwgYW5kIGBhcmlhLWxhYmVsYC4gRGVmYXVsdHMgdG8gYW4gZW1wdHkgc3RyaW5nIGlmIG5vIHZhbHVlIGlzIGZvdW5kLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2xvc2VzdCAtIFRoZSBET00gZWxlbWVudCBmcm9tIHdoaWNoIHRvIGV4dHJhY3QgdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZXh0cmFjdGVkIGNvbnRleHQsIHRyaW1tZWQgb2YgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS5cbiAqL1xuY29uc3QgZ2V0Q3RhQ29udGV4dCA9IGNsb3Nlc3QgPT4ge1xuICBjb25zdCBjb250ZXh0ID1cbiAgICBjbG9zZXN0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZXh0JykgPz9cbiAgICBjbG9zZXN0LmdldEF0dHJpYnV0ZSgndGl0bGUnKSA/P1xuICAgIGNsb3Nlc3QuaW5uZXJUZXh0ID8/XG4gICAgY2xvc2VzdC50ZXh0Q29udGVudCA/P1xuICAgIGNsb3Nlc3QuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgPz9cbiAgICAnJztcblxuICByZXR1cm4gU3RyaW5nKGNvbnRleHQpLnRyaW0oKTtcbn07XG5cbi8qKlxuICogZ2V0UXVlcnlQYXJhbSBtZXRob2QgaXMgY3JlYXRlZCBiZWNhdXNlIFwibmV3IFVSTFNlYXJjaFBhcmFtcygpXCJcIiBub3Qgc3VwcG9ydCBpbiBJT1NcbiAqIHNlYXJjaCBzcGVjaWZpYyBwYXJhbSBmcm9tIHRoZSBxdWVyeVN0cmluZywgaWYgZm91bmQgaXQgcmV0dXJuIHZhbHVlLCBlbHNlIHJldHVybiBlbXB0eVxuICogQGV4YW1wbGVcbiAqIGdldFF1ZXJ5UGFyYW0oJ3N1YkNoYW5Db2RlPTIwMjMmcmVmZXJJZD14eXomcGlkPTEyMycsICdyZWZlcklkJylcbiAqL1xuY29uc3QgZ2V0UXVlcnlQYXJhbSA9IChxdWVyeVN0cmluZywgcGFyYW1OYW1lKSA9PiB7XG4gIC8vIFNwbGl0IHRoZSBxdWVyeSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBrZXktdmFsdWUgcGFpcnNcbiAgY29uc3QgcXVlcnlQYXJhbXNMaXN0ID0gcXVlcnlTdHJpbmcuc3BsaXQoJyYnKTtcbiAgbGV0IHBhcmFtVmFsdWUgPSAnJztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgZm9yIChjb25zdCBwYXJhbSBvZiBxdWVyeVBhcmFtc0xpc3QpIHtcbiAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgIGlmIChrZXkgPT09IHBhcmFtTmFtZSkge1xuICAgICAgLy9pdCdzIGNhc2Ugc2Vuc2l0aXZlXG4gICAgICBwYXJhbVZhbHVlID0gdmFsdWU7XG4gICAgICBicmVhazsgLy8gTm8gbmVlZCB0byBjb250aW51ZSBvbmNlICdyZWZlcklkJyBpcyBmb3VuZFxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyYW1WYWx1ZTtcbn07XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBoZWFkaW5nIHRleHQgb2YgdGhlIGNsb3Nlc3QgYWNjb3JkaW9uIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGNsb3Nlc3QgYWNjb3JkaW9uIGhlYWRpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaGVhZGluZyB0ZXh0IG9mIHRoZSBjbG9zZXN0IGFjY29yZGlvbiwgZm9sbG93ZWQgYnkgYSBjb2xvbiBpZiBmb3VuZDsgb3RoZXJ3aXNlLCBhbiBlbXB0eSBzdHJpbmcuXG4gKi9cbmNvbnN0IGdldEFjY29yZGlvbkhlYWRpbmcgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm4gJyc7XG5cbiAgY29uc3QgYWNjb3JkaW9uRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnLnNjLWFjY29yZGlvbiwgLmMtcGx1cy1taW51cy1hY2NvcmRpb25fX19pdGVtJyk7XG4gIGlmICghYWNjb3JkaW9uRWxlbWVudCkgcmV0dXJuICcnO1xuXG4gIGNvbnN0IGhlYWRpbmdFbGVtZW50ID1cbiAgICBhY2NvcmRpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1oZWFkaW5nJykgPz9cbiAgICBhY2NvcmRpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taGVhZGVyIGxhYmVsJyk7XG4gIGlmICghaGVhZGluZ0VsZW1lbnQpIHJldHVybiAnJztcblxuICBjb25zdCBoZWFkaW5nVGV4dCA9IHRyaW0oaGVhZGluZ0VsZW1lbnQuaW5uZXJUZXh0KTtcbiAgcmV0dXJuIGhlYWRpbmdUZXh0ID8gYCR7aGVhZGluZ1RleHR9OmAgOiAnJztcbn07XG5cbi8qKlxuICogSGFuZGxlcyB0aGUgc2Nyb2xsIGV2ZW50IGFuZCBzaG93cyBvciBoaWRlcyB0aGUgcGVyc2lzdGVudCBiYXIgYmFzZWQgb24gdGhlIHNjcm9sbCBwb3NpdGlvbi5cbiAqL1xuY29uc3QgaGFuZGxlUGVyc2lzdGVudEJhclNjcm9sbCA9ICgpID0+IHtcbiAgY29uc3QgcGVyc2lzdGVudEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1wZXJzaXN0ZW50LWJhcicpO1xuICBpZiAoIXBlcnNpc3RlbnRCYXIpIHJldHVybjtcblxuICBjb25zdCBiYW5uZXJTZGsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb25ldHJ1c3QtYmFubmVyLXNkaycpO1xuICBpZiAoYmFubmVyU2RrICYmIGJhbm5lclNkay5zdHlsZSAmJiBiYW5uZXJTZGsuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgLy9Eb24ndCBzaG93IHBlcnNpc3RlbnQgYmFyIGlmIG9uZVRydXN0IGNvb2tpZSBiYW5uZXIgZXhpc3RcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9XG4gICAgd2luZG93LnNjcm9sbFkgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA/PyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA/PyAwO1xuICBjb25zdCB3aW5kb3dXaWR0aCA9XG4gICAgd2luZG93LmlubmVyV2lkdGggPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8/IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgbGV0IHNjcm9sbExpbWl0ID0gNjAwO1xuICBjb25zdCBwQmFyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGVyc2lzdGVudC1iYXItdGFyZ2V0XScpO1xuICBpZiAocEJhclRhcmdldCkge1xuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLicgKyBwQmFyVGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJzaXN0ZW50LWJhci10YXJnZXQnKVxuICAgICk7XG4gICAgaWYgKHNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgc2Nyb2xsTGltaXQgPSBnZXRPdXRlckhlaWdodChzZWxlY3RlZEVsZW1lbnQpICsgZ2V0UG9zaXRpb24oc2VsZWN0ZWRFbGVtZW50KTtcblxuICAgICAgaWYgKHdpbmRvd1dpZHRoID49IDc2OCkge1xuICAgICAgICAvL0lnbm9yZSBtZW51IGhlaWdodFxuICAgICAgICBzY3JvbGxMaW1pdCAtPSA3MDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBwQmFyU2tpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBlcnNpc3RlbnQtYmFyLXNraXBdJyk7XG4gIGxldCBza2lwRnJvbVRvcCA9IDA7XG4gIGxldCBza2lwSGVpZ2h0ID0gMDtcbiAgaWYgKHBCYXJTa2lwKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuJyArIHBCYXJTa2lwLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJzaXN0ZW50LWJhci1za2lwJylcbiAgICApO1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgIHNraXBGcm9tVG9wID0gZ2V0UG9zaXRpb24oc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgIHNraXBIZWlnaHQgPSBnZXRPdXRlckhlaWdodChzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgaWYgKHdpbmRvd1dpZHRoID49IDc2OCkge1xuICAgICAgICAvL0lnbm9yZSBtZW51IGhlaWdodFxuICAgICAgICBza2lwRnJvbVRvcCAtPSA3MDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBza2lwRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGVyc2lzdGVudC1iYXItc2tpcC1kZXZpY2VdJyk7XG4gIGlmIChza2lwRGV2aWNlKSB7XG4gICAgY29uc3Qgc2tpcEF0dHIgPSBza2lwRGV2aWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJzaXN0ZW50LWJhci1za2lwLWRldmljZScpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93V2lkdGggPCA3Njg7XG4gICAgaWYgKChza2lwQXR0ciA9PT0gJ21vYmlsZScgJiYgaXNNb2JpbGUpIHx8IChza2lwQXR0ciAhPT0gJ21vYmlsZScgJiYgIWlzTW9iaWxlKSkge1xuICAgICAgc2tpcEZyb21Ub3AgPSAwO1xuICAgICAgc2tpcEhlaWdodCA9IDA7XG4gICAgfVxuICB9XG5cbiAgbGV0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICBzY3JlZW5IZWlnaHQgLT0gd2luZG93V2lkdGggPCA3NjggPyAyMCA6IDI1MDtcblxuICBpZiAoXG4gICAgcEJhclNraXAgJiZcbiAgICBzY3JvbGxQb3NpdGlvbiArIHNjcmVlbkhlaWdodCA+PSBza2lwRnJvbVRvcCAmJlxuICAgIHNjcm9sbFBvc2l0aW9uIDw9IHNraXBGcm9tVG9wICsgc2tpcEhlaWdodFxuICApIHtcbiAgICAvL1NraXAgcGVyc2lzdGVudCBiYXIgZm9yIGEgY2VydGFpbiBwb3NpdGlvblxuICAgIHBlcnNpc3RlbnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2MtcGVyc2lzdGVudC1iYXItLXNob3cnKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG4gIH0gZWxzZSBpZiAoc2Nyb2xsUG9zaXRpb24gPiBzY3JvbGxMaW1pdCkge1xuICAgIHBlcnNpc3RlbnRCYXIuY2xhc3NMaXN0LmFkZCgnc2MtcGVyc2lzdGVudC1iYXItLXNob3cnKTtcbiAgICBjb25zdCBwZXJzaXN0ZW50QmFySGlnaHQgPSBnZXRPdXRlckhlaWdodChwZXJzaXN0ZW50QmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAke3BlcnNpc3RlbnRCYXJIaWdodH1weGA7XG4gIH0gZWxzZSB7XG4gICAgcGVyc2lzdGVudEJhci5jbGFzc0xpc3QucmVtb3ZlKCdzYy1wZXJzaXN0ZW50LWJhci0tc2hvdycpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVzZXIgYWdlbnQgb2YgdGhlIGN1cnJlbnQgYnJvd3NlclxuICogQHJldHVybnMge3ticm93c2VyQ29kZW5hbWU6IHN0cmluZywgYnJvd3Nlck5hbWU6IHN0cmluZywgYnJvd3NlclZlcnNpb246IHN0cmluZywgY29va2llc0VuYWJsZWQ6IGJvb2xlYW4sIGJyb3dzZXJMYW5ndWFnZTogc3RyaW5nLCBicm93c2VyT25saW5lOiBib29sZWFuLCBwbGF0Zm9ybTogc3RyaW5nLCB1c2VyQWdlbnRIZWFkZXI6IHN0cmluZ319XG4gKi9cbmNvbnN0IGdldERldmljZURldGFpbHMgPSAoKSA9PiB7XG4gIHZhciBvcyA9ICcnO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGF0L2NvbXBhdFxuICB2YXIgbkFndCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHZhciBjbGllbnRTdHJpbmdzID0gW1xuICAgIHsgczogJ1cgMTAnLCByOiAvKFdpbmRvd3MgMTAuMHxXaW5kb3dzIE5UIDEwLjApLyB9LFxuICAgIHsgczogJ1cgOC4xJywgcjogLyhXaW5kb3dzIDguMXxXaW5kb3dzIE5UIDYuMykvIH0sXG4gICAgeyBzOiAnVyA4JywgcjogLyhXaW5kb3dzIDh8V2luZG93cyBOVCA2LjIpLyB9LFxuICAgIHsgczogJ1cgNycsIHI6IC8oV2luZG93cyA3fFdpbmRvd3MgTlQgNi4xKS8gfSxcbiAgICB7IHM6ICdXIFZpc3RhJywgcjogL1dpbmRvd3MgTlQgNi4wLyB9LFxuICAgIHsgczogJ1cgU2VydmVyIDIwMDMnLCByOiAvV2luZG93cyBOVCA1LjIvIH0sXG4gICAgeyBzOiAnVyBYUCcsIHI6IC8oV2luZG93cyBOVCA1LjF8V2luZG93cyBYUCkvIH0sXG4gICAgeyBzOiAnVyAyMDAwJywgcjogLyhXaW5kb3dzIE5UIDUuMHxXaW5kb3dzIDIwMDApLyB9LFxuICAgIHsgczogJ1cgTUUnLCByOiAvKFdpbiA5eCA0LjkwfFdpbmRvd3MgTUUpLyB9LFxuICAgIHsgczogJ1cgOTgnLCByOiAvKFdpbmRvd3MgOTh8V2luOTgpLyB9LFxuICAgIHsgczogJ1cgOTUnLCByOiAvKFdpbmRvd3MgOTV8V2luOTV8V2luZG93c185NSkvIH0sXG4gICAgeyBzOiAnVyBOVCA0LjAnLCByOiAvKFdpbmRvd3MgTlQgNC4wfFdpbk5UNC4wfFdpbk5UfFdpbmRvd3MgTlQpLyB9LFxuICAgIHsgczogJ1cgQ0UnLCByOiAvV2luZG93cyBDRS8gfSxcbiAgICB7IHM6ICdXIDMuMTEnLCByOiAvV2luMTYvIH0sXG4gICAgeyBzOiAnQW5kcm9pZCcsIHI6IC9BbmRyb2lkLyB9LFxuICAgIHsgczogJ09wZW4gQlNEJywgcjogL09wZW5CU0QvIH0sXG4gICAgeyBzOiAnU3VuIE9TJywgcjogL1N1bk9TLyB9LFxuICAgIHsgczogJ0wnLCByOiAvKExpbnV4fFgxMSkvIH0sXG4gICAgeyBzOiAnaU9TJywgcjogLyhpUGhvbmV8aVBhZHxpUG9kKS8gfSxcbiAgICB7IHM6ICdNYWMgT1MgWCcsIHI6IC9NYWMgT1MgWC8gfSxcbiAgICB7IHM6ICdNYWMgT1MnLCByOiAvKE1hY1BQQ3xNYWNJbnRlbHxNYWNfUG93ZXJQQ3xNYWNpbnRvc2gpLyB9LFxuICAgIHsgczogJ1FOWCcsIHI6IC9RTlgvIH0sXG4gICAgeyBzOiAnVScsIHI6IC9VTklYLyB9LFxuICAgIHsgczogJ0JlT1MnLCByOiAvQmVPUy8gfSxcbiAgICB7IHM6ICdPUy8yJywgcjogL09TXFwvMi8gfSxcbiAgICB7XG4gICAgICBzOiAnU2VhcmNoIEJvdCcsXG4gICAgICByOiAvKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFzayBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvXG4gICAgfVxuICBdO1xuICBmb3IgKHZhciBpZCBpbiBjbGllbnRTdHJpbmdzKSB7XG4gICAgdmFyIGNzID0gY2xpZW50U3RyaW5nc1tpZF07XG4gICAgaWYgKGNzLnIudGVzdChuQWd0KSkge1xuICAgICAgb3MgPSBjcy5zO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG9zVmVyc2lvbiA9ICcnO1xuICBpZiAoL1dpbmRvd3MvLnRlc3Qob3MpKSB7XG4gICAgb3NWZXJzaW9uID0gL1dpbmRvd3MgKC4qKS8uZXhlYyhvcylbMV07XG4gICAgb3MgPSAnV2luZG93cyc7XG4gIH1cblxuICBzd2l0Y2ggKG9zKSB7XG4gICAgY2FzZSAnTWFjIE9TIFgnOlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNhc2UtZGVjbGFyYXRpb25zXG4gICAgICBjb25zdCBtYWNNYXRjaCA9IC9NYWMgT1MgWCAoMTB8MTFbLl9cXGRdKykvLmV4ZWMobkFndCk7XG4gICAgICBvc1ZlcnNpb24gPSBtYWNNYXRjaCA/IG1hY01hdGNoWzFdIDogJ1Vua25vd24nO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdBbmRyb2lkJzpcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgY29uc3QgYW5kcm9pZE1hdGNoID0gL0FuZHJvaWQgKFsuX1xcZF0rKS8uZXhlYyhuQWd0KTtcbiAgICAgIG9zVmVyc2lvbiA9IGFuZHJvaWRNYXRjaCA/IGFuZHJvaWRNYXRjaFsxXSA6ICdVbmtub3duJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaU9TJzpcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgY29uc3QgaU9TTWF0Y2ggPSAvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8uZXhlYyhuQWd0KTtcbiAgICAgIG9zVmVyc2lvbiA9IGlPU01hdGNoID8gaU9TTWF0Y2hbMV0gKyAnLicgKyBpT1NNYXRjaFsyXSArICcuJyArIChpT1NNYXRjaFszXSB8fCAwKSA6ICdVbmtub3duJztcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGRldmljZUluZm8gPSAnZCc7XG4gIGlmICgvTW9iaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgIGRldmljZUluZm8gPSAnbSc7XG4gIH1cblxuICB2YXIgc2NyZWVuU2l6ZSA9ICcnLFxuICAgIHdpZHRoID0gMCxcbiAgICBoZWlnaHQgPSAwO1xuICBpZiAoc2NyZWVuLndpZHRoKSB7XG4gICAgd2lkdGggPSBzY3JlZW4ud2lkdGggPyBzY3JlZW4ud2lkdGggOiAnJztcbiAgICBoZWlnaHQgPSBzY3JlZW4uaGVpZ2h0ID8gc2NyZWVuLmhlaWdodCA6ICcnO1xuICAgIHNjcmVlblNpemUgKz0gJycgKyB3aWR0aCArICcgeCAnICsgaGVpZ2h0O1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY29tcGF0L2NvbXBhdCAqL1xuICByZXR1cm4ge1xuICAgIGJyb3dzZXJDb2RlbmFtZTogbmF2aWdhdG9yLmFwcENvZGVOYW1lLFxuICAgIGJyb3dzZXJOYW1lOiBuYXZpZ2F0b3IuYXBwTmFtZSxcbiAgICBicm93c2VyVmVyc2lvbjogbmF2aWdhdG9yLmFwcFZlcnNpb24sXG4gICAgY29va2llc0VuYWJsZWQ6IG5hdmlnYXRvci5jb29raWVFbmFibGVkLFxuICAgIGJyb3dzZXJMYW5ndWFnZTogbmF2aWdhdG9yLmxhbmd1YWdlLFxuICAgIGJyb3dzZXJPbmxpbmU6IG5hdmlnYXRvci5vbkxpbmUsXG4gICAgcGxhdGZvcm06IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgICB1c2VyQWdlbnRIZWFkZXI6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgYWdlbnRIZWFkZXI6IG5hdmlnYXRvci5nZXRBZ2VudCxcbiAgICBkZXZpY2VJbmZvOiBkZXZpY2VJbmZvLFxuICAgIHNjcmVlblNpemU6IHNjcmVlblNpemUsXG4gICAgb3M6IG9zLFxuICAgIG9zVmVyc2lvbjogb3NWZXJzaW9uXG4gIH07XG4gIC8qIGVzbGludC1lbmFibGUgY29tcGF0L2NvbXBhdCAqL1xufTtcblxuY29uc3QgYnJvd3NlckRldGVjdCA9ICgpID0+IHtcbiAgY29uc3QgYnJvd3NlciA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICB2ZXJzaW9uOiAnJyxcbiAgICB2ZXJzaW9uU2VhcmNoU3RyaW5nOiAnJyxcbiAgICBkYXRhQnJvd3NlcjogW1xuICAgICAgeyBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogJ0VkZ2UnLCBpZGVudGl0eTogJ01TIEVkZ2UnIH0sXG4gICAgICB7IHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiAnRWRnJywgaWRlbnRpdHk6ICdFZGdlJyB9LFxuICAgICAgeyBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogJ01TSUUnLCBpZGVudGl0eTogJ0V4cGxvcmVyJyB9LFxuICAgICAgeyBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogJ1RyaWRlbnQnLCBpZGVudGl0eTogJ0V4cGxvcmVyJyB9LFxuICAgICAgeyBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogJ0ZpcmVmb3gnLCBpZGVudGl0eTogJ0ZpcmVmb3gnIH0sXG4gICAgICB7IHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiAnT3BlcmEnLCBpZGVudGl0eTogJ09wZXJhJyB9LFxuICAgICAgeyBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogJ09QUicsIGlkZW50aXR5OiAnT3BlcmEnIH0sXG4gICAgICB7IHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiAnQ2hyb21lJywgaWRlbnRpdHk6ICdDaHJvbWUnIH0sXG4gICAgICB7IHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiAnU2FmYXJpJywgaWRlbnRpdHk6ICdTYWZhcmknIH1cbiAgICBdLFxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnNlYXJjaFN0cmluZyh0aGlzLmRhdGFCcm93c2VyKSB8fCAnT3RoZXInO1xuICAgICAgdGhpcy52ZXJzaW9uID1cbiAgICAgICAgdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8XG4gICAgICAgIHRoaXMuc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IuYXBwVmVyc2lvbikgfHxcbiAgICAgICAgJ1Vua25vd24nO1xuICAgIH0sXG4gICAgc2VhcmNoU3RyaW5nKGRhdGEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmc7XG4gICAgICAgIGNvbnN0IHN1YlN0cmluZyA9IGRhdGFbaV0uc3ViU3RyaW5nO1xuICAgICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBzdWJTdHJpbmc7XG5cbiAgICAgICAgaWYgKGRhdGFTdHJpbmcuaW5jbHVkZXMoc3ViU3RyaW5nKSkge1xuICAgICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHNlYXJjaFZlcnNpb24oZGF0YVN0cmluZykge1xuICAgICAgaWYgKCF0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBpbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZih0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcnZJbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZigncnY6Jyk7XG4gICAgICBpZiAodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID09PSAnVHJpZGVudCcgJiYgcnZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcocnZJbmRleCArIDMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nLmxlbmd0aCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgYnJvd3Nlci5pbml0KCk7XG4gIHJldHVybiBicm93c2VyO1xufTtcblxuLyoqXG4gKiBnZXQgdG90YWwgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBtb250aFxuICovXG5cbmNvbnN0IGRheXNJblRoaXNNb250aCA9ICgpID0+IHtcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCk7XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGFuZCBhc3NpZ25tZW50IG9mIHByb2R1Y3QtcmVsYXRlZCBkYXRhXG4gKiBpbnRvIHRoZSBgd2luZG93LmRpZ2l0YWxEYXRhLnByb2R1Y3RzYCBhcnJheS5cbiAqL1xuY29uc3QgaGFuZGxlUHJvZHVjdHNPYmogPSAoKSA9PiB7XG4gIGxldCBwYWdlTmFtZSA9IHdpbmRvdy5kaWdpdGFsRGF0YS5wYWdlLnBhZ2VJbmZvLnBhZ2VOYW1lLnNwbGl0KCc6Jyk7XG4gIHdpbmRvdy5kaWdpdGFsRGF0YS5wcm9kdWN0cyA9IHdpbmRvdy5kaWdpdGFsRGF0YS5wcm9kdWN0cyB8fCBbXTtcbiAgd2luZG93LmRpZ2l0YWxEYXRhLnByb2R1Y3RzID0gW1xuICAgIHtcbiAgICAgIHByb2R1Y3RJRDogd2luZG93LmRpZ2l0YWxEYXRhLnBhZ2UucHJvZHVjdEluZm8/LnByb2R1Y3RJZFxuICAgICAgICA/IHdpbmRvdy5kaWdpdGFsRGF0YS5wYWdlLnByb2R1Y3RJbmZvLnByb2R1Y3RJZFxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgICAgOiAnJyxcbiAgICAgIHByb2R1Y3ROYW1lOiBwYWdlTmFtZVs2XVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJyksXG4gICAgICBzdWJQcm9kdWN0MTogd2luZG93LmRpZ2l0YWxEYXRhLnBhZ2UuY2F0ZWdvcnkucHJpbWFyeUNhdGVnb3J5XG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJy0nKSxcbiAgICAgIHN1YlByb2R1Y3QyOiB3aW5kb3cuZGlnaXRhbERhdGEucGFnZS5jYXRlZ29yeS5zdWJDYXRlZ29yeTFcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4gICAgfVxuICBdO1xufTtcblxuZXhwb3J0IHtcbiAgdXJsQnJlYWtkb3duLFxuICBwYXJzZVVybCxcbiAgZ2V0UGFnZUNvbnRleHQsXG4gIGV4dGVuZCxcbiAgZ2V0Q3VycmVudENvdW50cnksXG4gIHRyaW0sXG4gIGlzSW50ZXJuYWxEb21haW4sXG4gIGdldEhvcml6b250YWxQb3NpdGlvbixcbiAgZ2V0Q29va2llLFxuICBnZXRMb2NhbFN0b3JhZ2VXaXRoRXhwaXJ5LFxuICBjYWxjRWxlbWVudExvY2F0aW9uLFxuICBnZXRDdXJyZW50RW52aXJvbm1lbnQsXG4gIGdldFBhZ2VVcmwsXG4gIGdldEludEV4dENhbXBhaWduSW5mbyxcbiAgZGV0ZWN0T1MsXG4gIGdldFBvc2l0aW9uLFxuICBnZXRDdGFUeXBlLFxuICBoYW5kbGVBbmFseXRpY3NDVEEsXG4gIGNhbGN1bGF0ZVJhbmdlcyxcbiAgaGFuZGxlQ2FsY3VsYXRvckFuYWx5dGljcyxcbiAgZGVib3VuY2VFdmVudHMsXG4gIGlzRm9ybSxcbiAgc2hvdWxkQ2FycnlUcmFja2luZ1BhcmFtcyxcbiAgYXBwbHlDb29raWVQYXJhbXMsXG4gIGdldFVybFBhcmFtTmFtZSxcbiAgYnVuZGxlUGFyYW0sXG4gIGlzRW1wdHksXG4gIGNvbnZlcnRRdWVyeVN0cmluZ1RvSnNvbk9iamVjdCxcbiAgc2V0TG9jYWxTdG9yYWdlV2l0aEV4cGlyeSxcbiAgaXNNb2JpbGUsXG4gIGhhbmRsZVByb2R1Y3RDYWxjdWxhdG9yU3VibWl0LFxuICBjb252ZXJ0TnVtYmVycyxcbiAgaW5pdGlhbGl6ZVNsaWRlcixcbiAgdmFsaWRhdGVJbnB1dCxcbiAgY2FsY3VsYXRlUE1ULFxuICBzbGlkZXJFcnJvclN0YXR1cyxcbiAgZm9ybWF0TnVtYmVyc1dpdGhUd29EZWNpbWFsUGxhY2VzLFxuICB2TG9va3VwLFxuICBzbGlkZXJGaWVsZEVycm9yU3RhdHVzLFxuICBzdGVwRmllbGRFcnJvclN0YXR1cyxcbiAgY2FsY3VsYXRlRnV0dXJlVmFsdWUsXG4gIGNvbnZlcnRNb250aHNUb1llYXJzQW5kTW9udGhzLFxuICBleHRlbmRlZFBNVCxcbiAgY2FsY3VsYXRlTlBFUixcbiAgY2FsY3VsYXRlWWVhck1vbnRoLFxuICBjYWxjdWxhdGVFSVIsXG4gIGNhbGN1bGF0ZUlSUixcbiAgY2FsY3VsYXRlRGVyaXZhdGl2ZSxcbiAgY2FsY3VsYXRlUHJlc2VudFZhbHVlLFxuICBwbXQsXG4gIGdldE91dGVySGVpZ2h0LFxuICBtYXRjaEhlaWdodCxcbiAgc21vb3RoU2Nyb2xsLFxuICB2YWxpZGF0ZUlucHV0Tm9TbGlkZXIsXG4gIGdldEFzc2V0RG9tYWluLFxuICB0cmlnZ2VyUG9wdXBWaWV3ZWRUYWdnaW5nLFxuICBleHRyYWN0UXVlcnlQYXJhbXMsXG4gIGdldENhbXBhaWduSW5mbyxcbiAgZ2V0Q2FtcGFpZ25JbmZvVjEsXG4gIGdldENhbXBhaWduSW5mb1YyLFxuICBnZXRDdGFDb250ZXh0LFxuICBnZXRRdWVyeVBhcmFtLFxuICBnZXRBY2NvcmRpb25IZWFkaW5nLFxuICBoYW5kbGVQZXJzaXN0ZW50QmFyU2Nyb2xsLFxuICBnZXREZXZpY2VEZXRhaWxzLFxuICBicm93c2VyRGV0ZWN0LFxuICBkYXlzSW5UaGlzTW9udGgsXG4gIGhhbmRsZVByb2R1Y3RzT2JqXG59O1xuIl19
