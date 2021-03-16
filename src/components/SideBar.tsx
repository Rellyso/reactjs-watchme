interface SidebarProps {
  title: string | JSX.Element;
  children: JSX.Element[];
}

export function SideBar({ children, title }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>{title}</span>

      <div className="buttons-container">
        {children}
      </div>
    </nav>
  )
}