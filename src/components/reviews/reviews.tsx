function ReviewSection() {
  return (
    <div className="w-[90%] mx-auto py-16">
      {/* Outer rotated border */}
      <div className="border-4 border-amber-400 rounded-3xl transform lg:-rotate-2 sm:rotate-0 transition-all duration-500">
        <div className="p-8">
          <div className="max-w-6xl mx-auto transform lg:rotate-2 sm:rotate-0">
            <h2 className="text-4xl font-bold border-2 border-y-amber-300 text-white text-center sm:text-center mb-12 py-3 px-6 rounded-2xl inline-block">
              Client Reviews
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Review Card */}
              {[
                {
                  img: "/ak-1.jpg",
                  name: "Mahmudul Hasan Anik",
                  title: "CEO, TechCorp",
                  stars: 3,
                  message:
                    "Excellent work! My website looks amazing and runs perfectly.",
                },
                {
                  img: "/ak-11.jpeg",
                  name: "Hasan Anik",
                  title: "Founder, StartupX",
                  stars: 4,
                  message:
                    "Delivered on time and beyond expectations. Highly recommended!",
                },
                {
                  img: "/ak-5.jpeg",
                  name: "Mahmudul Hasan",
                  title: "Manager, DesignHub",
                  stars: 4,
                  message:
                    "Very professional and easy to communicate with. Great results.",
                },
                {
                  img: "/12.jpg",
                  name: "Mahmudu Anik",
                  title: "Owner, CreativeStudio",
                  stars: 3,
                  message:
                    "Amazing experience! Will definitely work together again.",
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition transform hover:-translate-y-1"
                >
                  <p className="text-gray-300 mb-4">{review.message}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.img}
                      alt="client"
                      className="w-12 h-12 rounded-full border-2 border-cyan-400"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{review.name}</h4>
                      <p className="text-sm text-gray-400">{review.title}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 text-xl gap-3">
                    {Array.from({ length: review.stars }).map((_, index) => (
                      <i key={index} className="bx bx-star"></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
