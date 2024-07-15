const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'customers.json');

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());

// Ensure the customers.json file exists
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf8');
    console.log('Created customers.json file');
}

app.post('/api/saveCustomer', (req, res) => {
    const customerData = req.body;
    console.log('Received customer data:', customerData);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send({ message: 'Failed to read file' });
        }

        let customers = [];
        if (data) {
            customers = JSON.parse(data);
        }
        console.log('Current customers data:', customers);

        customers.push(customerData);

        fs.writeFile(filePath, JSON.stringify(customers, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send({ message: 'Failed to write file' });
            }
            console.log('Customer data saved successfully');
            res.send({ message: 'Customer data saved successfully' });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
