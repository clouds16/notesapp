const express = require("express");
require("./mongoose");
const User = require("./models/users");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
	const user = new User(req.body);

	user
		.save()
		.then(() => {
			res.send(user);
		})
		.catch((err) => {
			console.log(err);
		});
});

app.listen(port, () => {
	console.log("Server up on port " + port);
});
