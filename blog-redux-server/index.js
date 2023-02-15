require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

const run = async () => {
    try {
        const db = client.db("socialMedia");
        const blogCollection = db.collection("blogs");

        app.get("/blogs", async (req, res) => {
            try {
                const cursor = blogCollection.find({});
                const blog = await cursor.toArray();

                res.json(blog);
            } catch (error) {
                res.status(501).json({ message: "Something Went Wrong!" });
            }
        });

        app.post("/blog", async (req, res) => {
            try {
                const blog = req.body;

                const result = await blogCollection.insertOne(blog);

                res.json(result);
            } catch (error) {
                res.status(501).json({ message: "Something Went Wrong!" });
            }
        });

        app.put("/blog/:id", async (req, res) => {
            try {
                const blog = req.body;

                const result = await blogCollection.findOneAndUpdate(
                    {
                        _id: ObjectId(req.params.id),
                    },
                    {
                        $set: {
                            ...blog,
                        },
                    },
                    { upsert: true }
                );

                res.json(result);
            } catch (error) {
                res.status(501).json({ message: "Something Went Wrong!" });
            }
        });

        app.delete("/blog/:id", async (req, res) => {
            try {
                const id = req.params.id;

                const result = await blogCollection.deleteOne({
                    _id: ObjectId(id),
                });
                res.json(result);
            } catch (error) {
                res.status(501).json({ message: "Something Went Wrong!" });
            }
        });
    } finally {
    }
};

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("blog redux api!");
});

app.listen(port, () => {
    console.log(`blog redux app listening on port ${port}`);
});
