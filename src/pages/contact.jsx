import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [showError, setShowError] = useState(false);
  const [showMessageSuccess, setMessageSuccess] = useState(false);
  const Paperplane = FaRegPaperPlane;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d0inb3m",
        "template_avq04lm",
        form.current,
        "XWv8fX3s3cQWmthY1"
      )
      .then(
        () => {
          setMessageSuccess(true);
          form.current.reset();
        },
        (err) => {
          console.log(err);
          setShowError(true);
        }
      );
  };

  return (
    <div className="contact font-description text-mainGray text-justify w-full h-full">
      {showMessageSuccess ? (
        <section className="thank-you-message w-10/12 flex flex-col items-center">
          <p className="text-xl mt-20 inline-block">
            Your message is succesfully sent
            <span className="inline-flex ml-2 text-cobalt-50">
              <Paperplane className="" />
            </span>
          </p>
          <p className="mt-4 text-xs">
            Thank you for taking your time to reach out to me. I'll respond to
            your enquiry as soon as I can.
          </p>

          {/* <Paperplane className="ml-2 mt-1 text-cobalt-50 text-2xl" /> */}
        </section>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h1>
            Send me a message
            <span className="text-eggyolk-100">{` :  )`}</span>
          </h1>
          {showError && (
            <section className="email-error-message text-sm bg-eggyolk-100/25 p-4 text-justify border-1 border-dotted border-eggyolk-100 my-5 text-mainGray rounded-2xl">
              Your message couldn't be sent. Please check that all fields are
              filled out and try again. If issues persist, please try again
              later. Thank you!
            </section>
          )}
          <input
            name="name"
            className="name-field border-1 border-outlineGray rounded-2xl pl-3 text-sm w-full mt-3 mb-2 p-1"
            placeholder="first name"
            type="text"
            required
          ></input>
          <input
            name="email"
            className="email-field border-1 border-outlineGray rounded-2xl pl-3 text-sm w-full mb-2 p-1"
            placeholder="email"
            type="email"
            required
          ></input>
          <input
            name="subject"
            type="text"
            className="subject-field border-1 border-outlineGray rounded-2xl pl-3 text-sm w-full mb-2 p-1"
            placeholder="subject"
            required
          ></input>
          <textarea
            name="message"
            className="message-field border-1 border-outlineGray rounded-2xl pl-3 text-sm w-full mb-2 p-1"
            placeholder="message"
            rows={8}
            required
          ></textarea>
          <button
            className="submit-button bg-cobalt-50 text-ceramic-50 rounded-2xl text-sm w-full mb-2 p-1"
            type="submit"
          >
            send
          </button>
        </form>
      )}
    </div>
  );
}
