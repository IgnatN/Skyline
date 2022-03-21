<?php

if (isset($_POST['Name'])) {$phone = $_POST['Name'];}
if (isset($_POST['Phone'])) {$name = $_POST['Phone'];}
if (isset($_POST['Email'])) {$email = $_POST['Email'];}
if (isset($_POST['City'])) {$city = $_POST['City'];}
if (isset($_POST['Applying'])) {$applying = $_POST['Applying'];}
if (isset($_POST['Experience'])) {$experience = $_POST['Experience'];}

/* Сюда впишите свою эл. почту */
$myaddres  = "ignatnicu03@gmail.com"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */

 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Заказ обратного звонка'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
