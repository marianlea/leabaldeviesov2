import { useRef, useState, CSSProperties } from "react";
import emailjs from "@emailjs/browser";
import { FaRegPaperPlane } from "react-icons/fa";
import * as EmailValidator from "email-validator";
import { MoonLoader } from "react-spinners";

export default function Contact() {
  const form = useRef();
  const [showError, setShowError] = useState(false);
  const [showMessageSuccess, setMessageSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const Paperplane = FaRegPaperPlane;

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.email.value;
    if (!EmailValidator.validate(email)) {
      setShowError(true);
      return;
    }

    setLoading(true);

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
          setLoading(false);
        },
        (err) => {
          console.log(err);
          setShowError(true);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact font-description text-mainGray text-justify h-full flex flex-col items-center justify-center">
      {loading && (
        <div className="absolute z-50 flex flex-col items-center justify-center">
          <MoonLoader
            color="#004aad"
            size={60}
            cssOverride={{ animationDuration: "1.5s" }}
          />
        </div>
      )}
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
              filled out correctly and try again. If issues persist, please try
              again later. Thank you!
            </section>
          )}
          <section className="lg:text-xl xl:text-2xl text-sm md:text-base">
            <input
              name="name"
              className="name-field input-disabled border-1 border-outlineGray rounded-2xl pl-3  w-full mt-3 mb-2 p-1"
              placeholder="first name"
              type="text"
              disabled={loading}
              required
            ></input>
            <input
              name="email"
              className="email-field input-disabled border-1 border-outlineGray rounded-2xl pl-3 w-full mb-2 p-1"
              placeholder="email"
              type="email"
              disabled={loading}
              required
            ></input>
            <input
              name="subject"
              type="text"
              className="subject-field  input-disabled border-1 border-outlineGray rounded-2xl pl-3 w-full mb-2 p-1"
              placeholder="subject"
              disabled={loading}
              required
            ></input>
            <textarea
              name="message"
              className="message-field textarea-disabled border-1 border-outlineGray rounded-2xl pl-3 w-full mb-2 p-1"
              placeholder="message"
              rows={8}
              disabled={loading}
              required
            ></textarea>
            <button
              className="submit-button button-disabled bg-cobalt-50 text-ceramic-50 rounded-2xl w-full mb-2 p-1 hover:bg-eggyolk-100"
              type="submit"
              disabled={loading}
            >
              send
            </button>
          </section>
        </form>
      )}
    </div>
  );
}
