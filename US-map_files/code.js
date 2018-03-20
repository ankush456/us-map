var data = [
	["AL","Alabama","13"],
	["AK","Alaska","22"],
	["AZ","Arizona","47"],
	["AR","Arkansas","13"],
	["CA","California","381"],
	["CO","Colorado","175"],
	["CT","Connecticut","23"],
	["DE","Delaware","10"],
	["DC","District of Columbia","9"],
	["FL","Florida","66"],
	["GA","Georgia","28"],
	["HI","Hawaii","8"],
	["ID","Idaho","34"],
	["IL","Illinois","83"],
	["IN","Indiana","63"],
	["IA","Iowa","40"],
	["KS","Kansas","20"],
	["KY","Kentucky","15"],
	["LA","Louisiana","11"],
	["ME","Maine","47"],
	["MD","Maryland","34"],
	["MA","Massachusetts","57"],
	["MI","Michigan","131"],
	["MN","Minnesota","52"],
	["MS","Mississippi","4"],
	["MO","Missouri","49"],
	["MT","Montana","39"],
	["NE","Nebraska","22"],
	["NV","Nevada","22"],
	["NH","New Hampshire","22"],
	["NJ","New Jersey","26"],
	["NM","New Mexico","31"],
	["NY","New York","165"],
	["NC","North Carolina","91"],
	["ND","North Dakota","6"],
	["OH","Ohio","76"],
	["OK","Oklahoma","13"],
	["OR","Oregon","181"],
	["PA","Pennsylvania","108"],
	["RI","Rhode Island","8"],
	["SC","South Carolina","20"],
	["SD","South Dakota","10"],
	["TN","Tennessee","35"],
	["TX","Texas","96"],
	["UT","Utah","16"],
	["VT","Vermont","29"],
	["VA","Virginia","61"],
	["WA","Washington","201"],
	["WV","West Virginia","7"],
	["WI","Wisconsin","90"],
	["WY","Wyoming","18"],
]

$(document).ready(function(){
for (var i in data) {
$("#"+data[i][0]).css("fill","#58899e");
if (data[i][2] >= 4 && 20 > data[i][2]) {
$("#"+data[i][0]).css("opacity", 0.25);
}
if (data[i][2] >= 20 && 80 > data[i][2]) {
$("#"+data[i][0]).css("opacity", 0.5);
}
if (data[i][2] >= 80 && 150 > data[i][2]) {
$("#"+data[i][0]).css("opacity", 0.75);
}
if (data[i][2] >= 150) {
$("#"+data[i][0]).css("opacity", 1);
}
}
});
