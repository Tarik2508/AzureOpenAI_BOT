// savePrDetails.js
const fileSystem = require('fs');
const prDetails = process.env.PR_DETAILS;

fileSystem.writeFile('pr_details.json', prDetails, (err) => {
  if (err) throw err;
  console.log('PR details have been saved!');
});
