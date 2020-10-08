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
  } else if (!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(values.email)) {
    errors.email = "Invalid email format"
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

  console.log("Visited fields", formik.touched)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} autoComplete="off" />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} autoComplete="off" />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} autoComplete="off" />
          {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
