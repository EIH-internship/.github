import React from 'react';
import { Users, Clock, FileText, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { Club } from '../../types';

interface ClubCardProps {
  club: Club;
  onViewDetails?: (club: Club) => void;
}

const ClubCard: React.FC<ClubCardProps> = ({ club, onViewDetails }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Club Logo/Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
        {club.logo ? (
          <img
            src={club.logo}
            alt={`${club.name} logo`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Users className="w-10 h-10 text-white" />
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(club.status)}`}>
            {getStatusIcon(club.status)}
            <span className="capitalize">{club.status}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {club.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {club.description}
          </p>
        </div>

        {/* Club Info */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            <span>{club.members} members</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>Founded {new Date(club.createdAt).getFullYear()}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FileText className="w-4 h-4 mr-2" />
            <span>{club.documents.length} documents</span>
          </div>
        </div>

        {/* President */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
            President
          </div>
          <div className="text-sm font-medium text-gray-900">{club.president}</div>
        </div>

        {/* Branch */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
            {club.branch}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails?.(club)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ClubCard;