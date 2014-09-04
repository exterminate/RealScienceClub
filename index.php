<?php

if(isset($_POST['submit'])) {
	if(isset($_POST['number']) && isset($_POST['name'])) {
		
		$_SESSION['flash'] = "Thanks";
	}
	else {
		$_SESSION['flash'] = "Oops something wend wrong try again";
	}
}

?>

<form action="" method="POST">
	<label>Name</label><br>
	<input type="text" name="name" placeholder="name..."><br>
	<label>No. of decisions</label><br>
	<input type="text" name="number" size="2"><br>
	<input type="submit" name="submit" value="submit">
</form>

<?php
// flash

if(isset($_SESSION['flash'])) {
	echo $_SESSION['flash'];
	unset($_SESSION['flash']);
}
?>
