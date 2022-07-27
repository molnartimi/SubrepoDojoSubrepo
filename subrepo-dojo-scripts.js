var ctr = 1;

function onButtonClick() {
	const elementToUpdate = getElementToUpdate();
	updateElement(elementToUpdate);
	console.log('Element update is done');
}

function getElementToUpdate() {
	return window.document.getElementById('myText');
}

function updateElement(element) {
	element.textContent = 'Button clicked ' + ctr + (ctr > 1 ? ' times' : ' time');
	ctr++;
}