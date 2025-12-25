// Show a modal to indicate the 'custom javascript' feature works
function showFeatureModal() {
	// Create modal elements
	const modal = document.createElement('div');
	modal.style.position = 'fixed';
	modal.style.top = '0';
	modal.style.left = '0';
	modal.style.width = '100vw';
	modal.style.height = '100vh';
	modal.style.background = 'rgba(0,0,0,0.5)';
	modal.style.display = 'flex';
	modal.style.alignItems = 'center';
	modal.style.justifyContent = 'center';
	modal.style.zIndex = '9999';

	const box = document.createElement('div');
	box.style.background = '#fff';
	box.style.padding = '2rem 3rem';
	box.style.borderRadius = '8px';
	box.style.boxShadow = '0 2px 16px rgba(0,0,0,0.2)';
	box.style.textAlign = 'center';

	const message = document.createElement('div');
	message.textContent = "✅ Your feature 'custom javascript' works!";
	message.style.fontSize = '1.2rem';
	message.style.marginBottom = '1.5rem';

	const closeBtn = document.createElement('button');
	closeBtn.textContent = 'Close';
	closeBtn.style.padding = '0.5rem 1.5rem';
	closeBtn.style.fontSize = '1rem';
	closeBtn.style.background = '#007bff';
	closeBtn.style.color = '#fff';
	closeBtn.style.border = 'none';
	closeBtn.style.borderRadius = '4px';
	closeBtn.style.cursor = 'pointer';
	closeBtn.onclick = () => document.body.removeChild(modal);

	box.appendChild(message);
	box.appendChild(closeBtn);
	modal.appendChild(box);
	document.body.appendChild(modal);
}

if (typeof document != 'undefined') {
    // Call the function to show the modal
    showFeatureModal();
}
