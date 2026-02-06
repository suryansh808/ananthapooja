import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Menu,
  Bell,
  Search,
  BellRing,
  BellDot,
  UserPlusIcon,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  {
    name: "Add Operation",
    icon: UserPlusIcon,
    href: "/admin/addoperationteam",
  },
  { name: "Add Purohit", icon: UserPlusIcon, href: "/admin/addpurohit" },
  { name: "Consultancy Query", icon: BellRing, href: "/admin/cosultancyquery" },
  { name: "Pooja Booked", icon: BellDot, href: "/admin/poojabooked" },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="max-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 z-40 h-full md:min-h-screen bg-white border-r transition-all duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        ${sidebarOpen ? "md:w-64" : "md:w-16"} w-64`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b px-4">
          {sidebarOpen ? (
            <>
              <span className="font-serif text-xl font-bold bg-linear-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Anantha
              </span>
              <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                Admin
              </span>
            </>
          ) : (
            <span className="font-bold text-yellow-500">A</span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              title={!sidebarOpen ? item.name : ""}
              onClick={() => {
                if (window.innerWidth < 768) setSidebarOpen(false);
              }}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-3 py-2 rounded-lg transition
                 ${isActive ? "bg-yellow-100 text-yellow-700 font-semibold" : "text-black hover:bg-yellow-50 hover:text-yellow-700"}
                 ${!sidebarOpen ? "md:justify-center" : ""}`
              }
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {sidebarOpen && <span>{item.name}</span>}
            </NavLink>
          ))}
          <div className="p-2 border-t">
            <button
              onClick={handleLogout}
              className={`group w-full flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-red-600 hover:bg-red-50 transition
    ${!sidebarOpen ? "md:justify-center" : ""}`}
              title={!sidebarOpen ? "Logout" : ""}
            >
              <LogOut className="h-5 w-5 shrink-0" />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </nav>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 relative">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)}>
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
              </button>

              {/* Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg border z-50">
                  <div className="p-3 border-b font-semibold text-sm">
                    Notifications
                  </div>
                  <div className="max-h-60 overflow-y-auto text-sm">
                    <div className="p-3 hover:bg-gray-50 cursor-pointer">
                      New booking received
                    </div>
                    <div className="p-3 hover:bg-gray-50 cursor-pointer">
                      New consultancy query
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <span className="text-sm font-bold text-yellow-700">A</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-scroll max-h-screen no-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
