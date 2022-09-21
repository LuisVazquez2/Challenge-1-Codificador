const letters = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}
const encrypt = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}
const encrypt_text = (text) => {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] in letters) {
            encrypted += letters[text[i]];
        } else {
            encrypted += text[i];
        }
    }
    return encrypted;
}
//start with the maximum length of the value than is 5
const is_Encrypted = (text, pos_ini) => {
    let max_length = (text.length > 5) ? 5 : text.length;
    let is_encrypted = false;
    var text_to_check = text.substring(pos_ini, pos_ini + max_length);
    while (text_to_check.length > 0 && !is_encrypted) {
        if (text_to_check in encrypt) {
            is_encrypted = true;
        } else {
            max_length--;
            text_to_check = text.substring(pos_ini, pos_ini + max_length);
        }
    }
    return { is_encrypted, pos_ini, max_length };
}

const decrypt_text = (text) => {
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
        let { is_encrypted, pos_ini, max_length } = is_Encrypted(text, i);
        if (is_encrypted) {
            decrypted += encrypt[text.substring(pos_ini, pos_ini + max_length)];
            i += max_length - 1;
        } else {
            decrypted += text[i];
        }
    }
    return decrypted;
}
f_encrypt = () => {
    let text = document.getElementById('text').value;
    text = text.toLowerCase();
    let encrypted = encrypt_text(text);
    document.getElementById('text').value = encrypted;
}
f_decrypt = () => {
    let text = document.getElementById('text').value;
    text = text.toLowerCase();
    let decrypted = decrypt_text(text);
    document.getElementById('text').value = decrypted;
}
copy_to_clipboard = (text) => {
    var text = document.getElementById('text').value;
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
}
