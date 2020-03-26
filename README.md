

















# crypto-core

A Node.js module for Symmetric key encryption module. varying according to the size of the chain of characters and also of the digest. Robust, stable.

## Explain
the encryption function sets the following coreEncode (x1, x2):
x1 = the character string to encrypt.
x2 = to the key (also called digest in cryptography) a value is taken by default if you do not give anything which is 6. this key can only be of integer type because it is redundant (its value is modified inside the function by arithmetical operations in order to restore to the encryption a high robustness.)

the decryption function takes the same settings for coreDecode (x1, x2):
x1 = the character string to be decrypted.
x2 = with the key (also called digest in cryptography) a value is taken by default if you do not give anything which is 6.

the encryption depends on the size of the chain to be encrypted and the digest, the digest is not constant because it varies during encryption.
which means that we don't have the same code for the same word used in two different sentences.
Take into account multiple character chain.
so this code works for channels with french, spanish, deutsch, latin accents and lots of character with variant obselette.
Do not take into account the Greek accents, I do not take into account also all the Chinese, Japanese and Korean accents (Madarain, Katakana, etc ....)




## Installation

```sh
$ npm i crypto-core
```









## Example






```js
"use strict"
// For es5
const cryptoCore = require("crypto-core")

const notCoded = "bonjour"
const otherNotCoded = "bonjour je suis ce que je suis et toi"

const coded = cryptoCore.coreEncoded(notCoded)
// coded -> oAytxCy
const otherCoded = cryptoCore.coreEncoded(otherNotCoded)
// coded -> S42X162 TN 01OX TV 7ÄV 0V 9ÄZ9 VÀ À5Z

const codedWithDigest = cryptoCore.coreEncoded(notCoded, 8)
// coded -> qCAvzEA

const decode = cryptoCore.coreDecoded(coded)
// coded -> bonjour



// For TypeScript or es6

import { coreDecode, coreEncode } from 'crypto-core';

const notCoded = "bonjour"
const otherNotCoded = "bonjour je suis ce que je suis et toi"

const coded = coreEncode(notCoded)
// coded -> oAytxCy
const otherCoded = coreEncode(otherNotCoded)
// coded -> S42X162 TN 01OX TV 7ÄV 0V 9ÄZ9 VÀ À5Z

const codedWithDigest = coreEncode(notCoded, 8)
// coded -> qCAvzEA

const decode = coreDecode(coded)
// coded -> bonjour
```






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## License
See the [LICENSE][license] file.

## Autor
![Rochel Ryu](https://github.com/rochelryu)
 | Dev JS/TS Dart & Kotlin

[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
