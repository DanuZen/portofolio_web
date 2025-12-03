import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, User, Lock } from 'lucide-react';
import LogoDann from '@/assets/LogoDann.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/admin/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (isSignup) {
      const { error: signupError } = await signup(email, password);
      
      if (signupError) {
        setError(signupError.message || 'Pendaftaran gagal. Coba lagi.');
        setIsLoading(false);
      } else {
        setError('');
        setIsLoading(false);
        navigate(from, { replace: true });
      }
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

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mb-6 bg-red-950/50 border-red-900 text-red-200">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <User className="h-5 w-5 text-white/60" strokeWidth={1.5} />
            </div>
            <input
              type="email"
              placeholder="USERNAME"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/40 placeholder:tracking-widest placeholder:text-sm px-12 py-4 rounded-none focus:outline-none focus:border-white/60 transition-colors disabled:opacity-50"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Lock className="h-5 w-5 text-white/60" strokeWidth={1.5} />
            </div>
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/40 placeholder:tracking-widest placeholder:text-sm px-12 py-4 rounded-none focus:outline-none focus:border-white/60 transition-colors disabled:opacity-50"
            />
          </div>

          {/* Login Button */}
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
              isSignup ? 'DAFTAR' : 'LOGIN'
            )}
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignup(!isSignup);
                setError('');
              }}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {isSignup ? 'Sudah punya akun? Masuk' : 'Forgot password?'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
