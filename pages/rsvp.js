import React, { useState } from "react";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";

const RSPV = ({ hasReadPermission }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [attending, setAttending] = useState(false);
  const [notAttending, setNotAttending] = useState(false);

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  function Submit(e) {
    if (!attending && !notAttending) {
      alert("Please select either 'Happy to be there' or 'Sad to miss it'");
      return;
    }
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    setConfirmMessage(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbzOJKdw6vOjrVqgWVBHY50sWlM5l-8pJ6Ad6mYmJsoQxpe118BpzCjmQytQkINOvYxr/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        confirmMessage.classList.add("fade-in");
        setConfirmMessage(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <BaseLayout>
      <BasePage>
        <h1 className='rsvp__title'>{t.rsvpPageTitle}</h1>
        <div className='rsvp__form-container'>
          <form className='rsvp__form' onSubmit={(e) => Submit(e)}>
            <div className='rsvp__checkbox--container'>
              <div className='rsvp__checkbox'>
                <label htmlFor='attending' className='rsvp__label'>
                  Happy to be there
                </label>

                <input
                  type='checkbox'
                  id='attending'
                  name='Attending'
                  value='Attending'
                  checked={attending}
                  onChange={() => {
                    setAttending(!attending);
                    setNotAttending(false);
                  }}
                />
              </div>
              <div className='rsvp__checkbox'>
                <label htmlFor='notAttending' className='rsvp__label'>
                  Sad to miss it
                </label>

                <input
                  type='checkbox'
                  id='notAttending'
                  name='NotAttending'
                  value='Not Attending'
                  checked={notAttending}
                  onChange={() => {
                    setNotAttending(!notAttending);
                    setAttending(false);
                  }}
                />
              </div>
            </div>
            <label htmlFor='firstName' className='rsvp__label'>
              First Name:
            </label>
            <input
              // placeholder='John'
              name='FirstName'
              type='text'
              id='firstName'
              className='rsvp__input'
              required
            />
            <label htmlFor='lastName' className='rsvp__label'>
              Last Name:
            </label>
            <input
              // placeholder='Last Name'
              name='LastName'
              type='text'
              id='lastName'
              className='rsvp__input'
              required
            />
            <label htmlFor='email' className='rsvp__label'>
              Email:
            </label>
            <input
              // placeholder='Email'
              name='Email'
              type='email'
              id='email'
              className='rsvp__input'
              required
            />
            <label htmlFor='phone' className='rsvp__label'>
              Phone:
            </label>
            <input
              //  placeholder='Phone'
              name='Phone'
              className='rsvp__input'></input>
            <label htmlFor='address' className='rsvp__label'>
              Address:
            </label>
            <input
              // placeholder='Address'
              name='Address'
              type='text'
              id='address'
              className='rsvp__input'
            />
            {/* <label htmlFor='arrival' className='rsvp__label'>
              Day of arrival:
            </label>
            <input
              // placeholder='Arrival'
              value='2023-09-08'
              name='Arrival'
              type='date'
              id='arrival'
              className='rsvp__input'
            /> */}
            <label htmlFor='dietary' className='rsvp__label'>
              Dietary requirements:
            </label>
            <input
              // placeholder='Number of guests'
              name='DietaryRequirements'
              type='textarea'
              id='guests'
              className='rsvp__input'
            />
            <label htmlFor='guests' className='rsvp__label'>
              RSVP for others, please confirm your party size (invitation only):
            </label>
            <input
              // placeholder='Number of guests'
              name='Guests'
              type='number'
              id='guests'
              className='rsvp__input'
              value='1'
            />
            <label htmlFor='extraGuestNames' className='rsvp__label'>
              Full names of additional party members:
            </label>
            <input
              // placeholder='Number of guests'
              name='ExtraGuestNames'
              type='textarea'
              id='extraGuestNames'
              className='rsvp__input'
            />

            <input name='Name' type='submit' value='RSVP Now' className='btn rsvp-btn' />
            {confirmMessage && (
              <h4 className={`rsvp__confirm-message ${confirmMessage ? "show" : ""}`}>
                We have received your RSVP!
              </h4>
            )}
          </form>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default RSPV;
