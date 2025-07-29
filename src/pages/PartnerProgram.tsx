import React from 'react';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Download, Calendar, Users, Award } from 'lucide-react'; // Assuming these icons are still needed or replace with appropriate ones
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next'; // Keep useTranslation if needed for other parts, or remove if not
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PartnerProgram = () => {
  const { t } = useTranslation(); // Keep if translations are used on this page
  const navigate = useNavigate();

  const handleJoinProgramClick = () => {
    // You might want this button to scroll to a section on this page or go to a specific signup form
    // For now, let's keep it navigating to /partner-portal as before, but we can change this.
    navigate('/partner-portal'); // Or navigate('#benefits-section') if adding section ID
  };

  return (
    <div className="min-h-screen flex flex-col bg-horizop-charcoal">
      <main className="flex-grow">
        {/* Horizop Energy installers Hero Section */}
        <section 
          className="relative py-16 px-4 text-white min-h-screen flex items-center justify-center"
          style={{ backgroundImage: 'url(/images/pexels-jakubzerdzicki-28851165.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
          <div className="max-w-7xl mx-auto relative z-10"> {/* Added relative z-10 for content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-circular font-extrabold text-white mb-4 drop-shadow-lg italic tracking-wide">{t('partnerProgramPage.mainTitle')}</h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-circular font-extrabold text-white mb-16 drop-shadow-lg italic tracking-wide">{t('partnerProgramPage.mainSubtitle')}</h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-circular text-white max-w-4xl mx-auto mt-4 mb-8" dangerouslySetInnerHTML={{ __html: t('partnerProgramPage.mainDescription') }}>
              </p>
              <div className="flex justify-center my-8">
                <Link to="/login">
                  <Button className="bg-horizop-gold text-horizop-navy font-bold px-8 py-4 rounded-full shadow-lg hover:bg-horizop-navy hover:text-horizop-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-opacity-50">
                    {t('partnerProgramPage.joinButton')}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Why join our installer network? Section */}
            <section className="py-16 px-4 text-horizop-navy">
              <div className="max-w-7xl mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Card 1: Get Certified - Moved from above */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                    className="transform transition-all duration-300"
                  >
                    <Card className="bg-horizop-navy text-white shadow-none border border-horizop-gold/20 rounded-lg h-full flex flex-col items-center justify-center p-6 text-center"> {/* Added border and height */}
                      <CardContent className="flex flex-col items-center justify-center p-0"> {/* Adjusted padding */}
                        <div className="w-16 h-16 rounded-full bg-horizop-gold bg-opacity-10 flex items-center justify-center mb-4"> {/* Increased size */}
                          <BookOpen className="text-horizop-gold" size={32} /> {/* Increased icon size */}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{t('partnerProgramPage.getCertifiedTitle')}</h3>
                      <p className="text-white text-sm">
                        {t('partnerProgramPage.getCertifiedDescription')}
                      </p>
                    </CardContent>
                  </Card>
                  </motion.div>

                  {/* Card 2: Start Installing - Moved from above */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                    className="transform transition-all duration-300"
                  >
                    <Card className="bg-horizop-navy text-white shadow-none border border-horizop-gold/20 rounded-lg h-full flex flex-col items-center justify-center p-6 text-center"> 
                      <CardContent className="flex flex-col items-center justify-center p-0">
                       <div className="w-16 h-16 rounded-full bg-horizop-gold bg-opacity-10 flex items-center justify-center mb-4">
                        <Users className="text-horizop-gold" size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{t('partnerProgramPage.startInstallingTitle')}</h3>
                      <p className="text-white text-sm">
                        {t('partnerProgramPage.startInstallingDescription')}
                      </p>
                    </CardContent>
                  </Card>
                  </motion.div>

                  {/* Card 3: Level Up - Moved from above */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                    className="transform transition-all duration-300"
                  >
                    <Card className="bg-horizop-navy text-white shadow-none border border-horizop-gold/20 rounded-lg h-full flex flex-col items-center justify-center p-6 text-center"> 
                      <CardContent className="flex flex-col items-center justify-center p-0">
                       <div className="w-16 h-16 rounded-full bg-horizop-gold bg-opacity-10 flex items-center justify-center mb-4">
                        <Award className="text-horizop-gold" size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{t('partnerProgramPage.levelUpTitle')}</h3>
                      <p className="text-white text-sm">
                        {t('partnerProgramPage.levelUpDescription')}
                      </p>
                    </CardContent>
                  </Card>
                  </motion.div>

                  {/* Card 4: Free Certification - Moved from above */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                    className="transform transition-all duration-300"
                  >
                    <Card className="bg-horizop-navy text-white shadow-none border border-horizop-gold/20 rounded-lg h-full flex flex-col items-center justify-center p-6 text-center"> 
                      <CardContent className="flex flex-col items-center justify-center p-0">
                       <div className="w-16 h-16 rounded-full bg-horizop-gold bg-opacity-10 flex items-center justify-center mb-4">
                        <Calendar className="text-horizop-gold" size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{t('partnerProgramPage.freeCertificationTitle')}</h3>
                      <p className="text-white text-sm">
                        {t('partnerProgramPage.freeCertificationDescription')}
                      </p>
                    </CardContent>
                  </Card>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Bar between installer and distributor sections */}
            <div className="border-b border-gray-300 mx-auto max-w-7xl my-12"></div>

            {/* New Section with 2 Cards - Basic Structure */}
            <section className="py-16 px-4 bg-white text-horizop-navy">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-serif font-bold mb-2">{t('partnerProgramPage.distributorNetworkTitle')}</h2>
                <p className="text-2xl font-circular mb-12">{t('partnerProgramPage.distributorNetworkSubtitle')}</p>

                {/* Cards Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                  {/* Card 1 Placeholder */}
                  <div className="w-full md:w-1/2 lg:w-1/3" style={{ maxWidth: '380px' }}>
                    <div className="relative w-full h-96 rounded-lg shadow-xl overflow-hidden">
                      {/* Front of Card - now contains image AND text */}
                      <div 
                        className="absolute w-full h-full rounded-lg"
                      >
                        <img src="/images/pexels-gustavo-fring-4872022.jpg" alt="Expanded Product Portfolio" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> {/* Overlay */}
                        <div className="relative z-30 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">{t('partnerProgramPage.expandedPortfolioTitle')}</h3>
                            <p className="text-sm">{t('partnerProgramPage.expandedPortfolioDescription')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 Placeholder */}
                  <div className="w-full md:w-1/2 lg:w-1/3" style={{ maxWidth: '380px' }}>
                    <div className="relative w-full h-96 rounded-lg shadow-xl overflow-hidden">
                      {/* Front of Card - now contains image AND text */}
                      <div 
                        className="absolute w-full h-full rounded-lg"
                      >
                        <img src="/images/pexels-maik-poblocki-2170626-10800215.jpg" alt="Strong Partnership & Support" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> {/* Overlay */}
                        <div className="relative z-30 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">{t('partnerProgramPage.strongPartnershipTitle')}</h3>
                            <p className="text-sm">{t('partnerProgramPage.strongPartnershipDescription')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Bar between distributor sections */}
            <div className="border-b border-gray-300 mx-auto max-w-7xl my-12"></div>

            {/* Why join our distributor network? Section */}
            <section className="py-16 px-4 bg-white text-horizop-navy">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-serif font-bold mb-2">{t('partnerProgramPage.distributorNetworkTitle')}</h2>
                <p className="text-2xl font-circular mb-12">{t('partnerProgramPage.distributorNetworkSubtitle')}</p>

                {/* Cards Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                  {/* Card 1 Placeholder */}
                  <div className="w-full md:w-1/2 lg:w-1/3" style={{ maxWidth: '380px' }}>
                    <div className="relative w-full h-96 rounded-lg shadow-xl overflow-hidden">
                      {/* Front of Card - now contains image AND text */}
                      <div 
                        className="absolute w-full h-full rounded-lg"
                      >
                        <img src="/images/pexels-gustavo-fring-4872022.jpg" alt="Expanded Product Portfolio" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> {/* Overlay */}
                        <div className="relative z-30 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">{t('partnerProgramPage.expandedPortfolioTitle')}</h3>
                            <p className="text-sm">{t('partnerProgramPage.expandedPortfolioDescription')}</p>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 Placeholder */}
                  <div className="w-full md:w-1/2 lg:w-1/3" style={{ maxWidth: '380px' }}>
                    <div className="relative w-full h-96 rounded-lg shadow-xl overflow-hidden">
                      {/* Front of Card - now contains image AND text */}
                      <div 
                        className="absolute w-full h-full rounded-lg"
                      >
                        <img src="/images/pexels-maik-poblocki-2170626-10800215.jpg" alt="Strong Partnership & Support" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> {/* Overlay */}
                        <div className="relative z-30 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">{t('partnerProgramPage.strongPartnershipTitle')}</h3>
                            <p className="text-sm">{t('partnerProgramPage.strongPartnershipDescription')}</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

          </div>
        </section>

        {/* New section resembling 'Powerful is just the beginning' */}
        <section className="py-16 px-4 bg-white text-horizop-navy text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Horizop Energy: The Future of Charging</h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Embrace the next era of electric vehicle charging with Horizop Energy. Our innovative solutions are designed to be intuitive, efficient, and seamlessly integrated into your life or business, making the transition to electric easier and more powerful than ever before.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Become a Certified Installer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-horizop-navy py-16 px-4 md:py-24 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Become a certified Horizop Energy installer</h2>
            <p className="text-white mb-8 max-w-2xl mx-auto md:mx-0">
              Become a master Horizop Energy AC installer. Get an official certificate and more benefits. Sign up in 5 minutes!
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/images/pexels-magda-ehlers-pexels-15158968.jpg" alt="Wallbox installer looking at phone" className="rounded-lg shadow-xl max-h-[400px] w-auto" />
          </div>
        </motion.div>

            {/* Call to Action Section for Partner Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center pb-12 bg-horizop-charcoal text-white py-16"
            >
              <h2 className="text-4xl font-bold text-horizop-gold mb-6">Ready to partner with us?</h2>
              <Link to="/partner-portal">
                <Button className="bg-horizop-gold text-horizop-navy hover:bg-horizop-navy hover:text-horizop-gold text-lg px-8 py-4 rounded-full shadow-lg font-semibold">
                  Join the program
                </Button>
              </Link>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PartnerProgram; 