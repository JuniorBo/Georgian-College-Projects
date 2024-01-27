<?php

session_start(); // Start the session

require_once("db_connection.php"); // Include the file for database connection

// Check if delete action is requested
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["action"]) && $_GET["action"] == "delete" && isset($_GET["id"])) {
    $id = $_GET["id"];
    $sql = "DELETE FROM employee WHERE id = $id";

    if ($mysqli->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $mysqli->error;
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Employee Portal - View Employees</title>
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>

    <header>
        <img src="images/logo.png" alt="Company Logo" width="360" height="250" />
        <h1>View Employees</h1>
        <?php
        include('includes/global-nav.php'); // Include the global navigation file
        ?>
    </header>
    <div class="center">
    <?php
    // Create and execute SQL query to retrieve data
    $sql = "SELECT * FROM employee";
    $result = $mysqli->query($sql);

    if ($result->num_rows > 0) {
        echo "<table>";
        echo "<tr><th>ID</th><th>Name</th><th>Hours Worked</th><th>Actions</th></tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row["id"] . "</td>";
            echo "<td>" . $row["name"] . "</td>";
            echo "<td>" . $row["hours_worked"] . "</td>";

            // Action buttons
            if (isset($_SESSION['user_id'])) {
                echo "<td><a href='update_content.php?id=" . $row['id'] . "'>Update</a> | ";
                echo "<a href='view_content.php?action=delete&id=" . $row['id'] . "'>Delete</a></td>";
            } else {
                echo "<td>You need to be logged in to update or delete records. <a href='../login.php'>Login</a></td>";
            }

            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "No records found.";
    }
    $mysqli->close(); // Close the database connection
    ?>
    </div>

    <div id="button">
        <a href="add_content.php">Add Employee</a><br><br>
    </div>

    <footer>
        <?php
        include('includes/footer-nav.php'); // Include the footer navigation file
        ?>
        <p><small>© Employee Portal</small></p>
    </footer>

</body>

</html>