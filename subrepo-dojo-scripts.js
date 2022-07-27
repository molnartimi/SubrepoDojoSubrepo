var ctr = 1;

function onButtonClick(elementIdToUpdate) {
	const elementToUpdate = getElementToUpdate(elementIdToUpdate);
	updateElement(elementToUpdate);
}

function getElementToUpdate(elementIdToUpdate) {
	return window.document.getElementById(elementIdToUpdate);
}

function updateElement(element) {
	element.textContent = 'Button clicked ' + ctr + (ctr > 1 ? ' times' : ' time');
	ctr++;
}