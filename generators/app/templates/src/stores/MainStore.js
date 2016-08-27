var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var MainStore = assign({}, EventEmitter.prototype, {
    getRating: function () {
        return result;
    },
    emitChange: function () {
        this.emit("ACTION");
    },
    addChangeListener: function (cb) {
        this.on("ACTION", cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener("ACTION", cb);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case "ACTION":
            /*Operations or Ajax calls*/
            MainStore.emitChange();
    }
});

module.exports = MainStore;