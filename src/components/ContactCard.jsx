/* eslint-disable react/prop-types */
import { IoIosContact } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';

const ContactCard = ({ contact }) => {
  //   console.log(contact.id, 'Contact id');
  return (
    <>
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
            <MdDelete className="text-4xl text-orange-500" />
            <MdModeEdit className="text-4xl text-orange-500" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactCard;
