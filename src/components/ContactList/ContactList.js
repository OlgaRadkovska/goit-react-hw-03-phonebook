import PropTypes from 'prop-types';

import { StyledContactList } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <StyledContactList>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="item">
        <p className="contact">
          {name}............
          {number}
        </p>
        <button
          className="btn"
          type="submit"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </StyledContactList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
