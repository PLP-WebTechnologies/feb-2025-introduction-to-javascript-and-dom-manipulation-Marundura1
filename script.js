// Function to change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'Text changed! This is the new content.';
}

// Function to toggle CSS styles
function toggleStyles() {
    const section = document.getElementById('style-section');
    if (section.style.backgroundColor === 'lightblue') {
        section.style.backgroundColor = '';
        section.style.fontSize = '';
    } else {
        section.style.backgroundColor = 'lightblue';
        section.style.fontSize = '1.2em';
    }
}

// Function to add a new list item
function addItem() {
    const list = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
}

// Function to remove the last list item
function removeItem() {
    const list = document.getElementById('item-list');
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    } else {
        alert('No items left to remove!');
    }
}
