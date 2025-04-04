<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Database connection details
$host = "localhost";
$user = "root";
$password = "$87654321$"; // use your MySQL password
$dbname = "employeelist";

// Create connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Query to join employees, departments, and managers
$sql = "SELECT 
            e.employeeID,
            e.firstName,
            e.dateEmployed,
            d.name AS department_name,
            m.name AS manager_name
        FROM employees e
        LEFT JOIN departments d ON e.department_id = d.employeeID

$result = $conn->query($sql);

$employees = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $employees= $row;
    }
}

echo json_encode($employees);

$conn->close();
?>