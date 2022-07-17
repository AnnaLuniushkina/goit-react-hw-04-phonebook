import React, { useState } from "react";
import PropTypes from 'prop-types';
import shortid from "shortid";
import styles from './ContactForm.module.css';

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit({name, number});

        setName('');
        setNumber('');
    };

    return (
        <>
            <form
                className={styles.contactForm}
                onSubmit={handleSubmit}>
                <label
                    htmlFor={nameInputId}
                    className={styles.contactForm__label} >
                    Name
                    <input
                        id={nameInputId}
                        className={styles.contactForm__input}
                        value={name}
                        onChange={handleChange}
                        type='text'
                        name='name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                    </label>
                
                    <label
                        htmlFor={numberInputId}
                        className={styles.contactForm__label}>
                        Number
                        <input
                            id={numberInputId}
                            className={styles.contactForm__input}
                            value={number}
                            onChange={handleChange}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
        
                    <button type="submit" className={styles.contactForm__button}>Add contact</button>
                </form>
            </>
        );
};

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

//     nameInputId = shortid.generate();
//     numberInputId = shortid.generate();

//     handleChange = event => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = event => {
//         event.preventDefault();

//         this.props.onSubmit(this.state);

//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         const { name, number } = this.state;

//         return (
//             <>
//                 <form
//                     className={styles.contactForm}
//                     onSubmit={this.handleSubmit}>
//                     <label
//                         htmlFor={this.nameInputId}
//                         className={styles.contactForm__label} >
//                         Name
//                         <input
//                             id={this.nameInputId}
//                             className={styles.contactForm__input}
//                             value={name}
//                             onChange={this.handleChange}
//                             type='text'
//                             name='name'
//                             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                             required />
//                     </label>
                
//                     <label
//                         htmlFor={this.numberInputId}
//                         className={styles.contactForm__label}>
//                         Number
//                         <input
//                             id={this.numberInputId}
//                             className={styles.contactForm__input}
//                             value={number}
//                             onChange={this.handleChange}
//                             type="tel"
//                             name="number"
//                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                             required
//                         />
//                     </label>
        
//                     <button type="submit" className={styles.contactForm__button}>Add contact</button>
//                 </form>
//             </>
//         );
//     };
// };

// ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };