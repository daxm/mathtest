<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="default.css" rel="stylesheet">
  <title><? print("$_GET[test_title]"); ?></title>
</head>
<body>
<header>
</header>

<section>
<h3><? print("$_GET[test_title] <BR> MAX: Top-$_GET[top_integer] Bottom-$_GET[bottom_integer]"); ?></h3>

<table width="600" border="0" cellspacing="0" cellpadding="7" align="center">
<?
srand((double)microtime()*1000000); 
if($_GET[operator] == "/") {
	$rows_added = 1;
	while ($rows_added <= $_GET[rows_to_add]) {
		print("<tr>");
		$cols_added = 1;
		while ($cols_added <= $_GET[cols_to_add]) {
			$top_num = rand(1,$_GET[top_integer]);
			$bottom_num = rand(1,$_GET[bottom_integer]);
			if(($_GET[allow_neg] == '0') && ($bottom_num > $top_num))
			{
				$temp_num = $top_num;
				$top_num = $bottom_num;
				$bottom_num = $temp_num;
			}
			print("<td><table BORDER='0' CELLSPACING='0' CELLPADDING='0'>");
//The old way			print("<tr><TD WIDTH='30' ALIGN='left' VALIGN='bottom'>&nbsp;&nbsp;&nbsp;&nbsp;_____<BR>$bottom_num|$top_num<BR>&nbsp;<BR></td>");
			print("<tr><TD WIDTH='30' ALIGN='left' VALIGN='bottom'>$top_num&nbsp;&divide&nbsp;$bottom_num<BR>&nbsp;<BR></td>");
			print("</td><TD WIDTH='10' ALIGN='right' VALIGN='bottom'>&nbsp;</td><TD WIDTH='60'>&nbsp;&nbsp;&nbsp;&nbsp;</td>");
			print("</tr></table></td>");
		$cols_added++;
		}
	print("</tr>\n");	
	$rows_added++;
	}
} else {
	$rows_added = 1;
	while ($rows_added <= $_GET[rows_to_add]) {
		print("<tr>");
		$cols_added = 1;
		while ($cols_added <= $_GET[cols_to_add]) {
			$top_num = rand(1,$_GET[top_integer]);
			$bottom_num = rand(1,$_GET[bottom_integer]);
			if(($_GET[allow_neg] == '0') && ($bottom_num > $top_num))
			{
				$temp_num = $top_num;
				$top_num = $bottom_num;
				$bottom_num = $temp_num;
			}
			print("<td><table BORDER='0' CELLSPACING='0' CELLPADDING='0'><tr><TD WIDTH='10' ALIGN='right' VALIGN='bottom'>&nbsp;</td><TD WIDTH='30' ALIGN='right' VALIGN='bottom'>");
			print($top_num);
			print("</td></tr><tr><TD WIDTH='10' ALIGN='right' VALIGN='bottom'>");
			print("$_GET[operator]");
			print("</td><TD WIDTH='30' ALIGN='right' VALIGN='bottom'>");
			print("$bottom_num");
			print("</td></tr><tr><TD COLSPAN='2' ALIGN='right'><IMG SRC='black40x2.gif' WIDTH='40' HEIGHT='2' ALT='' BORDER='0'><P>&nbsp;<P></td></tr>");
			print("</table></td>");
			$cols_added++;
			}
		print("</tr>\n<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>");	
		$rows_added++;
		}
}	
?>
</table>
</section>

<footer>
</footer>

<!-- load all our scripts -->
<script type="text/javascript" src="default.js"></script>
</body>
</html>
