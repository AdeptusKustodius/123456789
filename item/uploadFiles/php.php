<?php
$mail->Body    = '
  Пользователь оставил свои данные для связи <br> 
  Книга: ' . $_POST['textFile'] . ' <br>
  Login: ' . $_POST['login'] . ' <br>
  Text: ' .$_POST['userEmail'];
  echo $mail