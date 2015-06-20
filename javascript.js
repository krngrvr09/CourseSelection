
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
	var courseToSlot={
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
		"Phy":["w3","w4"],
		"SC":["th3","th4"],
		"SCM":["m4","w4"],
		"CNT":["w1","f2"]
	}

	var slotToCourse = {
		"m1":["DCS","PDCS","SWeb","LCS","NS","CMOS"],
		"m2":["CMP","DMG","ML","CS","FCS","MCS"],
		"m3":["IA","NLE","ASP","SSIoT","AI"],
		"m4":["PoR","Psy","TandS","NAP","SCM"],
		"t1":["PSOSM","MC","DSP","EO","MAS","IMB"],
		"t2":["PRP","PA","CG","AN","DVD","FOMB"],
		"t3":["MAD","AC","RS","MMBP","GICT"],
		"t4":["Hist","CT","TA","MMC"],
		"w1":["CNT","GA","SE","LO","CN"],
		"w2":["CMP","DMG","ML","CS","FCS","MCS"],
		"w3":[],
		"w4":["PoR","Psy","TandS","NAP","SCM","TA"],
		"th1":["ENT","DCS","PDCS","SWeb","LCS","NS","CMOS"],
		"th2":["PRP","PA","CG","AN","DVD","FOMB"],
		"th3":["IA","NLE","ASP","SSIoT","AI","SC"],
		"th4":["SC"],
		"f1":["PSOSM","MC","DSP","EO","MAS","IMB"],
		"f2":["CNT","GA","SE","LO","CN"],
		"f3":["MAD","AC","RS","MMBP","GICT"],
		"f4":["Hist","CT"]
	}


	var colour="#009933";
	var colourArray=["#009933","#ff6600","#cc00cc","#0066ff","#9933ff"]
	var light_grey = "#b2b2b2"
	var dark_grey = "#4c4c4c"
	courseSelected=[];
	
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
				},
		"m4" : function(decorate){
					colourIt("monday_fourth_slot",decorate, false);
				},
		"t1" : function(decorate){
					colourIt("tuesday_first_slot",decorate, false);
				},
		"t2" : function(decorate){
					colourIt("tuesday_second_slot",decorate,true);
				},
		"t3" : function(decorate){
					colourIt("tuesday_third_slot",decorate,false);
				},
		"t4" : function(decorate){
					colourIt("tuesday_fourth_slot",decorate,true);
				},
		"w1" : function(decorate){
					colourIt("wednesday_first_slot",decorate,true);
				},
		"w2" : function(decorate){
					colourIt("wednesday_second_slot",decorate,false);
				},
		"w3" : function(decorate){
					colourIt("wednesday_third_slot",decorate,true);
				},
		"w4" : function(decorate){
					colourIt("wednesday_fourth_slot",decorate,false);
				},
		"th1" : function(decorate){
					colourIt("thursday_first_slot",decorate,false);
				},
		"th2" : function(decorate){
					colourIt("thursday_second_slot",decorate,true);
				},
		"th3" : function(decorate){
					colourIt("thursday_third_slot",decorate,false);
				},
		"th4" : function(decorate){
					colourIt("thursday_fourth_slot",decorate,true);
				},
		"f1" : function(decorate){
					colourIt("friday_first_slot",decorate,true);
				},
		"f2" : function(decorate){
					colourIt("friday_second_slot",decorate,false);
				},
		"f3" : function(decorate){
					colourIt("friday_third_slot",decorate,true);
				},
		"f4" : function(decorate){
					colourIt("friday_fourth_slot",decorate,false);
				},
				
				
	}

	$(".course").click(function(){
		
		var value = $(this).attr("value");

		if($(this).is(":checked")){
			// alert();
			console.log("lololo: "+value);
			for(var i=0;i<courseToSlot[value].length;i++){
				// if($.inArray(courseToSlot[value][i],slotSelected) > -1){
				// 	alert("conflict");
				// }
				if(slotSelected.indexOf(courseToSlot[value][i])>0){
					console.log(slotSelected.indexOf(courseToSlot[value][i]));
					alert("conflict with "+$(slotToCourse[courseToSlot[value][i]]).filter(courseSelected)[0]);
					$(this).attr("checked",false);
					return;
				}
				// for( i in courseToSlot){
				// 	if(courseToSlot[i].indexOf(courseToSlot[value][i])>-1){
				// 		alert(i);
				// 	}
				// }
		
			}
			courseSelected.push(value);
			// alert(courseSelected);
			slotSelected = slotSelected.concat(courseToSlot[value]);
				// console.log("checked");
			for( var i=0;i<slotSelected.length;i++){
			// colour = colourArray[Math.floor((Math.random()*4))];
			
				console.log(slotSelected[i]);
				test[slotSelected[i]](true);
			}
			console.log("course selected: "+courseSelected);
		}
		else{
			// alert(courseSelected.indexOf(value));
			// console.log(" not checked");
			slotSelected = slotSelected.filter( function( el ) {
  				return courseToSlot[value].indexOf( el ) < 0;
			} );
			console.log("slot selected: "+slotSelected);
			if(courseSelected.indexOf(value)>-1){
				courseSelected.splice(courseSelected.indexOf(value),1);
				// alert(courseSelected);
				
			}
			
			for( var i=0;i<courseToSlot[value].length;i++){
					
				// if(slotSelected.indexOf(courseToSlot[value][i])>-1){
					test[courseToSlot[value][i]](false);
				// }
			}
		console.log(slotSelected[i]+" "+courseToSlot[value][i]);
		
		}

		console.log(slotSelected);
		// console.log(slotSelected);

		

	});
});