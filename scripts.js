// let div = document.querySelector('div');
// let button = document.querySelector('button');

// button.addEventListener('click', fetchTheKanji);

// function fetchTheKanji() {
//     fetch('https://kanjiapi.dev/v1/kanji/人')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         div.textContent = `${data.kanji}`;
//     })
//     .catch(error => console.log(error));
// }








let ddd = document.querySelector('.ddd');
ddd.addEventListener('click', getKanji);

function getKanji() {
    fetch('https://kanjiapi.dev/v1/kanji/joyo')
        .then(res => res.json())
        .then(data => {
            let kanji = document.querySelector('.kanji');
            let grade = document.querySelector('.grade');
            let randomKanji = data[`${Math.floor(Math.random() * 2137)}`];
            let meaning = document.querySelector('.meaning');
            let jlpt = document.querySelector('.jlpt');
            let kun = document.querySelector('.kun');
            let on = document.querySelector('.on');
            kanji.innerHTML = `<p class="kanjii">${randomKanji}</p>`;

            function accessKanjiData(){
                fetch(`https://kanjiapi.dev/v1/kanji/${randomKanji}`)
                    .then(res => res.json())
                    .then(dataa => {
                        console.log(dataa);
                        grade.innerHTML = `The grade this kanji is learned in: <p class='japanese'>${dataa.grade}</p>`;
                        meaning.innerHTML = `The meaning of this kanji is: <p class='japanese'>${dataa.meanings}</p>`;
                        jlpt.innerHTML = `JLPT level: <p class='japanese'>${dataa.jlpt}</p>`;
                        kun.innerHTML = `Kunyomi readings: <p class='japanese'>${dataa.kun_readings}</p>`;
                        on.innerHTML = `Onyomi readings: <p class='japanese'>${dataa.on_readings}</p>`;
                        if(dataa.jlpt == null){
                            jlpt.style.display = 'none';
                        } else {
                            jlpt.style.display = 'block';
                        }
                    })
            }
            accessKanjiData();
        })
}

if (ddd.textContent == ''){
    ddd.textContent = 'Get a kanji';
} else {
    ddd.textContent = 'Next Kanji';
}