<?php
require_once("db_connection.php");

session_start();
// If user is already logged in, redirect to index.php
if (isset($_SESSION['user_id'])) {
    header('Location: index.php');
    exit();
}

// Verify if the user has submitted the login form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the username and password are correct
    $sql = "SELECT id, username FROM users WHERE username = '$username' AND password = '$password'";
    $result = $mysqli->query($sql);

    if ($result->num_rows == 1) {
        // User is logged in successfully
        $row = $result->fetch_assoc();
        $_SESSION['user_id'] = $row['id'];
        header('Location: index.php');
        exit();
    } else {
        $login_error = "Wrong credentials. Please try again.";
    }
}

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Login - Employee Portal</title>
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <header>
        <h1>EMPLOYEE PORTAL</h1>
        <?php
        include('includes/global-nav.php');
        ?>
    </header>

    <form action="login.php" method="post">
        <label for="username">Username:</label>
        <input type="text" name="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" required><br>

        <input type="submit" value="Login">

        <p><br>Don't have an account? <a href="register.php">Register</a></p>
        
    </form>

    <?php
    if (isset($login_error)) {
        echo "<p style='color: red;'>$login_error</p>";
    }
    ?>

<footer><br><br><br><br><br>
        <?php
        include('includes/footer-nav.php');
        ?>
        <p><small>© Employee Portal</small></p>
    </footer>
</body>

</html>