import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, User, Lock, Mail, ArrowLeft } from 'lucide-react';
import LogoDann from '@/assets/LogoDann.png';

type ViewMode = 'login' | 'signup' | 'forgot-password';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('login');
  const { login, signup, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/admin/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (viewMode === 'forgot-password') {
      const { error: resetError } = await resetPassword(email);
      
      if (resetError) {
        setError(resetError.message || 'Gagal mengirim email reset password.');
      } else {
        setSuccess('Email reset password telah dikirim! Periksa inbox Anda.');
        setEmail('');
      }
      setIsLoading(false);
      return;
    }

    if (viewMode === 'signup') {
      const { error: signupError } = await signup(email, password);
      
      if (signupError) {
        setError(signupError.message || 'Pendaftaran gagal. Coba lagi.');
      } else {
        setSuccess('Akun berhasil dibuat! Silakan login.');
        setViewMode('login');
        setPassword('');
      }
      setIsLoading(false);
    } else {
      const { error: loginError } = await login(email, password);

      if (loginError) {
        setError(loginError.message || 'Login gagal. Periksa email dan password Anda.');
        setIsLoading(false);
      } else {
        navigate(from, { replace: true });
      }
    }
  };

  const switchView = (newMode: ViewMode) => {
    setViewMode(newMode);
    setError('');
    setSuccess('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/login-bg.jpg)' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img 
            src={LogoDann} 
            alt="DANN Logo" 
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-white text-center text-2xl font-light tracking-widest mb-8">
          {viewMode === 'login' && 'ADMIN LOGIN'}
          {viewMode === 'signup' && 'DAFTAR AKUN'}
          {viewMode === 'forgot-password' && 'RESET PASSWORD'}
        </h1>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mb-6 bg-red-950/50 border-red-900 text-red-200">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Success Alert */}
        {success && (
          <Alert className="mb-6 bg-green-950/50 border-green-900 text-green-200">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative flex items-center">
            <div className="absolute left-4 flex items-center justify-center">
              {viewMode === 'forgot-password' ? (
                <Mail className="h-5 w-5 text-white/60" strokeWidth={1.5} />
              ) : (
                <User className="h-5 w-5 text-white/60" strokeWidth={1.5} />
              )}
            </div>
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/40 placeholder:tracking-widest placeholder:text-sm px-12 py-4 rounded-none focus:outline-none focus:border-white/60 transition-colors disabled:opacity-50"
            />
          </div>

          {/* Password Input - Hide for forgot password */}
          {viewMode !== 'forgot-password' && (
            <div className="relative flex items-center">
              <div className="absolute left-4 flex items-center justify-center">
                <Lock className="h-5 w-5 text-white/60" strokeWidth={1.5} />
              </div>
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                minLength={6}
                className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/40 placeholder:tracking-widest placeholder:text-sm px-12 py-4 rounded-none focus:outline-none focus:border-white/60 transition-colors disabled:opacity-50"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black font-semibold tracking-wide py-4 rounded-none hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                MEMPROSES...
              </>
            ) : (
              <>
                {viewMode === 'login' && 'LOGIN'}
                {viewMode === 'signup' && 'DAFTAR'}
                {viewMode === 'forgot-password' && 'KIRIM EMAIL RESET'}
              </>
            )}
          </button>

          {/* Links */}
          <div className="flex flex-col items-center gap-3">
            {viewMode === 'login' && (
              <button
                type="button"
                onClick={() => switchView('forgot-password')}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Lupa password?
              </button>
            )}
            
            {viewMode === 'signup' && (
              <button
                type="button"
                onClick={() => switchView('login')}
                className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Login
              </button>
            )}
            
            {viewMode === 'forgot-password' && (
              <button
                type="button"
                onClick={() => switchView('login')}
                className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
