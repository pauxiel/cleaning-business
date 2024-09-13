import { ClipboardDocumentIcon, BuildingOfficeIcon, CalendarIcon, SparklesIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Residential Cleaning',
    description:
      'Keep your home spotless with our one-time, weekly, bi-weekly, or monthly cleaning services. Tailored to fit your schedule and lifestyle.',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Commercial & Industrial Cleaning',
    description:
      'From daily office upkeep to industrial-level cleaning, we provide specialized cleaning services that keep your workspace safe and professional.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Event Cleanup & Organizing',
    description:
      'Hosting an event? Leave the pre and post-cleanup to us while we assist with seamless event organization, ensuring everything runs smoothly.',
    icon: CalendarIcon,
  },
  {
    name: 'Specialty & Deep Cleaning',
    description:
      'We offer deep cleaning, green cleaning, and specialized services like window cleaning, scrubbing, and sanitizing tailored to specific needs.',
    icon: SparklesIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transforming Spaces & Events, One Service at a Time
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From pristine cleaning to professional event organizing, Super Clean & Events Inc. is dedicated to delivering
            top-notch services that leave a lasting impression.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <service.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
