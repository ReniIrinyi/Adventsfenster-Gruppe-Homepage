<?php
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './vendor/autoload.php'; 

$config = parse_ini_file('config.ini', true);
$mail = new PHPMailer(true);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $message = $_POST["message"] ?? '';

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(array("error" => "All fields are required."));
        exit;
    }

    $to =  $config['email']['username'];
    $subject = "neue Anfrage";
    
    try {
        $mail->isSMTP();
        $mail->Host = $config['email']['server'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['email']['username'];
        $mail->Password = $config['email']['password'];
        $mail->SMTPSecure = 'tls'; // TLS encryption
        $mail->Port = 587;

        $mail->isHTML(true);     
        $mail->setFrom($email);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
        
        // Send a JSON response to indicate success
        http_response_code(200);
        echo json_encode(array("message" => "Form submission successful."));
    } catch (Exception $e) {
        // Send a JSON response to indicate error
        http_response_code(500);
        echo json_encode(array("error" => "An error occurred while sending the email: " . $mail->ErrorInfo));
    }
} else {
    http_response_code(405);
    echo json_encode(array("error" => "Method Not Allowed"));
}
?>
