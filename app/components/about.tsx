export default function AboutUs() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Professional Cleaning and Event Organizing Company in Niagara Falls
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Based in the heart of Niagara Falls, Super Clean & Events Inc. is fully insured, bonded, and trusted by our local community.
            We specialize in both residential and commercial cleaning, offering eco-friendly solutions that ensure spotless results.
            Whether you need routine cleaning, deep cleans, or event organizing services, we are here to help you maintain a sparkling clean
            space every time.
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Commitment</h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our team of trained professionals is dedicated to exceeding your expectations by providing high-quality services.
            From flexible scheduling to specialized cleaning techniques, we aim to create a healthy and hygienic environment for both homes
            and businesses.
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-green-600">Fully Insured</h4>
            <p className="mt-2 text-gray-600">
              We are fully insured and bonded, ensuring you’re covered every step of the way.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-green-600">Eco-Friendly Solutions</h4>
            <p className="mt-2 text-gray-600">
              We prioritize eco-friendly products to protect both your space and the environment.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-green-600">Based in Niagara Falls</h4>
            <p className="mt-2 text-gray-600">
              Proudly serving Niagara Falls and the surrounding areas with top-notch cleaning and event services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
