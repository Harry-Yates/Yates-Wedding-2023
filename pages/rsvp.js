import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Head from "next/head";
import Image from "next/image";
import weeHee from "@/public/gif/wee-hee.gif";
import confetti from "canvas-confetti";
import Footer from "@/components/Footer";
import hydrangea from "@/public/decoration/hydrangea.png";

const RSPV = ({ hasReadPermission }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [attending, setAttending] = useState(false);
  const [notAttending, setNotAttending] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [guest, setGuest] = useState(1);

  // FIREWORK STYLE
  // useEffect(() => {
  //   if (confirmMessage) {
  //     setTimeout(() => {
  //       setShowConfirmMessage(true);
  //       // do this for 30 seconds
  //       if (attending) {
  //         var duration = 5 * 1000;
  //         var end = Date.now() + duration;

  //         (function frame() {
  //           var duration = 15 * 1000;
  //           var animationEnd = Date.now() + duration;
  //           var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  //           function randomInRange(min, max) {
  //             return Math.random() * (max - min) + min;
  //           }

  //           var interval = setInterval(function () {
  //             var timeLeft = animationEnd - Date.now();

  //             if (timeLeft <= 0) {
  //               return clearInterval(interval);
  //             }

  //             var particleCount = 50 * (timeLeft / duration);
  //             // since particles fall down, start a bit higher than random
  //             confetti(
  //               Object.assign({}, defaults, {
  //                 particleCount,
  //                 origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
  //               })
  //             );
  //             confetti(
  //               Object.assign({}, defaults, {
  //                 particleCount,
  //                 origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
  //               })
  //             );
  //           }, 250);
  //         })();
  //       }
  //     }, 1000);
  //   }
  // }, [confirmMessage]);

  // CONFETTI STYLE
  useEffect(() => {
    if (confirmMessage) {
      setTimeout(() => {
        setShowConfirmMessage(true);
        // do this for 30 seconds
        if (attending) {
          var duration = 5 * 1000;
          var end = Date.now() + duration;
          var colors = ["#c83936", "#ffffff", "#418e45"];

          (function frame() {
            // launch a few confetti from the left edge
            confetti({
              particleCount: 7,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors
            });
            // and launch a few from the right edge
            confetti({
              particleCount: 7,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors
            });

            // keep going until we are out of time
            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();
        }
      }, 1000);
    }
  }, [confirmMessage, attending]);

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  function Submit(e) {
    if (!attending && !notAttending) {
      // alert("Please select either 'Happy to be there' or 'Sad to miss it'");
      alert(`${t.rsvp_alert}`);
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
        confirmMessage.classList.add("show");
        setConfirmMessage(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleGuestChange = (value) => {
    setGuest(value);
  };

  return (
    <BaseLayout>
      <BasePage>
        <Head>
          <title>RSPV</title>
          <meta
            name='viewport'
            content='width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no'></meta>
        </Head>
        <h1 className='rsvp__title'>{t.rsvp_title}</h1>
        <div className='hydrangea' >
          <Image  src={hydrangea} alt='hydrangea' width='50' />
          <Image  src={hydrangea} alt='hydrangea' width='100' />
          <Image  src={hydrangea} alt='hydrangea' width='50' />
        </div>
        <div className='rsvp_details'>
          <h3>{t.rsvp_secondHeader}</h3>
          <p>
            {t.rsvp_deadline}
            <time dateTime='2023-05-25'>
              <b>{t.rsvp_deadline_date}</b>
            </time>
          </p>
          <small>{t.rsvp_noKids}</small>
        </div>

        <div className='rsvp__form-container'>
          <form className='rsvp__form' onSubmit={(e) => Submit(e)}>
            <div className='rsvp__checkbox--container'>
              <div className='rsvp__checkbox'>
                <label htmlFor='attending' className='rsvp__label'>
                  {t.rsvp_yes}
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
                  {t.rsvp_no}
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
              {t.rsvp_firstName}
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
              {t.rsvp_lastName}
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
              {t.rsvp_email}
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
              {t.rsvp_phone}
            </label>
            <input
              //  placeholder='Phone'
              name='Phone'
              className='rsvp__input'></input>
            <label htmlFor='address' className='rsvp__label'>
              {t.rsvp_address}
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
              {t.rsvp_dietary}
            </label>
            <input
              // placeholder='Number of guests'
              name='DietaryRequirements'
              type='textarea'
              id='guests'
              className='rsvp__input'
            />
            <label htmlFor='guests' className='rsvp__label'>
              {t.rsvp_partySize} <small>{t.rsvp_partySize_reminder}</small>:
            </label>
            <input
              // placeholder='Number of guests'
              name='Guests'
              type='number'
              id='guests'
              className='rsvp__input'
              placeholder={t.rsvp_partySize_placeholder}
              value={guest}
              onChange={(e) => handleGuestChange(e.target.value)}
            />

            {guest > 1 && (
              <>
                <label htmlFor='extraGuestNames' className='rsvp__label'>
                  {t.rsvp_partySize_names}
                </label>
                <input
                  // placeholder='Number of guests'
                  name='ExtraGuestNames'
                  type='textarea'
                  id='extraGuestNames'
                  className='rsvp__input'
                />
              </>
            )}
            {/* <label htmlFor='extraGuestNames' className='rsvp__label'>
              {t.rsvp_partySize_names}
            </label>
            <input
              // placeholder='Number of guests'
              name='ExtraGuestNames'
              type='textarea'
              id='extraGuestNames'
              className='rsvp__input'
            /> */}
            <label htmlFor='comments' className='rsvp__label'>
              {t.rsvp_anythingElse}
            </label>
            <input name='Comments' type='textarea' id='comments' className='rsvp__input' />
            {confirmMessage && !attending && (
              <div className={`rsvp__confirm-message ${showConfirmMessage ? "show" : ""}`}>
                <h5>{t.rsvp_confirmUpper}</h5>
                <h5>{t.rsvp_confirmLower}</h5>
              </div>
            )}
            {confirmMessage && attending && (
              <div className={`rsvp__confirm-message ${showConfirmMessage ? "show" : ""}`}>
                <Image src={weeHee} alt='cheersGif' width={280} height={280} loading='lazy' />
              </div>
            )}
            <button
              name='Name'
              type='submit'
              value='RSVP Now'
              className='btn-rsvp-btn'
              disabled={isDisabled}>
              {confirmMessage ? `${t.rsvp_btn_sent}` : `${t.rsvp_btn_send}`}
            </button>
          </form>
        </div>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
};

export default RSPV;
