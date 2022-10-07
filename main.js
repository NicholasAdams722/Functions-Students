//Add a property to an object by using (.) notation.  (Ex... dog.neutered = true)

//Object creation
const createStudent = (studentName, gradeLevel) => {
  const studentObject = {
    name: studentName,
    grade: gradeLevel,
  };
  return studentObject;
};

//Add a property
const addMathGrade = (studentObject, mathGrade) => {
   
    studentObject.math= mathGrade
    
    return studentObject.math
};

//Add a property
const addHistoryGrade = (studentObject,historyGrade) => {
    
    studentObject.history= historyGrade

    return studentObject.history
};

//Add a property
const addScienceGrade = (studentObject, scienceGrade) => {
    
    studentObject.science= scienceGrade

    return studentObject
};

//Functions Needed
const newStudent=createStudent("Nick", 2);
const newMath=addMathGrade(newStudent, "A")
const newHistory=addHistoryGrade(newStudent, "B")
const newScience=addScienceGrade(newStudent, "C")

console.log(newScience);
