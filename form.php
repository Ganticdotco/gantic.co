<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(IsInjected($name)||IsInjected($email)||IsInjected($message))
{
    echo "Chill out on the non-wordy text things! You're making my security jumpy!";
    exit;
}

$email_from = 'form-submission@gantic.co';
$email_subject = "Gantic.co contact form message from: $name";
$email_body = "From: \n$name.\n".
		"Email:: \n$email.\n".
    "Message:\n $message";

$to = "jai@gantic.co";
$headers = "From: $email_from \r\n";

//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: index.html#thank-you');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
