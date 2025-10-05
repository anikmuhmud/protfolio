

function ContactSection() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-6xl mx-auto px-6">
        
        {/* Form */}
        <div className="w-full lg:w-1/2">
          <section id="contact" className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white border-2 border-amber-300 px-4 py-2 inline-block rounded-2xl">
              📩 Contact Me
            </h2>

            <div className="bg-cyan-900 shadow-lg rounded-2xl text-white p-8">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="text-2xl font-bold border-2 border-amber-300 px-4 py-3 cursor-pointer rounded-2xl shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>

        

      </div>
    </div>
  );
}

export default ContactSection;
