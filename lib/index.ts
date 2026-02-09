const initData: string[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ÀÄÂÈÉÊËŸÛÜÙÏÎÔÖàäâèéêëÿûüùïîôö!\"#$%&'()*+,-./|\\:;<=>?@[]_`{}~^".split('');
const initDigest = 6;

export function coreEncode(key_word: string, digest: number = initDigest): string {
    const key = key_word.length;
    let currentDigest = digest;
    
    const key_word_encoded = key_word.split('').map(value => {
        if(value === ' ') return ' ';
        
        const charIndex = initData.indexOf(value);
        if(charIndex === -1) return value; // Caractère non trouvé
        
        let index = charIndex + key + currentDigest;
        currentDigest--; // Décrémenter pour le prochain caractère
        
        // Gestion correcte du modulo (toujours positif)
        index = ((index % initData.length) + initData.length) % initData.length;
        
        return initData[index];
    }).join('');
    
    return key_word_encoded;
}

export function coreDecode(key_word: string, digest: number = initDigest): string {
    const key = key_word.length;
    let currentDigest = digest;
    
    const key_word_decoded = key_word.split('').map(value => {
        if(value === ' ') return ' ';
        
        const charIndex = initData.indexOf(value);
        if(charIndex === -1) return value; // Caractère non trouvé
        
        let index = charIndex - key - currentDigest;
        currentDigest--; // Décrémenter pour le prochain caractère
        
        // Gestion correcte du modulo (toujours positif)
        index = ((index % initData.length) + initData.length) % initData.length;
        
        return initData[index];
    }).join('');
    
    return key_word_decoded;
}