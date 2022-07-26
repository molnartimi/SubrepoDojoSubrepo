var ctr = 1;

function onButtonClick() {
	const elementToUpdate = getElementToUpdate();
	updateElement(elementToUpdate);
}

function getElementToUpdate() {
	return window.document.getElementById('myText');
}

function updateElement(element) {
	element.textContent = 'Button clicked ' + ctr + (ctr > 1 ? ' times' : ' time');
	ctr++;
}