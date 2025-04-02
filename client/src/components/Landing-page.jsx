import {
    Heart,
    AlertCircle,
    MapPin,
    Wifi,
    Mic,
    MessageSquare,
    Bell,
    ArrowRight,
    Phone,
    Clock,
    CheckCircle2,
  } from "lucide-react"
  
  export default function Home() {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="container mx-auto px-4 flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold">MedAI</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-sm font-medium hover:text-red-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-red-600 transition-colors">
                How It Works
              </a>
            </nav>
            <button className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors">
              Login
            </button>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-red-50 to-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                Emergency Response at Your Fingertips
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Emergency Medical Response & First Aid Guide
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                AI-powered emergency assistance that provides real-time first-aid instructions, locates nearby hospitals,
                and sends SOS alerts when you need help the most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="px-6 py-3 rounded-md border border-red-600 text-red-600 hover:bg-red-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-red-50">
                  <img
                    src="/placeholder.svg?height=800&width=400"
                    alt="MedAI App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">SOS Alert Sent</p>
                      <p className="text-xs text-gray-500">Help is on the way</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Emergency Stats */}
        <section className="py-12 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold">4-6 min</p>
                <p className="text-sm opacity-80">Average Emergency Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">80%</p>
                <p className="text-sm opacity-80">Of Emergencies Require First Aid</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">3x</p>
                <p className="text-sm opacity-80">Faster Response with MedAI</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Life-Saving Features at Your Fingertips</h2>
              <p className="text-gray-600">
                Our AI-powered platform provides comprehensive emergency medical assistance when you need it most, even
                without internet access.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">SOS Emergency Alert</h3>
                <p className="text-gray-500 mb-4">Instant notification to emergency contacts</p>
                <p className="text-gray-600">
                  With a single tap, alert your emergency contacts with your exact location and medical information.
                  Integrates with ambulance services for direct help.
                </p>
              </div>
  
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Chatbot</h3>
                <p className="text-gray-500 mb-4">Step-by-step first-aid guidance</p>
                <p className="text-gray-600">
                  Our AI understands emergency queries and provides instant, personalized first-aid instructions based on
                  the situation.
                </p>
              </div>
  
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Voice Input Support</h3>
                <p className="text-gray-500 mb-4">Hands-free assistance for emergencies</p>
                <p className="text-gray-600">
                  Describe symptoms or emergencies using voice commands when your hands are occupied providing care or in
                  crisis situations.
                </p>
              </div>
  
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Offline Access</h3>
                <p className="text-gray-500 mb-4">Essential first-aid info without internet</p>
                <p className="text-gray-600">
                  Access critical first-aid information even without an internet connection, ensuring help is available in
                  remote locations.
                </p>
              </div>
  
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hospital Locator</h3>
                <p className="text-gray-500 mb-4">Find nearest medical facilities in real-time</p>
                <p className="text-gray-600">
                  Quickly locate the nearest hospitals, clinics, and emergency rooms with real-time directions and
                  estimated arrival times.
                </p>
              </div>
  
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Medical Profile</h3>
                <p className="text-gray-500 mb-4">Share critical health information</p>
                <p className="text-gray-600">
                  Store important medical information like allergies, conditions, and medications that can be shared with
                  emergency responders.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How MedAI Works</h2>
              <p className="text-gray-600">
                Our app is designed to be intuitive and fast, providing critical assistance when every second counts.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Describe the Emergency</h3>
                <p className="text-gray-600">
                  Use text or voice to quickly describe the emergency situation or symptoms. Our AI will understand the
                  context and severity.
                </p>
              </div>
  
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Get Instant Guidance</h3>
                <p className="text-gray-600">
                  Receive step-by-step first aid instructions tailored to the specific emergency, with visual guides and
                  clear directions.
                </p>
              </div>
  
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Connect with Help</h3>
                <p className="text-gray-600">
                  If needed, activate SOS to alert emergency contacts, find nearby hospitals, or connect with emergency
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lives Saved with MedAI</h2>
              <p className="text-gray-600">Real stories from people who used our app in emergency situations.</p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mb-4">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="User"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Hiking Accident</p>
                </div>
                <p className="text-gray-600 text-center">
                  "The offline first-aid guide helped me treat my friend's sprained ankle during our hike in a remote area
                  with no cell service. Invaluable tool!"
                </p>
              </div>
  
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mb-4">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="User"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Michael Chen</h3>
                  <p className="text-sm text-gray-500">Allergic Reaction</p>
                </div>
                <p className="text-gray-600 text-center">
                  "When my son had an unexpected allergic reaction, the app guided me through the steps while
                  simultaneously alerting my wife and finding the nearest ER."
                </p>
              </div>
  
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mb-4">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="User"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-500">Cardiac Emergency</p>
                </div>
                <p className="text-gray-600 text-center">
                  "The voice-guided CPR instructions helped me assist my neighbor until paramedics arrived. The doctors
                  said those first minutes were crucial."
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Download CTA */}
        <section id="download" className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Prepared for Any Emergency</h2>
                <p className="text-lg opacity-90 mb-8">
                  Download MedAI today and have peace of mind knowing you're prepared for medical emergencies. Available
                  on iOS and Android.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 rounded-md bg-white text-red-600 hover:bg-gray-100 transition-colors flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm.5 16.5h-1v-6h-2v-1h5v1h-2v6zm.5-10a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    App Store
                  </button>
                  <button className="px-6 py-3 rounded-md bg-white text-red-600 hover:bg-gray-100 transition-colors flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 3h14v14H3V3zm7 2L5 10l5 5 5-5-5-5z" />
                    </svg>
                    Google Play
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-red-500 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-red-400 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                      <Heart className="h-16 w-16 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features List */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose MedAI?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Medical-Grade AI</h3>
                      <p className="text-gray-600">
                        Our AI is trained on medical protocols and updated regularly with the latest first-aid guidelines.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Works Offline</h3>
                      <p className="text-gray-600">
                        Critical features work without internet connection, ensuring help is available anywhere.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Privacy-Focused</h3>
                      <p className="text-gray-600">
                        Your medical data is encrypted and never shared without your explicit permission.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Regular Updates</h3>
                      <p className="text-gray-600">
                        We continuously improve our AI and add new features based on medical expert feedback.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 bg-red-100 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-red-600" />
                      <p className="text-sm font-medium">Response in seconds, not minutes</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-red-100 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-red-600" />
                      <p className="text-sm font-medium">One-tap emergency calls</p>
                    </div>
                  </div>
                  <div className="w-64 h-64 rounded-lg overflow-hidden border-8 border-gray-100 shadow-xl">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="MedAI App Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-xl font-bold">MedAI</span>
                </div>
                <p className="text-gray-400">
                  AI-powered emergency medical response and first aid guidance at your fingertips.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} MedAI. All rights reserved.</p>
              <p className="mt-2 text-sm">
                This app is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the
                advice of your physician or other qualified health provider.
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  