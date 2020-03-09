var tablinks = document.getElementsByTagName('LI');
console.log(tablinks);
for(var i = 0; i < tablinks.length; i++ ) {
	tablinks[i].addEventListener('click', showImages);
}


function showImages() {
	var contents = document.getElementsByClassName('tab-content');
	for(var content of contents) {
		content.style.display = "none";
	}
	var x = Array.from(tablinks);

	contents[x.indexOf(this)].style.display = "block";
}
