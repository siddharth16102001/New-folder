const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/layout.html');
});


app.post('/generateReport', (req, res) => {
  const {
    fullTimeEmployees,
    partTimeEmployees,
    officeLocations,
    employeesInLargestOffice,
    iso27001,
    nist80053,
    soc2TypeII,
    gdpr,
    iso27701,
    cyberLiabilityInsurance,
    coverageAmount,
    ransomwareCoverage,
    itCybersecurityRevenuePercentage,
    itCybersecurityBudgetPercentage
  } = req.body;

  const report = `
    Financial Score
    Impact analysis of downtime: A
    Cybersecurity cost to revenue: A
    ROI mapping of risks protected to cost incurred: A
    Insurance premium paid: A

    Legal Score
    Compliance as per industry standards: B
    Compliance to existing certifications: B
    Compliance to regulatory standards: B
    Liabilities arising from 3rd parties (customer, partner, supplier/vendor): B

    Business Score
    Evidence of readiness for achieving RTO and RPO: C
    Asset inventory and classification: C
    Managing internal threats: C
    Managing forward-looking risks: C

    Technical Score
    Threat landscape: D
    Defensive measures: D
    Offensive measures: D
    Continuous monitoring effectiveness: D
  `;

  fs.writeFile('cybersecurity_report.txt', report, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error generating report');
    } else {
      console.log('Report generated successfully');
      res.status(200).send('Report generated successfully');
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

