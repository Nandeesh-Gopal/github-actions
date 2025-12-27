const add = require("../src/index");

if (add(2, 3) !== 5) {
  console.error("❌ Test failed");
  process.exit(0);
}

console.log("✅ Test passed");
