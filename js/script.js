
$("#listbutton").on('click',function(){


			


			if(test==="Plan A") {
			
			
					protein_count = 5;

			y= chance.unique(chance.integer,protein_count, {min: 0, max: proteinArray.length-1});

			console.log(y);

			for (var j = 0; j<y.length; j++) {

				console.log(proteinArray[y[j]]);

				var protein1= proteinArray[y[j]];


				//match protein1 to array to then get serving size 

				var resultObject = search(protein1, array);
				


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
		  selectAll: false,
		  onClick: function(view) {
		    var $checkboxes = $multiSel.next().find("input[type='checkbox']").not(":checked");
		    var selectedLen = $multiSel.multipleSelect('getSelects');
		   
		   	
		    proteinArray = protein.concat(selectedLen);
		   	console.log(proteinArray);

		   	length = selectedLen.length;

		   	console.log(length);

		   	


		}
		})


		// fruits

		var $multiSel1 = $(".select2").multipleSelect({
		  placeholder: "Here is the placeholder",
		  width: 200,
		  filter: true,
		  selectAll: false,
		  onClick: function(view) {
		    var $checkboxes1 = $multiSel1.next().find("input[type='checkbox']").not(":checked");
		    var selectedLen1 = $multiSel1.multipleSelect('getSelects');
		   
		   	
		    fruitArray = fruit.concat(selectedLen1);

		   	length1 =selectedLen1.length;

		   	console.log(length1);


		}
		});

	}	

		if (test==="Plan A") {

			selection();

		}

});
			
		






			

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].value === nameKey) {

            resObj = myArray[i];

            console.log(resObj); 

            $("#list").append(resObj.value + " ");

        }
    }
}

var array = [
    { name:"string 1", value:"chicken", other: "that" },
    { name:"string 2", value:"okay", other: "that" },
    { name:"string 3", value:"test", other: "that" }

];




			