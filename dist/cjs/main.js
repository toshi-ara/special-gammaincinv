"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gammaincinv = void 0;
const special_gammaln_1 = require("@toshiara/special-gammaln");
const special_gammainc_1 = require("@toshiara/special-gammainc");
// Returns the inverse of the lower regularized inomplete gamma function
function gammaincinv(p, a, { upper = false } = {}) {
    let a1 = a - 1;
    const EPS = 1e-16;
    let gln = (0, special_gammaln_1.gammaln)(a);
    let x, err, t, u, pp;
    let afac = 0;
    let lna1 = 0;
    p = (upper) ? 0.5 - p + 0.5 : p;
    if (p >= 1) {
        return Math.max(100, a + 100 * Math.sqrt(a));
    }
    if (p <= 0) {
        return 0;
    }
    if (a > 1) {
        lna1 = Math.log(a1);
        afac = Math.exp(a1 * (lna1 - 1) - gln);
        pp = (p < 0.5) ? p : 1 - p;
        t = Math.sqrt(-2 * Math.log(pp));
        x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
        if (p < 0.5)
            x = -x;
        x = Math.max(1e-3, a * Math.pow(1 - 1 / (9 * a) - x / (3 * Math.sqrt(a)), 3));
    }
    else {
        t = 1 - a * (0.253 + a * 0.12);
        if (p < t)
            x = Math.pow(p / t, 1 / a);
        else
            x = 1 - Math.log(1 - (p - t) / (1 - t));
    }
    for (let j = 0; j < 12; j++) {
        if (x <= 0) {
            return 0;
        }
        err = (0, special_gammainc_1.gammainc)(x, a) - p;
        if (a > 1) {
            t = afac * Math.exp(-(x - a1) + a1 * (Math.log(x) - lna1));
        }
        else {
            t = Math.exp(-x + a1 * Math.log(x) - gln);
        }
        u = err / t;
        x -= (t = u / (1 - 0.5 * Math.min(1, u * ((a - 1) / x - 1))));
        if (x <= 0) {
            x = 0.5 * (x + t);
        }
        if (Math.abs(t) < EPS * x) {
            break;
        }
    }
    return x;
}
exports.gammaincinv = gammaincinv;
;
//# sourceMappingURL=main.js.map