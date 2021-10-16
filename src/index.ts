console.log("I am index!");
import("./lazyA").then((cb) => cb.default());
import("./lazyB").then((cb) => cb.default());
