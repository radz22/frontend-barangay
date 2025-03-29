import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse-subtle"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px] animate-pulse-subtle"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="glass dark:glass-dark rounded-full p-4 animate-scale-in">
              <ShieldAlert className="h-10 w-10 text-[#7F265B]" />
            </div>
          </div>

          <div
            className="glass dark:glass-dark rounded-xl p-6 md:p-8 mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-2xl font-semibold tracking-tight mb-2 text-center">
              Unauthorized Access
            </h1>
            <p className="text-muted-foreground text-center mb-6">
              You don't have permission to access this page.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => navigate(-1)} // Navigate back
                className="flex items-center justify-center w-full py-2.5 px-4 bg-[#7F265B] hover:bg-[#7F265B]/90 text-white rounded-lg transition-all duration-200 font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </button>
            </div>
          </div>

          <p
            className="text-sm text-muted-foreground text-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            If you believe this is a mistake, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
