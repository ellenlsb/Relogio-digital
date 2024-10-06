let hrs = document.getElementById("hrs"); // Busca o elemento HTML com ID "hrs" para exibir a hora
let min = document.getElementById("min"); // Busca o elemento HTML com ID "min" para exibir os minutos
let seg = document.getElementById("seg"); // Busca o elemento HTML com ID "seg" para exibir os segundos

setInterval(() => { // Inicia um intervalo que executa a função a cada 1000 milissegundos (1 segundo)
    let currentTime = new Date(); // Cria um novo objeto Date com a data e hora atuais

    // Atualiza o conteúdo do elemento "hrs" com a hora formatada
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours(); 
    // Atualiza o conteúdo do elemento "min" com os minutos formatados
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes(); 
    // Atualiza o conteúdo do elemento "seg" com os segundos formatados
    seg.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds(); 

}, 1000); // O intervalo é definido para 1000 milissegundos (1 segundo)

