// place navbar templates in each section tag

var sections = document.getElementsByTagName('section');
var template = document.getElementById('header-template');

[].forEach.call(sections, function(section) {
	console.log(section);
	section.prepend(template.content.cloneNode(true));
});