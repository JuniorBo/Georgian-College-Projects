<link rel="stylesheet" type="text/css" href="../css/menu-styles.css">
<nav>
  <div class="navbar">
    <div class="container nav-container">
      <input class="checkbox" type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <div class="logo">
      </div>
      <div class="menu-items">
        <li><a href="index.php">Index</a></li>
        <li><a href="add_content.php">Add Content</a></li>
        <li><a href="view_content.php">View Content</a></li>
        <li><a href="login.php">Login</a></li>
        <li><a href="register.php">Register</a></li>
        <?php
        if (isset($_SESSION['user_id'])) {
          echo '<li><a href="../logout.php">Logout</a></li>';
        }
        ?>
      </div>
    </div>
  </div>
</nav>