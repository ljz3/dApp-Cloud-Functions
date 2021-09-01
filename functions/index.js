const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.changeColor = functions.https.onRequest(async (request, response) => {

    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET');

    const color = request.query.color;

    let color1;
    let color2;
    let color3;
    let color4;

    const playerRef1 = admin.firestore().collection("lobby").doc("1")
    const playerDoc1 = await playerRef1.get();
    if (!playerDoc1.exists) {
        console.log('Player 1 not found!');
    } else {
        color1 = playerDoc1.data().color;
    }


    const playerRef2 = admin.firestore().collection("lobby").doc("2")
    const playerDoc2 = await playerRef2.get();
    if (!playerDoc2.exists) {
        console.log('Player 2 not found!');
    } else {
        color2 = playerDoc2.data().color;
    }

    const playerRef3 = admin.firestore().collection("lobby").doc("3")
    const playerDoc3 = await playerRef3.get();
    if (!playerDoc3.exists) {
        console.log('Player 3 not found!');
    } else {
        color3 = playerDoc3.data().color;
    }

    const playerRef4 = admin.firestore().collection("lobby").doc("4")
    const playerDoc4 = await playerRef4.get();
    if (!playerDoc4.exists) {
        console.log('Player 4 not found!');
    } else {
        color4 = playerDoc4.data().color;
    }


    if(color === "white" || color !== color1 && color !== color2 && color !== color3 && color !== color4){
        const write = admin.firestore().collection("lobby").doc(request.query.user).update({
            color: color
        });
        response.send("200 Success");
    }else{
        response.send("406 Color exists already");
    }
});


exports.getColor = functions.https.onRequest(async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET');

    const lobby = request.query.user.toString();

    let color = "";

    const lobbyRef = admin.firestore().collection("lobby").doc(lobby);
    const lobbyDoc = await lobbyRef.get();
    if (!lobbyDoc.exists) {
        console.log('Lobby not found!');
    } else {
        color = lobbyDoc.data().color;
    }

    response.send(color);
});