//samples from: https://typeofnan.dev/what-is-a-higher-order-function/

//Taking function as argument

function evaluatesToFive(num, fn) {
    return fn(num) === 5;
}

function divideByTwo(num) {
    return num / 2;
}

console.log(evaluatesToFive(10, divideByTwo));

const newUser = {
    age: 12,
    password: 'asfhasdfij',
    agreeToTerms: true,
}

function oldEnough(user) {
    return user.age >= 18;
}

function passwordLongEnough(user) {
    return user.password.length >= 8;
}

function agreeToTerms(user) {
    return user.agreeToTerms === true;
}
function validate(obj, ...tests) {
    for(let i = 0; 1 < tests.length; i++) {
        if (tests[i](obj)  === false) {
            return false;
        }
    }
    return true;
}

console.log(validate(newUser, oldEnough, passwordLongEnough, agreeToTerms));

//My example:

function subtractTwo(num, fn) {
    return fn(num) - 2;
}

function addTen(nutted) {
    return nutted + 10;
}

console.log(subtractTwo(10, addTen))

