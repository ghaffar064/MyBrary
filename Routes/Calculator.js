// Routes/calculator.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const  data  = req.session.results;
  res.render('LabFinal', { results:data });
});

router.post('/', (req, res) => {
    console.log("Request Came here")
  const { operand1, operation, operand2 } = req.body;

  // Perform calculation based on the selected operation
  let result;
  switch (operation) {
    case 'add':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case 'subtract':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case 'multiply':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case 'divide':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      result = 'Invalid operation';
  }

  // Store the calculation in the session
  req.session.results = req.session.results || [];
  req.session.results.push({
    operand1,
    operation,
    operand2,
    result,
  });

  console.log(req.session.results);
  // Redirect back to the calculator page
  res.redirect('/calculator');
});

module.exports = router;
