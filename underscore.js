var _. = {
	average : function(arr) {
		var total = 0;
		for(var i = 0; i < arr.length; i++) {
			total += arr[i]
		}
	return (total/arr.length)
	},
	contains : function(arr, check) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] === check) {
				return true;
			}
		}
	return false;
	},
	first : function(arr) {
		return arr[0];
	},
	last : function(arr) {
		for(var i = 0; i < arr.length; i++) {
			return arr[arr.length - 1];
		}
	},
	max : function(variable) {
		var largestNum = variable[0];
		for(var i = 0; i < variable.length; i++) {
			if(largestNum < variable[i]) {
				largestNum = variable[i];
			};
		}
	return largestNum;
	},
	min : function(variable) {
		var minNum = variable[0];
		for (var i = 0; i < variable.length; i++) {
			if (minNum > variable[i]) {
				minNum = variable[i];
			}
		}
	return minNum;
	},
	// I had to look up some help for shuffle because I couldn't wrap my head around it right away
	// By googling, I figured out I needed to hold 2 additional variables :
	// randomNum which picks a random index number from the array's length - 1
	// and temp which holds the new placement for the index we are currently on within the loop
	shuffle : function(array) {
		for (var i = 0; i < array.length; i++) {
    	var randomNum = Math.floor(Math.random() * (i));
      var temp = array[i];
      array[i] = array[randomNum];
      array[randomNum] = temp;
    }
    return array;
	},
	sample : function(arr, nums) {
		var newArr = [];
		if(nums === undefined) {
			nums = 1;
		}
		for(var i = 0; i < arr.length; i++) {
			var randoNum = Math.floor(Math.random() * (arr.length));
			newArr.push(arr[randoNum]);
			arr.splice(randoNum, 1);
				if(newArr.length === nums) {
					return newArr;
				};
		}
	},
	// I am struggling with this one. 
	// I don't understand how to keep track of both arrays at the same time.
	// I tried a nested for - loop before, but I didn't understand who was looping who and how I could capture those values.
	difference: function(arr1, arr2) {
		var biggerArray;
		var smallerArray;
		var differentArray = [];
		for(var i = 0; i < biggerArray.length; i++){
			if(smallerArray.indexOf(biggerArray[i]) === -1 || smallerArray.indexOf(biggerArray[i]) === undefined)
			//but how can I target the smallerArray[i] if it's not in a for loop as well??
				differentArray.push(biggerArray[i]);
			}
		return differentArray;
	},
	indexOf: function(arr, lookingForNum) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] === lookingForNum) {
				return i;
			}
		}
		return -1;
	},
	//The problem with this one is that it gives me ALL the prop values - not only the one I specify via propName...
	pluck: function(arrOfObj, propName) {
		var newArr = [];
		for(var i = 0; i < arrOfObj.length; i++) {
			for(var propName in arrOfObj[i]) {
				newArr.push(arrOfObj[i][propName]);
			}
		}
		return newArr;
	}
}
