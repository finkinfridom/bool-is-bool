const debug = require("debug")("bool-is-bool");
const isBool = (input)=>{
    debug(typeof (input));
    if (typeof (input) !== "boolean") {
        return false;
    }
    return input;
}
module.exports = {    
    isFalse: (input) => {
        return isBool(input) === false;
    },
    isTrue: (input) => {
        return isBool(input) === true;
    },
}