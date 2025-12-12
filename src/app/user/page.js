export default function UserPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          User Dashboard
        </h1>

        {/* Profile Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 text-white mb-8">
          <div className="flex items-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-600 text-2xl font-bold">
              JD
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-indigo-100">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Account Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="text-gray-900 font-medium">January 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Account Type</p>
                <p className="text-gray-900 font-medium">Premium</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Stats
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-indigo-600">12</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tasks Completed</p>
                <p className="text-2xl font-bold text-green-600">89</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-4"></div>
              <div>
                <p className="text-gray-900 font-medium">
                  Completed project review
                </p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4"></div>
              <div>
                <p className="text-gray-900 font-medium">
                  Updated profile information
                </p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
              <div>
                <p className="text-gray-900 font-medium">Started new project</p>
                <p className="text-sm text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
