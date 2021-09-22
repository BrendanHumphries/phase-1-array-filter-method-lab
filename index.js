function findMatching(array, string) {
    return array.filter(function(name) {
        return name.toUpperCase() === string.toUpperCase();
    });
}
function fuzzyMatch(array, string) {
    return array.filter(function(name) {
        return name.substring(0, 2) === string.substring(0, 2);
    });
}
function matchName(driver, string) {
    return driver.filter(function(object) {
        return object.name === string;
    });
}