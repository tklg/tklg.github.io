<!DOCTYPE html>
<html lang="en">
    <head>
	    <meta charset="utf-8">
	    <meta name="theme-color" content="#0E1215" />
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, minimum-scale=1">
	    <title>dev.tkluge.net</title>
		<link rel="stylesheet" href="dev.css">
		<link rel="icon" href="https://avatars0.githubusercontent.com/u/1696813">
	    </head>
	<body>
		<header>
			<div class="filler"></div>
			<h1 class="info title">dev.tkluge.net</h1>
		</header>
		<main>
			<ul class="pagelist">
				<li class="command"><span class="user">www@dev.tkluge.net</span><span class="dir">~ $</span></span><span class="cmd">ls -ld */</span></li>
				<?php
					$d = scandir('./');
					foreach($d as $f) {
						if (is_dir($f)) {
							if ($f[0] != '.' &&
								array_search($f, Array('fonts','css','js')) === false) {
								$c = rand(1, 50000);
								echo '<li class="page"><a href="'.$f.'"><span class="dirinfo">drwxr-xr-x'.str_pad(rand(1, 20), 4, " ", STR_PAD_LEFT).' <span class="owner">root www </span>'.str_pad($c, 5, " ", STR_PAD_LEFT).' '.date("M d h:i", filemtime($f)).'</span><span class="name">'.$f.'/</span></a></li>';
							}
						}
					}
				?>
			</ul>
		</main>
	</body>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-76953501-1', 'auto');
	  ga('send', 'pageview');
	</script>

</html>
