import React, { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import shortid from "shortid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContact from "./FilterContact/FilterContact";

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contactList', []);
  const [filter, setFilter] = useState('');

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  }

  const contactsFilter = value => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  const addContact = ({name, number}) => {
      const newContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

      if (newContact) {
        alert(`${name} is already in contact`);
        return contacts;
      } else {
        setContacts(state => {
          const isContact = {
            id: shortid(),
            name,
            number,
          };
          return [
            isContact,
            ...state,
          ];
        });
        
      }
  };

  const onDelete = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
      <>
        <div className="Phonebook__container">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
          <h2>Contacts</h2>
          <FilterContact 
          title="Find contact by name"
          onChange={filterChange}
          value={filter}
        />
          <ContactList contactsFilter={contactsFilter(filter)} onDelete={onDelete} />
        </div>
    </>
  );
}

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   }

//   filterChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   }

//   contactsFilter = name => {

//     return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase())
//     );
//   };

//   addContact = ({name, number}) => {
//     this.setState(prevState => {
//       const { contacts } = prevState;
//       const newContact = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

//       if (newContact) {
//         alert(`${name} is already in contact`);
//         return contacts;
//       } else {
//         return {
//           contacts: [
//             {
//               id: shortid(),
//               name,
//               number,
//             },
//             ...contacts,
//           ],
//         };
//       }

//     });
//   };

//   onDelete = id => {
//     this.setState({
//       contacts: this.state.contacts.filter(contact => contact.id !== id),
//     });
//   };

//   componentDidMount() {
//     console.log('App componentDidMount');

//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     console.log(parsedContacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('App componentDidUpdate');

//     if (this.state.contacts !== prevState.contacts) {
//       console.log('Обновилося поле contacts, записую contacts в localStorage');
      
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     console.log('App render');

//     const { filter } = this.state;
//     return (
//       <>
//         <div className="Phonebook__container">
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={this.addContact} />
//           <h2>Contacts</h2>
//           <FilterContact 
//           title="Find contact by name"
//           onChange={this.filterChange}
//           value={filter}
//         />
//           <ContactList contactsFilter={this.contactsFilter(filter)} onDelete={this.onDelete} />
//         </div>
//     </>
//   );
//   };
// };

// export default App;