<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Employee Portal - Register</title>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
    <header>
        <h1>Register</h1>
        <?php
        include('includes/global-nav.php'); // Include the global navigation bar
        ?>
    </header>

    <form action="registercode.php" method="post">
        <label for="username">Username:</label>
        <input type="text" name="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" required><br>

        <input type="submit" value="Register">
    </form>

    <footer><br><br><br><br><br>
        <?php
        include('includes/footer-nav.php'); // Include the footer navigation bar
        ?>
        <p><small>© Employee Portal</small></p>
    </footer>
</body>
</html>
