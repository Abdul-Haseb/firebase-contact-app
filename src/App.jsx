import { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { collection, getDocs } from 'firebase/firestore';
import { database } from './config/config';
import ContactCard from './components/ContactCard';

function App() {
  // lets Create a State for saving the Contacts
  const [contact, setContact] = useState([]);

  //   we Are Performing a network Call so we have to use UseEffect
  useEffect(() => {
    // Here we create a async function to get the data from the firebase
    const getContects = async () => {
      // lets store the database collection in a variable
      // here we pass the refrecne of the data base and the name of the database
      const contactCollection = collection(database, 'contacts');
      // Here we store the contacts data in a snapShot variable .. snapshot is basically a memory which have data of our database
      const contactSnapShot = await getDocs(contactCollection);
      // Lets map overThe snapshot to only get the data we need
      // This method is used to get the data of our database

      // Here we have to get the id as well ... for that we have to create an object and spread the doc.data in it and also doc.id
      const contactList = contactSnapShot?.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // console.log(contactList);
      setContact(contactList);
      // console.log(contact, contact);
    };
    getContects();
  }, []);
  return (
    <div className="bg-customGray h-screen overflow-y-auto">
      <Header />
      <div className="mx-auto max-w-[500px]">
        <Search />
        <ContactCard contact={contact} />
      </div>
    </div>
  );
}

export default App;
