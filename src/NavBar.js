import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "./images/ieeelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="z-10 w-full shadow-xl ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-2">
          <div className="flex items-center justify-between h-20 ">
            <div className="flex items-center w-full justify-between">
              <div className="flex-shrink-0">
                <a
                  href="https://ieeecspesu.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="h-20" src={logo} alt="Workflow" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-middle space-x-9">
                  <a
                    href="https://instagram.com/ieee.cs.pesu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff1c42] px-3 py-2 rounded-md text-lg font-medium"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-4xl hover:text-[#f8a219]"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ieee-cs-pesu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#009bee] pr-3 py-2 rounded-md text-lg font-medium"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-4xl hover:text-[#f8a219]"
                    />
                  </a>

                  <a
                    href="https://ieeecspesu.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border-2 hover:bg-[#f8a219] hover:text-white px-3 py-2 rounded-lg text-lg font-medium align-middle pt-3 pl-3"
                  >
                    Visit IEEE CS PESU
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="text-center pt-6">
                  <a
                    href="https://ieeecspesu.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border-2 hover:bg-[#f8a219] hover:text-white px-3 py-2 rounded-lg text-lg font-medium align-middle pt-3 pl-3"
                  >
                    Visit IEEE CS PESU
                  </a>
                </div>
                <div className="flex justify-center pt-5 space-x-8">
                  <a
                    href="https://instagram.com/ieee.cs.pesu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff1c42] px-3 py-2 rounded-md text-lg font-medium"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-4xl hover:text-[#f8a219]"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ieee-cs-pesu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#009bee] pr-3 py-2 rounded-md text-lg font-medium"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-4xl hover:text-[#f8a219]"
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
