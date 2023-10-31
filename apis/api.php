<?php
require 'db.php';

$databaseConnection = new DatabaseConnection($hostname, $username, $password, $database);
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with your React app's origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $mysqli = $databaseConnection->getMysqli();

    // Modify the SQL query to filter by user_id = 1
    $user_id = 1;
    $sql = "SELECT kurizmaksa, datums, summa FROM transactions WHERE user_id = $user_id ORDER BY datums DESC";
    $result = $mysqli->query($sql);

    if ($result) {
        $transactions = array();
        while ($row = $result->fetch_assoc()) {
            $transactions[] = $row;
        }

        header('Content-Type: application/json');
        echo json_encode($transactions);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error fetching data from the database']);
    }
}

$databaseConnection->close();
?>
