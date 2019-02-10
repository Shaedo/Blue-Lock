const numberOfKeys = 5;
const keyLength = 9;
const keyCodes = [];
var keyCodeDataBase;
window.onload = function () {
    keyCodeDataBase = window.openDatabase("KeyCodes", "1.0", "Stores Key-Codes", 200000); //name, version, description, size
}
function initKeyCodes() {
    keyCodeDataBase.transaction(saveKeys, onSuccess, onError); //call back functions: action, success, fail
}

function saveKeys(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS keyCodes (id INTEGER PRIMARY KEY AUTOINCREMENT, KeyCode TEXT NOT NULL) ');
    for (let i = 0; i < numberOfKeys; i++) {
        let kc = Math.random().toString(36).substr(2, keyLength);
        let sql = "INSERT INTO keyCodes(KeyCode) VALUES ('" + kc + "')";
        tx.executeSql(sql);
    }
}

function onSuccess() { console.log("Record Saved"); }
function onError(e) { console.log("SQL error: " + e); }

/*
function getSuccess(tx, result) {

    alert("get Success");

    console.log(result);
    var rows = result.rows;
    for (var x = 0; x < rows.length; x++) {
        var name = result.rows[x].Name;
        var email = result.rows[x].Email;
        var out = "<li>" + name + "<br/>" + email + "</li>";
        document.getElementById('members').innerHTML += out;
    }

    $('#members').listview('refresh');

}
function getError(e) {
    console.log(e);
}
*/



/*
function retrieveData() {
    keyCodeDataBase.transaction(retrieveKeys, onSuccess, onError); //call back functions: action, success, fail
    alert("retrieve data func");
    //var data = localStorage.getItem("storedData");
    //document.getElementById('result').innerHTML = data;
}
function retrieveKeys(tx) {
    tx.executeSql("SELECT * FROM keyCodes",[],getSuccess,onError);
}
function getSuccess(tx, result) {
    console.log(result);
}



 store data to local
function storeData() {

    var data = document.getElementById('favourite').value;
    localStorage.setItem("storedData", data);
} */