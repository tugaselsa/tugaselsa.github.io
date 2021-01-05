console.log("hello")


var firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyC3xVlrnkxJ2ZEoEWzxihvC2y2GslRjE1w",
        authDomain: "datasensor-ca0eb.firebaseapp.com",
        databaseURL: "https://datasensor-ca0eb.firebaseio.com",
        projectId: "datasensor-ca0eb",
        storageBucket: "datasensor-ca0eb.appspot.com",
        messagingSenderId: "903161331787",
        appId: "1:903161331787:web:e67414a43d3889cd830dce"
       // measurementId: "G-54DBY7R5XC"
      
    
           // apiKey: "AIzaSyAm1M2thtvc418iu_Ayar1qbjhuDDwxptc",
           // authDomain: "tello-ccca1.firebaseapp.com",
           // databaseURL: "https://tello-ccca1.firebaseio.com",
           // projectId: "tello-ccca1",
           // storageBucket: "tello-ccca1.appspot.com",
           // messagingSenderId: "379310279260",
           // appId: "1:379310279260:web:0910d90c4b8f989020f499"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
//timestamp//
var curentTime= Date.now();
var ref = firebase.database().ref('Timestamp').update({
    [currentTime] : true 
})

//var docData = {
    ////stringExample: "Hello world!",
   // booleanExample: true,
    //numberExample: 3.14159265,
    dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),

   // arrayExample: [5, true, "hello"],
    //nullExample: null,
    //objectExample: {
      //  a: 5,
       // b: {
         //   nested: "foo"
        //}
    //}
};
db.collection("data").doc("one").set(docData).then(function() {
    console.log("Document successfully written!");
});

// database.ref('/Live').once('value', function(snapshot){
    
//     child = snapshot.val();
//     node1_val = child["Node1"];
//     // node2_val = child["Node2"];
//     console.log(node1_val);

//     $("#do1").text(node1_val["DO"]);
//     $("#ph1").text(node1_val["pH"]);
//     $("#suhu1").text(node1_val["suhu"]);
//     $("#tbdt1").text(node1_val["tbdt"]);
//     $("#keruh1").text(node1_val["keruh"]);
    

//   });

database.ref('/live').on('value', function(snapshot){

    
    child = snapshot.val();
    node1_val = child["Node1"];
    node2_val = child["Node2"];

    $("#do1").text(node1_val["DO"]);
    $("#ph1").text(node1_val["pH"]);
    $("#suhu1").text(node1_val["suhu"]);
    $("#tbdt1").text(node1_val["tbdt"]);
    $("#keruh1").text(node1_val["keruh"]);
    
    $("#do2").text(node2_val["DO"]);
    $("#ph2").text(node2_val["pH"]);
    $("#suhu2").text(node2_val["suhu"]);
    $("#tbdt2").text(node2_val["tbdt"]);
    $("#keruh2").text(node2_val["keruh"]);

  });