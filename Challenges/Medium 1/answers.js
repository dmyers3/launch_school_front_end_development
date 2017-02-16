// Grade School

// create school object
// create add student method
//   if school.students[grade] exists push name to end of array
//   if not create new array with name as element
// create grade method, gives array of students with matching grade
// create object to hold students and grades, with grade as keys and array of 
//   student names as values
// create to_h method to display sorted names and grades, sorted by grade 1,2,3
//   then alphabetical by student
  

// var school = {};

// school.students = {}

// school.to_h = function() {
//   var schoolKeys = Object.keys(school.students).sort(function(grade1, grade2) {
//     return grade1 > grade2 ? 1 : -1;
//   });
//   var sortedStudents = {};
//   schoolKeys.forEach(function(grade) {
//     sortedStudents[grade] = school.students[grade].sort();
//   });
//   return sortedStudents;
// }



// school.add = function(name, grade) {
//   if (school.students[grade]) {
//     school.students[grade].push(name);
//   } else {
//     school.students[grade] = [name];
//   }
// }

// school.grade = function(grade) {
//   return school.students[grade] || [];
// }
