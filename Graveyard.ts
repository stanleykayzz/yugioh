//Le cimetière est une zone ou sont envoyé les cartes utilisé, détruite ou défaussé
//il s'agit donc d'un tableau dont on peut récupérer la taille


class Graveyard {
    /*
    The second way uses a generic array type, Array<elemType>:

    let list: Array<number> = [1, 2, 3];
    */

    graveyard: Array<Card>;

    public constructor() {
        this.graveyard = new Array<Card>();
    }

    //recupère le total des cartes du cimetière
    public getGraveTotalCards(): number{
        return this.graveyard.length;
    }

    //ajoute des cartes dans le cimetiere 
    public sendToGrave(aCard: Card): void {
        this.graveyard.push(aCard);
    }

    //recupère une carte du cimetiere
    public getFromGrave(aCard: Card): void {
      //  this.graveyard.
    }
}