const app = require("./app");
require("./db");

const port = process.env.PORT || 3002;

app.listen(port, () => {
	console.log("Séries server running on port", port);
}).on("error", err => {
	console.log("Error running Séries server");
	console.log(err);
});
