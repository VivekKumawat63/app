import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Calendar, 
  Settings,
  Image,
  MessageSquare,
  BarChart3,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

// Admin Sidebar Component
const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/panel/login');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'treatments', label: 'Treatments', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'media', label: 'Media Library', icon: Image },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">AH</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Admin Panel</h2>
            <p className="text-xs text-gray-400">Agrawal Homeo Clinic</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = () => {
  const stats = [
    { label: 'Total Appointments', value: '127', change: '+12%', color: 'text-green-600' },
    { label: 'Active Patients', value: '89', change: '+5%', color: 'text-blue-600' },
    { label: 'Treatments', value: '15', change: '0%', color: 'text-purple-600' },
    { label: 'Revenue', value: '₹25,400', change: '+18%', color: 'text-green-600' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <Badge variant="secondary" className={stat.color}>
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              'New appointment booked by Rajesh Kumar',
              'Treatment plan updated for skin disorders',
              'Testimonial added by Priya Sharma',
              'Media files uploaded for hair treatment',
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Content Management Component
const ContentManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Plus className="w-4 h-4 mr-2" />
          Add New Content
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Hero Section</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Main Title</label>
                <input className="w-full p-2 border rounded-lg" defaultValue="घर बैठे लीजिए Online इलाज" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subtitle</label>
                <input className="w-full p-2 border rounded-lg" defaultValue="Agrawal Homeo Clinic" />
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Update</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Phone 1</label>
                <input className="w-full p-2 border rounded-lg" defaultValue="+91-7733844557" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone 2</label>
                <input className="w-full p-2 border rounded-lg" defaultValue="+91-7737092577" />
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Update</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Treatments Management Component
const TreatmentManagement = () => {
  const treatments = [
    { id: 1, titleHindi: 'त्वचा संबंधी रोग', titleEnglish: 'Skin Disorder', status: 'Active' },
    { id: 2, titleHindi: 'बालों के रोग', titleEnglish: 'Hair Diseases', status: 'Active' },
    { id: 3, titleHindi: 'एलर्जी रोग', titleEnglish: 'Allergy', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Treatment Management</h1>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Treatment
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Hindi Title</th>
                  <th className="text-left py-3 px-4">English Title</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {treatments.map((treatment) => (
                  <tr key={treatment.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{treatment.id}</td>
                    <td className="py-3 px-4">{treatment.titleHindi}</td>
                    <td className="py-3 px-4">{treatment.titleEnglish}</td>
                    <td className="py-3 px-4">
                      <Badge variant="secondary" className="text-green-600">
                        {treatment.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/panel/login');
    }
  }, [navigate]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'content':
        return <ContentManagement />;
      case 'treatments':
        return <TreatmentManagement />;
      case 'appointments':
        return <div className="text-center py-12 text-gray-500">Appointments management coming soon...</div>;
      case 'media':
        return <div className="text-center py-12 text-gray-500">Media library coming soon...</div>;
      case 'testimonials':
        return <div className="text-center py-12 text-gray-500">Testimonials management coming soon...</div>;
      case 'analytics':
        return <div className="text-center py-12 text-gray-500">Analytics dashboard coming soon...</div>;
      case 'settings':
        return <div className="text-center py-12 text-gray-500">Settings panel coming soon...</div>;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;