import  {Schema} from "json-validace";


import { writable } from "svelte/store";


export const errorOutput = writable({
  email: "",
  password: ""
})


function setErrorMessage(data) {
  // output the error message to the error container 
  errorOutput.update(value => {
    return {
      ...value, [data.key]: data.errorMessages[0] ?? "✔️"
    }
  })
}

// create a validace schema
export const loginSchema = new Schema({
  email: {
    type: ["email", " %key% not valid"],
    required: true,
    func: setErrorMessage
  },
  password: {
    type: ["string", "%key% not valid"],
    required: [true, "%key% feild cannot be empty!"],
    match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "not a strong %key%!"],
    func: setErrorMessage
  }
});



