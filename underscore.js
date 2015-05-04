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
	// Still need to account for the missing num within array2 -- add another nested loop??
	difference: function(arr1, arr2) {
		var diff = [];
			for (i = 0 ; i < array1.length ; i++) {
				var sameNum = false;
				for (j = 0 ; j < array2.length ; j++) {
					if ((array1[i]) === array2[j]) {
						sameNum = true;
					}
				}
				if (sameNum === false) {
					diff.push(array1[i]);
				}
			}
			return diff;
	},
	indexOf: function(arr, lookingForNum) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] === lookingForNum) {
				return i;
			}
		}
		return -1;
	},
	pluck: function(arrOfObj, propName) {
		var newArr = [];
		for(var i = 0; i < arrOfObj.length; i++) {
				newArr.push(arrOfObj[i][propName]);
			}
		return newArr;
	},
	each: function(arr, callback) {
		for(var i = 0; i < arr.length; i++) {
			callback(arr[i]);
		}
	},
	compact: function(arr) {
		var newArr = [];
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] !== undefined) {
				newArr.push(arr[i]);
			}
		}
		return (newArr);
	},
	map: function(array, callback) {
		var mapped = [];
  	for (var i = 0; i < array.length; i++) {
    	mapped.push(callback(array[i]));
  	}
  	return mapped;
	},
	filter: function(array, callback) {
		var newArr = [];
		for(var i = 0; i < array.length; i++) {
			if(callback(array[i])) {
				newArr.push(array[i]);
			}
		}
		return newArr;
	}
}



