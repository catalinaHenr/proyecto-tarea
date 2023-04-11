<?php
    $nombre = $_POST["name"];
    $email = $_POST["emailAddress"];
    $mensaje = $_POST["message"];

    $mensaje = "Este mensaje fue enviado por " . $nombre .",\r\n";
    $mensaje = "Su email es: " . $email .",\r\n";
    $mensaje = "Mensaje: " . $_POST["message"] .",\r\n";
    $mensaje = "Enviado el " . date('d/m/Y', time());

    $para = "catalinahenriquez130@gmail.com";
    $asunto = "Proyecto Mascotas";

    mail($para,$asunto, ($mensaje),$header);

    header("location:enviado.html");
?>