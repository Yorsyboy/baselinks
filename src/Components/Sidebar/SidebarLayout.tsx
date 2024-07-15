import React from "react"

interface SidebarLayoutProps {
  image?: string | React.ReactElement
  title: string
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ image, title }) => (
  <div className="flex pl-6 my-4 items-center">
    {image && (
      <img src={typeof image === "string" ? image : undefined} className="w-8" alt={title} />
    )}

    {title && (
      <h1 className="pl-4 text-base text-white font-latoLight">
        {title}
      </h1>
    )}
  </div>
)

export default SidebarLayout
