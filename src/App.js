import React, { useState, useEffect } from 'react';
import {GuestList} from './components/GuestList/GuestList';
import { AddGuestForm } from './components/AddGuestForm/AddGuestForm';

export const App = () => {

  const [guests, setGuests] = useState([]);

  useEffect(() => {
    setGuests([{
      id: 1,
      name: 'Derek Jensen',
      street: '123 Main St.',
      city: 'Chicago',
      state: 'IL',
      zip: '12345',
      phone: '555-555-1234'
    }]);
  }, []);

  const addGuest = guest => {
    guest.id = guests.length + 1;
    setGuests([...guests, guest]);
  }

  const deleteGuest = id => {
    setGuests(guests.filter(guest => guest.id !== id));
  }


  return (
    <div className="container">
     <h1>Please Sign My Guestbook</h1>

      <div className="row">
        <div className="col">
          <h2>Sign In</h2>
          <AddGuestForm addGuest={addGuest}/>
        </div>
        <div className="col">
          <h2>Guests</h2>
          <GuestList deleteGuest={deleteGuest} guests={guests}/>
        </div>
      </div>
    </div>
  );
}

