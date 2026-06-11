const fs = require("fs");
const path = require("path");
const base = "C:\\Users\\alish\\Desktop\\rust-tests\\tests";
const exercises = [
  {name:"min_and_max",src:"main.rs"},
  {name:"count_factorial_steps",src:"lib.rs"},
  {name:"matrix_multiplication",src:"main.rs"},
  {name:"reverse_it",src:"lib.rs"},
  {name:"smallest",src:"lib.rs"},
  {name:"modify_letter",src:"lib.rs"},
  {name:"counting_words",src:"lib.rs"},
  {name:"partial_sums",src:"lib.rs"},
  {name:"inv_pyramid",src:"lib.rs"},
  {name:"previousprime",src:"lib.rs"},
  {name:"nextprime",src:"lib.rs"},
  {name:"profanity_filter",src:"lib.rs"},
  {name:"prime_checker",src:"lib.rs"},
  {name:"scytale_decoder",src:"lib.rs"},
  {name:"insertion_sort",src:"lib.rs"},
  {name:"rpn",src:"lib.rs"},
  {name:"rot21",src:"lib.rs"},
  {name:"order_books",src:"lib.rs"},
  {name:"matrix_determinant",src:"lib.rs"},
  {name:"office_worker",src:"lib.rs"},
  {name:"blood_types_s",src:"lib.rs"},
  {name:"matrix_display",src:"lib.rs"},
  {name:"queens",src:"lib.rs"},
  {name:"lunch_queue",src:"lib.rs"},
  {name:"drop_the_blog",src:"lib.rs"},
  {name:"filter_table",src:"lib.rs"},
  {name:"display_table",src:"lib.rs"},
  {name:"flat_tree",src:"lib.rs"},
  {name:"brackets_matching",src:"lib.rs"},
  {name:"brain_fuck",src:"lib.rs"},
];
let out = "// Auto-generated embedded test code\nmodule.exports = {\n";
for (const ex of exercises) {
  const p = path.join(base, ex.name + "_test", "src", ex.src);
  let content = "";
  try {
    content = fs.readFileSync(p, "utf-8").replace(/\r\n/g, "\n");
  } catch(e) {
    console.error("Missing:", p);
  }
  out += "  " + ex.name + ": " + JSON.stringify(content) + ",\n";
}
out += "};\n";
fs.writeFileSync(path.join(__dirname, "tests-embedded.js"), out, "utf-8");
console.log("Done - " + exercises.length + " exercises embedded");
