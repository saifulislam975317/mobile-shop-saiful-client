import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const textArea = form.textArea.value;
    console.log(name, email, textArea);
  };
  return (
    <div>
      <SectionTitle heading={"Get In Touch"}></SectionTitle>
      <form className="flex flex-col items-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="input input-bordered w-full max-w-xs required"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs required"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            name="textArea"
            className="textarea textarea-bordered h-24 resize-none"
            placeholder="write here---"
          ></textarea>
        </div>

        <input
          onClick={handleSubmit}
          className="btn btn-info mt-2"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default ContactUs;
