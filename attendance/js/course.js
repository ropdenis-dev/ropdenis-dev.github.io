let lecturerSelect =document.getElementById('lecturerSelect')
firebase.database().ref("userDetails").once("value",function(snapshot){
    lecturerSelect.innerHTML ="<option>Select Lecturer</option>"
    snapshot.forEach(function (childSnapshot){
        let data = childSnapshot.val()
        if(data.Role == "Admin" && data.Status == "active"){
            let option =document.createElement("option")
            option.value = data.Email
            option.textContent = data.FirstName
            lecturerSelect.appendChild(option)
        }
    })
})

let venueSelect =document.getElementById('venueSelect')
firebase.database().ref("GpsVenus").once("value",function(snapshot){
    venueSelect.innerHTML ="<option>Select venue </option>"
    snapshot.forEach(function (childSnapshot){
        let data = childSnapshot.val()
        if(data.Status == "active"){
            let option =document.createElement("option")
            option.value = data.venueCode
            option.textContent = data.VenueName
            venueSelect.appendChild(option)
        }
    })
})

//Add new course to firebase
let btnaddcourse = document.getElementById("btnaddcourse");

  // event
  btnaddcourse.addEventListener("click", () => {

    // inputs
     let txtcoursename = document.getElementById("txtcoursename").value.trim();
    let txtcoursecode = document.getElementById("txtcoursecode").value.trim();
    let lecturerSelect = document.getElementById("lecturerSelect").value.trim();
    let lecturername = document.getElementById("lecturerSelect").textContent
    let venueSelect = document.getElementById("venueSelect").value.trim();
    let statusSelect = document.getElementById("statusSelect").value.trim();
    // select status for html dropdown 
    let status = document.querySelector("select").value;
    // get create by 
      let user = firebase.auth().currentUser;
      let createdby = user.email;
      let timenow = Date.now(); 

    // validation
    if (txtcoursename == "") {
      alert("Enter Course name");
      return;
    }
    // check if venue code is empty the return code stops here
    if (txtcoursecode == "") {
      alert("Select course code");
      return;
    }
    // check if longitude is empty the return code stops here
    if (lecturerSelect == "Select Lecturer") {
      alert("Select Lecturer");
      return;
    }
    // check if latitude is empty the return code stops here
    if (venueSelect == "Select Venue") {
      alert("Select Venue");
      return;
    }

    // firebase insert
    firebase.database().ref("Course/" + txtcoursecode).set({
      CourseName: txtcoursename,
      CourseCode: txtcoursecode,
      Status: statusSelect,
      Lecture: lecturerSelect,
      Venue: venueSelect,
      CreatedAt: timenow,
      CreatedBy: createdby
    })

    .then(() => {
      alert("Course added successfully");

      // clear inputs
      document.getElementById("txtcoursename").value = "";
      document.getElementById("txtcoursecode").value = "";

    })

    .catch((error) => {
      alert(error.message);
    });
  });

