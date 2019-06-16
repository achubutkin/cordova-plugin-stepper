var exec = require("cordova/exec");

var Stepper = function () {
    this.name = "Stepper";
};

Stepper.prototype.isStepCountingAvailable = function (onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "isStepCountingAvailable", []);
};

Stepper.prototype.startStepperUpdates = function (offset, onSuccess, onError, options) {
    offset = parseInt(offset) || 0;
    options = options || {};
    exec(onSuccess, onError, "Stepper", "startStepperUpdates", [offset, options]);
};

Stepper.prototype.stopStepperUpdates = function (onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "stopStepperUpdates", []);
};

Stepper.prototype.queryData = function (onSuccess, onError, options) {
    exec(onSuccess, onError, "Stepper", "queryData", [options]);
};

Stepper.prototype.getCurrentSteps = function (onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "getCurrentSteps", []);
};

Stepper.prototype.getDays = function (onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "getDays", []);
};

Stepper.prototype.getDaysWithoutToday = function (onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "getDaysWithoutToday", []);
};

Stepper.prototype.getSteps = function (date, onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "getSteps", [date]);
};

Stepper.prototype.getStepsByPeriod = function (start, end, onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "getStepsByPeriod", [start, end]);
};

Stepper.prototype.getTotalWithoutToday = function (onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "getTotalWithoutToday", []);
};

Stepper.prototype.getLastEntries = function (num, onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "getLastEntries", [num]);
};

Stepper.prototype.setNotificationLocalizedStrings = function (keyValueObj, onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "setNotificationLocalizedStrings", [keyValueObj]);
};

Stepper.prototype.setGoal = function (num, onSuccess, onError) {
    exec(onSuccess, onError, "Stepper", "setGoal", [num]);
};

module.exports = new Stepper();