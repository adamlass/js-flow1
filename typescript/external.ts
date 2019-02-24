import * as _ from "lodash";
let numbers:number[] = [1,2,3];

let shuffled = _.shuffle(numbers)
let reversed:Array<number> = _.reverse(numbers);
console.log(shuffled);
console.log(reversed);