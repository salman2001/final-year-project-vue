// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
const quiz = {
    title: 'My quiz',
    questions: [
      {
        text: "Question 1",
        responses: [
          {text: 'Wrong, too bad.'}, 
          {text: 'Right!', correct: true}, 
        ]
      }, {
        text: "Question 2",
        responses: [
          {text: 'Right answer', correct: true}, 
          {text: 'Wrong answer'}, 
        ]
      } 
    ]
  };
  export default quiz;
        
  