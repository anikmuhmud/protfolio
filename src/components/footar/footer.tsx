function Footer() {
    return (    
       <div>
  <footer className="bg-gray-700 text-gray-300 py-10 mt-10 rounded-2xl">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

    
      <div>
        <h3 className="text-3xl font-bold mb-4 text-white"><span className="text-cyan-400 mr-2.5"><i className='bx bx-run'></i></span> About Me</h3>
        <p className="text-[18px] leading-relaxed border-2 border-cyan-400 p-5 rounded-2xl -rotate-2">
          <span className="text-2xl text-cyan-400">I am a passionate web developer creating modern</span>, responsive websites.
          My goal is to deliver high quality and user-friendly digital solutions.
        </p>
      </div>

      
      <div>
        <h3 className="text-3xl font-bold mb-4 text-white"><span className="text-cyan-400 mr-2.5"><i className='bx bxl-pinterest'></i></span>Quick Links</h3>
          <div>
          <ul className=" ml-[93px] text-[18px] mb-2 ">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#services" className="hover:text-white">Services</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
        
          </div>
      </div>

    
      <div>
        <h3 className="text-3xl font-bold mb-4 text-white"><span className="text-cyan-400 mr-2" ><i className='bx bxs-devices'></i></span> Follow Me</h3>
        <div className="flex space-x-2 text-3xl a-btn">
          <a href="#" className=" border-2 border-cyan-400 p-[10px] rounded-2xl"><i className='bx bxl-facebook'></i></a>
          <a href="#" className=" border-2 border-cyan-400 p-[10px] rounded-2xl"><i className='bx bxl-instagram'></i></a>
          <a href="#" className=" border-2 border-cyan-400 p-[10px] rounded-2xl"><i className='bx bxl-github'></i></a>
          <a href="#" className= "border-2 border-cyan-400 p-[10px] rounded-2xl"><i className='bx bxl-youtube'></i></a>
        </div>
      </div>
    </div>

  
    <div className="text-center text-sm text-gray-50 mt-8  border-t border-gray-200 pt-4">
      © 2025 My Portfolio. All rights reserved.
    </div>
  </footer>

  </div>
     );
}

export default Footer;