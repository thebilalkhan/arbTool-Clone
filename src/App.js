import React from 'react';
import HomeImg from "../src/assets/home.PNG";
import JobDetailImg from "../src/assets/job.PNG" ;
import mapImg from "../src/assets/map.PNG";
import mobileImg from '../src/assets/mobileImg.PNG';
import cardImg from "../src/assets/cardImg.PNG"

export default function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-600">Arb<span className="text-black">Tool</span></h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className=" text-xl text-gray-800  hover:text-green-600">Home</a>
            <a href="#" className=" text-xl text-gray-800 hover:text-green-600">Features</a>
            <a href="#" className=" text-xl text-gray-800 hover:text-green-600">Pricing</a>
          </nav>
          <div className="flex space-x-4">
            <button className=" text-lg text-gray-700">Login</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tired of managing your business manually?</h2>
        <p className="text-4xl text-green-700 font-bold"> <span class="text-black"> Meet </span> ArbTool</p>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">Simplify scheduling, quotes, and invoicing — All in One Place.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg">Request Demo</button>
          <button className="border bg-black text-white px-6 py-2 rounded-lg">Contact Sales</button>
        </div>
        {/* Placeholder for dashboard image */}
        <div className="mt-12 flex justify-center">
          <div className="w-full  h-61 bg-green-100 rounded-xl"> <img src={HomeImg} className='w-full h-full' /> </div>
        </div>


      </section>

      {/* Logos Section */}
      <section className="bg-white py-8 text-center">
        <p className="mb-4 text-lg text-green-600">We are trusted by</p>
        <div className="flex justify-center flex-wrap gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className=" ml-12 mr-12 text-xl font-medium w-24 h-10 p-2 bg-gray-100 rounded shadow-sm">Brand {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Features Overview */}
      <section className=" w-[78%] mx-auto bg-white py-12 px-4">
        <h3 className="text-center text-3xl font-bold mb-2 ">The smart choice for your team</h3>
        <h3 className="text-gray-700 text-center text-xl  mb-10"> Everything you need to manage your desired business</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard title="Seamless Collaboration" />
          <FeatureCard title="All in one Solution" />
          <FeatureCard title="Managed Static Data" />
        </div>
      </section>

      {/* Productivity Features */}
      <section className=" w-[83%]  mx-auto bg-white py-12 px-4">
        <h3 className="text-center text-3xl font-bold mb-2 ">Key features to boost your productivity</h3>
        <h3 className=" text-gray-700 text-center text-xl  mb-10"> Explore the essential tool to streamline your workflow</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureBox number="01" title="Worksites" bgColor="bg-yellow-200" />
          <FeatureBox number="02" title="Automated Jobflow" bgColor="bg-green-200" />
          <FeatureBox number="03" title="Auto Quote & Invoices" bgColor="bg-purple-300" />
        </div>

      </section>

      {/* Detailed Job Overview */}
      <section className=" w-[78%] mb-[50px] rounded-lg mx-auto bg-gray-100 py-12 px-8">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Side - Text */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Detailed Job Overview</h3>
      <p className="text-gray-600 mb-4">
        Get a comprehensive view of each job with all essential details in one place. Track job status, assign team members, required equipment, potential hazards, customer information, and job history—all in a structured and easy-to-access format.
      </p>
      <p className="text-gray-600">
        Share job overviews effortlessly with your customers to keep them informed and updated.
      </p>
    </div>

    {/* Right Side - Image Placeholder */}
    <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
     <img src= {JobDetailImg}/>
    </div>
  </div>
</section>


      {/* Google Maps Integration */}
      <section className="bg-yellow-200 rounded-lg py-12 px-4 w-[78%] mx-auto">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="h-64 bg-green-200 rounded-xl"> <img src={mapImg}/> </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Built-in Google Maps Integration</h3>
            <p className="text-gray-700">Effortlessly mark trees on the map with just a few clicks using GPS coordinates. This feature allows you to accurately log tree locations, plan job efficiently, and ensure precise tracking. Need to visit a site? Get instant direction to any marked tree with a single click, making navigation seamless and hassle-free</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 rounded-lg py-12 px-4 w-[78%] mx-auto mt-[50px] mb-[50px]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    
    {/* Left Side - Text */}
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
        Ready to streamline your business?
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Take control of your operations with an all-in-one solution designed for arborists. From job management and quotes to customer tracking and invoicing, streamline every aspect of your business with ease. Get started today and work smarter, not harder!
      </p>
    </div>

    {/* Right Side - Images */}
    <div className="flex justify-center items-center relative ">
      <img
        src={cardImg}
        alt="Card"
        className="w-28 md:w-38 lg:w-40 rotate-[-10deg] absolute left-0 bottom-10"
      />
    <img
  src={mobileImg}
  alt="Mobile UI"
  className=" w-20 lg:w-36 ml-20 relative z-10 rotate-[20deg]"
/>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="w-[78%] mx-auto bg-white py-10 border-t-2 border-b-2 border-gray-200">
  <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
    {/* Logo & Contact Info */}
    <div>
      <h4 className="text-2xl font-bold text-green-600">arbTool</h4>
      <p className="text-gray-500 mt-1">Made with 💚 in Guernsey</p>
      <p className="text-gray-600 mt-1">Email: sales@arbtool.co.uk</p>
      <p className="text-gray-600">Phone: +123 456 6908</p>
    </div>

    {/* First Column */}
    <div className="flex justify-center md:justify-start">
      <div className="text-left">
        <h5 className="font-semibold mb-2">Company</h5>
        <ul className="text-gray-600 space-y-1">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Our Work</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>

    {/* Second Column */}
    <div className="flex justify-center md:justify-start">
      <div className="text-left">
        <h5 className="font-semibold mb-2">Company</h5>
        <ul className="text-gray-600 space-y-1">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Our Work</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
    
  </div>

  {/* Bottom Note */}

</footer>

      <div className="text-center text-black text-[15px] mt-8">© 2025 arbTool. All rights reserved.</div>
    </div>
  );
}

const FeatureCard = ({ title }) => (
  <div className=" mx-auto w-[85] md:w-80 border border-2 border-gray-300 p-6 bg-white shadow rounded-xl">
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-gray-600"> Easy assign jobs to your team and track who's available and what they are working on. Lets free with the task pressure and get relaxed with out arbTool. </p>
  </div>
);

const FeatureBox = ({ number, title, bgColor }) => (
  <div className = {`p-6 bg-gray-100 rounded-xl  border-green-600 ${bgColor}`}>
    <span className="text-black text-2xl font-bold bg-white p-2 mb-4  ">{number}</span>
    <h4 className="text-2xl font-semibold mt-2 mb-2 ">{title}</h4>
    <p className="text-gray-600">This feature empowers users to efficiently manage tasks by streamlining operations and reducing manual effort. With intuitive tools and automation capabilities, it helps teams stay organized, prioritize work, and maintain visibility over ongoing projects. Whether you're tracking job progress, sending quotes, or generating invoices.</p>
  </div>
);
