"use strict";
var User = (function () {
    function User(firebaseID, facebookID, firstName, lastName, email, phoneNumber, school, education, proficiency, selfInfo) {
        this.firebaseID = firebaseID;
        this.facebookID = facebookID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.school = school;
        this.education = education;
        this.proficiency = proficiency;
        this.selfInfo = selfInfo;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=userProfile.js.map