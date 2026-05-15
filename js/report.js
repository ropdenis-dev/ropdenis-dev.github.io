
let totalAdmins = 0
let totalStudents= 0
firebase.database().ref("userDetails").once("value", function (snapshot) {
	
	snapshot.forEach(function(childSnapshot) {
		let data = childSnapshot.val()
		if(data.Role =="Admin"){
           totalAdmins ++	

		}else{
			totalStudents ++	

		}

	})
	//display total count
	drawbargraph()
	 
})


function drawbargraph(){
	const canvasforbargraph = document.getElementById("mybargraph")
	new Chart(canvasforbargraph, {
		type : 'bar',
		data: {
			labels :['Admins', 'Students'],
			datasets :[{
				label :'System users',
				data :[totalAdmins, totalStudents],
				boarderWidth: 1
			}]
		},
		option: {
			responsive: true,
			scale: {
				y:{
					beginAtZero:true
				}
			}
		}
	})
}

// count courses

let lbtotalactivecourses = 0
let lbtotalinactivecourses =0 
firebase.database().ref("Courses").once("value", function(snapshot) {
  let total = 0
  snapshot.forEach(function(childSnapshot){
    let data = childSnapshot.val()
    if (data.Status == "active"){
    	lbtotalactivecourses++
    }else{
    	lbtotalinactivecourses++
    }

  })
  //show data
  coursespie()
})
function coursespie(){
	const canvasforcourses = document.getElementById("mypiecourses")
	new Chart(canvasforcourses, {
		type:'pie',
		data:{
			labels:["Active","Inactive"],
			datasets:[{
				data:[lbtotalactivecourses, lbtotalinactivecourses]
			}]
		}
	})
}

// count admin


let totalActiveadmins = 0
let totalInactiveadmins = 0
firebase.database().ref("userDetails").once("value", function(snapshot) {
  let total = 0
  snapshot.forEach(function(childSnapshot){
    let data = childSnapshot.val()
    if (data.Status == "active" && data.Role == "Admin"){
    	totalActiveadmins++
    }else if (data.Status == "inactive" && data.Role == "Admin"){
    	totalInactiveadmins++
    }

  })
  //show data
  admindoughnut()
})
function admindoughnut(){
	const canvasforadmins = document.getElementById("mydoughnutadmins")
	new Chart(canvasforadmins, {
		type : 'doughnut',
		data: {
			labels :['Active Admins', 'Inactive Admins'],
			datasets :[{
				data :[totalActiveadmins, totalInactiveadmins]
			}]
		}
	})
}

// count Gps

let totalActiveGps = 0
let totalInactiveGps = 0
firebase.database().ref("GpsVenus").once("value", function(snapshot) {
  let total = 0
  snapshot.forEach(function(childSnapshot){
    let data = childSnapshot.val()
    if (data.Status == "active" ){
    	totalActiveGps++
    }else{

    	totalInactiveGps++
    }

  })
  //show data
  drawgpsbargraph()
})
function drawgpsbargraph(){
	const canvasforgpsbargraph = document.getElementById("mygpsbargraph")
	new Chart(canvasforgpsbargraph, {
		type : 'bar',
		data: {
			labels :['Active Gps', 'Inactive Gps'],
			datasets :[{
				data :[totalActiveGps, totalInactiveGps]
			}]
		}
	})
}

function handlePrint() {
	console.log("Preparing document...");

	window.print();
}

