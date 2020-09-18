const mongoose = require("mongoose");
const Users = require("../models/users");
const createServer = require("../server");
const supertest = require('supertest');
require('dotenv').config();

beforeEach((done) => {
    mongoose.connect(
        process.env.TEST_MONGO,
        {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true},
        () => done()
    )
    mongoose.set('useCreateIndex', true);
})

afterEach((done) => {
    mongoose.connection.db.dropDatabase().then(() => {
        mongoose.connection.close(() => done())

    })
})

const app = createServer()

test("GET /", async () => {
    await supertest(app)
        .get("/api/v1/")
        .expect(404)
        .then(response => {

        })
});

