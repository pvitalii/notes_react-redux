import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { NOTE_CATEGORY } from "../../../common/utils/note-category.enum";
import { ActionFormValues } from "../../../common/interfaces/action-form-values.interface";
import "./ActionForm.css"

type ActionFormProps = {
  initialValues: ActionFormValues,
  onSubmit: (values: ActionFormValues) => void
}

export const ActionForm = (props: ActionFormProps) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(75, 'Too Long!').required('Required!'),
    content: Yup.string().max(700, 'Too Long!').required('Required!')
  });

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className="action-form">
          <div className="form-field">
            <Field id="name" name="name" placeholder="Name" />
            {errors.name && touched.name ? (
              <div className="error">{errors.name}</div>
            ) : null}

          </div>

          <Field as="select" name="category">
            {
              Object.values(NOTE_CATEGORY).map((category) =>
                <option key={category} value={category}>{category}</option>
              )
            }
          </Field>

          <div className="form-field">
            <Field id="content" name="content" placeholder="Content" />
            {errors.content && touched.content ? (
              <div className="error">{errors.content}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}