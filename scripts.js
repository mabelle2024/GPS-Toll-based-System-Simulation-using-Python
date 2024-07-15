document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const carRegistrationNumber = document.getElementById('carRegistrationNumber').value;
    const carName = document.getElementById('carName').value;
    const carType = document.getElementById('carType').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    const customerData = {
        vehicle_no: carRegistrationNumber,
        owner: name,
        bank_account: accountNumber,
        vehicle_type: carType,
        initial_ping: {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
        }
    };

    fetch('http://localhost:3000/api/saveCustomer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Customer data saved successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to save customer data');
    });

    // Reset the form
    document.getElementById('customerForm').reset();
});
