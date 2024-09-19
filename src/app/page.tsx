'use client'

import './style.css'
import { useState } from "react";
import { initialTabs as tabs } from "@/components/seccion";
import { motion, AnimatePresence } from "framer-motion";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";





export default function Home() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <>
      <div className="window">
        <Disclosure as="nav" className="bg-[#D5C6B4] fixed top-0 left-0 right-0  z-10 text-black ">
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0  items-center sm:hidden">

                <DisclosureButton className="bg-[#D5C6B4]  relative inline-flex items-center justify-center p-2 mt-3 rounded-md group   focus:outline-none focus:ring-2 focus:ring-inset">
                  {/* Mobile menu button */}
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-7 w-7 group-data-[open]:hidden " />
                  <XMarkIcon aria-hidden="true" className="hidden h-7 w-7 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              <div className="flex justify-center w-full sm:w-auto sm:justify-start items-center flex-shrink-0">
                <img
                  src="/trasparente.png"
                  alt="Marca"
                  className="w-16"
                />
              </div>
              <div className="hidden sm:flex items-center justify-end flex-1">

                <div className="sm:ml-6 ">
                  <div className="flex space-x-4">
                    <ul className=" flex gap-5 text-lg">
                      {tabs.map((item) => (
                        <li
                          key={item.label}
                          className={item === selectedTab ? "selected" : ""}
                          onClick={() => setSelectedTab(item)}
                        >
                          {`${item.label}`}
                          {item === selectedTab ? (
                            <motion.div className="underline" layoutId="underline" />
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* <div>
                             <ButtonLogin />
                         </div> */}
              </div>
            </div>
          </div>

          {/* Diseño en vista movil del panel de navegacion */}
          <DisclosurePanel transition className=" backdrop-blur-md  fixed left-0 right-0 min-h-screen origin-top-left transition duration-500  data-[closed]:scale-95 data-[closed]:opacity-0 md:hidden">
            <motion.div
              className="h-full"
              animate={{ transform: 'translateX(40%)' }}
              transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 }}
              style={{ transform: 'translateX(100%)' }}  //Estado inicial
            >
              <nav className="bg-[#D5C6B4] fixed top-0 bottom-0 px-2 min-h-screen w-60 pt-2 pb-3  space-y-1">
                <motion.div className="mt-10 text-lg block px-4"
                  animate={{ transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' }}
                  transition={{ delay: 0.3 }}
                >
                  <ul className="space-y-4">
                    {tabs.map((item) => (
                      <li
                        key={item.label}
                        className="text-xl"
                        // className={`${ item === selectedTab ? "selected" : ""} text-xl w-20`}
                        onClick={() => setSelectedTab(item)}
                        
                      >
                        {`${item.label}`}
                        {item === selectedTab ? (
                          <motion.div className="underline" layoutId="underline" />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                  {/* <div className="w-full">
                                <ButtonLogin />
                            </div>  */}
                </motion.div>
              </nav>
            </motion.div>

          </DisclosurePanel>
        </Disclosure>

        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.content : ""}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>








    </>
  );
}
