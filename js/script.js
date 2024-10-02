const genderImage = document.getElementById("genderImage");
const btnInput = document.querySelector("#btn-submit");
const btnReset = document.querySelector("#btn-reset");

const outputName = document.querySelector("#output-name");
const outputAge = document.querySelector("#output-age");
const outputResult = document.querySelector("#output-result");

// Mensagens de erro
const ERROR_MESSAGES = {
    emptyName: 'Nome não pode estar vazio!',
    invalidAge: 'Idade deve ser um número positivo!',
    invalidHeight: 'Altura deve ser um número positivo!',
    invalidWeight: 'Peso deve ser um número positivo!',
};

// Função para limpar os campos de dados e a imagem
const resetFields = () => {
    genderImage.style.display = "none";
    outputName.textContent = '';
    outputAge.textContent = '';
    outputResult.textContent = '';
};

// Adiciona evento de clique no botão de reset
btnReset.addEventListener("click", resetFields);

// Lógica principal do app
btnInput.addEventListener("click", (e) => {
    e.preventDefault();
    
    const heightInput = parseFloat(document.querySelector("#heightInput").value);
    const weightInput = parseFloat(document.querySelector("#weightInput").value);
    const ageInput = parseInt(document.querySelector("#ageInput").value);
    const nameInput = document.querySelector("#nameInput").value;

    if (validateInputFields(nameInput, ageInput, heightInput, weightInput)) {
        showGenderImage();
        outputName.textContent = nameInput;
        outputAge.textContent = ageInput;
        outputResult.textContent = calculateBMI(weightInput, heightInput);
    }
});

// Função para mostrar o gênero selecionado
const showGenderImage = () => {
    const genderSelect = document.getElementById("genderSelect").value;
    genderImage.src = genderSelect === "masculino" ? "./img/masc.jpg" : "./img/fem.jpg";
    genderImage.style.display = "block";
};

// Validação 
const validateInputFields = (nameInput, ageInput, heightInput, weightInput) => {
    let isValid = true;

    if (nameInput.trim() === '') {
        alert(ERROR_MESSAGES.emptyName);
        isValid = false;
    }

    if (ageInput <= 0 || isNaN(ageInput)) {
        alert(ERROR_MESSAGES.invalidAge);
        isValid = false;
    }

    if (heightInput <= 0 || isNaN(heightInput)) {
        alert(ERROR_MESSAGES.invalidHeight);
        isValid = false;
    }

    if (weightInput <= 0 || isNaN(weightInput)) {
        alert(ERROR_MESSAGES.invalidWeight);
        isValid = false;
    }

    return isValid;
};

// Função para calcular IMC e classificar
const calculateBMI = (weightInput, heightInput) => {
    const bmi = (weightInput / (heightInput * heightInput)).toFixed(2);
    
    if (bmi < 18.5) return "Abaixo do peso";
    if (bmi < 25) return "Peso normal";
    if (bmi < 30) return "Sobrepeso";
    if (bmi < 35) return "Obesidade Grau I";
    return "Obesidade Grau II";
};
