import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ShoppingBag } from 'lucide-react'; // Import icons

const QuoteRequest = () => {
  const navigate = useNavigate();

  // State for form fields (basic structure)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    postcode: '',
    houseNumber: '',
    placeName: '',
    businessOrPrivate: '',
    wallOrPost: '',
    dynamicLoadBalancing: '',
    crawlSpace: '',
    numberOfCars: '',
    distanceToMeter: '',
    meterBoxAppearance: '',
    remarks: '',
    hasWifi: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form Data Submitted:', formData);
    alert('Quote request submitted!'); // Placeholder feedback
    // navigate('/'); // Optionally navigate after submission
  };

  // Options for dropdowns in English
  const businessPrivateOptions = ['Business', 'Private'];
  const howManyCarsOptions = ['1', '2', '3 or more'];
  const wallPostOptions = ['On the wall', 'On a post'];
  const distanceOptions = ['< 5 meters', '5-15 meters', '> 15 meters'];
  const meterBoxAppearanceOptions = ['Standard', 'Complex']; // Placeholder, adjust if screenshot shows options
  const yesNoOptions = ['Yes', 'No'];


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Section - Horizop Theme */}
        <div className="w-full lg:w-1/3 bg-horizop-navy text-horizop-white p-8 flex flex-col justify-between">
          <div>
            {/* Title and Subtitle - English Text */}
            <h1 className="text-4xl font-bold mb-2">Request Your Personalized Quote Directly Online</h1> 
            <h2 className="text-3xl font-bold mb-6">for a HORIZOP Product!</h2> {/* Generic Product Title */}

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-horizop-gold text-black rounded-full font-bold mr-4">1</div>
                <div>
                  <h2 className="text-xl font-semibold">Personal Contact</h2> 
                  <p className="text-sm text-horizop-lightYellow">We will contact you within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-horizop-gold text-black rounded-full font-bold mr-4">2</div>
                <div>
                  <h2 className="text-xl font-semibold">On-site Advice</h2> 
                  <p className="text-sm text-horizop-lightYellow">Our specialist will be at your door within a few days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-horizop-gold text-black rounded-full font-bold mr-4">3</div>
                <div>
                  <h2 className="text-xl font-semibold">Professional Installation</h2> 
                  <p className="text-sm text-horizop-lightYellow">Expertly installed within 14 working days.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info and Image Placeholder - English Text */}
          <div className="mt-10 flex flex-col items-center lg:items-start">
             <div className="mb-6 text-horizop-lightYellow">
              <p className="text-sm">Prefer to call? You can reach us at</p> {/* Adjusted text */}
              <p className="text-lg font-semibold text-horizop-yellow">+123 456 7890</p> {/* Using placeholder number and theme color */}
             </div>
             {/* Placeholder for a relevant image if available, otherwise keep or remove */}
             {/* <img src="/images/placeholder_person.png" alt="Contact Person" className="w-32 h-32 rounded-full object-cover" /> */}
          </div>
        </div>

        {/* Right Form Section - Matching Horizop Theme */}
        <div className="w-full lg:w-2/3 p-8 lg:p-12 flex flex-col bg-gray-100">
          {/* Product Info - Updated for Horizop SmartPlug */}
          <div className="flex items-center mb-8">
            {/* Product Image - Horizop SmartPlug */}
            <img src="/images/smartplug.png" alt="HORIZOP SmartPlug" className="w-24 h-auto mr-6" /> 
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">HORIZOP SmartPlug</h2> 
              <p className="text-xl text-gray-700">Starting from <span className="font-bold">€649,-</span></p> {/* Using SmartPlug price */}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-6 text-gray-800">Quote Request</h3> 

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Form Fields - Styling adjusted */}
            <div>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name*" className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required />
            </div>
            <div>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name*" className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required />
            </div>
            <div>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number*" className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required />
            </div>
            <div>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address*" className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required />
            </div>
            <div>
              <input type="text" id="postcode" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Postcode*" className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required />
            </div>
            <div>
              <input type="text" id="houseNumber" name="houseNumber" value={formData.houseNumber} onChange={handleChange} placeholder="House Number*" className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required />
            </div>
            <div className="md:col-span-2">
              <input type="text" id="placeName" name="placeName" value={formData.placeName} onChange={handleChange} placeholder="Place Name (City/Town)*" className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required />
            </div>

            {/* Dropdown Section - Styling adjusted */}
            <div>
              <select id="businessOrPrivate" name="businessOrPrivate" value={formData.businessOrPrivate} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required>
                <option value="">Business or Private?*</option>
                {businessPrivateOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
             <div>
              <select id="numberOfCars" name="numberOfCars" value={formData.numberOfCars} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required>
                <option value="">How many cars?*</option>
                {howManyCarsOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
             <div>
              <select id="wallOrPost" name="wallOrPost" value={formData.wallOrPost} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required>
                <option value="">On the wall or post?*</option>
                {wallPostOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
             <div>
              <select id="distanceToMeter" name="distanceToMeter" value={formData.distanceToMeter} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required>
                <option value="">Distance from charging point to meter box?*</option>
                {distanceOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <select id="dynamicLoadBalancing" name="dynamicLoadBalancing" value={formData.dynamicLoadBalancing} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required>
                <option value="">Do you want Dynamic Load Balancing?*</option>
                {yesNoOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
             <div>
              <select id="meterBoxAppearance" name="meterBoxAppearance" value={formData.meterBoxAppearance} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required>
                <option value="">What does your meter box look like?*</option>
                {meterBoxAppearanceOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <select id="hasWifi" name="hasWifi" value={formData.hasWifi} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150" required>
                <option value="">Is Wi-Fi available at the location?*</option>
                {yesNoOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
             {/* Crawl space field is not in screenshot, omitting */}

            <div className="md:col-span-2">
              <textarea id="remarks" name="remarks" rows={4} value={formData.remarks} onChange={handleChange} placeholder="Remarks" className="w-full border-gray-300 rounded-md shadow-sm focus:border-horizop-gold focus:ring-horizop-gold px-2 py-1 text-sm transition ease-in-out duration-150"></textarea>
            </div>

            <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-end mt-4">
              {/* Prices exclude VAT text and toggle - English Text */}
               <div className="flex items-center mr-4 mb-4 md:mb-0 text-sm text-gray-700">
                <span>Prices exclude VAT.</span> 
                {/* Simple Toggle Switch - Styling adjusted for theme */}
                <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="priceToggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer toggle-checkbox-horizop-gold"/> {/* Using theme color class */}
                    <label htmlFor="priceToggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer toggle-label-horizop-gold"></label> {/* Using theme color class */}
                </div>
              </div>
              {/* Submit button - Styled with theme color */}
              <button type="submit" className="bg-horizop-gold text-black py-3 px-8 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 hover:bg-horizop-gold/90 transition w-full md:w-auto">
                Submit <span className="text-xl ml-2">→</span> 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest; 