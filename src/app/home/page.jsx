import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Menu, Search, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <main>
        <section className="relative bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover Your Perfect Hoodie</h1>
              <p className="text-xl text-gray-600 mb-6">Comfort meets style in our exclusive collection.</p>
              <Link href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Shop Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/home.jpg"
                alt="Featured Hoodie"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="/placeholder.svg"
                      alt={`Hoodie ${item}`}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Comfort Hoodie</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$49.99</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                View All Collections
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

