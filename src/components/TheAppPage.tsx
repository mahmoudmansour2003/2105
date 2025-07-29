import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if not already present

const TheAppPage: React.FC = () => {
  return (
    <div
      className="the-app-page relative overflow-hidden"
      style={{
        // Removed flex properties from main div
        // Removed padding from here
      }}
    >
      {/* First Section */}
      <div
        className="first-section relative overflow-hidden"
        style={{
          minHeight: '100vh', // Ensure the section takes full viewport height
          display: 'flex', // Use flexbox for content placement within this section
          flexDirection: 'column', // Stack content vertically
          justifyContent: 'center', // Vertically center content
        }}
      >
        {/* Optional: Add an overlay for text readability */}
        <div
          className="absolute inset-0 bg-black/80" // Use Tailwind's bg-black/80 for a strong, consistent overlay
          style={{
            backgroundImage: 'url(/images/pexels-rdne-10376295.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)', // Applied grayscale filter to overlay
          }}
        ></div>
        
        <div className="relative z-10 text-white pl-16 pr-4 pt-24"> {/* Added left padding, removed max-width and horizontal padding classes, Added top padding */}
          <h1 className="text-7xl md:text-8xl font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            GO<br />ANYWHERE<span className="text-horizop-gold">/</span>
          </h1>
          <p className="text-2xl mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Collaborating with our very engaged<br />
            community of EV drivers, we have built<br />
            an app and a map that really has<br />
            got your back - every day, everywhere.
          </p>
          <div className="flex space-x-4"> {/* Kept App Store buttons here */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/images/google play.PNG" alt="Get it on Google Play" style={{ height: '64px' }} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/images/app store .PNG" alt="Download on the App Store" style={{ height: '64px' }} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Second Section */}
      <div
        className="second-section relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/pexels-pixabay-63324.jpg)', // Background image for the second section
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the section takes full viewport height
          display: 'flex', // Use flexbox for content placement within this section
          alignItems: 'center', // Vertically center content
          justifyContent: 'center', // Horizontally center content
        }}
      >
        {/* Optional: Add a black overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-60" style={{ filter: 'grayscale(100%)' }}></div> {/* Reduced black overlay opacity, Added grayscale filter to overlay */}

        {/* Content for the second section */}
        <div className="relative z-10 bg-gray-800 bg-opacity-70 rounded-lg p-8 max-w-3xl text-white text-center"> {/* Added text-center class */}
          <h2 className="text-4xl font-bold mb-4">
            For EV drivers, by EV drivers<span className="text-horizop-gold">/</span> {/* Added heading and yellow slash */}
          </h2>
          <p className="text-lg">
            Thousands of EV drivers are using OCPP everyday. Thanks to their unique contribution and dedication, you can enjoy extra valuable
            information on charge points. And contributing is also a breeze: take pictures, write a comment and upload them - directly in the app.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div
        className="third-section relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/pexels-aaditya-arora-188236-592753.jpg)', // Background image for the third section
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the section takes full viewport height
          display: 'flex', // Use flexbox for content placement within this section
          alignItems: 'center', // Vertically center content
          justifyContent: 'center', // Horizontally center content
          // Removed default text color and size from here
        }}
      >
        {/* Optional: Add a black overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-60" style={{ filter: 'grayscale(100%)' }}></div> {/* Added black overlay with grayscale filter */}

        {/* Content for the third section */}
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-between">
          {/* Text and Buttons Column */}
          <div className="text-white max-w-md pr-8">
            <h2 className="text-5xl font-bold mb-4">
              Find<span className="text-horizop-gold">/</span> {/* Added heading and yellow slash */}
            </h2>
            <p className="text-xl mb-8">
              Search among more than ................ charging points. Slow and free charging? Or blazing fast charging? Use filters to find one that suits you needs.<br />
              Save your favorite charging station so you can access their details faster and monitor their status.
            </p>
            <div className="flex space-x-4"> {/* Kept App Store buttons here */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/google play.PNG" alt="Get it on Google Play" style={{ height: '64px' }} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/app store .PNG" alt="Download on the App Store" style={{ height: '64px' }} />
              </a>
            </div>
          </div>

          {/* Phone Screenshot Column */}
          <div className="flex-shrink-0">
            <img src="/images/375a2ed9-a1a0-4d57-8710-9a58f9fb7144.jpeg" alt="App Screenshot" className="h-96" /> {/* Updated image path */}
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div
        className="fourth-section relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/pexels-maik-poblocki-2170626-10800215.jpg)', // Background image for the fourth section
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the section takes full viewport height
          display: 'flex', // Use flexbox for content placement within this section
          alignItems: 'center', // Vertically center content
          justifyContent: 'center', // Horizontally center content
          // Removed default text color and size from here
        }}
      >
        {/* Optional: Add a black overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-60" style={{ filter: 'grayscale(100%)' }}></div> {/* Added black overlay with grayscale filter */}

        {/* Content for the fourth section */}
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-between">
          {/* Text Column */}
          <div className="text-white max-w-md pr-8">
            <h2 className="text-5xl font-bold mb-4">
              Charge<span className="text-horizop-gold">/</span> {/* Changed slash color to yellow */}
            </h2>
            <p className="text-xl mb-8">
              You can activate charging sessions in just a few taps using our app.<br />
              Alternatively, use the Electropass—our RFID-enabled token. Since some charging stations only accept RFID access, we highly recommend attaching the Electropass to your car keys for quick and convenient use anytime.
            </p>
            <button className="bg-horizop-gold text-white font-bold py-2 px-4 rounded"> {/* Changed button color to yellow */}
              Learn more
            </button>
          </div>

          {/* Phone Screenshot Column */}
          <div className="flex-shrink-0">
            <img src="/images/375a2ed9-a1a0-4d57-8710-9a58f9fb7144.jpeg" alt="App Screenshot" className="h-96" /> {/* Updated image path */}
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div
        className="fifth-section relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/pexels-gustavo-fring-4872022.jpg)', // Background image for the fifth section
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the section takes full viewport height
          display: 'flex', // Use flexbox for content placement within this section
          alignItems: 'center', // Vertically center content
          justifyContent: 'center', // Horizontally center content
          // Removed default text color and size from here
        }}
      >
        {/* Optional: Add a black overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-60" style={{ filter: 'grayscale(100%)' }}></div> {/* Added black overlay with grayscale filter */}

        {/* Content for the fifth section */}
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-between">
          {/* Text Column */}
          <div className="text-white max-w-md pr-8">
            <h2 className="text-5xl font-bold mb-4">
              Manage<span className="text-horizop-gold">/</span> {/* Added heading and yellow slash */}
            </h2>
            <p className="text-xl mb-8">
              Get a complete overview of your charging sessions and payments—all in one place.<br />
              Easily review your session history and access every invoice.<br />
              With OCPPP, you're always in control.
            </p>
            <div className="flex space-x-4"> {/* Kept App Store buttons here */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/google play.PNG" alt="Get it on Google Play" style={{ height: '64px' }} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/app store .PNG" alt="Download on the App Store" style={{ height: '64px' }} />
              </a>
            </div>
          </div>

          {/* Phone Screenshot Column */}
          <div className="flex-shrink-0">
            <img src="/images/375a2ed9-a1a0-4d57-8710-9a58f9fb7144.jpeg" alt="App Screenshot" className="h-96" /> {/* Updated image path */}
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <div
        className="sixth-section relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/pexels-ingo-9816.jpg)', // Background image for the sixth section
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the section takes full viewport height
          display: 'flex', // Use flexbox for content placement within this section
          alignItems: 'center', // Vertically center content
          justifyContent: 'center', // Horizontally center content
          // Removed default text color and size from here
        }}
      >
        {/* Optional: Add a black overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-60" style={{ filter: 'grayscale(100%)' }}></div> {/* Added black overlay with grayscale filter */}

        {/* Content for the sixth section */}
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-between">
          {/* Text Column */}
          <div className="text-white max-w-md pr-8">
            <h2 className="text-5xl font-bold mb-4">
              The power of the community<span className="text-horizop-gold">/</span> {/* Added heading and yellow slash */}
            </h2>
            <p className="text-xl mb-8">
              Discover richer insights about the charging network, thanks to user contributions.<br />
              Check in, add new stations, share comments and photos—<br />
              all directly through the OCPP app.
            </p>
            <div className="flex space-x-4"> {/* Kept App Store buttons here */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/google play.PNG" alt="Get it on Google Play" style={{ height: '64px' }} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/app store .PNG" alt="Download on the App Store" style={{ height: '64px' }} />
              </a>
            </div>
          </div>

          {/* Phone Screenshot Column */}
          <div className="flex-shrink-0">
            <img src="/images/375a2ed9-a1a0-4d57-8710-9a58f9fb7144.jpeg" alt="App Screenshot" className="h-96" /> {/* Updated image path */}
          </div>
        </div>
      </div>

      {/* Seventh Section */}
      <div
        className="seventh-section relative overflow-hidden bg-gray-900 text-white py-16"
        style={{
          // Removed background image styles
          // Removed minHeight here to allow content to determine height
          display: 'flex', // Use flexbox for content placement within this section
          flexDirection: 'column', // Stack content vertically
          alignItems: 'center', // Horizontally center content
          justifyContent: 'center', // Vertically center content (if content is shorter than viewport)
          // Removed default text color and size from here as handled by Tailwind classes
        }}
      >
        {/* Content for the seventh section */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12">
            The app's collaborative features <span className="text-horizop-gold">/</span>
          </h2>

          <div className="flex justify-center space-x-8 mb-12">
            {/* Column 1: Add a charge point */}
            <div className="w-1/3">
              {/* Placeholder Icon */}
              <div className="mb-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl text-white"> {/* Removed mx-auto for left alignment, added text-white for visibility */}
                {/* Replace with actual icon: Location/Pin */}
                📍
              </div>
              <h3 className="text-2xl font-bold text-horizop-gold mb-2 text-left">Start Charging in Seconds</h3>
              <p className="text-lg text-left">
                Did your local supermarket just add a charge point? Notify us directly in<br />
                the app so we can check it and make it official. You are the hero of<br />
                the day.
              </p>
            </div>

            {/* Column 2: Post comments and pictures */}
            <div className="w-1/3">
              {/* Placeholder Icon */}
              <div className="mb-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl text-white"> {/* Removed mx-auto for left alignment, added text-white for visibility */}
                {/* Replace with actual icon: Comments/Chat */}
                💬
              </div>
              <h3 className="text-2xl font-bold text-horizop-gold mb-2 text-left">Stay in Control</h3>
              <p className="text-lg text-left">
                Was the charge point hidden behind a container or was one of the guns<br />
                damaged? By posting comments and sharing pictures, you can really<br />
                help your fellow EV drivers.
              </p>
            </div>

            {/* Column 3: Give a rating */}
            <div className="w-1/3">
              {/* Placeholder Icon */}
              <div className="mb-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl text-white"> {/* Removed mx-auto for left alignment, added text-white for visibility */}
                {/* Replace with actual icon: Star */}
                ⭐
              </div>
              <h3 className="text-2xl font-bold text-horizop-gold mb-2 text-left">Built with the Community</h3>
              <p className="text-lg text-left">
                By contributing to the rating of charge points, you can considerably<br />
                improve the filtering experience of the entire community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Eighth Section */}
      <div
        className="eighth-section relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/pexels-miguel-angel-hernandez-1829570-4650991.jpg)', // Background image for the eighth section
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the section takes full viewport height
          display: 'flex', // Use flexbox for content placement within this section
          flexDirection: 'column', // Stack content vertically
          alignItems: 'center', // Horizontally center content
          justifyContent: 'center', // Vertically center content
        }}
      >
        {/* Optional: Add a black overlay for text readability and grayscale effect */}
        <div className="absolute inset-0 bg-black opacity-60" style={{ filter: 'grayscale(100%)' }}></div> {/* Added black overlay with grayscale filter */}

        {/* Content for the eighth section */}
        <div className="relative z-10 text-white text-center max-w-3xl px-4">
          <h2 className="text-5xl font-bold mb-4">
            Start your business <span className="text-horizop-gold">/</span> {/* Added heading with yellow slash */}
          </h2>
          <p className="text-xl mb-8">
            {/* Placeholder paragraph text */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
            {/* Placeholder button text */}
            Learn More
          </button>
        </div>
      </div>

      {/* Footer Section - Added */}
      <footer className="bg-horizop-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* HORIZOP ENERGY Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">HORIZOP ENERGY</h3>
              <p className="text-gray-300 mb-8">
                Partnering for a smarter, greener future through innovative energy and software solutions.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-300 hover:text-horizop-gold transition-colors">Home</Link></li>
                <li><Link to="/who-we-are" className="text-gray-300 hover:text-horizop-gold transition-colors">Who We Are</Link></li>
                <li><Link to="/partner-with-us" className="text-gray-300 hover:text-horizop-gold transition-colors">Partner With Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-horizop-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <p className="text-gray-300">Email: contact@horizop.com</p>
                <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-300">Address: 123 Energy Street, Suite 100, San Francisco, CA 94105</p>
              </div>
            </div>
            
            {/* App Store Buttons Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get the App</h4>
              <div className="flex flex-col space-y-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/images/google play.PNG" alt="Get it on Google Play" style={{ height: '64px' }} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/images/app store .PNG" alt="Download on the App Store" style={{ height: '64px' }} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-horizop-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-horizop-gold transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-horizop-gold transition-colors">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default TheAppPage; 