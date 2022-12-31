import jsonValidace from "json-validace";

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
export default loginSchema;
