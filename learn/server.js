/*import in new version using modulee */
import path from "path";
/* import in old version  */ const os=require("os")
console.log("Hello World!");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(os.freemem())
console.log(os.hostname())
console.table(os.cpus())
console.log(os.machine())
