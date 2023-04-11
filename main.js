/*int: nbLigne, nbColonne, nbObstacle
ptDepart, ptArrive: {x;y}*/

// Définition des symboles utilisés pour représenter les différentes cases de la grille
let symboleCase = "&#x2610;"; // case vide
let symboleObstacle = "&#x25A0;"; // case avec un obstacle
let symboleDepart = "&#x1F22F;"; // case de départ
let symboleArrive = "&#x1F232;"; // case d'arrivée
let symboleChemin = "&#x1F201;"; // case faisant partie du chemin trouvé

// Génération aléatoire des dimensions de la grille (nbLigne x nbColonne) et des positions de départ et d'arrivée
let x = aleatoire(10, 15); // nombre de colonnes
let y = aleatoire(10,20); // nombre de lignes

// position de départ
let depart = {
        "x" : aleatoire(0,x-1),
        "y" : aleatoire(0,y-1)
        }

// position d'arrivée
let arrive={};
do {
        arrive = {
                "x" : aleatoire(0,x-1),
                "y" : aleatoire(0,y-1)
                }
        
} while (arrive["x"]==depart["x"] && arrive["y"]==depart["y"]);

// Initialisation de la grille avec des cases vides et placement des symboles de départ et d'arrivée
let grille=init(x,y, depart, arrive);


// Affichage de la grille initiale
afficher(grille)


// Définition de la fonction init qui permet d'initialiser la grille avec les symboles de départ et d'arrivée
function init(nbColonne, nbLigne,  ptDepart, ptArrive, nbObstacle=0){
        let plateau=[];
        for(let i=0; i<nbColonne;i++){
                plateau[i]=[];
                for(let j=0; j<nbLigne; j++){
                        plateau[i][j]=symboleCase;
                        
                }

        }

        plateau[ptDepart["x"]][ptDepart["y"]]= symboleDepart; // Placement du symbole de départ
        plateau[ptArrive["x"]][ptArrive["y"]]= symboleArrive; // Placement du symbole d'arrivée


        return plateau // Retourne la grille initiale
}
// Définition de la fonction findPath qui permet de trouver le chemin entre le point de départ et le point d'arrivée
function findPath(grille) {

  let differencey = arrive.y - depart.y;
   // Différence de coordonnées en y entre le point de départ et le point d'arrivée
  let differencex = arrive.x - depart.x; 
  // Différence de coordonnées en x entre le point de départ et le point d'arrivée

        // point de distance entre l'arrivé est le départ
        let pointD = {
          "x": aleatoire(0, x - 1),
          "y": aleatoire(0, y - 1)
        };

        console.log(pointD)

   // On crée un nouveau chemin
   let chemin = [];
   chemin[0] = {x: depart.x, y: depart.y};
   let index = 0;
 
   // Boucle While qui permet de se déplacer jusqu'à arriver à la destination
   while (differencex != 0 || differencey != 0) {
 
     // Déplacement horizontal

     if (differencex < 0) {
       depart.x--;
       differencex++;
     } else if (differencex > 0) {
       depart.x++;
       differencex--;
     }
     // Déplacement vertical

     else if (differencey < 0) {
       depart.y--;
       differencey++;
     } else if (differencey > 0) {
       depart.y++;
       differencey--;
     }
 
     // Ajout du point courant au chemin

     index++;
     chemin[index] = {x: depart.x, y: depart.y};
   }
 
   // Ajout des symboles de chemin sur la grille
   
   for (let i = 0; i < taille(chemin); i++) {
     grille[chemin[i].x][chemin[i].y] = symboleChemin;
   }
 
   afficher(grille);
 }
      

function displayPath(){
}

findPath(grille);


