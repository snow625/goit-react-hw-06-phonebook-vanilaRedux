import { useSelector } from "react-redux";
import { useCallback } from "react";
import { addPhone, removePhone, changeFilter } from "./redux/action";
import { getFilteredItems, getContacts } from "./redux/selector";
import { useDispatch } from "react-redux/es/exports";

import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

import "./index.css";

const App = () => {
  const contacts = useSelector(getContacts);
  const filteredItems = useSelector(getFilteredItems);

  const dispatch = useDispatch();

  const onAddPhone = useCallback(
    (obj) => {
      const isInclude = contacts.find(
        ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
      );
      if (!isInclude) {
        dispatch(addPhone(obj));
        return;
      }
      alert(`${isInclude.name} is already in contacts`);
      return;
    },
    [contacts, dispatch]
  );

  const onRemovePhone = useCallback(
    (id) => {
      dispatch(removePhone(id));
    },
    [dispatch]
  );

  const changeFilterState = useCallback(
    ({ target: { value } }) => {
      dispatch(changeFilter(value.trim()));
    },
    [dispatch]
  );


  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={onAddPhone} />

      <h2 className="title">Contacts</h2>
      <Filter onChange={changeFilterState} />
      <Contacts items={filteredItems} onClick={onRemovePhone} />
    </div>
  );
};

export default App;
