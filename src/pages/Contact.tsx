import React from 'react';

const Contact = () => (
  <section className="container mx-auto px-4 py-20 max-w-3xl">
    <h1 className="text-3xl font-bold text-flavorsync-darkmaroon mb-6">Contact Us</h1>
    <p className="text-lg text-flavorsync-maroon mb-4">
      Have questions, feedback, or partnership inquiries? Reach out to the FlavorSync team below.
    </p>
    <ul className="text-flavorsync-maroon">
      <li>Email: <a href="chakrideveloper1@gmail.com" className="underline">chakrideveloper1@gmail.com</a></li>
      <li>Twitter: <a href="https://twitter.com/flavorsync" className="underline" target="_blank" rel="noopener noreferrer">@flavorsync</a></li>
    </ul>
  </section>
);

export default Contact; 