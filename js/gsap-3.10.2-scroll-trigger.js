/*!
 * ScrollTrigger 3.10.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function p() {
        return he || "undefined" != typeof window && (he = window.gsap) && he.registerPlugin && he
    }

    function x(e, t) {
        return ~Ye.indexOf(e) && Ye[Ye.indexOf(e) + 1][t]
    }

    function y(e) {
        return !!~t.indexOf(e)
    }

    function z(e, t, r, n) {
        return e.addEventListener(t, r, {
            passive: !n
        })
    }

    function A(e, t, r) {
        return e.removeEventListener(t, r)
    }

    function D() {
        return Pe && Pe.isPressed || ze.cache++
    }

    function E(t) {
        return function(e) {
            return e || 0 === e ? (r && (ve.history.scrollRestoration = "manual"), t(e), t.v = e, t.c = ze.cache, Pe && Pe.isPressed && Re("ss", e)) : ze.cache === t.c && !Re("ref") || (t.c = ze.cache, t.v = t()), t.v
        }
    }

    function H(e) {
        return he.utils.toArray(e)[0] || ("string" == typeof e && !1 !== he.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function I(t, e) {
        var r = e.s,
            n = e.sc,
            i = ze.indexOf(t),
            o = n === Xe.sc ? 1 : 2;
        return ~i || (i = ze.push(t) - 1), ze[i + o] || (ze[i + o] = x(t, r) || (y(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r]
        }))
    }

    function J(e, t, i) {
        function _c(e, t) {
            var r = u();
            t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l)
        }
        var o = e,
            a = e,
            s = u(),
            l = s,
            n = t || 50,
            c = Math.max(500, 3 * n);
        return {
            update: _c,
            reset: function reset() {
                a = o = i ? 0 : o, l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l,
                    r = a,
                    n = u();
                return !e && 0 !== e || e === o || _c(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3
            }
        }
    }

    function K(e, t) {
        return t && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function L(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function M(e) {
        return (he = e || p()) && !be && "undefined" != typeof document && document.body && (ve = window, Se = (me = document).documentElement, _e = me.body, t = [ve, me, Se, _e], he.utils.clamp, ke = "onpointerenter" in _e ? "pointer" : "mouse", Te = w.isTouch = ve.matchMedia && ve.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ve || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, setTimeout(function() {
            return r = 0
        }, 500), be = 1), be
    }
    var he, be, ve, me, Se, _e, Te, ke, Me, t, Pe, r = 1,
        Oe = [],
        ze = [],
        Ye = [],
        u = Date.now,
        Re = function _bridge(e, t) {
            return t
        },
        n = "scrollLeft",
        i = "scrollTop",
        Le = {
            s: n,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: E(function(e) {
                return arguments.length ? ve.scrollTo(e, Xe.sc()) : ve.pageXOffset || me[n] || Se[n] || _e[n] || 0
            })
        },
        Xe = {
            s: i,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: Le,
            sc: E(function(e) {
                return arguments.length ? ve.scrollTo(Le.sc(), e) : ve.pageYOffset || me[i] || Se[i] || _e[i] || 0
            })
        };
    Le.op = Xe, ze.cache = 0;
    var w = (Observer.prototype.init = function init(e) {
        be || M(he) || console.warn("Please gsap.registerPlugin(Observer)"), Me || (Me = he.core.globals().ScrollTrigger) && Me.core && function _integrate() {
            var e = Me.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, ze), n.push.apply(n, Ye), ze = t, Ye = n, Re = function _bridge(e, t) {
                return r[e](t)
            }
        }();
        var i = e.tolerance,
            a = e.dragMinimum,
            t = e.type,
            r = e.target,
            n = e.lineHeight,
            o = e.debounce,
            s = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            f = e.wheelSpeed,
            d = e.event,
            p = e.onDragStart,
            g = e.onDragEnd,
            h = e.onDrag,
            b = e.onPress,
            v = e.onRelease,
            m = e.onRight,
            x = e.onLeft,
            w = e.onUp,
            S = e.onDown,
            _ = e.onChangeX,
            T = e.onChangeY,
            k = e.onChange,
            E = e.onToggleX,
            C = e.onToggleY,
            P = e.onHover,
            O = e.onHoverEnd,
            F = e.onMove,
            Y = e.ignoreCheck,
            R = e.isNormalizer,
            B = e.onGestureStart,
            X = e.onGestureEnd,
            j = e.onWheel,
            V = e.onEnable,
            G = e.onDisable,
            N = e.onClick,
            W = e.scrollSpeed;

        function ue(e, t) {
            return (ee.event = e) && u && ~u.indexOf(e.target) || t && le && "touch" !== e.pointerType || Y && Y(e)
        }

        function we() {
            var e = ee.deltaX = L(de),
                t = ee.deltaY = L(pe),
                r = Math.abs(e) >= i,
                n = Math.abs(t) >= i;
            k && (r || n) && k(ee, e, t, de, pe), r && (m && 0 < ee.deltaX && m(ee), x && ee.deltaX < 0 && x(ee), _ && _(ee), E && ee.deltaX < 0 != te < 0 && E(ee), te = ee.deltaX, de[0] = de[1] = de[2] = 0), n && (S && 0 < ee.deltaY && S(ee), w && ee.deltaY < 0 && w(ee), T && T(ee), C && ee.deltaY < 0 != re < 0 && C(ee), re = ee.deltaY, pe[0] = pe[1] = pe[2] = 0), $ && (F(ee), $ = !1), Z && (h(ee), Z = !1), Q && (j(ee), Q = !1), q = 0
        }

        function xe(e, t, r) {
            de[r] += e, pe[r] += t, ee._vx.update(e, 2 === r), ee._vy.update(t, 2 === r), o ? q = q || requestAnimationFrame(we) : we()
        }

        function ye(e) {
            if (!ue(e, 1)) {
                var t = (e = K(e, s)).clientX,
                    r = e.clientY,
                    n = t - ee.x,
                    i = r - ee.y,
                    o = ee.isDragging;
                ee.x = t, ee.y = r, (o || Math.abs(ee.startX - t) >= a || Math.abs(ee.startY - r) >= a) && (h && (Z = !0), o || (ee.isDragging = !0), xe(n, i, 2), o || p && p(ee))
            }
        }

        function Ae(e) {
            if (!ue(e, 1)) {
                A(R ? r : fe, se[1], ye);
                var t = ee.isDragging;
                t || (ee._vx.reset(), ee._vy.reset()), ee.isDragging = ee.isGesturing = ee.isPressed = !1, l && !R && U.restart(!0), g && t && g(ee), v && v(ee, t)
            }
        }

        function Be(e) {
            return e.touches && 1 < e.touches.length && (ee.isGesturing = !0) && B(e, ee.isDragging)
        }

        function Ce() {
            return (ee.isGesturing = !1) || X(ee)
        }

        function De(e) {
            if (!ue(e)) {
                var t = ne(),
                    r = ie();
                xe((t - oe) * W, (r - ae) * W, 1), oe = t, ae = r, l && U.restart(!0)
            }
        }

        function Ee(e) {
            if (!ue(e)) {
                e = K(e, s), j && (Q = !0);
                var t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? ve.innerHeight : 1) * f;
                xe(e.deltaX * t, e.deltaY * t, 0), l && !R && U.restart(!0)
            }
        }

        function Fe(e) {
            if (!ue(e)) {
                var t = e.clientX,
                    r = e.clientY,
                    n = t - ee.x,
                    i = r - ee.y;
                ee.x = t, ee.y = r, F && ($ = !0), (n || i) && xe(n, i, 2)
            }
        }

        function Ge(e) {
            ee.event = e, P(ee)
        }

        function He(e) {
            ee.event = e, O(ee)
        }

        function Ie(e) {
            return ue(e) || K(e, s) && N(ee)
        }
        this.target = r = H(r) || Se, this.vars = e, u = u && he.utils.toArray(u), i = i || 0, a = a || 0, f = f || 1, W = W || 1, t = t || "wheel,touch,pointer", o = !1 !== o, n = n || parseFloat(ve.getComputedStyle(_e).lineHeight) || 22;
        var q, U, Z, $, Q, ee = this,
            te = 0,
            re = 0,
            ne = I(r, Le),
            ie = I(r, Xe),
            oe = ne(),
            ae = ie(),
            se = ("ontouchstart" in Se ? "touchstart,touchmove,touchcancel,touchend" : 0 <= t.indexOf("pointer") && !("onpointerdown" in Se) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","),
            le = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === se[0],
            ce = y(r),
            fe = r.ownerDocument || me,
            de = [0, 0, 0],
            pe = [0, 0, 0],
            ge = ee.onPress = function(e) {
                ue(e, 1) || (U.pause(), ee.isPressed = !0, e = K(e, s), te = re = 0, ee.startX = ee.x = e.clientX, ee.startY = ee.y = e.clientY, ee._vx.reset(), ee._vy.reset(), z(R ? r : fe, se[1], ye, s), ee.deltaX = ee.deltaY = 0, b && b(ee))
            };
        U = ee._dc = he.delayedCall(c || .25, function onStopFunc() {
            ee._vx.reset(), ee._vy.reset(), U.pause(), l && l(ee)
        }).pause(), ee.deltaX = ee.deltaY = 0, ee._vx = J(0, 50, !0), ee._vy = J(0, 50, !0), ee.scrollX = ne, ee.scrollY = ie, ee.isDragging = ee.isGesturing = ee.isPressed = !1, ee.enable = function(e) {
            return ee.isEnabled || (z(ce ? fe : r, "scroll", D), 0 <= t.indexOf("scroll") && z(ce ? fe : r, "scroll", De, s), 0 <= t.indexOf("wheel") && z(r, "wheel", Ee, s), (0 <= t.indexOf("touch") && Te || 0 <= t.indexOf("pointer")) && (z(r, se[0], ge, s), z(fe, se[2], Ae), z(fe, se[3], Ae), N && z(r, "click", Ie), B && z(fe, "gesturestart", Be), X && z(fe, "gestureend", Ce), P && z(r, ke + "enter", Ge), O && z(r, ke + "leave", He), F && z(r, ke + "move", Fe)), ee.isEnabled = !0, e && e.type && ge(e), V && V(ee)), ee
        }, ee.disable = function() {
            ee.isEnabled && (Oe.filter(function(e) {
                return e !== ee && y(e.target)
            }).length || A(ce ? fe : r, "scroll", D), A(ce ? fe : r, "scroll", De), A(r, "wheel", Ee), A(r, se[0], ge), A(fe, se[2], Ae), A(fe, se[3], Ae), A(r, "click", Ie), A(fe, "gesturestart", Be), A(fe, "gestureend", Ce), A(r, ke + "enter", Ge), A(r, ke + "leave", He), A(r, ke + "move", Fe), ee.isEnabled = !1, G && G(ee))
        }, ee.kill = function() {
            ee.disable();
            var e = Oe.indexOf(ee);
            0 <= e && Oe.splice(e, 1), Pe === ee && (Pe = 0)
        }, Oe.push(ee), R && (Pe = ee), ee.enable(d)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }
    w.version = "3.10.2", w.create = function(e) {
        return new w(e)
    }, w.register = M, w.getAll = function() {
        return Oe.slice()
    }, w.getById = function(t) {
        return Oe.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, p() && he.registerPlugin(w);

    function sa() {
        return $e = 1
    }

    function ta() {
        return $e = 0
    }

    function ua(e) {
        return e
    }

    function va(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function wa() {
        return "undefined" != typeof window
    }

    function xa() {
        return je || wa() && (je = window.gsap) && je.registerPlugin && je
    }

    function ya(e) {
        return !!~a.indexOf(e)
    }

    function za(e) {
        return x(e, "getBoundingClientRect") || (ya(e) ? function() {
            return Mt.width = Ve.innerWidth, Mt.height = Ve.innerHeight, Mt
        } : function() {
            return wt(e)
        })
    }

    function Ca(e, t) {
        var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
        return (r = "scroll" + n) && (o = x(e, r)) ? o() - za(e)()[i] : ya(e) ? (Ke[r] || We[r]) - (Ve["inner" + n] || Ke["client" + n] || We["client" + n]) : e[r] - e["offset" + n]
    }

    function Da(e, t) {
        for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }

    function Ea(e) {
        return "string" == typeof e
    }

    function Fa(e) {
        return "function" == typeof e
    }

    function Ga(e) {
        return "number" == typeof e
    }

    function Ha(e) {
        return "object" == typeof e
    }

    function Ia(e) {
        return Fa(e) && e()
    }

    function Ja(r, n) {
        return function() {
            var e = Ia(r),
                t = Ia(n);
            return function() {
                Ia(e), Ia(t)
            }
        }
    }

    function Ka(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function La(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function ab(e) {
        return Ve.getComputedStyle(e)
    }

    function cb(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function eb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function fb(e) {
        var t, r = [],
            n = e.labels,
            i = e.duration();
        for (t in n) r.push(n[t] / i);
        return r
    }

    function hb(i) {
        var o = je.utils.snap(i),
            a = Array.isArray(i) && i.slice(0).sort(function(e, t) {
                return e - t
            });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return o(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++)
                    if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;)
                if (a[n] <= e) return a[n];
            return a[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = o(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i)
        }
    }

    function jb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function kb(e, t, r, n) {
        return e.addEventListener(t, r, {
            passive: !n
        })
    }

    function lb(e, t, r) {
        return e.removeEventListener(t, r)
    }

    function mb(e, t, r) {
        return r && r.wheelHandler && e(t, "wheel", r)
    }

    function qb(e, t) {
        if (Ea(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in F ? F[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function rb(e, t, r, n, i, o, a, s) {
        var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = Ne.createElement("div"),
            g = ya(r) || "fixed" === x(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            b = g ? We : r,
            v = -1 !== e.indexOf("start"),
            m = v ? l : c,
            y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === Xe ? C : P) + ":" + (o + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || 0 === t ? e + "-" + t : e, b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p), p._offset = p["offset" + n.op.d2], Y(p, 0, n, v), p
    }

    function wb() {
        return 34 < st() - lt && Z()
    }

    function xb() {
        b && b.isPressed || (ze.cache++, _ = _ || requestAnimationFrame(Z), lt || j("scrollStart"), lt = st())
    }

    function yb() {
        ze.cache++, Ze || h || Ne.fullscreenElement || v && S === Ve.innerWidth && !(Math.abs(Ve.innerHeight - m) > .25 * Ve.innerHeight) || s.restart(!0)
    }

    function Eb(e) {
        var t, r = je.ticker.frame,
            n = [],
            i = 0;
        if (T !== r || at) {
            for (N(); i < X.length; i += 4)(t = Ve.matchMedia(X[i]).matches) !== X[i + 3] && ((X[i + 3] = t) ? n.push(i) : N(1, X[i]) || Fa(X[i + 2]) && X[i + 2]());
            for (G(), i = 0; i < n.length; i++) t = n[i], nt = X[t], X[t + 2] = X[t + 1](e);
            nt = 0, o && q(0, 1), T = r, j("matchMedia")
        }
    }

    function Fb() {
        return lb(re, "scrollEnd", Fb) || q(!0)
    }

    function Kb() {
        return ze.cache++ && ze.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0)
        })
    }

    function Vb(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var i, o = $.length, a = t.style, s = e.style; o--;) a[i = $[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[P] = s[C] = a.flexBasis = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[ft] = eb(e, Le) + xt, a[dt] = eb(e, Xe) + xt, a[vt] = s[mt] = s.top = s.left = "0", Ct(n), s[ft] = s.maxWidth = r[ft], s[dt] = s.maxHeight = r[dt], s[vt] = r[vt], e.parentNode.insertBefore(t, e), t.appendChild(e)
        }
    }

    function Yb(e) {
        for (var t = Q.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Q[i], r[Q[i]]);
        return n.t = e, n
    }

    function _b(e, t, r, n, i, o, a, s, l, c, u, f, d) {
        Fa(e) && (e = e(s)), Ea(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? qb("0" + e.substr(3), r) : 0));
        var p, g, h, b = d ? d.time() : 0;
        if (d && d.seek(0), Ga(e)) a && Y(a, r, n, !0);
        else {
            Fa(t) && (t = t(s));
            var v, m, y, x, w = e.split(" ");
            h = H(t) || We, (v = wt(h) || {}) && (v.left || v.top) || "none" !== ab(h).display || (x = h.style.display, h.style.display = "block", v = wt(h), x ? h.style.display = x : h.style.removeProperty("display")), m = qb(w[0], v[n.d]), y = qb(w[1] || "0", r), e = v[n.p] - l[n.p] - c + m + i - y, a && Y(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y
        }
        if (o) {
            var S = e + r,
                _ = o._isStart;
            p = "scroll" + n.d2, Y(o, S, n, _ && 20 < S || !_ && (u ? Math.max(We[p], Ke[p]) : o.parentNode[p]) <= S + 1), u && (l = wt(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + xt))
        }
        return d && h && (p = wt(h), d.seek(f), g = wt(h), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e)
    }

    function bc(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === We) {
                for (i in e._stOrig = a.cssText, o = ab(e)) + i || te.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            je.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function cc(l, e) {
        function nj(e, t, r, n, i) {
            var o = nj.tween,
                a = t.onComplete,
                s = {};
            return r = r || f(), i = n && i || 0, n = n || e - r, o && o.kill(), c = Math.round(r), t[d] = e, (t.modifiers = s)[d] = function(e) {
                return (e = va(f())) !== c && e !== u && 2 < Math.abs(e - c) && 2 < Math.abs(e - u) ? (o.kill(), nj.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = va(e)
            }, t.onComplete = function() {
                nj.tween = 0, a && a.call(o)
            }, o = nj.tween = je.to(l, t)
        }
        var c, u, f = I(l, e),
            d = "_scroll" + e.p2;
        return (l[d] = f).wheelHandler = function() {
            return nj.tween && nj.tween.kill() && (nj.tween = 0)
        }, kb(l, "wheel", f.wheelHandler), nj
    }
    var je, o, Ve, Ne, Ke, We, a, s, qe, Je, Ue, l, Ze, $e, c, Qe, f, d, g, et, tt, h, b, v, m, S, rt, _, nt, T, it, ot, at = 1,
        st = Date.now,
        k = st(),
        lt = 0,
        ct = 0,
        ut = Math.abs,
        C = "right",
        P = "bottom",
        ft = "width",
        dt = "height",
        pt = "Right",
        gt = "Left",
        ht = "Top",
        bt = "Bottom",
        vt = "padding",
        mt = "margin",
        yt = "Width",
        O = "Height",
        xt = "px",
        wt = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ab(e)[c] && je.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        St = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        _t = {
            toggleActions: "play",
            anticipatePin: 0
        },
        F = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        Y = function _positionMarker(e, t, r, n) {
            var i = {
                    display: "block"
                },
                o = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + yt] = 1, i["border" + a + yt] = 0, i[r.p] = t + "px", je.set(e, i)
        },
        Tt = [],
        kt = {},
        R = {},
        B = [],
        X = [],
        j = function _dispatch(e) {
            return R[e] && R[e].map(function(e) {
                return e()
            }) || B
        },
        V = [],
        G = function _revertRecorded(e) {
            for (var t = 0; t < V.length; t += 5) e && V[t + 4] !== e || (V[t].style.cssText = V[t + 1], V[t].getBBox && V[t].setAttribute("transform", V[t + 2] || ""), V[t + 3].uncache = 1)
        },
        N = function _revertAll(e, t) {
            var r;
            for (Qe = 0; Qe < Tt.length; Qe++) r = Tt[Qe], t && r.media !== t || (e ? r.kill(1) : r.revert());
            t && G(t), t || j("revert")
        },
        W = 0,
        q = function _refreshAll(e, t) {
            if (!lt || e) {
                it = !0;
                var r = j("refreshInit");
                et && re.sort(), t || N(), Tt.slice(0).forEach(function(e) {
                    return e.refresh()
                }), Tt.forEach(function(e) {
                    return "max" === e.vars.end && e.setPositions(e.start, Ca(e.scroller, e._dir))
                }), r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), Kb(), s.pause(), W++, it = !1, j("refresh")
            } else kb(re, "scrollEnd", Fb)
        },
        U = 0,
        Et = 1,
        Z = function _updateAll() {
            if (!it) {
                ot && ot.update(0), re.isUpdating = !0;
                var e = Tt.length,
                    t = st(),
                    r = 50 <= t - k,
                    n = e && Tt[0].scroll();
                if (Et = n < U ? -1 : 1, U = n, r && (lt && !$e && 200 < t - lt && (lt = 0, j("scrollEnd")), Ue = k, k = t), Et < 0) {
                    for (Qe = e; 0 < Qe--;) Tt[Qe] && Tt[Qe].update(0, r);
                    Et = 1
                } else
                    for (Qe = 0; Qe < e; Qe++) Tt[Qe] && Tt[Qe].update(0, r);
                re.isUpdating = !1
            }
            _ = 0
        },
        $ = ["left", "top", P, C, mt + bt, mt + pt, mt + ht, mt + gt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Q = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + O, "position", mt, vt, vt + ht, vt + pt, vt + bt, vt + gt]),
        ee = /([A-Z])/g,
        Ct = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    i = e.length,
                    o = 0;
                for ((e.t._gsap || je.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(ee, "-$1").toLowerCase())
            }
        },
        Mt = {
            left: 0,
            top: 0
        },
        te = /(webkit|moz|length|cssText|inset)/i,
        re = (ScrollTrigger.prototype.init = function init(_, T) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), ct) {
                var v, n, f, k, E, C, M, P, O, A, D, e, z, F, Y, R, L, t, B, m, X, j, y, V, w, S, r, G, N, K, i, d, W, q, J, U, Z, o, $ = (_ = cb(Ea(_) || Ga(_) || _.nodeType ? {
                        trigger: _
                    } : _, _t)).onUpdate,
                    Q = _.toggleClass,
                    a = _.id,
                    ee = _.onToggle,
                    te = _.onRefresh,
                    re = _.scrub,
                    ne = _.trigger,
                    ie = _.pin,
                    oe = _.pinSpacing,
                    ae = _.invalidateOnRefresh,
                    se = _.anticipatePin,
                    s = _.onScrubComplete,
                    p = _.onSnapComplete,
                    le = _.once,
                    ce = _.snap,
                    ue = _.pinReparent,
                    l = _.pinSpacer,
                    fe = _.containerAnimation,
                    de = _.fastScrollEnd,
                    pe = _.preventOverlaps,
                    ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? Le : Xe,
                    he = !re && 0 !== re,
                    be = H(_.scroller || Ve),
                    c = je.core.getCache(be),
                    ve = ya(be),
                    me = "fixed" === ("pinType" in _ ? _.pinType : x(be, "pinType") || ve && "fixed"),
                    ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
                    xe = he && _.toggleActions.split(" "),
                    u = "markers" in _ ? _.markers : _t.markers,
                    we = ve ? 0 : parseFloat(ab(be)["border" + ge.p2 + yt]) || 0,
                    Se = this,
                    _e = _.onRefreshInit && function() {
                        return _.onRefreshInit(Se)
                    },
                    Te = function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            i = r.d2,
                            o = r.a;
                        return (o = x(e, "getBoundingClientRect")) ? function() {
                            return o()[n]
                        } : function() {
                            return (t ? Ve["inner" + i] : e["client" + i]) || 0
                        }
                    }(be, ve, ge),
                    ke = function _getOffsetsFunc(e, t) {
                        return !t || ~Ye.indexOf(e) ? za(e) : function() {
                            return Mt
                        }
                    }(be, ve),
                    g = 0,
                    Ee = I(be, ge);
                if (Se.media = nt, Se._dir = ge, se *= 45, Se.scroller = be, Se.scroll = fe ? fe.time.bind(fe) : Ee, k = Ee(), Se.vars = _, T = T || _.animation, "refreshPriority" in _ && (et = 1, -9999 === _.refreshPriority && (ot = Se)), c.tweenScroll = c.tweenScroll || {
                        top: cc(be, Xe),
                        left: cc(be, Le)
                    }, Se.tweenTo = v = c.tweenScroll[ge.p], Se.scrubDuration = function(e) {
                        (i = Ga(e) && e) ? K ? K.duration(e) : K = je.to(T, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: i,
                            paused: !0,
                            onComplete: function onComplete() {
                                return s && s(Se)
                            }
                        }): (K && K.progress(1).kill(), K = 0)
                    }, T && (T.vars.lazy = !1, T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0), Se.animation = T.pause(), (T.scrollTrigger = Se).scrubDuration(re), G = 0, a = a || T.vars.id), Tt.push(Se), ce && (Ha(ce) && !ce.push || (ce = {
                        snapTo: ce
                    }), "scrollBehavior" in We.style && je.set(ve ? [We, Ke] : be, {
                        scrollBehavior: "auto"
                    }), f = Fa(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) {
                        return function(e) {
                            return je.utils.snap(fb(t), e)
                        }
                    }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) {
                        return function(e, t) {
                            return hb(fb(r))(e, t.direction)
                        }
                    }(T) : !1 !== ce.directional ? function(e, t) {
                        return hb(ce.snapTo)(e, Ze ? 0 : t.direction)
                    } : je.utils.snap(ce.snapTo), d = ce.duration || {
                        min: .1,
                        max: 2
                    }, d = Ha(d) ? Je(d.min, d.max) : Je(d, d), W = je.delayedCall(ce.delay || i / 2 || .1, function() {
                        if (Math.abs(Se.getVelocity()) < 10 && !$e && g !== Ee()) {
                            var e = T && !he ? T.totalProgress() : Se.progress,
                                t = (e - N) / (st() - Ue) * 1e3 || 0,
                                r = je.utils.clamp(-Se.progress, 1 - Se.progress, ut(t / 2) * t / .185),
                                n = Se.progress + (!1 === ce.inertia ? 0 : r),
                                i = Je(0, 1, f(n, Se)),
                                o = Ee(),
                                a = Math.round(C + i * z),
                                s = ce.onStart,
                                l = ce.onInterrupt,
                                c = ce.onComplete,
                                u = v.tween;
                            if (o <= M && C <= o && a !== o) {
                                if (u && !u._initted && u.data <= ut(a - o)) return;
                                !1 === ce.inertia && (r = i - Se.progress), v(a, {
                                    duration: d(ut(.185 * Math.max(ut(n - e), ut(i - e)) / t / .05 || 0)),
                                    ease: ce.ease || "power3",
                                    data: ut(a - o),
                                    onInterrupt: function onInterrupt() {
                                        return W.restart(!0) && l && l(Se)
                                    },
                                    onComplete: function onComplete() {
                                        Se.update(), g = Ee(), G = N = T && !he ? T.totalProgress() : Se.progress, p && p(Se), c && c(Se)
                                    }
                                }, o, r * z, a - o - r * z), s && s(Se, v.tween)
                            }
                        } else Se.isActive && W.restart(!0)
                    }).pause()), a && (kt[a] = Se), o = (o = (ne = Se.trigger = H(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o(Se), ie = !0 === ie ? ne : H(ie), Ea(Q) && (Q = {
                        targets: ne,
                        className: Q
                    }), ie && (!1 === oe || oe === mt || (oe = !(!oe && "flex" === ab(ie.parentNode).display) && vt), Se.pin = ie, !1 !== _.force3D && je.set(ie, {
                        force3D: !0
                    }), (n = je.core.getCache(ie)).spacer ? F = n.pinState : (l && ((l = H(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = Yb(l))), n.spacer = L = l || Ne.createElement("div"), L.classList.add("pin-spacer"), a && L.classList.add("pin-spacer-" + a), n.pinState = F = Yb(ie)), Se.spacer = L = n.spacer, r = ab(ie), y = r[oe + ge.os2], B = je.getProperty(ie), m = je.quickSetter(ie, ge.a, xt), Vb(ie, L, r), R = Yb(ie)), u) {
                    e = Ha(u) ? cb(u, St) : St, A = rb("scroller-start", a, be, ge, e, 0), D = rb("scroller-end", a, be, ge, e, 0, A), t = A["offset" + ge.op.d2];
                    var h = H(x(be, "content") || be);
                    P = this.markerStart = rb("start", a, h, ge, e, t, 0, fe), O = this.markerEnd = rb("end", a, h, ge, e, t, 0, fe), fe && (Z = je.quickSetter([P, O], ge.a, xt)), me || Ye.length && !0 === x(be, "fixedMarkers") || (function _makePositionable(e) {
                        var t = ab(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(ve ? We : be), je.set([A, D], {
                        force3D: !0
                    }), w = je.quickSetter(A, ge.a, xt), S = je.quickSetter(D, ge.a, xt))
                }
                if (fe) {
                    var b = fe.vars.onUpdate,
                        Ce = fe.vars.onUpdateParams;
                    fe.eventCallback("onUpdate", function() {
                        Se.update(0, 0, 1), b && b.apply(Ce || [])
                    })
                }
                Se.previous = function() {
                    return Tt[Tt.indexOf(Se) - 1]
                }, Se.next = function() {
                    return Tt[Tt.indexOf(Se) + 1]
                }, Se.revert = function(e) {
                    var t = !1 !== e || !Se.enabled,
                        r = Ze;
                    t !== Se.isReverted && (t && (!Se.scroll.rec && Ze && it && (Se.scroll.rec = Ee()), J = Math.max(Ee(), Se.scroll.rec || 0), q = Se.progress, U = T && T.progress()), P && [P, O, A, D].forEach(function(e) {
                        return e.style.display = t ? "none" : "block"
                    }), t && (Ze = 1), Se.update(t), Ze = r, ie && (t ? function _swapPinOut(e, t, r) {
                        Ct(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Ct(n.spacerState);
                        else if (e.parentNode === t) {
                            var i = t.parentNode;
                            i && (i.insertBefore(e, t), i.removeChild(t))
                        }
                    }(ie, L, F) : ue && Se.isActive || Vb(ie, L, ab(ie), V)), Se.isReverted = t)
                }, Se.refresh = function(e, t) {
                    if (!Ze && Se.enabled || t)
                        if (ie && e && lt) kb(ScrollTrigger, "scrollEnd", Fb);
                        else {
                            !it && _e && _e(Se), Ze = 1, K && K.pause(), ae && T && T.time(-.01, !0).invalidate(), Se.isReverted || Se.revert();
                            for (var r, n, i, o, a, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Ca(be, ge), h = 0, b = 0, v = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && H(_.pinnedContainer), w = ne && Math.max(0, Tt.indexOf(Se)) || 0, S = w; S--;)(s = Tt[S]).end || s.refresh(0, 1) || (Ze = 1), !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert()), s !== Tt[S] && (w--, S--);
                            for (Fa(y) && (y = y(Se)), C = _b(y, ne, d, ge, Ee(), P, A, Se, p, we, me, g, fe) || (ie ? -.001 : 0), Fa(v) && (v = v(Se)), Ea(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ea(y) ? y.split(" ")[0] : "") + v : (h = qb(v.substr(2), d), v = Ea(y) ? y : C + h, m = ne)), M = Math.max(C, _b(v || (m ? "100% 0" : g), m, d, ge, Ee() + h, O, D, Se, p, we, me, g, fe)) || -.001, z = M - C || (C -= .01) && .001, h = 0, S = w; S--;)(l = (s = Tt[S]).pin) && s.start - s._pinPush < C && !fe && 0 < s.end && (r = s.end - s.start, l !== ne && l !== x || Ga(y) || (h += r * (1 - s.progress)), l === ie && (b += r));
                            if (C += h, M += h, Se._pinPush = b, P && h && ((r = {})[ge.a] = "+=" + h, x && (r[ge.p] = "-=" + Ee()), je.set([P, O], r)), ie) r = ab(ie), o = ge === Xe, i = Ee(), X = parseFloat(B(ge.a)) + b, !g && 1 < M && ((ve ? We : be).style["overflow-" + ge.a] = "scroll"), Vb(ie, L, r), R = Yb(ie), n = wt(ie, !0), c = me && I(be, o ? Le : Xe)(), oe && ((V = [oe + ge.os2, z + b + xt]).t = L, (S = oe === vt ? eb(ie, ge) + z + b : 0) && V.push(ge.d, S + xt), Ct(V), me && Ee(J)), me && ((a = {
                                top: n.top + (o ? i - C : c) + xt,
                                left: n.left + (o ? c : i - C) + xt,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[ft] = a.maxWidth = Math.ceil(n.width) + xt, a[dt] = a.maxHeight = Math.ceil(n.height) + xt, a[mt] = a[mt + ht] = a[mt + pt] = a[mt + bt] = a[mt + gt] = "0", a[vt] = r[vt], a[vt + ht] = r[vt + ht], a[vt + pt] = r[vt + pt], a[vt + bt] = r[vt + bt], a[vt + gt] = r[vt + gt], Y = function _copyState(e, t, r) {
                                for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                                return i.t = e.t, i
                            }(F, a, ue)), T ? (u = T._initted, tt(1), T.render(T.duration(), !0, !0), j = B(ge.a) - X + z + b, z !== j && Y.splice(Y.length - 2, 2), T.render(0, !0, !0), u || T.invalidate(), tt(0)) : j = z;
                            else if (ne && Ee() && !fe)
                                for (n = ne.parentNode; n && n !== We;) n._pinOffset && (C -= n._pinOffset, M -= n._pinOffset), n = n.parentNode;
                            f && f.forEach(function(e) {
                                return e.revert(!1)
                            }), Se.start = C, Se.end = M, k = E = Ee(), fe || (k < J && Ee(J), Se.scroll.rec = 0), Se.revert(!1), W && Se.isActive && Ee(C + z * q), Ze = 0, T && he && (T._initted || U) && T.progress() !== U && T.progress(U, !0).render(T.time(), !0, !0), q === Se.progress && !fe || (T && !he && T.totalProgress(q, !0), Se.progress = q, Se.update(0, 0, 1)), ie && oe && (L._pinOffset = Math.round(Se.progress * j)), te && te(Se)
                        }
                }, Se.getVelocity = function() {
                    return (Ee() - E) / (st() - Ue) * 1e3 || 0
                }, Se.endAnimation = function() {
                    Ka(Se.callbackAnimation), T && (K ? K.progress(1) : T.paused() ? he || Ka(T, Se.direction < 0, 1) : Ka(T, T.reversed()))
                }, Se.labelToScroll = function(e) {
                    return T && T.labels && (C || Se.refresh() || C) + T.labels[e] / T.duration() * z || 0
                }, Se.getTrailing = function(t) {
                    var e = Tt.indexOf(Se),
                        r = 0 < Se.direction ? Tt.slice(0, e).reverse() : Tt.slice(e + 1);
                    return (Ea(t) ? r.filter(function(e) {
                        return e.vars.preventOverlaps === t
                    }) : r).filter(function(e) {
                        return 0 < Se.direction ? e.end <= C : e.start >= M
                    })
                }, Se.update = function(e, t, r) {
                    if (!fe || r || e) {
                        var n, i, o, a, s, l, c, u = Se.scroll(),
                            f = e ? 0 : (u - C) / z,
                            d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                            p = Se.progress;
                        if (t && (E = k, k = fe ? Ee() : u, ce && (N = G, G = T && !he ? T.totalProgress() : d)), se && !d && ie && !Ze && !at && lt && C < u + (u - E) / (st() - Ue) * se && (d = 1e-4), d !== p && Se.enabled) {
                            if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Se.direction = p < d ? 1 : -1, Se.progress = d, a && !Ze && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i], c = T && ("complete" === o || "reset" === o || o in T))), pe && (s || c) && (c || re || !T) && (Fa(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function(e) {
                                    return e.endAnimation()
                                })), he || (!K || Ze || at ? T && T.totalProgress(d, !!Ze) : ((fe || ot && ot !== Se) && K.render(K._dp._time - K._start), K.resetTo ? K.resetTo("totalProgress", d, T._tTime / T._tDur) : (K.vars.totalProgress = d, K.invalidate().restart()))), ie)
                                if (e && oe && (L.style[oe + ge.os2] = y), me) {
                                    if (a) {
                                        if (l = !e && p < d && u < M + 1 && u + 1 >= Ca(be, ge), ue)
                                            if (e || !n && !l) bc(ie, L);
                                            else {
                                                var g = wt(ie, !0),
                                                    h = u - C;
                                                bc(ie, We, g.top + (ge === Xe ? h : 0) + xt, g.left + (ge === Xe ? 0 : h) + xt)
                                            } Ct(n || l ? Y : R), j !== z && d < 1 && n || m(X + (1 !== d || l ? 0 : j))
                                    }
                                } else m(va(X + j * d));
                            !ce || v.tween || Ze || at || W.restart(!0), Q && (s || le && d && (d < 1 || !rt)) && qe(Q.targets).forEach(function(e) {
                                return e.classList[n || le ? "add" : "remove"](Q.className)
                            }), !$ || he || e || $(Se), a && !Ze ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()), $ && $(Se)), !s && rt || (ee && s && La(Se, ee), ye[i] && La(Se, ye[i]), le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0), s || ye[i = 1 === d ? 1 : 3] && La(Se, ye[i])), de && !n && Math.abs(Se.getVelocity()) > (Ga(de) ? de : 2500) && (Ka(Se.callbackAnimation), K ? K.progress(1) : Ka(T, !d, 1))) : he && $ && !Ze && $(Se)
                        }
                        if (S) {
                            var b = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
                            w(b + (A._isFlipped ? 1 : 0)), S(b)
                        }
                        Z && Z(-u / fe.duration() * (fe._caScrollDist || 0))
                    }
                }, Se.enable = function(e, t) {
                    Se.enabled || (Se.enabled = !0, kb(be, "resize", yb), kb(ve ? Ne : be, "scroll", xb), _e && kb(ScrollTrigger, "refreshInit", _e), !1 !== e && (Se.progress = q = 0, k = E = g = Ee()), !1 !== t && Se.refresh())
                }, Se.getTween = function(e) {
                    return e && v ? v.tween : K
                }, Se.setPositions = function(e, t) {
                    ie && (X += e - C, j += t - e - z), Se.start = C = e, Se.end = M = t, z = t - e, Se.update()
                }, Se.disable = function(e, t) {
                    if (Se.enabled && (!1 !== e && Se.revert(), Se.enabled = Se.isActive = !1, t || K && K.pause(), J = 0, n && (n.uncache = 1), _e && lb(ScrollTrigger, "refreshInit", _e), W && (W.pause(), v.tween && v.tween.kill() && (v.tween = 0)), !ve)) {
                        for (var r = Tt.length; r--;)
                            if (Tt[r].scroller === be && Tt[r] !== Se) return;
                        lb(be, "resize", yb), lb(be, "scroll", xb)
                    }
                }, Se.kill = function(e, t) {
                    Se.disable(e, t), K && !t && K.kill(), a && delete kt[a];
                    var r = Tt.indexOf(Se);
                    0 <= r && Tt.splice(r, 1), r === Qe && 0 < Et && Qe--, r = 0, Tt.forEach(function(e) {
                        return e.scroller === Se.scroller && (r = 1)
                    }), r || (Se.scroll.rec = 0), T && (T.scrollTrigger = null, e && T.render(-1), t || T.kill()), P && [P, O, A, D].forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), ie && (n && (n.uncache = 1), r = 0, Tt.forEach(function(e) {
                        return e.pin === ie && r++
                    }), r || (n.spacer = 0)), _.onKill && _.onKill(Se)
                }, Se.enable(!1, !1), o && o(Se), T && T.add && !z ? je.delayedCall(.01, function() {
                    return C || M || Se.refresh()
                }) && (z = .01) && (C = M = 0) : Se.refresh()
            } else this.update = this.refresh = this.kill = ua
        }, ScrollTrigger.register = function register(e) {
            return o || (je = e || xa(), wa() && window.document && ScrollTrigger.enable(), o = ct), o
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e) _t[t] = e[t];
            return _t
        }, ScrollTrigger.disable = function disable(t, r) {
            ct = 0, Tt.forEach(function(e) {
                return e[r ? "kill" : "disable"](t)
            }), lb(Ve, "wheel", xb), lb(Ne, "scroll", xb), clearInterval(l), lb(Ne, "touchcancel", ua), lb(We, "touchstart", ua), jb(lb, Ne, "pointerdown,touchstart,mousedown", sa), jb(lb, Ne, "pointerup,touchend,mouseup", ta), s.kill(), Da(lb);
            for (var e = 0; e < ze.length; e += 3) mb(lb, ze[e], ze[e + 1]), mb(lb, ze[e], ze[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (Ve = window, Ne = document, Ke = Ne.documentElement, We = Ne.body, je && (qe = je.utils.toArray, Je = je.utils.clamp, tt = je.core.suppressOverwrites || ua, je.core.globals("ScrollTrigger", ScrollTrigger), We)) {
                ct = 1, ScrollTrigger.isTouch = Ve.matchMedia && Ve.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ve || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, a = [Ve, Ne, Ke, We], m = Ve.innerHeight, S = Ve.innerWidth, w.register(je), kb(Ne, "scroll", xb);
                var e, t, r = We.style,
                    n = r.borderTopStyle;
                for (r.borderTopStyle = "solid", e = wt(We), Xe.m = Math.round(e.top + Xe.sc()) || 0, Le.m = Math.round(e.left + Le.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), l = setInterval(wb, 250), je.delayedCall(.5, function() {
                        return at = 0
                    }), kb(Ne, "touchcancel", ua), kb(We, "touchstart", ua), jb(kb, Ne, "pointerdown,touchstart,mousedown", sa), jb(kb, Ne, "pointerup,touchend,mouseup", ta), c = je.utils.checkPrefix("transform"), Q.push(c), o = st(), s = je.delayedCall(.2, q).pause(), g = [Ne, "visibilitychange", function() {
                        var e = Ve.innerWidth,
                            t = Ve.innerHeight;
                        Ne.hidden ? (f = e, d = t) : f === e && d === t || yb()
                    }, Ne, "DOMContentLoaded", q, Ve, "load", q, Ve, "resize", yb], Da(kb), Tt.forEach(function(e) {
                        return e.enable(0, 1)
                    }), t = 0; t < ze.length; t += 3) mb(lb, ze[t], ze[t + 1]), mb(lb, ze[t], ze[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (rt = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(l) || (l = t) && setInterval(wb, t), "ignoreMobileResize" in e && (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Da(lb) || Da(kb, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = H(e),
                n = ze.indexOf(r),
                i = ya(r);
            ~n && ze.splice(n, i ? 6 : 2), t && (i ? Ye.unshift(Ve, t, We, t, Ke, t) : Ye.unshift(r, t))
        }, ScrollTrigger.matchMedia = function matchMedia(e) {
            var t, r, n, i, o;
            for (r in e) n = X.indexOf(r), i = e[r], "all" === (nt = r) ? i() : (t = Ve.matchMedia(r)) && (t.matches && (o = i()), ~n ? (X[n + 1] = Ja(X[n + 1], i), X[n + 2] = Ja(X[n + 2], o)) : (n = X.length, X.push(r, i, o), t.addListener ? t.addListener(Eb) : t.addEventListener("change", Eb)), X[n + 3] = t.matches), nt = 0;
            return X
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
            e || (X.length = 0), 0 <= (e = X.indexOf(e)) && X.splice(e, 4)
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (Ea(e) ? H(e) : e).getBoundingClientRect(),
                i = n[r ? ft : dt] * t || 0;
            return r ? 0 < n.right - i && n.left + i < Ve.innerWidth : 0 < n.bottom - i && n.top + i < Ve.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            Ea(e) && (e = H(e));
            var n = e.getBoundingClientRect(),
                i = n[r ? ft : dt],
                o = null == t ? i / 2 : t in F ? F[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + o) / Ve.innerWidth : (n.top + o) / Ve.innerHeight
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        o || ScrollTrigger.register(je) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    re.version = "3.10.2", re.saveStyles = function(e) {
        return e ? qe(e).forEach(function(e) {
            if (e && e.style) {
                var t = V.indexOf(e);
                0 <= t && V.splice(t, 5), V.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), je.core.getCache(e), nt)
            }
        }) : V
    }, re.revert = function(e, t) {
        return N(!e, t)
    }, re.create = function(e, t) {
        return new re(e, t)
    }, re.refresh = function(e) {
        return e ? yb() : (o || re.register()) && q(!0)
    }, re.update = Z, re.clearScrollMemory = Kb, re.maxScroll = function(e, t) {
        return Ca(e, t ? Le : Xe)
    }, re.getScrollFunc = function(e, t) {
        return I(H(e), t ? Le : Xe)
    }, re.getById = function(e) {
        return kt[e]
    }, re.getAll = function() {
        return Tt.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, re.isScrolling = function() {
        return !!lt
    }, re.snapDirectional = hb, re.addEventListener = function(e, t) {
        var r = R[e] || (R[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, re.removeEventListener = function(e, t) {
        var r = R[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, re.batch = function(e, t) {
        function On(e, t) {
            var r = [],
                n = [],
                i = je.delayedCall(o, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
        }
        var r, n = [],
            i = {},
            o = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) i[r] = "on" === r.substr(0, 2) && Fa(t[r]) && "onRefreshInit" !== r ? On(0, t[r]) : t[r];
        return Fa(a) && (a = a(), kb(re, "refresh", function() {
            return a = t.batchMax()
        })), qe(e).forEach(function(e) {
            var t = {};
            for (r in i) t[r] = i[r];
            t.trigger = e, n.push(re.create(t))
        }), n
    };

    function ec(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function fc(e) {
        !0 === e ? (We.style.removeProperty("touch-action"), Ke.style.removeProperty("touch-action")) : We.style.touchAction = Ke.style.touchAction = e ? "pan-" + e : "none"
    }

    function gc(e) {
        function po() {
            return d = st()
        }

        function qo() {
            return n = !1
        }

        function to() {
            r = Ca(Ke, Xe), m = Je(0, r), f && (v = Je(0, Ca(Ke, Le))), o = W
        }

        function Bo() {
            to(), s.isActive() && s.vars.scrollY > r && s.resetTo("scrollY", Ca(Ke, Xe))
        }
        Ha(e) || (e = {}), e.preventDefault = e.isNormalizer = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var t, r, n, o, s, a, l, c, u, f = e.normalizeScrollX,
            i = e.momentum,
            d = 0,
            p = I(Ke, Xe),
            g = I(Ke, Le),
            h = 1,
            b = Fa(i) ? function() {
                return i(t)
            } : function() {
                return i || 2.8
            },
            v = ua,
            m = ua,
            y = re.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
        return e.ignoreCheck = function(e) {
            return y && "touchmove" === e.type && function ignoreDrag() {
                if (n) return requestAnimationFrame(qo), !0;
                n = !0
            }() || 1 < h || t.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function() {
            var e = h;
            h = Ve.visualViewport && Ve.visualViewport.scale || 1, s.pause(), e !== h && fc(1 < h || !f && "x"), n = !1, a = g(), l = p(), to(), o = W
        }, e.onRelease = e.onGestureStart = function(e, t) {
            var r = e.event,
                n = r.changedTouches ? r.changedTouches[0] : r;
            if (!t || Math.abs(e.x - e.startX) <= 3 && Math.abs(e.y - e.startY) <= 3) je.delayedCall(.05, function() {
                if (300 < st() - d && !r.defaultPrevented)
                    if (r.target.click) r.target.click();
                    else if (c.createEvent) {
                    var e = c.createEvent("MouseEvents");
                    e.initMouseEvent("click", !0, !0, Ve, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), r.target.dispatchEvent(e)
                }
            }), u.restart(!0);
            else {
                var i, o, a = b();
                f && (o = (i = g()) + .05 * a * -e.velocityX / .227 / h, a *= ec(g, i, o, Ca(Ke, Le)), s.vars.scrollX = v(o)), o = (i = p()) + .05 * a * -e.velocityY / .227 / h, a *= ec(p, i, o, Ca(Ke, Xe)), s.vars.scrollY = m(o), s.invalidate().duration(a).play(.01)
            }
        }, e.onWheel = function() {
            return s._ts && s.pause()
        }, e.onChange = function(e, t, r, n, i) {
            W !== o && to(), t && f && g(v(n[2] === t ? a + (e.startX - e.x) / h : g() + t - n[1])), r && p(m(i[2] === r ? l + (e.startY - e.y) / h : p() + r - i[1])), Z()
        }, e.onEnable = function(e) {
            fc(!f && "x"), kb(Ve, "resize", Bo), e.target.addEventListener("click", po, {
                capture: !0
            })
        }, e.onDisable = function(e) {
            fc(!0), lb(Ve, "resize", Bo), lb(e.target, "click", po)
        }, t = new w(e), c = t.target.ownerDocument || Ne, u = t._dc, s = je.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: u.vars.onComplete
        }), t
    }
    re.sort = function(e) {
        return Tt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, re.observe = function(e) {
        return new w(e)
    }, re.normalizeScroll = function(e) {
        if (void 0 === e) return b;
        if (!0 === e && b) return b.enable();
        var t = e instanceof w;
        return b && (!1 === e || t && e !== b) && b.kill(), e && !t && (e = gc(e)), b = e && e.enable()
    }, re.core = {
        _getVelocityProp: J,
        _scrollers: ze,
        _proxies: Ye,
        bridge: {
            ss: function ss() {
                lt || j("scrollStart"), lt = st()
            },
            ref: function ref() {
                return Ze
            }
        }
    }, xa() && je.registerPlugin(re), e.ScrollTrigger = re, e.default = re;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});