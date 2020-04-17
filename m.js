var gacode = document.getElementById('GACode').value;
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', gacode, 'auto');
ga('send', 'pageview');
(function(h, o, t, j, a, r) {
    h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments)
    };
    h._hjSettings = {
        hjid: 714968,
        hjsv: 6
    };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv='); /*!jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license*/
! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.1",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                    return a === b
                }, h, !0), l = ta(function(a) {
                    return I(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                } return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                } return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return J(a, "nextSibling")
        },
        prev: function(a) {
            return J(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    };

    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function(a) {
        return Q.then(a)["catch"](function(a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? r.readyWait++ : r.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) S(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        T = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function U() {
        this.expando = r.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }

    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = Z(c)
                } catch (e) {}
                W.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return W.hasData(a) || V.hasData(a)
        },
        data: function(a, b, c) {
            return W.access(a, b, c)
        },
        removeData: function(a, b) {
            W.remove(a, b)
        },
        _data: function(a, b, c) {
            return V.access(a, b, c)
        },
        _removeData: function(a, b) {
            V.remove(a, b)
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                W.set(this, a)
            }) : S(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;
                    if (c = $(f, a), void 0 !== c) return c
                } else this.each(function() {
                    W.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                W.remove(this, a)
            })
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"],
        ca = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function ea(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var fa = {};

    function ga(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }

    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ha(this, !0)
        },
        hide: function() {
            return ha(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i,
        ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ka = /^$|\/(?:java|ecma)script/i,
        la = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;

    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }

    function na(a, b) {
        for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }
    var oa = /<|&#?\w+;/;

    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (oa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
            k = 0;
            while (f = g[k++]) ka.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement,
        ra = /^key/,
        sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() {
        return !0
    }

    function va() {
        return !1
    }

    function wa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(K) || [""], j = b.length;
                while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)
                    if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    } return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== wa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === wa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return xa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        za = /<script|<style|<link/i,
        Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ba = /^true\/(.*)/,
        Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }

    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(ya, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
                else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ja(this, a, !0)
        },
        remove: function(a) {
            return Ja(this, a)
        },
        text: function(a) {
            return S(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ia(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/,
        La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        Ma = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();

    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Oa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ra = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = d.createElement("div").style;

    function Ua(a) {
        if (a in Ta) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Sa.length;
        while (c--)
            if (a = Sa[c] + b, a in Ta) return a
    }

    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }

    function Xa(a, b, c) {
        var d, e = !0,
            f = Ma(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function() {
                    return Xa(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Ma(a),
                    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }), r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }
    r.Tween = Ya, Ya.prototype = {
        constructor: Ya,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this
        }
    }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
        ab = /queueHooks$/;

    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }

    function cb() {
        return a.setTimeout(function() {
            Za = void 0
        }), Za = r.now()
    }

    function db(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ca(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], _a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ha([a], !0), m.done(function() {
                p || ha([a]), V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0,
            g = hb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Za || cb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(hb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return ea(c.elem, a, aa.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b)
            },
            prefilters: [fb],
            prefilter: function(a, b) {
                b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
            }
        }), r.speed = function(a, b, c) {
            var e = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function() {
                r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
            }, e
        }, r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = hb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: db("show"),
            slideUp: db("hide"),
            slideToggle: db("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            r.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Za = void 0
        }, r.fx.timer = function(a) {
            r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
        }, r.fx.interval = 13, r.fx.start = function() {
            $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
        }, r.fx.stop = function() {
            a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), ib = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });

    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }

    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        } return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function(b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                }
            }).get()
        }
    });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Ob = {
            0: 200,
            1223: 204
        },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || qa
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return S(this, function(a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function(a, c) {
            if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
});
! function(t, n) {
    "object" == typeof exports ? module.exports = exports = n() : "function" == typeof define && define.amd ? define([], n) : t.CryptoJS = n()
}(this, function() {
    var t = t || function(t, n) {
        var i = Object.create || function() {
                function t() {}
                return function(n) {
                    var i;
                    return t.prototype = n, i = new t, t.prototype = null, i
                }
            }(),
            e = {},
            r = e.lib = {},
            o = r.Base = function() {
                return {
                    extend: function(t) {
                        var n = i(this);
                        return t && n.mixIn(t), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
                            n.$super.init.apply(this, arguments)
                        }), n.init.prototype = n, n.$super = this, n
                    },
                    create: function() {
                        var t = this.extend();
                        return t.init.apply(t, arguments), t
                    },
                    init: function() {},
                    mixIn: function(t) {
                        for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
                        t.hasOwnProperty("toString") && (this.toString = t.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                }
            }(),
            s = r.WordArray = o.extend({
                init: function(t, i) {
                    t = this.words = t || [], i != n ? this.sigBytes = i : this.sigBytes = 4 * t.length
                },
                toString: function(t) {
                    return (t || c).stringify(this)
                },
                concat: function(t) {
                    var n = this.words,
                        i = t.words,
                        e = this.sigBytes,
                        r = t.sigBytes;
                    if (this.clamp(), e % 4)
                        for (var o = 0; o < r; o++) {
                            var s = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            n[e + o >>> 2] |= s << 24 - (e + o) % 4 * 8
                        } else
                            for (var o = 0; o < r; o += 4) n[e + o >>> 2] = i[o >>> 2];
                    return this.sigBytes += r, this
                },
                clamp: function() {
                    var n = this.words,
                        i = this.sigBytes;
                    n[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, n.length = t.ceil(i / 4)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t.words = this.words.slice(0), t
                },
                random: function(n) {
                    for (var i, e = [], r = function(n) {
                            var n = n,
                                i = 987654321,
                                e = 4294967295;
                            return function() {
                                i = 36969 * (65535 & i) + (i >> 16) & e, n = 18e3 * (65535 & n) + (n >> 16) & e;
                                var r = (i << 16) + n & e;
                                return r /= 4294967296, r += .5, r * (t.random() > .5 ? 1 : -1)
                            }
                        }, o = 0; o < n; o += 4) {
                        var a = r(4294967296 * (i || t.random()));
                        i = 987654071 * a(), e.push(4294967296 * a() | 0)
                    }
                    return new s.init(e, n)
                }
            }),
            a = e.enc = {},
            c = a.Hex = {
                stringify: function(t) {
                    for (var n = t.words, i = t.sigBytes, e = [], r = 0; r < i; r++) {
                        var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16))
                    }
                    return e.join("")
                },
                parse: function(t) {
                    for (var n = t.length, i = [], e = 0; e < n; e += 2) i[e >>> 3] |= parseInt(t.substr(e, 2), 16) << 24 - e % 8 * 4;
                    return new s.init(i, n / 2)
                }
            },
            u = a.Latin1 = {
                stringify: function(t) {
                    for (var n = t.words, i = t.sigBytes, e = [], r = 0; r < i; r++) {
                        var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        e.push(String.fromCharCode(o))
                    }
                    return e.join("")
                },
                parse: function(t) {
                    for (var n = t.length, i = [], e = 0; e < n; e++) i[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
                    return new s.init(i, n)
                }
            },
            f = a.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(u.stringify(t)))
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(t) {
                    return u.parse(unescape(encodeURIComponent(t)))
                }
            },
            h = r.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new s.init, this._nDataBytes = 0
                },
                _append: function(t) {
                    "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                },
                _process: function(n) {
                    var i = this._data,
                        e = i.words,
                        r = i.sigBytes,
                        o = this.blockSize,
                        a = 4 * o,
                        c = r / a;
                    c = n ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0);
                    var u = c * o,
                        f = t.min(4 * u, r);
                    if (u) {
                        for (var h = 0; h < u; h += o) this._doProcessBlock(e, h);
                        var p = e.splice(0, u);
                        i.sigBytes -= f
                    }
                    return new s.init(p, f)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._data = this._data.clone(), t
                },
                _minBufferSize: 0
            }),
            p = (r.Hasher = h.extend({
                cfg: o.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t), this.reset()
                },
                reset: function() {
                    h.reset.call(this), this._doReset()
                },
                update: function(t) {
                    return this._append(t), this._process(), this
                },
                finalize: function(t) {
                    t && this._append(t);
                    var n = this._doFinalize();
                    return n
                },
                blockSize: 16,
                _createHelper: function(t) {
                    return function(n, i) {
                        return new t.init(i).finalize(n)
                    }
                },
                _createHmacHelper: function(t) {
                    return function(n, i) {
                        return new p.HMAC.init(t, i).finalize(n)
                    }
                }
            }), e.algo = {});
        return e
    }(Math);
    return t
});
! function(r, e) {
    "object" == typeof exports ? module.exports = exports = e(require("./core.min")) : "function" == typeof define && define.amd ? define(["./core.min"], e) : e(r.CryptoJS)
}(this, function(r) {
    return function(e) {
        function n(r, e, n, t, o, a, i) {
            var s = r + (e & n | ~e & t) + o + i;
            return (s << a | s >>> 32 - a) + e
        }

        function t(r, e, n, t, o, a, i) {
            var s = r + (e & t | n & ~t) + o + i;
            return (s << a | s >>> 32 - a) + e
        }

        function o(r, e, n, t, o, a, i) {
            var s = r + (e ^ n ^ t) + o + i;
            return (s << a | s >>> 32 - a) + e
        }

        function a(r, e, n, t, o, a, i) {
            var s = r + (n ^ (e | ~t)) + o + i;
            return (s << a | s >>> 32 - a) + e
        }
        var i = r,
            s = i.lib,
            c = s.WordArray,
            f = s.Hasher,
            h = i.algo,
            u = [];
        ! function() {
            for (var r = 0; r < 64; r++) u[r] = 4294967296 * e.abs(e.sin(r + 1)) | 0
        }();
        var v = h.MD5 = f.extend({
            _doReset: function() {
                this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(r, e) {
                for (var i = 0; i < 16; i++) {
                    var s = e + i,
                        c = r[s];
                    r[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                }
                var f = this._hash.words,
                    h = r[e + 0],
                    v = r[e + 1],
                    d = r[e + 2],
                    l = r[e + 3],
                    _ = r[e + 4],
                    p = r[e + 5],
                    y = r[e + 6],
                    m = r[e + 7],
                    D = r[e + 8],
                    H = r[e + 9],
                    M = r[e + 10],
                    g = r[e + 11],
                    w = r[e + 12],
                    x = r[e + 13],
                    B = r[e + 14],
                    b = r[e + 15],
                    j = f[0],
                    k = f[1],
                    q = f[2],
                    z = f[3];
                j = n(j, k, q, z, h, 7, u[0]), z = n(z, j, k, q, v, 12, u[1]), q = n(q, z, j, k, d, 17, u[2]), k = n(k, q, z, j, l, 22, u[3]), j = n(j, k, q, z, _, 7, u[4]), z = n(z, j, k, q, p, 12, u[5]), q = n(q, z, j, k, y, 17, u[6]), k = n(k, q, z, j, m, 22, u[7]), j = n(j, k, q, z, D, 7, u[8]), z = n(z, j, k, q, H, 12, u[9]), q = n(q, z, j, k, M, 17, u[10]), k = n(k, q, z, j, g, 22, u[11]), j = n(j, k, q, z, w, 7, u[12]), z = n(z, j, k, q, x, 12, u[13]), q = n(q, z, j, k, B, 17, u[14]), k = n(k, q, z, j, b, 22, u[15]), j = t(j, k, q, z, v, 5, u[16]), z = t(z, j, k, q, y, 9, u[17]), q = t(q, z, j, k, g, 14, u[18]), k = t(k, q, z, j, h, 20, u[19]), j = t(j, k, q, z, p, 5, u[20]), z = t(z, j, k, q, M, 9, u[21]), q = t(q, z, j, k, b, 14, u[22]), k = t(k, q, z, j, _, 20, u[23]), j = t(j, k, q, z, H, 5, u[24]), z = t(z, j, k, q, B, 9, u[25]), q = t(q, z, j, k, l, 14, u[26]), k = t(k, q, z, j, D, 20, u[27]), j = t(j, k, q, z, x, 5, u[28]), z = t(z, j, k, q, d, 9, u[29]), q = t(q, z, j, k, m, 14, u[30]), k = t(k, q, z, j, w, 20, u[31]), j = o(j, k, q, z, p, 4, u[32]), z = o(z, j, k, q, D, 11, u[33]), q = o(q, z, j, k, g, 16, u[34]), k = o(k, q, z, j, B, 23, u[35]), j = o(j, k, q, z, v, 4, u[36]), z = o(z, j, k, q, _, 11, u[37]), q = o(q, z, j, k, m, 16, u[38]), k = o(k, q, z, j, M, 23, u[39]), j = o(j, k, q, z, x, 4, u[40]), z = o(z, j, k, q, h, 11, u[41]), q = o(q, z, j, k, l, 16, u[42]), k = o(k, q, z, j, y, 23, u[43]), j = o(j, k, q, z, H, 4, u[44]), z = o(z, j, k, q, w, 11, u[45]), q = o(q, z, j, k, b, 16, u[46]), k = o(k, q, z, j, d, 23, u[47]), j = a(j, k, q, z, h, 6, u[48]), z = a(z, j, k, q, m, 10, u[49]), q = a(q, z, j, k, B, 15, u[50]), k = a(k, q, z, j, p, 21, u[51]), j = a(j, k, q, z, w, 6, u[52]), z = a(z, j, k, q, l, 10, u[53]), q = a(q, z, j, k, M, 15, u[54]), k = a(k, q, z, j, v, 21, u[55]), j = a(j, k, q, z, D, 6, u[56]), z = a(z, j, k, q, b, 10, u[57]), q = a(q, z, j, k, y, 15, u[58]), k = a(k, q, z, j, x, 21, u[59]), j = a(j, k, q, z, _, 6, u[60]), z = a(z, j, k, q, g, 10, u[61]), q = a(q, z, j, k, d, 15, u[62]), k = a(k, q, z, j, H, 21, u[63]), f[0] = f[0] + j | 0, f[1] = f[1] + k | 0, f[2] = f[2] + q | 0, f[3] = f[3] + z | 0
            },
            _doFinalize: function() {
                var r = this._data,
                    n = r.words,
                    t = 8 * this._nDataBytes,
                    o = 8 * r.sigBytes;
                n[o >>> 5] |= 128 << 24 - o % 32;
                var a = e.floor(t / 4294967296),
                    i = t;
                n[(o + 64 >>> 9 << 4) + 15] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[(o + 64 >>> 9 << 4) + 14] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), r.sigBytes = 4 * (n.length + 1), this._process();
                for (var s = this._hash, c = s.words, f = 0; f < 4; f++) {
                    var h = c[f];
                    c[f] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8)
                }
                return s
            },
            clone: function() {
                var r = f.clone.call(this);
                return r._hash = this._hash.clone(), r
            }
        });
        i.MD5 = f._createHelper(v), i.HmacMD5 = f._createHmacHelper(v)
    }(Math), r.MD5
});
! function() {
    "use strict";

    function t(t) {
        t ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0, this.blocks = f) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
    }
    var h = "object" == typeof window ? window : {},
        s = !h.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
    s && (h = global);
    var i = !h.JS_SHA1_NO_COMMON_JS && "object" == typeof module && module.exports,
        e = "function" == typeof define && define.amd,
        r = "0123456789abcdef".split(""),
        o = [-2147483648, 8388608, 32768, 128],
        n = [24, 16, 8, 0],
        a = ["hex", "array", "digest", "arrayBuffer"],
        f = [],
        u = function(h) {
            return function(s) {
                return new t(!0).update(s)[h]()
            }
        },
        c = function() {
            var h = u("hex");
            s && (h = p(h)), h.create = function() {
                return new t
            }, h.update = function(t) {
                return h.create().update(t)
            };
            for (var i = 0; i < a.length; ++i) {
                var e = a[i];
                h[e] = u(e)
            }
            return h
        },
        p = function(t) {
            var h = require("crypto"),
                s = require("buffer").Buffer,
                i = function(i) {
                    if ("string" == typeof i) return h.createHash("sha1").update(i, "utf8").digest("hex");
                    if (i.constructor === ArrayBuffer) i = new Uint8Array(i);
                    else if (void 0 === i.length) return t(i);
                    return h.createHash("sha1").update(new s(i)).digest("hex")
                };
            return i
        };
    t.prototype.update = function(t) {
        if (!this.finalized) {
            var s = "string" != typeof t;
            s && t.constructor === h.ArrayBuffer && (t = new Uint8Array(t));
            for (var i, e, r = 0, o = t.length || 0, a = this.blocks; o > r;) {
                if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), s)
                    for (e = this.start; o > r && 64 > e; ++r) a[e >> 2] |= t[r] << n[3 & e++];
                else
                    for (e = this.start; o > r && 64 > e; ++r) i = t.charCodeAt(r), 128 > i ? a[e >> 2] |= i << n[3 & e++] : 2048 > i ? (a[e >> 2] |= (192 | i >> 6) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]) : 55296 > i || i >= 57344 ? (a[e >> 2] |= (224 | i >> 12) << n[3 & e++], a[e >> 2] |= (128 | i >> 6 & 63) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++r)), a[e >> 2] |= (240 | i >> 18) << n[3 & e++], a[e >> 2] |= (128 | i >> 12 & 63) << n[3 & e++], a[e >> 2] |= (128 | i >> 6 & 63) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]);
                this.lastByteIndex = e, this.bytes += e - this.start, e >= 64 ? (this.block = a[16], this.start = e - 64, this.hash(), this.hashed = !0) : this.start = e
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
        }
    }, t.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0;
            var t = this.blocks,
                h = this.lastByteIndex;
            t[16] = this.block, t[h >> 2] |= o[3 & h], this.block = t[16], h >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >> 29, t[15] = this.bytes << 3, this.hash()
        }
    }, t.prototype.hash = function() {
        var t, h, s, i = this.h0,
            e = this.h1,
            r = this.h2,
            o = this.h3,
            n = this.h4,
            a = this.blocks;
        for (h = 16; 80 > h; ++h) s = a[h - 3] ^ a[h - 8] ^ a[h - 14] ^ a[h - 16], a[h] = s << 1 | s >>> 31;
        for (h = 0; 20 > h; h += 5) t = e & r | ~e & o, s = i << 5 | i >>> 27, n = s + t + n + 1518500249 + a[h] << 0, e = e << 30 | e >>> 2, t = i & e | ~i & r, s = n << 5 | n >>> 27, o = s + t + o + 1518500249 + a[h + 1] << 0, i = i << 30 | i >>> 2, t = n & i | ~n & e, s = o << 5 | o >>> 27, r = s + t + r + 1518500249 + a[h + 2] << 0, n = n << 30 | n >>> 2, t = o & n | ~o & i, s = r << 5 | r >>> 27, e = s + t + e + 1518500249 + a[h + 3] << 0, o = o << 30 | o >>> 2, t = r & o | ~r & n, s = e << 5 | e >>> 27, i = s + t + i + 1518500249 + a[h + 4] << 0, r = r << 30 | r >>> 2;
        for (; 40 > h; h += 5) t = e ^ r ^ o, s = i << 5 | i >>> 27, n = s + t + n + 1859775393 + a[h] << 0, e = e << 30 | e >>> 2, t = i ^ e ^ r, s = n << 5 | n >>> 27, o = s + t + o + 1859775393 + a[h + 1] << 0, i = i << 30 | i >>> 2, t = n ^ i ^ e, s = o << 5 | o >>> 27, r = s + t + r + 1859775393 + a[h + 2] << 0, n = n << 30 | n >>> 2, t = o ^ n ^ i, s = r << 5 | r >>> 27, e = s + t + e + 1859775393 + a[h + 3] << 0, o = o << 30 | o >>> 2, t = r ^ o ^ n, s = e << 5 | e >>> 27, i = s + t + i + 1859775393 + a[h + 4] << 0, r = r << 30 | r >>> 2;
        for (; 60 > h; h += 5) t = e & r | e & o | r & o, s = i << 5 | i >>> 27, n = s + t + n - 1894007588 + a[h] << 0, e = e << 30 | e >>> 2, t = i & e | i & r | e & r, s = n << 5 | n >>> 27, o = s + t + o - 1894007588 + a[h + 1] << 0, i = i << 30 | i >>> 2, t = n & i | n & e | i & e, s = o << 5 | o >>> 27, r = s + t + r - 1894007588 + a[h + 2] << 0, n = n << 30 | n >>> 2, t = o & n | o & i | n & i, s = r << 5 | r >>> 27, e = s + t + e - 1894007588 + a[h + 3] << 0, o = o << 30 | o >>> 2, t = r & o | r & n | o & n, s = e << 5 | e >>> 27, i = s + t + i - 1894007588 + a[h + 4] << 0, r = r << 30 | r >>> 2;
        for (; 80 > h; h += 5) t = e ^ r ^ o, s = i << 5 | i >>> 27, n = s + t + n - 899497514 + a[h] << 0, e = e << 30 | e >>> 2, t = i ^ e ^ r, s = n << 5 | n >>> 27, o = s + t + o - 899497514 + a[h + 1] << 0, i = i << 30 | i >>> 2, t = n ^ i ^ e, s = o << 5 | o >>> 27, r = s + t + r - 899497514 + a[h + 2] << 0, n = n << 30 | n >>> 2, t = o ^ n ^ i, s = r << 5 | r >>> 27, e = s + t + e - 899497514 + a[h + 3] << 0, o = o << 30 | o >>> 2, t = r ^ o ^ n, s = e << 5 | e >>> 27, i = s + t + i - 899497514 + a[h + 4] << 0, r = r << 30 | r >>> 2;
        this.h0 = this.h0 + i << 0, this.h1 = this.h1 + e << 0, this.h2 = this.h2 + r << 0, this.h3 = this.h3 + o << 0, this.h4 = this.h4 + n << 0
    }, t.prototype.hex = function() {
        this.finalize();
        var t = this.h0,
            h = this.h1,
            s = this.h2,
            i = this.h3,
            e = this.h4;
        return r[t >> 28 & 15] + r[t >> 24 & 15] + r[t >> 20 & 15] + r[t >> 16 & 15] + r[t >> 12 & 15] + r[t >> 8 & 15] + r[t >> 4 & 15] + r[15 & t] + r[h >> 28 & 15] + r[h >> 24 & 15] + r[h >> 20 & 15] + r[h >> 16 & 15] + r[h >> 12 & 15] + r[h >> 8 & 15] + r[h >> 4 & 15] + r[15 & h] + r[s >> 28 & 15] + r[s >> 24 & 15] + r[s >> 20 & 15] + r[s >> 16 & 15] + r[s >> 12 & 15] + r[s >> 8 & 15] + r[s >> 4 & 15] + r[15 & s] + r[i >> 28 & 15] + r[i >> 24 & 15] + r[i >> 20 & 15] + r[i >> 16 & 15] + r[i >> 12 & 15] + r[i >> 8 & 15] + r[i >> 4 & 15] + r[15 & i] + r[e >> 28 & 15] + r[e >> 24 & 15] + r[e >> 20 & 15] + r[e >> 16 & 15] + r[e >> 12 & 15] + r[e >> 8 & 15] + r[e >> 4 & 15] + r[15 & e]
    }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function() {
        this.finalize();
        var t = this.h0,
            h = this.h1,
            s = this.h2,
            i = this.h3,
            e = this.h4;
        return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
    }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function() {
        this.finalize();
        var t = new ArrayBuffer(20),
            h = new DataView(t);
        return h.setUint32(0, this.h0), h.setUint32(4, this.h1), h.setUint32(8, this.h2), h.setUint32(12, this.h3), h.setUint32(16, this.h4), t
    };
    var y = c();
    i ? module.exports = y : (h.sha1 = y, e && define(function() {
        return y
    }))
}();
! function(e, t, i) {
    "use strict";
    "function" == typeof define && define.amd ? define(i) : "undefined" != typeof module && module.exports ? module.exports = i() : t.exports ? t.exports = i() : t[e] = i()
}("Fingerprint2", this, function() {
    "use strict";
    var e = function(t) {
        if (!(this instanceof e)) return new e(t);
        var i = {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: !0,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        };
        this.options = this.extend(t, i), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
    };
    return e.prototype = {
        extend: function(e, t) {
            if (null == e) return t;
            for (var i in e) null != e[i] && t[i] !== e[i] && (t[i] = e[i]);
            return t
        },
        get: function(e) {
            var t = [];
            t = this.userAgentKey(t), t = this.languageKey(t), t = this.colorDepthKey(t), t = this.pixelRatioKey(t), t = this.hardwareConcurrencyKey(t), t = this.screenResolutionKey(t), t = this.availableScreenResolutionKey(t), t = this.timezoneOffsetKey(t), t = this.sessionStorageKey(t), t = this.localStorageKey(t), t = this.indexedDbKey(t), t = this.addBehaviorKey(t), t = this.openDatabaseKey(t), t = this.cpuClassKey(t), t = this.platformKey(t), t = this.doNotTrackKey(t), t = this.pluginsKey(t), t = this.canvasKey(t), t = this.webglKey(t), t = this.adBlockKey(t), t = this.hasLiedLanguagesKey(t), t = this.hasLiedResolutionKey(t), t = this.hasLiedOsKey(t), t = this.hasLiedBrowserKey(t), t = this.touchSupportKey(t), t = this.customEntropyFunction(t);
            var i = this;
            this.fontsKey(t, function(t) {
                var a = [];
                i.each(t, function(e) {
                    var t = e.value;
                    "undefined" != typeof e.value.join && (t = e.value.join(";")), a.push(t)
                });
                var r = i.x64hash128(a.join("~~~"), 31);
                return e(r, t)
            })
        },
        customEntropyFunction: function(e) {
            return "function" == typeof this.options.customFunction && e.push({
                key: "custom",
                value: this.options.customFunction()
            }), e
        },
        userAgentKey: function(e) {
            return this.options.excludeUserAgent || e.push({
                key: "user_agent",
                value: this.getUserAgent()
            }), e
        },
        getUserAgent: function() {
            return navigator.userAgent
        },
        languageKey: function(e) {
            return this.options.excludeLanguage || e.push({
                key: "language",
                value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
            }), e
        },
        colorDepthKey: function(e) {
            return this.options.excludeColorDepth || e.push({
                key: "color_depth",
                value: screen.colorDepth || -1
            }), e
        },
        pixelRatioKey: function(e) {
            return this.options.excludePixelRatio || e.push({
                key: "pixel_ratio",
                value: this.getPixelRatio()
            }), e
        },
        getPixelRatio: function() {
            return window.devicePixelRatio || ""
        },
        screenResolutionKey: function(e) {
            return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
        },
        getScreenResolution: function(e) {
            var t;
            return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], "undefined" != typeof t && e.push({
                key: "resolution",
                value: t
            }), e
        },
        availableScreenResolutionKey: function(e) {
            return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
        },
        getAvailableScreenResolution: function(e) {
            var t;
            return screen.availWidth && screen.availHeight && (t = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), "undefined" != typeof t && e.push({
                key: "available_resolution",
                value: t
            }), e
        },
        timezoneOffsetKey: function(e) {
            return this.options.excludeTimezoneOffset || e.push({
                key: "timezone_offset",
                value: (new Date).getTimezoneOffset()
            }), e
        },
        sessionStorageKey: function(e) {
            return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
                key: "session_storage",
                value: 1
            }), e
        },
        localStorageKey: function(e) {
            return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
                key: "local_storage",
                value: 1
            }), e
        },
        indexedDbKey: function(e) {
            return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
                key: "indexed_db",
                value: 1
            }), e
        },
        addBehaviorKey: function(e) {
            return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.push({
                key: "add_behavior",
                value: 1
            }), e
        },
        openDatabaseKey: function(e) {
            return !this.options.excludeOpenDatabase && window.openDatabase && e.push({
                key: "open_database",
                value: 1
            }), e
        },
        cpuClassKey: function(e) {
            return this.options.excludeCpuClass || e.push({
                key: "cpu_class",
                value: this.getNavigatorCpuClass()
            }), e
        },
        platformKey: function(e) {
            return this.options.excludePlatform || e.push({
                key: "navigator_platform",
                value: this.getNavigatorPlatform()
            }), e
        },
        doNotTrackKey: function(e) {
            return this.options.excludeDoNotTrack || e.push({
                key: "do_not_track",
                value: this.getDoNotTrack()
            }), e
        },
        canvasKey: function(e) {
            return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
                key: "canvas",
                value: this.getCanvasFp()
            }), e
        },
        webglKey: function(e) {
            return this.options.excludeWebGL ? e : this.isWebGlSupported() ? (e.push({
                key: "webgl",
                value: this.getWebglFp()
            }), e) : e
        },
        adBlockKey: function(e) {
            return this.options.excludeAdBlock || e.push({
                key: "adblock",
                value: this.getAdBlock()
            }), e
        },
        hasLiedLanguagesKey: function(e) {
            return this.options.excludeHasLiedLanguages || e.push({
                key: "has_lied_languages",
                value: this.getHasLiedLanguages()
            }), e
        },
        hasLiedResolutionKey: function(e) {
            return this.options.excludeHasLiedResolution || e.push({
                key: "has_lied_resolution",
                value: this.getHasLiedResolution()
            }), e
        },
        hasLiedOsKey: function(e) {
            return this.options.excludeHasLiedOs || e.push({
                key: "has_lied_os",
                value: this.getHasLiedOs()
            }), e
        },
        hasLiedBrowserKey: function(e) {
            return this.options.excludeHasLiedBrowser || e.push({
                key: "has_lied_browser",
                value: this.getHasLiedBrowser()
            }), e
        },
        fontsKey: function(e, t) {
            return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
        },
        flashFontsKey: function(e, t) {
            return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function(i) {
                e.push({
                    key: "swf_fonts",
                    value: i.join(";")
                }), t(e)
            }) : t(e)
        },
        jsFontsKey: function(e, t) {
            var i = this;
            return setTimeout(function() {
                var a = ["monospace", "sans-serif", "serif"],
                    r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                    n = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                i.options.extendedJsFonts && (r = r.concat(n)), r = r.concat(i.options.userDefinedFonts);
                var o = "mmmmmmmmmmlli",
                    s = "72px",
                    l = document.getElementsByTagName("body")[0],
                    h = document.createElement("div"),
                    u = document.createElement("div"),
                    c = {},
                    d = {},
                    g = function() {
                        var e = document.createElement("span");
                        return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = s, e.style.lineHeight = "normal", e.innerHTML = o, e
                    },
                    p = function(e, t) {
                        var i = g();
                        return i.style.fontFamily = "'" + e + "'," + t, i
                    },
                    f = function() {
                        for (var e = [], t = 0, i = a.length; t < i; t++) {
                            var r = g();
                            r.style.fontFamily = a[t], h.appendChild(r), e.push(r)
                        }
                        return e
                    },
                    m = function() {
                        for (var e = {}, t = 0, i = r.length; t < i; t++) {
                            for (var n = [], o = 0, s = a.length; o < s; o++) {
                                var l = p(r[t], a[o]);
                                u.appendChild(l), n.push(l)
                            }
                            e[r[t]] = n
                        }
                        return e
                    },
                    T = function(e) {
                        for (var t = !1, i = 0; i < a.length; i++)
                            if (t = e[i].offsetWidth !== c[a[i]] || e[i].offsetHeight !== d[a[i]]) return t;
                        return t
                    },
                    S = f();
                l.appendChild(h);
                for (var x = 0, v = a.length; x < v; x++) c[a[x]] = S[x].offsetWidth, d[a[x]] = S[x].offsetHeight;
                var E = m();
                l.appendChild(u);
                for (var M = [], A = 0, y = r.length; A < y; A++) T(E[r[A]]) && M.push(r[A]);
                l.removeChild(u), l.removeChild(h), e.push({
                    key: "js_fonts",
                    value: M
                }), t(e)
            }, 1)
        },
        pluginsKey: function(e) {
            return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.push({
                key: "ie_plugins",
                value: this.getIEPlugins()
            }) : e.push({
                key: "regular_plugins",
                value: this.getRegularPlugins()
            })), e
        },
        getRegularPlugins: function() {
            for (var e = [], t = 0, i = navigator.plugins.length; t < i; t++) e.push(navigator.plugins[t]);
            return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
            })), this.map(e, function(e) {
                var t = this.map(e, function(e) {
                    return [e.type, e.suffixes].join("~")
                }).join(",");
                return [e.name, e.description, t].join("::")
            }, this)
        },
        getIEPlugins: function() {
            var e = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                e = this.map(t, function(e) {
                    try {
                        return new ActiveXObject(e), e
                    } catch (t) {
                        return null
                    }
                })
            }
            return navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
        },
        pluginsShouldBeSorted: function() {
            for (var e = !1, t = 0, i = this.options.sortPluginsFor.length; t < i; t++) {
                var a = this.options.sortPluginsFor[t];
                if (navigator.userAgent.match(a)) {
                    e = !0;
                    break
                }
            }
            return e
        },
        touchSupportKey: function(e) {
            return this.options.excludeTouchSupport || e.push({
                key: "touch_support",
                value: this.getTouchSupport()
            }), e
        },
        hardwareConcurrencyKey: function(e) {
            return this.options.excludeHardwareConcurrency || e.push({
                key: "hardware_concurrency",
                value: this.getHardwareConcurrency()
            }), e
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        },
        hasIndexedDB: function() {
            try {
                return !!window.indexedDB
            } catch (e) {
                return !0
            }
        },
        getHardwareConcurrency: function() {
            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
        },
        getNavigatorCpuClass: function() {
            return navigator.cpuClass ? navigator.cpuClass : "unknown"
        },
        getNavigatorPlatform: function() {
            return navigator.platform ? navigator.platform : "unknown"
        },
        getDoNotTrack: function() {
            return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
        },
        getTouchSupport: function() {
            var e = 0,
                t = !1;
            "undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"), t = !0
            } catch (i) {}
            var a = "ontouchstart" in window;
            return [e, t, a]
        },
        getCanvasFp: function() {
            var e = [],
                t = document.createElement("canvas");
            t.width = 2e3, t.height = 200, t.style.display = "inline";
            var i = t.getContext("2d");
            return i.rect(0, 0, 10, 10), i.rect(2, 2, 6, 6), e.push("canvas winding:" + (i.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")), i.textBaseline = "alphabetic", i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123", i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), i.fillStyle = "rgba(102, 204, 0, 0.2)", i.font = "18pt Arial", i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), i.globalCompositeOperation = "multiply", i.fillStyle = "rgb(255,0,255)", i.beginPath(), i.arc(50, 50, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(0,255,255)", i.beginPath(), i.arc(100, 50, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(255,255,0)", i.beginPath(), i.arc(75, 100, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(255,0,255)", i.arc(75, 75, 75, 0, 2 * Math.PI, !0), i.arc(75, 75, 25, 0, 2 * Math.PI, !0), i.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
        },
        getWebglFp: function() {
            var e, t = function(t) {
                    return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                },
                i = function(e) {
                    var t, i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return i ? (t = e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
                };
            if (e = this.getWebglCanvas(), !e) return null;
            var a = [],
                r = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
                n = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
                o = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, o);
            var s = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW), o.itemSize = 3, o.numItems = 3;
            var l = e.createProgram(),
                h = e.createShader(e.VERTEX_SHADER);
            e.shaderSource(h, r), e.compileShader(h);
            var u = e.createShader(e.FRAGMENT_SHADER);
            e.shaderSource(u, n), e.compileShader(u), e.attachShader(l, h), e.attachShader(l, u), e.linkProgram(l), e.useProgram(l), l.vertexPosAttrib = e.getAttribLocation(l, "attrVertex"), l.offsetUniform = e.getUniformLocation(l, "uniformOffset"), e.enableVertexAttribArray(l.vertexPosArray), e.vertexAttribPointer(l.vertexPosAttrib, o.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(l.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, o.numItems), null != e.canvas && a.push(e.canvas.toDataURL()), a.push("extensions:" + e.getSupportedExtensions().join(";")), a.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), a.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), a.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), a.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), a.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), a.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), a.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), a.push("webgl max anisotropy:" + i(e)), a.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), a.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), a.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), a.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), a.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), a.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), a.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), a.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), a.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), a.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), a.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), a.push("webgl red bits:" + e.getParameter(e.RED_BITS)), a.push("webgl renderer:" + e.getParameter(e.RENDERER)), a.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), a.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), a.push("webgl vendor:" + e.getParameter(e.VENDOR)), a.push("webgl version:" + e.getParameter(e.VERSION));
            try {
                var c = e.getExtension("WEBGL_debug_renderer_info");
                c && (a.push("webgl unmasked vendor:" + e.getParameter(c.UNMASKED_VENDOR_WEBGL)), a.push("webgl unmasked renderer:" + e.getParameter(c.UNMASKED_RENDERER_WEBGL)))
            } catch (d) {}
            return e.getShaderPrecisionFormat ? (a.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), a.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), a.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), a.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), a.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), a.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), a.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), a.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), a.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), a.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), a.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), a.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), a.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), a.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), a.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), a.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), a.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), a.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), a.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), a.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), a.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), a.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), a.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), a.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), a.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), a.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), a.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), a.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), a.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), a.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), a.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), a.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), a.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), a.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), a.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), a.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), a.join("~")) : a.join("~")
        },
        getAdBlock: function() {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;", e.className = "adsbox";
            var t = !1;
            try {
                document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
            } catch (i) {
                t = !1
            }
            return t
        },
        getHasLiedLanguages: function() {
            if ("undefined" != typeof navigator.languages) try {
                var e = navigator.languages[0].substr(0, 2);
                if (e !== navigator.language.substr(0, 2)) return !0
            } catch (t) {
                return !0
            }
            return !1
        },
        getHasLiedResolution: function() {
            return screen.width < screen.availWidth || screen.height < screen.availHeight
        },
        getHasLiedOs: function() {
            var e, t = navigator.userAgent.toLowerCase(),
                i = navigator.oscpu,
                a = navigator.platform.toLowerCase();
            e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
            var r;
            if (r = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, r && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
            if ("undefined" != typeof i) {
                if (i = i.toLowerCase(), i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                if (i.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                if (i.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                if (0 === i.indexOf("win") && 0 === i.indexOf("linux") && i.indexOf("mac") >= 0 && "other" !== e) return !0
            }
            return a.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((a.indexOf("linux") >= 0 || a.indexOf("android") >= 0 || a.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((a.indexOf("mac") >= 0 || a.indexOf("ipad") >= 0 || a.indexOf("ipod") >= 0 || a.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || (0 === a.indexOf("win") && 0 === a.indexOf("linux") && a.indexOf("mac") >= 0 && "other" !== e || "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
        },
        getHasLiedBrowser: function() {
            var e, t = navigator.userAgent.toLowerCase(),
                i = navigator.productSub;
            if (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other", ("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== i) return !0;
            var a = eval.toString().length;
            if (37 === a && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
            if (39 === a && "Internet Explorer" !== e && "Other" !== e) return !0;
            if (33 === a && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
            var r;
            try {
                throw "a"
            } catch (n) {
                try {
                    n.toSource(), r = !0
                } catch (o) {
                    r = !1
                }
            }
            return !(!r || "Firefox" === e || "Other" === e)
        },
        isCanvasSupported: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        },
        isWebGlSupported: function() {
            if (!this.isCanvasSupported()) return !1;
            var e, t = document.createElement("canvas");
            try {
                e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
            } catch (i) {
                e = !1
            }
            return !!window.WebGLRenderingContext && !!e
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        },
        hasSwfObjectLoaded: function() {
            return "undefined" != typeof window.swfobject
        },
        hasMinFlashInstalled: function() {
            return swfobject.hasFlashPlayerVersion("9.0.0")
        },
        addFlashDivNode: function() {
            var e = document.createElement("div");
            e.setAttribute("id", this.options.swfContainerId), document.body.appendChild(e)
        },
        loadSwfAndDetectFonts: function(e) {
            var t = "___fp_swf_loaded";
            window[t] = function(t) {
                e(t)
            };
            var i = this.options.swfContainerId;
            this.addFlashDivNode();
            var a = {
                    onReady: t
                },
                r = {
                    allowScriptAccess: "always",
                    menu: "false"
                };
            swfobject.embedSWF(this.options.swfPath, i, "1", "1", "9.0.0", !1, a, r, {})
        },
        getWebglCanvas: function() {
            var e = document.createElement("canvas"),
                t = null;
            try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch (i) {}
            return t || (t = null), t
        },
        each: function(e, t, i) {
            if (null !== e)
                if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, i);
                else if (e.length === +e.length) {
                for (var a = 0, r = e.length; a < r; a++)
                    if (t.call(i, e[a], a, e) === {}) return
            } else
                for (var n in e)
                    if (e.hasOwnProperty(n) && t.call(i, e[n], n, e) === {}) return
        },
        map: function(e, t, i) {
            var a = [];
            return null == e ? a : this.nativeMap && e.map === this.nativeMap ? e.map(t, i) : (this.each(e, function(e, r, n) {
                a[a.length] = t.call(i, e, r, n)
            }), a)
        },
        x64Add: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var i = [0, 0, 0, 0];
            return i[3] += e[3] + t[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += e[2] + t[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += e[1] + t[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += e[0] + t[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
        },
        x64Multiply: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var i = [0, 0, 0, 0];
            return i[3] += e[3] * t[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += e[2] * t[3], i[1] += i[2] >>> 16, i[2] &= 65535, i[2] += e[3] * t[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += e[1] * t[3], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += e[2] * t[2], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += e[3] * t[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
        },
        x64Rotl: function(e, t) {
            return t %= 64, 32 === t ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
        },
        x64LeftShift: function(e, t) {
            return t %= 64, 0 === t ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        },
        x64Xor: function(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        },
        x64Fmix: function(e) {
            return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), e = this.x64Xor(e, [0, e[0] >>> 1])
        },
        x64hash128: function(e, t) {
            e = e || "", t = t || 0;
            for (var i = e.length % 16, a = e.length - i, r = [0, t], n = [0, t], o = [0, 0], s = [0, 0], l = [2277735313, 289559509], h = [1291169091, 658871167], u = 0; u < a; u += 16) o = [255 & e.charCodeAt(u + 4) | (255 & e.charCodeAt(u + 5)) << 8 | (255 & e.charCodeAt(u + 6)) << 16 | (255 & e.charCodeAt(u + 7)) << 24, 255 & e.charCodeAt(u) | (255 & e.charCodeAt(u + 1)) << 8 | (255 & e.charCodeAt(u + 2)) << 16 | (255 & e.charCodeAt(u + 3)) << 24], s = [255 & e.charCodeAt(u + 12) | (255 & e.charCodeAt(u + 13)) << 8 | (255 & e.charCodeAt(u + 14)) << 16 | (255 & e.charCodeAt(u + 15)) << 24, 255 & e.charCodeAt(u + 8) | (255 & e.charCodeAt(u + 9)) << 8 | (255 & e.charCodeAt(u + 10)) << 16 | (255 & e.charCodeAt(u + 11)) << 24], o = this.x64Multiply(o, l), o = this.x64Rotl(o, 31), o = this.x64Multiply(o, h), r = this.x64Xor(r, o), r = this.x64Rotl(r, 27), r = this.x64Add(r, n), r = this.x64Add(this.x64Multiply(r, [0, 5]), [0, 1390208809]), s = this.x64Multiply(s, h), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, l), n = this.x64Xor(n, s), n = this.x64Rotl(n, 31), n = this.x64Add(n, r), n = this.x64Add(this.x64Multiply(n, [0, 5]), [0, 944331445]);
            switch (o = [0, 0], s = [0, 0], i) {
                case 15:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 14)], 48));
                case 14:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 13)], 40));
                case 13:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 12)], 32));
                case 12:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 11)], 24));
                case 11:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 10)], 16));
                case 10:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 9)], 8));
                case 9:
                    s = this.x64Xor(s, [0, e.charCodeAt(u + 8)]), s = this.x64Multiply(s, h), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, l), n = this.x64Xor(n, s);
                case 8:
                    o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 7)], 56));
                case 7:
                    o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 6)], 48));
                case 6:
                    o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 5)], 40));
                case 5:
                    o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 4)], 32));
                case 4:
                    o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 3)], 24));
                case 3:
                    o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 2)], 16));
                case 2:
                    o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 1)], 8));
                case 1:
                    o = this.x64Xor(o, [0, e.charCodeAt(u)]), o = this.x64Multiply(o, l), o = this.x64Rotl(o, 31), o = this.x64Multiply(o, h), r = this.x64Xor(r, o)
            }
            return r = this.x64Xor(r, [0, e.length]), n = this.x64Xor(n, [0, e.length]), r = this.x64Add(r, n), n = this.x64Add(n, r), r = this.x64Fmix(r), n = this.x64Fmix(n), r = this.x64Add(r, n), n = this.x64Add(n, r), ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[1] >>> 0).toString(16)).slice(-8)
        }
    }, e.VERSION = "1.5.1", e
});

function audioFingerPrinting() {
    try {
        var n = new(window.AudioContext || window.webkitAudioContext),
            t = (n.createOscillator(), n.createAnalyser(), n.createGain(), n.createScriptProcessor(4096, 1, 1), n.destination);
        return n.sampleRate.toString() + "_" + t.maxChannelCount + "_" + t.numberOfInputs + "_" + t.numberOfOutputs + "_" + t.channelCount + "_" + t.channelCountMode + "_" + t.channelInterpretation
    } catch (e) {
        return "not supported"
    }
}
(function() {
    var t, i, s;
    i = "undefined" != typeof exports && null !== exports ? exports : this, s = function(t) {
        try {
            return JSON.parse(t)
        } catch (i) {
            return !1
        }
    }, t = function() {
        function t() {
            this.names = s('[ "Latin", "Chinese", "Arabic", "Devanagari", "Cyrillic", "Bengali/Assamese", "Kana", "Gurmukhi", "Javanese", "Hangul", "Telugu", "Tamil", "Malayalam", "Burmese", "Thai", "Sundanese", "Kannada", "Gujarati", "Lao", "Odia", "Ge-ez", "Sinhala", "Armenian", "Khmer", "Greek", "Lontara", "Hebrew", "Tibetan", "Georgian", "Modern Yi", "Mongolian", "Tifinagh", "Syriac", "Thaana", "Inuktitut", "Cherokee" ]'), this.codes = s("[[76,97,116,105,110], [27721,23383], [1575,1604,1593,1585,1576,1610,1577], [2342,2375,2357,2344,2366,2327,2352,2368], [1050,1080,1088,1080,1083,1080,1094,1072], [2476,2494,2434,2482,2494,32,47,32,2437,2488,2478,2496,2479,2492,2494], [20206,21517], [2583,2625,2608,2606,2625,2582,2624], [43415,43438], [54620,44544], [3108,3142,3122,3137,3095,3137], [2980,2990,3007,2996,3021], [3374,3378,3375,3390,3379,3330], [4121,4156,4116,4154,4121,4140], [3652,3607,3618], [7070,7077,7060,7082,7059], [3221,3240,3277,3240,3233], [2711,2753,2716,2736,2750,2724,2752], [3749,3762,3751], [2825,2852,2893,2837,2867], [4877,4821,4829], [3523,3538,3458,3524,3517], [1344,1377,1397,1400,1409], [6017,6098,6040,6082,6042], [917,955,955,951,957,953,954,972], [6674,6682,6664,6673], [1488,1500,1508,1489,1497,1514], [3926,3964,3921,3851], [4325,4304,4320,4311,4323,4314,4312], [41352,41760], [6190,6179,6185,6189,6179,6191], [11612,11593,11580,11593,11599,11568,11606], [1808,1834,1825,1821,1808], [1931,1960,1928,1964,1920,1960], [5123,5316,5251,5198,5200,5222], [5091,5043,5033], [55295, 7077]]"), this.fontSize = 9, this.fontFace = "Verdana", this.extraHeigth = 15, this.results = []
        }
        return t.prototype.begin = function() {
            var t, i, s, e, h, n, r, a, d, o, p, u, g, c, l, f, w, _, m, v, x, y, b, T, k, S;
            for (b = 0, this.widths = [], this.heights = [], this.support = [], this.test_div = document.createElement("div"), document.body.appendChild(this.test_div), this.test_div.id = "WritingTest", m = this.codes, h = 0, a = m.length; a > h; h++) {
                for (i = m[h], this.height = [], this.width = [], this.div = document.createElement("div"), this.test_div.appendChild(this.div), b += 1, this.div.id = b, this.div.style.display = "inline-block", n = 0, d = i.length; d > n; n++) t = i[n], this.div.innerHTML = "<font face = '" + this.fontFace + "' size = " + this.fontSize + ">&#" + t + "</font>", this.height.push(document.getElementById(b).clientHeight), this.width.push(document.getElementById(b).clientWidth);
                this.heights.push(this.height), this.widths.push(this.width)
            }
            for (this.tw = this.widths.pop(), this.sw1 = this.tw[0], this.sw2 = this.tw[1], this.sh = this.heights.pop()[0], v = this.heights, r = 0, o = v.length; o > r; r++) {
                for (e = v[r], this.passed = 0, l = 0, p = e.length; p > l; l++)
                    if (s = e[l], s !== this.sh) {
                        this.support.push(!0), this.passed = 1;
                        break
                    } 0 === this.passed && this.support.push(!1)
            }
            for (this.writing_scripts_index = 0, x = this.widths, f = 0, u = x.length; u > f; f++) {
                for (S = x[f], w = 0, g = S.length; g > w; w++) k = S[w], this.support[this.writing_scripts_index] === !1 && k !== this.sw1 && k !== this.sw2 && (this.support[this.writing_scripts_index] = !0);
                this.writing_scripts_index += 1
            }
            for (this.res = [], this.writing_scripts_index = 0, y = this.support, _ = 0, c = y.length; c > _; _++) T = y[_], T === !0 && this.res.push(this.names[this.writing_scripts_index]), this.writing_scripts_index += 1;
            return this.test_div.remove(), this.res
        }, t
    }(), i.get_writing_scripts = function() {
        var i;
        return i = new t, this.res = i.begin()
    }
}).call(this);

function zoom() {
    return Math.round(window.devicePixelRatio * 100) + '%';
}

function base64sha1(a) {
    return window.btoa(sha1(a))
}

function getCookie(o) {
    var t = "; " + document.cookie,
        i = t.split("; " + o + "=");
    return 2 == i.length ? i.pop().split(";").shift() : void 0
}

function screenOrientation() {
    return ((window.innerHeight > window.innerWidth) ? 'potrait' : 'landscape');
}

function checkCookie() {
    var cookieEnabled = navigator.cookieEnabled;
    if (!cookieEnabled) {
        document.cookie = "testcookie";
        cookieEnabled = document.cookie.indexOf("testcookie") != -1;
    }
    if (typeof cookieEnabled === 'string') {
        if (cookieEnabled.toLowerCase() == "false") {
            return false;
        }
        return true;
    }
    if (cookieEnabled) {
        return true;
    }
    return false;
};
(function(root, factory) {
    if (typeof exports === "object") {
        module.exports = exports = factory(require("./core"));
    } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
    } else {
        factory(root.CryptoJS);
    }
}(this, function(CryptoJS) {
    (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
            function isPrime(n) {
                var sqrtN = Math.sqrt(n);
                for (var factor = 2; factor <= sqrtN; factor++) {
                    if (!(n % factor)) {
                        return false;
                    }
                }
                return true;
            }

            function getFractionalBits(n) {
                return ((n - (n | 0)) * 0x100000000) | 0;
            }
            var n = 2;
            var nPrime = 0;
            while (nPrime < 64) {
                if (isPrime(n)) {
                    if (nPrime < 8) {
                        H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                    }
                    K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
                    nPrime++;
                }
                n++;
            }
        }());
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
            _doReset: function() {
                this._hash = new WordArray.init(H.slice(0));
            },
            _doProcessBlock: function(M, offset) {
                var H = this._hash.words;
                var a = H[0];
                var b = H[1];
                var c = H[2];
                var d = H[3];
                var e = H[4];
                var f = H[5];
                var g = H[6];
                var h = H[7];
                for (var i = 0; i < 64; i++) {
                    if (i < 16) {
                        W[i] = M[offset + i] | 0;
                    } else {
                        var gamma0x = W[i - 15];
                        var gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^ ((gamma0x << 14) | (gamma0x >>> 18)) ^ (gamma0x >>> 3);
                        var gamma1x = W[i - 2];
                        var gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^ ((gamma1x << 13) | (gamma1x >>> 19)) ^ (gamma1x >>> 10);
                        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                    }
                    var ch = (e & f) ^ (~e & g);
                    var maj = (a & b) ^ (a & c) ^ (b & c);
                    var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
                    var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));
                    var t1 = h + sigma1 + ch + K[i] + W[i];
                    var t2 = sigma0 + maj;
                    h = g;
                    g = f;
                    f = e;
                    e = (d + t1) | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = (t1 + t2) | 0;
                }
                H[0] = (H[0] + a) | 0;
                H[1] = (H[1] + b) | 0;
                H[2] = (H[2] + c) | 0;
                H[3] = (H[3] + d) | 0;
                H[4] = (H[4] + e) | 0;
                H[5] = (H[5] + f) | 0;
                H[6] = (H[6] + g) | 0;
                H[7] = (H[7] + h) | 0;
            },
            _doFinalize: function() {
                var data = this._data;
                var dataWords = data.words;
                var nBitsTotal = this._nDataBytes * 8;
                var nBitsLeft = data.sigBytes * 8;
                dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
                dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
                data.sigBytes = dataWords.length * 4;
                this._process();
                return this._hash;
            },
            clone: function() {
                var clone = Hasher.clone.call(this);
                clone._hash = this._hash.clone();
                return clone;
            }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    }(Math));
    return CryptoJS.SHA256;
}));
! function(r, e) {
    "object" == typeof exports ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e(r.CryptoJS)
}(this, function(r) {
    return function() {
        function e(r, e, t) {
            for (var a = [], o = 0, i = 0; i < e; i++)
                if (i % 4) {
                    var f = t[r.charCodeAt(i - 1)] << i % 4 * 2,
                        c = t[r.charCodeAt(i)] >>> 6 - i % 4 * 2;
                    a[o >>> 2] |= (f | c) << 24 - o % 4 * 8, o++
                } return n.create(a, o)
        }
        var t = r,
            a = t.lib,
            n = a.WordArray,
            o = t.enc;
        o.Base64 = {
            stringify: function(r) {
                var e = r.words,
                    t = r.sigBytes,
                    a = this._map;
                r.clamp();
                for (var n = [], o = 0; o < t; o += 3)
                    for (var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255, f = e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, c = e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, s = i << 16 | f << 8 | c, h = 0; h < 4 && o + .75 * h < t; h++) n.push(a.charAt(s >>> 6 * (3 - h) & 63));
                var p = a.charAt(64);
                if (p)
                    for (; n.length % 4;) n.push(p);
                return n.join("")
            },
            parse: function(r) {
                var t = r.length,
                    a = this._map,
                    n = this._reverseMap;
                if (!n) {
                    n = this._reverseMap = [];
                    for (var o = 0; o < a.length; o++) n[a.charCodeAt(o)] = o
                }
                var i = a.charAt(64);
                if (i) {
                    var f = r.indexOf(i);
                    f !== -1 && (t = f)
                }
                return e(r, t, n)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }(), r.enc.Base64
});;
(function(name, context, definition) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else if (typeof define === 'function' && define.amd) {
        define(definition);
    } else {
        context[name] = definition();
    }
})('Fingerprint', this, function() {
    'use strict';
    var Fingerprint = function(options) {
        var nativeForEach, nativeMap;
        nativeForEach = Array.prototype.forEach;
        nativeMap = Array.prototype.map;
        this.each = function(obj, iterator, context) {
            if (obj === null) {
                return;
            }
            if (nativeForEach && obj.forEach === nativeForEach) {
                obj.forEach(iterator, context);
            } else if (obj.length === +obj.length) {
                for (var i = 0, l = obj.length; i < l; i++) {
                    if (iterator.call(context, obj[i], i, obj) === {}) return;
                }
            } else {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (iterator.call(context, obj[key], key, obj) === {}) return;
                    }
                }
            }
        };
        this.map = function(obj, iterator, context) {
            var results = [];
            if (obj == null) return results;
            if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
            this.each(obj, function(value, index, list) {
                results[results.length] = iterator.call(context, value, index, list);
            });
            return results;
        };
        if (typeof options == 'object') {
            this.hasher = options.hasher;
            this.screen_resolution = options.screen_resolution;
            this.screen_orientation = options.screen_orientation;
            this.canvas = options.canvas;
            this.ie_activex = options.ie_activex;
        } else if (typeof options == 'function') {
            this.hasher = options;
        }
    };
    Fingerprint.prototype = {
        get: function() {
            var keys = [];
            keys.push(navigator.userAgent);
            keys.push(navigator.language);
            keys.push(screen.colorDepth);
            if (this.screen_resolution) {
                var resolution = this.getScreenResolution();
                if (typeof resolution !== 'undefined') {
                    keys.push(this.getScreenResolution().join('x'));
                }
            }
            keys.push(new Date().getTimezoneOffset());
            keys.push(this.hasSessionStorage());
            keys.push(this.hasLocalStorage());
            keys.push(!!window.indexedDB);
            if (document.body) {
                keys.push(typeof(document.body.addBehavior));
            } else {
                keys.push(typeof undefined);
            }
            keys.push(typeof(window.openDatabase));
            keys.push(navigator.cpuClass);
            keys.push(navigator.platform);
            keys.push(navigator.doNotTrack);
            keys.push(this.getPluginsString());
            if (this.canvas && this.isCanvasSupported()) {
                keys.push(this.getCanvasFingerprint());
            }
            if (this.hasher) {
                return this.hasher(keys.join('###'), 31);
            } else {
                var hash256 = CryptoJS.SHA256(keys.join('###'));
                return hash256.toString(CryptoJS.enc.Hex);
            }
        },
        getFPData: function() {
            var data = '{';
            data = data + '"user_agent":"' + navigator.userAgent;
            data = data + '","language":"' + navigator.language;
            data = data + '","color_depth":"' + screen.colorDepth;
            if (this.screen_resolution) {
                var resolution = this.getScreenResolution();
                if (typeof resolution !== 'undefined') {
                    data = data + '","screen_resolution":"' + this.getScreenResolution().join('x');
                }
            }
            data = data + '","time_zone":"' + new Date().getTimezoneOffset();
            data = data + '","session_storage":"' + this.hasSessionStorage();
            data = data + '","local_storage":"' + this.hasLocalStorage();
            data = data + '","indexed_db":"' + !!window.indexedDB;
            if (document.body) {
                data = data + '","document_body":"' + typeof(document.body.addBehavior);
            } else {
                data = data + '","document_body":"' + typeof undefined;
            }
            data = data + '","open_database":"' + typeof(window.openDatabase);
            data = data + '","cpu_class":"' + navigator.cpuClass;
            data = data + '","platform":"' + navigator.platform;
            data = data + '","do_not_track":"' + navigator.doNotTrack;
            var plugin = this.getPluginsString();
            var encryptedWord = CryptoJS.enc.Utf8.parse(plugin);
            var encryptedPlugin = CryptoJS.enc.Base64.stringify(encryptedWord);
            data = data + '","plugin":"' + encryptedPlugin;
            if (this.canvas && this.isCanvasSupported()) {
                var canvas = this.getCanvasFingerprint();
                var hash256 = CryptoJS.SHA256(canvas);
                var canvasHash = hash256.toString(CryptoJS.enc.Base64);
                data = data + '","canvas":"' + canvasHash;
            } else {
                data = data + '","canvas":"';
            }
            data = data + '"}';
            var base64 = CryptoJS.enc.Utf8.parse(data);
            return CryptoJS.enc.Base64.stringify(base64);
        },
        murmurhash3_32_gc: function(key, seed) {
            var remainder, bytes, h1, h1b, c1, c2, k1, i;
            remainder = key.length & 3;
            bytes = key.length - remainder;
            h1 = seed;
            c1 = 0xcc9e2d51;
            c2 = 0x1b873593;
            i = 0;
            while (i < bytes) {
                k1 = ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24);
                ++i;
                k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;
                h1 ^= k1;
                h1 = (h1 << 13) | (h1 >>> 19);
                h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
                h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
            }
            k1 = 0;
            switch (remainder) {
                case 3:
                    k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
                case 2:
                    k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
                case 1:
                    k1 ^= (key.charCodeAt(i) & 0xff);
                    k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                    k1 = (k1 << 15) | (k1 >>> 17);
                    k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                    h1 ^= k1;
            }
            h1 ^= key.length;
            h1 ^= h1 >>> 16;
            h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= h1 >>> 13;
            h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
            h1 ^= h1 >>> 16;
            return h1 >>> 0;
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage;
            } catch (e) {
                return true;
            }
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage;
            } catch (e) {
                return true;
            }
        },
        isCanvasSupported: function() {
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        },
        isIE: function() {
            if (navigator.appName === 'Microsoft Internet Explorer') {
                return true;
            } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {
                return true;
            }
            return false;
        },
        getPluginsString: function() {
            if (this.isIE() && this.ie_activex) {
                return this.getIEPluginsString();
            } else {
                return this.getRegularPluginsString();
            }
        },
        getRegularPluginsString: function() {
            return this.map(navigator.plugins, function(p) {
                var mimeTypes = this.map(p, function(mt) {
                    return [mt.type, mt.suffixes].join('~');
                }).join(',');
                return [p.name, p.description, mimeTypes].join('::');
            }, this).join(';');
        },
        getIEPluginsString: function() {
            if (window.ActiveXObject) {
                var names = ['ShockwaveFlash.ShockwaveFlash', 'AcroPDF.PDF', 'PDF.PdfCtrl', 'QuickTime.QuickTime', 'rmocx.RealPlayer G2 Control', 'rmocx.RealPlayer G2 Control.1', 'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)', 'RealVideo.RealVideo(tm) ActiveX Control (32-bit)', 'RealPlayer', 'SWCtl.SWCtl', 'WMPlayer.OCX', 'AgControl.AgControl', 'Skype.Detection'];
                return this.map(names, function(name) {
                    try {
                        new ActiveXObject(name);
                        return name;
                    } catch (e) {
                        return null;
                    }
                }).join(';');
            } else {
                return "";
            }
        },
        getScreenResolution: function() {
            var resolution;
            if (this.screen_orientation) {
                resolution = (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height];
            } else {
                resolution = [screen.height, screen.width];
            }
            return resolution;
        },
        getCanvasFingerprint: function() {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-={}|[]\:"<>?;,.';
            ctx.textBaseline = "top";
            ctx.font = "14px 'Arial'";
            ctx.textBaseline = "alphabetic";
            ctx.fillStyle = "#f60";
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = "#069";
            ctx.fillText(txt, 2, 15);
            ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
            ctx.fillText(txt, 4, 17);
            return canvas.toDataURL();
        }
    };
    return Fingerprint;
});
testing = 0;
counterSMS = counterCall = counterMail = counterWA = currentRequest = currentRetry = 0;
number_only_regex = new RegExp(/^[0-1]{1}$/);
otpUrlVerify = '/otp/c/ajax/verify';
otpUrlSendSMS = '/otp/c/ajax/request-sms';
otpUrlSendCall = '/otp/c/ajax/request-call';
otpUrlSendEmail = '/otp/c/ajax/request-email';
otpUrlSendWA = '/otp/c/ajax/request-wa';
otpUrlCheckVerified = '/otp/c/ajax/isverified';
otpUrlCheckValidateStatus = '/otp/get-validation-status';
otpToken = $("#Token").val();
lastDecline = $("#LastDecline").val();
backURL = $("#BackUrl").val();
accountsURL = $("#AccountsURL").val();
tokopediaURL = $("#TokopediaURL").val();
msisdnParam = $("#MSISDN").val();
emailParam = $("#Email").val();
originalParam = $("#OriginalParam").val();
OTPType = $("#OTPType").val();
OTPTypeText = $("#OTPTypeText").val();
phoneNumberNotActiveLink = $("#PhoneNumberNotActiveLink").val();
SecondSms = $("#SecondSms").val();
SecondCall = $("#SecondCall").val();
SecondEmail = $("#SecondEmail").val();
SecondWa = $("#SecondWa").val();
MsgGeneralVerifyError = $("#msgGeneralVerifyError").val();
MsgGeneralError = $("#msgGeneralError").val();
MsgSentSMS = $("#msgSentSMS").val();
MsgSentWA = $("#msgSentWA").val();
MsgSentPhone = $("#msgSentPhone").val();
MsgSentEmail = $("#msgSentEmail").val();
MsgFillOTPFirst = $("#msgFillOTPFirst").val();
MsgFillSixOTP = $("#msgFillSixOTP").val();
IsEmailWarning = $("#IsEmailWarning").val();
IsWhatsappAvailable = $("#IsWhatsappAvailable").val();
IsRedirectParent = $("#IsRedirectParent").val();
EditProfileLink = $("#EditProfileLink").val();
ForgotPasswordUser = $("#ForgotPasswordUser").val();
CustomCOTPFallback = $("#CustomCOTPFallback").val();
ChangeMethodButton = $("#ChangeMethodButton").val();
IsPopUp = $("#IsPopUp").val();
standalone = window.navigator.standalone;
userAgent = window.navigator.userAgent.toLowerCase();
userAgentRaw = navigator.userAgent;
safari = /safari/.test(userAgent);
firefox = /firefox/.test(userAgent);
openedMethodInt = 0;
DisableRedirectLd = $("#DisableRedirectLd").val();
DisableResend = $("#DisableResend").val();
NumberofOTPDigit = parseInt($("#NumberofOTPDigit").val(), 10);
NumberofOTPDigitCurrentMethod = NumberofOTPDigit;
NumberofOTPDigitDefault = 1;
UseSingleInputforOTP = false;
SessionLD = $("#SessionLD").val();
LoadFuncURL = $("#LoadFuncURL").val();
FuncParam = $("#FuncParam").val();
var LoadFunc;
var ParamForFunc;
browserCode = lastInputCode = fingerprintData = selectedMethod = defaultMethod = '';
UIState = [];
CurrentPage = "";
actionEnable = true;
window.dataLayer = window.dataLayer || []
ChangeMethodTextStayHidden = "0"
userID = "";
signature = "";
fpID = "0";
fpData = "";
try {
    var fp = new Fingerprint({
        canvas: true,
        ie_activex: true,
        screen_resolution: true
    });
    fpID = fp.get();
    fpData = fp.getFPData();
} catch (err) {
    fpID = "-1";
    fpData = "eyJyZXN1bHQiOiJOb3QgRGV0ZWN0ZWQifQ==";
}
validate = function() {
    if (currentRequest > 0) {
        return false;
    }
    otpCodeTemp = "";
    if (userAgentRaw.match(/iPhone.*UCBrowser/) || (!standalone && !safari && !firefox)) {
        otpCodeTemp += $(".input-append input#otp__input--uc").val();
    } else {
        $("input.otp-number-input").each(function(i) {
            if ($(this).is(":visible")) {
                otpCodeTemp += $(this).val();
            }
        });
    }
    if (otpCodeTemp == "") {
        showFailedMessage(MsgFillOTPFirst);
        return false;
    }
    if (!number_only_regex.test(otpCodeTemp)) {
        showFailedMessage(MsgFillSixOTP);
        return false;
    }
    window.dataLayer.push({
        'event': 'clickOtp',
        'eventCategory': OTPTypeText,
        'eventAction': 'Click',
        'eventLabel': 'Verify ' + $('#cotp-method').val()
    });
    PushDatalayerOTP("click on button verifikasi", "click");
    if (OTPType == "123") {
        userID = getUrlVars()["user_id"]
        signature = getUrlVars()["signature"]
    }
    $.ajax({
        type: 'POST',
        url: otpUrlVerify,
        dataType: "json",
        data: {
            code: otpCodeTemp,
            tk: otpToken,
            otp_type: OTPType,
            bc: browserCode,
            msisdn: msisdnParam,
            f: fingerprintData,
            email: emailParam,
            original_param: originalParam,
            mode: openedMethodInt,
            user_id: userID,
            signature: signature
        },
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function() {
            hideFailedMessage();
            $('.btn-otp').prop("disabled", true);
            $("#confirm").prop("disabled", true);
            currentRequest++;
        },
        complete: function() {
            currentRequest--;
        },
        error: function() {
            showFailedMessage(MsgGeneralVerifyError);
            $('.btn-otp').prop("disabled", false);
            $("#confirm").prop("disabled", false);
            window.dataLayer.push({
                'event': 'clickOtp',
                'eventCategory': OTPTypeText,
                'eventAction': 'OTP Failed',
                'eventLabel': 'OTP ' + $('#cotp-method').val()
            });
            PushDatalayerOTP("click on button verifikasi", "failed verikasi otp");
        },
        success: function(response) {
            if (response.success) {
                PushDatalayerOTP("click on button verifikasi", "success verikasi otp");
                var parent = window.parent;
                if (parent && parent.postMessage) {
                    parent.postMessage(response, "*");
                }
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'OTP Success',
                    'eventLabel': 'OTP ' + $('#cotp-method').val()
                });
                if (OTPType === "13") {
                    window.dataLayer.push({
                        'event': 'clickOtp',
                        'eventCategory': OTPTypeText,
                        'eventAction': 'DID',
                        'eventLabel': response.did
                    });
                }
                appendLastDeclineParam("validate_token", response.validate_token)
                if (LoadFuncURL != "" && successFunc) {
                    if (FuncParam != "") {
                        ParamForFunc = parseFunctionParam(FuncParam);
                        ParamForFunc.validate_token = response.validate_token;
                        successFunc(ParamForFunc);
                    } else {
                        successFunc();
                    }
                    return;
                }
                if (IsRedirectParent === 'true') {
                    window.parent.location.href = lastDecline;
                } else {
                    if (DisableRedirectLd != 'true' && lastDecline != "") {
                        window.location.href = lastDecline;
                    }
                }
            } else {
                if (!response.error_message) {
                    showFailedMessage(MsgGeneralVerifyError);
                } else if (response.error_message == "COMMAND_LOGOUT") {
                    forceLogout();
                } else if ((response.error_message == "Kode Verifikasi salah.") || (response.error_message == "Wrong OTP code.")) {
                    errorCode("");
                } else if (response.error_message.indexOf("PIN") >= 0) {
                    errorCode(response.error_message);
                } else {
                    showFailedMessage(response.error_message);
                }
                if (response.pin_attempt >= response.pin_max_attempt) {
                    if (ChangeMethodButton == "1") {
                        $("#confirm").attr("onclick", "changeMethodSelect()");
                        $("#confirm").attr("type", "button");
                        $("#confirm").val("Metode Verifikasi Lain");
                        ChangeMethodTextStayHidden = "1"
                        $('.cotp__change-method').hide();
                        $("#cotp__method--pin").hide();
                    } else {
                        $("#confirm").attr("onclick", "changeMethodSMS()");
                        $("#confirm").attr("type", "button");
                        $("#confirm").val("Kirim SMS Verifikasi");
                    }
                }
                $('.btn-otp').prop("disabled", false);
                $("#confirm").prop("disabled", false);
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'OTP Failed',
                    'eventLabel': 'OTP ' + $('#cotp-method').val()
                });
                PushDatalayerOTP("click on button verifikasi", "failed verikasi otp");
            }
        },
    });
    return false;
};

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
request_sms = function() {
    var nextotp_period = $('#resend_period').val();
    if (currentRequest > 0) {
        return false;
    }
    window.dataLayer.push({
        'event': 'clickOtp',
        'eventCategory': OTPTypeText,
        'eventAction': 'Click',
        'eventLabel': 'OTP SMS'
    });
    if (OTPType == "123") {
        userID = getUrlVars()["user_id"]
        signature = getUrlVars()["signature"]
    }
    $.ajax({
        type: 'POST',
        url: otpUrlSendSMS,
        dataType: "json",
        data: {
            tk: otpToken,
            otp_type: OTPType,
            msisdn: msisdnParam,
            email: emailParam,
            original_param: originalParam,
            user_id: userID,
            signature: signature,
            number_otp_digit: NumberofOTPDigitCurrentMethod,
            fingerprint_id: fpID,
            fingerprint_data: fpData
        },
        beforeSend: function() {
            hideFailedMessage();
            $('.btn-otp').prop("disabled", true);
            currentRequest++;
        },
        complete: function() {
            $('.btn-otp').prop("disabled", false);
            currentRequest--;
        },
        error: function() {
            showFailedMessage(MsgGeneralError);
            startTimer('sms', 30);
            window.dataLayer.push({
                'event': 'clickOtp',
                'eventCategory': OTPTypeText,
                'eventAction': 'Request Failed',
                'eventLabel': 'Request OTP SMS'
            });
            PushDatalayerOTP("request otp", "failed");
        },
        success: function(response) {
            if (response.success) {
                currentRetry++;
                showMessage(MsgSentSMS);
                startTimer('sms', nextotp_period);
                if (counterCall < nextotp_period) {
                    startTimer('call', nextotp_period);
                }
                if (counterMail < nextotp_period) {
                    startTimer('mail', nextotp_period);
                }
                if (counterWA < nextotp_period) {
                    startTimer('wa', nextotp_period);
                }
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Request Success',
                    'eventLabel': 'Request OTP SMS'
                });
                PushDatalayerOTP("request otp", "success");
            } else {
                if (response.error_message) {
                    showFailedMessage(response.error_message);
                } else {
                    showFailedMessage(MsgGeneralError);
                }
                startTimer('sms', 30);
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Request Failed',
                    'eventLabel': 'Request OTP SMS'
                });
                PushDatalayerOTP("request otp", "failed");
            }
        },
    });
};
request_wa = function() {
    var nextotp_period = $('#resend_period').val();
    if (currentRequest > 0) {
        return false;
    }
    window.dataLayer.push({
        'event': 'clickOtp',
        'eventCategory': OTPTypeText,
        'eventAction': 'Click',
        'eventLabel': 'OTP WA'
    });
    if (OTPType == "123") {
        userID = getUrlVars()["user_id"]
        signature = getUrlVars()["signature"]
    }
    $.ajax({
        type: 'POST',
        url: otpUrlSendWA,
        dataType: "json",
        data: {
            tk: otpToken,
            otp_type: OTPType,
            msisdn: msisdnParam,
            email: emailParam,
            original_param: originalParam,
            user_id: userID,
            signature: signature,
            number_otp_digit: NumberofOTPDigitCurrentMethod,
            fingerprint_id: fpID,
            fingerprint_data: fpData
        },
        beforeSend: function() {
            hideFailedMessage();
            $('.btn-otp').prop("disabled", true);
            currentRequest++;
        },
        complete: function() {
            $('.btn-otp').prop("disabled", false);
            currentRequest--;
        },
        error: function() {
            showFailedMessage(MsgGeneralError);
            startTimer('wa', 30);
            window.dataLayer.push({
                'event': 'clickOtp',
                'eventCategory': OTPTypeText,
                'eventAction': 'Request Failed',
                'eventLabel': 'Request OTP WA'
            });
            PushDatalayerOTP("request otp", "failed");
        },
        success: function(response) {
            if (response.success) {
                currentRetry++;
                showMessage(MsgSentWA);
                startTimer('wa', nextotp_period);
                if (counterCall < nextotp_period) {
                    startTimer('call', nextotp_period);
                }
                if (counterMail < nextotp_period) {
                    startTimer('mail', nextotp_period);
                }
                if (counterSMS < nextotp_period) {
                    startTimer('sms', nextotp_period);
                }
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Request Success',
                    'eventLabel': 'Request OTP WA'
                });
                PushDatalayerOTP("request otp", "success");
            } else {
                if (response.error_message) {
                    showFailedMessage(response.error_message);
                } else {
                    showFailedMessage(MsgGeneralError);
                }
                startTimer('wa', 30);
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Request Failed',
                    'eventLabel': 'Request OTP WA'
                });
                PushDatalayerOTP("request otp", "failed");
            }
        },
    });
};
request_call = function() {
    var nextotp_period = $('#resend_period').val();
    if (currentRequest > 0) {
        return false;
    }
    window.dataLayer.push({
        'event': 'clickOtp',
        'eventCategory': OTPTypeText,
        'eventAction': 'Click',
        'eventLabel': 'OTP On Call'
    });
    if (OTPType == "123") {
        userID = getUrlVars()["user_id"]
        signature = getUrlVars()["signature"]
    }
    $.ajax({
        type: 'POST',
        url: otpUrlSendCall,
        dataType: "json",
        data: {
            tk: otpToken,
            otp_type: OTPType,
            msisdn: msisdnParam,
            email: emailParam,
            original_param: originalParam,
            user_id: userID,
            signature: signature,
            number_otp_digit: NumberofOTPDigitCurrentMethod,
            fingerprint_id: fpID,
            fingerprint_data: fpData
        },
        beforeSend: function() {
            hideFailedMessage();
            $('.btn-otp').prop("disabled", true);
            currentRequest++;
        },
        complete: function() {
            $('.btn-otp').prop("disabled", false);
            currentRequest--;
        },
        error: function() {
            showFailedMessage(MsgGeneralError);
            startTimer('call', 30);
            window.dataLayer.push({
                'event': 'clickOtp',
                'eventCategory': OTPTypeText,
                'eventAction': 'Request Failed',
                'eventLabel': 'Request OTP On Call'
            });
            PushDatalayerOTP("request otp", "failed");
        },
        success: function(response) {
            if (response.success) {
                currentRetry++;
                showMessage(MsgSentPhone);
                startTimer('call', nextotp_period);
                if (counterSMS < nextotp_period) {
                    startTimer('sms', nextotp_period);
                }
                if (counterMail < nextotp_period) {
                    startTimer('mail', nextotp_period);
                }
                if (counterWA < nextotp_period) {
                    startTimer('wa', nextotp_period);
                }
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Request Success',
                    'eventLabel': 'Request OTP On Call'
                });
                PushDatalayerOTP("request otp", "success");
            } else {
                if (response.error_message) {
                    showFailedMessage(response.error_message);
                } else {
                    showFailedMessage(MsgGeneralError);
                }
                startTimer('call', 30);
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Request Failed',
                    'eventLabel': 'Request OTP On Call'
                });
                PushDatalayerOTP("request otp", "failed");
            }
        },
    });
};
request_email = function() {
    var nextotp_period = $('#resend_period').val();
    if (currentRequest > 0) {
        return false;
    }
    window.dataLayer.push({
        'event': 'clickOtp',
        'eventCategory': OTPTypeText,
        'eventAction': 'Click',
        'eventLabel': 'OTP Email'
    });
    if (OTPType == "123") {
        userID = getUrlVars()["user_id"]
        signature = getUrlVars()["signature"]
    }
    $.ajax({
        type: 'POST',
        url: otpUrlSendEmail,
        dataType: "json",
        data: {
            tk: otpToken,
            otp_type: OTPType,
            msisdn: msisdnParam,
            email: emailParam,
            original_param: originalParam,
            ld: lastDecline,
            user_id: userID,
            signature: signature,
            number_otp_digit: NumberofOTPDigitCurrentMethod,
            fingerprint_id: fpID,
            fingerprint_data: fpData
        },
        beforeSend: function() {
            hideFailedMessage();
            $('.btn-otp').prop("disabled", true);
            currentRequest++;
        },
        complete: function() {
            $('.btn-otp').prop("disabled", true);
            currentRequest--;
        },
        error: function() {
            showFailedMessage(MsgGeneralError);
            startTimer('mail', 30);
            window.dataLayer.push({
                'event': 'clickOtp',
                'eventCategory': OTPTypeText,
                'eventAction': 'Request Failed',
                'eventLabel': 'Request OTP Email'
            });
            PushDatalayerOTP("request otp", "failed");
        },
        success: function(response) {
            if (response.success) {
                currentRetry++;
                showMessage(MsgSentEmail);
                startTimer('mail', nextotp_period);
                if (counterCall < nextotp_period) {
                    startTimer('call', nextotp_period);
                }
                if (counterSMS < nextotp_period) {
                    startTimer('sms', nextotp_period);
                }
                if (counterWA < nextotp_period) {
                    startTimer('wa', nextotp_period);
                }
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Request Success',
                    'eventLabel': 'Request OTP Email'
                });
                PushDatalayerOTP("request otp", "success");
            } else {
                if (response.error_message) {
                    showFailedMessage(response.error_message);
                } else {
                    showFailedMessage(MsgGeneralError);
                }
                startTimer('mail', 30);
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Request Failed',
                    'eventLabel': 'Request OTP Email'
                });
                PushDatalayerOTP("request otp", "failed");
            }
        },
    });
};
remove_modal_email_warning = function() {
    $("body").removeAttr("style")
    $(".cotp__content").removeClass('unf-overlay--blur');
    $(".unf-overlay").removeClass('unf-overlay--show');
    $(".unf-dialog").removeClass('unf-dialog--show');
}
$(document).ready(function() {
    $(".unf-overlay, .unf-dialog__action--secondary__cancel, .unf-dialog__close").click(function(e) {
        remove_modal_email_warning();
        var parent = window.parent;
        if (parent && parent.postMessage) {
            parent.postMessage("closed", "*");
        }
    });
    $('.header-text-pin').hide();
    if (userAgentRaw.match(/iPhone.*UCBrowser/) || (!standalone && !safari && !firefox)) {
        $(".otp-number-input").hide();
        $(".input-append input#otp__input--uc").removeClass("hide");
        UseSingleInputforOTP = true;
        $("#otp__input--uc").on('input', function() {
            otp_val = $(this).val();
            otp_val.length > NumberofOTPDigitCurrentMethod - 1 ? $("#confirm").removeClass("btn-disabled") : $("#confirm").addClass("btn-disabled")
        }).keydown(function(e) {
            if (e.keyCode == 8) {
                $('.otp__input--uc').removeClass('cotp__input--red');
                $('#code-error').addClass('invisble');
                $('#code-clear').addClass('none');
            }
        })
    }
    $(".otp-number-input").keydown(function(ev) {
        otp_val = $(this).val();
        if ((ev.which < 48 || (ev.which > 57 && ev.which < 96) || ev.which > 105) && (ev.which != 67 && ev.which != 86)) {
            ev.preventDefault();
        }
        if (ev.keyCode == 37) {
            $(this).prev('.otp-number-input').focus();
            ev.preventDefault();
        } else if (ev.keyCode == 39) {
            $(this).next('.otp-number-input').focus();
            ev.preventDefault();
        } else if (otp_val.length == 1 && ev.keyCode != 8 && ev.keyCode != 46) {
            otp_next_number = $(this).next('.otp-number-input');
            if (otp_next_number.length == 1 && otp_next_number.val().length == 0) {
                otp_next_number.focus();
            }
        } else if (otp_val.length == 0 && ev.keyCode == 8) {
            $(this).prev('.otp-number-input').val("");
            $(this).prev('.otp-number-input').focus();
        } else if (otp_val.length == 1 && ev.keyCode == 8) {
            $(this).val("");
        } else if (otp_val.length == 0 && ev.keyCode == 46) {
            next_input = $(this).next('.otp-number-input');
            next_input.val("");
            while (next_input.next('.otp-number-input').length > 0) {
                next_input.val(next_input.next('.otp-number-input').val());
                next_input = next_input.next('.otp-number-input');
                if (next_input.next('.otp-number-input').length == 0) {
                    next_input.val("");
                    break;
                }
            }
        }
        $('#code-error').addClass('invisible');
        $('#code-clear').addClass('none');
    }).focus(function() {
        $(this).select();
    }).keyup(function(ev) {
        otpCodeTemp = "";
        $("input.otp-number-input").each(function(i) {
            if ($(this).val().length != 0) {
                $(this).addClass('cotp__input--green');
                $(this).removeClass('cotp__input--red');
            } else {
                $(this).removeClass('cotp__input--green');
                $(this).removeClass('cotp__input--red');
            }
            if ($(this).is(":visible")) {
                otpCodeTemp += $(this).val();
            }
        });
        if (number_only_regex.test(otpCodeTemp)) {
            $("#confirm").removeClass("btn-disabled");
            if ($(this).attr('id') == ("otp-number-input-" + NumberofOTPDigitCurrentMethod)) {
                if (lastInputCode != otpCodeTemp) {
                    lastInputCode = otpCodeTemp;
                    validate();
                }
            }
        } else {
            $("#confirm").addClass("btn-disabled");
        }
        if ($(this).val().length == 1 && ev.keyCode != 37 && ev.keyCode != 39) {
            $(this).next('.otp-number-input').focus();
            ev.preventDefault();
        }
    });
    $(".otp-number-input").on("click", function(e) {
        otp_val = $('#otp-number-input-1').val();
        if (otp_val === "") {
            $("#otp-number-input-1").focus();
        }
    });
    $(".otp-number-input").on("paste", function(e) {
        window.handlePasteOTP(e);
    });
    var clickAmount = 0;
    $('#code-clear').on('click', function() {
        clearCode();
    });
    $('.cotp__text--resend').on('click', function() {
        if ($('#cotp-method').val() == 'mail') {
            request_email();
        } else if ($('#cotp-method').val() == 'call') {
            request_call();
        } else if ($('#cotp-method').val() == 'sms') {
            request_sms();
        } else if ($('#cotp-method').val() == 'wa') {
            request_wa();
        }
        PushDatalayerOTP("click on kirim ulang", "")
        $('.cotp__text-reminder-three').addClass('none');
    });
    $(".cotp__toaster").on('click', function() {
        toaster.fadeOut(500);
    });
    $("#cotp__method--ga").on('click', function() {
        UIState.push("change-method");
        changeMethod('ga');
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - ga")
    });
    $("#cotp__method--pin").on('click', function() {
        UIState.push("change-method");
        changeMethod('pin');
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - pin")
    });
    $("#cotp__method--mail").on('click', function() {
        if (IsEmailWarning != "0") {
            $("body").css('overflow', 'hidden')
            $(".cotp__content").addClass('unf-overlay--blur');
            $(".unf-overlay").addClass('unf-overlay--show');
            $(".unf-dialog").addClass('unf-dialog--show');
        } else {
            UIState.push("change-method");
            changeMethod('mail');
        }
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - email")
    });
    $("#cotp-submit-warning-email-desktop").on('click', function() {
        remove_modal_email_warning();
        UIState.push("change-method");
        changeMethod('mail');
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - email")
    });
    $("#cotp-submit-warning-email-lite").on('click', function() {
        if (OTPTypeText == "security_challenge") {
            window.dataLayer.push({
                'event': 'ClickSecurityChallenge',
                'eventCategory': 'security_challenge',
                'eventAction': 'Click',
                'eventLabel': 'Continue by Email'
            });
        } else {
            window.dataLayer.push({
                'event': 'clickOtp',
                'eventCategory': OTPTypeText,
                'eventAction': 'Click',
                'eventLabel': 'Continue by Email'
            });
        }
        remove_modal_email_warning();
        UIState.push("change-method");
        changeMethod('mail');
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - email")
    });
    $("#cotp__method--sms").on('click', function() {
        UIState.push("change-method");
        changeMethod('sms');
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - sms")
    });
    $(".cotp__another_method--sms").on('click', function() {
        UIState.push("change-method");
        changeMethod('sms');
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - sms")
    });
    $("#cotp__method--call").on('click', function() {
        UIState.push("change-method");
        changeMethod('call');
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - call")
    });
    $("#cotp__method--wa").on('click', function() {
        UIState.push("change-method");
        changeMethod('wa');
        PushDatalayerOTP("click pilih metode verifikasi", "cotp - wa")
    });
    $('.cotp__btn--method').on('click', function() {
        UIState.push("steps-input-" + selectedMethod);
        changeForm('change-method');
        PushDatalayerOTP("click on gunakan metode verifikasi lain", "");
    });
    $('.cotp__btn--method-default').on('click', function() {
        UIState.push("steps-send-" + defaultMethod);
        changeForm('change-method');
    });
    $('.cotp__btn--fallback').on('click', function() {
        if (CustomCOTPFallback == "back") {
            history.go(-1);
        } else {
            window.location.href = CustomCOTPFallback;
        }
    });
    toaster = $('.unf-toaster__cotp');
    otpForm = $('#form-otp');
    otpInputForm = $('#otp-field');
    otpMessage = $('#otp-message');
    otpDestinationNote = $('#destination-note');
    smallText = $('<p></p>');
    otpRequestBlockButton = $('#sent-verification-code-block');
    otpRequestButton = $('#sent-verification-code');
    otpRequestButton.prop('disabled', true);
    otpRequestButton.on('click', function() {
        request_sms();
        UIState.push("steps-send-sms");
    });
    otpRequestCallButton = $('#sent-verification-code-call');
    otpRequestCallButton.prop('disabled', true);
    otpRequestCallButton.on('click', function() {
        changeMethod('sms');
        UIState.push("steps-send-sms");
    });
    otpRequestWAButton = $('#sent-verification-code-wa');
    otpRequestWAButton.prop('disabled', true);
    otpRequestWAButton.on('click', function() {
        changeMethod('wa');
        UIState.push("steps-send-wa");
    });
    otpRequestEmailButton = $('#sent-verification-code-email');
    otpRequestEmailButton.prop('disabled', true);
    otpRequestEmailButton.on('click', function() {
        changeMethod('mail');
        UIState.push("steps-send-mail");
    });
    otpRequestGAButton = $('#sent-verification-code-ga');
    otpRequestGAButton.prop('disabled', true);
    otpRequestGAButton.on('click', function() {
        changeMethod('ga');
        UIState.push("steps-send-ga");
    });
    otpForm.on('submit', validate);
    $(".change-phone").click(function() {
        window.dataLayer.push({
            'event': 'clickOtp',
            'eventCategory': OTPTypeText,
            'eventAction': 'Click',
            'eventLabel': 'Change Phone Number'
        });
        PushDatalayerOTP("click on nomor saya sudah tidak aktif", "");
        if (IsRedirectParent === 'true') {
            window.parent.location.href = phoneNumberNotActiveLink;
        } else {
            window.location.href = phoneNumberNotActiveLink;
        }
    });
    $(".otp-desktop-input").keyup(function() {
        window.dataLayer.push({
            'event': 'clickOtp',
            'eventCategory': OTPTypeText,
            'eventAction': 'Click',
            'eventLabel': 'Fill Verification Code'
        });
    });
    $(".back-page, .unf-dialog__back").click(function() {
        if (CurrentPage == "input-otp") {
            PushDatalayerOTP("click on button back input kode verifikasi", "");
        } else {
            PushDatalayerOTP("click button back pilih metode verifikasi", "");
        }
        if (IsPopUp === "true") {
            var parent = window.parent;
            if (parent && parent.postMessage) {
                parent.postMessage("back", "*");
                return;
            }
        } else if (UIState.length > 0) {
            back();
        } else {
            backPage();
        }
    });
    $(".js__msisdn-edit").click(function() {
        if (IsPopUp === "true") {
            var parent = window.parent;
            if (parent && parent.postMessage) {
                message = {
                    "action": "msisdn-edit",
                    "data": msisdnParam
                };
                parent.postMessage(JSON.stringify(message), "*");
            }
        } else {
            backPage();
        }
        PushDatalayerOTP("click on icon ubah phone number", "");
    });

    function backPage() {
        if (backURL != "") {
            window.location.href = backURL;
        } else {
            history.go(-1);
        }
    }

    function back() {
        actionEnable = false;
        switch (UIState[UIState.length - 1]) {
            case 'change-method':
                changeForm('change-method');
                break;
            case 'steps-input-sms':
                changeMethod('sms');
                break;
            case 'steps-input-call':
                changeMethod('call');
                break;
            case 'steps-input-mail':
                changeMethod('mail');
                break;
            case 'steps-input-wa':
                changeMethod('wa');
                break;
            case 'steps-input-ga':
                changeMethod('ga');
                break;
            case 'steps-send-sms':
                changeForm('steps-send');
                $('.cotp--sms').show();
                break;
            case 'steps-send-call':
                changeForm('steps-send');
                $('.cotp--call').show();
                break;
            case 'steps-send-mail':
                changeForm('steps-send');
                $('.cotp--mail').show();
                break;
            case 'steps-send-wa':
                changeForm('steps-send');
                $('.cotp--wa').show();
                break;
            case 'steps-send-ga':
                changeForm('steps-send');
                $('.cotp--ga').show();
                break;
        }
        UIState.pop()
        actionEnable = true;
    }
    $("#logout").click(function() {
        window.dataLayer.push({
            'event': 'clickOtp',
            'eventCategory': OTPTypeText,
            'eventAction': 'Click',
            'eventLabel': 'Abandonment'
        });
        PushDatalayerOTP("click keluar", "");
        if (IsRedirectParent === 'true') {
            window.parent.location.href = tokopediaURL + "/logout";
        } else {
            window.location.href = tokopediaURL + "/logout";
        }
    });
    browserCode = detectBrowser();
    if ($("#DefaultState").val() == "0") {
        $(".cotp__box--send").removeClass("none");
        switch ($("#DefaultMode").val()) {
            case '6':
                $('.cotp--mail').show();
                defaultMethod = 'mail';
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'Email'
                });
                break;
            case '2':
                $('.cotp--call').show();
                defaultMethod = 'call';
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'Call'
                });
                break;
            case '1':
                $('.cotp--sms').show();
                defaultMethod = 'sms';
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'Sms'
                });
                break;
            case '5':
                $('.cotp--wa').show();
                defaultMethod = 'wa';
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'WA'
                });
                break;
            case '7':
                $('.cotp--ga').show();
                defaultMethod = 'ga';
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'GA'
                });
                break;
        }
    } else if ($("#DefaultState").val() == "1") {
        $(".cotp__box--change").removeClass("none");
    }
    if ((SecondSms + SecondCall + SecondEmail + SecondWa) > 0) {
        var lastMethod = '';
        if (SecondSms > 0) {
            lastMethod = 'sms';
            startTimer('sms', SecondSms);
        }
        if (SecondCall > 0) {
            if (SecondCall > SecondSms) {
                lastMethod = 'call';
            }
            startTimer('call', SecondCall);
        }
        if (SecondEmail > 0) {
            if (SecondEmail > SecondSms && SecondEmail > SecondCall) {
                lastMethod = 'mail';
            }
            startTimer('mail', SecondEmail);
        }
        if (SecondWa > 0) {
            if (SecondWa > SecondEmail && SecondWa > SecondSms && SecondWa > SecondCall) {
                lastMethod = 'wa';
            }
            startTimer('wa', SecondWa);
        }
        changeMethod(lastMethod);
    } else {
        $('.btn-otp').prop('disabled', false);
        showOTPButton();
    }
    if ($("#DefaultState").val() == "2" && (SecondSms + SecondCall + SecondEmail + SecondWa) == 0) {
        switch ($("#DefaultMode").val()) {
            case '6':
                changeMethod('mail');
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'Email'
                });
                break;
            case '2':
                changeMethod('call');
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'Call'
                });
                break;
            case '1':
                changeMethod('sms');
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'Sms'
                });
                break;
            case '5':
                changeMethod('wa');
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'WA'
                });
                break;
            case '7':
                changeMethod('ga');
                window.dataLayer.push({
                    'event': 'clickOtp',
                    'eventCategory': OTPTypeText,
                    'eventAction': 'Default OTP',
                    'eventLabel': 'GA'
                });
                break;
            case '11':
                changeMethod('pin');
                ga('send', 'event', OTPTypeText, 'Default OTP', 'PIN');
                break;
        }
    }
    new Fingerprint2().get(function(result, components) {
        fingerprintData = createFP(components);
        $.ajax({
            type: 'POST',
            url: '/otp/c/ajax/checkfp',
            dataType: "json",
            data: {
                f: fingerprintData,
            },
        });
    });
    window.dataLayer.push({
        'event': 'clickOtp',
        'eventCategory': OTPTypeText,
        'eventAction': 'Is Whatsapp Exist',
        'eventLabel': IsWhatsappAvailable
    });
    if (LoadFuncURL != "") loadSuccessFunction();
});

function disableOTPButton(seconds) {
    $('.btn-otp').prop("disabled", true);
    $('.btn-otp').addClass('hide');
    otpRequestBlockButton.removeClass('hide');
    $('.time-second').html(seconds);
    var interval_call = setInterval(function() {
        $('.time-second').each(function() {
            var count = parseInt($(this).html());
            if (count !== 0) {
                $(this).html(count - 1);
            } else {
                clearInterval(interval_call);
                showOTPButton();
            }
        });
    }, 1000);
}

function showOTPButton() {
    $('.btn-otp').prop("disabled", false);
    $('.btn-otp').removeClass('hide');
    otpRequestBlockButton.addClass('hide');
}

function hideOTPMessage() {
    toaster.removeClass('unf-toaster__cotp--show');
}

function showOTPMessage() {
    toaster.addClass('unf-toaster__cotp--show');
}

function showMessage(limitMessage) {
    handleOpenToaster(false, true, limitMessage);
}

function showFailedMessage(limitMessage) {
    if (limitMessage == "COMMAND_LOGOUT") {
        forceLogout();
    } else {
        handleOpenToaster(true, true, limitMessage);
    }
}

function forceLogout() {
    logout_url_extra_param = encodeURIComponent(accountsURL + "/login");
    logout_url = tokopediaURL + "/logout?url=" + logout_url_extra_param;
    location.href = logout_url;
}

function hideFailedMessage() {
    otpMessage.html("");
    $('#code-error').addClass('invisible');
    $('#code-clear').addClass('none');
}

function detectBrowser() {
    b = "0";
    if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        b = "1";
    } else if (typeof InstallTrigger !== 'undefined') {
        b = "2";
    } else if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
        b = "3";
    } else if (false || !!document.documentMode) {
        b = "4";
    } else if (!!window.chrome && !!window.chrome.webstore) {
        b = "5";
    }
    if (b != "" && !!window.StyleMedia) {
        b = "6"
    }
    return b
}

function appendLastDeclineParam(param, value) {
    if (lastDecline != "") {
        if (lastDecline.indexOf("?") != -1) {
            lastDecline = lastDecline + "&" + param + "=" + value
        } else {
            lastDecline = lastDecline + "?" + param + "=" + value
        }
    }
}

function handlePasteOTP(e) {
    var clipboardData = e.clipboardData || window.clipboardData || e.originalEvent.clipboardData;
    var pastedData = clipboardData.getData('Text');
    var arrayOfText = pastedData.toString().split('');
    if (isNaN(parseInt(pastedData, 10))) {
        e.preventDefault();
        return;
    }
    for (var i = 0; i < arrayOfText.length; i++) {
        if (i >= 0 && i <= 5) {
            document.getElementById('otp-number-input-' + (i + 1)).value = arrayOfText[i];
            if (i <= 4) {
                document.getElementById('otp-number-input-' + (i + 2)).focus();
            }
        } else {
            return;
        }
    }
    e.preventDefault();
}

function changeForm(num) {
    switch (num) {
        case 'change-method':
            $('.cotp__box--send').addClass('none');
            $('.cotp__box--input').addClass('none');
            $('.unf-notification').addClass('none');
            $('#link-number-not-active').removeClass('none');
            setTimeout(function() {
                $('.cotp__box--change').removeClass('none');
            }, 250);
            window.dataLayer.push({
                'event': 'clickOtp',
                'eventCategory': OTPTypeText,
                'eventAction': 'Click',
                'eventLabel': 'Change OTP Method'
            });
            CurrentPage = "choose-method"
            break;
        case 'steps-send':
            $('.cotp__box--input').addClass('none');
            $('.unf-notification').addClass('none');
            $('.cotp__box--change').addClass('none');
            $('#link-number-not-active').addClass('none');
            setTimeout(function() {
                $('.cotp__box--send').removeClass('none');
            }, 250);
            CurrentPage = "input-otp"
            break;
        case 'steps-input':
            $('.cotp__box--send').addClass('none');
            $('.cotp__box--change').addClass('none');
            $('#link-number-not-active').addClass('none');
            setTimeout(function() {
                $('.unf-notification').removeClass('none');
                $('.cotp__box--input').removeClass('none');
                UpdateOTPInput(NumberofOTPDigitCurrentMethod);
                $('#otp-number-input-1').focus();
                $('#otp-number-input-1').click();
            }, 250);
            CurrentPage = "input-otp"
            break;
    }
    clearCode();
}
var openedMethod = '';

function changeMethod(method) {
    $('#cotp-method').val(method);
    selectedMethod = method
    switch (method) {
        case 'ga':
            $('.cotp--ga').show();
            $('.cotp--mail').hide();
            $('.cotp--sms').hide();
            $('.cotp--wa').hide();
            $('.cotp--call').hide();
            $('.cotp--pin').hide();
            openedMethod = 'ga';
            openedMethodInt = 7;
            NumberofOTPDigitCurrentMethod = NumberofOTPDigitDefault;
            break;
        case 'mail':
            $('.cotp--ga').hide();
            $('.cotp--mail').show();
            $('.cotp--sms').hide();
            $('.cotp--wa').hide();
            $('.cotp--call').hide();
            $('.cotp--pin').hide();
            NumberofOTPDigitCurrentMethod = NumberofOTPDigit;
            if (counterMail < 1 && actionEnable) {
                request_email();
            }
            openedMethod = 'mail';
            openedMethodInt = 6;
            break;
        case 'sms':
            $('.cotp--ga').hide();
            $('.cotp--mail').hide();
            $('.cotp--sms').show();
            $('.cotp--wa').hide();
            $('.cotp--call').hide();
            $('.cotp--pin').hide();
            NumberofOTPDigitCurrentMethod = NumberofOTPDigit;
            if (counterSMS < 1 && actionEnable) {
                request_sms();
            }
            openedMethod = 'sms';
            openedMethodInt = 1;
            break;
        case 'call':
            $('.cotp--ga').hide();
            $('.cotp--mail').hide();
            $('.cotp--sms').hide();
            $('.cotp--wa').hide();
            $('.cotp--call').show();
            $('.cotp--pin').hide();
            NumberofOTPDigitCurrentMethod = NumberofOTPDigit;
            if (counterCall < 1 && actionEnable) {
                request_call();
            }
            openedMethod = 'call';
            openedMethodInt = 2;
            break;
        case 'wa':
            $('.cotp--ga').hide();
            $('.cotp--mail').hide();
            $('.cotp--sms').hide();
            $('.cotp--wa').show();
            $('.cotp--call').hide();
            $('.cotp--pin').hide();
            NumberofOTPDigitCurrentMethod = NumberofOTPDigit;
            if (counterWA < 1 && actionEnable) {
                request_wa();
            }
            openedMethod = 'wa';
            openedMethodInt = 5;
            break;
        case 'pin':
            $('.cotp--ga').hide();
            $('.cotp--mail').hide();
            $('.cotp--sms').hide();
            $('.cotp--wa').hide();
            $('.cotp--call').hide();
            $('.cotp--pin').show();
            openedMethod = 'pin';
            openedMethodInt = 11;
            NumberofOTPDigitCurrentMethod = NumberofOTPDigitDefault;
            break;
    }
    if (method == 'ga') {
        $('.cotp__countdown-timer, .cotp__text__top').fadeOut('fast');
        $('.cotp__text__bottom').addClass('cotp__text__bottom--GA')
        ShowChangeOTPMethod(method, ChangeMethodButton);
        $('.cotp__text--resend').show();
        window.dataLayer.push({
            'event': 'clickOtp',
            'eventCategory': OTPTypeText,
            'eventAction': 'Click',
            'eventLabel': 'OTP GA'
        });
        window.dataLayer.push({
            'event': 'clickOtp',
            'eventCategory': OTPTypeText,
            'eventAction': 'Request Success',
            'eventLabel': 'Request OTP GA'
        });
        $('.page-title-otp').show();
        $('.page-title-pin').hide();
        ChangeOTPInputtoNumber();
        $('.header-text').show();
        $('.header-text-pin').hide();
        ga('send', 'event', OTPTypeText, 'Click', 'OTP GA');
        ga('send', 'event', OTPTypeText, 'Request Success', 'Request OTP GA');
        $('.back-page').removeClass('unf-user-page-header__close-icon');
        $('.back-page').addClass('back-arrow');
    } else if (method == 'pin') {
        $('.cotp__countdown-timer, .cotp__text__top').fadeOut('fast');
        $('.cotp__text--resend').hide();
        $('.page-title-otp').hide();
        $('.page-title-pin').show();
        ShowChangeOTPMethod(method, ChangeMethodButton);
        ChangeOTPInputtoPIN();
        $('.header-text').hide();
        $('.header-text-pin').show();
        $('.back-page').addClass('unf-user-page-header__close-icon');
        $('.back-page').removeClass('back-arrow');
    } else {
        if (isTimerExisting(method)) {
            $('.cotp__countdown-timer').fadeIn('slow');
            $('.cotp__text__top, .cotp_change_method').fadeOut('slow');
        } else if (!isTimerExisting($('#cotp-method').val()) && $('#cotp-method').val() != 'ga') {
            $('.cotp__countdown-timer').fadeOut('slow');
            $('.cotp__text__top, .cotp__change-method').fadeIn('slow');
        }
        $('.cotp__text--resend').show();
        $('.page-title-otp').show();
        $('.page-title-pin').hide();
        ShowChangeOTPMethod(method, ChangeMethodButton);
        ChangeOTPInputtoNumber();
        $('.header-text').show();
        $('.header-text-pin').hide();
        $('.cotp__text__bottom').removeClass('cotp__text__bottom--GA');
        $('.back-page').removeClass('unf-user-page-header__close-icon');
        $('.back-page').addClass('back-arrow');
    }
    hideOTPMessage()
    CurrentPage = "input-otp"
    changeForm('steps-input');
}

function clearCode() {
    for (i = 1; i <= 6; i++) {
        document.getElementById('otp-number-input-' + i).value = '';
    };
    $('.otp__input--uc').val("");
    $('#confirm').addClass('btn-disabled');
    $('#code-error').addClass('invisible');
    $('#code-clear').addClass('none');
    $('#otp-number-input-1').focus();
    $('.otp-number-input').removeClass('cotp__input--green');
    $('.otp-number-input').removeClass('cotp__input--red');
    $('.otp__input--uc').removeClass('cotp__input--red');
}

function errorCode(errMSG) {
    if (errMSG != "") {
        $('#code-error').html(errMSG);
    } else {
        $('#code-error').html($('#ValidateFailedOTP').val());
    }
    $('.otp-number-input').addClass('cotp__input--red');
    $('.otp__input--uc').addClass('cotp__input--red');
    $('#code-error').removeClass('invisible');
    $('#code-clear').removeClass('none');
}

function checkTimer() {
    if (isTimerExisting($('#cotp-method').val()) && $('#cotp-method').val() != 'ga' && $('#cotp-method').val() != 'pin') {
        $('.cotp__text__top, .cotp__text--resend').fadeOut('slow');
        $('.cotp__countdown-timer').fadeIn('slow');
    } else if (!isTimerExisting($('#cotp-method').val()) && $('#cotp-method').val() != 'ga' && $('#cotp-method').val() != 'pin') {
        $('.cotp__countdown-timer').fadeOut('slow');
        $('.cotp__text__top, .cotp__text--resend').fadeIn('slow');
    } else if ($('#cotp-method').val() == 'ga' || $('#cotp-method').val() == 'pin') {
        $('.cotp__countdown-timer, .cotp__text__top').fadeOut('fast');
    }
    if (counterSMS > 0) {
        counterSMS--;
        $('#countdown-timer-sms').text(counterSMS);
    }
    if (counterWA > 0) {
        counterWA--;
        $('#countdown-timer-wa').text(counterWA);
    }
    if (counterCall > 0) {
        counterCall--;
        $('#countdown-timer-call').text(counterCall);
    }
    if (counterMail > 0) {
        counterMail--;
        $('#countdown-timer-mail').text(counterMail);
    }
    if ($('#cotp-method').val() == 'ga' || ($('#cotp-method').val() == 'pin' && ChangeMethodTextStayHidden == "0")) {
        $('.cotp__change-method').fadeIn();
    } else if (getCurrentTimer() <= 60 && ChangeMethodTextStayHidden == "0") {
        $('.cotp__change-method').fadeIn('slow');
    } else {
        $('.cotp__change-method').fadeOut();
    }
    $('.cotp__fallback-method').fadeIn();
}

function getCurrentTimer() {
    var nextotp_period = $('#resend_period').val();
    if ($('#cotp-method').val() == "mail") {
        return counterMail
    } else if ($('#cotp-method').val() == "sms") {
        return counterSMS
    } else if ($('#cotp-method').val() == "call") {
        return counterCall
    } else if ($('#cotp-method').val() == "wa") {
        return counterWA
    } else {
        return nextotp_period
    }
}

function isTimerExisting(method) {
    if (method == "all") {
        return (counterSMS > 0 || counterCall > 0 || counterMail > 0 || counterWA > 0);
    } else if (method == "mail") {
        return counterMail > 0;
    } else if (method == "sms") {
        return counterSMS > 0;
    } else if (method == "call") {
        return counterCall > 0;
    } else if (method == "wa") {
        return counterWA > 0;
    } else {
        return false
    }
}

function runTimer() {
    setTimeout(function() {
        checkTimer();
        return runTimer();
    }, 1000);
}

function startTimer(value, seconds) {
    switch (value) {
        case 'mail':
            counterMail = seconds;
            break;
        case 'sms':
            counterSMS = seconds;
            break;
        case 'call':
            counterCall = seconds;
            break;
        case 'wa':
            counterWA = seconds;
            break;
    }
}

function createFP(components) {
    var fpObj = new Object();
    audioFPlabel = ['audio_sample_rate', 'audio_max_channel_count', 'audio_input_count', 'audio_output_count', 'audio_channel_count', 'channel_count_mode', 'channel_interpretation'];
    for (idx in components) {
        if (components[idx].key == "canvas" || components[idx].key == "webgl") {
            fpObj[components[idx].key] = base64sha1(components[idx].value);
            continue;
        }
        if (components[idx].key == "touch_support") {
            if (components[idx].value.length >= 3) {
                fpObj['touch_point_count'] = components[idx].value[0];
                fpObj['touch_event_ind'] = components[idx].value[1];
                fpObj['touch_property_ind'] = components[idx].value[2];
            }
            continue
        }
        fpObj[components[idx].key] = components[idx].value;
    }
    audio = audioFingerPrinting().split("_");
    if (audio.length >= 7) {
        for (i = 0; i < audioFPlabel.length; i++) {
            fpObj[audioFPlabel[i]] = audio[i];
        }
    }
    fpObj['ga_visit_id'] = getCookie('_ga');
    fpObj['writing_script'] = get_writing_scripts();
    fpObj['zoom_level_percent'] = zoom();
    fpObj['screen_orientation'] = screenOrientation();
    fpObj['cookies_ind'] = checkCookie();
    if (fpObj["resolution"] != undefined) {
        fpObj['screen_resolution'] = "" + fpObj["resolution"][0] + "," + fpObj["resolution"][1];
        delete fpObj["resolution"];
    }
    if (fpObj["available_resolution"] != undefined) {
        fpObj['available_screen_resolution'] = "" + fpObj["available_resolution"][0] + "," + fpObj["available_resolution"][1];
        delete fpObj["available_resolution"];
    }
    if (fpObj["timezone_offset"] != undefined) {
        hour_zone = (fpObj["timezone_offset"] / 60) * -1;
        if (hour_zone >= 0) {
            fpObj['timezone'] = "GMT +" + hour_zone;
        } else {
            fpObj['timezone'] = "GMT " + hour_zone;
        }
        delete fpObj["timezone_offset"];
    }
    if (fpObj["navigator_platform"] != undefined) {
        fpObj['device_system'] = fpObj['navigator_platform'];
        delete fpObj["navigator_platform"];
    }
    if (typeof fpObj["hardware_concurrency"] === 'string') {
        if (!parseInt(fpObj["hardware_concurrency"])) {
            fpObj["hardware_concurrency"] = 0;
        } else {
            fpObj["hardware_concurrency"] = parseInt(fpObj["hardware_concurrency"]);
        }
    }
    json_string = JSON.stringify(fpObj, null, 0);
    encoded = window.btoa(json_string);
    return encoded;
}
runTimer();
changeMethodSMS = function() {
    UIState.push("change-method");
    $("#confirm").removeAttr("onclick");
    $("#confirm").attr("type", "submit");
    $("#confirm").val("Verifikasi");
    changeMethod('sms');
}
changeMethodSelect = function() {
    ChangeMethodTextStayHidden = "0"
    UIState.push("steps-input-" + selectedMethod);
    changeForm('change-method');
    PushDatalayerOTP("click on gunakan metode verifikasi lain", "");
}

function handleOpenToaster(isError, autoClose, text, callback) {
    var toaster = $('.unf-user-toaster');
    var toasterBody = $('.unf-user-toaster__body');
    var toasterMessage = $('#unf-user-toaster__message');
    toasterBody.click(function(e) {
        if (!e.target == 'unf-user-toaster__action') {
            toaster.removeClass('unf-user-toaster--show');
        }
    });
    toasterMessage.text(text);
    if (isError) {
        toasterBody.addClass('unf-user-toaster__body--error');
    } else {
        toasterBody.removeClass('unf-user-toaster__body--error');
    }
    toaster.addClass('unf-user-toaster--show');
    if (autoClose) {
        setTimeout(function() {
            toaster.removeClass('unf-user-toaster--show');
        }, 5000);
    }
    if (callback) {
        callback();
    }
}

function PushDatalayerOTP(action, label) {
    window.dataLayer.push({
        'event': 'clickOtp',
        'eventCategory': OTPTypeText,
        'eventAction': action,
        'eventLabel': label
    });
}

function ChangeOTPInputtoPIN() {
    $("input.otp-number-input").each(function() {
        $(this).attr("type", "password");
    });
    $("input.otp__input--uc").attr("type", "password");
}

function ChangeOTPInputtoNumber() {
    $("input.otp-number-input").each(function() {
        $(this).attr("type", "tel");
    });
    $("input.otp__input--uc").attr("type", "tel");
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.href);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function post(path, params) {
    var form = $('<form></form>');
    form.attr("method", "post");
    form.attr("action", path);
    $.each(params, function(key, value) {
        var field = $('<input></input>');
        field.attr("type", "hidden");
        field.attr("name", key);
        field.attr("value", value);
        form.append(field);
    });
    $(document.body).append(form);
    form.submit();
}

function ShowChangeOTPMethod(method, config) {
    if (config == '1') {
        $('.choose-method-non-ga').show();
        $('.choose-method-ga').hide();
        $('.choose-method-pin').hide();
        return
    } else if (config == '2') {
        $('.choose-method-non-ga').hide();
        $('.choose-method-pin').hide();
        $('.choose-method-ga').show();
        return
    } else if (config == '3') {
        $('.choose-method-non-ga').show();
        $('.choose-method-ga').hide();
        $('.choose-method-pin').hide();
    }
    if (method == 'ga') {
        $('.choose-method-non-ga').hide();
        $('.choose-method-pin').hide();
        $('.choose-method-ga').show();
    } else if (method == 'pin') {
        $('.choose-method-non-ga').hide();
        $('.choose-method-ga').hide();
        $('.choose-method-pin').show();
    } else {
        $('.choose-method-non-ga').show();
        $('.choose-method-ga').hide();
        $('.choose-method-pin').hide();
    }
    return
}

function loadSuccessFunction() {
    $.ajax({
        type: 'GET',
        url: LoadFuncURL,
        error: function() {},
        success: function(response) {
            if (response.data && response.data.js != "") {
                $('head').append(response.data.js);
            }
        }
    });
}

function parseFunctionParam(stringParam) {
    var obj = {};
    params = stringParam.split(',');
    for (i in params) {
        param = params[i].split('|');
        if (param.length == 2) obj[param[0]] = param[1];
    }
    console.log("object:", obj);
    return obj;
}

function UpdateOTPInput(numberOTPDigit) {
    $("#otp__input--uc").attr("maxlength", numberOTPDigit);
    $("#otp__input--uc").attr("placeholder", numberOTPDigit + "-digit kode");
    otpInputClass = "otp-number-input-";
    if (!UseSingleInputforOTP) {
        visibleOTPInput = 0;
        $("input.otp-number-input").each(function(i) {
            if ($(this).is(":visible")) {
                visibleOTPInput = visibleOTPInput + 1;
            }
        });
        if (visibleOTPInput > numberOTPDigit) {
            for (var i = numberOTPDigit + 1; i <= NumberofOTPDigitDefault; i++) {
                $("#" + otpInputClass + i).hide();
            }
        } else if (visibleOTPInput < numberOTPDigit) {
            for (var i = 1; i <= NumberofOTPDigitDefault; i++) {
                $("#" + otpInputClass + i).show();
            }
        }
    }
}