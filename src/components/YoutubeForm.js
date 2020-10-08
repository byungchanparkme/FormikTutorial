import React from "react"
import { useFormik } from "formik"

const initialValues = {
  name: "",
  email: "",
  channel: "",
}

const onSubmit = (values) => {
  console.log("Form data", values)
}

const validate = (values) => {
  // values.name values.email values.channel
  // errors.name errors.email errors.channel
  // errors.name = 'This field is required'
  let errors = {}

  if (!values.name) {
    // if name is empty
    errors.name = "Required"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(values.email)) {
    error.email = "Invalid email format"
  }

  if (!values.channel) {
    errors.channel = "Required"
  }

  return errors
}

function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
