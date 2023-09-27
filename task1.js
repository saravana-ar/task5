// Sample JSON object
const json = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  // Using for...in loop
  console.log("Using for...in loop:");
  for (let key in json) {
    console.log(key + ": " + json[key]);
  }
  
  // Using for...of loop (not directly applicable to objects, but works with Map and Set)
  console.log("\nUsing for...of loop:");
  try {
    for (let value of json) {
      console.log(value); // This will throw an error because json is not iterable.
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  
  // Using forEach loop (for arrays, not directly applicable to objects)
  console.log("\nUsing forEach loop (only works with arrays):");
  try {
    json.forEach((value, key) => {
      console.log(key + ": " + value); // This will throw an error because json is not an array.
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
  
  // Using for...of loop with Object.entries()
  console.log("\nUsing for...of loop with Object.entries():");
  for (let [key, value] of Object.entries(json)) {
    console.log(key + ": " + value);
  }