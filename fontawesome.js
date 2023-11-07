/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
! function () {
    "use strict";
    var t = {},
        e = {};
    try {
        "undefined" != typeof window && (t = window), "undefined" != typeof document && (e = document)
    } catch (t) {}
    var n = (t.navigator || {}).userAgent,
        a = void 0 === n ? "" : n,
        r = t,
        i = e,
        c = (r.document, !!i.documentElement && !!i.head && "function" == typeof i.addEventListener && i.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/"), "___FONT_AWESOME___"),
        o = (function () {
            try {} catch (t) {
                return !1
            }
        }(), r || {});
    o[c] || (o[c] = {}), o[c].styles || (o[c].styles = {}), o[c].hooks || (o[c].hooks = {}), o[c].shims || (o[c].shims = []);
    o[c]
}(),
function () {
    "use strict";
    var t = {},
        e = {};
    try {
        "undefined" != typeof window && (t = window), "undefined" != typeof document && (e = document)
    } catch (t) {}
    var n = (t.navigator || {}).userAgent,
        a = void 0 === n ? "" : n,
        r = t,
        i = e,
        c = (r.document, !!i.documentElement && !!i.head && "function" == typeof i.addEventListener && i.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/"), "___FONT_AWESOME___"),
        o = function () {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }(),
        s = r || {};
    s[c] || (s[c] = {}), s[c].styles || (s[c].styles = {}), s[c].hooks || (s[c].hooks = {}), s[c].shims || (s[c].shims = []);
    var l = s[c];
    var f = {
        comments: [576, 512, [], "f086", "M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"],
        file: [384, 512, [], "f15b", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"],
        "file-alt": [384, 512, [], "f15c", "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"],
        "file-archive": [384, 512, [], "f1c6", "M128.3 160v32h32v-32zm64-96h-32v32h32zm-64 32v32h32V96zm64 32h-32v32h32zm177.6-30.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h79.7v16h32V48H208v104c0 13.3 10.7 24 24 24h104zM194.2 265.7c-1.1-5.6-6-9.7-11.8-9.7h-22.1v-32h-32v32l-19.7 97.1C102 385.6 126.8 416 160 416c33.1 0 57.9-30.2 51.5-62.6zm-33.9 124.4c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zm32-198.1h-32v32h32z"],
        "file-audio": [384, 512, [], "f1c7", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm144-76.024c0 10.691-12.926 16.045-20.485 8.485L136 360.486h-28c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h28l35.515-36.947c7.56-7.56 20.485-2.206 20.485 8.485v135.952zm41.201-47.13c9.051-9.297 9.06-24.133.001-33.439-22.149-22.752 12.235-56.246 34.395-33.481 27.198 27.94 27.212 72.444.001 100.401-21.793 22.386-56.947-10.315-34.397-33.481z"],
        "file-code": [384, 512, [], "f1c9", "M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"],
        "file-excel": [384, 512, [], "f1c3", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"],
        "file-image": [384, 512, [], "f1c5", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"],
        "file-pdf": [384, 512, [], "f1c1", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"],
        "file-powerpoint": [384, 512, [], "f1c4", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm72-60V236c0-6.6 5.4-12 12-12h69.2c36.7 0 62.8 27 62.8 66.3 0 74.3-68.7 66.5-95.5 66.5V404c0 6.6-5.4 12-12 12H132c-6.6 0-12-5.4-12-12zm48.5-87.4h23c7.9 0 13.9-2.4 18.1-7.2 8.5-9.8 8.4-28.5.1-37.8-4.1-4.6-9.9-7-17.4-7h-23.9v52z"],
        "file-video": [384, 512, [], "f1c8", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm228.687-211.303L224 305.374V268c0-11.046-8.954-20-20-20H100c-11.046 0-20 8.954-20 20v104c0 11.046 8.954 20 20 20h104c11.046 0 20-8.954 20-20v-37.374l52.687 52.674C286.704 397.318 304 390.28 304 375.986V264.011c0-14.311-17.309-21.319-27.313-11.314z"],
        "file-word": [384, 512, [], "f1c2", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"],
        handshake: [640, 512, [], "f2b5", "M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"]
    };
    ! function (t) {
        try {
            ! function t(e, n) {
                var a = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                    r = void 0 !== a && a,
                    i = Object.keys(n).reduce(function (t, e) {
                        var a = n[e];
                        return a.icon ? t[a.iconName] = a.icon : t[e] = a, t
                    }, {});
                "function" != typeof l.hooks.addPack || r ? l.styles[e] = function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))), a.forEach(function (e) {
                            var a, r, i;
                            a = t, i = n[r = e], r in a ? Object.defineProperty(a, r, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : a[r] = i
                        })
                    }
                    return t
                }({}, l.styles[e] || {}, i) : l.hooks.addPack(e, i), "fas" === e && t("fa", n)
            }("far", f)
        } catch (t) {
            if (!o) throw t
        }
    }(function () {
        ! function t(e, n) {
            var a = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                r = void 0 !== a && a,
                i = Object.keys(n).reduce(function (t, e) {
                    var a = n[e];
                    return a.icon ? t[a.iconName] = a.icon : t[e] = a, t
                }, {});
            "function" != typeof l.hooks.addPack || r ? l.styles[e] = function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), a.forEach(function (e) {
                        var a, r, i;
                        a = t, i = n[r = e], r in a ? Object.defineProperty(a, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[r] = i
                    })
                }
                return t
            }({}, l.styles[e] || {}, i) : l.hooks.addPack(e, i), "fas" === e && t("fa", n)
        }("far", f)
    })
}(),
function () {
    "use strict";
    var t = {},
        e = {};
    try {
        "undefined" != typeof window && (t = window), "undefined" != typeof document && (e = document)
    } catch (t) {}
    var n = (t.navigator || {}).userAgent,
        a = void 0 === n ? "" : n,
        r = t,
        i = e,
        c = (r.document, !!i.documentElement && !!i.head && "function" == typeof i.addEventListener && i.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/"), "___FONT_AWESOME___"),
        o = function () {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }(),
        s = r || {};
    s[c] || (s[c] = {}), s[c].styles || (s[c].styles = {}), s[c].hooks || (s[c].hooks = {}), s[c].shims || (s[c].shims = []);
    var l = s[c];
    var f = {
        bus: [512, 512, [], "f207", "M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM112 400c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm16-112c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v128c0 17.67-14.33 32-32 32H128zm272 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"],
        "bus-alt": [512, 512, [], "f55e", "M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM160 72c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H168c-4.42 0-8-3.58-8-8V72zm-48 328c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128-112H128c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h112v160zm32 0V128h112c17.67 0 32 14.33 32 32v96c0 17.67-14.33 32-32 32H272zm128 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"],
        comments: [576, 512, [], "f086", "M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"],
        "comments-dollar": [576, 512, [], "f653", "M416 192c0-88.37-93.12-160-208-160S0 103.63 0 192c0 34.27 14.13 65.95 37.97 91.98C24.61 314.22 2.52 338.16 2.2 338.5A7.995 7.995 0 0 0 8 352c36.58 0 66.93-12.25 88.73-24.98C128.93 342.76 167.02 352 208 352c114.88 0 208-71.63 208-160zm-224 96v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V96c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07V288c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8zm346.01 123.99C561.87 385.96 576 354.27 576 320c0-66.94-53.49-124.2-129.33-148.07.86 6.6 1.33 13.29 1.33 20.07 0 105.87-107.66 192-240 192-10.78 0-21.32-.77-31.73-1.88C207.8 439.63 281.77 480 368 480c40.98 0 79.07-9.24 111.27-24.98C501.07 467.75 531.42 480 568 480c3.2 0 6.09-1.91 7.34-4.84 1.27-2.94.66-6.34-1.55-8.67-.31-.33-22.42-24.24-35.78-54.5z"],
        "compact-disc": [496, 512, [], "f51f", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"],
        file: [384, 512, [], "f15b", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
        "file-alt": [384, 512, [], "f15c", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
        map: [576, 512, [], "f279", "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"],
        "map-marked": [576, 512, [], "f59f", "M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"],
        "map-marked-alt": [576, 512, [], "f5a0", "M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"],
        "map-marker": [384, 512, [], "f041", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"],
        "map-marker-alt": [384, 512, [], "f3c5", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"],
        "map-pin": [288, 512, [], "f276", "M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"],
        "map-signs": [512, 512, [], "f277", "M507.31 84.69L464 41.37c-6-6-14.14-9.37-22.63-9.37H288V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v16H56c-13.25 0-24 10.75-24 24v80c0 13.25 10.75 24 24 24h385.37c8.49 0 16.62-3.37 22.63-9.37l43.31-43.31c6.25-6.26 6.25-16.38 0-22.63zM224 496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V384h-64v112zm232-272H288v-32h-64v32H70.63c-8.49 0-16.62 3.37-22.63 9.37L4.69 276.69c-6.25 6.25-6.25 16.38 0 22.63L48 342.63c6 6 14.14 9.37 22.63 9.37H456c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24z"],
        ship: [640, 512, [], "f21a", "M496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24 61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24-60.817 0-101.542-31.001-119.384-75.361zM192 128h256v87.531l-118.208-37.995a31.995 31.995 0 0 0-19.584 0L192 215.531V128z"],
        "shipping-fast": [640, 512, [], "f48b", "M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"],
        "shoe-prints": [640, 512, [], "f54b", "M192 160h32V32h-32c-35.35 0-64 28.65-64 64s28.65 64 64 64zM0 416c0 35.35 28.65 64 64 64h32V352H64c-35.35 0-64 28.65-64 64zm337.46-128c-34.91 0-76.16 13.12-104.73 32-24.79 16.38-44.52 32-104.73 32v128l57.53 15.97c26.21 7.28 53.01 13.12 80.31 15.05 32.69 2.31 65.6.67 97.58-6.2C472.9 481.3 512 429.22 512 384c0-64-84.18-96-174.54-96zM491.42 7.19C459.44.32 426.53-1.33 393.84.99c-27.3 1.93-54.1 7.77-80.31 15.04L256 32v128c60.2 0 79.94 15.62 104.73 32 28.57 18.88 69.82 32 104.73 32C555.82 224 640 192 640 128c0-45.22-39.1-97.3-148.58-120.81z"],
        "shopping-bag": [448, 512, [], "f290", "M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"],
        "shopping-basket": [576, 512, [], "f291", "M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z"],
        "shopping-cart": [576, 512, [], "f07a", "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"]
    };
    ! function (t) {
        try {
            ! function t(e, n) {
                var a = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                    r = void 0 !== a && a,
                    i = Object.keys(n).reduce(function (t, e) {
                        var a = n[e];
                        return a.icon ? t[a.iconName] = a.icon : t[e] = a, t
                    }, {});
                "function" != typeof l.hooks.addPack || r ? l.styles[e] = function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))), a.forEach(function (e) {
                            var a, r, i;
                            a = t, i = n[r = e], r in a ? Object.defineProperty(a, r, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : a[r] = i
                        })
                    }
                    return t
                }({}, l.styles[e] || {}, i) : l.hooks.addPack(e, i), "fas" === e && t("fa", n)
            }("fas", f)
        } catch (t) {
            if (!o) throw t
        }
    }(function () {
        ! function t(e, n) {
            var a = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                r = void 0 !== a && a,
                i = Object.keys(n).reduce(function (t, e) {
                    var a = n[e];
                    return a.icon ? t[a.iconName] = a.icon : t[e] = a, t
                }, {});
            "function" != typeof l.hooks.addPack || r ? l.styles[e] = function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), a.forEach(function (e) {
                        var a, r, i;
                        a = t, i = n[r = e], r in a ? Object.defineProperty(a, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[r] = i
                    })
                }
                return t
            }({}, l.styles[e] || {}, i) : l.hooks.addPack(e, i), "fas" === e && t("fa", n)
        }("fas", f)
    })
}(),
function () {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(e)
    }

    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function n(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), a.forEach(function (e) {
                var a, r, i;
                a = t, i = n[r = e], r in a ? Object.defineProperty(a, r, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[r] = i
            })
        }
        return t
    }

    function a(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [],
                a = !0,
                r = !1,
                i = void 0;
            try {
                for (var c, o = t[Symbol.iterator](); !(a = (c = o.next()).done) && (n.push(c.value), !e || n.length !== e); a = !0);
            } catch (t) {
                r = !0, i = t
            } finally {
                try {
                    a || null == o.return || o.return()
                } finally {
                    if (r) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function r(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var i = function () {},
        c = {},
        o = {},
        s = null,
        l = {
            mark: i,
            measure: i
        };
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (o = document), "undefined" != typeof MutationObserver && (s = MutationObserver), "undefined" != typeof performance && (l = performance)
    } catch (i) {}
    var f = (c.navigator || {}).userAgent,
        u = void 0 === f ? "" : f,
        m = c,
        d = o,
        h = s,
        v = l,
        p = !!m.document,
        g = !!d.documentElement && !!d.head && "function" == typeof d.addEventListener && "function" == typeof d.createElement,
        b = ~u.indexOf("MSIE") || ~u.indexOf("Trident/"),
        y = "___FONT_AWESOME___",
        w = 16,
        k = "fa",
        z = "svg-inline--fa",
        x = "data-fa-i2svg",
        M = "data-fa-pseudo-element",
        C = "data-fa-pseudo-element-pending",
        O = "data-prefix",
        H = "data-icon",
        A = "fontawesome-i2svg",
        L = "async",
        V = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        P = function () {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }(),
        S = {
            fas: "solid",
            far: "regular",
            fal: "light",
            fad: "duotone",
            fab: "brands",
            fak: "kit",
            fa: "solid"
        },
        E = {
            solid: "fas",
            regular: "far",
            light: "fal",
            duotone: "fad",
            brands: "fab",
            kit: "fak"
        },
        j = "fa-layers-text",
        N = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,
        _ = {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal"
        },
        I = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        R = I.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        T = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        F = {
            GROUP: "group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary"
        },
        D = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", F.GROUP, F.SWAP_OPACITY, F.PRIMARY, F.SECONDARY].concat(I.map(function (t) {
            return "".concat(t, "x")
        })).concat(R.map(function (t) {
            return "w-".concat(t)
        })),
        Y = m.FontAwesomeConfig || {};
    d && "function" == typeof d.querySelector && [
        ["data-family-prefix", "familyPrefix"],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-auto-a11y", "autoA11y"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-observe-mutations", "observeMutations"],
        ["data-mutate-approach", "mutateApproach"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
    ].forEach(function (t) {
        var e, n = a(t, 2),
            r = n[0],
            i = n[1],
            c = "" === (e = function (t) {
                var e = d.querySelector("script[" + t + "]");
                if (e) return e.getAttribute(t)
            }(r)) || "false" !== e && ("true" === e || e);
        null != c && (Y[i] = c)
    });
    var W = n({}, {
        familyPrefix: k,
        replacementClass: z,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, Y);
    W.autoReplaceSvg || (W.observeMutations = !1);
    var U = n({}, W);
    m.FontAwesomeConfig = U;
    var q = m || {};
    q[y] || (q[y] = {}), q[y].styles || (q[y].styles = {}), q[y].hooks || (q[y].hooks = {}), q[y].shims || (q[y].shims = []);
    var X = q[y],
        B = [],
        G = !1;

    function K(t) {
        g && (G ? setTimeout(t, 0) : B.push(t))
    }
    g && ((G = (d.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(d.readyState)) || d.addEventListener("DOMContentLoaded", function t() {
        d.removeEventListener("DOMContentLoaded", t), G = 1, B.map(function (t) {
            return t()
        })
    }));
    var J, Q = "pending",
        Z = "settled",
        $ = "fulfilled",
        tt = "rejected",
        et = function () {},
        nt = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
        at = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        rt = [];

    function it() {
        for (var t = 0; t < rt.length; t++) rt[t][0](rt[t][1]);
        J = !(rt = [])
    }

    function ct(t, e) {
        rt.push([t, e]), J || (J = !0, at(it, 0))
    }

    function ot(t) {
        var e = t.owner,
            n = e._state,
            a = e._data,
            r = t[n],
            i = t.then;
        if ("function" == typeof r) {
            n = $;
            try {
                a = r(a)
            } catch (t) {
                ut(i, t)
            }
        }
        st(i, a) || (n === $ && lt(i, a), n === tt && ut(i, a))
    }

    function st(e, n) {
        var a;
        try {
            if (e === n) throw new TypeError("A promises callback cannot return that same promise.");
            if (n && ("function" == typeof n || "object" === t(n))) {
                var r = n.then;
                if ("function" == typeof r) return r.call(n, function (t) {
                    a || (a = !0, n === t ? ft(e, t) : lt(e, t))
                }, function (t) {
                    a || (a = !0, ut(e, t))
                }), !0
            }
        } catch (r) {
            return a || ut(e, r), !0
        }
        return !1
    }

    function lt(t, e) {
        t !== e && st(t, e) || ft(t, e)
    }

    function ft(t, e) {
        t._state === Q && (t._state = Z, t._data = e, ct(dt, t))
    }

    function ut(t, e) {
        t._state === Q && (t._state = Z, t._data = e, ct(ht, t))
    }

    function mt(t) {
        t._then = t._then.forEach(ot)
    }

    function dt(t) {
        t._state = $, mt(t)
    }

    function ht(t) {
        t._state = tt, mt(t), !t._handled && nt && global.process.emit("unhandledRejection", t._data, t)
    }

    function vt(t) {
        global.process.emit("rejectionHandled", t)
    }

    function pt(t) {
        if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
        if (this instanceof pt == 0) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [],
            function (t, e) {
                function n(t) {
                    ut(e, t)
                }
                try {
                    t(function (t) {
                        lt(e, t)
                    }, n)
                } catch (t) {
                    n(t)
                }
            }(t, this)
    }
    pt.prototype = {
        constructor: pt,
        _state: Q,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (t, e) {
            var n = {
                owner: this,
                then: new this.constructor(et),
                fulfilled: t,
                rejected: e
            };
            return !e && !t || this._handled || (this._handled = !0, this._state === tt && nt && ct(vt, this)), this._state === $ || this._state === tt ? ct(ot, n) : this._then.push(n), n.then
        },
        catch: function (t) {
            return this.then(null, t)
        }
    }, pt.all = function (t) {
        if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.all().");
        return new pt(function (e, n) {
            var a = [],
                r = 0;

            function i(t) {
                return r++,
                    function (n) {
                        a[t] = n, --r || e(a)
                    }
            }
            for (var c, o = 0; o < t.length; o++)(c = t[o]) && "function" == typeof c.then ? c.then(i(o), n) : a[o] = c;
            r || e(a)
        })
    }, pt.race = function (t) {
        if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.race().");
        return new pt(function (e, n) {
            for (var a, r = 0; r < t.length; r++)(a = t[r]) && "function" == typeof a.then ? a.then(e, n) : e(a)
        })
    }, pt.resolve = function (e) {
        return e && "object" === t(e) && e.constructor === pt ? e : new pt(function (t) {
            t(e)
        })
    }, pt.reject = function (t) {
        return new pt(function (e, n) {
            n(t)
        })
    };
    var gt = "function" == typeof Promise ? Promise : pt,
        bt = w,
        yt = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };

    function wt(t) {
        if (t && g) {
            var e = d.createElement("style");
            e.setAttribute("type", "text/css"), e.innerHTML = t;
            for (var n = d.head.childNodes, a = null, r = n.length - 1; - 1 < r; r--) {
                var i = n[r],
                    c = (i.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(c) && (a = i)
            }
            return d.head.insertBefore(e, a), t
        }
    }
    var kt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function zt() {
        for (var t = 12, e = ""; 0 < t--;) e += kt[62 * Math.random() | 0];
        return e
    }

    function xt(t) {
        for (var e = [], n = (t || []).length >>> 0; n--;) e[n] = t[n];
        return e
    }

    function Mt(t) {
        return t.classList ? xt(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function (t) {
            return t
        })
    }

    function Ct(t) {
        return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Ot(t) {
        return Object.keys(t || {}).reduce(function (e, n) {
            return e + "".concat(n, ": ").concat(t[n], ";")
        }, "")
    }

    function Ht(t) {
        return t.size !== yt.size || t.x !== yt.x || t.y !== yt.y || t.rotate !== yt.rotate || t.flipX || t.flipY
    }

    function At(t) {
        var e = t.transform,
            n = t.containerWidth,
            a = t.iconWidth,
            r = {
                transform: "translate(".concat(n / 2, " 256)")
            },
            i = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
            c = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
            o = "rotate(".concat(e.rotate, " 0 0)");
        return {
            outer: r,
            inner: {
                transform: "".concat(i, " ").concat(c, " ").concat(o)
            },
            path: {
                transform: "translate(".concat(a / 2 * -1, " -256)")
            }
        }
    }
    var Lt = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };

    function Vt(t) {
        var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t
    }

    function Pt(t) {
        var e = t.icons,
            a = e.main,
            r = e.mask,
            i = t.prefix,
            c = t.iconName,
            o = t.transform,
            s = t.symbol,
            l = t.title,
            f = t.maskId,
            u = t.titleId,
            m = t.extra,
            d = t.watchable,
            h = void 0 !== d && d,
            v = r.found ? r : a,
            p = v.width,
            g = v.height,
            b = "fak" === i,
            y = b ? "" : "fa-w-".concat(Math.ceil(p / g * 16)),
            w = [U.replacementClass, c ? "".concat(U.familyPrefix, "-").concat(c) : "", y].filter(function (t) {
                return -1 === m.classes.indexOf(t)
            }).filter(function (t) {
                return "" !== t || !!t
            }).concat(m.classes).join(" "),
            k = {
                children: [],
                attributes: n({}, m.attributes, {
                    "data-prefix": i,
                    "data-icon": c,
                    class: w,
                    role: m.attributes.role || "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(p, " ").concat(g)
                })
            },
            z = b && !~m.classes.indexOf("fa-fw") ? {
                width: "".concat(p / g * 16 * .0625, "em")
            } : {};
        h && (k.attributes[x] = ""), l && k.children.push({
            tag: "title",
            attributes: {
                id: k.attributes["aria-labelledby"] || "title-".concat(u || zt())
            },
            children: [l]
        });
        var M, C, O, H, A, L, V, P, S, E, j, N, _, I, R, T, F, D, Y, W, q, X, B, G, K, J, Q = n({}, k, {
                prefix: i,
                iconName: c,
                main: a,
                mask: r,
                maskId: f,
                transform: o,
                symbol: s,
                styles: n({}, z, m.styles)
            }),
            Z = r.found && a.found ? (O = (M = Q).children, H = M.attributes, A = M.main, L = M.mask, V = M.maskId, P = M.transform, S = A.width, E = A.icon, j = L.width, N = L.icon, _ = At({
                transform: P,
                containerWidth: j,
                iconWidth: S
            }), I = {
                tag: "rect",
                attributes: n({}, Lt, {
                    fill: "white"
                })
            }, R = E.children ? {
                children: E.children.map(Vt)
            } : {}, T = {
                tag: "g",
                attributes: n({}, _.inner),
                children: [Vt(n({
                    tag: E.tag,
                    attributes: n({}, E.attributes, _.path)
                }, R))]
            }, F = {
                tag: "g",
                attributes: n({}, _.outer),
                children: [T]
            }, D = "mask-".concat(V || zt()), Y = "clip-".concat(V || zt()), W = {
                tag: "mask",
                attributes: n({}, Lt, {
                    id: D,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [I, F]
            }, q = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: Y
                    },
                    children: (C = N, "g" === C.tag ? C.children : [C])
                }, W]
            }, O.push(q, {
                tag: "rect",
                attributes: n({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(Y, ")"),
                    mask: "url(#".concat(D, ")")
                }, Lt)
            }), {
                children: O,
                attributes: H
            }) : function (t) {
                var e = t.children,
                    a = t.attributes,
                    r = t.main,
                    i = t.transform,
                    c = Ot(t.styles);
                if (0 < c.length && (a.style = c), Ht(i)) {
                    var o = At({
                        transform: i,
                        containerWidth: r.width,
                        iconWidth: r.width
                    });
                    e.push({
                        tag: "g",
                        attributes: n({}, o.outer),
                        children: [{
                            tag: "g",
                            attributes: n({}, o.inner),
                            children: [{
                                tag: r.icon.tag,
                                children: r.icon.children,
                                attributes: n({}, r.icon.attributes, o.path)
                            }]
                        }]
                    })
                } else e.push(r.icon);
                return {
                    children: e,
                    attributes: a
                }
            }(Q),
            $ = Z.children,
            tt = Z.attributes;
        return Q.children = $, Q.attributes = tt, s ? (B = (X = Q).prefix, G = X.iconName, K = X.children, [{
            tag: "svg",
            attributes: {
                style: "display: none;"
            },
            children: [{
                tag: "symbol",
                attributes: n({}, X.attributes, {
                    id: !0 === (J = X.symbol) ? "".concat(B, "-").concat(U.familyPrefix, "-").concat(G) : J
                }),
                children: K
            }]
        }]) : function (t) {
            var e = t.children,
                a = t.main,
                r = t.mask,
                i = t.attributes,
                c = t.styles,
                o = t.transform;
            if (Ht(o) && a.found && !r.found) {
                var s = a.width / a.height / 2;
                i.style = Ot(n({}, c, {
                    "transform-origin": "".concat(s + o.x / 16, "em ").concat(.5 + o.y / 16, "em")
                }))
            }
            return [{
                tag: "svg",
                attributes: i,
                children: e
            }]
        }(Q)
    }

    function St(t) {
        var e = t.content,
            a = t.width,
            r = t.height,
            i = t.transform,
            c = t.title,
            o = t.extra,
            s = t.watchable,
            l = void 0 !== s && s,
            f = n({}, o.attributes, c ? {
                title: c
            } : {}, {
                class: o.classes.join(" ")
            });
        l && (f[x] = "");
        var u, m, d, h, v, p, g, y, k, z = n({}, o.styles);
        Ht(i) && (z.transform = (m = (u = {
            transform: i,
            startCentered: !0,
            width: a,
            height: r
        }).transform, h = void 0 === (d = u.width) ? w : d, p = void 0 === (v = u.height) ? w : v, k = "", k += (y = void 0 !== (g = u.startCentered) && g) && b ? "translate(".concat(m.x / bt - h / 2, "em, ").concat(m.y / bt - p / 2, "em) ") : y ? "translate(calc(-50% + ".concat(m.x / bt, "em), calc(-50% + ").concat(m.y / bt, "em)) ") : "translate(".concat(m.x / bt, "em, ").concat(m.y / bt, "em) "), k += "scale(".concat(m.size / bt * (m.flipX ? -1 : 1), ", ").concat(m.size / bt * (m.flipY ? -1 : 1), ") "), k += "rotate(".concat(m.rotate, "deg) ")), z["-webkit-transform"] = z.transform);
        var M = Ot(z);
        0 < M.length && (f.style = M);
        var C = [];
        return C.push({
            tag: "span",
            attributes: f,
            children: [e]
        }), c && C.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [c]
        }), C
    }
    var Et = function () {},
        jt = U.measurePerformance && v && v.mark && v.measure ? v : {
            mark: Et,
            measure: Et
        },
        Nt = 'FA "5.15.4"',
        _t = function (t) {
            jt.mark("".concat(Nt, " ").concat(t, " ends")), jt.measure("".concat(Nt, " ").concat(t), "".concat(Nt, " ").concat(t, " begins"), "".concat(Nt, " ").concat(t, " ends"))
        },
        It = {
            begin: function (t) {
                return jt.mark("".concat(Nt, " ").concat(t, " begins")),
                    function () {
                        return _t(t)
                    }
            },
            end: _t
        },
        Rt = function (t, e, n, a) {
            var r, i, c, o, s, l = Object.keys(t),
                f = l.length,
                u = void 0 !== a ? (o = e, s = a, function (t, e, n, a) {
                    return o.call(s, t, e, n, a)
                }) : e;
            for (c = void 0 === n ? (r = 1, t[l[0]]) : (r = 0, n); r < f; r++) c = u(c, t[i = l[r]], i, t);
            return c
        };

    function Tt(t) {
        for (var e = "", n = 0; n < t.length; n++) e += ("000" + t.charCodeAt(n).toString(16)).slice(-4);
        return e
    }
    var Ft = X.styles,
        Dt = X.shims,
        Yt = {},
        Wt = {},
        Ut = {},
        qt = function () {
            var t = function (t) {
                return Rt(Ft, function (e, n, a) {
                    return e[a] = Rt(n, t, {}), e
                }, {})
            };
            Yt = t(function (t, e, n) {
                return e[3] && (t[e[3]] = n), t
            }), Wt = t(function (t, e, n) {
                var a = e[2];
                return t[n] = n, a.forEach(function (e) {
                    t[e] = n
                }), t
            });
            var e = "far" in Ft;
            Ut = Rt(Dt, function (t, n) {
                var a = n[0],
                    r = n[1],
                    i = n[2];
                return "far" !== r || e || (r = "fas"), t[a] = {
                    prefix: r,
                    iconName: i
                }, t
            }, {})
        };

    function Xt(t, e) {
        return (Yt[t] || {})[e]
    }
    qt();
    var Bt = X.styles,
        Gt = function () {
            return {
                prefix: null,
                iconName: null,
                rest: []
            }
        };

    function Kt(t) {
        return t.reduce(function (t, e) {
            var n = function (t, e) {
                var n, a = e.split("-"),
                    r = a[0],
                    i = a.slice(1).join("-");
                return r !== t || "" === i || (n = i, ~D.indexOf(n)) ? null : i
            }(U.familyPrefix, e);
            if (Bt[e]) t.prefix = e;
            else if (U.autoFetchSvg && -1 < Object.keys(S).indexOf(e)) t.prefix = e;
            else if (n) {
                var a = "fa" === t.prefix ? Ut[n] || {
                    prefix: null,
                    iconName: null
                } : {};
                t.iconName = a.iconName || n, t.prefix = a.prefix || t.prefix
            } else e !== U.replacementClass && 0 !== e.indexOf("fa-w-") && t.rest.push(e);
            return t
        }, Gt())
    }

    function Jt(t, e, n) {
        if (t && t[e] && t[e][n]) return {
            prefix: e,
            iconName: n,
            icon: t[e][n]
        }
    }

    function Qt(t) {
        var e, n = t.tag,
            a = t.attributes,
            r = void 0 === a ? {} : a,
            i = t.children,
            c = void 0 === i ? [] : i;
        return "string" == typeof t ? Ct(t) : "<".concat(n, " ").concat((e = r, Object.keys(e || {}).reduce(function (t, n) {
            return t + "".concat(n, '="').concat(Ct(e[n]), '" ')
        }, "").trim()), ">").concat(c.map(Qt).join(""), "</").concat(n, ">")
    }
    var Zt = function () {};

    function $t(t) {
        return "string" == typeof (t.getAttribute ? t.getAttribute(x) : null)
    }
    var te = {
        replace: function (t) {
            var e = t[0],
                n = t[1].map(function (t) {
                    return Qt(t)
                }).join("\n");
            if (e.parentNode && e.outerHTML) e.outerHTML = n + (U.keepOriginalSource && "svg" !== e.tagName.toLowerCase() ? "\x3c!-- ".concat(e.outerHTML, " Font Awesome fontawesome.com --\x3e") : "");
            else if (e.parentNode) {
                var a = document.createElement("span");
                e.parentNode.replaceChild(a, e), a.outerHTML = n
            }
        },
        nest: function (t) {
            var e = t[0],
                n = t[1];
            if (~Mt(e).indexOf(U.replacementClass)) return te.replace(t);
            var a = new RegExp("".concat(U.familyPrefix, "-.*"));
            delete n[0].attributes.style, delete n[0].attributes.id;
            var r = n[0].attributes.class.split(" ").reduce(function (t, e) {
                return e === U.replacementClass || e.match(a) ? t.toSvg.push(e) : t.toNode.push(e), t
            }, {
                toNode: [],
                toSvg: []
            });
            n[0].attributes.class = r.toSvg.join(" ");
            var i = n.map(function (t) {
                return Qt(t)
            }).join("\n");
            e.setAttribute("class", r.toNode.join(" ")), e.setAttribute(x, ""), e.innerHTML = i
        }
    };

    function ee(t) {
        t()
    }

    function ne(t, e) {
        var n = "function" == typeof e ? e : Zt;
        if (0 === t.length) n();
        else {
            var a = ee;
            U.mutateApproach === L && (a = m.requestAnimationFrame || ee), a(function () {
                var e = !0 === U.autoReplaceSvg ? te.replace : te[U.autoReplaceSvg] || te.replace,
                    a = It.begin("mutate");
                t.map(e), a(), n()
            })
        }
    }
    var ae = !1;

    function re() {
        ae = !1
    }
    var ie = null;

    function ce(t) {
        if (h && U.observeMutations) {
            var e = t.treeCallback,
                n = t.nodeCallback,
                a = t.pseudoElementsCallback,
                r = t.observeMutationsRoot,
                i = void 0 === r ? d : r;
            ie = new h(function (t) {
                ae || xt(t).forEach(function (t) {
                    if ("childList" === t.type && 0 < t.addedNodes.length && !$t(t.addedNodes[0]) && (U.searchPseudoElements && a(t.target), e(t.target)), "attributes" === t.type && t.target.parentNode && U.searchPseudoElements && a(t.target.parentNode), "attributes" === t.type && $t(t.target) && ~T.indexOf(t.attributeName))
                        if ("class" === t.attributeName) {
                            var r = Kt(Mt(t.target)),
                                i = r.prefix,
                                c = r.iconName;
                            i && t.target.setAttribute("data-prefix", i), c && t.target.setAttribute("data-icon", c)
                        } else n(t.target)
                })
            }), g && ie.observe(i, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            })
        }
    }
    var oe = function (t) {
        var e = {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        };
        return t ? t.toLowerCase().split(" ").reduce(function (t, e) {
            var n = e.toLowerCase().split("-"),
                a = n[0],
                r = n.slice(1).join("-");
            if (a && "h" === r) return t.flipX = !0, t;
            if (a && "v" === r) return t.flipY = !0, t;
            if (r = parseFloat(r), isNaN(r)) return t;
            switch (a) {
                case "grow":
                    t.size = t.size + r;
                    break;
                case "shrink":
                    t.size = t.size - r;
                    break;
                case "left":
                    t.x = t.x - r;
                    break;
                case "right":
                    t.x = t.x + r;
                    break;
                case "up":
                    t.y = t.y - r;
                    break;
                case "down":
                    t.y = t.y + r;
                    break;
                case "rotate":
                    t.rotate = t.rotate + r
            }
            return t
        }, e) : e
    };

    function se(t) {
        var e, n, a, r, i, c, o, s, l = function (t) {
                var e, n, a = t.getAttribute("data-prefix"),
                    r = t.getAttribute("data-icon"),
                    i = void 0 !== t.innerText ? t.innerText.trim() : "",
                    c = Kt(Mt(t));
                return a && r && (c.prefix = a, c.iconName = r), c.prefix && 1 < i.length ? c.iconName = (e = c.prefix, n = t.innerText, (Wt[e] || {})[n]) : c.prefix && 1 === i.length && (c.iconName = Xt(c.prefix, Tt(t.innerText))), c
            }(t),
            f = l.iconName,
            u = l.prefix,
            m = l.rest,
            d = (n = [], (e = t.getAttribute("style")) && (n = e.split(";").reduce(function (t, e) {
                var n = e.split(":"),
                    a = n[0],
                    r = n.slice(1);
                return a && 0 < r.length && (t[a] = r.join(":").trim()), t
            }, {})), n),
            h = oe(t.getAttribute("data-fa-transform")),
            v = null !== (a = t.getAttribute("data-fa-symbol")) && ("" === a || a),
            p = (i = xt((r = t).attributes).reduce(function (t, e) {
                return "class" !== t.name && "style" !== t.name && (t[e.name] = e.value), t
            }, {}), c = r.getAttribute("title"), o = r.getAttribute("data-fa-title-id"), U.autoA11y && (c ? i["aria-labelledby"] = "".concat(U.replacementClass, "-title-").concat(o || zt()) : (i["aria-hidden"] = "true", i.focusable = "false")), i),
            g = (s = t.getAttribute("data-fa-mask")) ? Kt(s.split(" ").map(function (t) {
                return t.trim()
            })) : Gt();
        return {
            iconName: f,
            title: t.getAttribute("title"),
            titleId: t.getAttribute("data-fa-title-id"),
            prefix: u,
            transform: h,
            symbol: v,
            mask: g,
            maskId: t.getAttribute("data-fa-mask-id"),
            extra: {
                classes: m,
                styles: d,
                attributes: p
            }
        }
    }

    function le(t) {
        this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = (new Error).stack
    }(le.prototype = Object.create(Error.prototype)).constructor = le;
    var fe = {
            fill: "currentColor"
        },
        ue = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
        },
        me = {
            tag: "path",
            attributes: n({}, fe, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
        },
        de = n({}, ue, {
            attributeName: "opacity"
        }),
        he = {
            tag: "g",
            children: [me, {
                tag: "circle",
                attributes: n({}, fe, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: [{
                    tag: "animate",
                    attributes: n({}, ue, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: n({}, de, {
                        values: "1;0;1;1;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: n({}, fe, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: [{
                    tag: "animate",
                    attributes: n({}, de, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: n({}, fe, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: n({}, de, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }]
        },
        ve = X.styles;

    function pe(t) {
        var e = t[0],
            n = t[1],
            r = a(t.slice(4), 1)[0];
        return {
            found: !0,
            width: e,
            height: n,
            icon: Array.isArray(r) ? {
                tag: "g",
                attributes: {
                    class: "".concat(U.familyPrefix, "-").concat(F.GROUP)
                },
                children: [{
                    tag: "path",
                    attributes: {
                        class: "".concat(U.familyPrefix, "-").concat(F.SECONDARY),
                        fill: "currentColor",
                        d: r[0]
                    }
                }, {
                    tag: "path",
                    attributes: {
                        class: "".concat(U.familyPrefix, "-").concat(F.PRIMARY),
                        fill: "currentColor",
                        d: r[1]
                    }
                }]
            } : {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: r
                }
            }
        }
    }

    function ge(t, e) {
        return new gt(function (n, a) {
            var r = {
                found: !1,
                width: 512,
                height: 512,
                icon: he
            };
            if (t && e && ve[e] && ve[e][t]) return n(pe(ve[e][t]));
            t && e && !U.showMissingIcons ? a(new le("Icon is missing for prefix ".concat(e, " with icon name ").concat(t))) : n(r)
        })
    }
    var be = X.styles;

    function ye(t) {
        var e, n, r, i, c, o, s, l, f, u, m, d = se(t);
        return ~d.extra.classes.indexOf(j) ? function (t, e) {
            var n = e.title,
                a = e.transform,
                r = e.extra,
                i = null,
                c = null;
            if (b) {
                var o = parseInt(getComputedStyle(t).fontSize, 10),
                    s = t.getBoundingClientRect();
                i = s.width / o, c = s.height / o
            }
            return U.autoA11y && !n && (r.attributes["aria-hidden"] = "true"), gt.resolve([t, St({
                content: t.innerHTML,
                width: i,
                height: c,
                transform: a,
                title: n,
                extra: r,
                watchable: !0
            })])
        }(t, d) : (e = t, r = (n = d).iconName, i = n.title, c = n.titleId, o = n.prefix, s = n.transform, l = n.symbol, f = n.mask, u = n.maskId, m = n.extra, new gt(function (t, n) {
            gt.all([ge(r, o), ge(f.iconName, f.prefix)]).then(function (n) {
                var f = a(n, 2),
                    d = f[0],
                    h = f[1];
                t([e, Pt({
                    icons: {
                        main: d,
                        mask: h
                    },
                    prefix: o,
                    iconName: r,
                    transform: s,
                    symbol: l,
                    mask: h,
                    maskId: u,
                    title: i,
                    titleId: c,
                    extra: m,
                    watchable: !0
                })])
            })
        }))
    }

    function we(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (g) {
            var n = d.documentElement.classList,
                a = function (t) {
                    return n.add("".concat(A, "-").concat(t))
                },
                r = function (t) {
                    return n.remove("".concat(A, "-").concat(t))
                },
                i = U.autoFetchSvg ? Object.keys(S) : Object.keys(be),
                c = [".".concat(j, ":not([").concat(x, "])")].concat(i.map(function (t) {
                    return ".".concat(t, ":not([").concat(x, "])")
                })).join(", ");
            if (0 !== c.length) {
                var o = [];
                try {
                    o = xt(t.querySelectorAll(c))
                } catch (t) {}
                if (0 < o.length) {
                    a("pending"), r("complete");
                    var s = It.begin("onTree"),
                        l = o.reduce(function (t, e) {
                            try {
                                var n = ye(e);
                                n && t.push(n)
                            } catch (t) {
                                P || t instanceof le && console.error(t)
                            }
                            return t
                        }, []);
                    return new gt(function (t, n) {
                        gt.all(l).then(function (n) {
                            ne(n, function () {
                                a("active"), a("complete"), r("pending"), "function" == typeof e && e(), s(), t()
                            })
                        }).catch(function () {
                            s(), n()
                        })
                    })
                }
            }
        }
    }

    function ke(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        ye(t).then(function (t) {
            t && ne([t], e)
        })
    }

    function ze(t, e) {
        var a = "".concat(C).concat(e.replace(":", "-"));
        return new gt(function (r, i) {
            if (null !== t.getAttribute(a)) return r();
            var c = xt(t.children).filter(function (t) {
                    return t.getAttribute(M) === e
                })[0],
                o = m.getComputedStyle(t, e),
                s = o.getPropertyValue("font-family").match(N),
                l = o.getPropertyValue("font-weight"),
                f = o.getPropertyValue("content");
            if (c && !s) return t.removeChild(c), r();
            if (s && "none" !== f && "" !== f) {
                var u = o.getPropertyValue("content"),
                    h = ~["Solid", "Regular", "Light", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? E[s[2].toLowerCase()] : _[l],
                    v = Tt(3 === u.length ? u.substr(1, 1) : u),
                    p = Xt(h, v),
                    g = p;
                if (!p || c && c.getAttribute(O) === h && c.getAttribute(H) === g) r();
                else {
                    t.setAttribute(a, g), c && t.removeChild(c);
                    var b = {
                            iconName: null,
                            title: null,
                            titleId: null,
                            prefix: null,
                            transform: yt,
                            symbol: !1,
                            mask: null,
                            maskId: null,
                            extra: {
                                classes: [],
                                styles: {},
                                attributes: {}
                            }
                        },
                        y = b.extra;
                    y.attributes[M] = e, ge(p, h).then(function (i) {
                        var c = Pt(n({}, b, {
                                icons: {
                                    main: i,
                                    mask: Gt()
                                },
                                prefix: h,
                                iconName: g,
                                extra: y,
                                watchable: !0
                            })),
                            o = d.createElement("svg");
                        ":before" === e ? t.insertBefore(o, t.firstChild) : t.appendChild(o), o.outerHTML = c.map(function (t) {
                            return Qt(t)
                        }).join("\n"), t.removeAttribute(a), r()
                    }).catch(i)
                }
            } else r()
        })
    }

    function xe(t) {
        return gt.all([ze(t, ":before"), ze(t, ":after")])
    }

    function Me(t) {
        return !(t.parentNode === document.head || ~V.indexOf(t.tagName.toUpperCase()) || t.getAttribute(M) || t.parentNode && "svg" === t.parentNode.tagName)
    }

    function Ce(t) {
        if (g) return new gt(function (e, n) {
            var a = xt(t.querySelectorAll("*")).filter(Me).map(xe),
                r = It.begin("searchPseudoElements");
            ae = !0, gt.all(a).then(function () {
                r(), re(), e()
            }).catch(function () {
                r(), re(), n()
            })
        })
    }
    var Oe = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

    function He() {
        var t = k,
            e = z,
            n = U.familyPrefix,
            a = U.replacementClass,
            r = Oe;
        if (n !== t || a !== e) {
            var i = new RegExp("\\.".concat(t, "\\-"), "g"),
                c = new RegExp("\\--".concat(t, "\\-"), "g"),
                o = new RegExp("\\.".concat(e), "g");
            r = r.replace(i, ".".concat(n, "-")).replace(c, "--".concat(n, "-")).replace(o, ".".concat(a))
        }
        return r
    }

    function Ae() {
        U.autoAddCss && !Ee && (wt(He()), Ee = !0)
    }

    function Le(t, e) {
        return Object.defineProperty(t, "abstract", {
            get: e
        }), Object.defineProperty(t, "html", {
            get: function () {
                return t.abstract.map(function (t) {
                    return Qt(t)
                })
            }
        }), Object.defineProperty(t, "node", {
            get: function () {
                if (g) {
                    var e = d.createElement("div");
                    return e.innerHTML = t.html, e.children
                }
            }
        }), t
    }

    function Ve(t) {
        var e = t.prefix,
            n = void 0 === e ? "fa" : e,
            a = t.iconName;
        if (a) return Jt(Se.definitions, n, a) || Jt(X.styles, n, a)
    }
    var Pe, Se = new(function () {
            function t() {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.definitions = {}
            }
            var a, r;
            return a = t, (r = [{
                key: "add",
                value: function () {
                    for (var t = this, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
                    var i = a.reduce(this._pullDefinitions, {});
                    Object.keys(i).forEach(function (e) {
                        t.definitions[e] = n({}, t.definitions[e] || {}, i[e]),
                            function t(e, a) {
                                var r = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                                    i = void 0 !== r && r,
                                    c = Object.keys(a).reduce(function (t, e) {
                                        var n = a[e];
                                        return n.icon ? t[n.iconName] = n.icon : t[e] = n, t
                                    }, {});
                                "function" != typeof X.hooks.addPack || i ? X.styles[e] = n({}, X.styles[e] || {}, c) : X.hooks.addPack(e, c), "fas" === e && t("fa", a)
                            }(e, i[e]), qt()
                    })
                }
            }, {
                key: "reset",
                value: function () {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function (t, e) {
                    var n = e.prefix && e.iconName && e.icon ? {
                        0: e
                    } : e;
                    return Object.keys(n).map(function (e) {
                        var a = n[e],
                            r = a.prefix,
                            i = a.iconName,
                            c = a.icon;
                        t[r] || (t[r] = {}), t[r][i] = c
                    }), t
                }
            }]) && e(a.prototype, r), t
        }()),
        Ee = !1,
        je = {
            i2svg: function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (g) {
                    Ae();
                    var e = t.node,
                        n = void 0 === e ? d : e,
                        a = t.callback,
                        r = void 0 === a ? function () {} : a;
                    return U.searchPseudoElements && Ce(n), we(n, r)
                }
                return gt.reject("Operation requires a DOM of some kind.")
            },
            css: He,
            insertCss: function () {
                Ee || (wt(He()), Ee = !0)
            },
            watch: function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.autoReplaceSvgRoot,
                    n = t.observeMutationsRoot;
                !1 === U.autoReplaceSvg && (U.autoReplaceSvg = !0), U.observeMutations = !0, K(function () {
                    Ie({
                        autoReplaceSvgRoot: e
                    }), ce({
                        treeCallback: we,
                        nodeCallback: ke,
                        pseudoElementsCallback: Ce,
                        observeMutationsRoot: n
                    })
                })
            }
        },
        Ne = (Pe = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                a = e.transform,
                r = void 0 === a ? yt : a,
                i = e.symbol,
                c = void 0 !== i && i,
                o = e.mask,
                s = void 0 === o ? null : o,
                l = e.maskId,
                f = void 0 === l ? null : l,
                u = e.title,
                m = void 0 === u ? null : u,
                d = e.titleId,
                h = void 0 === d ? null : d,
                v = e.classes,
                p = void 0 === v ? [] : v,
                g = e.attributes,
                b = void 0 === g ? {} : g,
                y = e.styles,
                w = void 0 === y ? {} : y;
            if (t) {
                var k = t.prefix,
                    z = t.iconName,
                    x = t.icon;
                return Le(n({
                    type: "icon"
                }, t), function () {
                    return Ae(), U.autoA11y && (m ? b["aria-labelledby"] = "".concat(U.replacementClass, "-title-").concat(h || zt()) : (b["aria-hidden"] = "true", b.focusable = "false")), Pt({
                        icons: {
                            main: pe(x),
                            mask: s ? pe(s.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: k,
                        iconName: z,
                        transform: n({}, yt, r),
                        symbol: c,
                        title: m,
                        maskId: f,
                        titleId: h,
                        extra: {
                            attributes: b,
                            styles: w,
                            classes: p
                        }
                    })
                })
            }
        }, function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                a = (t || {}).icon ? t : Ve(t || {}),
                r = e.mask;
            return r && (r = (r || {}).icon ? r : Ve(r || {})), Pe(a, n({}, e, {
                mask: r
            }))
        }),
        _e = {
            noAuto: function () {
                U.autoReplaceSvg = !1, U.observeMutations = !1, ie && ie.disconnect()
            },
            config: U,
            dom: je,
            library: Se,
            parse: {
                transform: function (t) {
                    return oe(t)
                }
            },
            findIconDefinition: Ve,
            icon: Ne,
            text: function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    a = e.transform,
                    i = void 0 === a ? yt : a,
                    c = e.title,
                    o = void 0 === c ? null : c,
                    s = e.classes,
                    l = void 0 === s ? [] : s,
                    f = e.attributes,
                    u = void 0 === f ? {} : f,
                    m = e.styles,
                    d = void 0 === m ? {} : m;
                return Le({
                    type: "text",
                    content: t
                }, function () {
                    return Ae(), St({
                        content: t,
                        transform: n({}, yt, i),
                        title: o,
                        extra: {
                            attributes: u,
                            styles: d,
                            classes: ["".concat(U.familyPrefix, "-layers-text")].concat(r(l))
                        }
                    })
                })
            },
            counter: function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    a = e.title,
                    i = void 0 === a ? null : a,
                    c = e.classes,
                    o = void 0 === c ? [] : c,
                    s = e.attributes,
                    l = void 0 === s ? {} : s,
                    f = e.styles,
                    u = void 0 === f ? {} : f;
                return Le({
                    type: "counter",
                    content: t
                }, function () {
                    return Ae(),
                        function (t) {
                            var e = t.content,
                                a = t.title,
                                r = t.extra,
                                i = n({}, r.attributes, a ? {
                                    title: a
                                } : {}, {
                                    class: r.classes.join(" ")
                                }),
                                c = Ot(r.styles);
                            0 < c.length && (i.style = c);
                            var o = [];
                            return o.push({
                                tag: "span",
                                attributes: i,
                                children: [e]
                            }), a && o.push({
                                tag: "span",
                                attributes: {
                                    class: "sr-only"
                                },
                                children: [a]
                            }), o
                        }({
                            content: t.toString(),
                            title: i,
                            extra: {
                                attributes: l,
                                styles: u,
                                classes: ["".concat(U.familyPrefix, "-layers-counter")].concat(r(o))
                            }
                        })
                })
            },
            layer: function (t) {
                var e = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).classes,
                    n = void 0 === e ? [] : e;
                return Le({
                    type: "layer"
                }, function () {
                    Ae();
                    var e = [];
                    return t(function (t) {
                        Array.isArray(t) ? t.map(function (t) {
                            e = e.concat(t.abstract)
                        }) : e = e.concat(t.abstract)
                    }), [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(U.familyPrefix, "-layers")].concat(r(n)).join(" ")
                        },
                        children: e
                    }]
                })
            },
            toHtml: Qt
        },
        Ie = function () {
            var t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                e = void 0 === t ? d : t;
            (0 < Object.keys(X.styles).length || U.autoFetchSvg) && g && U.autoReplaceSvg && _e.dom.i2svg({
                node: e
            })
        };
    ! function (t) {
        try {
            p && (m.FontAwesome || (m.FontAwesome = _e), K(function () {
                Ie(), ce({
                    treeCallback: we,
                    nodeCallback: ke,
                    pseudoElementsCallback: Ce
                })
            })), X.hooks = n({}, X.hooks, {
                addPack: function (t, e) {
                    X.styles[t] = n({}, X.styles[t] || {}, e), qt(), Ie()
                },
                addShims: function (t) {
                    var e;
                    (e = X.shims).push.apply(e, r(t)), qt(), Ie()
                }
            })
        } catch (t) {
            if (!P) throw t
        }
    }(function () {
        p && (m.FontAwesome || (m.FontAwesome = _e), K(function () {
            Ie(), ce({
                treeCallback: we,
                nodeCallback: ke,
                pseudoElementsCallback: Ce
            })
        })), X.hooks = n({}, X.hooks, {
            addPack: function (t, e) {
                X.styles[t] = n({}, X.styles[t] || {}, e), qt(), Ie()
            },
            addShims: function (t) {
                var e;
                (e = X.shims).push.apply(e, r(t)), qt(), Ie()
            }
        })
    })
}();