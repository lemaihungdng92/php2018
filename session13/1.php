
<!DOCTYPE HTML>  
<html>
<head>
  <title>Nhap xuat du lieu</title>
</head>
<body>  

<?php
// define variables and set to empty values
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $comment = test_input($_POST["comment"]);
 
}

function test_input($data) {
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2>Nhập xuất dữ liệu PHP</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  

  Comment: <textarea name="comment" rows="5" cols="40"></textarea>
  <br>
  

  <input type="submit" name="submit" value="Submit">  
</form>

<?php
echo "<h2>Your Input:</h2>";

echo $comment;


?>

</body>
</html>