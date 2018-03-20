App = {
  web3Provider: null,
  contracts: {},
  adoptionInstance: null,
  loginaccount: "",
  //teamName:["baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi", "baxi"],
  
  modifyDesc:function(itemID){
	  var desc = $("#EVENT_DES").val();
	  if(desc==null || desc ==""){
		  alert("Please enter the input box above to input the words you want to say.");
	  }else{
		  web3.eth.getAccounts(function(error, accounts) {
		  if (error) {
			console.log(error);
		  }
		  var account = accounts[0];
		  adoptionInstance.setWorldCupTeamDesc(itemID, desc, {from: account, gas:300000 }).then(function(){
				App.iteminfo(itemID);
				alert("If the page has not changed after the success of the change, please refresh the page or see if the transaction is successful.");
		  });;//web3.eth.gasPrice
		  });//.catc
	  }
  },
  
  footerPosition:function(){
      $("footer").removeClass("fixed-footer");
      var contentHeight = document.body.scrollHeight,//网页正文全文高度
          winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
      if(!(contentHeight > winHeight)){
          //当网页正文高度小于可视窗口高度时，为footer添加类fixed-footer
          $("footer").removeClass("fixed-footer");
      } else {
		  $("footer").addClass("fixed-footer");
          $(".content").height(winHeight);
      }
    },
  
  geiPools: function(){
	  web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
	  adoptionInstance.getCEO.call().then(function(ceoAddr){
		  if(account == ceoAddr){
			return adoptionInstance.payout(account, {from: account, gas:300000 });//web3.eth.gasPrice
		  }else{
			alert("When the bonus reaches 3.2 ether, the system will automatically give 0.1 ether to the owner of the team, and the more teams they have, the more they will be assigned.");
		  }
	  });
	  
      });//.catch(function(err) {
        //console.log(err.message);
      //});
  },
  
  FAQ: function(){
	  $("#petItemTemplate").hide();
	  $("#petsRow").hide();
	  $("#gamerule").hide();
	  $("#gameinfo").hide();
	  $("#petItemTemplatefaq").show();
	  $("#traddingRecordTemplate").hide();
	  $("footer").removeClass("fixed-footer");
  },
  
  TraddingRecord: function(){
	  $("#petItemTemplate").hide();
	  $("#petsRow").hide();
	  $("#gamerule").hide();
	  $("#gameinfo").hide();
	  $("#petItemTemplatefaq").hide();
	  $("#traddingRecordTemplate").show();
	  $("footer").addClass("fixed-footer");
	  $.getJSON('../pets.json', function(data) {
	  // 获取事件对象
		var myEvent = adoptionInstance.WorldCupTokenWereSold({}, {fromBlock: 0, toBlock: 'latest'});//{curOwner: App.loginaccount}, 'latest'
		var code = "";
		var ii=0;
		var div1 = document.getElementById('tbodydata');
		// 监听事件，监听到事件后会执行回调函数
		myEvent.watch(function(err, result) {
			if (!err) {
				//alert(JSON.stringify(result));
				//alert(result.type);
				ii = ii + 1;
				var tokenID = result.args.tokenId-0;
				var tokenName = data[tokenID].name;
				var oldUser = result.args.prevOwner;//.sub(0, 4)+ "..."+result.args.prevOwner.sub(38, 3);
				code = '<tr><td class="center" style="height:30px;">'+ii+'</td><td class="center">'+tokenName+'</td><td class="center">'+tokenID+'</td><td class="center">'+oldUser+'</td><td class="center">'+result.args.oldPrice+'</td><td class="center">'+result.args.curOwner+'</td><td class="center">'+result.args.newPrice+'</td><td class="center">'+result.args.traddingTime+'</td></tr>' + code;
				console.log(result);
			} else {
				console.log(err);
				//myEvent.stopWatching();
			}
			//alert("ss");
			div1.innerHTML = code;
			myEvent.stopWatching();
			$('#simple-table-2').dataTable();
		});
		
		});
		//myEvent.stopWatching();
		
		
		// Or pass a callback to start watching immediately
		//var eventq = adoptionInstance.WorldCupTokenWereSold(function(error, result) {
		//	if (!error)
		//		console.log(result);
		//});
       ///// 
	  //adoptionInstance.events.TokenSold({
		//	fromBlock: 0,
		//	toBlock:'latest'
		//}, function(error, event){ alert(event);/*console.log("result:\n"+JSON.stringify(event)); */})
		//.on('data', function(event){
		//	alert(event);
		//	console.log(event); // same results as the optional callback above
		//})
		//.on('changed', function(event){
			// remove event from local database
		//})
		//.on('error', console.error);
  },
  
  iteminfo: function(itemID){
	  //alert(itemID);
	  //var value = location.search;
	  //alert(value.replaceAll("?",""));
	  $("#petItemTemplate").show();
	  $("#petsRow").hide();
	  $("#gamerule").hide();
	  $("#gameinfo").hide();
	  $("#petItemTemplatefaq").hide();
	  $("#traddingRecordTemplate").hide();
	  $("footer").addClass("fixed-footer");
	  $.getJSON('../pets.json', function(data) {
      //var petsRow = $('#petsRow');
      var petTemplate = $('#petItemTemplate');

      //for (i = 0; i < data.length; i ++) {
        petTemplate.find('.pet-name-world-conty').text(data[itemID].name + " Football Team");
		petTemplate.find('.country').text(data[itemID].name);
		petTemplate.find('img').attr('src', data[itemID].picture_guojia);
        petTemplate.find('.img-center-item').attr('src', data[itemID].picture);
        
        //petTemplate.find('.btn-adopt').attr('data-id', data[itemID].id);
		//var clicksrc = "App.iteminfo("+i+")";
		//petTemplate.find('.pet-href-pic').attr('onclick', clicksrc);
		//petTemplate.find('.pet-href').attr('onclick', clicksrc);
        //petsRow.append(petTemplate.html());
      //}
	  web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      App.loginaccount = accounts[0];
      });
	  adoptionInstance.getWorlCupByID.call(itemID).then(function(desc){
			var petTemplate = $('#petItemTemplate');
			//alert(desc);
			petTemplate.find('.pet-breed-item').text(web3.fromWei(desc[1].toNumber()) + " ETH");
            petTemplate.find('.pet-age-item').text(desc[2]);
			//petTemplate.find('.pet-location-item').text(desc[0]);
			$("#EVENT_DES_read").val(desc[0]);
			if(App.loginaccount==desc[2]){
				$("#btn-buy").hide();
				$("#EVENT_DES").show();
				petTemplate.find('.btn-editinfo').attr('onclick', "App.modifyDesc("+itemID+")");
				petTemplate.find('.btnInfo').text("You can click this button to modify the description.");
			}else{
				$("#btn-buy").show();
				$("#EVENT_DES").hide();
				var price = web3.fromWei(desc[1].toNumber());
				var orgPrice = price;
		        petTemplate.find('.btn-adopt0').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.1;
		        petTemplate.find('.btn-adopt1').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.2;
			    petTemplate.find('.btn-adopt2').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.3;
			    petTemplate.find('.btn-adopt3').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.4;
			    petTemplate.find('.btn-adopt4').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.5;
			    petTemplate.find('.btn-adopt5').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			}
            
			
		});
		
    });
  },
  
  btnbuy: function(itemID, price){
	//alert(itemID);
	//alert(price);

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
	  return adoptionInstance.buyWorldCupTeamToken(itemID, {from: account, value: web3.toWei(price), gas:700000 }).then(function(){
				App.iteminfo(itemID);
				alert("If the page has not changed after the success of the change, please refresh the page or see if the transaction is successful.");
		  });//web3.eth.gasPrice;//web3.eth.gasPrice  // web3.toWei(price)
      });//.catch(function(err) {
        //console.log(err.message);
      //});
  },
  
  
  
  myteam: function(){
    $("#petItemTemplate").hide();
	  $("#petsRow").show();
	  $("#gamerule").hide();
	  $("#gameinfo").hide();
	  $("#petItemTemplatefaq").hide();
	  $("#traddingRecordTemplate").hide();
      $("footer").addClass("fixed-footer");
	  
	  function setAddrVal(itemID, index){
	    adoptionInstance.getWorlCupByID.call(itemID).then(function(desc){
			//alert(desc);
			//var result=desc[0].split(",");
			var addrLen = desc[2].length;
	        var showAddr = "";
			if(addrLen >= 20){
				showAddr = desc[2].substring(0, 20) + "...";
			}else{
				showAddr = desc[2];
			}
			addrLen = desc[0].length;
	        var showDesc = "";
			if(addrLen >= 15){
				showDesc = desc[0].substring(0, 15) + "...";
			}else{
				showDesc = desc[0];
			}

			//alert(result[2]);
			//alert(result[1]);
			
			$('.panel-pet').eq(index).find('.pet-age').text(showAddr);
			$('.panel-pet').eq(index).find('.pet-breed').text(web3.fromWei(desc[1].toNumber()) + " ETH");
			$('.panel-pet').eq(index).find('.pet-location').text(showDesc);
		});
	}
	  
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
	  adoptionInstance.tokensOfOwner.call(account).then(function(adopters){
		  //alert("3");
		  //alert(adopters);
		var petsRow = $('#petsRow');
	    petsRow.html("");
		petsRow.attr('style', "margin-top:110px;");
		$.getJSON('../pets.json', function(data) {
		  for (var i = 0; i < adopters.length; i++) {
              // Load pets.
				  var petTemplate = $('#petTemplate');

				  //for (i = 0; i < data.length; i ++) {
					petTemplate.find('.country').text(data[adopters[i]].name);
					petTemplate.find('img').attr('src', data[adopters[i]].picture_guojia);
					petTemplate.find('.img-center').attr('src', data[adopters[i]].picture);
					petTemplate.find('.pet-breed').text(data[adopters[i]].breed);
					petTemplate.find('.pet-age').text(data[adopters[i]].age);
					petTemplate.find('.pet-location').text(data[adopters[i]].location);
					petTemplate.find('.btn-adopt').attr('data-id', data[adopters[i]].id);
					var clicksrc = "App.iteminfo("+adopters[i]+")";
					petTemplate.find('.pet-href-pic').attr('onclick', clicksrc);
					petTemplate.find('.pet-href').attr('onclick', clicksrc);
					petsRow.append(petTemplate.html());
					setAddrVal(adopters[i], i);
				  //}
		  }
		  });
		}).then(function() {
			//App.footerPosition();
            //$(window).resize(App.footerPosition);
		});
    });
  },



  init: function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.country').text(data[i].name);
		petTemplate.find('img').attr('src', data[i].picture_guojia);
        petTemplate.find('.img-center').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);
		var clicksrc = "App.iteminfo("+i+")";
		petTemplate.find('.pet-href-pic').attr('onclick', clicksrc);
		petTemplate.find('.pet-href').attr('onclick', clicksrc);
        petsRow.append(petTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function() {
    /*
     * Replace me...
     */
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');//('http://localhost:7545');  ("http://10.60.194.38:7545")
    }
    web3 = new Web3(App.web3Provider);
	web3.eth.getAccounts(function(err, accs) {
		if (err != null) {
		  alert("There was an error fetching your accounts.");
		  return;
		}
		if (accs.length == 0) {
		  alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
		  return;
		}
		var accounts = accs;
		var account = accounts[0];
        //alert(account);
		//initializeConference();
    });


    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */
    $.getJSON('WorldCupToken.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var AdoptionArtifact = data;
      App.contracts.WorldCupToken = TruffleContract(AdoptionArtifact);

      // Set the provider for our contract
      App.contracts.WorldCupToken.setProvider(App.web3Provider);

      // Use our contract to retrieve and mark the adopted pets
      return App.markAdopted();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
	//$(document).on('click', '.btn-liupp', App.handleGetBalace);
	//$(document).on('click', '#liupp', App.handleGetBalace);
	//var aaa = $(document).getElementById("liuppppp");
	//aaa.onclick = App.handleGetBalace;
  },

  markAdopted: function() {
    /*
     * Replace me...
     */
	
	function setAddrVal(itemID){
	    adoptionInstance.getWorlCupByID.call(itemID).then(function(desc){
			//alert(desc);
			//var result=desc[0].split(",");
			var addrLen = desc[2].length;
	        var showAddr = "";
			if(addrLen >= 20){
				showAddr = desc[2].substring(0, 20) + "...";
			}else{
				showAddr = desc[2];
			}
			addrLen = desc[0].length;
	        var showDesc = "";
			if(addrLen >= 20){
				showDesc = desc[0].substring(0, 20) + "...";
			}else{
				showDesc = desc[0];
			}

			//alert(result[2]);
			//alert(result[1]);
			
			$('.panel-pet').eq(itemID).find('.pet-age').text(showAddr);
			$('.panel-pet').eq(itemID).find('.pet-breed').text(web3.fromWei(desc[1].toNumber()) + " ETH");
			$('.panel-pet').eq(itemID).find('.pet-location').text(showDesc);
		});
	}
	
	function setPriceVal(itemID){
	    adoptionInstance.priceOf.call(itemID+1).then(function(ownerAdrr){
			$('.panel-pet').eq(itemID).find('.pet-breed').text(ownerAdrr);
		});
	}
	
	function setDescVal(itemID){
	    adoptionInstance.descOf.call(itemID+1).then(function(ownerAdrr){
			var addrLen = ownerAdrr.length;
	        var showAddr = "";
			if(addrLen >= 20){
				showAddr = ownerAdrr.substring(0, 20) + "...";
			}else{
				showAddr = ownerAdrr;
			}
			//alert(itemID);
			$('.panel-pet').eq(itemID).find('.pet-location').text(showAddr);
		});
	}

	
    App.contracts.WorldCupToken.deployed().then(function(instance) {
      adoptionInstance = instance;
	  
	  // 获取事件对象
		//////////var myEvent = adoptionInstance.WorldCupTokenWereSold({}, {fromBlock: 0, toBlock: 'latest'});//{curOwner: App.loginaccount}, 'latest'
		// 监听事件，监听到事件后会执行回调函数
		////////myEvent.watch(function(err, result) {
			/////////if (!err) {
				//alert(JSON.stringify(result));
				//alert(result.type);
				///////////console.log(JSON.stringify(result));
			//////////} else {
			///////////	console.log(err);
				//myEvent.stopWatching();
			////////////}
			//myEvent.stopWatching();
		///////////});
      
	  //alert("2");
      return adoptionInstance.totalSupply.call();
    }).then(function(adopters) {
      //alert("3");
	  //alert(adopters);
	  var m = 0;
	  for (var i = 0; i < adopters; i++) {
        //var addrhtml = 
		//var sss = adoptionInstance.ownerOf.call(i+1);
		var sss = "vvvvvvvvv"
		m = m + 1;
		//alert(i+1);
		setAddrVal(i);
		////////////////////////setPriceVal(i);
		/////////////////////////setDescVal(i);
		/////adoptionInstance.ownerOf.call(i+1).then(function(ownerAdrr){
			//////////var addrLen = ownerAdrr.length;
	        ////////var showAddr = "";
			///////if(addrLen >= 20){
			/////	showAddr = ownerAdrr.substring(0, 20) + "...";
			///////}else{
			////////	showAddr = ownerAdrr;
			///////}
			////////alert(i);
			////////$('.panel-pet').eq(m).find('.pet-age').text(showAddr);
			//alert(showAddr);
			//alert(i);
			//addrhtml.text(showAddr);
			//sss  = showAddr;
			//return showAddr;
			//(addrLen);
			//alert(ownerAdrr);
			//alert(i);
			//alert($('.panel-pet').eq(i).find('.pet-age').text());
			
			//if (ownerAdrr!== '0x0000000000000000000000000000000000000000') {
			  //$('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
			  
			  //petTemplate.find('.pet-age').text(adopters[i]);
			//}
		/////////});
		//alert(sss);
      }
    }).then(function() {
		//adoptionInstance.getTimeDiff.call().then(function(poolTotals){
		//	alert(poolTotals.toNumber());
		//	$('.navbar-right').eq(0).find('.pooltime').text(web3.fromWei(poolTotals.toNumber()));
		//});
		adoptionInstance.getBonusPool.call().then(function(poolTotals){
			$('.navbar-right').eq(0).find('.pools').text(web3.fromWei(poolTotals.toNumber()));
		});
	}).catch(function(err) {
      console.log(err.message);
    });
	
  },

  handleAdopt: function(event) {
    //event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
    var adoptionInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.WorldCupToken.deployed().then(function(instance) {
        adoptionInstance = instance;
        
        // Execute adopt as a transaction by sending account
		//var aa=
		//alert(aa);
		//var bb = adoptionInstance.getContractM.call();
	   // WorldCupTeamToken.deployed().then(function(instance){return instance.totalSupply.call();}).then(function(value){return value.toNumber()});
		//var bbbb = web3.fromWei(bb, 'ether');
		//debugger;
	    //alert(bbbb);
        return adoptionInstance.buyWorldCupTeamToken(3, {from: account, value: web3.toWei("3"), gas:300000 });//web3.eth.gasPrice
		//return adoptionInstance.adopt(3);
      }).catch(function(err) {
        console.log(err.message);
      });
	  
	  //.then(function(result) {
      //  return App.markAdopted();
      //})
    });
  },
  
  handleGetBalace: function(event) {
    event.preventDefault();
    /*
     * Replace me...
     */
    //alert("sss");

    //var account = accounts[0];
	App.contracts.WorldCupToken.deployed().then(function(instance){return instance.getContractM.call();}).then(function(value){
		//alert(value.toNumber());
		return value.toNumber();}).catch(function(err) {
    console.log(err.message);});
  }
};



