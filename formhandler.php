<?php
include('connection.php');
$name=$_POST['name'];
$visitor_email=$_POST['email'];
$branch=$_POST['branch'];
$number=$_POST['contact'];
$message=$_POST['message'];
if(empty($name) ||empty($visitor_email) ||empty($branch) ||empty($number) ||empty($message))
{
    echo "please fill all the details";
}
else{
    mail("divyanshujain275@gmail.com","web message",$message,"from:"$visitor_email"");
    echo "mail sent."
}
?>