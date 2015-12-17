var scales = ["Major","Harmonic Minor", "Natural Minor" ]
var key = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#", "G"]
var pattern = ["stepwise","thirds","first inversion", "second inversion", "third inversion"]
var combination = ["<font color=blue>up</font>", "<font color=red>down</font>", "alternate up and down", "alternate down and up"]
var startingpoint = ["start from bottom of scale going up","start from top of scale going down"]
for(var j = 0; j<scales.length; j++ ){
	for(var i = 0; i<key.length; i++){
	 	for(var k = 0; k<pattern.length; k++){
	 		for(var l = 0; l<combination.length; l++){
	 			for(var m = 0; m<startingpoint.length; m++){
    	document.write("<b>",scales[j],"</b>"," ", "&quot;", key[i],"&quot;"," ",pattern[k], " ",combination[l], " ",startingpoint[m],"<br/>")
}
	}
		}
			}
				}
