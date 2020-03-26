const initData: string[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ÀÄÂÈÉÊËŸÛÜÙÏÎÔÖàäâèéêëÿûüùïîôö!\"#$%&'()*+,-./|\\:;<=>?@[]_`{}~^".split('');
const initDigest = 6;

export function coreEncode(key_word: string, digest: number = initDigest): string {
    const key = key_word.length;
    let initialize = digest;
    const key_word_encoded = key_word.split('').map(value => {
        if(value === ' ') return ' ';
        else {
            const newDigest = (digest < - initialize) ? initialize : digest;
            const index = initData.indexOf(value) + key + newDigest ;
            const factor = parseInt((index / initData.length).toString(), 10);
            digest--;
            if ( factor > 1) {
                return initData[index];
            }
            else {
                return initData[index % initData.length];
            }
        }
    }).join('');
    return key_word_encoded;
}

export function coreDecode(key_word: string, digest: number = initDigest): string {
    const key = key_word.length;
    const initialize = digest;
    const key_word_encoded = key_word.split('').map(value => {
        if(value === ' ') return ' ';
        else {
            const newDigest = (digest < - initialize) ? initialize : digest;
            const index = initData.indexOf(value) - key - newDigest;
            const factor = parseInt((index / initData.length).toString(), 10);
            digest--;
            if ( factor > 1) {
                return initData[index];
            }
            else {
                return initData[index % initData.length];
            }
        }
    }).join('');
    return key_word_encoded;
}

