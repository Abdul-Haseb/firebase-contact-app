/* eslint-disable react/prop-types */
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { IoIosContact } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { database } from '../config/config';
import AddUpdateDeleteContact from '../AddUpdateDeleteContact';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactCard = ({ contact, modelOpen, setModelOpen, setDelet }) => {
  const [handleData, setHandleData] = useState({
    id: '',
    name: '',
    email: '',
  });
  const [edit, setEdit] = useState(false);

  const handleModelOpening = (id, name, email) => {
    setHandleData({
      id: id,
      name: name,
      email: email,
    });
    setEdit(true);
    setModelOpen(!modelOpen);
  };
  //   console.log(contact.id, 'Contact id');

  //   Here is a delete function to delte the contact from the data base
  const deleteContact = async (id) => {
    try {
      const contactCollection = collection(database, 'contacts');
      await deleteDoc(doc(contactCollection, id));
      toast.success('Contact Deleted Successfull');
      setDelet(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddUpdateDeleteContact
        handleModel={handleModelOpening}
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        editContact={handleData}
        contact={contact}
        edit={edit}
        setEdit={setEdit}
      />
      {contact.map(({ id, name, email }) => (
        <div
          key={id}
          className="mt-5 flex justify-between rounded-md bg-yellow-300 p-4"
        >
          <IoIosContact className="text-5xl text-orange-500" />
          <div className="text-sm text-gray-800">
            <p>{name}</p>
            <p>{email}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdDelete
              onClick={() => deleteContact(id)}
              className="cursor-pointer text-4xl text-orange-500"
            />
            <MdModeEdit
              onClick={() => handleModelOpening(id, name, email)}
              className="cursor-pointer text-4xl text-orange-500"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactCard;
