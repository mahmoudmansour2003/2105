import React from 'react';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Download, Calendar, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Training = () => {
  const { t } = useTranslation();

  const courses = [
    {
      titleKey: 'trainingCourseIrveFundamentalsTitle',
      descriptionKey: 'trainingCourseIrveFundamentalsDesc',
      durationKey: 'trainingCourseDuration3Days',
      levelKey: 'trainingCourseLevelBeginner',
      icon: <BookOpen className="text-horizop-yellow" />
    },
    {
      titleKey: 'trainingCourseAdvancedIrveTitle',
      descriptionKey: 'trainingCourseAdvancedIrveDesc',
      durationKey: 'trainingCourseDuration5Days',
      levelKey: 'trainingCourseLevelAdvanced',
      icon: <Award className="text-horizop-yellow" />
    },
    {
      titleKey: 'trainingCourseMaintenanceTitle',
      descriptionKey: 'trainingCourseMaintenanceDesc',
      durationKey: 'trainingCourseDuration2Days',
      levelKey: 'trainingCourseLevelIntermediate',
      icon: <Users className="text-horizop-yellow" />
    }
  ];

  const resources = [
    {
      titleKey: 'trainingResourceInstallationGuideTitle',
      typeKey: 'trainingResourceTypePDF',
      size: '2.4 MB',
      icon: <Download className="text-horizop-yellow" />
    },
    {
      titleKey: 'trainingResourceSafetyManualTitle',
      typeKey: 'trainingResourceTypePDF',
      size: '1.8 MB',
      icon: <Download className="text-horizop-yellow" />
    },
    {
      titleKey: 'trainingResourceTechSpecsTitle',
      typeKey: 'trainingResourceTypePDF',
      size: '3.2 MB',
      icon: <Download className="text-horizop-yellow" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-horizop-charcoal">
      <main className="flex-grow">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-serif font-extrabold text-horizop-yellow mb-2 drop-shadow-lg italic tracking-wide">IRVE TRAINING</h1>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4 mb-8">
                Comprehensive training programs for EV charging infrastructure professionals.
              </p>
            </motion.div>

            {/* Upcoming Courses */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-horizop-yellow mb-8 text-center">Upcoming Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 border-horizop-gold hover:border-horizop-yellow transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-horizop-yellow/20 flex items-center justify-center mr-4">
                            {course.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-horizop-yellow">{course.title}</h3>
                            <p className="text-gray-400">{course.level}</p>
                          </div>
                        </div>
                        <p className="text-white mb-4">{course.description}</p>
                        <div className="flex items-center text-gray-400 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{course.duration}</span>
                        </div>
                        <Button className="w-full bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold">
                          Register Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Training Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-horizop-yellow mb-8 text-center">Training Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 border-horizop-gold hover:border-horizop-yellow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-horizop-yellow/20 flex items-center justify-center mr-4">
                            {resource.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-horizop-yellow">{resource.title}</h3>
                            <p className="text-gray-400">{resource.type} • {resource.size}</p>
                          </div>
                        </div>
                        <Button className="w-full bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold">
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Card className="bg-white/5 border-horizop-gold">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-horizop-yellow mb-6 text-center">Request Information</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-white mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white mb-2">Course Interest</label>
                      <select className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white">
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course.title}>{course.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white"
                        placeholder="Tell us about your training needs"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold py-6 text-lg">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training; 