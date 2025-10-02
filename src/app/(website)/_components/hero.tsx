import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300">

      {/* Hero Section */}
      <section className="relative py-40 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 opacity-40">
          {/* Optionally add a background image */}
          {/* <Image
            alt="Hero background"
            src="/path-to-your-image.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-50"
          /> */}
        </div>
        <div className="container mx-auto text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Discover the Future of Streaming with Opal
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            AI-powered tools for seamless live streaming and content creation. Perfect for creators, gamers, and professionals.
          </p>
          <Link href="/auth/sign-in">
            <Button className="text-lg bg-purple-600 text-black py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-white">What is Opal?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Opal is the next-gen platform that brings AI-powered tools to your live streams and content creation. Perfect for creators who want to grow their audience effortlessly.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-white">Features You'll Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">AI-Powered Streaming</h3>
              <p className="text-lg">
                Enhance your content with AI-driven features for flawless streaming every time.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Seamless Integration</h3>
              <p className="text-lg">
                Effortlessly integrate with your favorite streaming tools, apps, and devices.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Community Engagement</h3>
              <p className="text-lg">
                Grow your audience and engage with your community like never before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-white">What Users Are Saying</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-xs hover:shadow-lg transition duration-300 ease-in-out">
              <p className="text-lg mb-4">"Opal revolutionized my streaming experience! The AI features are a game changer."</p>
              <p className="font-semibold">Jane Doe, Content Creator</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-xs hover:shadow-lg transition duration-300 ease-in-out">
              <p className="text-lg mb-4">"The ease of integration with other apps makes Opal the perfect platform for me."</p>
              <p className="font-semibold">John Smith, Gamer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Opal. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/about" className="hover:text-purple-600">About</Link>
            <Link href="/contact" className="hover:text-purple-600">Contact</Link>
            <Link href="/terms" className="hover:text-purple-600">Terms</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default HomePage
