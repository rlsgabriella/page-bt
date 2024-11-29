document.getElementById("sendMessage").addEventListener("click", function () {
    // Pegar os valores do formulário
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Verificar se todos os campos estão preenchidos
    if (!name || !phone || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar a mensagem para o WhatsApp
    const whatsappNumber = "558598243210"; // Substitua pelo número da empresa (inclua o DDD sem espaços ou caracteres especiais)
    const whatsappMessage = `Olá, meu nome é ${name}. Meu telefone é ${phone}. Mensagem: ${message}`;

    // Codificar a mensagem para evitar problemas com caracteres especiais
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirecionar o usuário para o WhatsApp
    window.open(whatsappURL, "_blank");
});
