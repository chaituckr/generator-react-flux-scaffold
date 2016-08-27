var AppDispatcher = require('../dispatcher/AppDispatcher');

var Action = {
    getRatings: function () {
        AppDispatcher.handleViewAction({
            source: 'Source',
            actionType: "Action_Type"
        });
    }
};

module.exports = Action;
