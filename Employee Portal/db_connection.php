<?php
$host = "localhost";
$username = "id21374405_root"; 
$password = "@Juninho321"; 
$database = "id21374405_employeeportal";

// Create a database connection
$mysqli = new mysqli($host, $username, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>