const textarea = document.getElementById('textarea');
const list = document.getElementById('list');
const listItems = document.getElementById('list').children;

textarea.addEventListener('input', onchange)
textarea.addEventListener('focus', onchange)
textarea.addEventListener('blur', onBlur)
list.addEventListener('click', () => textarea.focus())

function onchange(event) {
    const lines = textarea.value.split('\n');
    const lineCount = lines.length;
    
    textarea.value = event.target.value;
    if (lineCount > listItems.length) {
        return
    }
    for(let i = 0, j = lineCount; i < lineCount; i++) {
        listItems[i].style.color = 'transparent';
        listItems[i].style.visibility = 'hidden';
    }
    for(let i = lineCount; i < listItems.length; i++) {
        listItems[i].style.color = 'inherit';
        listItems[i].style.visibility = 'visible';
    }
}

function onBlur(_e) {
    if(textarea.value.length === 0) {
        listItems[0].style.color = 'inherit';
        listItems[0].style.visibility = 'visible';
    }
}