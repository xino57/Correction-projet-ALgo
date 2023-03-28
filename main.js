//======================================================================== Correction======================================================================

/*int: nbLigne, nbColonne, nbObstacle
ptDepart, ptArrive: {x;y}*/

let symboleCase = "&#x2610;";
let symboleObstacle = "&#x25A0;";
let symboleDepart = "&#x1F22F;";
let symboleArrive = "&#x1F232;";
let symboleChemin = "&#x1F201;";


let x = aleatoire(10, 15);
let y = aleatoire(10,20);

let depart = {
        "x" : aleatoire(0,x-1),
        "y" : aleatoire(0,y-1)
        }

let arrive={};
do {
        arrive = {
                "x" : aleatoire(0,x-1),
                "y" : aleatoire(0,y-1)
                }
        
} while (arrive["x"]==depart["x"] && arrive["y"]==depart["y"]);


let grille=init(x,y, depart, arrive);
afficher(grille)

function init(nbColonne, nbLigne,  ptDepart, ptArrive, nbObstacle=0){
        let plateau=[];
        for(let i=0; i<nbColonne;i++){
                plateau[i]=[];
                for(let j=0; j<nbLigne; j++){
                        plateau[i][j]=symboleCase;
                        
                }

        }

        plateau[ptDepart["x"]][ptDepart["y"]]= symboleDepart;
        plateau[ptArrive["x"]][ptArrive["y"]]= symboleArrive;


        return plateau
}

function findPath(plateau) {
        let differencey = arrive.y - depart.y;
        let differencex = arrive.x - depart.x;
        let pointD = {
          "x": aleatoire(0, x - 1),
          "y": aleatoire(0, y - 1)
        };
        
        console.log(pointD);
        console.log(differencey, differencex);

        for (let i = 0; i < x; i++) {
          plateau[i] = [];
          for (let j = 0; j < y; j++) {
            plateau[i][j] = 0; 
          }
        }

        //plateau1[arrive.x][arrive.y] = symboleArrive;
        
        while (differencex != 0 || differencey != 0) {
          
          plateau1[depart.x][depart.y] = symboleChemin;
          
          if (differencex < 0) {
            differencex++;
            depart.x--;
            plateau1[depart.x][differencex] = symboleChemin;

          } else if (differencex > 0) {
            differencex--;
            depart.x++;
            plateau1[depart.x][differencex] = symboleChemin;
          } 

          if (differencey < 0) {
            differencey++;
            depart.y--;
            plateau1[depart.y][differencey] = symboleChemin;

          } else if (differencey > 0) {
            differencey--;
            depart.y++;
            plateau1[depart.y][differencey] = symboleChemin;
          }
        }
        return plateau;
        
      }
      

function displayPath(){
}

afficher(findPath(plateau));

displayPath();