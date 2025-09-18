import { LoginForm } from '../components/LoginForm';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Section */}
      <div className="flex flex-1">
        {/* Left Side - Visual/Branding */}
        <div className="hidden lg:flex lg:w-1/2 h-[100vh] bg-gradient-to-br from-[#F97316] to-[#E65100] relative overflow-hidden">


          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20"></div>
            <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-white/15"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white/10"></div>
            <div className="absolute bottom-32 right-10 w-20 h-20 rounded-full bg-white/25"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
            {/* Logo and Branding */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2zm0 2.18L18.18 7 12 10.82 5.82 7 12 4.18zM4 8.27l7 3.64v7.81C6.91 19.1 4 16.63 4 13V8.27zm16 4.73c0 3.63-2.91 6.1-7 6.72v-7.81l7-3.64V13z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm opacity-90">Government of India</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight">
                  PM Internship Scheme
                </h1>
                <p className="text-xl opacity-90 max-w-md">
                  Shaping Skills, Building Futures
                </p>
                <p className="text-base opacity-75 max-w-lg">
                  Empowering youth through industry partnerships and hands-on learning experiences that bridge the gap between education and employment.
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex-1 flex ">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1640163561337-b0d4161f7ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtpbmclMjBpbnRlcm5zaGlwJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODIxOTc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students working together in a professional environment"
                  className="rounded-2xl shadow-2xl opacity-90 w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Bottom Stats/Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-75">Active Interns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-75">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-75">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2zm0 2.18L18.18 7 12 10.82 5.82 7 12 4.18zM4 8.27l7 3.64v7.81C6.91 19.1 4 16.63 4 13V8.27zm16 4.73c0 3.63-2.91 6.1-7 6.72v-7.81l7-3.64V13z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h2 className="font-bold text-foreground">PM Internship Scheme</h2>
                  <p className="text-sm text-muted-foreground">Government of India</p>
                </div>
              </div>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer >
        
      </footer>
    </div>
  );
}
