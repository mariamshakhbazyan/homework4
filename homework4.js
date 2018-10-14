const goTriangle = function(char, count) {
	let string = "";
	while(count>0) {
 			string = string + char;
			count = count - 1;
		}
 	return string
 }

	const cla = function(space, a) {
	console.log(goTriangle(" ", space) + goTriangle("*", 2*a- 1));
}
	const triangleStars = function(a) {
		let space= 0;
	while(a>0) {
		cla (space, a)
		a = a-1;
        space=space + 1;
	}
}
  

triangleStars(4);
	

//exercise2 
const f1=function(array){
	let n=[];
	let arrayIndex = 0;
	while(arrayIndex < array.length){
		const d = array[arrayIndex]
		let ind = 0
		while (ind < d.length){
			 
			n[n.length] = d[ind];
			ind = ind + 1;
		}
		
		arrayIndex = arrayIndex + 1;
	}
	return n 
};
console.log(f1([[12, 13, 14],[11, 15, 16]]));

//exercise3

const findMinMax = function(a, b) {
			let index = 0;
			let result = a[0];
        	if(b) {
				while(index < a.length) {
					if(a[index] < a[index + 1]) {
						result = a[index + 1];				
					}
					index = index + 1;
				}
			} else { 
			while(index < a.length) {
				if(a[index] > a[index + 1]) {
	  				result = a[index];
				}
				index = index + 1;
			   }
			   }
    		  return result
		};
		console.log(findMinMax([7,5,55,12,456,91,6], true));

// exercise 4
const forEach = function(array, func) {
			let arrayIndex = 0;
			while(arrayIndex < array.length) {
				func(array[arrayIndex]);
				arrayIndex=arrayIndex+1;
			}
		};
		forEach([2, 4, 6], function(val) {
			console.log(val);
		});


//exercise 5


	const sum = function(array) {
			let index = 0;
			let result = 0;
			while(index<array.length) {
				result = result + array[index];
				index=index+1;
			}
		return result;
		};
		console.log(sum([3, 32, 7]));



//exercise 6


const reverse = function(s) {
			let index = s.length-1;
			let result = '';
			while(index>=0) {
				result = result + s[index];
				index--;
			}
		return result;
		};
		console.log(reverse('fghj')); 


// exercsie 7

const f1 = function(n, sym) {
			let cnt = 0;
			let result = '';
				while(cnt<n) {
					result = result + sym;
					cnt++;
				}
		return result;
		};
		const checkboard = function(n) {
			let cnt = 1;
			while(cnt<n) {
				let result = '';
				if(cnt%2===0) {
					result = result + ' ';
				} 
				result = result + f1(n, '*');
				console.log(result);
				count++;
			}
		
		};
		checkboard(5);