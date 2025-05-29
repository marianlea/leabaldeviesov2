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
    <div className="contact font-description text-mainGray text-justify h-full flex flex-col items-center justify-center">
      {showMessageSuccess ? (
        <section className="thank-you-message w-10/12 flex flex-col items-center justify-center">
          <p className="text-xl md:text-2xl lg:text-4xl xl:text-6xl mt-20 inline-block">
            Your message is succesfully sent
            <span className="inline-flex ml-2 text-cobalt-50">
              <Paperplane className="" />
            </span>
          </p>
          <p className="mt-4 text-xs md:text-sm lg:text-base xl:text-xl">
            Thank you for taking your time to reach out to me. I'll respond to
            your enquiry as soon as I can.
          </p>
        </section>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form w-11/12 lg:w-8/12 xl:w-6/12 flex flex-col justify-center"
        >
          <h1 className="text-base md:text-xl lg:text-4xl lg">
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
          <section className="lg:text-xl xl:text-2xl text-sm md:text-base">
            <input
              name="name"
              className="name-field border-1 border-outlineGray rounded-2xl pl-3  w-full mt-3 mb-2 p-1"
              placeholder="first name"
              type="text"
              required
            ></input>
            <input
              name="email"
              className="email-field border-1 border-outlineGray rounded-2xl pl-3 w-full mb-2 p-1"
              placeholder="email"
              type="email"
              required
            ></input>
            <input
              name="subject"
              type="text"
              className="subject-field border-1 border-outlineGray rounded-2xl pl-3 w-full mb-2 p-1"
              placeholder="subject"
              required
            ></input>
            <textarea
              name="message"
              className="message-field border-1 border-outlineGray rounded-2xl pl-3 w-full mb-2 p-1"
              placeholder="message"
              rows={8}
              required
            ></textarea>
            <button
              className="submit-button bg-cobalt-50 text-ceramic-50 rounded-2xl w-full mb-2 p-1 hover:bg-eggyolk-100"
              type="submit"
            >
              send
            </button>
          </section>
        </form>
      )}
    </div>
  );
}
