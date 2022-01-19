
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

///Function with user number input
const test = function(input) {
  //Edge case check if there's no input && if it's negative it would return an empty string
  if (input.length === 0 || input < 0) {
    return '';
  }
  //Checks if input length is one
  if (input.length === 1) {
    setTimeout(() => {
      return process.stdout.write('.');
    }, input * 1000);
  }
  //else it loops through input index till it's no longer greater than one
  for (let i = 0; i < input.length; i++) {
    if (input.length > 1) {
      // console.log(input[i])
      if (input[i] > 0) {
        setTimeout(() => {
          process.stdout.write('.');
        // console.log(input[i]);
        }, input[i] * 1000);
      }
    }
  }
  setTimeout(() => process.stdout.write('\n'), 4000);
};

test([1,6,8]);
test([5]);
// test(['Cat']);
// test([-1,-3,-5])