

function LocationMap() {
    return (    
           <div className="w-[45%] mt-[30px]">
  <section id="location" className="py-16 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 text-white border-2 border-amber-300 px-3.5 py-2 inline-block rounded-2xl">📍 My Location</h2>

    <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
      
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.976172504339!2d90.41251831498146!3d23.81033198455788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79c56ec3f9f%3A0x42b5d1a9c0e35c57!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1704485432109!5m2!1sen!2sbd"
  width="100%"
  height="450"
  allowFullScreen   // এখানে camelCase
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"  // এখানে camelCase
></iframe>

    </div>
  </section>
   </div>
     );
}

export default LocationMap;