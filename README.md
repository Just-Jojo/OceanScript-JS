<h1 align="center">
  <br>
  <a href="https://github.com/Kreusada/OceanScript"><img src="https://raw.githubusercontent.com/Kreusada/OceanScript/main/Resources/oceanscript.png" alt="OceanScript Esoteric Language"></a>
  <br>
  OceanScript Esoteric Language
  <br>
</h1>

Welcome! This library is home to the JavaScript version of [Kreusada's](https://github.com/Kreusada) [OceanScript](https://github.com/OceanScript-Devs/OceanScript), an esoterical language originally written in Python.

I would recommend reading the [README](https://github.com/OceanScript-Devs/OceanScript/blob/main/README.md) to understand a bit more about it.

# JavaScript Implementation

Start by importing the functions for it

```js
const { encode, decode } = require("oceanscriptjs");
```

Let's check out the encoding first

```js
console.log(encode("Hello world"));
>>> _-.~-.^>..^>..~>..
~-...~>.._>..^>..~<.
```

As you can see the output looks quite odd. Let's see if it actually encoded it properly!

```js
console.log(decode("_-.~-.^>..^>..~>..\n~-...~>.._>..^>..~<."));
>>> hello world
```

Wonderful!

Capitalization gets ignored after encoding the message, so don't worry about that

# Commandline implementation

There is not a cli for the JavaScript version. If you would like a cli for OceanScript, check out the Python implementation.

## License
This project is licensed under the MIT license.

## Notes
This is a JS version of the Python implementation, so everything here belongs to Kreusada
