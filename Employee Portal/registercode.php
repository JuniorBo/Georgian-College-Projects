<?php
session_start();

require_once("db_connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Verify if the username is in use
    $check_username_sql = "SELECT id FROM users WHERE username = '$username'";
    $result = $mysqli->query($check_username_sql);

    if ($result->num_rows > 0) {
        echo "Username already in use. Choose a different one.";
    } else {
        // Insert the new user into the database
        $insert_user_sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

        if ($mysqli->query($insert_user_sql) === TRUE) {
            // Store the message in session
            $_SESSION['message'] = "Registration successful! You can now log in. You will be redirected in 5 seconds.";
            // Output a simple HTML/JavaScript page to handle the redirection
            echo '<html><head><meta http-equiv="refresh" content="5;url=index.php"></head><body>';
            echo '<p>' . $_SESSION['message'] . '</p>';
            echo '</body></html>';
            exit;
        } else {
            echo "Error: " . $insert_user_sql . "<br>" . $mysqli->error;
        }
    }

    $mysqli->close();
}
?>
