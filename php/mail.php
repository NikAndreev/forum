<?php

$recepient = "forum2020@gmail.com"; 
$sitename = "Форум 2020"; 

$name = trim($_POST["name"]);	
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);


$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nТекст: $text";



$pagetitle = "Новая заявка с сайта \"$sitename\"";



mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\nFrom:$recepient");