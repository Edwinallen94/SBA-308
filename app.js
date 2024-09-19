// Employ basic JavaScript syntax accurately.
// Implement control flow structures such as conditionals and loops effectively.
// Use arrays and objects to organize and manage data.
// Develop functions to create reusable code.
// Utilize loops and iteration to navigate through data collections.
// Implement error handling to manage potential code failures gracefully.

//You will create a script that gathers data, processes it,
//and then outputs a consistent result as described by a specification.
//This is a very typical situation in industry, and this particular scenario has been modified from a real application.
//The data you will use is provided below.

//steps to start the function
// 1. Need to create a function that GATHERS Data that outputs the results
// 2. Four different data types (courseInfo, assignmentGroup, assignmentInfo and learnerSubmission)
// 3. should throw an error (try/catch??)

//Starting code using loops, control flow and functions

const courseInfo = {
  id: 43,
  name: "Per Scholas RTT-43",
};

const assignmentGroup = {
  id: 12345,
  name: "SBA",
  course_id: 308,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Complete the SBA",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

const assignmentInfo = {
  id: 23,
  name: "",
  due_at: "",
  points_possible: 500,
};

const learnerSubmissions = {
  learner_id: 125,
  assignment_id: 1,
  submission: {
    submitted_at: "2023-01-25",
    score: 47,
  },
};

//adding each data types as parmaters
function getLearnerData(courseInfo, assignmentGroup, learnerSubmission) {
  //
}

let result = []; // created an empty array for my results.

//creating a try, catch for any errors
