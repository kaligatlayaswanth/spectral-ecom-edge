import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    acceptTerms: false,
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle authentication logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 p-2 text-white/70 hover:text-white transition-colors duration-200"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Auth Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-poppins text-white mb-2">
              S-IoT
            </h1>
            <p className="text-gray-400 text-sm">
              Premium IoT Components Collection
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex mb-8 bg-white/5 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                isLogin
                  ? "bg-white text-black shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                !isLogin
                  ? "bg-white text-black shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name - Only for signup */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20"
                  placeholder="Enter your full name"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20 pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password - Only for signup */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white text-sm font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20 pr-10"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Remember Me / Terms */}
            <div className="flex items-center justify-between">
              {isLogin ? (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => handleInputChange("rememberMe", checked)}
                    className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <Label htmlFor="rememberMe" className="text-sm text-gray-300">
                    Remember me
                  </Label>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange("acceptTerms", checked)}
                    className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black"
                    required={!isLogin}
                  />
                  <Label htmlFor="acceptTerms" className="text-sm text-gray-300">
                    I agree to the{" "}
                    <a href="#" className="text-white hover:underline">
                      Terms & Conditions
                    </a>
                  </Label>
                </div>
              )}

              {isLogin && (
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Forgot password?
                </a>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 py-3 text-lg font-semibold"
            >
              {isLogin ? "Login" : "Create Account"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-8">
            <div className="relative">
              <Separator className="bg-white/20" />
              <div className="absolute inset-0 flex justify-center">
                <span className="bg-gradient-to-br from-black via-gray-900 to-black px-4 text-sm text-gray-400">
                  or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex space-x-4">
            <button className="flex-1 flex items-center justify-center py-3 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            <button className="flex-1 flex items-center justify-center py-3 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200">
              <Github className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white hover:underline font-medium"
              >
                {isLogin ? "Sign up" : "Login"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8 space-x-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            Support
          </a>
          <a href="/shop" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            Back to Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
