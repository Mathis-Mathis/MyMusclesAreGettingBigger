import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

console.log('Bootstrap is integrated!');

document.addEventListener('DOMContentLoaded', () => {
    const element = document.createElement('div');
    element.className = 'alert alert-primary';
    element.textContent = 'Hello, Bootstrap!';
    document.body.appendChild(element);
});
