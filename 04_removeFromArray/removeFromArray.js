const removeFromArray = function(inArray, ...args) {
    
    // create a new array that is empty
    const outArrayWithoutElement = [];
    
    // go through the array
    inArray.forEach((item) => {
        if (!args.includes(item)) {
            outArrayWithoutElement.push(item);
        }
    });

    
    

    return outArrayWithoutElement;
};

// Do not edit below this line
module.exports = removeFromArray;
