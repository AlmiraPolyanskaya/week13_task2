const birthdayDate = document.getElementById('birthdayDate');
const resultInput = document.getElementById('result');
const clearButton = document.getElementById('clear');
const errorMessage = document.getElementById('errorMessage');

const clearResult = () => {
    resultInput.innerText = '';
    errorMessage.innerHTML = '';
};

birthdayDate.addEventListener('click', clearResult);

function calculateDaysTillBirthday() {

    function wordDay(daysTillBirthday) {
        let wordDay = '';
        switch (daysTillBirthday % 10) {
            case 1: wordDay = 'день'; break;
            case 2: wordDay = 'дня'; break;
            case 3: wordDay = 'дня'; break;
            case 4: wordDay = 'дня'; break;
            default: wordDay = 'дней';
        }
        return wordDay
    }

    function wordLeft(daysTillBirthday) {
        let wordLeft = '';
        switch (daysTillBirthday % 10) {
            case 1: wordLeft = 'остался'; break;
            default: wordLeft = 'осталось';
        }
        return wordLeft
    }

    errorMessage.innerHTML = '';

    const birthdayDateStr = birthdayDate.value;
    const currentDate = new Date();

    if (birthdayDate.value == '') {
        errorMessage.innerHTML += 'Введите дату вашего рождения в текущем году!<br>';
    }

    else if (resultInput.textContent !== '') {
        errorMessage.innerHTML += 'Можете ввести новую дату!<br>';
    }

    else {
        if ((currentDate.getMonth() < new Date(birthdayDateStr).getMonth()) || ((currentDate.getMonth() == new Date(birthdayDateStr).getMonth()) && (currentDate.getDate() < new Date(birthdayDateStr).getDate()))) {

            const currentTimestamp = Date.now();
            const birthdayTimestamp = Date.parse(birthdayDateStr);
            const daysTillBirthdayMS = birthdayTimestamp - currentTimestamp;
            const daysTillBirthday = Math.floor(daysTillBirthdayMS / (1000 * 60 * 60 * 24));

            resultInput.textContent = `До вашего дня рождения ${wordLeft(daysTillBirthday)} ${daysTillBirthday} ${wordDay(daysTillBirthday)}.`;
        }
        else {
            const currentTimestamp = Date.now();
            let birthdayDateNew = new Date(birthdayDateStr);
            birthdayDateNew.setFullYear(currentDate.getFullYear() + 1);
            const birthdayTimestamp = Date.parse(birthdayDateNew);
            const daysTillBirthdayMS = birthdayTimestamp - currentTimestamp;
            const daysTillBirthday = Math.floor(daysTillBirthdayMS / (1000 * 60 * 60 * 24));

            resultInput.textContent = `До вашего дня рождения ${wordLeft(daysTillBirthday)} ${daysTillBirthday} ${wordDay(daysTillBirthday)}.`;
        }
    }
}


