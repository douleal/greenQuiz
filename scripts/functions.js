const background = document.getElementById('wrapper');
const imageQuestion = window.document.getElementById('imgQuestion');
const titleQuestion = window.document.getElementById('titleQuestion');
const separator = window.document.getElementById('separator')
const listOptions = window.document.getElementById("list-options");
const letterQuestion = window.document.getElementById('letter');
const answerQuestion = window.document.getElementById('answer');
const progres = window.document.getElementById('progress');
const progressBar = window.document.getElementById('prgbar');


const questions = [ // Array com as perguntas
    {
        image: 'url(https://s.calendarr.com/upload/datas/se/ma/semana-do-meio-ambiente-0_c.jpg?auto_optimize=low&width=640)',
        title: 'Somente uma Terra é o tema da Semana do Meio Ambiente 2022. O evento tem duração de sete dias, mas apenas um dia é considerado o oficial, qual dia é esse?',
        options: [
            { opc: 'A', txt: '05 de Junho' },
            { opc: 'B', txt: '31 de Maio' },
            { opc: 'C', txt: '06 de Julho' }
        ],
        correct: 'A'
    },
    {
        image: 'url(https://blog.neteletrica.com.br/wp-content/uploads/2018/09/capa-arrumar-um-chuveiro-com-pouca-a%CC%81gua.jpg)',
        title: 'Em média, quantos litros de água são desperdiçados em um banho de 20 minutos?',
        options: [
            { opc: 'A', txt: '81 Litros' },
            { opc: 'B', txt: '180 Litros' },
            { opc: 'C', txt: '220 Litros' }
        ],
        correct: 'B'
    },
    {
        image: 'url(https://oportaln10.com.br/wp-content/uploads/2015/07/rio-amazonas-1.jpg)',
        title: 'Hoje nosso planeta é coberto por 70,8% de água. Entretanto, a porcentagem de água doce é muito menor, sabe dizer quanto?',
        options: [
            { opc: 'A', txt: '15,7%' },
            { opc: 'B', txt: '3,9%' },
            { opc: 'C', txt: '2,5%' }
        ],
        correct: 'C'
    },
    {
        image: 'url(https://www.tricurioso.com/wp-content/uploads/2019/01/por-que-o-plastico-demora-tanto-tempo-para-se-decompor.jpg)',
        title: 'O plástico é um material que demora muitos anos para se decompor, segundo os dados do Ministério do Meio Ambiente. O resíduo plástico pode levar até quantos anos para se decompor?',
        options: [
            { opc: 'A', txt: '180 anos' },
            { opc: 'B', txt: '320 anos' },
            { opc: 'C', txt: '400 anos' }
        ],
        correct: 'C'
    },
    {
        image: 'url(https://findes.com.br/wp-content/uploads/2019/11/GettyImages-565878653-1-768x507.jpg)',
        title: 'A reciclagem é uma atividade importante para o meio ambiente. Como podemos descrever o que é reciclagem?',
        options: [
            { opc: 'A', txt: 'Reaproveitamento de materiais usados em novos para consumo.' },
            { opc: 'B', txt: 'Profissão de catar lixo.' },
            { opc: 'C', txt: 'Nome dado ao lixo após seu descarte.' }
        ],
        correct: 'A'
    },
    {
        image: 'url(https://www.samaetga.com.br/fotos_bancoimagens/83.jpg)',
        title: 'Qual das alternativas apresenta objetos que NÃO podem ser reciclados?',
        options: [
            { opc: 'A', txt: 'Prato de isopor (plástico); papelão; frasco de perfume; papel alumínio.' },
            { opc: 'B', txt: 'Embalagem de salgadinho (plástico); papel celofane; prato Duralex (vidro); esponja de aço.' },
            { opc: 'C', txt: 'Todos acima são recicláveis.' }
        ],
        correct: 'B'
    },
    {
        image: 'url(https://blog.brkambiental.com.br/wp-content/uploads/2019/04/original-5c21ca37a8ed0407545d48e995ffcab8-1200x675.jpg)',
        title: 'Qual o cuidado é importante fazermos antes de enviar objetos para a reciclagem?',
        options: [
            { opc: 'A', txt: 'Limpá-los.' },
            { opc: 'B', txt: 'Coloca-los em sacolas plásticas.' },
            { opc: 'C', txt: 'Todas acima são importantes.' }
        ],
        correct: 'A'
    },
    {
        image: 'url(https://www.decorfacil.com/wp-content/uploads/2020/11/20201124descarte-de-pilhas-1.jpg)',
        title: 'O que fazer quando se tem pilhas e baterias que não são mais utilizadas em sua residência?',
        options: [
            { opc: 'A', txt: 'Levar a um local de coleta e descarte de pilhas.' },
            { opc: 'B', txt: 'Enterrar.' },
            { opc: 'C', txt: 'Nenhuma das respostas anteriores.' }
        ],
        correct: 'A'
    },
    {
        image: 'url(https://www.translix.com.br/wp-content/uploads/2020/03/1-lixo-eletronico-2.jpg)',
        title: 'Qual o país que mais tem acúmulo de lixo eletrônico?',
        options: [
            { opc: 'A', txt: 'Brasil.' },
            { opc: 'B', txt: 'África do Sul.' },
            { opc: 'C', txt: 'Estados Unidos.' }
        ],
        correct: 'C'
    },
    {
        image: 'url(https://www.calleve.com.br/wp-content/uploads/2021/04/importancia-coleta-seletiva-e-reciclagem-1024x576.png)',
        title: 'O que é coleta seletiva?',
        options: [
            { opc: 'A', txt: 'Destinação de resíduos para lixões e aterros.' },
            { opc: 'B', txt: 'Processo de recolhimento dos materiais que são possíveis de serem reciclados, previamente separados na fonte geradora.' },
            { opc: 'C', txt: 'Processo de envio de todo o lixo produzido para cooperativas ou entrega para catadores de rua.' }
        ],
        correct: 'B'
    }
];

var indexQuestions = 0; // Marca o índex do array para alternar as perguntas
var currentQuestion = 0; // Marca o número da pergunta atual
var progress = 0; // Marca a porcentagem da barra de progresso
var score = 0; // Marca os pontos ganhos

function show() { // Função para exibir o quiz (imagem de apoio, pergunta e opções) na tela
    imageQuestion.style.backgroundImage = questions[indexQuestions]["image"];
    titleQuestion.innerText = questions[indexQuestions]["title"];
    questions[indexQuestions]["options"].forEach(options => {
        const divOption = document.createElement('div');
        divOption.classList.add('option');
        divOption.innerHTML = `<span class="col-3 letter" data-option=${options.opc}>${options.opc}</span><span class="col-9 answer" data-option=${options.opc}>${options.txt}</span>`;
        divOption.dataset.option = options.opc;
        listOptions.appendChild(divOption);
    });
    currentQuestion++;
    console.log(`\n ---- PERGUNTA NÚMERO ${currentQuestion} ---- `)
    progress += 10;
    progressBar.style.width = `${progress}%`;
    listOptions.addEventListener('click', select);
};

function select(e) { // Função para obter a resposta do usuário através de evento de click
    const selection = e.target.dataset.option;
    console.log(`  >> SUA RESPOSTA: OPÇÃO ${selection}`);
    if (selection == questions[indexQuestions]["correct"]) {
        score++;
        console.log(`  >> Certa Resposta! Você tem ${score} pontos`);
        nextQuestion();
    } else {
        console.log("  >> Resposta Errada");
        nextQuestion();
    }
};

function nextQuestion() { // Função para exibir a próxima pergunta
    if (currentQuestion <=9) {
        indexQuestions++;
        setTimeout(clear, 800);
        setTimeout(show, 1200);
    } else {
        setTimeout(clear, 800);
        setTimeout(stop, 1200);
    }
};

function clear() { // Função para limpar a pergunta atual para ser exibido a próxima
    imageQuestion.style.backgroundImage = "";
    titleQuestion.innerText = "";
    while (listOptions.firstChild) {
        listOptions.removeChild(listOptions.firstChild);
    }
};

function stop() { // Função para o fim do quiz, exibindo o resultado de acertos
    separator.classList.add('hidden');
    progres.parentNode.removeChild(progres)
    if (score >= 7) {
        imageQuestion.style.backgroundImage = 'url(https://media.tenor.com/H6sA-iUDtBAAAAAM/rebirth-mother-nature.gif)';
        titleQuestion.innerText = `Parabéns, Você Acertou ${score} Perguntas !!! \n Você Provou que é um Cidadão Consciente`;
        const shareButton = document.createElement('div');
        shareButton.innerHTML = '<button class="share">Compartilhar</button><p>Compartilhe esse quiz e conscientize mais pessoas.</p>'
        listOptions.appendChild(shareButton);
        listOptions.addEventListener('click', shared);
    } else {
        background.style.backgroundImage = 'url(../img/bg2.png)'
        imageQuestion.style.backgroundImage = 'url(https://i.pinimg.com/originals/9a/28/c9/9a28c93fe813cd722c3dd3c49130c939.gif)';
        titleQuestion.innerText = `Você Acertou Somente ${score} Perguntas. \n Ainda há importantes lições para se aprender, mas não desista!`;
        const shareButton = document.createElement('div');
        shareButton.innerHTML = '<button class="restart">Refazer</button><p>Tente fazer de novo e aprender mais desse tema tão importante</p>'
        listOptions.appendChild(shareButton);
        listOptions.addEventListener('click', reset);
    }
}

function shared() { // Função para compartilhar o quiz
    if (navigator.share !== undefined) {
		navigator.share({
			title: 'Quiz Meio Ambiente',
			text: 'Trabalho de conscientização sobre cuidados com o meio ambiente',
			url: 'https://github.com/douleal/greenQuiz',
		})
		.then(() => console.log('Compartilhado com sucesso'))
		.catch((error) => console.log('Erro ao compartilhar', error));
	}
    window.location.reload(true);
}

function reset() { // Função para reiniciar o quiz
    window.location.reload(true);
}

(function(){ // Auto inicia a função show()
    show()
}());