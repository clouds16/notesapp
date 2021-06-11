const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
	connectionURL,
	{ useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log("unable to connect to databse");
		}
		console.log("Successfully connected");

		const db = client.db(databaseName);

		db.collection("users").insertMany(
			[
				{
					name: "Gunther",
					age: 30,
				},
				{
					name: "Melika",
					age: 26,
				},
			],
			(error, result) => {
				if (error) {
					return console.log("Unable to insert documents");
				}
			}
		);

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
