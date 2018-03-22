nav = {
    createNav:function(divID){
	    var div1 = document.getElementById(divID);
		var code = '<div class="col-md-12 column">'
					+ '<nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="background-color:#E7E7E7;"><!-- style="padding-left:100px"-->'
					+ '	<div class="navbar-header">'
					+ '		 <a class="navbar-brand" href="/" style="cursor:pointer;"><img alt="Brand" height="40px" src="images/2018.jpg"/></a> <!--60-->'
					+ '	</div>'
					+ '	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="margin-top:8px;"><!--20-->'
					+ '		<ul class="nav navbar-nav">'
					+ '			<li>'
					+ '				 <a href="/" style="cursor:pointer;font-size:18px;height:25px;line-height:25px;"><img alt="Brand" height="15px" src="images/football.jpg"/><strong>World Cup</strong></a><!--style=" color:#666; font-size:12px;"-->'
					+ '			</li>'
					+ '			<li>'
					+ '				 <a href="myteam.html" style="cursor:pointer;font-size:18px;height:25px;line-height:25px;"><img alt="Brand" height="15px" src="images/football.jpg"/><strong>My Team</strong></a>'
					+ '			</li>'
					+ '			<li>'
					+ '				 <a href="tradding.html" style="cursor:pointer;font-size:18px;height:25px;line-height:25px;"><img alt="Brand" height="15px" src="images/football.jpg"/><strong>Trading Record</strong></a><!--Trading Record-->'
					+ '			</li>'
					+ '			<li>'
					+ '				 <a href="FAQ.html" style="cursor:pointer;font-size:18px;height:25px;line-height:25px;"><img alt="Brand" height="15px" src="images/football.jpg"/><strong>FAQ</strong></a><!--Trading Record-->'
					+ '			</li>'
					+ '			<li>'
					+ '				 <a href="present.html" style="cursor:pointer;font-size:18px;height:25px;line-height:25px;"><img alt="Brand" height="15px" src="images/football.jpg"/><strong>Crowdfunding</strong></a><!--Trading Record-->'
					+ '			</li>'
					+ '		</ul>'
					+ '		<ul class="nav navbar-nav navbar-right">'
					+ '			<li>'
					+ '				 <a href="" style="font-size:23px;height:25px;line-height:25px;">Bonus Pool: <strong><span class="pools" style="color:#FF0000">0</span></strong> ETH</a> <!--The next dividend is: <span class="pooltime">1</span>s</a>-->'
					+ '			</li><!--<img alt="Brand" height="30px" src="images/ether.png"/>-->'
					+ '			<li>'
					+ '				 <a onclick="App.geiPools();" style="cursor:pointer;font-size:20px;height:25px;line-height:25px;"><img alt="Brand" height="25px" src="images/pool.jpg"/></a>'
					+ '			</li>'
					+ '		</ul>'
					+ '	</div>'
					+ '</nav>'
				    + '</div>';
		div1.innerHTML = code;
    }
};



