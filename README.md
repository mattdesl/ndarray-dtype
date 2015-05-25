# ndarray-dtype

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Return a data type from a string representing the data type.

Mostly useful for using with [ndarray](https://github.com/mikolalysenko/ndarray)
where you would like instantiate a typed array of the same `array.dtype`.

This builds on [dtype](https://www.npmjs.com/package/dtype), but includes some ndarray-specific features like `'buffer'` (at the expense of increasing bundle size due to including Buffer).

## Usage

[![NPM](https://nodei.co/npm/ndarray-dtype.png)](https://www.npmjs.com/package/ndarray-dtype)

#### `arr = dtype(str)`

Returns the constructor for the given data type, or `undefined` if the string type isn't recognized.

Data type | String
--------: | :-----
`Int8Array` | "int8"
`Int16Array` | "int16"
`Int32Array` | "int32"
`Uint8Array` | "uint8"
`Uint16Array` | "uint16"
`Uint32Array` | "uint32"
`Float32Array` | "float32"
`Float64Array` | "float64"
`Array` | "array"
`Uint8ClampedArray` | "uint8_clamped"
`Buffer` | "buffer"
`ArrayBuffer` | "generic"
`ArrayBuffer` | "data"
`ArrayBuffer` | "dataview"

**Note:** If `Buffer` isn't exposed globally, using `"buffer"` returns `undefined`. 

## Install

With [npm](https://npmjs.org) do:

```
npm install dtype
```

Use [browserify](http://browserify.org) to `require('ndarray-dtype')`.

## See Also

- [dtype](https://www.npmjs.com/package/dtype)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/ndarray-dtype/blob/master/LICENSE.md) for details.
