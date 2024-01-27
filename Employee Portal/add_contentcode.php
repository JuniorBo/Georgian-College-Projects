<?php
session_start();

require_once("db_connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $hours_worked = $_POST["hours_worked"];

    // Add image upload functionality
    $image = $_FILES["image"];
    
    $upload_dir = "uploads/";
    if (!file_exists($upload_dir)) {
        mkdir($upload_dir, 0777, true);
    }

    $image_path = $upload_dir . basename($image["name"]);
    if (move_uploaded_file($image["tmp_name"], $image_path)) {
        echo "The file ". basename($image["name"]). " has been uploaded.<br>";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }

    // Add the column 'image_path' to the SQL query
    $sql = "INSERT INTO employee (name, hours_worked, image_path) VALUES ('$name', $hours_worked, '$image_path')";

    // Sanitize inputs to prevent SQL injection
    $name = $mysqli->real_escape_string($name);
    $hours_worked = (int) $hours_worked; // Ensure it's an integer

    // Create and execute SQL query to insert data
    $sql = "INSERT INTO employee (name, hours_worked) VALUES ('$name', $hours_worked)";

    if ($mysqli->query($sql) === TRUE) {
        echo "Employee added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $mysqli->error;
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Employee Portal - Add Employee</title>
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <header>
        <?php
        include('includes/global-nav.php');
        ?>
    </header>

<div id="button">
        <a href="index.php">Back to Home</a>
        <a href="view_content.php">View Content</a>
    </div>
    <footer><br><br><br>
<?php
include('includes/footer-nav.php');
?>
<p><small>© Employee Portal</small></p>
</footer>
</body>

</html>