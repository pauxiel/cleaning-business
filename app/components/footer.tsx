export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold text-green-400">Super Clean & Events Inc.</h3>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Sparkling clean, every time! We provide professional cleaning and event organizing services across Niagara Falls and surrounding areas.
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Based in Niagara Falls, ON
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-400">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-400">
              <li><a href="#" className="hover:text-green-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-300">Services</a></li>
              <li><a href="#" className="hover:text-green-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-300">Get a Free Quote</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-green-400">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-400">
              <li>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:superclean.events2024@gmail.com" className="hover:text-green-300">
                  superclean.events2024@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+12899439902" className="hover:text-green-300">
                  +1 (289) 943-9902
                </a>
              </li>
              <li>
                <span className="font-semibold">Address:</span> Niagara Falls, ON
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-6">
              <a href="#" className="hover:text-green-300">
                <span className="sr-only">Facebook</span>
                {/* Replace with a Facebook Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.406.595 24 1.325 24H12.81v-9.294H9.691v-3.622h3.119V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.241l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.315h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.324V1.325C24 .595 23.405 0 22.675 0z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-green-300">
                <span className="sr-only">Twitter</span>
                {/* Replace with a Twitter Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.643 4.937a10.134 10.134 0 01-2.828.775 4.937 4.937 0 002.163-2.724 9.86 9.86 0 01-3.127 1.195 4.928 4.928 0 00-8.384 4.488A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.573 4.903 4.903 0 01-2.231-.616v.061a4.931 4.931 0 003.95 4.828 4.946 4.946 0 01-2.224.084 4.932 4.932 0 004.604 3.419A9.885 9.885 0 010 21.543a13.94 13.94 0 007.548 2.213c9.142 0 14.307-7.721 14.307-14.416 0-.219-.005-.437-.015-.653A10.243 10.243 0 0024 4.557a9.945 9.945 0 01-2.357.641z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-green-300">
                <span className="sr-only">Instagram</span>
                {/* Replace with an Instagram Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.31 3.608 1.285.976.975 1.223 2.242 1.285 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.31 2.633-1.285 3.608-.975.976-2.242 1.223-3.608 1.285-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.31-3.608-1.285-.976-.975-1.223-2.242-1.285-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.31-2.633 1.285-3.608.975-.976 2.242-1.223 3.608-1.285 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.735 0 8.332.013 7.052.072 5.771.13 4.646.349 3.658 1.337c-.988.988-1.207 2.113-1.265 3.394C2.013 5.645 2 6.048 2 12s.013 6.355.072 7.635c.058 1.281.277 2.406 1.265 3.394.988.988 2.113 1.207 3.394 1.265C8.332 23.987 8.735 24 12 24s3.668-.013 4.948-.072c1.281-.058 2.406-.277 3.394-1.265.988-.988 1.207-2.113 1.265-3.394.058-1.28.072-1.683.072-7.635s-.013-6.355-.072-7.635c-.058-1.281-.277-2.406-1.265-3.394-.988-.988-2.113-1.207-3.394-1.265C15.668.013 15.265 0 12 0z"/>
                  <circle cx="12" cy="12" r="3.292"/>
                  <path d="M18.406 4.594a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm leading-6 text-gray-400">
            &copy; 2024 Super Clean & Events Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
