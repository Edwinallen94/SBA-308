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
try {

  if (assignmentGroup.course_id !== courseInfo.id) {
    throw new Error(
      `Assignment group ${assignmentGroup.id} does not belong to course ${courseInfo.id}`
    );


  }
// starting my for loop to identify the learners ID
  let learners = [];
  for (let i = 0; i < learnerSubmissions.length; i++) {
    let learner_id = learnerSubmissions[i].learner_id;
    if (learners.indexOf(learner_id) === -1) {
      learners.push(learner_id);
    }
  }

   
    for (let i = 0; i < learners.length; i++) {
      let learner_id = learners[i];
      let learnerData = { id: learner_id };
      let totalWeightedScore = 0;
      let totalPossiblePoints = 0;

// this section i will be looping through the assignment/ using a switch - break
      let assignment = null;
      for (let k = 0; k < assignmentGroup.assignments.length; k++) {
        if (assignmentGroup.assignments[k].id === submission.assignment_id) {
          assignment = assignmentGroup.assignments[k];
          break;
        }
      }
     
       if (assignment !== null && assignment.points_possible > 0) { //checking to see if the assignment is able to be found 

        if (assignment.due_at > submission.submission.submitted_at) {
          let score = submission.submission.score;


           if (submission.submission.submitted_at > assignment.due_at) { //decuct points if users submission is late 
           score = score - assignment.points_possible * 0.1;
            }

           // this will mark the % for the assignment 
            learnerData[assignment.id] =
              (score / assignment.points_possible) * 100;

                        /// adds the weighted avg calculation 
            totalWeightedScore += score;
            totalPossiblePoints += assignment.points_possible;
          }
        } else {
          throw new Error(
            `Invalid assignment data or points_possible is 0 for assignment ID ${submission.assignment_id}`
          );
        }
      }
    };


      