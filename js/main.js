console.time('aaa');
$(document).ready(function(){
	console.log("%c[log] document loaded", "color: green;");
});

$(window).on("load",function(){
	console.log("%c[log] window loaded", "color: green;");
});
console.timeEnd('aaa');

//console.warn("警告!");
//console.error("錯誤!");