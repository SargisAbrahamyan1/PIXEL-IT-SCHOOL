! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t || self).Swup = e()
}(this, function() {
    const t = function(t) {
            let {
                hash: e
            } = void 0 === t ? {} : t;
            return location.pathname + location.search + (e ? location.hash : "")
        },
        e = function(e, n) {
            void 0 === e && (e = null), void 0 === n && (n = {}), e = e || t({
                hash: !0
            });
            const i = {
                ...history.state,
                url: e,
                random: Math.random(),
                source: "swup",
                ...n
            };
            history.replaceState(i, "", e)
        },
        n = new WeakMap;

    function i(t, e, i, s) {
        if (!t && !n.has(e)) return !1;
        const o = n.get(e) ?? new WeakMap;
        n.set(e, o);
        const r = o.get(i) ?? new Set;
        o.set(i, r);
        const a = r.has(s);
        return t ? r.add(s) : r.delete(s), a && t
    }
    const s = (t, e, n, s) => {
            const o = new AbortController;
            return function(t, e, n, s = {}) {
                const {
                    signal: o,
                    base: r = document
                } = s;
                if (o?.aborted) return;
                const {
                    once: a,
                    ...l
                } = s, c = r instanceof Document ? r.documentElement : r, u = Boolean("object" == typeof s ? s.capture : s), h = s => {
                    const o = function(t, e) {
                        let n = t.target;
                        if (n instanceof Text && (n = n.parentElement), n instanceof Element && t.currentTarget instanceof Element) {
                            const i = n.closest(e);
                            if (i && t.currentTarget.contains(i)) return i
                        }
                    }(s, t);
                    if (o) {
                        const t = Object.assign(s, {
                            delegateTarget: o
                        });
                        n.call(c, t), a && (c.removeEventListener(e, h, l), i(!1, c, n, d))
                    }
                }, d = JSON.stringify({
                    selector: t,
                    type: e,
                    capture: u
                });
                i(!0, c, n, d) || c.addEventListener(e, h, l), o?.addEventListener("abort", () => {
                    i(!1, c, n, d)
                })
            }(t, e, n, s), {
                destroy: () => o.abort()
            }
        },
        o = function(t, e) {
            return void 0 === e && (e = document), e.querySelector(t)
        },
        r = function(t, e) {
            return void 0 === e && (e = document), Array.from(e.querySelectorAll(t))
        },
        a = t => window.CSS && window.CSS.escape ? CSS.escape(t) : t,
        l = t => 1e3 * Number(t.slice(0, -1).replace(",", "."));
    class c extends URL {
        constructor(t, e) {
            void 0 === e && (e = document.baseURI), super(t.toString(), e)
        }
        get url() {
            return this.pathname + this.search
        }
        static fromElement(t) {
            const e = t.getAttribute("href") || t.getAttribute("xlink:href");
            return new c(e)
        }
        static fromUrl(t) {
            return new c(t)
        }
    }
    const u = t => /^to-/.test(t) || ["is-changing", "is-rendering", "is-popstate"].includes(t),
        h = () => {
            const t = document.documentElement.className.split(" ").filter(u);
            document.documentElement.classList.remove(...t)
        };
    class d {
        constructor(t) {
            this.pages = {}, this.last = null, this.swup = void 0, this.swup = t
        }
        getCacheUrl(t) {
            return this.swup.resolveUrl(c.fromUrl(t).url)
        }
        cacheUrl(t) {
            t.url = this.getCacheUrl(t.url), t.url in this.pages == 0 && (this.pages[t.url] = t), t.responseURL = this.getCacheUrl(t.responseURL), this.last = this.pages[t.url], this.swup.log(`Cache (${Object.keys(this.pages).length})`, this.pages)
        }
        getPage(t) {
            return t = this.getCacheUrl(t), this.pages[t]
        }
        getCurrentPage() {
            return this.getPage(t())
        }
        exists(t) {
            return (t = this.getCacheUrl(t)) in this.pages
        }
        empty() {
            this.pages = {}, this.last = null, this.swup.log("Cache cleared")
        }
        remove(t) {
            delete this.pages[this.getCacheUrl(t)]
        }
    }
    const p = function(t) {
            let {
                event: e,
                skipTransition: n
            } = void 0 === t ? {} : t;
            if (n) return this.triggerEvent("transitionEnd", e), this.cleanupAnimationClasses(), [Promise.resolve()];
            var i;
            i = () => {
                this.triggerEvent("animationInStart"), document.documentElement.classList.remove("is-animating")
            }, requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    i()
                })
            });
            const s = this.getAnimationPromises("in");
            return Promise.all(s).then(() => {
                this.triggerEvent("animationInDone"), this.triggerEvent("transitionEnd", e), this.cleanupAnimationClasses()
            }), s
        },
        g = t => {
            if (t && "#" === t.charAt(0) && (t = t.substring(1)), !t) return null;
            const e = decodeURIComponent(t);
            let n = document.getElementById(t) || document.getElementById(e) || o(`a[name='${a(t)}']`) || o(`a[name='${a(e)}']`);
            return n || "top" !== t || (n = document.body), n
        };
    let m = "transition",
        f = "transitionend",
        v = "animation",
        w = "animationend";

    function E(t) {
        const e = this.options.animationSelector;
        if (!1 === e) return [Promise.resolve()];
        const n = r(e, document.body);
        if (!n.length) return console.warn(`[swup] No elements found matching animationSelector \`${e}\``), [Promise.resolve()];
        const i = n.map(t => function(t) {
            const {
                type: e,
                timeout: n,
                propCount: i
            } = function(t, e) {
                void 0 === e && (e = null);
                const n = window.getComputedStyle(t),
                    i = `${m}Duration`,
                    s = `${v}Delay`,
                    o = `${v}Duration`,
                    r = n[`${m}Delay`].split(", "),
                    a = (n[i] || "").split(", "),
                    l = P(r, a),
                    c = (n[s] || "").split(", "),
                    u = (n[o] || "").split(", "),
                    h = P(c, u);
                let d = "",
                    p = 0,
                    g = 0;
                return "transition" === e ? l > 0 && (d = "transition", p = l, g = a.length) : "animation" === e ? h > 0 && (d = "animation", p = h, g = u.length) : (p = Math.max(l, h), d = p > 0 ? l > h ? "transition" : "animation" : null, g = d ? "transition" === d ? a.length : u.length : 0), {
                    type: d,
                    timeout: p,
                    propCount: g
                }
            }(t);
            if (e && n) return new Promise(s => {
                const o = "transition" === e ? f : w,
                    r = performance.now();
                let a = 0;
                const l = () => {
                        t.removeEventListener(o, c), s()
                    },
                    c = e => {
                        if (e.target === t) {
                            if (!(t => [f, w].includes(t.type))(e)) throw new Error("Not a transition or animation event.");
                            (performance.now() - r) / 1e3 < e.elapsedTime || ++a >= i && l()
                        }
                    };
                setTimeout(() => {
                    a < i && l()
                }, n + 1), t.addEventListener(o, c)
            })
        }(t)).filter(Boolean);
        return i.length ? i : (console.warn(`[swup] No CSS animation duration defined on elements matching \`${e}\``), [Promise.resolve()])
    }

    function P(t, e) {
        for (; t.length < e.length;) t = t.concat(t);
        return Math.max(...e.map((e, n) => l(e) + l(t[n])))
    }
    void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (m = "WebkitTransition", f = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (v = "WebkitAnimation", w = "webkitAnimationEnd");
    const S = function(t) {
        const e = ((t, e) => {
            let n = document.createElement("html");
            n.innerHTML = t;
            let i = [];
            e.forEach(t => {
                if (null == o(t, n)) return console.warn(`[swup] Container ${t} not found on page.`), null;
                r(t).length !== r(t, n).length && console.warn("[swup] Mismatched number of containers found on new page."), r(t).forEach((e, s) => {
                    r(t, n)[s].setAttribute("data-swup", String(i.length)), i.push(r(t, n)[s].outerHTML)
                })
            });
            const s = o("title", n)?.innerText || "",
                a = o("body", n)?.className;
            return n.innerHTML = "", n = null, {
                title: s,
                pageClass: a,
                blocks: i,
                originalContent: t
            }
        })(t.responseText, this.options.containers);
        return e ? {
            ...e,
            responseURL: t.responseURL || window.location.href
        } : (console.warn("[swup] Received page is invalid."), null)
    };

    function b(t) {
        const e = this.options.requestHeaders,
            {
                url: n
            } = t;
        return this.cache.exists(n) ? (this.triggerEvent("pageRetrievedFromCache"), Promise.resolve(this.cache.getPage(n))) : new Promise((i, s) => {
            ((t, e) => {
                const n = {
                        url: window.location.pathname + window.location.search,
                        method: "GET",
                        data: null,
                        headers: {}
                    },
                    {
                        url: i,
                        method: s,
                        headers: o,
                        data: r
                    } = {
                        ...n,
                        ...t
                    },
                    a = new XMLHttpRequest;
                a.onreadystatechange = function() {
                    4 === a.readyState && e(a)
                }, a.open(s, i, !0), Object.entries(o).forEach(t => {
                    let [e, n] = t;
                    a.setRequestHeader(e, n)
                }), a.send(r)
            })({
                ...t,
                headers: e
            }, t => {
                if (500 === t.status) return this.triggerEvent("serverError"), void s(n);
                const e = this.getPageData(t);
                if (!e || !e.blocks.length) return void s(n);
                const o = {
                    ...e,
                    url: n
                };
                this.cache.cacheUrl(o), this.triggerEvent("pageLoaded"), i(o)
            })
        })
    }
    const y = function(t) {
        let {
            event: e,
            skipTransition: n
        } = void 0 === t ? {} : t;
        const i = e instanceof PopStateEvent;
        if (n) return this.triggerEvent("animationSkipped"), [Promise.resolve()];
        this.triggerEvent("animationOutStart"), document.documentElement.classList.add("is-changing", "is-leaving", "is-animating"), i && document.documentElement.classList.add("is-popstate");
        const s = this.getAnimationPromises("out");
        return Promise.all(s).then(() => {
            this.triggerEvent("animationOutDone")
        }), s
    };

    function k(t) {
        const {
            url: e
        } = t;
        this.shouldIgnoreVisit(e) ? window.location.href = e : this.performPageLoad(t)
    }

    function U(n) {
        const {
            url: i,
            event: s,
            customTransition: o,
            history: r = "push"
        } = n ?? {}, a = s instanceof PopStateEvent, l = this.shouldSkipTransition({
            url: i,
            event: s
        });
        var c;
        this.triggerEvent("transitionStart", s), this.updateTransition(t(), i, o), null != o && document.documentElement.classList.add(`to-${c=o,String(c).toLowerCase().replace(/[\s/_.]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")||""}`);
        const u = this.leavePage({
                event: s,
                skipTransition: l
            }),
            h = this.fetchPage(n);
        if (!a) {
            const n = i + (this.scrollToElement || "");
            "replace" === r ? e(n) : function(e, n) {
                void 0 === n && (n = {});
                const i = {
                    url: e = e || t({
                        hash: !0
                    }),
                    random: Math.random(),
                    source: "swup",
                    ...n
                };
                history.pushState(i, "", e)
            }(n)
        }
        this.currentPageUrl = t(), Promise.all([h, ...u]).then(t => {
            let [e] = t;
            this.renderPage(e, {
                event: s,
                skipTransition: l
            })
        }).catch(t => {
            void 0 !== t && (this.options.skipPopStateHandling = () => (window.location = t, !0), history.go(-1))
        })
    }
    const L = function(t) {
        let {
            blocks: e,
            title: n
        } = t;
        return e.forEach((t, e) => {
            document.body.querySelector(`[data-swup="${e}"]`).outerHTML = t
        }), document.title = n, Promise.resolve()
    };

    function T(t, e) {
        const n = this._handlers[t];
        n ? n.push(e) : console.warn(`Unsupported event ${t}.`)
    }

    function C(t, e) {
        if (t && e) {
            const n = this._handlers[t];
            n.includes(e) ? this._handlers[t] = n.filter(t => t !== e) : console.warn(`Handler for event '${t}' not found.`)
        } else t ? this._handlers[t] = [] : Object.keys(this._handlers).forEach(t => {
            this._handlers[t] = []
        })
    }

    function H(t, e) {
        this._handlers[t].forEach(t => {
            try {
                t(e)
            } catch (t) {
                console.error(t)
            }
        });
        const n = new CustomEvent(`swup:${t}`, {
            detail: t
        });
        document.dispatchEvent(n)
    }
    const R = function(t) {
        if (t?.isSwupPlugin) {
            if (t.swup = this, !t._checkRequirements || t._checkRequirements()) return t._beforeMount && t._beforeMount(), t.mount(), this.plugins.push(t), this.plugins
        } else console.error("Not a swup plugin instance", t)
    };

    function A(t) {
        const e = this.findPlugin(t);
        if (e) return e.unmount(), e._afterUnmount && e._afterUnmount(), this.plugins = this.plugins.filter(t => t !== e), this.plugins;
        console.error("No such plugin", e)
    }

    function $(t) {
        return this.plugins.find(e => e === t || e.name === t)
    }
    const _ = function(n, i) {
        let {
            event: s,
            skipTransition: o
        } = void 0 === i ? {} : i;
        if (document.documentElement.classList.remove("is-leaving"), !this.isSameResolvedUrl(t(), n.url)) return;
        const {
            url: r
        } = c.fromUrl(n.responseURL);
        this.isSameResolvedUrl(t(), r) || (this.cache.cacheUrl({
            ...n,
            url: r
        }), this.currentPageUrl = t(), e(r)), o || document.documentElement.classList.add("is-rendering"), this.triggerEvent("willReplaceContent", s), this.replaceContent(n).then(() => {
            this.triggerEvent("contentReplaced", s), this.triggerEvent("pageView", s), this.options.cache || this.cache.empty(), this.enterPage({
                event: s,
                skipTransition: o
            }), this.scrollToElement = null
        })
    };

    function x(t, e, n) {
        this.transition = {
            from: t,
            to: e,
            custom: n
        }
    }

    function I(t) {
        let {
            event: e
        } = t;
        return !(!(e instanceof PopStateEvent) || this.options.animateHistoryBrowsing)
    }
    return class {
        constructor(e) {
            void 0 === e && (e = {}), this.version = "3.1.1", this._handlers = {
                animationInDone: [],
                animationInStart: [],
                animationOutDone: [],
                animationOutStart: [],
                animationSkipped: [],
                clickLink: [],
                contentReplaced: [],
                disabled: [],
                enabled: [],
                openPageInNewTab: [],
                pageLoaded: [],
                pageRetrievedFromCache: [],
                pageView: [],
                popState: [],
                samePage: [],
                samePageWithHash: [],
                serverError: [],
                transitionStart: [],
                transitionEnd: [],
                willReplaceContent: []
            }, this.scrollToElement = null, this.options = void 0, this.plugins = [], this.transition = {}, this.cache = void 0, this.currentPageUrl = t(), this.delegatedListeners = {}, this.boundPopStateHandler = void 0, this.loadPage = k, this.performPageLoad = U, this.leavePage = y, this.renderPage = _, this.replaceContent = L, this.enterPage = p, this.triggerEvent = H, this.delegateEvent = s, this.on = T, this.off = C, this.updateTransition = x, this.shouldSkipTransition = I, this.getAnimationPromises = E, this.getPageData = S, this.fetchPage = b, this.getAnchorElement = g, this.log = () => {}, this.use = R, this.unuse = A, this.findPlugin = $, this.getCurrentUrl = t, this.cleanupAnimationClasses = h, this.defaults = {
                animateHistoryBrowsing: !1,
                animationSelector: '[class*="transition-"]',
                cache: !0,
                containers: ["#swup"],
                ignoreVisit: function(t, e) {
                    let {
                        el: n
                    } = void 0 === e ? {} : e;
                    return !!n?.closest("[data-no-swup]")
                },
                linkSelector: "a[href]",
                plugins: [],
                resolveUrl: t => t,
                requestHeaders: {
                    "X-Requested-With": "swup",
                    Accept: "text/html, application/xhtml+xml"
                },
                skipPopStateHandling: t => "swup" !== t.state?.source
            }, this.options = {
                ...this.defaults,
                ...e
            }, this.boundPopStateHandler = this.popStateHandler.bind(this), this.cache = new d(this), this.enable()
        }
        enable() {
            "undefined" != typeof Promise ? (this.delegatedListeners.click = s(this.options.linkSelector, "click", this.linkClickHandler.bind(this)), window.addEventListener("popstate", this.boundPopStateHandler), ((t, e) => {
                let n = 0;
                this.options.containers.forEach(e => {
                    null == o(e, t) ? console.warn(`[swup] Container ${e} not found on page.`) : r(e).forEach((i, s) => {
                        r(e, t)[s].setAttribute("data-swup", String(n)), n++
                    })
                })
            })(document.documentElement), this.options.plugins.forEach(t => this.use(t)), e(), this.triggerEvent("enabled"), document.documentElement.classList.add("swup-enabled"), this.triggerEvent("pageView")) : console.warn("Promise is not supported")
        }
        destroy() {
            this.delegatedListeners.click.destroy(), window.removeEventListener("popstate", this.boundPopStateHandler), this.cache.empty(), this.options.plugins.forEach(t => {
                this.unuse(t)
            }), r("[data-swup]").forEach(t => {
                t.removeAttribute("data-swup")
            }), this.off(), this.triggerEvent("disabled"), document.documentElement.classList.remove("swup-enabled")
        }
        shouldIgnoreVisit(t, e) {
            let {
                el: n,
                event: i
            } = void 0 === e ? {} : e;
            const {
                origin: s,
                url: o,
                hash: r
            } = c.fromUrl(t);
            return s !== window.location.origin || !(!n || !this.triggerWillOpenNewWindow(n)) || !!this.options.ignoreVisit(o + r, {
                el: n,
                event: i
            })
        }
        linkClickHandler(e) {
            const n = e.delegateTarget,
                {
                    href: i,
                    url: s,
                    hash: o
                } = c.fromElement(n);
            if (this.shouldIgnoreVisit(i, {
                    el: n,
                    event: e
                })) return;
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return void this.triggerEvent("openPageInNewTab", e);
            if (0 !== e.button) return;
            if (this.triggerEvent("clickLink", e), e.preventDefault(), !s || s === t()) return void this.handleLinkToSamePage(s, o, e);
            if (this.isSameResolvedUrl(s, t())) return;
            this.scrollToElement = o || null;
            const r = n.getAttribute("data-swup-transition") || void 0;
            let a;
            const l = n.getAttribute("data-swup-history");
            l && ["push", "replace"].includes(l) && (a = l), this.performPageLoad({
                url: s,
                customTransition: r,
                history: a
            })
        }
        handleLinkToSamePage(t, n, i) {
            if (n) {
                if (this.triggerEvent("samePageWithHash", i), !g(n)) return console.warn(`Element for offset not found (#${n})`);
                e(t + n)
            } else this.triggerEvent("samePage", i)
        }
        triggerWillOpenNewWindow(t) {
            return !!t.matches('[download], [target="_blank"]')
        }
        popStateHandler(e) {
            if (this.options.skipPopStateHandling(e)) return;
            if (this.isSameResolvedUrl(t(), this.currentPageUrl)) return;
            const n = e.state?.url ?? location.href;
            if (this.shouldIgnoreVisit(n, {
                    event: e
                })) return;
            const {
                url: i,
                hash: s
            } = c.fromUrl(n);
            s ? this.scrollToElement = s : e.preventDefault(), this.triggerEvent("popState", e), this.options.animateHistoryBrowsing || (document.documentElement.classList.remove("is-animating"), h()), this.performPageLoad({
                url: i,
                event: e
            })
        }
        resolveUrl(t) {
            if ("function" != typeof this.options.resolveUrl) return console.warn("[swup] options.resolveUrl expects a callback function."), t;
            const e = this.options.resolveUrl(t);
            return e && "string" == typeof e ? e.startsWith("//") || e.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t) : e : (console.warn("[swup] options.resolveUrl needs to return a url"), t)
        }
        isSameResolvedUrl(t, e) {
            return this.resolveUrl(t) === this.resolveUrl(e)
        }
    }
});
//# sourceMappingURL=Swup.umd.js.map