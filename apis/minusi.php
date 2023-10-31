<?php
require_once "db.php";
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with your React app's origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $client_data = file_get_contents("php://input");
    $data = json_decode($client_data);
    $kurizmaksa = $data->kurizmaksa;
    $datums = $data->datums;
    $summa= $data->summa;
    $user_id= $data->user_id;

    $mysqli = $databaseConnection->getMysqli();

    // Prepare and execute the SQL query to insert data into the ienakumi table
    $sql = "INSERT INTO transactions (kurizmaksa, datums, summa, user_id) VALUES (?, ?, ?, ?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ssdi", $kurizmaksa, $datums, $summa, $user_id);

    if ($stmt->execute()) {
        // Data was inserted successfully
        $response = array("message" => "Data inserted successfully");
        echo json_encode($response);
    } else {
        // Handle the case when data insertion fails
        $response = array("error" => "Data insertion failed");
        echo json_encode($response);
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the database connection
$databaseConnection->close();
?>
