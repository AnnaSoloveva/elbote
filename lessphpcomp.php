<?php
require 'lessc.inc.php';
$docroot = rtrim($_SERVER['DOCUMENT_ROOT'], '\\/');
$less = new lessc($docroot.'/css/style.less');
file_put_contents($docroot.'/css/style.css', $less->parse());

?>