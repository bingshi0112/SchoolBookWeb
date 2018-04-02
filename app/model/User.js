"use strict";
/**
 * Created by Gaurav on 14-11-2016.
 */
//ToDO: added temporary class for User Please add extra fields if needed
var User = (function () {
    function User(id, firstName, lastName, emailId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map