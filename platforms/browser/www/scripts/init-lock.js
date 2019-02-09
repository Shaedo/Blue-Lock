
const numberOfKeys = 5;
const keyLength = 9;
const keyCodes = [];
var keyCodeDataBase;

window.onload = function () {
    keyCodeDataBase = window.openDatabase("KeyCodes", "1.0", "Stores Key-Codes", 200000); //name, version, description, size
}

function initKeyCodes() {

    for (let i = 0; i < numberOfKeys; i++) {

        let kc = Math.random().toString(36).substr(2, keyLength);
        keyCodes.push(kc);
    }

    keyCodeDataBase.transaction(saveKeys, onSuccess, onError); //call back functions: action, success, fail
}

function saveKeys(tx) {

    
    tx.executeSql('CREATE TABLE IF NOT EXISTS keyCodes (id INTEGER PRIMARY KEY AUTOINCREMENT, KeyCode TEXT NOT NULL) ');

    for (let i = 0; i < keyCodes.length; i++) {


/*

 tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
      console.log("insertId: " + res.insertId + " -- probably 1");
      console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");

    }, function(e) {
      console.log("ERROR: " + e.message);
    });


*/

        let sql = "INSERT INTO keyCodes(KeyCode) VALUES ('" + keyCodes[i] + "')";
        tx.executeSql(sql);
    }
    

    alert('asdfasdf');
/*
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
*/


}
function onSuccess() {
    console.log("Record Saved");
}

function onError(error) {
    console.log("SQL error: " + error.code);
}
function storeData() {

    var data = document.getElementById('favourite').value;
    localStorage.setItem("storedData", data);
}

function retrieveData() {

    var data = localStorage.getItem("storedData");
    document.getElementById('result').innerHTML = data;
}
