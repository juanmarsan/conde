<?php
header('Access-Control-Allow-Origin: *');
	$destino = "koketacoki@gmail.com";
	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body);

	$nombre = $data->name;
	$email = $data->email;
	$telefono = $data->telefono;
	$movil = $data->movil;
	$mensaje = $data->comment;
	$contenido = "Nombre: " .$nombre. "<br>\nCorreo: " .$email. "<br>\nTelefono: " .$telefono. "<br>\nMovil: " .$movil. "<br>\nMensaje: " .$mensaje;

	$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From: ".$email."\r\n"."X-Mailer: php";

if(mail($destino,"Contacto desde Web", $contenido, $headers))
    {
	mail($destino,"Contacto desde Web", $contenido, $headers);
        echo ("True");
    }
    else {
        echo ("False");
    }
?>
