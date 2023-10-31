<?php

class DatabaseConnection
{
    private $mysqli;

    public function __construct($hostname, $username, $password, $database)
    {
        $this->mysqli = new mysqli($hostname, $username, $password, $database);

        if ($this->mysqli->connect_error) {
            die("Connection failed: " . $this->mysqli->connect_error);
        }
    }

    public function getMysqli()
    {
        return $this->mysqli;
    }

    public function close()
    {
        $this->mysqli->close();
    }
}

$hostname = "localhost";
$username = "root";
$password = "";
$database = "finance";

$databaseConnection = new DatabaseConnection($hostname, $username, $password, $database);
?>
