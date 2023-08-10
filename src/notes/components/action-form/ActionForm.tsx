import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { NOTE_CATEGORY } from "../../../common/utils/note-category.enum";
import { ActionFormValues } from "../../../common/interfaces/action-form-values.interface";
import { Button } from "../../../common/components/button/Button";

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
        <Form className="flex flex-col items-center gap-6 p-8">
          <div className="w-full">
            <Field id="name" name="name" placeholder="Name" className="w-full py-3 px-2 border-1 border-solid border-black" />
            {errors.name && touched.name ? (
              <div className="text-xs text-red-600 absolute">{errors.name}</div>
            ) : null}

          </div>

          <Field as="select" name="category" className="w-full py-3 px-2 border-1 border-solid border-black">
            {
              Object.values(NOTE_CATEGORY).map((category) =>
                <option key={category} value={category}>{category}</option>
              )
            }
          </Field>

          <div className="w-full">
            <Field id="content" name="content" placeholder="Content" className="w-full py-3 px-2 border-1 border-solid border-black" />
            {errors.content && touched.content ? (
              <div className="text-xs text-red-600 absolute">{errors.content}</div>
            ) : null}
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}