"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initData = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ÀÄÂÈÉÊËŸÛÜÙÏÎÔÖàäâèéêëÿûüùïîôö!\"#$%&'()*+,-./|\\:;<=>?@[]_`{}~^".split('');
var initDigest = 6;
function coreEncode(key_word, digest) {
    if (digest === void 0) { digest = initDigest; }
    var key = key_word.length;
    var initialize = digest;
    var key_word_encoded = key_word.split('').map(function (value) {
        if (value === ' ')
            return ' ';
        else {
            var newDigest = (digest < -initialize) ? initialize : digest;
            var index = initData.indexOf(value) + key + newDigest;
            var factor = parseInt((index / initData.length).toString(), 10);
            digest--;
            if (factor > 1) {
                return initData[index];
            }
            else {
                return initData[index % initData.length];
            }
        }
    }).join('');
    return key_word_encoded;
}
exports.coreEncode = coreEncode;
function coreDecode(key_word, digest) {
    if (digest === void 0) { digest = initDigest; }
    var key = key_word.length;
    var initialize = digest;
    var key_word_encoded = key_word.split('').map(function (value) {
        if (value === ' ')
            return ' ';
        else {
            var newDigest = (digest < -initialize) ? initialize : digest;
            var index = initData.indexOf(value) - key - newDigest;
            var factor = parseInt((index / initData.length).toString(), 10);
            digest--;
            if (factor > 1) {
                return initData[index];
            }
            else {
                return initData[index % initData.length];
            }
        }
    }).join('');
    return key_word_encoded;
}
exports.coreDecode = coreDecode;
