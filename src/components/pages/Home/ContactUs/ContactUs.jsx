import { useRef } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "saifulEmailService@17",
        "template_s2ftyt8",
        form.current,
        "oUxxPtTgGe6BKOr8J"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your message have been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="mt-12">
      <SectionTitle heading={"Contact Us"}></SectionTitle>
      <form
        className="flex flex-col mx-auto w-1/2"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered resize-none"
            name="message"
            placeholder="write your message here..."
          ></textarea>
        </div>

        <input className="btn btn-info my-4" type="submit" value="send" />
      </form>
    </div>
  );
};

export default ContactUs;
