function existsAndHasValue(key, value) {
    if (!(key[value]) || typeof(key[value]) == 'undefined' || key[value] == null || key[value] == ' ' || key[value].length <= 0) {
        return false;
    }
    return true;
}

module.exports = {
    existsAndHasValue
}