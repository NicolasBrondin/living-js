const NGRAMS_MAX_LENGTH = 2;
const LIFE_TIME = 10;

var previous_dna =[];
var current_dna = [];
var nucleos = ["0","1","2","3","4","5","6","7","8","9","a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n","/","-","+","&&","'",";","(",")","[","]","|","{","}","%",".","?","!",":"];

function live() {
    try {
        var current_dna_str = current_dna.join("");
        eval(current_dna_str);
        console.log(current_dna_str);
        evolve();
    } catch(e) {
        unevolve();
    }
}

function evolve() {
    previous_dna = current_dna.slice(0);
    ngrams = [];
    for(let i=0; i<NGRAMS_MAX_LENGTH; i++){
        let nucleo_index = Math.floor(Math.random()*(nucleos.length-1));
        ngrams.push(nucleos[nucleo_index]);
    }
    current_dna = current_dna.concat(ngrams);
    setTimeout(live, LIFE_TIME);
};

function unevolve() {
    current_dna = previous_dna.slice(0);
    setTimeout(evolve, LIFE_TIME);
};

live();