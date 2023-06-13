const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
 // return tutorials
//}

function titleCased() {
  const arr = tutorials.map(tutorial => tutorial.split(" "));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = arr[i][j].charAt(0).toUpperCase() + arr[i][j].slice(1);
    }
  }

  return arr.map(innerTut => innerTut.join(" "));
}

