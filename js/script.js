


$("#pickitems").on('click',function(){

				protein_list();
				fruit_list();

});

$("#pickAgain").on("click", function () {

	erase_list();
	protein_list();
	fruit_list();
})


function erase_list () {

	$(".breakfast").empty();
	$(".lunch").empty();
	$(".snack1").empty();
	$(".dinner").empty();

}

function protein_list() {

	y= chance.unique(chance.integer,protein_count, {min: 0, max: 16});

	console.log(y);

			for (var j = 0; j<y.length; j++) {

				

				var protein1= array[y[j]].name;


				//match protein1 to array to then get serving size 

				var resultObject = search(protein1, array);

				


			}

		}

		

		function fruit_list() {

			z= chance.unique(chance.integer,fruit_count, {min: 17, max: 26});


			for (var k = 0; k<z.length; k++) {

						

						var fruit1= array[z[k]].name;


						//match protein1 to array to then get serving size 

						var resultObject = search(fruit1, array);


					}
				}



//get random number to go through newArray while it's not equal to protein_count





var prim_Vegetables=[];

var sec_Vegetables = [];

var fruit = [];

var protein = [];

var fats = []; 

var listArray= [];


protein_count = 3;
fruit_count = 2;





var length;

var test;




// When select is changed then add value to vatiable if x plan then do something...



	


	// function selection () {	
	// 	var $multiSel = $(".select1").multipleSelect({
	// 	  placeholder: "Here is the placeholder",
	// 	  filter: true,
	// 	  selectAll: false,
	// 	  width: 300,
	// 	  onClick: function(view) {
	// 	    var $checkboxes = $multiSel.next().find("input[type='checkbox']").not(":checked");
	// 	    var selectedLen = $multiSel.multipleSelect('getSelects');
		   
	// 	   	console.log(selectedLen);
	// 	    proteinArray = protein.concat(selectedLen);
	// 	   	console.log(proteinArray);



		   


	// 	}
	// 	})


	// 	// fruits

	// 	var $multiSel1 = $(".select2").multipleSelect({
	// 	  placeholder: "Here is the placeholder",
	// 	  width: 200,
	// 	  filter: true,
	// 	  selectAll: false,
	// 	  onClick: function(view) {
	// 	    var $checkboxes1 = $multiSel1.next().find("input[type='checkbox']").not(":checked");
	// 	    var selectedLen1 = $multiSel1.multipleSelect('getSelects');
		   
	// 	   	console.log(selectedLen1);
		   	
	// 	    fruitArray = fruit.concat(selectedLen1);


	// 	}


	// 	});

		

	// }	

	
			
		






			

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {

         if (myArray[i].name === nameKey) {

            resObj = myArray[i];

            
            

            if (listArray.indexOf(myArray[i].name) === -1) {

          
            listArray = listArray.concat(myArray[i].name);

        }

        	if (myArray[i].other==="Protein")

            if ($(".breakfast").is(':empty')) {

            	$(".breakfast").append('<p>Breakfast : ' + resObj.name + " " +  resObj.value +'</p>');
            }

            else if ($(".lunch").is(':empty'))  {

            	$(".lunch").append('<p>Lunch :' + resObj.name + " " + resObj.value +'</p>');
            }

            else {

            	$(".dinner").append('<p>Dinner :' + resObj.name + " " +  resObj.value +'</p>');
            }



        

        	if (myArray[i].other==="Fruit") {

            if ($(".snack1").is(':empty')) {

            	$(".snack1").append('<p>Snack : ' + resObj.name + " " + resObj.value + '</p>');

            }
            	else {
            $(".breakfast").append('<p>' + resObj.name + " " + resObj.value + '</p>');

        	}

        }
				console.log(listArray);


        }

        
    }



}

var array = [
    { name:"Sardines", value:"3 oz cooked", other: "Protein" },
    { name:"Eggs", value:"2", other: "Protein" },
    { name:"Boneless Chicken or Turkey Breast", value:"3 oz cooked", other: "Protein" },
    { name:"Ground Chicken or Turkey", value:"3 oz cooked", other: "Protein" },
    { name:"Fish", value:"4 oz cooked", other: "Protein" },
    { name:"Yogurt,greek,non-fat", value:"1 cup", other: "Protein" },
    { name:"Shellfish", value:"4 oz cooked", other: "Protein" },
    { name:"Red Meat", value:"3 oz cooked", other: "Protein" },
    { name:"Protein Powder", value:"1 scoop(3tbsp/21g)", other: "Protein" },
    { name:"Pork Tenderloin", value:"3 oz cooked", other: "Protein" },
    { name:"Tuna Canned", value:"1/2 cup", other: "Protein" },
    { name:"Turkey/Ham Slices", value:"4 slices(4oz)", other: "Protein" },
	{ name:"Cottage Cheese", value:"1 cup", other: "Protein" },
	{ name:"Ricotta Cheese", value:"1/2 cup", other: "Protein" },
	{ name:"Veggie Burger", value:"1 Medium Patty", other: "Protein" },
	{ name:"Turkey Bacon", value:"4 slices(4oz)", other: "Protein" },
	{ name:"Milk (cow or soy)", value:"1 cup", other: "Protein" },
	{ name: "Blueberries", value: "3/4 cup", other: "Fruit"},
	{ name:"Raspberries or Blackberries or Strawberries", value: "1 cup", other: "Fruit" }, 
	{ name: "Watermelon or Canteloupe", value: "1 cup diced", other: "Fruit"},
	{ name: "Orange", value: "1 medium", other: "Fruit"},
	{ name: "Apple", value: "1 small", other: "Fruit"},
	{ name: "Grapefruit or Cherries or Mango", value: "3/4 cup", other: "Fruit"},
	{ name: "Grapes", value: "1 cup", other: "Fruit"},
	{ name: "Peach or Nectarine", value: "1 large or 1 cup sliced", other: "Fruit"},
	{ name: "Pineapple or Papaya", value: "1 cup diced", other: "Fruit"},
	{ name: "Banana", value: "1/2 large", other: "Fruit"},


];




			