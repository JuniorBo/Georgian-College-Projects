<?php
session_start();

require_once("db_connection.php");

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Employee Portal - 200548728</title>
    <meta name="author" content="Demilson Moreira Bose Junior - 200548728" />
    <meta name="description" content="An employee portal that the user can login and see hours worked">
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <header>
        <img src="images/logo.png" alt="Company Logo" width="360" height="250" />
        <h1>Add Employee Hours</h1>
        <?php
        include('includes/global-nav.php');
        ?>
    </header>

    <form action="add_contentcode.php" method="post" enctype="multipart/form-data">
        <label for="name">Name:</label>
        <input type="text" name="name" required><br>
        <label for="hours_worked">Hours Worked:</label>
        <input type="number" name="hours_worked" required><br>
        <label for="image">Image:</label>
        <input type="file" name="image" accept="image/*"><br>
        <input type="submit" value="Add Employee">
    </form>

    <footer><br><br><br>
        <?php
        include('includes/footer-nav.php');
        ?>
        <p><small>© Employee Portal</small></p>
    </footer>
</body>
</html>