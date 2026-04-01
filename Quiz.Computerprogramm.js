function checkAnswers() {
            // Entferne alte Ergebnisse
            document.querySelectorAll('.result').forEach(el => el.remove());

            let score = 0;

            // Frage 1
            const q1 = document.querySelector('input[name="quiz1"]:checked');
            const q1Result = document.createElement('p');
            q1Result.className = 'result';
            q1Result.style.marginTop = '10px';
            if (!q1) {
                q1Result.textContent = 'Bitte anklicken!';
                q1Result.style.color = 'orange';
            } else if (q1.value === '1-option2') {
                score++;
                q1Result.textContent = 'Frage 1: Richtig!';
                q1Result.style.color = 'green';
            } else {
                q1Result.textContent = 'Frage 1: Falsch! Versuche es nochmal.';
                q1Result.style.color = 'red';
            }
            // Finde die Frage 1 und füge Ergebnis hinzu
            const q1Para = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('Was ist ein Computerprogramm?'));
            q1Para.appendChild(q1Result);

            // Frage 2
            const q2 = document.querySelector('input[name="quiz2"]:checked');
            const q2Result = document.createElement('p');
            q2Result.className = 'result';
            q2Result.style.marginTop = '10px';
            if (!q2) {
                q2Result.textContent = 'Bitte anklicken!';
                q2Result.style.color = 'orange';
            } else if (q2.value === '2-option4') {
                score++;
                q2Result.textContent = 'Frage 2: Richtig!';
                q2Result.style.color = 'green';
            } else {
                q2Result.textContent = 'Frage 2: Falsch! Versuche es nochmal.';
                q2Result.style.color = 'red';
            }
            const q2Para = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('Was ist zählt NICHT als Programmiersprache?'));
            q2Para.appendChild(q2Result);

            // Frage 3
            const q3 = document.querySelector('input[name="quiz3"]:checked');
            const q3Result = document.createElement('p');
            q3Result.className = 'result';
            q3Result.style.marginTop = '10px';
            if (!q3) {
                q3Result.textContent = 'Bitte anklicken!';
                q3Result.style.color = 'orange';
            } else if (q3.value === '3-option3') {
                score++;
                q3Result.textContent = 'Frage 3: Richtig!';
                q3Result.style.color = 'green';
            } else {
                q3Result.textContent = 'Frage 3: Falsch! Versuche es nochmal.';
                q3Result.style.color = 'red';
            }
            const q3Para = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('Warum sind HTML und CSS KEINE Programmiersprachen?'));
            q3Para.appendChild(q3Result);

            // Frage 4
            const q4 = document.querySelector('input[name="quiz4"]:checked');
            const q4Result = document.createElement('p');
            q4Result.className = 'result';
            q4Result.style.marginTop = '10px';
            if (!q4) {
                q4Result.textContent = 'Bitte anklicken!';
                q4Result.style.color = 'orange';
            } else if (q4.value === '4-option1') {
                score++;
                q4Result.textContent = 'Frage 4: Richtig!';
                q4Result.style.color = 'green';
            } else {
                q4Result.textContent = 'Frage 4: Falsch! Versuche es nochmal.';
                q4Result.style.color = 'red';
            }
            const q4Para = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('Welche der folgenden Code-Snippets ist eine Programmiersprache?'));
            q4Para.appendChild(q4Result);

            // Frage 5
            const q5 = document.querySelector('input[name="quiz5"]:checked');
            const q5Result = document.createElement('p');
            q5Result.className = 'result';
            q5Result.style.marginTop = '10px';
            if (!q5) {
                q5Result.textContent = 'Bitte anklicken!';
                q5Result.style.color = 'orange';
            } else if (q5.value === '5-option4') {
                score++;
                q5Result.textContent = 'Frage 5: Richtig!';
                q5Result.style.color = 'green';
            } else {
                q5Result.textContent = 'Frage 5: Falsch! Versuche es nochmal.';
                q5Result.style.color = 'red';
            }
            const q5Para = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('Welche der folgenden Code-Snippets ist KEINE Programmiersprache?'));
            q5Para.appendChild(q5Result);

            // Gesamtpunkte
            const totalResult = document.createElement('p');
            totalResult.className = 'result';
            totalResult.textContent = `Gesamtpunkte: ${score} von 5`;
            totalResult.style.fontWeight = 'bold';
            totalResult.style.marginTop = '20px';
            document.querySelector('.k-quiz').appendChild(totalResult);
        }