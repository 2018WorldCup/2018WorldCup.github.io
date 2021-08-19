App = {
    web3Provider: null,
    contracts: {},
    adoptionInstance: null,
    loginAccount: "",
    tokenCount: 32,
    interfaceGraph: 1,
    currentItemID: 0,
    priceList: [0.08, 0.06, 0.04, 0.01, 0.08, 0.06, 0.04, 0.01, 0.08, 0.06, 0.04, 0.01, 0.08, 0.06, 0.04, 0.01, 0.08, 0.06, 0.04, 0.01, 0.08, 0.06, 0.04, 0.01, 0.08, 0.06, 0.04, 0.01, 0.08, 0.06, 0.04, 0.01],
	cABI: [
		  {
			"constant": true,
			"inputs": [],
			"name": "name",
			"outputs": [
			  {
				"name": "",
				"type": "string"
			  }
			],
			"payable": false,
			"stateMutability": "pure",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "_to",
				"type": "address"
			  },
			  {
				"name": "_tokenId",
				"type": "uint256"
			  }
			],
			"name": "approve",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [],
			"name": "ceoAddress",
			"outputs": [
			  {
				"name": "",
				"type": "address"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [],
			"name": "implementsERC721",
			"outputs": [
			  {
				"name": "",
				"type": "bool"
			  }
			],
			"payable": false,
			"stateMutability": "pure",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
			  {
				"name": "total",
				"type": "uint256"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "_from",
				"type": "address"
			  },
			  {
				"name": "_to",
				"type": "address"
			  },
			  {
				"name": "_tokenId",
				"type": "uint256"
			  }
			],
			"name": "transferFrom",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "_newCEO",
				"type": "address"
			  }
			],
			"name": "setCEO",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "_newCOO",
				"type": "address"
			  }
			],
			"name": "setCOO",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "_tokenId",
				"type": "uint256"
			  }
			],
			"name": "buyWorldCupTeamToken",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [],
			"name": "payAllOut",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [
			  {
				"name": "_tokenId",
				"type": "uint256"
			  }
			],
			"name": "ownerOf",
			"outputs": [
			  {
				"name": "owner",
				"type": "address"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [
			  {
				"name": "_owner",
				"type": "address"
			  }
			],
			"name": "balanceOf",
			"outputs": [
			  {
				"name": "balance",
				"type": "uint256"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [],
			"name": "destroy",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [
			  {
				"name": "_owner",
				"type": "address"
			  }
			],
			"name": "tokensOfOwner",
			"outputs": [
			  {
				"name": "ownerTokens",
				"type": "uint256[]"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [],
			"name": "symbol",
			"outputs": [
			  {
				"name": "",
				"type": "string"
			  }
			],
			"payable": false,
			"stateMutability": "pure",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "_to",
				"type": "address"
			  },
			  {
				"name": "_tokenId",
				"type": "uint256"
			  }
			],
			"name": "transfer",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [],
			"name": "cooAddress",
			"outputs": [
			  {
				"name": "",
				"type": "address"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "_tokenId",
				"type": "uint256"
			  }
			],
			"name": "takeOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [
			  {
				"name": "_tokenId",
				"type": "uint256"
			  }
			],
			"name": "priceOf",
			"outputs": [
			  {
				"name": "price",
				"type": "uint256"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [],
			"name": "getCEO",
			"outputs": [
			  {
				"name": "ceoAddr",
				"type": "address"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [],
			"name": "getBonusPool",
			"outputs": [
			  {
				"name": "",
				"type": "uint256"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [
			  {
				"name": "",
				"type": "uint256"
			  }
			],
			"name": "worldCupIdToOwnerAddress",
			"outputs": [
			  {
				"name": "",
				"type": "address"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "_tokenId",
				"type": "uint256"
			  },
			  {
				"name": "descOfOwner",
				"type": "string"
			  }
			],
			"name": "setWorldCupTeamDesc",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [
			  {
				"name": "_tokenId",
				"type": "uint256"
			  }
			],
			"name": "getWorlCupByID",
			"outputs": [
			  {
				"name": "wctDesc",
				"type": "string"
			  },
			  {
				"name": "sellingPrice",
				"type": "uint256"
			  },
			  {
				"name": "owner",
				"type": "address"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [
			  {
				"name": "",
				"type": "uint256"
			  }
			],
			"name": "worldCupIdToAddressForApproved",
			"outputs": [
			  {
				"name": "",
				"type": "address"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": true,
			"inputs": [],
			"name": "getTimeFromPrize",
			"outputs": [
			  {
				"name": "",
				"type": "uint256"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		  },
		  {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"name": "curOwner",
				"type": "address"
			  },
			  {
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			  },
			  {
				"indexed": false,
				"name": "oldPrice",
				"type": "uint256"
			  },
			  {
				"indexed": false,
				"name": "newPrice",
				"type": "uint256"
			  },
			  {
				"indexed": true,
				"name": "prevOwner",
				"type": "address"
			  },
			  {
				"indexed": false,
				"name": "traddingTime",
				"type": "uint256"
			  }
			],
			"name": "WorldCupTokenWereSold",
			"type": "event"
		  },
		  {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"name": "toOwner",
				"type": "address"
			  },
			  {
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			  },
			  {
				"indexed": true,
				"name": "traddingTime",
				"type": "uint256"
			  },
			  {
				"indexed": false,
				"name": "remainingAmount",
				"type": "uint256"
			  }
			],
			"name": "ShareBonus",
			"type": "event"
		  },
		  {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"name": "fromAddress",
				"type": "address"
			  },
			  {
				"indexed": true,
				"name": "toAddress",
				"type": "address"
			  },
			  {
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			  },
			  {
				"indexed": false,
				"name": "presentTime",
				"type": "uint256"
			  }
			],
			"name": "Present",
			"type": "event"
		  },
		  {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": false,
				"name": "from",
				"type": "address"
			  },
			  {
				"indexed": false,
				"name": "to",
				"type": "address"
			  },
			  {
				"indexed": false,
				"name": "tokenId",
				"type": "uint256"
			  }
			],
			"name": "Transfer",
			"type": "event"
		  },
		  {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"name": "owner",
				"type": "address"
			  },
			  {
				"indexed": true,
				"name": "approved",
				"type": "address"
			  },
			  {
				"indexed": false,
				"name": "tokenId",
				"type": "uint256"
			  }
			],
			"name": "Approval",
			"type": "event"
		  }
		],
	cAddress: "0x08CdCF9ba0a4b5667F5A59B78B60FbEFb145e64c",

    initWeb3: async function(iGraphIndex, cItemID) {
        $.ajaxSettings.async = false;
	App.interfaceGraph = iGraphIndex;
	App.currentItemID = cItemID;
	    
	if (window.ethereum) {
            App.web3Provider = window.ethereum;
            try {
                // Request account access
		//alert("sdfsd");
                await window.ethereum.enable();
            } catch (error) {
                // User denied account access...
                console.error("User denied account access")
            }
         }
         // Legacy dapp browsers...
         else if (window.web3) {
            App.web3Provider = window.web3.currentProvider;
         }
         // If no injected web3 instance is detected, fall back to Ganache
         else {
            App.web3Provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/Zu3izefIcguwWWFPhy55");
         }
         web3 = new Web3(App.web3Provider);

	    
	    /*if (typeof web3 !== 'undefined') {
            debugger;
			App.web3Provider = web3.currentProvider;
			console.log(web3.currentProvider);
			//alert(web3.currentProvider);
        } else {
            //////////////$("footer").addClass("fixed-footer");
			/////////////alert("Use the mist browser or install the metamask plug-in.");
			///////////$.ajaxSettings.async = true;
			////////////return;
			// If no injected web3 instance is detected, fall back to Ganache
            App.web3Provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/Zu3izefIcguwWWFPhy55");//('http://localhost:7545');  ("http://10.60.194.38:7545")
        }
        web3 = new Web3(App.web3Provider);*/
		// 合约地址
		
		// 通过ABI和地址获取已部署的合约对象
		var metacoin = web3.eth.contract(App.cABI);//.at(address);
		App.adoptionInstance = metacoin.at(App.cAddress);
		App.adoptionInstance.getBonusPool(function(error, poolTotals){
			//alert(poolTotals);
			$('.navbar-right').eq(0).find('.pools').text(web3.fromWei(poolTotals.toNumber()));
		});

	    web3.eth.getAccounts(function(err, accs) {
		    if (err != null) {
		        //alert("There was an error fetching your accounts.");
		        //return;
		    }
		    if (accs.length == 0) {
		        //alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
		        //return;
		    }
		    var accounts = accs;
		    App.loginAccount = accounts[0];
			//alert(App.loginAccount);
			if(App.interfaceGraph == 1){
			    App.initMainPage();
		    }else if(App.interfaceGraph == 2){		     
				App.initTeamPage(App.currentItemID, App.loginAccount);
			    //alert(App.currentItemID, App.loginaccount);
		    }else if(App.interfaceGraph == 3){		     
				App.initMyTeamPage();
			    //alert(App.currentItemID, App.loginaccount);
		    }else if(App.interfaceGraph == 8){
				App.initTraddingRecord(-1);
			}else if(App.interfaceGraph == 13){
				App.initPresentRecord();
			} 
        });
        $.ajaxSettings.async = true;
    //return App.initContract();
    },

    initMainPage: function(){
        function setAddrVal(itemID){
	        App.adoptionInstance.getWorlCupByID(itemID, function(error,desc){
			    var addrLen = desc[2].length;
	            var showAddr = "";
			    if(addrLen >= 20){
				    showAddr = desc[2].substring(0, 20) + "...";
			    }else{
				    showAddr = desc[2];
			    }
			    addrLen = desc[0].length;
	            var showDesc = "";
			    if(addrLen >= 18){
				    showDesc = desc[0].substring(0, 18) + "...";
			    }else{
				    showDesc = desc[0];
			    }

			    var pricetemp = web3.fromWei(desc[1].toNumber());
			    if(pricetemp == 0){
				    pricetemp = App.priceList[itemID];
					showAddr = "----";
			    }
			    $('.panel-pet').eq(itemID).find('.pet-age').text(showAddr);
			    $('.panel-pet').eq(itemID).find('.pet-breed').text(pricetemp + " ETH");
			    $('.panel-pet').eq(itemID).find('.pet-location').text(showDesc);
		    });
	    }
	
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
				var clicksrc = "team.html?"+i;
				petTemplate.find('.pet-href-pic').attr('href', clicksrc);
				petTemplate.find('.pet-href').attr('href', clicksrc);
				petsRow.append(petTemplate.html());
			}
			$("#indexPageID").removeClass("fixed-footer");
		}).then(function(){
			for (var i = 0; i < App.tokenCount; i++) {
				setAddrVal(i);
			}
		});
	},
  
    initTeamPage: function(itemID, accountLogin){		
	    $.ajaxSettings.async = false;
	    $.getJSON('../pets.json', function(data) {
            var petTemplate = $('#petItemTemplate');
            petTemplate.find('.pet-name-world-conty').text(data[itemID].name + " Football Team");
		    petTemplate.find('.country').text(data[itemID].name);
		    petTemplate.find('img').attr('src', data[itemID].picture_guojia);
            petTemplate.find('.img-center-item').attr('src', data[itemID].picture);
	    });
	    App.adoptionInstance.getWorlCupByID(itemID, function(error, desc){
			var petTemplate = $('#petItemTemplate');
			var price = web3.fromWei(desc[1].toNumber());
			var orgPrice = price;
			var ownerAddress = desc[2];
			if(orgPrice == 0){
				orgPrice = App.priceList[itemID];
				ownerAddress = "----";
			}
			petTemplate.find('.pet-breed-item').text(orgPrice + " ETH");
            petTemplate.find('.pet-age-item').text(ownerAddress);
			$("#EVENT_DES_read").val(desc[0]);
			if(accountLogin==desc[2]){
				$("#btn-buy").hide();
				$("#EVENT_DES").show();
				petTemplate.find('.btn-editinfo').attr('onclick', "App.modifyDesc("+itemID+")");
				petTemplate.find('.btnInfo').text("You can click this button to modify the description.");
			}else{
				$("#btn-buy").show();
				$("#EVENT_DES").hide();
				
				price = orgPrice*1.1;
		        petTemplate.find('.btn-adopt0').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.2;
		        petTemplate.find('.btn-adopt1').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.3;
			    petTemplate.find('.btn-adopt2').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.5;
			    petTemplate.find('.btn-adopt3').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*1.8;
			    petTemplate.find('.btn-adopt4').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			    price = orgPrice*2;
			    petTemplate.find('.btn-adopt5').attr('onclick', "App.btnbuy("+itemID+","+price+")");
			}
		});
        App.initTraddingRecord(itemID);
	    $.ajaxSettings.async = true;
    },
  
    btnbuy: function(itemID, price){
		web3.eth.getAccounts(function(error, accounts) {
            if (error) {
                //alert("Please enter your wallet!");
				console.log(error);
            }
            var account = accounts[0];
			if (typeof account == 'undefined') {
				//alert("cccccccccc");
				//alert("Please use mist wallet or login to metamask.");
				return;
			}
	        return App.adoptionInstance.buyWorldCupTeamToken(itemID, {from: account, value: web3.toWei(price), gas:700000 }, function(){
				App.initTeamPage(itemID, account);
				alert("If the page has not changed after the success of the change, please refresh the page or see if the transaction is successful.");
		    });
        });
    },
	
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
		        App.adoptionInstance.setWorldCupTeamDesc(itemID, desc, {from: account, gas:300000 }, function(){
				    App.initTeamPage(itemID, account);
				    alert("If the page has not changed after the success of the change, please refresh the page or see if the transaction is successful.");
		        });//web3.eth.gasPrice
		    });//.catc
	    }
    },
	
	persentToOwer: function(){
		web3.eth.getAccounts(function(error, accounts) {
            if (error) {
                //alert("Please enter your wallet!");
				console.log(error);
            }
            var account = accounts[0];
	        return App.adoptionInstance.PresentToCEO({from: account, value: web3.toWei(5), gas:300000 }).then(function(){
				App.initPresentRecord();
				alert("If the page has not changed after the success of the change, please refresh the page or see if the transaction is successful.");
		    });
        });
    },
	
	initMyTeamPage: function(){
	    function setAddrVal(itemID, index){
	        App.adoptionInstance.getWorlCupByID(itemID, function(error, desc){
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
			if (typeof account == 'undefined') {
				//alert("cccccccccc");
				var petsRow = $('#petsRow');
				petsRow.append("<p style='font-size:18px;'>Please login MetaMask.</p>");
				return;
			}
		alert(account);
	        App.adoptionInstance.tokensOfOwner(account, function(error, adopters){
		        alert(adopters.length);
			if(adopters.length>4){
					$("footer").removeClass("fixed-footer");
				}else{
					$("footer").addClass("fixed-footer");
				}
				var petsRow = $('#petsRow');
				if(adopters.length==0){
					petsRow.append("<h3>You don't have any team, <a href='/'>click here</a>, Come and grab your favorite team, cheer for it and <span style='color:#FF0000'><strong>get the bonus!</strong></span></h3><br/>");
					//"<p>If you think we have done a good job, Exceptional address: 0x0000000000000000,  encourage our development team, and we will provide you with better services and products.</p>");
					//petR.innerHTML="You don't have any ball, go grab it, the more teams you own, the more dividends you get.";
				}else{
	                petsRow.html("");
		            //petsRow.attr('style', "margin-top:110px;");
					$.getJSON('../pets.json', function(data) {
						for (var i = 0; i < adopters.length; i++) {
							var petTemplate = $('#petTemplate');
							petTemplate.find('.country').text(data[adopters[i]].name);
							petTemplate.find('img').attr('src', data[adopters[i]].picture_guojia);
							petTemplate.find('.img-center').attr('src', data[adopters[i]].picture);
							petTemplate.find('.pet-breed').text(data[adopters[i]].breed);
							petTemplate.find('.pet-age').text(data[adopters[i]].age);
							petTemplate.find('.pet-location').text(data[adopters[i]].location);
							petTemplate.find('.btn-adopt').attr('data-id', data[adopters[i]].id);
							//var clicksrc = "App.iteminfo("+adopters[i]+")";
							//petTemplate.find('.pet-href-pic').attr('onclick', clicksrc);
							//petTemplate.find('.pet-href').attr('onclick', clicksrc);
							var clicksrc = "team.html?"+adopters[i];
							petTemplate.find('.pet-href-pic').attr('href', clicksrc);
							petTemplate.find('.pet-href').attr('href', clicksrc);
							petsRow.append(petTemplate.html());
							alert(adopters[i].id);
							setAddrVal(adopters[i].id, i);
						}
					});
				}
				
		    });
        });
    },
	
	geiPools: function(){
	    web3.eth.getAccounts(function(error, accounts) {
			if (error) {
				console.log(error);
			}
			var account = accounts[0];
		        //alert(account);
			App.adoptionInstance.getCEO(function(error, ceoAddr){
				if(account == ceoAddr){
					return App.adoptionInstance.payout(account, {from: account, gas:300000 });//web3.eth.gasPrice
				}else{
					alert("When the bonus reaches 3.2 ether, the system will automatically give 0.1 ether to the owner of the team, and the more teams they have, the more they will be assigned.");
				}
			});
        });
    },
	
	initTraddingRecord: function(tokenID){
	    var tokenIDS = {};
		if(tokenID >= 0){
			tokenIDS = {tokenId:tokenID};
		}
		function timestampToTime(timestamp) {
            var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            D = (date.getDate()<10 ? '0'+date.getDate() : date.getDate()) + ' ';
            h = (date.getHours()<10 ? '0'+ date.getHours() : date.getHours()) + ':';
            m = (date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes())+ ':';
            s = date.getSeconds()<10 ? '0'+date.getSeconds() : date.getSeconds();
            return Y+M+D+h+m+s;
        }
		
		//$("footer").addClass("fixed-footer");
		
		$.getJSON('../pets.json', function(data) {
			// 获取事件对象
		    var myEvent = App.adoptionInstance.WorldCupTokenWereSold(tokenIDS, {fromBlock: 0, toBlock: 'latest'});//{curOwner: App.loginaccount}, 'latest'
		    //var code = "";
		    //var ii=0;
			var t = $('#traddingTable').DataTable();
		    //var div1 = document.getElementById('tbodydata');
		    // 监听事件，监听到事件后会执行回调函数
		    myEvent.watch(function(err, result) {
			    if (!err) {
					//alert(t);
					//ii = ii + 1;
				    var tokenID = result.args.tokenId-0;
					var tokenName = data[tokenID].picture_guojia;
				    var oldUser = result.args.prevOwner;//.sub(0, 4)+ "..."+result.args.prevOwner.sub(38, 3);
					t.row.add( [
						'<a href="team.html?'+tokenID+'"><img height="25px" src="'+tokenName+'"/></a>',
						'<a href="team.html?'+tokenID+'">' + data[tokenID].name + '</a>',
						result.args.curOwner,
						web3.fromWei(result.args.newPrice)+' ETH',
						timestampToTime(result.args.traddingTime)
					] ).draw();
					$("#hellocenter").hide();
		            $("#hellocenter2").show();
					$("#traddingPageID").removeClass("fixed-footer");
					//alert("ss");
				    //code = '<tr><td class="center" style="height:25px;"><img height="25px" src="'+tokenName+'"/></td><td class="center">'+data[tokenID].name+'</td><td class="center">'+result.args.curOwner+'</td><td class="center">'+web3.fromWei(result.args.newPrice)+' ETH</td><td class="center">'+timestampToTime(result.args.traddingTime)+'</td></tr>' + code;
				    //console.log(result);
			    } else {
				    console.log(err);
			    }
			    //div1.innerHTML = code;
				$("#hellocenter").hide();
		        $("#hellocenter2").show();
				$("#traddingPageID").removeClass("fixed-footer");
			    myEvent.stopWatching();
			    
		    });
			//alert("sssssssssssss");
			// 获取事件对象
		    var myEventBouns = App.adoptionInstance.ShareBonus({}, {fromBlock: 0, toBlock: 'latest'});//{curOwner: App.loginaccount}, 'latest'
		    //var code = "";
		    //var ii=0;
			var tBouns = $('#traddingPoolTable').DataTable();
			//var aa = App.adoptionInstance.worldCupIdToOwnerAddress;
			//alert(aa);
		    //var div1 = document.getElementById('tbodydata');
		    // 监听事件，监听到事件后会执行回调函数
		    myEventBouns.watch(function(err, result) {
			    if (!err) {
					//alert(t);
					//ii = ii + 1;
				    var tokenIDb = result.args.tokenId;
					var tokenNameb = data[tokenIDb].picture_guojia;
				    //var oldUser = result.args.prevOwner;//.sub(0, 4)+ "..."+result.args.prevOwner.sub(38, 3);
					/////var aa = App.adoptionInstance.worldCupIdToOwnerAddress;
					tBouns.row.add( [
						'<a href="team.html?'+tokenIDb+'"><img height="25px" src="'+tokenNameb+'"/></a>',
						'<a href="team.html?'+tokenIDb+'">' + data[tokenIDb].name + '</a>',
						result.args.toOwner,
						'0.1 ETH',
						timestampToTime(result.args.traddingTime)
					] ).draw();
					//alert("ss");
				    //code = '<tr><td class="center" style="height:25px;"><img height="25px" src="'+tokenName+'"/></td><td class="center">'+data[tokenID].name+'</td><td class="center">'+result.args.curOwner+'</td><td class="center">'+web3.fromWei(result.args.newPrice)+' ETH</td><td class="center">'+timestampToTime(result.args.traddingTime)+'</td></tr>' + code;
				    //console.log(result);
			    } else {
				    console.log(err);
			    }
			    //div1.innerHTML = code;
			    myEventBouns.stopWatching();
			    
		    });
		});
    },

	initPresentRecord: function(){
	    function timestampToTime(timestamp) {
            var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            D = (date.getDate()<10 ? '0'+date.getDate() : date.getDate()) + ' ';
            h = (date.getHours()<10 ? '0'+ date.getHours() : date.getHours()) + ':';
            m = (date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes())+ ':';
            s = date.getSeconds()<10 ? '0'+date.getSeconds() : date.getSeconds();
            return Y+M+D+h+m+s;
        }
		
		//$.getJSON('../pets.json', function(data) {
			// 获取事件对象
		    var myEvent = App.adoptionInstance.Present({}, {fromBlock: 0, toBlock: 'latest'});//{curOwner: App.loginaccount}, 'latest'
		    var code = "";
		    //var ii=0;
			var t = $('#traddingTable').DataTable();
		    //var div1 = document.getElementById('tbodydata');
		    // 监听事件，监听到事件后会执行回调函数
		    myEvent.watch(function(err, result) {
			    if (!err) {
					//alert(t);
					
					//ii = ii + 1;
				    //var tokenID = result.args.tokenId-0;
					//var tokenName = data[tokenID].picture_guojia;
				    //var oldUser = result.args.prevOwner;//.sub(0, 4)+ "..."+result.args.prevOwner.sub(38, 3);
					t.row.add( [
						result.args.fromAddress,
						result.args.toAddress,
						web3.fromWei(result.args.amount)+' ETH',
						timestampToTime(result.args.presentTime)
					] ).draw();
					//alert("ss");
				    //code = '<tr><td class="center" style="height:25px;"><img height="25px" src="'+tokenName+'"/></td><td class="center">'+data[tokenID].name+'</td><td class="center">'+result.args.curOwner+'</td><td class="center">'+web3.fromWei(result.args.newPrice)+' ETH</td><td class="center">'+timestampToTime(result.args.traddingTime)+'</td></tr>' + code;
				    //console.log(result);
			    } else {
				    console.log(err);
			    }
			    //div1.innerHTML = code;
			    myEvent.stopWatching();
			    
		    });
			//alert("sssssssssssss");
		//});
    }
};



