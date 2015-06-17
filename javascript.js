
$(document).ready(function(){
	
	function colourIt(text,decorate,paint){
		if(decorate){

			$("."+text)[0].style.backgroundColor=colour;
			$("."+text)[1].style.backgroundColor=colour;
			$("."+text)[2].style.backgroundColor=colour;
			}
			else if(paint){
			$("."+text)[0].style.backgroundColor=light_grey;
			$("."+text)[1].style.backgroundColor=light_grey;
			$("."+text)[2].style.backgroundColor=light_grey;
			}
			else{
			$("."+text)[0].style.backgroundColor=dark_grey;
			$("."+text)[1].style.backgroundColor=dark_grey;
			$("."+text)[2].style.backgroundColor=dark_grey;
			
			}
	}

	var slotSelected = [];
	var value="";
	var map={
		"IMB": ["t1","f1"],
		"MMBP":["t3","f3"],
		"FOMB":["t2","th2"],
		"SA":[],
		"SE":["w1","f2"],
		"CMP":["m2","w2"],
		"CG":["t2","th2"],
		"IA":["m3","th3"],
		"ML":["m2","w2"],
		"FCS":["m2","w2"],
		"MAD":["t3","f3"],
		"NS":["m1","th1"],
		"PA":["t2","th2"],
		"DMG":["m2","w2"],
		"LCS":["m1","th1"],
		"GA":["w1","f2"],
		"MAS":["t1","f1"],
		"MC":["t1","f1"],
		"AC":["t3","f3"],
		"AN":["t2","th2"],
		"SSIoT":["m3","th3"],
		"SWeb":["m1","th1"],
		"AI":["m3","th3"],
		"PSOSM":["t1","f1"],
		"NAP":["m4","w4"],
		"NLE":["m3","th3"],
		"EO":["t1","f1"],
		"DVD":["t2","th2"],
		"CMOS":["m1","th1"],
		"DCS":["m1","th1"],
		"DSP":["t1","f1"],
		"ASP":["m3","th3"],
		"CS":["m2","w2"],
		"CN":["w1","f2"],
		"PRP":["t2","th2"],
		"GICT":["t3","f3"],
		"MMC":["t4"],
		"CT":["t4"],
		"PDCS":["m1","th1"],
		"RS":["t3","f3"],
		"ENT":["th1"],
		"TnS":["m4","w4"],
		"Psy":["m4","w4"],
		"His":["t4","f4"],
		"TA":["t4","w4"],
		"CT":["t4","f4"],
		"PoR":["m4","w4"],
		"MCS":["m2","w2"],
		"LO":["w1","f2"],
		"Phy":["w3","w4"]
	}
	var colour="red";
	var light_grey = "#b2b2b2"
	var dark_grey = "#4c4c4c"
	
	var test={
		"m1" : function(decorate){
					// console.log("m1");
					colourIt("monday_first_slot",decorate, true);
					
					
					
				},
		"m2" : function(decorate){
					colourIt("monday_second_slot",decorate, false);
					
				},
		"m3" : function(decorate){
					colourIt("monday_third_slot",decorate,true);
					// alert("lol");
					// $(".monday_third_slot")[0].style.backgroundColor=colour;
					// $(".monday_third_slot")[1].style.backgroundColor=colour;
					// $(".monday_third_slot")[2].style.backgroundColor=colour;
				},
		"m4" : function(decorate){
					colourIt("monday_fourth_slot",decorate, false);
					// alert("lol");
					// $(".monday_fourth_slot")[0].style.backgroundColor=colour;
					// $(".monday_fourth_slot")[1].style.backgroundColor=colour;
					// $(".monday_fourth_slot")[2].style.backgroundColor=colour;
				},
		"t1" : function(decorate){
					colourIt("tuesday_first_slot",decorate, false);
					// alert("lol");
					// $(".tuesday_first_slot")[0].style.backgroundColor=colour;
					// $(".tuesday_first_slot")[1].style.backgroundColor=colour;
					// $(".tuesday_first_slot")[2].style.backgroundColor=colour;
				},
		"t2" : function(decorate){
					colourIt("tuesday_second_slot",decorate,true);
					// alert("lol");
					// $(".tuesday_second_slot")[0].style.backgroundColor=colour;
					// $(".tuesday_second_slot")[1].style.backgroundColor=colour;
					// $(".tuesday_second_slot")[2].style.backgroundColor=colour;
				},
		"t3" : function(decorate){
					colourIt("tuesday_third_slot",decorate,false);
					// alert("lol");
					// $(".tuesday_third_slot")[0].style.backgroundColor=colour;
					// $(".tuesday_third_slot")[1].style.backgroundColor=colour;
					// $(".tuesday_third_slot")[2].style.backgroundColor=colour;
				},
		"t4" : function(decorate){
					colourIt("tuesday_fourth_slot",decorate,true);
					// alert("lol");
					// $(".tuesday_fourth_slot")[0].style.backgroundColor=colour;
					// $(".tuesday_fourth_slot")[1].style.backgroundColor=colour;
					// $(".tuesday_fourth_slot")[2].style.backgroundColor=colour;
				},
		"w1" : function(decorate){
					colourIt("wednesday_first_slot",decorate,true);
					// alert("lol");
					// $(".wednesday_first_slot")[0].style.backgroundColor=colour;
					// $(".wednesday_first_slot")[1].style.backgroundColor=colour;
					// $(".wednesday_first_slot")[2].style.backgroundColor=colour;
				},
		"w2" : function(decorate){
					colourIt("wednesday_second_slot",decorate,false);
					// alert("lol");
					// $(".wednesday_second_slot")[0].style.backgroundColor=colour;
					// $(".wednesday_second_slot")[1].style.backgroundColor=colour;
					// $(".wednesday_second_slot")[2].style.backgroundColor=colour;
				},
		"w3" : function(decorate){
					colourIt("wednesday_third_slot",decorate,true);
					// alert("lol");
					// $(".wednesday_third_slot")[0].style.backgroundColor=colour;
					// $(".wednesday_third_slot")[1].style.backgroundColor=colour;
					// $(".wednesday_third_slot")[2].style.backgroundColor=colour;
				},
		"w4" : function(decorate){
					colourIt("wednesday_fourth_slot",decorate,false);
					// alert("lol");
					// $(".wednesday_fourth_slot")[0].style.backgroundColor=colour;
					// $(".wednesday_fourth_slot")[1].style.backgroundColor=colour;
					// $(".wednesday_fourth_slot")[2].style.backgroundColor=colour;
				},
		"th1" : function(decorate){
					colourIt("thursday_first_slot",decorate,false);
					// alert("lol");
					// $(".thursday_first_slot")[0].style.backgroundColor=colour;
					// $(".thursday_first_slot")[1].style.backgroundColor=colour;
					// $(".thursday_first_slot")[2].style.backgroundColor=colour;
				},
		"th2" : function(decorate){
					colourIt("thursday_second_slot",decorate,true);
					// alert("lol");
					// $(".thursday_second_slot")[0].style.backgroundColor=colour;
					// $(".thursday_second_slot")[1].style.backgroundColor=colour;
					// $(".thursday_second_slot")[2].style.backgroundColor=colour;
				},
		"th3" : function(decorate){
					colourIt("thursday_third_slot",decorate,false);
					// alert("lol");
					// $(".thursday_third_slot")[0].style.backgroundColor=colour;
					// $(".thursday_third_slot")[1].style.backgroundColor=colour;
					// $(".thursday_third_slot")[2].style.backgroundColor=colour;
				},
		"th4" : function(decorate){
					colourIt("thursday_fourth_slot",decorate,true);
					// alert("lol");
					// $(".thursday_fourth_slot")[0].style.backgroundColor=colour;
					// $(".thursday_fourth_slot")[1].style.backgroundColor=colour;
					// $(".thursday_fourth_slot")[2].style.backgroundColor=colour;
				},
		"f1" : function(decorate){
					colourIt("friday_first_slot",decorate,true);
					// alert("lol");
					// $(".friday_first_slot")[0].style.backgroundColor=colour;
					// $(".friday_first_slot")[1].style.backgroundColor=colour;
					// $(".friday_first_slot")[2].style.backgroundColor=colour;
				},
		"f2" : function(decorate){
					colourIt("friday_second_slot",decorate,false);
					// alert("lol");
					// $(".friday_second_slot")[0].style.backgroundColor=colour;
					// $(".friday_second_slot")[1].style.backgroundColor=colour;
					// $(".friday_second_slot")[2].style.backgroundColor=colour;
				},
		"f3" : function(decorate){
					colourIt("friday_third_slot",decorate,true);
					// alert("lol");
					// $(".friday_third_slot")[0].style.backgroundColor=colour;
					// $(".friday_third_slot")[1].style.backgroundColor=colour;
					// $(".friday_third_slot")[2].style.backgroundColor=colour;
				},
		"f4" : function(decorate){
					colourIt("friday_fourth_slot",decorate,false);
					// alert("lol");
					// $(".friday_fourth_slot")[0].style.backgroundColor=colour;
					// $(".friday_fourth_slot")[1].style.backgroundColor=colour;
					// $(".friday_fourth_slot")[2].style.backgroundColor=colour;
				},
				
				
	}

	
	// test["m1"]();

	$(".course").click(function(){
		
		var value = $(this).attr("value");
		
		if($(this).is(":checked")){
			for(var i=0;i<map[value].length;i++){
				if($.inArray(map[value][i],slotSelected) > -1){
					alert("conflict");
				}
			}
			slotSelected = slotSelected.concat(map[value]);
				// console.log("checked");
		for( var i=0;i<slotSelected.length;i++){
				console.log(slotSelected[i]);
				test[slotSelected[i]](true);
		}
		}
		else{
			// console.log(" not checked");
			slotSelected = slotSelected.filter( function( el ) {
  				return map[value].indexOf( el ) < 0;
			} );
		for( var i=0;i<map[value].length;i++){
				console.log(slotSelected[i]);
				test[map[value][i]](false);
		}
		
		}
		console.log(slotSelected);
		// console.log(slotSelected);

		

	});
	// window.setInterval(function(){
	// $('#checkboxes input:checked').each(function() {

	// 	value = $(this).attr("value");
	// 	// if(map[value] in slotSelected){

	// 	// }
	// 	slotSelected =  slotSelected.concat(map[value]);
	// 	alert(slotSelected);
		
	// 	// switch(value){
	// 	// 	case "IMB":
	// 	// 		slotSelected.concat(map[value]);
	// 	// 		break;
	// 	// 	case "MMBP":
	// 	// 		slotSelected.push("t3");
	// 	// 		slotSelected.push("f3");
				
	// 	// 		break;
	// 	// 	case "FOMB":
	// 	// 		slotSelected.push("t2");
	// 	// 		slotSelected.push("th2");
				
	// 	// 		break;
	// 	// 	case "SA":
	// 	// 		break;
	// 	// 	case "SE":
	// 	// 		slotSelected.push("w1");
	// 	// 		slotSelected.push("f2");
				
	// 	// 		break;
	// 	// 	case "CMP":
	// 	// 		slotSelected.push("m2");
	// 	// 		slotSelected.push("w2");
				
	// 	// 		break;
			
	// 	// }
	// 	// for(var i in slotSelected){
	// 	// 	tes[i]();
	// 	// }
	// });
	// }, 1000);
	
	// alert($("#checkboxes input:checked").length);
});