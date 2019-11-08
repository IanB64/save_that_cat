function insertRow() {
	var table = document.getElementById("myTable");
	
	var name = document.getElementById("name").value;
	var colour = document.getElementById("colour").value;
	var description = document.getElementById("description").value;
	var location = document.getElementById("location").value;
	
	if (name == "" || colour == "" || description == "" || location == "") {
		alert("Please fill out all fields before submitting")
		return;
	}
	
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = name;
	cell2.innerHTML = colour;
	cell3.innerHTML = description;
	cell4.innerHTML = location;
	
	// Clear input fields
	document.getElementById("name").value = '';
	document.getElementById("colour").value = '';
	document.getElementById("description").value = '';
	document.getElementById("location").value = '';
}

// from https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("myTable");
	switching = true;
	//Set the sorting direction to ascending:
	dir = "asc"; 
	/*Make a loop that will continue until
	no switching has been done:*/
	while (switching) {
	//start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/*Loop through all table rows (except the
		first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/*check if the two rows should switch place,
			based on the direction, asc or desc:*/
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					break;
				}
			} else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/*If a switch has been marked, make the switch
			and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchcount ++;      
		} else {
			/*If no switching has been done AND the direction is "asc",
			set the direction to "desc" and run the while loop again.*/
			if (switchcount == 0 && dir == "asc") {
			dir = "desc";
			switching = true;
			}
		}
	}
}

$(document).ready(function(){
	$("#search").on("keyup", function() {
		var value = $(this).val().toLowerCase();
	
		$('#myTable tr:not(:first)').filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});