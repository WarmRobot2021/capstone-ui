<?php

$errors = []''

if($_SERVER["$REQUEST_METHOD"] == "POST") {

    $fname = isset($_POST['fname']);
    $lname = isset($_POST['lname']) ;
    $email = isset($_POST['email']);
    $number = isset($_POST['number']);
    $feedback = isset($_POST['feedback']);

    if (empty($fname)) {

        $errors[] = "No first name provided";

    }

    if (empty($lname)) {

        $errors[] = "No last name provided";

    }

    if (empty($email)) {

        $errors[] = "No email provided";

    }

    if (empty($feedback)) {

        $errors[] = "No feedback provided";

    }

    if (empty($errors)) {

        $send = "kiwi.t.grant@gmail.com";
        $header="From: $name <$email>";
        
        if (mail($send ,$message, $header)) {

            echo "email sent!";

        }

        else {

            echo "failed to send!";

        }

    }

    else {

        echo "The following errors occurred"
        foreach ($errors as $error) {

            echo "$error<br>";

        }

    }

}

else {

    header("HTTP/1.1 403 Forbidden");
    echo "Access not allowed.";

}

?>

