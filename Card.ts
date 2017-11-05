
class Card {    
    name: string;
    description: string;
    back: any;

    public constructor(nom: string, des: string) {
        this.name = nom;
        this.description = des;
    }

    //on ajoute une image à la face de la carte
    public setFront(): void {
    }
}