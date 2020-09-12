function existsAndHasValue(key, value) {
    if (!(key[value]) || typeof (key[value]) == 'undefined' || key[value] == null || key[value] == ' ' || key[value].length <= 0) {
        return false;
    }
    return true;
}

function generatePassword() {
    return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

module.exports = {
    existsAndHasValue,
    generatePassword
}