footdiv = {
    createFootDiv:function(divID){
	    var div1 = document.getElementById(divID);
		var code = '<div class="row">'
		    + '<div class="col-sm-1 col-md-1 col-lg-1">'
			+ '</div>'
		    + '<div class="col-sm-4 col-md-4 col-lg-4">'
			+ '    <div style="text-align:left;margin:0 auto;padding-left:5px;">'
			+ '	<p style="font-size:16px;"><strong>friendly link:</strong><br>'
			+ '	<a href="https://dappinsight.com/?utm_source=2018worldcup.github.io" target="_blank">https://dappinsight.com</a><br/>'
			+ '	<a href="https://dappradar.com" target="_blank">https://dappradar.com</a><br/>'
			+ '	<a href="https://etherscan.io" target="_blank">https://etherscan.io</a></p>'
			+ '	</div>'
			+ '</div>'
			+ '<div class="col-sm-3 col-md-3 col-lg-3">'
			+ '    <div style="text-align:left;margin:0 auto;padding-left:5px;"><p style="font-size:16px;"><strong>contact us:</strong></p>'
			+ '	<p><a href="https://twitter.com/Hello_WorldCup" target="_blank"><img height="40px" src="images/tuite.jpg"/></a>&nbsp;&nbsp;<a href="https://www.facebook.com/pingping.liu.1460" target="_blank"><img height="40px" src="images/facebook.jpg"/></a>&nbsp;&nbsp;<a href="mailto:mr_qbw@outlook.com"><img height="40px" src="images/outlook.jpg"/></a></p>'
			+ '</div>'
			+ '</div>'
			+ '<div class="col-sm-4 col-md-4 col-lg-4">'
			+ '    <div style="text-align:left;margin:0 auto;padding-left:5px;"><p style="font-size:16px;"><strong>Contract address:</strong></p>'
			+ ' <p><a href="https://etherscan.io/address/0x08CdCF9ba0a4b5667F5A59B78B60FbEFb145e64c" target="_blank">0x08CdCF9ba0a4b5667F5A59B78B60FbEFb145e64c</a></p>'
			+ '</div>'
			+ '</div>'
		    + '</div>'
            + '<div class="copyright">'
            + '<p>Copyright 2018 &copy; WorldCup | <a href="present.html">Donations: 0x78d9de056ae45cdbd22f0111ecc7d181a7f94386</a></p>'
            + '</div>';
		div1.innerHTML = code;
    }
};



