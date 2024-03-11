/* eslint-disable react/prop-types */
import { ErrorMessage, Formik, Form, Field } from 'formik';
import Model from './components/Model';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { database } from './config/config';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email('').required('Email is Required'),
});

const AddUpdateDeleteContact = ({
  modelOpen,
  handleModel,
  editContact,
  setModelOpen,
  edit,
  setEdit,
}) => {
  // lets Create a function to send the contact we added to the database
  const addContactToDB = async (contactValues) => {
    // In ths line we have to import the database and the name of the database
    const contactCollection = collection(database, 'contacts');
    // This is the default function which is provided by the firebase  to add the data to the database
    // Here we have to pas the contactCollection and the contact to pass the values from the input fields
    await addDoc(contactCollection, contactValues);
    toast.success('Contact Added Successfully');
  };
  // lets create a update contact function to update the existing contact
  const updateContact = async (contactValues, id) => {
    const ref = doc(database, 'contacts', id);
    await updateDoc(ref, contactValues);
    toast.success('Contact Updated Successfully');
    setModelOpen(!modelOpen);
    setEdit(false);
  };

  return (
    <div>
      <Model modelOpen={modelOpen} handleModel={handleModel}>
        {/* lets Initialize the object for the input field value ... */}
        <Formik
          validationSchema={contactSchemaValidation}
          //   formik by default give us some properties ... initail value is used for the initial state of the form
          initialValues={
            edit
              ? {
                  name: editContact?.name,
                  email: editContact?.email,
                }
              : {
                  name: '',
                  email: '',
                }
          }
          // here we have to pass the values in submit function to the addDoc function we created to add the formdata to the database
          onSubmit={(values) => {
            edit
              ? updateContact(values, editContact?.id)
              : addContactToDB(values);

            handleModel();
          }}
        >
          <Form>
            <p className="py-1 text-lg">Name</p>
            <Field
              type="text"
              name="name"
              id="name"
              className="h-10 w-full rounded-md bg-gray-700 p-3 text-white outline-none"
            />
            <div className="text-xs text-red-500">
              <ErrorMessage name="name" />
            </div>
            <p className="py-1 text-lg">Email</p>
            <Field
              type="email"
              name="email"
              id="email"
              className="h-10 w-full rounded-md bg-gray-700 p-3 text-white outline-none"
            />
            <div className="text-xs text-red-500">
              <ErrorMessage name="email" />
            </div>
            <button className="mt-5 rounded-md bg-orange-400 px-4 py-2">
              {edit ? 'Update Contact' : 'Add Contact'}
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddUpdateDeleteContact;
