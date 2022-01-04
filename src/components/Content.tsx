import { memo } from "react"

interface ContentProps {
  categoryName: string;
  children: JSX.Element[];
}

function ContentComponent({ children, categoryName }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {categoryName}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {children}
        </div>
      </main>
    </div>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return prevProps.categoryName === nextProps.categoryName
})