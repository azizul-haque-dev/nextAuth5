export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-gray-600 text-sm font-medium">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">1,234</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-gray-600 text-sm font-medium">
              Active Sessions
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">456</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-gray-600 text-sm font-medium">Total Revenue</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">$12,345</p>
          </div>
        </div>

        {/* Simple Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">John Doe</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  john@example.com
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Jane Smith</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  jane@example.com
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Bob Wilson</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  bob@example.com
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                    Inactive
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
