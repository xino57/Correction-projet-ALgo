function tabFusion(tab, tab1) {
    let result = [];

    for (let i = 0; i < taille(tab); i++) {
        result[taille(result)] = tab[i];
    }

    for (let i = 0; i < taille(tab1); i++) {
        result[taille(result)] = tab1[i];
    }

    return result;
}

function tabCission(tab, pos) {
    let result = [];
    let tab1 = [];
    let tab2 = [];

    if (pos > taille(tab)) {
        for (let i = 0; i < taille(tab); i++) {
            result[i] = tab[i];
        }
    } else {
        for (let i = 0; i < pos; i++) {
            tab1[i] = tab[i];
        }

        for (let i = 0; i < taille(tab) - pos; i++) {
            tab2[i] = tab[i + pos];
        }

        result = [tab1, tab2];
    }

    return result;
}

function tabInsertion(tab, val, pos) {
    let result = [];

    for (let i = 0; i < taille(tab); i++) {
        if (i == pos) {
            result[taille(result)] = val;
        }
        result[taille(result)] = tab[i];
    }
    if (pos >= taille(tab)) {
        result[taille(result)] = val;
    }

    return result;
}

function tabSuppression(tab, pos) {
    let result = [];

    for (let i = 0; i < taille(tab); i++) {
        if (i !== pos) {
            result[taille(result)] = tab[i];
        }
    }

    return result;
}

function tabAjout(tab, valeur) {
    tab[taille(tab)]=valeur;
    
}

function tabCopie(tab) {
    let result=[];
    for (let i = 0; i < taille(tab); i++) {
        result[i] = tab[i];
    }
    return result;
}
function TabPermutation(tab,pos1,pos2){
    let result = tabCopie(tab);
    if(pos1<taille(tab) && pos2<taille(tab) && pos1>=0 && pos2>=0){
        result[pos1] = tab[pos2];
        result[pos2] = tab[pos1];
    }
    return result;
} 

/* function permutation(tab1,pos,pos1){
    let result=[];
        for(i=0; i<taille(tab1);i++){
            if(i==pos){
                result[taille(result)]=tab1[pos1];
            }else if(i==pos1){
                result[taille(result)]=tab1[pos]; 
            }else{
                result[taille(result)]=tab1[i]; 
            }
    }
return result; 
}
 afficher(permutation(tab1,2,4));
*/
