import React, { useState, createContext, useContext, useEffect } from 'react'

/*
 * 1. Tabs
 * 2. TabList
 * 3. Tab
 * 4. TabPanels
 * 5. TabPanel
 */

const TabsContext = createContext()

//======== #1 Tabs ========

export function Tabs({ children, className }) {
  const [currentTab, setCurrentTab] = useState()
  
  return (
    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

//======== #2 TabList ========

export const TabList = ({ children }) => (
  <header className="flex items-start">
    {children}
  </header>
)

//======== #3 Tab ========

export function Tab({ children, id, active=false }) {
  const {currentTab, setCurrentTab} = useContext(TabsContext)

  useEffect(oldState => {
    if(active) setCurrentTab(id)
  }, [active])

  const borderColor = currentTab === id ? 'border-info-500' : 'border-white'

  return (
    <button
      onClick={(_ => setCurrentTab(id))}
      className={`bg-white | px-2 py-4 mb-8 | focus:outline-none border-b-2 ${borderColor}`}>
      {children}
    </button>
  )
}

//======== #4 TabPanels ========

export const TabPanels = ({ children, className='' }) => (
  <footer className={`h-64 overflow-y-auto | text-gray-500 ${className}`}>
    {children}
  </footer>
)

//======== #5 TabPanel ========

export function TabPanel({ children, target, ...restProps }) {
  const {currentTab} = useContext(TabsContext)

  return (
    <div hidden={currentTab === target ? false : true} {...restProps}>
      {children}
    </div>
  )
}