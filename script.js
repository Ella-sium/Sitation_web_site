// var nombre1 = prompt("Entrer le premier nombre: ");
// var nombre2 = prompt("Entrer le second nombre: ");

// var somme = Number(nombre1) + Number(nombre2);

// alert("Le resultat est: "+somme);

// const notes = [12, 7, 15, 9, 18, 5, 14, 11, 16];
//     function analyserNotes(notes){
//         var AuMoins10 = 0;
//         var Moins10 = 0;
//         var Maxnote = notes[0];
//         var MinNote = notes[0];
//         var moy = 0;
//         var somme = 0;
//         for(var i=0; i < notes.length; i++){
//             somme += notes[i];
//             if(notes[i] >= 10){
//                 AuMoins10 += 1;
//             }
//             if(notes[i] < 10){
//                 Moins10 += 1;
//             }
//             if(Maxnote < notes[i]){
//                 Maxnote = notes[i];
//             }
//             if(MinNote > notes[i]){
//                 MinNote = notes[i];
//             }
//         };
//         moy = somme / 9;
//         return {
//             admis: AuMoins10,
//             ajournes: Moins10,
//             moyenne: moy,
//             meilleurNote: Maxnote,
//             plusMauvaiseNote: MinNote,
//         };
//     };
// console.log(analyserNotes(notes));

const film = {
    titre: "Interstellar",
    realisateur: "Christopher Nolan",
    annee: 2014
};

const {titre, realisateur, annee} = film;

console.log(titre);
console.log(realisateur);
console.log(annee);