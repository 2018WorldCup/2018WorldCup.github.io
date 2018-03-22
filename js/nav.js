nav = {
    createNav:function(divID, indexID){
	    var div1 = document.getElementById(divID);
		var liList = ["", "", "", "", ""];
		if(indexID != -1){
			liList[indexID] = "active";
		}
		var code = '<div class="col-md-12 column">'
				+  '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">'
				+  '		<div class="navbar-header">'
				+  '			 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand" href="/"><img alt="Brand" height="30px" src="images/2018.jpg"/></a>'
				+  '		</div>'
				+  '		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
				+  '			<ul class="nav navbar-nav">'
				+  '				<li class='+liList[0]+'><a href="/" style="font-size:16px;"><img height="15px" src="images/football.jpg"/><strong>World Cup</strong></a></li>'
				+  '				<li class='+liList[1]+'><a href="myteam.html" style="font-size:16px;"><img height="15px" src="images/football.jpg"/><strong>My Team</strong></a></li>'
				+  '				<li class='+liList[2]+'><a href="tradding.html" style="font-size:16px;"><img height="15px" src="images/football.jpg"/><strong>Trading Record</strong></a></li>'
				+  '				<li class='+liList[3]+'><a href="FAQ.html" style="font-size:16px;"><img height="15px" src="images/football.jpg"/><strong>FAQ</strong></a></li>'
				+  '				<li class='+liList[4]+'><a href="present.html" style="font-size:16px;"><img height="15px" src="images/football.jpg"/><strong>Crowdfunding</strong></a></li>'
				+  '			</ul>'
				+  '			<ul class="nav navbar-nav navbar-right">'
				+  '				<li><a href="" style="font-size:23px;">Bonus Pool: <strong><span class="pools" style="color:#FF0000">0</span></strong> ETH</a></li>'
				+  '				<li><a onclick="App.geiPools();" style="cursor:pointer;"><img alt="Brand" height="18px" src="images/pool.jpg"/></a></li>'
				+  '			</ul>'
				+  '		</div>'
				+  '	</nav>'
				+  '</div>';
		div1.innerHTML = code;
    }
};



