export default function Footer() {
    return (
      <footer className="bg-black text-white py-10 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-gold font-semibold mb-3">Contact Us</h3>
            <p>New Provdence<br />Nassau, Bahamas</p>
            <p className="mt-2">(242) 429-9422</p>
            <p>BellaAestheticWellness@outlook.com</p>
          </div>
          <div>
            <h3 className="text-gold font-semibold mb-3">Hours</h3>
            <p>Mon - Fri: 9am - 7pm</p>
            <p>Sat: 10am - 5pm</p>
            <p>Sun: Closed</p>
          </div>
          <div>
            <h3 className="text-gold font-semibold mb-3">Book Now</h3>
            <button className="mt-4 bg-gradient-to-r from-gold to-softGold text-black px-5 py-2 rounded-lg font-medium">
              Book Your Consultation
            </button>
          </div>
        </div>
        <p className="text-center mt-10 text-sm text-gray-400">
          © 2025 Bella Aesthetics Contour & Wellness. All rights reserved.
        </p>
      </footer>
    );
  }