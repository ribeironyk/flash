Monyk Ribeiro <monykribeiro2009@gmail.com>
	
07:54 (há 4 minutos)
	
	
para mim
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gerador de Senhas Seguro</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
<h1>🔒 Gerador de Senhas</h1>

<input type="text" id="senha" class="senha" readonly>

<div class="config">
<label>Tamanho: <span id="valorTamanho">12</span></label>
<input type="range" min="8" max="32" value="12" id="tamanho">
</div>

<label><input type="checkbox" id="maiusculas" checked> Letras Maiúsculas</label>
<label><input type="checkbox" id="minusculas" checked> Letras Minúsculas</label>
<label><input type="checkbox" id="numeros" checked> Números</label>
<label><input type="checkbox" id="especiais" checked> Caracteres Especiais</label>

<button onclick="gerarSenha()">Gerar Senha</button>
<button onclick="copiarSenha()">Copiar Senha</button>

<div class="forca" id="forca">Força: Média</div>
</div>

<script src="script.js"></script>

</body>
</html>








* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Arial, sans-serif;
}

body {
background: #121212;
color: white;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
}

.container {
background: #1e1e1e;
padding: 30px;
border-radius: 15px;
width: 400px;
box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
}

h1 {
text-align: center;
margin-bottom: 20px;
color: #00ff88;
}

.senha {
width: 100%;
padding: 12px;
font-size: 18px;
border: none;
border-radius: 8px;
margin-bottom: 15px;
}

.config {
margin: 10px 0;
}

label {
display: block;
margin: 8px 0;
}

input[type="range"] {
width: 100%;
}

button {
width: 100%;
padding: 12px;
margin-top: 10px;
border: none;
border-radius: 8px;
background: #00c853;
color: white;
font-size: 16px;
cursor: pointer;
}

button:hover {
background: #00a844;
}

.forca {
margin-top: 15px;
text-align: center;
font-weight: bold;
}











const tamanho = document.getElementById("tamanho");
const valorTamanho = document.getElementById("valorTamanho");

tamanho.addEventListener("input", () => {
valorTamanho.textContent = tamanho.value;
});

function gerarSenha() {
const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const especiais = "!@#$%&*?";

let caracteres = "";

if (document.getElementById("maiusculas").checked)
caracteres += maiusculas;

if (document.getElementById("minusculas").checked)
caracteres += minusculas;

if (document.getElementById("numeros").checked)
caracteres += numeros;

if (document.getElementById("especiais").checked)
caracteres += especiais;

if (caracteres === "") {
alert("Selecione pelo menos uma opção!");
return;
}

let senha = "";

for (let i = 0; i < tamanho.value; i++) {
senha += caracteres.charAt(
Math.floor(Math.random() * caracteres.length)
);
}

document.getElementById("senha").value = senha;
verificarForca(senha);
}

function verificarForca(senha) {
let pontos = 0;

if (senha.length >= 12) pontos++;
if (/[A-Z]/.test(senha)) pontos++;
if (/[0-9]/.test(senha)) pontos++;
if (/[!@#$%&*?]/.test(senha)) pontos++;

const forca = document.getElementById("forca");

if (pontos <= 2) {
forca.textContent = "Força: Fraca";
} else if (pontos === 3) {
forca.textContent = "Força: Média";
} else {
forca.textContent = "Força: Forte";
}
}

function copiarSenha() {
const senha = document.getElementById("senha");

navigator.clipboard.writeText(senha.value);
alert("Senha copiada!");
}

gerarSenha();
