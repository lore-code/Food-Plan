
$("#listbutton").on('click',function(){


			


			if(test==="Plan A") {
			
			
					protein_count = 5;
					fruit_count = 2;

			y= chance.unique(chance.integer,protein_count, {min: 0, max: proteinArray.length-1});
			z= chance.unique(chance.integer,fruit_count, {min: 0, max: fruitArray.length-1});

			console.log(y);

			//iterate over random array and make var protein1 = proteinArray[y[j]]

			for (var j = 0; j<y.length; j++) {

				console.log(proteinArray[y[j]]);

				var protein1= proteinArray[y[j]];


				//match protein1 to array to then get serving size 

				var resultObject = search(protein1, array);


			}

			for (var k = 0; k<z.length; k++) {

						console.log(fruitArray[z[k]]);

						var fruit1= fruitArray[z[k]];


						//match protein1 to array to then get serving size 

						var resultObject = search(fruit1, array);


					}

			


	}

			
		

				


});


//get random number to go through newArray while it's not equal to protein_count





var prim_Vegetables=[];

var sec_Vegetables = [];

var fruit = [];

var protein = [];

var fats = []; 

var listArray= [];

var protein_count;


var length;

var y;

var test;

$(".select1").hide();
$(".select2").hide();
$(".table").hide();


// When select is changed then add value to vatiable if x plan then do something...

$(".form-control").change(function(){


	
	test = $(".form-control option:selected").val().slice(0,6);

	

	console.log(test);

	


	function selection () {	
		var $multiSel = $(".select1").multipleSelect({
		  placeholder: "Here is the placeholder",
		  filter: true,
		  selectAll: false,
		  width: 300,
		  onClick: function(view) {
		    var $checkboxes = $multiSel.next().find("input[type='checkbox']").not(":checked");
		    var selectedLen = $multiSel.multipleSelect('getSelects');
		   
		   	console.log(selectedLen);
		    proteinArray = protein.concat(selectedLen);
		   	console.log(proteinArray);



		   


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
		   
		   	console.log(selectedLen1);
		   	
		    fruitArray = fruit.concat(selectedLen1);

		   	






		   


		}


		});

		

	}	

		if (test==="Plan A") {

			selection();

		}

});
			
		






			

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
         if (myArray[i].name === nameKey) {

            resObj = myArray[i];

            console.log(resObj); 
            

            if (listArray.indexOf(myArray[i].name) === -1) {

            	$(".table").show();
            $(".table").append('<tbody>' +
						    '<tr>' +
						      '<td>' + resObj.name + '</td>' +
						      '<td>' + resObj.value + '</td>' +
						      '<td>' + resObj.other + '</td>' +
						    '</tr></thead></table>');
            listArray = listArray.concat(myArray[i].name);

        	}



				console.log(listArray);

        }
    }
}

var array = [
    { name:"Sardines", value:"3 oz", other: "Protein" },
    { name:"Eggs", value:"2", other: "Protein" },
    { name:"Apple", value:"Apple", other: "Fruit" },
    { name:"Boneless Chicken or Turkey Breast", value:"3 oz cooked", other: "Protein" }

];




			