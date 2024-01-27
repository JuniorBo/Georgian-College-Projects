<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Pizza Hungry</title>
	<meta name="author" content="Demilson" />
	<meta name="description" content="Web Page for user order a pizza using forms">
	<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
	<link rel="stylesheet" href="css/styles.css" />
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="JavaScript/jquery/dist/jquery.validate.min.js"></script>
	<script src="javaScript/formprogressbar.js"></script>
</head>

<body>
	<!-- Page Header -->
	<header>
		<!-- Logo -->
		<div class="logo">
			<a href="index.html">
				<img src="images/PizzaLogo.png" alt="Pizza Hungry Logo" width="300" height="100">
			</a>
		</div>
		<!-- Menu with options -->
		<nav>
			<ul class="menu-custom">
				<li><a href="#">About Us</a></li>
				<li><a href="#">Menu</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		</nav>
	</header>

	<main>
	
	<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["store_form_fname"];
    $address = $_POST["store_form_address"];
    $num_pizzas = $_POST["store_form_quantity"];
    $size = $_POST["store_form_size"];
    $toppings = "";
    if (isset($_POST["pizza-1"])) {
        $toppings .= "Margherita ";
    }
    if (isset($_POST["pizza-2"])) {
        $toppings .= "Pepperoni ";
    }
    if (isset($_POST["pizza-3"])) {
        $toppings .= "Vegan ";
    }
    $special_request = $_POST["store_form_request"];
    $payment = $_POST["store_form_payment"];

    echo '<h1 class="custom-h" style="font-size: 60px; color: rgb(227, 73, 73);">Thank you, ' . $name . '</h1>';
    echo '<h2 class="custom-h" style="color: rgb(211, 83, 83);">You can see the information below:</h2>';
    echo '<p>Address to deliver: <br><span style="color: rgb(14, 24, 33);">' . $address . '</span></p>';
    echo '<p>Nº of pizzas chosen: <br><span style="color: rgb(14, 24, 33);">' . $num_pizzas . '</span></p>';
    echo '<p>Size: <br><span style="color: rgb(14, 24, 33);">' . $size . '</span></p>';
    echo '<p>Toppings: <br><span style="color: rgb(14, 24, 33);">' . $toppings . '</span></p>';
    echo '<p>Special request: <br><span style="color: rgb(14, 24, 33);">' . $special_request . '</span></p>';
    echo '<p>Payment type: <br><span style="color: rgb(14, 24, 33);">' . $payment . '</span></p>';
}
?>
		</main>
        <footer>
		<p><small>© Pizza Hungry Company</small></p>
        </footer>
	</body>
</html>
