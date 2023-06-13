function receivesAFunction(callback) {
    console.log('This is a Callback');
    callback();
}
function callback() {
    console.log('I have been Called Back');
}
receivesAFunction(callbackFunction);

function namedFunction() { return 5 + 5};

function returnsANamedFunction(namedFunction) {
        function namedFunction () {
            5 + 5;
        }
        return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("Anombalus");
    }
}
