/* 1. Map the list of numbers to a list of their square roots: [1, 9, 16, 100] */
let lst = [1, 9, 16, 100];
const lstSqrt = lst.map(num => Math.sqrt(num));
console.log("1. ", lstSqrt);

/* 2. Map the list of words so each is wrapped in a <h1> tag: [“Intro”, “Requirements”, 
    “Analysis”, “Implementation”, “Conclusion”, “Discussion”, “References”] */

lst = ["Intro", "Requirements", "Analysis", "Implementation", "Conclusion", "Discussion", "References"];
const lstHtml = lst.map(word => '<h1>' + word + '</h1>');
console.log("2. ", lstHtml);

/* 3. Use map to uppercase the words (all letters): [“i’m”, “yelling”, “today”] */
lst = ["i’m", "yelling", "today"];
const lstUpper = lst.map(word => word.toUpperCase());
console.log("3. ", lstUpper);

/* 4. Use map to transform words into their lengths: [“I”, “have”, “looooooong”, “words”] */
lst = ["I", "have", "looooooong", "words"];
const lstLen = lst.map(word => word.length);
console.log("4. ", lstLen);

/* 5. Get the json file comics.json from the course site. Paste it into your
browser’s Javascript console. Use map to get all the image urls, and wrap
them in img-tags. */

// .json file from where?? 

/* 6. Use reduce to sum the array of numbers: [1,2,3,4,5] */
lst = [1, 2, 3, 4, 5];
const sum = lst.reduce(function (result, num) { return result + num });
console.log("6. ", sum);

/* 7. Use reduce to sum the x-value of the objects in the array: [{x: 1},{x:2},{x: 3}] */
lst = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sumX = lst.reduce(function (result, num) {
    if (typeof result === 'object') return result.x + num.x;
    return result + num.x;
});
console.log("7. ", sumX);
/* 8. Use reduce to flatten an array of arrays: [[1,2],[3,4],[5,6]] */
lst = [[1, 2], [3, 4], [5, 6]];
const flatIt = lst.reduce(function (a, c) {
    return a.concat(c)
}, []);
console.log("8. ", flatIt)

/* 9. Use reduce to return an array of the positive numbers: [-3, -1, 2, 4, 5] */
lst = [-3, -1, 2, 4, 5];
const onlyPositive = lst.reduce(function (a, c) {
    if (c > 0) a.push(c)
    return a;
}, [])
console.log("9. ", onlyPositive)