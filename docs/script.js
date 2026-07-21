const form = document.getElementById('projectForm');
const display = document.getElementById('taskDisplay');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('taskName').value;
    const color = document.getElementById('priority').value;
    const col = document.createElement('div');
    col.className = "col";
    col.innerHTML = `<div class="card border-${color} h-100"><div class="card-body"><p class="card-text">${name}</p><button class="btn btn-sm btn-outline-secondary" onclick="this.closest^('.col'^).remove^(^)">Delete</button></div></div>`;
    display.appendChild(col);
    form.reset();
});
