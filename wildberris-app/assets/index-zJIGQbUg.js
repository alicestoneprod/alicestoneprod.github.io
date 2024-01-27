function kh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Nl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Th = { exports: {} },
  Dl = {},
  $h = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bi = Symbol.for("react.element"),
  oy = Symbol.for("react.portal"),
  iy = Symbol.for("react.fragment"),
  ay = Symbol.for("react.strict_mode"),
  ly = Symbol.for("react.profiler"),
  uy = Symbol.for("react.provider"),
  sy = Symbol.for("react.context"),
  cy = Symbol.for("react.forward_ref"),
  fy = Symbol.for("react.suspense"),
  dy = Symbol.for("react.memo"),
  py = Symbol.for("react.lazy"),
  lp = Symbol.iterator;
function hy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lp && e[lp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ph = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rh = Object.assign,
  Ah = {};
function To(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ah),
    (this.updater = n || Ph);
}
To.prototype.isReactComponent = {};
To.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
To.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Mh() {}
Mh.prototype = To.prototype;
function ff(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ah),
    (this.updater = n || Ph);
}
var df = (ff.prototype = new Mh());
df.constructor = ff;
Rh(df, To.prototype);
df.isPureReactComponent = !0;
var up = Array.isArray,
  Ih = Object.prototype.hasOwnProperty,
  pf = { current: null },
  Lh = { key: !0, ref: !0, __self: !0, __source: !0 };
function jh(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ih.call(t, r) && !Lh.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Bi,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: pf.current,
  };
}
function vy(e, t) {
  return {
    $$typeof: Bi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bi;
}
function gy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sp = /\/+/g;
function Nu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gy("" + e.key)
    : t.toString(36);
}
function La(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Bi:
          case oy:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Nu(a, 0) : r),
      up(o)
        ? ((n = ""),
          e != null && (n = e.replace(sp, "$&/") + "/"),
          La(o, t, n, "", function (s) {
            return s;
          }))
        : o != null &&
          (hf(o) &&
            (o = vy(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(sp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), up(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var u = r + Nu(i, l);
      a += La(i, t, n, u, o);
    }
  else if (((u = hy(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Nu(i, l++)), (a += La(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function ra(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    La(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function my(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var qe = { current: null },
  ja = { transition: null },
  yy = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: ja,
    ReactCurrentOwner: pf,
  };
ee.Children = {
  map: ra,
  forEach: function (e, t, n) {
    ra(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ra(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ra(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = To;
ee.Fragment = iy;
ee.Profiler = ly;
ee.PureComponent = ff;
ee.StrictMode = ay;
ee.Suspense = fy;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Rh({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = pf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Ih.call(t, u) &&
        !Lh.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: Bi, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: sy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: uy, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = jh;
ee.createFactory = function (e) {
  var t = jh.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: cy, render: e };
};
ee.isValidElement = hf;
ee.lazy = function (e) {
  return { $$typeof: py, _payload: { _status: -1, _result: e }, _init: my };
};
ee.memo = function (e, t) {
  return { $$typeof: dy, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = ja.transition;
  ja.transition = {};
  try {
    e();
  } finally {
    ja.transition = t;
  }
};
ee.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ee.useCallback = function (e, t) {
  return qe.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return qe.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return qe.current.useEffect(e, t);
};
ee.useId = function () {
  return qe.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return qe.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return qe.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return qe.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return qe.current.useRef(e);
};
ee.useState = function (e) {
  return qe.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return qe.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return qe.current.useTransition();
};
ee.version = "18.2.0";
$h.exports = ee;
var y = $h.exports;
const Y = Nl(y),
  zl = kh({ __proto__: null, default: Y }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sy = y,
  _y = Symbol.for("react.element"),
  wy = Symbol.for("react.fragment"),
  Ey = Object.prototype.hasOwnProperty,
  xy = Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  by = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nh(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Ey.call(t, r) && !by.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: _y,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: xy.current,
  };
}
Dl.Fragment = wy;
Dl.jsx = Nh;
Dl.jsxs = Nh;
Th.exports = Dl;
var Z = Th.exports,
  Ds = {},
  Dh = { exports: {} },
  gt = {},
  zh = { exports: {} },
  Bh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(S, $) {
    var R = S.length;
    S.push($);
    e: for (; 0 < R; ) {
      var D = (R - 1) >>> 1,
        X = S[D];
      if (0 < o(X, $)) (S[D] = $), (S[R] = X), (R = D);
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var $ = S[0],
      R = S.pop();
    if (R !== $) {
      S[0] = R;
      e: for (var D = 0, X = S.length, J = X >>> 1; D < J; ) {
        var ne = 2 * (D + 1) - 1,
          _e = S[ne],
          ue = ne + 1,
          xe = S[ue];
        if (0 > o(_e, R))
          ue < X && 0 > o(xe, _e)
            ? ((S[D] = xe), (S[ue] = R), (D = ue))
            : ((S[D] = _e), (S[ne] = R), (D = ne));
        else if (ue < X && 0 > o(xe, R)) (S[D] = xe), (S[ue] = R), (D = ue);
        else break e;
      }
    }
    return $;
  }
  function o(S, $) {
    var R = S.sortIndex - $.sortIndex;
    return R !== 0 ? R : S.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var u = [],
    s = [],
    f = 1,
    p = null,
    d = 3,
    m = !1,
    _ = !1,
    b = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(S) {
    for (var $ = n(s); $ !== null; ) {
      if ($.callback === null) r(s);
      else if ($.startTime <= S)
        r(s), ($.sortIndex = $.expirationTime), t(u, $);
      else break;
      $ = n(s);
    }
  }
  function w(S) {
    if (((b = !1), h(S), !_))
      if (n(u) !== null) (_ = !0), P(C);
      else {
        var $ = n(s);
        $ !== null && k(w, $.startTime - S);
      }
  }
  function C(S, $) {
    (_ = !1), b && ((b = !1), v(M), (M = -1)), (m = !0);
    var R = d;
    try {
      for (
        h($), p = n(u);
        p !== null && (!(p.expirationTime > $) || (S && !Q()));

      ) {
        var D = p.callback;
        if (typeof D == "function") {
          (p.callback = null), (d = p.priorityLevel);
          var X = D(p.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof X == "function" ? (p.callback = X) : p === n(u) && r(u),
            h($);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var J = !0;
      else {
        var ne = n(s);
        ne !== null && k(w, ne.startTime - $), (J = !1);
      }
      return J;
    } finally {
      (p = null), (d = R), (m = !1);
    }
  }
  var T = !1,
    x = null,
    M = -1,
    B = 5,
    N = -1;
  function Q() {
    return !(e.unstable_now() - N < B);
  }
  function I() {
    if (x !== null) {
      var S = e.unstable_now();
      N = S;
      var $ = !0;
      try {
        $ = x(!0, S);
      } finally {
        $ ? j() : ((T = !1), (x = null));
      }
    } else T = !1;
  }
  var j;
  if (typeof c == "function")
    j = function () {
      c(I);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      V = W.port2;
    (W.port1.onmessage = I),
      (j = function () {
        V.postMessage(null);
      });
  } else
    j = function () {
      A(I, 0);
    };
  function P(S) {
    (x = S), T || ((T = !0), j());
  }
  function k(S, $) {
    M = A(function () {
      S(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || m || ((_ = !0), P(C));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (S) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = d;
      }
      var R = d;
      d = $;
      try {
        return S();
      } finally {
        d = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, $) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var R = d;
      d = S;
      try {
        return $();
      } finally {
        d = R;
      }
    }),
    (e.unstable_scheduleCallback = function (S, $, R) {
      var D = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? D + R : D))
          : (R = D),
        S)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = R + X),
        (S = {
          id: f++,
          callback: $,
          priorityLevel: S,
          startTime: R,
          expirationTime: X,
          sortIndex: -1,
        }),
        R > D
          ? ((S.sortIndex = R),
            t(s, S),
            n(u) === null &&
              S === n(s) &&
              (b ? (v(M), (M = -1)) : (b = !0), k(w, R - D)))
          : ((S.sortIndex = X), t(u, S), _ || m || ((_ = !0), P(C))),
        S
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (S) {
      var $ = d;
      return function () {
        var R = d;
        d = $;
        try {
          return S.apply(this, arguments);
        } finally {
          d = R;
        }
      };
    });
})(Bh);
zh.exports = Bh;
var Cy = zh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh = y,
  vt = Cy;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Hh = new Set(),
  mi = {};
function Ir(e, t) {
  mo(e, t), mo(e + "Capture", t);
}
function mo(e, t) {
  for (mi[e] = t, e = 0; e < t.length; e++) Hh.add(t[e]);
}
var yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zs = Object.prototype.hasOwnProperty,
  Oy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  cp = {},
  fp = {};
function ky(e) {
  return zs.call(fp, e)
    ? !0
    : zs.call(cp, e)
    ? !1
    : Oy.test(e)
    ? (fp[e] = !0)
    : ((cp[e] = !0), !1);
}
function Ty(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $y(e, t, n, r) {
  if (t === null || typeof t > "u" || Ty(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ye(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vf = /[\-:]([a-z])/g;
function gf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vf, gf);
    Fe[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vf, gf);
    Fe[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vf, gf);
  Fe[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mf(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($y(t, n, o, r) && (n = null),
    r || o === null
      ? ky(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bn = Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oa = Symbol.for("react.element"),
  Kr = Symbol.for("react.portal"),
  qr = Symbol.for("react.fragment"),
  yf = Symbol.for("react.strict_mode"),
  Bs = Symbol.for("react.profiler"),
  Vh = Symbol.for("react.provider"),
  Uh = Symbol.for("react.context"),
  Sf = Symbol.for("react.forward_ref"),
  Fs = Symbol.for("react.suspense"),
  Hs = Symbol.for("react.suspense_list"),
  _f = Symbol.for("react.memo"),
  An = Symbol.for("react.lazy"),
  Wh = Symbol.for("react.offscreen"),
  dp = Symbol.iterator;
function zo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dp && e[dp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  Du;
function Jo(e) {
  if (Du === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Du = (t && t[1]) || "";
    }
  return (
    `
` +
    Du +
    e
  );
}
var zu = !1;
function Bu(e, t) {
  if (!e || zu) return "";
  zu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var u =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (zu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jo(e) : "";
}
function Py(e) {
  switch (e.tag) {
    case 5:
      return Jo(e.type);
    case 16:
      return Jo("Lazy");
    case 13:
      return Jo("Suspense");
    case 19:
      return Jo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bu(e.type, !1)), e;
    case 11:
      return (e = Bu(e.type.render, !1)), e;
    case 1:
      return (e = Bu(e.type, !0)), e;
    default:
      return "";
  }
}
function Vs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qr:
      return "Fragment";
    case Kr:
      return "Portal";
    case Bs:
      return "Profiler";
    case yf:
      return "StrictMode";
    case Fs:
      return "Suspense";
    case Hs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uh:
        return (e.displayName || "Context") + ".Consumer";
      case Vh:
        return (e._context.displayName || "Context") + ".Provider";
      case Sf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _f:
        return (
          (t = e.displayName || null), t !== null ? t : Vs(e.type) || "Memo"
        );
      case An:
        (t = e._payload), (e = e._init);
        try {
          return Vs(e(t));
        } catch {}
    }
  return null;
}
function Ry(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Vs(t);
    case 8:
      return t === yf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Yn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ay(e) {
  var t = Gh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ia(e) {
  e._valueTracker || (e._valueTracker = Ay(e));
}
function Xh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function rl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Us(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Yn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qh(e, t) {
  (t = t.checked), t != null && mf(e, "checked", t, !1);
}
function Ws(e, t) {
  Qh(e, t);
  var n = Yn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Gs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Gs(e, t.type, Yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Gs(e, t, n) {
  (t !== "number" || rl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ei = Array.isArray;
function co(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (ei(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Yn(n) };
}
function Kh(e, t) {
  var n = Yn(t.value),
    r = Yn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function gp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var aa,
  Yh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        aa = aa || document.createElement("div"),
          aa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = aa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function yi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  My = ["Webkit", "ms", "Moz", "O"];
Object.keys(oi).forEach(function (e) {
  My.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oi[t] = oi[e]);
  });
});
function Zh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (oi.hasOwnProperty(e) && oi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Jh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Zh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Iy = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ks(e, t) {
  if (t) {
    if (Iy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function qs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ys = null;
function wf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zs = null,
  fo = null,
  po = null;
function mp(e) {
  if ((e = Vi(e))) {
    if (typeof Zs != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Ul(t)), Zs(e.stateNode, e.type, t));
  }
}
function ev(e) {
  fo ? (po ? po.push(e) : (po = [e])) : (fo = e);
}
function tv() {
  if (fo) {
    var e = fo,
      t = po;
    if (((po = fo = null), mp(e), t)) for (e = 0; e < t.length; e++) mp(t[e]);
  }
}
function nv(e, t) {
  return e(t);
}
function rv() {}
var Fu = !1;
function ov(e, t, n) {
  if (Fu) return e(t, n);
  Fu = !0;
  try {
    return nv(e, t, n);
  } finally {
    (Fu = !1), (fo !== null || po !== null) && (rv(), tv());
  }
}
function Si(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ul(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Js = !1;
if (yn)
  try {
    var Bo = {};
    Object.defineProperty(Bo, "passive", {
      get: function () {
        Js = !0;
      },
    }),
      window.addEventListener("test", Bo, Bo),
      window.removeEventListener("test", Bo, Bo);
  } catch {
    Js = !1;
  }
function Ly(e, t, n, r, o, i, a, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var ii = !1,
  ol = null,
  il = !1,
  ec = null,
  jy = {
    onError: function (e) {
      (ii = !0), (ol = e);
    },
  };
function Ny(e, t, n, r, o, i, a, l, u) {
  (ii = !1), (ol = null), Ly.apply(jy, arguments);
}
function Dy(e, t, n, r, o, i, a, l, u) {
  if ((Ny.apply(this, arguments), ii)) {
    if (ii) {
      var s = ol;
      (ii = !1), (ol = null);
    } else throw Error(L(198));
    il || ((il = !0), (ec = s));
  }
}
function Lr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function iv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yp(e) {
  if (Lr(e) !== e) throw Error(L(188));
}
function zy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return yp(o), e;
        if (i === r) return yp(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function av(e) {
  return (e = zy(e)), e !== null ? lv(e) : null;
}
function lv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uv = vt.unstable_scheduleCallback,
  Sp = vt.unstable_cancelCallback,
  By = vt.unstable_shouldYield,
  Fy = vt.unstable_requestPaint,
  Ee = vt.unstable_now,
  Hy = vt.unstable_getCurrentPriorityLevel,
  Ef = vt.unstable_ImmediatePriority,
  sv = vt.unstable_UserBlockingPriority,
  al = vt.unstable_NormalPriority,
  Vy = vt.unstable_LowPriority,
  cv = vt.unstable_IdlePriority,
  Bl = null,
  Jt = null;
function Uy(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var zt = Math.clz32 ? Math.clz32 : Xy,
  Wy = Math.log,
  Gy = Math.LN2;
function Xy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wy(e) / Gy) | 0)) | 0;
}
var la = 64,
  ua = 4194304;
function ti(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ll(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = ti(l)) : ((i &= a), i !== 0 && (r = ti(i)));
  } else (a = n & ~o), a !== 0 ? (r = ti(a)) : i !== 0 && (r = ti(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - zt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Qy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ky(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - zt(i),
      l = 1 << a,
      u = o[a];
    u === -1
      ? (!(l & n) || l & r) && (o[a] = Qy(l, t))
      : u <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function tc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fv() {
  var e = la;
  return (la <<= 1), !(la & 4194240) && (la = 64), e;
}
function Hu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - zt(t)),
    (e[t] = n);
}
function qy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - zt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function xf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - zt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ie = 0;
function dv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pv,
  bf,
  hv,
  vv,
  gv,
  nc = !1,
  sa = [],
  Hn = null,
  Vn = null,
  Un = null,
  _i = new Map(),
  wi = new Map(),
  In = [],
  Yy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _p(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Hn = null;
      break;
    case "dragenter":
    case "dragleave":
      Vn = null;
      break;
    case "mouseover":
    case "mouseout":
      Un = null;
      break;
    case "pointerover":
    case "pointerout":
      _i.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wi.delete(t.pointerId);
  }
}
function Fo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Vi(t)), t !== null && bf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Zy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Hn = Fo(Hn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Vn = Fo(Vn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Un = Fo(Un, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return _i.set(i, Fo(_i.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), wi.set(i, Fo(wi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function mv(e) {
  var t = vr(e.target);
  if (t !== null) {
    var n = Lr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = iv(n)), t !== null)) {
          (e.blockedOn = t),
            gv(e.priority, function () {
              hv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Na(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = rc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ys = r), n.target.dispatchEvent(r), (Ys = null);
    } else return (t = Vi(n)), t !== null && bf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function wp(e, t, n) {
  Na(e) && n.delete(t);
}
function Jy() {
  (nc = !1),
    Hn !== null && Na(Hn) && (Hn = null),
    Vn !== null && Na(Vn) && (Vn = null),
    Un !== null && Na(Un) && (Un = null),
    _i.forEach(wp),
    wi.forEach(wp);
}
function Ho(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nc ||
      ((nc = !0),
      vt.unstable_scheduleCallback(vt.unstable_NormalPriority, Jy)));
}
function Ei(e) {
  function t(o) {
    return Ho(o, e);
  }
  if (0 < sa.length) {
    Ho(sa[0], e);
    for (var n = 1; n < sa.length; n++) {
      var r = sa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Hn !== null && Ho(Hn, e),
      Vn !== null && Ho(Vn, e),
      Un !== null && Ho(Un, e),
      _i.forEach(t),
      wi.forEach(t),
      n = 0;
    n < In.length;
    n++
  )
    (r = In[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
    mv(n), n.blockedOn === null && In.shift();
}
var ho = bn.ReactCurrentBatchConfig,
  ul = !0;
function eS(e, t, n, r) {
  var o = ie,
    i = ho.transition;
  ho.transition = null;
  try {
    (ie = 1), Cf(e, t, n, r);
  } finally {
    (ie = o), (ho.transition = i);
  }
}
function tS(e, t, n, r) {
  var o = ie,
    i = ho.transition;
  ho.transition = null;
  try {
    (ie = 4), Cf(e, t, n, r);
  } finally {
    (ie = o), (ho.transition = i);
  }
}
function Cf(e, t, n, r) {
  if (ul) {
    var o = rc(e, t, n, r);
    if (o === null) Zu(e, t, r, sl, n), _p(e, r);
    else if (Zy(o, e, t, n, r)) r.stopPropagation();
    else if ((_p(e, r), t & 4 && -1 < Yy.indexOf(e))) {
      for (; o !== null; ) {
        var i = Vi(o);
        if (
          (i !== null && pv(i),
          (i = rc(e, t, n, r)),
          i === null && Zu(e, t, r, sl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Zu(e, t, r, null, n);
  }
}
var sl = null;
function rc(e, t, n, r) {
  if (((sl = null), (e = wf(r)), (e = vr(e)), e !== null))
    if (((t = Lr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = iv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (sl = e), null;
}
function yv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Hy()) {
        case Ef:
          return 1;
        case sv:
          return 4;
        case al:
        case Vy:
          return 16;
        case cv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nn = null,
  Of = null,
  Da = null;
function Sv() {
  if (Da) return Da;
  var e,
    t = Of,
    n = t.length,
    r,
    o = "value" in Nn ? Nn.value : Nn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Da = o.slice(e, 1 < r ? 1 - r : void 0));
}
function za(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ca() {
  return !0;
}
function Ep() {
  return !1;
}
function mt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ca
        : Ep),
      (this.isPropagationStopped = Ep),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ca));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ca));
      },
      persist: function () {},
      isPersistent: ca,
    }),
    t
  );
}
var $o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  kf = mt($o),
  Hi = me({}, $o, { view: 0, detail: 0 }),
  nS = mt(Hi),
  Vu,
  Uu,
  Vo,
  Fl = me({}, Hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Vo &&
            (Vo && e.type === "mousemove"
              ? ((Vu = e.screenX - Vo.screenX), (Uu = e.screenY - Vo.screenY))
              : (Uu = Vu = 0),
            (Vo = e)),
          Vu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Uu;
    },
  }),
  xp = mt(Fl),
  rS = me({}, Fl, { dataTransfer: 0 }),
  oS = mt(rS),
  iS = me({}, Hi, { relatedTarget: 0 }),
  Wu = mt(iS),
  aS = me({}, $o, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lS = mt(aS),
  uS = me({}, $o, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sS = mt(uS),
  cS = me({}, $o, { data: 0 }),
  bp = mt(cS),
  fS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  pS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pS[e]) ? !!t[e] : !1;
}
function Tf() {
  return hS;
}
var vS = me({}, Hi, {
    key: function (e) {
      if (e.key) {
        var t = fS[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = za(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dS[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tf,
    charCode: function (e) {
      return e.type === "keypress" ? za(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? za(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gS = mt(vS),
  mS = me({}, Fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cp = mt(mS),
  yS = me({}, Hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tf,
  }),
  SS = mt(yS),
  _S = me({}, $o, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wS = mt(_S),
  ES = me({}, Fl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xS = mt(ES),
  bS = [9, 13, 27, 32],
  $f = yn && "CompositionEvent" in window,
  ai = null;
yn && "documentMode" in document && (ai = document.documentMode);
var CS = yn && "TextEvent" in window && !ai,
  _v = yn && (!$f || (ai && 8 < ai && 11 >= ai)),
  Op = " ",
  kp = !1;
function wv(e, t) {
  switch (e) {
    case "keyup":
      return bS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ev(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yr = !1;
function OS(e, t) {
  switch (e) {
    case "compositionend":
      return Ev(t);
    case "keypress":
      return t.which !== 32 ? null : ((kp = !0), Op);
    case "textInput":
      return (e = t.data), e === Op && kp ? null : e;
    default:
      return null;
  }
}
function kS(e, t) {
  if (Yr)
    return e === "compositionend" || (!$f && wv(e, t))
      ? ((e = Sv()), (Da = Of = Nn = null), (Yr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return _v && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var TS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Tp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!TS[e.type] : t === "textarea";
}
function xv(e, t, n, r) {
  ev(r),
    (t = cl(t, "onChange")),
    0 < t.length &&
      ((n = new kf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var li = null,
  xi = null;
function $S(e) {
  Iv(e, 0);
}
function Hl(e) {
  var t = eo(e);
  if (Xh(t)) return e;
}
function PS(e, t) {
  if (e === "change") return t;
}
var bv = !1;
if (yn) {
  var Gu;
  if (yn) {
    var Xu = "oninput" in document;
    if (!Xu) {
      var $p = document.createElement("div");
      $p.setAttribute("oninput", "return;"),
        (Xu = typeof $p.oninput == "function");
    }
    Gu = Xu;
  } else Gu = !1;
  bv = Gu && (!document.documentMode || 9 < document.documentMode);
}
function Pp() {
  li && (li.detachEvent("onpropertychange", Cv), (xi = li = null));
}
function Cv(e) {
  if (e.propertyName === "value" && Hl(xi)) {
    var t = [];
    xv(t, xi, e, wf(e)), ov($S, t);
  }
}
function RS(e, t, n) {
  e === "focusin"
    ? (Pp(), (li = t), (xi = n), li.attachEvent("onpropertychange", Cv))
    : e === "focusout" && Pp();
}
function AS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Hl(xi);
}
function MS(e, t) {
  if (e === "click") return Hl(t);
}
function IS(e, t) {
  if (e === "input" || e === "change") return Hl(t);
}
function LS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ut = typeof Object.is == "function" ? Object.is : LS;
function bi(e, t) {
  if (Ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zs.call(t, o) || !Ut(e[o], t[o])) return !1;
  }
  return !0;
}
function Rp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ap(e, t) {
  var n = Rp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Rp(n);
  }
}
function Ov(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ov(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function kv() {
  for (var e = window, t = rl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = rl(e.document);
  }
  return t;
}
function Pf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function jS(e) {
  var t = kv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ov(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Pf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ap(n, i));
        var a = Ap(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var NS = yn && "documentMode" in document && 11 >= document.documentMode,
  Zr = null,
  oc = null,
  ui = null,
  ic = !1;
function Mp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ic ||
    Zr == null ||
    Zr !== rl(r) ||
    ((r = Zr),
    "selectionStart" in r && Pf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ui && bi(ui, r)) ||
      ((ui = r),
      (r = cl(oc, "onSelect")),
      0 < r.length &&
        ((t = new kf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zr))));
}
function fa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jr = {
    animationend: fa("Animation", "AnimationEnd"),
    animationiteration: fa("Animation", "AnimationIteration"),
    animationstart: fa("Animation", "AnimationStart"),
    transitionend: fa("Transition", "TransitionEnd"),
  },
  Qu = {},
  Tv = {};
yn &&
  ((Tv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jr.animationend.animation,
    delete Jr.animationiteration.animation,
    delete Jr.animationstart.animation),
  "TransitionEvent" in window || delete Jr.transitionend.transition);
function Vl(e) {
  if (Qu[e]) return Qu[e];
  if (!Jr[e]) return e;
  var t = Jr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tv) return (Qu[e] = t[n]);
  return e;
}
var $v = Vl("animationend"),
  Pv = Vl("animationiteration"),
  Rv = Vl("animationstart"),
  Av = Vl("transitionend"),
  Mv = new Map(),
  Ip =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function er(e, t) {
  Mv.set(e, t), Ir(t, [e]);
}
for (var Ku = 0; Ku < Ip.length; Ku++) {
  var qu = Ip[Ku],
    DS = qu.toLowerCase(),
    zS = qu[0].toUpperCase() + qu.slice(1);
  er(DS, "on" + zS);
}
er($v, "onAnimationEnd");
er(Pv, "onAnimationIteration");
er(Rv, "onAnimationStart");
er("dblclick", "onDoubleClick");
er("focusin", "onFocus");
er("focusout", "onBlur");
er(Av, "onTransitionEnd");
mo("onMouseEnter", ["mouseout", "mouseover"]);
mo("onMouseLeave", ["mouseout", "mouseover"]);
mo("onPointerEnter", ["pointerout", "pointerover"]);
mo("onPointerLeave", ["pointerout", "pointerover"]);
Ir(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ir(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ir(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ir(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ir(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ni =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  BS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));
function Lp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Dy(r, t, void 0, e), (e.currentTarget = null);
}
function Iv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== i && o.isPropagationStopped())) break e;
          Lp(o, l, s), (i = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          Lp(o, l, s), (i = u);
        }
    }
  }
  if (il) throw ((e = ec), (il = !1), (ec = null), e);
}
function ce(e, t) {
  var n = t[cc];
  n === void 0 && (n = t[cc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lv(t, e, 2, !1), n.add(r));
}
function Yu(e, t, n) {
  var r = 0;
  t && (r |= 4), Lv(n, e, r, t);
}
var da = "_reactListening" + Math.random().toString(36).slice(2);
function Ci(e) {
  if (!e[da]) {
    (e[da] = !0),
      Hh.forEach(function (n) {
        n !== "selectionchange" && (BS.has(n) || Yu(n, !1, e), Yu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[da] || ((t[da] = !0), Yu("selectionchange", !1, t));
  }
}
function Lv(e, t, n, r) {
  switch (yv(t)) {
    case 1:
      var o = eS;
      break;
    case 4:
      o = tS;
      break;
    default:
      o = Cf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Js ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Zu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = vr(l)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  ov(function () {
    var s = i,
      f = wf(n),
      p = [];
    e: {
      var d = Mv.get(e);
      if (d !== void 0) {
        var m = kf,
          _ = e;
        switch (e) {
          case "keypress":
            if (za(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = gS;
            break;
          case "focusin":
            (_ = "focus"), (m = Wu);
            break;
          case "focusout":
            (_ = "blur"), (m = Wu);
            break;
          case "beforeblur":
          case "afterblur":
            m = Wu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = xp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = oS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = SS;
            break;
          case $v:
          case Pv:
          case Rv:
            m = lS;
            break;
          case Av:
            m = wS;
            break;
          case "scroll":
            m = nS;
            break;
          case "wheel":
            m = xS;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = sS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Cp;
        }
        var b = (t & 4) !== 0,
          A = !b && e === "scroll",
          v = b ? (d !== null ? d + "Capture" : null) : d;
        b = [];
        for (var c = s, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              v !== null && ((w = Si(c, v)), w != null && b.push(Oi(c, w, h)))),
            A)
          )
            break;
          c = c.return;
        }
        0 < b.length &&
          ((d = new m(d, _, null, n, f)), p.push({ event: d, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Ys &&
            (_ = n.relatedTarget || n.fromElement) &&
            (vr(_) || _[Sn]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((_ = n.relatedTarget || n.toElement),
              (m = s),
              (_ = _ ? vr(_) : null),
              _ !== null &&
                ((A = Lr(_)), _ !== A || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((m = null), (_ = s)),
          m !== _)
        ) {
          if (
            ((b = xp),
            (w = "onMouseLeave"),
            (v = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = Cp),
              (w = "onPointerLeave"),
              (v = "onPointerEnter"),
              (c = "pointer")),
            (A = m == null ? d : eo(m)),
            (h = _ == null ? d : eo(_)),
            (d = new b(w, c + "leave", m, n, f)),
            (d.target = A),
            (d.relatedTarget = h),
            (w = null),
            vr(f) === s &&
              ((b = new b(v, c + "enter", _, n, f)),
              (b.target = h),
              (b.relatedTarget = A),
              (w = b)),
            (A = w),
            m && _)
          )
            t: {
              for (b = m, v = _, c = 0, h = b; h; h = Hr(h)) c++;
              for (h = 0, w = v; w; w = Hr(w)) h++;
              for (; 0 < c - h; ) (b = Hr(b)), c--;
              for (; 0 < h - c; ) (v = Hr(v)), h--;
              for (; c--; ) {
                if (b === v || (v !== null && b === v.alternate)) break t;
                (b = Hr(b)), (v = Hr(v));
              }
              b = null;
            }
          else b = null;
          m !== null && jp(p, d, m, b, !1),
            _ !== null && A !== null && jp(p, A, _, b, !0);
        }
      }
      e: {
        if (
          ((d = s ? eo(s) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var C = PS;
        else if (Tp(d))
          if (bv) C = IS;
          else {
            C = AS;
            var T = RS;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = MS);
        if (C && (C = C(e, s))) {
          xv(p, C, n, f);
          break e;
        }
        T && T(e, d, s),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            Gs(d, "number", d.value);
      }
      switch (((T = s ? eo(s) : window), e)) {
        case "focusin":
          (Tp(T) || T.contentEditable === "true") &&
            ((Zr = T), (oc = s), (ui = null));
          break;
        case "focusout":
          ui = oc = Zr = null;
          break;
        case "mousedown":
          ic = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ic = !1), Mp(p, n, f);
          break;
        case "selectionchange":
          if (NS) break;
        case "keydown":
        case "keyup":
          Mp(p, n, f);
      }
      var x;
      if ($f)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Yr
          ? wv(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (_v &&
          n.locale !== "ko" &&
          (Yr || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Yr && (x = Sv())
            : ((Nn = f),
              (Of = "value" in Nn ? Nn.value : Nn.textContent),
              (Yr = !0))),
        (T = cl(s, M)),
        0 < T.length &&
          ((M = new bp(M, e, null, n, f)),
          p.push({ event: M, listeners: T }),
          x ? (M.data = x) : ((x = Ev(n)), x !== null && (M.data = x)))),
        (x = CS ? OS(e, n) : kS(e, n)) &&
          ((s = cl(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new bp("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: s }),
            (f.data = x)));
    }
    Iv(p, t);
  });
}
function Oi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Si(e, n)),
      i != null && r.unshift(Oi(e, i, o)),
      (i = Si(e, t)),
      i != null && r.push(Oi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Hr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jp(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      o
        ? ((u = Si(n, i)), u != null && a.unshift(Oi(n, u, l)))
        : o || ((u = Si(n, i)), u != null && a.push(Oi(n, u, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var FS = /\r\n?/g,
  HS = /\u0000|\uFFFD/g;
function Np(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      FS,
      `
`
    )
    .replace(HS, "");
}
function pa(e, t, n) {
  if (((t = Np(t)), Np(e) !== t && n)) throw Error(L(425));
}
function fl() {}
var ac = null,
  lc = null;
function uc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sc = typeof setTimeout == "function" ? setTimeout : void 0,
  VS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Dp = typeof Promise == "function" ? Promise : void 0,
  US =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Dp < "u"
      ? function (e) {
          return Dp.resolve(null).then(e).catch(WS);
        }
      : sc;
function WS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ju(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ei(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ei(t);
}
function Wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Po = Math.random().toString(36).slice(2),
  qt = "__reactFiber$" + Po,
  ki = "__reactProps$" + Po,
  Sn = "__reactContainer$" + Po,
  cc = "__reactEvents$" + Po,
  GS = "__reactListeners$" + Po,
  XS = "__reactHandles$" + Po;
function vr(e) {
  var t = e[qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Sn] || n[qt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zp(e); e !== null; ) {
          if ((n = e[qt])) return n;
          e = zp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Vi(e) {
  return (
    (e = e[qt] || e[Sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function eo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Ul(e) {
  return e[ki] || null;
}
var fc = [],
  to = -1;
function tr(e) {
  return { current: e };
}
function fe(e) {
  0 > to || ((e.current = fc[to]), (fc[to] = null), to--);
}
function se(e, t) {
  to++, (fc[to] = e.current), (e.current = t);
}
var Zn = {},
  We = tr(Zn),
  nt = tr(!1),
  Cr = Zn;
function yo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function rt(e) {
  return (e = e.childContextTypes), e != null;
}
function dl() {
  fe(nt), fe(We);
}
function Bp(e, t, n) {
  if (We.current !== Zn) throw Error(L(168));
  se(We, t), se(nt, n);
}
function jv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, Ry(e) || "Unknown", o));
  return me({}, n, r);
}
function pl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zn),
    (Cr = We.current),
    se(We, e),
    se(nt, nt.current),
    !0
  );
}
function Fp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = jv(e, t, Cr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(nt),
      fe(We),
      se(We, e))
    : fe(nt),
    se(nt, n);
}
var fn = null,
  Wl = !1,
  es = !1;
function Nv(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function QS(e) {
  (Wl = !0), Nv(e);
}
function nr() {
  if (!es && fn !== null) {
    es = !0;
    var e = 0,
      t = ie;
    try {
      var n = fn;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (fn = null), (Wl = !1);
    } catch (o) {
      throw (fn !== null && (fn = fn.slice(e + 1)), uv(Ef, nr), o);
    } finally {
      (ie = t), (es = !1);
    }
  }
  return null;
}
var no = [],
  ro = 0,
  hl = null,
  vl = 0,
  _t = [],
  wt = 0,
  Or = null,
  hn = 1,
  vn = "";
function fr(e, t) {
  (no[ro++] = vl), (no[ro++] = hl), (hl = e), (vl = t);
}
function Dv(e, t, n) {
  (_t[wt++] = hn), (_t[wt++] = vn), (_t[wt++] = Or), (Or = e);
  var r = hn;
  e = vn;
  var o = 32 - zt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - zt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (hn = (1 << (32 - zt(t) + o)) | (n << o) | r),
      (vn = i + e);
  } else (hn = (1 << i) | (n << o) | r), (vn = e);
}
function Rf(e) {
  e.return !== null && (fr(e, 1), Dv(e, 1, 0));
}
function Af(e) {
  for (; e === hl; )
    (hl = no[--ro]), (no[ro] = null), (vl = no[--ro]), (no[ro] = null);
  for (; e === Or; )
    (Or = _t[--wt]),
      (_t[wt] = null),
      (vn = _t[--wt]),
      (_t[wt] = null),
      (hn = _t[--wt]),
      (_t[wt] = null);
}
var ht = null,
  dt = null,
  he = !1,
  Nt = null;
function zv(e, t) {
  var n = xt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ht = e), (dt = Wn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (dt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Or !== null ? { id: hn, overflow: vn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ht = e),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function dc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pc(e) {
  if (he) {
    var t = dt;
    if (t) {
      var n = t;
      if (!Hp(e, t)) {
        if (dc(e)) throw Error(L(418));
        t = Wn(n.nextSibling);
        var r = ht;
        t && Hp(e, t)
          ? zv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (ht = e));
      }
    } else {
      if (dc(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (ht = e);
    }
  }
}
function Vp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ht = e;
}
function ha(e) {
  if (e !== ht) return !1;
  if (!he) return Vp(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !uc(e.type, e.memoizedProps))),
    t && (t = dt))
  ) {
    if (dc(e)) throw (Bv(), Error(L(418)));
    for (; t; ) zv(e, t), (t = Wn(t.nextSibling));
  }
  if ((Vp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              dt = Wn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      dt = null;
    }
  } else dt = ht ? Wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Bv() {
  for (var e = dt; e; ) e = Wn(e.nextSibling);
}
function So() {
  (dt = ht = null), (he = !1);
}
function Mf(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var KS = bn.ReactCurrentBatchConfig;
function It(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var gl = tr(null),
  ml = null,
  oo = null,
  If = null;
function Lf() {
  If = oo = ml = null;
}
function jf(e) {
  var t = gl.current;
  fe(gl), (e._currentValue = t);
}
function hc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function vo(e, t) {
  (ml = e),
    (If = oo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (et = !0), (e.firstContext = null));
}
function Ct(e) {
  var t = e._currentValue;
  if (If !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), oo === null)) {
      if (ml === null) throw Error(L(308));
      (oo = e), (ml.dependencies = { lanes: 0, firstContext: e });
    } else oo = oo.next = e;
  return t;
}
var gr = null;
function Nf(e) {
  gr === null ? (gr = [e]) : gr.push(e);
}
function Fv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Nf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    _n(e, r)
  );
}
function _n(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Mn = !1;
function Df(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function gn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), oe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      _n(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Nf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    _n(e, n)
  );
}
function Ba(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xf(e, n);
  }
}
function Up(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function yl(e, t, n, r) {
  var o = e.updateQueue;
  Mn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), a === null ? (i = s) : (a.next = s), (a = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== a &&
        (l === null ? (f.firstBaseUpdate = s) : (l.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var p = o.baseState;
    (a = 0), (f = s = u = null), (l = i);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var _ = e,
            b = l;
          switch (((d = t), (m = n), b.tag)) {
            case 1:
              if (((_ = b.payload), typeof _ == "function")) {
                p = _.call(m, p, d);
                break e;
              }
              p = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = b.payload),
                (d = typeof _ == "function" ? _.call(m, p, d) : _),
                d == null)
              )
                break e;
              p = me({}, p, d);
              break e;
            case 2:
              Mn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((s = f = m), (u = p)) : (f = f.next = m),
          (a |= d);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = p),
      (o.baseState = u),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Tr |= a), (e.lanes = a), (e.memoizedState = p);
  }
}
function Wp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var Vv = new Fh.Component().refs;
function vc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      o = Qn(e),
      i = gn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Gn(e, i, o)),
      t !== null && (Bt(t, e, o, r), Ba(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      o = Qn(e),
      i = gn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Gn(e, i, o)),
      t !== null && (Bt(t, e, o, r), Ba(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ke(),
      r = Qn(e),
      o = gn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Gn(e, o, r)),
      t !== null && (Bt(t, e, r, n), Ba(t, e, r));
  },
};
function Gp(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bi(n, r) || !bi(o, i)
      : !0
  );
}
function Uv(e, t, n) {
  var r = !1,
    o = Zn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ct(i))
      : ((o = rt(t) ? Cr : We.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? yo(e, o) : Zn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Xp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
}
function gc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Vv), Df(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ct(i))
    : ((i = rt(t) ? Cr : We.current), (o.context = yo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (vc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Gl.enqueueReplaceState(o, o.state, null),
      yl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Uo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === Vv && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function va(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Qp(e) {
  var t = e._init;
  return t(e._payload);
}
function Wv(e) {
  function t(v, c) {
    if (e) {
      var h = v.deletions;
      h === null ? ((v.deletions = [c]), (v.flags |= 16)) : h.push(c);
    }
  }
  function n(v, c) {
    if (!e) return null;
    for (; c !== null; ) t(v, c), (c = c.sibling);
    return null;
  }
  function r(v, c) {
    for (v = new Map(); c !== null; )
      c.key !== null ? v.set(c.key, c) : v.set(c.index, c), (c = c.sibling);
    return v;
  }
  function o(v, c) {
    return (v = Kn(v, c)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, c, h) {
    return (
      (v.index = h),
      e
        ? ((h = v.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((v.flags |= 2), c) : h)
            : ((v.flags |= 2), c))
        : ((v.flags |= 1048576), c)
    );
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, c, h, w) {
    return c === null || c.tag !== 6
      ? ((c = ls(h, v.mode, w)), (c.return = v), c)
      : ((c = o(c, h)), (c.return = v), c);
  }
  function u(v, c, h, w) {
    var C = h.type;
    return C === qr
      ? f(v, c, h.props.children, w, h.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === An &&
            Qp(C) === c.type))
      ? ((w = o(c, h.props)), (w.ref = Uo(v, c, h)), (w.return = v), w)
      : ((w = Ga(h.type, h.key, h.props, null, v.mode, w)),
        (w.ref = Uo(v, c, h)),
        (w.return = v),
        w);
  }
  function s(v, c, h, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = us(h, v.mode, w)), (c.return = v), c)
      : ((c = o(c, h.children || [])), (c.return = v), c);
  }
  function f(v, c, h, w, C) {
    return c === null || c.tag !== 7
      ? ((c = wr(h, v.mode, w, C)), (c.return = v), c)
      : ((c = o(c, h)), (c.return = v), c);
  }
  function p(v, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ls("" + c, v.mode, h)), (c.return = v), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case oa:
          return (
            (h = Ga(c.type, c.key, c.props, null, v.mode, h)),
            (h.ref = Uo(v, null, c)),
            (h.return = v),
            h
          );
        case Kr:
          return (c = us(c, v.mode, h)), (c.return = v), c;
        case An:
          var w = c._init;
          return p(v, w(c._payload), h);
      }
      if (ei(c) || zo(c))
        return (c = wr(c, v.mode, h, null)), (c.return = v), c;
      va(v, c);
    }
    return null;
  }
  function d(v, c, h, w) {
    var C = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : l(v, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case oa:
          return h.key === C ? u(v, c, h, w) : null;
        case Kr:
          return h.key === C ? s(v, c, h, w) : null;
        case An:
          return (C = h._init), d(v, c, C(h._payload), w);
      }
      if (ei(h) || zo(h)) return C !== null ? null : f(v, c, h, w, null);
      va(v, h);
    }
    return null;
  }
  function m(v, c, h, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (v = v.get(h) || null), l(c, v, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case oa:
          return (v = v.get(w.key === null ? h : w.key) || null), u(c, v, w, C);
        case Kr:
          return (v = v.get(w.key === null ? h : w.key) || null), s(c, v, w, C);
        case An:
          var T = w._init;
          return m(v, c, h, T(w._payload), C);
      }
      if (ei(w) || zo(w)) return (v = v.get(h) || null), f(c, v, w, C, null);
      va(c, w);
    }
    return null;
  }
  function _(v, c, h, w) {
    for (
      var C = null, T = null, x = c, M = (c = 0), B = null;
      x !== null && M < h.length;
      M++
    ) {
      x.index > M ? ((B = x), (x = null)) : (B = x.sibling);
      var N = d(v, x, h[M], w);
      if (N === null) {
        x === null && (x = B);
        break;
      }
      e && x && N.alternate === null && t(v, x),
        (c = i(N, c, M)),
        T === null ? (C = N) : (T.sibling = N),
        (T = N),
        (x = B);
    }
    if (M === h.length) return n(v, x), he && fr(v, M), C;
    if (x === null) {
      for (; M < h.length; M++)
        (x = p(v, h[M], w)),
          x !== null &&
            ((c = i(x, c, M)), T === null ? (C = x) : (T.sibling = x), (T = x));
      return he && fr(v, M), C;
    }
    for (x = r(v, x); M < h.length; M++)
      (B = m(x, v, M, h[M], w)),
        B !== null &&
          (e && B.alternate !== null && x.delete(B.key === null ? M : B.key),
          (c = i(B, c, M)),
          T === null ? (C = B) : (T.sibling = B),
          (T = B));
    return (
      e &&
        x.forEach(function (Q) {
          return t(v, Q);
        }),
      he && fr(v, M),
      C
    );
  }
  function b(v, c, h, w) {
    var C = zo(h);
    if (typeof C != "function") throw Error(L(150));
    if (((h = C.call(h)), h == null)) throw Error(L(151));
    for (
      var T = (C = null), x = c, M = (c = 0), B = null, N = h.next();
      x !== null && !N.done;
      M++, N = h.next()
    ) {
      x.index > M ? ((B = x), (x = null)) : (B = x.sibling);
      var Q = d(v, x, N.value, w);
      if (Q === null) {
        x === null && (x = B);
        break;
      }
      e && x && Q.alternate === null && t(v, x),
        (c = i(Q, c, M)),
        T === null ? (C = Q) : (T.sibling = Q),
        (T = Q),
        (x = B);
    }
    if (N.done) return n(v, x), he && fr(v, M), C;
    if (x === null) {
      for (; !N.done; M++, N = h.next())
        (N = p(v, N.value, w)),
          N !== null &&
            ((c = i(N, c, M)), T === null ? (C = N) : (T.sibling = N), (T = N));
      return he && fr(v, M), C;
    }
    for (x = r(v, x); !N.done; M++, N = h.next())
      (N = m(x, v, M, N.value, w)),
        N !== null &&
          (e && N.alternate !== null && x.delete(N.key === null ? M : N.key),
          (c = i(N, c, M)),
          T === null ? (C = N) : (T.sibling = N),
          (T = N));
    return (
      e &&
        x.forEach(function (I) {
          return t(v, I);
        }),
      he && fr(v, M),
      C
    );
  }
  function A(v, c, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === qr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case oa:
          e: {
            for (var C = h.key, T = c; T !== null; ) {
              if (T.key === C) {
                if (((C = h.type), C === qr)) {
                  if (T.tag === 7) {
                    n(v, T.sibling),
                      (c = o(T, h.props.children)),
                      (c.return = v),
                      (v = c);
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === An &&
                    Qp(C) === T.type)
                ) {
                  n(v, T.sibling),
                    (c = o(T, h.props)),
                    (c.ref = Uo(v, T, h)),
                    (c.return = v),
                    (v = c);
                  break e;
                }
                n(v, T);
                break;
              } else t(v, T);
              T = T.sibling;
            }
            h.type === qr
              ? ((c = wr(h.props.children, v.mode, w, h.key)),
                (c.return = v),
                (v = c))
              : ((w = Ga(h.type, h.key, h.props, null, v.mode, w)),
                (w.ref = Uo(v, c, h)),
                (w.return = v),
                (v = w));
          }
          return a(v);
        case Kr:
          e: {
            for (T = h.key; c !== null; ) {
              if (c.key === T)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(v, c.sibling),
                    (c = o(c, h.children || [])),
                    (c.return = v),
                    (v = c);
                  break e;
                } else {
                  n(v, c);
                  break;
                }
              else t(v, c);
              c = c.sibling;
            }
            (c = us(h, v.mode, w)), (c.return = v), (v = c);
          }
          return a(v);
        case An:
          return (T = h._init), A(v, c, T(h._payload), w);
      }
      if (ei(h)) return _(v, c, h, w);
      if (zo(h)) return b(v, c, h, w);
      va(v, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(v, c.sibling), (c = o(c, h)), (c.return = v), (v = c))
          : (n(v, c), (c = ls(h, v.mode, w)), (c.return = v), (v = c)),
        a(v))
      : n(v, c);
  }
  return A;
}
var _o = Wv(!0),
  Gv = Wv(!1),
  Ui = {},
  en = tr(Ui),
  Ti = tr(Ui),
  $i = tr(Ui);
function mr(e) {
  if (e === Ui) throw Error(L(174));
  return e;
}
function zf(e, t) {
  switch ((se($i, t), se(Ti, e), se(en, Ui), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qs(t, e));
  }
  fe(en), se(en, t);
}
function wo() {
  fe(en), fe(Ti), fe($i);
}
function Xv(e) {
  mr($i.current);
  var t = mr(en.current),
    n = Qs(t, e.type);
  t !== n && (se(Ti, e), se(en, n));
}
function Bf(e) {
  Ti.current === e && (fe(en), fe(Ti));
}
var ve = tr(0);
function Sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ts = [];
function Ff() {
  for (var e = 0; e < ts.length; e++)
    ts[e]._workInProgressVersionPrimary = null;
  ts.length = 0;
}
var Fa = bn.ReactCurrentDispatcher,
  ns = bn.ReactCurrentBatchConfig,
  kr = 0,
  ge = null,
  $e = null,
  Ae = null,
  _l = !1,
  si = !1,
  Pi = 0,
  qS = 0;
function He() {
  throw Error(L(321));
}
function Hf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ut(e[n], t[n])) return !1;
  return !0;
}
function Vf(e, t, n, r, o, i) {
  if (
    ((kr = i),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fa.current = e === null || e.memoizedState === null ? e_ : t_),
    (e = n(r, o)),
    si)
  ) {
    i = 0;
    do {
      if (((si = !1), (Pi = 0), 25 <= i)) throw Error(L(301));
      (i += 1),
        (Ae = $e = null),
        (t.updateQueue = null),
        (Fa.current = n_),
        (e = n(r, o));
    } while (si);
  }
  if (
    ((Fa.current = wl),
    (t = $e !== null && $e.next !== null),
    (kr = 0),
    (Ae = $e = ge = null),
    (_l = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Uf() {
  var e = Pi !== 0;
  return (Pi = 0), e;
}
function Kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (ge.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function Ot() {
  if ($e === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $e.next;
  var t = Ae === null ? ge.memoizedState : Ae.next;
  if (t !== null) (Ae = t), ($e = e);
  else {
    if (e === null) throw Error(L(310));
    ($e = e),
      (e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null,
      }),
      Ae === null ? (ge.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function Ri(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function rs(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = $e,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      u = null,
      s = i;
    do {
      var f = s.lane;
      if ((kr & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = p), (a = r)) : (u = u.next = p),
          (ge.lanes |= f),
          (Tr |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (a = r) : (u.next = l),
      Ut(r, t.memoizedState) || (et = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ge.lanes |= i), (Tr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function os(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Ut(i, t.memoizedState) || (et = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Qv() {}
function Kv(e, t) {
  var n = ge,
    r = Ot(),
    o = t(),
    i = !Ut(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (et = !0)),
    (r = r.queue),
    Wf(Zv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ai(9, Yv.bind(null, n, r, o, t), void 0, null),
      Me === null)
    )
      throw Error(L(349));
    kr & 30 || qv(n, t, o);
  }
  return o;
}
function qv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jv(t) && eg(e);
}
function Zv(e, t, n) {
  return n(function () {
    Jv(t) && eg(e);
  });
}
function Jv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ut(e, n);
  } catch {
    return !0;
  }
}
function eg(e) {
  var t = _n(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function Kp(e) {
  var t = Kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ri,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = JS.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function Ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tg() {
  return Ot().memoizedState;
}
function Ha(e, t, n, r) {
  var o = Kt();
  (ge.flags |= e),
    (o.memoizedState = Ai(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xl(e, t, n, r) {
  var o = Ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if ($e !== null) {
    var a = $e.memoizedState;
    if (((i = a.destroy), r !== null && Hf(r, a.deps))) {
      o.memoizedState = Ai(t, n, i, r);
      return;
    }
  }
  (ge.flags |= e), (o.memoizedState = Ai(1 | t, n, i, r));
}
function qp(e, t) {
  return Ha(8390656, 8, e, t);
}
function Wf(e, t) {
  return Xl(2048, 8, e, t);
}
function ng(e, t) {
  return Xl(4, 2, e, t);
}
function rg(e, t) {
  return Xl(4, 4, e, t);
}
function og(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ig(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Xl(4, 4, og.bind(null, t, e), n)
  );
}
function Gf() {}
function ag(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lg(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ug(e, t, n) {
  return kr & 21
    ? (Ut(n, t) || ((n = fv()), (ge.lanes |= n), (Tr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function YS(e, t) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ns.transition;
  ns.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = n), (ns.transition = r);
  }
}
function sg() {
  return Ot().memoizedState;
}
function ZS(e, t, n) {
  var r = Qn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cg(e))
  )
    fg(t, n);
  else if (((n = Fv(e, t, n, r)), n !== null)) {
    var o = Ke();
    Bt(n, e, r, o), dg(n, t, r);
  }
}
function JS(e, t, n) {
  var r = Qn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cg(e)) fg(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Ut(l, a))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Nf(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fv(e, t, o, r)),
      n !== null && ((o = Ke()), Bt(n, e, r, o), dg(n, t, r));
  }
}
function cg(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function fg(e, t) {
  si = _l = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xf(e, n);
  }
}
var wl = {
    readContext: Ct,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useInsertionEffect: He,
    useLayoutEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useMutableSource: He,
    useSyncExternalStore: He,
    useId: He,
    unstable_isNewReconciler: !1,
  },
  e_ = {
    readContext: Ct,
    useCallback: function (e, t) {
      return (Kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ct,
    useEffect: qp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ha(4194308, 4, og.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ha(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ha(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ZS.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Kp,
    useDebugValue: Gf,
    useDeferredValue: function (e) {
      return (Kt().memoizedState = e);
    },
    useTransition: function () {
      var e = Kp(!1),
        t = e[0];
      return (e = YS.bind(null, e[1])), (Kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ge,
        o = Kt();
      if (he) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Me === null)) throw Error(L(349));
        kr & 30 || qv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        qp(Zv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ai(9, Yv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Kt(),
        t = Me.identifierPrefix;
      if (he) {
        var n = vn,
          r = hn;
        (n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Pi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  t_ = {
    readContext: Ct,
    useCallback: ag,
    useContext: Ct,
    useEffect: Wf,
    useImperativeHandle: ig,
    useInsertionEffect: ng,
    useLayoutEffect: rg,
    useMemo: lg,
    useReducer: rs,
    useRef: tg,
    useState: function () {
      return rs(Ri);
    },
    useDebugValue: Gf,
    useDeferredValue: function (e) {
      var t = Ot();
      return ug(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = rs(Ri)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Qv,
    useSyncExternalStore: Kv,
    useId: sg,
    unstable_isNewReconciler: !1,
  },
  n_ = {
    readContext: Ct,
    useCallback: ag,
    useContext: Ct,
    useEffect: Wf,
    useImperativeHandle: ig,
    useInsertionEffect: ng,
    useLayoutEffect: rg,
    useMemo: lg,
    useReducer: os,
    useRef: tg,
    useState: function () {
      return os(Ri);
    },
    useDebugValue: Gf,
    useDeferredValue: function (e) {
      var t = Ot();
      return $e === null ? (t.memoizedState = e) : ug(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = os(Ri)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Qv,
    useSyncExternalStore: Kv,
    useId: sg,
    unstable_isNewReconciler: !1,
  };
function Eo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Py(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function is(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function mc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var r_ = typeof WeakMap == "function" ? WeakMap : Map;
function pg(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xl || ((xl = !0), (kc = r)), mc(e, t);
    }),
    n
  );
}
function hg(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        mc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        mc(e, t),
          typeof r != "function" &&
            (Xn === null ? (Xn = new Set([this])) : Xn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Yp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new r_();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = m_.bind(null, e, t, n)), t.then(e, e));
}
function Zp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Jp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gn(-1, 1)), (t.tag = 2), Gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var o_ = bn.ReactCurrentOwner,
  et = !1;
function Xe(e, t, n, r) {
  t.child = e === null ? Gv(t, null, n, r) : _o(t, e.child, n, r);
}
function e0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    vo(t, o),
    (r = Vf(e, t, n, r, i, o)),
    (n = Uf()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wn(e, t, o))
      : (he && n && Rf(t), (t.flags |= 1), Xe(e, t, r, o), t.child)
  );
}
function t0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ed(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vg(e, t, i, r, o))
      : ((e = Ga(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bi), n(a, r) && e.ref === t.ref)
    )
      return wn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Kn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bi(i, r) && e.ref === t.ref)
      if (((et = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (et = !0);
      else return (t.lanes = e.lanes), wn(e, t, o);
  }
  return yc(e, t, n, r, o);
}
function gg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(ao, ct),
        (ct |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(ao, ct),
          (ct |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        se(ao, ct),
        (ct |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(ao, ct),
      (ct |= r);
  return Xe(e, t, o, n), t.child;
}
function mg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yc(e, t, n, r, o) {
  var i = rt(n) ? Cr : We.current;
  return (
    (i = yo(t, i)),
    vo(t, o),
    (n = Vf(e, t, n, r, i, o)),
    (r = Uf()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wn(e, t, o))
      : (he && r && Rf(t), (t.flags |= 1), Xe(e, t, n, o), t.child)
  );
}
function n0(e, t, n, r, o) {
  if (rt(n)) {
    var i = !0;
    pl(t);
  } else i = !1;
  if ((vo(t, o), t.stateNode === null))
    Va(e, t), Uv(t, n, r), gc(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var u = a.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Ct(s))
      : ((s = rt(n) ? Cr : We.current), (s = yo(t, s)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || u !== s) && Xp(t, a, r, s)),
      (Mn = !1);
    var d = t.memoizedState;
    (a.state = d),
      yl(t, r, a, o),
      (u = t.memoizedState),
      l !== r || d !== u || nt.current || Mn
        ? (typeof f == "function" && (vc(t, n, f, r), (u = t.memoizedState)),
          (l = Mn || Gp(t, n, l, r, d, u, s))
            ? (p ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = s),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Hv(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : It(t.type, l)),
      (a.props = s),
      (p = t.pendingProps),
      (d = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ct(u))
        : ((u = rt(n) ? Cr : We.current), (u = yo(t, u)));
    var m = n.getDerivedStateFromProps;
    (f =
      typeof m == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== p || d !== u) && Xp(t, a, r, u)),
      (Mn = !1),
      (d = t.memoizedState),
      (a.state = d),
      yl(t, r, a, o);
    var _ = t.memoizedState;
    l !== p || d !== _ || nt.current || Mn
      ? (typeof m == "function" && (vc(t, n, m, r), (_ = t.memoizedState)),
        (s = Mn || Gp(t, n, s, r, d, _, u) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, _, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, _, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (a.props = r),
        (a.state = _),
        (a.context = u),
        (r = s))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Sc(e, t, n, r, i, o);
}
function Sc(e, t, n, r, o, i) {
  mg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Fp(t, n, !1), wn(e, t, i);
  (r = t.stateNode), (o_.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = _o(t, e.child, null, i)), (t.child = _o(t, null, l, i)))
      : Xe(e, t, l, i),
    (t.memoizedState = r.state),
    o && Fp(t, n, !0),
    t.child
  );
}
function yg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bp(e, t.context, !1),
    zf(e, t.containerInfo);
}
function r0(e, t, n, r, o) {
  return So(), Mf(o), (t.flags |= 256), Xe(e, t, n, r), t.child;
}
var _c = { dehydrated: null, treeContext: null, retryLane: 0 };
function wc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sg(e, t, n) {
  var r = t.pendingProps,
    o = ve.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    se(ve, o & 1),
    e === null)
  )
    return (
      pc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = ql(a, r, 0, null)),
              (e = wr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = wc(n)),
              (t.memoizedState = _c),
              e)
            : Xf(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return i_(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Kn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Kn(l, i)) : ((i = wr(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? wc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = _c),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Kn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xf(e, t) {
  return (
    (t = ql({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ga(e, t, n, r) {
  return (
    r !== null && Mf(r),
    _o(t, e.child, null, n),
    (e = Xf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function i_(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = is(Error(L(422)))), ga(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = ql({ mode: "visible", children: r.children }, o, 0, null)),
        (i = wr(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && _o(t, e.child, null, a),
        (t.child.memoizedState = wc(a)),
        (t.memoizedState = _c),
        i);
  if (!(t.mode & 1)) return ga(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(L(419))), (r = is(i, r, void 0)), ga(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), et || l)) {
    if (((r = Me), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), _n(e, o), Bt(r, e, o, -1));
    }
    return Jf(), (r = is(Error(L(421)))), ga(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = y_.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (dt = Wn(o.nextSibling)),
      (ht = t),
      (he = !0),
      (Nt = null),
      e !== null &&
        ((_t[wt++] = hn),
        (_t[wt++] = vn),
        (_t[wt++] = Or),
        (hn = e.id),
        (vn = e.overflow),
        (Or = t)),
      (t = Xf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function o0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hc(e.return, t, n);
}
function as(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function _g(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Xe(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && o0(e, n, t);
        else if (e.tag === 19) o0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Sl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          as(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Sl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        as(t, !0, n, null, i);
        break;
      case "together":
        as(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Va(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function a_(e, t, n) {
  switch (t.tag) {
    case 3:
      yg(t), So();
      break;
    case 5:
      Xv(t);
      break;
    case 1:
      rt(t.type) && pl(t);
      break;
    case 4:
      zf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      se(gl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sg(e, t, n)
          : (se(ve, ve.current & 1),
            (e = wn(e, t, n)),
            e !== null ? e.sibling : null);
      se(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return _g(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        se(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gg(e, t, n);
  }
  return wn(e, t, n);
}
var wg, Ec, Eg, xg;
wg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ec = function () {};
Eg = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), mr(en.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Us(e, o)), (r = Us(e, r)), (i = []);
        break;
      case "select":
        (o = me({}, o, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Xs(e, o)), (r = Xs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = fl);
    }
    Ks(n, r);
    var a;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var l = o[s];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (mi.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((l = o != null ? o[s] : void 0),
        r.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                l[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (i = i || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (mi.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ce("scroll", e),
                  i || l === u || (i = []))
                : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
xg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wo(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function l_(e, t, n) {
  var r = t.pendingProps;
  switch ((Af(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ve(t), null;
    case 1:
      return rt(t.type) && dl(), Ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wo(),
        fe(nt),
        fe(We),
        Ff(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ha(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (Pc(Nt), (Nt = null)))),
        Ec(e, t),
        Ve(t),
        null
      );
    case 5:
      Bf(t);
      var o = mr($i.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Eg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Ve(t), null;
        }
        if (((e = mr(en.current)), ha(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[qt] = t), (r[ki] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ni.length; o++) ce(ni[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              pp(r, i), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ce("invalid", r);
              break;
            case "textarea":
              vp(r, i), ce("invalid", r);
          }
          Ks(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      pa(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      pa(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : mi.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              ia(r), hp(r, i, !0);
              break;
            case "textarea":
              ia(r), gp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = fl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = qh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[qt] = t),
            (e[ki] = r),
            wg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = qs(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ni.length; o++) ce(ni[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (o = r);
                break;
              case "details":
                ce("toggle", e), (o = r);
                break;
              case "input":
                pp(e, r), (o = Us(e, r)), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = me({}, r, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                vp(e, r), (o = Xs(e, r)), ce("invalid", e);
                break;
              default:
                o = r;
            }
            Ks(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var u = l[i];
                i === "style"
                  ? Jh(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Yh(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && yi(e, u)
                    : typeof u == "number" && yi(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (mi.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && ce("scroll", e)
                      : u != null && mf(e, i, u, a));
              }
            switch (n) {
              case "input":
                ia(e), hp(e, r, !1);
                break;
              case "textarea":
                ia(e), gp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? co(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      co(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = fl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) xg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = mr($i.current)), mr(en.current), ha(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qt] = t),
            (i = r.nodeValue !== n) && ((e = ht), e !== null))
          )
            switch (e.tag) {
              case 3:
                pa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qt] = t),
            (t.stateNode = r);
      }
      return Ve(t), null;
    case 13:
      if (
        (fe(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && dt !== null && t.mode & 1 && !(t.flags & 128))
          Bv(), So(), (t.flags |= 98560), (i = !1);
        else if (((i = ha(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[qt] = t;
          } else
            So(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ve(t), (i = !1);
        } else Nt !== null && (Pc(Nt), (Nt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Pe === 0 && (Pe = 3) : Jf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ve(t),
          null);
    case 4:
      return (
        wo(), Ec(e, t), e === null && Ci(t.stateNode.containerInfo), Ve(t), null
      );
    case 10:
      return jf(t.type._context), Ve(t), null;
    case 17:
      return rt(t.type) && dl(), Ve(t), null;
    case 19:
      if ((fe(ve), (i = t.memoizedState), i === null)) return Ve(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Wo(i, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Sl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Wo(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ee() > xo &&
            ((t.flags |= 128), (r = !0), Wo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Sl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Wo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !he)
            )
              return Ve(t), null;
          } else
            2 * Ee() - i.renderingStartTime > xo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Wo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = ve.current),
          se(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ve(t), null);
    case 22:
    case 23:
      return (
        Zf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ct & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function u_(e, t) {
  switch ((Af(t), t.tag)) {
    case 1:
      return (
        rt(t.type) && dl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wo(),
        fe(nt),
        fe(We),
        Ff(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Bf(t), null;
    case 13:
      if (
        (fe(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        So();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(ve), null;
    case 4:
      return wo(), null;
    case 10:
      return jf(t.type._context), null;
    case 22:
    case 23:
      return Zf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ma = !1,
  Ue = !1,
  s_ = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function io(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function xc(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var i0 = !1;
function c_(e, t) {
  if (((ac = ul), (e = kv()), Pf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            u = -1,
            s = 0,
            f = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = a + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (u = a + r),
                p.nodeType === 3 && (a += p.nodeValue.length),
                (m = p.firstChild) !== null;

            )
              (d = p), (p = m);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++s === o && (l = a),
                d === i && ++f === r && (u = a),
                (m = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = m;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (lc = { focusedElem: e, selectionRange: n }, ul = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e);
    else
      for (; U !== null; ) {
        t = U;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var b = _.memoizedProps,
                    A = _.memoizedState,
                    v = t.stateNode,
                    c = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : It(t.type, b),
                      A
                    );
                  v.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (w) {
          Se(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (U = e);
          break;
        }
        U = t.return;
      }
  return (_ = i0), (i0 = !1), _;
}
function ci(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && xc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ql(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qt], delete t[ki], delete t[cc], delete t[GS], delete t[XS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function a0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cc(e, t, n), e = e.sibling; e !== null; ) Cc(e, t, n), (e = e.sibling);
}
function Oc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oc(e, t, n), e = e.sibling; e !== null; ) Oc(e, t, n), (e = e.sibling);
}
var De = null,
  Lt = !1;
function Rn(e, t, n) {
  for (n = n.child; n !== null; ) Og(e, t, n), (n = n.sibling);
}
function Og(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(Bl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || io(n, t);
    case 6:
      var r = De,
        o = Lt;
      (De = null),
        Rn(e, t, n),
        (De = r),
        (Lt = o),
        De !== null &&
          (Lt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : De.removeChild(n.stateNode));
      break;
    case 18:
      De !== null &&
        (Lt
          ? ((e = De),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ju(e.parentNode, n)
              : e.nodeType === 1 && Ju(e, n),
            Ei(e))
          : Ju(De, n.stateNode));
      break;
    case 4:
      (r = De),
        (o = Lt),
        (De = n.stateNode.containerInfo),
        (Lt = !0),
        Rn(e, t, n),
        (De = r),
        (Lt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && xc(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Rn(e, t, n);
      break;
    case 1:
      if (
        !Ue &&
        (io(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Se(n, t, l);
        }
      Rn(e, t, n);
      break;
    case 21:
      Rn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), Rn(e, t, n), (Ue = r))
        : Rn(e, t, n);
      break;
    default:
      Rn(e, t, n);
  }
}
function l0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new s_()),
      t.forEach(function (r) {
        var o = S_.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function At(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (De = l.stateNode), (Lt = !1);
              break e;
            case 3:
              (De = l.stateNode.containerInfo), (Lt = !0);
              break e;
            case 4:
              (De = l.stateNode.containerInfo), (Lt = !0);
              break e;
          }
          l = l.return;
        }
        if (De === null) throw Error(L(160));
        Og(i, a, o), (De = null), (Lt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (s) {
        Se(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kg(t, e), (t = t.sibling);
}
function kg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(t, e), Qt(e), r & 4)) {
        try {
          ci(3, e, e.return), Ql(3, e);
        } catch (b) {
          Se(e, e.return, b);
        }
        try {
          ci(5, e, e.return);
        } catch (b) {
          Se(e, e.return, b);
        }
      }
      break;
    case 1:
      At(t, e), Qt(e), r & 512 && n !== null && io(n, n.return);
      break;
    case 5:
      if (
        (At(t, e),
        Qt(e),
        r & 512 && n !== null && io(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          yi(o, "");
        } catch (b) {
          Se(e, e.return, b);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Qh(o, i),
              qs(l, a);
            var s = qs(l, i);
            for (a = 0; a < u.length; a += 2) {
              var f = u[a],
                p = u[a + 1];
              f === "style"
                ? Jh(o, p)
                : f === "dangerouslySetInnerHTML"
                ? Yh(o, p)
                : f === "children"
                ? yi(o, p)
                : mf(o, f, p, s);
            }
            switch (l) {
              case "input":
                Ws(o, i);
                break;
              case "textarea":
                Kh(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? co(o, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? co(o, !!i.multiple, i.defaultValue, !0)
                      : co(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ki] = i;
          } catch (b) {
            Se(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((At(t, e), Qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (b) {
          Se(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (At(t, e), Qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ei(t.containerInfo);
        } catch (b) {
          Se(e, e.return, b);
        }
      break;
    case 4:
      At(t, e), Qt(e);
      break;
    case 13:
      At(t, e),
        Qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (qf = Ee())),
        r & 4 && l0(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (s = Ue) || f), At(t, e), (Ue = s)) : At(t, e),
        Qt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (U = e, f = e.child; f !== null; ) {
            for (p = U = f; U !== null; ) {
              switch (((d = U), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ci(4, d, d.return);
                  break;
                case 1:
                  io(d, d.return);
                  var _ = d.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (_.props = t.memoizedProps),
                        (_.state = t.memoizedState),
                        _.componentWillUnmount();
                    } catch (b) {
                      Se(r, n, b);
                    }
                  }
                  break;
                case 5:
                  io(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    s0(p);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (U = m)) : s0(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (o = p.stateNode),
                  s
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (u = p.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = Zh("display", a)));
              } catch (b) {
                Se(e, e.return, b);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (b) {
                Se(e, e.return, b);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      At(t, e), Qt(e), r & 4 && l0(e);
      break;
    case 21:
      break;
    default:
      At(t, e), Qt(e);
  }
}
function Qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (yi(o, ""), (r.flags &= -33));
          var i = a0(e);
          Oc(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = a0(e);
          Cc(e, l, a);
          break;
        default:
          throw Error(L(161));
      }
    } catch (u) {
      Se(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function f_(e, t, n) {
  (U = e), Tg(e);
}
function Tg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var o = U,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ma;
      if (!a) {
        var l = o.alternate,
          u = (l !== null && l.memoizedState !== null) || Ue;
        l = ma;
        var s = Ue;
        if (((ma = a), (Ue = u) && !s))
          for (U = o; U !== null; )
            (a = U),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? c0(o)
                : u !== null
                ? ((u.return = a), (U = u))
                : c0(o);
        for (; i !== null; ) (U = i), Tg(i), (i = i.sibling);
        (U = o), (ma = l), (Ue = s);
      }
      u0(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (U = i)) : u0(e);
  }
}
function u0(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Ql(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : It(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Wp(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wp(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && Ei(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ue || (t.flags & 512 && bc(t));
      } catch (d) {
        Se(t, t.return, d);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function s0(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function c0(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ql(4, t);
          } catch (u) {
            Se(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Se(t, o, u);
            }
          }
          var i = t.return;
          try {
            bc(t);
          } catch (u) {
            Se(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            bc(t);
          } catch (u) {
            Se(t, a, u);
          }
      }
    } catch (u) {
      Se(t, t.return, u);
    }
    if (t === e) {
      U = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (U = l);
      break;
    }
    U = t.return;
  }
}
var d_ = Math.ceil,
  El = bn.ReactCurrentDispatcher,
  Qf = bn.ReactCurrentOwner,
  bt = bn.ReactCurrentBatchConfig,
  oe = 0,
  Me = null,
  ke = null,
  ze = 0,
  ct = 0,
  ao = tr(0),
  Pe = 0,
  Mi = null,
  Tr = 0,
  Kl = 0,
  Kf = 0,
  fi = null,
  Ze = null,
  qf = 0,
  xo = 1 / 0,
  cn = null,
  xl = !1,
  kc = null,
  Xn = null,
  ya = !1,
  Dn = null,
  bl = 0,
  di = 0,
  Tc = null,
  Ua = -1,
  Wa = 0;
function Ke() {
  return oe & 6 ? Ee() : Ua !== -1 ? Ua : (Ua = Ee());
}
function Qn(e) {
  return e.mode & 1
    ? oe & 2 && ze !== 0
      ? ze & -ze
      : KS.transition !== null
      ? (Wa === 0 && (Wa = fv()), Wa)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yv(e.type))),
        e)
    : 1;
}
function Bt(e, t, n, r) {
  if (50 < di) throw ((di = 0), (Tc = null), Error(L(185)));
  Fi(e, n, r),
    (!(oe & 2) || e !== Me) &&
      (e === Me && (!(oe & 2) && (Kl |= n), Pe === 4 && Ln(e, ze)),
      ot(e, r),
      n === 1 && oe === 0 && !(t.mode & 1) && ((xo = Ee() + 500), Wl && nr()));
}
function ot(e, t) {
  var n = e.callbackNode;
  Ky(e, t);
  var r = ll(e, e === Me ? ze : 0);
  if (r === 0)
    n !== null && Sp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sp(n), t === 1))
      e.tag === 0 ? QS(f0.bind(null, e)) : Nv(f0.bind(null, e)),
        US(function () {
          !(oe & 6) && nr();
        }),
        (n = null);
    else {
      switch (dv(r)) {
        case 1:
          n = Ef;
          break;
        case 4:
          n = sv;
          break;
        case 16:
          n = al;
          break;
        case 536870912:
          n = cv;
          break;
        default:
          n = al;
      }
      n = jg(n, $g.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $g(e, t) {
  if (((Ua = -1), (Wa = 0), oe & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (go() && e.callbackNode !== n) return null;
  var r = ll(e, e === Me ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var o = oe;
    oe |= 2;
    var i = Rg();
    (Me !== e || ze !== t) && ((cn = null), (xo = Ee() + 500), _r(e, t));
    do
      try {
        v_();
        break;
      } catch (l) {
        Pg(e, l);
      }
    while (!0);
    Lf(),
      (El.current = i),
      (oe = o),
      ke !== null ? (t = 0) : ((Me = null), (ze = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = tc(e)), o !== 0 && ((r = o), (t = $c(e, o)))), t === 1)
    )
      throw ((n = Mi), _r(e, 0), Ln(e, r), ot(e, Ee()), n);
    if (t === 6) Ln(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !p_(o) &&
          ((t = Cl(e, r)),
          t === 2 && ((i = tc(e)), i !== 0 && ((r = i), (t = $c(e, i)))),
          t === 1))
      )
        throw ((n = Mi), _r(e, 0), Ln(e, r), ot(e, Ee()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          dr(e, Ze, cn);
          break;
        case 3:
          if (
            (Ln(e, r), (r & 130023424) === r && ((t = qf + 500 - Ee()), 10 < t))
          ) {
            if (ll(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ke(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = sc(dr.bind(null, e, Ze, cn), t);
            break;
          }
          dr(e, Ze, cn);
          break;
        case 4:
          if ((Ln(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - zt(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * d_(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sc(dr.bind(null, e, Ze, cn), r);
            break;
          }
          dr(e, Ze, cn);
          break;
        case 5:
          dr(e, Ze, cn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return ot(e, Ee()), e.callbackNode === n ? $g.bind(null, e) : null;
}
function $c(e, t) {
  var n = fi;
  return (
    e.current.memoizedState.isDehydrated && (_r(e, t).flags |= 256),
    (e = Cl(e, t)),
    e !== 2 && ((t = Ze), (Ze = n), t !== null && Pc(t)),
    e
  );
}
function Pc(e) {
  Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
}
function p_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ut(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ln(e, t) {
  for (
    t &= ~Kf,
      t &= ~Kl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - zt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function f0(e) {
  if (oe & 6) throw Error(L(327));
  go();
  var t = ll(e, 0);
  if (!(t & 1)) return ot(e, Ee()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = tc(e);
    r !== 0 && ((t = r), (n = $c(e, r)));
  }
  if (n === 1) throw ((n = Mi), _r(e, 0), Ln(e, t), ot(e, Ee()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dr(e, Ze, cn),
    ot(e, Ee()),
    null
  );
}
function Yf(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    (oe = n), oe === 0 && ((xo = Ee() + 500), Wl && nr());
  }
}
function $r(e) {
  Dn !== null && Dn.tag === 0 && !(oe & 6) && go();
  var t = oe;
  oe |= 1;
  var n = bt.transition,
    r = ie;
  try {
    if (((bt.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = r), (bt.transition = n), (oe = t), !(oe & 6) && nr();
  }
}
function Zf() {
  (ct = ao.current), fe(ao);
}
function _r(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), VS(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((Af(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && dl();
          break;
        case 3:
          wo(), fe(nt), fe(We), Ff();
          break;
        case 5:
          Bf(r);
          break;
        case 4:
          wo();
          break;
        case 13:
          fe(ve);
          break;
        case 19:
          fe(ve);
          break;
        case 10:
          jf(r.type._context);
          break;
        case 22:
        case 23:
          Zf();
      }
      n = n.return;
    }
  if (
    ((Me = e),
    (ke = e = Kn(e.current, null)),
    (ze = ct = t),
    (Pe = 0),
    (Mi = null),
    (Kf = Kl = Tr = 0),
    (Ze = fi = null),
    gr !== null)
  ) {
    for (t = 0; t < gr.length; t++)
      if (((n = gr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    gr = null;
  }
  return e;
}
function Pg(e, t) {
  do {
    var n = ke;
    try {
      if ((Lf(), (Fa.current = wl), _l)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        _l = !1;
      }
      if (
        ((kr = 0),
        (Ae = $e = ge = null),
        (si = !1),
        (Pi = 0),
        (Qf.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (Mi = t), (ke = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          u = t;
        if (
          ((t = ze),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = l,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var m = Zp(a);
          if (m !== null) {
            (m.flags &= -257),
              Jp(m, a, l, i, t),
              m.mode & 1 && Yp(i, s, t),
              (t = m),
              (u = s);
            var _ = t.updateQueue;
            if (_ === null) {
              var b = new Set();
              b.add(u), (t.updateQueue = b);
            } else _.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Yp(i, s, t), Jf();
              break e;
            }
            u = Error(L(426));
          }
        } else if (he && l.mode & 1) {
          var A = Zp(a);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              Jp(A, a, l, i, t),
              Mf(Eo(u, l));
            break e;
          }
        }
        (i = u = Eo(u, l)),
          Pe !== 4 && (Pe = 2),
          fi === null ? (fi = [i]) : fi.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = pg(i, u, t);
              Up(i, v);
              break e;
            case 1:
              l = u;
              var c = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Xn === null || !Xn.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = hg(i, l, t);
                Up(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Mg(n);
    } catch (C) {
      (t = C), ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rg() {
  var e = El.current;
  return (El.current = wl), e === null ? wl : e;
}
function Jf() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Me === null || (!(Tr & 268435455) && !(Kl & 268435455)) || Ln(Me, ze);
}
function Cl(e, t) {
  var n = oe;
  oe |= 2;
  var r = Rg();
  (Me !== e || ze !== t) && ((cn = null), _r(e, t));
  do
    try {
      h_();
      break;
    } catch (o) {
      Pg(e, o);
    }
  while (!0);
  if ((Lf(), (oe = n), (El.current = r), ke !== null)) throw Error(L(261));
  return (Me = null), (ze = 0), Pe;
}
function h_() {
  for (; ke !== null; ) Ag(ke);
}
function v_() {
  for (; ke !== null && !By(); ) Ag(ke);
}
function Ag(e) {
  var t = Lg(e.alternate, e, ct);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mg(e) : (ke = t),
    (Qf.current = null);
}
function Mg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = u_(n, t)), n !== null)) {
        (n.flags &= 32767), (ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (ke = null);
        return;
      }
    } else if (((n = l_(n, t, ct)), n !== null)) {
      ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function dr(e, t, n) {
  var r = ie,
    o = bt.transition;
  try {
    (bt.transition = null), (ie = 1), g_(e, t, n, r);
  } finally {
    (bt.transition = o), (ie = r);
  }
  return null;
}
function g_(e, t, n, r) {
  do go();
  while (Dn !== null);
  if (oe & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (qy(e, i),
    e === Me && ((ke = Me = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ya ||
      ((ya = !0),
      jg(al, function () {
        return go(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = bt.transition), (bt.transition = null);
    var a = ie;
    ie = 1;
    var l = oe;
    (oe |= 4),
      (Qf.current = null),
      c_(e, n),
      kg(n, e),
      jS(lc),
      (ul = !!ac),
      (lc = ac = null),
      (e.current = n),
      f_(n),
      Fy(),
      (oe = l),
      (ie = a),
      (bt.transition = i);
  } else e.current = n;
  if (
    (ya && ((ya = !1), (Dn = e), (bl = o)),
    (i = e.pendingLanes),
    i === 0 && (Xn = null),
    Uy(n.stateNode),
    ot(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xl) throw ((xl = !1), (e = kc), (kc = null), e);
  return (
    bl & 1 && e.tag !== 0 && go(),
    (i = e.pendingLanes),
    i & 1 ? (e === Tc ? di++ : ((di = 0), (Tc = e))) : (di = 0),
    nr(),
    null
  );
}
function go() {
  if (Dn !== null) {
    var e = dv(bl),
      t = bt.transition,
      n = ie;
    try {
      if (((bt.transition = null), (ie = 16 > e ? 16 : e), Dn === null))
        var r = !1;
      else {
        if (((e = Dn), (Dn = null), (bl = 0), oe & 6)) throw Error(L(331));
        var o = oe;
        for (oe |= 4, U = e.current; U !== null; ) {
          var i = U,
            a = i.child;
          if (U.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (U = s; U !== null; ) {
                  var f = U;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ci(8, f, i);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (U = p);
                  else
                    for (; U !== null; ) {
                      f = U;
                      var d = f.sibling,
                        m = f.return;
                      if ((bg(f), f === s)) {
                        U = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (U = d);
                        break;
                      }
                      U = m;
                    }
                }
              }
              var _ = i.alternate;
              if (_ !== null) {
                var b = _.child;
                if (b !== null) {
                  _.child = null;
                  do {
                    var A = b.sibling;
                    (b.sibling = null), (b = A);
                  } while (b !== null);
                }
              }
              U = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (U = a);
          else
            e: for (; U !== null; ) {
              if (((i = U), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ci(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (U = v);
                break e;
              }
              U = i.return;
            }
        }
        var c = e.current;
        for (U = c; U !== null; ) {
          a = U;
          var h = a.child;
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (U = h);
          else
            e: for (a = c; U !== null; ) {
              if (((l = U), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ql(9, l);
                  }
                } catch (C) {
                  Se(l, l.return, C);
                }
              if (l === a) {
                U = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (U = w);
                break e;
              }
              U = l.return;
            }
        }
        if (
          ((oe = o), nr(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(Bl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (bt.transition = t);
    }
  }
  return !1;
}
function d0(e, t, n) {
  (t = Eo(n, t)),
    (t = pg(e, t, 1)),
    (e = Gn(e, t, 1)),
    (t = Ke()),
    e !== null && (Fi(e, 1, t), ot(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) d0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        d0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Xn === null || !Xn.has(r)))
        ) {
          (e = Eo(n, e)),
            (e = hg(t, e, 1)),
            (t = Gn(t, e, 1)),
            (e = Ke()),
            t !== null && (Fi(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function m_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Me === e &&
      (ze & n) === n &&
      (Pe === 4 || (Pe === 3 && (ze & 130023424) === ze && 500 > Ee() - qf)
        ? _r(e, 0)
        : (Kf |= n)),
    ot(e, t);
}
function Ig(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ua), (ua <<= 1), !(ua & 130023424) && (ua = 4194304))
      : (t = 1));
  var n = Ke();
  (e = _n(e, t)), e !== null && (Fi(e, t, n), ot(e, n));
}
function y_(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ig(e, n);
}
function S_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Ig(e, n);
}
var Lg;
Lg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || nt.current) et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), a_(e, t, n);
      et = !!(e.flags & 131072);
    }
  else (et = !1), he && t.flags & 1048576 && Dv(t, vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Va(e, t), (e = t.pendingProps);
      var o = yo(t, We.current);
      vo(t, n), (o = Vf(null, t, r, e, o, n));
      var i = Uf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            rt(r) ? ((i = !0), pl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Df(t),
            (o.updater = Gl),
            (t.stateNode = o),
            (o._reactInternals = t),
            gc(t, r, e, n),
            (t = Sc(null, t, r, !0, i, n)))
          : ((t.tag = 0), he && i && Rf(t), Xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Va(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = w_(r)),
          (e = It(r, e)),
          o)
        ) {
          case 0:
            t = yc(null, t, r, e, n);
            break e;
          case 1:
            t = n0(null, t, r, e, n);
            break e;
          case 11:
            t = e0(null, t, r, e, n);
            break e;
          case 14:
            t = t0(null, t, r, It(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        yc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        n0(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((yg(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Hv(e, t),
          yl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Eo(Error(L(423)), t)), (t = r0(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Eo(Error(L(424)), t)), (t = r0(e, t, r, n, o));
            break e;
          } else
            for (
              dt = Wn(t.stateNode.containerInfo.firstChild),
                ht = t,
                he = !0,
                Nt = null,
                n = Gv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((So(), r === o)) {
            t = wn(e, t, n);
            break e;
          }
          Xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xv(t),
        e === null && pc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        uc(r, o) ? (a = null) : i !== null && uc(r, i) && (t.flags |= 32),
        mg(e, t),
        Xe(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && pc(t), null;
    case 13:
      return Sg(e, t, n);
    case 4:
      return (
        zf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _o(t, null, r, n)) : Xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        e0(e, t, r, o, n)
      );
    case 7:
      return Xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          se(gl, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Ut(i.value, a)) {
            if (i.children === o.children && !nt.current) {
              t = wn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = gn(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      hc(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(L(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  hc(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Xe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        vo(t, n),
        (o = Ct(o)),
        (r = r(o)),
        (t.flags |= 1),
        Xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = It(r, t.pendingProps)),
        (o = It(r.type, o)),
        t0(e, t, r, o, n)
      );
    case 15:
      return vg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        Va(e, t),
        (t.tag = 1),
        rt(r) ? ((e = !0), pl(t)) : (e = !1),
        vo(t, n),
        Uv(t, r, o),
        gc(t, r, o, n),
        Sc(null, t, r, !0, e, n)
      );
    case 19:
      return _g(e, t, n);
    case 22:
      return gg(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function jg(e, t) {
  return uv(e, t);
}
function __(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xt(e, t, n, r) {
  return new __(e, t, n, r);
}
function ed(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function w_(e) {
  if (typeof e == "function") return ed(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Sf)) return 11;
    if (e === _f) return 14;
  }
  return 2;
}
function Kn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ga(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) ed(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case qr:
        return wr(n.children, o, i, t);
      case yf:
        (a = 8), (o |= 8);
        break;
      case Bs:
        return (
          (e = xt(12, n, t, o | 2)), (e.elementType = Bs), (e.lanes = i), e
        );
      case Fs:
        return (e = xt(13, n, t, o)), (e.elementType = Fs), (e.lanes = i), e;
      case Hs:
        return (e = xt(19, n, t, o)), (e.elementType = Hs), (e.lanes = i), e;
      case Wh:
        return ql(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vh:
              a = 10;
              break e;
            case Uh:
              a = 9;
              break e;
            case Sf:
              a = 11;
              break e;
            case _f:
              a = 14;
              break e;
            case An:
              (a = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function wr(e, t, n, r) {
  return (e = xt(7, e, r, t)), (e.lanes = n), e;
}
function ql(e, t, n, r) {
  return (
    (e = xt(22, e, r, t)),
    (e.elementType = Wh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ls(e, t, n) {
  return (e = xt(6, e, null, t)), (e.lanes = n), e;
}
function us(e, t, n) {
  return (
    (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function E_(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hu(0)),
    (this.expirationTimes = Hu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function td(e, t, n, r, o, i, a, l, u) {
  return (
    (e = new E_(e, t, n, l, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = xt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Df(i),
    e
  );
}
function x_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ng(e) {
  if (!e) return Zn;
  e = e._reactInternals;
  e: {
    if (Lr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return jv(e, n, t);
  }
  return t;
}
function Dg(e, t, n, r, o, i, a, l, u) {
  return (
    (e = td(n, r, !0, e, o, i, a, l, u)),
    (e.context = Ng(null)),
    (n = e.current),
    (r = Ke()),
    (o = Qn(n)),
    (i = gn(r, o)),
    (i.callback = t ?? null),
    Gn(n, i, o),
    (e.current.lanes = o),
    Fi(e, o, r),
    ot(e, r),
    e
  );
}
function Yl(e, t, n, r) {
  var o = t.current,
    i = Ke(),
    a = Qn(o);
  return (
    (n = Ng(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gn(o, t, a)),
    e !== null && (Bt(e, o, a, i), Ba(e, o, a)),
    a
  );
}
function Ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function p0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nd(e, t) {
  p0(e, t), (e = e.alternate) && p0(e, t);
}
function b_() {
  return null;
}
var zg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function rd(e) {
  this._internalRoot = e;
}
Zl.prototype.render = rd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Yl(e, t, null, null);
};
Zl.prototype.unmount = rd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $r(function () {
      Yl(null, e, null, null);
    }),
      (t[Sn] = null);
  }
};
function Zl(e) {
  this._internalRoot = e;
}
Zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
    In.splice(n, 0, e), n === 0 && mv(e);
  }
};
function od(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function h0() {}
function C_(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Ol(a);
        i.call(s);
      };
    }
    var a = Dg(t, r, e, 0, null, !1, !1, "", h0);
    return (
      (e._reactRootContainer = a),
      (e[Sn] = a.current),
      Ci(e.nodeType === 8 ? e.parentNode : e),
      $r(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var s = Ol(u);
      l.call(s);
    };
  }
  var u = td(e, 0, !1, null, null, !1, !1, "", h0);
  return (
    (e._reactRootContainer = u),
    (e[Sn] = u.current),
    Ci(e.nodeType === 8 ? e.parentNode : e),
    $r(function () {
      Yl(t, u, n, r);
    }),
    u
  );
}
function eu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var u = Ol(a);
        l.call(u);
      };
    }
    Yl(t, a, e, o);
  } else a = C_(n, t, e, o, r);
  return Ol(a);
}
pv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ti(t.pendingLanes);
        n !== 0 &&
          (xf(t, n | 1), ot(t, Ee()), !(oe & 6) && ((xo = Ee() + 500), nr()));
      }
      break;
    case 13:
      $r(function () {
        var r = _n(e, 1);
        if (r !== null) {
          var o = Ke();
          Bt(r, e, 1, o);
        }
      }),
        nd(e, 1);
  }
};
bf = function (e) {
  if (e.tag === 13) {
    var t = _n(e, 134217728);
    if (t !== null) {
      var n = Ke();
      Bt(t, e, 134217728, n);
    }
    nd(e, 134217728);
  }
};
hv = function (e) {
  if (e.tag === 13) {
    var t = Qn(e),
      n = _n(e, t);
    if (n !== null) {
      var r = Ke();
      Bt(n, e, t, r);
    }
    nd(e, t);
  }
};
vv = function () {
  return ie;
};
gv = function (e, t) {
  var n = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = n;
  }
};
Zs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ws(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ul(r);
            if (!o) throw Error(L(90));
            Xh(r), Ws(r, o);
          }
        }
      }
      break;
    case "textarea":
      Kh(e, n);
      break;
    case "select":
      (t = n.value), t != null && co(e, !!n.multiple, t, !1);
  }
};
nv = Yf;
rv = $r;
var O_ = { usingClientEntryPoint: !1, Events: [Vi, eo, Ul, ev, tv, Yf] },
  Go = {
    findFiberByHostInstance: vr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  k_ = {
    bundleType: Go.bundleType,
    version: Go.version,
    rendererPackageName: Go.rendererPackageName,
    rendererConfig: Go.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = av(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Go.findFiberByHostInstance || b_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sa.isDisabled && Sa.supportsFiber)
    try {
      (Bl = Sa.inject(k_)), (Jt = Sa);
    } catch {}
}
gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O_;
gt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!od(t)) throw Error(L(200));
  return x_(e, t, null, n);
};
gt.createRoot = function (e, t) {
  if (!od(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = zg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = td(e, 1, !1, null, null, n, !1, r, o)),
    (e[Sn] = t.current),
    Ci(e.nodeType === 8 ? e.parentNode : e),
    new rd(t)
  );
};
gt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = av(t)), (e = e === null ? null : e.stateNode), e;
};
gt.flushSync = function (e) {
  return $r(e);
};
gt.hydrate = function (e, t, n) {
  if (!Jl(t)) throw Error(L(200));
  return eu(null, e, t, !0, n);
};
gt.hydrateRoot = function (e, t, n) {
  if (!od(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = zg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Dg(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Sn] = t.current),
    Ci(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Zl(t);
};
gt.render = function (e, t, n) {
  if (!Jl(t)) throw Error(L(200));
  return eu(null, e, t, !1, n);
};
gt.unmountComponentAtNode = function (e) {
  if (!Jl(e)) throw Error(L(40));
  return e._reactRootContainer
    ? ($r(function () {
        eu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Sn] = null);
        });
      }),
      !0)
    : !1;
};
gt.unstable_batchedUpdates = Yf;
gt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Jl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return eu(e, t, n, !1, r);
};
gt.version = "18.2.0-next-9e3b772b8-20220608";
function Bg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bg);
    } catch (e) {
      console.error(e);
    }
}
Bg(), (Dh.exports = gt);
var id = Dh.exports;
const Fg = Nl(id),
  T_ = kh({ __proto__: null, default: Fg }, [id]);
var v0 = id;
(Ds.createRoot = v0.createRoot), (Ds.hydrateRoot = v0.hydrateRoot);
const $_ = "_root_144rp_1",
  P_ = "_formItem_144rp_8",
  R_ = "_formCnt_144rp_19",
  A_ = "_exampleCnt_144rp_28",
  M_ = "_formExampleCnt_144rp_42",
  I_ = "_input_144rp_48",
  L_ = "_toaster_144rp_52",
  je = {
    root: $_,
    formItem: P_,
    formCnt: R_,
    exampleCnt: A_,
    formExampleCnt: M_,
    input: I_,
    toaster: L_,
  };
var Hg = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var l = n.apply(null, i);
              l && r.push(l);
            }
          } else if (a === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              r.push(i.toString());
              continue;
            }
            for (var u in i) t.call(i, u) && i[u] && r.push(u);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Hg);
var j_ = Hg.exports;
const Ft = Nl(j_);
function bo() {
  return (
    (bo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bo.apply(this, arguments)
  );
}
var Vg = { exports: {} },
  ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad = Symbol.for("react.element"),
  ld = Symbol.for("react.portal"),
  tu = Symbol.for("react.fragment"),
  nu = Symbol.for("react.strict_mode"),
  ru = Symbol.for("react.profiler"),
  ou = Symbol.for("react.provider"),
  iu = Symbol.for("react.context"),
  N_ = Symbol.for("react.server_context"),
  au = Symbol.for("react.forward_ref"),
  lu = Symbol.for("react.suspense"),
  uu = Symbol.for("react.suspense_list"),
  su = Symbol.for("react.memo"),
  cu = Symbol.for("react.lazy"),
  D_ = Symbol.for("react.offscreen"),
  Ug;
Ug = Symbol.for("react.module.reference");
function Tt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ad:
        switch (((e = e.type), e)) {
          case tu:
          case ru:
          case nu:
          case lu:
          case uu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case N_:
              case iu:
              case au:
              case cu:
              case su:
              case ou:
                return e;
              default:
                return t;
            }
        }
      case ld:
        return t;
    }
  }
}
ae.ContextConsumer = iu;
ae.ContextProvider = ou;
ae.Element = ad;
ae.ForwardRef = au;
ae.Fragment = tu;
ae.Lazy = cu;
ae.Memo = su;
ae.Portal = ld;
ae.Profiler = ru;
ae.StrictMode = nu;
ae.Suspense = lu;
ae.SuspenseList = uu;
ae.isAsyncMode = function () {
  return !1;
};
ae.isConcurrentMode = function () {
  return !1;
};
ae.isContextConsumer = function (e) {
  return Tt(e) === iu;
};
ae.isContextProvider = function (e) {
  return Tt(e) === ou;
};
ae.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ad;
};
ae.isForwardRef = function (e) {
  return Tt(e) === au;
};
ae.isFragment = function (e) {
  return Tt(e) === tu;
};
ae.isLazy = function (e) {
  return Tt(e) === cu;
};
ae.isMemo = function (e) {
  return Tt(e) === su;
};
ae.isPortal = function (e) {
  return Tt(e) === ld;
};
ae.isProfiler = function (e) {
  return Tt(e) === ru;
};
ae.isStrictMode = function (e) {
  return Tt(e) === nu;
};
ae.isSuspense = function (e) {
  return Tt(e) === lu;
};
ae.isSuspenseList = function (e) {
  return Tt(e) === uu;
};
ae.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === tu ||
    e === ru ||
    e === nu ||
    e === lu ||
    e === uu ||
    e === D_ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === cu ||
        e.$$typeof === su ||
        e.$$typeof === ou ||
        e.$$typeof === iu ||
        e.$$typeof === au ||
        e.$$typeof === Ug ||
        e.getModuleId !== void 0))
  );
};
ae.typeOf = Tt;
Vg.exports = ae;
var z_ = Vg.exports,
  Rc = {},
  B_ = function (t) {};
function F_(e, t) {}
function H_(e, t) {}
function V_() {
  Rc = {};
}
function Wg(e, t, n) {
  !t && !Rc[n] && (e(!1, n), (Rc[n] = !0));
}
function Wi(e, t) {
  Wg(F_, e, t);
}
function U_(e, t) {
  Wg(H_, e, t);
}
Wi.preMessage = B_;
Wi.resetWarned = V_;
Wi.noteOnce = U_;
function ye(e) {
  "@babel/helpers - typeof";
  return (
    (ye =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ye(e)
  );
}
function W_(e, t) {
  if (ye(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ye(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gg(e) {
  var t = W_(e, "string");
  return ye(t) == "symbol" ? t : String(t);
}
function re(e, t, n) {
  return (
    (t = Gg(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function g0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? g0(Object(n), !0).forEach(function (r) {
          re(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : g0(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function G_(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function X_(e) {
  return G_(e) ? e : e instanceof Y.Component ? Fg.findDOMNode(e) : null;
}
function Xg(e, t, n) {
  var r = y.useRef({});
  return (
    (!("value" in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  );
}
function Qg(e, t) {
  typeof e == "function"
    ? e(t)
    : ye(e) === "object" && e && "current" in e && (e.current = t);
}
function Kg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function (o) {
    return o;
  });
  return r.length <= 1
    ? r[0]
    : function (o) {
        t.forEach(function (i) {
          Qg(i, o);
        });
      };
}
function qg(e) {
  var t,
    n,
    r = z_.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof r == "function" &&
      !((t = r.prototype) !== null && t !== void 0 && t.render)) ||
    (typeof e == "function" &&
      !((n = e.prototype) !== null && n !== void 0 && n.render))
  );
}
function rr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Gg(r.key), r);
  }
}
function or(e, t, n) {
  return (
    t && m0(e.prototype, t),
    n && m0(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ac(e, t) {
  return (
    (Ac = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ac(e, t)
  );
}
function fu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ac(e, t);
}
function kl(e) {
  return (
    (kl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    kl(e)
  );
}
function Q_() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Mc(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function K_(e, t) {
  if (t && (ye(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Mc(e);
}
function du(e) {
  var t = Q_();
  return function () {
    var r = kl(e),
      o;
    if (t) {
      var i = kl(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return K_(this, o);
  };
}
function q_(e, t) {
  var n = q({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r];
      }),
    n
  );
}
function Ic(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Y_(e) {
  if (Array.isArray(e)) return Ic(e);
}
function Yg(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function ud(e, t) {
  if (e) {
    if (typeof e == "string") return Ic(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ic(e, t);
  }
}
function Z_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ir(e) {
  return Y_(e) || Yg(e) || ud(e) || Z_();
}
var Zg = function (t) {
    return +setTimeout(t, 16);
  },
  Jg = function (t) {
    return clearTimeout(t);
  };
typeof window < "u" &&
  "requestAnimationFrame" in window &&
  ((Zg = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (Jg = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var y0 = 0,
  sd = new Map();
function e1(e) {
  sd.delete(e);
}
var Pr = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  y0 += 1;
  var r = y0;
  function o(i) {
    if (i === 0) e1(r), t();
    else {
      var a = Zg(function () {
        o(i - 1);
      });
      sd.set(r, a);
    }
  }
  return o(n), r;
};
Pr.cancel = function (e) {
  var t = sd.get(e);
  return e1(e), Jg(t);
};
function t1(e) {
  if (Array.isArray(e)) return e;
}
function J_(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      a,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (o = f);
    } finally {
      try {
        if (!u && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return l;
  }
}
function n1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function te(e, t) {
  return t1(e) || J_(e, t) || ud(e, t) || n1();
}
function Tl(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
function tn() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function ew(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var S0 = "data-rc-order",
  _0 = "data-rc-priority",
  tw = "rc-util-key",
  Lc = new Map();
function r1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : tw;
}
function pu(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function nw(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function o1(e) {
  return Array.from((Lc.get(e) || e).children).filter(function (t) {
    return t.tagName === "STYLE";
  });
}
function i1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!tn()) return null;
  var n = t.csp,
    r = t.prepend,
    o = t.priority,
    i = o === void 0 ? 0 : o,
    a = nw(r),
    l = a === "prependQueue",
    u = document.createElement("style");
  u.setAttribute(S0, a),
    l && i && u.setAttribute(_0, "".concat(i)),
    n != null && n.nonce && (u.nonce = n == null ? void 0 : n.nonce),
    (u.innerHTML = e);
  var s = pu(t),
    f = s.firstChild;
  if (r) {
    if (l) {
      var p = o1(s).filter(function (d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(S0)))
          return !1;
        var m = Number(d.getAttribute(_0) || 0);
        return i >= m;
      });
      if (p.length) return s.insertBefore(u, p[p.length - 1].nextSibling), u;
    }
    s.insertBefore(u, f);
  } else s.appendChild(u);
  return u;
}
function a1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = pu(t);
  return o1(n).find(function (r) {
    return r.getAttribute(r1(t)) === e;
  });
}
function cd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = a1(e, t);
  if (n) {
    var r = pu(t);
    r.removeChild(n);
  }
}
function rw(e, t) {
  var n = Lc.get(e);
  if (!n || !ew(document, n)) {
    var r = i1("", t),
      o = r.parentNode;
    Lc.set(e, o), e.removeChild(r);
  }
}
function Rr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = pu(n);
  rw(r, n);
  var o = a1(t, n);
  if (o) {
    var i, a;
    if (
      (i = n.csp) !== null &&
      i !== void 0 &&
      i.nonce &&
      o.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)
    ) {
      var l;
      o.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var u = i1(e, n);
  return u.setAttribute(r1(n), t), u;
}
function ow(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ii(e, t) {
  if (e == null) return {};
  var n = ow(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function iw(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set();
  function o(i, a) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      u = r.has(i);
    if ((Wi(!u, "Warning: There may be circular references"), u)) return !1;
    if (i === a) return !0;
    if (n && l > 1) return !1;
    r.add(i);
    var s = l + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length) return !1;
      for (var f = 0; f < i.length; f++) if (!o(i[f], a[f], s)) return !1;
      return !0;
    }
    if (i && a && ye(i) === "object" && ye(a) === "object") {
      var p = Object.keys(i);
      return p.length !== Object.keys(a).length
        ? !1
        : p.every(function (d) {
            return o(i[d], a[d], s);
          });
    }
    return !1;
  }
  return o(e, t);
}
var w0 = "%",
  aw = (function () {
    function e(t) {
      rr(this, e),
        re(this, "instanceId", void 0),
        re(this, "cache", new Map()),
        (this.instanceId = t);
    }
    return (
      or(e, [
        {
          key: "get",
          value: function (n) {
            return this.cache.get(n.join(w0)) || null;
          },
        },
        {
          key: "update",
          value: function (n, r) {
            var o = n.join(w0),
              i = this.cache.get(o),
              a = r(i);
            a === null ? this.cache.delete(o) : this.cache.set(o, a);
          },
        },
      ]),
      e
    );
  })(),
  Co = "data-token-hash",
  Ht = "data-css-hash",
  zn = "__cssinjs_instance__";
function lw() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Ht, "]")) || [],
      n = document.head.firstChild;
    Array.from(t).forEach(function (o) {
      (o[zn] = o[zn] || e), o[zn] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(Ht, "]"))).forEach(
      function (o) {
        var i = o.getAttribute(Ht);
        if (r[i]) {
          if (o[zn] === e) {
            var a;
            (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
          }
        } else r[i] = !0;
      }
    );
  }
  return new aw(e);
}
var uw = y.createContext({
  hashPriority: "low",
  cache: lw(),
  defaultCache: !0,
});
const hu = uw;
function sw(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var fd = (function () {
  function e() {
    rr(this, e),
      re(this, "cache", void 0),
      re(this, "keys", void 0),
      re(this, "cacheCallTimes", void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    or(e, [
      {
        key: "size",
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: "internalGet",
        value: function (n) {
          var r,
            o,
            i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            a = { map: this.cache };
          return (
            n.forEach(function (l) {
              if (!a) a = void 0;
              else {
                var u;
                a =
                  (u = a) === null ||
                  u === void 0 ||
                  (u = u.map) === null ||
                  u === void 0
                    ? void 0
                    : u.get(l);
              }
            }),
            (r = a) !== null &&
              r !== void 0 &&
              r.value &&
              i &&
              (a.value[1] = this.cacheCallTimes++),
            (o = a) === null || o === void 0 ? void 0 : o.value
          );
        },
      },
      {
        key: "get",
        value: function (n) {
          var r;
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0];
        },
      },
      {
        key: "has",
        value: function (n) {
          return !!this.internalGet(n);
        },
      },
      {
        key: "set",
        value: function (n, r) {
          var o = this;
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var i = this.keys.reduce(
                  function (s, f) {
                    var p = te(s, 2),
                      d = p[1];
                    return o.internalGet(f)[1] < d
                      ? [f, o.internalGet(f)[1]]
                      : s;
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                a = te(i, 1),
                l = a[0];
              this.delete(l);
            }
            this.keys.push(n);
          }
          var u = this.cache;
          n.forEach(function (s, f) {
            if (f === n.length - 1)
              u.set(s, { value: [r, o.cacheCallTimes++] });
            else {
              var p = u.get(s);
              p ? p.map || (p.map = new Map()) : u.set(s, { map: new Map() }),
                (u = u.get(s).map);
            }
          });
        },
      },
      {
        key: "deleteByPath",
        value: function (n, r) {
          var o = n.get(r[0]);
          if (r.length === 1) {
            var i;
            return (
              o.map ? n.set(r[0], { map: o.map }) : n.delete(r[0]),
              (i = o.value) === null || i === void 0 ? void 0 : i[0]
            );
          }
          var a = this.deleteByPath(o.map, r.slice(1));
          return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a;
        },
      },
      {
        key: "delete",
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !sw(r, n);
              })),
              this.deleteByPath(this.cache, n)
            );
        },
      },
    ]),
    e
  );
})();
re(fd, "MAX_CACHE_SIZE", 20);
re(fd, "MAX_CACHE_OFFSET", 5);
var E0 = 0,
  l1 = (function () {
    function e(t) {
      rr(this, e),
        re(this, "derivatives", void 0),
        re(this, "id", void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = E0),
        t.length === 0 && (t.length > 0, void 0),
        (E0 += 1);
    }
    return (
      or(e, [
        {
          key: "getDerivativeToken",
          value: function (n) {
            return this.derivatives.reduce(function (r, o) {
              return o(n, r);
            }, void 0);
          },
        },
      ]),
      e
    );
  })(),
  ss = new fd();
function jc(e) {
  var t = Array.isArray(e) ? e : [e];
  return ss.has(t) || ss.set(t, new l1(t)), ss.get(t);
}
var cw = new WeakMap(),
  cs = {};
function fw(e, t) {
  for (var n = cw, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, new WeakMap()), (n = n.get(o));
  }
  return n.has(cs) || n.set(cs, e()), n.get(cs);
}
var x0 = new WeakMap();
function pi(e) {
  var t = x0.get(e) || "";
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n),
          r instanceof l1
            ? (t += r.id)
            : r && ye(r) === "object"
            ? (t += pi(r))
            : (t += r);
      }),
      x0.set(e, t)),
    t
  );
}
function b0(e, t) {
  return Tl("".concat(t, "_").concat(pi(e)));
}
var hi = "random-"
    .concat(Date.now(), "-")
    .concat(Math.random())
    .replace(/\./g, ""),
  u1 = "_bAmBoO_";
function dw(e, t, n) {
  if (tn()) {
    var r, o;
    Rr(e, hi);
    var i = document.createElement("div");
    (i.style.position = "fixed"),
      (i.style.left = "0"),
      (i.style.top = "0"),
      t == null || t(i),
      document.body.appendChild(i);
    var a = n
      ? n(i)
      : (r = getComputedStyle(i).content) === null || r === void 0
      ? void 0
      : r.includes(u1);
    return (
      (o = i.parentNode) === null || o === void 0 || o.removeChild(i), cd(hi), a
    );
  }
  return !1;
}
var fs = void 0;
function pw() {
  return (
    fs === void 0 &&
      (fs = dw(
        "@layer "
          .concat(hi, " { .")
          .concat(hi, ' { content: "')
          .concat(u1, '"!important; } }'),
        function (e) {
          e.className = hi;
        }
      )),
    fs
  );
}
var Nc = tn();
function Jn(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function $l(e, t, n) {
  var r,
    o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i) return e;
  var a = q(q({}, o), {}, ((r = {}), re(r, Co, t), re(r, Ht, n), r)),
    l = Object.keys(a)
      .map(function (u) {
        var s = a[u];
        return s ? "".concat(u, '="').concat(s, '"') : null;
      })
      .filter(function (u) {
        return u;
      })
      .join(" ");
  return "<style ".concat(l, ">").concat(e, "</style>");
}
var s1 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--"
      .concat(n ? "".concat(n, "-") : "")
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
      .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
      .toLowerCase();
  },
  hw = function (t, n, r) {
    return Object.keys(t).length
      ? "."
          .concat(n)
          .concat(r != null && r.scope ? ".".concat(r.scope) : "", "{")
          .concat(
            Object.entries(t)
              .map(function (o) {
                var i = te(o, 2),
                  a = i[0],
                  l = i[1];
                return "".concat(a, ":").concat(l, ";");
              })
              .join(""),
            "}"
          )
      : "";
  },
  c1 = function (t, n, r) {
    var o = {},
      i = {};
    return (
      Object.entries(t).forEach(function (a) {
        var l,
          u,
          s = te(a, 2),
          f = s[0],
          p = s[1];
        if (r != null && (l = r.preserve) !== null && l !== void 0 && l[f])
          i[f] = p;
        else if (
          (typeof p == "string" || typeof p == "number") &&
          !(r != null && (u = r.ignore) !== null && u !== void 0 && u[f])
        ) {
          var d,
            m = s1(f, r == null ? void 0 : r.prefix);
          (o[m] =
            typeof p == "number" &&
            !(r != null && (d = r.unitless) !== null && d !== void 0 && d[f])
              ? "".concat(p, "px")
              : String(p)),
            (i[f] = "var(".concat(m, ")"));
        }
      }),
      [i, hw(o, n, { scope: r == null ? void 0 : r.scope })]
    );
  },
  C0 = tn() ? y.useLayoutEffect : y.useEffect,
  vw = function (t, n) {
    var r = y.useRef(!0);
    C0(function () {
      return t(r.current);
    }, n),
      C0(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0;
          }
        );
      }, []);
  },
  gw = q({}, zl),
  O0 = gw.useInsertionEffect,
  mw = function (t, n, r) {
    y.useMemo(t, r),
      vw(function () {
        return n(!0);
      }, r);
  },
  yw = O0
    ? function (e, t, n) {
        return O0(function () {
          return e(), t();
        }, n);
      }
    : mw;
const Sw = yw;
var _w = q({}, zl),
  ww = _w.useInsertionEffect,
  Ew = function (t) {
    var n = [],
      r = !1;
    function o(i) {
      r || n.push(i);
    }
    return (
      y.useEffect(function () {
        return (
          (r = !1),
          function () {
            (r = !0),
              n.length &&
                n.forEach(function (i) {
                  return i();
                });
          }
        );
      }, t),
      o
    );
  },
  xw = function () {
    return function (t) {
      t();
    };
  },
  bw = typeof ww < "u" ? Ew : xw;
const Cw = bw;
function dd(e, t, n, r, o) {
  var i = y.useContext(hu),
    a = i.cache,
    l = [e].concat(ir(t)),
    u = l.join("_"),
    s = Cw([u]),
    f = function (_) {
      a.update(l, function (b) {
        var A = b || [void 0, void 0],
          v = te(A, 2),
          c = v[0],
          h = c === void 0 ? 0 : c,
          w = v[1],
          C = w,
          T = C || n(),
          x = [h, T];
        return _ ? _(x) : x;
      });
    };
  y.useMemo(
    function () {
      f();
    },
    [u]
  );
  var p = a.get(l),
    d = p[1];
  return (
    Sw(
      function () {
        o == null || o(d);
      },
      function (m) {
        return (
          f(function (_) {
            var b = te(_, 2),
              A = b[0],
              v = b[1];
            return m && A === 0 && (o == null || o(d)), [A + 1, v];
          }),
          function () {
            a.update(l, function (_) {
              var b = _ || [],
                A = te(b, 2),
                v = A[0],
                c = v === void 0 ? 0 : v,
                h = A[1],
                w = c - 1;
              return w === 0
                ? (s(function () {
                    (m || !a.get(l)) && (r == null || r(h, !1));
                  }),
                  null)
                : [c - 1, h];
            });
          }
        );
      },
      [u]
    ),
    d
  );
}
var Ow = {},
  kw = "css",
  hr = new Map();
function Tw(e) {
  hr.set(e, (hr.get(e) || 0) + 1);
}
function $w(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll(
      "style[".concat(Co, '="').concat(e, '"]')
    );
    n.forEach(function (r) {
      if (r[zn] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Pw = 0;
function Rw(e, t) {
  hr.set(e, (hr.get(e) || 0) - 1);
  var n = Array.from(hr.keys()),
    r = n.filter(function (o) {
      var i = hr.get(o) || 0;
      return i <= 0;
    });
  n.length - r.length > Pw &&
    r.forEach(function (o) {
      $w(o, t), hr.delete(o);
    });
}
var Aw = function (t, n, r, o) {
    var i = r.getDerivativeToken(t),
      a = q(q({}, i), n);
    return o && (a = o(a)), a;
  },
  f1 = "token";
function Mw(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = y.useContext(hu),
    o = r.cache.instanceId,
    i = r.container,
    a = n.salt,
    l = a === void 0 ? "" : a,
    u = n.override,
    s = u === void 0 ? Ow : u,
    f = n.formatToken,
    p = n.getComputedToken,
    d = n.cssVar,
    m = fw(function () {
      return Object.assign.apply(Object, [{}].concat(ir(t)));
    }, t),
    _ = pi(m),
    b = pi(s),
    A = d ? pi(d) : "",
    v = dd(
      f1,
      [l, e.id, _, b, A],
      function () {
        var c,
          h = p ? p(m, s, e) : Aw(m, s, e, f),
          w = q({}, h),
          C = "";
        if (d) {
          var T = c1(h, d.key, {
              prefix: d.prefix,
              ignore: d.ignore,
              unitless: d.unitless,
              preserve: d.preserve,
            }),
            x = te(T, 2);
          (h = x[0]), (C = x[1]);
        }
        var M = b0(h, l);
        (h._tokenKey = M), (w._tokenKey = b0(w, l));
        var B =
          (c = d == null ? void 0 : d.key) !== null && c !== void 0 ? c : M;
        (h._themeKey = B), Tw(B);
        var N = "".concat(kw, "-").concat(Tl(M));
        return (
          (h._hashId = N), [h, N, w, C, (d == null ? void 0 : d.key) || ""]
        );
      },
      function (c) {
        Rw(c[0]._themeKey, o);
      },
      function (c) {
        var h = te(c, 4),
          w = h[0],
          C = h[3];
        if (d && C) {
          var T = Rr(C, Tl("css-variables-".concat(w._themeKey)), {
            mark: Ht,
            prepend: "queue",
            attachTo: i,
            priority: -999,
          });
          (T[zn] = o), T.setAttribute(Co, w._themeKey);
        }
      }
    );
  return v;
}
var Iw = function (t, n, r) {
    var o = te(t, 5),
      i = o[2],
      a = o[3],
      l = o[4],
      u = r || {},
      s = u.plain;
    if (!a) return null;
    var f = i._tokenKey,
      p = -999,
      d = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(p) },
      m = $l(a, l, f, d, s);
    return [p, f, m];
  },
  Lw = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  d1 = "comm",
  p1 = "rule",
  h1 = "decl",
  jw = "@import",
  Nw = "@keyframes",
  Dw = "@layer",
  zw = Math.abs,
  pd = String.fromCharCode;
function v1(e) {
  return e.trim();
}
function Xa(e, t, n) {
  return e.replace(t, n);
}
function Bw(e, t) {
  return e.indexOf(t);
}
function Li(e, t) {
  return e.charCodeAt(t) | 0;
}
function ji(e, t, n) {
  return e.slice(t, n);
}
function dn(e) {
  return e.length;
}
function Fw(e) {
  return e.length;
}
function _a(e, t) {
  return t.push(e), e;
}
var vu = 1,
  Oo = 1,
  g1 = 0,
  kt = 0,
  Oe = 0,
  Ro = "";
function hd(e, t, n, r, o, i, a, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: vu,
    column: Oo,
    length: a,
    return: "",
    siblings: l,
  };
}
function Hw() {
  return Oe;
}
function Vw() {
  return (
    (Oe = kt > 0 ? Li(Ro, --kt) : 0), Oo--, Oe === 10 && ((Oo = 1), vu--), Oe
  );
}
function Vt() {
  return (
    (Oe = kt < g1 ? Li(Ro, kt++) : 0), Oo++, Oe === 10 && ((Oo = 1), vu++), Oe
  );
}
function Er() {
  return Li(Ro, kt);
}
function Qa() {
  return kt;
}
function gu(e, t) {
  return ji(Ro, e, t);
}
function Dc(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Uw(e) {
  return (vu = Oo = 1), (g1 = dn((Ro = e))), (kt = 0), [];
}
function Ww(e) {
  return (Ro = ""), e;
}
function ds(e) {
  return v1(gu(kt - 1, zc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gw(e) {
  for (; (Oe = Er()) && Oe < 33; ) Vt();
  return Dc(e) > 2 || Dc(Oe) > 3 ? "" : " ";
}
function Xw(e, t) {
  for (
    ;
    --t &&
    Vt() &&
    !(Oe < 48 || Oe > 102 || (Oe > 57 && Oe < 65) || (Oe > 70 && Oe < 97));

  );
  return gu(e, Qa() + (t < 6 && Er() == 32 && Vt() == 32));
}
function zc(e) {
  for (; Vt(); )
    switch (Oe) {
      case e:
        return kt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && zc(Oe);
        break;
      case 40:
        e === 41 && zc(e);
        break;
      case 92:
        Vt();
        break;
    }
  return kt;
}
function Qw(e, t) {
  for (; Vt() && e + Oe !== 57; ) if (e + Oe === 84 && Er() === 47) break;
  return "/*" + gu(t, kt - 1) + "*" + pd(e === 47 ? e : Vt());
}
function Kw(e) {
  for (; !Dc(Er()); ) Vt();
  return gu(e, kt);
}
function qw(e) {
  return Ww(Ka("", null, null, null, [""], (e = Uw(e)), 0, [0], e));
}
function Ka(e, t, n, r, o, i, a, l, u) {
  for (
    var s = 0,
      f = 0,
      p = a,
      d = 0,
      m = 0,
      _ = 0,
      b = 1,
      A = 1,
      v = 1,
      c = 0,
      h = "",
      w = o,
      C = i,
      T = r,
      x = h;
    A;

  )
    switch (((_ = c), (c = Vt()))) {
      case 40:
        if (_ != 108 && Li(x, p - 1) == 58) {
          Bw((x += Xa(ds(c), "&", "&\f")), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += ds(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Gw(_);
        break;
      case 92:
        x += Xw(Qa() - 1, 7);
        continue;
      case 47:
        switch (Er()) {
          case 42:
          case 47:
            _a(Yw(Qw(Vt(), Qa()), t, n, u), u);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * b:
        l[s++] = dn(x) * v;
      case 125 * b:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            A = 0;
          case 59 + f:
            v == -1 && (x = Xa(x, /\f/g, "")),
              m > 0 &&
                dn(x) - p &&
                _a(
                  m > 32
                    ? T0(x + ";", r, n, p - 1, u)
                    : T0(Xa(x, " ", "") + ";", r, n, p - 2, u),
                  u
                );
            break;
          case 59:
            x += ";";
          default:
            if (
              (_a(
                (T = k0(x, t, n, s, f, o, l, h, (w = []), (C = []), p, i)),
                i
              ),
              c === 123)
            )
              if (f === 0) Ka(x, t, T, T, w, i, p, l, C);
              else
                switch (d === 99 && Li(x, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ka(
                      e,
                      T,
                      T,
                      r && _a(k0(e, T, T, 0, 0, o, l, h, o, (w = []), p, C), C),
                      o,
                      C,
                      p,
                      l,
                      r ? w : C
                    );
                    break;
                  default:
                    Ka(x, T, T, T, [""], C, 0, l, C);
                }
        }
        (s = f = m = 0), (b = v = 1), (h = x = ""), (p = a);
        break;
      case 58:
        (p = 1 + dn(x)), (m = _);
      default:
        if (b < 1) {
          if (c == 123) --b;
          else if (c == 125 && b++ == 0 && Vw() == 125) continue;
        }
        switch (((x += pd(c)), c * b)) {
          case 38:
            v = f > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (l[s++] = (dn(x) - 1) * v), (v = 1);
            break;
          case 64:
            Er() === 45 && (x += ds(Vt())),
              (d = Er()),
              (f = p = dn((h = x += Kw(Qa())))),
              c++;
            break;
          case 45:
            _ === 45 && dn(x) == 2 && (b = 0);
        }
    }
  return i;
}
function k0(e, t, n, r, o, i, a, l, u, s, f, p) {
  for (
    var d = o - 1, m = o === 0 ? i : [""], _ = Fw(m), b = 0, A = 0, v = 0;
    b < r;
    ++b
  )
    for (var c = 0, h = ji(e, d + 1, (d = zw((A = a[b])))), w = e; c < _; ++c)
      (w = v1(A > 0 ? m[c] + " " + h : Xa(h, /&\f/g, m[c]))) && (u[v++] = w);
  return hd(e, t, n, o === 0 ? p1 : l, u, s, f, p);
}
function Yw(e, t, n, r) {
  return hd(e, t, n, d1, pd(Hw()), ji(e, 2, -2), 0, r);
}
function T0(e, t, n, r, o) {
  return hd(e, t, n, h1, ji(e, 0, r), ji(e, r + 1, -1), r, o);
}
function Bc(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Zw(e, t, n, r) {
  switch (e.type) {
    case Dw:
      if (e.children.length) break;
    case jw:
    case h1:
      return (e.return = e.return || e.value);
    case d1:
      return "";
    case Nw:
      return (e.return = e.value + "{" + Bc(e.children, r) + "}");
    case p1:
      if (!dn((e.value = e.props.join(",")))) return "";
  }
  return dn((n = Bc(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
var $0 = "data-ant-cssinjs-cache-path",
  m1 = "_FILE_STYLE__",
  xr,
  y1 = !0;
function Jw() {
  if (!xr && ((xr = {}), tn())) {
    var e = document.createElement("div");
    (e.className = $0),
      (e.style.position = "fixed"),
      (e.style.visibility = "hidden"),
      (e.style.top = "-9999px"),
      document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    (t = t.replace(/^"/, "").replace(/"$/, "")),
      t.split(";").forEach(function (o) {
        var i = o.split(":"),
          a = te(i, 2),
          l = a[0],
          u = a[1];
        xr[l] = u;
      });
    var n = document.querySelector("style[".concat($0, "]"));
    if (n) {
      var r;
      (y1 = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function eE(e) {
  return Jw(), !!xr[e];
}
function tE(e) {
  var t = xr[e],
    n = null;
  if (t && tn())
    if (y1) n = m1;
    else {
      var r = document.querySelector(
        "style[".concat(Ht, '="').concat(xr[e], '"]')
      );
      r ? (n = r.innerHTML) : delete xr[e];
    }
  return [n, t];
}
var nE = "_skip_check_",
  S1 = "_multi_value_";
function Fc(e) {
  var t = Bc(qw(e), Zw);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function rE(e) {
  return ye(e) === "object" && e && (nE in e || S1 in e);
}
function oE(e, t, n) {
  if (!t) return e;
  var r = ".".concat(t),
    o = n === "low" ? ":where(".concat(r, ")") : r,
    i = e.split(",").map(function (a) {
      var l,
        u = a.trim().split(/\s+/),
        s = u[0] || "",
        f =
          ((l = s.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) ||
          "";
      return (
        (s = "".concat(f).concat(o).concat(s.slice(f.length))),
        [s].concat(ir(u.slice(1))).join(" ")
      );
    });
  return i.join(",");
}
var iE = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    o = r.root,
    i = r.injectHash,
    a = r.parentSelectors,
    l = n.hashId,
    u = n.layer;
  n.path;
  var s = n.hashPriority,
    f = n.transformers,
    p = f === void 0 ? [] : f;
  n.linters;
  var d = "",
    m = {};
  function _(h) {
    var w = h.getName(l);
    if (!m[w]) {
      var C = e(h.style, n, { root: !1, parentSelectors: a }),
        T = te(C, 1),
        x = T[0];
      m[w] = "@keyframes ".concat(h.getName(l)).concat(x);
    }
  }
  function b(h) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      h.forEach(function (C) {
        Array.isArray(C) ? b(C, w) : C && w.push(C);
      }),
      w
    );
  }
  var A = b(Array.isArray(t) ? t : [t]);
  if (
    (A.forEach(function (h) {
      var w = typeof h == "string" && !o ? {} : h;
      if (typeof w == "string")
        d += "".concat(
          w,
          `
`
        );
      else if (w._keyframe) _(w);
      else {
        var C = p.reduce(function (T, x) {
          var M;
          return (
            (x == null || (M = x.visit) === null || M === void 0
              ? void 0
              : M.call(x, T)) || T
          );
        }, w);
        Object.keys(C).forEach(function (T) {
          var x = C[T];
          if (
            ye(x) === "object" &&
            x &&
            (T !== "animationName" || !x._keyframe) &&
            !rE(x)
          ) {
            var M = !1,
              B = T.trim(),
              N = !1;
            (o || i) && l
              ? B.startsWith("@")
                ? (M = !0)
                : (B = oE(T, l, s))
              : o && !l && (B === "&" || B === "") && ((B = ""), (N = !0));
            var Q = e(x, n, {
                root: N,
                injectHash: M,
                parentSelectors: [].concat(ir(a), [B]),
              }),
              I = te(Q, 2),
              j = I[0],
              W = I[1];
            (m = q(q({}, m), W)), (d += "".concat(B).concat(j));
          } else {
            let k = function (S, $) {
              var R = S.replace(/[A-Z]/g, function (X) {
                  return "-".concat(X.toLowerCase());
                }),
                D = $;
              !Lw[S] &&
                typeof D == "number" &&
                D !== 0 &&
                (D = "".concat(D, "px")),
                S === "animationName" &&
                  $ !== null &&
                  $ !== void 0 &&
                  $._keyframe &&
                  (_($), (D = $.getName(l))),
                (d += "".concat(R, ":").concat(D, ";"));
            };
            var V,
              P =
                (V = x == null ? void 0 : x.value) !== null && V !== void 0
                  ? V
                  : x;
            ye(x) === "object" &&
            x !== null &&
            x !== void 0 &&
            x[S1] &&
            Array.isArray(P)
              ? P.forEach(function (S) {
                  k(T, S);
                })
              : k(T, P);
          }
        });
      }
    }),
    !o)
  )
    d = "{".concat(d, "}");
  else if (u && pw()) {
    var v = u.split(","),
      c = v[v.length - 1].trim();
    (d = "@layer ".concat(c, " {").concat(d, "}")),
      v.length > 1 && (d = "@layer ".concat(u, "{%%%:%}").concat(d));
  }
  return [d, m];
};
function _1(e, t) {
  return Tl("".concat(e.join("%")).concat(t));
}
function aE() {
  return null;
}
var w1 = "style";
function Hc(e, t) {
  var n = e.token,
    r = e.path,
    o = e.hashId,
    i = e.layer,
    a = e.nonce,
    l = e.clientOnly,
    u = e.order,
    s = u === void 0 ? 0 : u,
    f = y.useContext(hu),
    p = f.autoClear;
  f.mock;
  var d = f.defaultCache,
    m = f.hashPriority,
    _ = f.container,
    b = f.ssrInline,
    A = f.transformers,
    v = f.linters,
    c = f.cache,
    h = n._tokenKey,
    w = [h].concat(ir(r)),
    C = Nc,
    T = dd(
      w1,
      w,
      function () {
        var Q = w.join("|");
        if (eE(Q)) {
          var I = tE(Q),
            j = te(I, 2),
            W = j[0],
            V = j[1];
          if (W) return [W, h, V, {}, l, s];
        }
        var P = t(),
          k = iE(P, {
            hashId: o,
            hashPriority: m,
            layer: i,
            path: r.join("-"),
            transformers: A,
            linters: v,
          }),
          S = te(k, 2),
          $ = S[0],
          R = S[1],
          D = Fc($),
          X = _1(w, D);
        return [D, h, X, R, l, s];
      },
      function (Q, I) {
        var j = te(Q, 3),
          W = j[2];
        (I || p) && Nc && cd(W, { mark: Ht });
      },
      function (Q) {
        var I = te(Q, 4),
          j = I[0];
        I[1];
        var W = I[2],
          V = I[3];
        if (C && j !== m1) {
          var P = { mark: Ht, prepend: "queue", attachTo: _, priority: s },
            k = typeof a == "function" ? a() : a;
          k && (P.csp = { nonce: k });
          var S = Rr(j, W, P);
          (S[zn] = c.instanceId),
            S.setAttribute(Co, h),
            Object.keys(V).forEach(function ($) {
              Rr(Fc(V[$]), "_effect-".concat($), P);
            });
        }
      }
    ),
    x = te(T, 3),
    M = x[0],
    B = x[1],
    N = x[2];
  return function (Q) {
    var I;
    if (!b || C || !d) I = y.createElement(aE, null);
    else {
      var j;
      I = y.createElement(
        "style",
        bo({}, ((j = {}), re(j, Co, B), re(j, Ht, N), j), {
          dangerouslySetInnerHTML: { __html: M },
        })
      );
    }
    return y.createElement(y.Fragment, null, I, Q);
  };
}
var lE = function (t, n, r) {
    var o = te(t, 6),
      i = o[0],
      a = o[1],
      l = o[2],
      u = o[3],
      s = o[4],
      f = o[5],
      p = r || {},
      d = p.plain;
    if (s) return null;
    var m = i,
      _ = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(f) };
    return (
      (m = $l(i, a, l, _, d)),
      u &&
        Object.keys(u).forEach(function (b) {
          if (!n[b]) {
            n[b] = !0;
            var A = Fc(u[b]);
            m += $l(A, a, "_effect-".concat(b), _, d);
          }
        }),
      [f, l, m]
    );
  },
  E1 = "cssVar",
  uE = function (t, n) {
    var r = t.key,
      o = t.prefix,
      i = t.unitless,
      a = t.ignore,
      l = t.token,
      u = t.scope,
      s = u === void 0 ? "" : u,
      f = y.useContext(hu),
      p = f.cache.instanceId,
      d = f.container,
      m = l._tokenKey,
      _ = [].concat(ir(t.path), [r, s, m]),
      b = dd(
        E1,
        _,
        function () {
          var A = n(),
            v = c1(A, r, { prefix: o, unitless: i, ignore: a, scope: s }),
            c = te(v, 2),
            h = c[0],
            w = c[1],
            C = _1(_, w);
          return [h, w, C, r];
        },
        function (A) {
          var v = te(A, 3),
            c = v[2];
          Nc && cd(c, { mark: Ht });
        },
        function (A) {
          var v = te(A, 3),
            c = v[1],
            h = v[2];
          if (c) {
            var w = Rr(c, h, {
              mark: Ht,
              prepend: "queue",
              attachTo: d,
              priority: -999,
            });
            (w[zn] = p), w.setAttribute(Co, r);
          }
        }
      );
    return b;
  },
  sE = function (t, n, r) {
    var o = te(t, 4),
      i = o[1],
      a = o[2],
      l = o[3],
      u = r || {},
      s = u.plain;
    if (!i) return null;
    var f = -999,
      p = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(f) },
      d = $l(i, l, a, p, s);
    return [f, a, d];
  },
  Xo;
(Xo = {}), re(Xo, w1, lE), re(Xo, f1, Iw), re(Xo, E1, sE);
function Vr(e) {
  return (e.notSplit = !0), e;
}
Vr(["borderTop", "borderBottom"]),
  Vr(["borderTop"]),
  Vr(["borderBottom"]),
  Vr(["borderLeft", "borderRight"]),
  Vr(["borderLeft"]),
  Vr(["borderRight"]);
var cE = y.createContext({});
const vd = cE;
function fE(e) {
  return t1(e) || Yg(e) || ud(e) || n1();
}
function Vc(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]];
  }
  return n;
}
function x1(e, t, n, r) {
  if (!t.length) return n;
  var o = fE(t),
    i = o[0],
    a = o.slice(1),
    l;
  return (
    !e && typeof i == "number"
      ? (l = [])
      : Array.isArray(e)
      ? (l = ir(e))
      : (l = q({}, e)),
    r && n === void 0 && a.length === 1
      ? delete l[i][a[0]]
      : (l[i] = x1(l[i], a, n, r)),
    l
  );
}
function ps(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Vc(e, t.slice(0, -1))
    ? e
    : x1(e, t, n, r);
}
function dE(e) {
  return (
    ye(e) === "object" &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function P0(e) {
  return Array.isArray(e) ? [] : {};
}
var pE = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function hE() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = P0(t[0]);
  return (
    t.forEach(function (o) {
      function i(a, l) {
        var u = new Set(l),
          s = Vc(o, a),
          f = Array.isArray(s);
        if (f || dE(s)) {
          if (!u.has(s)) {
            u.add(s);
            var p = Vc(r, a);
            f
              ? (r = ps(r, a, []))
              : (!p || ye(p) !== "object") && (r = ps(r, a, P0(s))),
              pE(s).forEach(function (d) {
                i([].concat(ir(a), [d]), u);
              });
          }
        } else r = ps(r, a, s);
      }
      i([]);
    }),
    r
  );
}
const vE = y.createContext({}),
  gE = y.createContext(void 0);
var mE = {
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size",
  },
  yE = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: !0,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century",
  };
const SE = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"],
  },
  b1 = SE,
  _E = {
    lang: Object.assign(
      {
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"],
      },
      yE
    ),
    timePickerLocale: Object.assign({}, b1),
  },
  R0 = _E,
  lt = "${label} is not a valid ${type}",
  wE = {
    locale: "en",
    Pagination: mE,
    DatePicker: R0,
    TimePicker: b1,
    Calendar: R0,
    global: { placeholder: "Please select" },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting",
    },
    Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
    Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
    Popconfirm: { okText: "OK", cancelText: "Cancel" },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page",
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file",
    },
    Empty: { description: "No data" },
    Icon: { icon: "icon" },
    Text: { edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand" },
    PageHeader: { back: "Back" },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date",
        },
        types: {
          string: lt,
          method: lt,
          array: lt,
          object: lt,
          number: lt,
          date: lt,
          boolean: lt,
          integer: lt,
          float: lt,
          regexp: lt,
          email: lt,
          url: lt,
          hex: lt,
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters",
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}",
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}",
        },
        pattern: { mismatch: "${label} does not match the pattern ${pattern}" },
      },
    },
    Image: { preview: "Preview" },
    QRCode: { expired: "QR code expired", refresh: "Refresh" },
    ColorPicker: { presetEmpty: "Empty" },
  },
  mu = wE;
Object.assign({}, mu.Modal);
let qa = [];
const A0 = () =>
  qa.reduce((e, t) => Object.assign(Object.assign({}, e), t), mu.Modal);
function EE(e) {
  if (e) {
    const t = Object.assign({}, e);
    return (
      qa.push(t),
      A0(),
      () => {
        (qa = qa.filter((n) => n !== t)), A0();
      }
    );
  }
  Object.assign({}, mu.Modal);
}
const xE = y.createContext(void 0),
  C1 = xE,
  bE = "internalMark",
  CE = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
    y.useEffect(() => EE(t && t.Modal), [t]);
    const o = y.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    );
    return y.createElement(C1.Provider, { value: o }, n);
  },
  OE = CE;
function Be(e, t) {
  kE(e) && (e = "100%");
  var n = TE(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function wa(e) {
  return Math.min(1, Math.max(0, e));
}
function kE(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function TE(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function O1(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ea(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function yr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function $E(e, t, n) {
  return { r: Be(e, 255) * 255, g: Be(t, 255) * 255, b: Be(n, 255) * 255 };
}
function M0(e, t, n) {
  (e = Be(e, 255)), (t = Be(t, 255)), (n = Be(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = 0,
    l = (r + o) / 2;
  if (r === o) (a = 0), (i = 0);
  else {
    var u = r - o;
    switch (((a = l > 0.5 ? u / (2 - r - o) : u / (r + o)), r)) {
      case e:
        i = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / u + 2;
        break;
      case n:
        i = (e - t) / u + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function hs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function PE(e, t, n) {
  var r, o, i;
  if (((e = Be(e, 360)), (t = Be(t, 100)), (n = Be(n, 100)), t === 0))
    (o = n), (i = n), (r = n);
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (r = hs(l, a, e + 1 / 3)), (o = hs(l, a, e)), (i = hs(l, a, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function Uc(e, t, n) {
  (e = Be(e, 255)), (t = Be(t, 255)), (n = Be(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = r,
    l = r - o,
    u = r === 0 ? 0 : l / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: u, v: a };
}
function RE(e, t, n) {
  (e = Be(e, 360) * 6), (t = Be(t, 100)), (n = Be(n, 100));
  var r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    a = n * (1 - o * t),
    l = n * (1 - (1 - o) * t),
    u = r % 6,
    s = [n, a, i, i, l, n][u],
    f = [l, n, n, a, i, i][u],
    p = [i, i, l, n, n, a][u];
  return { r: s * 255, g: f * 255, b: p * 255 };
}
function Wc(e, t, n, r) {
  var o = [
    yr(Math.round(e).toString(16)),
    yr(Math.round(t).toString(16)),
    yr(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join("");
}
function AE(e, t, n, r, o) {
  var i = [
    yr(Math.round(e).toString(16)),
    yr(Math.round(t).toString(16)),
    yr(Math.round(n).toString(16)),
    yr(ME(r)),
  ];
  return o &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1)) &&
    i[3].startsWith(i[3].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
    : i.join("");
}
function ME(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function I0(e) {
  return st(e) / 255;
}
function st(e) {
  return parseInt(e, 16);
}
function IE(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var Gc = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function Qr(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    i = null,
    a = !1,
    l = !1;
  return (
    typeof e == "string" && (e = NE(e)),
    typeof e == "object" &&
      (on(e.r) && on(e.g) && on(e.b)
        ? ((t = $E(e.r, e.g, e.b)),
          (a = !0),
          (l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : on(e.h) && on(e.s) && on(e.v)
        ? ((r = Ea(e.s)),
          (o = Ea(e.v)),
          (t = RE(e.h, r, o)),
          (a = !0),
          (l = "hsv"))
        : on(e.h) &&
          on(e.s) &&
          on(e.l) &&
          ((r = Ea(e.s)),
          (i = Ea(e.l)),
          (t = PE(e.h, r, i)),
          (a = !0),
          (l = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    (n = O1(n)),
    {
      ok: a,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var LE = "[-\\+]?\\d+%?",
  jE = "[-\\+]?\\d*\\.\\d+%?",
  Bn = "(?:".concat(jE, ")|(?:").concat(LE, ")"),
  vs = "[\\s|\\(]+("
    .concat(Bn, ")[,|\\s]+(")
    .concat(Bn, ")[,|\\s]+(")
    .concat(Bn, ")\\s*\\)?"),
  gs = "[\\s|\\(]+("
    .concat(Bn, ")[,|\\s]+(")
    .concat(Bn, ")[,|\\s]+(")
    .concat(Bn, ")[,|\\s]+(")
    .concat(Bn, ")\\s*\\)?"),
  Mt = {
    CSS_UNIT: new RegExp(Bn),
    rgb: new RegExp("rgb" + vs),
    rgba: new RegExp("rgba" + gs),
    hsl: new RegExp("hsl" + vs),
    hsla: new RegExp("hsla" + gs),
    hsv: new RegExp("hsv" + vs),
    hsva: new RegExp("hsva" + gs),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function NE(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (Gc[e]) (e = Gc[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Mt.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Mt.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Mt.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Mt.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Mt.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Mt.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Mt.hex8.exec(e)),
                          n
                            ? {
                                r: st(n[1]),
                                g: st(n[2]),
                                b: st(n[3]),
                                a: I0(n[4]),
                                format: t ? "name" : "hex8",
                              }
                            : ((n = Mt.hex6.exec(e)),
                              n
                                ? {
                                    r: st(n[1]),
                                    g: st(n[2]),
                                    b: st(n[3]),
                                    format: t ? "name" : "hex",
                                  }
                                : ((n = Mt.hex4.exec(e)),
                                  n
                                    ? {
                                        r: st(n[1] + n[1]),
                                        g: st(n[2] + n[2]),
                                        b: st(n[3] + n[3]),
                                        a: I0(n[4] + n[4]),
                                        format: t ? "name" : "hex8",
                                      }
                                    : ((n = Mt.hex3.exec(e)),
                                      n
                                        ? {
                                            r: st(n[1] + n[1]),
                                            g: st(n[2] + n[2]),
                                            b: st(n[3] + n[3]),
                                            format: t ? "name" : "hex",
                                          }
                                        : !1)))))))));
}
function on(e) {
  return !!Mt.CSS_UNIT.exec(String(e));
}
var pt = (function () {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == "number" && (t = IE(t)), (this.originalInput = t);
      var o = Qr(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          o,
          i = t.r / 255,
          a = t.g / 255,
          l = t.b / 255;
        return (
          i <= 0.03928
            ? (n = i / 12.92)
            : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          l <= 0.03928
            ? (o = l / 12.92)
            : (o = Math.pow((l + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * o
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = O1(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s;
        return t === 0;
      }),
      (e.prototype.toHsv = function () {
        var t = Uc(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = Uc(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.v * 100);
        return this.a === 1
          ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)")
          : "hsva("
              .concat(n, ", ")
              .concat(r, "%, ")
              .concat(o, "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toHsl = function () {
        var t = M0(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = M0(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.l * 100);
        return this.a === 1
          ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)")
          : "hsla("
              .concat(n, ", ")
              .concat(r, "%, ")
              .concat(o, "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), Wc(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), AE(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t);
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        );
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")")
          : "rgba("
              .concat(t, ", ")
              .concat(n, ", ")
              .concat(r, ", ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return "".concat(Math.round(Be(n, 255) * 100), "%");
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Be(n, 255) * 100);
        };
        return this.a === 1
          ? "rgb("
              .concat(t(this.r), "%, ")
              .concat(t(this.g), "%, ")
              .concat(t(this.b), "%)")
          : "rgba("
              .concat(t(this.r), "%, ")
              .concat(t(this.g), "%, ")
              .concat(t(this.b), "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        for (
          var t = "#" + Wc(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(Gc);
          n < r.length;
          n++
        ) {
          var o = r[n],
            i = o[0],
            a = o[1];
          if (t === a) return i;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1,
          o = this.a < 1 && this.a >= 0,
          i = !n && o && (t.startsWith("hex") || t === "name");
        return i
          ? t === "name" && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === "rgb" && (r = this.toRgbString()),
            t === "prgb" && (r = this.toPercentageRgbString()),
            (t === "hex" || t === "hex6") && (r = this.toHexString()),
            t === "hex3" && (r = this.toHexString(!0)),
            t === "hex4" && (r = this.toHex8String(!0)),
            t === "hex8" && (r = this.toHex8String()),
            t === "name" && (r = this.toName()),
            t === "hsl" && (r = this.toHslString()),
            t === "hsv" && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = wa(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = wa(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix("white", t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix("black", t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = wa(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = wa(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          o = new e(t).toRgb(),
          i = n / 100,
          a = {
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a,
          };
        return new e(a);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          o = 360 / n,
          i = [this];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), i.push(new e(r));
        return i;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: o, v: i })), (i = (i + l) % 1);
        return a;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          o = n.a + r.a * (1 - n.a);
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
          a: o,
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1;
          a < t;
          a++
        )
          o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  xa = 2,
  L0 = 0.16,
  DE = 0.05,
  zE = 0.05,
  BE = 0.15,
  k1 = 5,
  T1 = 4,
  FE = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function j0(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = Uc(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function ba(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return "#".concat(Wc(t, n, r, !1));
}
function HE(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return o;
}
function N0(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - xa * t : Math.round(e.h) + xa * t)
      : (r = n ? Math.round(e.h) + xa * t : Math.round(e.h) - xa * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function D0(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - L0 * t) : t === T1 ? (r = e.s + L0) : (r = e.s + DE * t),
    r > 1 && (r = 1),
    n && t === k1 && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function z0(e, t, n) {
  var r;
  return (
    n ? (r = e.v + zE * t) : (r = e.v - BE * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function Ar(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Qr(e),
      o = k1;
    o > 0;
    o -= 1
  ) {
    var i = j0(r),
      a = ba(Qr({ h: N0(i, o, !0), s: D0(i, o, !0), v: z0(i, o, !0) }));
    n.push(a);
  }
  n.push(ba(r));
  for (var l = 1; l <= T1; l += 1) {
    var u = j0(r),
      s = ba(Qr({ h: N0(u, l), s: D0(u, l), v: z0(u, l) }));
    n.push(s);
  }
  return t.theme === "dark"
    ? FE.map(function (f) {
        var p = f.index,
          d = f.opacity,
          m = ba(HE(Qr(t.backgroundColor || "#141414"), Qr(n[p]), d * 100));
        return m;
      })
    : n;
}
var ms = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  },
  Ya = {},
  ys = {};
Object.keys(ms).forEach(function (e) {
  (Ya[e] = Ar(ms[e])),
    (Ya[e].primary = Ya[e][5]),
    (ys[e] = Ar(ms[e], { theme: "dark", backgroundColor: "#141414" })),
    (ys[e].primary = ys[e][5]);
});
var VE = Ya.blue;
const UE = (e) => {
    const { controlHeight: t } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25,
    };
  },
  WE = UE;
function GE(e) {
  const { sizeUnit: t, sizeStep: n } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  };
}
const $1 = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911",
  },
  XE = Object.assign(Object.assign({}, $1), {
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: "solid",
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  }),
  Ni = XE;
function QE(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
  const {
      colorSuccess: o,
      colorWarning: i,
      colorError: a,
      colorInfo: l,
      colorPrimary: u,
      colorBgBase: s,
      colorTextBase: f,
    } = e,
    p = n(u),
    d = n(o),
    m = n(i),
    _ = n(a),
    b = n(l),
    A = r(s, f),
    v = e.colorLink || e.colorInfo,
    c = n(v);
  return Object.assign(Object.assign({}, A), {
    colorPrimaryBg: p[1],
    colorPrimaryBgHover: p[2],
    colorPrimaryBorder: p[3],
    colorPrimaryBorderHover: p[4],
    colorPrimaryHover: p[5],
    colorPrimary: p[6],
    colorPrimaryActive: p[7],
    colorPrimaryTextHover: p[8],
    colorPrimaryText: p[9],
    colorPrimaryTextActive: p[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: _[1],
    colorErrorBgHover: _[2],
    colorErrorBorder: _[3],
    colorErrorBorderHover: _[4],
    colorErrorHover: _[5],
    colorError: _[6],
    colorErrorActive: _[7],
    colorErrorTextHover: _[8],
    colorErrorText: _[9],
    colorErrorTextActive: _[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: b[1],
    colorInfoBgHover: b[2],
    colorInfoBorder: b[3],
    colorInfoBorderHover: b[4],
    colorInfoHover: b[4],
    colorInfo: b[6],
    colorInfoActive: b[7],
    colorInfoTextHover: b[8],
    colorInfoText: b[9],
    colorInfoTextActive: b[10],
    colorLinkHover: c[4],
    colorLink: c[6],
    colorLinkActive: c[7],
    colorBgMask: new pt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff",
  });
}
const KE = (e) => {
    let t = e,
      n = e,
      r = e,
      o = e;
    return (
      e < 6 && e >= 5
        ? (t = e + 1)
        : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (n = 4)
        : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
        ? (n = 6)
        : e < 16 && e >= 14
        ? (n = 7)
        : e >= 16 && (n = 8),
      e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
      e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
      {
        borderRadius: e,
        borderRadiusXS: r,
        borderRadiusSM: n,
        borderRadiusLG: t,
        borderRadiusOuter: o,
      }
    );
  },
  qE = KE;
function YE(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e;
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: o + 1,
    },
    qE(r)
  );
}
const an = (e, t) => new pt(e).setAlpha(t).toRgbString(),
  Qo = (e, t) => new pt(e).darken(t).toHexString(),
  ZE = (e) => {
    const t = Ar(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  JE = (e, t) => {
    const n = e || "#fff",
      r = t || "#000";
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: an(r, 0.88),
      colorTextSecondary: an(r, 0.65),
      colorTextTertiary: an(r, 0.45),
      colorTextQuaternary: an(r, 0.25),
      colorFill: an(r, 0.15),
      colorFillSecondary: an(r, 0.06),
      colorFillTertiary: an(r, 0.04),
      colorFillQuaternary: an(r, 0.02),
      colorBgLayout: Qo(n, 4),
      colorBgContainer: Qo(n, 0),
      colorBgElevated: Qo(n, 0),
      colorBgSpotlight: an(r, 0.85),
      colorBgBlur: "transparent",
      colorBorder: Qo(n, 15),
      colorBorderSecondary: Qo(n, 6),
    };
  };
function ex(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1,
      i = e * Math.pow(2.71828, o / 5),
      a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return (
    (t[1] = e),
    t.map((n) => {
      const r = n + 8;
      return { size: n, lineHeight: r / n };
    })
  );
}
const tx = (e) => {
    const t = ex(e),
      n = t.map((f) => f.size),
      r = t.map((f) => f.lineHeight),
      o = n[1],
      i = n[0],
      a = n[2],
      l = r[1],
      u = r[0],
      s = r[2];
    return {
      fontSizeSM: i,
      fontSize: o,
      fontSizeLG: a,
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: l,
      lineHeightLG: s,
      lineHeightSM: u,
      fontHeight: Math.round(l * o),
      fontHeightLG: Math.round(s * a),
      fontHeightSM: Math.round(u * i),
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2],
    };
  },
  nx = tx;
function rx(e) {
  const t = Object.keys($1)
    .map((n) => {
      const r = Ar(e[n]);
      return new Array(10)
        .fill(1)
        .reduce(
          (o, i, a) => (
            (o[`${n}-${a + 1}`] = r[a]), (o[`${n}${a + 1}`] = r[a]), o
          ),
          {}
        );
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            QE(e, {
              generateColorPalettes: ZE,
              generateNeutralColorPalettes: JE,
            })
          ),
          nx(e.fontSize)
        ),
        GE(e)
      ),
      WE(e)
    ),
    YE(e)
  );
}
const P1 = jc(rx),
  R1 = { token: Ni, override: { override: Ni }, hashed: !0 },
  A1 = Y.createContext(R1),
  M1 = "anticon",
  ox = (e, t) => t || (e ? `ant-${e}` : "ant"),
  ar = y.createContext({ getPrefixCls: ox, iconPrefixCls: M1 }),
  ix = `-ant-${Date.now()}-${Math.random()}`;
function ax(e, t) {
  const n = {},
    r = (a, l) => {
      let u = a.clone();
      return (u = (l == null ? void 0 : l(u)) || u), u.toRgbString();
    },
    o = (a, l) => {
      const u = new pt(a),
        s = Ar(u.toRgbString());
      (n[`${l}-color`] = r(u)),
        (n[`${l}-color-disabled`] = s[1]),
        (n[`${l}-color-hover`] = s[4]),
        (n[`${l}-color-active`] = s[6]),
        (n[`${l}-color-outline`] = u.clone().setAlpha(0.2).toRgbString()),
        (n[`${l}-color-deprecated-bg`] = s[0]),
        (n[`${l}-color-deprecated-border`] = s[2]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new pt(t.primaryColor),
      l = Ar(a.toRgbString());
    l.forEach((s, f) => {
      n[`primary-${f + 1}`] = s;
    }),
      (n["primary-color-deprecated-l-35"] = r(a, (s) => s.lighten(35))),
      (n["primary-color-deprecated-l-20"] = r(a, (s) => s.lighten(20))),
      (n["primary-color-deprecated-t-20"] = r(a, (s) => s.tint(20))),
      (n["primary-color-deprecated-t-50"] = r(a, (s) => s.tint(50))),
      (n["primary-color-deprecated-f-12"] = r(a, (s) =>
        s.setAlpha(s.getAlpha() * 0.12)
      ));
    const u = new pt(l[0]);
    (n["primary-color-active-deprecated-f-30"] = r(u, (s) =>
      s.setAlpha(s.getAlpha() * 0.3)
    )),
      (n["primary-color-active-deprecated-d-02"] = r(u, (s) => s.darken(2)));
  }
  return (
    t.successColor && o(t.successColor, "success"),
    t.warningColor && o(t.warningColor, "warning"),
    t.errorColor && o(t.errorColor, "error"),
    t.infoColor && o(t.infoColor, "info"),
    `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  );
}
function lx(e, t) {
  const n = ax(e, t);
  tn() && Rr(n, `${ix}-dynamic-theme`);
}
const Xc = y.createContext(!1),
  ux = (e) => {
    let { children: t, disabled: n } = e;
    const r = y.useContext(Xc);
    return y.createElement(Xc.Provider, { value: n ?? r }, t);
  },
  I1 = Xc,
  Qc = y.createContext(void 0),
  sx = (e) => {
    let { children: t, size: n } = e;
    const r = y.useContext(Qc);
    return y.createElement(Qc.Provider, { value: n || r }, t);
  },
  yu = Qc;
function cx() {
  const e = y.useContext(I1),
    t = y.useContext(yu);
  return { componentDisabled: e, componentSize: t };
}
const fx = "5.12.4";
function Ss(e) {
  return e >= 0 && e <= 255;
}
function Ca(e, t) {
  const { r: n, g: r, b: o, a: i } = new pt(e).toRgb();
  if (i < 1) return e;
  const { r: a, g: l, b: u } = new pt(t).toRgb();
  for (let s = 0.01; s <= 1; s += 0.01) {
    const f = Math.round((n - a * (1 - s)) / s),
      p = Math.round((r - l * (1 - s)) / s),
      d = Math.round((o - u * (1 - s)) / s);
    if (Ss(f) && Ss(p) && Ss(d))
      return new pt({
        r: f,
        g: p,
        b: d,
        a: Math.round(s * 100) / 100,
      }).toRgbString();
  }
  return new pt({ r: n, g: r, b: o, a: 1 }).toRgbString();
}
var dx = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function L1(e) {
  const { override: t } = e,
    n = dx(e, ["override"]),
    r = Object.assign({}, t);
  Object.keys(Ni).forEach((d) => {
    delete r[d];
  });
  const o = Object.assign(Object.assign({}, n), r),
    i = 480,
    a = 576,
    l = 768,
    u = 992,
    s = 1200,
    f = 1600;
  if (o.motion === !1) {
    const d = "0s";
    (o.motionDurationFast = d),
      (o.motionDurationMid = d),
      (o.motionDurationSlow = d);
  }
  return Object.assign(
    Object.assign(Object.assign({}, o), {
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      colorBorderBg: o.colorBgContainer,
      colorSplit: Ca(o.colorBorderSecondary, o.colorBgContainer),
      colorTextPlaceholder: o.colorTextQuaternary,
      colorTextDisabled: o.colorTextQuaternary,
      colorTextHeading: o.colorText,
      colorTextLabel: o.colorTextSecondary,
      colorTextDescription: o.colorTextTertiary,
      colorTextLightSolid: o.colorWhite,
      colorHighlight: o.colorError,
      colorBgTextHover: o.colorFillSecondary,
      colorBgTextActive: o.colorFill,
      colorIcon: o.colorTextTertiary,
      colorIconHover: o.colorText,
      colorErrorOutline: Ca(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: Ca(o.colorWarningBg, o.colorBgContainer),
      fontSizeIcon: o.fontSizeSM,
      lineWidthFocus: o.lineWidth * 4,
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: Ca(o.colorPrimaryBg, o.colorBgContainer),
      lineType: o.lineType,
      borderRadius: o.borderRadius,
      borderRadiusXS: o.borderRadiusXS,
      borderRadiusSM: o.borderRadiusSM,
      borderRadiusLG: o.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: o.sizeXXS,
      paddingXS: o.sizeXS,
      paddingSM: o.sizeSM,
      padding: o.size,
      paddingMD: o.sizeMD,
      paddingLG: o.sizeLG,
      paddingXL: o.sizeXL,
      paddingContentHorizontalLG: o.sizeLG,
      paddingContentVerticalLG: o.sizeMS,
      paddingContentHorizontal: o.sizeMS,
      paddingContentVertical: o.sizeSM,
      paddingContentHorizontalSM: o.size,
      paddingContentVerticalSM: o.sizeXS,
      marginXXS: o.sizeXXS,
      marginXS: o.sizeXS,
      marginSM: o.sizeSM,
      margin: o.size,
      marginMD: o.sizeMD,
      marginLG: o.sizeLG,
      marginXL: o.sizeXL,
      marginXXL: o.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: i,
      screenXSMin: i,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: l - 1,
      screenMD: l,
      screenMDMin: l,
      screenMDMax: u - 1,
      screenLG: u,
      screenLGMin: u,
      screenLGMax: s - 1,
      screenXL: s,
      screenXLMin: s,
      screenXLMax: f - 1,
      screenXXL: f,
      screenXXLMin: f,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new pt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new pt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new pt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
    }),
    r
  );
}
var B0 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const j1 = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
  },
  N1 = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0,
  },
  px = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0,
  },
  D1 = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: o } = t,
      i = B0(t, ["override"]);
    let a = Object.assign(Object.assign({}, r), { override: o });
    return (
      (a = L1(a)),
      i &&
        Object.entries(i).forEach((l) => {
          let [u, s] = l;
          const { theme: f } = s,
            p = B0(s, ["theme"]);
          let d = p;
          f &&
            (d = D1(
              Object.assign(Object.assign({}, a), p),
              { override: p },
              f
            )),
            (a[u] = d);
        }),
      a
    );
  };
function Mr() {
  const {
      token: e,
      hashed: t,
      theme: n,
      override: r,
      cssVar: o,
    } = Y.useContext(A1),
    i = `${fx}-${t || ""}`,
    a = n || P1,
    [l, u, s] = Mw(a, [Ni, e], {
      salt: i,
      override: r,
      getComputedToken: D1,
      formatToken: L1,
      cssVar: o && {
        prefix: o.prefix,
        key: o.key,
        unitless: j1,
        ignore: N1,
        preserve: px,
      },
    });
  return [a, s, t ? u : "", l, o];
}
function hx(e) {
  var t = y.useRef();
  t.current = e;
  var n = y.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function Za(e) {
  var t = y.useRef(!1),
    n = y.useState(e),
    r = te(n, 2),
    o = r[0],
    i = r[1];
  y.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function a(l, u) {
    (u && t.current) || i(l);
  }
  return [o, a];
}
const vx = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": { lineHeight: 1 },
    svg: { display: "inline-block" },
  }),
  gx = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      "&:hover": { color: e.colorLinkHover },
      "&:active": { color: e.colorLinkActive },
      "&:active,\n  &:hover": {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      "&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
      "&[disabled]": { color: e.colorTextDisabled, cursor: "not-allowed" },
    },
  }),
  mx = (e, t) => {
    const { fontFamily: n, fontSize: r } = e,
      o = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [o]: {
        fontFamily: n,
        fontSize: r,
        boxSizing: "border-box",
        "&::before, &::after": { boxSizing: "border-box" },
        [o]: {
          boxSizing: "border-box",
          "&::before, &::after": { boxSizing: "border-box" },
        },
      },
    };
  },
  yx = (e) => ({
    outline: `${Jn(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s",
  }),
  Sx = (e) => ({ "&:focus-visible": Object.assign({}, yx(e)) });
let _x = or(function e() {
  rr(this, e);
});
const z1 = _x;
let wx = (function (e) {
  fu(n, e);
  var t = du(n);
  function n(r) {
    var o;
    return (
      rr(this, n),
      (o = t.call(this)),
      (o.result = 0),
      r instanceof n
        ? (o.result = r.result)
        : typeof r == "number" && (o.result = r),
      o
    );
  }
  return (
    or(n, [
      {
        key: "add",
        value: function (o) {
          return (
            o instanceof n
              ? (this.result += o.result)
              : typeof o == "number" && (this.result += o),
            this
          );
        },
      },
      {
        key: "sub",
        value: function (o) {
          return (
            o instanceof n
              ? (this.result -= o.result)
              : typeof o == "number" && (this.result -= o),
            this
          );
        },
      },
      {
        key: "mul",
        value: function (o) {
          return (
            o instanceof n
              ? (this.result *= o.result)
              : typeof o == "number" && (this.result *= o),
            this
          );
        },
      },
      {
        key: "div",
        value: function (o) {
          return (
            o instanceof n
              ? (this.result /= o.result)
              : typeof o == "number" && (this.result /= o),
            this
          );
        },
      },
      {
        key: "equal",
        value: function () {
          return this.result;
        },
      },
    ]),
    n
  );
})(z1);
const B1 = "CALC_UNIT";
function _s(e) {
  return typeof e == "number" ? `${e}${B1}` : e;
}
let Ex = (function (e) {
  fu(n, e);
  var t = du(n);
  function n(r) {
    var o;
    return (
      rr(this, n),
      (o = t.call(this)),
      (o.result = ""),
      r instanceof n
        ? (o.result = `(${r.result})`)
        : typeof r == "number"
        ? (o.result = _s(r))
        : typeof r == "string" && (o.result = r),
      o
    );
  }
  return (
    or(n, [
      {
        key: "add",
        value: function (o) {
          return (
            o instanceof n
              ? (this.result = `${this.result} + ${o.getResult()}`)
              : (typeof o == "number" || typeof o == "string") &&
                (this.result = `${this.result} + ${_s(o)}`),
            (this.lowPriority = !0),
            this
          );
        },
      },
      {
        key: "sub",
        value: function (o) {
          return (
            o instanceof n
              ? (this.result = `${this.result} - ${o.getResult()}`)
              : (typeof o == "number" || typeof o == "string") &&
                (this.result = `${this.result} - ${_s(o)}`),
            (this.lowPriority = !0),
            this
          );
        },
      },
      {
        key: "mul",
        value: function (o) {
          return (
            this.lowPriority && (this.result = `(${this.result})`),
            o instanceof n
              ? (this.result = `${this.result} * ${o.getResult(!0)}`)
              : (typeof o == "number" || typeof o == "string") &&
                (this.result = `${this.result} * ${o}`),
            (this.lowPriority = !1),
            this
          );
        },
      },
      {
        key: "div",
        value: function (o) {
          return (
            this.lowPriority && (this.result = `(${this.result})`),
            o instanceof n
              ? (this.result = `${this.result} / ${o.getResult(!0)}`)
              : (typeof o == "number" || typeof o == "string") &&
                (this.result = `${this.result} / ${o}`),
            (this.lowPriority = !1),
            this
          );
        },
      },
      {
        key: "getResult",
        value: function (o) {
          return this.lowPriority || o ? `(${this.result})` : this.result;
        },
      },
      {
        key: "equal",
        value: function (o) {
          const { unit: i = !0 } = o || {},
            a = new RegExp(`${B1}`, "g");
          return (
            (this.result = this.result.replace(a, i ? "px" : "")),
            typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result
          );
        },
      },
    ]),
    n
  );
})(z1);
const xx = (e) => {
    const t = e === "css" ? Ex : wx;
    return (n) => new t(n);
  },
  bx = xx;
function Cx(e) {
  return e === "js"
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return `max(${n.map((o) => Jn(o)).join(",")})`;
        },
        min: function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return `min(${n.map((o) => Jn(o)).join(",")})`;
        },
      };
}
const F1 = typeof CSSINJS_STATISTIC < "u";
let Kc = !0;
function Ao() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!F1) return Object.assign.apply(Object, [{}].concat(t));
  Kc = !1;
  const r = {};
  return (
    t.forEach((o) => {
      Object.keys(o).forEach((a) => {
        Object.defineProperty(r, a, {
          configurable: !0,
          enumerable: !0,
          get: () => o[a],
        });
      });
    }),
    (Kc = !0),
    r
  );
}
const F0 = {};
function Ox() {}
function kx(e) {
  let t,
    n = e,
    r = Ox;
  return (
    F1 &&
      typeof Proxy < "u" &&
      ((t = new Set()),
      (n = new Proxy(e, {
        get(o, i) {
          return Kc && t.add(i), o[i];
        },
      })),
      (r = (o, i) => {
        var a;
        F0[o] = {
          global: Array.from(t),
          component: Object.assign(
            Object.assign(
              {},
              (a = F0[o]) === null || a === void 0 ? void 0 : a.component
            ),
            i
          ),
        };
      })),
    { token: n, keys: t, flush: r }
  );
}
const Tx = (e, t) => {
    const [n, r] = Mr();
    return Hc(
      {
        theme: n,
        token: r,
        hashId: "",
        path: ["ant-design-icons", e],
        nonce: () => (t == null ? void 0 : t.nonce),
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, vx()), {
            [`.${e} .${e}-icon`]: { display: "block" },
          }),
        },
      ]
    );
  },
  H1 = Tx,
  V1 = (e, t, n) => {
    var r;
    return typeof n == "function"
      ? n(Ao(t, (r = t[e]) !== null && r !== void 0 ? r : {}))
      : n ?? {};
  },
  U1 = (e, t, n, r) => {
    const o = Object.assign({}, t[e]);
    if (r != null && r.deprecatedTokens) {
      const { deprecatedTokens: a } = r;
      a.forEach((l) => {
        let [u, s] = l;
        var f;
        ((o != null && o[u]) || (o != null && o[s])) &&
          (((f = o[s]) !== null && f !== void 0) ||
            (o[s] = o == null ? void 0 : o[u]));
      });
    }
    let i = Object.assign(Object.assign({}, n), o);
    return (
      r != null && r.format && (i = r.format(i)),
      Object.keys(i).forEach((a) => {
        i[a] === t[a] && delete i[a];
      }),
      i
    );
  },
  $x = (e, t) =>
    `${[
      t,
      e
        .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
        .replace(/([a-z])([A-Z])/g, "$1-$2"),
    ]
      .filter(Boolean)
      .join("-")}`;
function gd(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e],
    [i] = o,
    a = o.join("-");
  return (l) => {
    const [u, s, f, p, d] = Mr(),
      { getPrefixCls: m, iconPrefixCls: _, csp: b } = y.useContext(ar),
      A = m(),
      v = d ? "css" : "js",
      c = bx(v),
      { max: h, min: w } = Cx(v),
      C = {
        theme: u,
        token: p,
        hashId: f,
        nonce: () => (b == null ? void 0 : b.nonce),
        clientOnly: r.clientOnly,
        order: r.order || -999,
      };
    return (
      Hc(
        Object.assign(Object.assign({}, C), {
          clientOnly: !1,
          path: ["Shared", A],
        }),
        () => [{ "&": gx(p) }]
      ),
      H1(_, b),
      [
        Hc(Object.assign(Object.assign({}, C), { path: [a, l, _] }), () => {
          if (r.injectStyle === !1) return [];
          const { token: x, flush: M } = kx(p),
            B = V1(i, s, n),
            N = `.${l}`,
            Q = U1(i, s, B, {
              deprecatedTokens: r.deprecatedTokens,
              format: r.format,
            });
          d &&
            Object.keys(B).forEach((W) => {
              B[W] = `var(${s1(W, $x(i, d.prefix))})`;
            });
          const I = Ao(
              x,
              {
                componentCls: N,
                prefixCls: l,
                iconCls: `.${_}`,
                antCls: `.${A}`,
                calc: c,
                max: h,
                min: w,
              },
              d ? B : Q
            ),
            j = t(I, {
              hashId: f,
              prefixCls: l,
              rootPrefixCls: A,
              iconPrefixCls: _,
            });
          return M(i, Q), [r.resetStyle === !1 ? null : mx(I, l), j];
        }),
        f,
      ]
    );
  };
}
const Px = (e, t, n, r) => {
    const o = gd(e, t, n, Object.assign({ resetStyle: !1, order: -998 }, r));
    return (a) => {
      let { prefixCls: l } = a;
      return o(l), null;
    };
  },
  Rx = (e, t, n) => {
    function r(s) {
      return `${e}${s.slice(0, 1).toUpperCase()}${s.slice(1)}`;
    }
    const { unitless: o = {}, injectStyle: i = !0 } = n ?? {},
      a = { [r("zIndexPopup")]: !0 };
    Object.keys(o).forEach((s) => {
      a[r(s)] = o[s];
    });
    const l = (s) => {
      let { rootCls: f, cssVar: p } = s;
      const [, d] = Mr();
      return (
        uE(
          {
            path: [e],
            prefix: p.prefix,
            key: p == null ? void 0 : p.key,
            unitless: Object.assign(Object.assign({}, j1), a),
            ignore: N1,
            token: d,
            scope: f,
          },
          () => {
            const m = V1(e, d, t),
              _ = U1(e, d, m, {
                format: n == null ? void 0 : n.format,
                deprecatedTokens: n == null ? void 0 : n.deprecatedTokens,
              });
            return (
              Object.keys(m).forEach((b) => {
                (_[r(b)] = _[b]), delete _[b];
              }),
              _
            );
          }
        ),
        null
      );
    };
    return (s) => {
      const [, , , , f] = Mr();
      return [
        (p) =>
          i && f
            ? Y.createElement(
                Y.Fragment,
                null,
                Y.createElement(l, { rootCls: s, cssVar: f, component: e }),
                p
              )
            : p,
        f == null ? void 0 : f.key,
      ];
    };
  },
  Ax = (e, t, n, r) => {
    const o = gd(e, t, n, r),
      i = Rx(Array.isArray(e) ? e[0] : e, n, r);
    return function (a) {
      let l =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a;
      const [, u] = o(a),
        [s, f] = i(l);
      return [s, u, f];
    };
  },
  Mx = Object.assign({}, zl),
  { useId: H0 } = Mx,
  Ix = () => "",
  Lx = typeof H0 > "u" ? Ix : H0,
  jx = Lx;
function Nx(e, t) {
  const n = e || {},
    r = n.inherit === !1 || !t ? R1 : t,
    o = jx();
  return Xg(
    () => {
      var i, a;
      if (!e) return t;
      const l = Object.assign({}, r.components);
      Object.keys(e.components || {}).forEach((f) => {
        l[f] = Object.assign(Object.assign({}, l[f]), e.components[f]);
      });
      const u = `css-var-${o.replace(/:/g, "")}`,
        s =
          ((i = n.cssVar) !== null && i !== void 0 ? i : r.cssVar) &&
          Object.assign(
            Object.assign(
              Object.assign(
                { prefix: "ant" },
                typeof r.cssVar == "object" ? r.cssVar : {}
              ),
              typeof n.cssVar == "object" ? n.cssVar : {}
            ),
            {
              key:
                (typeof n.cssVar == "object" &&
                  ((a = n.cssVar) === null || a === void 0 ? void 0 : a.key)) ||
                u,
            }
          );
      return Object.assign(Object.assign(Object.assign({}, r), n), {
        token: Object.assign(Object.assign({}, r.token), n.token),
        components: l,
        cssVar: s,
      });
    },
    [n, r],
    (i, a) =>
      i.some((l, u) => {
        const s = a[u];
        return !iw(l, s, !0);
      })
  );
}
var Dx = ["children"],
  W1 = y.createContext({});
function zx(e) {
  var t = e.children,
    n = Ii(e, Dx);
  return y.createElement(W1.Provider, { value: n }, t);
}
var Bx = (function (e) {
    fu(n, e);
    var t = du(n);
    function n() {
      return rr(this, n), t.apply(this, arguments);
    }
    return (
      or(n, [
        {
          key: "render",
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(y.Component),
  pr = "none",
  Oa = "appear",
  ka = "enter",
  Ta = "leave",
  V0 = "none",
  jt = "prepare",
  lo = "start",
  uo = "active",
  md = "end",
  G1 = "prepared";
function U0(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit".concat(e)] = "webkit".concat(t)),
    (n["Moz".concat(e)] = "moz".concat(t)),
    (n["ms".concat(e)] = "MS".concat(t)),
    (n["O".concat(e)] = "o".concat(t.toLowerCase())),
    n
  );
}
function Fx(e, t) {
  var n = {
    animationend: U0("Animation", "AnimationEnd"),
    transitionend: U0("Transition", "TransitionEnd"),
  };
  return (
    e &&
      ("AnimationEvent" in t || delete n.animationend.animation,
      "TransitionEvent" in t || delete n.transitionend.transition),
    n
  );
}
var Hx = Fx(tn(), typeof window < "u" ? window : {}),
  X1 = {};
if (tn()) {
  var Vx = document.createElement("div");
  X1 = Vx.style;
}
var $a = {};
function Q1(e) {
  if ($a[e]) return $a[e];
  var t = Hx[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in X1)
        return ($a[e] = t[i]), $a[e];
    }
  return "";
}
var K1 = Q1("animationend"),
  q1 = Q1("transitionend"),
  Y1 = !!(K1 && q1),
  W0 = K1 || "animationend",
  G0 = q1 || "transitionend";
function X0(e, t) {
  if (!e) return null;
  if (ye(e) === "object") {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Ux = function (e) {
  var t = y.useRef(),
    n = y.useRef(e);
  n.current = e;
  var r = y.useCallback(function (a) {
    n.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(G0, r), a.removeEventListener(W0, r));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current),
      a &&
        a !== t.current &&
        (a.addEventListener(G0, r), a.addEventListener(W0, r), (t.current = a));
  }
  return (
    y.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []),
    [i, o]
  );
};
var Z1 = tn() ? y.useLayoutEffect : y.useEffect;
const Wx = function () {
  var e = y.useRef(null);
  function t() {
    Pr.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Pr(function () {
      o <= 1
        ? r({
            isCanceled: function () {
              return i !== e.current;
            },
          })
        : n(r, o - 1);
    });
    e.current = i;
  }
  return (
    y.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [n, t]
  );
};
var Gx = [jt, lo, uo, md],
  Xx = [jt, G1],
  J1 = !1,
  Qx = !0;
function em(e) {
  return e === uo || e === md;
}
const Kx = function (e, t, n) {
  var r = Za(V0),
    o = te(r, 2),
    i = o[0],
    a = o[1],
    l = Wx(),
    u = te(l, 2),
    s = u[0],
    f = u[1];
  function p() {
    a(jt, !0);
  }
  var d = t ? Xx : Gx;
  return (
    Z1(
      function () {
        if (i !== V0 && i !== md) {
          var m = d.indexOf(i),
            _ = d[m + 1],
            b = n(i);
          b === J1
            ? a(_, !0)
            : _ &&
              s(function (A) {
                function v() {
                  A.isCanceled() || a(_, !0);
                }
                b === !0 ? v() : Promise.resolve(b).then(v);
              });
        }
      },
      [e, i]
    ),
    y.useEffect(function () {
      return function () {
        f();
      };
    }, []),
    [p, i]
  );
};
function qx(e, t, n, r) {
  var o = r.motionEnter,
    i = o === void 0 ? !0 : o,
    a = r.motionAppear,
    l = a === void 0 ? !0 : a,
    u = r.motionLeave,
    s = u === void 0 ? !0 : u,
    f = r.motionDeadline,
    p = r.motionLeaveImmediately,
    d = r.onAppearPrepare,
    m = r.onEnterPrepare,
    _ = r.onLeavePrepare,
    b = r.onAppearStart,
    A = r.onEnterStart,
    v = r.onLeaveStart,
    c = r.onAppearActive,
    h = r.onEnterActive,
    w = r.onLeaveActive,
    C = r.onAppearEnd,
    T = r.onEnterEnd,
    x = r.onLeaveEnd,
    M = r.onVisibleChanged,
    B = Za(),
    N = te(B, 2),
    Q = N[0],
    I = N[1],
    j = Za(pr),
    W = te(j, 2),
    V = W[0],
    P = W[1],
    k = Za(null),
    S = te(k, 2),
    $ = S[0],
    R = S[1],
    D = y.useRef(!1),
    X = y.useRef(null);
  function J() {
    return n();
  }
  var ne = y.useRef(!1);
  function _e() {
    P(pr, !0), R(null, !0);
  }
  function ue(be) {
    var g = J();
    if (!(be && !be.deadline && be.target !== g)) {
      var E = ne.current,
        O;
      V === Oa && E
        ? (O = C == null ? void 0 : C(g, be))
        : V === ka && E
        ? (O = T == null ? void 0 : T(g, be))
        : V === Ta && E && (O = x == null ? void 0 : x(g, be)),
        V !== pr && E && O !== !1 && _e();
    }
  }
  var xe = Ux(ue),
    Wt = te(xe, 1),
    Cn = Wt[0],
    Pt = function (g) {
      var E, O, H;
      switch (g) {
        case Oa:
          return (E = {}), re(E, jt, d), re(E, lo, b), re(E, uo, c), E;
        case ka:
          return (O = {}), re(O, jt, m), re(O, lo, A), re(O, uo, h), O;
        case Ta:
          return (H = {}), re(H, jt, _), re(H, lo, v), re(H, uo, w), H;
        default:
          return {};
      }
    },
    at = y.useMemo(
      function () {
        return Pt(V);
      },
      [V]
    ),
    sr = Kx(V, !e, function (be) {
      if (be === jt) {
        var g = at[jt];
        return g ? g(J()) : J1;
      }
      if (Ge in at) {
        var E;
        R(
          ((E = at[Ge]) === null || E === void 0
            ? void 0
            : E.call(at, J(), null)) || null
        );
      }
      return (
        Ge === uo &&
          (Cn(J()),
          f > 0 &&
            (clearTimeout(X.current),
            (X.current = setTimeout(function () {
              ue({ deadline: !0 });
            }, f)))),
        Ge === G1 && _e(),
        Qx
      );
    }),
    Rt = te(sr, 2),
    On = Rt[0],
    Ge = Rt[1],
    kn = em(Ge);
  (ne.current = kn),
    Z1(
      function () {
        I(t);
        var be = D.current;
        D.current = !0;
        var g;
        !be && t && l && (g = Oa),
          be && t && i && (g = ka),
          ((be && !t && s) || (!be && p && !t && s)) && (g = Ta);
        var E = Pt(g);
        g && (e || E[jt]) ? (P(g), On()) : P(pr);
      },
      [t]
    ),
    y.useEffect(
      function () {
        ((V === Oa && !l) || (V === ka && !i) || (V === Ta && !s)) && P(pr);
      },
      [l, i, s]
    ),
    y.useEffect(function () {
      return function () {
        (D.current = !1), clearTimeout(X.current);
      };
    }, []);
  var Tn = y.useRef(!1);
  y.useEffect(
    function () {
      Q && (Tn.current = !0),
        Q !== void 0 &&
          V === pr &&
          ((Tn.current || Q) && (M == null || M(Q)), (Tn.current = !0));
    },
    [Q, V]
  );
  var nn = $;
  return (
    at[jt] && Ge === lo && (nn = q({ transition: "none" }, nn)),
    [V, Ge, nn, Q ?? t]
  );
}
function Yx(e) {
  var t = e;
  ye(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = y.forwardRef(function (o, i) {
    var a = o.visible,
      l = a === void 0 ? !0 : a,
      u = o.removeOnLeave,
      s = u === void 0 ? !0 : u,
      f = o.forceRender,
      p = o.children,
      d = o.motionName,
      m = o.leavedClassName,
      _ = o.eventProps,
      b = y.useContext(W1),
      A = b.motion,
      v = n(o, A),
      c = y.useRef(),
      h = y.useRef();
    function w() {
      try {
        return c.current instanceof HTMLElement ? c.current : X_(h.current);
      } catch {
        return null;
      }
    }
    var C = qx(v, l, w, o),
      T = te(C, 4),
      x = T[0],
      M = T[1],
      B = T[2],
      N = T[3],
      Q = y.useRef(N);
    N && (Q.current = !0);
    var I = y.useCallback(
        function (R) {
          (c.current = R), Qg(i, R);
        },
        [i]
      ),
      j,
      W = q(q({}, _), {}, { visible: l });
    if (!p) j = null;
    else if (x === pr)
      N
        ? (j = p(q({}, W), I))
        : !s && Q.current && m
        ? (j = p(q(q({}, W), {}, { className: m }), I))
        : f || (!s && !m)
        ? (j = p(q(q({}, W), {}, { style: { display: "none" } }), I))
        : (j = null);
    else {
      var V, P;
      M === jt
        ? (P = "prepare")
        : em(M)
        ? (P = "active")
        : M === lo && (P = "start");
      var k = X0(d, "".concat(x, "-").concat(P));
      j = p(
        q(
          q({}, W),
          {},
          {
            className: Ft(
              X0(d, x),
              ((V = {}), re(V, k, k && P), re(V, d, typeof d == "string"), V)
            ),
            style: B,
          }
        ),
        I
      );
    }
    if (y.isValidElement(j) && qg(j)) {
      var S = j,
        $ = S.ref;
      $ || (j = y.cloneElement(j, { ref: I }));
    }
    return y.createElement(Bx, { ref: h }, j);
  });
  return (r.displayName = "CSSMotion"), r;
}
const yd = Yx(Y1);
var qc = "add",
  Yc = "keep",
  Zc = "remove",
  ws = "removed";
function Zx(e) {
  var t;
  return (
    e && ye(e) === "object" && "key" in e ? (t = e) : (t = { key: e }),
    q(q({}, t), {}, { key: String(t.key) })
  );
}
function Jc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Zx);
}
function Jx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    o = t.length,
    i = Jc(e),
    a = Jc(t);
  i.forEach(function (s) {
    for (var f = !1, p = r; p < o; p += 1) {
      var d = a[p];
      if (d.key === s.key) {
        r < p &&
          ((n = n.concat(
            a.slice(r, p).map(function (m) {
              return q(q({}, m), {}, { status: qc });
            })
          )),
          (r = p)),
          n.push(q(q({}, d), {}, { status: Yc })),
          (r += 1),
          (f = !0);
        break;
      }
    }
    f || n.push(q(q({}, s), {}, { status: Zc }));
  }),
    r < o &&
      (n = n.concat(
        a.slice(r).map(function (s) {
          return q(q({}, s), {}, { status: qc });
        })
      ));
  var l = {};
  n.forEach(function (s) {
    var f = s.key;
    l[f] = (l[f] || 0) + 1;
  });
  var u = Object.keys(l).filter(function (s) {
    return l[s] > 1;
  });
  return (
    u.forEach(function (s) {
      (n = n.filter(function (f) {
        var p = f.key,
          d = f.status;
        return p !== s || d !== Zc;
      })),
        n.forEach(function (f) {
          f.key === s && (f.status = Yc);
        });
    }),
    n
  );
}
var eb = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  tb = ["status"],
  nb = [
    "eventProps",
    "visible",
    "children",
    "motionName",
    "motionAppear",
    "motionEnter",
    "motionLeave",
    "motionLeaveImmediately",
    "motionDeadline",
    "removeOnLeave",
    "leavedClassName",
    "onAppearPrepare",
    "onAppearStart",
    "onAppearActive",
    "onAppearEnd",
    "onEnterStart",
    "onEnterActive",
    "onEnterEnd",
    "onLeaveStart",
    "onLeaveActive",
    "onLeaveEnd",
  ];
function rb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yd,
    n = (function (r) {
      fu(i, r);
      var o = du(i);
      function i() {
        var a;
        rr(this, i);
        for (var l = arguments.length, u = new Array(l), s = 0; s < l; s++)
          u[s] = arguments[s];
        return (
          (a = o.call.apply(o, [this].concat(u))),
          re(Mc(a), "state", { keyEntities: [] }),
          re(Mc(a), "removeKey", function (f) {
            var p = a.state.keyEntities,
              d = p.map(function (m) {
                return m.key !== f ? m : q(q({}, m), {}, { status: ws });
              });
            return (
              a.setState({ keyEntities: d }),
              d.filter(function (m) {
                var _ = m.status;
                return _ !== ws;
              }).length
            );
          }),
          a
        );
      }
      return (
        or(
          i,
          [
            {
              key: "render",
              value: function () {
                var l = this,
                  u = this.state.keyEntities,
                  s = this.props,
                  f = s.component,
                  p = s.children,
                  d = s.onVisibleChanged,
                  m = s.onAllRemoved,
                  _ = Ii(s, eb),
                  b = f || y.Fragment,
                  A = {};
                return (
                  nb.forEach(function (v) {
                    (A[v] = _[v]), delete _[v];
                  }),
                  delete _.keys,
                  y.createElement(
                    b,
                    _,
                    u.map(function (v, c) {
                      var h = v.status,
                        w = Ii(v, tb),
                        C = h === qc || h === Yc;
                      return y.createElement(
                        t,
                        bo({}, A, {
                          key: w.key,
                          visible: C,
                          eventProps: w,
                          onVisibleChanged: function (x) {
                            if ((d == null || d(x, { key: w.key }), !x)) {
                              var M = l.removeKey(w.key);
                              M === 0 && m && m();
                            }
                          },
                        }),
                        function (T, x) {
                          return p(q(q({}, T), {}, { index: c }), x);
                        }
                      );
                    })
                  )
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (l, u) {
                var s = l.keys,
                  f = u.keyEntities,
                  p = Jc(s),
                  d = Jx(f, p);
                return {
                  keyEntities: d.filter(function (m) {
                    var _ = f.find(function (b) {
                      var A = b.key;
                      return m.key === A;
                    });
                    return !(_ && _.status === ws && m.status === Zc);
                  }),
                };
              },
            },
          ]
        ),
        i
      );
    })(y.Component);
  return re(n, "defaultProps", { component: "div" }), n;
}
rb(Y1);
function ob(e) {
  const { children: t } = e,
    [, n] = Mr(),
    { motion: r } = n,
    o = y.useRef(!1);
  return (
    (o.current = o.current || r === !1),
    o.current ? y.createElement(zx, { motion: r }, t) : t
  );
}
const ib = () => null;
var ab = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const lb = [
    "getTargetContainer",
    "getPopupContainer",
    "renderEmpty",
    "pageHeader",
    "input",
    "pagination",
    "form",
    "select",
    "button",
  ],
  ub = "ant";
let tm;
function sb() {
  return tm || ub;
}
function cb(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const fb = (e) => {
    let { prefixCls: t, iconPrefixCls: n, theme: r } = e;
    t !== void 0 && (tm = t), r && cb(r) && lx(sb(), r);
  },
  db = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        form: a,
        locale: l,
        componentSize: u,
        direction: s,
        space: f,
        virtual: p,
        dropdownMatchSelectWidth: d,
        popupMatchSelectWidth: m,
        popupOverflow: _,
        legacyLocale: b,
        parentContext: A,
        iconPrefixCls: v,
        theme: c,
        componentDisabled: h,
        segmented: w,
        statistic: C,
        spin: T,
        calendar: x,
        carousel: M,
        cascader: B,
        collapse: N,
        typography: Q,
        checkbox: I,
        descriptions: j,
        divider: W,
        drawer: V,
        skeleton: P,
        steps: k,
        image: S,
        layout: $,
        list: R,
        mentions: D,
        modal: X,
        progress: J,
        result: ne,
        slider: _e,
        breadcrumb: ue,
        menu: xe,
        pagination: Wt,
        input: Cn,
        empty: Pt,
        badge: at,
        radio: sr,
        rate: Rt,
        switch: On,
        transfer: Ge,
        avatar: kn,
        message: Tn,
        tag: nn,
        table: be,
        card: g,
        tabs: E,
        timeline: O,
        timePicker: H,
        upload: F,
        notification: z,
        tree: K,
        colorPicker: le,
        datePicker: Ce,
        rangePicker: yt,
        flex: $n,
        wave: Mu,
        dropdown: No,
        warning: Do,
      } = e,
      Iu = y.useCallback(
        (Te, Le) => {
          const { prefixCls: Gt } = e;
          if (Le) return Le;
          const Xt = Gt || A.getPrefixCls("");
          return Te ? `${Xt}-${Te}` : Xt;
        },
        [A.getPrefixCls, e.prefixCls]
      ),
      Pn = v || A.iconPrefixCls || M1,
      cr = n || A.csp;
    H1(Pn, cr);
    const Br = Nx(c, A.theme),
      Lu = {
        csp: cr,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        locale: l || b,
        direction: s,
        space: f,
        virtual: p,
        popupMatchSelectWidth: m ?? d,
        popupOverflow: _,
        getPrefixCls: Iu,
        iconPrefixCls: Pn,
        theme: Br,
        segmented: w,
        statistic: C,
        spin: T,
        calendar: x,
        carousel: M,
        cascader: B,
        collapse: N,
        typography: Q,
        checkbox: I,
        descriptions: j,
        divider: W,
        drawer: V,
        skeleton: P,
        steps: k,
        image: S,
        input: Cn,
        layout: $,
        list: R,
        mentions: D,
        modal: X,
        progress: J,
        result: ne,
        slider: _e,
        breadcrumb: ue,
        menu: xe,
        pagination: Wt,
        empty: Pt,
        badge: at,
        radio: sr,
        rate: Rt,
        switch: On,
        transfer: Ge,
        avatar: kn,
        message: Tn,
        tag: nn,
        table: be,
        card: g,
        tabs: E,
        timeline: O,
        timePicker: H,
        upload: F,
        notification: z,
        tree: K,
        colorPicker: le,
        datePicker: Ce,
        rangePicker: yt,
        flex: $n,
        wave: Mu,
        dropdown: No,
        warning: Do,
      },
      ta = Object.assign({}, A);
    Object.keys(Lu).forEach((Te) => {
      Lu[Te] !== void 0 && (ta[Te] = Lu[Te]);
    }),
      lb.forEach((Te) => {
        const Le = e[Te];
        Le && (ta[Te] = Le);
      });
    const Fr = Xg(
        () => ta,
        ta,
        (Te, Le) => {
          const Gt = Object.keys(Te),
            Xt = Object.keys(Le);
          return Gt.length !== Xt.length || Gt.some((na) => Te[na] !== Le[na]);
        }
      ),
      Zm = y.useMemo(() => ({ prefixCls: Pn, csp: cr }), [Pn, cr]);
    let Ie = y.createElement(
      y.Fragment,
      null,
      y.createElement(ib, { dropdownMatchSelectWidth: d }),
      t
    );
    const op = y.useMemo(() => {
      var Te, Le, Gt, Xt;
      return hE(
        ((Te = mu.Form) === null || Te === void 0
          ? void 0
          : Te.defaultValidateMessages) || {},
        ((Gt =
          (Le = Fr.locale) === null || Le === void 0 ? void 0 : Le.Form) ===
          null || Gt === void 0
          ? void 0
          : Gt.defaultValidateMessages) || {},
        ((Xt = Fr.form) === null || Xt === void 0
          ? void 0
          : Xt.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {}
      );
    }, [Fr, a == null ? void 0 : a.validateMessages]);
    Object.keys(op).length > 0 &&
      (Ie = y.createElement(gE.Provider, { value: op }, Ie)),
      l && (Ie = y.createElement(OE, { locale: l, _ANT_MARK__: bE }, Ie)),
      (Pn || cr) && (Ie = y.createElement(vd.Provider, { value: Zm }, Ie)),
      u && (Ie = y.createElement(sx, { size: u }, Ie)),
      (Ie = y.createElement(ob, null, Ie));
    const Jm = y.useMemo(() => {
      const Te = Br || {},
        { algorithm: Le, token: Gt, components: Xt, cssVar: na } = Te,
        ey = ab(Te, ["algorithm", "token", "components", "cssVar"]),
        ip = Le && (!Array.isArray(Le) || Le.length > 0) ? jc(Le) : P1,
        ju = {};
      Object.entries(Xt || {}).forEach((ty) => {
        let [ny, ry] = ty;
        const rn = Object.assign({}, ry);
        "algorithm" in rn &&
          (rn.algorithm === !0
            ? (rn.theme = ip)
            : (Array.isArray(rn.algorithm) ||
                typeof rn.algorithm == "function") &&
              (rn.theme = jc(rn.algorithm)),
          delete rn.algorithm),
          (ju[ny] = rn);
      });
      const ap = Object.assign(Object.assign({}, Ni), Gt);
      return Object.assign(Object.assign({}, ey), {
        theme: ip,
        token: ap,
        components: ju,
        override: Object.assign({ override: ap }, ju),
        cssVar: na,
      });
    }, [Br]);
    return (
      c && (Ie = y.createElement(A1.Provider, { value: Jm }, Ie)),
      Fr.warning &&
        (Ie = y.createElement(vE.Provider, { value: Fr.warning }, Ie)),
      h !== void 0 && (Ie = y.createElement(ux, { disabled: h }, Ie)),
      y.createElement(ar.Provider, { value: Fr }, Ie)
    );
  },
  Gi = (e) => {
    const t = y.useContext(ar),
      n = y.useContext(C1);
    return y.createElement(
      db,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    );
  };
Gi.ConfigContext = ar;
Gi.SizeContext = yu;
Gi.config = fb;
Gi.useConfig = cx;
Object.defineProperty(Gi, "SizeContext", { get: () => yu });
function nm(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function pb(e) {
  return nm(e) instanceof ShadowRoot;
}
function hb(e) {
  return pb(e) ? nm(e) : null;
}
function vb(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function gb(e, t) {
  Wi(e, "[@ant-design/icons] ".concat(t));
}
function Q0(e) {
  return (
    ye(e) === "object" &&
    typeof e.name == "string" &&
    typeof e.theme == "string" &&
    (ye(e.icon) === "object" || typeof e.icon == "function")
  );
}
function K0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        (t.className = r), delete t.class;
        break;
      default:
        delete t[n], (t[vb(n)] = r);
    }
    return t;
  }, {});
}
function ef(e, t, n) {
  return n
    ? Y.createElement(
        e.tag,
        q(q({ key: t }, K0(e.attrs)), n),
        (e.children || []).map(function (r, o) {
          return ef(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
        })
      )
    : Y.createElement(
        e.tag,
        q({ key: t }, K0(e.attrs)),
        (e.children || []).map(function (r, o) {
          return ef(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
        })
      );
}
function rm(e) {
  return Ar(e)[0];
}
function om(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var mb = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  yb = function (t) {
    var n = y.useContext(vd),
      r = n.csp,
      o = n.prefixCls,
      i = mb;
    o && (i = i.replace(/anticon/g, o)),
      y.useEffect(function () {
        var a = t.current,
          l = hb(a);
        Rr(i, "@ant-design-icons", { prepend: !0, csp: r, attachTo: l });
      }, []);
  },
  Sb = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor",
  ],
  vi = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function _b(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (vi.primaryColor = t),
    (vi.secondaryColor = n || rm(t)),
    (vi.calculated = !!n);
}
function wb() {
  return q({}, vi);
}
var Su = function (t) {
  var n = t.icon,
    r = t.className,
    o = t.onClick,
    i = t.style,
    a = t.primaryColor,
    l = t.secondaryColor,
    u = Ii(t, Sb),
    s = y.useRef(),
    f = vi;
  if (
    (a && (f = { primaryColor: a, secondaryColor: l || rm(a) }),
    yb(s),
    gb(Q0(n), "icon should be icon definiton, but got ".concat(n)),
    !Q0(n))
  )
    return null;
  var p = n;
  return (
    p &&
      typeof p.icon == "function" &&
      (p = q(q({}, p), {}, { icon: p.icon(f.primaryColor, f.secondaryColor) })),
    ef(
      p.icon,
      "svg-".concat(p.name),
      q(
        q(
          {
            className: r,
            onClick: o,
            style: i,
            "data-icon": p.name,
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          u
        ),
        {},
        { ref: s }
      )
    )
  );
};
Su.displayName = "IconReact";
Su.getTwoToneColors = wb;
Su.setTwoToneColors = _b;
const Sd = Su;
function im(e) {
  var t = om(e),
    n = te(t, 2),
    r = n[0],
    o = n[1];
  return Sd.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function Eb() {
  var e = Sd.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var xb = [
  "className",
  "icon",
  "spin",
  "rotate",
  "tabIndex",
  "onClick",
  "twoToneColor",
];
im(VE.primary);
var _u = y.forwardRef(function (e, t) {
  var n,
    r = e.className,
    o = e.icon,
    i = e.spin,
    a = e.rotate,
    l = e.tabIndex,
    u = e.onClick,
    s = e.twoToneColor,
    f = Ii(e, xb),
    p = y.useContext(vd),
    d = p.prefixCls,
    m = d === void 0 ? "anticon" : d,
    _ = p.rootClassName,
    b = Ft(
      _,
      m,
      ((n = {}),
      re(n, "".concat(m, "-").concat(o.name), !!o.name),
      re(n, "".concat(m, "-spin"), !!i || o.name === "loading"),
      n),
      r
    ),
    A = l;
  A === void 0 && u && (A = -1);
  var v = a
      ? {
          msTransform: "rotate(".concat(a, "deg)"),
          transform: "rotate(".concat(a, "deg)"),
        }
      : void 0,
    c = om(s),
    h = te(c, 2),
    w = h[0],
    C = h[1];
  return y.createElement(
    "span",
    bo({ role: "img", "aria-label": o.name }, f, {
      ref: t,
      tabIndex: A,
      onClick: u,
      className: b,
    }),
    y.createElement(Sd, {
      icon: o,
      primaryColor: w,
      secondaryColor: C,
      style: v,
    })
  );
});
_u.displayName = "AntdIcon";
_u.getTwoToneColor = Eb;
_u.setTwoToneColor = im;
const bb = _u,
  { isValidElement: am } = zl;
function Cb(e) {
  return e && am(e) && e.type === y.Fragment;
}
function Ob(e, t, n) {
  return am(e)
    ? y.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n)
    : t;
}
function lm(e, t) {
  return Ob(e, e, t);
}
var kb = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
        },
      },
    ],
  },
  name: "loading",
  theme: "outlined",
};
const Tb = kb;
var $b = function (t, n) {
  return y.createElement(bb, bo({}, t, { ref: n, icon: Tb }));
};
const Pb = y.forwardRef($b);
function Di() {
  Di = function () {
    return t;
  };
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (P, k, S) {
        P[k] = S.value;
      },
    i = typeof Symbol == "function" ? Symbol : {},
    a = i.iterator || "@@iterator",
    l = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function s(P, k, S) {
    return (
      Object.defineProperty(P, k, {
        value: S,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      P[k]
    );
  }
  try {
    s({}, "");
  } catch {
    s = function (S, $, R) {
      return (S[$] = R);
    };
  }
  function f(P, k, S, $) {
    var R = k && k.prototype instanceof v ? k : v,
      D = Object.create(R.prototype),
      X = new W($ || []);
    return o(D, "_invoke", { value: N(P, S, X) }), D;
  }
  function p(P, k, S) {
    try {
      return { type: "normal", arg: P.call(k, S) };
    } catch ($) {
      return { type: "throw", arg: $ };
    }
  }
  t.wrap = f;
  var d = "suspendedStart",
    m = "suspendedYield",
    _ = "executing",
    b = "completed",
    A = {};
  function v() {}
  function c() {}
  function h() {}
  var w = {};
  s(w, a, function () {
    return this;
  });
  var C = Object.getPrototypeOf,
    T = C && C(C(V([])));
  T && T !== n && r.call(T, a) && (w = T);
  var x = (h.prototype = v.prototype = Object.create(w));
  function M(P) {
    ["next", "throw", "return"].forEach(function (k) {
      s(P, k, function (S) {
        return this._invoke(k, S);
      });
    });
  }
  function B(P, k) {
    function S(R, D, X, J) {
      var ne = p(P[R], P, D);
      if (ne.type !== "throw") {
        var _e = ne.arg,
          ue = _e.value;
        return ue && ye(ue) == "object" && r.call(ue, "__await")
          ? k.resolve(ue.__await).then(
              function (xe) {
                S("next", xe, X, J);
              },
              function (xe) {
                S("throw", xe, X, J);
              }
            )
          : k.resolve(ue).then(
              function (xe) {
                (_e.value = xe), X(_e);
              },
              function (xe) {
                return S("throw", xe, X, J);
              }
            );
      }
      J(ne.arg);
    }
    var $;
    o(this, "_invoke", {
      value: function (D, X) {
        function J() {
          return new k(function (ne, _e) {
            S(D, X, ne, _e);
          });
        }
        return ($ = $ ? $.then(J, J) : J());
      },
    });
  }
  function N(P, k, S) {
    var $ = d;
    return function (R, D) {
      if ($ === _) throw new Error("Generator is already running");
      if ($ === b) {
        if (R === "throw") throw D;
        return { value: e, done: !0 };
      }
      for (S.method = R, S.arg = D; ; ) {
        var X = S.delegate;
        if (X) {
          var J = Q(X, S);
          if (J) {
            if (J === A) continue;
            return J;
          }
        }
        if (S.method === "next") S.sent = S._sent = S.arg;
        else if (S.method === "throw") {
          if ($ === d) throw (($ = b), S.arg);
          S.dispatchException(S.arg);
        } else S.method === "return" && S.abrupt("return", S.arg);
        $ = _;
        var ne = p(P, k, S);
        if (ne.type === "normal") {
          if ((($ = S.done ? b : m), ne.arg === A)) continue;
          return { value: ne.arg, done: S.done };
        }
        ne.type === "throw" &&
          (($ = b), (S.method = "throw"), (S.arg = ne.arg));
      }
    };
  }
  function Q(P, k) {
    var S = k.method,
      $ = P.iterator[S];
    if ($ === e)
      return (
        (k.delegate = null),
        (S === "throw" &&
          P.iterator.return &&
          ((k.method = "return"),
          (k.arg = e),
          Q(P, k),
          k.method === "throw")) ||
          (S !== "return" &&
            ((k.method = "throw"),
            (k.arg = new TypeError(
              "The iterator does not provide a '" + S + "' method"
            )))),
        A
      );
    var R = p($, P.iterator, k.arg);
    if (R.type === "throw")
      return (k.method = "throw"), (k.arg = R.arg), (k.delegate = null), A;
    var D = R.arg;
    return D
      ? D.done
        ? ((k[P.resultName] = D.value),
          (k.next = P.nextLoc),
          k.method !== "return" && ((k.method = "next"), (k.arg = e)),
          (k.delegate = null),
          A)
        : D
      : ((k.method = "throw"),
        (k.arg = new TypeError("iterator result is not an object")),
        (k.delegate = null),
        A);
  }
  function I(P) {
    var k = { tryLoc: P[0] };
    1 in P && (k.catchLoc = P[1]),
      2 in P && ((k.finallyLoc = P[2]), (k.afterLoc = P[3])),
      this.tryEntries.push(k);
  }
  function j(P) {
    var k = P.completion || {};
    (k.type = "normal"), delete k.arg, (P.completion = k);
  }
  function W(P) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      P.forEach(I, this),
      this.reset(!0);
  }
  function V(P) {
    if (P || P === "") {
      var k = P[a];
      if (k) return k.call(P);
      if (typeof P.next == "function") return P;
      if (!isNaN(P.length)) {
        var S = -1,
          $ = function R() {
            for (; ++S < P.length; )
              if (r.call(P, S)) return (R.value = P[S]), (R.done = !1), R;
            return (R.value = e), (R.done = !0), R;
          };
        return ($.next = $);
      }
    }
    throw new TypeError(ye(P) + " is not iterable");
  }
  return (
    (c.prototype = h),
    o(x, "constructor", { value: h, configurable: !0 }),
    o(h, "constructor", { value: c, configurable: !0 }),
    (c.displayName = s(h, u, "GeneratorFunction")),
    (t.isGeneratorFunction = function (P) {
      var k = typeof P == "function" && P.constructor;
      return (
        !!k && (k === c || (k.displayName || k.name) === "GeneratorFunction")
      );
    }),
    (t.mark = function (P) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(P, h)
          : ((P.__proto__ = h), s(P, u, "GeneratorFunction")),
        (P.prototype = Object.create(x)),
        P
      );
    }),
    (t.awrap = function (P) {
      return { __await: P };
    }),
    M(B.prototype),
    s(B.prototype, l, function () {
      return this;
    }),
    (t.AsyncIterator = B),
    (t.async = function (P, k, S, $, R) {
      R === void 0 && (R = Promise);
      var D = new B(f(P, k, S, $), R);
      return t.isGeneratorFunction(k)
        ? D
        : D.next().then(function (X) {
            return X.done ? X.value : D.next();
          });
    }),
    M(x),
    s(x, u, "Generator"),
    s(x, a, function () {
      return this;
    }),
    s(x, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (P) {
      var k = Object(P),
        S = [];
      for (var $ in k) S.push($);
      return (
        S.reverse(),
        function R() {
          for (; S.length; ) {
            var D = S.pop();
            if (D in k) return (R.value = D), (R.done = !1), R;
          }
          return (R.done = !0), R;
        }
      );
    }),
    (t.values = V),
    (W.prototype = {
      constructor: W,
      reset: function (k) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = e),
          this.tryEntries.forEach(j),
          !k)
        )
          for (var S in this)
            S.charAt(0) === "t" &&
              r.call(this, S) &&
              !isNaN(+S.slice(1)) &&
              (this[S] = e);
      },
      stop: function () {
        this.done = !0;
        var k = this.tryEntries[0].completion;
        if (k.type === "throw") throw k.arg;
        return this.rval;
      },
      dispatchException: function (k) {
        if (this.done) throw k;
        var S = this;
        function $(_e, ue) {
          return (
            (X.type = "throw"),
            (X.arg = k),
            (S.next = _e),
            ue && ((S.method = "next"), (S.arg = e)),
            !!ue
          );
        }
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var D = this.tryEntries[R],
            X = D.completion;
          if (D.tryLoc === "root") return $("end");
          if (D.tryLoc <= this.prev) {
            var J = r.call(D, "catchLoc"),
              ne = r.call(D, "finallyLoc");
            if (J && ne) {
              if (this.prev < D.catchLoc) return $(D.catchLoc, !0);
              if (this.prev < D.finallyLoc) return $(D.finallyLoc);
            } else if (J) {
              if (this.prev < D.catchLoc) return $(D.catchLoc, !0);
            } else {
              if (!ne)
                throw new Error("try statement without catch or finally");
              if (this.prev < D.finallyLoc) return $(D.finallyLoc);
            }
          }
        }
      },
      abrupt: function (k, S) {
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var R = this.tryEntries[$];
          if (
            R.tryLoc <= this.prev &&
            r.call(R, "finallyLoc") &&
            this.prev < R.finallyLoc
          ) {
            var D = R;
            break;
          }
        }
        D &&
          (k === "break" || k === "continue") &&
          D.tryLoc <= S &&
          S <= D.finallyLoc &&
          (D = null);
        var X = D ? D.completion : {};
        return (
          (X.type = k),
          (X.arg = S),
          D
            ? ((this.method = "next"), (this.next = D.finallyLoc), A)
            : this.complete(X)
        );
      },
      complete: function (k, S) {
        if (k.type === "throw") throw k.arg;
        return (
          k.type === "break" || k.type === "continue"
            ? (this.next = k.arg)
            : k.type === "return"
            ? ((this.rval = this.arg = k.arg),
              (this.method = "return"),
              (this.next = "end"))
            : k.type === "normal" && S && (this.next = S),
          A
        );
      },
      finish: function (k) {
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var $ = this.tryEntries[S];
          if ($.finallyLoc === k)
            return this.complete($.completion, $.afterLoc), j($), A;
        }
      },
      catch: function (k) {
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var $ = this.tryEntries[S];
          if ($.tryLoc === k) {
            var R = $.completion;
            if (R.type === "throw") {
              var D = R.arg;
              j($);
            }
            return D;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (k, S, $) {
        return (
          (this.delegate = { iterator: V(k), resultName: S, nextLoc: $ }),
          this.method === "next" && (this.arg = e),
          A
        );
      },
    }),
    t
  );
}
function q0(e, t, n, r, o, i, a) {
  try {
    var l = e[i](a),
      u = l.value;
  } catch (s) {
    n(s);
    return;
  }
  l.done ? t(u) : Promise.resolve(u).then(r, o);
}
function um(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function a(u) {
        q0(i, r, o, a, l, "next", u);
      }
      function l(u) {
        q0(i, r, o, a, l, "throw", u);
      }
      a(void 0);
    });
  };
}
var Xi = q({}, T_),
  Rb = Xi.version,
  Ab = Xi.render,
  Mb = Xi.unmountComponentAtNode,
  wu;
try {
  var Ib = Number((Rb || "").split(".")[0]);
  Ib >= 18 && (wu = Xi.createRoot);
} catch {}
function Y0(e) {
  var t = Xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ye(t) === "object" && (t.usingClientEntryPoint = e);
}
var Pl = "__rc_react_root__";
function Lb(e, t) {
  Y0(!0);
  var n = t[Pl] || wu(t);
  Y0(!1), n.render(e), (t[Pl] = n);
}
function jb(e, t) {
  Ab(e, t);
}
function Nb(e, t) {
  if (wu) {
    Lb(e, t);
    return;
  }
  jb(e, t);
}
function Db(e) {
  return tf.apply(this, arguments);
}
function tf() {
  return (
    (tf = um(
      Di().mark(function e(t) {
        return Di().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  "return",
                  Promise.resolve().then(function () {
                    var o;
                    (o = t[Pl]) === null || o === void 0 || o.unmount(),
                      delete t[Pl];
                  })
                );
              case 1:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    tf.apply(this, arguments)
  );
}
function zb(e) {
  Mb(e);
}
function Bb(e) {
  return nf.apply(this, arguments);
}
function nf() {
  return (
    (nf = um(
      Di().mark(function e(t) {
        return Di().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (wu === void 0) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return", Db(t));
              case 2:
                zb(t);
              case 3:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    nf.apply(this, arguments)
  );
}
const Fb = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          i = o.width,
          a = o.height;
        if (i || a) return !0;
      }
    }
    return !1;
  },
  Hb = (e) => {
    const { componentCls: t, colorPrimary: n } = e;
    return {
      [t]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${n})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: 0.2,
        "&.wave-motion-appear": {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`,
          ].join(","),
          "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
          "&.wave-quick": {
            transition: [
              `box-shadow 0.3s ${e.motionEaseInOut}`,
              `opacity 0.35s ${e.motionEaseInOut}`,
            ].join(","),
          },
        },
      },
    };
  },
  Vb = gd("Wave", (e) => [Hb(e)]);
function Ub(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Es(e) {
  return (
    e &&
    e !== "#fff" &&
    e !== "#ffffff" &&
    e !== "rgb(255, 255, 255)" &&
    e !== "rgba(255, 255, 255, 1)" &&
    Ub(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== "transparent"
  );
}
function Wb(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r,
  } = getComputedStyle(e);
  return Es(t) ? t : Es(n) ? n : Es(r) ? r : null;
}
const sm = "ant-wave-target";
function xs(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Gb = (e) => {
    const { className: t, target: n, component: r } = e,
      o = y.useRef(null),
      [i, a] = y.useState(null),
      [l, u] = y.useState([]),
      [s, f] = y.useState(0),
      [p, d] = y.useState(0),
      [m, _] = y.useState(0),
      [b, A] = y.useState(0),
      [v, c] = y.useState(!1),
      h = {
        left: s,
        top: p,
        width: m,
        height: b,
        borderRadius: l.map((T) => `${T}px`).join(" "),
      };
    i && (h["--wave-color"] = i);
    function w() {
      const T = getComputedStyle(n);
      a(Wb(n));
      const x = T.position === "static",
        { borderLeftWidth: M, borderTopWidth: B } = T;
      f(x ? n.offsetLeft : xs(-parseFloat(M))),
        d(x ? n.offsetTop : xs(-parseFloat(B))),
        _(n.offsetWidth),
        A(n.offsetHeight);
      const {
        borderTopLeftRadius: N,
        borderTopRightRadius: Q,
        borderBottomLeftRadius: I,
        borderBottomRightRadius: j,
      } = T;
      u([N, Q, j, I].map((W) => xs(parseFloat(W))));
    }
    if (
      (y.useEffect(() => {
        if (n) {
          const T = Pr(() => {
            w(), c(!0);
          });
          let x;
          return (
            typeof ResizeObserver < "u" &&
              ((x = new ResizeObserver(w)), x.observe(n)),
            () => {
              Pr.cancel(T), x == null || x.disconnect();
            }
          );
        }
      }, []),
      !v)
    )
      return null;
    const C =
      (r === "Checkbox" || r === "Radio") &&
      (n == null ? void 0 : n.classList.contains(sm));
    return y.createElement(
      yd,
      {
        visible: !0,
        motionAppear: !0,
        motionName: "wave-motion",
        motionDeadline: 5e3,
        onAppearEnd: (T, x) => {
          var M;
          if (x.deadline || x.propertyName === "opacity") {
            const B =
              (M = o.current) === null || M === void 0
                ? void 0
                : M.parentElement;
            Bb(B).then(() => {
              B == null || B.remove();
            });
          }
          return !1;
        },
      },
      (T) => {
        let { className: x } = T;
        return y.createElement("div", {
          ref: o,
          className: Ft(t, { "wave-quick": C }, x),
          style: h,
        });
      }
    );
  },
  Xb = (e, t) => {
    var n;
    const { component: r } = t;
    if (
      r === "Checkbox" &&
      !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked)
    )
      return;
    const o = document.createElement("div");
    (o.style.position = "absolute"),
      (o.style.left = "0px"),
      (o.style.top = "0px"),
      e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild),
      Nb(y.createElement(Gb, Object.assign({}, t, { target: e })), o);
  },
  Qb = Xb;
function Kb(e, t, n) {
  const { wave: r } = y.useContext(ar),
    [, o, i] = Mr(),
    a = hx((s) => {
      const f = e.current;
      if ((r != null && r.disabled) || !f) return;
      const p = f.querySelector(`.${sm}`) || f,
        { showEffect: d } = r || {};
      (d || Qb)(p, {
        className: t,
        token: o,
        component: n,
        event: s,
        hashId: i,
      });
    }),
    l = y.useRef();
  return (s) => {
    Pr.cancel(l.current),
      (l.current = Pr(() => {
        a(s);
      }));
  };
}
const qb = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: o } = y.useContext(ar),
      i = y.useRef(null),
      a = o("wave"),
      [, l] = Vb(a),
      u = Kb(i, Ft(a, l), r);
    if (
      (Y.useEffect(() => {
        const f = i.current;
        if (!f || f.nodeType !== 1 || n) return;
        const p = (d) => {
          !Fb(d.target) ||
            !f.getAttribute ||
            f.getAttribute("disabled") ||
            f.disabled ||
            f.className.includes("disabled") ||
            f.className.includes("-leave") ||
            u(d);
        };
        return (
          f.addEventListener("click", p, !0),
          () => {
            f.removeEventListener("click", p, !0);
          }
        );
      }, [n]),
      !Y.isValidElement(t))
    )
      return t ?? null;
    const s = qg(t) ? Kg(t.ref, i) : i;
    return lm(t, { ref: s });
  },
  Yb = qb,
  Zb = (e) => {
    const t = Y.useContext(yu);
    return Y.useMemo(
      () =>
        e
          ? typeof e == "string"
            ? e ?? t
            : e instanceof Function
            ? e(t)
            : t
          : t,
      [e, t]
    );
  },
  Jb = Zb,
  e2 = y.createContext(null),
  t2 = (e, t) => {
    const n = y.useContext(e2),
      r = y.useMemo(() => {
        if (!n) return "";
        const { compactDirection: o, isFirstItem: i, isLastItem: a } = n,
          l = o === "vertical" ? "-vertical-" : "-";
        return Ft(`${e}-compact${l}item`, {
          [`${e}-compact${l}first-item`]: i,
          [`${e}-compact${l}last-item`]: a,
          [`${e}-compact${l}item-rtl`]: t === "rtl",
        });
      }, [e, t, n]);
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r,
    };
  };
var n2 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const cm = y.createContext(void 0),
  r2 = (e) => {
    const { getPrefixCls: t, direction: n } = y.useContext(ar),
      { prefixCls: r, size: o, className: i } = e,
      a = n2(e, ["prefixCls", "size", "className"]),
      l = t("btn-group", r),
      [, , u] = Mr();
    let s = "";
    switch (o) {
      case "large":
        s = "lg";
        break;
      case "small":
        s = "sm";
        break;
    }
    const f = Ft(l, { [`${l}-${s}`]: s, [`${l}-rtl`]: n === "rtl" }, i, u);
    return y.createElement(
      cm.Provider,
      { value: o },
      y.createElement("div", Object.assign({}, a, { className: f }))
    );
  },
  o2 = r2,
  Z0 = /^[\u4e00-\u9fa5]{2}$/,
  rf = Z0.test.bind(Z0);
function J0(e) {
  return typeof e == "string";
}
function bs(e) {
  return e === "text" || e === "link";
}
function i2(e, t) {
  if (e == null) return;
  const n = t ? " " : "";
  return typeof e != "string" &&
    typeof e != "number" &&
    J0(e.type) &&
    rf(e.props.children)
    ? lm(e, { children: e.props.children.split("").join(n) })
    : J0(e)
    ? rf(e)
      ? Y.createElement("span", null, e.split("").join(n))
      : Y.createElement("span", null, e)
    : Cb(e)
    ? Y.createElement("span", null, e)
    : e;
}
function a2(e, t) {
  let n = !1;
  const r = [];
  return (
    Y.Children.forEach(e, (o) => {
      const i = typeof o,
        a = i === "string" || i === "number";
      if (n && a) {
        const l = r.length - 1,
          u = r[l];
        r[l] = `${u}${o}`;
      } else r.push(o);
      n = a;
    }),
    Y.Children.map(r, (o) => i2(o, t))
  );
}
const l2 = y.forwardRef((e, t) => {
    const { className: n, style: r, children: o, prefixCls: i } = e,
      a = Ft(`${i}-icon`, n);
    return Y.createElement("span", { ref: t, className: a, style: r }, o);
  }),
  fm = l2,
  eh = y.forwardRef((e, t) => {
    let { prefixCls: n, className: r, style: o, iconClassName: i } = e;
    const a = Ft(`${n}-loading-icon`, r);
    return Y.createElement(
      fm,
      { prefixCls: n, className: a, style: o, ref: t },
      Y.createElement(Pb, { className: i })
    );
  }),
  Cs = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
  Os = (e) => ({ width: e.scrollWidth, opacity: 1, transform: "scale(1)" }),
  u2 = (e) => {
    const {
        prefixCls: t,
        loading: n,
        existIcon: r,
        className: o,
        style: i,
      } = e,
      a = !!n;
    return r
      ? Y.createElement(eh, { prefixCls: t, className: o, style: i })
      : Y.createElement(
          yd,
          {
            visible: a,
            motionName: `${t}-loading-icon-motion`,
            motionLeave: a,
            removeOnLeave: !0,
            onAppearStart: Cs,
            onAppearActive: Os,
            onEnterStart: Cs,
            onEnterActive: Os,
            onLeaveStart: Os,
            onLeaveActive: Cs,
          },
          (l, u) => {
            let { className: s, style: f } = l;
            return Y.createElement(eh, {
              prefixCls: t,
              className: o,
              style: Object.assign(Object.assign({}, i), f),
              ref: u,
              iconClassName: s,
            });
          }
        );
  },
  s2 = u2,
  th = (e, t) => ({
    [`> span, > ${e}`]: {
      "&:not(:last-child)": {
        [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineEndColor: t } },
      },
      "&:not(:first-child)": {
        [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineStartColor: t } },
      },
    },
  }),
  c2 = (e) => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      groupBorderColor: o,
      colorErrorHover: i,
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          [`> span, > ${t}`]: {
            "&:not(:last-child)": {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            "&:not(:first-child)": {
              marginInlineStart: e.calc(r).mul(-1).equal(),
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [t]: {
            position: "relative",
            zIndex: 1,
            "&:hover,\n          &:focus,\n          &:active": { zIndex: 2 },
            "&[disabled]": { zIndex: 0 },
          },
          [`${t}-icon-only`]: { fontSize: n },
        },
        th(`${t}-primary`, o),
        th(`${t}-danger`, i),
      ],
    };
  },
  f2 = c2,
  d2 = (e) => {
    const { componentCls: t, iconCls: n, fontWeight: r } = e;
    return {
      [t]: {
        outline: "none",
        position: "relative",
        display: "inline-block",
        fontWeight: r,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        background: "transparent",
        border: `${Jn(e.lineWidth)} ${e.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        lineHeight: e.lineHeight,
        color: e.colorText,
        "&:disabled > *": { pointerEvents: "none" },
        "> span": { display: "inline-block" },
        [`${t}-icon`]: { lineHeight: 0 },
        [`> ${n} + span, > span + ${n}`]: { marginInlineStart: e.marginXS },
        [`&:not(${t}-icon-only) > ${t}-icon`]: {
          [`&${t}-loading-icon, &:not(:last-child)`]: {
            marginInlineEnd: e.marginXS,
          },
        },
        "> a": { color: "currentColor" },
        "&:not(:disabled)": Object.assign({}, Sx(e)),
        [`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" },
        [`&${t}-two-chinese-chars > *:not(${n})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em",
        },
        [`&-icon-only${t}-compact-item`]: { flex: "none" },
      },
    };
  },
  En = (e, t, n) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { "&:hover": t, "&:active": n },
  }),
  p2 = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%",
  }),
  h2 = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
    paddingInlineEnd: e.calc(e.controlHeight).div(2).equal(),
  }),
  v2 = (e) => ({
    cursor: "not-allowed",
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    background: e.colorBgContainerDisabled,
    boxShadow: "none",
  }),
  zi = (e, t, n, r, o, i, a, l) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: n || void 0,
          background: t,
          borderColor: r || void 0,
          boxShadow: "none",
        },
        En(
          e,
          Object.assign({ background: t }, a),
          Object.assign({ background: t }, l)
        )
      ),
      {
        "&:disabled": {
          cursor: "not-allowed",
          color: o || void 0,
          borderColor: i || void 0,
        },
      }
    ),
  }),
  _d = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, v2(e)),
  }),
  dm = (e) => Object.assign({}, _d(e)),
  Rl = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: e.colorTextDisabled,
    },
  }),
  pm = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, dm(e)), {
            background: e.defaultBg,
            borderColor: e.defaultBorderColor,
            color: e.defaultColor,
            boxShadow: e.defaultShadow,
          }),
          En(
            e.componentCls,
            { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
            { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
          )
        ),
        zi(
          e.componentCls,
          e.ghostBg,
          e.defaultGhostColor,
          e.defaultGhostBorderColor,
          e.colorTextDisabled,
          e.colorBorder
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              { color: e.colorError, borderColor: e.colorError },
              En(
                e.componentCls,
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover,
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive }
              )
            ),
            zi(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder
            )
          ),
          _d(e)
        ),
      }
    ),
  g2 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, dm(e)), {
            color: e.primaryColor,
            background: e.colorPrimary,
            boxShadow: e.primaryShadow,
          }),
          En(
            e.componentCls,
            { color: e.colorTextLightSolid, background: e.colorPrimaryHover },
            { color: e.colorTextLightSolid, background: e.colorPrimaryActive }
          )
        ),
        zi(
          e.componentCls,
          e.ghostBg,
          e.colorPrimary,
          e.colorPrimary,
          e.colorTextDisabled,
          e.colorBorder,
          { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
          { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                background: e.colorError,
                boxShadow: e.dangerShadow,
                color: e.dangerColor,
              },
              En(
                e.componentCls,
                { background: e.colorErrorHover },
                { background: e.colorErrorActive }
              )
            ),
            zi(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive }
            )
          ),
          _d(e)
        ),
      }
    ),
  m2 = (e) =>
    Object.assign(Object.assign({}, pm(e)), { borderStyle: "dashed" }),
  y2 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          { color: e.colorLink },
          En(
            e.componentCls,
            { color: e.colorLinkHover, background: e.linkHoverBg },
            { color: e.colorLinkActive }
          )
        ),
        Rl(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            { color: e.colorError },
            En(
              e.componentCls,
              { color: e.colorErrorHover },
              { color: e.colorErrorActive }
            )
          ),
          Rl(e)
        ),
      }
    ),
  S2 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          En(
            e.componentCls,
            { color: e.colorText, background: e.textHoverBg },
            { color: e.colorText, background: e.colorBgTextActive }
          )
        ),
        Rl(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign({ color: e.colorError }, Rl(e)),
          En(
            e.componentCls,
            { color: e.colorErrorHover, background: e.colorErrorBg },
            { color: e.colorErrorHover, background: e.colorErrorBg }
          )
        ),
      }
    ),
  _2 = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-default`]: pm(e),
      [`${t}-primary`]: g2(e),
      [`${t}-dashed`]: m2(e),
      [`${t}-link`]: y2(e),
      [`${t}-text`]: S2(e),
      [`${t}-ghost`]: zi(
        e.componentCls,
        e.ghostBg,
        e.colorBgContainer,
        e.colorBgContainer,
        e.colorTextDisabled,
        e.colorBorder
      ),
    };
  },
  wd = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
        componentCls: n,
        controlHeight: r,
        fontSize: o,
        borderRadius: i,
        buttonPaddingHorizontal: a,
        iconCls: l,
        buttonPaddingVertical: u,
      } = e,
      s = `${n}-icon-only`;
    return [
      {
        [`${n}${t}`]: {
          fontSize: o,
          height: r,
          padding: `${Jn(u)} ${Jn(a)}`,
          borderRadius: i,
          [`&${s}`]: {
            width: r,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${n}-round`]: { width: "auto" },
            [l]: { fontSize: e.buttonIconOnlyFontSize },
          },
          [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: "default" },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
        },
      },
      { [`${n}${n}-circle${t}`]: p2(e) },
      { [`${n}${n}-round${t}`]: h2(e) },
    ];
  },
  w2 = (e) => wd(Ao(e, { fontSize: e.contentFontSize })),
  E2 = (e) => {
    const t = Ao(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      buttonPaddingVertical: e.paddingBlockSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    });
    return wd(t, `${e.componentCls}-sm`);
  },
  x2 = (e) => {
    const t = Ao(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      buttonPaddingVertical: e.paddingBlockLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    });
    return wd(t, `${e.componentCls}-lg`);
  },
  b2 = (e) => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: "100%" } } };
  },
  hm = (e) => {
    const { paddingInline: t, onlyIconSize: n, paddingBlock: r } = e;
    return Ao(e, {
      buttonPaddingHorizontal: t,
      buttonPaddingVertical: r,
      buttonIconOnlyFontSize: n,
    });
  },
  vm = (e) => {
    const t = e.fontSize,
      n = e.fontSize,
      r = e.fontSizeLG;
    return {
      fontWeight: 400,
      defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
      primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
      dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
      primaryColor: e.colorTextLightSolid,
      dangerColor: e.colorTextLightSolid,
      borderColorDisabled: e.colorBorder,
      defaultGhostColor: e.colorBgContainer,
      ghostBg: "transparent",
      defaultGhostBorderColor: e.colorBgContainer,
      paddingInline: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineSM: 8 - e.lineWidth,
      paddingBlock: Math.max(
        (e.controlHeight - t * e.lineHeight) / 2 - e.lineWidth,
        0
      ),
      paddingBlockSM: Math.max(
        (e.controlHeightSM - n * e.lineHeight) / 2 - e.lineWidth,
        0
      ),
      paddingBlockLG: Math.max(
        (e.controlHeightLG - r * e.lineHeight) / 2 - e.lineWidth,
        0
      ),
      onlyIconSize: e.fontSizeLG,
      onlyIconSizeSM: e.fontSizeLG - 2,
      onlyIconSizeLG: e.fontSizeLG + 2,
      groupBorderColor: e.colorPrimaryHover,
      linkHoverBg: "transparent",
      textHoverBg: e.colorBgTextHover,
      defaultColor: e.colorText,
      defaultBg: e.colorBgContainer,
      defaultBorderColor: e.colorBorder,
      defaultBorderColorDisabled: e.colorBorder,
      contentFontSize: t,
      contentFontSizeSM: n,
      contentFontSizeLG: r,
    };
  },
  C2 = Ax(
    "Button",
    (e) => {
      const t = hm(e);
      return [d2(t), E2(t), w2(t), x2(t), b2(t), _2(t), f2(t)];
    },
    vm,
    { unitless: { fontWeight: !0 } }
  );
function O2(e, t, n) {
  const { focusElCls: r, focus: o, borderElCls: i } = n,
    a = i ? "> *" : "",
    l = ["hover", o ? "focus" : null, "active"]
      .filter(Boolean)
      .map((u) => `&:${u} ${a}`)
      .join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
    },
    "&-item": Object.assign(
      Object.assign(
        { [l]: { zIndex: 2 } },
        r ? { [`&${r}`]: { zIndex: 2 } } : {}
      ),
      { [`&[disabled] ${a}`]: { zIndex: 0 } }
    ),
  };
}
function k2(e, t, n) {
  const { borderElCls: r } = n,
    o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function T2(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: n } = e,
    r = `${n}-compact`;
  return { [r]: Object.assign(Object.assign({}, O2(e, r, t)), k2(n, r, t)) };
}
function $2(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
    },
    "&-item": {
      "&:hover,&:focus,&:active": { zIndex: 2 },
      "&[disabled]": { zIndex: 0 },
    },
  };
}
function P2(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function R2(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, $2(e, t)), P2(e.componentCls, t)),
  };
}
const A2 = (e) => {
    const { componentCls: t, calc: n } = e;
    return {
      [t]: {
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
            {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: n(e.lineWidth).mul(-1).equal(),
                insetInlineStart: n(e.lineWidth).mul(-1).equal(),
                display: "inline-block",
                width: e.lineWidth,
                height: `calc(100% + ${Jn(e.lineWidth)} * 2)`,
                backgroundColor: e.colorPrimaryHover,
                content: '""',
              },
            },
        },
        "&-compact-vertical-item": {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
              {
                position: "relative",
                "&:before": {
                  position: "absolute",
                  top: n(e.lineWidth).mul(-1).equal(),
                  insetInlineStart: n(e.lineWidth).mul(-1).equal(),
                  display: "inline-block",
                  width: `calc(100% + ${Jn(e.lineWidth)} * 2)`,
                  height: e.lineWidth,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
          },
        },
      },
    };
  },
  M2 = Px(
    ["Button", "compact"],
    (e) => {
      const t = hm(e);
      return [T2(t), R2(t), A2(t)];
    },
    vm
  );
var I2 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function L2(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return (
      (t = !Number.isNaN(t) && typeof t == "number" ? t : 0),
      { loading: t <= 0, delay: t }
    );
  }
  return { loading: !!e, delay: 0 };
}
const j2 = (e, t) => {
    var n, r;
    const {
        loading: o = !1,
        prefixCls: i,
        type: a = "default",
        danger: l,
        shape: u = "default",
        size: s,
        styles: f,
        disabled: p,
        className: d,
        rootClassName: m,
        children: _,
        icon: b,
        ghost: A = !1,
        block: v = !1,
        htmlType: c = "button",
        classNames: h,
        style: w = {},
      } = e,
      C = I2(e, [
        "loading",
        "prefixCls",
        "type",
        "danger",
        "shape",
        "size",
        "styles",
        "disabled",
        "className",
        "rootClassName",
        "children",
        "icon",
        "ghost",
        "block",
        "htmlType",
        "classNames",
        "style",
      ]),
      {
        getPrefixCls: T,
        autoInsertSpaceInButton: x,
        direction: M,
        button: B,
      } = y.useContext(ar),
      N = T("btn", i),
      [Q, I, j] = C2(N),
      W = y.useContext(I1),
      V = p ?? W,
      P = y.useContext(cm),
      k = y.useMemo(() => L2(o), [o]),
      [S, $] = y.useState(k.loading),
      [R, D] = y.useState(!1),
      J = Kg(t, y.createRef()),
      ne = y.Children.count(_) === 1 && !b && !bs(a);
    y.useEffect(() => {
      let E = null;
      k.delay > 0
        ? (E = setTimeout(() => {
            (E = null), $(!0);
          }, k.delay))
        : $(k.loading);
      function O() {
        E && (clearTimeout(E), (E = null));
      }
      return O;
    }, [k]),
      y.useEffect(() => {
        if (!J || !J.current || x === !1) return;
        const E = J.current.textContent;
        ne && rf(E) ? R || D(!0) : R && D(!1);
      }, [J]);
    const _e = (E) => {
        const { onClick: O } = e;
        if (S || V) {
          E.preventDefault();
          return;
        }
        O == null || O(E);
      },
      ue = x !== !1,
      { compactSize: xe, compactItemClassnames: Wt } = t2(N, M),
      Cn = { large: "lg", small: "sm", middle: void 0 },
      Pt = Jb((E) => {
        var O, H;
        return (H = (O = s ?? xe) !== null && O !== void 0 ? O : P) !== null &&
          H !== void 0
          ? H
          : E;
      }),
      at = (Pt && Cn[Pt]) || "",
      sr = S ? "loading" : b,
      Rt = q_(C, ["navigate"]),
      On = Ft(
        N,
        I,
        j,
        {
          [`${N}-${u}`]: u !== "default" && u,
          [`${N}-${a}`]: a,
          [`${N}-${at}`]: at,
          [`${N}-icon-only`]: !_ && _ !== 0 && !!sr,
          [`${N}-background-ghost`]: A && !bs(a),
          [`${N}-loading`]: S,
          [`${N}-two-chinese-chars`]: R && ue && !S,
          [`${N}-block`]: v,
          [`${N}-dangerous`]: !!l,
          [`${N}-rtl`]: M === "rtl",
        },
        Wt,
        d,
        m,
        B == null ? void 0 : B.className
      ),
      Ge = Object.assign(Object.assign({}, B == null ? void 0 : B.style), w),
      kn = Ft(
        h == null ? void 0 : h.icon,
        (n = B == null ? void 0 : B.classNames) === null || n === void 0
          ? void 0
          : n.icon
      ),
      Tn = Object.assign(
        Object.assign({}, (f == null ? void 0 : f.icon) || {}),
        ((r = B == null ? void 0 : B.styles) === null || r === void 0
          ? void 0
          : r.icon) || {}
      ),
      nn =
        b && !S
          ? Y.createElement(fm, { prefixCls: N, className: kn, style: Tn }, b)
          : Y.createElement(s2, { existIcon: !!b, prefixCls: N, loading: !!S }),
      be = _ || _ === 0 ? a2(_, ne && ue) : null;
    if (Rt.href !== void 0)
      return Q(
        Y.createElement(
          "a",
          Object.assign({}, Rt, {
            className: Ft(On, { [`${N}-disabled`]: V }),
            href: V ? void 0 : Rt.href,
            style: Ge,
            onClick: _e,
            ref: J,
            tabIndex: V ? -1 : 0,
          }),
          nn,
          be
        )
      );
    let g = Y.createElement(
      "button",
      Object.assign({}, C, {
        type: c,
        className: On,
        style: Ge,
        onClick: _e,
        disabled: V,
        ref: J,
      }),
      nn,
      be,
      Wt && Y.createElement(M2, { key: "compact", prefixCls: N })
    );
    return (
      bs(a) ||
        (g = Y.createElement(Yb, { component: "Button", disabled: !!S }, g)),
      Q(g)
    );
  },
  Ed = y.forwardRef(j2);
Ed.Group = o2;
Ed.__ANT_BUTTON = !0;
const N2 = Ed,
  D2 = ({ article: e, color: t, size: n, maker: r, src: o, name: i }) => {
    const [a, l] = y.useState(),
      [u, s] = y.useState(),
      [f, p] = y.useState(),
      [d, m] = y.useState(),
      [_, b] = y.useState(),
      [A, v] = y.useState(!1),
      c = 827,
      h = 442,
      w = y.useRef(),
      C = y.useRef(),
      [T, x] = y.useState(),
      M = () => {
        const I = C.current
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let j = document.createElement("a");
        (j.style = { display: "none" }),
          (j.download = `${i} ${e}.png`),
          (j.href = I),
          j.click();
      };
    y.useEffect(() => {
      const I = w.current;
      m(I);
      const j = I.getContext("2d");
      s(j), (I.width = c), (I.height = h);
      const W = new Image();
      (W.src = o), l(W);
      const V = C.current;
      x(V);
      const P = V.getContext("2d");
      p(P), (V.width = 2480), (V.height = 3508);
    }, []);
    const B = (I) => {
        (I.font = "bold 50px Sans-serif"),
          I.fillText(i, c / 2, 65),
          (I.font = "42px Sans-serif"),
          I.fillText(`Артикул: ${e}`, c / 2 - 350, h * 0.22),
          (I.font = "42px Sans-serif"),
          I.fillText(`Цвет: ${t}`, c / 2 - 350, h * 0.4 - 35),
          (I.font = "bold 54px Sans-serif"),
          I.fillText(`${n}`, c - 260, h / 2 - 40),
          (I.font = "42px Sans-serif"),
          I.fillText(`ИП ${r}`, c - 550, h / 2 + 15),
          (I.backgroundColor = "white"),
          (I.fillStyle = "white");
      },
      N = () => {
        const I = d.toDataURL("image/png", 1),
          j = new Image();
        (j.src = I), (j.width = c), (j.height = h), b(j);
      },
      Q = () => {
        for (let j = 0; j < 8; j++) {
          const W = 445 * j;
          for (let V = 0; V < 3; V++) {
            const P = V * 827;
            f.drawImage(_, P, W);
          }
        }
        v(!0);
      };
    return (
      console.log(C),
      Z.jsxs("div", {
        className: "canvas-buttons",
        children: [
          Z.jsx("button", {
            onClick: () => {
              u.drawImage(a, c / 2 - 250, 240), B(u);
            },
            children: "2. Создать наклейку",
          }),
          Z.jsx("button", { onClick: N, children: "3. Клонировать наклейку" }),
          Z.jsx("button", {
            onClick: Q,
            children: "4. Создать лист с баркодами",
          }),
          Z.jsx(N2, {
            style: {
              backgroundColor: "#32CD32",
              color: "white",
              height: "35px",
            },
            onClick: M,
            children: "5. Скачать лист",
          }),
          Z.jsx("canvas", { ref: w, children: "Canvas" }),
          Z.jsx("canvas", {
            ref: C,
            style: { display: A ? "flex" : "none", border: "1px black solid" },
            children: "Canvas2nd",
          }),
        ],
      })
    );
  };
let z2 = { data: "" },
  B2 = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || z2,
  F2 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  H2 = /\/\*[^]*?\*\/|  +/g,
  nh = /\n+/g,
  jn = (e, t) => {
    let n = "",
      r = "",
      o = "";
    for (let i in e) {
      let a = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (n = i + " " + a + ";")
          : (r +=
              i[1] == "f"
                ? jn(a, i)
                : i + "{" + jn(a, i[1] == "k" ? "" : t) + "}")
        : typeof a == "object"
        ? (r += jn(
            a,
            t
              ? t.replace(/([^,])+/g, (l) =>
                  i.replace(/(^:.*)|([^,])+/g, (u) =>
                    /&/.test(u) ? u.replace(/&/g, l) : l ? l + " " + u : u
                  )
                )
              : i
          ))
        : a != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += jn.p ? jn.p(i, a) : i + ":" + a + ";"));
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r;
  },
  ln = {},
  gm = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + gm(e[n]);
      return t;
    }
    return e;
  },
  V2 = (e, t, n, r, o) => {
    let i = gm(e),
      a =
        ln[i] ||
        (ln[i] = ((u) => {
          let s = 0,
            f = 11;
          for (; s < u.length; ) f = (101 * f + u.charCodeAt(s++)) >>> 0;
          return "go" + f;
        })(i));
    if (!ln[a]) {
      let u =
        i !== e
          ? e
          : ((s) => {
              let f,
                p,
                d = [{}];
              for (; (f = F2.exec(s.replace(H2, ""))); )
                f[4]
                  ? d.shift()
                  : f[3]
                  ? ((p = f[3].replace(nh, " ").trim()),
                    d.unshift((d[0][p] = d[0][p] || {})))
                  : (d[0][f[1]] = f[2].replace(nh, " ").trim());
              return d[0];
            })(e);
      ln[a] = jn(o ? { ["@keyframes " + a]: u } : u, n ? "" : "." + a);
    }
    let l = n && ln.g ? ln.g : null;
    return (
      n && (ln.g = ln[a]),
      ((u, s, f, p) => {
        p
          ? (s.data = s.data.replace(p, u))
          : s.data.indexOf(u) === -1 && (s.data = f ? u + s.data : s.data + u);
      })(ln[a], t, r, l),
      a
    );
  },
  U2 = (e, t, n) =>
    e.reduce((r, o, i) => {
      let a = t[i];
      if (a && a.call) {
        let l = a(n),
          u = (l && l.props && l.props.className) || (/^go/.test(l) && l);
        a = u
          ? "." + u
          : l && typeof l == "object"
          ? l.props
            ? ""
            : jn(l, "")
          : l === !1
          ? ""
          : l;
      }
      return r + o + (a ?? "");
    }, "");
function Eu(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return V2(
    n.unshift
      ? n.raw
        ? U2(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    B2(t.target),
    t.g,
    t.o,
    t.k
  );
}
let mm, of, af;
Eu.bind({ g: 1 });
let xn = Eu.bind({ k: 1 });
function W2(e, t, n, r) {
  (jn.p = t), (mm = e), (of = n), (af = r);
}
function lr(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function o(i, a) {
      let l = Object.assign({}, i),
        u = l.className || o.className;
      (n.p = Object.assign({ theme: of && of() }, l)),
        (n.o = / *go\d+/.test(u)),
        (l.className = Eu.apply(n, r) + (u ? " " + u : "")),
        t && (l.ref = a);
      let s = e;
      return (
        e[0] && ((s = l.as || e), delete l.as), af && s[0] && af(l), mm(s, l)
      );
    }
    return t ? t(o) : o;
  };
}
var G2 = (e) => typeof e == "function",
  Al = (e, t) => (G2(e) ? e(t) : e),
  X2 = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  ym = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Q2 = 20,
  Ja = new Map(),
  K2 = 1e3,
  rh = (e) => {
    if (Ja.has(e)) return;
    let t = setTimeout(() => {
      Ja.delete(e), jr({ type: 4, toastId: e });
    }, K2);
    Ja.set(e, t);
  },
  q2 = (e) => {
    let t = Ja.get(e);
    t && clearTimeout(t);
  },
  lf = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Q2) };
      case 1:
        return (
          t.toast.id && q2(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === t.toast.id ? { ...i, ...t.toast } : i
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((i) => i.id === n.id)
          ? lf(e, { type: 1, toast: n })
          : lf(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? rh(r)
            : e.toasts.forEach((i) => {
                rh(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === r || r === void 0 ? { ...i, visible: !1 } : i
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + o,
          })),
        };
    }
  },
  el = [],
  tl = { toasts: [], pausedAt: void 0 },
  jr = (e) => {
    (tl = lf(tl, e)),
      el.forEach((t) => {
        t(tl);
      });
  },
  Y2 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Z2 = (e = {}) => {
    let [t, n] = y.useState(tl);
    y.useEffect(
      () => (
        el.push(n),
        () => {
          let o = el.indexOf(n);
          o > -1 && el.splice(o, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((o) => {
      var i, a;
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration:
          o.duration ||
          ((i = e[o.type]) == null ? void 0 : i.duration) ||
          (e == null ? void 0 : e.duration) ||
          Y2[o.type],
        style: {
          ...e.style,
          ...((a = e[o.type]) == null ? void 0 : a.style),
          ...o.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  J2 = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || X2(),
  }),
  Qi = (e) => (t, n) => {
    let r = J2(t, e, n);
    return jr({ type: 2, toast: r }), r.id;
  },
  tt = (e, t) => Qi("blank")(e, t);
tt.error = Qi("error");
tt.success = Qi("success");
tt.loading = Qi("loading");
tt.custom = Qi("custom");
tt.dismiss = (e) => {
  jr({ type: 3, toastId: e });
};
tt.remove = (e) => jr({ type: 4, toastId: e });
tt.promise = (e, t, n) => {
  let r = tt.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (o) => (
          tt.success(Al(t.success, o), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          o
        )
      )
      .catch((o) => {
        tt.error(Al(t.error, o), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var eC = (e, t) => {
    jr({ type: 1, toast: { id: e, height: t } });
  },
  tC = () => {
    jr({ type: 5, time: Date.now() });
  },
  nC = (e) => {
    let { toasts: t, pausedAt: n } = Z2(e);
    y.useEffect(() => {
      if (n) return;
      let i = Date.now(),
        a = t.map((l) => {
          if (l.duration === 1 / 0) return;
          let u = (l.duration || 0) + l.pauseDuration - (i - l.createdAt);
          if (u < 0) {
            l.visible && tt.dismiss(l.id);
            return;
          }
          return setTimeout(() => tt.dismiss(l.id), u);
        });
      return () => {
        a.forEach((l) => l && clearTimeout(l));
      };
    }, [t, n]);
    let r = y.useCallback(() => {
        n && jr({ type: 6, time: Date.now() });
      }, [n]),
      o = y.useCallback(
        (i, a) => {
          let {
              reverseOrder: l = !1,
              gutter: u = 8,
              defaultPosition: s,
            } = a || {},
            f = t.filter(
              (m) => (m.position || s) === (i.position || s) && m.height
            ),
            p = f.findIndex((m) => m.id === i.id),
            d = f.filter((m, _) => _ < p && m.visible).length;
          return f
            .filter((m) => m.visible)
            .slice(...(l ? [d + 1] : [0, d]))
            .reduce((m, _) => m + (_.height || 0) + u, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: eC,
        startPause: tC,
        endPause: r,
        calculateOffset: o,
      },
    };
  },
  rC = xn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  oC = xn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  iC = xn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  aC = lr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${oC} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${iC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  lC = xn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  uC = lr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${lC} 1s linear infinite;
`,
  sC = xn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  cC = xn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  fC = lr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${cC} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  dC = lr("div")`
  position: absolute;
`,
  pC = lr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  hC = xn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  vC = lr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${hC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  gC = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? y.createElement(vC, null, t)
        : t
      : n === "blank"
      ? null
      : y.createElement(
          pC,
          null,
          y.createElement(uC, { ...r }),
          n !== "loading" &&
            y.createElement(
              dC,
              null,
              n === "error"
                ? y.createElement(aC, { ...r })
                : y.createElement(fC, { ...r })
            )
        );
  },
  mC = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  yC = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  SC = "0%{opacity:0;} 100%{opacity:1;}",
  _C = "0%{opacity:1;} 100%{opacity:0;}",
  wC = lr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  EC = lr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  xC = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, o] = ym() ? [SC, _C] : [mC(n), yC(n)];
    return {
      animation: t
        ? `${xn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${xn(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  bC = y.memo(({ toast: e, position: t, style: n, children: r }) => {
    let o = e.height
        ? xC(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = y.createElement(gC, { toast: e }),
      a = y.createElement(EC, { ...e.ariaProps }, Al(e.message, e));
    return y.createElement(
      wC,
      { className: e.className, style: { ...o, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: a })
        : y.createElement(y.Fragment, null, i, a)
    );
  });
W2(y.createElement);
var CC = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o,
  }) => {
    let i = y.useCallback(
      (a) => {
        if (a) {
          let l = () => {
            let u = a.getBoundingClientRect().height;
            r(e, u);
          };
          l(),
            new MutationObserver(l).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return y.createElement("div", { ref: i, className: t, style: n }, o);
  },
  OC = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      o = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: ym() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...o,
    };
  },
  kC = Eu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Pa = 16,
  TC = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: o,
    containerStyle: i,
    containerClassName: a,
  }) => {
    let { toasts: l, handlers: u } = nC(n);
    return y.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Pa,
          left: Pa,
          right: Pa,
          bottom: Pa,
          pointerEvents: "none",
          ...i,
        },
        className: a,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause,
      },
      l.map((s) => {
        let f = s.position || t,
          p = u.calculateOffset(s, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          d = OC(f, p);
        return y.createElement(
          CC,
          {
            id: s.id,
            key: s.id,
            onHeightUpdate: u.updateHeight,
            className: s.visible ? kC : "",
            style: d,
          },
          s.type === "custom"
            ? Al(s.message, s)
            : o
            ? o(s)
            : y.createElement(bC, { toast: s, position: f })
        );
      })
    );
  },
  xd = {},
  xu = {},
  it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
function $C(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var PC = function e(t, n) {
  $C(this, e), (this.data = t), (this.text = n.text || t), (this.options = n);
};
it.default = PC;
Object.defineProperty(xu, "__esModule", { value: !0 });
xu.CODE39 = void 0;
var RC = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  AC = it,
  MC = IC(AC);
function IC(e) {
  return e && e.__esModule ? e : { default: e };
}
function LC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jC(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function NC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var DC = (function (e) {
    NC(t, e);
    function t(n, r) {
      return (
        LC(this, t),
        (n = n.toUpperCase()),
        r.mod43 && (n += FC(HC(n))),
        jC(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
      );
    }
    return (
      RC(t, [
        {
          key: "encode",
          value: function () {
            for (var r = ks("*"), o = 0; o < this.data.length; o++)
              r += ks(this.data[o]) + "0";
            return (r += ks("*")), { data: r, text: this.text };
          },
        },
        {
          key: "valid",
          value: function () {
            return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
          },
        },
      ]),
      t
    );
  })(MC.default),
  Sm = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "-",
    ".",
    " ",
    "$",
    "/",
    "+",
    "%",
    "*",
  ],
  zC = [
    20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975,
    23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879,
    30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141,
    17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770,
  ];
function ks(e) {
  return BC(_m(e));
}
function BC(e) {
  return zC[e].toString(2);
}
function FC(e) {
  return Sm[e];
}
function _m(e) {
  return Sm.indexOf(e);
}
function HC(e) {
  for (var t = 0, n = 0; n < e.length; n++) t += _m(e[n]);
  return (t = t % 43), t;
}
xu.CODE39 = DC;
var Yt = {},
  bd = {},
  Mo = {},
  de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
var Ko;
function Ts(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var wm = (de.SET_A = 0),
  Em = (de.SET_B = 1),
  xm = (de.SET_C = 2);
de.SHIFT = 98;
var VC = (de.START_A = 103),
  UC = (de.START_B = 104),
  WC = (de.START_C = 105);
de.MODULO = 103;
de.STOP = 106;
de.FNC1 = 207;
de.SET_BY_CODE =
  ((Ko = {}), Ts(Ko, VC, wm), Ts(Ko, UC, Em), Ts(Ko, WC, xm), Ko);
de.SWAP = { 101: wm, 100: Em, 99: xm };
de.A_START_CHAR = "Ð";
de.B_START_CHAR = "Ñ";
de.C_START_CHAR = "Ò";
de.A_CHARS = "[\0-_È-Ï]";
de.B_CHARS = "[ -È-Ï]";
de.C_CHARS = "(Ï*[0-9]{2}Ï*)";
de.BARS = [
  11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100,
  10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100,
  10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110,
  11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110,
  11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010,
  11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110,
  10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010,
  10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110,
  11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110,
  11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010,
  11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4,
  10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4,
  10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010,
  11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100,
  10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110,
  11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3,
  10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110,
  11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011,
];
Object.defineProperty(Mo, "__esModule", { value: !0 });
var GC = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  XC = it,
  QC = KC(XC),
  ut = de;
function KC(e) {
  return e && e.__esModule ? e : { default: e };
}
function qC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function YC(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function ZC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var JC = (function (e) {
  ZC(t, e);
  function t(n, r) {
    qC(this, t);
    var o = YC(
      this,
      (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.substring(1), r)
    );
    return (
      (o.bytes = n.split("").map(function (i) {
        return i.charCodeAt(0);
      })),
      o
    );
  }
  return (
    GC(
      t,
      [
        {
          key: "valid",
          value: function () {
            return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
          },
        },
        {
          key: "encode",
          value: function () {
            var r = this.bytes,
              o = r.shift() - 105,
              i = ut.SET_BY_CODE[o];
            if (i === void 0)
              throw new RangeError(
                "The encoding does not start with a start character."
              );
            this.shouldEncodeAsEan128() === !0 && r.unshift(ut.FNC1);
            var a = t.next(r, 1, i);
            return {
              text:
                this.text === this.data
                  ? this.text.replace(/[^\x20-\x7E]/g, "")
                  : this.text,
              data:
                t.getBar(o) +
                a.result +
                t.getBar((a.checksum + o) % ut.MODULO) +
                t.getBar(ut.STOP),
            };
          },
        },
        {
          key: "shouldEncodeAsEan128",
          value: function () {
            var r = this.options.ean128 || !1;
            return typeof r == "string" && (r = r.toLowerCase() === "true"), r;
          },
        },
      ],
      [
        {
          key: "getBar",
          value: function (r) {
            return ut.BARS[r] ? ut.BARS[r].toString() : "";
          },
        },
        {
          key: "correctIndex",
          value: function (r, o) {
            if (o === ut.SET_A) {
              var i = r.shift();
              return i < 32 ? i + 64 : i - 32;
            } else
              return o === ut.SET_B
                ? r.shift() - 32
                : (r.shift() - 48) * 10 + r.shift() - 48;
          },
        },
        {
          key: "next",
          value: function (r, o, i) {
            if (!r.length) return { result: "", checksum: 0 };
            var a = void 0,
              l = void 0;
            if (r[0] >= 200) {
              l = r.shift() - 105;
              var u = ut.SWAP[l];
              u !== void 0
                ? (a = t.next(r, o + 1, u))
                : ((i === ut.SET_A || i === ut.SET_B) &&
                    l === ut.SHIFT &&
                    (r[0] =
                      i === ut.SET_A
                        ? r[0] > 95
                          ? r[0] - 96
                          : r[0]
                        : r[0] < 32
                        ? r[0] + 96
                        : r[0]),
                  (a = t.next(r, o + 1, i)));
            } else (l = t.correctIndex(r, i)), (a = t.next(r, o + 1, i));
            var s = t.getBar(l),
              f = l * o;
            return { result: s + a.result, checksum: f + a.checksum };
          },
        },
      ]
    ),
    t
  );
})(QC.default);
Mo.default = JC;
var Cd = {};
Object.defineProperty(Cd, "__esModule", { value: !0 });
var qn = de,
  bm = function (t) {
    return t.match(new RegExp("^" + qn.A_CHARS + "*"))[0].length;
  },
  Cm = function (t) {
    return t.match(new RegExp("^" + qn.B_CHARS + "*"))[0].length;
  },
  Om = function (t) {
    return t.match(new RegExp("^" + qn.C_CHARS + "*"))[0];
  };
function Od(e, t) {
  var n = t ? qn.A_CHARS : qn.B_CHARS,
    r = e.match(new RegExp("^(" + n + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
  if (r) return r[1] + "Ì" + km(e.substring(r[1].length));
  var o = e.match(new RegExp("^" + n + "+"))[0];
  return o.length === e.length
    ? e
    : o + String.fromCharCode(t ? 205 : 206) + Od(e.substring(o.length), !t);
}
function km(e) {
  var t = Om(e),
    n = t.length;
  if (n === e.length) return e;
  e = e.substring(n);
  var r = bm(e) >= Cm(e);
  return t + String.fromCharCode(r ? 206 : 205) + Od(e, r);
}
Cd.default = function (e) {
  var t = void 0,
    n = Om(e).length;
  if (n >= 2) t = qn.C_START_CHAR + km(e);
  else {
    var r = bm(e) > Cm(e);
    t = (r ? qn.A_START_CHAR : qn.B_START_CHAR) + Od(e, r);
  }
  return t.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function (o, i) {
    return "Ë" + i;
  });
};
Object.defineProperty(bd, "__esModule", { value: !0 });
var eO = Mo,
  tO = Tm(eO),
  nO = Cd,
  rO = Tm(nO);
function Tm(e) {
  return e && e.__esModule ? e : { default: e };
}
function oO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $s(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function iO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var aO = (function (e) {
  iO(t, e);
  function t(n, r) {
    if ((oO(this, t), /^[\x00-\x7F\xC8-\xD3]+$/.test(n)))
      var o = $s(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(
          this,
          (0, rO.default)(n),
          r
        )
      );
    else
      var o = $s(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
      );
    return $s(o);
  }
  return t;
})(tO.default);
bd.default = aO;
var kd = {};
Object.defineProperty(kd, "__esModule", { value: !0 });
var lO = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  uO = Mo,
  sO = cO(uO),
  oh = de;
function cO(e) {
  return e && e.__esModule ? e : { default: e };
}
function fO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dO(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function pO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var hO = (function (e) {
  pO(t, e);
  function t(n, r) {
    return (
      fO(this, t),
      dO(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(
          this,
          oh.A_START_CHAR + n,
          r
        )
      )
    );
  }
  return (
    lO(t, [
      {
        key: "valid",
        value: function () {
          return new RegExp("^" + oh.A_CHARS + "+$").test(this.data);
        },
      },
    ]),
    t
  );
})(sO.default);
kd.default = hO;
var Td = {};
Object.defineProperty(Td, "__esModule", { value: !0 });
var vO = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  gO = Mo,
  mO = yO(gO),
  ih = de;
function yO(e) {
  return e && e.__esModule ? e : { default: e };
}
function SO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _O(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function wO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var EO = (function (e) {
  wO(t, e);
  function t(n, r) {
    return (
      SO(this, t),
      _O(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(
          this,
          ih.B_START_CHAR + n,
          r
        )
      )
    );
  }
  return (
    vO(t, [
      {
        key: "valid",
        value: function () {
          return new RegExp("^" + ih.B_CHARS + "+$").test(this.data);
        },
      },
    ]),
    t
  );
})(mO.default);
Td.default = EO;
var $d = {};
Object.defineProperty($d, "__esModule", { value: !0 });
var xO = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  bO = Mo,
  CO = OO(bO),
  ah = de;
function OO(e) {
  return e && e.__esModule ? e : { default: e };
}
function kO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TO(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function $O(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var PO = (function (e) {
  $O(t, e);
  function t(n, r) {
    return (
      kO(this, t),
      TO(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(
          this,
          ah.C_START_CHAR + n,
          r
        )
      )
    );
  }
  return (
    xO(t, [
      {
        key: "valid",
        value: function () {
          return new RegExp("^" + ah.C_CHARS + "+$").test(this.data);
        },
      },
    ]),
    t
  );
})(CO.default);
$d.default = PO;
Object.defineProperty(Yt, "__esModule", { value: !0 });
Yt.CODE128C = Yt.CODE128B = Yt.CODE128A = Yt.CODE128 = void 0;
var RO = bd,
  AO = bu(RO),
  MO = kd,
  IO = bu(MO),
  LO = Td,
  jO = bu(LO),
  NO = $d,
  DO = bu(NO);
function bu(e) {
  return e && e.__esModule ? e : { default: e };
}
Yt.CODE128 = AO.default;
Yt.CODE128A = IO.default;
Yt.CODE128B = jO.default;
Yt.CODE128C = DO.default;
var Je = {},
  Pd = {},
  $t = {};
Object.defineProperty($t, "__esModule", { value: !0 });
$t.SIDE_BIN = "101";
$t.MIDDLE_BIN = "01010";
$t.BINARIES = {
  L: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011",
  ],
  G: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111",
  ],
  R: [
    "1110010",
    "1100110",
    "1101100",
    "1000010",
    "1011100",
    "1001110",
    "1010000",
    "1000100",
    "1001000",
    "1110100",
  ],
  O: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011",
  ],
  E: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111",
  ],
};
$t.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"];
$t.EAN5_STRUCTURE = [
  "GGLLL",
  "GLGLL",
  "GLLGL",
  "GLLLG",
  "LGGLL",
  "LLGGL",
  "LLLGG",
  "LGLGL",
  "LGLLG",
  "LLGLG",
];
$t.EAN13_STRUCTURE = [
  "LLLLLL",
  "LLGLGG",
  "LLGGLG",
  "LLGGGL",
  "LGLLGG",
  "LGGLLG",
  "LGGGLL",
  "LGLGLG",
  "LGLGGL",
  "LGGLGL",
];
var Cu = {},
  Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
var zO = $t,
  BO = function (t, n, r) {
    var o = t
      .split("")
      .map(function (a, l) {
        return zO.BINARIES[n[l]];
      })
      .map(function (a, l) {
        return a ? a[t[l]] : "";
      });
    if (r) {
      var i = t.length - 1;
      o = o.map(function (a, l) {
        return l < i ? a + r : a;
      });
    }
    return o.join("");
  };
Nr.default = BO;
Object.defineProperty(Cu, "__esModule", { value: !0 });
var FO = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Ur = $t,
  HO = Nr,
  lh = $m(HO),
  VO = it,
  UO = $m(VO);
function $m(e) {
  return e && e.__esModule ? e : { default: e };
}
function WO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function GO(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function XO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var QO = (function (e) {
  XO(t, e);
  function t(n, r) {
    WO(this, t);
    var o = GO(
      this,
      (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
    );
    return (
      (o.fontSize =
        !r.flat && r.fontSize > r.width * 10 ? r.width * 10 : r.fontSize),
      (o.guardHeight = r.height + o.fontSize / 2 + r.textMargin),
      o
    );
  }
  return (
    FO(t, [
      {
        key: "encode",
        value: function () {
          return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
        },
      },
      {
        key: "leftText",
        value: function (r, o) {
          return this.text.substr(r, o);
        },
      },
      {
        key: "leftEncode",
        value: function (r, o) {
          return (0, lh.default)(r, o);
        },
      },
      {
        key: "rightText",
        value: function (r, o) {
          return this.text.substr(r, o);
        },
      },
      {
        key: "rightEncode",
        value: function (r, o) {
          return (0, lh.default)(r, o);
        },
      },
      {
        key: "encodeGuarded",
        value: function () {
          var r = { fontSize: this.fontSize },
            o = { height: this.guardHeight };
          return [
            { data: Ur.SIDE_BIN, options: o },
            { data: this.leftEncode(), text: this.leftText(), options: r },
            { data: Ur.MIDDLE_BIN, options: o },
            { data: this.rightEncode(), text: this.rightText(), options: r },
            { data: Ur.SIDE_BIN, options: o },
          ];
        },
      },
      {
        key: "encodeFlat",
        value: function () {
          var r = [
            Ur.SIDE_BIN,
            this.leftEncode(),
            Ur.MIDDLE_BIN,
            this.rightEncode(),
            Ur.SIDE_BIN,
          ];
          return { data: r.join(""), text: this.text };
        },
      },
    ]),
    t
  );
})(UO.default);
Cu.default = QO;
Object.defineProperty(Pd, "__esModule", { value: !0 });
var KO = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  qo = function e(t, n, r) {
    t === null && (t = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(t, n);
    if (o === void 0) {
      var i = Object.getPrototypeOf(t);
      return i === null ? void 0 : e(i, n, r);
    } else {
      if ("value" in o) return o.value;
      var a = o.get;
      return a === void 0 ? void 0 : a.call(r);
    }
  },
  qO = $t,
  YO = Cu,
  ZO = JO(YO);
function JO(e) {
  return e && e.__esModule ? e : { default: e };
}
function ek(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tk(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function nk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var uh = function (t) {
    var n = t
      .substr(0, 12)
      .split("")
      .map(function (r) {
        return +r;
      })
      .reduce(function (r, o, i) {
        return i % 2 ? r + o * 3 : r + o;
      }, 0);
    return (10 - (n % 10)) % 10;
  },
  rk = (function (e) {
    nk(t, e);
    function t(n, r) {
      ek(this, t), n.search(/^[0-9]{12}$/) !== -1 && (n += uh(n));
      var o = tk(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
      );
      return (o.lastChar = r.lastChar), o;
    }
    return (
      KO(t, [
        {
          key: "valid",
          value: function () {
            return (
              this.data.search(/^[0-9]{13}$/) !== -1 &&
              +this.data[12] === uh(this.data)
            );
          },
        },
        {
          key: "leftText",
          value: function () {
            return qo(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "leftText",
              this
            ).call(this, 1, 6);
          },
        },
        {
          key: "leftEncode",
          value: function () {
            var r = this.data.substr(1, 6),
              o = qO.EAN13_STRUCTURE[this.data[0]];
            return qo(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "leftEncode",
              this
            ).call(this, r, o);
          },
        },
        {
          key: "rightText",
          value: function () {
            return qo(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "rightText",
              this
            ).call(this, 7, 6);
          },
        },
        {
          key: "rightEncode",
          value: function () {
            var r = this.data.substr(7, 6);
            return qo(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "rightEncode",
              this
            ).call(this, r, "RRRRRR");
          },
        },
        {
          key: "encodeGuarded",
          value: function () {
            var r = qo(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "encodeGuarded",
              this
            ).call(this);
            return (
              this.options.displayValue &&
                (r.unshift({
                  data: "000000000000",
                  text: this.text.substr(0, 1),
                  options: { textAlign: "left", fontSize: this.fontSize },
                }),
                this.options.lastChar &&
                  (r.push({ data: "00" }),
                  r.push({
                    data: "00000",
                    text: this.options.lastChar,
                    options: { fontSize: this.fontSize },
                  }))),
              r
            );
          },
        },
      ]),
      t
    );
  })(ZO.default);
Pd.default = rk;
var Rd = {};
Object.defineProperty(Rd, "__esModule", { value: !0 });
var ok = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Ra = function e(t, n, r) {
    t === null && (t = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(t, n);
    if (o === void 0) {
      var i = Object.getPrototypeOf(t);
      return i === null ? void 0 : e(i, n, r);
    } else {
      if ("value" in o) return o.value;
      var a = o.get;
      return a === void 0 ? void 0 : a.call(r);
    }
  },
  ik = Cu,
  ak = lk(ik);
function lk(e) {
  return e && e.__esModule ? e : { default: e };
}
function uk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sk(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function ck(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var sh = function (t) {
    var n = t
      .substr(0, 7)
      .split("")
      .map(function (r) {
        return +r;
      })
      .reduce(function (r, o, i) {
        return i % 2 ? r + o : r + o * 3;
      }, 0);
    return (10 - (n % 10)) % 10;
  },
  fk = (function (e) {
    ck(t, e);
    function t(n, r) {
      return (
        uk(this, t),
        n.search(/^[0-9]{7}$/) !== -1 && (n += sh(n)),
        sk(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
      );
    }
    return (
      ok(t, [
        {
          key: "valid",
          value: function () {
            return (
              this.data.search(/^[0-9]{8}$/) !== -1 &&
              +this.data[7] === sh(this.data)
            );
          },
        },
        {
          key: "leftText",
          value: function () {
            return Ra(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "leftText",
              this
            ).call(this, 0, 4);
          },
        },
        {
          key: "leftEncode",
          value: function () {
            var r = this.data.substr(0, 4);
            return Ra(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "leftEncode",
              this
            ).call(this, r, "LLLL");
          },
        },
        {
          key: "rightText",
          value: function () {
            return Ra(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "rightText",
              this
            ).call(this, 4, 4);
          },
        },
        {
          key: "rightEncode",
          value: function () {
            var r = this.data.substr(4, 4);
            return Ra(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "rightEncode",
              this
            ).call(this, r, "RRRR");
          },
        },
      ]),
      t
    );
  })(ak.default);
Rd.default = fk;
var Ad = {};
Object.defineProperty(Ad, "__esModule", { value: !0 });
var dk = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  pk = $t,
  hk = Nr,
  vk = Pm(hk),
  gk = it,
  mk = Pm(gk);
function Pm(e) {
  return e && e.__esModule ? e : { default: e };
}
function yk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sk(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function _k(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var wk = function (t) {
    var n = t
      .split("")
      .map(function (r) {
        return +r;
      })
      .reduce(function (r, o, i) {
        return i % 2 ? r + o * 9 : r + o * 3;
      }, 0);
    return n % 10;
  },
  Ek = (function (e) {
    _k(t, e);
    function t(n, r) {
      return (
        yk(this, t),
        Sk(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
      );
    }
    return (
      dk(t, [
        {
          key: "valid",
          value: function () {
            return this.data.search(/^[0-9]{5}$/) !== -1;
          },
        },
        {
          key: "encode",
          value: function () {
            var r = pk.EAN5_STRUCTURE[wk(this.data)];
            return {
              data: "1011" + (0, vk.default)(this.data, r, "01"),
              text: this.text,
            };
          },
        },
      ]),
      t
    );
  })(mk.default);
Ad.default = Ek;
var Md = {};
Object.defineProperty(Md, "__esModule", { value: !0 });
var xk = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  bk = $t,
  Ck = Nr,
  Ok = Rm(Ck),
  kk = it,
  Tk = Rm(kk);
function Rm(e) {
  return e && e.__esModule ? e : { default: e };
}
function $k(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pk(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Rk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ak = (function (e) {
  Rk(t, e);
  function t(n, r) {
    return (
      $k(this, t),
      Pk(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
    );
  }
  return (
    xk(t, [
      {
        key: "valid",
        value: function () {
          return this.data.search(/^[0-9]{2}$/) !== -1;
        },
      },
      {
        key: "encode",
        value: function () {
          var r = bk.EAN2_STRUCTURE[parseInt(this.data) % 4];
          return {
            data: "1011" + (0, Ok.default)(this.data, r, "01"),
            text: this.text,
          };
        },
      },
    ]),
    t
  );
})(Tk.default);
Md.default = Ak;
var Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
var Mk = (function () {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
})();
Ki.checksum = uf;
var Ik = Nr,
  Wr = Am(Ik),
  Lk = it,
  jk = Am(Lk);
function Am(e) {
  return e && e.__esModule ? e : { default: e };
}
function Nk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dk(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function zk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Bk = (function (e) {
  zk(t, e);
  function t(n, r) {
    Nk(this, t), n.search(/^[0-9]{11}$/) !== -1 && (n += uf(n));
    var o = Dk(
      this,
      (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
    );
    return (
      (o.displayValue = r.displayValue),
      r.fontSize > r.width * 10
        ? (o.fontSize = r.width * 10)
        : (o.fontSize = r.fontSize),
      (o.guardHeight = r.height + o.fontSize / 2 + r.textMargin),
      o
    );
  }
  return (
    Mk(t, [
      {
        key: "valid",
        value: function () {
          return (
            this.data.search(/^[0-9]{12}$/) !== -1 &&
            this.data[11] == uf(this.data)
          );
        },
      },
      {
        key: "encode",
        value: function () {
          return this.options.flat
            ? this.flatEncoding()
            : this.guardedEncoding();
        },
      },
      {
        key: "flatEncoding",
        value: function () {
          var r = "";
          return (
            (r += "101"),
            (r += (0, Wr.default)(this.data.substr(0, 6), "LLLLLL")),
            (r += "01010"),
            (r += (0, Wr.default)(this.data.substr(6, 6), "RRRRRR")),
            (r += "101"),
            { data: r, text: this.text }
          );
        },
      },
      {
        key: "guardedEncoding",
        value: function () {
          var r = [];
          return (
            this.displayValue &&
              r.push({
                data: "00000000",
                text: this.text.substr(0, 1),
                options: { textAlign: "left", fontSize: this.fontSize },
              }),
            r.push({
              data: "101" + (0, Wr.default)(this.data[0], "L"),
              options: { height: this.guardHeight },
            }),
            r.push({
              data: (0, Wr.default)(this.data.substr(1, 5), "LLLLL"),
              text: this.text.substr(1, 5),
              options: { fontSize: this.fontSize },
            }),
            r.push({ data: "01010", options: { height: this.guardHeight } }),
            r.push({
              data: (0, Wr.default)(this.data.substr(6, 5), "RRRRR"),
              text: this.text.substr(6, 5),
              options: { fontSize: this.fontSize },
            }),
            r.push({
              data: (0, Wr.default)(this.data[11], "R") + "101",
              options: { height: this.guardHeight },
            }),
            this.displayValue &&
              r.push({
                data: "00000000",
                text: this.text.substr(11, 1),
                options: { textAlign: "right", fontSize: this.fontSize },
              }),
            r
          );
        },
      },
    ]),
    t
  );
})(jk.default);
function uf(e) {
  var t = 0,
    n;
  for (n = 1; n < 11; n += 2) t += parseInt(e[n]);
  for (n = 0; n < 11; n += 2) t += parseInt(e[n]) * 3;
  return (10 - (t % 10)) % 10;
}
Ki.default = Bk;
var Id = {};
Object.defineProperty(Id, "__esModule", { value: !0 });
var Fk = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Hk = Nr,
  Vk = Mm(Hk),
  Uk = it,
  Wk = Mm(Uk),
  Gk = Ki;
function Mm(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ps(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Qk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Kk = [
    "XX00000XXX",
    "XX10000XXX",
    "XX20000XXX",
    "XXX00000XX",
    "XXXX00000X",
    "XXXXX00005",
    "XXXXX00006",
    "XXXXX00007",
    "XXXXX00008",
    "XXXXX00009",
  ],
  qk = [
    ["EEEOOO", "OOOEEE"],
    ["EEOEOO", "OOEOEE"],
    ["EEOOEO", "OOEEOE"],
    ["EEOOOE", "OOEEEO"],
    ["EOEEOO", "OEOOEE"],
    ["EOOEEO", "OEEOOE"],
    ["EOOOEE", "OEEEOO"],
    ["EOEOEO", "OEOEOE"],
    ["EOEOOE", "OEOEEO"],
    ["EOOEOE", "OEEOEO"],
  ],
  Yk = (function (e) {
    Qk(t, e);
    function t(n, r) {
      Xk(this, t);
      var o = Ps(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
      );
      if (((o.isValid = !1), n.search(/^[0-9]{6}$/) !== -1))
        (o.middleDigits = n),
          (o.upcA = ch(n, "0")),
          (o.text = r.text || "" + o.upcA[0] + n + o.upcA[o.upcA.length - 1]),
          (o.isValid = !0);
      else if (n.search(/^[01][0-9]{7}$/) !== -1)
        if (
          ((o.middleDigits = n.substring(1, n.length - 1)),
          (o.upcA = ch(o.middleDigits, n[0])),
          o.upcA[o.upcA.length - 1] === n[n.length - 1])
        )
          o.isValid = !0;
        else return Ps(o);
      else return Ps(o);
      return (
        (o.displayValue = r.displayValue),
        r.fontSize > r.width * 10
          ? (o.fontSize = r.width * 10)
          : (o.fontSize = r.fontSize),
        (o.guardHeight = r.height + o.fontSize / 2 + r.textMargin),
        o
      );
    }
    return (
      Fk(t, [
        {
          key: "valid",
          value: function () {
            return this.isValid;
          },
        },
        {
          key: "encode",
          value: function () {
            return this.options.flat
              ? this.flatEncoding()
              : this.guardedEncoding();
          },
        },
        {
          key: "flatEncoding",
          value: function () {
            var r = "";
            return (
              (r += "101"),
              (r += this.encodeMiddleDigits()),
              (r += "010101"),
              { data: r, text: this.text }
            );
          },
        },
        {
          key: "guardedEncoding",
          value: function () {
            var r = [];
            return (
              this.displayValue &&
                r.push({
                  data: "00000000",
                  text: this.text[0],
                  options: { textAlign: "left", fontSize: this.fontSize },
                }),
              r.push({ data: "101", options: { height: this.guardHeight } }),
              r.push({
                data: this.encodeMiddleDigits(),
                text: this.text.substring(1, 7),
                options: { fontSize: this.fontSize },
              }),
              r.push({ data: "010101", options: { height: this.guardHeight } }),
              this.displayValue &&
                r.push({
                  data: "00000000",
                  text: this.text[7],
                  options: { textAlign: "right", fontSize: this.fontSize },
                }),
              r
            );
          },
        },
        {
          key: "encodeMiddleDigits",
          value: function () {
            var r = this.upcA[0],
              o = this.upcA[this.upcA.length - 1],
              i = qk[parseInt(o)][parseInt(r)];
            return (0, Vk.default)(this.middleDigits, i);
          },
        },
      ]),
      t
    );
  })(Wk.default);
function ch(e, t) {
  for (
    var n = parseInt(e[e.length - 1]), r = Kk[n], o = "", i = 0, a = 0;
    a < r.length;
    a++
  ) {
    var l = r[a];
    l === "X" ? (o += e[i++]) : (o += l);
  }
  return (o = "" + t + o), "" + o + (0, Gk.checksum)(o);
}
Id.default = Yk;
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.UPCE = Je.UPC = Je.EAN2 = Je.EAN5 = Je.EAN8 = Je.EAN13 = void 0;
var Zk = Pd,
  Jk = Io(Zk),
  eT = Rd,
  tT = Io(eT),
  nT = Ad,
  rT = Io(nT),
  oT = Md,
  iT = Io(oT),
  aT = Ki,
  lT = Io(aT),
  uT = Id,
  sT = Io(uT);
function Io(e) {
  return e && e.__esModule ? e : { default: e };
}
Je.EAN13 = Jk.default;
Je.EAN8 = tT.default;
Je.EAN5 = rT.default;
Je.EAN2 = iT.default;
Je.UPC = lT.default;
Je.UPCE = sT.default;
var ko = {},
  Ou = {},
  qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.START_BIN = "1010";
qi.END_BIN = "11101";
qi.BINARIES = [
  "00110",
  "10001",
  "01001",
  "11000",
  "00101",
  "10100",
  "01100",
  "00011",
  "10010",
  "01010",
];
Object.defineProperty(Ou, "__esModule", { value: !0 });
var cT = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Aa = qi,
  fT = it,
  dT = pT(fT);
function pT(e) {
  return e && e.__esModule ? e : { default: e };
}
function hT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vT(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function gT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var mT = (function (e) {
  gT(t, e);
  function t() {
    return (
      hT(this, t),
      vT(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    cT(t, [
      {
        key: "valid",
        value: function () {
          return this.data.search(/^([0-9]{2})+$/) !== -1;
        },
      },
      {
        key: "encode",
        value: function () {
          var r = this,
            o = this.data
              .match(/.{2}/g)
              .map(function (i) {
                return r.encodePair(i);
              })
              .join("");
          return { data: Aa.START_BIN + o + Aa.END_BIN, text: this.text };
        },
      },
      {
        key: "encodePair",
        value: function (r) {
          var o = Aa.BINARIES[r[1]];
          return Aa.BINARIES[r[0]]
            .split("")
            .map(function (i, a) {
              return (i === "1" ? "111" : "1") + (o[a] === "1" ? "000" : "0");
            })
            .join("");
        },
      },
    ]),
    t
  );
})(dT.default);
Ou.default = mT;
var Ld = {};
Object.defineProperty(Ld, "__esModule", { value: !0 });
var yT = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  ST = Ou,
  _T = wT(ST);
function wT(e) {
  return e && e.__esModule ? e : { default: e };
}
function ET(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xT(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function bT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var fh = function (t) {
    var n = t
      .substr(0, 13)
      .split("")
      .map(function (r) {
        return parseInt(r, 10);
      })
      .reduce(function (r, o, i) {
        return r + o * (3 - (i % 2) * 2);
      }, 0);
    return Math.ceil(n / 10) * 10 - n;
  },
  CT = (function (e) {
    bT(t, e);
    function t(n, r) {
      return (
        ET(this, t),
        n.search(/^[0-9]{13}$/) !== -1 && (n += fh(n)),
        xT(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
      );
    }
    return (
      yT(t, [
        {
          key: "valid",
          value: function () {
            return (
              this.data.search(/^[0-9]{14}$/) !== -1 &&
              +this.data[13] === fh(this.data)
            );
          },
        },
      ]),
      t
    );
  })(_T.default);
Ld.default = CT;
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.ITF14 = ko.ITF = void 0;
var OT = Ou,
  kT = Im(OT),
  TT = Ld,
  $T = Im(TT);
function Im(e) {
  return e && e.__esModule ? e : { default: e };
}
ko.ITF = kT.default;
ko.ITF14 = $T.default;
var Et = {},
  Dr = {};
Object.defineProperty(Dr, "__esModule", { value: !0 });
var PT = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  RT = it,
  AT = MT(RT);
function MT(e) {
  return e && e.__esModule ? e : { default: e };
}
function IT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function LT(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function jT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var NT = (function (e) {
  jT(t, e);
  function t(n, r) {
    return (
      IT(this, t),
      LT(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
    );
  }
  return (
    PT(t, [
      {
        key: "encode",
        value: function () {
          for (var r = "110", o = 0; o < this.data.length; o++) {
            var i = parseInt(this.data[o]),
              a = i.toString(2);
            a = DT(a, 4 - a.length);
            for (var l = 0; l < a.length; l++) r += a[l] == "0" ? "100" : "110";
          }
          return (r += "1001"), { data: r, text: this.text };
        },
      },
      {
        key: "valid",
        value: function () {
          return this.data.search(/^[0-9]+$/) !== -1;
        },
      },
    ]),
    t
  );
})(AT.default);
function DT(e, t) {
  for (var n = 0; n < t; n++) e = "0" + e;
  return e;
}
Dr.default = NT;
var jd = {},
  zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.mod10 = zT;
zr.mod11 = BT;
function zT(e) {
  for (var t = 0, n = 0; n < e.length; n++) {
    var r = parseInt(e[n]);
    (n + e.length) % 2 === 0
      ? (t += r)
      : (t += ((r * 2) % 10) + Math.floor((r * 2) / 10));
  }
  return (10 - (t % 10)) % 10;
}
function BT(e) {
  for (var t = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < e.length; r++) {
    var o = parseInt(e[e.length - 1 - r]);
    t += n[r % n.length] * o;
  }
  return (11 - (t % 11)) % 11;
}
Object.defineProperty(jd, "__esModule", { value: !0 });
var FT = Dr,
  HT = UT(FT),
  VT = zr;
function UT(e) {
  return e && e.__esModule ? e : { default: e };
}
function WT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function GT(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function XT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var QT = (function (e) {
  XT(t, e);
  function t(n, r) {
    return (
      WT(this, t),
      GT(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(
          this,
          n + (0, VT.mod10)(n),
          r
        )
      )
    );
  }
  return t;
})(HT.default);
jd.default = QT;
var Nd = {};
Object.defineProperty(Nd, "__esModule", { value: !0 });
var KT = Dr,
  qT = ZT(KT),
  YT = zr;
function ZT(e) {
  return e && e.__esModule ? e : { default: e };
}
function JT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e$(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function t$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var n$ = (function (e) {
  t$(t, e);
  function t(n, r) {
    return (
      JT(this, t),
      e$(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(
          this,
          n + (0, YT.mod11)(n),
          r
        )
      )
    );
  }
  return t;
})(qT.default);
Nd.default = n$;
var Dd = {};
Object.defineProperty(Dd, "__esModule", { value: !0 });
var r$ = Dr,
  o$ = i$(r$),
  dh = zr;
function i$(e) {
  return e && e.__esModule ? e : { default: e };
}
function a$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function l$(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function u$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var s$ = (function (e) {
  u$(t, e);
  function t(n, r) {
    return (
      a$(this, t),
      (n += (0, dh.mod10)(n)),
      (n += (0, dh.mod10)(n)),
      l$(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
    );
  }
  return t;
})(o$.default);
Dd.default = s$;
var zd = {};
Object.defineProperty(zd, "__esModule", { value: !0 });
var c$ = Dr,
  f$ = d$(c$),
  ph = zr;
function d$(e) {
  return e && e.__esModule ? e : { default: e };
}
function p$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h$(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function v$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var g$ = (function (e) {
  v$(t, e);
  function t(n, r) {
    return (
      p$(this, t),
      (n += (0, ph.mod11)(n)),
      (n += (0, ph.mod10)(n)),
      h$(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
    );
  }
  return t;
})(f$.default);
zd.default = g$;
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.MSI1110 = Et.MSI1010 = Et.MSI11 = Et.MSI10 = Et.MSI = void 0;
var m$ = Dr,
  y$ = Yi(m$),
  S$ = jd,
  _$ = Yi(S$),
  w$ = Nd,
  E$ = Yi(w$),
  x$ = Dd,
  b$ = Yi(x$),
  C$ = zd,
  O$ = Yi(C$);
function Yi(e) {
  return e && e.__esModule ? e : { default: e };
}
Et.MSI = y$.default;
Et.MSI10 = _$.default;
Et.MSI11 = E$.default;
Et.MSI1010 = b$.default;
Et.MSI1110 = O$.default;
var ku = {};
Object.defineProperty(ku, "__esModule", { value: !0 });
ku.pharmacode = void 0;
var k$ = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  T$ = it,
  $$ = P$(T$);
function P$(e) {
  return e && e.__esModule ? e : { default: e };
}
function R$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A$(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function M$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var I$ = (function (e) {
  M$(t, e);
  function t(n, r) {
    R$(this, t);
    var o = A$(
      this,
      (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
    );
    return (o.number = parseInt(n, 10)), o;
  }
  return (
    k$(t, [
      {
        key: "encode",
        value: function () {
          for (var r = this.number, o = ""; !isNaN(r) && r != 0; )
            r % 2 === 0
              ? ((o = "11100" + o), (r = (r - 2) / 2))
              : ((o = "100" + o), (r = (r - 1) / 2));
          return (o = o.slice(0, -2)), { data: o, text: this.text };
        },
      },
      {
        key: "valid",
        value: function () {
          return this.number >= 3 && this.number <= 131070;
        },
      },
    ]),
    t
  );
})($$.default);
ku.pharmacode = I$;
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu.codabar = void 0;
var L$ = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  j$ = it,
  N$ = D$(j$);
function D$(e) {
  return e && e.__esModule ? e : { default: e };
}
function z$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function B$(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function F$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var H$ = (function (e) {
  F$(t, e);
  function t(n, r) {
    z$(this, t), n.search(/^[0-9\-\$\:\.\+\/]+$/) === 0 && (n = "A" + n + "A");
    var o = B$(
      this,
      (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.toUpperCase(), r)
    );
    return (o.text = o.options.text || o.text.replace(/[A-D]/g, "")), o;
  }
  return (
    L$(t, [
      {
        key: "valid",
        value: function () {
          return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
        },
      },
      {
        key: "encode",
        value: function () {
          for (
            var r = [], o = this.getEncodings(), i = 0;
            i < this.data.length;
            i++
          )
            r.push(o[this.data.charAt(i)]),
              i !== this.data.length - 1 && r.push("0");
          return { text: this.text, data: r.join("") };
        },
      },
      {
        key: "getEncodings",
        value: function () {
          return {
            0: "101010011",
            1: "101011001",
            2: "101001011",
            3: "110010101",
            4: "101101001",
            5: "110101001",
            6: "100101011",
            7: "100101101",
            8: "100110101",
            9: "110100101",
            "-": "101001101",
            $: "101100101",
            ":": "1101011011",
            "/": "1101101011",
            ".": "1101101101",
            "+": "1011011011",
            A: "1011001001",
            B: "1001001011",
            C: "1010010011",
            D: "1010011001",
          };
        },
      },
    ]),
    t
  );
})(N$.default);
Tu.codabar = H$;
var $u = {};
Object.defineProperty($u, "__esModule", { value: !0 });
$u.GenericBarcode = void 0;
var V$ = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  U$ = it,
  W$ = G$(U$);
function G$(e) {
  return e && e.__esModule ? e : { default: e };
}
function X$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Q$(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function K$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var q$ = (function (e) {
  K$(t, e);
  function t(n, r) {
    return (
      X$(this, t),
      Q$(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
    );
  }
  return (
    V$(t, [
      {
        key: "encode",
        value: function () {
          return {
            data: "10101010101010101010101010101010101010101",
            text: this.text,
          };
        },
      },
      {
        key: "valid",
        value: function () {
          return !0;
        },
      },
    ]),
    t
  );
})(W$.default);
$u.GenericBarcode = q$;
Object.defineProperty(xd, "__esModule", { value: !0 });
var Y$ = xu,
  Ma = Yt,
  Gr = Je,
  hh = ko,
  Yo = Et,
  Z$ = ku,
  J$ = Tu,
  eP = $u;
xd.default = {
  CODE39: Y$.CODE39,
  CODE128: Ma.CODE128,
  CODE128A: Ma.CODE128A,
  CODE128B: Ma.CODE128B,
  CODE128C: Ma.CODE128C,
  EAN13: Gr.EAN13,
  EAN8: Gr.EAN8,
  EAN5: Gr.EAN5,
  EAN2: Gr.EAN2,
  UPC: Gr.UPC,
  UPCE: Gr.UPCE,
  ITF14: hh.ITF14,
  ITF: hh.ITF,
  MSI: Yo.MSI,
  MSI10: Yo.MSI10,
  MSI11: Yo.MSI11,
  MSI1010: Yo.MSI1010,
  MSI1110: Yo.MSI1110,
  pharmacode: Z$.pharmacode,
  codabar: J$.codabar,
  GenericBarcode: eP.GenericBarcode,
};
var Lo = {};
Object.defineProperty(Lo, "__esModule", { value: !0 });
var tP =
  Object.assign ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  };
Lo.default = function (e, t) {
  return tP({}, e, t);
};
var Bd = {};
Object.defineProperty(Bd, "__esModule", { value: !0 });
Bd.default = nP;
function nP(e) {
  var t = [];
  function n(r) {
    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n(r[o]);
    else (r.text = r.text || ""), (r.data = r.data || ""), t.push(r);
  }
  return n(e), t;
}
var Fd = {};
Object.defineProperty(Fd, "__esModule", { value: !0 });
Fd.default = rP;
function rP(e) {
  return (
    (e.marginTop = e.marginTop || e.margin),
    (e.marginBottom = e.marginBottom || e.margin),
    (e.marginRight = e.marginRight || e.margin),
    (e.marginLeft = e.marginLeft || e.margin),
    e
  );
}
var Hd = {},
  Vd = {},
  Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
Pu.default = oP;
function oP(e) {
  var t = [
    "width",
    "height",
    "textMargin",
    "fontSize",
    "margin",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
  ];
  for (var n in t)
    t.hasOwnProperty(n) &&
      ((n = t[n]), typeof e[n] == "string" && (e[n] = parseInt(e[n], 10)));
  return (
    typeof e.displayValue == "string" &&
      (e.displayValue = e.displayValue != "false"),
    e
  );
}
var Ru = {};
Object.defineProperty(Ru, "__esModule", { value: !0 });
var iP = {
  width: 2,
  height: 100,
  format: "auto",
  displayValue: !0,
  fontOptions: "",
  font: "monospace",
  text: void 0,
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: void 0,
  marginBottom: void 0,
  marginLeft: void 0,
  marginRight: void 0,
  valid: function () {},
};
Ru.default = iP;
Object.defineProperty(Vd, "__esModule", { value: !0 });
var aP = Pu,
  lP = Lm(aP),
  uP = Ru,
  vh = Lm(uP);
function Lm(e) {
  return e && e.__esModule ? e : { default: e };
}
function sP(e) {
  var t = {};
  for (var n in vh.default)
    vh.default.hasOwnProperty(n) &&
      (e.hasAttribute("jsbarcode-" + n.toLowerCase()) &&
        (t[n] = e.getAttribute("jsbarcode-" + n.toLowerCase())),
      e.hasAttribute("data-" + n.toLowerCase()) &&
        (t[n] = e.getAttribute("data-" + n.toLowerCase())));
  return (
    (t.value =
      e.getAttribute("jsbarcode-value") || e.getAttribute("data-value")),
    (t = (0, lP.default)(t)),
    t
  );
}
Vd.default = sP;
var Ud = {},
  Wd = {},
  ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.getTotalWidthOfEncodings =
  ft.calculateEncodingAttributes =
  ft.getBarcodePadding =
  ft.getEncodingHeight =
  ft.getMaximumHeightOfEncodings =
    void 0;
var cP = Lo,
  fP = dP(cP);
function dP(e) {
  return e && e.__esModule ? e : { default: e };
}
function jm(e, t) {
  return (
    t.height +
    (t.displayValue && e.text.length > 0 ? t.fontSize + t.textMargin : 0) +
    t.marginTop +
    t.marginBottom
  );
}
function Nm(e, t, n) {
  if (n.displayValue && t < e) {
    if (n.textAlign == "center") return Math.floor((e - t) / 2);
    if (n.textAlign == "left") return 0;
    if (n.textAlign == "right") return Math.floor(e - t);
  }
  return 0;
}
function pP(e, t, n) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r],
      i = (0, fP.default)(t, o.options),
      a;
    i.displayValue ? (a = gP(o.text, i, n)) : (a = 0);
    var l = o.data.length * i.width;
    (o.width = Math.ceil(Math.max(a, l))),
      (o.height = jm(o, i)),
      (o.barcodePadding = Nm(a, l, i));
  }
}
function hP(e) {
  for (var t = 0, n = 0; n < e.length; n++) t += e[n].width;
  return t;
}
function vP(e) {
  for (var t = 0, n = 0; n < e.length; n++)
    e[n].height > t && (t = e[n].height);
  return t;
}
function gP(e, t, n) {
  var r;
  if (n) r = n;
  else if (typeof document < "u")
    r = document.createElement("canvas").getContext("2d");
  else return 0;
  r.font = t.fontOptions + " " + t.fontSize + "px " + t.font;
  var o = r.measureText(e);
  if (!o) return 0;
  var i = o.width;
  return i;
}
ft.getMaximumHeightOfEncodings = vP;
ft.getEncodingHeight = jm;
ft.getBarcodePadding = Nm;
ft.calculateEncodingAttributes = pP;
ft.getTotalWidthOfEncodings = hP;
Object.defineProperty(Wd, "__esModule", { value: !0 });
var mP = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  yP = Lo,
  SP = _P(yP),
  Rs = ft;
function _P(e) {
  return e && e.__esModule ? e : { default: e };
}
function wP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var EP = (function () {
  function e(t, n, r) {
    wP(this, e), (this.canvas = t), (this.encodings = n), (this.options = r);
  }
  return (
    mP(e, [
      {
        key: "render",
        value: function () {
          if (!this.canvas.getContext)
            throw new Error("The browser does not support canvas.");
          this.prepareCanvas();
          for (var n = 0; n < this.encodings.length; n++) {
            var r = (0, SP.default)(this.options, this.encodings[n].options);
            this.drawCanvasBarcode(r, this.encodings[n]),
              this.drawCanvasText(r, this.encodings[n]),
              this.moveCanvasDrawing(this.encodings[n]);
          }
          this.restoreCanvas();
        },
      },
      {
        key: "prepareCanvas",
        value: function () {
          var n = this.canvas.getContext("2d");
          n.save(),
            (0, Rs.calculateEncodingAttributes)(
              this.encodings,
              this.options,
              n
            );
          var r = (0, Rs.getTotalWidthOfEncodings)(this.encodings),
            o = (0, Rs.getMaximumHeightOfEncodings)(this.encodings);
          (this.canvas.width =
            r + this.options.marginLeft + this.options.marginRight),
            (this.canvas.height = o),
            n.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.options.background &&
              ((n.fillStyle = this.options.background),
              n.fillRect(0, 0, this.canvas.width, this.canvas.height)),
            n.translate(this.options.marginLeft, 0);
        },
      },
      {
        key: "drawCanvasBarcode",
        value: function (n, r) {
          var o = this.canvas.getContext("2d"),
            i = r.data,
            a;
          n.textPosition == "top"
            ? (a = n.marginTop + n.fontSize + n.textMargin)
            : (a = n.marginTop),
            (o.fillStyle = n.lineColor);
          for (var l = 0; l < i.length; l++) {
            var u = l * n.width + r.barcodePadding;
            i[l] === "1"
              ? o.fillRect(u, a, n.width, n.height)
              : i[l] && o.fillRect(u, a, n.width, n.height * i[l]);
          }
        },
      },
      {
        key: "drawCanvasText",
        value: function (n, r) {
          var o = this.canvas.getContext("2d"),
            i = n.fontOptions + " " + n.fontSize + "px " + n.font;
          if (n.displayValue) {
            var a, l;
            n.textPosition == "top"
              ? (l = n.marginTop + n.fontSize - n.textMargin)
              : (l = n.height + n.textMargin + n.marginTop + n.fontSize),
              (o.font = i),
              n.textAlign == "left" || r.barcodePadding > 0
                ? ((a = 0), (o.textAlign = "left"))
                : n.textAlign == "right"
                ? ((a = r.width - 1), (o.textAlign = "right"))
                : ((a = r.width / 2), (o.textAlign = "center")),
              o.fillText(r.text, a, l);
          }
        },
      },
      {
        key: "moveCanvasDrawing",
        value: function (n) {
          var r = this.canvas.getContext("2d");
          r.translate(n.width, 0);
        },
      },
      {
        key: "restoreCanvas",
        value: function () {
          var n = this.canvas.getContext("2d");
          n.restore();
        },
      },
    ]),
    e
  );
})();
Wd.default = EP;
var Gd = {};
Object.defineProperty(Gd, "__esModule", { value: !0 });
var xP = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  bP = Lo,
  CP = OP(bP),
  As = ft;
function OP(e) {
  return e && e.__esModule ? e : { default: e };
}
function kP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var Ia = "http://www.w3.org/2000/svg",
  TP = (function () {
    function e(t, n, r) {
      kP(this, e),
        (this.svg = t),
        (this.encodings = n),
        (this.options = r),
        (this.document = r.xmlDocument || document);
    }
    return (
      xP(e, [
        {
          key: "render",
          value: function () {
            var n = this.options.marginLeft;
            this.prepareSVG();
            for (var r = 0; r < this.encodings.length; r++) {
              var o = this.encodings[r],
                i = (0, CP.default)(this.options, o.options),
                a = this.createGroup(n, i.marginTop, this.svg);
              this.setGroupOptions(a, i),
                this.drawSvgBarcode(a, i, o),
                this.drawSVGText(a, i, o),
                (n += o.width);
            }
          },
        },
        {
          key: "prepareSVG",
          value: function () {
            for (; this.svg.firstChild; )
              this.svg.removeChild(this.svg.firstChild);
            (0, As.calculateEncodingAttributes)(this.encodings, this.options);
            var n = (0, As.getTotalWidthOfEncodings)(this.encodings),
              r = (0, As.getMaximumHeightOfEncodings)(this.encodings),
              o = n + this.options.marginLeft + this.options.marginRight;
            this.setSvgAttributes(o, r),
              this.options.background &&
                this.drawRect(0, 0, o, r, this.svg).setAttribute(
                  "style",
                  "fill:" + this.options.background + ";"
                );
          },
        },
        {
          key: "drawSvgBarcode",
          value: function (n, r, o) {
            var i = o.data,
              a;
            r.textPosition == "top" ? (a = r.fontSize + r.textMargin) : (a = 0);
            for (var l = 0, u = 0, s = 0; s < i.length; s++)
              (u = s * r.width + o.barcodePadding),
                i[s] === "1"
                  ? l++
                  : l > 0 &&
                    (this.drawRect(
                      u - r.width * l,
                      a,
                      r.width * l,
                      r.height,
                      n
                    ),
                    (l = 0));
            l > 0 &&
              this.drawRect(u - r.width * (l - 1), a, r.width * l, r.height, n);
          },
        },
        {
          key: "drawSVGText",
          value: function (n, r, o) {
            var i = this.document.createElementNS(Ia, "text");
            if (r.displayValue) {
              var a, l;
              i.setAttribute(
                "style",
                "font:" + r.fontOptions + " " + r.fontSize + "px " + r.font
              ),
                r.textPosition == "top"
                  ? (l = r.fontSize - r.textMargin)
                  : (l = r.height + r.textMargin + r.fontSize),
                r.textAlign == "left" || o.barcodePadding > 0
                  ? ((a = 0), i.setAttribute("text-anchor", "start"))
                  : r.textAlign == "right"
                  ? ((a = o.width - 1), i.setAttribute("text-anchor", "end"))
                  : ((a = o.width / 2),
                    i.setAttribute("text-anchor", "middle")),
                i.setAttribute("x", a),
                i.setAttribute("y", l),
                i.appendChild(this.document.createTextNode(o.text)),
                n.appendChild(i);
            }
          },
        },
        {
          key: "setSvgAttributes",
          value: function (n, r) {
            var o = this.svg;
            o.setAttribute("width", n + "px"),
              o.setAttribute("height", r + "px"),
              o.setAttribute("x", "0px"),
              o.setAttribute("y", "0px"),
              o.setAttribute("viewBox", "0 0 " + n + " " + r),
              o.setAttribute("xmlns", Ia),
              o.setAttribute("version", "1.1"),
              o.setAttribute("style", "transform: translate(0,0)");
          },
        },
        {
          key: "createGroup",
          value: function (n, r, o) {
            var i = this.document.createElementNS(Ia, "g");
            return (
              i.setAttribute("transform", "translate(" + n + ", " + r + ")"),
              o.appendChild(i),
              i
            );
          },
        },
        {
          key: "setGroupOptions",
          value: function (n, r) {
            n.setAttribute("style", "fill:" + r.lineColor + ";");
          },
        },
        {
          key: "drawRect",
          value: function (n, r, o, i, a) {
            var l = this.document.createElementNS(Ia, "rect");
            return (
              l.setAttribute("x", n),
              l.setAttribute("y", r),
              l.setAttribute("width", o),
              l.setAttribute("height", i),
              a.appendChild(l),
              l
            );
          },
        },
      ]),
      e
    );
  })();
Gd.default = TP;
var Xd = {};
Object.defineProperty(Xd, "__esModule", { value: !0 });
var $P = (function () {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
})();
function PP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var RP = (function () {
  function e(t, n, r) {
    PP(this, e), (this.object = t), (this.encodings = n), (this.options = r);
  }
  return (
    $P(e, [
      {
        key: "render",
        value: function () {
          this.object.encodings = this.encodings;
        },
      },
    ]),
    e
  );
})();
Xd.default = RP;
Object.defineProperty(Ud, "__esModule", { value: !0 });
var AP = Wd,
  MP = Qd(AP),
  IP = Gd,
  LP = Qd(IP),
  jP = Xd,
  NP = Qd(jP);
function Qd(e) {
  return e && e.__esModule ? e : { default: e };
}
Ud.default = {
  CanvasRenderer: MP.default,
  SVGRenderer: LP.default,
  ObjectRenderer: NP.default,
};
var jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
function Kd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qd(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Yd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var DP = (function (e) {
    Yd(t, e);
    function t(n, r) {
      Kd(this, t);
      var o = qd(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return (
        (o.name = "InvalidInputException"),
        (o.symbology = n),
        (o.input = r),
        (o.message =
          '"' + o.input + '" is not a valid input for ' + o.symbology),
        o
      );
    }
    return t;
  })(Error),
  zP = (function (e) {
    Yd(t, e);
    function t() {
      Kd(this, t);
      var n = qd(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return (
        (n.name = "InvalidElementException"),
        (n.message = "Not supported type to render on"),
        n
      );
    }
    return t;
  })(Error),
  BP = (function (e) {
    Yd(t, e);
    function t() {
      Kd(this, t);
      var n = qd(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return (
        (n.name = "NoElementException"),
        (n.message = "No element to render on."),
        n
      );
    }
    return t;
  })(Error);
jo.InvalidInputException = DP;
jo.InvalidElementException = zP;
jo.NoElementException = BP;
Object.defineProperty(Hd, "__esModule", { value: !0 });
var FP =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  HP = Vd,
  sf = Dm(HP),
  VP = Ud,
  ri = Dm(VP),
  UP = jo;
function Dm(e) {
  return e && e.__esModule ? e : { default: e };
}
function Zd(e) {
  if (typeof e == "string") return WP(e);
  if (Array.isArray(e)) {
    for (var t = [], n = 0; n < e.length; n++) t.push(Zd(e[n]));
    return t;
  } else {
    if (typeof HTMLCanvasElement < "u" && e instanceof HTMLImageElement)
      return GP(e);
    if (
      (e && e.nodeName && e.nodeName.toLowerCase() === "svg") ||
      (typeof SVGElement < "u" && e instanceof SVGElement)
    )
      return {
        element: e,
        options: (0, sf.default)(e),
        renderer: ri.default.SVGRenderer,
      };
    if (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement)
      return {
        element: e,
        options: (0, sf.default)(e),
        renderer: ri.default.CanvasRenderer,
      };
    if (e && e.getContext)
      return { element: e, renderer: ri.default.CanvasRenderer };
    if (e && (typeof e > "u" ? "undefined" : FP(e)) === "object" && !e.nodeName)
      return { element: e, renderer: ri.default.ObjectRenderer };
    throw new UP.InvalidElementException();
  }
}
function WP(e) {
  var t = document.querySelectorAll(e);
  if (t.length !== 0) {
    for (var n = [], r = 0; r < t.length; r++) n.push(Zd(t[r]));
    return n;
  }
}
function GP(e) {
  var t = document.createElement("canvas");
  return {
    element: t,
    options: (0, sf.default)(e),
    renderer: ri.default.CanvasRenderer,
    afterRender: function () {
      e.setAttribute("src", t.toDataURL());
    },
  };
}
Hd.default = Zd;
var Jd = {};
Object.defineProperty(Jd, "__esModule", { value: !0 });
var XP = (function () {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
})();
function QP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var KP = (function () {
  function e(t) {
    QP(this, e), (this.api = t);
  }
  return (
    XP(e, [
      {
        key: "handleCatch",
        value: function (n) {
          if (n.name === "InvalidInputException")
            if (this.api._options.valid !== this.api._defaults.valid)
              this.api._options.valid(!1);
            else throw n.message;
          else throw n;
          this.api.render = function () {};
        },
      },
      {
        key: "wrapBarcodeCall",
        value: function (n) {
          try {
            var r = n.apply(void 0, arguments);
            return this.api._options.valid(!0), r;
          } catch (o) {
            return this.handleCatch(o), this.api;
          }
        },
      },
    ]),
    e
  );
})();
Jd.default = KP;
var qP = xd,
  br = ur(qP),
  YP = Lo,
  Zi = ur(YP),
  ZP = Bd,
  zm = ur(ZP),
  JP = Fd,
  gh = ur(JP),
  eR = Hd,
  tR = ur(eR),
  nR = Pu,
  rR = ur(nR),
  oR = Jd,
  iR = ur(oR),
  Bm = jo,
  aR = Ru,
  Fm = ur(aR);
function ur(e) {
  return e && e.__esModule ? e : { default: e };
}
var mn = function () {},
  Au = function (t, n, r) {
    var o = new mn();
    if (typeof t > "u") throw Error("No element to render on was provided.");
    return (
      (o._renderProperties = (0, tR.default)(t)),
      (o._encodings = []),
      (o._options = Fm.default),
      (o._errorHandler = new iR.default(o)),
      typeof n < "u" &&
        ((r = r || {}),
        r.format || (r.format = Vm()),
        o.options(r)[r.format](n, r).render()),
      o
    );
  };
Au.getModule = function (e) {
  return br.default[e];
};
for (var mh in br.default) br.default.hasOwnProperty(mh) && lR(br.default, mh);
function lR(e, t) {
  mn.prototype[t] =
    mn.prototype[t.toUpperCase()] =
    mn.prototype[t.toLowerCase()] =
      function (n, r) {
        var o = this;
        return o._errorHandler.wrapBarcodeCall(function () {
          r.text = typeof r.text > "u" ? void 0 : "" + r.text;
          var i = (0, Zi.default)(o._options, r);
          i = (0, rR.default)(i);
          var a = e[t],
            l = Hm(n, a, i);
          return o._encodings.push(l), o;
        });
      };
}
function Hm(e, t, n) {
  e = "" + e;
  var r = new t(e, n);
  if (!r.valid()) throw new Bm.InvalidInputException(r.constructor.name, e);
  var o = r.encode();
  o = (0, zm.default)(o);
  for (var i = 0; i < o.length; i++)
    o[i].options = (0, Zi.default)(n, o[i].options);
  return o;
}
function Vm() {
  return br.default.CODE128 ? "CODE128" : Object.keys(br.default)[0];
}
mn.prototype.options = function (e) {
  return (this._options = (0, Zi.default)(this._options, e)), this;
};
mn.prototype.blank = function (e) {
  var t = new Array(e + 1).join("0");
  return this._encodings.push({ data: t }), this;
};
mn.prototype.init = function () {
  if (this._renderProperties) {
    Array.isArray(this._renderProperties) ||
      (this._renderProperties = [this._renderProperties]);
    var e;
    for (var t in this._renderProperties) {
      e = this._renderProperties[t];
      var n = (0, Zi.default)(this._options, e.options);
      n.format == "auto" && (n.format = Vm()),
        this._errorHandler.wrapBarcodeCall(function () {
          var r = n.value,
            o = br.default[n.format.toUpperCase()],
            i = Hm(r, o, n);
          cf(e, i, n);
        });
    }
  }
};
mn.prototype.render = function () {
  if (!this._renderProperties) throw new Bm.NoElementException();
  if (Array.isArray(this._renderProperties))
    for (var e = 0; e < this._renderProperties.length; e++)
      cf(this._renderProperties[e], this._encodings, this._options);
  else cf(this._renderProperties, this._encodings, this._options);
  return this;
};
mn.prototype._defaults = Fm.default;
function cf(e, t, n) {
  t = (0, zm.default)(t);
  for (var r = 0; r < t.length; r++)
    (t[r].options = (0, Zi.default)(n, t[r].options)),
      (0, gh.default)(t[r].options);
  (0, gh.default)(n);
  var o = e.renderer,
    i = new o(e.element, t, n);
  i.render(), e.afterRender && e.afterRender();
}
typeof window < "u" && (window.JsBarcode = Au);
typeof jQuery < "u" &&
  (jQuery.fn.JsBarcode = function (e, t) {
    var n = [];
    return (
      jQuery(this).each(function () {
        n.push(this);
      }),
      Au(n, e, t)
    );
  });
var uR = Au;
const sR = Nl(uR);
var Ji = (e) => e.type === "checkbox",
  so = (e) => e instanceof Date,
  Qe = (e) => e == null;
const Um = (e) => typeof e == "object";
var Re = (e) => !Qe(e) && !Array.isArray(e) && Um(e) && !so(e),
  cR = (e) =>
    Re(e) && e.target ? (Ji(e.target) ? e.target.checked : e.target.value) : e,
  fR = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  dR = (e, t) => e.has(fR(t)),
  pR = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Re(t) && t.hasOwnProperty("isPrototypeOf");
  },
  ep =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function sn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(ep && (e instanceof Blob || e instanceof FileList)) &&
    (n || Re(e))
  )
    if (((t = n ? [] : {}), !n && !pR(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = sn(e[r]));
  else return e;
  return t;
}
var ea = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  we = (e) => e === void 0,
  G = (e, t, n) => {
    if (!t || !Re(e)) return n;
    const r = ea(t.split(/[,[\].]+?/)).reduce((o, i) => (Qe(o) ? o : o[i]), e);
    return we(r) || r === e ? (we(e[t]) ? n : e[t]) : r;
  },
  pn = (e) => typeof e == "boolean";
const yh = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Dt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  un = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
Y.createContext(null);
var hR = (e, t, n, r = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(o, i, {
        get: () => {
          const a = i;
          return (
            t._proxyFormState[a] !== Dt.all &&
              (t._proxyFormState[a] = !r || Dt.all),
            n && (n[a] = !0),
            e[a]
          );
        },
      });
    return o;
  },
  St = (e) => Re(e) && !Object.keys(e).length,
  vR = (e, t, n, r) => {
    n(e);
    const { name: o, ...i } = e;
    return (
      St(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((a) => t[a] === (!r || Dt.all))
    );
  },
  Ms = (e) => (Array.isArray(e) ? e : [e]);
function gR(e) {
  const t = Y.useRef(e);
  (t.current = e),
    Y.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var Zt = (e) => typeof e == "string",
  mR = (e, t, n, r, o) =>
    Zt(e)
      ? (r && t.watch.add(e), G(n, e, o))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), G(n, i)))
      : (r && (t.watchAll = !0), n),
  tp = (e) => /^\w*$/.test(e),
  Wm = (e) => ea(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  pe = (e, t, n) => {
    let r = -1;
    const o = tp(t) ? [t] : Wm(t),
      i = o.length,
      a = i - 1;
    for (; ++r < i; ) {
      const l = o[r];
      let u = n;
      if (r !== a) {
        const s = e[l];
        u = Re(s) || Array.isArray(s) ? s : isNaN(+o[r + 1]) ? {} : [];
      }
      (e[l] = u), (e = e[l]);
    }
    return e;
  },
  yR = (e, t, n, r, o) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: o || !0 },
        }
      : {},
  Sh = (e) => ({
    isOnSubmit: !e || e === Dt.onSubmit,
    isOnBlur: e === Dt.onBlur,
    isOnChange: e === Dt.onChange,
    isOnAll: e === Dt.all,
    isOnTouch: e === Dt.onTouched,
  }),
  _h = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const gi = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = G(e, o);
    if (i) {
      const { _f: a, ...l } = i;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], o) && !r) break;
        if (a.ref && t(a.ref, a.name) && !r) break;
        gi(l, t);
      } else Re(l) && gi(l, t);
    }
  }
};
var SR = (e, t, n) => {
    const r = ea(G(e, n));
    return pe(r, "root", t[n]), pe(e, n, r), e;
  },
  np = (e) => e.type === "file",
  Fn = (e) => typeof e == "function",
  Ml = (e) => {
    if (!ep) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  nl = (e) => Zt(e),
  rp = (e) => e.type === "radio",
  Il = (e) => e instanceof RegExp;
const wh = { value: !1, isValid: !1 },
  Eh = { value: !0, isValid: !0 };
var Gm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !we(e[0].attributes.value)
        ? we(e[0].value) || e[0].value === ""
          ? Eh
          : { value: e[0].value, isValid: !0 }
        : Eh
      : wh;
  }
  return wh;
};
const xh = { isValid: !1, value: null };
var Xm = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        xh
      )
    : xh;
function bh(e, t, n = "validate") {
  if (nl(e) || (Array.isArray(e) && e.every(nl)) || (pn(e) && !e))
    return { type: n, message: nl(e) ? e : "", ref: t };
}
var Xr = (e) => (Re(e) && !Il(e) ? e : { value: e, message: "" }),
  Ch = async (e, t, n, r, o) => {
    const {
        ref: i,
        refs: a,
        required: l,
        maxLength: u,
        minLength: s,
        min: f,
        max: p,
        pattern: d,
        validate: m,
        name: _,
        valueAsNumber: b,
        mount: A,
        disabled: v,
      } = e._f,
      c = G(t, _);
    if (!A || v) return {};
    const h = a ? a[0] : i,
      w = (I) => {
        r &&
          h.reportValidity &&
          (h.setCustomValidity(pn(I) ? "" : I || ""), h.reportValidity());
      },
      C = {},
      T = rp(i),
      x = Ji(i),
      M = T || x,
      B =
        ((b || np(i)) && we(i.value) && we(c)) ||
        (Ml(i) && i.value === "") ||
        c === "" ||
        (Array.isArray(c) && !c.length),
      N = yR.bind(null, _, n, C),
      Q = (I, j, W, V = un.maxLength, P = un.minLength) => {
        const k = I ? j : W;
        C[_] = { type: I ? V : P, message: k, ref: i, ...N(I ? V : P, k) };
      };
    if (
      o
        ? !Array.isArray(c) || !c.length
        : l &&
          ((!M && (B || Qe(c))) ||
            (pn(c) && !c) ||
            (x && !Gm(a).isValid) ||
            (T && !Xm(a).isValid))
    ) {
      const { value: I, message: j } = nl(l)
        ? { value: !!l, message: l }
        : Xr(l);
      if (
        I &&
        ((C[_] = {
          type: un.required,
          message: j,
          ref: h,
          ...N(un.required, j),
        }),
        !n)
      )
        return w(j), C;
    }
    if (!B && (!Qe(f) || !Qe(p))) {
      let I, j;
      const W = Xr(p),
        V = Xr(f);
      if (!Qe(c) && !isNaN(c)) {
        const P = i.valueAsNumber || (c && +c);
        Qe(W.value) || (I = P > W.value), Qe(V.value) || (j = P < V.value);
      } else {
        const P = i.valueAsDate || new Date(c),
          k = (R) => new Date(new Date().toDateString() + " " + R),
          S = i.type == "time",
          $ = i.type == "week";
        Zt(W.value) &&
          c &&
          (I = S ? k(c) > k(W.value) : $ ? c > W.value : P > new Date(W.value)),
          Zt(V.value) &&
            c &&
            (j = S
              ? k(c) < k(V.value)
              : $
              ? c < V.value
              : P < new Date(V.value));
      }
      if ((I || j) && (Q(!!I, W.message, V.message, un.max, un.min), !n))
        return w(C[_].message), C;
    }
    if ((u || s) && !B && (Zt(c) || (o && Array.isArray(c)))) {
      const I = Xr(u),
        j = Xr(s),
        W = !Qe(I.value) && c.length > +I.value,
        V = !Qe(j.value) && c.length < +j.value;
      if ((W || V) && (Q(W, I.message, j.message), !n))
        return w(C[_].message), C;
    }
    if (d && !B && Zt(c)) {
      const { value: I, message: j } = Xr(d);
      if (
        Il(I) &&
        !c.match(I) &&
        ((C[_] = { type: un.pattern, message: j, ref: i, ...N(un.pattern, j) }),
        !n)
      )
        return w(j), C;
    }
    if (m) {
      if (Fn(m)) {
        const I = await m(c, t),
          j = bh(I, h);
        if (j && ((C[_] = { ...j, ...N(un.validate, j.message) }), !n))
          return w(j.message), C;
      } else if (Re(m)) {
        let I = {};
        for (const j in m) {
          if (!St(I) && !n) break;
          const W = bh(await m[j](c, t), h, j);
          W &&
            ((I = { ...W, ...N(j, W.message) }), w(W.message), n && (C[_] = I));
        }
        if (!St(I) && ((C[_] = { ref: h, ...I }), !n)) return C;
      }
    }
    return w(!0), C;
  };
function _R(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = we(e) ? r++ : e[t[r++]];
  return e;
}
function wR(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !we(e[t])) return !1;
  return !0;
}
function Ne(e, t) {
  const n = Array.isArray(t) ? t : tp(t) ? [t] : Wm(t),
    r = n.length === 1 ? e : _R(e, n),
    o = n.length - 1,
    i = n[o];
  return (
    r && delete r[i],
    o !== 0 &&
      ((Re(r) && St(r)) || (Array.isArray(r) && wR(r))) &&
      Ne(e, n.slice(0, -1)),
    e
  );
}
var Is = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const i of e) i.next && i.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Ll = (e) => Qe(e) || !Um(e);
function Sr(e, t) {
  if (Ll(e) || Ll(t)) return e === t;
  if (so(e) && so(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o)) return !1;
    if (o !== "ref") {
      const a = t[o];
      if (
        (so(i) && so(a)) ||
        (Re(i) && Re(a)) ||
        (Array.isArray(i) && Array.isArray(a))
          ? !Sr(i, a)
          : i !== a
      )
        return !1;
    }
  }
  return !0;
}
var Qm = (e) => e.type === "select-multiple",
  ER = (e) => rp(e) || Ji(e),
  Ls = (e) => Ml(e) && e.isConnected,
  Km = (e) => {
    for (const t in e) if (Fn(e[t])) return !0;
    return !1;
  };
function jl(e, t = {}) {
  const n = Array.isArray(e);
  if (Re(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Re(e[r]) && !Km(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), jl(e[r], t[r]))
        : Qe(e[r]) || (t[r] = !0);
  return t;
}
function qm(e, t, n) {
  const r = Array.isArray(e);
  if (Re(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || (Re(e[o]) && !Km(e[o]))
        ? we(t) || Ll(n[o])
          ? (n[o] = Array.isArray(e[o]) ? jl(e[o], []) : { ...jl(e[o]) })
          : qm(e[o], Qe(t) ? {} : t[o], n[o])
        : (n[o] = !Sr(e[o], t[o]));
  return n;
}
var js = (e, t) => qm(e, t, jl(t)),
  Ym = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    we(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && Zt(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function Ns(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return np(t)
      ? t.files
      : rp(t)
      ? Xm(e.refs).value
      : Qm(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : Ji(t)
      ? Gm(e.refs).value
      : Ym(we(t.value) ? e.ref.value : t.value, e);
}
var xR = (e, t, n, r) => {
    const o = {};
    for (const i of e) {
      const a = G(t, i);
      a && pe(o, i, a._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: r,
    };
  },
  Zo = (e) =>
    we(e)
      ? e
      : Il(e)
      ? e.source
      : Re(e)
      ? Il(e.value)
        ? e.value.source
        : e.value
      : e,
  bR = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Oh(e, t, n) {
  const r = G(e, n);
  if (r || tp(n)) return { error: r, name: n };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."),
      a = G(t, i),
      l = G(e, i);
    if (a && !Array.isArray(a) && n !== i) return { name: n };
    if (l && l.type) return { name: i, error: l };
    o.pop();
  }
  return { name: n };
}
var CR = (e, t, n, r, o) =>
    o.isOnAll
      ? !1
      : !n && o.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : o.isOnBlur)
      ? !e
      : (n ? r.isOnChange : o.isOnChange)
      ? e
      : !0,
  OR = (e, t) => !ea(G(e, t)).length && Ne(e, t);
const kR = {
  mode: Dt.onSubmit,
  reValidateMode: Dt.onChange,
  shouldFocusError: !0,
};
function TR(e = {}, t) {
  let n = { ...kR, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Fn(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: n.errors || {},
      disabled: !1,
    },
    o = {},
    i =
      Re(n.defaultValues) || Re(n.values)
        ? sn(n.defaultValues || n.values) || {}
        : {},
    a = n.shouldUnregister ? {} : sn(i),
    l = { action: !1, mount: !1, watch: !1 },
    u = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    s,
    f = 0;
  const p = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: Is(), array: Is(), state: Is() },
    m = e.resetOptions && e.resetOptions.keepDirtyValues,
    _ = Sh(n.mode),
    b = Sh(n.reValidateMode),
    A = n.criteriaMode === Dt.all,
    v = (g) => (E) => {
      clearTimeout(f), (f = setTimeout(g, E));
    },
    c = async (g) => {
      if (p.isValid || g) {
        const E = n.resolver ? St((await N()).errors) : await I(o, !0);
        E !== r.isValid && d.state.next({ isValid: E });
      }
    },
    h = (g) => p.isValidating && d.state.next({ isValidating: g }),
    w = (g, E = [], O, H, F = !0, z = !0) => {
      if (H && O) {
        if (((l.action = !0), z && Array.isArray(G(o, g)))) {
          const K = O(G(o, g), H.argA, H.argB);
          F && pe(o, g, K);
        }
        if (z && Array.isArray(G(r.errors, g))) {
          const K = O(G(r.errors, g), H.argA, H.argB);
          F && pe(r.errors, g, K), OR(r.errors, g);
        }
        if (p.touchedFields && z && Array.isArray(G(r.touchedFields, g))) {
          const K = O(G(r.touchedFields, g), H.argA, H.argB);
          F && pe(r.touchedFields, g, K);
        }
        p.dirtyFields && (r.dirtyFields = js(i, a)),
          d.state.next({
            name: g,
            isDirty: W(g, E),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else pe(a, g, E);
    },
    C = (g, E) => {
      pe(r.errors, g, E), d.state.next({ errors: r.errors });
    },
    T = (g) => {
      (r.errors = g), d.state.next({ errors: r.errors, isValid: !1 });
    },
    x = (g, E, O, H) => {
      const F = G(o, g);
      if (F) {
        const z = G(a, g, we(O) ? G(i, g) : O);
        we(z) || (H && H.defaultChecked) || E
          ? pe(a, g, E ? z : Ns(F._f))
          : k(g, z),
          l.mount && c();
      }
    },
    M = (g, E, O, H, F) => {
      let z = !1,
        K = !1;
      const le = { name: g },
        Ce = !!(G(o, g) && G(o, g)._f.disabled);
      if (!O || H) {
        p.isDirty &&
          ((K = r.isDirty),
          (r.isDirty = le.isDirty = W()),
          (z = K !== le.isDirty));
        const yt = Ce || Sr(G(i, g), E);
        (K = !!(!Ce && G(r.dirtyFields, g))),
          yt || Ce ? Ne(r.dirtyFields, g) : pe(r.dirtyFields, g, !0),
          (le.dirtyFields = r.dirtyFields),
          (z = z || (p.dirtyFields && K !== !yt));
      }
      if (O) {
        const yt = G(r.touchedFields, g);
        yt ||
          (pe(r.touchedFields, g, O),
          (le.touchedFields = r.touchedFields),
          (z = z || (p.touchedFields && yt !== O)));
      }
      return z && F && d.state.next(le), z ? le : {};
    },
    B = (g, E, O, H) => {
      const F = G(r.errors, g),
        z = p.isValid && pn(E) && r.isValid !== E;
      if (
        (e.delayError && O
          ? ((s = v(() => C(g, O))), s(e.delayError))
          : (clearTimeout(f),
            (s = null),
            O ? pe(r.errors, g, O) : Ne(r.errors, g)),
        (O ? !Sr(F, O) : F) || !St(H) || z)
      ) {
        const K = {
          ...H,
          ...(z && pn(E) ? { isValid: E } : {}),
          errors: r.errors,
          name: g,
        };
        (r = { ...r, ...K }), d.state.next(K);
      }
      h(!1);
    },
    N = async (g) =>
      n.resolver(
        a,
        n.context,
        xR(g || u.mount, o, n.criteriaMode, n.shouldUseNativeValidation)
      ),
    Q = async (g) => {
      const { errors: E } = await N(g);
      if (g)
        for (const O of g) {
          const H = G(E, O);
          H ? pe(r.errors, O, H) : Ne(r.errors, O);
        }
      else r.errors = E;
      return E;
    },
    I = async (g, E, O = { valid: !0 }) => {
      for (const H in g) {
        const F = g[H];
        if (F) {
          const { _f: z, ...K } = F;
          if (z) {
            const le = u.array.has(z.name),
              Ce = await Ch(F, a, A, n.shouldUseNativeValidation && !E, le);
            if (Ce[z.name] && ((O.valid = !1), E)) break;
            !E &&
              (G(Ce, z.name)
                ? le
                  ? SR(r.errors, Ce, z.name)
                  : pe(r.errors, z.name, Ce[z.name])
                : Ne(r.errors, z.name));
          }
          K && (await I(K, E, O));
        }
      }
      return O.valid;
    },
    j = () => {
      for (const g of u.unMount) {
        const E = G(o, g);
        E &&
          (E._f.refs ? E._f.refs.every((O) => !Ls(O)) : !Ls(E._f.ref)) &&
          Wt(g);
      }
      u.unMount = new Set();
    },
    W = (g, E) => (g && E && pe(a, g, E), !Sr(J(), i)),
    V = (g, E, O) =>
      mR(g, u, { ...(l.mount ? a : we(E) ? i : Zt(g) ? { [g]: E } : E) }, O, E),
    P = (g) => ea(G(l.mount ? a : i, g, e.shouldUnregister ? G(i, g, []) : [])),
    k = (g, E, O = {}) => {
      const H = G(o, g);
      let F = E;
      if (H) {
        const z = H._f;
        z &&
          (!z.disabled && pe(a, g, Ym(E, z)),
          (F = Ml(z.ref) && Qe(E) ? "" : E),
          Qm(z.ref)
            ? [...z.ref.options].forEach(
                (K) => (K.selected = F.includes(K.value))
              )
            : z.refs
            ? Ji(z.ref)
              ? z.refs.length > 1
                ? z.refs.forEach(
                    (K) =>
                      (!K.defaultChecked || !K.disabled) &&
                      (K.checked = Array.isArray(F)
                        ? !!F.find((le) => le === K.value)
                        : F === K.value)
                  )
                : z.refs[0] && (z.refs[0].checked = !!F)
              : z.refs.forEach((K) => (K.checked = K.value === F))
            : np(z.ref)
            ? (z.ref.value = "")
            : ((z.ref.value = F),
              z.ref.type || d.values.next({ name: g, values: { ...a } })));
      }
      (O.shouldDirty || O.shouldTouch) &&
        M(g, F, O.shouldTouch, O.shouldDirty, !0),
        O.shouldValidate && X(g);
    },
    S = (g, E, O) => {
      for (const H in E) {
        const F = E[H],
          z = `${g}.${H}`,
          K = G(o, z);
        (u.array.has(g) || !Ll(F) || (K && !K._f)) && !so(F)
          ? S(z, F, O)
          : k(z, F, O);
      }
    },
    $ = (g, E, O = {}) => {
      const H = G(o, g),
        F = u.array.has(g),
        z = sn(E);
      pe(a, g, z),
        F
          ? (d.array.next({ name: g, values: { ...a } }),
            (p.isDirty || p.dirtyFields) &&
              O.shouldDirty &&
              d.state.next({
                name: g,
                dirtyFields: js(i, a),
                isDirty: W(g, z),
              }))
          : H && !H._f && !Qe(z)
          ? S(g, z, O)
          : k(g, z, O),
        _h(g, u) && d.state.next({ ...r }),
        d.values.next({ name: g, values: { ...a } }),
        !l.mount && t();
    },
    R = async (g) => {
      const E = g.target;
      let O = E.name,
        H = !0;
      const F = G(o, O),
        z = () => (E.type ? Ns(F._f) : cR(g)),
        K = (le) => {
          H = Number.isNaN(le) || le === G(a, O, le);
        };
      if (F) {
        let le, Ce;
        const yt = z(),
          $n = g.type === yh.BLUR || g.type === yh.FOCUS_OUT,
          Mu =
            (!bR(F._f) && !n.resolver && !G(r.errors, O) && !F._f.deps) ||
            CR($n, G(r.touchedFields, O), r.isSubmitted, b, _),
          No = _h(O, u, $n);
        pe(a, O, yt),
          $n
            ? (F._f.onBlur && F._f.onBlur(g), s && s(0))
            : F._f.onChange && F._f.onChange(g);
        const Do = M(O, yt, $n, !1),
          Iu = !St(Do) || No;
        if (
          (!$n && d.values.next({ name: O, type: g.type, values: { ...a } }),
          Mu)
        )
          return (
            p.isValid && c(), Iu && d.state.next({ name: O, ...(No ? {} : Do) })
          );
        if ((!$n && No && d.state.next({ ...r }), h(!0), n.resolver)) {
          const { errors: Pn } = await N([O]);
          if ((K(yt), H)) {
            const cr = Oh(r.errors, o, O),
              Br = Oh(Pn, o, cr.name || O);
            (le = Br.error), (O = Br.name), (Ce = St(Pn));
          }
        } else
          (le = (await Ch(F, a, A, n.shouldUseNativeValidation))[O]),
            K(yt),
            H && (le ? (Ce = !1) : p.isValid && (Ce = await I(o, !0)));
        H && (F._f.deps && X(F._f.deps), B(O, Ce, le, Do));
      }
    },
    D = (g, E) => {
      if (G(r.errors, E) && g.focus) return g.focus(), 1;
    },
    X = async (g, E = {}) => {
      let O, H;
      const F = Ms(g);
      if ((h(!0), n.resolver)) {
        const z = await Q(we(g) ? g : F);
        (O = St(z)), (H = g ? !F.some((K) => G(z, K)) : O);
      } else
        g
          ? ((H = (
              await Promise.all(
                F.map(async (z) => {
                  const K = G(o, z);
                  return await I(K && K._f ? { [z]: K } : K);
                })
              )
            ).every(Boolean)),
            !(!H && !r.isValid) && c())
          : (H = O = await I(o));
      return (
        d.state.next({
          ...(!Zt(g) || (p.isValid && O !== r.isValid) ? {} : { name: g }),
          ...(n.resolver || !g ? { isValid: O } : {}),
          errors: r.errors,
          isValidating: !1,
        }),
        E.shouldFocus && !H && gi(o, D, g ? F : u.mount),
        H
      );
    },
    J = (g) => {
      const E = { ...i, ...(l.mount ? a : {}) };
      return we(g) ? E : Zt(g) ? G(E, g) : g.map((O) => G(E, O));
    },
    ne = (g, E) => ({
      invalid: !!G((E || r).errors, g),
      isDirty: !!G((E || r).dirtyFields, g),
      isTouched: !!G((E || r).touchedFields, g),
      error: G((E || r).errors, g),
    }),
    _e = (g) => {
      g && Ms(g).forEach((E) => Ne(r.errors, E)),
        d.state.next({ errors: g ? r.errors : {} });
    },
    ue = (g, E, O) => {
      const H = (G(o, g, { _f: {} })._f || {}).ref;
      pe(r.errors, g, { ...E, ref: H }),
        d.state.next({ name: g, errors: r.errors, isValid: !1 }),
        O && O.shouldFocus && H && H.focus && H.focus();
    },
    xe = (g, E) =>
      Fn(g)
        ? d.values.subscribe({ next: (O) => g(V(void 0, E), O) })
        : V(g, E, !0),
    Wt = (g, E = {}) => {
      for (const O of g ? Ms(g) : u.mount)
        u.mount.delete(O),
          u.array.delete(O),
          E.keepValue || (Ne(o, O), Ne(a, O)),
          !E.keepError && Ne(r.errors, O),
          !E.keepDirty && Ne(r.dirtyFields, O),
          !E.keepTouched && Ne(r.touchedFields, O),
          !n.shouldUnregister && !E.keepDefaultValue && Ne(i, O);
      d.values.next({ values: { ...a } }),
        d.state.next({ ...r, ...(E.keepDirty ? { isDirty: W() } : {}) }),
        !E.keepIsValid && c();
    },
    Cn = ({ disabled: g, name: E, field: O, fields: H, value: F }) => {
      if (pn(g)) {
        const z = g ? void 0 : we(F) ? Ns(O ? O._f : G(H, E)._f) : F;
        pe(a, E, z), M(E, z, !1, !1, !0);
      }
    },
    Pt = (g, E = {}) => {
      let O = G(o, g);
      const H = pn(E.disabled);
      return (
        pe(o, g, {
          ...(O || {}),
          _f: {
            ...(O && O._f ? O._f : { ref: { name: g } }),
            name: g,
            mount: !0,
            ...E,
          },
        }),
        u.mount.add(g),
        O
          ? Cn({ field: O, disabled: E.disabled, name: g, value: E.value })
          : x(g, !0, E.value),
        {
          ...(H ? { disabled: E.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!E.required,
                min: Zo(E.min),
                max: Zo(E.max),
                minLength: Zo(E.minLength),
                maxLength: Zo(E.maxLength),
                pattern: Zo(E.pattern),
              }
            : {}),
          name: g,
          onChange: R,
          onBlur: R,
          ref: (F) => {
            if (F) {
              Pt(g, E), (O = G(o, g));
              const z =
                  (we(F.value) &&
                    F.querySelectorAll &&
                    F.querySelectorAll("input,select,textarea")[0]) ||
                  F,
                K = ER(z),
                le = O._f.refs || [];
              if (K ? le.find((Ce) => Ce === z) : z === O._f.ref) return;
              pe(o, g, {
                _f: {
                  ...O._f,
                  ...(K
                    ? {
                        refs: [
                          ...le.filter(Ls),
                          z,
                          ...(Array.isArray(G(i, g)) ? [{}] : []),
                        ],
                        ref: { type: z.type, name: g },
                      }
                    : { ref: z }),
                },
              }),
                x(g, !1, void 0, z);
            } else
              (O = G(o, g, {})),
                O._f && (O._f.mount = !1),
                (n.shouldUnregister || E.shouldUnregister) &&
                  !(dR(u.array, g) && l.action) &&
                  u.unMount.add(g);
          },
        }
      );
    },
    at = () => n.shouldFocusError && gi(o, D, u.mount),
    sr = (g) => {
      pn(g) &&
        (d.state.next({ disabled: g }),
        gi(
          o,
          (E, O) => {
            let H = g;
            const F = G(o, O);
            F && pn(F._f.disabled) && (H || (H = F._f.disabled)),
              (E.disabled = H);
          },
          0,
          !1
        ));
    },
    Rt = (g, E) => async (O) => {
      O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
      let H = sn(a);
      if ((d.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: F, values: z } = await N();
        (r.errors = F), (H = z);
      } else await I(o);
      Ne(r.errors, "root"),
        St(r.errors)
          ? (d.state.next({ errors: {} }), await g(H, O))
          : (E && (await E({ ...r.errors }, O)), at(), setTimeout(at)),
        d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: St(r.errors),
          submitCount: r.submitCount + 1,
          errors: r.errors,
        });
    },
    On = (g, E = {}) => {
      G(o, g) &&
        (we(E.defaultValue)
          ? $(g, G(i, g))
          : ($(g, E.defaultValue), pe(i, g, E.defaultValue)),
        E.keepTouched || Ne(r.touchedFields, g),
        E.keepDirty ||
          (Ne(r.dirtyFields, g),
          (r.isDirty = E.defaultValue ? W(g, G(i, g)) : W())),
        E.keepError || (Ne(r.errors, g), p.isValid && c()),
        d.state.next({ ...r }));
    },
    Ge = (g, E = {}) => {
      const O = g ? sn(g) : i,
        H = sn(O),
        F = g && !St(g) ? H : i;
      if ((E.keepDefaultValues || (i = O), !E.keepValues)) {
        if (E.keepDirtyValues || m)
          for (const z of u.mount)
            G(r.dirtyFields, z) ? pe(F, z, G(a, z)) : $(z, G(F, z));
        else {
          if (ep && we(g))
            for (const z of u.mount) {
              const K = G(o, z);
              if (K && K._f) {
                const le = Array.isArray(K._f.refs) ? K._f.refs[0] : K._f.ref;
                if (Ml(le)) {
                  const Ce = le.closest("form");
                  if (Ce) {
                    Ce.reset();
                    break;
                  }
                }
              }
            }
          o = {};
        }
        (a = e.shouldUnregister ? (E.keepDefaultValues ? sn(i) : {}) : sn(F)),
          d.array.next({ values: { ...F } }),
          d.values.next({ values: { ...F } });
      }
      (u = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        !l.mount && t(),
        (l.mount = !p.isValid || !!E.keepIsValid),
        (l.watch = !!e.shouldUnregister),
        d.state.next({
          submitCount: E.keepSubmitCount ? r.submitCount : 0,
          isDirty: E.keepDirty
            ? r.isDirty
            : !!(E.keepDefaultValues && !Sr(g, i)),
          isSubmitted: E.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: E.keepDirtyValues
            ? r.dirtyFields
            : E.keepDefaultValues && g
            ? js(i, g)
            : {},
          touchedFields: E.keepTouched ? r.touchedFields : {},
          errors: E.keepErrors ? r.errors : {},
          isSubmitSuccessful: E.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    kn = (g, E) => Ge(Fn(g) ? g(a) : g, E);
  return {
    control: {
      register: Pt,
      unregister: Wt,
      getFieldState: ne,
      handleSubmit: Rt,
      setError: ue,
      _executeSchema: N,
      _getWatch: V,
      _getDirty: W,
      _updateValid: c,
      _removeUnmounted: j,
      _updateFieldArray: w,
      _updateDisabledField: Cn,
      _getFieldArray: P,
      _reset: Ge,
      _resetDefaultValues: () =>
        Fn(n.defaultValues) &&
        n.defaultValues().then((g) => {
          kn(g, n.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (g) => {
        r = { ...r, ...g };
      },
      _disableForm: sr,
      _subjects: d,
      _proxyFormState: p,
      _setErrors: T,
      get _fields() {
        return o;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return l;
      },
      set _state(g) {
        l = g;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return u;
      },
      set _names(g) {
        u = g;
      },
      get _formState() {
        return r;
      },
      set _formState(g) {
        r = g;
      },
      get _options() {
        return n;
      },
      set _options(g) {
        n = { ...n, ...g };
      },
    },
    trigger: X,
    register: Pt,
    handleSubmit: Rt,
    watch: xe,
    setValue: $,
    getValues: J,
    reset: kn,
    resetField: On,
    clearErrors: _e,
    unregister: Wt,
    setError: ue,
    setFocus: (g, E = {}) => {
      const O = G(o, g),
        H = O && O._f;
      if (H) {
        const F = H.refs ? H.refs[0] : H.ref;
        F.focus && (F.focus(), E.shouldSelect && F.select());
      }
    },
    getFieldState: ne,
  };
}
function $R(e = {}) {
  const t = Y.useRef(),
    n = Y.useRef(),
    [r, o] = Y.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Fn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: e.errors || {},
      disabled: !1,
      defaultValues: Fn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current ||
    (t.current = { ...TR(e, () => o((a) => ({ ...a }))), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    gR({
      subject: i._subjects.state,
      next: (a) => {
        vR(a, i._proxyFormState, i._updateFormState, !0) &&
          o({ ...i._formState });
      },
    }),
    Y.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    Y.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const a = i._getDirty();
        a !== r.isDirty && i._subjects.state.next({ isDirty: a });
      }
    }, [i, r.isDirty]),
    Y.useEffect(() => {
      e.values && !Sr(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          o((a) => ({ ...a })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    Y.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    Y.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    (t.current.formState = hR(r, i)),
    t.current
  );
}
function PR() {
  var u;
  const [e, t] = y.useState(!1),
    n = y.useRef();
  y.useEffect(() => {
    console.log(n);
  }, [n]);
  const r = (s) => {
      sR(n.current, s.toString(), {
        height: 100,
        width: 4,
        fontSize: "36px",
        fontOptions: "bold",
        font: "Sans-serif",
      });
    },
    { register: o, handleSubmit: i, watch: a } = $R(),
    l = (s) => {
      var f, p;
      if (
        !(s != null && s.article) ||
        !(s != null && s.color) ||
        !(s != null && s.maker) ||
        !(s != null && s.size)
      ) {
        tt.error("Убедитесь, что данные введены корректно!");
        return;
      } else if (
        ((f = s == null ? void 0 : s.barcode) == null ? void 0 : f.length) !==
        13
      ) {
        tt.error(
          `Длина баркода не равна 13 символам. Текущее количество символов: ${
            (p = s == null ? void 0 : s.barcode) == null ? void 0 : p.length
          }`
        );
        return;
      }
      t(!0);
    };
  return Z.jsxs("div", {
    className: je.root,
    children: [
      Z.jsx("h1", { children: "Создать A4 лист" }),
      Z.jsxs("div", {
        className: je.formExampleCnt,
        children: [
          Z.jsxs("div", {
            className: je.formCnt,
            children: [
              Z.jsxs("form", {
                onSubmit: i(l),
                children: [
                  Z.jsxs("div", {
                    className: je.formItem,
                    children: [
                      Z.jsx("label", { children: "Название товара" }),
                      Z.jsx("input", {
                        className: je.input,
                        ...o("name"),
                        placeholder: "Название товара (плед, носки и т.п)",
                      }),
                    ],
                  }),
                  Z.jsxs("div", {
                    className: je.formItem,
                    children: [
                      Z.jsx("label", { children: "Артикул" }),
                      Z.jsx("input", {
                        className: je.input,
                        ...o("article"),
                        placeholder:
                          "Артикул товара (например, gpkl изумрудный)",
                      }),
                    ],
                  }),
                  Z.jsxs("div", {
                    className: je.formItem,
                    children: [
                      Z.jsx("label", { children: "Цвет" }),
                      Z.jsx("input", {
                        className: je.input,
                        ...o("color"),
                        placeholder: "Цвет (например, изумрудный)",
                      }),
                    ],
                  }),
                  Z.jsxs("div", {
                    className: je.formItem,
                    children: [
                      Z.jsx("label", { children: "Размер" }),
                      Z.jsx("input", {
                        className: je.input,
                        ...o("size"),
                        placeholder: "Размер, (например, 200x220)",
                      }),
                    ],
                  }),
                  Z.jsxs("div", {
                    className: je.formItem,
                    children: [
                      Z.jsx("label", { children: "Наименование ИП" }),
                      Z.jsx("input", {
                        className: je.input,
                        ...o("maker"),
                        placeholder: 'ФИО (БЕЗ "ИП"!!!)',
                      }),
                    ],
                  }),
                  Z.jsxs("div", {
                    className: je.formItem,
                    children: [
                      Z.jsx("label", { children: "Номер баркода" }),
                      Z.jsx("input", {
                        className: je.input,
                        ...o("barcode"),
                        placeholder: "Номер баркода (13 цифр)",
                      }),
                    ],
                  }),
                  Z.jsx("button", {
                    type: "submit",
                    onClick: () => {
                      const s = a("barcode");
                      s.length === 13 && r(s);
                    },
                    size: "middle",
                    children: "1. Создать баркод",
                  }),
                ],
              }),
              Z.jsx("img", { id: "barcode", ref: n }),
            ],
          }),
          Z.jsxs("div", {
            className: je.exampleCnt,
            children: [
              Z.jsx("h1", { children: "ПРИМЕР" }),
              Z.jsx("img", { src: "example.png" }),
              Z.jsx("h2", { children: "КНОПКИ НАЖИМАТЬ ПО ОЧЕРЕДИ: 1-2-3-4" }),
            ],
          }),
        ],
      }),
      e &&
        Z.jsx(D2, {
          refToBarcode: n == null ? void 0 : n.current,
          article: a("article"),
          color: a("color"),
          size: a("size"),
          maker: a("maker"),
          name: a("name"),
          src:
            (u = n == null ? void 0 : n.current) == null
              ? void 0
              : u.currentSrc,
        }),
      Z.jsx(TC, { className: je.toaster }),
    ],
  });
}
Ds.createRoot(document.getElementById("root")).render(
  Z.jsx(Y.StrictMode, { children: Z.jsx(PR, {}) })
);
