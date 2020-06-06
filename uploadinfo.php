<?php

$userFile = fopen('php.txt', 'a+');
fwrite($userFile, $_POST['email'].'|');
fwrite($userFile, $_POST['ten'].'|');
fwrite($userFile, $_POST['sdt'].'|');
fwrite($userFile, $_POST['linkfb']."\n");

    // $read = file('php.txt');
    // foreach ($read as $line) {
    // echo $line;
    // }
fclose($userFile);
// echo '<pre>';
// print_r( $_POST);
// echo '</pre>';


?>