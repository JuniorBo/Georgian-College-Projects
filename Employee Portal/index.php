<?php
session_start();
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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Gabarito&family=Montserrat&family=Nabla&family=Sedgwick+Ave+Display&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+NKo+Unjoined&display=swap" rel="stylesheet">
</head>

<body>
    <main>
        <header>
            <h1>EMPLOYEE PORTAL</h1>
            <?php
            include('includes/global-nav.php');
            ?>
        </header>

        <div id="portal">
    <div id="content-links">
        <a href="add_content.php">Add Content</a>
        <a href="view_content.php">View Content</a>
    </div>
    <div id="auth-links">
    <?php
    if (!isset($_SESSION['user_id'])) {
        echo '<a href="login.php">Login</a>';
    }
    if (isset($_SESSION['user_id'])) {
        echo '<a href="logout.php">Logout</a>';
    }
    ?>
    </div>
</div>

    </main>

    <!-- Page-level footer -->

    <footer>
        <?php
        include('includes/footer-nav.php');
        ?>
        <p><small>© Employee Portal</small></p>
    </footer>
</body>
</html>