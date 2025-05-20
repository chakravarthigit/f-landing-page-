import React from "react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been added to our early access list.",
      });
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900"> {/* Removed relative and pb-0 */}
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-flavorsync-darkmaroon dark:text-white mb-4">
            Stay Updated with FlavorSync
          </h2>
          <p className="text-flavorsync-maroon dark:text-gray-300 text-lg mb-8">
            Subscribe to our newsletter for the latest features, restaurant recommendations, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flavorsync-red dark:focus:ring-flavorsync-red"
            />
            <Button className="btn-maroon">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      {/* Removed Parallax decorative elements */}
    </section>
  );
};

export default NewsletterSection;