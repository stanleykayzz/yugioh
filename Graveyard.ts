//Le cimeti�re est une zone ou sont envoy� les cartes utilis�, d�truite ou d�fauss�
//il s'agit donc d'un tableau dont on peut r�cup�rer la taille


class Graveyard {
    /*
    The second way uses a generic array type, Array<elemType>:

    let list: Array<number> = [1, 2, 3];
    */

    graveyard: Array<Card>;

    public constructor() {
        this.graveyard = new Array<Card>();
    }

    //recup�re le total des cartes du cimeti�re
    public getGraveTotalCards(): number{
        return this.graveyard.length;
    }

    //ajoute des cartes dans le cimetiere 
    public sendToGrave(aCard: Card): void {
        this.graveyard.push(aCard);
    }

    //recup�re une carte du cimetiere
    public getFromGrave(aCard: Card): void {
      //  this.graveyard.
    }
}