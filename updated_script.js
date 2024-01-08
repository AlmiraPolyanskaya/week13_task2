const resultInput = document.getElementById('result');
const errorMessage = document.getElementById('errorMessage');
const clearButton = document.getElementById('clear');

const clearResult = () => {
    resultInput.innerText = '';
    errorMessage.innerHTML = '';
};

birthdayDate.addEventListener('click', clearResult);

function calculateDaysTillBirthday() {
    errorMessage.innerHTML = '';
    const birthdayDate = document.getElementById('birthdayDate');
    const birthday = new Date(birthdayDate.value);
    const currentDate = new Date();

    if (birthdayDate.value == '') {
        errorMessage.innerHTML += 'Введите дату вашего рождения в текущем году!<br>';
    }
    else if (resultInput.textContent !== '') {
        errorMessage.innerHTML += 'Можете ввести новую дату!<br>';
    }
    else {
        if (currentDate > birthday) {
            birthday.setFullYear(currentDate.getFullYear() + 1);
        }
        else {
            birthday.setFullYear(currentDate.getFullYear());
        }

        const daysTillBirthday = Math.floor((birthday - currentDate) / (1000 * 60 * 60 * 24));

        let wordDay;
        if (daysTillBirthday % 10 === 1 && daysTillBirthday % 100 !== 11) {
            wordDay = 'день';
        }
        else if ([2, 3, 4].includes(daysTillBirthday % 10) && ![12, 13, 14].includes(daysTillBirthday % 100)) {
            wordDay = 'дня';
        }
        else {
            wordDay = 'дней';
        }

        function wordLeft(daysTillBirthday) {
            let wordLeft = '';
            //очень хотелось оставить оператор switch хоть в каком-нибудь виде
            if (daysTillBirthday % 100 !== 11) {
                switch (daysTillBirthday % 10) {
                    case 1: wordLeft = 'остался'; break;
                    default: wordLeft = 'осталось';
                }
                return wordLeft
            }
            else {
                wordLeft = 'осталось';
                return wordLeft
            }
        }

        resultInput.textContent = `До вашего дня рождения ${wordLeft(daysTillBirthday)} ${daysTillBirthday} ${wordDay}.`;
    }
}