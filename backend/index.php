<?php
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './vendor/autoload.php'; 

$config = parse_ini_file('config.ini', true);
$mail = new PHPMailer(true);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

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
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    //  SMTP server settings
    $smtpServer = $config['email']['server'];
    $smtpPort = 587;
    $smtpAuth = true;
    $smtpUsername = $config['email']['username']; 
    $smtpPassword = $config['email']['password']; ;
   
    try {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;   
        $mail->isSMTP();
        $mail->Host = $smtpServer;
        $mail->SMTPAuth = $smtpAuth;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;        //implicit TLS encrypton
        // $mail->SMTPSecure = 'tls'; //  TLS encryption
        $mail->Port = $smtpPort;

        
        $mail->isHTML(true);     
        $mail->setFrom($email);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $message;


        $mail->send();

        http_response_code(200);
        echo json_encode(array("message" => "Form submission successful."));
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array("error" => "An error occurred while sending the email: " . $mail->ErrorInfo));
    }
} else {
    http_response_code(405);
    echo json_encode(array("error" => "Method Not Allowed"));
}
?>
