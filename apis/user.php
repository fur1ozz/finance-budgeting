<?php
require 'db.php';

$databaseConnection = new DatabaseConnection($hostname, $username, $password, $database);

header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with your React app's origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $mysqli = $databaseConnection->getMysqli();

    // Replace [your_user_id] with the actual user ID you want to select.
    $user_id = 1; // Change this to your desired user_id

    // Fix the SQL query. You had a concatenation error.
    $sql = "SELECT * FROM users WHERE user_id = " . $user_id;

    $result = $mysqli->query($sql);

    if ($result) {
        $user = $result->fetch_assoc();

        if (!$user) {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
        } else {
            header('Content-Type: application/json');
            echo json_encode($user);
        }
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error fetching data from the database']);
    }
}

$databaseConnection->close();
?>
