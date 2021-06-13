const express = require("express");
require("./mongoose");

const User = require("./models/users");
const Task = require("./models/tasks");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
	const user = new User(req.body);

	user
		.save()
		.then(() => {
			res.status(201).send();
		})
		.catch((err) => {
			res.status(400).send();
		});
});

// app.get("users/", (req, res) => {
// 	User.find({})
// 		.then(() => {
// 			res.send(users);
// 		})
// 		.catch((e) => {
// 			res.status(500).send();
// 		});
// });

// app.get("/users/:id", (req, res) => {
// 	const _id = req.params.id;
// 	User.findById(_id)
// 		.then((user) => {
// 			if (!user) {
// 				return res.status(404).send();
// 			}
// 			res.send(user);
// 		})
// 		.catch((e) => {
// 			res.status(500).send();
// 		});
// });

app.post("/tasks", (req, res) => {
	const task = new Task(req.body);

	task
		.save()
		.then(() => {
			res.send(task);
		})
		.catch((e) => {
			res.status(400).send();
		});
});

app.listen(port, () => {
	console.log("Server up on port " + port);
});
