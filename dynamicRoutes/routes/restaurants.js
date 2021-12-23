storedRestaurants.sort(function(resA, resB) {
    if (resA.name > resB.name) {
        return 1
    }
    return -1
}) 