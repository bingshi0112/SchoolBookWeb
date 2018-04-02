"use strict";
var Course = (function () {
    function Course(id, university, department, course_num, section, prof, semester, teacherAssisstant, description) {
        this.id = id;
        this.university = university;
        this.department = department;
        this.course_num = course_num;
        this.section = section;
        this.prof = prof;
        this.semester = semester;
        this.teacherAssisstant = teacherAssisstant;
        this.description = description;
    }
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=Course.js.map