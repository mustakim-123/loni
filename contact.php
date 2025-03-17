<?php
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$message = $_POST['message'];

// Database Connection
$conn = new mysqli("localhost", "root", "", "form");

// Check connection
if ($conn->connect_error) { 
    die("Connection failed: " . $conn->connect_error);
} else {
    // Insert data into database
    $stmt = $conn->prepare("INSERT INTO feedback (name, mobile, email, message) VALUES (?, ?, ?, ?)");
    
    // Bind parameters (all as strings)
    $stmt->bind_param("ssss", $name, $mobile, $email, $message);
    
    // Execute the statement
    $stmt->execute();
    
    // Success message
    echo "Data inserted successfully";
    
    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
