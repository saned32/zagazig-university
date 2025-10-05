document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const id = document.getElementById('id').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '29212022100010' && id === '30406101306594') {
        window.location.href = 'success.html';
    }
            if (username === '29112024100738' && id === '30608121300713') {
        window.location.href = 'new1.html';
    }
    else {
        errorMessage.textContent = 'كودالطالب او كلمة السر غير صحيحه';
        errorMessage.style.display = 'block';
    }
});


