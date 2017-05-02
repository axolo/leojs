<?php

$uploads_dir = '../uploads';
foreach ($_FILES["file"]["error"] as $key => $error) {
  if ($error == UPLOAD_ERR_OK) {
    $tmp_name = $_FILES["file"]["tmp_name"][$key];
    $name = $_FILES["file"]["name"][$key];
    move_uploaded_file($tmp_name, "$uploads_dir/$name");
  }
}

echo json_encode(array(
  'request' => $_REQUEST,
  'files' => $_FILES
));
