import Image from 'next/image'
import React from 'react'
import logo from '../../Images/Home/logo_thick.png'

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-white">
  <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2">
      <div
        className="py-8 border-b border-gray-100 lg:order-last lg:border-b-0 lg:border-l lg:py-16 lg:pl-16"
      >
        <div className="block text-purple-700 lg:hidden">
        <Image src={logo} alt='ACT' className='w-20'/>
        AJAX-CORE-TECHS
        </div>

        <div className="mt-8 space-y-4 lg:mt-0">
          <span className="hidden w-10 h-1 bg-teal-500 rounded lg:block"></span>

          <div>
            <h2 className="text-2xl font-medium text-gray-900">Connect and Converse</h2>
          </div>

            <label htmlFor="UserEmail" className="sr-only"> Email </label>

            <div
              className="p-2 border border-gray-100 rounded-md focus-within:ring sm:flex sm:items-center sm:gap-4"
            >
             
              <button
                className="w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white uppercase transition-none bg-purple-500 rounded hover:bg-purple-600 sm:mt-0 sm:w-auto sm:flex-shrink-0"
              >
                Sign Up
              </button>
            </div>
        </div>
      </div>

      <div className="py-8 lg:py-16 lg:pr-16">
      

        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3">
          <div>
            <p className="font-medium text-gray-900">Services</p>

            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-sm">

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Account Settings
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Developer
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-900">Company</p>

            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Meet the Team
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-900">Helpful Links</p>

            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Help
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    FAQs
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Live Chat
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100">
          <nav aria-label="Footer Navigation - Support">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>
          </nav>

          <p className="mt-8 text-xs text-gray-500">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer