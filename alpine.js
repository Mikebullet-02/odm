(() => {
    var e = !1,
        t = !1,
        n = [];

    function r(r) {
        ! function (r) {
            n.includes(r) || n.push(r), !t && !e && (e = !0, queueMicrotask(i))
        }(r)
    }

    function i() {
        e = !1, t = !0;
        for (let e = 0; e < n.length; e++) n[e]();
        n.length = 0, t = !1
    }
    var o, a, l, s, u = !0;

    function c(e) {
        a = e
    }
    var f = [],
        d = [],
        p = [];

    function _(e, t) {
        !e._x_attributeCleanups || Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
            (void 0 === t || t.includes(n)) && (r.forEach(e => e()), delete e._x_attributeCleanups[n])
        })
    }
    var h = new MutationObserver(A),
        m = !1;

    function g() {
        h.observe(document, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeOldValue: !0
        }), m = !0
    }

    function v() {
        (y = y.concat(h.takeRecords())).length && !x && (x = !0, queueMicrotask(() => {
            A(y), y.length = 0, x = !1
        })), h.disconnect(), m = !1
    }
    var y = [],
        x = !1;

    function b(e) {
        if (!m) return e();
        v();
        let t = e();
        return g(), t
    }
    var w = !1,
        E = [];

    function A(e) {
        if (w) return void(E = E.concat(e));
        let t = [],
            n = [],
            r = new Map,
            i = new Map;
        for (let o = 0; o < e.length; o++)
            if (!e[o].target._x_ignoreMutationObserver && ("childList" === e[o].type && (e[o].addedNodes.forEach(e => 1 === e.nodeType && t.push(e)), e[o].removedNodes.forEach(e => 1 === e.nodeType && n.push(e))), "attributes" === e[o].type)) {
                let t = e[o].target,
                    n = e[o].attributeName,
                    a = e[o].oldValue,
                    l = () => {
                        r.has(t) || r.set(t, []), r.get(t).push({
                            name: n,
                            value: t.getAttribute(n)
                        })
                    },
                    s = () => {
                        i.has(t) || i.set(t, []), i.get(t).push(n)
                    };
                t.hasAttribute(n) && null === a ? l() : t.hasAttribute(n) ? (s(), l()) : s()
            } i.forEach((e, t) => {
            _(t, e)
        }), r.forEach((e, t) => {
            f.forEach(n => n(t, e))
        });
        for (let e of n) t.includes(e) || d.forEach(t => t(e));
        t.forEach(e => {
            e._x_ignoreSelf = !0, e._x_ignore = !0
        });
        for (let e of t) n.includes(e) || !e.isConnected || (delete e._x_ignoreSelf, delete e._x_ignore, p.forEach(t => t(e)), e._x_ignore = !0, e._x_ignoreSelf = !0);
        t.forEach(e => {
            delete e._x_ignoreSelf, delete e._x_ignore
        }), t = null, n = null, r = null, i = null
    }

    function k(e, t, n) {
        return e._x_dataStack = [t, ...S(n || e)], () => {
            e._x_dataStack = e._x_dataStack.filter(e => e !== t)
        }
    }

    function O(e, t) {
        let n = e._x_dataStack[0];
        Object.entries(t).forEach(([e, t]) => {
            n[e] = t
        })
    }

    function S(e) {
        return e._x_dataStack ? e._x_dataStack : "function" == typeof ShadowRoot && e instanceof ShadowRoot ? S(e.host) : e.parentNode ? S(e.parentNode) : []
    }

    function C(e) {
        let t = new Proxy({}, {
            ownKeys: () => Array.from(new Set(e.flatMap(e => Object.keys(e)))),
            has: (t, n) => e.some(e => e.hasOwnProperty(n)),
            get: (n, r) => (e.find(e => {
                if (e.hasOwnProperty(r)) {
                    let n = Object.getOwnPropertyDescriptor(e, r);
                    if (n.get && n.get._x_alreadyBound || n.set && n.set._x_alreadyBound) return !0;
                    if ((n.get || n.set) && n.enumerable) {
                        let i = n.get,
                            o = n.set,
                            a = n;
                        i = i && i.bind(t), o = o && o.bind(t), i && (i._x_alreadyBound = !0), o && (o._x_alreadyBound = !0), Object.defineProperty(e, r, {
                            ...a,
                            get: i,
                            set: o
                        })
                    }
                    return !0
                }
                return !1
            }) || {})[r],
            set: (t, n, r) => {
                let i = e.find(e => e.hasOwnProperty(n));
                return i ? i[n] = r : e[e.length - 1][n] = r, !0
            }
        });
        return t
    }

    function j(e) {
        let t = (n, r = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([i, {
                value: o,
                enumerable: a
            }]) => {
                if (!1 === a || void 0 === o) return;
                let l = "" === r ? i : `${r}.${i}`;
                "object" == typeof o && null !== o && o._x_interceptor ? n[i] = o.initialize(e, l, i) : (e => "object" == typeof e && !Array.isArray(e) && null !== e)(o) && o !== n && !(o instanceof Element) && t(o, l)
            })
        };
        return t(e)
    }

    function $(e, t = (() => {})) {
        let n = {
            initialValue: void 0,
            _x_interceptor: !0,
            initialize(t, n, r) {
                return e(this.initialValue, () => (function (e, t) {
                    return t.split(".").reduce((e, t) => e[t], e)
                })(t, n), e => (function e(t, n, r) {
                    if ("string" == typeof n && (n = n.split(".")), 1 !== n.length) {
                        if (0 === n.length) throw error;
                        return t[n[0]] || (t[n[0]] = {}), e(t[n[0]], n.slice(1), r)
                    }
                    t[n[0]] = r
                })(t, n, e), n, r)
            }
        };
        return t(n), e => {
            if ("object" == typeof e && null !== e && e._x_interceptor) {
                let t = n.initialize.bind(n);
                n.initialize = ((r, i, o) => {
                    let a = e.initialize(r, i, o);
                    return n.initialValue = a, t(r, i, o)
                })
            } else n.initialValue = e;
            return n
        }
    }
    var M = {};

    function N(e, t) {
        M[e] = t
    }

    function P(e, t) {
        return Object.entries(M).forEach(([n, r]) => {
            Object.defineProperty(e, `$${n}`, {
                get: () => r(t, {
                    Alpine: Re,
                    interceptor: $
                }),
                enumerable: !1
            })
        }), e
    }

    function L(e, t, n) {
        Object.assign(e, {
            el: t,
            expression: n
        }), console.warn(`Alpine Expression Error: ${e.message}\n\n${n?'Expression: "'+n+'"\n\n':""}`, t), setTimeout(() => {
            throw e
        }, 0)
    }

    function R(e, t, n = {}) {
        let r;
        return T(e, t)(e => r = e, n), r
    }

    function T(...e) {
        return z(...e)
    }
    var z = I;

    function I(e, t) {
        let n = {};
        P(n, e);
        let r = [n, ...S(e)];
        if ("function" == typeof t) return function (e, t) {
            return (n = (() => {}), {
                scope: r = {},
                params: i = []
            } = {}) => {
                let o = t.apply(C([r, ...e]), i);
                D(n, o)
            }
        }(r, t);
        let i = function (e, t, n) {
            let r = function (e, t) {
                if (q[e]) return q[e];
                let n = Object.getPrototypeOf(async function () {}).constructor,
                    r = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(() => { ${e} })()` : e,
                    i = (() => {
                        try {
                            return new n(["__self", "scope"], `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`)
                        } catch (n) {
                            return L(n, t, e), Promise.resolve()
                        }
                    })();
                return q[e] = i, i
            }(t, n);
            return (i = (() => {}), {
                scope: o = {},
                params: a = []
            } = {}) => {
                r.result = void 0, r.finished = !1;
                let l = C([o, ...e]);
                if ("function" == typeof r) {
                    let e = r(r, l).catch(e => L(e, n, t));
                    r.finished ? (D(i, r.result, l, a, n), r.result = void 0) : e.then(e => {
                        D(i, e, l, a, n)
                    }).catch(e => L(e, n, t)).finally(() => r.result = void 0)
                }
            }
        }(r, t, e);
        return function (e, t, n, ...r) {
            try {
                return n(...r)
            } catch (n) {
                L(n, e, t)
            }
        }.bind(null, e, t, i)
    }
    var q = {};

    function D(e, t, n, r, i) {
        if ("function" == typeof t) {
            let o = t.apply(n, r);
            o instanceof Promise ? o.then(t => D(e, t, n, r)).catch(e => L(e, i, t)) : e(o)
        } else e(t)
    }
    var B = "x-";

    function W(e = "") {
        return B + e
    }
    var F = {};

    function V(e, t) {
        F[e] = t
    }

    function K(e, t, n) {
        let r = {};
        return Array.from(t).map(Q((e, t) => r[e] = t)).filter(ee).map(function (e, t) {
            return ({
                name: n,
                value: r
            }) => {
                let i = n.match(te()),
                    o = n.match(/:([a-zA-Z0-9\-:]+)/),
                    a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                    l = t || e[n] || n;
                return {
                    type: i ? i[1] : null,
                    value: o ? o[1] : null,
                    modifiers: a.map(e => e.replace(".", "")),
                    expression: r,
                    original: l
                }
            }
        }(r, n)).sort(ie).map(t => (function (e, t) {
            let n = F[t.type] || (() => {}),
                r = [],
                [i, o] = function (e) {
                    let t = () => {};
                    return [n => {
                        let r = a(n);
                        e._x_effects || (e._x_effects = new Set, e._x_runEffects = (() => {
                            e._x_effects.forEach(e => e())
                        })), e._x_effects.add(r), t = (() => {
                            void 0 !== r && (e._x_effects.delete(r), l(r))
                        })
                    }, () => {
                        t()
                    }]
                }(e);
            r.push(o);
            let s = {
                    Alpine: Re,
                    effect: i,
                    cleanup: e => r.push(e),
                    evaluateLater: T.bind(T, e),
                    evaluate: R.bind(R, e)
                },
                u = () => r.forEach(e => e());
            ! function (e, t, n) {
                e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(n)
            }(e, t.original, u);
            let c = () => {
                e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, s), n = n.bind(n, e, t, s), U ? Z.get(H).push(n) : n())
            };
            return c.runCleanups = u, c
        })(e, t))
    }
    var U = !1,
        Z = new Map,
        H = Symbol();
    var G = (e, t) => ({
            name: n,
            value: r
        }) => (n.startsWith(e) && (n = n.replace(e, t)), {
            name: n,
            value: r
        }),
        J = e => e;

    function Q(e = (() => {})) {
        return ({
            name: t,
            value: n
        }) => {
            let {
                name: r,
                value: i
            } = X.reduce((e, t) => t(e), {
                name: t,
                value: n
            });
            return r !== t && e(r, t), {
                name: r,
                value: i
            }
        }
    }
    var X = [];

    function Y(e) {
        X.push(e)
    }

    function ee({
        name: e
    }) {
        return te().test(e)
    }
    var te = () => new RegExp(`^${B}([^:^.]+)\\b`);
    var ne = "DEFAULT",
        re = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "transition", "show", "if", ne, "teleport", "element"];

    function ie(e, t) {
        let n = -1 === re.indexOf(e.type) ? ne : e.type,
            r = -1 === re.indexOf(t.type) ? ne : t.type;
        return re.indexOf(n) - re.indexOf(r)
    }

    function oe(e, t, n = {}) {
        e.dispatchEvent(new CustomEvent(t, {
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0
        }))
    }
    var ae = [],
        le = !1;

    function se(e) {
        ae.push(e), queueMicrotask(() => {
            le || setTimeout(() => {
                ue()
            })
        })
    }

    function ue() {
        for (le = !1; ae.length;) ae.shift()()
    }

    function ce(e, t) {
        if ("function" == typeof ShadowRoot && e instanceof ShadowRoot) return void Array.from(e.children).forEach(e => ce(e, t));
        let n = !1;
        if (t(e, () => n = !0), n) return;
        let r = e.firstElementChild;
        for (; r;) ce(r, t), r = r.nextElementSibling
    }

    function fe(e, ...t) {
        console.warn(`Alpine Warning: ${e}`, ...t)
    }
    var de = [],
        pe = [];

    function _e() {
        return de.map(e => e())
    }

    function he() {
        return de.concat(pe).map(e => e())
    }

    function me(e) {
        de.push(e)
    }

    function ge(e) {
        pe.push(e)
    }

    function ve(e, t = !1) {
        return ye(e, e => {
            if ((t ? he() : _e()).some(t => e.matches(t))) return !0
        })
    }

    function ye(e, t) {
        if (e) {
            if (t(e)) return e;
            if (e._x_teleportBack && (e = e._x_teleportBack), e.parentElement) return ye(e.parentElement, t)
        }
    }

    function xe(e, t = ce) {
        ! function (e) {
            U = !0;
            let t = Symbol();
            H = t, Z.set(t, []);
            let n = () => {
                for (; Z.get(t).length;) Z.get(t).shift()();
                Z.delete(t)
            };
            e(n), U = !1, n()
        }(() => {
            t(e, (e, t) => {
                K(e, e.attributes).forEach(e => e()), e._x_ignore && t()
            })
        })
    }

    function be(e, t) {
        return Array.isArray(t) ? we(e, t.join(" ")) : "object" == typeof t && null !== t ? function (e, t) {
            let n = e => e.split(" ").filter(Boolean),
                r = Object.entries(t).flatMap(([e, t]) => !!t && n(e)).filter(Boolean),
                i = Object.entries(t).flatMap(([e, t]) => !t && n(e)).filter(Boolean),
                o = [],
                a = [];
            return i.forEach(t => {
                e.classList.contains(t) && (e.classList.remove(t), a.push(t))
            }), r.forEach(t => {
                e.classList.contains(t) || (e.classList.add(t), o.push(t))
            }), () => {
                a.forEach(t => e.classList.add(t)), o.forEach(t => e.classList.remove(t))
            }
        }(e, t) : "function" == typeof t ? be(e, t()) : we(e, t)
    }

    function we(e, t) {
        return (t => (e.classList.add(...t), () => {
            e.classList.remove(...t)
        }))((t => t.split(" ").filter(t => !e.classList.contains(t)).filter(Boolean))(t = !0 === t ? t = "" : t || ""))
    }

    function Ee(e, t) {
        return "object" == typeof t && null !== t ? function (e, t) {
            let n = {};
            return Object.entries(t).forEach(([t, r]) => {
                n[t] = e.style[t], e.style.setProperty(function (e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }(t), r)
            }), setTimeout(() => {
                0 === e.style.length && e.removeAttribute("style")
            }), () => {
                Ee(e, n)
            }
        }(e, t) : function (e, t) {
            let n = e.getAttribute("style", t);
            return e.setAttribute("style", t), () => {
                e.setAttribute("style", n)
            }
        }(e, t)
    }

    function Ae(e, t = (() => {})) {
        let n = !1;
        return function () {
            n ? t.apply(this, arguments) : (n = !0, e.apply(this, arguments))
        }
    }

    function ke(e, t, n = {}) {
        e._x_transition || (e._x_transition = {
            enter: {
                during: n,
                start: n,
                end: n
            },
            leave: {
                during: n,
                start: n,
                end: n
            },
            in (n = (() => {}), r = (() => {})) {
                Oe(e, t, {
                    during: this.enter.during,
                    start: this.enter.start,
                    end: this.enter.end
                }, n, r)
            },
            out(n = (() => {}), r = (() => {})) {
                Oe(e, t, {
                    during: this.leave.during,
                    start: this.leave.start,
                    end: this.leave.end
                }, n, r)
            }
        })
    }

    function Oe(e, t, {
        during: n,
        start: r,
        end: i
    } = {}, o = (() => {}), a = (() => {})) {
        if (e._x_transitioning && e._x_transitioning.cancel(), 0 === Object.keys(n).length && 0 === Object.keys(r).length && 0 === Object.keys(i).length) return o(), void a();
        let l, s, u;
        ! function (e, t) {
            let n, r, i, o = Ae(() => {
                b(() => {
                    n = !0, r || t.before(), i || (t.end(), ue()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning
                })
            });
            e._x_transitioning = {
                beforeCancels: [],
                beforeCancel(e) {
                    this.beforeCancels.push(e)
                },
                cancel: Ae(function () {
                    for (; this.beforeCancels.length;) this.beforeCancels.shift()();
                    o()
                }),
                finish: o
            }, b(() => {
                t.start(), t.during()
            }), le = !0, requestAnimationFrame(() => {
                if (n) return;
                let o = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")),
                    a = 1e3 * Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", ""));
                0 === o && (o = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))), b(() => {
                    t.before()
                }), r = !0, requestAnimationFrame(() => {
                    n || (b(() => {
                        t.end()
                    }), ue(), setTimeout(e._x_transitioning.finish, o + a), i = !0)
                })
            })
        }(e, {
            start() {
                l = t(e, r)
            },
            during() {
                s = t(e, n)
            },
            before: o,
            end() {
                l(), u = t(e, i)
            },
            after: a,
            cleanup() {
                s(), u()
            }
        })
    }

    function Se(e, t, n) {
        if (-1 === e.indexOf(t)) return n;
        let r = e[e.indexOf(t) + 1];
        if (!r || "scale" === t && isNaN(r)) return n;
        if ("duration" === t) {
            let e = r.match(/([0-9]+)ms/);
            if (e) return e[1]
        }
        return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r
    }
    V("transition", (e, {
        value: t,
        modifiers: n,
        expression: r
    }, {
        evaluate: i
    }) => {
        "function" == typeof r && (r = i(r)), r ? function (e, t, n) {
            ke(e, be, ""), {
                enter: t => {
                    e._x_transition.enter.during = t
                },
                "enter-start": t => {
                    e._x_transition.enter.start = t
                },
                "enter-end": t => {
                    e._x_transition.enter.end = t
                },
                leave: t => {
                    e._x_transition.leave.during = t
                },
                "leave-start": t => {
                    e._x_transition.leave.start = t
                },
                "leave-end": t => {
                    e._x_transition.leave.end = t
                }
            } [n](t)
        }(e, r, t) : function (e, t, n) {
            ke(e, Ee);
            let r = !t.includes("in") && !t.includes("out") && !n,
                i = r || t.includes("in") || ["enter"].includes(n),
                o = r || t.includes("out") || ["leave"].includes(n);
            t.includes("in") && !r && (t = t.filter((e, n) => n < t.indexOf("out"))), t.includes("out") && !r && (t = t.filter((e, n) => n > t.indexOf("out")));
            let a = !t.includes("opacity") && !t.includes("scale"),
                l = a || t.includes("opacity"),
                s = a || t.includes("scale"),
                u = l ? 0 : 1,
                c = s ? Se(t, "scale", 95) / 100 : 1,
                f = Se(t, "delay", 0),
                d = Se(t, "origin", "center"),
                p = "opacity, transform",
                _ = Se(t, "duration", 150) / 1e3,
                h = Se(t, "duration", 75) / 1e3,
                m = "cubic-bezier(0.4, 0.0, 0.2, 1)";
            i && (e._x_transition.enter.during = {
                transformOrigin: d,
                transitionDelay: f,
                transitionProperty: p,
                transitionDuration: `${_}s`,
                transitionTimingFunction: m
            }, e._x_transition.enter.start = {
                opacity: u,
                transform: `scale(${c})`
            }, e._x_transition.enter.end = {
                opacity: 1,
                transform: "scale(1)"
            }), o && (e._x_transition.leave.during = {
                transformOrigin: d,
                transitionDelay: f,
                transitionProperty: p,
                transitionDuration: `${h}s`,
                transitionTimingFunction: m
            }, e._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)"
            }, e._x_transition.leave.end = {
                opacity: u,
                transform: `scale(${c})`
            })
        }(e, n, t)
    }), window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, n, r) {
        let i = () => {
            "visible" === document.visibilityState ? requestAnimationFrame(n) : setTimeout(n)
        };
        t ? e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : i() : e._x_transition ? e._x_transition.in(n) : i() : (e._x_hidePromise = e._x_transition ? new Promise((t, n) => {
            e._x_transition.out(() => {}, () => t(r)), e._x_transitioning.beforeCancel(() => n({
                isFromCancelledTransition: !0
            }))
        }) : Promise.resolve(r), queueMicrotask(() => {
            let t = function e(t) {
                let n = t.parentNode;
                if (n) return n._x_hidePromise ? n : e(n)
            }(e);
            t ? (t._x_hideChildren || (t._x_hideChildren = []), t._x_hideChildren.push(e)) : queueMicrotask(() => {
                let t = e => {
                    let n = Promise.all([e._x_hidePromise, ...(e._x_hideChildren || []).map(t)]).then(([e]) => e());
                    return delete e._x_hidePromise, delete e._x_hideChildren, n
                };
                t(e).catch(e => {
                    if (!e.isFromCancelledTransition) throw e
                })
            })
        }))
    };
    var Ce = !1;

    function je(e, t = (() => {})) {
        return (...n) => Ce ? t(...n) : e(...n)
    }

    function $e(e, t) {
        var n;
        return function () {
            var r = this,
                i = arguments;
            clearTimeout(n), n = setTimeout(function () {
                n = null, e.apply(r, i)
            }, t)
        }
    }

    function Me(e, t) {
        let n;
        return function () {
            let r = arguments;
            n || (e.apply(this, r), n = !0, setTimeout(() => n = !1, t))
        }
    }
    var Ne = {},
        Pe = !1;
    var Le = {};
    var Re = {
        get reactive() {
            return o
        },
        get release() {
            return l
        },
        get effect() {
            return a
        },
        get raw() {
            return s
        },
        version: "3.7.0",
        flushAndStopDeferringMutations: function () {
            w = !1, A(E), E = []
        },
        disableEffectScheduling: function (e) {
            u = !1, e(), u = !0
        },
        setReactivityEngine: function (e) {
            o = e.reactive, l = e.release, a = (t => e.effect(t, {
                scheduler: e => {
                    u ? r(e) : e()
                }
            })), s = e.raw
        },
        closestDataStack: S,
        skipDuringClone: je,
        addRootSelector: me,
        addInitSelector: ge,
        addScopeToNode: k,
        deferMutations: function () {
            w = !0
        },
        mapAttributes: Y,
        evaluateLater: T,
        setEvaluator: function (e) {
            z = e
        },
        mergeProxies: C,
        closestRoot: ve,
        interceptor: $,
        transition: Oe,
        setStyles: Ee,
        mutateDom: b,
        directive: V,
        throttle: Me,
        debounce: $e,
        evaluate: R,
        initTree: xe,
        nextTick: se,
        prefixed: W,
        prefix: function (e) {
            B = e
        },
        plugin: function (e) {
            e(Re)
        },
        magic: N,
        store: function (e, t) {
            if (Pe || (Ne = o(Ne), Pe = !0), void 0 === t) return Ne[e];
            Ne[e] = t, "object" == typeof t && null !== t && t.hasOwnProperty("init") && "function" == typeof t.init && Ne[e].init(), j(Ne[e])
        },
        start: function () {
            document.body || fe("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), oe(document, "alpine:init"), oe(document, "alpine:initializing"), g(),
                function (e) {
                    p.push(e)
                }(e => xe(e, ce)),
                function (e) {
                    d.push(e)
                }(e => (function (e) {
                    ce(e, e => _(e))
                })(e)),
                function (e) {
                    f.push(e)
                }((e, t) => {
                    K(e, t).forEach(e => e())
                }), Array.from(document.querySelectorAll(he())).filter(e => !ve(e.parentElement, !0)).forEach(e => {
                    xe(e)
                }), oe(document, "alpine:initialized")
        },
        clone: function (e, t) {
            t._x_dataStack || (t._x_dataStack = e._x_dataStack), Ce = !0,
                function (e) {
                    let t = a;
                    c((e, n) => {
                        let r = t(e);
                        return l(r), () => {}
                    }), e(), c(t)
                }(() => {
                    ! function (e) {
                        let t = !1;
                        xe(e, (e, n) => {
                            ce(e, (e, r) => {
                                if (t && function (e) {
                                        return _e().some(t => e.matches(t))
                                    }(e)) return r();
                                t = !0, n(e, r)
                            })
                        })
                    }(t)
                }), Ce = !1
        },
        data: function (e, t) {
            Le[e] = t
        }
    };

    function Te(e, t) {
        let n = Object.create(null),
            r = e.split(",");
        for (let e = 0; e < r.length; e++) n[r[e]] = !0;
        return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
    }
    Te("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    var ze, Ie = Object.freeze({}),
        qe = (Object.freeze([]), Object.assign),
        De = Object.prototype.hasOwnProperty,
        Be = (e, t) => De.call(e, t),
        We = Array.isArray,
        Fe = e => "[object Map]" === Ze(e),
        Ve = e => "symbol" == typeof e,
        Ke = e => null !== e && "object" == typeof e,
        Ue = Object.prototype.toString,
        Ze = e => Ue.call(e),
        He = e => Ze(e).slice(8, -1),
        Ge = e => (e => "string" == typeof e)(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
        Je = e => {
            let t = Object.create(null);
            return n => t[n] || (t[n] = e(n))
        },
        Qe = /-(\w)/g,
        Xe = (Je(e => e.replace(Qe, (e, t) => t ? t.toUpperCase() : "")), /\B([A-Z])/g),
        Ye = (Je(e => e.replace(Xe, "-$1").toLowerCase()), Je(e => e.charAt(0).toUpperCase() + e.slice(1))),
        et = (Je(e => e ? `on${Ye(e)}` : ""), (e, t) => e !== t && (e == e || t == t)),
        tt = new WeakMap,
        nt = [],
        rt = Symbol("iterate"),
        it = Symbol("Map key iterate");
    var ot = 0;

    function at(e) {
        let {
            deps: t
        } = e;
        if (t.length) {
            for (let n = 0; n < t.length; n++) t[n].delete(e);
            t.length = 0
        }
    }
    var lt = !0,
        st = [];

    function ut() {
        let e = st.pop();
        lt = void 0 === e || e
    }

    function ct(e, t, n) {
        if (!lt || void 0 === ze) return;
        let r = tt.get(e);
        r || tt.set(e, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = new Set), i.has(ze) || (i.add(ze), ze.deps.push(i), ze.options.onTrack && ze.options.onTrack({
            effect: ze,
            target: e,
            type: t,
            key: n
        }))
    }

    function ft(e, t, n, r, i, o) {
        let a = tt.get(e);
        if (!a) return;
        let l = new Set,
            s = e => {
                e && e.forEach(e => {
                    (e !== ze || e.allowRecurse) && l.add(e)
                })
            };
        if ("clear" === t) a.forEach(s);
        else if ("length" === n && We(e)) a.forEach((e, t) => {
            ("length" === t || t >= r) && s(e)
        });
        else switch (void 0 !== n && s(a.get(n)), t) {
            case "add":
                We(e) ? Ge(n) && s(a.get("length")) : (s(a.get(rt)), Fe(e) && s(a.get(it)));
                break;
            case "delete":
                We(e) || (s(a.get(rt)), Fe(e) && s(a.get(it)));
                break;
            case "set":
                Fe(e) && s(a.get(rt))
        }
        l.forEach(a => {
            a.options.onTrigger && a.options.onTrigger({
                effect: a,
                target: e,
                key: n,
                type: t,
                newValue: r,
                oldValue: i,
                oldTarget: o
            }), a.options.scheduler ? a.options.scheduler(a) : a()
        })
    }
    var dt = Te("__proto__,__v_isRef,__isVue"),
        pt = new Set(Object.getOwnPropertyNames(Symbol).map(e => Symbol[e]).filter(Ve)),
        _t = yt(),
        ht = yt(!1, !0),
        mt = yt(!0),
        gt = yt(!0, !0),
        vt = {};

    function yt(e = !1, t = !1) {
        return function (n, r, i) {
            if ("__v_isReactive" === r) return !e;
            if ("__v_isReadonly" === r) return e;
            if ("__v_raw" === r && i === (e ? t ? Jt : Gt : t ? Ht : Zt).get(n)) return n;
            let o = We(n);
            if (!e && o && Be(vt, r)) return Reflect.get(vt, r, i);
            let a = Reflect.get(n, r, i);
            return (Ve(r) ? pt.has(r) : dt(r)) || (e || ct(n, "get", r), t) ? a : tn(a) ? o && Ge(r) ? a : a.value : Ke(a) ? e ? Xt(a) : Qt(a) : a
        }
    } ["includes", "indexOf", "lastIndexOf"].forEach(e => {
        let t = Array.prototype[e];
        vt[e] = function (...e) {
            let n = en(this);
            for (let e = 0, t = this.length; e < t; e++) ct(n, "get", e + "");
            let r = t.apply(n, e);
            return -1 === r || !1 === r ? t.apply(n, e.map(en)) : r
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
        let t = Array.prototype[e];
        vt[e] = function (...e) {
            st.push(lt), lt = !1;
            let n = t.apply(this, e);
            return ut(), n
        }
    });
    var xt = wt(),
        bt = wt(!0);

    function wt(e = !1) {
        return function (t, n, r, i) {
            let o = t[n];
            if (!e && (r = en(r), o = en(o), !We(t) && tn(o) && !tn(r))) return o.value = r, !0;
            let a = We(t) && Ge(n) ? Number(n) < t.length : Be(t, n),
                l = Reflect.set(t, n, r, i);
            return t === en(i) && (a ? et(r, o) && ft(t, "set", n, r, o) : ft(t, "add", n, r)), l
        }
    }
    var Et = {
            get: _t,
            set: xt,
            deleteProperty: function (e, t) {
                let n = Be(e, t),
                    r = e[t],
                    i = Reflect.deleteProperty(e, t);
                return i && n && ft(e, "delete", t, void 0, r), i
            },
            has: function (e, t) {
                let n = Reflect.has(e, t);
                return (!Ve(t) || !pt.has(t)) && ct(e, "has", t), n
            },
            ownKeys: function (e) {
                return ct(e, "iterate", We(e) ? "length" : rt), Reflect.ownKeys(e)
            }
        },
        At = {
            get: mt,
            set: (e, t) => (console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0),
            deleteProperty: (e, t) => (console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0)
        },
        kt = (qe({}, Et, {
            get: ht,
            set: bt
        }), qe({}, At, {
            get: gt
        }), e => Ke(e) ? Qt(e) : e),
        Ot = e => Ke(e) ? Xt(e) : e,
        St = e => e,
        Ct = e => Reflect.getPrototypeOf(e);

    function jt(e, t, n = !1, r = !1) {
        let i = en(e = e.__v_raw),
            o = en(t);
        t !== o && !n && ct(i, "get", t), !n && ct(i, "get", o);
        let {
            has: a
        } = Ct(i), l = r ? St : n ? Ot : kt;
        return a.call(i, t) ? l(e.get(t)) : a.call(i, o) ? l(e.get(o)) : void(e !== i && e.get(t))
    }

    function $t(e, t = !1) {
        let n = this.__v_raw,
            r = en(n),
            i = en(e);
        return e !== i && !t && ct(r, "has", e), !t && ct(r, "has", i), e === i ? n.has(e) : n.has(e) || n.has(i)
    }

    function Mt(e, t = !1) {
        return e = e.__v_raw, !t && ct(en(e), "iterate", rt), Reflect.get(e, "size", e)
    }

    function Nt(e) {
        e = en(e);
        let t = en(this);
        return Ct(t).has.call(t, e) || (t.add(e), ft(t, "add", e, e)), this
    }

    function Pt(e, t) {
        t = en(t);
        let n = en(this),
            {
                has: r,
                get: i
            } = Ct(n),
            o = r.call(n, e);
        o ? Ut(n, r, e) : (e = en(e), o = r.call(n, e));
        let a = i.call(n, e);
        return n.set(e, t), o ? et(t, a) && ft(n, "set", e, t, a) : ft(n, "add", e, t), this
    }

    function Lt(e) {
        let t = en(this),
            {
                has: n,
                get: r
            } = Ct(t),
            i = n.call(t, e);
        i ? Ut(t, n, e) : (e = en(e), i = n.call(t, e));
        let o = r ? r.call(t, e) : void 0,
            a = t.delete(e);
        return i && ft(t, "delete", e, void 0, o), a
    }

    function Rt() {
        let e = en(this),
            t = 0 !== e.size,
            n = Fe(e) ? new Map(e) : new Set(e),
            r = e.clear();
        return t && ft(e, "clear", void 0, void 0, n), r
    }

    function Tt(e, t) {
        return function (n, r) {
            let i = this,
                o = i.__v_raw,
                a = en(o),
                l = t ? St : e ? Ot : kt;
            return !e && ct(a, "iterate", rt), o.forEach((e, t) => n.call(r, l(e), l(t), i))
        }
    }

    function zt(e, t, n) {
        return function (...r) {
            let i = this.__v_raw,
                o = en(i),
                a = Fe(o),
                l = "entries" === e || e === Symbol.iterator && a,
                s = "keys" === e && a,
                u = i[e](...r),
                c = n ? St : t ? Ot : kt;
            return !t && ct(o, "iterate", s ? it : rt), {
                next() {
                    let {
                        value: e,
                        done: t
                    } = u.next();
                    return t ? {
                        value: e,
                        done: t
                    } : {
                        value: l ? [c(e[0]), c(e[1])] : c(e),
                        done: t
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }

    function It(e) {
        return function (...t) {
            {
                let n = t[0] ? `on key "${t[0]}" ` : "";
                console.warn(`${Ye(e)} operation ${n}failed: target is readonly.`, en(this))
            }
            return "delete" !== e && this
        }
    }
    var qt = {
            get(e) {
                return jt(this, e)
            },
            get size() {
                return Mt(this)
            },
            has: $t,
            add: Nt,
            set: Pt,
            delete: Lt,
            clear: Rt,
            forEach: Tt(!1, !1)
        },
        Dt = {
            get(e) {
                return jt(this, e, !1, !0)
            },
            get size() {
                return Mt(this)
            },
            has: $t,
            add: Nt,
            set: Pt,
            delete: Lt,
            clear: Rt,
            forEach: Tt(!1, !0)
        },
        Bt = {
            get(e) {
                return jt(this, e, !0)
            },
            get size() {
                return Mt(this, !0)
            },
            has(e) {
                return $t.call(this, e, !0)
            },
            add: It("add"),
            set: It("set"),
            delete: It("delete"),
            clear: It("clear"),
            forEach: Tt(!0, !1)
        },
        Wt = {
            get(e) {
                return jt(this, e, !0, !0)
            },
            get size() {
                return Mt(this, !0)
            },
            has(e) {
                return $t.call(this, e, !0)
            },
            add: It("add"),
            set: It("set"),
            delete: It("delete"),
            clear: It("clear"),
            forEach: Tt(!0, !0)
        };

    function Ft(e, t) {
        let n = t ? e ? Wt : Dt : e ? Bt : qt;
        return (t, r, i) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(Be(n, r) && r in t ? n : t, r, i)
    } ["keys", "values", "entries", Symbol.iterator].forEach(e => {
        qt[e] = zt(e, !1, !1), Bt[e] = zt(e, !0, !1), Dt[e] = zt(e, !1, !0), Wt[e] = zt(e, !0, !0)
    });
    var Vt = {
            get: Ft(!1, !1)
        },
        Kt = (Ft(!1, !0), {
            get: Ft(!0, !1)
        });
    Ft(!0, !0);

    function Ut(e, t, n) {
        let r = en(n);
        if (r !== n && t.call(e, r)) {
            let t = He(e);
            console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
        }
    }
    var Zt = new WeakMap,
        Ht = new WeakMap,
        Gt = new WeakMap,
        Jt = new WeakMap;

    function Qt(e) {
        return e && e.__v_isReadonly ? e : Yt(e, !1, Et, Vt, Zt)
    }

    function Xt(e) {
        return Yt(e, !0, At, Kt, Gt)
    }

    function Yt(e, t, n, r, i) {
        if (!Ke(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
        if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
        let o = i.get(e);
        if (o) return o;
        let a = function (e) {
            return e.__v_skip || !Object.isExtensible(e) ? 0 : function (e) {
                switch (e) {
                    case "Object":
                    case "Array":
                        return 1;
                    case "Map":
                    case "Set":
                    case "WeakMap":
                    case "WeakSet":
                        return 2;
                    default:
                        return 0
                }
            }(He(e))
        }(e);
        if (0 === a) return e;
        let l = new Proxy(e, 2 === a ? r : n);
        return i.set(e, l), l
    }

    function en(e) {
        return e && en(e.__v_raw) || e
    }

    function tn(e) {
        return Boolean(e && !0 === e.__v_isRef)
    }
    N("nextTick", () => se), N("dispatch", e => oe.bind(oe, e)), N("watch", e => (t, n) => {
        let r, i = T(e, t),
            o = !0;
        a(() => i(e => {
            document.createElement("div").dataset.throwAway = e, o ? r = e : queueMicrotask(() => {
                n(e, r), r = e
            }), o = !1
        }))
    }), N("store", function () {
        return Ne
    }), N("data", e => C(S(e))), N("root", e => ve(e)), N("refs", e => (e._x_refs_proxy || (e._x_refs_proxy = C(function (e) {
        let t = [],
            n = e;
        for (; n;) n._x_refs && t.push(n._x_refs), n = n.parentNode;
        return t
    }(e))), e._x_refs_proxy));
    var nn = {};

    function rn(e) {
        return nn[e] || (nn[e] = 0), ++nn[e]
    }
    N("id", e => (t, n = null) => {
        let r = function (e, t) {
                return ye(e, e => {
                    if (e._x_ids && e._x_ids[t]) return !0
                })
            }(e, t),
            i = r ? r._x_ids[t] : rn(t);
        return new on(n ? `${t}-${i}-${n}` : `${t}-${i}`)
    });
    var on = class {
        constructor(e) {
            this.id = e
        }
        toString() {
            return this.id
        }
    };
    N("el", e => e), V("teleport", (e, {
        expression: t
    }, {
        cleanup: n
    }) => {
        let r = document.querySelector(t),
            i = e.content.cloneNode(!0).firstElementChild;
        e._x_teleport = i, i._x_teleportBack = e, e._x_forwardEvents && e._x_forwardEvents.forEach(t => {
            i.addEventListener(t, t => {
                t.stopPropagation(), e.dispatchEvent(new t.constructor(t.type, t))
            })
        }), k(i, {}, e), b(() => {
            r.appendChild(i), xe(i), i._x_ignore = !0
        }), n(() => i.remove())
    });
    var an = () => {};

    function ln(e, t, n, r = []) {
        switch (e._x_bindings || (e._x_bindings = o({})), e._x_bindings[t] = n, t = r.includes("camel") ? function (e) {
            return e.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase())
        }(t) : t) {
            case "value":
                ! function (e, t) {
                    if ("radio" === e.type) void 0 === e.attributes.value && (e.value = t), window.fromModel && (e.checked = sn(e.value, t));
                    else if ("checkbox" === e.type) Number.isInteger(t) ? e.value = t : Number.isInteger(t) || Array.isArray(t) || "boolean" == typeof t || [null, void 0].includes(t) ? Array.isArray(t) ? e.checked = t.some(t => sn(t, e.value)) : e.checked = !!t : e.value = String(t);
                    else if ("SELECT" === e.tagName) ! function (e, t) {
                        let n = [].concat(t).map(e => e + "");
                        Array.from(e.options).forEach(e => {
                            e.selected = n.includes(e.value)
                        })
                    }(e, t);
                    else {
                        if (e.value === t) return;
                        e.value = t
                    }
                }(e, n);
                break;
            case "style":
                ! function (e, t) {
                    e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = Ee(e, t)
                }(e, n);
                break;
            case "class":
                ! function (e, t) {
                    e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = be(e, t)
                }(e, n);
                break;
            default:
                ! function (e, t, n) {
                    [null, void 0, !1].includes(n) && function (e) {
                        return !["aria-pressed", "aria-checked", "aria-expanded"].includes(e)
                    }(t) ? e.removeAttribute(t) : (function (e) {
                        return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
                    }(t) && (n = t), function (e, t, n) {
                        e.getAttribute(t) != n && e.setAttribute(t, n)
                    }(e, t, n))
                }(e, t, n)
        }
    }

    function sn(e, t) {
        return e == t
    }

    function un(e, t, n, r) {
        let i = e,
            o = e => r(e),
            a = {},
            l = (e, t) => n => t(e, n);
        if (n.includes("dot") && (t = function (e) {
                return e.replace(/-/g, ".")
            }(t)), n.includes("camel") && (t = function (e) {
                return e.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase())
            }(t)), n.includes("passive") && (a.passive = !0), n.includes("capture") && (a.capture = !0), n.includes("window") && (i = window), n.includes("document") && (i = document), n.includes("prevent") && (o = l(o, (e, t) => {
                t.preventDefault(), e(t)
            })), n.includes("stop") && (o = l(o, (e, t) => {
                t.stopPropagation(), e(t)
            })), n.includes("self") && (o = l(o, (t, n) => {
                n.target === e && t(n)
            })), (n.includes("away") || n.includes("outside")) && (i = document, o = l(o, (t, n) => {
                e.contains(n.target) || e.offsetWidth < 1 && e.offsetHeight < 1 || !1 !== e._x_isShown && t(n)
            })), o = l(o, (e, r) => {
                (function (e) {
                    return ["keydown", "keyup"].includes(e)
                })(t) && function (e, t) {
                    let n = t.filter(e => !["window", "document", "prevent", "stop", "once"].includes(e));
                    if (n.includes("debounce")) {
                        let e = n.indexOf("debounce");
                        n.splice(e, cn((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                    }
                    if (0 === n.length || 1 === n.length && fn(e.key).includes(n[0])) return !1;
                    let r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(e => n.includes(e));
                    return n = n.filter(e => !r.includes(e)), !(r.length > 0 && r.filter(t => (("cmd" === t || "super" === t) && (t = "meta"), e[`${t}Key`])).length === r.length && fn(e.key).includes(n[0]))
                }(r, n) || e(r)
            }), n.includes("debounce")) {
            let e = n[n.indexOf("debounce") + 1] || "invalid-wait",
                t = cn(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
            o = $e(o, t)
        }
        if (n.includes("throttle")) {
            let e = n[n.indexOf("throttle") + 1] || "invalid-wait",
                t = cn(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
            o = Me(o, t)
        }
        return n.includes("once") && (o = l(o, (e, n) => {
            e(n), i.removeEventListener(t, o, a)
        })), i.addEventListener(t, o, a), () => {
            i.removeEventListener(t, o, a)
        }
    }

    function cn(e) {
        return !Array.isArray(e) && !isNaN(e)
    }

    function fn(e) {
        if (!e) return [];
        e = function (e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
        }(e);
        let t = {
            ctrl: "control",
            slash: "/",
            space: "-",
            spacebar: "-",
            cmd: "meta",
            esc: "escape",
            up: "arrow-up",
            down: "arrow-down",
            left: "arrow-left",
            right: "arrow-right",
            period: ".",
            equal: "="
        };
        return t[e] = e, Object.keys(t).map(n => {
            if (t[n] === e) return n
        }).filter(e => e)
    }

    function dn(e) {
        let t = e ? parseFloat(e) : null;
        return function (e) {
            return !Array.isArray(e) && !isNaN(e)
        }(t) ? t : e
    }

    function pn(e, t, n, r) {
        let i = {};
        return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(e => e.trim()).forEach((e, n) => {
            i[e] = t[n]
        }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && "object" == typeof t ? e.item.replace("{", "").replace("}", "").split(",").map(e => e.trim()).forEach(e => {
            i[e] = t[e]
        }) : i[e.item] = t, e.index && (i[e.index] = n), e.collection && (i[e.collection] = r), i
    }

    function _n() {}
    an.inline = ((e, {
        modifiers: t
    }, {
        cleanup: n
    }) => {
        t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, n(() => {
            t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
        })
    }), V("ignore", an), V("effect", (e, {
        expression: t
    }, {
        effect: n
    }) => n(T(e, t))), V("model", (e, {
        modifiers: t,
        expression: n
    }, {
        effect: r,
        cleanup: i
    }) => {
        let o = T(e, n),
            a = T(e, `${n} = rightSideOfExpression($event, ${n})`);
        var l = "select" === e.tagName.toLowerCase() || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
        let s = function (e, t, n) {
                return "radio" === e.type && b(() => {
                    e.hasAttribute("name") || e.setAttribute("name", n)
                }), (n, r) => b(() => {
                    if (n instanceof CustomEvent && void 0 !== n.detail) return n.detail || n.target.value;
                    if ("checkbox" === e.type) {
                        if (Array.isArray(r)) {
                            let e = t.includes("number") ? dn(n.target.value) : n.target.value;
                            return n.target.checked ? r.concat([e]) : r.filter(t => ! function (e, t) {
                                return e == t
                            }(t, e))
                        }
                        return n.target.checked
                    }
                    if ("select" === e.tagName.toLowerCase() && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map(e => {
                        let t = e.value || e.text;
                        return dn(t)
                    }) : Array.from(n.target.selectedOptions).map(e => e.value || e.text); {
                        let e = n.target.value;
                        return t.includes("number") ? dn(e) : t.includes("trim") ? e.trim() : e
                    }
                })
            }(e, t, n),
            u = un(e, l, t, e => {
                a(() => {}, {
                    scope: {
                        $event: e,
                        rightSideOfExpression: s
                    }
                })
            });
        i(() => u());
        let c = T(e, `${n} = __placeholder`);
        e._x_model = {
            get() {
                let e;
                return o(t => e = t), e
            },
            set(e) {
                c(() => {}, {
                    scope: {
                        __placeholder: e
                    }
                })
            }
        }, e._x_forceModelUpdate = (() => {
            o(t => {
                void 0 === t && n.match(/\./) && (t = ""), window.fromModel = !0, b(() => ln(e, "value", t)), delete window.fromModel
            })
        }), r(() => {
            t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate()
        })
    }), V("cloak", e => queueMicrotask(() => b(() => e.removeAttribute(W("cloak"))))), ge(() => `[${W("init")}]`), V("init", je((e, {
        expression: t
    }) => "string" == typeof t ? !!t.trim() && R(e, t, {}) : R(e, t, {}))), V("text", (e, {
        expression: t
    }, {
        effect: n,
        evaluateLater: r
    }) => {
        let i = r(t);
        n(() => {
            i(t => {
                b(() => {
                    e.textContent = t
                })
            })
        })
    }), V("html", (e, {
        expression: t
    }, {
        effect: n,
        evaluateLater: r
    }) => {
        let i = r(t);
        n(() => {
            i(t => {
                e.innerHTML = t
            })
        })
    }), Y(G(":", J(W("bind:")))), V("bind", (e, {
        value: t,
        modifiers: n,
        expression: r,
        original: i
    }, {
        effect: o
    }) => {
        if (!t) return function (e, t, n, r) {
            let i = T(e, t),
                o = [];
            r(() => {
                for (; o.length;) o.pop()();
                i(t => {
                    let r = Object.entries(t).map(([e, t]) => ({
                            name: e,
                            value: t
                        })),
                        i = function (e) {
                            return Array.from(e).map(Q()).filter(e => !ee(e))
                        }(r = r.filter(e => !("object" == typeof e.value && !Array.isArray(e.value) && null !== e.value)));
                    r = r.map(e => i.find(t => t.name === e.name) ? {
                        name: `x-bind:${e.name}`,
                        value: `"${e.value}"`
                    } : e), K(e, r, n).map(e => {
                        o.push(e.runCleanups), e()
                    })
                })
            })
        }(e, r, i, o);
        if ("key" === t) return function (e, t) {
            e._x_keyExpression = t
        }(e, r);
        let a = T(e, r);
        o(() => a(i => {
            void 0 === i && r.match(/\./) && (i = ""), b(() => ln(e, t, i, n))
        }))
    }), me(() => `[${W("data")}]`), V("data", je((e, {
        expression: t
    }, {
        cleanup: n
    }) => {
        t = "" === t ? "{}" : t;
        let r = {};
        P(r, e);
        let i = {};
        ! function (e, t) {
            Object.entries(Le).forEach(([n, r]) => {
                Object.defineProperty(e, n, {
                    get: () => (...e) => r.bind(t)(...e),
                    enumerable: !1
                })
            })
        }(i, r);
        let a = R(e, t, {
            scope: i
        });
        void 0 === a && (a = {}), P(a, e);
        let l = o(a);
        j(l);
        let s = k(e, l);
        l.init && R(e, l.init), n(() => {
            s(), l.destroy && R(e, l.destroy)
        })
    })), V("show", (e, {
        modifiers: t,
        expression: n
    }, {
        effect: r
    }) => {
        let i, o = T(e, n),
            a = () => b(() => {
                e.style.display = "none", e._x_isShown = !1
            }),
            l = () => b(() => {
                1 === e.style.length && "none" === e.style.display ? e.removeAttribute("style") : e.style.removeProperty("display"), e._x_isShown = !0
            }),
            s = () => setTimeout(l),
            u = Ae(e => e ? l() : a(), t => {
                "function" == typeof e._x_toggleAndCascadeWithTransitions ? e._x_toggleAndCascadeWithTransitions(e, t, l, a) : t ? s() : a()
            }),
            c = !0;
        r(() => o(e => {
            !c && e === i || (t.includes("immediate") && (e ? s() : a()), u(e), i = e, c = !1)
        }))
    }), V("for", (e, {
        expression: t
    }, {
        effect: n,
        cleanup: r
    }) => {
        let i = function (e) {
                let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                    n = e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
                if (!n) return;
                let r = {};
                r.items = n[2].trim();
                let i = n[1].replace(/^\s*\(|\)\s*$/g, "").trim(),
                    o = i.match(t);
                return o ? (r.item = i.replace(t, "").trim(), r.index = o[1].trim(), o[2] && (r.collection = o[2].trim())) : r.item = i, r
            }(t),
            a = T(e, i.items),
            l = T(e, e._x_keyExpression || "index");
        e._x_prevKeys = [], e._x_lookup = {}, n(() => (function (e, t, n, r) {
            let i = e;
            n(n => {
                (function (e) {
                    return !Array.isArray(e) && !isNaN(e)
                })(n) && n >= 0 && (n = Array.from(Array(n).keys(), e => e + 1)), void 0 === n && (n = []);
                let a = e._x_lookup,
                    l = e._x_prevKeys,
                    s = [],
                    u = [];
                if ((e => "object" == typeof e && !Array.isArray(e))(n)) n = Object.entries(n).map(([e, i]) => {
                    let o = pn(t, i, e, n);
                    r(e => u.push(e), {
                        scope: {
                            index: e,
                            ...o
                        }
                    }), s.push(o)
                });
                else
                    for (let e = 0; e < n.length; e++) {
                        let i = pn(t, n[e], e, n);
                        r(e => u.push(e), {
                            scope: {
                                index: e,
                                ...i
                            }
                        }), s.push(i)
                    }
                let c = [],
                    f = [],
                    d = [],
                    p = [];
                for (let e = 0; e < l.length; e++) {
                    let t = l[e]; - 1 === u.indexOf(t) && d.push(t)
                }
                l = l.filter(e => !d.includes(e));
                let _ = "template";
                for (let e = 0; e < u.length; e++) {
                    let t = u[e],
                        n = l.indexOf(t);
                    if (-1 === n) l.splice(e, 0, t), c.push([_, e]);
                    else if (n !== e) {
                        let t = l.splice(e, 1)[0],
                            r = l.splice(n - 1, 1)[0];
                        l.splice(e, 0, r), l.splice(n, 0, t), f.push([t, r])
                    } else p.push(t);
                    _ = t
                }
                for (let e = 0; e < d.length; e++) {
                    let t = d[e];
                    a[t].remove(), a[t] = null, delete a[t]
                }
                for (let e = 0; e < f.length; e++) {
                    let [t, n] = f[e], r = a[t], i = a[n], o = document.createElement("div");
                    b(() => {
                        i.after(o), r.after(i), i._x_currentIfEl && i.after(i._x_currentIfEl), o.before(r), r._x_currentIfEl && r.after(r._x_currentIfEl), o.remove()
                    }), O(i, s[u.indexOf(n)])
                }
                for (let e = 0; e < c.length; e++) {
                    let [t, n] = c[e], r = "template" === t ? i : a[t];
                    r._x_currentIfEl && (r = r._x_currentIfEl);
                    let l = s[n],
                        f = u[n],
                        d = document.importNode(i.content, !0).firstElementChild;
                    k(d, o(l), i), b(() => {
                        r.after(d), xe(d)
                    }), "object" == typeof f && fe("x-for key cannot be an object, it must be a string or an integer", i), a[f] = d
                }
                for (let e = 0; e < p.length; e++) O(a[p[e]], s[u.indexOf(p[e])]);
                i._x_prevKeys = u
            })
        })(e, i, a, l)), r(() => {
            Object.values(e._x_lookup).forEach(e => e.remove()), delete e._x_prevKeys, delete e._x_lookup
        })
    }), _n.inline = ((e, {
        expression: t
    }, {
        cleanup: n
    }) => {
        let r = ve(e);
        r._x_refs || (r._x_refs = {}), r._x_refs[t] = e, n(() => delete r._x_refs[t])
    }), V("ref", _n), V("if", (e, {
        expression: t
    }, {
        effect: n,
        cleanup: r
    }) => {
        let i = T(e, t);
        n(() => i(t => {
            t ? (() => {
                if (e._x_currentIfEl) return e._x_currentIfEl;
                let t = e.content.cloneNode(!0).firstElementChild;
                k(t, {}, e), b(() => {
                    e.after(t), xe(t)
                }), e._x_currentIfEl = t, e._x_undoIf = (() => {
                    t.remove(), delete e._x_currentIfEl
                })
            })() : !e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf)
        })), r(() => e._x_undoIf && e._x_undoIf())
    }), V("id", (e, {
        expression: t
    }, {
        evaluate: n
    }) => {
        n(t).forEach(t => (function (e, t) {
            e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = rn(t))
        })(e, t))
    }), Y(G("@", J(W("on:")))), V("on", je((e, {
        value: t,
        modifiers: n,
        expression: r
    }, {
        cleanup: i
    }) => {
        let o = r ? T(e, r) : () => {};
        "template" === e.tagName.toLowerCase() && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
        let a = un(e, t, n, e => {
            o(() => {}, {
                scope: {
                    $event: e
                },
                params: [e]
            })
        });
        i(() => a())
    })), Re.setEvaluator(I), Re.setReactivityEngine({
        reactive: Qt,
        effect: function (e, t = Ie) {
            (function (e) {
                return e && !0 === e._isEffect
            })(e) && (e = e.raw);
            let n = function (e, t) {
                let n = function () {
                    if (!n.active) return e();
                    if (!nt.includes(n)) {
                        at(n);
                        try {
                            return st.push(lt), lt = !0, nt.push(n), ze = n, e()
                        } finally {
                            nt.pop(), ut(), ze = nt[nt.length - 1]
                        }
                    }
                };
                return n.id = ot++, n.allowRecurse = !!t.allowRecurse, n._isEffect = !0, n.active = !0, n.raw = e, n.deps = [], n.options = t, n
            }(e, t);
            return t.lazy || n(), n
        },
        release: function (e) {
            e.active && (at(e), e.options.onStop && e.options.onStop(), e.active = !1)
        },
        raw: en
    });
    var hn = Re;
    window.Alpine = hn, queueMicrotask(() => {
        hn.start()
    })
})();