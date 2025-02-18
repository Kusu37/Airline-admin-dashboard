// Function to save the owner's profile information
function saveOwnerProfile() {
    const ownerName = document.getElementById('owner-name').value;
    const ownerEmail = document.getElementById('owner-email').value;
    const ownerPhone = document.getElementById('owner-phone').value;

    if (ownerName && ownerEmail && ownerPhone) {
        alert('Owner profile saved!');
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to add revenue
let totalRevenue = 0;
function addRevenue() {
    const ticketRevenue = parseFloat(document.getElementById('ticket-revenue').value) || 0;
    const extraRevenue = parseFloat(document.getElementById('extra-revenue').value) || 0;
    const loyaltyRevenue = parseFloat(document.getElementById('loyalty-revenue').value) || 0;

    totalRevenue = ticketRevenue + extraRevenue + loyaltyRevenue;

    document.getElementById('total-revenue').textContent = `$${totalRevenue.toFixed(2)}`;
}

// Function to add expense
let totalExpenses = 0;
function addExpense() {
    const maintenanceExpense = parseFloat(document.getElementById('maintenance-expense').value) || 0;
    const staffExpense = parseFloat(document.getElementById('staff-expense').value) || 0;
    const airportFee = parseFloat(document.getElementById('airport-fee').value) || 0;

    totalExpenses = maintenanceExpense + staffExpense + airportFee;

    document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
}

// Function to calculate net profit/loss
function calculateProfitLoss() {
    const netProfitLoss = totalRevenue - totalExpenses;
    document.getElementById('net-profit-loss').textContent = `$${netProfitLoss.toFixed(2)}`;
}

// Function to add flight schedule
function addSchedule() {
    const route = document.getElementById('schedule-route').value;
    const date = document.getElementById('flight-date').value;
    const time = document.getElementById('flight-time').value;

    if (route && date && time) {
        const scheduleList = document.getElementById('schedule-list');
        const newSchedule = document.createElement('li');
        newSchedule.textContent = `Route: ${route}, Date: ${date}, Time: ${time}`;
        scheduleList.appendChild(newSchedule);
    } else {
        alert('Please fill in all schedule details.');
    }
}

// Function to add an aircraft
function addAircraft() {
    const aircraftId = document.getElementById('aircraft-id').value;
    const aircraftType = document.getElementById('aircraft-type').value;
    const aircraftCapacity = document.getElementById('aircraft-capacity').value;

    if (aircraftId && aircraftType && aircraftCapacity) {
        const aircraftList = document.getElementById('aircraft-list');
        const newAircraft = document.createElement('li');
        newAircraft.textContent = `Aircraft ID: ${aircraftId}, Type: ${aircraftType}, Capacity: ${aircraftCapacity}`;
        aircraftList.appendChild(newAircraft);
    } else {
        alert('Please fill in all aircraft details.');
    }
}

// Function to add passenger feedback
function addFeedback() {
    const feedback = document.getElementById('feedback').value;

    if (feedback) {
        const feedbackList = document.getElementById('feedback-list');
        const newFeedback = document.createElement('li');
        newFeedback.textContent = feedback;
        feedbackList.appendChild(newFeedback);
    } else {
        alert('Please enter feedback.');
    }
}

// Function to update flight status
function updateStatus() {
    const flightStatus = document.getElementById('flight-status').value;
    document.getElementById('current-status').textContent = flightStatus;
}

// Function to analyze market trends
function analyzeMarketTrends() {
    document.getElementById('market-trends-results').innerHTML = 'Market trends analysis is underway...';
    // Placeholder for real data
    setTimeout(() => {
        document.getElementById('market-trends-results').innerHTML = 'Trends analysis complete. Consider optimizing your routes.';
    }, 2000);
}

// Function to segment customers
function segmentCustomers() {
    document.getElementById('customer-segmentation-results').innerHTML = 'Segmenting customers...';
    // Placeholder for real data
    setTimeout(() => {
        document.getElementById('customer-segmentation-results').innerHTML = 'Customers segmented based on behavior patterns.';
    }, 2000);
}

// Function to schedule flight maintenance
function scheduleMaintenance() {
    const maintenanceDate = document.getElementById('maintenance-schedule').value;
    if (maintenanceDate) {
        alert(`Maintenance scheduled for ${maintenanceDate}`);
    } else {
        alert('Please select a maintenance date.');
    }
}

// Function to add staff
function addStaff() {
    const staffId = document.getElementById('staff-id').value;
    const staffName = document.getElementById('staff-name').value;
    const staffRole = document.getElementById('staff-role').value;

    if (staffId && staffName && staffRole) {
        const staffList = document.getElementById('staff-list');
        const newStaff = document.createElement('li');
        newStaff.textContent = `Staff ID: ${staffId}, Name: ${staffName}, Role: ${staffRole}`;
        staffList.appendChild(newStaff);
    } else {
        alert('Please fill in all staff details.');
    }
}

// Function to generate reports
function generateReport() {
    document.getElementById('report-content').innerHTML = 'Generating report...';
    // Placeholder for real data
    setTimeout(() => {
        document.getElementById('report-content').innerHTML = 'Report generated. View detailed statistics and insights.';
    }, 2000);
}

// 1. Revenue and Expense Analytics
function analyzeRevenueExpense() {
    // Example: Generate dummy analysis data
    let results = `
        <p>Revenue to Expense Ratio: 1.5</p>
        <p>Suggested Improvements: Increase ticket prices during peak seasons</p>
    `;
    document.getElementById("analytics-results").innerHTML = results;
}

// 2. Dynamic Pricing
function setDynamicPricing() {
    let basePrice = parseFloat(document.getElementById("base-price").value);
    let demandFactor = parseFloat(document.getElementById("pricing-factor").value);
    let dynamicPrice = basePrice * demandFactor;
    document.getElementById("dynamic-price").innerText = "$" + dynamicPrice.toFixed(2);
}

// 3. Save Customer Profile
function saveCustomerProfile() {
    let customerID = document.getElementById("customer-id").value;
    let customerName = document.getElementById("customer-name").value;
    let customerEmail = document.getElementById("customer-email").value;
    let customerList = document.getElementById("customer-list");

    // Add to the customer list
    customerList.innerHTML += `<li>${customerName} (${customerEmail})</li>`;
}

// 4. Add Staff Member
function addStaff() {
    let staffID = document.getElementById("staff-id").value;
    let staffName = document.getElementById("staff-name").value;
    let staffRole = document.getElementById("staff-role").value;
    let staffList = document.getElementById("staff-list");

    // Add to staff list
    staffList.innerHTML += `<li>${staffName} - ${staffRole}</li>`;
}

// 5. Analyze Market Trends
function analyzeMarketTrends() {
    // Example: Generate dummy market trend results
    let results = `
        <p>Popular Routes: NYC -> LA, LA -> SF</p>
        <p>Performance Optimization Suggestions: Increase marketing for LA-SF route.</p>
    `;
    document.getElementById("market-trends-results").innerHTML = results;
}
// 1. Revenue and Expense Analytics
function analyzeRevenueExpense() {
    // Example: Generate dummy analysis data
    let results = `
        <p>Revenue to Expense Ratio: 1.5</p>
        <p>Suggested Improvements: Increase ticket prices during peak seasons</p>
    `;
    document.getElementById("analytics-results").innerHTML = results;
}

// 2. Dynamic Pricing
function setDynamicPricing() {
    let basePrice = parseFloat(document.getElementById("base-price").value);
    let demandFactor = parseFloat(document.getElementById("pricing-factor").value);
    let dynamicPrice = basePrice * demandFactor;
    document.getElementById("dynamic-price").innerText = "$" + dynamicPrice.toFixed(2);
}

// 3. Save Customer Profile
function saveCustomerProfile() {
    let customerID = document.getElementById("customer-id").value;
    let customerName = document.getElementById("customer-name").value;
    let customerEmail = document.getElementById("customer-email").value;
    let customerList = document.getElementById("customer-list");

    // Add to the customer list
    customerList.innerHTML += `<li>${customerName} (${customerEmail})</li>`;
}

// 4. Add Staff Member
function addStaff() {
    let staffID = document.getElementById("staff-id").value;
    let staffName = document.getElementById("staff-name").value;
    let staffRole = document.getElementById("staff-role").value;
    let staffList = document.getElementById("staff-list");

    // Add to staff list
    staffList.innerHTML += `<li>${staffName} - ${staffRole}</li>`;
}

// 5. Analyze Market Trends
function analyzeMarketTrends() {
    // Example: Generate dummy market trend results
    let results = `
        <p>Popular Routes: NYC -> LA, LA -> SF</p>
        <p>Performance Optimization Suggestions: Increase marketing for LA-SF route.</p>
    `;
    document.getElementById("market-trends-results").innerHTML = results;
}
