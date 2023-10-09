window.addEventListener('DOMContentLoaded', ()=>{
	
	fetch(document.URL)
	.then((response)=>response.text())
	.then((text) => {
		const contents = new DOMParser().parseFromString(text,'application/xml');
		const modified = contents.evaluate('//xhtml:meta[@name=\'modified\']/@content',contents,nsResolver,XPathResult.STRING_TYPE).stringValue;
		if(modified){
			document
			.querySelector('#modified')
			.replaceWith(document.createTextNode(modified));
		}
	});
});