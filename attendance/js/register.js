window.addEventListener("DOMContentLoaded", () => {

console.log("register.js loaded");

let btncreate = document.getElementById('btncreate');

btncreate.addEventListener('click', (e) => {
    e.preventDefault(); // IMPORTANT (prevents form refresh)

    alert("Button clicked");

    let txtfname = document.getElementById("txtfname").value;
    let txtlname = document.getElementById("txtlname").value;
    let txtemail = document.getElementById("txtemail").value;
    let txtpass = document.getElementById("txtpass").value;
    let txtconpass = document.getElementById("txtcompass").value;

    if(txtfname == "" || txtemail == "" || txtpass == ""){
        alert("Name and email must be filled");
        return;
    }

    if(txtconpass == txtpass){

        let emailid = txtemail.replace(/\./g, "_dot_").replace(/@/g, "_at_");
        let status = "inactive";
        let timenow = Date.now();
        let role = "Admin";

        firebase.auth().createUserWithEmailAndPassword(txtemail, txtpass)
        .then(() => {
            firebase.database().ref('userDetails/' + emailid).set({
                FirstName: txtfname,
                LastName: txtlname,
                Email: txtemail,
                Status: status,
                CreatedBy: txtemail,
                Role: role,
                CreatedOn: timenow
            });

            alert("Account Created");
        })
        .catch((error) => {
            console.log(error);
            alert(error.message);
        });

    } else {
        alert("Passwords do not match");
    }

});

});