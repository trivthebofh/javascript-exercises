const leapYears = function(inYear) {
    
    if (inYear % 400 == 0) {
        return true;
    } else if (inYear % 100 == 0) {
        return false;
    } else if (inYear % 4 == 0) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = leapYears;
