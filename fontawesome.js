/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
! function () {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var h = (c.navigator || {}).userAgent,
        a = void 0 === h ? "" : h,
        z = c,
        v = l,
        m = (z.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }();
    var s = z || {};
    s[m] || (s[m] = {}), s[m].styles || (s[m].styles = {}), s[m].hooks || (s[m].hooks = {}), s[m].shims || (s[m].shims = []);
    var t = s[m];

    function M(c, a) {
        var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
            h = void 0 !== l && l,
            z = Object.keys(a).reduce(function (c, l) {
                var h = a[l];
                return !!h.icon ? c[h.iconName] = h.icon : c[l] = h, c
            }, {});
        "function" != typeof t.hooks.addPack || h ? t.styles[c] = function (z) {
            for (var c = 1; c < arguments.length; c++) {
                var v = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(v);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(v).filter(function (c) {
                    return Object.getOwnPropertyDescriptor(v, c).enumerable
                }))), l.forEach(function (c) {
                    var l, h, a;
                    l = z, a = v[h = c], h in l ? Object.defineProperty(l, h, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[h] = a
                })
            }
            return z
        }({}, t.styles[c] || {}, z) : t.hooks.addPack(c, z), "fas" === c && M("fa", a)
    }

}(),
function () {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var h = (c.navigator || {}).userAgent,
        a = void 0 === h ? "" : h,
        z = c,
        v = l,
        m = (z.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }();
    var s = z || {};
    s[m] || (s[m] = {}), s[m].styles || (s[m].styles = {}), s[m].hooks || (s[m].hooks = {}), s[m].shims || (s[m].shims = []);
    var t = s[m];

    function M(c, a) {
        var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
            h = void 0 !== l && l,
            z = Object.keys(a).reduce(function (c, l) {
                var h = a[l];
                return !!h.icon ? c[h.iconName] = h.icon : c[l] = h, c
            }, {});
        "function" != typeof t.hooks.addPack || h ? t.styles[c] = function (z) {
            for (var c = 1; c < arguments.length; c++) {
                var v = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(v);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(v).filter(function (c) {
                    return Object.getOwnPropertyDescriptor(v, c).enumerable
                }))), l.forEach(function (c) {
                    var l, h, a;
                    l = z, a = v[h = c], h in l ? Object.defineProperty(l, h, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[h] = a
                })
            }
            return z
        }({}, t.styles[c] || {}, z) : t.hooks.addPack(c, z), "fas" === c && M("fa", a)
    }
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
        handshake: [640, 512, [], "f2b5", "M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"],
    };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!e) throw c
        }
    }(function () {
        M("far", f)
    })
}(),
function () {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var h = (c.navigator || {}).userAgent,
        a = void 0 === h ? "" : h,
        z = c,
        v = l,
        m = (z.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }();
    var s = z || {};
    s[m] || (s[m] = {}), s[m].styles || (s[m].styles = {}), s[m].hooks || (s[m].hooks = {}), s[m].shims || (s[m].shims = []);
    var t = s[m];

    function M(c, a) {
        var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
            h = void 0 !== l && l,
            z = Object.keys(a).reduce(function (c, l) {
                var h = a[l];
                return !!h.icon ? c[h.iconName] = h.icon : c[l] = h, c
            }, {});
        "function" != typeof t.hooks.addPack || h ? t.styles[c] = function (z) {
            for (var c = 1; c < arguments.length; c++) {
                var v = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(v);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(v).filter(function (c) {
                    return Object.getOwnPropertyDescriptor(v, c).enumerable
                }))), l.forEach(function (c) {
                    var l, h, a;
                    l = z, a = v[h = c], h in l ? Object.defineProperty(l, h, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[h] = a
                })
            }
            return z
        }({}, t.styles[c] || {}, z) : t.hooks.addPack(c, z), "fas" === c && M("fa", a)
    }
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
        "shopping-cart": [576, 512, [], "f07a", "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"],
    };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!e) throw c
        }
    }(function () {
        M("fas", f)
    })
}(),
function () {
    "use strict";

    function z(c) {
        return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (c) {
            return typeof c
        } : function (c) {
            return c && "function" == typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
        })(c)
    }

    function v(c, l) {
        for (var h = 0; h < l.length; h++) {
            var a = l[h];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(c, a.key, a)
        }
    }

    function $(z) {
        for (var c = 1; c < arguments.length; c++) {
            var v = null != arguments[c] ? arguments[c] : {},
                l = Object.keys(v);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(v).filter(function (c) {
                return Object.getOwnPropertyDescriptor(v, c).enumerable
            }))), l.forEach(function (c) {
                var l, h, a;
                l = z, a = v[h = c], h in l ? Object.defineProperty(l, h, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : l[h] = a
            })
        }
        return z
    }

    function n(c, l) {
        return function (c) {
            if (Array.isArray(c)) return c
        }(c) || function (c, l) {
            var h = [],
                a = !0,
                z = !1,
                v = void 0;
            try {
                for (var m, e = c[Symbol.iterator](); !(a = (m = e.next()).done) && (h.push(m.value), !l || h.length !== l); a = !0);
            } catch (c) {
                z = !0, v = c
            } finally {
                try {
                    a || null == e.return || e.return()
                } finally {
                    if (z) throw v
                }
            }
            return h
        }(c, l) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function H(c) {
        return function (c) {
            if (Array.isArray(c)) {
                for (var l = 0, h = new Array(c.length); l < c.length; l++) h[l] = c[l];
                return h
            }
        }(c) || function (c) {
            if (Symbol.iterator in Object(c) || "[object Arguments]" === Object.prototype.toString.call(c)) return Array.from(c)
        }(c) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var c = function () {},
        l = {},
        h = {},
        a = null,
        m = {
            mark: c,
            measure: c
        };
    try {
        "undefined" != typeof window && (l = window), "undefined" != typeof document && (h = document), "undefined" != typeof MutationObserver && (a = MutationObserver), "undefined" != typeof performance && (m = performance)
    } catch (c) {}
    var e = (l.navigator || {}).userAgent,
        s = void 0 === e ? "" : e,
        o = l,
        C = h,
        t = a,
        M = m,
        f = !!o.document,
        r = !!C.documentElement && !!C.head && "function" == typeof C.addEventListener && "function" == typeof C.createElement,
        p = ~s.indexOf("MSIE") || ~s.indexOf("Trident/"),
        V = "___FONT_AWESOME___",
        b = 16,
        i = "fa",
        L = "svg-inline--fa",
        cc = "data-fa-i2svg",
        u = "data-fa-pseudo-element",
        d = "data-fa-pseudo-element-pending",
        A = "data-prefix",
        g = "data-icon",
        S = "fontawesome-i2svg",
        y = "async",
        w = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        Z = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        k = {
            fas: "solid",
            far: "regular",
            fal: "light",
            fad: "duotone",
            fab: "brands",
            fak: "kit",
            fa: "solid"
        },
        x = {
            solid: "fas",
            regular: "far",
            light: "fal",
            duotone: "fad",
            brands: "fab",
            kit: "fak"
        },
        q = "fa-layers-text",
        O = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,
        j = {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal"
        },
        P = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        E = P.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        N = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        _ = {
            GROUP: "group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary"
        },
        T = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", _.GROUP, _.SWAP_OPACITY, _.PRIMARY, _.SECONDARY].concat(P.map(function (c) {
            return "".concat(c, "x")
        })).concat(E.map(function (c) {
            return "w-".concat(c)
        })),
        I = o.FontAwesomeConfig || {};
    if (C && "function" == typeof C.querySelector) {
        [
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
        ].forEach(function (c) {
            var l, h = n(c, 2),
                a = h[0],
                z = h[1],
                v = "" === (l = function (c) {
                    var l = C.querySelector("script[" + c + "]");
                    if (l) return l.getAttribute(c)
                }(a)) || "false" !== l && ("true" === l || l);
            null != v && (I[z] = v)
        })
    }
    var R = $({}, {
        familyPrefix: i,
        replacementClass: L,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, I);
    R.autoReplaceSvg || (R.observeMutations = !1);
    var lc = $({}, R);
    o.FontAwesomeConfig = lc;
    var F = o || {};
    F[V] || (F[V] = {}), F[V].styles || (F[V].styles = {}), F[V].hooks || (F[V].hooks = {}), F[V].shims || (F[V].shims = []);
    var Y = F[V],
        D = [],
        W = !1;

    function U(c) {
        r && (W ? setTimeout(c, 0) : D.push(c))
    }
    r && ((W = (C.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(C.readyState)) || C.addEventListener("DOMContentLoaded", function c() {
        C.removeEventListener("DOMContentLoaded", c), W = 1, D.map(function (c) {
            return c()
        })
    }));
    var Q, X = "pending",
        B = "settled",
        G = "fulfilled",
        K = "rejected",
        J = function () {},
        hc = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
        ac = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        zc = [];

    function vc() {
        for (var c = 0; c < zc.length; c++) zc[c][0](zc[c][1]);
        Q = !(zc = [])
    }

    function mc(c, l) {
        zc.push([c, l]), Q || (Q = !0, ac(vc, 0))
    }

    function ec(c) {
        var l = c.owner,
            h = l._state,
            a = l._data,
            z = c[h],
            v = c.then;
        if ("function" == typeof z) {
            h = G;
            try {
                a = z(a)
            } catch (c) {
                fc(v, c)
            }
        }
        sc(v, a) || (h === G && tc(v, a), h === K && fc(v, a))
    }

    function sc(l, h) {
        var a;
        try {
            if (l === h) throw new TypeError("A promises callback cannot return that same promise.");
            if (h && ("function" == typeof h || "object" === z(h))) {
                var c = h.then;
                if ("function" == typeof c) return c.call(h, function (c) {
                    a || (a = !0, h === c ? Mc(l, c) : tc(l, c))
                }, function (c) {
                    a || (a = !0, fc(l, c))
                }), !0
            }
        } catch (c) {
            return a || fc(l, c), !0
        }
        return !1
    }

    function tc(c, l) {
        c !== l && sc(c, l) || Mc(c, l)
    }

    function Mc(c, l) {
        c._state === X && (c._state = B, c._data = l, mc(rc, c))
    }

    function fc(c, l) {
        c._state === X && (c._state = B, c._data = l, mc(nc, c))
    }

    function Hc(c) {
        c._then = c._then.forEach(ec)
    }

    function rc(c) {
        c._state = G, Hc(c)
    }

    function nc(c) {
        c._state = K, Hc(c), !c._handled && hc && global.process.emit("unhandledRejection", c._data, c)
    }

    function Vc(c) {
        global.process.emit("rejectionHandled", c)
    }

    function ic(c) {
        if ("function" != typeof c) throw new TypeError("Promise resolver " + c + " is not a function");
        if (this instanceof ic == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [],
            function (c, l) {
                function h(c) {
                    fc(l, c)
                }
                try {
                    c(function (c) {
                        tc(l, c)
                    }, h)
                } catch (c) {
                    h(c)
                }
            }(c, this)
    }
    ic.prototype = {
        constructor: ic,
        _state: X,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (c, l) {
            var h = {
                owner: this,
                then: new this.constructor(J),
                fulfilled: c,
                rejected: l
            };
            return !l && !c || this._handled || (this._handled = !0, this._state === K && hc && mc(Vc, this)), this._state === G || this._state === K ? mc(ec, h) : this._then.push(h), h.then
        },
        catch: function (c) {
            return this.then(null, c)
        }
    }, ic.all = function (e) {
        if (!Array.isArray(e)) throw new TypeError("You must pass an array to Promise.all().");
        return new ic(function (h, c) {
            var a = [],
                z = 0;

            function l(l) {
                return z++,
                    function (c) {
                        a[l] = c, --z || h(a)
                    }
            }
            for (var v, m = 0; m < e.length; m++)(v = e[m]) && "function" == typeof v.then ? v.then(l(m), c) : a[m] = v;
            z || h(a)
        })
    }, ic.race = function (z) {
        if (!Array.isArray(z)) throw new TypeError("You must pass an array to Promise.race().");
        return new ic(function (c, l) {
            for (var h, a = 0; a < z.length; a++)(h = z[a]) && "function" == typeof h.then ? h.then(c, l) : c(h)
        })
    }, ic.resolve = function (l) {
        return l && "object" === z(l) && l.constructor === ic ? l : new ic(function (c) {
            c(l)
        })
    }, ic.reject = function (h) {
        return new ic(function (c, l) {
            l(h)
        })
    };
    var oc = "function" == typeof Promise ? Promise : ic,
        Cc = b,
        Lc = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };

    function uc(c) {
        if (c && r) {
            var l = C.createElement("style");
            l.setAttribute("type", "text/css"), l.innerHTML = c;
            for (var h = C.head.childNodes, a = null, z = h.length - 1; - 1 < z; z--) {
                var v = h[z],
                    m = (v.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(m) && (a = v)
            }
            return C.head.insertBefore(l, a), c
        }
    }
    var dc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function pc() {
        for (var c = 12, l = ""; 0 < c--;) l += dc[62 * Math.random() | 0];
        return l
    }

    function bc(c) {
        for (var l = [], h = (c || []).length >>> 0; h--;) l[h] = c[h];
        return l
    }

    function Ac(c) {
        return c.classList ? bc(c.classList) : (c.getAttribute("class") || "").split(" ").filter(function (c) {
            return c
        })
    }

    function gc(c, l) {
        var h, a = l.split("-"),
            z = a[0],
            v = a.slice(1).join("-");
        return z !== c || "" === v || (h = v, ~T.indexOf(h)) ? null : v
    }

    function Sc(c) {
        return "".concat(c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function yc(h) {
        return Object.keys(h || {}).reduce(function (c, l) {
            return c + "".concat(l, ": ").concat(h[l], ";")
        }, "")
    }

    function wc(c) {
        return c.size !== Lc.size || c.x !== Lc.x || c.y !== Lc.y || c.rotate !== Lc.rotate || c.flipX || c.flipY
    }

    function Zc(c) {
        var l = c.transform,
            h = c.containerWidth,
            a = c.iconWidth,
            z = {
                transform: "translate(".concat(h / 2, " 256)")
            },
            v = "translate(".concat(32 * l.x, ", ").concat(32 * l.y, ") "),
            m = "scale(".concat(l.size / 16 * (l.flipX ? -1 : 1), ", ").concat(l.size / 16 * (l.flipY ? -1 : 1), ") "),
            e = "rotate(".concat(l.rotate, " 0 0)");
        return {
            outer: z,
            inner: {
                transform: "".concat(v, " ").concat(m, " ").concat(e)
            },
            path: {
                transform: "translate(".concat(a / 2 * -1, " -256)")
            }
        }
    }
    var kc = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };

    function xc(c) {
        var l = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        return c.attributes && (c.attributes.fill || l) && (c.attributes.fill = "black"), c
    }

    function qc(c) {
        var l = c.icons,
            h = l.main,
            a = l.mask,
            z = c.prefix,
            v = c.iconName,
            m = c.transform,
            e = c.symbol,
            s = c.title,
            t = c.maskId,
            M = c.titleId,
            f = c.extra,
            H = c.watchable,
            r = void 0 !== H && H,
            n = a.found ? a : h,
            V = n.width,
            i = n.height,
            o = "fak" === z,
            C = o ? "" : "fa-w-".concat(Math.ceil(V / i * 16)),
            L = [lc.replacementClass, v ? "".concat(lc.familyPrefix, "-").concat(v) : "", C].filter(function (c) {
                return -1 === f.classes.indexOf(c)
            }).filter(function (c) {
                return "" !== c || !!c
            }).concat(f.classes).join(" "),
            u = {
                children: [],
                attributes: $({}, f.attributes, {
                    "data-prefix": z,
                    "data-icon": v,
                    class: L,
                    role: f.attributes.role || "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(V, " ").concat(i)
                })
            },
            d = o && !~f.classes.indexOf("fa-fw") ? {
                width: "".concat(V / i * 16 * .0625, "em")
            } : {};
        r && (u.attributes[cc] = ""), s && u.children.push({
            tag: "title",
            attributes: {
                id: u.attributes["aria-labelledby"] || "title-".concat(M || pc())
            },
            children: [s]
        });
        var p, b, A, g, S, y, w, Z, k, x, q, O, j, P, E, N, _, T, I, R, F, Y, D, W, U, Q, X, B = $({}, u, {
                prefix: z,
                iconName: v,
                main: h,
                mask: a,
                maskId: t,
                transform: m,
                symbol: e,
                styles: $({}, d, f.styles)
            }),
            G = a.found && h.found ? (A = (p = B).children, g = p.attributes, S = p.main, y = p.mask, w = p.maskId, Z = p.transform, k = S.width, x = S.icon, q = y.width, O = y.icon, j = Zc({
                transform: Z,
                containerWidth: q,
                iconWidth: k
            }), P = {
                tag: "rect",
                attributes: $({}, kc, {
                    fill: "white"
                })
            }, E = x.children ? {
                children: x.children.map(xc)
            } : {}, N = {
                tag: "g",
                attributes: $({}, j.inner),
                children: [xc($({
                    tag: x.tag,
                    attributes: $({}, x.attributes, j.path)
                }, E))]
            }, _ = {
                tag: "g",
                attributes: $({}, j.outer),
                children: [N]
            }, T = "mask-".concat(w || pc()), I = "clip-".concat(w || pc()), R = {
                tag: "mask",
                attributes: $({}, kc, {
                    id: T,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [P, _]
            }, F = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: I
                    },
                    children: (b = O, "g" === b.tag ? b.children : [b])
                }, R]
            }, A.push(F, {
                tag: "rect",
                attributes: $({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(I, ")"),
                    mask: "url(#".concat(T, ")")
                }, kc)
            }), {
                children: A,
                attributes: g
            }) : function (c) {
                var l = c.children,
                    h = c.attributes,
                    a = c.main,
                    z = c.transform,
                    v = yc(c.styles);
                if (0 < v.length && (h.style = v), wc(z)) {
                    var m = Zc({
                        transform: z,
                        containerWidth: a.width,
                        iconWidth: a.width
                    });
                    l.push({
                        tag: "g",
                        attributes: $({}, m.outer),
                        children: [{
                            tag: "g",
                            attributes: $({}, m.inner),
                            children: [{
                                tag: a.icon.tag,
                                children: a.icon.children,
                                attributes: $({}, a.icon.attributes, m.path)
                            }]
                        }]
                    })
                } else l.push(a.icon);
                return {
                    children: l,
                    attributes: h
                }
            }(B),
            K = G.children,
            J = G.attributes;
        return B.children = K, B.attributes = J, e ? (D = (Y = B).prefix, W = Y.iconName, U = Y.children, Q = Y.attributes, X = Y.symbol, [{
            tag: "svg",
            attributes: {
                style: "display: none;"
            },
            children: [{
                tag: "symbol",
                attributes: $({}, Q, {
                    id: !0 === X ? "".concat(D, "-").concat(lc.familyPrefix, "-").concat(W) : X
                }),
                children: U
            }]
        }]) : function (c) {
            var l = c.children,
                h = c.main,
                a = c.mask,
                z = c.attributes,
                v = c.styles,
                m = c.transform;
            if (wc(m) && h.found && !a.found) {
                var e = h.width / h.height / 2,
                    s = .5;
                z.style = yc($({}, v, {
                    "transform-origin": "".concat(e + m.x / 16, "em ").concat(s + m.y / 16, "em")
                }))
            }
            return [{
                tag: "svg",
                attributes: z,
                children: l
            }]
        }(B)
    }

    function Oc(c) {
        var l = c.content,
            h = c.width,
            a = c.height,
            z = c.transform,
            v = c.title,
            m = c.extra,
            e = c.watchable,
            s = void 0 !== e && e,
            t = $({}, m.attributes, v ? {
                title: v
            } : {}, {
                class: m.classes.join(" ")
            });
        s && (t[cc] = "");
        var M, f, H, r, n, V, i, o, C, L = $({}, m.styles);
        wc(z) && (L.transform = (f = (M = {
            transform: z,
            startCentered: !0,
            width: h,
            height: a
        }).transform, H = M.width, r = void 0 === H ? b : H, n = M.height, V = void 0 === n ? b : n, i = M.startCentered, C = "", C += (o = void 0 !== i && i) && p ? "translate(".concat(f.x / Cc - r / 2, "em, ").concat(f.y / Cc - V / 2, "em) ") : o ? "translate(calc(-50% + ".concat(f.x / Cc, "em), calc(-50% + ").concat(f.y / Cc, "em)) ") : "translate(".concat(f.x / Cc, "em, ").concat(f.y / Cc, "em) "), C += "scale(".concat(f.size / Cc * (f.flipX ? -1 : 1), ", ").concat(f.size / Cc * (f.flipY ? -1 : 1), ") "), C += "rotate(".concat(f.rotate, "deg) ")), L["-webkit-transform"] = L.transform);
        var u = yc(L);
        0 < u.length && (t.style = u);
        var d = [];
        return d.push({
            tag: "span",
            attributes: t,
            children: [l]
        }), v && d.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [v]
        }), d
    }
    var jc = function () {},
        Pc = lc.measurePerformance && M && M.mark && M.measure ? M : {
            mark: jc,
            measure: jc
        },
        Ec = 'FA "5.15.4"',
        Nc = function (c) {
            Pc.mark("".concat(Ec, " ").concat(c, " ends")), Pc.measure("".concat(Ec, " ").concat(c), "".concat(Ec, " ").concat(c, " begins"), "".concat(Ec, " ").concat(c, " ends"))
        },
        _c = {
            begin: function (c) {
                return Pc.mark("".concat(Ec, " ").concat(c, " begins")),
                    function () {
                        return Nc(c)
                    }
            },
            end: Nc
        },
        Tc = function (c, l, h, a) {
            var z, v, m, e, s, t = Object.keys(c),
                M = t.length,
                f = void 0 !== a ? (e = l, s = a, function (c, l, h, a) {
                    return e.call(s, c, l, h, a)
                }) : l;
            for (m = void 0 === h ? (z = 1, c[t[0]]) : (z = 0, h); z < M; z++) m = f(m, c[v = t[z]], v, c);
            return m
        };

    function Ic(c) {
        for (var l = "", h = 0; h < c.length; h++) {
            l += ("000" + c.charCodeAt(h).toString(16)).slice(-4)
        }
        return l
    }
    var Rc = Y.styles,
        Fc = Y.shims,
        Yc = {},
        Dc = {},
        Wc = {},
        Uc = function () {
            var c = function (a) {
                return Tc(Rc, function (c, l, h) {
                    return c[h] = Tc(l, a, {}), c
                }, {})
            };
            Yc = c(function (c, l, h) {
                return l[3] && (c[l[3]] = h), c
            }), Dc = c(function (l, c, h) {
                var a = c[2];
                return l[h] = h, a.forEach(function (c) {
                    l[c] = h
                }), l
            });
            var v = "far" in Rc;
            Wc = Tc(Fc, function (c, l) {
                var h = l[0],
                    a = l[1],
                    z = l[2];
                return "far" !== a || v || (a = "fas"), c[h] = {
                    prefix: a,
                    iconName: z
                }, c
            }, {})
        };

    function Qc(c, l) {
        return (Yc[c] || {})[l]
    }
    Uc();
    var Xc = Y.styles,
        Bc = function () {
            return {
                prefix: null,
                iconName: null,
                rest: []
            }
        };

    function Gc(c) {
        return c.reduce(function (c, l) {
            var h = gc(lc.familyPrefix, l);
            if (Xc[l]) c.prefix = l;
            else if (lc.autoFetchSvg && -1 < Object.keys(k).indexOf(l)) c.prefix = l;
            else if (h) {
                var a = "fa" === c.prefix ? Wc[h] || {
                    prefix: null,
                    iconName: null
                } : {};
                c.iconName = a.iconName || h, c.prefix = a.prefix || c.prefix
            } else l !== lc.replacementClass && 0 !== l.indexOf("fa-w-") && c.rest.push(l);
            return c
        }, Bc())
    }

    function Kc(c, l, h) {
        if (c && c[l] && c[l][h]) return {
            prefix: l,
            iconName: h,
            icon: c[l][h]
        }
    }

    function Jc(c) {
        var h, l = c.tag,
            a = c.attributes,
            z = void 0 === a ? {} : a,
            v = c.children,
            m = void 0 === v ? [] : v;
        return "string" == typeof c ? Sc(c) : "<".concat(l, " ").concat((h = z, Object.keys(h || {}).reduce(function (c, l) {
            return c + "".concat(l, '="').concat(Sc(h[l]), '" ')
        }, "").trim()), ">").concat(m.map(Jc).join(""), "</").concat(l, ">")
    }
    var $c = function () {};

    function cl(c) {
        return "string" == typeof (c.getAttribute ? c.getAttribute(cc) : null)
    }
    var ll = {
        replace: function (c) {
            var l = c[0],
                h = c[1].map(function (c) {
                    return Jc(c)
                }).join("\n");
            if (l.parentNode && l.outerHTML) l.outerHTML = h + (lc.keepOriginalSource && "svg" !== l.tagName.toLowerCase() ? "\x3c!-- ".concat(l.outerHTML, " Font Awesome fontawesome.com --\x3e") : "");
            else if (l.parentNode) {
                var a = document.createElement("span");
                l.parentNode.replaceChild(a, l), a.outerHTML = h
            }
        },
        nest: function (c) {
            var l = c[0],
                h = c[1];
            if (~Ac(l).indexOf(lc.replacementClass)) return ll.replace(c);
            var a = new RegExp("".concat(lc.familyPrefix, "-.*"));
            delete h[0].attributes.style, delete h[0].attributes.id;
            var z = h[0].attributes.class.split(" ").reduce(function (c, l) {
                return l === lc.replacementClass || l.match(a) ? c.toSvg.push(l) : c.toNode.push(l), c
            }, {
                toNode: [],
                toSvg: []
            });
            h[0].attributes.class = z.toSvg.join(" ");
            var v = h.map(function (c) {
                return Jc(c)
            }).join("\n");
            l.setAttribute("class", z.toNode.join(" ")), l.setAttribute(cc, ""), l.innerHTML = v
        }
    };

    function hl(c) {
        c()
    }

    function al(h, c) {
        var a = "function" == typeof c ? c : $c;
        if (0 === h.length) a();
        else {
            var l = hl;
            lc.mutateApproach === y && (l = o.requestAnimationFrame || hl), l(function () {
                var c = !0 === lc.autoReplaceSvg ? ll.replace : ll[lc.autoReplaceSvg] || ll.replace,
                    l = _c.begin("mutate");
                h.map(c), l(), a()
            })
        }
    }
    var zl = !1;

    function vl() {
        zl = !1
    }
    var ml = null;

    function el(c) {
        if (t && lc.observeMutations) {
            var z = c.treeCallback,
                v = c.nodeCallback,
                m = c.pseudoElementsCallback,
                l = c.observeMutationsRoot,
                h = void 0 === l ? C : l;
            ml = new t(function (c) {
                zl || bc(c).forEach(function (c) {
                    if ("childList" === c.type && 0 < c.addedNodes.length && !cl(c.addedNodes[0]) && (lc.searchPseudoElements && m(c.target), z(c.target)), "attributes" === c.type && c.target.parentNode && lc.searchPseudoElements && m(c.target.parentNode), "attributes" === c.type && cl(c.target) && ~N.indexOf(c.attributeName))
                        if ("class" === c.attributeName) {
                            var l = Gc(Ac(c.target)),
                                h = l.prefix,
                                a = l.iconName;
                            h && c.target.setAttribute("data-prefix", h), a && c.target.setAttribute("data-icon", a)
                        } else v(c.target)
                })
            }), r && ml.observe(h, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            })
        }
    }

    function sl(c) {
        var l, h, a = c.getAttribute("data-prefix"),
            z = c.getAttribute("data-icon"),
            v = void 0 !== c.innerText ? c.innerText.trim() : "",
            m = Gc(Ac(c));
        return a && z && (m.prefix = a, m.iconName = z), m.prefix && 1 < v.length ? m.iconName = (l = m.prefix, h = c.innerText, (Dc[l] || {})[h]) : m.prefix && 1 === v.length && (m.iconName = Qc(m.prefix, Ic(c.innerText))), m
    }
    var tl = function (c) {
        var l = {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        };
        return c ? c.toLowerCase().split(" ").reduce(function (c, l) {
            var h = l.toLowerCase().split("-"),
                a = h[0],
                z = h.slice(1).join("-");
            if (a && "h" === z) return c.flipX = !0, c;
            if (a && "v" === z) return c.flipY = !0, c;
            if (z = parseFloat(z), isNaN(z)) return c;
            switch (a) {
                case "grow":
                    c.size = c.size + z;
                    break;
                case "shrink":
                    c.size = c.size - z;
                    break;
                case "left":
                    c.x = c.x - z;
                    break;
                case "right":
                    c.x = c.x + z;
                    break;
                case "up":
                    c.y = c.y - z;
                    break;
                case "down":
                    c.y = c.y + z;
                    break;
                case "rotate":
                    c.rotate = c.rotate + z
            }
            return c
        }, l) : l
    };

    function Ml(c) {
        var l, h, a, z, v, m, e, s, t = sl(c),
            M = t.iconName,
            f = t.prefix,
            H = t.rest,
            r = (l = c.getAttribute("style"), h = [], l && (h = l.split(";").reduce(function (c, l) {
                var h = l.split(":"),
                    a = h[0],
                    z = h.slice(1);
                return a && 0 < z.length && (c[a] = z.join(":").trim()), c
            }, {})), h),
            n = tl(c.getAttribute("data-fa-transform")),
            V = null !== (a = c.getAttribute("data-fa-symbol")) && ("" === a || a),
            i = (v = bc((z = c).attributes).reduce(function (c, l) {
                return "class" !== c.name && "style" !== c.name && (c[l.name] = l.value), c
            }, {}), m = z.getAttribute("title"), e = z.getAttribute("data-fa-title-id"), lc.autoA11y && (m ? v["aria-labelledby"] = "".concat(lc.replacementClass, "-title-").concat(e || pc()) : (v["aria-hidden"] = "true", v.focusable = "false")), v),
            o = (s = c.getAttribute("data-fa-mask")) ? Gc(s.split(" ").map(function (c) {
                return c.trim()
            })) : Bc();
        return {
            iconName: M,
            title: c.getAttribute("title"),
            titleId: c.getAttribute("data-fa-title-id"),
            prefix: f,
            transform: n,
            symbol: V,
            mask: o,
            maskId: c.getAttribute("data-fa-mask-id"),
            extra: {
                classes: H,
                styles: r,
                attributes: i
            }
        }
    }

    function fl(c) {
        this.name = "MissingIcon", this.message = c || "Icon unavailable", this.stack = (new Error).stack
    }(fl.prototype = Object.create(Error.prototype)).constructor = fl;
    var Hl = {
            fill: "currentColor"
        },
        rl = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
        },
        nl = {
            tag: "path",
            attributes: $({}, Hl, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
        },
        Vl = $({}, rl, {
            attributeName: "opacity"
        }),
        il = {
            tag: "g",
            children: [nl, {
                tag: "circle",
                attributes: $({}, Hl, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: [{
                    tag: "animate",
                    attributes: $({}, rl, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: $({}, Vl, {
                        values: "1;0;1;1;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: $({}, Hl, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: [{
                    tag: "animate",
                    attributes: $({}, Vl, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: $({}, Hl, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: $({}, Vl, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }]
        },
        ol = Y.styles;

    function Cl(c) {
        var l = c[0],
            h = c[1],
            a = n(c.slice(4), 1)[0];
        return {
            found: !0,
            width: l,
            height: h,
            icon: Array.isArray(a) ? {
                tag: "g",
                attributes: {
                    class: "".concat(lc.familyPrefix, "-").concat(_.GROUP)
                },
                children: [{
                    tag: "path",
                    attributes: {
                        class: "".concat(lc.familyPrefix, "-").concat(_.SECONDARY),
                        fill: "currentColor",
                        d: a[0]
                    }
                }, {
                    tag: "path",
                    attributes: {
                        class: "".concat(lc.familyPrefix, "-").concat(_.PRIMARY),
                        fill: "currentColor",
                        d: a[1]
                    }
                }]
            } : {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: a
                }
            }
        }
    }

    function Ll(a, z) {
        return new oc(function (c, l) {
            var h = {
                found: !1,
                width: 512,
                height: 512,
                icon: il
            };
            if (a && z && ol[z] && ol[z][a]) return c(Cl(ol[z][a]));
            a && z && !lc.showMissingIcons ? l(new fl("Icon is missing for prefix ".concat(z, " with icon name ").concat(a))) : c(h)
        })
    }
    var ul = Y.styles;

    function dl(c) {
        var v, l, m, e, s, t, M, f, h, H, r, a = Ml(c);
        return ~a.extra.classes.indexOf(q) ? function (c, l) {
            var h = l.title,
                a = l.transform,
                z = l.extra,
                v = null,
                m = null;
            if (p) {
                var e = parseInt(getComputedStyle(c).fontSize, 10),
                    s = c.getBoundingClientRect();
                v = s.width / e, m = s.height / e
            }
            return lc.autoA11y && !h && (z.attributes["aria-hidden"] = "true"), oc.resolve([c, Oc({
                content: c.innerHTML,
                width: v,
                height: m,
                transform: a,
                title: h,
                extra: z,
                watchable: !0
            })])
        }(c, a) : (v = c, m = (l = a).iconName, e = l.title, s = l.titleId, t = l.prefix, M = l.transform, f = l.symbol, h = l.mask, H = l.maskId, r = l.extra, new oc(function (z, c) {
            oc.all([Ll(m, t), Ll(h.iconName, h.prefix)]).then(function (c) {
                var l = n(c, 2),
                    h = l[0],
                    a = l[1];
                z([v, qc({
                    icons: {
                        main: h,
                        mask: a
                    },
                    prefix: t,
                    iconName: m,
                    transform: M,
                    symbol: f,
                    mask: a,
                    maskId: H,
                    title: e,
                    titleId: s,
                    extra: r,
                    watchable: !0
                })])
            })
        }))
    }

    function pl(c) {
        var h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (r) {
            var l = C.documentElement.classList,
                a = function (c) {
                    return l.add("".concat(S, "-").concat(c))
                },
                z = function (c) {
                    return l.remove("".concat(S, "-").concat(c))
                },
                v = lc.autoFetchSvg ? Object.keys(k) : Object.keys(ul),
                m = [".".concat(q, ":not([").concat(cc, "])")].concat(v.map(function (c) {
                    return ".".concat(c, ":not([").concat(cc, "])")
                })).join(", ");
            if (0 !== m.length) {
                var e = [];
                try {
                    e = bc(c.querySelectorAll(m))
                } catch (c) {}
                if (0 < e.length) {
                    a("pending"), z("complete");
                    var s = _c.begin("onTree"),
                        t = e.reduce(function (c, l) {
                            try {
                                var h = dl(l);
                                h && c.push(h)
                            } catch (c) {
                                Z || c instanceof fl && console.error(c)
                            }
                            return c
                        }, []);
                    return new oc(function (l, c) {
                        oc.all(t).then(function (c) {
                            al(c, function () {
                                a("active"), a("complete"), z("pending"), "function" == typeof h && h(), s(), l()
                            })
                        }).catch(function () {
                            s(), c()
                        })
                    })
                }
            }
        }
    }

    function bl(c) {
        var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        dl(c).then(function (c) {
            c && al([c], l)
        })
    }

    function Al(n, V) {
        var i = "".concat(d).concat(V.replace(":", "-"));
        return new oc(function (a, c) {
            if (null !== n.getAttribute(i)) return a();
            var l = bc(n.children).filter(function (c) {
                    return c.getAttribute(u) === V
                })[0],
                h = o.getComputedStyle(n, V),
                z = h.getPropertyValue("font-family").match(O),
                v = h.getPropertyValue("font-weight"),
                m = h.getPropertyValue("content");
            if (l && !z) return n.removeChild(l), a();
            if (z && "none" !== m && "" !== m) {
                var e = h.getPropertyValue("content"),
                    s = ~["Solid", "Regular", "Light", "Duotone", "Brands", "Kit"].indexOf(z[2]) ? x[z[2].toLowerCase()] : j[v],
                    t = Ic(3 === e.length ? e.substr(1, 1) : e),
                    M = Qc(s, t),
                    f = M;
                if (!M || l && l.getAttribute(A) === s && l.getAttribute(g) === f) a();
                else {
                    n.setAttribute(i, f), l && n.removeChild(l);
                    var H = {
                            iconName: null,
                            title: null,
                            titleId: null,
                            prefix: null,
                            transform: Lc,
                            symbol: !1,
                            mask: null,
                            maskId: null,
                            extra: {
                                classes: [],
                                styles: {},
                                attributes: {}
                            }
                        },
                        r = H.extra;
                    r.attributes[u] = V, Ll(M, s).then(function (c) {
                        var l = qc($({}, H, {
                                icons: {
                                    main: c,
                                    mask: Bc()
                                },
                                prefix: s,
                                iconName: f,
                                extra: r,
                                watchable: !0
                            })),
                            h = C.createElement("svg");
                        ":before" === V ? n.insertBefore(h, n.firstChild) : n.appendChild(h), h.outerHTML = l.map(function (c) {
                            return Jc(c)
                        }).join("\n"), n.removeAttribute(i), a()
                    }).catch(c)
                }
            } else a()
        })
    }

    function gl(c) {
        return oc.all([Al(c, ":before"), Al(c, ":after")])
    }

    function Sl(c) {
        return !(c.parentNode === document.head || ~w.indexOf(c.tagName.toUpperCase()) || c.getAttribute(u) || c.parentNode && "svg" === c.parentNode.tagName)
    }

    function yl(z) {
        if (r) return new oc(function (c, l) {
            var h = bc(z.querySelectorAll("*")).filter(Sl).map(gl),
                a = _c.begin("searchPseudoElements");
            zl = !0, oc.all(h).then(function () {
                a(), vl(), c()
            }).catch(function () {
                a(), vl(), l()
            })
        })
    }
    var wl = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

    function Zl() {
        var c = i,
            l = L,
            h = lc.familyPrefix,
            a = lc.replacementClass,
            z = wl;
        if (h !== c || a !== l) {
            var v = new RegExp("\\.".concat(c, "\\-"), "g"),
                m = new RegExp("\\--".concat(c, "\\-"), "g"),
                e = new RegExp("\\.".concat(l), "g");
            z = z.replace(v, ".".concat(h, "-")).replace(m, "--".concat(h, "-")).replace(e, ".".concat(a))
        }
        return z
    }

    function kl() {
        lc.autoAddCss && !Pl && (uc(Zl()), Pl = !0)
    }

    function xl(l, c) {
        return Object.defineProperty(l, "abstract", {
            get: c
        }), Object.defineProperty(l, "html", {
            get: function () {
                return l.abstract.map(function (c) {
                    return Jc(c)
                })
            }
        }), Object.defineProperty(l, "node", {
            get: function () {
                if (r) {
                    var c = C.createElement("div");
                    return c.innerHTML = l.html, c.children
                }
            }
        }), l
    }

    function ql(c) {
        var l = c.prefix,
            h = void 0 === l ? "fa" : l,
            a = c.iconName;
        if (a) return Kc(jl.definitions, h, a) || Kc(Y.styles, h, a)
    }
    var Ol, jl = new(function () {
            function c() {
                ! function (c, l) {
                    if (!(c instanceof l)) throw new TypeError("Cannot call a class as a function")
                }(this, c), this.definitions = {}
            }
            var l, h, a;
            return l = c, (h = [{
                key: "add",
                value: function () {
                    for (var l = this, c = arguments.length, h = new Array(c), a = 0; a < c; a++) h[a] = arguments[a];
                    var z = h.reduce(this._pullDefinitions, {});
                    Object.keys(z).forEach(function (c) {
                        l.definitions[c] = $({}, l.definitions[c] || {}, z[c]),
                            function c(l, a) {
                                var h = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                                    z = void 0 !== h && h,
                                    v = Object.keys(a).reduce(function (c, l) {
                                        var h = a[l];
                                        return h.icon ? c[h.iconName] = h.icon : c[l] = h, c
                                    }, {});
                                "function" != typeof Y.hooks.addPack || z ? Y.styles[l] = $({}, Y.styles[l] || {}, v) : Y.hooks.addPack(l, v), "fas" === l && c("fa", a)
                            }(c, z[c]), Uc()
                    })
                }
            }, {
                key: "reset",
                value: function () {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function (v, c) {
                    var m = c.prefix && c.iconName && c.icon ? {
                        0: c
                    } : c;
                    return Object.keys(m).map(function (c) {
                        var l = m[c],
                            h = l.prefix,
                            a = l.iconName,
                            z = l.icon;
                        v[h] || (v[h] = {}), v[h][a] = z
                    }), v
                }
            }]) && v(l.prototype, h), a && v(l, a), c
        }()),
        Pl = !1,
        El = {
            i2svg: function () {
                var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (r) {
                    kl();
                    var l = c.node,
                        h = void 0 === l ? C : l,
                        a = c.callback,
                        z = void 0 === a ? function () {} : a;
                    return lc.searchPseudoElements && yl(h), pl(h, z)
                }
                return oc.reject("Operation requires a DOM of some kind.")
            },
            css: Zl,
            insertCss: function () {
                Pl || (uc(Zl()), Pl = !0)
            },
            watch: function () {
                var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    l = c.autoReplaceSvgRoot,
                    h = c.observeMutationsRoot;
                !1 === lc.autoReplaceSvg && (lc.autoReplaceSvg = !0), lc.observeMutations = !0, U(function () {
                    Tl({
                        autoReplaceSvgRoot: l
                    }), el({
                        treeCallback: pl,
                        nodeCallback: bl,
                        pseudoElementsCallback: yl,
                        observeMutationsRoot: h
                    })
                })
            }
        },
        Nl = (Ol = function (c) {
            var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                h = l.transform,
                a = void 0 === h ? Lc : h,
                z = l.symbol,
                v = void 0 !== z && z,
                m = l.mask,
                e = void 0 === m ? null : m,
                s = l.maskId,
                t = void 0 === s ? null : s,
                M = l.title,
                f = void 0 === M ? null : M,
                H = l.titleId,
                r = void 0 === H ? null : H,
                n = l.classes,
                V = void 0 === n ? [] : n,
                i = l.attributes,
                o = void 0 === i ? {} : i,
                C = l.styles,
                L = void 0 === C ? {} : C;
            if (c) {
                var u = c.prefix,
                    d = c.iconName,
                    p = c.icon;
                return xl($({
                    type: "icon"
                }, c), function () {
                    return kl(), lc.autoA11y && (f ? o["aria-labelledby"] = "".concat(lc.replacementClass, "-title-").concat(r || pc()) : (o["aria-hidden"] = "true", o.focusable = "false")), qc({
                        icons: {
                            main: Cl(p),
                            mask: e ? Cl(e.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: u,
                        iconName: d,
                        transform: $({}, Lc, a),
                        symbol: v,
                        title: f,
                        maskId: t,
                        titleId: r,
                        extra: {
                            attributes: o,
                            styles: L,
                            classes: V
                        }
                    })
                })
            }
        }, function (c) {
            var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                h = (c || {}).icon ? c : ql(c || {}),
                a = l.mask;
            return a && (a = (a || {}).icon ? a : ql(a || {})), Ol(h, $({}, l, {
                mask: a
            }))
        }),
        _l = {
            noAuto: function () {
                lc.autoReplaceSvg = !1, lc.observeMutations = !1, ml && ml.disconnect()
            },
            config: lc,
            dom: El,
            library: jl,
            parse: {
                transform: function (c) {
                    return tl(c)
                }
            },
            findIconDefinition: ql,
            icon: Nl,
            text: function (c) {
                var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    h = l.transform,
                    a = void 0 === h ? Lc : h,
                    z = l.title,
                    v = void 0 === z ? null : z,
                    m = l.classes,
                    e = void 0 === m ? [] : m,
                    s = l.attributes,
                    t = void 0 === s ? {} : s,
                    M = l.styles,
                    f = void 0 === M ? {} : M;
                return xl({
                    type: "text",
                    content: c
                }, function () {
                    return kl(), Oc({
                        content: c,
                        transform: $({}, Lc, a),
                        title: v,
                        extra: {
                            attributes: t,
                            styles: f,
                            classes: ["".concat(lc.familyPrefix, "-layers-text")].concat(H(e))
                        }
                    })
                })
            },
            counter: function (c) {
                var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    h = l.title,
                    a = void 0 === h ? null : h,
                    z = l.classes,
                    v = void 0 === z ? [] : z,
                    m = l.attributes,
                    e = void 0 === m ? {} : m,
                    s = l.styles,
                    t = void 0 === s ? {} : s;
                return xl({
                    type: "counter",
                    content: c
                }, function () {
                    return kl(),
                        function (c) {
                            var l = c.content,
                                h = c.title,
                                a = c.extra,
                                z = $({}, a.attributes, h ? {
                                    title: h
                                } : {}, {
                                    class: a.classes.join(" ")
                                }),
                                v = yc(a.styles);
                            0 < v.length && (z.style = v);
                            var m = [];
                            return m.push({
                                tag: "span",
                                attributes: z,
                                children: [l]
                            }), h && m.push({
                                tag: "span",
                                attributes: {
                                    class: "sr-only"
                                },
                                children: [h]
                            }), m
                        }({
                            content: c.toString(),
                            title: a,
                            extra: {
                                attributes: e,
                                styles: t,
                                classes: ["".concat(lc.familyPrefix, "-layers-counter")].concat(H(v))
                            }
                        })
                })
            },
            layer: function (c) {
                var l = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).classes,
                    h = void 0 === l ? [] : l;
                return xl({
                    type: "layer"
                }, function () {
                    kl();
                    var l = [];
                    return c(function (c) {
                        Array.isArray(c) ? c.map(function (c) {
                            l = l.concat(c.abstract)
                        }) : l = l.concat(c.abstract)
                    }), [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(lc.familyPrefix, "-layers")].concat(H(h)).join(" ")
                        },
                        children: l
                    }]
                })
            },
            toHtml: Jc
        },
        Tl = function () {
            var c = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                l = void 0 === c ? C : c;
            (0 < Object.keys(Y.styles).length || lc.autoFetchSvg) && r && lc.autoReplaceSvg && _l.dom.i2svg({
                node: l
            })
        };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!Z) throw c
        }
    }(function () {
        f && (o.FontAwesome || (o.FontAwesome = _l), U(function () {
            Tl(), el({
                treeCallback: pl,
                nodeCallback: bl,
                pseudoElementsCallback: yl
            })
        })), Y.hooks = $({}, Y.hooks, {
            addPack: function (c, l) {
                Y.styles[c] = $({}, Y.styles[c] || {}, l), Uc(), Tl()
            },
            addShims: function (c) {
                var l;
                (l = Y.shims).push.apply(l, H(c)), Uc(), Tl()
            }
        })
    })
}();