function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    }.bind(this));
  }
  var numbers = new Numbers([1,3,5,10,14,20,33,50]);
  console.log(numbers.fives);