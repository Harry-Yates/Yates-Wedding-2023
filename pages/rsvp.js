import React, { useState, useEffect } from "react";
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
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [attending, setAttending] = useState(false);
  const [notAttending, setNotAttending] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (confirmMessage) {
      setTimeout(() => {
        setShowConfirmMessage(true);
      }, 1000);
    }
  }, [confirmMessage]);

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  function Submit(e) {
    if (!attending && !notAttending) {
      alert("Please select either 'Happy to be there' or 'Sad to miss it'");
      return false;
    }
    e.preventDefault();
    setIsDisabled(true);
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    setConfirmMessage(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbyLi0E2HYUTh43DEELHuH3upM9yTsVfa-HH-yXbV90ahWTabQHKkK-7s6d_t868oJXV/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        confirmMessage.classList.add("show");
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

        <div className='rsvp_details'>
          <h3>Invite only</h3>
          <p>
            Kindly RSVP no later than
            <time dateTime='2023-05-25'>
              <b> 25th May 2023</b>
            </time>
          </p>
          <small>
            UNFORTUNATELY WE ARE NOT ABLE TO EXTEND AN INVITE TO PLUS ONES OR CHILDREN FOR THIS
            OCCASION
          </small>
        </div>

        {confirmMessage && (
          <div className={`rsvp__confirm-message ${showConfirmMessage ? "show" : ""}`}>
            <h5>RSVP Received!</h5>
            <h5>Thank You</h5>
          </div>
        )}

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
              Email Address:
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
              Phone Number:
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
              Do you have any dietary restrictions?
            </label>
            <input
              // placeholder='Number of guests'
              name='DietaryRequirements'
              type='textarea'
              id='guests'
              className='rsvp__input'
            />
            <label htmlFor='guests' className='rsvp__label'>
              How many in your party <small>(invite only)</small>:
            </label>
            <input
              // placeholder='Number of guests'
              name='Guests'
              type='number'
              id='guests'
              className='rsvp__input'
              placeholder='Enter party total'
            />
            <label htmlFor='extraGuestNames' className='rsvp__label'>
              Additional party member names:
            </label>
            <input
              // placeholder='Number of guests'
              name='ExtraGuestNames'
              type='textarea'
              id='extraGuestNames'
              className='rsvp__input'
            />
            <label htmlFor='comments' className='rsvp__label'>
              Anything we should know?
            </label>
            <input name='Comments' type='textarea' id='comments' className='rsvp__input' />

            <button
              name='Name'
              type='submit'
              value='RSVP Now'
              className='btn-rsvp-btn'
              disabled={isDisabled}>
              {confirmMessage ? "Sent" : "Send RSVP"}
            </button>
          </form>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default RSPV;
