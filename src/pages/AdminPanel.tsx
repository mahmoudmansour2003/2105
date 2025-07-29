import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { apiService, User } from '@/services/api';
import { toast } from 'sonner';
import { 
  Users, 
  UserPlus, 
  Settings, 
  BarChart3, 
  Shield, 
  Activity,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

const AdminPanel = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    installers: 0,
    distributors: 0,
    financialCustomers: 0,
    admins: 0
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await apiService.testConnection();
      console.log('API Test:', response);
      
      // For now, we'll use mock data since the backend doesn't have admin endpoints yet
      const mockUsers: User[] = [
        {
          id: 1,
          firstName: 'Admin',
          lastName: 'User',
          email: 'admin@horizonenergy.com',
          companyName: 'Horizon Energy',
          role: 'ADMIN'
        },
        {
          id: 2,
          firstName: 'John',
          lastName: 'Installer',
          email: 'john@installer.com',
          companyName: 'Solar Installations Ltd',
          role: 'INSTALLER',
          installerCertificationNumber: 'CERT-001',
          primaryServiceArea: 'California',
          yearsOfExperience: 5
        },
        {
          id: 3,
          firstName: 'Sarah',
          lastName: 'Distributor',
          email: 'sarah@distributor.com',
          companyName: 'Energy Solutions Inc',
          role: 'DISTRIBUTOR',
          primaryDistributionRegion: 'West Coast',
          estimatedAnnualSalesVolume: '$2M',
          numberOfActiveClients: 150
        }
      ];
      
      setUsers(mockUsers);
      calculateStats(mockUsers);
    } catch (error) {
      console.error('Failed to load users:', error);
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (userList: User[]) => {
    setStats({
      totalUsers: userList.length,
      installers: userList.filter(u => u.role === 'INSTALLER').length,
      distributors: userList.filter(u => u.role === 'DISTRIBUTOR').length,
      financialCustomers: userList.filter(u => u.role === 'FINANCIAL_CUSTOMER').length,
      admins: userList.filter(u => u.role === 'ADMIN').length
    });
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsEditDialogOpen(true);
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setIsViewDialogOpen(true);
  };

  const handleDeleteUser = async (userId: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        // Mock delete - in real implementation, call apiService.deleteUser(userId)
        setUsers(users.filter(u => u.id !== userId));
        toast.success('User deleted successfully');
      } catch (error) {
        toast.error('Failed to delete user');
      }
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'ADMIN': return 'bg-red-500';
      case 'INSTALLER': return 'bg-blue-500';
      case 'DISTRIBUTOR': return 'bg-green-500';
      case 'FINANCIAL_CUSTOMER': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-horizop-ivory to-horizop-gold/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-horizop-gold mx-auto"></div>
              <p className="mt-4 text-horizop-navy">Loading admin panel...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-horizop-ivory to-horizop-gold/10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-horizop-navy mb-2">Admin Panel</h1>
          <p className="text-horizop-navy/70">Manage users and system administration</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-white/80 border-horizop-gold/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-horizop-gold" />
                <div>
                  <p className="text-sm font-medium text-horizop-navy/70">Total Users</p>
                  <p className="text-2xl font-bold text-horizop-navy">{stats.totalUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-horizop-gold/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-horizop-navy/70">Installers</p>
                  <p className="text-2xl font-bold text-horizop-navy">{stats.installers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-horizop-gold/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-sm font-medium text-horizop-navy/70">Distributors</p>
                  <p className="text-2xl font-bold text-horizop-navy">{stats.distributors}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-horizop-gold/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-sm font-medium text-horizop-navy/70">Financial</p>
                  <p className="text-2xl font-bold text-horizop-navy">{stats.financialCustomers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-horizop-gold/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Settings className="h-8 w-8 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-horizop-navy/70">Admins</p>
                  <p className="text-2xl font-bold text-horizop-navy">{stats.admins}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        <Card className="bg-white/80 border-horizop-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-horizop-gold" />
              <span>User Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.firstName} {user.lastName}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.companyName}</TableCell>
                    <TableCell>
                      <Badge className={getRoleBadgeColor(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewUser(user)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditUser(user)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteUser(user.id!)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* View User Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>User Details</DialogTitle>
            </DialogHeader>
            {selectedUser && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <p className="text-sm text-gray-600">
                      {selectedUser.firstName} {selectedUser.lastName}
                    </p>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <p className="text-sm text-gray-600">{selectedUser.email}</p>
                  </div>
                  <div>
                    <Label>Company</Label>
                    <p className="text-sm text-gray-600">{selectedUser.companyName}</p>
                  </div>
                  <div>
                    <Label>Role</Label>
                    <Badge className={getRoleBadgeColor(selectedUser.role)}>
                      {selectedUser.role}
                    </Badge>
                  </div>
                </div>
                
                {selectedUser.role === 'INSTALLER' && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Installer Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Certification Number</Label>
                        <p className="text-sm text-gray-600">
                          {selectedUser.installerCertificationNumber || 'N/A'}
                        </p>
                      </div>
                      <div>
                        <Label>Service Area</Label>
                        <p className="text-sm text-gray-600">
                          {selectedUser.primaryServiceArea || 'N/A'}
                        </p>
                      </div>
                      <div>
                        <Label>Years of Experience</Label>
                        <p className="text-sm text-gray-600">
                          {selectedUser.yearsOfExperience || 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedUser.role === 'DISTRIBUTOR' && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Distributor Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Distribution Region</Label>
                        <p className="text-sm text-gray-600">
                          {selectedUser.primaryDistributionRegion || 'N/A'}
                        </p>
                      </div>
                      <div>
                        <Label>Annual Sales Volume</Label>
                        <p className="text-sm text-gray-600">
                          {selectedUser.estimatedAnnualSalesVolume || 'N/A'}
                        </p>
                      </div>
                      <div>
                        <Label>Active Clients</Label>
                        <p className="text-sm text-gray-600">
                          {selectedUser.numberOfActiveClients || 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Edit User Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
            </DialogHeader>
            {selectedUser && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      defaultValue={selectedUser.firstName}
                      className="border-horizop-gold/40 focus:border-horizop-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      defaultValue={selectedUser.lastName}
                      className="border-horizop-gold/40 focus:border-horizop-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={selectedUser.email}
                      className="border-horizop-gold/40 focus:border-horizop-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      defaultValue={selectedUser.companyName}
                      className="border-horizop-gold/40 focus:border-horizop-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue={selectedUser.role}>
                      <SelectTrigger className="border-horizop-gold/40 focus:border-horizop-gold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ADMIN">Admin</SelectItem>
                        <SelectItem value="INSTALLER">Installer</SelectItem>
                        <SelectItem value="DISTRIBUTOR">Distributor</SelectItem>
                        <SelectItem value="FINANCIAL_CUSTOMER">Financial Customer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsEditDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-horizop-gold text-horizop-navy hover:bg-horizop-navy hover:text-horizop-gold"
                    onClick={() => {
                      toast.success('User updated successfully');
                      setIsEditDialogOpen(false);
                    }}
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminPanel; 