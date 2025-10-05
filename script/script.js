AOS.init();

const convertBtn = document.querySelector('#convertBtn');
const convertTo = document.querySelector('#convertTo');

convertBtn.addEventListener('click', async () => {
    const value = document.querySelector('#value').value;
    const realValue = document.querySelector('.realValue');
    const resultValue = document.querySelector('.resultValue');

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dollar = data.USDBRL.ask;
    const euro = data.EURBRL.ask;
    const bitcoin = data.BTCBRL.ask;

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    if (convertTo.value === 'Dollar') {

        realValue.innerHTML = `${formatter.format(value)}`
        resultValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value / dollar)
    }
    else if (convertTo.value === 'Euro') {

        realValue.innerHTML = `${formatter.format(value)}`
        resultValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(value / euro)
    }
    else if (convertTo.value === 'Bitcoin') {
        result = value / bitcoin

        realValue.innerHTML = `${formatter.format(value)}`
        resultValue.innerHTML = `${result.toFixed(6)} BTC`
    } else {
        alert('Fill in all fields!')
    }
});

convertTo.addEventListener('change', () => {

    const resultName = document.querySelector('.resultName')
    const img = document.querySelector('#img')

    if (convertTo.value === 'Dollar') {

        resultName.innerHTML = `Dollar`
        img.src = `../assets/img/dollar.png`

    } else if (convertTo.value === 'Euro') {

        resultName.innerHTML = `Euro`
        img.src = `../assets/img/euro.png`

    } else {

        resultName.innerHTML = `Bitcoin`
        img.src = `../assets/img/bitcoin.png`
    }
});




