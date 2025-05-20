import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useToast } from "@/hooks/use-toast"; // Import useToast

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast(); // Initialize useToast

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Removed handleDownloadClick function

  const downloadLink = "https://drive.google.com/file/d/1aN4uh_RKdFo7ciBM-a9hS3OIBkE3r5E6/view?usp=drive_link";

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl md:text-3xl font-bold text-flavorsync-red dark:text-flavorsync-red">
            FlavorSync
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">Features</a>
          <a href="#how-it-works" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">How it Works</a>
          <a href="#testimonials" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">Reviews</a>
          <ThemeToggle />
          <a href={downloadLink} target="_blank" rel="noopener noreferrer"> {/* Changed to <a> tag */}
            <Button className="btn-maroon">Download</Button> {/* Button inside <a> */}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
        <button 
            className="text-flavorsync-darkmaroon dark:text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          )}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#features" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
            <a href="#testimonials" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
            <a href={downloadLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}> {/* Changed to <a> tag, added close menu on click */}
              <Button className="btn-maroon w-full">Download</Button> {/* Button inside <a> */}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
