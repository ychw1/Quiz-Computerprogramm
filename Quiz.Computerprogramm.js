
function checkAnswers() {
    // Entferne alte Ergebnisse
    document.querySelectorAll('.result').forEach(el => el.remove());

    let score = 0;

    // Definiere die korrekten Antworten für jede Frage
    const correctAnswers = {
        1: '1-option2',
        2: '2-option4',
        3: '3-option3',
        4: '4-option1',
        5: '5-option4',
        6: '6-option1',
        7: '7-option2',
        8: '8-option1',
        9: '9-option3',
        10: '10-option1',
        11: '11-option2',
        12: '12-option1',
        13: '13-option2',
        14: '14-option2',
        15: '15-option2',
        16: '16-option1',
        17: '17-option1',
        18: '18-option1',
        19: '19-option1',
        20: '20-option1'
    };

    // Überprüfe jede der 20 Fragen
    for (let i = 1; i <= 20; i++) {
        const selectedAnswer = document.querySelector(`input[name="quiz${i}"]:checked`);
        const resultElement = document.createElement('p');
        resultElement.className = 'result';
        resultElement.style.marginTop = '10px';

        if (!selectedAnswer) {
            resultElement.textContent = 'Bitte anklicken!';
            resultElement.style.color = 'orange';
        } else if (selectedAnswer.value === correctAnswers[i]) {
            score++;
            resultElement.textContent = `Frage ${i}: Richtig!`;
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = `Frage ${i}: Falsch! Versuche es nochmal.`;
            resultElement.style.color = 'red';
        }

        // Finde das Frage-Element und füge das Ergebnis hinzu
        const questionElement = document.getElementById(`q-${i}`);
        if (questionElement) {
            questionElement.appendChild(resultElement);
        }
    }

    // Zeige die Gesamtpunkte an
    const totalResult = document.createElement('p');
    totalResult.className = 'result';
    totalResult.textContent = `Gesamtpunkte: ${score} von 20`;
    totalResult.style.fontWeight = 'bold';
    totalResult.style.marginTop = '20px';
    document.querySelector('.k-quiz').appendChild(totalResult);
}