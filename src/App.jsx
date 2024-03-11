import { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { database } from './config/config';
import ContactCard from './components/ContactCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // lets Create a State for saving the Contacts
  const [contact, setContact] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);
  const [delet, setDelet] = useState(false);

  //   we Are Performing a network Call so we have to use UseEffect
  useEffect(() => {
    // Here we create a async function to get the data from the firebase
    const getContects = async () => {
      // lets store the database collection in a variable
      // here we pass the refrecne of the data base and the name of the database
      const contactCollection = collection(database, 'contacts');
      // Here we store the contacts data in a snapShot variable .. snapshot is basically a memory which have data of our database
      onSnapshot(contactCollection, (snapshot) => {
        const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContact(contactList);
        return contactList;
      });
      // Lets map overThe snapshot to only get the data we need
      // This method is used to get the data of our database
      // console.log(contact, contact);
    };
    getContects();
  }, [modelOpen, delet]);

  const filtered = (e) => {
    const searchedValue = e.target.value.toLowerCase(); // Convert searched value to lowercase
    const contactRef = collection(database, 'contacts');
    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(searchedValue),
      );
      setContact(filteredContacts);
    });
  };

  const handleModelOpening = () => setModelOpen(!modelOpen);

  return (
    <div className="bg-customGray h-screen overflow-hidden">
      <ToastContainer position="bottom-center" />
      <Header />
      <div
        id="scroll"
        className="mx-auto h-screen max-w-[500px] overflow-y-auto"
      >
        <Search
          handleModelOpening={handleModelOpening}
          filteredContacts={filtered}
        />
        <ContactCard
          modelOpen={modelOpen}
          setModelOpen={setModelOpen}
          contact={contact}
          setDelet={setDelet}
        />
      </div>
    </div>
  );
}

export default App;
