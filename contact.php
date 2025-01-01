<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Adjust this for your React domain
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Database credentials
$host = 'localhost';        // Host (usually localhost)
$username = 'root';         // Database username
$password = '';             // Database password
$dbname = 'contactus'; // Database name

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

// Get the JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Process form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $query = $data['query'] ?? '';

    // Validate inputs
    if (empty($name) || empty($email) || empty($phone) || empty($query)) {
        echo json_encode(["error" => "All fields are required"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["error" => "Invalid email format"]);
        exit;
    }

    if (!preg_match('/^[0-9]{10}$/', $phone)) {
        echo json_encode(["error" => "Phone number must be 10 digits"]);
        exit;
    }

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO form (name, email, phone, query) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $query);

    if ($stmt->execute()) {
        echo json_encode(["success" => "Form submitted successfully"]);
    } else {
        echo json_encode(["error" => "Failed to save data: " . $conn->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "Invalid request method"]);
}

// Close the database connection
$conn->close();
?>
