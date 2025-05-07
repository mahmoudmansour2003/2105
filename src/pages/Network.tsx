import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Users, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Network = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'north', name: 'North' },
    { id: 'south', name: 'South' },
    { id: 'east', name: 'East' },
    { id: 'west', name: 'West' },
    { id: 'central', name: 'Central' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-horizop-charcoal">
      <Header />
      <main className="flex-grow pt-28">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-serif font-extrabold text-horizop-yellow mb-2 drop-shadow-lg italic tracking-wide">INSTALLER NETWORK</h1>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4 mb-8">
                Connect with certified EV charger installers and resellers in your area.
              </p>
            </motion.div>

            {/* Search and Filter Section */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-horizop-gold" />
                  <Input
                    type="text"
                    placeholder="Search by location or company name..."
                    className="pl-10 bg-white/10 border-horizop-gold text-white placeholder:text-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    className="bg-white/10 border border-horizop-gold text-white rounded-md px-4 py-2"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  >
                    {regions.map((region) => (
                      <option key={region.id} value={region.id}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                  <Button className="bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold">
                    <Filter className="mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Network Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-horizop-gold hover:border-horizop-yellow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-horizop-yellow/20 flex items-center justify-center mr-4">
                          <Users className="text-horizop-yellow" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-horizop-yellow">Company Name</h3>
                          <p className="text-gray-400">Certified Installer</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="text-white flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-horizop-gold" />
                          Location, City, Country
                        </p>
                        <p className="text-gray-400">Services: Installation, Maintenance, Support</p>
                      </div>
                      <Button className="w-full bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold">
                        Contact Installer
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Become a Partner Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-serif font-bold text-horizop-yellow mb-4">Become a Certified Partner</h2>
              <p className="text-white mb-8 max-w-2xl mx-auto">
                Join our network of certified installers and resellers. Get access to exclusive training, support, and business opportunities.
              </p>
              <Button className="bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold px-8 py-6 text-lg">
                <UserPlus className="mr-2" />
                Apply Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Network;
