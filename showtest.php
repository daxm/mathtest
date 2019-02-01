<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD>
<TITLE><? print("$_GET[test_title]"); ?></TITLE>
<STYLE TYPE="text/css">
        <!--
		body 	{ 
				font-size: <? print("$_GET[font_size]"); ?>pt; 
				font-family: Verdana, Arial, sans-serif;				
				}		
		td 	{ 
				font-size: <? print("$_GET[font_size]"); ?>pt; 
				font-family: Verdana, Arial, sans-serif;
				}
		b 	{ 
				font-style: bold;
				font-size: <? print("$_GET[font_size]"); ?>pt; 
				font-family: Verdana, Arial, sans-serif;
				}	
		p 	{ 
				font-size: <? print("$_GET[font_size]"); ?>pt; 
				font-family: Verdana, Arial, sans-serif;
				}								
		h1 {
				font-size: 22pt; 
				font-style: bold;
				font-family: Verdana, Arial, sans-serif;				
				}				
		h2 {
				font-size: 18pt; 
				font-style: bold;
				font-family: Verdana, Arial, sans-serif;				
				}
		h3 {
				font-size: 16pt; 
				font-style: bold;
				font-family: Verdana, Arial, sans-serif;				
				}				
        -->
</STYLE>	
</HEAD>
<BODY BGCOLOR="#FFFFFF">

<CENTER><H3><? print("$_GET[test_title] <BR> MAX: Top-$_GET[top_integer] Bottom-$_GET[bottom_integer]"); ?></H3></CENTER>

<TABLE WIDTH="600" BORDER="0" CELLSPACING="0" CELLPADDING="7" ALIGN="center">
<?
srand((double)microtime()*1000000); 
if($_GET[operator] == "/") {
	$rows_added = 1;
	while ($rows_added <= $_GET[rows_to_add]) {
		print("<TR>");
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
			print("<TD><TABLE BORDER='0' CELLSPACING='0' CELLPADDING='0'>");
//The old way			print("<TR><TD WIDTH='30' ALIGN='left' VALIGN='bottom'>&nbsp;&nbsp;&nbsp;&nbsp;_____<BR>$bottom_num|$top_num<BR>&nbsp;<BR></TD>");
			print("<TR><TD WIDTH='30' ALIGN='left' VALIGN='bottom'>$top_num&nbsp;&divide&nbsp;$bottom_num<BR>&nbsp;<BR></TD>");
			print("</TD><TD WIDTH='10' ALIGN='right' VALIGN='bottom'>&nbsp;</TD><TD WIDTH='60'>&nbsp;&nbsp;&nbsp;&nbsp;</TD>");
			print("</TR></TABLE></TD>");
		$cols_added++;
		}
	print("</TR>\n");	
	$rows_added++;
	}
} else {
	$rows_added = 1;
	while ($rows_added <= $_GET[rows_to_add]) {
		print("<TR>");
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
			print("<TD><TABLE BORDER='0' CELLSPACING='0' CELLPADDING='0'><TR><TD WIDTH='10' ALIGN='right' VALIGN='bottom'>&nbsp;</TD><TD WIDTH='30' ALIGN='right' VALIGN='bottom'>");
			print($top_num);
			print("</TD></TR><TR><TD WIDTH='10' ALIGN='right' VALIGN='bottom'>");
			print("$_GET[operator]");
			print("</TD><TD WIDTH='30' ALIGN='right' VALIGN='bottom'>");
			print("$bottom_num");
			print("</TD></TR><TR><TD COLSPAN='2' ALIGN='right'><IMG SRC='black40x2.gif' WIDTH='40' HEIGHT='2' ALT='' BORDER='0'><P>&nbsp;<P></TD></TR>");
			print("</TABLE></TD>");
			$cols_added++;
			}
		print("</TR>\n<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD>&nbsp;</TD><TD>&nbsp;</TD><TD>&nbsp;</TD><TD>&nbsp;</TD><TD>&nbsp;</TD></TR>");	
		$rows_added++;
		}
}	
?>

</TABLE>
</BODY>
</HTML>
