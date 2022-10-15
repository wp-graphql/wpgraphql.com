import React, { useContext, useState } from "react"

const TemplateDataContext = React.createContext({})

export function TemplateDataProvider({ children }) {
  const [templateData, setTemplateData] = useState({})

  return (
    <TemplateDataContext.Provider value={{ templateData, setTemplateData }}>
      {children}
    </TemplateDataContext.Provider>
  )
}

export const useTemplateData = () => {
  const { templateData, setTemplateData } = useContext(TemplateDataContext)
  return { templateData, setTemplateData }
}
