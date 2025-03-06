const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  
  const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

 
  if (!hCaptcha) {
    showResult("Por favor, preencha o campo do captcha.", 'red');
    return;
  }

  
  try {
    const formData = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    const message = data.success 
      ? "Mensagem enviada com sucesso!" 
      : "Ocorreu um erro ao enviar a mensagem.";

    
    showResult(message, data.success ? 'green' : 'red');
  } catch (error) {
    
    showResult("Ocorreu um erro ao enviar a mensagem.", 'red');
  }
});


function showResult(message, color) {
  result.innerHTML = `<p style="color: ${color}; font-weight: 500; margin-top: 20px;">${message}</p>`;
  setTimeout(() => {
    result.innerHTML = '';
  }, 8000);
}