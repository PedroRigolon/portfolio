var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Mensagem enviada!";
            status.classList.remove("alert-danger");  
            status.classList.add("alert-success");  

            status.classList.remove("fw-bolder");
            status.classList.add("fw-normal");

            status.classList.remove("hidden");  
            status.classList.add("visible");    
            
            form.reset();

            setTimeout(() => {
                status.classList.remove("visible");  
                status.classList.add("hidden");

                status.classList.remove("alert-success");  
            status.classList.add("alert-danger");  

            status.classList.remove("fw-normal");
            status.classList.add("fw-bolder");
            }, 5000);

        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Ocorreu um erro ao enviar a mensagem!";
                }
                status.classList.remove("hidden");
                status.classList.add("visible");

                setTimeout(() => {
                    status.classList.remove("visible");  
                    status.classList.add("hidden");
                }, 5000);
            })
        }
    }).catch(error => {
        status.innerHTML = "Ocorreu um erro ao enviar a mensagem!";
        status.classList.remove("hidden");
        status.classList.add("visible");

        setTimeout(() => {
            status.classList.remove("visible");  
            status.classList.add("hidden");
        }, 5000);
    });
}

form.addEventListener("submit", handleSubmit);
