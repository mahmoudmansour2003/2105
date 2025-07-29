import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/context/AuthContext';
import { User } from '@/services/api';
import { toast } from 'sonner';
import { Loader2, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login, register, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Registration form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState<'INSTALLER' | 'DISTRIBUTOR' | 'FINANCIAL_CUSTOMER'>('INSTALLER');

  // Role-specific states
  const [installerCertificationNumber, setInstallerCertificationNumber] = useState('');
  const [primaryServiceArea, setPrimaryServiceArea] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [primaryDistributionRegion, setPrimaryDistributionRegion] = useState('');
  const [estimatedAnnualSalesVolume, setEstimatedAnnualSalesVolume] = useState('');
  const [numberOfActiveClients, setNumberOfActiveClients] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [estimatedInvestmentCapital, setEstimatedInvestmentCapital] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginEmail || !loginPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    const success = await login({
      email: loginEmail,
      password: loginPassword
    });

    if (success) {
      navigate('/home');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !companyName) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    const userData: User = {
      firstName,
      lastName,
      email,
      password,
      companyName,
      role,
      ...(role === 'INSTALLER' && {
        installerCertificationNumber,
        primaryServiceArea,
        yearsOfExperience: yearsOfExperience ? parseInt(yearsOfExperience) : undefined
      }),
      ...(role === 'DISTRIBUTOR' && {
        primaryDistributionRegion,
        estimatedAnnualSalesVolume,
        numberOfActiveClients: numberOfActiveClients ? parseInt(numberOfActiveClients) : undefined
      }),
      ...(role === 'FINANCIAL_CUSTOMER' && {
        areaOfInterest,
        estimatedInvestmentCapital,
        preferredContactMethod
      })
    };

    const success = await register(userData);

    if (success) {
      navigate('/home');
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCompanyName('');
    setRole('INSTALLER');
    setInstallerCertificationNumber('');
    setPrimaryServiceArea('');
    setYearsOfExperience('');
    setPrimaryDistributionRegion('');
    setEstimatedAnnualSalesVolume('');
    setNumberOfActiveClients('');
    setAreaOfInterest('');
    setEstimatedInvestmentCapital('');
    setPreferredContactMethod('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-horizop-ivory to-horizop-gold/10">
      <div className="flex flex-col items-center py-10">
        <img src="/images/HE_Carr_text.png" alt="HORIZOP ENERGY logo" className="h-20 mb-6" />
        <h1 className="text-5xl font-extrabold text-horizop-navy mb-2 tracking-tight text-center">
          Welcome to Horizon Energy
        </h1>
        <p className="text-lg text-horizop-navy/80 mb-10 text-center">
          Connect, collaborate, and grow with our energy community
        </p>
        
        <Card className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl border border-horizop-gold/20">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-horizop-navy">
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="text-horizop-navy">Sign In</TabsTrigger>
                <TabsTrigger value="register" className="text-horizop-navy">Register</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
              <div>
                    <Label htmlFor="login-email" className="text-horizop-navy font-semibold">
                      Email Address
                    </Label>
                <Input
                      id="login-email"
                  type="email"
                      placeholder="Enter your email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                  required
                      className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                />
              </div>

              <div>
                    <Label htmlFor="login-password" className="text-horizop-navy font-semibold">
                      Password
                    </Label>
                    <div className="relative mt-2">
                <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                  required
                        className="bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy pr-10"
                />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-horizop-navy/60 hover:text-horizop-gold"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
              </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-horizop-gold text-horizop-navy font-bold rounded-full py-3 shadow hover:bg-horizop-navy hover:text-horizop-gold transition"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </Button>

                  <div className="text-center">
                    <p className="text-horizop-navy/60">
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setActiveTab('register')}
                        className="text-horizop-gold hover:text-horizop-navy font-medium transition"
                      >
                        Create one here
                      </button>
                    </p>
              </div>
            </form>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
              <div>
                      <Label htmlFor="firstName" className="text-horizop-navy font-semibold">
                        First Name *
                      </Label>
                <Input
                        id="firstName"
                  type="text"
                        placeholder="Enter first name"
                  value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                  required
                        className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                />
              </div>
              <div>
                      <Label htmlFor="lastName" className="text-horizop-navy font-semibold">
                        Last Name *
                      </Label>
                <Input
                        id="lastName"
                  type="text"
                        placeholder="Enter last name"
                  value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                  required
                        className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                />
              </div>
              </div>

                  <div>
                    <Label htmlFor="email" className="text-horizop-navy font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyName" className="text-horizop-navy font-semibold">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Enter company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                    />
                  </div>

                  <div>
                    <Label htmlFor="role" className="text-horizop-navy font-semibold">
                      Role *
                    </Label>
                    <Select value={role} onValueChange={(value: any) => setRole(value)}>
                      <SelectTrigger className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INSTALLER">Installer</SelectItem>
                        <SelectItem value="DISTRIBUTOR">Distributor</SelectItem>
                        <SelectItem value="FINANCIAL_CUSTOMER">Financial Customer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password" className="text-horizop-navy font-semibold">
                        Password *
                      </Label>
                      <div className="relative mt-2">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-horizop-navy/60 hover:text-horizop-gold"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword" className="text-horizop-navy font-semibold">
                        Confirm Password *
                      </Label>
                      <div className="relative mt-2">
                    <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          className="bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy pr-10"
                    />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-horizop-navy/60 hover:text-horizop-gold"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Role-specific fields */}
                  {role === 'INSTALLER' && (
                    <div className="space-y-4 p-4 bg-horizop-gold/10 rounded-lg">
                      <h4 className="font-semibold text-horizop-navy">Installer Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="certNumber" className="text-horizop-navy font-semibold">
                            Certification Number
                          </Label>
                          <Input
                            id="certNumber"
                            type="text"
                            placeholder="Enter certification number"
                            value={installerCertificationNumber}
                            onChange={(e) => setInstallerCertificationNumber(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                          />
                        </div>
                        <div>
                          <Label htmlFor="serviceArea" className="text-horizop-navy font-semibold">
                            Primary Service Area
                          </Label>
                          <Input
                            id="serviceArea"
                            type="text"
                            placeholder="Enter service area"
                            value={primaryServiceArea}
                            onChange={(e) => setPrimaryServiceArea(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                          />
                        </div>
                        <div>
                          <Label htmlFor="experience" className="text-horizop-navy font-semibold">
                            Years of Experience
                          </Label>
                          <Input
                            id="experience"
                            type="number"
                            placeholder="Enter years of experience"
                            value={yearsOfExperience}
                            onChange={(e) => setYearsOfExperience(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {role === 'DISTRIBUTOR' && (
                    <div className="space-y-4 p-4 bg-horizop-gold/10 rounded-lg">
                      <h4 className="font-semibold text-horizop-navy">Distributor Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                  <div>
                          <Label htmlFor="distributionRegion" className="text-horizop-navy font-semibold">
                            Primary Distribution Region
                          </Label>
                    <Input
                            id="distributionRegion"
                      type="text"
                            placeholder="Enter distribution region"
                      value={primaryDistributionRegion}
                            onChange={(e) => setPrimaryDistributionRegion(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                    />
                  </div>
                  <div>
                          <Label htmlFor="salesVolume" className="text-horizop-navy font-semibold">
                            Estimated Annual Sales Volume
                          </Label>
                    <Input
                            id="salesVolume"
                      type="text"
                            placeholder="Enter sales volume"
                      value={estimatedAnnualSalesVolume}
                            onChange={(e) => setEstimatedAnnualSalesVolume(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                    />
                  </div>
                  <div>
                          <Label htmlFor="activeClients" className="text-horizop-navy font-semibold">
                            Number of Active Clients
                          </Label>
                    <Input
                            id="activeClients"
                      type="number"
                            placeholder="Enter number of clients"
                      value={numberOfActiveClients}
                            onChange={(e) => setNumberOfActiveClients(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                    />
                  </div>
                      </div>
                    </div>
              )}

                  {role === 'FINANCIAL_CUSTOMER' && (
                    <div className="space-y-4 p-4 bg-horizop-gold/10 rounded-lg">
                      <h4 className="font-semibold text-horizop-navy">Financial Customer Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                  <div>
                          <Label htmlFor="areaOfInterest" className="text-horizop-navy font-semibold">
                            Area of Interest
                          </Label>
                    <Input
                            id="areaOfInterest"
                      type="text"
                            placeholder="Enter area of interest"
                      value={areaOfInterest}
                            onChange={(e) => setAreaOfInterest(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                    />
                  </div>
                  <div>
                          <Label htmlFor="investmentCapital" className="text-horizop-navy font-semibold">
                            Estimated Investment Capital
                          </Label>
                    <Input
                            id="investmentCapital"
                      type="text"
                            placeholder="Enter investment capital"
                      value={estimatedInvestmentCapital}
                            onChange={(e) => setEstimatedInvestmentCapital(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                    />
                  </div>
                  <div>
                          <Label htmlFor="contactMethod" className="text-horizop-navy font-semibold">
                            Preferred Contact Method
                          </Label>
                          <Input
                            id="contactMethod"
                            type="text"
                            placeholder="Enter preferred contact method"
                      value={preferredContactMethod}
                            onChange={(e) => setPreferredContactMethod(e.target.value)}
                            className="mt-2 bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-horizop-gold text-horizop-navy font-bold rounded-full py-3 shadow hover:bg-horizop-navy hover:text-horizop-gold transition"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>

                  <div className="text-center">
                    <p className="text-horizop-navy/60">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setActiveTab('login')}
                        className="text-horizop-gold hover:text-horizop-navy font-medium transition"
                      >
                        Sign in here
                      </button>
                    </p>
                  </div>
            </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login; 