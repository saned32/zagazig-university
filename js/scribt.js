document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const id = document.getElementById('id').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '29212022100010' && id === '30406101306594') {
        window.location.href = 'success.html';
    } else {
        errorMessage.textContent = 'كودالطالب او كلمة السر غير صحيحه';
        errorMessage.style.display = 'block';
    }
});
