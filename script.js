function write_mood(score) {
    let moods = JSON.parse(localStorage.getItem('moods'));
    if (moods == null) {
        moods = [];
    }
    const date = new Date();
    moods.push([[date.getFullYear(),date.getMonth(),date.getDay(),date.getHours(), date.getMinutes()],score]);
    localStorage.setItem('moods', JSON.stringify(moods));
    update_mood_container();
}

function update_mood_container(){
    let moods = JSON.parse(localStorage.getItem('moods'));
    let div = document.getElementById('mood-container');
    div.innerHTML = '';
    for (let i = 0; i < moods.length; i++) {
        let mood = moods[i];
        let date = new Date(mood[0][0],mood[0][1],mood[0][2],mood[0][3],mood[0][4]);
        let score = mood[1];
        let row = document.createElement('div');
        row.className = 'row';
        let date_div = document.createElement('div');
        date_div.className = 'col-5';
        date_div.innerHTML = date.toLocaleString();
        let score_div = document.createElement('div');
        score_div.className = 'col-5';
        score_div.innerHTML = score;
        row.appendChild(date_div);
        row.appendChild(score_div);
        div.appendChild(row);


    }

}