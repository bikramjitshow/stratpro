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
        var p = (n[i] = { exports: {} });
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
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }

        /*!
         * Splide.js
         * Version  : 4.1.4
         * License  : MIT
         * Copyright: 2022 Naotoshi Fujita
         */
        (function (global, factory) {
          typeof exports === "object" && typeof module !== "undefined"
            ? (module.exports = factory())
            : typeof define === "function" && define.amd
            ? define(factory)
            : ((global =
                typeof globalThis !== "undefined"
                  ? globalThis
                  : global || self),
              (global.Splide = factory()));
        })(this, function () {
          "use strict";

          var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
          var CREATED = 1;
          var MOUNTED = 2;
          var IDLE = 3;
          var MOVING = 4;
          var SCROLLING = 5;
          var DRAGGING = 6;
          var DESTROYED = 7;
          var STATES = {
            CREATED: CREATED,
            MOUNTED: MOUNTED,
            IDLE: IDLE,
            MOVING: MOVING,
            SCROLLING: SCROLLING,
            DRAGGING: DRAGGING,
            DESTROYED: DESTROYED,
          };

          function empty(array) {
            array.length = 0;
          }

          function slice(arrayLike, start, end) {
            return Array.prototype.slice.call(arrayLike, start, end);
          }

          function apply(func) {
            return func.bind.apply(func, [null].concat(slice(arguments, 1)));
          }

          var nextTick = setTimeout;

          var noop = function noop() {};

          function raf(func) {
            return requestAnimationFrame(func);
          }

          function typeOf(type, subject) {
            return typeof subject === type;
          }

          function isObject(subject) {
            return !isNull(subject) && typeOf("object", subject);
          }

          var isArray = Array.isArray;
          var isFunction = apply(typeOf, "function");
          var isString = apply(typeOf, "string");
          var isUndefined = apply(typeOf, "undefined");

          function isNull(subject) {
            return subject === null;
          }

          function isHTMLElement(subject) {
            try {
              return (
                subject instanceof
                (subject.ownerDocument.defaultView || window).HTMLElement
              );
            } catch (e) {
              return false;
            }
          }

          function toArray(value) {
            return isArray(value) ? value : [value];
          }

          function forEach(values, iteratee) {
            toArray(values).forEach(iteratee);
          }

          function includes(array, value) {
            return array.indexOf(value) > -1;
          }

          function push(array, items) {
            array.push.apply(array, toArray(items));
            return array;
          }

          function toggleClass(elm, classes, add) {
            if (elm) {
              forEach(classes, function (name) {
                if (name) {
                  elm.classList[add ? "add" : "remove"](name);
                }
              });
            }
          }

          function addClass(elm, classes) {
            toggleClass(
              elm,
              isString(classes) ? classes.split(" ") : classes,
              true
            );
          }

          function append(parent, children) {
            forEach(children, parent.appendChild.bind(parent));
          }

          function before(nodes, ref) {
            forEach(nodes, function (node) {
              var parent = (ref || node).parentNode;

              if (parent) {
                parent.insertBefore(node, ref);
              }
            });
          }

          function matches(elm, selector) {
            return (
              isHTMLElement(elm) &&
              (elm["msMatchesSelector"] || elm.matches).call(elm, selector)
            );
          }

          function children(parent, selector) {
            var children2 = parent ? slice(parent.children) : [];
            return selector
              ? children2.filter(function (child) {
                  return matches(child, selector);
                })
              : children2;
          }

          function child(parent, selector) {
            return selector
              ? children(parent, selector)[0]
              : parent.firstElementChild;
          }

          var ownKeys = Object.keys;

          function forOwn(object, iteratee, right) {
            if (object) {
              (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(
                function (key) {
                  key !== "__proto__" && iteratee(object[key], key);
                }
              );
            }

            return object;
          }

          function assign(object) {
            slice(arguments, 1).forEach(function (source) {
              forOwn(source, function (value, key) {
                object[key] = source[key];
              });
            });
            return object;
          }

          function merge(object) {
            slice(arguments, 1).forEach(function (source) {
              forOwn(source, function (value, key) {
                if (isArray(value)) {
                  object[key] = value.slice();
                } else if (isObject(value)) {
                  object[key] = merge(
                    {},
                    isObject(object[key]) ? object[key] : {},
                    value
                  );
                } else {
                  object[key] = value;
                }
              });
            });
            return object;
          }

          function omit(object, keys) {
            forEach(keys || ownKeys(object), function (key) {
              delete object[key];
            });
          }

          function removeAttribute(elms, attrs) {
            forEach(elms, function (elm) {
              forEach(attrs, function (attr) {
                elm && elm.removeAttribute(attr);
              });
            });
          }

          function setAttribute(elms, attrs, value) {
            if (isObject(attrs)) {
              forOwn(attrs, function (value2, name) {
                setAttribute(elms, name, value2);
              });
            } else {
              forEach(elms, function (elm) {
                isNull(value) || value === ""
                  ? removeAttribute(elm, attrs)
                  : elm.setAttribute(attrs, String(value));
              });
            }
          }

          function create(tag, attrs, parent) {
            var elm = document.createElement(tag);

            if (attrs) {
              isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
            }

            parent && append(parent, elm);
            return elm;
          }

          function style(elm, prop, value) {
            if (isUndefined(value)) {
              return getComputedStyle(elm)[prop];
            }

            if (!isNull(value)) {
              elm.style[prop] = "" + value;
            }
          }

          function display(elm, display2) {
            style(elm, "display", display2);
          }

          function focus(elm) {
            (elm["setActive"] && elm["setActive"]()) ||
              elm.focus({
                preventScroll: true,
              });
          }

          function getAttribute(elm, attr) {
            return elm.getAttribute(attr);
          }

          function hasClass(elm, className) {
            return elm && elm.classList.contains(className);
          }

          function rect(target) {
            return target.getBoundingClientRect();
          }

          function remove(nodes) {
            forEach(nodes, function (node) {
              if (node && node.parentNode) {
                node.parentNode.removeChild(node);
              }
            });
          }

          function parseHtml(html) {
            return child(
              new DOMParser().parseFromString(html, "text/html").body
            );
          }

          function prevent(e, stopPropagation) {
            e.preventDefault();

            if (stopPropagation) {
              e.stopPropagation();
              e.stopImmediatePropagation();
            }
          }

          function query(parent, selector) {
            return parent && parent.querySelector(selector);
          }

          function queryAll(parent, selector) {
            return selector ? slice(parent.querySelectorAll(selector)) : [];
          }

          function removeClass(elm, classes) {
            toggleClass(elm, classes, false);
          }

          function timeOf(e) {
            return e.timeStamp;
          }

          function unit(value) {
            return isString(value) ? value : value ? value + "px" : "";
          }

          var PROJECT_CODE = "splide";
          var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

          function assert(condition, message) {
            if (!condition) {
              throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
            }
          }

          var min = Math.min,
            max = Math.max,
            floor = Math.floor,
            ceil = Math.ceil,
            abs = Math.abs;

          function approximatelyEqual(x, y, epsilon) {
            return abs(x - y) < epsilon;
          }

          function between(number, x, y, exclusive) {
            var minimum = min(x, y);
            var maximum = max(x, y);
            return exclusive
              ? minimum < number && number < maximum
              : minimum <= number && number <= maximum;
          }

          function clamp(number, x, y) {
            var minimum = min(x, y);
            var maximum = max(x, y);
            return min(max(minimum, number), maximum);
          }

          function sign(x) {
            return +(x > 0) - +(x < 0);
          }

          function format(string, replacements) {
            forEach(replacements, function (replacement) {
              string = string.replace("%s", "" + replacement);
            });
            return string;
          }

          function pad(number) {
            return number < 10 ? "0" + number : "" + number;
          }

          var ids = {};

          function uniqueId(prefix) {
            return "" + prefix + pad((ids[prefix] = (ids[prefix] || 0) + 1));
          }

          function EventBinder() {
            var listeners = [];

            function bind(targets, events, callback, options) {
              forEachEvent(
                targets,
                events,
                function (target, event, namespace) {
                  var isEventTarget = "addEventListener" in target;
                  var remover = isEventTarget
                    ? target.removeEventListener.bind(
                        target,
                        event,
                        callback,
                        options
                      )
                    : target["removeListener"].bind(target, callback);
                  isEventTarget
                    ? target.addEventListener(event, callback, options)
                    : target["addListener"](callback);
                  listeners.push([target, event, namespace, callback, remover]);
                }
              );
            }

            function unbind(targets, events, callback) {
              forEachEvent(
                targets,
                events,
                function (target, event, namespace) {
                  listeners = listeners.filter(function (listener) {
                    if (
                      listener[0] === target &&
                      listener[1] === event &&
                      listener[2] === namespace &&
                      (!callback || listener[3] === callback)
                    ) {
                      listener[4]();
                      return false;
                    }

                    return true;
                  });
                }
              );
            }

            function dispatch(target, type, detail) {
              var e;
              var bubbles = true;

              if (typeof CustomEvent === "function") {
                e = new CustomEvent(type, {
                  bubbles: bubbles,
                  detail: detail,
                });
              } else {
                e = document.createEvent("CustomEvent");
                e.initCustomEvent(type, bubbles, false, detail);
              }

              target.dispatchEvent(e);
              return e;
            }

            function forEachEvent(targets, events, iteratee) {
              forEach(targets, function (target) {
                target &&
                  forEach(events, function (events2) {
                    events2.split(" ").forEach(function (eventNS) {
                      var fragment = eventNS.split(".");
                      iteratee(target, fragment[0], fragment[1]);
                    });
                  });
              });
            }

            function destroy() {
              listeners.forEach(function (data) {
                data[4]();
              });
              empty(listeners);
            }

            return {
              bind: bind,
              unbind: unbind,
              dispatch: dispatch,
              destroy: destroy,
            };
          }

          var EVENT_MOUNTED = "mounted";
          var EVENT_READY = "ready";
          var EVENT_MOVE = "move";
          var EVENT_MOVED = "moved";
          var EVENT_CLICK = "click";
          var EVENT_ACTIVE = "active";
          var EVENT_INACTIVE = "inactive";
          var EVENT_VISIBLE = "visible";
          var EVENT_HIDDEN = "hidden";
          var EVENT_REFRESH = "refresh";
          var EVENT_UPDATED = "updated";
          var EVENT_RESIZE = "resize";
          var EVENT_RESIZED = "resized";
          var EVENT_DRAG = "drag";
          var EVENT_DRAGGING = "dragging";
          var EVENT_DRAGGED = "dragged";
          var EVENT_SCROLL = "scroll";
          var EVENT_SCROLLED = "scrolled";
          var EVENT_OVERFLOW = "overflow";
          var EVENT_DESTROY = "destroy";
          var EVENT_ARROWS_MOUNTED = "arrows:mounted";
          var EVENT_ARROWS_UPDATED = "arrows:updated";
          var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
          var EVENT_PAGINATION_UPDATED = "pagination:updated";
          var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
          var EVENT_AUTOPLAY_PLAY = "autoplay:play";
          var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
          var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
          var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
          var EVENT_SLIDE_KEYDOWN = "sk";
          var EVENT_SHIFTED = "sh";
          var EVENT_END_INDEX_CHANGED = "ei";

          function EventInterface(Splide2) {
            var bus = Splide2
              ? Splide2.event.bus
              : document.createDocumentFragment();
            var binder = EventBinder();

            function on(events, callback) {
              binder.bind(bus, toArray(events).join(" "), function (e) {
                callback.apply(callback, isArray(e.detail) ? e.detail : []);
              });
            }

            function emit(event) {
              binder.dispatch(bus, event, slice(arguments, 1));
            }

            if (Splide2) {
              Splide2.event.on(EVENT_DESTROY, binder.destroy);
            }

            return assign(binder, {
              bus: bus,
              on: on,
              off: apply(binder.unbind, bus),
              emit: emit,
            });
          }

          function RequestInterval(interval, onInterval, onUpdate, limit) {
            var now = Date.now;
            var startTime;
            var rate = 0;
            var id;
            var paused = true;
            var count = 0;

            function update() {
              if (!paused) {
                rate = interval ? min((now() - startTime) / interval, 1) : 1;
                onUpdate && onUpdate(rate);

                if (rate >= 1) {
                  onInterval();
                  startTime = now();

                  if (limit && ++count >= limit) {
                    return pause();
                  }
                }

                id = raf(update);
              }
            }

            function start(resume) {
              resume || cancel();
              startTime = now() - (resume ? rate * interval : 0);
              paused = false;
              id = raf(update);
            }

            function pause() {
              paused = true;
            }

            function rewind() {
              startTime = now();
              rate = 0;

              if (onUpdate) {
                onUpdate(rate);
              }
            }

            function cancel() {
              id && cancelAnimationFrame(id);
              rate = 0;
              id = 0;
              paused = true;
            }

            function set(time) {
              interval = time;
            }

            function isPaused() {
              return paused;
            }

            return {
              start: start,
              rewind: rewind,
              pause: pause,
              cancel: cancel,
              set: set,
              isPaused: isPaused,
            };
          }

          function State(initialState) {
            var state = initialState;

            function set(value) {
              state = value;
            }

            function is(states) {
              return includes(toArray(states), state);
            }

            return {
              set: set,
              is: is,
            };
          }

          function Throttle(func, duration) {
            var interval = RequestInterval(duration || 0, func, null, 1);
            return function () {
              interval.isPaused() && interval.start();
            };
          }

          function Media(Splide2, Components2, options) {
            var state = Splide2.state;
            var breakpoints = options.breakpoints || {};
            var reducedMotion = options.reducedMotion || {};
            var binder = EventBinder();
            var queries = [];

            function setup() {
              var isMin = options.mediaQuery === "min";
              ownKeys(breakpoints)
                .sort(function (n, m) {
                  return isMin ? +n - +m : +m - +n;
                })
                .forEach(function (key) {
                  register(
                    breakpoints[key],
                    "(" + (isMin ? "min" : "max") + "-width:" + key + "px)"
                  );
                });
              register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
              update();
            }

            function destroy(completely) {
              if (completely) {
                binder.destroy();
              }
            }

            function register(options2, query) {
              var queryList = matchMedia(query);
              binder.bind(queryList, "change", update);
              queries.push([options2, queryList]);
            }

            function update() {
              var destroyed = state.is(DESTROYED);
              var direction = options.direction;
              var merged = queries.reduce(function (merged2, entry) {
                return merge(merged2, entry[1].matches ? entry[0] : {});
              }, {});
              omit(options);
              set(merged);

              if (options.destroy) {
                Splide2.destroy(options.destroy === "completely");
              } else if (destroyed) {
                destroy(true);
                Splide2.mount();
              } else {
                direction !== options.direction && Splide2.refresh();
              }
            }

            function reduce(enable) {
              if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
                enable
                  ? merge(options, reducedMotion)
                  : omit(options, ownKeys(reducedMotion));
              }
            }

            function set(opts, base, notify) {
              merge(options, opts);
              base && merge(Object.getPrototypeOf(options), opts);

              if (notify || !state.is(CREATED)) {
                Splide2.emit(EVENT_UPDATED, options);
              }
            }

            return {
              setup: setup,
              destroy: destroy,
              reduce: reduce,
              set: set,
            };
          }

          var ARROW = "Arrow";
          var ARROW_LEFT = ARROW + "Left";
          var ARROW_RIGHT = ARROW + "Right";
          var ARROW_UP = ARROW + "Up";
          var ARROW_DOWN = ARROW + "Down";
          var RTL = "rtl";
          var TTB = "ttb";
          var ORIENTATION_MAP = {
            width: ["height"],
            left: ["top", "right"],
            right: ["bottom", "left"],
            x: ["y"],
            X: ["Y"],
            Y: ["X"],
            ArrowLeft: [ARROW_UP, ARROW_RIGHT],
            ArrowRight: [ARROW_DOWN, ARROW_LEFT],
          };

          function Direction(Splide2, Components2, options) {
            function resolve(prop, axisOnly, direction) {
              direction = direction || options.direction;
              var index =
                direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
              return (
                (ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index]) ||
                prop.replace(/width|left|right/i, function (match, offset) {
                  var replacement =
                    ORIENTATION_MAP[match.toLowerCase()][index] || match;
                  return offset > 0
                    ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
                    : replacement;
                })
              );
            }

            function orient(value) {
              return value * (options.direction === RTL ? 1 : -1);
            }

            return {
              resolve: resolve,
              orient: orient,
            };
          }

          var ROLE = "role";
          var TAB_INDEX = "tabindex";
          var DISABLED = "disabled";
          var ARIA_PREFIX = "aria-";
          var ARIA_CONTROLS = ARIA_PREFIX + "controls";
          var ARIA_CURRENT = ARIA_PREFIX + "current";
          var ARIA_SELECTED = ARIA_PREFIX + "selected";
          var ARIA_LABEL = ARIA_PREFIX + "label";
          var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
          var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
          var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
          var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
          var ARIA_LIVE = ARIA_PREFIX + "live";
          var ARIA_BUSY = ARIA_PREFIX + "busy";
          var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
          var ALL_ATTRIBUTES = [
            ROLE,
            TAB_INDEX,
            DISABLED,
            ARIA_CONTROLS,
            ARIA_CURRENT,
            ARIA_LABEL,
            ARIA_LABELLEDBY,
            ARIA_HIDDEN,
            ARIA_ORIENTATION,
            ARIA_ROLEDESCRIPTION,
          ];
          var CLASS_PREFIX = PROJECT_CODE + "__";
          var STATUS_CLASS_PREFIX = "is-";
          var CLASS_ROOT = PROJECT_CODE;
          var CLASS_TRACK = CLASS_PREFIX + "track";
          var CLASS_LIST = CLASS_PREFIX + "list";
          var CLASS_SLIDE = CLASS_PREFIX + "slide";
          var CLASS_CLONE = CLASS_SLIDE + "--clone";
          var CLASS_CONTAINER = CLASS_SLIDE + "__container";
          var CLASS_ARROWS = CLASS_PREFIX + "arrows";
          var CLASS_ARROW = CLASS_PREFIX + "arrow";
          var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
          var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
          var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
          var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
          var CLASS_PROGRESS = CLASS_PREFIX + "progress";
          var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
          var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
          var CLASS_SPINNER = CLASS_PREFIX + "spinner";
          var CLASS_SR = CLASS_PREFIX + "sr";
          var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
          var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
          var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
          var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
          var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
          var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
          var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
          var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
          var STATUS_CLASSES = [
            CLASS_ACTIVE,
            CLASS_VISIBLE,
            CLASS_PREV,
            CLASS_NEXT,
            CLASS_LOADING,
            CLASS_FOCUS_IN,
            CLASS_OVERFLOW,
          ];
          var CLASSES = {
            slide: CLASS_SLIDE,
            clone: CLASS_CLONE,
            arrows: CLASS_ARROWS,
            arrow: CLASS_ARROW,
            prev: CLASS_ARROW_PREV,
            next: CLASS_ARROW_NEXT,
            pagination: CLASS_PAGINATION,
            page: CLASS_PAGINATION_PAGE,
            spinner: CLASS_SPINNER,
          };

          function closest(from, selector) {
            if (isFunction(from.closest)) {
              return from.closest(selector);
            }

            var elm = from;

            while (elm && elm.nodeType === 1) {
              if (matches(elm, selector)) {
                break;
              }

              elm = elm.parentElement;
            }

            return elm;
          }

          var FRICTION = 5;
          var LOG_INTERVAL = 200;
          var POINTER_DOWN_EVENTS = "touchstart mousedown";
          var POINTER_MOVE_EVENTS = "touchmove mousemove";
          var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

          function Elements(Splide2, Components2, options) {
            var _EventInterface = EventInterface(Splide2),
              on = _EventInterface.on,
              bind = _EventInterface.bind;

            var root = Splide2.root;
            var i18n = options.i18n;
            var elements = {};
            var slides = [];
            var rootClasses = [];
            var trackClasses = [];
            var track;
            var list;
            var isUsingKey;

            function setup() {
              collect();
              init();
              update();
            }

            function mount() {
              on(EVENT_REFRESH, destroy);
              on(EVENT_REFRESH, setup);
              on(EVENT_UPDATED, update);
              bind(
                document,
                POINTER_DOWN_EVENTS + " keydown",
                function (e) {
                  isUsingKey = e.type === "keydown";
                },
                {
                  capture: true,
                }
              );
              bind(root, "focusin", function () {
                toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
              });
            }

            function destroy(completely) {
              var attrs = ALL_ATTRIBUTES.concat("style");
              empty(slides);
              removeClass(root, rootClasses);
              removeClass(track, trackClasses);
              removeAttribute([track, list], attrs);
              removeAttribute(
                root,
                completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]
              );
            }

            function update() {
              removeClass(root, rootClasses);
              removeClass(track, trackClasses);
              rootClasses = getClasses(CLASS_ROOT);
              trackClasses = getClasses(CLASS_TRACK);
              addClass(root, rootClasses);
              addClass(track, trackClasses);
              setAttribute(root, ARIA_LABEL, options.label);
              setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
            }

            function collect() {
              track = find("." + CLASS_TRACK);
              list = child(track, "." + CLASS_LIST);
              assert(track && list, "A track/list element is missing.");
              push(
                slides,
                children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")")
              );
              forOwn(
                {
                  arrows: CLASS_ARROWS,
                  pagination: CLASS_PAGINATION,
                  prev: CLASS_ARROW_PREV,
                  next: CLASS_ARROW_NEXT,
                  bar: CLASS_PROGRESS_BAR,
                  toggle: CLASS_TOGGLE,
                },
                function (className, key) {
                  elements[key] = find("." + className);
                }
              );
              assign(elements, {
                root: root,
                track: track,
                list: list,
                slides: slides,
              });
            }

            function init() {
              var id = root.id || uniqueId(PROJECT_CODE);
              var role = options.role;
              root.id = id;
              track.id = track.id || id + "-track";
              list.id = list.id || id + "-list";

              if (
                !getAttribute(root, ROLE) &&
                root.tagName !== "SECTION" &&
                role
              ) {
                setAttribute(root, ROLE, role);
              }

              setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
              setAttribute(list, ROLE, "presentation");
            }

            function find(selector) {
              var elm = query(root, selector);
              return elm && closest(elm, "." + CLASS_ROOT) === root
                ? elm
                : void 0;
            }

            function getClasses(base) {
              return [
                base + "--" + options.type,
                base + "--" + options.direction,
                options.drag && base + "--draggable",
                options.isNavigation && base + "--nav",
                base === CLASS_ROOT && CLASS_ACTIVE,
              ];
            }

            return assign(elements, {
              setup: setup,
              mount: mount,
              destroy: destroy,
            });
          }

          var SLIDE = "slide";
          var LOOP = "loop";
          var FADE = "fade";

          function Slide$1(Splide2, index, slideIndex, slide) {
            var event = EventInterface(Splide2);
            var on = event.on,
              emit = event.emit,
              bind = event.bind;
            var Components = Splide2.Components,
              root = Splide2.root,
              options = Splide2.options;
            var isNavigation = options.isNavigation,
              updateOnMove = options.updateOnMove,
              i18n = options.i18n,
              pagination = options.pagination,
              slideFocus = options.slideFocus;
            var resolve = Components.Direction.resolve;
            var styles = getAttribute(slide, "style");
            var label = getAttribute(slide, ARIA_LABEL);
            var isClone = slideIndex > -1;
            var container = child(slide, "." + CLASS_CONTAINER);
            var destroyed;

            function mount() {
              if (!isClone) {
                slide.id = root.id + "-slide" + pad(index + 1);
                setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
                setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
                setAttribute(
                  slide,
                  ARIA_LABEL,
                  label || format(i18n.slideLabel, [index + 1, Splide2.length])
                );
              }

              listen();
            }

            function listen() {
              bind(slide, "click", apply(emit, EVENT_CLICK, self));
              bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
              on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
              on(EVENT_NAVIGATION_MOUNTED, initNavigation);

              if (updateOnMove) {
                on(EVENT_MOVE, onMove);
              }
            }

            function destroy() {
              destroyed = true;
              event.destroy();
              removeClass(slide, STATUS_CLASSES);
              removeAttribute(slide, ALL_ATTRIBUTES);
              setAttribute(slide, "style", styles);
              setAttribute(slide, ARIA_LABEL, label || "");
            }

            function initNavigation() {
              var controls = Splide2.splides
                .map(function (target) {
                  var Slide2 = target.splide.Components.Slides.getAt(index);
                  return Slide2 ? Slide2.slide.id : "";
                })
                .join(" ");
              setAttribute(
                slide,
                ARIA_LABEL,
                format(i18n.slideX, (isClone ? slideIndex : index) + 1)
              );
              setAttribute(slide, ARIA_CONTROLS, controls);
              setAttribute(slide, ROLE, slideFocus ? "button" : "");
              slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
            }

            function onMove() {
              if (!destroyed) {
                update();
              }
            }

            function update() {
              if (!destroyed) {
                var curr = Splide2.index;
                updateActivity();
                updateVisibility();
                toggleClass(slide, CLASS_PREV, index === curr - 1);
                toggleClass(slide, CLASS_NEXT, index === curr + 1);
              }
            }

            function updateActivity() {
              var active = isActive();

              if (active !== hasClass(slide, CLASS_ACTIVE)) {
                toggleClass(slide, CLASS_ACTIVE, active);
                setAttribute(
                  slide,
                  ARIA_CURRENT,
                  (isNavigation && active) || ""
                );
                emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
              }
            }

            function updateVisibility() {
              var visible = isVisible();
              var hidden = !visible && (!isActive() || isClone);

              if (!Splide2.state.is([MOVING, SCROLLING])) {
                setAttribute(slide, ARIA_HIDDEN, hidden || "");
              }

              setAttribute(
                queryAll(slide, options.focusableNodes || ""),
                TAB_INDEX,
                hidden ? -1 : ""
              );

              if (slideFocus) {
                setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
              }

              if (visible !== hasClass(slide, CLASS_VISIBLE)) {
                toggleClass(slide, CLASS_VISIBLE, visible);
                emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
              }

              if (!visible && document.activeElement === slide) {
                var Slide2 = Components.Slides.getAt(Splide2.index);
                Slide2 && focus(Slide2.slide);
              }
            }

            function style$1(prop, value, useContainer) {
              style((useContainer && container) || slide, prop, value);
            }

            function isActive() {
              var curr = Splide2.index;
              return (
                curr === index || (options.cloneStatus && curr === slideIndex)
              );
            }

            function isVisible() {
              if (Splide2.is(FADE)) {
                return isActive();
              }

              var trackRect = rect(Components.Elements.track);
              var slideRect = rect(slide);
              var left = resolve("left", true);
              var right = resolve("right", true);
              return (
                floor(trackRect[left]) <= ceil(slideRect[left]) &&
                floor(slideRect[right]) <= ceil(trackRect[right])
              );
            }

            function isWithin(from, distance) {
              var diff = abs(from - index);

              if (!isClone && (options.rewind || Splide2.is(LOOP))) {
                diff = min(diff, Splide2.length - diff);
              }

              return diff <= distance;
            }

            var self = {
              index: index,
              slideIndex: slideIndex,
              slide: slide,
              container: container,
              isClone: isClone,
              mount: mount,
              destroy: destroy,
              update: update,
              style: style$1,
              isWithin: isWithin,
            };
            return self;
          }

          function Slides(Splide2, Components2, options) {
            var _EventInterface2 = EventInterface(Splide2),
              on = _EventInterface2.on,
              emit = _EventInterface2.emit,
              bind = _EventInterface2.bind;

            var _Components2$Elements = Components2.Elements,
              slides = _Components2$Elements.slides,
              list = _Components2$Elements.list;
            var Slides2 = [];

            function mount() {
              init();
              on(EVENT_REFRESH, destroy);
              on(EVENT_REFRESH, init);
            }

            function init() {
              slides.forEach(function (slide, index) {
                register(slide, index, -1);
              });
            }

            function destroy() {
              forEach$1(function (Slide2) {
                Slide2.destroy();
              });
              empty(Slides2);
            }

            function update() {
              forEach$1(function (Slide2) {
                Slide2.update();
              });
            }

            function register(slide, index, slideIndex) {
              var object = Slide$1(Splide2, index, slideIndex, slide);
              object.mount();
              Slides2.push(object);
              Slides2.sort(function (Slide1, Slide2) {
                return Slide1.index - Slide2.index;
              });
            }

            function get(excludeClones) {
              return excludeClones
                ? filter(function (Slide2) {
                    return !Slide2.isClone;
                  })
                : Slides2;
            }

            function getIn(page) {
              var Controller = Components2.Controller;
              var index = Controller.toIndex(page);
              var max = Controller.hasFocus() ? 1 : options.perPage;
              return filter(function (Slide2) {
                return between(Slide2.index, index, index + max - 1);
              });
            }

            function getAt(index) {
              return filter(index)[0];
            }

            function add(items, index) {
              forEach(items, function (slide) {
                if (isString(slide)) {
                  slide = parseHtml(slide);
                }

                if (isHTMLElement(slide)) {
                  var ref = slides[index];
                  ref ? before(slide, ref) : append(list, slide);
                  addClass(slide, options.classes.slide);
                  observeImages(slide, apply(emit, EVENT_RESIZE));
                }
              });
              emit(EVENT_REFRESH);
            }

            function remove$1(matcher) {
              remove(
                filter(matcher).map(function (Slide2) {
                  return Slide2.slide;
                })
              );
              emit(EVENT_REFRESH);
            }

            function forEach$1(iteratee, excludeClones) {
              get(excludeClones).forEach(iteratee);
            }

            function filter(matcher) {
              return Slides2.filter(
                isFunction(matcher)
                  ? matcher
                  : function (Slide2) {
                      return isString(matcher)
                        ? matches(Slide2.slide, matcher)
                        : includes(toArray(matcher), Slide2.index);
                    }
              );
            }

            function style(prop, value, useContainer) {
              forEach$1(function (Slide2) {
                Slide2.style(prop, value, useContainer);
              });
            }

            function observeImages(elm, callback) {
              var images = queryAll(elm, "img");
              var length = images.length;

              if (length) {
                images.forEach(function (img) {
                  bind(img, "load error", function () {
                    if (!--length) {
                      callback();
                    }
                  });
                });
              } else {
                callback();
              }
            }

            function getLength(excludeClones) {
              return excludeClones ? slides.length : Slides2.length;
            }

            function isEnough() {
              return Slides2.length > options.perPage;
            }

            return {
              mount: mount,
              destroy: destroy,
              update: update,
              register: register,
              get: get,
              getIn: getIn,
              getAt: getAt,
              add: add,
              remove: remove$1,
              forEach: forEach$1,
              filter: filter,
              style: style,
              getLength: getLength,
              isEnough: isEnough,
            };
          }

          function Layout(Splide2, Components2, options) {
            var _EventInterface3 = EventInterface(Splide2),
              on = _EventInterface3.on,
              bind = _EventInterface3.bind,
              emit = _EventInterface3.emit;

            var Slides = Components2.Slides;
            var resolve = Components2.Direction.resolve;
            var _Components2$Elements2 = Components2.Elements,
              root = _Components2$Elements2.root,
              track = _Components2$Elements2.track,
              list = _Components2$Elements2.list;
            var getAt = Slides.getAt,
              styleSlides = Slides.style;
            var vertical;
            var rootRect;
            var overflow;

            function mount() {
              init();
              bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
              on([EVENT_UPDATED, EVENT_REFRESH], init);
              on(EVENT_RESIZE, resize);
            }

            function init() {
              vertical = options.direction === TTB;
              style(root, "maxWidth", unit(options.width));
              style(track, resolve("paddingLeft"), cssPadding(false));
              style(track, resolve("paddingRight"), cssPadding(true));
              resize(true);
            }

            function resize(force) {
              var newRect = rect(root);

              if (
                force ||
                rootRect.width !== newRect.width ||
                rootRect.height !== newRect.height
              ) {
                style(track, "height", cssTrackHeight());
                styleSlides(resolve("marginRight"), unit(options.gap));
                styleSlides("width", cssSlideWidth());
                styleSlides("height", cssSlideHeight(), true);
                rootRect = newRect;
                emit(EVENT_RESIZED);

                if (overflow !== (overflow = isOverflow())) {
                  toggleClass(root, CLASS_OVERFLOW, overflow);
                  emit(EVENT_OVERFLOW, overflow);
                }
              }
            }

            function cssPadding(right) {
              var padding = options.padding;
              var prop = resolve(right ? "right" : "left");
              return (
                (padding &&
                  unit(padding[prop] || (isObject(padding) ? 0 : padding))) ||
                "0px"
              );
            }

            function cssTrackHeight() {
              var height = "";

              if (vertical) {
                height = cssHeight();
                assert(height, "height or heightRatio is missing.");
                height =
                  "calc(" +
                  height +
                  " - " +
                  cssPadding(false) +
                  " - " +
                  cssPadding(true) +
                  ")";
              }

              return height;
            }

            function cssHeight() {
              return unit(
                options.height || rect(list).width * options.heightRatio
              );
            }

            function cssSlideWidth() {
              return options.autoWidth
                ? null
                : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
            }

            function cssSlideHeight() {
              return (
                unit(options.fixedHeight) ||
                (vertical
                  ? options.autoHeight
                    ? null
                    : cssSlideSize()
                  : cssHeight())
              );
            }

            function cssSlideSize() {
              var gap = unit(options.gap);
              return (
                "calc((100%" +
                (gap && " + " + gap) +
                ")/" +
                (options.perPage || 1) +
                (gap && " - " + gap) +
                ")"
              );
            }

            function listSize() {
              return rect(list)[resolve("width")];
            }

            function slideSize(index, withoutGap) {
              var Slide = getAt(index || 0);
              return Slide
                ? rect(Slide.slide)[resolve("width")] +
                    (withoutGap ? 0 : getGap())
                : 0;
            }

            function totalSize(index, withoutGap) {
              var Slide = getAt(index);

              if (Slide) {
                var right = rect(Slide.slide)[resolve("right")];
                var left = rect(list)[resolve("left")];
                return abs(right - left) + (withoutGap ? 0 : getGap());
              }

              return 0;
            }

            function sliderSize(withoutGap) {
              return (
                totalSize(Splide2.length - 1) -
                totalSize(0) +
                slideSize(0, withoutGap)
              );
            }

            function getGap() {
              var Slide = getAt(0);
              return (
                (Slide &&
                  parseFloat(style(Slide.slide, resolve("marginRight")))) ||
                0
              );
            }

            function getPadding(right) {
              return (
                parseFloat(
                  style(track, resolve("padding" + (right ? "Right" : "Left")))
                ) || 0
              );
            }

            function isOverflow() {
              return Splide2.is(FADE) || sliderSize(true) > listSize();
            }

            return {
              mount: mount,
              resize: resize,
              listSize: listSize,
              slideSize: slideSize,
              sliderSize: sliderSize,
              totalSize: totalSize,
              getPadding: getPadding,
              isOverflow: isOverflow,
            };
          }

          var MULTIPLIER = 2;

          function Clones(Splide2, Components2, options) {
            var event = EventInterface(Splide2);
            var on = event.on;
            var Elements = Components2.Elements,
              Slides = Components2.Slides;
            var resolve = Components2.Direction.resolve;
            var clones = [];
            var cloneCount;

            function mount() {
              on(EVENT_REFRESH, remount);
              on([EVENT_UPDATED, EVENT_RESIZE], observe);

              if ((cloneCount = computeCloneCount())) {
                generate(cloneCount);
                Components2.Layout.resize(true);
              }
            }

            function remount() {
              destroy();
              mount();
            }

            function destroy() {
              remove(clones);
              empty(clones);
              event.destroy();
            }

            function observe() {
              var count = computeCloneCount();

              if (cloneCount !== count) {
                if (cloneCount < count || !count) {
                  event.emit(EVENT_REFRESH);
                }
              }
            }

            function generate(count) {
              var slides = Slides.get().slice();
              var length = slides.length;

              if (length) {
                while (slides.length < count) {
                  push(slides, slides);
                }

                push(slides.slice(-count), slides.slice(0, count)).forEach(
                  function (Slide, index) {
                    var isHead = index < count;
                    var clone = cloneDeep(Slide.slide, index);
                    isHead
                      ? before(clone, slides[0].slide)
                      : append(Elements.list, clone);
                    push(clones, clone);
                    Slides.register(
                      clone,
                      index - count + (isHead ? 0 : length),
                      Slide.index
                    );
                  }
                );
              }
            }

            function cloneDeep(elm, index) {
              var clone = elm.cloneNode(true);
              addClass(clone, options.classes.clone);
              clone.id = Splide2.root.id + "-clone" + pad(index + 1);
              return clone;
            }

            function computeCloneCount() {
              var clones2 = options.clones;

              if (!Splide2.is(LOOP)) {
                clones2 = 0;
              } else if (isUndefined(clones2)) {
                var fixedSize =
                  options[resolve("fixedWidth")] &&
                  Components2.Layout.slideSize(0);
                var fixedCount =
                  fixedSize &&
                  ceil(rect(Elements.track)[resolve("width")] / fixedSize);
                clones2 =
                  fixedCount ||
                  (options[resolve("autoWidth")] && Splide2.length) ||
                  options.perPage * MULTIPLIER;
              }

              return clones2;
            }

            return {
              mount: mount,
              destroy: destroy,
            };
          }

          function Move(Splide2, Components2, options) {
            var _EventInterface4 = EventInterface(Splide2),
              on = _EventInterface4.on,
              emit = _EventInterface4.emit;

            var set = Splide2.state.set;
            var _Components2$Layout = Components2.Layout,
              slideSize = _Components2$Layout.slideSize,
              getPadding = _Components2$Layout.getPadding,
              totalSize = _Components2$Layout.totalSize,
              listSize = _Components2$Layout.listSize,
              sliderSize = _Components2$Layout.sliderSize;
            var _Components2$Directio = Components2.Direction,
              resolve = _Components2$Directio.resolve,
              orient = _Components2$Directio.orient;
            var _Components2$Elements3 = Components2.Elements,
              list = _Components2$Elements3.list,
              track = _Components2$Elements3.track;
            var Transition;

            function mount() {
              Transition = Components2.Transition;
              on(
                [EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH],
                reposition
              );
            }

            function reposition() {
              if (!Components2.Controller.isBusy()) {
                Components2.Scroll.cancel();
                jump(Splide2.index);
                Components2.Slides.update();
              }
            }

            function move(dest, index, prev, callback) {
              if (dest !== index && canShift(dest > prev)) {
                cancel();
                translate(shift(getPosition(), dest > prev), true);
              }

              set(MOVING);
              emit(EVENT_MOVE, index, prev, dest);
              Transition.start(index, function () {
                set(IDLE);
                emit(EVENT_MOVED, index, prev, dest);
                callback && callback();
              });
            }

            function jump(index) {
              translate(toPosition(index, true));
            }

            function translate(position, preventLoop) {
              if (!Splide2.is(FADE)) {
                var destination = preventLoop ? position : loop(position);
                style(
                  list,
                  "transform",
                  "translate" + resolve("X") + "(" + destination + "px)"
                );
                position !== destination && emit(EVENT_SHIFTED);
              }
            }

            function loop(position) {
              if (Splide2.is(LOOP)) {
                var index = toIndex(position);
                var exceededMax = index > Components2.Controller.getEnd();
                var exceededMin = index < 0;

                if (exceededMin || exceededMax) {
                  position = shift(position, exceededMax);
                }
              }

              return position;
            }

            function shift(position, backwards) {
              var excess = position - getLimit(backwards);
              var size = sliderSize();
              position -=
                orient(size * (ceil(abs(excess) / size) || 1)) *
                (backwards ? 1 : -1);
              return position;
            }

            function cancel() {
              translate(getPosition(), true);
              Transition.cancel();
            }

            function toIndex(position) {
              var Slides = Components2.Slides.get();
              var index = 0;
              var minDistance = Infinity;

              for (var i = 0; i < Slides.length; i++) {
                var slideIndex = Slides[i].index;
                var distance = abs(toPosition(slideIndex, true) - position);

                if (distance <= minDistance) {
                  minDistance = distance;
                  index = slideIndex;
                } else {
                  break;
                }
              }

              return index;
            }

            function toPosition(index, trimming) {
              var position = orient(totalSize(index - 1) - offset(index));
              return trimming ? trim(position) : position;
            }

            function getPosition() {
              var left = resolve("left");
              return (
                rect(list)[left] - rect(track)[left] + orient(getPadding(false))
              );
            }

            function trim(position) {
              if (options.trimSpace && Splide2.is(SLIDE)) {
                position = clamp(
                  position,
                  0,
                  orient(sliderSize(true) - listSize())
                );
              }

              return position;
            }

            function offset(index) {
              var focus = options.focus;
              return focus === "center"
                ? (listSize() - slideSize(index, true)) / 2
                : +focus * slideSize(index) || 0;
            }

            function getLimit(max) {
              return toPosition(
                max ? Components2.Controller.getEnd() : 0,
                !!options.trimSpace
              );
            }

            function canShift(backwards) {
              var shifted = orient(shift(getPosition(), backwards));
              return backwards
                ? shifted >= 0
                : shifted <=
                    list[resolve("scrollWidth")] -
                      rect(track)[resolve("width")];
            }

            function exceededLimit(max, position) {
              position = isUndefined(position) ? getPosition() : position;
              var exceededMin =
                max !== true && orient(position) < orient(getLimit(false));
              var exceededMax =
                max !== false && orient(position) > orient(getLimit(true));
              return exceededMin || exceededMax;
            }

            return {
              mount: mount,
              move: move,
              jump: jump,
              translate: translate,
              shift: shift,
              cancel: cancel,
              toIndex: toIndex,
              toPosition: toPosition,
              getPosition: getPosition,
              getLimit: getLimit,
              exceededLimit: exceededLimit,
              reposition: reposition,
            };
          }

          function Controller(Splide2, Components2, options) {
            var _EventInterface5 = EventInterface(Splide2),
              on = _EventInterface5.on,
              emit = _EventInterface5.emit;

            var Move = Components2.Move;
            var getPosition = Move.getPosition,
              getLimit = Move.getLimit,
              toPosition = Move.toPosition;
            var _Components2$Slides = Components2.Slides,
              isEnough = _Components2$Slides.isEnough,
              getLength = _Components2$Slides.getLength;
            var omitEnd = options.omitEnd;
            var isLoop = Splide2.is(LOOP);
            var isSlide = Splide2.is(SLIDE);
            var getNext = apply(getAdjacent, false);
            var getPrev = apply(getAdjacent, true);
            var currIndex = options.start || 0;
            var endIndex;
            var prevIndex = currIndex;
            var slideCount;
            var perMove;
            var perPage;

            function mount() {
              init();
              on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
              on(EVENT_RESIZED, onResized);
            }

            function init() {
              slideCount = getLength(true);
              perMove = options.perMove;
              perPage = options.perPage;
              endIndex = getEnd();
              var index = clamp(
                currIndex,
                0,
                omitEnd ? endIndex : slideCount - 1
              );

              if (index !== currIndex) {
                currIndex = index;
                Move.reposition();
              }
            }

            function onResized() {
              if (endIndex !== getEnd()) {
                emit(EVENT_END_INDEX_CHANGED);
              }
            }

            function go(control, allowSameIndex, callback) {
              if (!isBusy()) {
                var dest = parse(control);
                var index = loop(dest);

                if (index > -1 && (allowSameIndex || index !== currIndex)) {
                  setIndex(index);
                  Move.move(dest, index, prevIndex, callback);
                }
              }
            }

            function scroll(destination, duration, snap, callback) {
              Components2.Scroll.scroll(
                destination,
                duration,
                snap,
                function () {
                  var index = loop(Move.toIndex(getPosition()));
                  setIndex(omitEnd ? min(index, endIndex) : index);
                  callback && callback();
                }
              );
            }

            function parse(control) {
              var index = currIndex;

              if (isString(control)) {
                var _ref = control.match(/([+\-<>])(\d+)?/) || [],
                  indicator = _ref[1],
                  number = _ref[2];

                if (indicator === "+" || indicator === "-") {
                  index = computeDestIndex(
                    currIndex + +("" + indicator + (+number || 1)),
                    currIndex
                  );
                } else if (indicator === ">") {
                  index = number ? toIndex(+number) : getNext(true);
                } else if (indicator === "<") {
                  index = getPrev(true);
                }
              } else {
                index = isLoop ? control : clamp(control, 0, endIndex);
              }

              return index;
            }

            function getAdjacent(prev, destination) {
              var number = perMove || (hasFocus() ? 1 : perPage);
              var dest = computeDestIndex(
                currIndex + number * (prev ? -1 : 1),
                currIndex,
                !(perMove || hasFocus())
              );

              if (dest === -1 && isSlide) {
                if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
                  return prev ? 0 : endIndex;
                }
              }

              return destination ? dest : loop(dest);
            }

            function computeDestIndex(dest, from, snapPage) {
              if (isEnough() || hasFocus()) {
                var index = computeMovableDestIndex(dest);

                if (index !== dest) {
                  from = dest;
                  dest = index;
                  snapPage = false;
                }

                if (dest < 0 || dest > endIndex) {
                  if (
                    !perMove &&
                    (between(0, dest, from, true) ||
                      between(endIndex, from, dest, true))
                  ) {
                    dest = toIndex(toPage(dest));
                  } else {
                    if (isLoop) {
                      dest = snapPage
                        ? dest < 0
                          ? -(slideCount % perPage || perPage)
                          : slideCount
                        : dest;
                    } else if (options.rewind) {
                      dest = dest < 0 ? endIndex : 0;
                    } else {
                      dest = -1;
                    }
                  }
                } else {
                  if (snapPage && dest !== from) {
                    dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
                  }
                }
              } else {
                dest = -1;
              }

              return dest;
            }

            function computeMovableDestIndex(dest) {
              if (
                isSlide &&
                options.trimSpace === "move" &&
                dest !== currIndex
              ) {
                var position = getPosition();

                while (
                  position === toPosition(dest, true) &&
                  between(dest, 0, Splide2.length - 1, !options.rewind)
                ) {
                  dest < currIndex ? --dest : ++dest;
                }
              }

              return dest;
            }

            function loop(index) {
              return isLoop ? (index + slideCount) % slideCount || 0 : index;
            }

            function getEnd() {
              var end =
                slideCount - (hasFocus() || (isLoop && perMove) ? 1 : perPage);

              while (omitEnd && end-- > 0) {
                if (
                  toPosition(slideCount - 1, true) !== toPosition(end, true)
                ) {
                  end++;
                  break;
                }
              }

              return clamp(end, 0, slideCount - 1);
            }

            function toIndex(page) {
              return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
            }

            function toPage(index) {
              return hasFocus()
                ? min(index, endIndex)
                : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
            }

            function toDest(destination) {
              var closest = Move.toIndex(destination);
              return isSlide ? clamp(closest, 0, endIndex) : closest;
            }

            function setIndex(index) {
              if (index !== currIndex) {
                prevIndex = currIndex;
                currIndex = index;
              }
            }

            function getIndex(prev) {
              return prev ? prevIndex : currIndex;
            }

            function hasFocus() {
              return !isUndefined(options.focus) || options.isNavigation;
            }

            function isBusy() {
              return (
                Splide2.state.is([MOVING, SCROLLING]) &&
                !!options.waitForTransition
              );
            }

            return {
              mount: mount,
              go: go,
              scroll: scroll,
              getNext: getNext,
              getPrev: getPrev,
              getAdjacent: getAdjacent,
              getEnd: getEnd,
              setIndex: setIndex,
              getIndex: getIndex,
              toIndex: toIndex,
              toPage: toPage,
              toDest: toDest,
              hasFocus: hasFocus,
              isBusy: isBusy,
            };
          }

          var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
          var PATH =
            "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
          var SIZE = 40;

          function Arrows(Splide2, Components2, options) {
            var event = EventInterface(Splide2);
            var on = event.on,
              bind = event.bind,
              emit = event.emit;
            var classes = options.classes,
              i18n = options.i18n;
            var Elements = Components2.Elements,
              Controller = Components2.Controller;
            var placeholder = Elements.arrows,
              track = Elements.track;
            var wrapper = placeholder;
            var prev = Elements.prev;
            var next = Elements.next;
            var created;
            var wrapperClasses;
            var arrows = {};

            function mount() {
              init();
              on(EVENT_UPDATED, remount);
            }

            function remount() {
              destroy();
              mount();
            }

            function init() {
              var enabled = options.arrows;

              if (enabled && !(prev && next)) {
                createArrows();
              }

              if (prev && next) {
                assign(arrows, {
                  prev: prev,
                  next: next,
                });
                display(wrapper, enabled ? "" : "none");
                addClass(
                  wrapper,
                  (wrapperClasses = CLASS_ARROWS + "--" + options.direction)
                );

                if (enabled) {
                  listen();
                  update();
                  setAttribute([prev, next], ARIA_CONTROLS, track.id);
                  emit(EVENT_ARROWS_MOUNTED, prev, next);
                }
              }
            }

            function destroy() {
              event.destroy();
              removeClass(wrapper, wrapperClasses);

              if (created) {
                remove(placeholder ? [prev, next] : wrapper);
                prev = next = null;
              } else {
                removeAttribute([prev, next], ALL_ATTRIBUTES);
              }
            }

            function listen() {
              on(
                [
                  EVENT_MOUNTED,
                  EVENT_MOVED,
                  EVENT_REFRESH,
                  EVENT_SCROLLED,
                  EVENT_END_INDEX_CHANGED,
                ],
                update
              );
              bind(next, "click", apply(go, ">"));
              bind(prev, "click", apply(go, "<"));
            }

            function go(control) {
              Controller.go(control, true);
            }

            function createArrows() {
              wrapper = placeholder || create("div", classes.arrows);
              prev = createArrow(true);
              next = createArrow(false);
              created = true;
              append(wrapper, [prev, next]);
              !placeholder && before(wrapper, track);
            }

            function createArrow(prev2) {
              var arrow =
                '<button class="' +
                classes.arrow +
                " " +
                (prev2 ? classes.prev : classes.next) +
                '" type="button"><svg xmlns="' +
                XML_NAME_SPACE +
                '" viewBox="0 0 ' +
                SIZE +
                " " +
                SIZE +
                '" width="' +
                SIZE +
                '" height="' +
                SIZE +
                '" focusable="false"><path d="' +
                (options.arrowPath || PATH) +
                '" />';
              return parseHtml(arrow);
            }

            function update() {
              if (prev && next) {
                var index = Splide2.index;
                var prevIndex = Controller.getPrev();
                var nextIndex = Controller.getNext();
                var prevLabel =
                  prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
                var nextLabel =
                  nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
                prev.disabled = prevIndex < 0;
                next.disabled = nextIndex < 0;
                setAttribute(prev, ARIA_LABEL, prevLabel);
                setAttribute(next, ARIA_LABEL, nextLabel);
                emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
              }
            }

            return {
              arrows: arrows,
              mount: mount,
              destroy: destroy,
              update: update,
            };
          }

          var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

          function Autoplay(Splide2, Components2, options) {
            var _EventInterface6 = EventInterface(Splide2),
              on = _EventInterface6.on,
              bind = _EventInterface6.bind,
              emit = _EventInterface6.emit;

            var interval = RequestInterval(
              options.interval,
              Splide2.go.bind(Splide2, ">"),
              onAnimationFrame
            );
            var isPaused = interval.isPaused;
            var Elements = Components2.Elements,
              _Components2$Elements4 = Components2.Elements,
              root = _Components2$Elements4.root,
              toggle = _Components2$Elements4.toggle;
            var autoplay = options.autoplay;
            var hovered;
            var focused;
            var stopped = autoplay === "pause";

            function mount() {
              if (autoplay) {
                listen();
                toggle &&
                  setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
                stopped || play();
                update();
              }
            }

            function listen() {
              if (options.pauseOnHover) {
                bind(root, "mouseenter mouseleave", function (e) {
                  hovered = e.type === "mouseenter";
                  autoToggle();
                });
              }

              if (options.pauseOnFocus) {
                bind(root, "focusin focusout", function (e) {
                  focused = e.type === "focusin";
                  autoToggle();
                });
              }

              if (toggle) {
                bind(toggle, "click", function () {
                  stopped ? play() : pause(true);
                });
              }

              on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
              on(EVENT_MOVE, onMove);
            }

            function play() {
              if (isPaused() && Components2.Slides.isEnough()) {
                interval.start(!options.resetProgress);
                focused = hovered = stopped = false;
                update();
                emit(EVENT_AUTOPLAY_PLAY);
              }
            }

            function pause(stop) {
              if (stop === void 0) {
                stop = true;
              }

              stopped = !!stop;
              update();

              if (!isPaused()) {
                interval.pause();
                emit(EVENT_AUTOPLAY_PAUSE);
              }
            }

            function autoToggle() {
              if (!stopped) {
                hovered || focused ? pause(false) : play();
              }
            }

            function update() {
              if (toggle) {
                toggleClass(toggle, CLASS_ACTIVE, !stopped);
                setAttribute(
                  toggle,
                  ARIA_LABEL,
                  options.i18n[stopped ? "play" : "pause"]
                );
              }
            }

            function onAnimationFrame(rate) {
              var bar = Elements.bar;
              bar && style(bar, "width", rate * 100 + "%");
              emit(EVENT_AUTOPLAY_PLAYING, rate);
            }

            function onMove(index) {
              var Slide = Components2.Slides.getAt(index);
              interval.set(
                (Slide &&
                  +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE)) ||
                  options.interval
              );
            }

            return {
              mount: mount,
              destroy: interval.cancel,
              play: play,
              pause: pause,
              isPaused: isPaused,
            };
          }

          function Cover(Splide2, Components2, options) {
            var _EventInterface7 = EventInterface(Splide2),
              on = _EventInterface7.on;

            function mount() {
              if (options.cover) {
                on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
                on(
                  [EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH],
                  apply(cover, true)
                );
              }
            }

            function cover(cover2) {
              Components2.Slides.forEach(function (Slide) {
                var img = child(Slide.container || Slide.slide, "img");

                if (img && img.src) {
                  toggle(cover2, img, Slide);
                }
              });
            }

            function toggle(cover2, img, Slide) {
              Slide.style(
                "background",
                cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "",
                true
              );
              display(img, cover2 ? "none" : "");
            }

            return {
              mount: mount,
              destroy: apply(cover, false),
            };
          }

          var BOUNCE_DIFF_THRESHOLD = 10;
          var BOUNCE_DURATION = 600;
          var FRICTION_FACTOR = 0.6;
          var BASE_VELOCITY = 1.5;
          var MIN_DURATION = 800;

          function Scroll(Splide2, Components2, options) {
            var _EventInterface8 = EventInterface(Splide2),
              on = _EventInterface8.on,
              emit = _EventInterface8.emit;

            var set = Splide2.state.set;
            var Move = Components2.Move;
            var getPosition = Move.getPosition,
              getLimit = Move.getLimit,
              exceededLimit = Move.exceededLimit,
              translate = Move.translate;
            var isSlide = Splide2.is(SLIDE);
            var interval;
            var callback;
            var friction = 1;

            function mount() {
              on(EVENT_MOVE, clear);
              on([EVENT_UPDATED, EVENT_REFRESH], cancel);
            }

            function scroll(
              destination,
              duration,
              snap,
              onScrolled,
              noConstrain
            ) {
              var from = getPosition();
              clear();

              if (snap && (!isSlide || !exceededLimit())) {
                var size = Components2.Layout.sliderSize();
                var offset =
                  sign(destination) * size * floor(abs(destination) / size) ||
                  0;
                destination =
                  Move.toPosition(
                    Components2.Controller.toDest(destination % size)
                  ) + offset;
              }

              var noDistance = approximatelyEqual(from, destination, 1);
              friction = 1;
              duration = noDistance
                ? 0
                : duration ||
                  max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
              callback = onScrolled;
              interval = RequestInterval(
                duration,
                onEnd,
                apply(update, from, destination, noConstrain),
                1
              );
              set(SCROLLING);
              emit(EVENT_SCROLL);
              interval.start();
            }

            function onEnd() {
              set(IDLE);
              callback && callback();
              emit(EVENT_SCROLLED);
            }

            function update(from, to, noConstrain, rate) {
              var position = getPosition();
              var target = from + (to - from) * easing(rate);
              var diff = (target - position) * friction;
              translate(position + diff);

              if (isSlide && !noConstrain && exceededLimit()) {
                friction *= FRICTION_FACTOR;

                if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
                  scroll(
                    getLimit(exceededLimit(true)),
                    BOUNCE_DURATION,
                    false,
                    callback,
                    true
                  );
                }
              }
            }

            function clear() {
              if (interval) {
                interval.cancel();
              }
            }

            function cancel() {
              if (interval && !interval.isPaused()) {
                clear();
                onEnd();
              }
            }

            function easing(t) {
              var easingFunc = options.easingFunc;
              return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
            }

            return {
              mount: mount,
              destroy: clear,
              scroll: scroll,
              cancel: cancel,
            };
          }

          var SCROLL_LISTENER_OPTIONS = {
            passive: false,
            capture: true,
          };

          function Drag(Splide2, Components2, options) {
            var _EventInterface9 = EventInterface(Splide2),
              on = _EventInterface9.on,
              emit = _EventInterface9.emit,
              bind = _EventInterface9.bind,
              unbind = _EventInterface9.unbind;

            var state = Splide2.state;
            var Move = Components2.Move,
              Scroll = Components2.Scroll,
              Controller = Components2.Controller,
              track = Components2.Elements.track,
              reduce = Components2.Media.reduce;
            var _Components2$Directio2 = Components2.Direction,
              resolve = _Components2$Directio2.resolve,
              orient = _Components2$Directio2.orient;
            var getPosition = Move.getPosition,
              exceededLimit = Move.exceededLimit;
            var basePosition;
            var baseEvent;
            var prevBaseEvent;
            var isFree;
            var dragging;
            var exceeded = false;
            var clickPrevented;
            var disabled;
            var target;

            function mount() {
              bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
              bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
              bind(
                track,
                POINTER_DOWN_EVENTS,
                onPointerDown,
                SCROLL_LISTENER_OPTIONS
              );
              bind(track, "click", onClick, {
                capture: true,
              });
              bind(track, "dragstart", prevent);
              on([EVENT_MOUNTED, EVENT_UPDATED], init);
            }

            function init() {
              var drag = options.drag;
              disable(!drag);
              isFree = drag === "free";
            }

            function onPointerDown(e) {
              clickPrevented = false;

              if (!disabled) {
                var isTouch = isTouchEvent(e);

                if (isDraggable(e.target) && (isTouch || !e.button)) {
                  if (!Controller.isBusy()) {
                    target = isTouch ? track : window;
                    dragging = state.is([MOVING, SCROLLING]);
                    prevBaseEvent = null;
                    bind(
                      target,
                      POINTER_MOVE_EVENTS,
                      onPointerMove,
                      SCROLL_LISTENER_OPTIONS
                    );
                    bind(
                      target,
                      POINTER_UP_EVENTS,
                      onPointerUp,
                      SCROLL_LISTENER_OPTIONS
                    );
                    Move.cancel();
                    Scroll.cancel();
                    save(e);
                  } else {
                    prevent(e, true);
                  }
                }
              }
            }

            function onPointerMove(e) {
              if (!state.is(DRAGGING)) {
                state.set(DRAGGING);
                emit(EVENT_DRAG);
              }

              if (e.cancelable) {
                if (dragging) {
                  Move.translate(basePosition + constrain(diffCoord(e)));
                  var expired = diffTime(e) > LOG_INTERVAL;
                  var hasExceeded = exceeded !== (exceeded = exceededLimit());

                  if (expired || hasExceeded) {
                    save(e);
                  }

                  clickPrevented = true;
                  emit(EVENT_DRAGGING);
                  prevent(e);
                } else if (isSliderDirection(e)) {
                  dragging = shouldStart(e);
                  prevent(e);
                }
              }
            }

            function onPointerUp(e) {
              if (state.is(DRAGGING)) {
                state.set(IDLE);
                emit(EVENT_DRAGGED);
              }

              if (dragging) {
                move(e);
                prevent(e);
              }

              unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
              unbind(target, POINTER_UP_EVENTS, onPointerUp);
              dragging = false;
            }

            function onClick(e) {
              if (!disabled && clickPrevented) {
                prevent(e, true);
              }
            }

            function save(e) {
              prevBaseEvent = baseEvent;
              baseEvent = e;
              basePosition = getPosition();
            }

            function move(e) {
              var velocity = computeVelocity(e);
              var destination = computeDestination(velocity);
              var rewind = options.rewind && options.rewindByDrag;
              reduce(false);

              if (isFree) {
                Controller.scroll(destination, 0, options.snap);
              } else if (Splide2.is(FADE)) {
                Controller.go(
                  orient(sign(velocity)) < 0
                    ? rewind
                      ? "<"
                      : "-"
                    : rewind
                    ? ">"
                    : "+"
                );
              } else if (Splide2.is(SLIDE) && exceeded && rewind) {
                Controller.go(exceededLimit(true) ? ">" : "<");
              } else {
                Controller.go(Controller.toDest(destination), true);
              }

              reduce(true);
            }

            function shouldStart(e) {
              var thresholds = options.dragMinThreshold;
              var isObj = isObject(thresholds);
              var mouse = (isObj && thresholds.mouse) || 0;
              var touch = (isObj ? thresholds.touch : +thresholds) || 10;
              return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
            }

            function isSliderDirection(e) {
              return abs(diffCoord(e)) > abs(diffCoord(e, true));
            }

            function computeVelocity(e) {
              if (Splide2.is(LOOP) || !exceeded) {
                var time = diffTime(e);

                if (time && time < LOG_INTERVAL) {
                  return diffCoord(e) / time;
                }
              }

              return 0;
            }

            function computeDestination(velocity) {
              return (
                getPosition() +
                sign(velocity) *
                  min(
                    abs(velocity) * (options.flickPower || 600),
                    isFree
                      ? Infinity
                      : Components2.Layout.listSize() *
                          (options.flickMaxPages || 1)
                  )
              );
            }

            function diffCoord(e, orthogonal) {
              return (
                coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal)
              );
            }

            function diffTime(e) {
              return timeOf(e) - timeOf(getBaseEvent(e));
            }

            function getBaseEvent(e) {
              return (baseEvent === e && prevBaseEvent) || baseEvent;
            }

            function coordOf(e, orthogonal) {
              return (
                isTouchEvent(e) ? e.changedTouches[0] : e
              )["page" + resolve(orthogonal ? "Y" : "X")];
            }

            function constrain(diff) {
              return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
            }

            function isDraggable(target2) {
              var noDrag = options.noDrag;
              return (
                !matches(
                  target2,
                  "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW
                ) &&
                (!noDrag || !matches(target2, noDrag))
              );
            }

            function isTouchEvent(e) {
              return (
                typeof TouchEvent !== "undefined" && e instanceof TouchEvent
              );
            }

            function isDragging() {
              return dragging;
            }

            function disable(value) {
              disabled = value;
            }

            return {
              mount: mount,
              disable: disable,
              isDragging: isDragging,
            };
          }

          var NORMALIZATION_MAP = {
            Spacebar: " ",
            Right: ARROW_RIGHT,
            Left: ARROW_LEFT,
            Up: ARROW_UP,
            Down: ARROW_DOWN,
          };

          function normalizeKey(key) {
            key = isString(key) ? key : key.key;
            return NORMALIZATION_MAP[key] || key;
          }

          var KEYBOARD_EVENT = "keydown";

          function Keyboard(Splide2, Components2, options) {
            var _EventInterface10 = EventInterface(Splide2),
              on = _EventInterface10.on,
              bind = _EventInterface10.bind,
              unbind = _EventInterface10.unbind;

            var root = Splide2.root;
            var resolve = Components2.Direction.resolve;
            var target;
            var disabled;

            function mount() {
              init();
              on(EVENT_UPDATED, destroy);
              on(EVENT_UPDATED, init);
              on(EVENT_MOVE, onMove);
            }

            function init() {
              var keyboard = options.keyboard;

              if (keyboard) {
                target = keyboard === "global" ? window : root;
                bind(target, KEYBOARD_EVENT, onKeydown);
              }
            }

            function destroy() {
              unbind(target, KEYBOARD_EVENT);
            }

            function disable(value) {
              disabled = value;
            }

            function onMove() {
              var _disabled = disabled;
              disabled = true;
              nextTick(function () {
                disabled = _disabled;
              });
            }

            function onKeydown(e) {
              if (!disabled) {
                var key = normalizeKey(e);

                if (key === resolve(ARROW_LEFT)) {
                  Splide2.go("<");
                } else if (key === resolve(ARROW_RIGHT)) {
                  Splide2.go(">");
                }
              }
            }

            return {
              mount: mount,
              destroy: destroy,
              disable: disable,
            };
          }

          var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
          var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
          var IMAGE_SELECTOR =
            "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

          function LazyLoad(Splide2, Components2, options) {
            var _EventInterface11 = EventInterface(Splide2),
              on = _EventInterface11.on,
              off = _EventInterface11.off,
              bind = _EventInterface11.bind,
              emit = _EventInterface11.emit;

            var isSequential = options.lazyLoad === "sequential";
            var events = [EVENT_MOVED, EVENT_SCROLLED];
            var entries = [];

            function mount() {
              if (options.lazyLoad) {
                init();
                on(EVENT_REFRESH, init);
              }
            }

            function init() {
              empty(entries);
              register();

              if (isSequential) {
                loadNext();
              } else {
                off(events);
                on(events, check);
                check();
              }
            }

            function register() {
              Components2.Slides.forEach(function (Slide) {
                queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
                  var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
                  var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

                  if (src !== img.src || srcset !== img.srcset) {
                    var className = options.classes.spinner;
                    var parent = img.parentElement;
                    var spinner =
                      child(parent, "." + className) ||
                      create("span", className, parent);
                    entries.push([img, Slide, spinner]);
                    img.src || display(img, "none");
                  }
                });
              });
            }

            function check() {
              entries = entries.filter(function (data) {
                var distance =
                  options.perPage * ((options.preloadPages || 1) + 1) - 1;
                return data[1].isWithin(Splide2.index, distance)
                  ? load(data)
                  : true;
              });
              entries.length || off(events);
            }

            function load(data) {
              var img = data[0];
              addClass(data[1].slide, CLASS_LOADING);
              bind(img, "load error", apply(onLoad, data));
              setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
              setAttribute(
                img,
                "srcset",
                getAttribute(img, SRCSET_DATA_ATTRIBUTE)
              );
              removeAttribute(img, SRC_DATA_ATTRIBUTE);
              removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
            }

            function onLoad(data, e) {
              var img = data[0],
                Slide = data[1];
              removeClass(Slide.slide, CLASS_LOADING);

              if (e.type !== "error") {
                remove(data[2]);
                display(img, "");
                emit(EVENT_LAZYLOAD_LOADED, img, Slide);
                emit(EVENT_RESIZE);
              }

              isSequential && loadNext();
            }

            function loadNext() {
              entries.length && load(entries.shift());
            }

            return {
              mount: mount,
              destroy: apply(empty, entries),
              check: check,
            };
          }

          function Pagination(Splide2, Components2, options) {
            var event = EventInterface(Splide2);
            var on = event.on,
              emit = event.emit,
              bind = event.bind;
            var Slides = Components2.Slides,
              Elements = Components2.Elements,
              Controller = Components2.Controller;
            var hasFocus = Controller.hasFocus,
              getIndex = Controller.getIndex,
              go = Controller.go;
            var resolve = Components2.Direction.resolve;
            var placeholder = Elements.pagination;
            var items = [];
            var list;
            var paginationClasses;

            function mount() {
              destroy();
              on(
                [EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED],
                mount
              );
              var enabled = options.pagination;
              placeholder && display(placeholder, enabled ? "" : "none");

              if (enabled) {
                on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
                createPagination();
                update();
                emit(
                  EVENT_PAGINATION_MOUNTED,
                  {
                    list: list,
                    items: items,
                  },
                  getAt(Splide2.index)
                );
              }
            }

            function destroy() {
              if (list) {
                remove(placeholder ? slice(list.children) : list);
                removeClass(list, paginationClasses);
                empty(items);
                list = null;
              }

              event.destroy();
            }

            function createPagination() {
              var length = Splide2.length;
              var classes = options.classes,
                i18n = options.i18n,
                perPage = options.perPage;
              var max = hasFocus()
                ? Controller.getEnd() + 1
                : ceil(length / perPage);
              list =
                placeholder ||
                create("ul", classes.pagination, Elements.track.parentElement);
              addClass(
                list,
                (paginationClasses = CLASS_PAGINATION + "--" + getDirection())
              );
              setAttribute(list, ROLE, "tablist");
              setAttribute(list, ARIA_LABEL, i18n.select);
              setAttribute(
                list,
                ARIA_ORIENTATION,
                getDirection() === TTB ? "vertical" : ""
              );

              for (var i = 0; i < max; i++) {
                var li = create("li", null, list);
                var button = create(
                  "button",
                  {
                    class: classes.page,
                    type: "button",
                  },
                  li
                );
                var controls = Slides.getIn(i).map(function (Slide) {
                  return Slide.slide.id;
                });
                var text =
                  !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
                bind(button, "click", apply(onClick, i));

                if (options.paginationKeyboard) {
                  bind(button, "keydown", apply(onKeydown, i));
                }

                setAttribute(li, ROLE, "presentation");
                setAttribute(button, ROLE, "tab");
                setAttribute(button, ARIA_CONTROLS, controls.join(" "));
                setAttribute(button, ARIA_LABEL, format(text, i + 1));
                setAttribute(button, TAB_INDEX, -1);
                items.push({
                  li: li,
                  button: button,
                  page: i,
                });
              }
            }

            function onClick(page) {
              go(">" + page, true);
            }

            function onKeydown(page, e) {
              var length = items.length;
              var key = normalizeKey(e);
              var dir = getDirection();
              var nextPage = -1;

              if (key === resolve(ARROW_RIGHT, false, dir)) {
                nextPage = ++page % length;
              } else if (key === resolve(ARROW_LEFT, false, dir)) {
                nextPage = (--page + length) % length;
              } else if (key === "Home") {
                nextPage = 0;
              } else if (key === "End") {
                nextPage = length - 1;
              }

              var item = items[nextPage];

              if (item) {
                focus(item.button);
                go(">" + nextPage);
                prevent(e, true);
              }
            }

            function getDirection() {
              return options.paginationDirection || options.direction;
            }

            function getAt(index) {
              return items[Controller.toPage(index)];
            }

            function update() {
              var prev = getAt(getIndex(true));
              var curr = getAt(getIndex());

              if (prev) {
                var button = prev.button;
                removeClass(button, CLASS_ACTIVE);
                removeAttribute(button, ARIA_SELECTED);
                setAttribute(button, TAB_INDEX, -1);
              }

              if (curr) {
                var _button = curr.button;
                addClass(_button, CLASS_ACTIVE);
                setAttribute(_button, ARIA_SELECTED, true);
                setAttribute(_button, TAB_INDEX, "");
              }

              emit(
                EVENT_PAGINATION_UPDATED,
                {
                  list: list,
                  items: items,
                },
                prev,
                curr
              );
            }

            return {
              items: items,
              mount: mount,
              destroy: destroy,
              getAt: getAt,
              update: update,
            };
          }

          var TRIGGER_KEYS = [" ", "Enter"];

          function Sync(Splide2, Components2, options) {
            var isNavigation = options.isNavigation,
              slideFocus = options.slideFocus;
            var events = [];

            function mount() {
              Splide2.splides.forEach(function (target) {
                if (!target.isParent) {
                  sync(Splide2, target.splide);
                  sync(target.splide, Splide2);
                }
              });

              if (isNavigation) {
                navigate();
              }
            }

            function destroy() {
              events.forEach(function (event) {
                event.destroy();
              });
              empty(events);
            }

            function remount() {
              destroy();
              mount();
            }

            function sync(splide, target) {
              var event = EventInterface(splide);
              event.on(EVENT_MOVE, function (index, prev, dest) {
                target.go(target.is(LOOP) ? dest : index);
              });
              events.push(event);
            }

            function navigate() {
              var event = EventInterface(Splide2);
              var on = event.on;
              on(EVENT_CLICK, onClick);
              on(EVENT_SLIDE_KEYDOWN, onKeydown);
              on([EVENT_MOUNTED, EVENT_UPDATED], update);
              events.push(event);
              event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
            }

            function update() {
              setAttribute(
                Components2.Elements.list,
                ARIA_ORIENTATION,
                options.direction === TTB ? "vertical" : ""
              );
            }

            function onClick(Slide) {
              Splide2.go(Slide.index);
            }

            function onKeydown(Slide, e) {
              if (includes(TRIGGER_KEYS, normalizeKey(e))) {
                onClick(Slide);
                prevent(e);
              }
            }

            return {
              setup: apply(
                Components2.Media.set,
                {
                  slideFocus: isUndefined(slideFocus)
                    ? isNavigation
                    : slideFocus,
                },
                true
              ),
              mount: mount,
              destroy: destroy,
              remount: remount,
            };
          }

          function Wheel(Splide2, Components2, options) {
            var _EventInterface12 = EventInterface(Splide2),
              bind = _EventInterface12.bind;

            var lastTime = 0;

            function mount() {
              if (options.wheel) {
                bind(
                  Components2.Elements.track,
                  "wheel",
                  onWheel,
                  SCROLL_LISTENER_OPTIONS
                );
              }
            }

            function onWheel(e) {
              if (e.cancelable) {
                var deltaY = e.deltaY;
                var backwards = deltaY < 0;
                var timeStamp = timeOf(e);

                var _min = options.wheelMinThreshold || 0;

                var sleep = options.wheelSleep || 0;

                if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
                  Splide2.go(backwards ? "<" : ">");
                  lastTime = timeStamp;
                }

                shouldPrevent(backwards) && prevent(e);
              }
            }

            function shouldPrevent(backwards) {
              return (
                !options.releaseWheel ||
                Splide2.state.is(MOVING) ||
                Components2.Controller.getAdjacent(backwards) !== -1
              );
            }

            return {
              mount: mount,
            };
          }

          var SR_REMOVAL_DELAY = 90;

          function Live(Splide2, Components2, options) {
            var _EventInterface13 = EventInterface(Splide2),
              on = _EventInterface13.on;

            var track = Components2.Elements.track;
            var enabled = options.live && !options.isNavigation;
            var sr = create("span", CLASS_SR);
            var interval = RequestInterval(
              SR_REMOVAL_DELAY,
              apply(toggle, false)
            );

            function mount() {
              if (enabled) {
                disable(!Components2.Autoplay.isPaused());
                setAttribute(track, ARIA_ATOMIC, true);
                sr.textContent = "\u2026";
                on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
                on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
                on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
              }
            }

            function toggle(active) {
              setAttribute(track, ARIA_BUSY, active);

              if (active) {
                append(track, sr);
                interval.start();
              } else {
                remove(sr);
                interval.cancel();
              }
            }

            function destroy() {
              removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
              remove(sr);
            }

            function disable(disabled) {
              if (enabled) {
                setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
              }
            }

            return {
              mount: mount,
              disable: disable,
              destroy: destroy,
            };
          }

          var ComponentConstructors = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            Media: Media,
            Direction: Direction,
            Elements: Elements,
            Slides: Slides,
            Layout: Layout,
            Clones: Clones,
            Move: Move,
            Controller: Controller,
            Arrows: Arrows,
            Autoplay: Autoplay,
            Cover: Cover,
            Scroll: Scroll,
            Drag: Drag,
            Keyboard: Keyboard,
            LazyLoad: LazyLoad,
            Pagination: Pagination,
            Sync: Sync,
            Wheel: Wheel,
            Live: Live,
          });
          var I18N = {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
            carousel: "carousel",
            slide: "slide",
            select: "Select a slide to show",
            slideLabel: "%s of %s",
          };
          var DEFAULTS = {
            type: "slide",
            role: "region",
            speed: 400,
            perPage: 1,
            cloneStatus: true,
            arrows: true,
            pagination: true,
            paginationKeyboard: true,
            interval: 5e3,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            drag: true,
            direction: "ltr",
            trimSpace: true,
            focusableNodes: "a, button, textarea, input, select, iframe",
            live: true,
            classes: CLASSES,
            i18n: I18N,
            reducedMotion: {
              speed: 0,
              rewindSpeed: 0,
              autoplay: "pause",
            },
          };

          function Fade(Splide2, Components2, options) {
            var Slides = Components2.Slides;

            function mount() {
              EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
            }

            function init() {
              Slides.forEach(function (Slide) {
                Slide.style(
                  "transform",
                  "translateX(-" + 100 * Slide.index + "%)"
                );
              });
            }

            function start(index, done) {
              Slides.style(
                "transition",
                "opacity " + options.speed + "ms " + options.easing
              );
              nextTick(done);
            }

            return {
              mount: mount,
              start: start,
              cancel: noop,
            };
          }

          function Slide(Splide2, Components2, options) {
            var Move = Components2.Move,
              Controller = Components2.Controller,
              Scroll = Components2.Scroll;
            var list = Components2.Elements.list;
            var transition = apply(style, list, "transition");
            var endCallback;

            function mount() {
              EventInterface(Splide2).bind(list, "transitionend", function (e) {
                if (e.target === list && endCallback) {
                  cancel();
                  endCallback();
                }
              });
            }

            function start(index, done) {
              var destination = Move.toPosition(index, true);
              var position = Move.getPosition();
              var speed = getSpeed(index);

              if (abs(destination - position) >= 1 && speed >= 1) {
                if (options.useScroll) {
                  Scroll.scroll(destination, speed, false, done);
                } else {
                  transition("transform " + speed + "ms " + options.easing);
                  Move.translate(destination, true);
                  endCallback = done;
                }
              } else {
                Move.jump(index);
                done();
              }
            }

            function cancel() {
              transition("");
              Scroll.cancel();
            }

            function getSpeed(index) {
              var rewindSpeed = options.rewindSpeed;

              if (Splide2.is(SLIDE) && rewindSpeed) {
                var prev = Controller.getIndex(true);
                var end = Controller.getEnd();

                if (
                  (prev === 0 && index >= end) ||
                  (prev >= end && index === 0)
                ) {
                  return rewindSpeed;
                }
              }

              return options.speed;
            }

            return {
              mount: mount,
              start: start,
              cancel: cancel,
            };
          }

          var _Splide = /*#__PURE__*/ (function () {
            function _Splide(target, options) {
              this.event = EventInterface();
              this.Components = {};
              this.state = State(CREATED);
              this.splides = [];
              this._o = {};
              this._E = {};
              var root = isString(target) ? query(document, target) : target;
              assert(root, root + " is invalid.");
              this.root = root;
              options = merge(
                {
                  label: getAttribute(root, ARIA_LABEL) || "",
                  labelledby: getAttribute(root, ARIA_LABELLEDBY) || "",
                },
                DEFAULTS,
                _Splide.defaults,
                options || {}
              );

              try {
                merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
              } catch (e) {
                assert(false, "Invalid JSON");
              }

              this._o = Object.create(merge({}, options));
            }

            var _proto = _Splide.prototype;

            _proto.mount = function mount(Extensions, Transition) {
              var _this = this;

              var state = this.state,
                Components2 = this.Components;
              assert(state.is([CREATED, DESTROYED]), "Already mounted!");
              state.set(CREATED);
              this._C = Components2;
              this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
              this._E = Extensions || this._E;
              var Constructors = assign({}, ComponentConstructors, this._E, {
                Transition: this._T,
              });
              forOwn(Constructors, function (Component, key) {
                var component = Component(_this, Components2, _this._o);
                Components2[key] = component;
                component.setup && component.setup();
              });
              forOwn(Components2, function (component) {
                component.mount && component.mount();
              });
              this.emit(EVENT_MOUNTED);
              addClass(this.root, CLASS_INITIALIZED);
              state.set(IDLE);
              this.emit(EVENT_READY);
              return this;
            };

            _proto.sync = function sync(splide) {
              this.splides.push({
                splide: splide,
              });
              splide.splides.push({
                splide: this,
                isParent: true,
              });

              if (this.state.is(IDLE)) {
                this._C.Sync.remount();

                splide.Components.Sync.remount();
              }

              return this;
            };

            _proto.go = function go(control) {
              this._C.Controller.go(control);

              return this;
            };

            _proto.on = function on(events, callback) {
              this.event.on(events, callback);
              return this;
            };

            _proto.off = function off(events) {
              this.event.off(events);
              return this;
            };

            _proto.emit = function emit(event) {
              var _this$event;

              (_this$event = this.event).emit.apply(
                _this$event,
                [event].concat(slice(arguments, 1))
              );

              return this;
            };

            _proto.add = function add(slides, index) {
              this._C.Slides.add(slides, index);

              return this;
            };

            _proto.remove = function remove(matcher) {
              this._C.Slides.remove(matcher);

              return this;
            };

            _proto.is = function is(type) {
              return this._o.type === type;
            };

            _proto.refresh = function refresh() {
              this.emit(EVENT_REFRESH);
              return this;
            };

            _proto.destroy = function destroy(completely) {
              if (completely === void 0) {
                completely = true;
              }

              var event = this.event,
                state = this.state;

              if (state.is(CREATED)) {
                EventInterface(this).on(
                  EVENT_READY,
                  this.destroy.bind(this, completely)
                );
              } else {
                forOwn(
                  this._C,
                  function (component) {
                    component.destroy && component.destroy(completely);
                  },
                  true
                );
                event.emit(EVENT_DESTROY);
                event.destroy();
                completely && empty(this.splides);
                state.set(DESTROYED);
              }

              return this;
            };

            _createClass(_Splide, [
              {
                key: "options",
                get: function get() {
                  return this._o;
                },
                set: function set(options) {
                  this._C.Media.set(options, true, true);
                },
              },
              {
                key: "length",
                get: function get() {
                  return this._C.Slides.getLength(true);
                },
              },
              {
                key: "index",
                get: function get() {
                  return this._C.Controller.getIndex();
                },
              },
            ]);

            return _Splide;
          })();

          var Splide = _Splide;
          Splide.defaults = {};
          Splide.STATES = STATES;
          return Splide;
        });
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        (function (global) {
          (function () {
            /*
 UAParser.js v0.7.18
 Lightweight JavaScript-based User-Agent string parser
 https://github.com/faisalman/ua-parser-js

 Copyright ? 2012-2016 Faisal Salman <fyzlman@gmail.com>
 Dual licensed under GPLv2 or MIT
*/
            var $jscomp = $jscomp || {};
            $jscomp.scope = {};
            $jscomp.ASSUME_ES5 = !1;
            $jscomp.ASSUME_NO_NATIVE_MAP = !1;
            $jscomp.ASSUME_NO_NATIVE_SET = !1;
            $jscomp.defineProperty =
              $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
                ? Object.defineProperty
                : function (a, d, b) {
                    a != Array.prototype &&
                      a != Object.prototype &&
                      (a[d] = b.value);
                  };
            $jscomp.getGlobal = function (a) {
              return "undefined" != typeof window && window === a
                ? a
                : "undefined" != typeof global && null != global
                ? global
                : a;
            };
            $jscomp.global = $jscomp.getGlobal(this);
            $jscomp.polyfill = function (a, d, b, e) {
              if (d) {
                b = $jscomp.global;
                a = a.split(".");
                for (e = 0; e < a.length - 1; e++) {
                  var c = a[e];
                  c in b || (b[c] = {});
                  b = b[c];
                }
                a = a[a.length - 1];
                e = b[a];
                d = d(e);
                d != e &&
                  null != d &&
                  $jscomp.defineProperty(b, a, {
                    configurable: !0,
                    writable: !0,
                    value: d,
                  });
              }
            };
            $jscomp.polyfill(
              "Object.getOwnPropertySymbols",
              function (a) {
                return a
                  ? a
                  : function () {
                      return [];
                    };
              },
              "es6",
              "es5"
            );
            $jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
            $jscomp.initSymbol = function () {
              $jscomp.initSymbol = function () {};
              $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
            };
            $jscomp.Symbol = (function () {
              var a = 0;
              return function (d) {
                return $jscomp.SYMBOL_PREFIX + (d || "") + a++;
              };
            })();
            $jscomp.initSymbolIterator = function () {
              $jscomp.initSymbol();
              var a = $jscomp.global.Symbol.iterator;
              a ||
                (a = $jscomp.global.Symbol.iterator =
                  $jscomp.global.Symbol("iterator"));
              "function" != typeof Array.prototype[a] &&
                $jscomp.defineProperty(Array.prototype, a, {
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return $jscomp.arrayIterator(this);
                  },
                });
              $jscomp.initSymbolIterator = function () {};
            };
            $jscomp.arrayIterator = function (a) {
              var d = 0;
              return $jscomp.iteratorPrototype(function () {
                return d < a.length
                  ? { done: !1, value: a[d++] }
                  : { done: !0 };
              });
            };
            $jscomp.iteratorPrototype = function (a) {
              $jscomp.initSymbolIterator();
              a = { next: a };
              a[$jscomp.global.Symbol.iterator] = function () {
                return this;
              };
              return a;
            };
            $jscomp.iteratorFromArray = function (a, d) {
              $jscomp.initSymbolIterator();
              a instanceof String && (a += "");
              var b = 0,
                e = {
                  next: function () {
                    if (b < a.length) {
                      var c = b++;
                      return { value: d(c, a[c]), done: !1 };
                    }
                    e.next = function () {
                      return { done: !0, value: void 0 };
                    };
                    return e.next();
                  },
                };
              e[Symbol.iterator] = function () {
                return e;
              };
              return e;
            };
            $jscomp.polyfill(
              "Array.prototype.keys",
              function (a) {
                return a
                  ? a
                  : function () {
                      return $jscomp.iteratorFromArray(this, function (a) {
                        return a;
                      });
                    };
              },
              "es6",
              "es3"
            );
            $jscomp.owns = function (a, d) {
              return Object.prototype.hasOwnProperty.call(a, d);
            };
            $jscomp.assign =
              "function" == typeof Object.assign
                ? Object.assign
                : function (a, d) {
                    for (var b = 1; b < arguments.length; b++) {
                      var e = arguments[b];
                      if (e)
                        for (var c in e) $jscomp.owns(e, c) && (a[c] = e[c]);
                    }
                    return a;
                  };
            $jscomp.polyfill(
              "Object.assign",
              function (a) {
                return a || $jscomp.assign;
              },
              "es6",
              "es3"
            );
            (function (a) {
              "object" === typeof exports && "undefined" !== typeof module
                ? (module.exports = a())
                : "function" === typeof define && define.amd
                ? define([], a)
                : (("undefined" !== typeof window
                    ? window
                    : "undefined" !== typeof global
                    ? global
                    : "undefined" !== typeof self
                    ? self
                    : this
                  ).SmartBanner = a());
            })(function () {
              return (function () {
                function a(d, b, e) {
                  function c(f, k) {
                    if (!b[f]) {
                      if (!d[f]) {
                        var r = "function" == typeof require && require;
                        if (!k && r) return r(f, !0);
                        if (m) return m(f, !0);
                        k = Error("Cannot find module '" + f + "'");
                        throw ((k.code = "MODULE_NOT_FOUND"), k);
                      }
                      k = b[f] = { exports: {} };
                      d[f][0].call(
                        k.exports,
                        function (a) {
                          return c(d[f][1][a] || a);
                        },
                        k,
                        k.exports,
                        a,
                        d,
                        b,
                        e
                      );
                    }
                    return b[f].exports;
                  }
                  for (
                    var m = "function" == typeof require && require, f = 0;
                    f < e.length;
                    f++
                  )
                    c(e[f]);
                  return c;
                }
                return a;
              })()(
                {
                  1: [
                    function (a, d, b) {
                      var e = a("object-assign"),
                        c = a("component-query"),
                        m = a("get-doc"),
                        f = a("cookie-cutter"),
                        n = a("ua-parser-js"),
                        k =
                          (
                            navigator.language ||
                            navigator.userLanguage ||
                            navigator.browserLanguage
                          ).slice(-2) || "us",
                        r = m && m.documentElement,
                        g = {
                          ios: {
                            appMeta: "apple-itunes-app",
                            iconRels: [
                              "apple-touch-icon-precomposed",
                              "apple-touch-icon",
                            ],
                            getStoreLink: function () {
                              return (
                                "https://itunes.apple.com/" +
                                this.options.appStoreLanguage +
                                "/app/id" +
                                this.appId +
                                "?mt=8"
                              );
                            },
                          },
                          android: {
                            appMeta: "google-play-app",
                            iconRels: [
                              "android-touch-icon",
                              "apple-touch-icon-precomposed",
                              "apple-touch-icon",
                            ],
                            getStoreLink: function () {
                              return (
                                "http://play.google.com/store/apps/details?id=" +
                                this.appId
                              );
                            },
                          },
                          windows: {
                            appMeta: "msApplication-ID",
                            iconRels: [
                              "windows-touch-icon",
                              "apple-touch-icon-precomposed",
                              "apple-touch-icon",
                            ],
                            getStoreLink: function () {
                              return (
                                "http://www.windowsphone.com/s?appid=" +
                                this.appId
                              );
                            },
                          },
                        };
                      a = function (a) {
                        var c = n(navigator.userAgent);
                        this.options = e(
                          {},
                          {
                            daysHidden: 15,
                            daysReminder: 90,
                            appStoreLanguage: k,
                            button: "OPEN",
                            store: {
                              ios: "On the App Store",
                              android: "In Google Play",
                              windows: "In the Windows Store",
                            },
                            price: {
                              ios: "FREE",
                              android: "FREE",
                              windows: "FREE",
                            },
                            theme: "",
                            icon: "",
                            force: "",
                          },
                          a || {}
                        );
                        this.options.force
                          ? (this.type = this.options.force)
                          : "Windows Phone" === c.os.name ||
                            "Windows Mobile" === c.os.name
                          ? (this.type = "windows")
                          : "iOS" === c.os.name
                          ? (this.type = "ios")
                          : "Android" === c.os.name && (this.type = "android");
                        if (this.type && this.options.store[this.type]) {
                          this.appMeta = g[this.type].appMeta;
                          this.parseAppId();
                          a =
                            "ios" === this.type &&
                            "Mobile Safari" === c.browser.name &&
                            6 <= parseInt(c.os.version, 10);
                          var l = navigator.standalone,
                            b = f.get(this.appId + "-smartbanner-closed"),
                            d = f.get(this.appId + "-smartbanner-installed");
                          a ||
                            l ||
                            b ||
                            d ||
                            (e(this, g[this.type]),
                            !this.appId &&
                              "IOS" === c.os.name &&
                              "Safari" === c.browser.name) ||
                            (this.create(), this.show());
                        }
                      };
                      a.prototype = {
                        constructor: a,
                        create: function () {
                          var a = this.getStoreLink(),
                            e =
                              this.options.price[this.type] +
                              " - " +
                              this.options.store[this.type];
                          if (this.options.icon) var f = this.options.icon;
                          else
                            for (var b = 0; b < this.iconRels.length; b++) {
                              var d = c('link[rel="' + this.iconRels[b] + '"]');
                              if (d) {
                                f = d.getAttribute("href");
                                break;
                              }
                            }
                          var t = m.createElement("div");
                          t.className =
                            "smartbanner smartbanner-" +
                            (this.options.theme || this.type);
                          t.innerHTML =
                            '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url(' +
                            f +
                            ')"></span><div class="smartbanner-info"><div class="smartbanner-title">' +
                            this.options.title +
                            "</div><div>" +
                            this.options.author +
                            "</div><span>" +
                            e +
                            '</span></div><a href="' +
                            a +
                            '" class="smartbanner-button"><span class="smartbanner-button-text">' +
                            this.options.button +
                            "</span></a></div>";
                          m.body
                            ? m.body.appendChild(t)
                            : m &&
                              m.addEventListener(
                                "DOMContentLoaded",
                                function () {
                                  m.body.appendChild(t);
                                }
                              );
                          c(".smartbanner-button", t).addEventListener(
                            "click",
                            this.install.bind(this),
                            !1
                          );
                          c(".smartbanner-close", t).addEventListener(
                            "click",
                            this.close.bind(this),
                            !1
                          );
                        },
                        hide: function () {
                          r.classList.remove("smartbanner-show");
                          if ("function" === typeof this.options.close)
                            return this.options.close();
                        },
                        show: function () {
                          r.classList.add("smartbanner-show");
                          if ("function" === typeof this.options.show)
                            return this.options.show();
                        },
                        close: function () {
                          this.hide();
                          f.set(this.appId + "-smartbanner-closed", "true", {
                            path: "/",
                            expires: new Date(
                              Number(new Date()) +
                                864e5 * this.options.daysHidden
                            ),
                          });
                          if ("function" === typeof this.options.close)
                            return this.options.close();
                        },
                        install: function () {
                          this.hide();
                          f.set(this.appId + "-smartbanner-installed", "true", {
                            path: "/",
                            expires: new Date(
                              Number(new Date()) +
                                864e5 * this.options.daysReminder
                            ),
                          });
                          if ("function" === typeof this.options.close)
                            return this.options.close();
                        },
                        parseAppId: function () {
                          var a = c('meta[name="' + this.appMeta + '"]');
                          if (a)
                            return (this.appId =
                              "windows" === this.type
                                ? a.getAttribute("content")
                                : /app-id=([^\s,]+)/.exec(
                                    a.getAttribute("content")
                                  )[1]);
                        },
                      };
                      d.exports = a;
                    },
                    {
                      "component-query": 2,
                      "cookie-cutter": 3,
                      "get-doc": 4,
                      "object-assign": 6,
                      "ua-parser-js": 7,
                    },
                  ],
                  2: [
                    function (a, d, b) {
                      function e(a, e) {
                        return e.querySelector(a);
                      }
                      b = d.exports = function (a, b) {
                        b = b || document;
                        return e(a, b);
                      };
                      b.all = function (a, e) {
                        e = e || document;
                        return e.querySelectorAll(a);
                      };
                      b.engine = function (a) {
                        if (!a.one) throw Error(".one callback required");
                        if (!a.all) throw Error(".all callback required");
                        e = a.one;
                        b.all = a.all;
                        return b;
                      };
                    },
                    {},
                  ],
                  3: [
                    function (a, d, b) {
                      b = d.exports = function (a) {
                        a || (a = {});
                        "string" === typeof a && (a = { cookie: a });
                        void 0 === a.cookie && (a.cookie = "");
                        return {
                          get: function (c) {
                            for (
                              var b = a.cookie.split(/;\s*/), f = 0;
                              f < b.length;
                              f++
                            ) {
                              var e = b[f].split("=");
                              if (unescape(e[0]) === c) return unescape(e[1]);
                            }
                          },
                          set: function (c, b, f) {
                            f || (f = {});
                            c = escape(c) + "=" + escape(b);
                            f.expires && (c += "; expires=" + f.expires);
                            f.path && (c += "; path=" + escape(f.path));
                            f.domain && (c += "; domain=" + escape(f.domain));
                            f.secure && (c += "; secure");
                            return (a.cookie = c);
                          },
                        };
                      };
                      "undefined" !== typeof document &&
                        ((a = b(document)), (b.get = a.get), (b.set = a.set));
                    },
                    {},
                  ],
                  4: [
                    function (a, d, b) {
                      a = a("has-dom");
                      d.exports = a() ? document : null;
                    },
                    { "has-dom": 5 },
                  ],
                  5: [
                    function (a, d, b) {
                      d.exports = function () {
                        return (
                          "undefined" !== typeof window &&
                          "undefined" !== typeof document &&
                          "function" === typeof document.createElement
                        );
                      };
                    },
                    {},
                  ],
                  6: [
                    function (a, d, b) {
                      var e = Object.getOwnPropertySymbols,
                        c = Object.prototype.hasOwnProperty,
                        m = Object.prototype.propertyIsEnumerable;
                      d.exports = (function () {
                        try {
                          if (!Object.assign) return !1;
                          var a = new String("abc");
                          a[5] = "de";
                          if ("5" === Object.getOwnPropertyNames(a)[0])
                            return !1;
                          var c = {};
                          for (a = 0; 10 > a; a++)
                            c["_" + String.fromCharCode(a)] = a;
                          if (
                            "0123456789" !==
                            Object.getOwnPropertyNames(c)
                              .map(function (a) {
                                return c[a];
                              })
                              .join("")
                          )
                            return !1;
                          var b = {};
                          "abcdefghijklmnopqrst"
                            .split("")
                            .forEach(function (a) {
                              b[a] = a;
                            });
                          return "abcdefghijklmnopqrst" !==
                            Object.keys(Object.assign({}, b)).join("")
                            ? !1
                            : !0;
                        } catch (r) {
                          return !1;
                        }
                      })()
                        ? Object.assign
                        : function (a, b) {
                            if (null === a || void 0 === a)
                              throw new TypeError(
                                "Object.assign cannot be called with null or undefined"
                              );
                            var d = Object(a);
                            for (var f, g = 1; g < arguments.length; g++) {
                              var p = Object(arguments[g]);
                              for (var n in p) c.call(p, n) && (d[n] = p[n]);
                              if (e) {
                                f = e(p);
                                for (var l = 0; l < f.length; l++)
                                  m.call(p, f[l]) && (d[f[l]] = p[f[l]]);
                              }
                            }
                            return d;
                          };
                    },
                    {},
                  ],
                  7: [
                    function (a, d, b) {
                      (function (a, c) {
                        var e = {
                            extend: function (a, c) {
                              var b = {},
                                e;
                              for (e in a)
                                b[e] =
                                  c[e] && 0 === c[e].length % 2
                                    ? c[e].concat(a[e])
                                    : a[e];
                              return b;
                            },
                            has: function (a, c) {
                              return "string" === typeof a
                                ? -1 !==
                                    c.toLowerCase().indexOf(a.toLowerCase())
                                : !1;
                            },
                            lowerize: function (a) {
                              return a.toLowerCase();
                            },
                            major: function (a) {
                              return "string" === typeof a
                                ? a.replace(/[^\d\.]/g, "").split(".")[0]
                                : c;
                            },
                            trim: function (a) {
                              return a.replace(
                                /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                                ""
                              );
                            },
                          },
                          f = function (a, b) {
                            for (
                              var e = 0, d, f, l, h, g, q;
                              e < b.length && !g;

                            ) {
                              var k = b[e],
                                m = b[e + 1];
                              for (d = f = 0; d < k.length && !g; )
                                if ((g = k[d++].exec(a)))
                                  for (l = 0; l < m.length; l++)
                                    (q = g[++f]),
                                      (h = m[l]),
                                      "object" === typeof h && 0 < h.length
                                        ? 2 == h.length
                                          ? (this[h[0]] =
                                              "function" == typeof h[1]
                                                ? h[1].call(this, q)
                                                : h[1])
                                          : 3 == h.length
                                          ? (this[h[0]] =
                                              "function" !== typeof h[1] ||
                                              (h[1].exec && h[1].test)
                                                ? q
                                                  ? q.replace(h[1], h[2])
                                                  : c
                                                : q
                                                ? h[1].call(this, q, h[2])
                                                : c)
                                          : 4 == h.length &&
                                            (this[h[0]] = q
                                              ? h[3].call(
                                                  this,
                                                  q.replace(h[1], h[2])
                                                )
                                              : c)
                                        : (this[h] = q ? q : c);
                              e += 2;
                            }
                          },
                          n = function (a, b) {
                            for (var d in b)
                              if ("object" === typeof b[d] && 0 < b[d].length)
                                for (var f = 0; f < b[d].length; f++) {
                                  if (e.has(b[d][f], a))
                                    return "?" === d ? c : d;
                                }
                              else if (e.has(b[d], a)) return "?" === d ? c : d;
                            return a;
                          },
                          k = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM",
                          },
                          r = {
                            browser: [
                              [
                                /(opera\smini)\/([\w\.-]+)/i,
                                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                                /(opera).+version\/([\w\.]+)/i,
                                /(opera)[\/\s]+([\w\.]+)/i,
                              ],
                              ["name", "version"],
                              [/(opios)[\/\s]+([\w\.]+)/i],
                              [["name", "Opera Mini"], "version"],
                              [/\s(opr)\/([\w\.]+)/i],
                              [["name", "Opera"], "version"],
                              [
                                /(kindle)\/([\w\.]+)/i,
                                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                /(?:ms|\()(ie)\s([\w\.]+)/i,
                                /(rekonq)\/([\w\.]*)/i,
                                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
                              ],
                              ["name", "version"],
                              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                              [["name", "IE"], "version"],
                              [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                              [["name", "Edge"], "version"],
                              [/(yabrowser)\/([\w\.]+)/i],
                              [["name", "Yandex"], "version"],
                              [/(puffin)\/([\w\.]+)/i],
                              [["name", "Puffin"], "version"],
                              [
                                /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i,
                              ],
                              [["name", "UCBrowser"], "version"],
                              [/(comodo_dragon)\/([\w\.]+)/i],
                              [["name", /_/g, " "], "version"],
                              [/(micromessenger)\/([\w\.]+)/i],
                              [["name", "WeChat"], "version"],
                              [/(qqbrowserlite)\/([\w\.]+)/i],
                              ["name", "version"],
                              [/(QQ)\/([\d\.]+)/i],
                              ["name", "version"],
                              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                              ["name", "version"],
                              [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                              ["name", "version"],
                              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                              ["name", "version"],
                              [/(MetaSr)[\/\s]?([\w\.]+)/i],
                              ["name"],
                              [/(LBBROWSER)/i],
                              ["name"],
                              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                              ["version", ["name", "MIUI Browser"]],
                              [/;fbav\/([\w\.]+);/i],
                              ["version", ["name", "Facebook"]],
                              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                              ["version", ["name", "Chrome Headless"]],
                              [/\swv\).+(chrome)\/([\w\.]+)/i],
                              [["name", /(.+)/, "$1 WebView"], "version"],
                              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                              [
                                ["name", /(.+(?:g|us))(.+)/, "$1 $2"],
                                "version",
                              ],
                              [
                                /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i,
                              ],
                              ["version", ["name", "Android Browser"]],
                              [
                                /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                              ],
                              ["name", "version"],
                              [/(dolfin)\/([\w\.]+)/i],
                              [["name", "Dolphin"], "version"],
                              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                              [["name", "Chrome"], "version"],
                              [/(coast)\/([\w\.]+)/i],
                              [["name", "Opera Coast"], "version"],
                              [/fxios\/([\w\.-]+)/i],
                              ["version", ["name", "Firefox"]],
                              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                              ["version", ["name", "Mobile Safari"]],
                              [
                                /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
                              ],
                              ["version", "name"],
                              [
                                /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
                              ],
                              [["name", "GSA"], "version"],
                              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                              [
                                "name",
                                [
                                  "version",
                                  n,
                                  {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/",
                                  },
                                ],
                              ],
                              [
                                /(konqueror)\/([\w\.]+)/i,
                                /(webkit|khtml)\/([\w\.]+)/i,
                              ],
                              ["name", "version"],
                              [/(navigator|netscape)\/([\w\.-]+)/i],
                              [["name", "Netscape"], "version"],
                              [
                                /(swiftfox)/i,
                                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                                /(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i,
                                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                /(links)\s\(([\w\.]+)/i,
                                /(gobrowser)\/?([\w\.]*)/i,
                                /(ice\s?browser)\/v?([\w\._]+)/i,
                                /(mosaic)[\/\s]([\w\.]+)/i,
                              ],
                              ["name", "version"],
                            ],
                            cpu: [
                              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                              [["architecture", "amd64"]],
                              [/(ia32(?=;))/i],
                              [["architecture", e.lowerize]],
                              [/((?:i[346]|x)86)[;\)]/i],
                              [["architecture", "ia32"]],
                              [/windows\s(ce|mobile);\sppc;/i],
                              [["architecture", "arm"]],
                              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                              [["architecture", /ower/, "", e.lowerize]],
                              [/(sun4\w)[;\)]/i],
                              [["architecture", "sparc"]],
                              [
                                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
                              ],
                              [["architecture", e.lowerize]],
                            ],
                            device: [
                              [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                              ["model", "vendor", ["type", "tablet"]],
                              [/applecoremedia\/[\w\.]+ \((ipad)/],
                              [
                                "model",
                                ["vendor", "Apple"],
                                ["type", "tablet"],
                              ],
                              [/(apple\s{0,1}tv)/i],
                              [
                                ["model", "Apple TV"],
                                ["vendor", "Apple"],
                              ],
                              [
                                /(archos)\s(gamepad2?)/i,
                                /(hp).+(touchpad)/i,
                                /(hp).+(tablet)/i,
                                /(kindle)\/([\w\.]+)/i,
                                /\s(nook)[\w\s]+build\/(\w+)/i,
                                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                              ],
                              ["vendor", "model", ["type", "tablet"]],
                              [/(kf[A-z]+)\sbuild\/.+silk\//i],
                              [
                                "model",
                                ["vendor", "Amazon"],
                                ["type", "tablet"],
                              ],
                              [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                              [
                                ["model", n, { "Fire Phone": ["SD", "KF"] }],
                                ["vendor", "Amazon"],
                                ["type", "mobile"],
                              ],
                              [/\((ip[honed|\s\w*]+);.+(apple)/i],
                              ["model", "vendor", ["type", "mobile"]],
                              [/\((ip[honed|\s\w*]+);/i],
                              [
                                "model",
                                ["vendor", "Apple"],
                                ["type", "mobile"],
                              ],
                              [
                                /(blackberry)[\s-]?(\w+)/i,
                                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                /(hp)\s([\w\s]+\w)/i,
                                /(asus)-?(\w+)/i,
                              ],
                              ["vendor", "model", ["type", "mobile"]],
                              [/\(bb10;\s(\w+)/i],
                              [
                                "model",
                                ["vendor", "BlackBerry"],
                                ["type", "mobile"],
                              ],
                              [
                                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i,
                              ],
                              ["model", ["vendor", "Asus"], ["type", "tablet"]],
                              [
                                /(sony)\s(tablet\s[ps])\sbuild\//i,
                                /(sony)?(?:sgp.+)\sbuild\//i,
                              ],
                              [
                                ["vendor", "Sony"],
                                ["model", "Xperia Tablet"],
                                ["type", "tablet"],
                              ],
                              [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                              ["model", ["vendor", "Sony"], ["type", "mobile"]],
                              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                              ["vendor", "model", ["type", "console"]],
                              [/android.+;\s(shield)\sbuild/i],
                              [
                                "model",
                                ["vendor", "Nvidia"],
                                ["type", "console"],
                              ],
                              [/(playstation\s[34portablevi]+)/i],
                              [
                                "model",
                                ["vendor", "Sony"],
                                ["type", "console"],
                              ],
                              [/(sprint\s(\w+))/i],
                              [
                                ["vendor", n, { HTC: "APA", Sprint: "Sprint" }],
                                ["model", n, { "Evo Shift 4G": "7373KT" }],
                                ["type", "mobile"],
                              ],
                              [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                              ["vendor", "model", ["type", "tablet"]],
                              [
                                /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
                                /(zte)-(\w*)/i,
                                /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
                              ],
                              [
                                "vendor",
                                ["model", /_/g, " "],
                                ["type", "mobile"],
                              ],
                              [/(nexus\s9)/i],
                              ["model", ["vendor", "HTC"], ["type", "tablet"]],
                              [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                              [
                                "model",
                                ["vendor", "Huawei"],
                                ["type", "mobile"],
                              ],
                              [/(microsoft);\s(lumia[\s\w]+)/i],
                              ["vendor", "model", ["type", "mobile"]],
                              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                              [
                                "model",
                                ["vendor", "Microsoft"],
                                ["type", "console"],
                              ],
                              [/(kin\.[onetw]{3})/i],
                              [
                                ["model", /\./g, " "],
                                ["vendor", "Microsoft"],
                                ["type", "mobile"],
                              ],
                              [
                                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                                /mot[\s-]?(\w*)/i,
                                /(XT\d{3,4}) build\//i,
                                /(nexus\s6)/i,
                              ],
                              [
                                "model",
                                ["vendor", "Motorola"],
                                ["type", "mobile"],
                              ],
                              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                              [
                                "model",
                                ["vendor", "Motorola"],
                                ["type", "tablet"],
                              ],
                              [
                                /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i,
                              ],
                              [
                                ["vendor", e.trim],
                                ["model", e.trim],
                                ["type", "smarttv"],
                              ],
                              [/hbbtv.+maple;(\d+)/i],
                              [
                                ["model", /^/, "SmartTV"],
                                ["vendor", "Samsung"],
                                ["type", "smarttv"],
                              ],
                              [/\(dtv[\);].+(aquos)/i],
                              [
                                "model",
                                ["vendor", "Sharp"],
                                ["type", "smarttv"],
                              ],
                              [
                                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                                /((SM-T\w+))/i,
                              ],
                              [
                                ["vendor", "Samsung"],
                                "model",
                                ["type", "tablet"],
                              ],
                              [/smart-tv.+(samsung)/i],
                              ["vendor", ["type", "smarttv"], "model"],
                              [
                                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                                /sec-((sgh\w+))/i,
                              ],
                              [
                                ["vendor", "Samsung"],
                                "model",
                                ["type", "mobile"],
                              ],
                              [/sie-(\w*)/i],
                              [
                                "model",
                                ["vendor", "Siemens"],
                                ["type", "mobile"],
                              ],
                              [
                                /(maemo|nokia).*(n900|lumia\s\d+)/i,
                                /(nokia)[\s_-]?([\w-]*)/i,
                              ],
                              [
                                ["vendor", "Nokia"],
                                "model",
                                ["type", "mobile"],
                              ],
                              [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                              ["model", ["vendor", "Acer"], ["type", "tablet"]],
                              [/android.+([vl]k\-?\d{3})\s+build/i],
                              ["model", ["vendor", "LG"], ["type", "tablet"]],
                              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                              [["vendor", "LG"], "model", ["type", "tablet"]],
                              [/(lg) netcast\.tv/i],
                              ["vendor", "model", ["type", "smarttv"]],
                              [
                                /(nexus\s[45])/i,
                                /lg[e;\s\/-]+(\w*)/i,
                                /android.+lg(\-?[\d\w]+)\s+build/i,
                              ],
                              ["model", ["vendor", "LG"], ["type", "mobile"]],
                              [/android.+(ideatab[a-z0-9\-\s]+)/i],
                              [
                                "model",
                                ["vendor", "Lenovo"],
                                ["type", "tablet"],
                              ],
                              [/linux;.+((jolla));/i],
                              ["vendor", "model", ["type", "mobile"]],
                              [/((pebble))app\/[\d\.]+\s/i],
                              ["vendor", "model", ["type", "wearable"]],
                              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                              ["vendor", "model", ["type", "mobile"]],
                              [/crkey/i],
                              [
                                ["model", "Chromecast"],
                                ["vendor", "Google"],
                              ],
                              [/android.+;\s(glass)\s\d/i],
                              [
                                "model",
                                ["vendor", "Google"],
                                ["type", "wearable"],
                              ],
                              [/android.+;\s(pixel c)\s/i],
                              [
                                "model",
                                ["vendor", "Google"],
                                ["type", "tablet"],
                              ],
                              [/android.+;\s(pixel xl|pixel)\s/i],
                              [
                                "model",
                                ["vendor", "Google"],
                                ["type", "mobile"],
                              ],
                              [
                                /android.+;\s(\w+)\s+build\/hm\1/i,
                                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                                /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
                              ],
                              [
                                ["model", /_/g, " "],
                                ["vendor", "Xiaomi"],
                                ["type", "mobile"],
                              ],
                              [
                                /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i,
                              ],
                              [
                                ["model", /_/g, " "],
                                ["vendor", "Xiaomi"],
                                ["type", "tablet"],
                              ],
                              [/android.+;\s(m[1-5]\snote)\sbuild/i],
                              [
                                "model",
                                ["vendor", "Meizu"],
                                ["type", "tablet"],
                              ],
                              [
                                /android.+a000(1)\s+build/i,
                                /android.+oneplus\s(a\d{4})\s+build/i,
                              ],
                              [
                                "model",
                                ["vendor", "OnePlus"],
                                ["type", "mobile"],
                              ],
                              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                              ["model", ["vendor", "RCA"], ["type", "tablet"]],
                              [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                              ["model", ["vendor", "Dell"], ["type", "tablet"]],
                              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                              [
                                "model",
                                ["vendor", "Verizon"],
                                ["type", "tablet"],
                              ],
                              [
                                /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i,
                              ],
                              [
                                ["vendor", "Barnes & Noble"],
                                "model",
                                ["type", "tablet"],
                              ],
                              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                              [
                                "model",
                                ["vendor", "NuVision"],
                                ["type", "tablet"],
                              ],
                              [/android.+;\s(k88)\sbuild/i],
                              ["model", ["vendor", "ZTE"], ["type", "tablet"]],
                              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                              [
                                "model",
                                ["vendor", "Swiss"],
                                ["type", "mobile"],
                              ],
                              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                              [
                                "model",
                                ["vendor", "Swiss"],
                                ["type", "tablet"],
                              ],
                              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                              ["model", ["vendor", "Zeki"], ["type", "tablet"]],
                              [
                                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
                              ],
                              [
                                ["vendor", "Dragon Touch"],
                                "model",
                                ["type", "tablet"],
                              ],
                              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                              [
                                "model",
                                ["vendor", "Insignia"],
                                ["type", "tablet"],
                              ],
                              [
                                /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i,
                              ],
                              [
                                "model",
                                ["vendor", "NextBook"],
                                ["type", "tablet"],
                              ],
                              [
                                /android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
                              ],
                              [
                                ["vendor", "Voice"],
                                "model",
                                ["type", "mobile"],
                              ],
                              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                              [
                                ["vendor", "LvTel"],
                                "model",
                                ["type", "mobile"],
                              ],
                              [
                                /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i,
                              ],
                              [
                                "model",
                                ["vendor", "Envizen"],
                                ["type", "tablet"],
                              ],
                              [
                                /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i,
                              ],
                              ["vendor", "model", ["type", "tablet"]],
                              [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                              [
                                "model",
                                ["vendor", "MachSpeed"],
                                ["type", "tablet"],
                              ],
                              [
                                /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i,
                              ],
                              ["vendor", "model", ["type", "tablet"]],
                              [/android.+[;\/]\s*TU_(1491)\s+build/i],
                              [
                                "model",
                                ["vendor", "Rotor"],
                                ["type", "tablet"],
                              ],
                              [/android.+(KS(.+))\s+build/i],
                              [
                                "model",
                                ["vendor", "Amazon"],
                                ["type", "tablet"],
                              ],
                              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                              ["vendor", "model", ["type", "tablet"]],
                              [
                                /\s(tablet|tab)[;\/]/i,
                                /\s(mobile)(?:[;\/]|\ssafari)/i,
                              ],
                              [["type", e.lowerize], "vendor", "model"],
                              [/(android[\w\.\s\-]{0,9});.+build/i],
                              ["model", ["vendor", "Generic"]],
                            ],
                            engine: [
                              [/windows.+\sedge\/([\w\.]+)/i],
                              ["version", ["name", "EdgeHTML"]],
                              [
                                /(presto)\/([\w\.]+)/i,
                                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                                /(icab)[\/\s]([23]\.[\d\.]+)/i,
                              ],
                              ["name", "version"],
                              [/rv:([\w\.]{1,9}).+(gecko)/i],
                              ["version", "name"],
                            ],
                            os: [
                              [/microsoft\s(windows)\s(vista|xp)/i],
                              ["name", "version"],
                              [
                                /(windows)\snt\s6\.2;\s(arm)/i,
                                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
                              ],
                              ["name", ["version", n, k]],
                              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                              [
                                ["name", "Windows"],
                                ["version", n, k],
                              ],
                              [/\((bb)(10);/i],
                              [["name", "BlackBerry"], "version"],
                              [
                                /(blackberry)\w*\/?([\w\.]*)/i,
                                /(tizen)[\/\s]([\w\.]+)/i,
                                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
                                /linux;.+(sailfish);/i,
                              ],
                              ["name", "version"],
                              [
                                /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i,
                              ],
                              [["name", "Symbian"], "version"],
                              [/\((series40);/i],
                              ["name"],
                              [/mozilla.+\(mobile;.+gecko.+firefox/i],
                              [["name", "Firefox OS"], "version"],
                              [
                                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                                /(mint)[\/\s\(]?(\w*)/i,
                                /(mageia|vectorlinux)[;\s]/i,
                                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                /(hurd|linux)\s?([\w\.]*)/i,
                                /(gnu)\s?([\w\.]*)/i,
                              ],
                              ["name", "version"],
                              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                              [["name", "Chromium OS"], "version"],
                              [/(sunos)\s?([\w\.\d]*)/i],
                              [["name", "Solaris"], "version"],
                              [
                                /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i,
                              ],
                              ["name", "version"],
                              [/(haiku)\s(\w+)/i],
                              ["name", "version"],
                              [
                                /cfnetwork\/.+darwin/i,
                                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
                              ],
                              [
                                ["version", /_/g, "."],
                                ["name", "iOS"],
                              ],
                              [
                                /(mac\sos\sx)\s?([\w\s\.]*)/i,
                                /(macintosh|mac(?=_powerpc)\s)/i,
                              ],
                              [
                                ["name", "Mac OS"],
                                ["version", /_/g, "."],
                              ],
                              [
                                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                /(unix)\s?([\w\.]*)/i,
                              ],
                              ["name", "version"],
                            ],
                          },
                          g = function (b, d) {
                            "object" === typeof b && ((d = b), (b = c));
                            if (!(this instanceof g))
                              return new g(b, d).getResult();
                            var l =
                                b ||
                                (a && a.navigator && a.navigator.userAgent
                                  ? a.navigator.userAgent
                                  : ""),
                              k = d ? e.extend(r, d) : r;
                            this.getBrowser = function () {
                              var a = { name: c, version: c };
                              f.call(a, l, k.browser);
                              a.major = e.major(a.version);
                              return a;
                            };
                            this.getCPU = function () {
                              var a = { architecture: c };
                              f.call(a, l, k.cpu);
                              return a;
                            };
                            this.getDevice = function () {
                              var a = { vendor: c, model: c, type: c };
                              f.call(a, l, k.device);
                              return a;
                            };
                            this.getEngine = function () {
                              var a = { name: c, version: c };
                              f.call(a, l, k.engine);
                              return a;
                            };
                            this.getOS = function () {
                              var a = { name: c, version: c };
                              f.call(a, l, k.os);
                              return a;
                            };
                            this.getResult = function () {
                              return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU(),
                              };
                            };
                            this.getUA = function () {
                              return l;
                            };
                            this.setUA = function (a) {
                              l = a;
                              return this;
                            };
                            return this;
                          };
                        g.VERSION = "0.7.18";
                        g.BROWSER = {
                          NAME: "name",
                          MAJOR: "major",
                          VERSION: "version",
                        };
                        g.CPU = { ARCHITECTURE: "architecture" };
                        g.DEVICE = {
                          MODEL: "model",
                          VENDOR: "vendor",
                          TYPE: "type",
                          CONSOLE: "console",
                          MOBILE: "mobile",
                          SMARTTV: "smarttv",
                          TABLET: "tablet",
                          WEARABLE: "wearable",
                          EMBEDDED: "embedded",
                        };
                        g.ENGINE = { NAME: "name", VERSION: "version" };
                        g.OS = { NAME: "name", VERSION: "version" };
                        "undefined" !== typeof b
                          ? ("undefined" !== typeof d &&
                              d.exports &&
                              (b = d.exports = g),
                            (b.UAParser = g))
                          : a && (a.UAParser = g);
                        var p = a && (a.jQuery || a.Zepto);
                        if ("undefined" !== typeof p) {
                          var u = new g();
                          p.ua = u.getResult();
                          p.ua.get = function () {
                            return u.getUA();
                          };
                          p.ua.set = function (a) {
                            u.setUA(a);
                            a = u.getResult();
                            for (var b in a) p.ua[b] = a[b];
                          };
                        }
                      })("object" === typeof window ? window : this);
                    },
                    {},
                  ],
                },
                {},
                [1]
              )(1);
            });
          }).call(this);
        }).call(
          this,
          typeof global !== "undefined"
            ? global
            : typeof self !== "undefined"
            ? self
            : typeof window !== "undefined"
            ? window
            : {}
        );
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _scCommonMethods = require("../../../js/sc-common-methods");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
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
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        var backToTop = /*#__PURE__*/ (function () {
          function backToTop() {
            _classCallCheck(this, backToTop);
          }
          _createClass(backToTop, [
            {
              key: "init",
              value: function init() {
                var that = this;
                that.backToTopButton = document.querySelector(
                  ".sc-footer__back-to-top"
                );
                if (!that.backToTopButton) return;
                document.addEventListener("scroll", function () {
                  setTimeout(function () {
                    that.handleScroll();
                  }, 20);
                });
                that.backToTopButton.addEventListener(
                  "click",
                  function (event) {
                    //Handle analytics for the tab click
                    (0, _scCommonMethods.handleAnalyticsCTA)(
                      event,
                      document.querySelector(".sc-footer__back-to-top")
                    );
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                );
              },
            },
            {
              key: "handleScroll",
              value: function handleScroll() {
                var that = this;
                var windowWidth =
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth;
                var scrollPosition =
                  window.scrollY || document.documentElement.scrollTop;
                var chatBot = document.querySelector(".chat-text-box");
                var chatIcon = document.querySelector(
                  ".c2c_box_wrapper.c2c_right_position"
                );
                var persistentBarHeight = 0;
                var persistentBar = document.querySelector(
                  ".sc-persistent-bar--show"
                );
                if (persistentBar) {
                  persistentBarHeight = (0, _scCommonMethods.getOuterHeight)(
                    persistentBar
                  );
                }
                if (scrollPosition >= 1000) {
                  that.backToTopButton.classList.add(
                    "sc-footer__back-to-top--show"
                  );
                  if (chatBot)
                    that.backToTopButton.style.bottom =
                      (windowWidth >= 768 ? 120 : 110) +
                      persistentBarHeight +
                      "px";
                  else if (chatIcon)
                    that.backToTopButton.style.bottom =
                      (windowWidth >= 768 ? 110 : 100) +
                      persistentBarHeight +
                      "px";
                  that.backToTopButton.style.bottom =
                    (windowWidth >= 768 ? 20 : 30) + persistentBarHeight + "px";
                } else {
                  that.backToTopButton.classList.remove(
                    "sc-footer__back-to-top--show"
                  );
                  that.backToTopButton.style.bottom = "-100px";
                }
              },
            },
          ]);
          return backToTop;
        })();
        var instance = new backToTop();
        window.addEventListener("load", function () {
          instance.init();
        });
        var _default = instance;
        exports.default = _default;
      },
      { "../../../js/sc-common-methods": 9 },
    ],
    4: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _scCommonMethods = require("../../../js/sc-common-methods");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
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
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        var ScMeganav = /*#__PURE__*/ (function () {
          function ScMeganav() {
            _classCallCheck(this, ScMeganav);
          }
          _createClass(ScMeganav, [
            {
              key: "init",
              value: function init() {
                var that = this;
                var countryLanguages = {
                  sg: {
                    available: ["en", "zh", "bh"],
                    default: "en",
                  },
                  vn: {
                    available: ["en", "vn"],
                    default: "vn",
                  },
                  hk: {
                    available: ["en", "zh", "tzh"],
                    default: "en",
                  },
                  cn: {
                    available: ["en", "zh"],
                    default: "zh",
                  },
                  tw: {
                    available: ["en", "zh"],
                    default: "zh",
                  },
                  id: {
                    available: ["en", "id"],
                    default: "id",
                  },
                  ci: {
                    available: ["en", "fr"],
                    default: "en",
                  },
                  ib: {
                    available: ["en", "zh", "zh-cn"],
                    default: "en",
                  },
                  pk: {
                    available: ["en", "ur"],
                    default: "en",
                  },
                  np: {
                    available: ["en", "ne"],
                    default: "en",
                  },
                };
                that.languageSelector(
                  (0, _scCommonMethods.urlBreakdown)(window.location),
                  countryLanguages
                );
                window.addEventListener("scroll", function () {
                  var scrollTop =
                    document.body.scrollTop ||
                    document.documentElement.scrollTop;
                  that.stickyNavbar(scrollTop);
                });

                //Tab Code
                document.body.addEventListener("keydown", function (event) {
                  if (event.key && event.key.toLowerCase() === "tab") {
                    document.body.classList.add("sc-tab-focus");
                  }
                });
                // Remove focus styling when mouse is clicked
                document.body.addEventListener("mousedown", function () {
                  if (document.querySelector(".sc-tab-focus")) {
                    document.body.classList.remove("sc-tab-focus");
                  }
                });
                if (!document.querySelector("[data-personal-business]")) {
                  that.menuSlug();
                }
                that.prioritySaadiqIslamic(
                  (0, _scCommonMethods.getPageContext)()
                );
                that.accessibility();

                //Country clicked
                var country = document.querySelectorAll(
                  ".sc-meganav__country-btn"
                );
                if (country.length) {
                  country.forEach(function (el) {
                    el.addEventListener("click", function (event) {
                      event.preventDefault();
                      that.showModal();
                    });
                  });
                }
                document.addEventListener("click", function (event) {
                  //click close button
                  var closeBtn = document.querySelector(
                    ".sc-modal__close-button"
                  );
                  if (closeBtn) {
                    if (
                      event.target.closest(
                        ".sc-meganav .sc-modal .sc-modal__close-button"
                      )
                    ) {
                      if (
                        document.querySelector(".sc-meganav .sc-modal--show")
                      ) {
                        document
                          .querySelector(".sc-meganav .sc-modal")
                          .classList.remove("sc-modal--show");
                        var countryBtn = document.querySelector(
                          ".sc-meganav .sc-meganav__country-btn"
                        );
                        countryBtn.setAttribute("tabindex", "0");
                        countryBtn.focus();
                        countryBtn.blur();
                      }
                    }
                  }

                  //Click outside of the modal or click close button
                  var clickModal = document.querySelector(
                    ".sc-meganav .sc-modal"
                  );
                  var clickContent = document.querySelector(
                    ".sc-meganav .sc-modal .sc-modal__content"
                  );
                  var clickClose = document.querySelector(
                    ".sc-meganav .sc-modal .sc-modal__close"
                  );
                  if (clickModal && clickContent && clickClose) {
                    var isClickInside1 = clickModal.contains(event.target);
                    var isClickInside2 = event.target.closest(
                      ".sc-meganav .sc-modal .sc-modal__content"
                    );
                    var isClickInside3 = event.target.closest(
                      ".sc-meganav .sc-modal .sc-modal__close"
                    );
                    that.clickedOutsideModal(
                      isClickInside1,
                      isClickInside2,
                      isClickInside3
                    );
                  }
                });

                //Country Search
                var cntSearch = document.querySelector(
                  ".sc-meganav .sc-country__input"
                );
                if (cntSearch) {
                  var countryList = [];
                  var allCntList = "";
                  //Create country list
                  cntSearch.addEventListener("focus", function () {
                    if (!countryList.length) {
                      allCntList = document.querySelector(
                        ".sc-meganav .sc-country__list ul.sc-country__list-items"
                      ).innerHTML;
                      var allCountry = document.querySelectorAll(
                        ".sc-meganav .sc-country__list .sc-country__list-items .sc-country__list-item"
                      );
                      if (allCountry.length) {
                        for (var i = 0; i < allCountry.length; i++) {
                          var code = allCountry[i].getAttribute("data-value");
                          var href = allCountry[i]
                            .querySelector("a")
                            .getAttribute("href");
                          var cntName = allCountry[i]
                            .querySelector("a")
                            .getAttribute("title");
                          countryList.push({
                            code: code.trim(),
                            href: href.trim(),
                            name: cntName.trim(),
                          });
                        }
                      }
                    }
                  });

                  //Search country
                  cntSearch.addEventListener("input", function (event) {
                    event.preventDefault();
                    var allCountry = document.querySelector(
                      ".sc-meganav .sc-country__list ul.sc-country__list-items"
                    );
                    var input = event.target.value;
                    allCountry.innerHTML = "";
                    if (input && input.trim()) {
                      input = input.trim().toLowerCase();
                      if (countryList.length) {
                        for (var i = 0; i < countryList.length; i++) {
                          if (
                            countryList[i].name.toLowerCase().indexOf(input) !=
                            -1
                          ) {
                            allCountry.innerHTML +=
                              '\n                <li class="sc-country__list-item" data-value="'
                                .concat(
                                  countryList[i].code,
                                  '">\n                <a href="'
                                )
                                .concat(
                                  countryList[i].href,
                                  '" class="sc-country__country-link" title="'
                                )
                                .concat(
                                  countryList[i].name,
                                  '">\n                '
                                )
                                .concat(
                                  countryList[i].name,
                                  "\n                </a>\n              </li>\n                "
                                );
                          }
                        }
                      }
                    } else {
                      allCountry.innerHTML = allCntList;
                    }
                  });
                }

                //Switched from mobile to desktop view
                var initialWidth =
                  document.documentElement.clientWidth ||
                  document.body.clientWidth;
                window.addEventListener("resize", function () {
                  var updatedWidth =
                    document.documentElement.clientWidth ||
                    document.body.clientWidth;
                  that.resizeWindow(initialWidth, updatedWidth);
                });

                //Mobile Browser or Desktop
                if (initialWidth >= 1246) {
                  that.browserDesktop();
                } else {
                  that.browserMobile();
                }
                window.addEventListener("load", function () {
                  that.priorityFixes();
                  that.legacyImageFixes();
                  that.footerLanguageSelector(
                    (0, _scCommonMethods.urlBreakdown)(window.location),
                    countryLanguages
                  );
                  that.navFontWeightFixes(
                    (0, _scCommonMethods.urlBreakdown)(window.location)
                  );
                });
                that.activateDropDown();
                that.updateOpenAccountNavigation();
              },

              /**
               * Activates the dropdown functionality for the account dropdown buttons.
               * Adds event listeners to each button to toggle the active class and visibility of corresponding containers.
               */
            },
            {
              key: "activateDropDown",
              value: function activateDropDown() {
                var btn = document.querySelectorAll(
                  ".sc-meganav-account-dropdown__btn"
                );
                var containers = document.querySelectorAll(
                  ".sc-meganav-account-dropdown__container"
                );
                btn.forEach(function (item, index) {
                  item.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    // Remove the active class from all buttons and containers
                    btn.forEach(function (btnItems) {
                      btnItems.classList.remove(
                        "sc-meganav-account-dropdown__btn--active"
                      );
                    });
                    containers.forEach(function (container) {
                      container.classList.add("hide");
                    });
                    // Add the active class to the clicked button
                    item.classList.add(
                      "sc-meganav-account-dropdown__btn--active"
                    );
                    containers[index].classList.remove("hide");
                    (0, _scCommonMethods.handleAnalyticsCTA)(event, item);
                  });
                });
              },

              /**
               * adding fontWeight 600 if the page URL  contain /cn/en/
               * Example:
               * navFontWeightFixes()
               **/
            },
            {
              key: "navFontWeightFixes",
              value: function navFontWeightFixes(urlList) {
                if (!urlList) return;
                var url = urlList.domain + urlList.pathname;
                if (url.includes("/cn/en/")) {
                  var navBtn = document.querySelectorAll(
                    ".sc-meganav-drop__btn,.sc-meganav-drop__promo-title"
                  );
                  if (navBtn.length) {
                    navBtn.forEach(function (e) {
                      e.classList.add("sc-meganav-drop__font-weight");
                    });
                  }
                }
              },

              /**
               * adding maximum width 90px if it's coming from navbar
               * Example:
               * legacyImageFixes()
               **/
            },
            {
              key: "legacyImageFixes",
              value: function legacyImageFixes() {
                var elem = document.querySelectorAll(".sc-meganav-drop__img");
                if (elem.length) {
                  elem.forEach(function (e) {
                    e.style.maxWidth = "90px";
                  });
                }
              },

              /**
               * if it's a product feature and href attribute contain some id inside that page, then after clicking the anchor tag, it will smooth scroll to the desire id
               * Example:
               * priorityFixes()
               **/
            },
            {
              key: "priorityFixes",
              value: function priorityFixes() {
                var that = this;
                var anchorList = document.querySelectorAll(
                  '#sc-lb-module-product-features a[data-context="Product Features title"]'
                );
                if (anchorList.length) {
                  anchorList.forEach(function (evt) {
                    evt.addEventListener("click", function (event) {
                      var anchorId = event.target
                        .closest("a")
                        .getAttribute("href");
                      anchorId = anchorId.split("?")[0];
                      if (
                        anchorId &&
                        (anchorId.substr(0, 1) == "." ||
                          anchorId.substr(0, 1) == "#")
                      ) {
                        var selDiv = document.querySelector(
                          "".concat(anchorId)
                        );
                        if (selDiv) {
                          event.preventDefault();
                          event.stopPropagation();
                          that.smoothScroll(selDiv, 500);
                        }
                      }
                    });
                  });
                }
              },

              /**
               * scroll target position with animation
               * @param {String} target scroll class
               * @param {Number} duration scroll time in ms
               * @param {Number} width margin of the current div
               * @example
               * scroll('body', 500, 0)
               */
            },
            {
              key: "smoothScroll",
              value: function smoothScroll(target, duration) {
                var width =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : 0;
                var that = this;
                var targetPosition = target.getBoundingClientRect().top - width;
                var startPosition = window.pageYOffset;
                var startTime = null;
                var animation = function animation(currentTime) {
                  if (startTime === null) startTime = currentTime;
                  var timeElapsed = currentTime - startTime;
                  var run = that.ease(
                    timeElapsed,
                    startPosition,
                    targetPosition,
                    duration
                  );
                  window.scrollTo(0, run);
                  if (timeElapsed < duration) requestAnimationFrame(animation);
                };
                requestAnimationFrame(animation);
              },
            },
            {
              key: "ease",
              value: function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
              },

              /* based on keyboard event, select desire element
               * Example:
               * accessibility()
               **/
            },
            {
              key: "accessibility",
              value: function accessibility() {
                document.body.addEventListener("keyup", function (event) {
                  //Press ENTER key
                  if (event.key && event.key.toLowerCase() === "enter") {
                    //Left topNav start
                    var topNav = event.target.closest(".sc-meganav__top-btn");
                    if (topNav) {
                      var siblingClass = event.target
                        .closest(".sc-meganav__top-in")
                        .querySelector(".sc-meganav__personal-list").className;
                      if (
                        typeof siblingClass === "string" &&
                        typeof siblingClass !== "undefined" &&
                        siblingClass.indexOf(
                          "sc-meganav__personal-list--show"
                        ) !== -1
                      ) {
                        event.target
                          .closest(".sc-meganav__top-btn")
                          .nextSibling.nextSibling.classList.remove(
                            "sc-meganav__personal-list--show"
                          );
                      } else {
                        event.target
                          .closest(".sc-meganav__top-btn")
                          .nextSibling.nextSibling.classList.add(
                            "sc-meganav__personal-list--show"
                          );
                      }
                    }

                    //MegaNav start
                    var megaNav = event.target.closest(".sc-meganav__menu");
                    if (megaNav) {
                      var _siblingClass = event.target.closest(
                        ".sc-meganav__item--has-meganav"
                      ).className;
                      if (
                        typeof _siblingClass === "string" &&
                        typeof _siblingClass.includes !== "undefined" &&
                        _siblingClass.indexOf("sc-meganav__item--show") !== -1
                      ) {
                        event.target
                          .closest(".sc-meganav__menu")
                          .nextSibling.nextSibling.classList.remove(
                            "sc-meganav__item--show"
                          );
                      } else {
                        event.target
                          .closest(".sc-meganav__item--has-meganav")
                          .classList.add("sc-meganav__item--show");
                      }
                    }

                    //Login start
                    var loginBtn = event.target.closest(
                      ".sc-meganav__login-btn"
                    );
                    if (loginBtn) {
                      var loginDrop = document.querySelector(
                        ".sc-meganav-login-drop"
                      );
                      var _siblingClass2 = loginDrop.className;
                      if (
                        typeof _siblingClass2 === "string" &&
                        typeof _siblingClass2.includes !== "undefined" &&
                        _siblingClass2.indexOf(
                          "sc-meganav-login-drop--show"
                        ) !== -1
                      ) {
                        loginDrop.classList.remove(
                          "sc-meganav-login-drop--show"
                        );
                      } else {
                        loginDrop.classList.add("sc-meganav-login-drop--show");
                      }
                    }

                    //Open an Account
                    var meganavAccount = event.target.closest(
                      ".sc-meganav__account-btn"
                    );
                    if (meganavAccount) {
                      var meganavAccountDrop = document.querySelector(
                        ".sc-meganav-account-dropdown"
                      );
                      var _siblingClass3 = meganavAccountDrop.className;
                      if (
                        typeof _siblingClass3 === "string" &&
                        typeof _siblingClass3.includes !== "undefined" &&
                        _siblingClass3.indexOf(
                          "sc-meganav-account-dropdown--show"
                        ) !== -1
                      ) {
                        meganavAccountDrop.classList.remove(
                          "sc-meganav-account-dropdown--show"
                        );
                        meganavAccount.classList.remove(
                          "sc-meganav__account-btn--show"
                        );
                      } else {
                        meganavAccountDrop.classList.add(
                          "sc-meganav-account-dropdown--show"
                        );
                        meganavAccount.classList.add(
                          "sc-meganav__account-btn--show"
                        );
                      }
                    }

                    //Link Hover start
                    var linkHover = event.target.closest(
                      ".sc-mgdrop__list-item-link--hover"
                    );
                    if (linkHover) {
                      var _siblingClass4 = event.target.closest(
                        ".sc-mgdrop__list-item-link--hover"
                      ).nextSibling.nextSibling.className;
                      if (
                        typeof _siblingClass4 === "string" &&
                        typeof _siblingClass4.includes !== "undefined" &&
                        _siblingClass4.indexOf(
                          "sc-mgdrop__item-wrapper--show"
                        ) !== -1
                      ) {
                        event.target
                          .closest(".sc-mgdrop__list-item-link--hover")
                          .nextSibling.nextSibling.classList.remove(
                            "sc-mgdrop__item-wrapper--show"
                          );
                      } else {
                        event.target
                          .closest(".sc-mgdrop__list-item-link--hover")
                          .nextSibling.nextSibling.classList.add(
                            "sc-mgdrop__item-wrapper--show"
                          );
                      }
                    }
                  }

                  //Press TAB key
                  if (event.key && event.key.toLowerCase() === "tab") {
                    //Left topNav start
                    var _topNav = event.target.closest(".sc-meganav__top-btn");
                    var personalList = event.target.closest(
                      ".sc-meganav__personal-list"
                    );
                    if (!_topNav && !personalList) {
                      //when outside of personal list
                      var personalListShow = document.querySelectorAll(
                        ".sc-meganav__personal-list"
                      );
                      if (personalListShow.length) {
                        for (var i = 0; i < personalListShow.length; i++) {
                          personalListShow[i].classList.remove(
                            "sc-meganav__personal-list--show"
                          );
                        }
                      }
                    } else if (_topNav) {
                      //Remove if selected next top nav button
                      var _siblingClass5 = event.target.closest(
                        ".sc-meganav__top-btn"
                      ).nextSibling.nextSibling.className;
                      if (
                        _siblingClass5.indexOf(
                          "sc-meganav__personal-list--show"
                        ) == -1
                      ) {
                        var _personalListShow = document.querySelectorAll(
                          ".sc-meganav__personal-list"
                        );
                        if (_personalListShow.length) {
                          for (
                            var _i = 0;
                            _i < _personalListShow.length;
                            _i++
                          ) {
                            _personalListShow[_i].classList.remove(
                              "sc-meganav__personal-list--show"
                            );
                          }
                        }
                      }
                    }

                    //MegaNav start
                    var _megaNav = event.target.closest(".sc-meganav__menu");
                    var wrapperList = event.target.closest(
                      ".sc-meganav__item--has-meganav"
                    );
                    if (!_megaNav && !wrapperList) {
                      //when outside of personal list
                      var wrapperListShow = document.querySelectorAll(
                        ".sc-meganav__item--has-meganav"
                      );
                      if (wrapperListShow.length) {
                        for (var _i2 = 0; _i2 < wrapperListShow.length; _i2++) {
                          wrapperListShow[_i2].classList.remove(
                            "sc-meganav__item--show"
                          );
                        }
                      }
                    } else if (_megaNav) {
                      //Remove if selected next top nav button
                      if (
                        wrapperList.className.indexOf(
                          "sc-meganav__item--show"
                        ) == -1
                      ) {
                        var _wrapperListShow = document.querySelectorAll(
                          ".sc-meganav__item--has-meganav"
                        );
                        if (_wrapperListShow.length) {
                          for (
                            var _i3 = 0;
                            _i3 < _wrapperListShow.length;
                            _i3++
                          ) {
                            _wrapperListShow[_i3].classList.remove(
                              "sc-meganav__item--show"
                            );
                          }
                        }
                      }
                    }

                    //Login Start
                    var _loginBtn = event.target.closest(
                      ".sc-meganav__login-btn"
                    );
                    var loginList = event.target.closest(
                      ".sc-meganav-login-drop"
                    );
                    if (!_topNav && !loginList) {
                      //when outside of personal list
                      var loginListShow = document.querySelectorAll(
                        ".sc-meganav-login-drop"
                      );
                      if (loginListShow.length) {
                        for (var _i4 = 0; _i4 < loginListShow.length; _i4++) {
                          loginListShow[_i4].classList.remove(
                            "sc-meganav-login-drop--show"
                          );
                        }
                      }
                    } else if (_loginBtn) {
                      //Remove if selected next top nav button
                      var _siblingClass6 = document.querySelector(
                        ".sc-meganav-login-drop"
                      ).className;
                      if (
                        _siblingClass6.indexOf("sc-meganav-login-drop--show") ==
                        -1
                      ) {
                        var _loginListShow = document.querySelectorAll(
                          ".sc-meganav-login-drop"
                        );
                        if (_loginListShow.length) {
                          for (
                            var _i5 = 0;
                            _i5 < _loginListShow.length;
                            _i5++
                          ) {
                            _loginListShow[_i5].classList.remove(
                              "sc-meganav-login-drop--show"
                            );
                          }
                        }
                      }
                    }

                    //Link Hover start
                    var _linkHover = event.target.closest(
                      ".sc-mgdrop__list-item-link--hover"
                    );
                    var hoverlList = event.target.closest(
                      ".sc-mgdrop__item-wrapper"
                    );
                    if (!_linkHover && !hoverlList) {
                      //when outside of personal list
                      var hoverlListShow = document.querySelectorAll(
                        ".sc-mgdrop__item-wrapper"
                      );
                      if (hoverlListShow.length) {
                        for (var _i6 = 0; _i6 < hoverlListShow.length; _i6++) {
                          hoverlListShow[_i6].classList.remove(
                            "sc-mgdrop__item-wrapper--show"
                          );
                        }
                      }
                    } else if (_linkHover) {
                      //Remove if selected next top nav button
                      var _siblingClass7 = event.target.closest(
                        ".sc-mgdrop__list-item-link--hover"
                      ).nextSibling.nextSibling.className;
                      if (
                        _siblingClass7.indexOf(
                          "sc-mgdrop__item-wrapper--show"
                        ) == -1
                      ) {
                        var _hoverlListShow = document.querySelectorAll(
                          ".sc-mgdrop__item-wrapper"
                        );
                        if (_hoverlListShow.length) {
                          for (
                            var _i7 = 0;
                            _i7 < _hoverlListShow.length;
                            _i7++
                          ) {
                            _hoverlListShow[_i7].classList.remove(
                              "sc-mgdrop__item-wrapper--show"
                            );
                          }
                        }
                      }
                    }

                    // Open an Account
                    var openAccountBtn = event.target.closest(
                      ".sc-meganav__account-btn"
                    );
                    var openAccountDrop = event.target.closest(
                      ".sc-meganav-account-dropdown"
                    );
                    if (!openAccountBtn && !openAccountDrop) {
                      var openAccountShow = document.querySelectorAll(
                        ".sc-meganav-account-dropdown--show"
                      );
                      if (openAccountShow.length) {
                        for (var _i8 = 0; _i8 < openAccountShow.length; _i8++) {
                          openAccountShow[_i8].classList.remove(
                            "sc-meganav-account-dropdown--show"
                          );
                        }
                      }
                    } else if (openAccountBtn) {
                      var _siblingClass8 = document.querySelector(
                        ".sc-meganav-account-dropdown"
                      ).className;
                      if (
                        _siblingClass8.indexOf(
                          "sc-meganav-account-dropdown--show"
                        ) === -1
                      ) {
                        var _openAccountShow = document.querySelectorAll(
                          ".sc-meganav-account-dropdown"
                        );
                        if (_openAccountShow.length) {
                          for (
                            var _i9 = 0;
                            _i9 < _openAccountShow.length;
                            _i9++
                          ) {
                            _openAccountShow[_i9].classList.remove(
                              "sc-meganav-account-dropdown--show"
                            );
                          }
                        }
                      }
                    }
                  }

                  //Press Escape key
                  if (event.key && event.key.toLowerCase() === "escape") {
                    if (document.querySelector(".sc-meganav .sc-modal--show")) {
                      event.preventDefault();
                      document
                        .querySelector(".sc-meganav .sc-modal")
                        .classList.remove("sc-modal--show");
                      if (document.querySelector(".sc-meganav__country-btn")) {
                        var countryBtn = document.querySelector(
                          ".sc-meganav .sc-meganav__country-btn"
                        );
                        countryBtn.setAttribute("tabindex", "0");
                        countryBtn.focus();
                        countryBtn.blur();
                      }
                    }
                  }
                });
                document
                  .querySelector("body")
                  .addEventListener("mouseover", function (event) {
                    //remove personal List
                    var personalList = event.target.closest(
                      ".sc-meganav__personal-list--show"
                    );
                    if (!personalList) {
                      var personalShow = document.querySelectorAll(
                        ".sc-meganav__personal-list--show"
                      );
                      if (personalShow.length) {
                        for (var i = 0; i < personalShow.length; i++) {
                          personalShow[i].classList.remove(
                            "sc-meganav__personal-list--show"
                          );
                        }
                      }
                    }

                    //Remove megaNav class
                    var scNav = event.target.closest(".sc-meganav");
                    if (!scNav) {
                      var wrapperShow = document.querySelectorAll(
                        ".sc-meganav__mgnv-wrapper--show"
                      );
                      if (wrapperShow.length) {
                        for (var _i10 = 0; _i10 < wrapperShow.length; _i10++) {
                          wrapperShow[_i10].classList.remove(
                            "sc-meganav__mgnv-wrapper--show"
                          );
                        }
                      }
                    }
                  });
              },

              /**
               * user browser from desktop
               * Example:
               * browserDesktop()
               **/
            },
            {
              key: "browserDesktop",
              value: function browserDesktop() {
                var that = this;
                //Fixed Meganav height
                var linkHover = document.querySelectorAll(
                  ".sc-mgdrop__list-item-link--hover"
                );
                if (linkHover.length) {
                  linkHover.forEach(function (evt) {
                    evt.addEventListener("click", function (event) {
                      var dropdownItems =
                        event.target.nextSibling.nextSibling.querySelectorAll(
                          ".sc-mgdrop__item"
                        );
                      that.calculateHeight(dropdownItems);
                    });
                  });
                  linkHover.forEach(function (evt) {
                    evt.addEventListener("mouseenter", function (event) {
                      var dropdownItems =
                        event.target.nextSibling.nextSibling.querySelectorAll(
                          ".sc-mgdrop__item"
                        );
                      that.calculateHeight(dropdownItems);
                    });
                  });
                }

                //Remove height and added classes
                var itemLink = document.querySelectorAll(
                  ".sc-mgdrop__list-item-link"
                );
                var mgDropRight = document.querySelector(".sc-mgdrop__right");
                if (itemLink.length) {
                  itemLink.forEach(function (evt) {
                    evt.addEventListener("mouseenter", function (event) {
                      if (
                        event.target.className.indexOf(
                          "sc-mgdrop__list-item-link--hover"
                        ) == -1 &&
                        mgDropRight
                      ) {
                        mgDropRight.style.minHeight = "0px";
                      }
                    });
                  });
                }
                var navItems = document.querySelectorAll(".sc-meganav__item");
                if (navItems.length) {
                  navItems.forEach(function (evt) {
                    evt.addEventListener("mouseenter", function (event) {
                      if (
                        event.target.className.indexOf(
                          "sc-mgdrop__list-item-link--hover"
                        ) == -1 &&
                        mgDropRight
                      ) {
                        mgDropRight.style.minHeight = "0px";
                      }
                    });
                  });
                }
              },

              /**
               * calculate children height and set it as minimum height
               * @param {node} dropdownItems - number of items as a node
               * Example:
               * calculateHeight(dropdownItems)
               **/
            },
            {
              key: "calculateHeight",
              value: function calculateHeight(dropdownItems) {
                var shortFallHeight = 40; // (padding 40px + view all link height (fixed position) )
                var dropdownHeight = 0;
                if (dropdownItems.length) {
                  for (var i = 0; i < dropdownItems.length; i++) {
                    dropdownHeight = Math.max(
                      dropdownHeight,
                      dropdownItems[i].offsetHeight
                    );
                  }
                }
                dropdownHeight =
                  dropdownHeight * Math.ceil(dropdownItems.length / 3) +
                  shortFallHeight;
                var mgDropRight = document.querySelector(".sc-mgdrop__right");
                if (mgDropRight) {
                  mgDropRight.style.minHeight = dropdownHeight + "px";
                }
              },

              /**
               * call browserDesktop or browserMobile based on browser width
               * @param {number} initialWidth - initial browser width
               * @param {number} updatedWidth - updated resize browser width
               * Example:
               * resizeWindow(1000, 1200)
               **/
            },
            {
              key: "resizeWindow",
              value: function resizeWindow(initialWidth, updatedWidth) {
                var that = this;
                if (initialWidth != updatedWidth) {
                  initialWidth = updatedWidth;
                  if (updatedWidth >= 1246) {
                    that.browserDesktop();
                    that.removeMobileClasses();
                  } else {
                    that.browserMobile();
                    that.removeDesktopClasses();
                  }
                }
              },

              /**
               * remove desktop browser class when browse from mobile
               * Example:
               * removeDesktopClasses()
               **/
            },
            {
              key: "removeDesktopClasses",
              value: function removeDesktopClasses() {
                //remove fixed height classes
                var mgDropRight = document.querySelector(".sc-mgdrop__right");
                if (mgDropRight) {
                  mgDropRight.style.minHeight = "0px";
                }

                //Remove mobile classes
                var menuVisible = document.querySelectorAll(".sc-menu-visible");
                if (menuVisible.length > 0) {
                  for (var i = 0; i < menuVisible.length; i++) {
                    menuVisible[i].classList.remove("sc-menu-visible");
                  }
                }
                var scNav = document.querySelector(".sc-meganav");
                if (scNav) {
                  scNav.classList.remove("sc-meganav--fixed");
                }
              },

              /**
               * remove mobile browser class when browse from desktop
               * Example:
               * removeMobileClasses()
               **/
            },
            {
              key: "removeMobileClasses",
              value: function removeMobileClasses() {
                //Remove mobile classes
                var menuVisible = document.querySelectorAll(".sc-menu-visible");
                if (menuVisible.length > 0) {
                  for (var i = 0; i < menuVisible.length; i++) {
                    menuVisible[i].classList.remove("sc-menu-visible");
                  }
                }
                var scNav = document.querySelector(".sc-meganav");
                if (scNav) {
                  scNav.classList.remove("sc-meganav--fixed");
                }
                var loginDrop = document.querySelector(
                  ".sc-meganav-login-drop"
                );
                if (loginDrop) {
                  loginDrop.classList.remove("sc-menu-visible");
                }
                if (document.querySelector(".sc-meganav__close-button")) {
                  document
                    .querySelector(".sc-meganav__close-button")
                    .classList.remove("sc-menu-visible");
                }
                var navPersonal = document.querySelector(
                  ".sc-meganav__personal-list"
                );
                if (navPersonal) {
                  navPersonal.classList.remove("sc-menu-visible");
                }
                var mgnvWrapperList = document.querySelectorAll(
                  ".sc-meganav__mgnv-wrapper"
                );
                if (mgnvWrapperList.length > 0) {
                  for (var _i11 = 0; _i11 < mgnvWrapperList.length; _i11++) {
                    mgnvWrapperList[_i11].classList.remove("sc-menu-visible");
                  }
                }
                var itemWrapper = document.querySelectorAll(
                  ".sc-mgdrop__item-wrapper"
                );
                if (itemWrapper.length) {
                  for (var _i12 = 0; _i12 < itemWrapper.length; _i12++) {
                    itemWrapper[_i12].classList.remove("sc-menu-visible");
                  }
                }
              },

              /**
               * user browse from mobile
               * Example:
               * browserMobile()
               **/
            },
            {
              key: "browserMobile",
              value: function browserMobile() {
                //Click on hamburger
                var scNav = document.querySelector(".sc-meganav");
                var hamburger = document.querySelector(
                  ".sc-meganav__hamburger"
                );
                var loginDrop = document.querySelector(
                  ".sc-meganav-login-drop"
                );
                var loginClose = document.querySelector(
                  ".sc-meganav__login-close"
                );
                var megaNavClose = document.querySelector(
                  ".sc-meganav__close-button"
                );
                var megaNavTop = document.querySelector(".sc-meganav__top");
                var megaNavList = document.querySelector(".sc-meganav__list");
                if (hamburger) {
                  hamburger.addEventListener("click", function (event) {
                    //Hide login close and modal
                    loginDrop === null || loginDrop === void 0
                      ? void 0
                      : loginDrop.classList.remove("sc-menu-visible");
                    loginClose === null || loginClose === void 0
                      ? void 0
                      : loginClose.classList.remove("sc-menu-visible");
                    megaNavClose === null || megaNavClose === void 0
                      ? void 0
                      : megaNavClose.classList.add("sc-menu-visible");
                    megaNavTop === null || megaNavTop === void 0
                      ? void 0
                      : megaNavTop.classList.add("sc-menu-visible");
                    megaNavList === null || megaNavList === void 0
                      ? void 0
                      : megaNavList.classList.add("sc-menu-visible");
                    scNav === null || scNav === void 0
                      ? void 0
                      : scNav.classList.add("sc-meganav--fixed");
                    document.body.classList.add("no-scroll");

                    //Handle analytics for the tab click
                    (0, _scCommonMethods.handleAnalyticsCTA)(event, hamburger);
                  });
                }
                if (loginClose) {
                  loginClose.addEventListener("click", function (event) {
                    loginDrop === null || loginDrop === void 0
                      ? void 0
                      : loginDrop.classList.remove("sc-menu-visible");
                    loginClose.classList.remove("sc-menu-visible");
                    document.body.classList.remove("no-scroll");
                    //Handle analytics for the tab click
                    (0, _scCommonMethods.handleAnalyticsCTA)(event, loginClose);
                  });
                }

                //Click hamburger close button
                if (megaNavClose) {
                  megaNavClose.addEventListener("click", function () {
                    var menuVisible =
                      document.querySelectorAll(".sc-menu-visible");
                    if (menuVisible.length > 0) {
                      for (var i = 0; i < menuVisible.length; i++) {
                        menuVisible[i].classList.remove("sc-menu-visible");
                      }
                    }
                    scNav === null || scNav === void 0
                      ? void 0
                      : scNav.classList.remove("sc-meganav--fixed");
                    loginDrop === null || loginDrop === void 0
                      ? void 0
                      : loginDrop.classList.remove("sc-menu-visible");
                    megaNavClose.classList.remove("sc-menu-visible");
                    document.body.classList.remove("no-scroll");
                  });
                }

                //toggle nav top button
                var topBtn = document.querySelectorAll(".sc-meganav__top-btn");
                if (topBtn.length) {
                  topBtn.forEach(function (el) {
                    el.addEventListener("click", function (event) {
                      var siblingClass = event.target
                        .closest(".sc-meganav__top-in")
                        .querySelector(".sc-meganav__personal-list").className;
                      var personalList = document.querySelectorAll(
                        ".sc-meganav__personal-list"
                      );
                      if (
                        typeof siblingClass === "string" &&
                        typeof siblingClass !== "undefined" &&
                        siblingClass.indexOf("sc-menu-visible") !== -1
                      ) {
                        if (personalList.length) {
                          for (var i = 0; i < personalList.length; i++) {
                            personalList[i].classList.remove("sc-menu-visible");
                          }
                        }
                      } else {
                        if (personalList.length) {
                          for (
                            var _i13 = 0;
                            _i13 < personalList.length;
                            _i13++
                          ) {
                            personalList[_i13].classList.add("sc-menu-visible");
                          }
                        }
                      }
                    });
                  });
                }

                //Click sc nav menu button
                var navMenu = document.querySelectorAll(".sc-meganav__menu");
                if (navMenu.length > 0) {
                  navMenu.forEach(function (el) {
                    el.addEventListener("click", function (event) {
                      var closest = event.target.closest(".sc-meganav__item");
                      if (closest) {
                        var siblingClass = closest.querySelector(
                          ".sc-meganav__mgnv-wrapper"
                        );
                        if (siblingClass) {
                          siblingClass.classList.add("sc-menu-visible");
                        }
                      }
                    });
                  });
                }

                //close dropdown back
                var dropDownList = document.querySelectorAll(
                  ".sc-meganav-drop__back"
                );
                if (dropDownList.length > 0) {
                  dropDownList.forEach(function (el) {
                    el.addEventListener("click", function () {
                      var mgnvWrapperList = document.querySelectorAll(
                        ".sc-meganav__mgnv-wrapper"
                      );
                      var itemWrapper = document.querySelectorAll(
                        ".sc-mgdrop__item-wrapper"
                      );
                      var oneBack = true;
                      if (itemWrapper) {
                        for (var i = 0; i < itemWrapper.length; i++) {
                          if (
                            typeof itemWrapper[i].className === "string" &&
                            typeof itemWrapper[i].className.includes !==
                              "undefined" &&
                            itemWrapper[i].className.indexOf(
                              "sc-menu-visible"
                            ) !== -1
                          ) {
                            itemWrapper[i].classList.remove("sc-menu-visible");
                            oneBack = false;
                          }
                        }
                      }
                      if (mgnvWrapperList.length > 0 && oneBack) {
                        for (
                          var _i14 = 0;
                          _i14 < mgnvWrapperList.length;
                          _i14++
                        ) {
                          mgnvWrapperList[_i14].classList.remove(
                            "sc-menu-visible"
                          );
                        }
                      }
                    });
                  });
                }

                //click login button
                var loginBtn = document.querySelector(".sc-meganav__login-btn");
                if (loginBtn) {
                  loginBtn.addEventListener("click", function (event) {
                    //Hide meganav close and modal
                    megaNavClose === null || megaNavClose === void 0
                      ? void 0
                      : megaNavClose.classList.remove("sc-menu-visible");
                    megaNavTop === null || megaNavTop === void 0
                      ? void 0
                      : megaNavTop.classList.remove("sc-menu-visible");
                    megaNavList === null || megaNavList === void 0
                      ? void 0
                      : megaNavList.classList.remove("sc-menu-visible");
                    loginDrop === null || loginDrop === void 0
                      ? void 0
                      : loginDrop.classList.add("sc-menu-visible");
                    loginClose === null || loginClose === void 0
                      ? void 0
                      : loginClose.classList.add("sc-menu-visible");
                    document.body.classList.add("no-scroll");

                    //Handle analytics for the tab click
                    (0, _scCommonMethods.handleAnalyticsCTA)(event, loginBtn);
                  });
                }

                //Fixed height
                var itemHover = document.querySelectorAll(
                  ".sc-mgdrop__list-item-link--hover"
                );
                if (itemHover.length) {
                  itemHover.forEach(function (el) {
                    el.addEventListener("click", function (event) {
                      event.target.nextSibling.nextSibling.classList.add(
                        "sc-menu-visible"
                      );
                    });
                  });
                }
              },

              /**
               * close modal when click outside of the modal box
               * Example:
               * clickedOutsideModal()
               **/
            },
            {
              key: "clickedOutsideModal",
              value: function clickedOutsideModal(
                isClickInside1,
                isClickInside2,
                isClickInside3
              ) {
                if (
                  document.querySelector(".sc-meganav .sc-modal--show") &&
                  isClickInside1 &&
                  !isClickInside2 &&
                  !isClickInside3
                ) {
                  document
                    .querySelector(".sc-meganav .sc-modal")
                    .classList.remove("sc-modal--show");
                }
              },

              /**
               * sticky navbar when scroll down
               * Example:
               * stickyNavbar()
               **/
            },
            {
              key: "stickyNavbar",
              value: function stickyNavbar(scrollTop) {
                var navContainer = document.querySelector(".sc-meganav");
                if (navContainer) {
                  scrollTop >= 30
                    ? navContainer.classList.add("sc-meganav--sticky")
                    : navContainer.classList.remove("sc-meganav--sticky");
                }
              },

              /**
               * open modal when click on country selector
               * Example:
               * showModal()
               **/
            },
            {
              key: "showModal",
              value: function showModal() {
                if (document.querySelector(".sc-meganav .sc-modal")) {
                  document
                    .querySelector(".sc-meganav .sc-modal")
                    .classList.add("sc-modal--show");
                  var modalContent = document.querySelector(
                    ".sc-meganav .sc-modal .sc-modal__content"
                  );
                  modalContent.setAttribute("tabindex", "0");
                  modalContent.focus();
                  modalContent.blur();
                }
              },

              /**
               * activate multiple language select options
               * Example:
               * languageSelector()
               **/
            },
            {
              key: "languageSelector",
              value: function languageSelector(urlList, countryLanguages) {
                if (!urlList) return;
                var URL = urlList.domain + urlList.pathname;

                //Header language selector
                var languageList = document.querySelectorAll(
                  ".sc-language-selector .sc-meganav__lang-link"
                );
                if (languageList.length) {
                  languageList.forEach(function (el) {
                    el.addEventListener("click", function (event) {
                      event.preventDefault();
                      var country = document
                        .querySelector('meta[name="sc:country"]')
                        .getAttribute("content");
                      var selectedLanguage = document
                        .querySelector(".sc-language-selector")
                        .getAttribute("data-language-sel")
                        .toLowerCase();
                      var clickedLanguage = event.target
                        .getAttribute("data-language")
                        .toLowerCase();

                      //true if current language and clicked language are not equal
                      var newURL = "";
                      if (country == "hk") {
                        if (URL.slice(-1) == "/") {
                          URL = URL.slice(0, -1);
                        }
                        if (clickedLanguage == "tzh") {
                          newURL = URL.replace(
                            "/".concat(country),
                            "/".concat(country, "/zh")
                          );
                          var pageSegment = (0,
                          _scCommonMethods.getPageContext)().segment;
                          if (
                            newURL.slice(-1) != "-sc" &&
                            pageSegment == "international-banking"
                          ) {
                            newURL += "-sc";
                          }
                        } else if (
                          clickedLanguage ==
                          countryLanguages[
                            (0, _scCommonMethods.getCurrentCountry)()
                          ].default
                        ) {
                          //no need to add language in URL if it's a default language
                          newURL = URL.replace(
                            "/".concat(country, "/zh"),
                            "/".concat(country)
                          );
                          if (newURL.slice(-3) == "-sc") {
                            newURL = newURL.slice(0, -3);
                          }
                        } else {
                          newURL = URL.replace(
                            "/".concat(country),
                            "/".concat(country, "/").concat(clickedLanguage)
                          );
                          if (newURL.slice(-3) == "-sc") {
                            newURL = newURL.slice(0, -3);
                          }
                        }
                        newURL = newURL.replace("/hk/zh/zh", "/hk/zh");
                        window.location = "https://".concat(newURL);
                      } else if (country == "pk") {
                        if (
                          clickedLanguage ==
                          countryLanguages[
                            (0, _scCommonMethods.getCurrentCountry)()
                          ].default
                        ) {
                          //no need to add language in URL if it's a default language
                          newURL = ""
                            .concat(urlList.domain, "/")
                            .concat(country);
                        } else {
                          newURL = ""
                            .concat(urlList.domain, "/")
                            .concat(country, "/")
                            .concat(clickedLanguage);
                        }
                        window.location = "https://".concat(newURL);
                      } else if (selectedLanguage != clickedLanguage) {
                        if (
                          clickedLanguage ==
                          countryLanguages[
                            (0, _scCommonMethods.getCurrentCountry)()
                          ].default
                        ) {
                          //no need to add language in URL if it's a default language
                          newURL = URL.replace(
                            "/".concat(country, "/").concat(selectedLanguage),
                            "/".concat(country)
                          );
                        } else {
                          newURL = URL.replace(
                            "/".concat(country),
                            "/".concat(country, "/").concat(clickedLanguage)
                          );
                        }
                        window.location = "https://".concat(newURL);
                      }
                    });
                  });
                }
              },

              /**
               * activate multiple language select options in footer
               * Example:
               * footerLanguageSelector()
               **/
            },
            {
              key: "footerLanguageSelector",
              value: function footerLanguageSelector(
                urlList,
                countryLanguages
              ) {
                if (!urlList) return;
                var URL = urlList.domain + urlList.pathname;
                var languageListFooter = document.querySelectorAll(
                  ".sc-footer .sc-footer__lang-selector .sc-footer__lang-btn"
                );
                if (languageListFooter.length) {
                  languageListFooter.forEach(function (el) {
                    el.addEventListener("click", function (event) {
                      event.preventDefault();
                      event.stopPropagation();
                      var country = document
                        .querySelector('meta[name="sc:country"]')
                        .getAttribute("content");
                      var selectedLanguage = document
                        .querySelector(".sc-footer .sc-footer__lang-selector")
                        .getAttribute("data-language-sel")
                        .toLowerCase();
                      var clickedLanguage = event.target
                        .getAttribute("data-language")
                        .toLowerCase();
                      var newURL = "";
                      if (country == "hk") {
                        if (
                          typeof event.target.className === "string" &&
                          typeof event.target.className.includes !==
                            "undefined" &&
                          event.target.className.indexOf("active") !== -1
                        ) {
                          return;
                        }
                        if (URL.slice(-1) == "/") {
                          URL = URL.slice(0, -1);
                        }
                        if (clickedLanguage == "tzh") {
                          newURL = URL.replace(
                            "/".concat(country),
                            "/".concat(country, "/zh")
                          );
                          var pageSegment = (0,
                          _scCommonMethods.getPageContext)().segment;
                          if (
                            newURL.slice(-1) != "-sc" &&
                            pageSegment == "international-banking"
                          ) {
                            newURL = newURL.replace("/hk/zh/zh", "/hk/zh");
                            var _urlList = newURL.split("/hk/zh/");
                            var urlSegment = _urlList[1]
                              ? _urlList[1].split("/")
                              : [];
                            var tempUrl = "";
                            if (urlSegment.length) {
                              for (var i = 0; i < urlSegment.length; i++) {
                                if (urlSegment[i]) {
                                  tempUrl += "".concat(urlSegment[i], "-sc/");
                                }
                              }
                            }
                            newURL = ""
                              .concat(_urlList[0], "/hk/zh/")
                              .concat(tempUrl);
                          }
                        } else if (
                          clickedLanguage ==
                          countryLanguages[
                            (0, _scCommonMethods.getCurrentCountry)()
                          ].default
                        ) {
                          //no need to add language in URL if it's a default language
                          newURL = URL.replace(
                            "/".concat(country, "/zh"),
                            "/".concat(country)
                          );
                          if (newURL.slice(-3) == "-sc") {
                            newURL = newURL.replace(/-sc/gi, "");
                          }
                        } else {
                          newURL = URL.replace(
                            "/".concat(country),
                            "/".concat(country, "/").concat(clickedLanguage)
                          );
                          if (newURL.slice(-3) == "-sc") {
                            newURL = newURL.replace(/-sc/gi, "");
                          }
                        }
                        newURL = newURL.replace("/hk/zh/zh", "/hk/zh");
                        window.location = "https://".concat(newURL);
                      } else if (country == "pk") {
                        if (
                          clickedLanguage ==
                          countryLanguages[
                            (0, _scCommonMethods.getCurrentCountry)()
                          ].default
                        ) {
                          //no need to add language in URL if it's a default language
                          newURL = ""
                            .concat(urlList.domain, "/")
                            .concat(country);
                        } else {
                          newURL = ""
                            .concat(urlList.domain, "/")
                            .concat(country, "/")
                            .concat(clickedLanguage);
                        }
                        window.location = "https://".concat(newURL);
                      } else if (selectedLanguage != clickedLanguage) {
                        //true if current language and clicked language are not equal
                        if (
                          clickedLanguage ==
                          countryLanguages[
                            (0, _scCommonMethods.getCurrentCountry)()
                          ].default
                        ) {
                          //no need to add language in URL if it's a default language
                          newURL = URL.replace(
                            "/".concat(country, "/").concat(selectedLanguage),
                            "/".concat(country)
                          );
                        } else {
                          newURL = URL.replace(
                            "/".concat(country),
                            "/".concat(country, "/").concat(clickedLanguage)
                          );
                        }
                        window.location = "https://".concat(newURL);
                      }
                    });
                  });
                }
              },

              /**
               * change top-nav text based on menu-slug
               * Example:
               * menuSlug()
               **/
            },
            {
              key: "menuSlug",
              value: function menuSlug() {
                var pageContext = (0, _scCommonMethods.getPageContext)();
                var pathName = pageContext.pathname;
                var cntName = "/" + pageContext.country + "/";
                if (pathName === cntName) return;
                var pageSegment = pageContext.segment;
                pageSegment = pageSegment
                  ? pageSegment.toLocaleLowerCase()
                  : "";
                var personalList = document.querySelectorAll(
                  ".sc-meganav__top .sc-meganav__personal-lists a.sc-meganav__personal-box-link"
                );
                if (personalList.length) {
                  for (var i = 0; i < personalList.length; i++) {
                    var title = personalList[i].getAttribute("title");
                    if (title) {
                      var selectedTitle = personalList[i].getAttribute(
                        "data-selected-title"
                      );
                      var href = personalList[i].getAttribute("href");
                      title =
                        selectedTitle === undefined ||
                        selectedTitle === "" ||
                        selectedTitle === null
                          ? (0, _scCommonMethods.trim)(
                              title.toLocaleLowerCase()
                            ).split(" ")[0]
                          : selectedTitle.toLocaleLowerCase();
                      if (pageSegment === title && href) {
                        var titleText =
                          personalList[i].innerText ||
                          personalList[i].textContent;
                        var topBtn = document.querySelector(
                          ".sc-meganav__top-in .sc-meganav__top-btn"
                        );
                        if (topBtn) {
                          topBtn.innerHTML = (0, _scCommonMethods.trim)(
                            titleText
                          );
                        }
                        var activeCls = document.querySelector(
                          ".sc-meganav__personal-box-link--active"
                        );
                        if (activeCls) {
                          activeCls.classList.remove(
                            "sc-meganav__personal-box-link--active"
                          );
                        }
                        personalList[i].classList.add(
                          "sc-meganav__personal-box-link--active"
                        );
                      }
                    }
                  }
                }
                var personalListDropDown = document.querySelectorAll(
                  ".sc-meganav__personal-list .sc-meganav__personal-lists a.sc-meganav__personal-box-link"
                );
                if (personalListDropDown.length) {
                  for (
                    var _i15 = 0;
                    _i15 < personalListDropDown.length;
                    _i15++
                  ) {
                    var _title =
                      personalListDropDown[_i15].getAttribute("title");
                    if (_title) {
                      var _selectedTitle = personalListDropDown[
                        _i15
                      ].getAttribute("data-selected-title");
                      var _href =
                        personalListDropDown[_i15].getAttribute("href");
                      _title =
                        _selectedTitle === undefined ||
                        _selectedTitle === "" ||
                        _selectedTitle === null
                          ? (0, _scCommonMethods.trim)(
                              _title.toLocaleLowerCase()
                            ).split(" ")[0]
                          : _selectedTitle.toLocaleLowerCase();
                      if (pageSegment === _title && _href) {
                        var _titleText =
                          personalListDropDown[_i15].innerText ||
                          personalListDropDown[_i15].textContent;
                        var _topBtn = document.querySelector(
                          ".sc-meganav__priority-drop-btn"
                        );
                        if (_topBtn) {
                          _topBtn.innerHTML = (0, _scCommonMethods.trim)(
                            _titleText
                          );
                        }
                      }
                    }
                  }
                }
              },
              /**
               * Updates the navigation elements based on the current URL.
               */
            },
            {
              key: "updateOpenAccountNavigation",
              value: function updateOpenAccountNavigation() {
                var navigationTarget = document.querySelector(
                  "[data-navigation-targets]"
                );
                if (!navigationTarget) return;
                var navigationObj;
                try {
                  navigationObj = JSON.parse(
                    navigationTarget.getAttribute("data-navigation-targets")
                  );
                } catch (e) {
                  return;
                }
                var url = window.location.pathname;
                var accountBtn = document.querySelector(
                  ".sc-meganav__account-btn"
                );
                var openAccount = document.querySelector(
                  ".sc-meganav__open-account"
                );
                if (!accountBtn || !openAccount) return;
                navigationObj.some(function (element) {
                  var pageName = element["page-name"],
                    itemType = element["item-type"],
                    itemTarget = element["item-target"],
                    itemName = element["item-name"];
                  if (url.includes(pageName) || pageName === "default") {
                    if (itemType === "popin") {
                      openAccount.classList.add(itemTarget);
                    } else {
                      accountBtn.setAttribute("href", itemTarget);
                    }
                    accountBtn.innerHTML = itemName;
                    accountBtn.setAttribute("title", itemName);
                    return true; // Stop iterating
                  }

                  return false;
                });
              },

              /**
               * changes logo and add class based on meta attribute like saadiq, islamic
               * @param {Object} pageContext - page information in objects
               * Example:
               * prioritySaadiqIslamic(pageContext)
               **/
            },
            {
              key: "prioritySaadiqIslamic",
              value: function prioritySaadiqIslamic(pageContext) {
                // Add priority class to logo to show different logo for priority
                var logo = document.querySelector(
                  ".sc-meganav .sc-meganav__logo"
                );
                if (pageContext.segment === "priority" && logo) {
                  logo.classList.add("sc-meganav__logo-priority");
                }
                // Add sc-meganav__logo-saadiq class to logo to show different logo for Saadiq
                if (
                  pageContext.segment === "saadiq" ||
                  pageContext.segment === "islamic" ||
                  pageContext.slug === "saadiq" ||
                  pageContext.slug === "islamic"
                ) {
                  if (logo) {
                    logo.classList.add("sc-meganav__logo-saadiq");
                  }
                  var logoLink = document.querySelector(
                    ".sc-meganav__logo-link"
                  );
                  if (logoLink) {
                    logoLink.innerHTML =
                      '\n         <div class="sc-meganav__saadiq-logo-text"></div>\n         <div class="sc-meganav__saadiq-logo"></div>\n         <span class="visuallyhidden sc-hidden">Standard Chartered</span>\n      ';
                  }
                  var linkNew = document.querySelector(
                    ".sc-meganav__logo-link-new"
                  );
                  if (linkNew) {
                    linkNew.innerHTML =
                      '\n         <div class="sc-meganav__saadiq-logo-text"></div>\n         <div class="sc-meganav__saadiq-logo"></div>\n         <span class="visuallyhidden sc-hidden">Standard Chartered</span>\n      ';
                  }
                }

                // Changing the logo for Priority Page via js.
                var isPriorityPage = "";
                var segment = document.querySelector('meta[name="sc:segment"]');
                if (segment) {
                  isPriorityPage = segment.getAttribute("content");
                }

                /* eslint-disable no-undef */
                var priorityLogoStyles =
                  ".sc-meganav__logo .sc-meganav__logo-link{background-image:url(https://av.sc.com/assets/global/icons/svg/standard-chartered-logo-priority-white.svg) !important}";

                /* eslint-disable no-undef */
                var priorityPrivateLogoStyle =
                  ".sc-meganav__logo .sc-meganav__logo-link{background-image:url(https://av.sc.com/assets/global/icons/svg/standard-chartered-logo-priority-private-white.svg) !important}";

                /* eslint-disable no-undef */
                var privateBankingLogoStyle =
                  ".sc-meganav__logo .sc-meganav__logo-link{background-image:url(https://av.sc.com/assets/global/icons/svg/standard-chartered-logo-private-bank-white.svg) !important}";
                if (
                  document.querySelector(".sc-meganav") &&
                  !document
                    .querySelector(".sc-meganav")
                    .classList.contains("sc-meganav--dark")
                ) {
                  /* eslint-disable no-undef */
                  priorityLogoStyles =
                    ".sc-meganav__logo .sc-meganav__logo-link{background-image:url(https://av.sc.com/assets/global/images/components/header/standard-chartered-logo-priority.svg) !important}";

                  /* eslint-disable no-undef */
                  priorityPrivateLogoStyle =
                    ".sc-meganav__logo .sc-meganav__logo-link{background-image:url(https://av.sc.com/assets/global/images/components/header/standard-chartered-logo-priority-private.svg) !important}";

                  /* eslint-disable no-undef */
                  privateBankingLogoStyle =
                    ".sc-meganav__logo .sc-meganav__logo-link{background-image:url(https://av.sc.com/assets/global/images/components/header/standard-chartered-logo-private-bank.svg) !important}";
                }
                if (isPriorityPage === "priority") {
                  // Include the logo css only if the page segment is priority.
                  var styleSheet = document.createElement("style");
                  styleSheet.innerText = priorityLogoStyles;
                  document.head.appendChild(styleSheet);
                }
                if (isPriorityPage === "priority-private") {
                  var _styleSheet = document.createElement("style");
                  _styleSheet.innerText = priorityPrivateLogoStyle;
                  document.head.appendChild(_styleSheet);
                }
                if (isPriorityPage === "private-banking") {
                  var _styleSheet2 = document.createElement("style");
                  _styleSheet2.innerText = privateBankingLogoStyle;
                  document.head.appendChild(_styleSheet2);
                }
              },
            },
          ]);
          return ScMeganav;
        })();
        var instance = new ScMeganav();
        document.addEventListener("DOMContentLoaded", function () {
          instance.init();
        });
        var _default = instance;
        exports.default = _default;
      },
      { "../../../js/sc-common-methods": 9 },
    ],
    5: [
      function (require, module, exports) {
        (function (global) {
          (function () {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true,
            });
            exports.default = void 0;
            var _scCommonMethods = require("../../../js/sc-common-methods");
            function _typeof(obj) {
              "@babel/helpers - typeof";
              return (
                (_typeof =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (obj) {
                        return typeof obj;
                      }
                    : function (obj) {
                        return obj &&
                          "function" == typeof Symbol &&
                          obj.constructor === Symbol &&
                          obj !== Symbol.prototype
                          ? "symbol"
                          : typeof obj;
                      }),
                _typeof(obj)
              );
            }
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
                Object.defineProperty(
                  target,
                  _toPropertyKey(descriptor.key),
                  descriptor
                );
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              Object.defineProperty(Constructor, "prototype", {
                writable: false,
              });
              return Constructor;
            }
            function _toPropertyKey(arg) {
              var key = _toPrimitive(arg, "string");
              return _typeof(key) === "symbol" ? key : String(key);
            }
            function _toPrimitive(input, hint) {
              if (_typeof(input) !== "object" || input === null) return input;
              var prim = input[Symbol.toPrimitive];
              if (prim !== undefined) {
                var res = prim.call(input, hint || "default");
                if (_typeof(res) !== "object") return res;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return (hint === "string" ? String : Number)(input);
            }
            /* scLiteModalOpen */
            var scLiteModalElements = {};
            global.scLiteModalOpen = false;
            var disclaimerScLiteModalOpen = false;
            global.modalTabIndex = -1;

            //initialize modal class
            var classNames = {
              open: "sc-modal--show",
              close: "is-close",
              visible: "is-visible",
              openVisible: "sc-modal--show is-visible",
              modal: "sc-modal",
              scroll: "sc-modal__scroll sc-rte",
              wrapper: "sc-modal__wrapper",
              content: "sc-modal__content-scroll",
              closeButtonWrapper: "sc-modal__close",
              closeButton: "sc-modal__close-button",
              bodyModalOpen: "sc-modal__no-scroll",
              modalId: "sc-modal-lightbox",
            };
            var ScModal = /*#__PURE__*/ (function () {
              function ScModal() {
                _classCallCheck(this, ScModal);
              }
              _createClass(ScModal, [
                {
                  key: "init",
                  value: function init() {
                    var that = this;
                    that.accessibility();
                    //Press escape key
                    document.body.addEventListener("keydown", function (evt) {
                      if (evt.keyCode === 27) {
                        //Menu modal not open and common modal is open
                        if (
                          !document.querySelector(".sc-hdr .sc-modal--show") &&
                          global.scLiteModalOpen
                        ) {
                          evt.preventDefault();
                          that.hideModal(classNames.modalId);
                        }
                      }
                    });
                    document.body.addEventListener("click", function (event) {
                      var closeModal =
                        typeof event.target.getAttribute("data-send") ===
                          "undefined" ||
                        event.target.getAttribute("data-send") === null
                          ? ""
                          : event.target
                              .getAttribute("data-send")
                              .toLowerCase();
                      if (
                        global.scLiteModalOpen &&
                        event.target.id &&
                        (event.target.id == "sc-modal-lightbox" ||
                          event.target.id == "sc-modal-lightbox-scroll")
                      ) {
                        //Modal is already open and clicked outside of the modal content
                        that.hideModal(classNames.modalId);
                        return;
                      } else if (
                        global.scLiteModalOpen &&
                        event.target.className &&
                        (event.target.className.indexOf(
                          "sc-modal__close-button"
                        ) !== -1 ||
                          event.target.className.indexOf(
                            "sc-external-link-button"
                          ) !== -1 ||
                          event.target.className.indexOf(
                            classNames.closeButtonWrapper
                          ) !== -1)
                      ) {
                        //Modal is already open and clicked close button
                        that.hideModal(classNames.modalId);
                        return;
                      } else if (
                        event.target.closest("a") &&
                        event.target.closest("a[data-modal-source]")
                      ) {
                        event.preventDefault();
                        that.modalWindow(
                          event.target
                            .closest("[data-modal-source]")
                            .getAttribute("data-modal-source")
                        );
                        global.scLiteModalOpen = true;
                        if (event.target.closest("[data-tab-number]")) {
                          global.modalTabIndex = event.target
                            .closest("[data-tab-number]")
                            .getAttribute("data-tab-number");
                        }
                      } else if (event.target.closest("a")) {
                        // eslint-disable-next-line no-undef
                        var href = event.target.closest("a").href;
                        var urlBreak = (0, _scCommonMethods.urlBreakdown)(href);
                        if (
                          !document.getElementById("adobelaunchscript") &&
                          closeModal
                        ) {
                          that.hideModal(classNames.modalId);
                        } else if (
                          !(0, _scCommonMethods.isInternalDomain)(
                            urlBreak.domain,
                            href
                          ) &&
                          urlBreak.domain !== "" &&
                          urlBreak.domain !== document.location.hostname
                        ) {
                          /**
                           * 1. urlBreak don't contain internal domains
                           * 2. urlBreak is not empty
                           * 3. urlBreak is not equal to the web host
                           * 4. modal is not open yet
                           */
                          event.preventDefault();
                          if (event.target.closest("[data-tab-number]")) {
                            global.modalTabIndex = event.target
                              .closest("[data-tab-number]")
                              .getAttribute("data-tab-number");
                          }
                          that.settingGlobalVar(
                            disclaimerScLiteModalOpen,
                            event.target.closest("a").href
                          );
                        }
                      }
                    });
                  },
                },
                {
                  key: "accessibility",
                  value: function accessibility() {
                    var anchorList = document.querySelectorAll("a");
                    if (anchorList.length) {
                      var counter = 1;
                      anchorList.forEach(function (anchor) {
                        var urlBreak = (0, _scCommonMethods.urlBreakdown)(
                          anchor.getAttribute("href")
                        );
                        if (
                          !(0, _scCommonMethods.isInternalDomain)(
                            urlBreak.domain
                          ) &&
                          urlBreak.domain !== "" &&
                          urlBreak.domain !== document.location.hostname
                        ) {
                          //True if it's an external domain
                          anchor.setAttribute("data-tab-number", counter++);
                          anchor.setAttribute("aria-haspopup", true);
                        } else if (anchor.getAttribute("href") == "#null") {
                          anchor.setAttribute("data-tab-number", counter++);
                          anchor.setAttribute("aria-haspopup", true);
                        }
                      });
                    }
                    var labelList = document.querySelectorAll("label[for]");
                    if (labelList.length) {
                      for (var i = 0; i < labelList.length; i++) {
                        var id = labelList[i].getAttribute("for");
                        if (
                          document.getElementById(id) &&
                          typeof labelList[i].className === "string" &&
                          typeof labelList[i].className.includes !==
                            "undefined" &&
                          labelList[i].className.indexOf(
                            "sc-btn-toggle__switch"
                          ) == -1
                        ) {
                          if (document.getElementById(id).checked) {
                            labelList[i].setAttribute("aria-expanded", true);
                          } else {
                            labelList[i].setAttribute("aria-expanded", false);
                          }
                          labelList[i].setAttribute("role", "button");
                        }
                      }
                      labelList.forEach(function (evt) {
                        evt.addEventListener("click", function (event) {
                          if (
                            typeof event.target.className === "string" &&
                            typeof event.target.className.includes !==
                              "undefined" &&
                            event.target.className.indexOf(
                              "sc-btn-toggle__switch"
                            ) == -1
                          ) {
                            if (
                              event.target.hasAttribute("aria-expanded") &&
                              event.target.getAttribute("aria-expanded") ==
                                "true"
                            ) {
                              event.target.setAttribute("aria-expanded", false);
                            } else {
                              event.target.setAttribute("aria-expanded", true);
                            }
                          }
                        });
                      });
                      labelList.forEach(function (evt) {
                        evt.addEventListener("keyup", function (event) {
                          if (event.keyCode == 13 || event.keyCode == 32) {
                            var attr = event.target.getAttribute("for");
                            var checkbox = document.getElementById(
                              "".concat(attr)
                            );
                            if (
                              checkbox &&
                              typeof event.target.className === "string" &&
                              typeof event.target.className.includes !==
                                "undefined" &&
                              event.target.className.indexOf(
                                "sc-btn-toggle__switch"
                              ) == -1
                            ) {
                              if (
                                typeof event.target.className === "string" &&
                                typeof event.target.className.includes !==
                                  "undefined" &&
                                event.target.className.indexOf(
                                  "sc-accordion-terms__header"
                                ) !== -1 &&
                                event.target.querySelector("a")
                              ) {
                                event.target.querySelector("a").click();
                                event.target
                                  .querySelector("a")
                                  .setAttribute("tabindex", -1);
                              } else if (checkbox.checked) {
                                event.target
                                  .closest("label")
                                  .setAttribute("aria-expanded", false);
                                checkbox.checked = false;
                                var changeEvent = new Event("change");
                                checkbox.dispatchEvent(changeEvent);
                              } else {
                                event.target
                                  .closest("label")
                                  .setAttribute("aria-expanded", true);
                                checkbox.checked = true;
                                var _changeEvent = new Event("change");
                                checkbox.dispatchEvent(_changeEvent);
                              }
                            }
                          }
                        });
                      });
                    }

                    //Checkbox attribute
                    var checkboxLabelList = document.querySelectorAll(
                      "label[class='sc-btn-toggle__switch']"
                    );
                    if (checkboxLabelList.length) {
                      for (var _i = 0; _i < checkboxLabelList.length; _i++) {
                        var _id = checkboxLabelList[_i].getAttribute("for");
                        if (
                          document.getElementById(_id) &&
                          typeof checkboxLabelList[_i].className === "string" &&
                          typeof checkboxLabelList[_i].className.includes !==
                            "undefined" &&
                          checkboxLabelList[_i].className.indexOf(
                            "sc-btn-toggle__switch"
                          ) !== -1
                        ) {
                          if (document.getElementById(_id).checked) {
                            checkboxLabelList[_i].setAttribute(
                              "aria-pressed",
                              true
                            );
                          } else {
                            checkboxLabelList[_i].setAttribute(
                              "aria-pressed",
                              false
                            );
                          }
                          checkboxLabelList[_i].setAttribute("role", "button");
                        }
                      }
                      checkboxLabelList.forEach(function (evt) {
                        evt.addEventListener("click", function (event) {
                          if (
                            typeof event.target.className === "string" &&
                            typeof event.target.className.includes !==
                              "undefined" &&
                            event.target.className.indexOf(
                              "sc-btn-toggle__switch"
                            ) !== -1
                          ) {
                            if (
                              event.target.hasAttribute("aria-pressed") &&
                              event.target.getAttribute("aria-pressed") ==
                                "true"
                            ) {
                              event.target.setAttribute("aria-pressed", false);
                            } else {
                              event.target.setAttribute("aria-pressed", true);
                            }
                          }
                        });
                      });
                      checkboxLabelList.forEach(function (evt) {
                        evt.addEventListener("keyup", function (event) {
                          if (event.keyCode == 13 || event.keyCode == 32) {
                            var attr = event.target.getAttribute("for");
                            if (
                              document.getElementById("".concat(attr)) &&
                              typeof event.target.className === "string" &&
                              typeof event.target.className.includes !==
                                "undefined" &&
                              event.target.className.indexOf(
                                "sc-btn-toggle__switch"
                              ) !== -1
                            ) {
                              if (
                                typeof event.target.className === "string" &&
                                typeof event.target.className.includes !==
                                  "undefined" &&
                                event.target.className.indexOf(
                                  "sc-accordion-terms__header"
                                ) !== -1 &&
                                event.target.querySelector("a")
                              ) {
                                event.target.querySelector("a").click();
                                event.target
                                  .querySelector("a")
                                  .setAttribute("tabindex", -1);
                              } else if (
                                document.getElementById("".concat(attr)).checked
                              ) {
                                document.getElementById(
                                  "".concat(attr)
                                ).checked = false;
                                event.target.setAttribute(
                                  "aria-pressed",
                                  false
                                );
                              } else {
                                document.getElementById(
                                  "".concat(attr)
                                ).checked = true;
                                event.target.setAttribute("aria-pressed", true);
                              }
                            }
                          }
                        });
                      });
                    }
                  },

                  /**
                   * used for remove modal content from body
                   *
                   * @param {Boolean} disclaimerScLiteModalOpen
                   * @param {String} url URL of the anchor tag
                   * @example
                   * settingGlobalVar(true, 'sc.com')
                   */
                },
                {
                  key: "settingGlobalVar",
                  value: function settingGlobalVar(
                    disclaimerScLiteModalOpen,
                    url
                  ) {
                    var that = this;
                    if (disclaimerScLiteModalOpen) {
                      that.hideModal(classNames.modalId);
                      return;
                    }
                    if (url) {
                      that.modalWindow("external-links-disclaimer", url);
                      global.scLiteModalOpen = true;
                      disclaimerScLiteModalOpen = true;
                    }
                  },

                  /**
                   * used for remove modal content from body
                   *
                   * @example
                   * hideModal('sc-modal')
                   */
                },
                {
                  key: "hideModal",
                  value: function hideModal(clsName) {
                    if (
                      clsName &&
                      document.querySelector("#".concat(clsName))
                    ) {
                      global.scLiteModalOpen = false;
                      disclaimerScLiteModalOpen = false;
                      document.querySelector("#".concat(clsName)).remove();
                      document
                        .querySelector("html")
                        .classList.remove(classNames.bodyModalOpen);
                      if (
                        document.querySelector(
                          '[data-tab-number="'.concat(
                            global.modalTabIndex,
                            '"]'
                          )
                        )
                      ) {
                        document
                          .querySelector(
                            '[data-tab-number="'.concat(
                              global.modalTabIndex,
                              '"]'
                            )
                          )
                          .setAttribute("tabindex", "0");
                        document
                          .querySelector(
                            '[data-tab-number="'.concat(
                              global.modalTabIndex,
                              '"]'
                            )
                          )
                          .focus();
                        document
                          .querySelector(
                            '[data-tab-number="'.concat(
                              global.modalTabIndex,
                              '"]'
                            )
                          )
                          .blur();
                        global.modalTabIndex = -1;
                      }
                    }
                  },

                  /**
                   * create div element for modal and push it inside body
                   *
                   * @example
                   * setupElements()
                   */
                },
                {
                  key: "setupElements",
                  value: function setupElements() {
                    var that = this;
                    that.hideModal(classNames.modalId);
                    scLiteModalElements.modal = that.createDiv(
                      classNames.modal,
                      "id=sc-modal-lightbox"
                    );
                    scLiteModalElements.scroll = that.createDiv(
                      classNames.scroll,
                      "id=sc-modal-lightbox-scroll"
                    );
                    scLiteModalElements.wrapper = that.createDiv(
                      classNames.wrapper
                    );
                    scLiteModalElements.content = that.createDiv(
                      classNames.content,
                      "data-send=key-pressed"
                    );
                    scLiteModalElements.closeButtonWrapper = that.createDiv(
                      classNames.closeButtonWrapper
                    );
                    scLiteModalElements.closeButton = that.createDiv(
                      classNames.closeButton,
                      "data-send=close-modal;aria-label=Modal Close;title=Modal Close",
                      "button"
                    );
                    scLiteModalElements.modal.appendChild(
                      scLiteModalElements.scroll
                    );
                    scLiteModalElements.scroll.appendChild(
                      scLiteModalElements.wrapper
                    );
                    scLiteModalElements.wrapper.appendChild(
                      scLiteModalElements.content
                    );
                    scLiteModalElements.wrapper.appendChild(
                      scLiteModalElements.closeButtonWrapper
                    );
                    scLiteModalElements.closeButtonWrapper.appendChild(
                      scLiteModalElements.closeButton
                    );
                    document
                      .querySelector("body")
                      .appendChild(scLiteModalElements.modal);
                    document
                      .querySelector("#".concat(classNames.modalId))
                      .classList.add("".concat(classNames.open));
                    document
                      .querySelector("html")
                      .classList.add(classNames.bodyModalOpen);
                  },

                  /**
                   * create div element for modal
                   *
                   * @param {String} className html elements class name
                   * @param {String} data html elements attributes
                   * @example
                   * createDiv('sc-modal', 'id=id=sc-modal-lightbox')
                   */
                },
                {
                  key: "createDiv",
                  value: function createDiv(className, data) {
                    var type =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : "div";
                    var dataAttribute = data || "";
                    var element = document.createElement(type);
                    element.setAttribute("class", className);
                    if (dataAttribute) {
                      //true if attributes exists
                      dataAttribute = dataAttribute.split(";");
                      for (var i = 0; i < dataAttribute.length; i++) {
                        var attrList = dataAttribute[i].split("=");
                        element.setAttribute(attrList[0], attrList[1]);
                      }
                    }
                    return element;
                  },

                  /**
                   * Open the modal window
                   *
                   * @param {String} modalSource Data modal id
                   * @param {String} externalURL external link URL
                   * @example
                   * modalWindow('external-links-disclaimer', 'https://www.facebook.com/StandardChartered')
                   */
                },
                {
                  key: "modalWindow",
                  value: function modalWindow(modalSource) {
                    var externalURL =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : null;
                    var that = this;
                    that.setupElements();
                    var modalElement = document.querySelector(
                      '[data-modal-id="'.concat(modalSource, '"]')
                    );
                    if (
                      modalElement === null ||
                      typeof modalElement === "undefined"
                    ) {
                      //if data-modal-id attribute not exist then it will return
                      return;
                    }
                    //select modal content and push it inside sc-modal__content class
                    var modalContent = modalElement.cloneNode(true);

                    //Small class added if data-size='small' exist inside the modal content
                    var dataSize = modalElement.getAttribute("data-size");
                    var wrapperSelector = document.querySelector(
                      ".sc-modal--show .sc-modal__wrapper"
                    );
                    if (dataSize && dataSize === "small") {
                      wrapperSelector === null || wrapperSelector === void 0
                        ? void 0
                        : wrapperSelector.classList.add(
                            "sc-modal__wrapper--small"
                          );
                    } else if (dataSize && dataSize === "medium") {
                      wrapperSelector === null || wrapperSelector === void 0
                        ? void 0
                        : wrapperSelector.classList.add(
                            "sc-modal__wrapper--medium"
                          );
                    }

                    //Analytics code here for popup view
                    setTimeout(function () {
                      var modalAnalytics = document.querySelector(
                        ".sc-modal .sc-modal__content[data-popup-name]"
                      );
                      if (modalAnalytics) {
                        var popupName =
                          modalAnalytics.getAttribute("data-popup-name");
                        (0, _scCommonMethods.triggerPopupViewedTagging)(
                          popupName
                        );
                      }
                    }, 500);
                    var innerModal =
                      modalContent.querySelectorAll("[data-modal-id]"); //list of inner modal
                    for (var i = 0; i < innerModal.length; i++) {
                      if (
                        modalContent.querySelectorAll("[data-modal-id]").length
                      ) {
                        //checking inner modal exist or not and remove it
                        modalContent.querySelector("[data-modal-id]").remove();
                      }
                    }
                    document
                      .querySelector(
                        "#"
                          .concat(classNames.modalId, " .")
                          .concat(classNames.wrapper, " .")
                          .concat(classNames.content)
                      )
                      .appendChild(modalContent);
                    var externalLinkBtn = document.querySelector(
                      "#".concat(
                        classNames.modalId,
                        " .sc-external-link-button"
                      )
                    );
                    if (externalURL && externalLinkBtn) {
                      //append external link inside href attributes
                      externalLinkBtn.setAttribute("href", externalURL);
                    }
                    var modalTitle = document.querySelector(
                      ".sc-modal .sc-modal__wrapper .sc-title"
                    );
                    if (modalTitle) {
                      modalTitle.setAttribute("tabindex", "0");
                      modalTitle.focus();
                      modalTitle.blur();
                    }
                    var content = document.querySelector(
                      ".sc-modal .sc-modal__content"
                    );
                    if (content) {
                      content.setAttribute("tabindex", "0");
                      content.focus();
                      content.blur();
                      content.removeAttribute("tabindex");
                    }
                    setTimeout(function () {
                      var wistiaId = document.querySelector(
                        ".sc-modal .wistia_embed .w-big-play-button"
                      );
                      if (wistiaId) {
                        wistiaId.click();
                      }
                    }, 500);
                    that.removeLinkTag();
                  },

                  /**
                   * remove link tag from modal window
                   *
                   * @example
                   * removeLinkTag()
                   */
                },
                {
                  key: "removeLinkTag",
                  value: function removeLinkTag() {
                    var linkList = document.querySelectorAll(".sc-modal link");
                    if (linkList.length) {
                      for (var i = 0; i < linkList.length; i++) {
                        linkList[i].remove();
                      }
                    }
                  },
                },
              ]);
              return ScModal;
            })();
            var instance = new ScModal();
            instance.init();
            var _default = instance;
            exports.default = _default;
          }).call(this);
        }).call(
          this,
          typeof global !== "undefined"
            ? global
            : typeof self !== "undefined"
            ? self
            : typeof window !== "undefined"
            ? window
            : {}
        );
      },
      { "../../../js/sc-common-methods": 9 },
    ],
    6: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _scCommonMethods = require("./sc-common-methods");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
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
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        var CTAMobile = /*#__PURE__*/ (function () {
          function CTAMobile() {
            _classCallCheck(this, CTAMobile);
          }
          _createClass(CTAMobile, [
            {
              key: "init",
              value: function init() {
                var _this = this;
                var selectors = [
                  "[data-mobile-href]",
                  "[data-mobile-target]",
                  "[data-mobile-data-modal-source]",
                ];
                if ((0, _scCommonMethods.isMobile)()) {
                  selectors.forEach(function (selector) {
                    return _this.convert(selector);
                  });
                }
              },

              /**
               * Converts data attributes on elements selected by the given selector.
               *
               * @param {string} selector - The CSS selector used to find elements.
               */
            },
            {
              key: "convert",
              value: function convert(selector) {
                var elements = document.querySelectorAll(selector);
                // Removing square brackets from the selector to get the attribute name
                // eslint-disable-next-line no-useless-escape
                var dataAttr = selector.replace(/[\[\]]/g, "");
                var oDataAttr = dataAttr.replace("data-mobile-", "");
                if (elements.length === 0) return;
                elements.forEach(function (element) {
                  var dataAttrValue = element.getAttribute(dataAttr);
                  var oDataAttrValue = element.getAttribute(oDataAttr);
                  if (
                    dataAttrValue === "" ||
                    dataAttrValue === oDataAttrValue
                  ) {
                    return;
                  } else {
                    element.setAttribute(oDataAttr, dataAttrValue);
                    if (dataAttr === "data-mobile-href") {
                      element.removeAttribute("data-modal-source");
                      element.removeAttribute("data-send");
                    }
                  }
                });
              },
            },
          ]);
          return CTAMobile;
        })();
        var instance = new CTAMobile();
        instance.init();
        var _default = instance;
        exports.default = _default;
      },
      { "./sc-common-methods": 9 },
    ],
    7: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _scCommonMethods = require("./sc-common-methods");
        function _regeneratorRuntime() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, "_invoke", {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value &&
                  "object" == _typeof(value) &&
                  hasOwn.call(value, "__await")
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke("next", value, resolve, reject);
                      },
                      function (err) {
                        invoke("throw", err, resolve, reject);
                      }
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke("throw", error, resolve, reject);
                      }
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = "suspendedStart";
            return function (method, arg) {
              if ("executing" === state)
                throw new Error("Generator is already running");
              if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ("next" === context.method)
                  context.sent = context._sent = context.arg;
                else if ("throw" === context.method) {
                  if ("suspendedStart" === state)
                    throw ((state = "completed"), context.arg);
                  context.dispatchException(context.arg);
                } else
                  "return" === context.method &&
                    context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self, context);
                if ("normal" === record.type) {
                  if (
                    ((state = context.done ? "completed" : "suspendedYield"),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                "throw" === record.type &&
                  ((state = "completed"),
                  (context.method = "throw"),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                ("throw" === methodName &&
                  delegate.iterator.return &&
                  ((context.method = "return"),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  "throw" === context.method)) ||
                  ("return" !== methodName &&
                    ((context.method = "throw"),
                    (context.arg = new TypeError(
                      "The iterator does not provide a '" +
                        methodName +
                        "' method"
                    )))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type)
              return (
                (context.method = "throw"),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  "return" !== context.method &&
                    ((context.method = "next"), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = "throw"),
                (context.arg = new TypeError(
                  "iterator result is not an object"
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = "normal"),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; )
                      if (hasOwn.call(iterable, i))
                        return (
                          (next.value = iterable[i]), (next.done = !1), next
                        );
                    return (next.value = undefined), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              "GeneratorFunction"
            )),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = "function" == typeof genFun && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  "GeneratorFunction" === (ctor.displayName || ctor.name))
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, "GeneratorFunction")),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, "Generator"),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, "toString", function () {
              return "[object Generator]";
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this)
                    "t" === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
              },
              stop: function stop() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ("throw" === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = "throw"),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = "next"), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ("root" === entry.tryLoc) return handle("end");
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"),
                      hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, "finallyLoc") &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ("break" === type || "continue" === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = "next"),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if ("throw" === record.type) throw record.arg;
                return (
                  "break" === record.type || "continue" === record.type
                    ? (this.next = record.arg)
                    : "return" === record.type
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === record.type &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc,
                  }),
                  "next" === this.method && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }
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
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        var FormURL = /*#__PURE__*/ (function () {
          function FormURL() {
            _classCallCheck(this, FormURL);
          }
          _createClass(FormURL, [
            {
              key: "init",
              value: (function () {
                var _init = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
                    var _this = this;
                    var pageUrl,
                      country,
                      paramsApiUrl,
                      response,
                      data,
                      queryStringJson,
                      urlModified;
                    return _regeneratorRuntime().wrap(
                      function _callee$(_context) {
                        while (1)
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              pageUrl = (0, _scCommonMethods.getPageUrl)();
                              country = (0,
                              _scCommonMethods.getCurrentCountry)();
                              paramsApiUrl =
                                document.body.dataset.allowedParams ||
                                "https://av.sc.com/".concat(
                                  country,
                                  "/data/whitelist-parameter/allowable/all.json"
                                );
                              _context.prev = 3;
                              _context.next = 6;
                              return fetch(paramsApiUrl);
                            case 6:
                              response = _context.sent;
                              _context.next = 9;
                              return response.json();
                            case 9:
                              data = _context.sent;
                              console.log("ssss 2: ", data);
                              if (
                                _typeof(data) === "object" &&
                                data !== null &&
                                data.scb
                              ) {
                                window.scCommonConstants =
                                  window.scCommonConstants || {};
                                setTimeout(function () {
                                  window.scCommonConstants.ALLOWABLE_QUERYSTRING =
                                    data;
                                }, 1000);
                                console.log(
                                  "ssss 1: ",
                                  window.scCommonConstants.ALLOWABLE_QUERYSTRING
                                );
                              }
                              _context.next = 16;
                              break;
                            case 13:
                              _context.prev = 13;
                              _context.t0 = _context["catch"](3);
                              console.error(
                                "Error fetching allowed params:",
                                _context.t0
                              );
                            case 16:
                              if (pageUrl.queryString) {
                                queryStringJson = (0,
                                _scCommonMethods.convertQueryStringToJsonObject)(
                                  pageUrl.queryString.toLowerCase()
                                );
                                this.handleQueryString(queryStringJson);
                              }
                              urlModified = false;
                              document.addEventListener(
                                "mousedown",
                                function (event) {
                                  var element = event.target.closest("a");
                                  if (!element) return;
                                  if (
                                    urlModified &&
                                    element.closest(".m-disclaimer")
                                  )
                                    return;
                                  var linkSwitching = element.getAttribute(
                                    "data-cta-link-switching"
                                  );
                                  if (linkSwitching) {
                                    _this.handleLinkSwitching(element);
                                    return;
                                  }
                                  var href = element.getAttribute("href");
                                  var swap =
                                    element.getAttribute("swap-attrs") ||
                                    element.getAttribute("data-swap-attrs") ||
                                    "";
                                  var ctaParamsTakePrecedence =
                                    element.dataset.ctaUrlParamsPrecedence;

                                  // Apply parameters to form URLs.
                                  // If the CTA has pass-params data attribute, then pass the params.
                                  // To do: remove the shouldCarryTrackingParams.
                                  if (
                                    href &&
                                    (0,
                                    _scCommonMethods.shouldCarryTrackingParams)(
                                      href
                                    )
                                  ) {
                                    href = (0,
                                    _scCommonMethods.applyCookieParams)(
                                      href,
                                      swap,
                                      ctaParamsTakePrecedence
                                    );
                                    element.setAttribute("href", href);
                                    urlModified = true;
                                  }
                                }
                              );
                            case 19:
                            case "end":
                              return _context.stop();
                          }
                      },
                      _callee,
                      this,
                      [[3, 13]]
                    );
                  })
                );
                function init() {
                  return _init.apply(this, arguments);
                }
                return init;
              })(),
              /**
               * if data-cta-link-switching attribute exists inside CTA, then generate dynamic URL
               */
            },
            {
              key: "handleLinkSwitching",
              value: function handleLinkSwitching(el) {
                var url = el.getAttribute("href");
                if (
                  !window.employeeProductURL ||
                  url.includes(
                    "?".concat(window.employeeProductURL.queryParameter, "=")
                  )
                )
                  return; // True if URL was already updated

                var urlQueryParams = new URLSearchParams(
                  (0, _scCommonMethods.getPageContext)().queryString
                );
                var urlObj = new URL(url);
                var ctaQueryParams = new URLSearchParams(urlObj.search);
                var urlWithoutQueryString = ""
                  .concat(urlObj.protocol, "//")
                  .concat(urlObj.hostname)
                  .concat(urlObj.pathname);
                var newQueryString = "";
                window.employeeProductURL.components.forEach(function (
                  component
                ) {
                  var origin = component.origin;
                  if (origin === "static") {
                    newQueryString += "".concat(component.value, "/");
                  } else if (origin === "pageUrl") {
                    var values = urlQueryParams.get(component.key);
                    newQueryString +=
                      (values
                        ? values
                        : window.employeeProductURL.defaultValue) + "/";
                  } else if (origin === "ctaURL") {
                    var _values = ctaQueryParams.get(component.key);
                    newQueryString +=
                      (_values
                        ? _values
                        : window.employeeProductURL.defaultValue) + "/";
                  }
                });
                var newUrl = ""
                  .concat(urlWithoutQueryString, "?")
                  .concat(window.employeeProductURL.queryParameter, "=")
                  .concat(newQueryString);
                el.setAttribute("href", newUrl);
              },

              /**
               * Save parameters in the query string to Cookie.
               *
               * @param object queries The object contains query string parameter values.
               */
            },
            {
              key: "handleQueryString",
              value: function handleQueryString(queries) {
                var paramObj = {};
                var allowableQueryString =
                  window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
                allowableQueryString.forEach(function (param) {
                  if (queries[param.toLowerCase()]) {
                    paramObj[param] = queries[param.toLowerCase()];
                  }
                });
                if (!(0, _scCommonMethods.isEmpty)(paramObj)) {
                  Object.keys(paramObj).forEach(function (key) {
                    (0,
                    _scCommonMethods.setLocalStorageWithExpiry)(key, paramObj[key], 172800000); // Expiry for 2 days.
                  });
                }
              },
            },
          ]);
          return FormURL;
        })();
        var instance = new FormURL();
        instance.init();
        var _default = instance;
        exports.default = _default;
      },
      { "./sc-common-methods": 9 },
    ],
    8: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _splide = _interopRequireDefault(
          require("../../node_modules/@splidejs/splide/dist/js/splide")
        );
        require("./smart-app-banner");
        require("./sg-common-event-listener");
        var _scCommonMethods = require("./sc-common-methods");
        require("./form-url");
        require("./cta-mobile");
        require("../components/organisms/sc-footer/sc-back-to-top");
        require("../components/organisms/sc-modal/sc-modal");
        require("../components/organisms/sc-meganav/sc-meganav");
        require("./sc-smooth-scroll");
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
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
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        // Make Splide globally accessible
        window.Splide = _splide.default;
        var Index = /*#__PURE__*/ (function () {
          function Index() {
            _classCallCheck(this, Index);
          }
          _createClass(Index, [
            {
              key: "init",
              value: function init() {
                this.handlePlayAppStore();
                this.handleTooltip();
                document.addEventListener("keydown", function (event) {
                  if (event.key === "Tab") {
                    // Add the .sc-tab-focus class to the body tag
                    document.body.classList.add("sc-tab-focus");
                  }
                });

                //Splide slider added
                var elms = document.getElementsByClassName("splide");
                setTimeout(function () {
                  Array.from(elms).forEach(function (elm) {
                    var tabsClosest = elm.closest(".sc-tab__tab-wrapper");
                    if (
                      !elm.classList.contains("sc-banner-slider__container") &&
                      !elm.classList.contains("sc-step-by-step__slider") &&
                      !elm.querySelector(".sc-step-by-step__slider-content") &&
                      !tabsClosest
                    ) {
                      var splideInst = new _splide.default(elm).mount();
                      splideInst.on("click", function (slide) {
                        // apply "go" method: slide to the index of the clicked slide (component)
                        splideInst.go(slide.index);
                      });
                    }
                  });
                }, 500);
                document
                  .querySelectorAll('a[target="_blank"]')
                  .forEach(function (anchor) {
                    anchor.setAttribute("rel", "noopener noreferrer");
                  });
              },

              /**
               * based on devices, toggle app store or play store
               */
            },
            {
              key: "handlePlayAppStore",
              value: function handlePlayAppStore() {
                var os = (0, _scCommonMethods.detectOS)();
                var appStoreLinks =
                  document.querySelectorAll(".icon-app-store");
                var playStoreLinks =
                  document.querySelectorAll(".icon-google-play");
                if (os === "iOS") {
                  // Show iOS app store links and hide Android app store links
                  Array.from(appStoreLinks).forEach(function (link) {
                    link.style.display = "inline-flex";
                  });
                  Array.from(playStoreLinks).forEach(function (link) {
                    link.style.display = "none";
                  });
                } else if (os === "Android") {
                  // Show Android app store links and hide iOS app store links
                  Array.from(appStoreLinks).forEach(function (link) {
                    link.style.display = "none";
                  });
                  Array.from(playStoreLinks).forEach(function (link) {
                    link.style.display = "inline-flex";
                  });
                }
              },

              /**
               * Initializes tooltips for elements with the 'sc-tooltip' class.
               * This function enables showing tooltip text on focus and hiding it on blur,
               * enhancing accessibility for keyboard navigation.
               */
            },
            {
              key: "handleTooltip",
              value: function handleTooltip() {
                var tooltips = document.querySelectorAll(".sc-tooltip");
                if (tooltips.length) {
                  tooltips.forEach(function (tooltip) {
                    // When focused, display the tooltip text
                    tooltip.addEventListener("focus", function () {
                      var tooltipText =
                        tooltip.querySelector(".sc-tooltip__text");
                      tooltipText === null || tooltipText === void 0
                        ? void 0
                        : tooltipText.classList.add("sc-tooltip__text--active");
                    });

                    // When focus is removed, hide the tooltip text
                    tooltip.addEventListener("blur", function () {
                      var tooltipText =
                        tooltip.querySelector(".sc-tooltip__text");
                      tooltipText === null || tooltipText === void 0
                        ? void 0
                        : tooltipText.classList.remove(
                            "sc-tooltip__text--active"
                          );
                    });
                  });
                }
              },
            },
          ]);
          return Index;
        })();
        var instance = new Index();
        instance.init();
        var _default = instance;
        exports.default = _default;
      },
      {
        "../../node_modules/@splidejs/splide/dist/js/splide": 1,
        "../components/organisms/sc-footer/sc-back-to-top": 3,
        "../components/organisms/sc-meganav/sc-meganav": 4,
        "../components/organisms/sc-modal/sc-modal": 5,
        "./cta-mobile": 6,
        "./form-url": 7,
        "./sc-common-methods": 9,
        "./sc-smooth-scroll": 10,
        "./sg-common-event-listener": 11,
        "./smart-app-banner": 12,
      },
    ],
    9: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.validateInputNoSlider =
          exports.validateInput =
          exports.vLookup =
          exports.urlBreakdown =
          exports.trim =
          exports.triggerPopupViewedTagging =
          exports.stepFieldErrorStatus =
          exports.smoothScroll =
          exports.sliderFieldErrorStatus =
          exports.sliderErrorStatus =
          exports.shouldCarryTrackingParams =
          exports.setLocalStorageWithExpiry =
          exports.pmt =
          exports.parseUrl =
          exports.matchHeight =
          exports.isMobile =
          exports.isInternalDomain =
          exports.isForm =
          exports.isEmpty =
          exports.initializeSlider =
          exports.handleProductsObj =
          exports.handleProductCalculatorSubmit =
          exports.handlePersistentBarScroll =
          exports.handleCalculatorAnalytics =
          exports.handleAnalyticsCTA =
          exports.getUrlParamName =
          exports.getQueryParam =
          exports.getPosition =
          exports.getPageUrl =
          exports.getPageContext =
          exports.getOuterHeight =
          exports.getLocalStorageWithExpiry =
          exports.getIntExtCampaignInfo =
          exports.getHorizontalPosition =
          exports.getDeviceDetails =
          exports.getCurrentEnvironment =
          exports.getCurrentCountry =
          exports.getCtaType =
          exports.getCtaContext =
          exports.getCookie =
          exports.getCampaignInfoV2 =
          exports.getCampaignInfoV1 =
          exports.getCampaignInfo =
          exports.getAssetDomain =
          exports.getAccordionHeading =
          exports.formatNumbersWithTwoDecimalPlaces =
          exports.extractQueryParams =
          exports.extendedPMT =
          exports.extend =
          exports.detectOS =
          exports.debounceEvents =
          exports.daysInThisMonth =
          exports.convertQueryStringToJsonObject =
          exports.convertNumbers =
          exports.convertMonthsToYearsAndMonths =
          exports.calculateYearMonth =
          exports.calculateRanges =
          exports.calculatePresentValue =
          exports.calculatePMT =
          exports.calculateNPER =
          exports.calculateIRR =
          exports.calculateFutureValue =
          exports.calculateEIR =
          exports.calculateDerivative =
          exports.calcElementLocation =
          exports.bundleParam =
          exports.browserDetect =
          exports.applyCookieParams =
            void 0;
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== "undefined" && o[Symbol.iterator]) ||
            o["@@iterator"];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e2) {
                  throw _e2;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e3) {
              didErr = true;
              err = _e3;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _iterableToArrayLimit(arr, i) {
          var _i =
            null == arr
              ? null
              : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                arr["@@iterator"];
          if (null != _i) {
            var _s,
              _e,
              _x,
              _r,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                if (Object(_i) !== _i) return;
                _n = !1;
              } else
                for (
                  ;
                  !(_n = (_s = _x.call(_i)).done) &&
                  (_arr.push(_s.value), _arr.length !== i);
                  _n = !0
                );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                if (
                  !_n &&
                  null != _i.return &&
                  ((_r = _i.return()), Object(_r) !== _r)
                )
                  return;
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }
        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }
        function _iterableToArray(iter) {
          if (
            (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
            iter["@@iterator"] != null
          )
            return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? ownKeys(Object(source), !0).forEach(function (key) {
                  _defineProperty(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /* eslint-disable no-useless-escape */
        /* global digitalData, scAnalyticsDataArray, _satellite, noUiSlider */
        window.scCommonConstants = {
          DEVELOPMENT: "development",
          PREVIEW: "preview",
          PRODUCTION: "production",
          STAGING: "staging",
          PERSONAL: "personal",
          PRIORITY: "priority",
          BUSINESS: "business",
          CORPORATE: "corporate",
          PRIVATE: "private",
          COMMERCIAL: "commercial",
          LANGUAGES: ["en", "zh"],
          ALLOWABLE_QUERYSTRING: {
            scb: [
              "subChanCode",
              "camp_id",
              "pid",
              "promoCode",
              "promo",
              "referId",
              "instance",
              "state",
              "utm_source",
              "utm_medium",
              "utm_campaign",
              "utm_term",
              "utm_content",
              "GiPrm",
              "productName",
              "truspleBuyerId",
              "CTID",
            ],
            others: ["gclid", "gclsrc"],
            "partner-urls": [
              "https://www.royalsundaram.in/.*",
              "https://www.maxbupa.com/.*",
              "https://www.bharti-axagi.co.in/.*",
              "https://www.iciciprulife.com/.*",
              "https://www.einsure.allianz.com.sg/.*",
              "https://www.allianz-travel-insure.com.sg/.*",
              "https://www.lin.ee/.*",
              "https://www.piapp.com/.*",
            ],
          },
          URL_OBJ: [
            "cmsdev",
            "preview",
            "standardchartered",
            "sc",
            "com",
            "av",
            "assets",
            "global",
            "development",
            "staging",
            "digital",
            "https",
            "cmsstage",
            "cms",
            "dev",
            "zoo",
          ],
        };

        /**
         * Breaks down a given URL into its components.
         * @param {string} currentURL - The URL to be broken down.
         * @returns {Object} An object representing the components of the URL.
         */
        var urlBreakdown = function urlBreakdown(currentURL) {
          var parser = parseUrl(currentURL);
          var queryString = parser.search,
            parts = parser.pathname.split("/"),
            hash = parser.hash,
            countryMapping = {
              sgbeta: "sg",
            };
          if (queryString && queryString.indexOf("?") === 0) {
            queryString = queryString.slice(1);
          }
          var pageURL = {
            domain: null,
            country: null,
            language: null,
            category: null,
            segment: "personal",
            subcategory: null,
            slug: null,
            queryString: queryString,
            hash: null,
            pathname: document.location.pathname,
          };
          pageURL.domain = parser.hostname;
          pageURL.country = parts[1];
          pageURL.language = "en";
          if (pageURL.country === "cn" || pageURL.country === "tw") {
            pageURL.language = "zh";
          }
          if (parts[2]) {
            pageURL.category = parts[2];
            if (parts[2].length === 2) {
              pageURL.language = parts[2];
              pageURL.category = parts[3];
            }
          }
          if (
            parts[parts.length - 1] !== "" &&
            parts[parts.length - 1] !== "index.html"
          ) {
            pageURL.slug = parts[parts.length - 1];
          } else {
            pageURL.slug = parts[parts.length - 2];
          }
          if (pageURL.slug) {
            if (pageURL.slug.indexOf(".") !== -1) {
              var slugger = pageURL.slug.split(".");
              pageURL.name = slugger[0];
              pageURL.extension = slugger[1];
            } else {
              pageURL.name = pageURL.slug;
              pageURL.extension = "";
            }
          } else {
            pageURL.slug = "";
            pageURL.name = "";
            pageURL.extension = "";
          }
          if (
            parts.length <= 4 &&
            window.scCommonConstants.LANGUAGES.indexOf(pageURL.slug) !== -1
          ) {
            pageURL.slug = pageURL.country;
          }
          if (hash) {
            pageURL.hash = hash;
          }
          if (parts.length >= 5) {
            pageURL.subcategory = parts[3];
          }
          if (pageURL.pathname && pageURL.pathname.indexOf("priority") !== -1) {
            pageURL.segment = "priority";
          } else if (
            pageURL.pathname &&
            pageURL.pathname.indexOf("business") !== -1
          ) {
            pageURL.segment = "business";
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
          var parser = document.createElement("a");
          parser.href = url;
          if (parser.protocol != "mailto:") {
            var link_path =
              "/" === parser.pathname.charAt(0)
                ? parser.pathname
                : "/" + parser.pathname;
          } else {
            link_path = parser.pathname;
          }
          return {
            href: parser.href,
            protocal: parser.protocol,
            hostname: parser.hostname,
            port: parser.port,
            pathname:
              parser.hash.indexOf("?") !== -1
                ? link_path + parser.hash
                : link_path,
            rawpath: link_path,
            query: parser.query || parser.search,
            search: parser.query || parser.search,
            hash: parser.hash,
            host: parser.host,
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
          var $subcategory = document.querySelector(
            'meta[name="sc:subcategories"]'
          );
          var $slug = document.querySelector('meta[name="sc:page-slug"]');
          var pageContext = {
            title: null,
            country: null,
            language: null,
            segment: null,
            category: null,
            subcategory: null,
            slug: null,
          };
          if ($title) {
            pageContext.title = $title;
          }
          if ($country) {
            pageContext.country = $country.getAttribute("content");
          }
          if ($language) {
            pageContext.language = $language.getAttribute("content");
          }
          if (!pageContext.language) {
            var docLang = document.documentElement.lang;
            if (docLang) {
              // Document language can be in languageCode-countryCode format, e.g en-US.
              // In front-end context, we don't need countryCode part
              pageContext.language = docLang.split("-")[0].toLowerCase();
            }
          }
          if ($segment) {
            pageContext.segment = $segment.getAttribute("content");
          }
          if ($category) {
            pageContext.category = $category.getAttribute("content");
          }
          if ($subcategory) {
            pageContext.subcategory = $subcategory.getAttribute("content");
          }
          if ($slug) {
            pageContext.slug = $slug.getAttribute("content");
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
          var internal = [
            /^myinfosg.api.gov.sg$/,
            /^sc.com$/,
            /^.*\.sc\.com$/,
            /^standardchartered.com$/,
            /^.*\.standardchartered\.com/,
            /^.*\.standardchartered\.com\..*/,
            /^standardchartered\.co\..*$/,
            /^.*\.standardchartered\.co\..*$/,
            /www.wowmanhattan.com.sg/,
            /saml.singpass.gov.sg/,
            /scb-sg.onelink.me/,
            /#null/,
          ];
          for (var i = 0; i < internal.length; i++) {
            if (internal[i].test(domain)) {
              return true;
            }
          }
          var partnerUrls =
            window.scCommonConstants.ALLOWABLE_QUERYSTRING["partner-urls"];
          if (!Array.isArray(partnerUrls) || partnerUrls.length === 0) {
            return false; // No URLs to check
          }

          var partnerStatus = partnerUrls.some(function (url) {
            return new RegExp(
              "^".concat(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
              "i"
            ).test(ctaUrl);
          });
          if (
            !partnerStatus &&
            !document.querySelector(
              '[data-modal-id="external-links-disclaimer"]'
            )
          ) {
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
          if (!xClick) return "left";
          var maxWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
          );
          var mktCountryCode = getCurrentCountry();
          if (mktCountryCode !== "hk" && mktCountryCode !== "sg") {
            var median = maxWidth / 2;
            return xClick < median ? "left" : "right";
          }

          //Sorted array of positions
          var positions = [
            {
              name: "left",
              depth: 30,
            },
            {
              name: mktCountryCode === "sg" ? "center" : "middle",
              depth: 70,
            },
            {
              name: "right",
              depth: 100,
            },
          ];
          var scrollDepth = (xClick * 100) / maxWidth;
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
          var name = key + "=";
          var decodedCookie;
          try {
            //The decodeURIComponent function can throw an error if the cookie value contains invalid encoding, which might happen if special characters are improperly encoded. To fix this, you can add a try-catch block around decodeURIComponent to handle any decoding errors gracefully.
            decodedCookie = decodeURIComponent(document.cookie);
          } catch (e) {
            return null;
          }
          var ca = decodedCookie.split(";");
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
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
        var getLocalStorageWithExpiry = function getLocalStorageWithExpiry(
          key
        ) {
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
          var _ref,
            _target$closest,
            _ref2,
            _ref3,
            _ref4,
            _ref5,
            _ref6,
            _target$closest2;
          if (!target) return "";
          if (target.closest(".c-modal") || target.closest(".sc-modal")) {
            return "middle";
          }
          if (
            typeof target.className === "string" &&
            typeof target.className.includes !== "undefined" &&
            (target.className.indexOf("sc-card-comparator__compare-btn") !==
              -1 ||
              target.className.indexOf("sc-card-comparator__card-remove") !==
                -1)
          ) {
            return "bottom";
          }
          var closestTarget =
            (_ref =
              (_target$closest = target.closest("a")) !== null &&
              _target$closest !== void 0
                ? _target$closest
                : target.closest("label")) !== null && _ref !== void 0
              ? _ref
              : target;
          var fromTop = parseInt(getPosition(closestTarget), 10) * 100;
          if (
            (_ref2 =
              (_ref3 =
                (_ref4 =
                  (_ref5 =
                    (_ref6 =
                      (_target$closest2 =
                        target.closest(".sc-persistent-bar")) !== null &&
                      _target$closest2 !== void 0
                        ? _target$closest2
                        : target.closest(".m-persistent-bootom-bar")) !==
                      null && _ref6 !== void 0
                      ? _ref6
                      : target.closest(".sc-wealthsaver-calc__sticky")) !==
                    null && _ref5 !== void 0
                    ? _ref5
                    : target.closest(".sc-ft-calc__sticky")) !== null &&
                _ref4 !== void 0
                  ? _ref4
                  : target.closest(".sc-miles-calc__total-result--sticky")) !==
                null && _ref3 !== void 0
                ? _ref3
                : target.closest(".sc-bundled-products__sticky-outer")) !==
              null && _ref2 !== void 0
              ? _ref2
              : target.closest(".sc-bundled-products-sticky__sticky")
          ) {
            //Persistent bar in the bottom
            fromTop = parseInt(window.scrollY + window.innerHeight, 10) * 100;
          } else if (target.closest(".m-persistent-bar")) {
            //Persistent bar in the top
            fromTop = parseInt(window.scrollY + 70, 10) * 100;
          }

          //Sorted array of positions
          var positions = [
            {
              name: "top",
              depth: 30,
            },
            {
              name: "middle",
              depth: 70,
            },
            {
              name: "bottom",
              depth: 100,
            },
          ];
          var maxHeight = Math.max(
            document.body.clientHeight,
            window.outerHeight
          );
          if (maxHeight <= 0) {
            return "";
          }
          var scrollDepth = fromTop / maxHeight;
          for (var i = 0; i < positions.length; i++) {
            if (scrollDepth < positions[i].depth) {
              return positions[i].name;
            }
          }
          if (
            typeof target.parentNode.parentNode.className === "string" &&
            typeof target.parentNode.parentNode.className.includes !==
              "undefined" &&
            target.parentNode.parentNode.className.indexOf("sc-hdr__search") !==
              -1
          ) {
            return "top";
          }
          return "bottom";
        };
        exports.calcElementLocation = calcElementLocation;
        var getCurrentEnvironment = function getCurrentEnvironment() {
          var urlObj = window.scCommonConstants.URL_OBJ;
          var domain = getPageUrl().domain;
          if (domain.indexOf(urlObj[3] + "." + urlObj[4]) !== -1) {
            if (domain === urlObj[0] + "." + urlObj[3] + "." + urlObj[4]) {
              return window.scCommonConstants.DEVELOPMENT;
            } else if (
              domain ===
              urlObj[12] + "." + urlObj[3] + "." + urlObj[4]
            ) {
              return window.scCommonConstants.STAGING;
            } else if (
              domain ===
              urlObj[13] + "." + urlObj[3] + "." + urlObj[4]
            ) {
              return window.scCommonConstants.PREVIEW;
            } else {
              return window.scCommonConstants.PRODUCTION;
            }
          } else if (domain === urlObj[1] + "." + urlObj[2] + "." + urlObj[4]) {
            if (getPageUrl().pathname.match("^/staging")) {
              return window.scCommonConstants.STAGING;
            } else if (getPageUrl().pathname.match("^/development")) {
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
          var allowableQueryString =
            window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
          if (country == "in" || country == "pk" || country == "hk") {
            //Special whitelisted parameters
            allowableQueryString = [
              "aggregator_code",
              "aggregator_type",
              "aggregator_instance",
              "intcid",
              "subChanCode",
              "referId",
              "instance",
              "camp_id",
              "pid",
              "promoCode",
              "promo",
              "state",
            ];
          }
          var externalCampaignParams = ["cid"]; //external campaign parameter(s) for HK
          var total = allowableQueryString.length;
          var intCampaignName = "";
          var intCampaignValue = "";
          var queryStringList = [];
          var queryString = window.location.search;
          var extCampaignName = "";
          var extCampaignValue = "";
          if (queryString) {
            queryString = queryString.substring(1);
            if (queryString) {
              queryStringList = queryString.split("&");
            }
          }
          //Take it from local storage
          var foundParam = false;
          for (var i = 0; i < total; i++) {
            var cookieValue = getCookie(allowableQueryString[i]);
            var localStorageValue = getLocalStorageWithExpiry(
              allowableQueryString[i]
            );
            if (cookieValue || localStorageValue) {
              foundParam = true;
              if (intCampaignName && intCampaignValue) {
                intCampaignName += ":";
                intCampaignValue += ":";
              }
              intCampaignName += allowableQueryString[i];
              intCampaignValue += cookieValue || localStorageValue;
            } else {
              if (intCampaignName) {
                intCampaignName += ":";
                intCampaignValue += ":";
              }
              intCampaignName += allowableQueryString[i];
              if (queryStringList.length) {
                var found = false;
                var result = void 0;
                for (var j = 0; j < queryStringList.length; j++) {
                  result = queryStringList[j].split("=");
                  if (result[0].toLowerCase() == allowableQueryString[i]) {
                    found = true;
                    break;
                  }
                }
                if (found) {
                  foundParam = true;
                  intCampaignValue += result[1];
                } else {
                  intCampaignValue += "na";
                }
              } else {
                intCampaignValue += "na";
              }
            }
          }

          //External campaign
          if (queryStringList.length) {
            for (var _i = 0; _i < queryStringList.length; _i++) {
              var _result = queryStringList[_i].split("=");
              if (allowableQueryString.indexOf(_result[0]) === -1) {
                //exclude whitelisted parameters from external campaign
                if (
                  country !== "hk" ||
                  externalCampaignParams.indexOf(_result[0]) !== -1
                ) {
                  if (extCampaignValue != "") {
                    extCampaignName += ":";
                    extCampaignValue += ":";
                  }
                  extCampaignName += _result[0];
                  extCampaignValue += _result[1];
                }
              }
            }
          }
          if (!foundParam && (country == "in" || country == "hk")) {
            intCampaignName = "";
            intCampaignValue = "";
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
            extVal: extCampaignValue,
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
          if (!element) return "";
          var yPosition = 0;
          while (element) {
            yPosition +=
              element.offsetTop - element.scrollTop + element.clientTop;
            element = element.offsetParent;
          }
          return yPosition;
        };

        /**
         * Function to detect the user's operating system
         */
        exports.getPosition = getPosition;
        var detectOS = function detectOS() {
          var userAgent =
            navigator.userAgent || navigator.vendor || window.opera;

          // iOS detection
          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
          }

          // Android detection
          if (/android/i.test(userAgent)) {
            return "Android";
          }
          return "Unknown";
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
          if (mktCountryCode === "hk" || mktCountryCode === "sg") {
            if (target) {
              if (
                target.closest(
                  ".sc-meganav__hamburger, .sc-meganav__close-button, .sc-meganav__login-btn, .sc-meganav__login-close, .c-button, .sc-btn"
                )
              ) {
                return "button";
              }
              if (target.closest(".sc-meganav__btn-search-mbl")) {
                return "search";
              }
              if (target.closest("header")) {
                return "nav-link";
              }
              if (
                target.closest(
                  ".sc-recommend .sc-filter__btn, .sc-digital-guide__tab-item, .sc-tab-minimal__head-button, .sc-right-tab .splide__slide, .sc-tab__item"
                )
              ) {
                return "tab";
              }
              if (
                target.closest(
                  ".sc-accordion__label, .sc-faq-two-column__label, .sc-faq__accordion-label, .c-plus-minus-accordion___item"
                ) &&
                !target.closest("a")
              ) {
                return "accordion";
              }
              if (target.closest(".sc-quick-tools, .m-quick-links")) {
                return "quick-links";
              }
            }
            return "link";
          } else {
            if (target && target.closest("header")) {
              return "nav-link";
            } else if (target && target.closest(".sc-banner__content")) {
              return "masthead-button";
            } else if (
              target &&
              target.closest(".sc-banner-slider__thumbnail")
            ) {
              return "button";
            } else if (
              target &&
              target.closest(".sc-benefits-slider-tab__tabs-0")
            ) {
              return "button";
            } else if (target && target.closest(".sc-banner-przn-block")) {
              return "widget-button";
            } else if (target && target.closest(".sc-filter__btn")) {
              return "button";
            } else if (target && target.closest(".sc-quick-tools__links")) {
              return "quick-link";
            } else if (target && target.closest(".sc-filter")) {
              return "button";
            } else if (target && target.closest(".sc-digital-guide .splide")) {
              return "button";
            } else if (
              target &&
              target.closest(".sc-benefits-slider-tab__tab")
            ) {
              return "button";
            } else if (target && target.closest(".sc-footer")) {
              return "footer-link";
            } else if (target && target.closest(".sc-persistent-bar")) {
              return "persistent-bar-link";
            } else {
              return "link";
            }
          }
        };

        /**
         * Track customer interaction for CTA Click.
         */
        exports.getCtaType = getCtaType;
        var handleAnalyticsCTA = function handleAnalyticsCTA(ev) {
          var targetClass =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "";
          var ctaObj =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          if (
            typeof launchscript === "undefined" &&
            !document.querySelector("#adobelaunchscript")
          ) {
            //Adobe Analytics not enable for this market
            return;
          }
          var closest = targetClass ? targetClass : ev.target.closest("a");
          var ctaType = ctaObj.ctaType,
            ctaPosition = ctaObj.ctaPosition,
            xLinkRegion = ctaObj.xLinkRegion,
            customLinkText = ctaObj.customLinkText,
            linkName = ctaObj.linkName,
            context = ctaObj.context;
          var mktCountryCode = getCurrentCountry();
          if (!ctaType) {
            ctaType = closest
              ? getCtaType(closest.className, ev.target)
              : "link";
          }
          if (!ctaPosition) {
            ctaPosition = calcElementLocation(ev.target);
          }
          if (!xLinkRegion) {
            xLinkRegion = getHorizontalPosition(ev.clientX);
          }
          if (!customLinkText && closest) {
            var _ref7, _ref8, _closest$getAttribute;
            customLinkText =
              (_ref7 =
                (_ref8 =
                  (_closest$getAttribute = closest.getAttribute("title")) !==
                    null && _closest$getAttribute !== void 0
                    ? _closest$getAttribute
                    : closest.innerText) !== null && _ref8 !== void 0
                  ? _ref8
                  : closest.textContent) === null || _ref7 === void 0
                ? void 0
                : _ref7.trim().toLowerCase();
          }
          if (!linkName) {
            linkName =
              document.querySelector("title") &&
              document.querySelector("title").innerText
                ? document.querySelector("title").innerText.toLowerCase()
                : "na";
          }
          if (!context) {
            context = getCtaContext(closest);
          }
          var customLinkRegion = xLinkRegion + " " + ctaPosition;
          var updatedCtaPosition = ctaPosition;
          if (mktCountryCode === "sg") {
            updatedCtaPosition = customLinkRegion;
          }
          if (typeof eddlEnabled === "undefined") {
            //This code is added for the HK market because full EDDL is not implemented in HK market
            digitalData.ctaName = customLinkText;
            digitalData.ctaPosition = ctaPosition;
            if (
              typeof _satellite !== "undefined" &&
              typeof _satellite.track === "function"
            ) {
              _satellite.track("callToAction");
            }
            return;
          }
          var titleSelector = document.querySelector("title");
          var ctaName =
            titleSelector && titleSelector.innerText
              ? titleSelector.innerText.toLowerCase()
              : "na";
          var dataObject;
          if (mktCountryCode === "sg") {
            dataObject = _objectSpread(
              _objectSpread({}, digitalData),
              {},
              {
                customLinkClick: {
                  customLinkText:
                    typeof nitroEnabled !== "undefined"
                      ? context
                      : customLinkText || ctaName,
                  customLinkPosition: customLinkRegion,
                  customLinkType: ctaType,
                },
                event: "ctaClick",
                href: window.location.href,
                context: context,
              }
            );
          } else if (mktCountryCode === "hk") {
            dataObject = _objectSpread(
              _objectSpread({}, digitalData),
              {},
              {
                event: "ctaClick",
                title: customLinkText,
                href: window.location.href,
                context: context,
              }
            );
            dataObject.ctaName =
              typeof nitroEnabled !== "undefined"
                ? context
                : customLinkText || ctaName;
            dataObject.ctaPosition = customLinkRegion;
            dataObject.ctaType = ctaType;
          } else {
            dataObject = _objectSpread(
              _objectSpread({}, digitalData),
              {},
              {
                customLinkClick: {
                  customLinkText:
                    typeof nitroEnabled !== "undefined"
                      ? context
                      : customLinkText,
                  customLinkRegion: customLinkRegion,
                  customLinkType: ctaType,
                  customLinkName: linkName,
                },
                event: "ctaClick",
                title: customLinkText,
                href: window.location.href,
                context: context,
              }
            );
            dataObject.ctaName =
              typeof nitroEnabled !== "undefined"
                ? context
                : customLinkText || ctaName;
            dataObject.ctaPosition = updatedCtaPosition;
            dataObject.ctaType = ctaType;
          }
          scAnalyticsDataArray.push(dataObject);
        };

        /**
         * Calculate range values based on original PI value.
         */
        exports.handleAnalyticsCTA = handleAnalyticsCTA;
        var calculateRanges = function calculateRanges(
          fieldNameValue,
          currentValue
        ) {
          var newRanges = {
            monthlyIncome: [
              {
                start: 0,
                end: 10000,
              },
              {
                start: 10000,
                end: 20000,
              },
              {
                start: 20000,
                end: 30000,
              },
              {
                start: 30000,
                end: 40000,
              },
              {
                start: 40000,
                end: 50000,
              },
              {
                start: 50000,
                end: 60000,
              },
              {
                start: 60000,
                end: 70000,
              },
              {
                start: 70000,
                end: 80000,
              },
              {
                start: 80000,
                end: 90000,
              },
              {
                start: 90000,
                end: 100000,
              },
              {
                start: 100000,
                end: 110000,
              },
              {
                start: 110000,
                end: 120000,
              },
              {
                start: 120000,
              },
            ],
            loanAmount: [
              {
                start: 0,
                end: 100000,
              },
              {
                start: 100000,
                end: 200000,
              },
              {
                start: 200000,
                end: 300000,
              },
              {
                start: 300000,
                end: 400000,
              },
              {
                start: 400000,
                end: 500000,
              },
              {
                start: 500000,
                end: 600000,
              },
              {
                start: 600000,
                end: 700000,
              },
              {
                start: 700000,
                end: 800000,
              },
              {
                start: 800000,
                end: 900000,
              },
              {
                start: 900000,
                end: 1000000,
              },
              {
                start: 1000000,
              },
            ],
            repaymentAmount: [
              {
                start: 0,
                end: 20000,
              },
              {
                start: 20000,
                end: 50000,
              },
              {
                start: 50000,
                end: 100000,
              },
              {
                start: 100000,
                end: 150000,
              },
              {
                start: 150000,
                end: 200000,
              },
              {
                start: 200000,
                end: 250000,
              },
              {
                start: 250000,
                end: 300000,
              },
              {
                start: 300000,
                end: 350000,
              },
              {
                start: 350000,
              },
            ],
            dailyBalance: [
              {
                start: 0,
                end: 2000,
              },
              {
                start: 2000,
                end: 5000,
              },
              {
                start: 5000,
                end: 10000,
              },
              {
                start: 10000,
                end: 15000,
              },
              {
                start: 15000,
                end: 20000,
              },
              {
                start: 20000,
                end: 25000,
              },
              {
                start: 25000,
                end: 30000,
              },
              {
                start: 30000,
                end: 35000,
              },
              {
                start: 35000,
                end: 50000,
              },
              {
                start: 50000,
                end: 100000,
              },
              {
                start: 100000,
                end: 200000,
              },
              {
                start: 200000,
                end: 300000,
              },
              {
                start: 3000000,
                end: 500000,
              },
              {
                start: 500000,
                end: 750000,
              },
              {
                start: 750000,
                end: 1000000,
              },
              {
                start: 1000000,
              },
            ],
            apr: [
              {
                start: 0,
                end: 2,
              },
              {
                start: 2,
                end: 5,
              },
              {
                start: 5,
                end: 7,
              },
              {
                start: 7,
                end: 10,
              },
              {
                start: 10,
                end: 15,
              },
              {
                start: 15,
                end: 20,
              },
              {
                start: 20,
                end: 25,
              },
              {
                start: 25,
              },
            ],
            annualIncome: [
              {
                start: 0,
                end: 120000,
              },
              {
                start: 120000,
                end: 240000,
              },
              {
                start: 240000,
                end: 360000,
              },
              {
                start: 360000,
                end: 480000,
              },
              {
                start: 480000,
                end: 600000,
              },
              {
                start: 600000,
                end: 720000,
              },
              {
                start: 720000,
                end: 840000,
              },
              {
                start: 840000,
                end: 960000,
              },
              {
                start: 960000,
                end: 1080000,
              },
              {
                start: 1080000,
                end: 1200000,
              },
              {
                start: 1200000,
                end: 1320000,
              },
              {
                start: 1320000,
                end: 1440000,
              },
              {
                start: 1440000,
              },
            ],
            age: [
              {
                start: 0,
                end: 18,
              },
              {
                start: 18,
                end: 25,
              },
              {
                start: 25,
                end: 35,
              },
              {
                start: 35,
                end: 45,
              },
              {
                start: 45,
                end: 55,
              },
              {
                start: 55,
                end: 65,
              },
              {
                start: 65,
                end: 75,
              },
              {
                start: 75,
              },
            ],
            transactionAmount: [
              {
                start: 0,
                end: 100000,
              },
              {
                start: 100000,
                end: 200000,
              },
              {
                start: 200000,
                end: 300000,
              },
              {
                start: 300000,
                end: 400000,
              },
              {
                start: 400000,
                end: 500000,
              },
              {
                start: 500000,
                end: 600000,
              },
              {
                start: 600000,
                end: 700000,
              },
              {
                start: 700000,
                end: 800000,
              },
              {
                start: 800000,
                end: 900000,
              },
              {
                start: 900000,
                end: 1000000,
              },
              {
                start: 1000000,
                end: 1500000,
              },
              {
                start: 1500000,
                end: 2000000,
              },
              {
                start: 2000000,
                end: 3000000,
              },
              {
                start: 3000000,
              },
            ],
            totalSpend: [
              {
                start: 0,
                end: 1000,
              },
              {
                start: 1000,
                end: 2000,
              },
              {
                start: 2000,
                end: 3000,
              },
              {
                start: 3000,
                end: 4000,
              },
              {
                start: 4000,
                end: 5000,
              },
              {
                start: 5000,
                end: 6000,
              },
              {
                start: 6000,
                end: 7000,
              },
              {
                start: 7000,
                end: 8000,
              },
              {
                start: 8000,
                end: 9000,
              },
              {
                start: 9000,
                end: 10000,
              },
              {
                start: 10000,
              },
            ],
          };
          var calculatedRange = currentValue;
          if (!calculatedRange) {
            calculatedRange = "na";
          } else {
            var val = parseInt(
              calculatedRange.toString().replace(/,/g, ""),
              10
            );
            for (var i = 0; i < newRanges[fieldNameValue].length; i++) {
              var startVal = newRanges[fieldNameValue][i].start;
              var endVal = newRanges[fieldNameValue][i].end;
              if (val >= startVal && (endVal ? val < endVal : true)) {
                if (fieldNameValue === "monthlyIncome") {
                  calculatedRange = endVal
                    ? startVal == 0
                      ? startVal +
                        "-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                      : (Math.abs(startVal) / 1000).toFixed() +
                        "k-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                    : "ge120k";
                  break;
                } else if (fieldNameValue === "loanAmount") {
                  calculatedRange = endVal
                    ? startVal == 0
                      ? startVal +
                        "-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                      : (Math.abs(startVal) / 1000).toFixed() +
                        "k-lt" +
                        (endVal == 1000000
                          ? "1m"
                          : (Math.abs(endVal) / 1000).toFixed() + "k")
                    : "ge1m";
                  break;
                } else if (fieldNameValue === "transactionAmount") {
                  calculatedRange = endVal
                    ? startVal == 0
                      ? startVal +
                        "-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                      : (startVal >= 1000000
                          ? Math.abs(startVal) / 1000000 + "m-lt"
                          : (Math.abs(startVal) / 1000).toFixed() + "k-lt") +
                        (endVal >= 1000000
                          ? Math.abs(endVal) / 1000000 + "m"
                          : (Math.abs(endVal) / 1000).toFixed() + "k")
                    : "ge3m";
                  break;
                } else if (fieldNameValue === "annualIncome") {
                  calculatedRange = endVal
                    ? startVal == 0
                      ? startVal +
                        "-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                      : (startVal >= 1000000
                          ? Math.abs(startVal) / 1000000 + "m-lt"
                          : (Math.abs(startVal) / 1000).toFixed() + "k-lt") +
                        (endVal >= 1000000
                          ? Math.abs(endVal) / 1000000 + "m"
                          : (Math.abs(endVal) / 1000).toFixed() + "k")
                    : "ge1.44m";
                  break;
                } else if (fieldNameValue === "repaymentAmount") {
                  calculatedRange = endVal
                    ? startVal == 0
                      ? startVal +
                        "-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                      : (Math.abs(startVal) / 1000).toFixed() +
                        "k-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                    : "ge350k";
                  break;
                } else if (fieldNameValue === "dailyBalance") {
                  calculatedRange = endVal
                    ? startVal == 0
                      ? startVal +
                        "-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                      : (Math.abs(startVal) / 1000).toFixed() +
                        "k-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                    : "ge1m";
                  break;
                } else if (fieldNameValue === "apr") {
                  calculatedRange = endVal
                    ? startVal == 0
                      ? startVal + "-lt" + endVal
                      : startVal + "%-lt" + endVal + "%"
                    : "ge25%";
                  break;
                } else if (fieldNameValue === "age") {
                  calculatedRange = endVal ? startVal + "-lt" + endVal : "ge75";
                  break;
                } else if (fieldNameValue === "totalSpend") {
                  calculatedRange = endVal
                    ? startVal == 0
                      ? startVal +
                        "-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                      : (Math.abs(startVal) / 1000).toFixed() +
                        "k-lt" +
                        (Math.abs(endVal) / 1000).toFixed() +
                        "k"
                    : "ge10k";
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
        var handleCalculatorAnalytics = function handleCalculatorAnalytics(
          calculatorName,
          fields
        ) {
          if (
            typeof launchscript === "undefined" &&
            !document.querySelector("#adobelaunchscript")
          ) {
            //Adobe Analytics not enable for this market
            return;
          }
          var dataObject = _objectSpread(
            _objectSpread({}, digitalData),
            {},
            {
              calculator: {
                name: calculatorName,
                fields: fields,
              },
              user: {
                userInfo: {
                  userStatus: "guest",
                  userType: "NTB",
                },
              },
              event: "calculatorSubmit",
              title: document.title,
              href: window.location.href,
            }
          );
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
          if (
            window.scCommonConstants.ALLOWABLE_QUERYSTRING["form-urls"] != "" &&
            window.scCommonConstants.ALLOWABLE_QUERYSTRING["form-urls"] !=
              undefined
          ) {
            var formRegex = new RegExp(
              window.scCommonConstants.ALLOWABLE_QUERYSTRING["form-urls"],
              "gi"
            );
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
        var shouldCarryTrackingParams = function shouldCarryTrackingParams(
          url
        ) {
          if (isForm(url)) {
            return true;
          }
          var paramList = [
            "https://www.royalsundaram.in",
            "https://www.maxbupa.com",
            "https://www.bharti-axagi.co.in",
            "https://www.iciciprulife.com",
            "https://www.einsure.allianz.com.sg",
            "https://www.allianz-travel-insure.com.sg",
            "https://www.lin.ee",
            "https://www.piapp.com",
            "https://go.fpg.sg",
            "https://fairprice.com.sg",
            "scmobile://communication-hub",
          ];
          var partnerRegex = [];
          if (paramList && paramList.length > 0) {
            for (var j = 0; j < paramList.length; j++) {
              partnerRegex[j] = new RegExp(paramList[j], "gi");
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
          var $swapping_attrs =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "";
          var targetUrlParamsToTakePrecedence =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : false;
          var queryString = "";
          var queryParts = [];
          var pageQueryString = "";
          var urlQueryString = "";
          var pageUrl = getPageUrl();
          var allowableQueryString =
            window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
          var allowableQueryStringOthers =
            window.scCommonConstants.ALLOWABLE_QUERYSTRING.others;
          var swap_map = {};
          if ($swapping_attrs !== "") {
            var $swappingList = $swapping_attrs.split("|");
            $swappingList.forEach(function (attr) {
              attr = attr.split("=");
              swap_map[attr[0]] = attr[1];
            });
          }
          if (pageUrl.queryString) {
            pageQueryString = pageUrl.queryString;
            if (pageQueryString.indexOf("&") !== -1) {
              queryParts = pageQueryString.split("&");
            } else {
              queryParts.push(pageQueryString);
            }
          }

          // Get query parameters from target URL
          var urlParts = [];
          var urlBreakdownData = urlBreakdown($url);
          if (urlBreakdownData.queryString) {
            urlQueryString = urlBreakdownData.queryString;
            if (urlQueryString.indexOf("&") !== -1) {
              urlParts = urlQueryString.split("&");
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
                var allowableQueryStringKey = swap_map[allowableQueryString[i]]
                  ? swap_map[allowableQueryString[i]]
                  : allowableQueryString[i];
                cookieParts.push(
                  allowableQueryStringKey + "=" + encodeURI(query)
                );
              }
            }
          }
          var qsArr = [];
          // User parameter from Page URL
          for (var j = 0; j < queryParts.length; j++) {
            if (queryParts[j] !== "") {
              var ur = queryParts[j].split("=");

              // Allow only whitelisted params from pageUrl.
              if (!allowableQueryStringOthers.includes(ur[0])) {
                continue;
              }

              // If targetUrlParamsToTakePrecedence is true and urlQueryString has the same parameter, then skip from updating the value.
              if (
                targetUrlParamsToTakePrecedence &&
                urlQueryString.indexOf(ur[0] + "=") !== -1
              ) {
                continue;
              }
              if (qsArr.indexOf(ur[0].toLowerCase()) === -1) {
                if (queryString !== "") {
                  queryString += "&";
                }
                var uu = getUrlParamName(ur[0]);
                queryString += uu + "=" + ur[1];
                qsArr.push(ur[0].toLowerCase());
              }
            }
          }

          // User parameter from Cookie only if that parameter does not exist in URL
          for (var l = 0; l < cookieParts.length; l++) {
            if (cookieParts[l] !== "") {
              var co = cookieParts[l].split("=");

              // If targetUrlParamsToTakePrecedence is true and urlQueryString has the same parameter, then skip from updating the value.
              if (
                targetUrlParamsToTakePrecedence &&
                urlQueryString.indexOf(co[0] + "=") !== -1
              ) {
                continue;
              }
              if (qsArr.indexOf(co[0].toLowerCase()) === -1) {
                if (queryString !== "") {
                  queryString += "&";
                }
                var cc = getUrlParamName(co[0]);
                queryString += cc + "=" + co[1];
                qsArr.push(co[0].toLowerCase());
              }
            }
          }

          // Use parameter from target url only if it does not exist in page URL and cookie
          for (var k = 0; k < urlParts.length; k++) {
            if (urlParts[k] !== "") {
              var qs = urlParts[k].split("=");
              if (qsArr.indexOf(qs[0].toLowerCase()) === -1) {
                if (queryString !== "") {
                  queryString += "&";
                }
                var qq = getUrlParamName(qs[0]);
                queryString += qq + "=" + qs[1];
              }
            }
          }
          var breakdown = parseUrl($url);
          var queryStringArray = queryString.split("&");
          if (queryString !== "" && queryStringArray.length > 0) {
            queryStringArray.forEach(function (value) {
              breakdown.rawpath = breakdown.rawpath.replace("&" + value, "");
            });
          }
          if (breakdown.protocal === "mailto:") {
            return ""
              .concat(breakdown.protocal)
              .concat(breakdown.hostname)
              .concat(breakdown.pathname, "?")
              .concat(queryString)
              .concat(breakdown.hash);
          } else {
            if ($swapping_attrs !== "" && $swapping_attrs.indexOf(",") !== -1) {
              queryString = bundleParam(queryString, $swapping_attrs);
            }
            if (breakdown.hash.indexOf("?") !== -1) {
              return ""
                .concat(breakdown.protocal, "//")
                .concat(breakdown.hostname)
                .concat(breakdown.rawpath, "?")
                .concat(queryString)
                .concat(breakdown.hash);
            }
            return ""
              .concat(breakdown.protocal, "//")
              .concat(breakdown.hostname)
              .concat(breakdown.pathname, "?")
              .concat(queryString)
              .concat(breakdown.hash);
          }
        };
        exports.applyCookieParams = applyCookieParams;
        var getUrlParamName = function getUrlParamName(paramName) {
          var index = -1;
          for (
            var i = 0;
            i < window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb.length;
            i++
          ) {
            if (
              paramName.toLowerCase() ===
              window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb[
                i
              ].toLowerCase()
            ) {
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
          urlQueryString = urlQueryString.split("&");
          var allowableQueryString =
            window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
          $swapping_attrs = $swapping_attrs.split("=");
          swap_map = $swapping_attrs[0].split(",");
          var swap_str = "";
          for (var i = 0; i < swap_map.length; i++) {
            if (allowableQueryString.includes(swap_map[i])) {
              for (var j = 0; j < urlQueryString.length; j++) {
                var list = urlQueryString[j].split("=");
                if (list[0] === swap_map[i]) {
                  swap_str += swap_str ? "," : "";
                  swap_str += list[1];
                }
              }
            }
          }
          if (!swap_str) return queryString;
          if (queryString.indexOf($swapping_attrs[1]) === -1) {
            queryString += "&" + $swapping_attrs[1] + "=".concat(swap_str);
          } else {
            var strList = queryString.split("&");
            queryString = "";
            for (var _i2 = 0; _i2 < strList.length; _i2++) {
              var _list = strList[_i2].split("=");
              queryString += queryString ? "&" : "";
              if (_list[0] === $swapping_attrs[1]) {
                queryString += $swapping_attrs[1] + "=".concat(swap_str);
              } else {
                queryString += _list[0] + "=" + _list[1];
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
          if (_typeof(obj) !== "object") return true;

          // Otherwise, does it have any properties of its own?
          // Note that this doesn't handle
          // toString and valueOf enumeration bugs in IE < 9
          for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
          }
          return true;
        };
        exports.isEmpty = isEmpty;
        var convertQueryStringToJsonObject =
          function convertQueryStringToJsonObject(queryString) {
            var queries = queryString.split("&");
            var json = {};
            for (var i = 0; i < queries.length; i++) {
              var keyValue = queries[i].split("=");
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
        var setLocalStorageWithExpiry = function setLocalStorageWithExpiry(
          key,
          value,
          ttl
        ) {
          var now = new Date();

          // `item` is an object which contains the original value.
          // as well as the time when it's supposed to expire
          var item = {
            value: value,
            expiry: now.getTime() + ttl,
          };
          localStorage.setItem(key, JSON.stringify(item));
        };

        /**
         * This clunky regex is taken directly from http://detectmobilebrowsers.com/
         */
        exports.setLocalStorageWithExpiry = setLocalStorageWithExpiry;
        var isMobile = function isMobile() {
          var stringCheck =
            navigator.userAgent || navigator.vendor || window.opera;
          return (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              stringCheck
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              stringCheck.substr(0, 4)
            )
          );
        };

        /**
         * added comma after each three digits like 1,000,000
         * @example
         * @param {numbers} 10000
         *convertNumbers(10000)
         */
        exports.isMobile = isMobile;
        var convertNumbers = function convertNumbers(selector, numbers) {
          if (numbers === "" || !numbers) return 0;
          var returnVal = numbers.toString();
          var tmp = [];
          var fraction = 0;
          if (Number(selector.getAttribute("data-comma-format")) === 2) {
            if (returnVal.indexOf(".") !== -1) {
              var splitValue = returnVal.split(".");
              tmp = splitValue[0].split("").reverse(); //4321
              fraction = parseInt(splitValue[1], 10);
            } else {
              tmp = returnVal.split("").reverse(); //4321
            }

            var strNew = "";
            if (tmp.length > 3) {
              //true
              var lastThree = tmp.splice(0, 3);
              for (var i = 0; i < tmp.length; i++) {
                if (i > 0 && i % 2 == 0) {
                  strNew += ",";
                }
                strNew += tmp[i].toString();
              }
              strNew = lastThree.join("") + "," + strNew;
              strNew = strNew.split("").reverse().join("");
            }
            if (strNew) {
              if (fraction) {
                strNew = "" + strNew + ".".concat(fraction);
              }
              if (strNew.slice(0, 2) == "-,") {
                strNew = strNew.replace(/-,/gi, "-");
              }
              return strNew;
            } else {
              return returnVal;
            }
          } else {
            if (returnVal.indexOf(".") !== -1) {
              var _splitValue = returnVal.split(".");
              tmp = _splitValue[0].split("").reverse(); //4321
              fraction = _splitValue[1];
            } else {
              tmp = returnVal.split("").reverse(); //4321
            }

            var _strNew = "";
            if (tmp.length > 3) {
              //true if it's more than or equal thousands
              for (var _i3 = 0; _i3 < tmp.length; _i3++) {
                if (_i3 > 0 && _i3 % 3 == 0) {
                  _strNew += ",";
                }
                _strNew += tmp[_i3].toString();
              }
              _strNew = _strNew.split("").reverse().join("");
            }
            if (_strNew) {
              if (fraction) {
                _strNew = "" + _strNew + ".".concat(fraction);
              }
              return _strNew;
            } else {
              return returnVal;
            }
          }
        };
        exports.convertNumbers = convertNumbers;
        var handleProductCalculatorSubmit =
          function handleProductCalculatorSubmit(calculatorName, fields) {
            if (typeof digitalData === "undefined") {
              return; // Exit the function early if digitalData is not defined
            }

            digitalData.calculator = {
              name: calculatorName,
              fields: fields,
            };
            if (
              typeof _satellite !== "undefined" &&
              typeof _satellite.track === "function"
            ) {
              _satellite.track("calculatorSubmit");
            }

            //update adobeDataLayer with calculator submit event
            if (typeof window.adobeDataLayer !== "undefined") {
              var dataObject = _objectSpread(
                _objectSpread({}, digitalData),
                {},
                {
                  event: "calculatorSubmit",
                }
              );

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
                fields: newFields,
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
        var initializeSlider = function initializeSlider(
          mainSelector,
          parentSelector
        ) {
          var docElement = document.documentElement;
          var direction = docElement.getAttribute("dir")
            ? docElement.getAttribute("dir")
            : null;
          var allSlider = mainSelector.querySelectorAll(".sc-range-slider");
          if (allSlider.length) {
            //Initialize slider
            allSlider.forEach(function (slider) {
              noUiSlider.create(slider, {
                start: Number(slider.getAttribute("data-default")),
                step: Number(slider.getAttribute("data-step")),
                behaviour: "snap",
                connect: "lower",
                range: {
                  min: Number(slider.getAttribute("data-min")),
                  max:
                    Number(slider.getAttribute("data-max")) > 0
                      ? Number(slider.getAttribute("data-max"))
                      : 10000000,
                },
                direction: direction,
              });
              var inputField = slider
                .closest(parentSelector)
                .querySelector('input[class$="-value"]');
              if (inputField) {
                //Slider related with text field
                inputField.value = convertNumbers(
                  mainSelector,
                  slider.getAttribute("data-default")
                );
              } else {
                var dropdownField = slider
                  .closest(parentSelector)
                  .querySelector('select[class$="-value"]');
                if (dropdownField) {
                  //Slider related with dropdown field
                  dropdownField.value = slider.getAttribute("data-default");
                }
              }
            });
            allSlider.forEach(function (el) {
              el.setAttribute("aria-label", "Drage here to move slider");
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
        var validateInput = function validateInput(
          selector,
          sliderClass,
          errorSelector
        ) {
          var selectedClass = selector.querySelector(".".concat(sliderClass)),
            inputField = selector.querySelector(
              ".".concat(sliderClass, "-value")
            ),
            sliderExist = true,
            minValue,
            maxValue;
          if (inputField) {
            //slider input fields
            minValue = Number(selectedClass.getAttribute("data-min"));
            maxValue = Number(selectedClass.getAttribute("data-max"));
          } else {
            //non slider input fields
            minValue = Number(selectedClass.getAttribute("data-min"));
            maxValue = Number(selectedClass.getAttribute("data-max"));
            inputField = selectedClass;
            sliderExist = false;
          }
          var initValue = inputField.value,
            value = 0;
          errorSelector.classList.add("hide");
          if (!selectedClass.getAttribute("data-decimal")) {
            value = initValue.replace(/[^0-9]+/gi, "").replace(/^0/, ""); //remove all string except 0-9
            if (value != initValue) {
              inputField.value = value;
            }
            if (value) {
              value = parseInt(value, 10);
            }
          } else {
            //if text field supports fraction value
            value = initValue.replace(/[^0-9.]/gi, "").replace(/^0/, "");
            if (value != initValue) {
              inputField.value = value;
            }
            if (!value) {
              value = "";
            } else {
              var raVal = value.split(".");
              if (value === ".") {
                errorSelector.classList.remove("hide");
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
              if (value.slice(-1) === ".") {
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
          } else if (value === "" && minValue > 0) {
            //leave text field as blank and fill it with 0
            value = "";
            errorSelector.classList.remove("hide");
          } else if (value < minValue) {
            errorSelector.classList.remove("hide");
          }
          if (sliderExist) {
            if (value !== "" && value >= minValue) {
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
        var calculatePMT = function calculatePMT(
          interestRate,
          tenor,
          loanAmount
        ) {
          var advancedPayments =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : 0;
          var monthlyRate = interestRate / 1200;
          var t1 = 1 + monthlyRate;
          var t3 = Math.pow(t1, tenor - advancedPayments);
          return (loanAmount * monthlyRate) / (1 - 1 / t3);
        };

        /**
         * check error status of the slider input fields
         */
        exports.calculatePMT = calculatePMT;
        var sliderErrorStatus = function sliderErrorStatus(
          selector,
          fieldName
        ) {
          var errorStatus = false;
          var allFields = selector.querySelectorAll(fieldName);
          if (allFields.length) {
            for (var i = 0; i < allFields.length; i++) {
              var value = Number(allFields[i].value.replace(/[^0-9.]/gi, ""));
              var className = allFields[i].className.split(" ");
              className = className[className.length - 1].slice(0, -6);
              var slider = selector.querySelector(".".concat(className)),
                minValue = Number(slider.getAttribute("data-min"));
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
        var formatNumbersWithTwoDecimalPlaces =
          function formatNumbersWithTwoDecimalPlaces(inputString) {
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

            var parts = filteredResult.split(".");
            var result = parseFloat(
              parts[0] + "." + parts.slice(1).join("")
            ).toFixed(2);
            return isNaN(result) ? "0.00" : result;
          };

        /**
         * VLOOKUP is a function in Microsoft Excel (and similar spreadsheet software) that stands for "Vertical Lookup." It is commonly used to search for a value in the first column of a table and return a value in the same row from another column.
         * @param {Number} lookupValue - Replace M14 with the actual value you want to look up
         * @param {Object} tableArray - Add more rows as needed
         * @param {Number} colIndex - Assuming you want to retrieve the value from the second column
         * Example:
         * vLookup(16, [[0, 100], [50, 85], [75, 75]], 2)
         **/
        exports.formatNumbersWithTwoDecimalPlaces =
          formatNumbersWithTwoDecimalPlaces;
        var vLookup = function vLookup(lookupValue, tableArray, colIndex) {
          for (var i = 0; i < tableArray.length; i++) {
            var row = tableArray[i];
            var compareValue = row[0]; // Assuming the lookup column is the first column in the tableArray

            if (
              compareValue <= lookupValue &&
              (i === tableArray.length - 1 ||
                tableArray[i + 1][0] > lookupValue)
            ) {
              return row[colIndex - 1]; // Adjusting for 1-based indexing in Excel
            }
          }

          return undefined; // Return undefined if no match is found
        };

        /**
         * validate all slider field input
         */
        exports.vLookup = vLookup;
        var sliderFieldErrorStatus = function sliderFieldErrorStatus(
          selector,
          parentClass,
          errorClass
        ) {
          var closest = selector.closest(parentClass),
            minValue = Number(
              closest.querySelector(".sc-range-slider").getAttribute("data-min")
            ),
            errorSelector = closest.querySelector(errorClass),
            value = Number(selector.value.replace(/[^0-9]+/gi, ""));
          if (value >= minValue) {
            errorSelector.classList.add("hide");
            return true;
          }
          errorSelector.classList.remove("hide");
          return false;
        };

        /**
         * check step field error status
         */
        exports.sliderFieldErrorStatus = sliderFieldErrorStatus;
        var stepFieldErrorStatus = function stepFieldErrorStatus(
          selector,
          parentClass,
          errorClass
        ) {
          var minValue = Number(selector.getAttribute("data-min")),
            errorSelector = selector
              .closest(parentClass)
              .querySelector(errorClass),
            value = Number(selector.value.replace(/[^0-9]+/gi, ""));
          if (value >= minValue) {
            errorSelector.classList.add("hide");
            return true;
          }
          errorSelector.classList.remove("hide");
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
        var calculateFutureValue = function calculateFutureValue(
          rate,
          nper,
          pmt,
          pv,
          type
        ) {
          // Calculate the future value
          var roundedNper = Math.round(nper);
          var factor = Math.pow(1 + rate, roundedNper);
          var futureValue = pv * factor + (pmt * (1 - factor)) / rate;
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
        var convertMonthsToYearsAndMonths =
          function convertMonthsToYearsAndMonths(months) {
            var years = Math.floor(months / 12);
            var remainingMonths = months % 12;
            return {
              years: years,
              months: remainingMonths,
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
          var pmt = (rate * (fv + pvif * pv)) / (pvif - 1);
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
        var calculateNPER = function calculateNPER(
          rate,
          payment,
          present,
          future,
          type
        ) {
          // Initialize type
          type = typeof type === "undefined" ? 0 : type;

          // Initialize future value
          future = typeof future === "undefined" ? 0 : future;

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
            years = "";
          }
          if (months > 1) {
            months = " ".concat(months, " Month(s)");
          } else if (months === 1) {
            months = " ".concat(months, " Month");
          } else {
            months = "";
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
        var calculateEIR = function calculateEIR(
          periods,
          payment,
          present,
          future,
          type,
          guess
        ) {
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
            y =
              present * (1 + periods * rate) +
              payment * (1 + rate * type) * periods +
              future;
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
              y =
                present * (1 + periods * rate) +
                payment * (1 + rate * type) * periods +
                future;
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
          var iterations =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 100;
          var tolerance =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 0.00001;
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
            derivative -= (i * cashFlows[i]) / Math.pow(1 + irr, i + 1);
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
        var calculatePresentValue = function calculatePresentValue(
          rate,
          nper,
          pmt
        ) {
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
          return (rate * pv * pvif) / (pvif - 1);
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
          elHeight += parseInt(
            window.getComputedStyle(el).getPropertyValue("margin-top")
          );
          elHeight += parseInt(
            window.getComputedStyle(el).getPropertyValue("margin-bottom")
          );
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
          var tallest = Math.max.apply(
            Math,
            _toConsumableArray(
              _toConsumableArray(elements).map(function (el) {
                return el.offsetHeight;
              })
            )
          );

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
          var width =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 0;
          if (!target) return;
          var targetPosition = target.getBoundingClientRect().top - width;
          var startPosition = window.pageYOffset;
          var startTime = null;
          var animation = function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(
              timeElapsed,
              startPosition,
              targetPosition,
              duration
            );
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };
          requestAnimationFrame(animation);
          var ease = function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
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
        var validateInputNoSlider = function validateInputNoSlider(
          selector,
          errorSelector
        ) {
          var hideClass =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : "";
          var minValue = Number(selector.getAttribute("data-min"));
          var maxValue = Number(selector.getAttribute("data-max"));
          var decimalPlaces = Number(selector.getAttribute("data-decimal"));
          var initValue = selector.value,
            value = 0;
          hideClass
            ? errorSelector.classList.add("hide")
            : (errorSelector.style.display = "none");
          if (!decimalPlaces) {
            value = initValue.replace(/[^0-9]+/gi, "").replace(/^0/, ""); //remove all string except 0-9
            if (value != initValue) {
              selector.value = value;
            }
            if (value) {
              value = parseInt(value, 10);
            }
          } else {
            decimalPlaces = Number(decimalPlaces);
            //if text field supports fraction value
            value = initValue.replace(/[^0-9.]/gi, "").replace(/^0/, "");
            if (value != initValue) {
              selector.value = value;
            }
            if (!value) {
              value = "";
            } else {
              var raVal = value.split(".");
              if (value === ".") {
                hideClass
                  ? errorSelector.classList.remove("hide")
                  : (errorSelector.style.display = "block");
                return;
              } else if (raVal.length > decimalPlaces) {
                //more than two floating point
                value = "".concat(raVal[0], ".").concat(raVal[1]);
                selector.value = value;
                return;
              } else if (raVal[1] && raVal[1].length > decimalPlaces) {
                value =
                  "".concat(raVal[0], ".") + raVal[1].substr(0, decimalPlaces);
                selector.value = value;
                return;
              }
              if (value.slice(-1) === ".") {
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
          } else if (value === "" && minValue > 0) {
            //leave text field as blank and fill it with 0
            value = "";
            hideClass
              ? errorSelector.classList.remove("hide")
              : (errorSelector.style.display = "block");
          } else if (value < minValue) {
            hideClass
              ? errorSelector.classList.remove("hide")
              : (errorSelector.style.display = "block");
          }
          selector.value = value;
        };
        exports.validateInputNoSlider = validateInputNoSlider;
        var getAssetDomain = function getAssetDomain() {
          /* eslint-disable no-undef*/
          if (typeof baseURL === "undefined" || baseURL === "") {
            var env = getCurrentEnvironment();
            var domain = getPageUrl().domain;
            if (env === window.scCommonConstants.PRODUCTION) {
              return (
                urlObj[11] +
                "://" +
                urlObj[5] +
                "." +
                urlObj[3] +
                "." +
                urlObj[4] +
                "/" +
                urlObj[6] +
                "/" +
                urlObj[7] +
                "/"
              );
            } else if (env === window.scCommonConstants.DEVELOPMENT) {
              if (domain === urlObj[3] + "." + urlObj[14]) {
                return "/content/themes/scretail/assets/global/";
              } else if (
                domain === urlObj[1] + "." + urlObj[2] + "." + urlObj[4] ||
                domain === urlObj[0] + "." + urlObj[3] + "." + urlObj[4]
              ) {
                return (
                  urlObj[11] +
                  "://" +
                  urlObj[1] +
                  "." +
                  urlObj[2] +
                  "." +
                  urlObj[4] +
                  "/" +
                  urlObj[8] +
                  "/" +
                  urlObj[6] +
                  "/" +
                  urlObj[7] +
                  "/"
                );
              } else {
                return "/assets/";
              }
            } else if (env === window.scCommonConstants.STAGING) {
              return (
                urlObj[11] +
                "://" +
                urlObj[1] +
                "." +
                urlObj[2] +
                "." +
                urlObj[4] +
                "/" +
                urlObj[9] +
                "/" +
                urlObj[6] +
                "/" +
                urlObj[7] +
                "/"
              );
            } else {
              return (
                urlObj[11] +
                "://" +
                urlObj[1] +
                "." +
                urlObj[2] +
                "." +
                urlObj[4] +
                "/" +
                urlObj[6] +
                "/" +
                urlObj[7] +
                "/"
              );
            }
          } else if (baseURL === "/zoo") {
            return (
              urlObj[11] +
              "://" +
              urlObj[10] +
              "." +
              urlObj[3] +
              "." +
              urlObj[4] +
              "/" +
              urlObj[15] +
              "/" +
              urlObj[6] +
              "/"
            );
          } else {
            return baseURL;
          }
          /* eslint-enable no-undef*/
        };

        /**
         * trigger adobe popupViewed event when showing popups
         */
        exports.getAssetDomain = getAssetDomain;
        var triggerPopupViewedTagging = function triggerPopupViewedTagging(
          popupName
        ) {
          if (
            typeof launchscript === "undefined" &&
            !document.querySelector("#adobelaunchscript")
          ) {
            //Adobe Analytics not enable for this market
            return;
          }
          setTimeout(function () {
            var dataObject = _objectSpread(
              _objectSpread({}, digitalData),
              {},
              {
                form: {
                  formName: "",
                  formStepName: "",
                  formType: "",
                  formPlatform: "",
                },
              }
            );
            dataObject.form.popupName = popupName;
            dataObject.event = "popupViewed";
            scAnalyticsDataArray.push(dataObject);
          }, 500);
        };
        exports.triggerPopupViewedTagging = triggerPopupViewedTagging;
        var getCampaignInfoV1 = function getCampaignInfoV1() {
          var pageName = window.digitalData.page.pageInfo.pageName.split(":");
          var allowableQueryString =
            window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
          if (
            (pageName[0] === "pk" && pageName[3] === "udp-form") ||
            pageName[0] === "in"
          ) {
            var campaignData = getIntExtCampaignInfo(pageName[0]);
            window.digitalData.campaign = {
              internal: {
                campaignName: campaignData["intName"],
                campaignValue: campaignData["intVal"],
              },
              external: {
                campaignName: campaignData["extName"],
                campaignValue: campaignData["extVal"],
              },
            };
          } else {
            var _campaignData = getCampaignInfo(allowableQueryString);
            window.digitalData.campaign = window.digitalData.campaign || {};
            window.digitalData.campaign = {
              internal: {
                campaignName: _campaignData[0],
                campaignValue: _campaignData[1],
              },
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
            if (key === "internal" || key === "external") {
              var paramValue = extractQueryParams(value);
              window.digitalData.campaign[key] = {
                campaignName: value[0],
                campaignValue: paramValue ? paramValue.split(":")[1] : "na",
              };
            } else if (key === "other") {
              var _paramValue = extractQueryParams(value, true);
              window.digitalData.campaign.otherParams = _paramValue
                ? _paramValue
                : "";
            } else if (value.length) {
              value.forEach(function (el) {
                var paramValue = extractQueryParams([el]);
                window.digitalData.campaign[el] = paramValue
                  ? paramValue.split(":")[1]
                  : "";
              });
            }
          });
        };

        /**
         * Extracts query parameters from the current URL based on inclusion or exclusion rules.
         */
        exports.getCampaignInfoV2 = getCampaignInfoV2;
        var extractQueryParams = function extractQueryParams() {
          var queryParams =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];
          var excludeParams =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false;
          var url = new URL(window.location.href);
          var params = new URLSearchParams(url.search);
          var keyValuePairs = [];

          // eslint-disable-next-line no-unused-vars
          var _iterator = _createForOfIteratorHelper(params.entries()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];
              var shouldInclude = excludeParams
                ? !queryParams.includes(key) // Exclude certain params
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
          return keyValuePairs.join("|");
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
          if (!allowableQueryString.length) return "";
          var total = allowableQueryString.length;
          var campaignName = "";
          var campaignValue = "";
          for (var i = 0; i < total; i++) {
            var cookieValue = getCookie(allowableQueryString[i]);
            var localStorageValue = getLocalStorageWithExpiry(
              allowableQueryString[i]
            );
            if (cookieValue || localStorageValue) {
              if (campaignName) {
                campaignName += ":";
                campaignValue += ":";
              }
              campaignName += allowableQueryString[i];
              campaignValue += cookieValue || localStorageValue;
            }
          }
          if (!campaignName) campaignName = "na";
          if (!campaignValue) campaignValue = "na";
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
          var context =
            (_ref11 =
              (_ref12 =
                (_ref13 =
                  (_ref14 =
                    (_closest$getAttribute2 =
                      closest.getAttribute("data-context")) !== null &&
                    _closest$getAttribute2 !== void 0
                      ? _closest$getAttribute2
                      : closest.getAttribute("title")) !== null &&
                  _ref14 !== void 0
                    ? _ref14
                    : closest.innerText) !== null && _ref13 !== void 0
                  ? _ref13
                  : closest.textContent) !== null && _ref12 !== void 0
                ? _ref12
                : closest.getAttribute("aria-label")) !== null &&
            _ref11 !== void 0
              ? _ref11
              : "";
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
          var queryParamsList = queryString.split("&");
          var paramValue = "";

          // eslint-disable-next-line no-unused-vars
          var _iterator2 = _createForOfIteratorHelper(queryParamsList),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var param = _step2.value;
              var _param$split = param.split("="),
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
          if (!element) return "";
          var accordionElement = element.closest(
            ".sc-accordion, .c-plus-minus-accordion___item"
          );
          if (!accordionElement) return "";
          var headingElement =
            (_accordionElement$que =
              accordionElement.querySelector(".sc-heading")) !== null &&
            _accordionElement$que !== void 0
              ? _accordionElement$que
              : accordionElement.querySelector(".accordion-header label");
          if (!headingElement) return "";
          var headingText = trim(headingElement.innerText);
          return headingText ? "".concat(headingText, ":") : "";
        };

        /**
         * Handles the scroll event and shows or hides the persistent bar based on the scroll position.
         */
        exports.getAccordionHeading = getAccordionHeading;
        var handlePersistentBarScroll = function handlePersistentBarScroll() {
          var _ref15, _ref16, _window$scrollY, _ref17, _window$innerWidth;
          var persistentBar = document.querySelector(".sc-persistent-bar");
          if (!persistentBar) return;
          var bannerSdk = document.querySelector("#onetrust-banner-sdk");
          if (
            bannerSdk &&
            bannerSdk.style &&
            bannerSdk.style.display !== "none"
          ) {
            //Don't show persistent bar if oneTrust cookie banner exist
            return;
          }
          var scrollPosition =
            (_ref15 =
              (_ref16 =
                (_window$scrollY = window.scrollY) !== null &&
                _window$scrollY !== void 0
                  ? _window$scrollY
                  : document.documentElement.scrollTop) !== null &&
              _ref16 !== void 0
                ? _ref16
                : document.body.scrollTop) !== null && _ref15 !== void 0
              ? _ref15
              : 0;
          var windowWidth =
            (_ref17 =
              (_window$innerWidth = window.innerWidth) !== null &&
              _window$innerWidth !== void 0
                ? _window$innerWidth
                : document.documentElement.clientWidth) !== null &&
            _ref17 !== void 0
              ? _ref17
              : document.body.clientWidth;
          var scrollLimit = 600;
          var pBarTarget = document.querySelector(
            "[data-persistent-bar-target]"
          );
          if (pBarTarget) {
            var selectedElement = document.querySelector(
              "." + pBarTarget.getAttribute("data-persistent-bar-target")
            );
            if (selectedElement) {
              scrollLimit =
                getOuterHeight(selectedElement) + getPosition(selectedElement);
              if (windowWidth >= 768) {
                //Ignore menu height
                scrollLimit -= 70;
              }
            }
          }
          var pBarSkip = document.querySelector("[data-persistent-bar-skip]");
          var skipFromTop = 0;
          var skipHeight = 0;
          if (pBarSkip) {
            var _selectedElement = document.querySelector(
              "." + pBarSkip.getAttribute("data-persistent-bar-skip")
            );
            if (_selectedElement) {
              skipFromTop = getPosition(_selectedElement);
              skipHeight = getOuterHeight(_selectedElement);
              if (windowWidth >= 768) {
                //Ignore menu height
                skipFromTop -= 70;
              }
            }
          }
          var skipDevice = document.querySelector(
            "[data-persistent-bar-skip-device]"
          );
          if (skipDevice) {
            var skipAttr = skipDevice.getAttribute(
              "data-persistent-bar-skip-device"
            );
            var _isMobile = windowWidth < 768;
            if (
              (skipAttr === "mobile" && _isMobile) ||
              (skipAttr !== "mobile" && !_isMobile)
            ) {
              skipFromTop = 0;
              skipHeight = 0;
            }
          }
          var screenHeight = window.screen.height;
          screenHeight -= windowWidth < 768 ? 20 : 250;
          if (
            pBarSkip &&
            scrollPosition + screenHeight >= skipFromTop &&
            scrollPosition <= skipFromTop + skipHeight
          ) {
            //Skip persistent bar for a certain position
            persistentBar.classList.remove("sc-persistent-bar--show");
            document.body.style.marginBottom = 0;
          } else if (scrollPosition > scrollLimit) {
            persistentBar.classList.add("sc-persistent-bar--show");
            var persistentBarHight = getOuterHeight(persistentBar);
            document.body.style.marginBottom = "".concat(
              persistentBarHight,
              "px"
            );
          } else {
            persistentBar.classList.remove("sc-persistent-bar--show");
            document.body.style.marginBottom = 0;
          }
        };

        /**
         * Get the user agent of the current browser
         * @returns {{browserCodename: string, browserName: string, browserVersion: string, cookiesEnabled: boolean, browserLanguage: string, browserOnline: boolean, platform: string, userAgentHeader: string}}
         */
        exports.handlePersistentBarScroll = handlePersistentBarScroll;
        var getDeviceDetails = function getDeviceDetails() {
          var os = "";
          // eslint-disable-next-line compat/compat
          var nAgt = navigator.userAgent;
          var clientStrings = [
            {
              s: "W 10",
              r: /(Windows 10.0|Windows NT 10.0)/,
            },
            {
              s: "W 8.1",
              r: /(Windows 8.1|Windows NT 6.3)/,
            },
            {
              s: "W 8",
              r: /(Windows 8|Windows NT 6.2)/,
            },
            {
              s: "W 7",
              r: /(Windows 7|Windows NT 6.1)/,
            },
            {
              s: "W Vista",
              r: /Windows NT 6.0/,
            },
            {
              s: "W Server 2003",
              r: /Windows NT 5.2/,
            },
            {
              s: "W XP",
              r: /(Windows NT 5.1|Windows XP)/,
            },
            {
              s: "W 2000",
              r: /(Windows NT 5.0|Windows 2000)/,
            },
            {
              s: "W ME",
              r: /(Win 9x 4.90|Windows ME)/,
            },
            {
              s: "W 98",
              r: /(Windows 98|Win98)/,
            },
            {
              s: "W 95",
              r: /(Windows 95|Win95|Windows_95)/,
            },
            {
              s: "W NT 4.0",
              r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
            },
            {
              s: "W CE",
              r: /Windows CE/,
            },
            {
              s: "W 3.11",
              r: /Win16/,
            },
            {
              s: "Android",
              r: /Android/,
            },
            {
              s: "Open BSD",
              r: /OpenBSD/,
            },
            {
              s: "Sun OS",
              r: /SunOS/,
            },
            {
              s: "L",
              r: /(Linux|X11)/,
            },
            {
              s: "iOS",
              r: /(iPhone|iPad|iPod)/,
            },
            {
              s: "Mac OS X",
              r: /Mac OS X/,
            },
            {
              s: "Mac OS",
              r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
            },
            {
              s: "QNX",
              r: /QNX/,
            },
            {
              s: "U",
              r: /UNIX/,
            },
            {
              s: "BeOS",
              r: /BeOS/,
            },
            {
              s: "OS/2",
              r: /OS\/2/,
            },
            {
              s: "Search Bot",
              r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
            },
          ];
          for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
              os = cs.s;
              break;
            }
          }
          var osVersion = "";
          if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = "Windows";
          }
          switch (os) {
            case "Mac OS X":
              // eslint-disable-next-line no-case-declarations
              var macMatch = /Mac OS X (10|11[._\d]+)/.exec(nAgt);
              osVersion = macMatch ? macMatch[1] : "Unknown";
              break;
            case "Android":
              // eslint-disable-next-line no-case-declarations
              var androidMatch = /Android ([._\d]+)/.exec(nAgt);
              osVersion = androidMatch ? androidMatch[1] : "Unknown";
              break;
            case "iOS":
              // eslint-disable-next-line no-case-declarations
              var iOSMatch = /OS (\d+)_(\d+)_?(\d+)?/.exec(nAgt);
              osVersion = iOSMatch
                ? iOSMatch[1] + "." + iOSMatch[2] + "." + (iOSMatch[3] || 0)
                : "Unknown";
              break;
          }
          var deviceInfo = "d";
          if (/Mobi/.test(navigator.userAgent)) {
            deviceInfo = "m";
          }
          var screenSize = "",
            width = 0,
            height = 0;
          if (screen.width) {
            width = screen.width ? screen.width : "";
            height = screen.height ? screen.height : "";
            screenSize += "" + width + " x " + height;
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
            osVersion: osVersion,
          };
          /* eslint-enable compat/compat */
        };
        exports.getDeviceDetails = getDeviceDetails;
        var browserDetect = function browserDetect() {
          var browser = {
            name: "",
            version: "",
            versionSearchString: "",
            dataBrowser: [
              {
                string: navigator.userAgent,
                subString: "Edge",
                identity: "MS Edge",
              },
              {
                string: navigator.userAgent,
                subString: "Edg",
                identity: "Edge",
              },
              {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
              },
              {
                string: navigator.userAgent,
                subString: "Trident",
                identity: "Explorer",
              },
              {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox",
              },
              {
                string: navigator.userAgent,
                subString: "Opera",
                identity: "Opera",
              },
              {
                string: navigator.userAgent,
                subString: "OPR",
                identity: "Opera",
              },
              {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome",
              },
              {
                string: navigator.userAgent,
                subString: "Safari",
                identity: "Safari",
              },
            ],
            init: function init() {
              this.name = this.searchString(this.dataBrowser) || "Other";
              this.version =
                this.searchVersion(navigator.userAgent) ||
                this.searchVersion(navigator.appVersion) ||
                "Unknown";
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
              var rvIndex = dataString.indexOf("rv:");
              if (this.versionSearchString === "Trident" && rvIndex !== -1) {
                return parseFloat(dataString.substring(rvIndex + 3));
              } else {
                return parseFloat(
                  dataString.substring(
                    index + this.versionSearchString.length + 1
                  )
                );
              }
            },
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
          var pageName = window.digitalData.page.pageInfo.pageName.split(":");
          window.digitalData.products = window.digitalData.products || [];
          window.digitalData.products = [
            {
              productID:
                (_window$digitalData$p =
                  window.digitalData.page.productInfo) !== null &&
                _window$digitalData$p !== void 0 &&
                _window$digitalData$p.productId
                  ? window.digitalData.page.productInfo.productId
                      .toLowerCase()
                      .trim()
                      .replace(/\s+/g, "-")
                  : "",
              productName: pageName[6]
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-"),
              subProduct1: window.digitalData.page.category.primaryCategory
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-"),
              subProduct2: window.digitalData.page.category.subCategory1
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-"),
            },
          ];
        };
        exports.handleProductsObj = handleProductsObj;
      },
      {},
    ],
    10: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _scCommonMethods = require("./sc-common-methods");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
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
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        var ScSmoothScroll = /*#__PURE__*/ (function () {
          function ScSmoothScroll() {
            _classCallCheck(this, ScSmoothScroll);
          }
          _createClass(ScSmoothScroll, [
            {
              key: "init",
              value: function init() {
                var anchors = document.querySelectorAll('a[href^="#"]');
                if (anchors.length) {
                  anchors.forEach(function (el) {
                    el.addEventListener("click", function (event) {
                      var closest = event.target.closest("a");
                      var href = closest.getAttribute("href");
                      if (href && href !== "#" && href !== "#null") {
                        var _document$querySelect;
                        event.preventDefault();
                        event.stopPropagation();
                        //Handle analytics for the tab click
                        (0, _scCommonMethods.handleAnalyticsCTA)(event);
                        var adjust = 0;
                        var navbar =
                          (_document$querySelect =
                            document.querySelector(".sc-meganav")) !== null &&
                          _document$querySelect !== void 0
                            ? _document$querySelect
                            : document.querySelector(".sc-nav");
                        if (navbar) {
                          adjust += (0, _scCommonMethods.getOuterHeight)(
                            navbar
                          );
                        }
                        var scSelection = event.target.closest(".sc-selection");
                        if (scSelection) {
                          adjust += (0, _scCommonMethods.getOuterHeight)(
                            scSelection.querySelector(".sc-selection__selected")
                          );
                        }
                        var selectedId = document.querySelector(href);
                        if (selectedId) {
                          (0, _scCommonMethods.smoothScroll)(
                            selectedId,
                            500,
                            adjust
                          );
                        }
                      }
                    });
                  });
                }
              },
            },
          ]);
          return ScSmoothScroll;
        })();
        var instance = new ScSmoothScroll();
        instance.init();
        var _default = instance;
        exports.default = _default;
      },
      { "./sc-common-methods": 9 },
    ],
    11: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _scCommonMethods = require("./sc-common-methods");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? ownKeys(Object(source), !0).forEach(function (key) {
                  _defineProperty(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
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
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        } /* global adobeDataLayer, digitalData */
        if (typeof window.adobeDataLayer === "undefined") {
          window.adobeDataLayer = new Array();
        }
        var SgCommonEventListener = /*#__PURE__*/ (function () {
          function SgCommonEventListener() {
            _classCallCheck(this, SgCommonEventListener);
          }
          _createClass(SgCommonEventListener, [
            {
              key: "init",
              value: function init() {
                if (
                  typeof launchscript === "undefined" &&
                  !document.querySelector("#adobelaunchscript")
                ) {
                  //Adobe Analytics not enable for this market
                  return;
                }
                var mktCountryCode = (0, _scCommonMethods.getCurrentCountry)();
                if (mktCountryCode === "sg") {
                  var _digitalData,
                    _digitalData$page,
                    _digitalData$page$pro,
                    _pageNameList$2;
                  // Load AA for SG nitro theme, in the non-nitro theme it's loading from head.min.js file
                  var that = this;
                  var pageSlug = document.querySelector(
                    'meta[name="sc:page-slug"]'
                  )
                    ? document
                        .querySelector('meta[name="sc:page-slug"]')
                        .getAttribute("content")
                    : null;
                  window.digitalData = window.digitalData || {};
                  that.productId =
                    ((_digitalData = digitalData) === null ||
                    _digitalData === void 0
                      ? void 0
                      : (_digitalData$page = _digitalData.page) === null ||
                        _digitalData$page === void 0
                      ? void 0
                      : (_digitalData$page$pro =
                          _digitalData$page.productInfo) === null ||
                        _digitalData$page$pro === void 0
                      ? void 0
                      : _digitalData$page$pro.productId) || "";
                  that.pfmId = "na";
                  that.getProductIdPfm();
                  if (window.digitalData) {
                    window.digitalData.page = window.digitalData.page || {};
                    window.digitalData.page.attributes =
                      window.digitalData.page.attributes || {};
                    window.digitalData.page.attributes.platform =
                      "desktop website";
                    window.digitalData.page.attributes.pfm = that.pfmId;
                  }

                  //Push form name and page name in digitalData
                  var pageNameList = [];
                  if (
                    window.digitalData.page.pageInfo &&
                    window.digitalData.page.pageInfo.pageName
                  ) {
                    var _pageNameList$;
                    //Set na if pageName are empty
                    var pageName = window.digitalData.page.pageInfo.pageName;
                    pageName = pageName.split(":");
                    if (pageName.length > 1) {
                      for (var i = 0; i < pageName.length; i++) {
                        if (i == 7) {
                          pageNameList.push("na");
                        } else {
                          pageNameList.push(pageName[i] ? pageName[i] : "na");
                        }
                      }
                    }
                    if (pageName.length <= 8) {
                      pageNameList.push(pageSlug);
                    }

                    //Set na if category objects are empty
                    if (window.digitalData.page.category) {
                      var catName = window.digitalData.page.category;
                      // eslint-disable-next-line no-unused-vars
                      for (var index in catName) {
                        window.digitalData.page.category[index] = catName[index]
                          ? catName[index]
                          : "na";
                      }
                    }
                    var environment = (0,
                    _scCommonMethods.getCurrentEnvironment)();
                    window.digitalData.page.pageInfo.pageName =
                      pageNameList.join(":");
                    window.digitalData.page.pageInfo.buildDetails = "web3.0";
                    window.digitalData.page.pageInfo.libDetails =
                      environment === "staging" ? "stage" : environment;
                    window.digitalData.page.pageInfo.pagetype =
                      (_pageNameList$ = pageNameList[3]) !== null &&
                      _pageNameList$ !== void 0
                        ? _pageNameList$
                        : "na";
                  }
                  window.digitalData.campaign =
                    window.digitalData.campaign || {};
                  window.digitalData.user = window.digitalData.user || {};
                  window.digitalData.user.userInfo = {
                    segment:
                      (_pageNameList$2 = pageNameList[2]) !== null &&
                      _pageNameList$2 !== void 0
                        ? _pageNameList$2
                        : "na",
                    userID: "",
                    userStatus: "guest",
                    userType: "ntb",
                  };
                  if (window.digitalData.page.pageInfo) {
                    var _pageName =
                      window.digitalData.page.pageInfo.pageName.split(":");
                    if (
                      _pageName[4] != "na" ||
                      _pageName[5] != "na" ||
                      _pageName[6] != "na"
                    ) {
                      window.digitalData.product =
                        window.digitalData.product || {};
                      window.digitalData.product = {
                        productInfo: {
                          productCategory: _pageName[4],
                          productSubcategory: _pageName[5],
                          productName: _pageName[6],
                          productID: that.productId,
                        },
                      };
                    }
                  }
                  if (digitalData.page.productInfo) {
                    delete digitalData.page.productInfo;
                  }
                  var dataObject = _objectSpread(
                    _objectSpread({}, digitalData),
                    {},
                    {
                      event: "pageView",
                      title: document.title,
                      href: window.location.href,
                      context: "page view",
                    }
                  );
                  window.digitalData.page = window.digitalData.page || {};

                  //For SG adobe data layer Nitro
                  window.digitalData.page.category.subCategory2 = "";

                  //Set campaign information
                  var paramsApiUrl = "https://av.sc.com/".concat(
                    pageNameList[0],
                    "/data/campaign-parameter/allowable/all.json"
                  );
                  var campaignObj = {};
                  window.getAdobeParams = new XMLHttpRequest();
                  window.getAdobeParams.open("GET", paramsApiUrl, true);
                  window.getAdobeParams.onload = function () {
                    if (this.status >= 200 && this.status < 400) {
                      // Success!
                      var data = window.getAdobeParams.responseText;
                      try {
                        campaignObj = JSON.parse(data);
                      } catch (e) {
                        alert(e.message);
                        return;
                      }
                    } else {
                      // We reached our target server, but it returned an error
                    }
                  };
                  window.getAdobeParams.onerror = function () {
                    // There was a connection error of some sort
                  };
                  window.getAdobeParams.send();
                  window.getAdobeParams.addEventListener("load", function () {
                    (0, _scCommonMethods.getCampaignInfoV2)(campaignObj);
                    adobeDataLayer.push(dataObject);
                    delete digitalData.campaign;
                  });
                }
              },

              /**
               * get internal and external campaign info
               * @example
               * getIntExtCampaignInfo()
               */
            },
            {
              key: "getIntExtCampaignInfo",
              value: function getIntExtCampaignInfo() {
                var allowableQueryString = [
                  "aggregator_code",
                  "aggregator_type",
                  "aggregator_instance",
                  "intcid",
                  "subChanCode",
                  "referId",
                  "instance",
                  "camp_id",
                  "pid",
                  "promoCode",
                  "promo",
                  "state",
                ]; //internal campaign parameters
                var externalCampaignParams = ["cid"]; //external campaign parameters
                var total = allowableQueryString.length;
                var intCampaignName = "";
                var intCampaignValue = "";
                var queryStringList = [];
                var queryString = window.location.search;
                var extCampaignName = "";
                var extCampaignValue = "";
                if (queryString) {
                  queryString = queryString.substring(1);
                  if (queryString) {
                    queryStringList = queryString.split("&");
                  }
                }
                var foundParam = false;
                for (var i = 0; i < total; i++) {
                  if (intCampaignName) {
                    intCampaignName += ":";
                    intCampaignValue += ":";
                  }
                  intCampaignName += allowableQueryString[i];
                  var found = false;
                  if (queryStringList.length) {
                    var result = void 0;
                    for (var j = 0; j < queryStringList.length; j++) {
                      result = queryStringList[j].split("=");
                      if (
                        result[0].toLowerCase() ==
                        allowableQueryString[i].toLowerCase()
                      ) {
                        found = true;
                        foundParam = true;
                        intCampaignValue += result[1];
                        break;
                      }
                    }
                  }
                  if (!found) {
                    var localStorageValue = (0,
                    _scCommonMethods.getLocalStorageWithExpiry)(
                      allowableQueryString[i]
                    );
                    var cookieValue = (0, _scCommonMethods.getCookie)(
                      allowableQueryString[i]
                    );
                    if (localStorageValue || cookieValue) {
                      found = true;
                      foundParam = true;
                      intCampaignValue += localStorageValue || cookieValue;
                    }
                  }
                  if (!found) {
                    intCampaignValue += "na";
                  }
                }

                //External campaign
                if (queryStringList.length) {
                  for (var _i = 0; _i < queryStringList.length; _i++) {
                    var _result = queryStringList[_i].split("=");
                    if (
                      externalCampaignParams.indexOf(
                        _result[0].toLowerCase()
                      ) != -1
                    ) {
                      if (extCampaignValue != "") {
                        extCampaignName += ":";
                        extCampaignValue += ":";
                      }
                      extCampaignName += _result[0];
                      extCampaignValue += _result[1];
                    }
                  }
                }
                if (!foundParam) {
                  intCampaignName = "";
                  intCampaignValue = "";
                } else {
                  intCampaignName = intCampaignName.toLowerCase();
                  intCampaignValue = intCampaignValue.toLowerCase();
                }
                if (extCampaignName) {
                  extCampaignName = extCampaignName.toLowerCase();
                  extCampaignValue = extCampaignValue.toLowerCase();
                }
                return {
                  intName: intCampaignName,
                  intVal: intCampaignValue,
                  extName: extCampaignName,
                  extVal: extCampaignValue,
                };
              },

              /**
               * get productId from URL
               * @example
               * getProductId()
               */
            },
            {
              key: "getProductIdPfm",
              value: function getProductIdPfm() {
                var that = this;
                var queryStringList = [];
                var queryString = window.location.search;
                if (queryString) {
                  queryString = queryString.substring(1);
                  if (queryString) {
                    queryStringList = queryString.split("&");
                    if (queryStringList.length) {
                      for (var i = 0; i < queryStringList.length; i++) {
                        var result = queryStringList[i].split("=");
                        if (result[0].toLowerCase() == "productid") {
                          that.productId = result[1].toLowerCase();
                        } else if (result[0].toLowerCase() == "pfm") {
                          that.pfmId = result[1].toLowerCase();
                        }
                      }
                    }
                  }
                }
              },
            },
          ]);
          return SgCommonEventListener;
        })();
        var instance = new SgCommonEventListener();
        document.addEventListener("DOMContentLoaded", function () {
          if (typeof scAnalyticsDataArray !== "undefined") {
            instance.init();
          }
        });
        var _default = instance;
        exports.default = _default;
      },
      { "./sc-common-methods": 9 },
    ],
    12: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _smartAppBanner = _interopRequireDefault(
          require("./../../node_modules/smart-app-banner/dist/smart-app-banner")
        );
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
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
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        } /*global digitalData */
        var SmartAppBanner = /*#__PURE__*/ (function () {
          function SmartAppBanner() {
            _classCallCheck(this, SmartAppBanner);
          }
          _createClass(SmartAppBanner, [
            {
              key: "init",
              value: function init() {
                var title = "SC Mobile ";
                var country = "";
                if (typeof digitalData !== "undefined") {
                  country = digitalData.page.attributes.country;
                }
                if (country) {
                  title = title + country.toUpperCase();
                }
                // eslint-disable-next-line no-undef
                new _smartAppBanner.default({
                  daysHidden: 15,
                  // days to hide banner after close button is clicked (defaults to 15)
                  daysReminder: 90,
                  // days to hide banner after "VIEW" button is clicked (defaults to 90)
                  appStoreLanguage: "us",
                  // language code for the App Store (defaults to user's browser language)
                  title: title,
                  author: "Standard Chartered Bank",
                  button: "GET",
                  store: {
                    ios: "On the App Store",
                    android: "In Google Play",
                  },
                  price: {
                    ios: "FREE",
                    android: "FREE",
                  },
                  // , theme: '' // put platform type ('ios', 'android', etc.) here to force single theme on all device
                  // , icon: '' // full path to icon image if not using website icon image
                  //force: 'ios' // Uncomment for platform emulation
                });
              },
            },
          ]);
          return SmartAppBanner;
        })();
        var instance = new SmartAppBanner();
        instance.init();
        var _default = instance;
        exports.default = _default;
      },
      { "./../../node_modules/smart-app-banner/dist/smart-app-banner": 2 },
    ],
  },
  {},
  [8]
);
