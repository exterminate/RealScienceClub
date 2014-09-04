<?php

$file = unserialize(file_get_contents("decisionrecord.json"));

foreach($file as $k=>$f){
	echo "<li>".$f['name']." - ".$f['number']." - <a href='?i=".$k."'>mark done</a></li>";
}



header("Location: show.php");

?>
