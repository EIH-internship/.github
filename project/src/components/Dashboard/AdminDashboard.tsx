import React, { useState } from 'react';
import { Users, FileText, Building, TrendingUp, Plus, Search, Filter } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { clubs, branches } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { name: 'Total Clubs', value: clubs.length, icon: Users, color: 'bg-blue-500' },
    { name: 'Pending Approvals', value: clubs.filter(c => c.status === 'pending').length, icon: FileText, color: 'bg-yellow-500' },
    { name: 'Active Branches', value: branches.length, icon: Building, color: 'bg-green-500' },
    { name: 'Monthly Growth', value: '+12%', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  const pendingClubs = clubs.filter(club => club.status === 'pending');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'clubs', name: 'Clubs Management' },
    { id: 'branches', name: 'Branches' },
    { id: 'users', name: 'Users' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {user?.role === 'super-admin' ? 'Super Admin Dashboard' : 'Branch Admin Dashboard'}
                </h1>
                <p className="text-gray-600">
                  Welcome back, {user?.name}
                  {user?.branch && ` - ${user.branch}`}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  New Club
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-900">New club registration</p>
                        <p className="text-sm text-blue-700">Literary Society submitted their application</p>
                      </div>
                      <span className="text-xs text-blue-600">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-900">Club approved</p>
                        <p className="text-sm text-green-700">Computer Science Club has been approved</p>
                      </div>
                      <span className="text-xs text-green-600">1 day ago</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Approvals</h3>
                  {pendingClubs.length > 0 ? (
                    <div className="space-y-3">
                      {pendingClubs.map((club) => (
                        <div key={club.id} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                          <div>
                            <p className="font-medium text-yellow-900">{club.name}</p>
                            <p className="text-sm text-yellow-700">{club.branch}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors duration-200">
                              Approve
                            </button>
                            <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors duration-200">
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No pending approvals</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'clubs' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Clubs Management</h3>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search clubs..."
                        className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Club Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Branch
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Members
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {clubs.map((club) => (
                        <tr key={club.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{club.name}</div>
                            <div className="text-sm text-gray-500">{club.president}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {club.branch}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {club.members}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              club.status === 'approved' ? 'bg-green-100 text-green-800' :
                              club.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {club.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'branches' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Branch Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {branches.map((branch) => (
                    <div key={branch.id} className="p-6 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{branch.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{branch.nameAmharic}</p>
                      <p className="text-sm text-gray-500 mb-4">{branch.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {clubs.filter(c => c.branch === branch.name).length} clubs
                        </span>
                        <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                          Manage
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">User Management</h3>
                <p className="text-gray-500">User management functionality would be implemented here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;