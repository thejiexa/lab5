module.exports = {

    Method1 : function(){
        console.log("1.");
        let user = {};
        user.name = "john";
        user. surname = "smith";
        console.log(user);
        user.name = "pete";
        console.log(user);
        delete user.name;
        console.log(user);
        return "";
    },

    Method2 : function(){
        console.log("2.");
        let isEmpty = obj => {
            let result = 0;
            for(const prop in obj)
                if (prop) result++;
            return result > 0 ? false : true;
        };
        let schedule = {}
        console.log(isEmpty(schedule));
        schedule["9:30"] = "get up";
        console.log(isEmpty(schedule));
        return "";
    },
    
    Method3 : function(){
        console.log("3.");
        const user = {
            name: "john"
        }
        console.log(user['name']);
        user.name = "pete";
        console.log(user['name']);
        return "";
    },

    Method4 : function(){
        console.log("4.");
        let salaries = {
            johh : 100,
            ann : 160,
            pete : 130
        }
        let sum = 0;
        for(const prop in salaries)
            sum += salaries[prop];
        console.log(sum);
        let salaries2 = {}
        let sum2 = 0;
        for(const prop in salaries2)
            sum2 += salaries2[prop];
        console.log(sum2);
        return ""; 
    },

    Method5 : function(){
        console.log("5.");
        let multiplyNumeric = obj => {
            for (let prop in obj)
               if (typeof(obj[prop]) == 'number') obj[prop] *= 2; 
        }
        let menu ={
            width: 200,
            height: 300,
            title: "my menu"
        }
        console.log(menu);
        multiplyNumeric(menu);
        console.log(menu);
        return "";
    },

    Method6 : function(){
        console.log("6.");
        let fruits = ["Яблоки", "Груша", "Апельсин"];
        let shoppingCart = fruits;
        shoppingCart.push("Банан");
        console.log( fruits);
        console.log( fruits.length );
        return "";
    },

    Method7 : function(){
        console.log("7.");
        let styles = ["Джаз", "Блюз"];
        styles.push("Рок-н-ролл");
        console.log(styles);
        styles[(styles.length - 1) / 2] = "Классика";
        console.log(styles);
        console.log(styles.shift());
        styles.unshift("Рэп", "Регги");
        console.log(styles);
        return "";
    },

    Method8 : function(){
        console.log("8.");
        let arr = ["a", "b"];
        arr.push(function() {
        console.log( this );
        })
        console.log(arr[2]());
        return "";
    },

    Method9 : function(){
        console.log("9.");
        let sumInput = () => {
            let readline = require("readline-sync");
            let array = [];
          
            while (true) {

                let x = readline.question("value: ");
                if (x === "" ||x === null || !isFinite(x)) break;
                array.push(+x);
                /* array.unshift(+readline.question("value: "));
                if (array[0] === "" || array[0] === null || !isFinite(array[0])) {
                    array.shift();
                    break;
                } */
            }
        
            let sum = array.reduce(function(sum, item) {return sum + item} , 0);
            
            console.log(array);
            console.log(sum);
        }
        sumInput();
        
        return "";
    },

    Method10 : function(){
        console.log("10.");
        let getMaxSubSum = arr => {
            let subSum = 0;
            let sum = 0;
            for (let i of arr){
                sum += i;
                subSum = subSum > sum ? subSum : sum;
                if (sum < 0) sum = 0;
            }
            return subSum;
        }

        console.log(getMaxSubSum([-1, 2, 3, -9]));
        console.log(getMaxSubSum([2, -1, 2, 3, -9]));
        console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
        console.log(getMaxSubSum([-2, -1, 1, 2]));
        console.log(getMaxSubSum([100, -9, 2, -3, 5]));
        console.log(getMaxSubSum([1, 2, 3]));
        console.log(getMaxSubSum([-1, -2, -3]));
        return "";
    },

    Method11 : function(){
        console.log("11.");
        let Del = (array) =>{
            console.log(array);
            let result = [];
            for (let i = 0; i < array.length; i++){
                let count = 0;
                for (let j = 0; j < array.length; j++)
                    if (array[j] == array[i] )count++;
                        
                if (count < 3) result.push(array[i]);
            }
            return result;
        }
        console.log(Del([3, 6, 5, 0, 3, 8, 7, 0, 2, 8, 9, 3, 8, 4, 2, 6, 7, 8, 4, 7]));
        return "";
    },

    Method12 : function(){
        console.log("12.");
        let func12 = array => {
            console.log(array);
            
            let currentMax ;
            let max;
            for (let i of array){
                if (i % 2 != 0) currentMax = i;
                max = max > currentMax ? max : currentMax;
            }

            if (!max) return "Все чётные";

            let maxIndex = array.indexOf(max);

            if (maxIndex != array.length - 1){
                for (let i = 0; i < 3; i++){
                    let temp = array[maxIndex + 1];
                    for (let j = maxIndex + 1; j < array.length; j++){
                        array[j] = array[j + 1];
                    }
                    array[array.length - 1] = temp;
                }
            }
            
            if (maxIndex != 0){
                let temp = array[maxIndex - 1];
                for (let i = maxIndex - 1; i > 0; i--){
                    array[i] = array[i - 1];
                }
                array[0] = temp;
            }
            console.log(array);
            
            return `${maxIndex} : ${max}`;
        }
        console.log(func12([1,2,5,3,67,4,77,5,77,78,6,8,7,9]));
        console.log(func12([2,4,6,8,10]));
        return "";
    },

    Method13 : function(){
        console.log("13.");
        let func13 = array => {
            console.log(array);
            let sum = 0;
            for (let n of array) sum += n < 0 ? n : 0;
            return sum < 0 ? sum : "Все неотрицательные";
        }
        console.log(func13([-1,2,-3,4,-5,6,-7,8,-9]));
        console.log(func13([1,2,3,4]));
        console.log(func13([0,0,0]));

        return "";
    },

    Method14 : function(){
        console.log("14.");
        let func14 = array => {
            console.log(array);
            let result = 1;
            for (let i = 1; i < array.length; i += 2) result *= array[i];
            return result;
        }
        console.log(func14([-1,2,-3,4,-5,6]));
        console.log(func14([1,2,3,4]));
        console.log(func14([1,2,0]));

        return "";
    },

    Method15 : function(){
        console.log("15.");
        let func15 = array => {
            console.log(array);
            if (array.indexOf(0) == -1) return "Нет нулей";
            else {
                let zero1 = array.indexOf(0);
                let zero2 = -1;
                for (let i = zero1 + 1; i < array.length; i++) {
                    if (array[i] == 0){
                        zero2 = i;
                        break;
                    }  
                }
                if (zero2 == -1) return "Только один ноль";
                else {
                    let sum = 0;
                    for (let i = zero1; i < zero2; i++) sum += array[i];
                    return sum;
                }
            }
         
        }
        console.log(func15([-1,2,-3,0,4,5,6,0,8,9]));
        console.log(func15([1,2,3,4]));
        console.log(func15([1,2,0]));
        console.log(func15([1,1,1,0,2,2,2,2,0,3,3,3,0,4,4,4]));

        return "";
    },

    Method16 : function(){
        console.log("16.");
        let func16 = a => a.sort()[a.length-1];
        
        console.log(func16([-1,2,-3,0,4,9,5,6,0,8]));
        console.log(func16([1,2,3,4,0]));
        console.log(func16([1,1,1,0,2,2,2,2,3,0,4,4,4,0,3,3]));

        return "";
    },

    Method17 : function(){
        console.log("17.");
        let func17 = a => {
            for (let n of a.sort()) if (n % 2 == 0) return n;
        }
        
        console.log(func17([-1,2,-3,5,-4,-5,0,8]));
        console.log(func17([1,2,0,3,4]));
        console.log(func17([1,5,7,3,8]));

        return "";
    },

    Method18 : function(){
        console.log("18.");
        let func18 = array => {
            let lastZero = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == 0)  {
                    [array[lastZero], array[i]] = [array[i], array[lastZero]];
                    lastZero++;
                }
            }
            return array;
        }
        
        console.log(func18([-1,2,0,0,5,0,-4,8,0,0]));
        console.log(func18([0,1,2,0,3,4,0]));
        console.log(func18([1,5,7,3,8]));

        return "";
    },

    Method19 : function(){
        console.log("19.");
        let func19 = array => {
            let maxIndex = 0;
            let minIndex = 0;
            let maxEl = array[0];
            let minEl = array[0];

            for (let i = 0; i < array.length; i++) {
                if (array[i] > maxEl){
                    maxEl = array[i];
                    maxIndex = i;
                }
                if (array[i] < minEl){
                    minEl = array[i];
                    minIndex = i;
                }
            }
            return maxIndex + minIndex + 2;
        }
        
        console.log(func19([-1,2,0,0,5,0,-4,8,0,0]));
        console.log(func19([1,2,0,3,4,0]));
        console.log(func19([5,7,3,1,8,2,3]));

        return "";
    },

    Method20 : function(){
        console.log("20.");
        let func20 = array => array.sort((x,y) => Math.abs(x) - Math.abs(y))[0];

        console.log(func20([5,-100,6,-55,55,3,66,-4]));
        console.log(func20([-6,-9,-4,1,-3,-2,-7]));
        console.log(func20([-9,-100,-5,-55,-6]));

        return "";
    },

    Method21 : function(){
        console.log("21.");
        let func21 = () =>  {
            let array = [];
            for (let i = 0; i < 10; i++) array[i] = Math.floor(Math.random() * (10 - -10)) - 10;    // (max - min) + min
            console.log(array);
            /* let sub1 = array.slice(0, (array.length ) / 2).reverse(); 
            let sub2 = array.slice((array.length ) / 2).reverse();*/
            array = array.slice(0, (array.length ) / 2).reverse().concat(array.slice((array.length ) / 2).reverse()) ;
            console.log(array);
        }
        func21();
        return "";
    },

    Method22 : function(){
        console.log("22.");
        let func22 = (shift) =>  {
            let array = [];
            for (let i = 0; i < 12; i++) array[i] = Math.floor(Math.random() * (12 - -12)) - 12;
            console.log(array);
       
            for (let i = 0; i < shift; i++){
                let temp = array[array.length - 1];
                for (let j = array.length - 2; j >= 0; j--)
                    array[j + 1] = array[j];
                
                array[0] = temp;
            }

            console.log(array);
        }
        func22(4);
        return "";
    },
}