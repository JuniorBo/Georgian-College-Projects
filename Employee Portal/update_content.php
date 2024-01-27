<?php
session_start();

require_once("db_connection.php");

// Check if update form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["id"])) {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $hours_worked = $_POST["hours_worked"];

    $sql = "UPDATE employee SET name = '$name', hours_worked = $hours_worked WHERE id = $id";

    if ($mysqli->query($sql) === TRUE) {
        $_SESSION['message'] = "Record updated successfully";
        header("Location: view_content.php"); // Redirect user to view_content.php
        exit;
    } else {
        echo "Error updating record: " . $mysqli->error;
    }
}

// Check if update action is requested
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["id"])) {
    $id = $_GET["id"];
    $sql = "SELECT * FROM employee WHERE id = $id";
    $result = $mysqli->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Display update form
        echo "<form method='POST' action='update_content.php'>";
        echo "<input type='hidden' name='id' value='" . $row['id'] . "'>";
        echo "Name: <input type='text' name='name' value='" . $row['name'] . "'><br>";
        echo "Hours Worked: <input type='text' name='hours_worked' value='" . $row['hours_worked'] . "'><br>";
        echo "<input type='submit' value='Update'>";
        echo "</form>";
    } else {
        echo "No record found.";
    }
}
?>