document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
    });

    const result = await response.json();
    if (result.success) {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        result.users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            userList.appendChild(li);
        });
    }
});

document.getElementById('shapeForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const type = document.getElementById('shapeType').value;
    const params = document.getElementById('shapeParams').value.split(',').map(Number);

    const response = await fetch('/api/shapes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, params }),
    });

    const result = await response.json();
    if (result.success) {
        document.getElementById('shapeResult').textContent = `Área: ${result.area}`;
        drawShape(type, params);
    } else {
        document.getElementById('shapeResult').textContent = `Erro: ${result.error}`;
    }
});

function drawShape(type, params) {
    const canvas = document.getElementById('shapeCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'lightblue';
    ctx.strokeStyle = 'black';

    if (type === 'circle') {
        const [radius] = params;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    } else if (type === 'square') {
        const [side] = params;
        const x = (canvas.width - side * 10) / 2;
        const y = (canvas.height - side * 10) / 2;
        ctx.fillRect(x, y, side * 10, side * 10);
        ctx.strokeRect(x, y, side * 10, side * 10);
    } else if (type === 'rectangle') {
        const [width, height] = params;
        const x = (canvas.width - width * 10) / 2;
        const y = (canvas.height - height * 10) / 2;
        ctx.fillRect(x, y, width * 10, height * 10);
        ctx.strokeRect(x, y, width * 10, height * 10);
    }
}
