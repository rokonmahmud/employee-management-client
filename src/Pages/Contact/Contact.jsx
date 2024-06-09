import contactBg from "../../assets/images/others/ContactBg.png"
const Contact = () => {
  return (
    <div>
      <div className=" min-h-screen bg-[#03162C] ">
        <div className="hero-content flex-col w-9/12 gap-8 mx-auto pt-16 lg:flex-row-reverse">
          <div>
            <img src={contactBg} alt="" />
            <h1 className="text-4xl mb-4 text-white text-center font-bold ">
              Get In Touch
            </h1>
            <p className="text-center text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page randomised words which dont look
              even slightly when looking at its layout.
            </p>
          </div>
          <div className="card flex-shrink-0 lg:w-6/12 shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="subject"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write your message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#16A34A] text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
