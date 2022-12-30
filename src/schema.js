// Filename: validace.schema.js
const jsonValidace = require("json-validace");

// create a validace schema
const loginSchema = new jsonValidace.Schema({
  password: {
    type: "string",
    required: true,
    minLength: 10,
    maxLength: 20,
  },
  email: {
    type: "email",
    required: true,
  },
});

// export loginSchema
module.exports = loginSchema;
