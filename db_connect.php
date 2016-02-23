<?php 


$db_host 		= 'localhost';
$db_user		= 'root';
$db_pass  		= 'root';
$db_database	= 'db_shop';



$dbh = new PDO('mysql:host=localhost;dbname=db_shop','root', 'root');
$dbh->exec('SET NAMES utf8');




?>