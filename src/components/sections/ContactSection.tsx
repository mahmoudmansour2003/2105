import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    // Show success toast
    toast({
      title: t('contactToastTitle'),
      description: t('contactToastDescription'),
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="elegant-section bg-horizop-ivory">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-horizop-gold font-medium mb-2 tracking-wider text-sm uppercase">{t('contactSubtitle')}</span>
          <h2 className="heading-medium font-serif text-horizop-navy mb-2">{t('contactTitle')}</h2>
          <div className="w-20 h-1 bg-horizop-gold mb-6 mx-auto rounded"></div>
          <p className="text-horizop-navy max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="elegant-card p-10 border-none">
            <h3 className="text-2xl font-serif font-semibold mb-8 text-horizop-navy">{t('contactFormTitle')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactLabelFullName')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-horizop-gold focus:ring focus:ring-horizop-gold focus:ring-opacity-50"
                    placeholder={t('contactPlaceholderFullName')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactLabelEmail')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-horizop-gold focus:ring focus:ring-horizop-gold focus:ring-opacity-50"
                    placeholder={t('contactPlaceholderEmail')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactLabelCompany')}
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-horizop-gold focus:ring focus:ring-horizop-gold focus:ring-opacity-50"
                  placeholder={t('contactPlaceholderCompany')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactLabelMessage')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full border-gray-300 focus:border-horizop-gold focus:ring focus:ring-horizop-gold focus:ring-opacity-50"
                  placeholder={t('contactPlaceholderMessage')}
                />
              </div>
              <Button type="submit" className="bg-horizop-gold hover:bg-horizop-gold/90 text-horizop-black w-full md:w-auto px-8 py-3">
                {t('contactSendMessageButton')}
              </Button>
            </form>
          </div>

          <div className="bg-horizop-navy rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-2xl font-serif font-semibold mb-8 text-white">{t('contactInfoTitle')}</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="mr-4 text-horizop-gold flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-horizop-yellow mb-2">{t('contactInfoEmailTitle')}</h4>
                  <p className="text-gray-300 mt-1">contact@horizopenergy.com</p>
                  <p className="text-gray-300">hr@horizopenergy.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-4 text-horizop-gold flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-horizop-yellow mb-2">{t('contactInfoPhoneTitle')}</h4>
                  <p className="text-gray-300 mt-1">(+216) 55 956 713</p>
                  <p className="text-gray-300">(+216) 53 741 363</p>
                  <p className="text-gray-300">(+31) 68 489 14 99</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-4 text-horizop-gold flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-horizop-yellow mb-2">{t('contactInfoMainAddressTitle')}</h4>
                  <p className="text-gray-300 mt-1">
                    {t('contactInfoMainAddress')}
                    <br />
                    Ariana 2088, Tunisia
                  </p>
                  <p className="text-gray-300 mt-3">
                    <span className="font-bold text-horizop-yellow">{t('contactInfoEuAddressTitle')}</span>
                    <br />
                    {t('contactInfoEuAddress')}
                    <br />
                    2595 AA, THE HAGUE
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-serif font-semibold mb-4">{t('contactOfficeHoursTitle')}</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-medium">{t('contactOfficeHoursWeekdays')}</p>
                  <p className="text-gray-300">{t('contactOfficeHoursWeekdaysTime')}</p>
                </div>
                <div>
                  <p className="font-medium">{t('contactOfficeHoursWeekends')}</p>
                  <p className="text-gray-300">{t('contactOfficeHoursWeekendsTime')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
