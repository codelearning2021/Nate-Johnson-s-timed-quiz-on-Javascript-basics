var storage = JSON.parse(localStorage.getItem('quizHighscores'))
var highscoresEl = document.querySelector(".highscores")

if (storage === null) {
    highscoresEl.textContent = "No Highscores"
} else {
    highscoresEl.textContent = ''

    for (var i = 0; i < storage.length; i++) {
        var p = document.createElement('p')
        p.textContent = `Name: ${storage[i].name} ---------- Score: ${storage[i].score}`
        highscoresEl.append(p)
    }
}