import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LayoutDashboard, FolderKanban, Settings, Menu, LogOut, User, Moon, Sun, ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';
import LogoDann from '@/assets/LogoDann.png';
const menuItems = [{
  title: 'Dashboard',
  icon: LayoutDashboard,
  href: '/admin/dashboard'
}, {
  title: 'Projects',
  icon: FolderKanban,
  href: '/admin/projects'
}, {
  title: 'Settings',
  icon: Settings,
  href: '/admin/settings'
}];
export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    user,
    logout
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    theme,
    setTheme
  } = useTheme();
  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };
  const SidebarContent = () => <div className="flex flex-col h-full bg-background">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <img src={LogoDann} alt="DANN Logo" className="h-10 w-auto object-contain" />
          <div>
            <h1 className="text-lg font-semibold tracking-widest text-foreground">
              ADMIN
            </h1>
            <p className="text-xs text-muted-foreground tracking-wide">
              Panel Management
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-6">
        <nav className="space-y-1">
          {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return <Link key={item.href} to={item.href} onClick={() => setSidebarOpen(false)} className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${isActive ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}>
                <Icon className="h-5 w-5" strokeWidth={1.5} />
                <span className="font-medium tracking-wide text-sm">{item.title}</span>
              </Link>;
        })}
        </nav>
      </ScrollArea>

      {/* User Info */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-3 bg-accent/50">
          <Avatar className="h-10 w-10 border border-border">
            <AvatarFallback className="bg-foreground text-background font-semibold">
              {user?.email?.charAt(0).toUpperCase() || 'A'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {user?.email || 'Admin'}
            </p>
            <p className="text-xs text-muted-foreground">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>;
  return <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-background border-r border-border">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64 bg-background border-border">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-lg px-4 lg:px-6">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </Button>

          {/* Breadcrumb or Page Title */}
          <div className="flex-1">
            <h2 className="text-sm font-medium tracking-widest uppercase text-foreground">
              {menuItems.find(item => item.href === location.pathname)?.title || 'Dashboard'}
            </h2>
          </div>

          {/* Back to Website Button */}
          <Button variant="ghost" size="icon" asChild className="h-9 w-9">
            <Link to="/">
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </Button>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="h-9 w-9">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" strokeWidth={1.5} />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" strokeWidth={1.5} />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            
            <DropdownMenuContent align="end" className="w-56 bg-background border-border">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium text-foreground">{user?.email || 'Admin'}</p>
                  <p className="text-xs text-muted-foreground">
                    {user?.role || 'Administrator'}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem onClick={() => navigate('/admin/settings')} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/admin/settings')} className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>;
}