<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Theodore Kluge</title>
    <meta charset="utf-8">
    <meta name="description" content="I make stuff.">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, minimum-scale=1">
	<link href='https://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
	<!-- <link href="https://assets.tkluge.net/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" /> -->
	<link rel="stylesheet" href="//cdn.materialdesignicons.com/1.9.32/css/materialdesignicons.min.css">
	<link rel="stylesheet" href="css/villa7.css">
	<link rel="icon" href="https://avatars0.githubusercontent.com/u/1696813">

		
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script type="application/ld+json">
    {
    	"@context": "http://schema.org",
    	"@type": "Person",
    	"url": "https://tkluge.net",
    	"description": "I make stuff."
    }
    </script>
  </head>
<body>

<!-- <header class="page-header">
	<nav class="nav nav-h">
		<button class="btn" data-page="projects">Projects<link class="rippleJS" /></button><button class="btn" data-page="about">About<link class="rippleJS" /></button>
	</nav>
</header> -->
<main>

	<header class="profile">
		<!-- <div class="centerbox"> -->
			<div class="box-h box-left">
				<!-- <a class="profpic-link"><img class="profpic" src="https://avatars0.githubusercontent.com/u/1696813" alt="github profile picture" /></a> -->
				<div class="stack-v">
					<span>Theodore Kluge</span>
					</div>
			</div>
			<div class="box-h box-right">
				<div class="stack-v">
					<span class="icons">
						<a class="btn-icon" href="//github.com/villa7" target="_blank"><i class="mdi mdi-github-circle"></i></a>
						<a class="btn-icon" href="//codepen.io/villa7" target="_blank"><i class="mdi mdi-codepen"></i></a>
						<a class="btn-icon" href="//stackoverflow.com/users/3605190/villa7?tab=profile" target="_blank"><i class="mdi mdi-stackoverflow"></i></a>
						<!-- <a class="btn-icon" href="#"><i class="mdi mdi-paw"></i></a> -->
					</span>
				</div>
			</div>
		<!-- </div> -->
	</header>

	<section class="project-list" id="project-list">
		<div class="loader">Fetching list...</div>
	</section>


</main>
<footer class="page-footer">
	<div class="footer-copyright">
	    <div class="container">
		    &copy; <?php echo date("Y") ?> Theodore Kluge
		</div>
    </div>
</footer>
<section class="lightbox lightbox-cover">
	<header>
	<button class="btn-icon btn-close"><i class="mdi mdi-close"></i></button>
	</header>
	<img src="//placehold.it/123x456" alt="lightbox image" />
</section>
</body>
<script type="text/template" id="project">
	<article class="project">
		<div class="pb-sub pb-left">
			<img class="preview preview-thumb" alt="<%= model.get('prev') %>" src="<%= model.get('prev') %>" />
		</div>
		<div class="pb-sub pb-right">
			<h1 class="title"><%= model.get('title') %></h1>
			<p class="desc">
			<%= model.get('desc') %>
			</p>
			<footer>
			<% if (model.get('url').length > 0) { %>
				<a href="<%= model.get('url') %>" class="btn" target="_blank">Visit site</a><% } %>
			<% if (model.get('gitlink').length > 0) { %>
				<a href="<%= model.get('gitlink') %>" class="btn" target="_blank">Github</a><% } %>
			</footer>
		</div>
	</article>
</script>

<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script>
    <script src="js/underscore.min.js"></script>
    <script src="js/backbone.min.js"></script>
    <script type="text/javascript" src="js/ripple.js"></script>
    <script>
  	$(document).ready(function(){
  		new projectLoader();
  		Backbone.history.start();
  		$('a.nav-sub').on('click', function(e) {
  			e.preventDefault();
  			$($(this).attr('href')).css('display','block')
  									.siblings().css('display','none');
  		});
	});
	$(document).on('click', '.preview-thumb', function(e) {
		var $el = $(this);
		$('.lightbox img').attr({
			'src': $el.attr('src'),
			'alt': $el.attr('alt')
		});
		$('.lightbox').addClass('active');
	});
	$(document).on('click', '.lightbox', function() {
		$(this).removeClass('active');
	});

    	var winWidth = $(window).width();

		var Data = Backbone.Model.extend({
		    defaults: {
		        title: '',
		        prev: '',
		        desc: '',
		        url: '',
		        gitlink: '',
		        num: ''
		    }
		});
		var DataList = Backbone.Collection.extend({
		    model: Data,
		    url: 'https://spreadsheets.google.com/feeds/list/1Xg_IU23Pf60PIhwVgf5VLQzO7XYZOWbOuFMZvp4uiR8/1/public/values?alt=json' 
		});
		var AppView = Backbone.View.extend({
		    project: _.template($('#project').html()),
		    initialize: function () {
		        this.collection.on('reset', this.render, this);
		        c = this.collection;
		        this.collection.fetch({
		            success: function (model, response) {
		    			$('#project-list').empty();
		                var feed = response['feed'];
		                var entry = feed['entry'];
		                var arr = [];
		                for (var i=0; i<entry.length; i++) {
		                    obj = {
		                        "title": entry[i].gsx$title.$t,
		                        "prev": entry[i].gsx$preview.$t,
		                        "desc": entry[i].gsx$description.$t,
		                        "url": entry[i].gsx$url.$t,
		                        "gitlink": entry[i].gsx$github.$t,
		                        "num": i
		                    };
		                    if (obj.url.substr(0, 5) == 'https') {
		                    } else {
		                    	obj.url = 'http://' + obj.url;
		                    }
		                    obj.gitlink = 'https://' + obj.gitlink;
		                    arr.push(obj);
		                }
		                c.reset(arr);
		            },
		            error: function () {
		            }
		        });
		    },

		    render: function () {
		        this.collection.each(this.list, this);
		    },

		    list: function (model) {
		        $('#project-list').append(this.project({model: model}));
		    }
		});

		var projectLoader = Backbone.Router.extend({
		    routes: {
		        '': 'start',
		    },
		    start: function () {
		        new AppView({collection: new DataList()});
		    }
		});

    </script>
	
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-76953501-1', 'auto');
  ga('send', 'pageview');
</script>

</html>
