
$("#listbutton").on('click',function(){


			


			if(test==="Plan A") {
			

			protein_count=2;

			

			y= chance.unique(chance.integer,protein_count, {min: 0, max: newArray.length-1});

			console.log(y);

			for (var j = 0; j<y.length; j++) {

				console.log(newArray[y[j]]);

				$("#list").append('<p>Protein</p><ul><li>' +  newArray[y[j]]);
			}
		}

				


});


//get random number to go through newArray while it's not equal to protein_count





var prim_Vegetables=[];

var sec_Vegetables = [];

var fruit = [];

var protein = [];

var fats = []; 

var newArray;

var protein_count;

var length;

var y;

var test;

$(".select1").hide();
$(".select2").hide();


// When select is changed then add value to vatiable if x plan then do something...

$(".form-control").change(function(){


	
	test = $(".form-control option:selected").val().slice(0,6);

	

	console.log(test);

	function selection () {	
		var $multiSel = $(".select1").multipleSelect({
		  placeholder: "Here is the placeholder",
		  width: 200,
		  filter: true,
		  selectAll: true,
		  onClick: function(view) {
		    var $checkboxes = $multiSel.next().find("input[type='checkbox']").not(":checked");
		    var selectedLen = $multiSel.multipleSelect('getSelects');
		   
		   	
		    newArray = protein.concat(selectedLen);
		   	console.log(newArray);

		   	length = selectedLen.length;

		   	console.log(length);


		}
		})


		// fruits

		var $multiSel1 = $(".select2").multipleSelect({
		  placeholder: "Here is the placeholder",
		  width: 200,
		  filter: true,
		  selectAll: true,
		  onClick: function(view) {
		    var $checkboxes1 = $multiSel1.next().find("input[type='checkbox']").not(":checked");
		    var selectedLen1 = $multiSel1.multipleSelect('getSelects');
		   
		   	
		    newArray1 = fruit.concat(selectedLen1);
		   	console.log(newArray);

		   	length+= selectedLen1.length;

		   	console.log(length);


		}
		});

	}	


		if(test==="Plan A") {
			

			console.log('You chose' + test);

			selection();

		}

});




			




			