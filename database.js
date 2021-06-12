const { MongoClient, ObjectId, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);

MongoClient.connect(
	connectionURL,
	{ useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log("unable to connect to databse");
		}
		console.log("Successfully connected");

		const db = client.db(databaseName);

		// db.collection("users").insertMany(
		// 	[
		// 		{
		// 			name: "Gunther",
		// 			age: 30,
		// 		},
		// 		{
		// 			name: "Melika",
		// 			age: 26,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to insert documents");
		// 		}
		// 	}
		// );

		// db.collection("tasks").insertMany(
		// 	[
		// 		{
		// 			description: "do laundry",
		// 			completed: true,
		// 		},
		// 		{
		// 			description: "Call lawyer",
		// 			completed: false,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log(error);
		// 		} else {
		// 			return console.log(result.ops);
		// 		}
		// 	}
		// );

		// db.collection("users").insertOne({
		// 	name: "Hector",
		// 	age: 27,
		// }, (error, result) => {
		// 	if (error) {
		// 		return console.log('Unable to insert user')
		// 	}

		// 	console.log(result.ops)

		// });
	}
);
