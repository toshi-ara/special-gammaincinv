# gammaincinv

> Inverse incomplete gamma function.

This package is a rewrite of
 [jstat](https://www.npmjs.com/package/jstat)
 in Typescript.
This package supports both CommonJs and ES Modules.

Computes the inverse of the lower
[incomplete gamma function](https://en.wikipedia.org/wiki/Incomplete_gamma_function)

```math
P( x, a ) = \frac{\gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_0^x t^{a-1} e^{-t} \; dt
```

Specifically, for given `p` and `a` it finds the `x` such that `p =  P(x, a)`.

The function can also be used to invert the upper incomplete gamma function, which is defined as follows:  

```math
Q( x, a ) = \frac{\Gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_x^\infty t^{a-1} e^{-t} \; dt
```

Again, for given `p` and `a` the function returns the `x` which satisfies `p = Q(x, a)`.


## Installation

``` bash
$ npm install @toshiara/special-gammaincinv
```


## Usage

``` javascript
// for CommonJs
const { gammaincinv } = require('@toshiara/special-gammaincinv');

// for ES Modules
import { gammaincinv } from '@toshiara/special-gammaincinv';
```

### gammaincinv(p, a)

Inverts the regularized incomplete gamma function.
Contrary to the more commonly used definitoon,
 in this implementation the first argument is `p`
 and the second argument is the scale factor `a`.


```javascript
gammaincinv(0.0001, 2);
// returns 0.014209237621777502

gammaincinv(0.1, 1);
// returns 0.10536051565782636

gammaincinv(0.5, 5);
// returns 4.670908882795985

gammaincinv(0.8, 7);
// returns 9.07538528120425

gammaincinv(0.999, 9);
// returns 21.15619816583997
```

