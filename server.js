var express = require('express');
//var MONGO_URL = "mongodb://localhost:27017/testYgo_db";
var MONGO_URL = "mongodb://localhost:27017/yugioh_Game";
var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    mongo = require('mongodb').MongoClient,
    fs = require('fs');
var countUserSuscribed = 0;

console.log("ici on récupère le COUNT des user déjà inscrits");
//////////////////////////////////////////////////////////
mongo.connect(MONGO_URL, function (err, db) {
    console.log("on se connect à l'url");
    //var Users = db.collection('User');

    var Users = db.collection('players');
    console.log("on récupère le count et on le met dans une var");
    //countUserSuscribed = Users.count();
    Users.count(function (err, c) {
        countUserSuscribed = c;
        console.log("normalement on vient d'ajouter le nombre de user dans la var");
        console.log("on a " + countUserSuscribed + " user dans la mongoDB");
    }); //Users.count();

});

//on déclare les routes pour tous les fichiers ici
app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/rockPaper', function (req, res) {
    res.sendFile(__dirname + '/rockPaper.html');
});
app.get('/duel', function (req, res) {
    res.sendFile(__dirname + '/Duel.html');
});

app.get('/editDeck', function (req, res) {
    res.sendFile(__dirname + '/editDeck.html');
});

app.get('/menu', function (req, res) {
    res.sendFile(__dirname + '/menu.html');
});
app.get('/inscription', function (req, res) {
    res.sendFile(__dirname + '/inscription.html');
});

app.get('/duelRoom', function (req, res) {
    res.sendFile(__dirname + '/duelRoom.html');
});

/*************************************************************************/
//les informations du server
//le serveur doit avoir :
// une liste d'info de joueurs avec id et pseudo, mdp , email, win, loss, draw, deck
//une liste d'info duel/tag/royal avec id , participants, gagnant et perdant

var listConnectedUser = [];
var compteur = 0;

function GameServer() {
    this.countPlayer = 0;
    this.countDuel = 0;
    this.duelInfo = { duelId: '', p1: '', p2: '', winner: '', loser: '' };
    this.playerList = [];
    this.duelList = [];
    this.deckList = [];
    this.cardList = [];
}

GameServer.prototype = {
    addPlayer: function (player,index) {
        this.playerList.push(player);
        this.countPlayer += 1;
        this.playerList[index].id = index +1;
    },
    newDuel: function (player) {
        this.countDuel += 1;
        
        this.duelList.push(player);
    },
    addChoice: function (player) {
        if (this.p1 == player.name)
            this.choice1 = player.choice;
        else if (this.p2 == player.name)
            this.choice2 = player.choice;
    }/*,
    getData: function (data) {
        console.log("on est dans le get data du server ou on va gérer la valeur recu du client");
        console.log(" le client a un joueur " + data.name + "et un choix " + data.choice)
        //var gameData = {};
        if (this.p1 == "" || this.p1 == undefined)
            this.p1 = data.name;
        else if ((this.p1 != "" || this.p1 != undefined) && this.p2 == "")
            this.p2 = data.name;
        if (this.choice1 == "" || this.choice1 == undefined)
            this.choice1 = data.choice;
        else if ((this.choice1 != "" || this.choice1 == undefined) && this.choice2 == "")
            this.choice2 = data.choice;

        console.log("on a donc un gameserver avec p1:" + this.p1 + " p2:" + this.p2 + " choix1:" + this.choice1 + " choix2: " + this.choice2);
    }*/
}

var game = new GameServer();
/* Connection events */
io.on('connection', function (client) {
    console.log('someone is trying to connect');    
    
    console.log("On a au total "+countUserSuscribed+" connected");
    //console.log(client.id);
    //console.log(client.nsp);

        console.log("User connected to index");
        client.on('userConnectedInfo', function (user) {
            console.log("on recoit le user " + user.pseudo + " de mdp " + user.psw)
            // on verifie le login et le mdp saisi
            //si ça correspond aux données de bdd c'est ok on lui transmet son id et on va a la page menu

            mongo.connect(MONGO_URL, function (err, db) {
                console.log("on se connect a la bdd pour verifier si le login et le mdp correspondent");
               // var Users = db.collection('User');
                var Users = db.collection('palyers');
                Users.find({ login: user.pseudo, password: user.psw }, { playerId: 1 }).toArray(function (err, docs) {
                    //console.log("docs);
                    console.log("son id est " + docs[0].playerId);
                    client.emit("getYourPlayerId", {playerId:docs[0].playerId});
    /*
     * Lorsqu'un joueur se connecte on lui crée une room
     */
                    client.join(user.pseudo+docs[0].playerId);
                    console.log("La room perso créé est " + user.pseudo + docs[0].playerId);
                });
            });
            

            compteur += 1;
        });
});

var suscribe = io.of('/inscription');
suscribe.on('connection', function (socket) {
    console.log('someone connected for inscription');
    //on incremente le count de user inscrit
    countUserSuscribed = countUserSuscribed + 1;
    console.log(" XXXXXXXXXXXXXXXXXXXXXXXX " + countUserSuscribed);
    socket.on('InsertNewUser', function (newUser) {
        //////////////////////////////////////////////////////////
        mongo.connect(MONGO_URL, function (err, db) {
            console.log("on se connect à l'url");
            //var Users = db.collection('User');
            var Users = db.collection('players');
            console.log("on crée la collection et on fait l'ajout");
            Users.insert({
                playerId: countUserSuscribed,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                login: newUser.login,
                password: newUser.password
            }, function (err, o) {
                if (err) { console.warn(err.message); }
                else { console.log("user inserted into db: user"); }
            });
        });
    })
});

var menu = io.of('/menu');
menu.on('connection', function (socket) {
    console.log('someone connected to menu');
    socket.on('InsertNewUser', function (newUser) {
        //////////////////////////////////////////////////////////
        mongo.connect(MONGO_URL, function (err, db) {
            //var Users = db.collection('User');
            var Users = db.collection('players');
            console.log("on crée la collection et on fait l'ajout");
            Users.insert({
                playerId: countUserSuscribed,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                login: newUser.login,
                password: newUser.password
            }, function (err, o) {
                if (err) { console.warn(err.message); }
                else { console.log("user inserted into db: user"); }
            });
        });
    })
});

var duelist = [];

var duel = io.of('/duel');
duel.on('connection', function (socket) {
    console.log('someone connected to duel');
    //le serveur récupère l'ojet player des deux joueurs et les leurs comunique
    socket.on("sendPlayerToServer", function (aPlayer) {
        console.log(aPlayer.playerID)
        if (duelist.length == 0) {
            duelist.push(aPlayer);
            console.log("on ajoute un p a la liste")
        }
        else if (duelist.length == 1 && duelist[0].playerID != aPlayer.playerID) {
            duelist.push(aPlayer);
            console.log("on ajoute un autre p a la liste")
        }
        if (duelist.length >= 2) {
            socket.emit("sendDuelList", duelist);
        }
    });
    //on gére lévenement du duel
    socket.on("emitDrawPhase", function (duel) {
        //le client active sa dp
        socket.emit("getDrawPhase", duel);
    });
    socket.on("emitStandByPhase", function (duel) {
        socket.emit("getStandByPhase", duel);
    });
    socket.on("emitMainPhase1", function (duel) {
        socket.emit("getMainPhase1", duel);
    });
    socket.on("emitBattlePhase", function (duel) {
        socket.emit("getBattlePhase", duel);
    });
    socket.on("emitMainPhase2", function () { });
    socket.on("emitEndPhase", function () { });

    socket.on('duelInfo', function (duelObject) {
        //////////////////////////////////////////////////////////
        console.log("on recoit les données de duel d'un joueur");
        socket.emit("sendDuelInfo", duelObject);
        console.log("on envoie les données aux clients");
    })
});


var duelRoomCount = 0;
var duelValues = {id1:0,id2:0,p1:'',p2:''};

var duelRoom = io.of('/duelRoom');
duelRoom.on('connection', function (socket) {
    console.log('someone connected waiting in the duelRoom');
    /*
        On fait dabord un compte dans la duel Room
        Lorsqu'on a deux joueurs dans la duelRoom
        on peut ajouter les deux joueurs qui se sont connecté dans une room
    */
    duelRoomCount = duelRoomCount + 1;
    console.log(" le countt "+duelRoomCount);
    first = false;
    sec = false;
    socket.on('sendPlayerInfoToRoom', function (joueur) {
        console.log("on recoit les données du joueur " + joueur.name);
        if (duelValues.id1 == 0 && duelValues.p1 == "") {
            duelValues.id1 = joueur.id;
            duelValues.p1 = joueur.name;
            /*
             * Quand le premier joueur se co, il envoie ses données au serveur et le serveur lui renvoie l'info qu'il est est premier
             */
            socket.emit("youAreFirst");
            first = true;
        }
        else if ((duelValues.id1 != 0 && duelValues.p1 != "") && (duelValues.id2 == 0 && duelValues.p2 == "") && (duelValues.id1 != joueur.id && duelValues.p1 != joueur.name)) {
            duelValues.id2 = joueur.id;
            duelValues.p2 = joueur.name;
            socket.emit("youAreSecond");
            sec = true;
            //on envoie au joueur 1 et 2 les donnés de leurs adversaire
            /*console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB " + duelValues.p1 + "  " + duelValues.id1);
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa " + duelValues.p2 + "  " + duelValues.id2);
            socket.to(joueur.name1 + joueur.id1).emit('opponentInfo', { nom: duelValues.p2, id: duelValues.id2 });
            socket.to(joueur.name2 + joueur.id2).emit('opponentInfo', { nom: duelValues.p1, id: duelValues.id1 });*/

        }
        //socket.emit("sendDuelInfo", duelObject);
        console.log("on envoie les données aux clients");
        if (duelRoomCount == 2 && (first == true && sec == true)) {
            console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
            console.log("le joueur " + joueur.name + " vient de join la room : " + "duelRoom" + duelValues.p1 + duelValues.p2);
            socket.join('duelRoom' + duelValues.p1 + duelValues.p2);
            duelRoomCount = 0;
        }
    })
});

server.listen(8888);
//server.listen(1037);
//server.listen(59266);