"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initData = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ÀÄÂÈÉÊËŸÛÜÙÏÎÔÖàäâèéêëÿûüùïîôö!\"#$%&'()*+,-./|\\:;<=>?@[]_`{}~^".split('');
var initDigest = 6;
function coreEncode(key_word, digest) {
    if (digest === void 0) { digest = initDigest; }
    var key = key_word.length;
    var currentDigest = digest;
    var key_word_encoded = key_word.split('').map(function (value) {
        if (value === ' ')
            return ' ';
        var charIndex = initData.indexOf(value);
        if (charIndex === -1)
            return value; // Caractère non trouvé
        var index = charIndex + key + currentDigest;
        currentDigest--; // Décrémenter pour le prochain caractère
        // Gestion correcte du modulo (toujours positif)
        index = ((index % initData.length) + initData.length) % initData.length;
        return initData[index];
    }).join('');
    return key_word_encoded;
}
exports.coreEncode = coreEncode;
function coreDecode(key_word, digest) {
    if (digest === void 0) { digest = initDigest; }
    var key = key_word.length;
    var currentDigest = digest;
    var key_word_decoded = key_word.split('').map(function (value) {
        if (value === ' ')
            return ' ';
        var charIndex = initData.indexOf(value);
        if (charIndex === -1)
            return value; // Caractère non trouvé
        var index = charIndex - key - currentDigest;
        currentDigest--; // Décrémenter pour le prochain caractère
        // Gestion correcte du modulo (toujours positif)
        index = ((index % initData.length) + initData.length) % initData.length;
        return initData[index];
    }).join('');
    return key_word_decoded;
}
exports.coreDecode = coreDecode;
