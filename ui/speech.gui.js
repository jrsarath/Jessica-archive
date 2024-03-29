//! Speech KITT
//! version : 1.0.0
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://github.com/TalAter/SpeechKITT
(function(t) {
    "use strict";
    var e, n, i, o, s, c, a = this, r = 0, l = !1, d = "Activate Voice Control", u = "What can I help you with?", g = [], m = [], f = !1, h = function() {
        return c !== t
    }, p = function() {
        o && h() && (s ? s.href = o : ((s = document.createElement("link")).rel = "stylesheet",
        s.href = o,
        s.id = "skitt-style-sheet",
        document.body.appendChild(s)))
    }, k = function() {
        if (h()) {
            var t = document.getElementById("skitt-listening-text__samples");
            if (g.length) {
                if (!t) {
                    var e = document.getElementById("skitt-listening-text__instructions");
                    (t = document.createElement("span")).id = "skitt-listening-text__samples",
                    e.parentNode.insertBefore(t, e.nextSibling)
                }
                t.innerText = g.join(". ") + ".",
                c.classList.add("skitt-ui--sample-commands-shown")
            } else
                t && t.parentNode.removeChild(t),
                c.classList.remove("skitt-ui--sample-commands-shown")
        }
    }, b = function() {
        if (h()) {
            var t = document.getElementById("skitt-listening-text__recognized-sentence")
              , e = a.SpeechKITT.getLastRecognizedSentence();
            if (e && f) {
                if (!t) {
                    var n = document.getElementById("skitt-listening-text__samples") || document.getElementById("skitt-listening-text__instructions");
                    (t = document.createElement("span")).id = "skitt-listening-text__recognized-sentence",
                    n.parentNode.insertBefore(t, n.nextSibling)
                }
                t.innerText = e,
                c.classList.add("skitt-ui--recognized-sentence-shown")
            } else
                t && t.parentNode.removeChild(t),
                c.classList.remove("skitt-ui--recognized-sentence-shown")
        }
    }, y = function() {
        h() && (c.classList.remove("skitt-ui--not-listening"),
        c.classList.add("skitt-ui--listening"))
    }, T = function() {
        h() && (c.classList.add("skitt-ui--not-listening"),
        c.classList.remove("skitt-ui--listening"))
    }, v = function() {
        l || (l = !0,
        y())
    }, x = function() {
        l && (l = !1,
        T())
    }, _ = function(t, e) {
        h() && (document.getElementById(e).innerHTML = t)
    }, S = function(t) {
        Array.isArray(t) && (t = t[0]),
        a.SpeechKITT.setRecognizedSentence(t)
    }, w = function(t, e) {
        if ("function" != typeof t)
            throw new TypeError(e)
    };
    a.SpeechKITT = {
        setStartCommand: function(t, e) {
            t = a[t] || t,
            w(t, "invalid callback function"),
            n = {
                callback: t,
                context: e = e || this
            }
        },
        setAbortCommand: function(t, e) {
            t = a[t] || t,
            w(t, "invalid callback function"),
            i = {
                callback: t,
                context: e = e || this
            }
        },
        startRecognition: function() {
            if (!n)
                throw new TypeError("cannot start recognition. Start command not defined");
            var t;
            r && ((t = new Date).setTime(t.getTime() + 6e4 * r),
            document.cookie = "skittremember=1; expires=" + t.toUTCString() + "; path=/"),
            n.callback.apply(n.context),
            v()
        },
        abortRecognition: function() {
            if (!i)
                throw new TypeError("cannot abort recognition. Abort command not defined");
            document.cookie = "skittremember=1; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",
            i.callback.apply(i.context),
            x()
        },
        toggleRecognition: function() {
            l ? this.abortRecognition() : this.startRecognition()
        },
        onStart: function() {
            a.clearTimeout(e),
            v()
        },
        onEnd: function() {
            e = setTimeout(x, 100)
        },
        setStylesheet: function(t) {
            o = t,
            p()
        },
        render: function() {
            h() || ((c = document.createElement("div")).id = "skitt-ui",
            c.innerHTML = '<a id="skitt-toggle-button">&nbsp;</a><label for="skitt-toggle-button" id="skitt-toggle-button__label">' + d + '</label><div id="skitt-listening-box"><div id="skitt-listening-text"><span id="skitt-listening-text__instructions">' + u + "</span></div></div>",
            c.style.display = "none",
            document.body.appendChild(c),
            k(),
            p(),
            document.getElementById("skitt-toggle-button").addEventListener("click", function() {
                a.SpeechKITT.toggleRecognition()
            })),
            -1 === document.cookie.indexOf("skittremember") || this.isListening() || this.startRecognition(),
            this.isListening() ? y() : T()
        },
        vroom: function() {
            this.render()
        },
        hide: function() {
            if (!h())
                throw new TypeError("cannot hide interface. Must be rendered first");
            c.classList.add("skitt-ui--hidden")
        },
        show: function() {
            if (!h())
                throw new TypeError("cannot show interface. Must be rendered first");
            c.classList.remove("skitt-ui--hidden")
        },
        isListening: function() {
            return l
        },
        setToggleLabelText: function(t) {
            d = t,
            _(t, "skitt-toggle-button__label")
        },
        setInstructionsText: function(t) {
            "string" == typeof t && (u = t,
            _(t, "skitt-listening-text__instructions"))
        },
        setSampleCommands: function(t) {
            Array.isArray(t) || (t = []),
            g = t,
            k()
        },
        rememberStatus: function(t) {
            if ("number" != typeof t || t < 0)
                throw new TypeError("rememberStatus() only accepts positive integers");
            r = t
        },
        getLastRecognizedSentence: function() {
            return 0 === m.length ? t : m[m.length - 1]
        },
        setRecognizedSentence: function(t) {
            "string" == typeof t && (m.push(t),
            b())
        },
        displayRecognizedSentence: function(t) {
            f = !(arguments.length > 0) || !!t,
            b()
        },
        jessica: function() {
            this.setStartCommand(jessica.start),
            this.setAbortCommand(jessica.abort),
            jessica.addCallback("start", this.onStart),
            jessica.addCallback("end", this.onEnd),
            jessica.addCallback("resultMatch", S),
            jessica.addCallback("resultNoMatch", S)
        }
    }
}
).call(this);
