<?php
require 'db.php';

$databaseConnection = new DatabaseConnection($hostname, $username, $password, $database);

// Enable CORS for your React app
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with your React app's origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $mysqli = $databaseConnection->getMysqli();
    
    // Manual ID set to 1
    $id = 1;
    
    $sql = "SELECT $id AS id, i.summa - t.total_transaction_sum AS difference
            FROM ienakumi i
            LEFT JOIN (
                SELECT SUM(summa) AS total_transaction_sum
                FROM transactions
            ) t ON 1=1";
    
    $result = $mysqli->query($sql);

    if ($result) {
        $transaction = $result->fetch_assoc(); // Fetch a single row

        // Build a single object
        $output = array(
            'id' => $transaction['id'],
            'difference' => $transaction['difference']
        );

        header('Content-Type: application/json');
        echo json_encode($output);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error fetching data from the database']);
    }
}

$databaseConnection->close();
?>
