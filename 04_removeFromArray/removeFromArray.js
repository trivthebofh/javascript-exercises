const removeFromArray = function(inArray, toRemove) {
    // remove specific items from array
    let beforeRemoveElement = inArray.slice(0, (toRemove - 1));

    let afterRemoveElement = inArray(toRemove);

    let outArrayWithoutElement = beforeRemoveElement.concat(afterRemoveElement);

    return outArrayWithoutElement;
};

// Do not edit below this line
module.exports = removeFromArray;
