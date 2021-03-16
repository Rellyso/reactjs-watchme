interface ContentProps {
  categoryName: string;
  children: JSX.Element[];
}

export function Content({ children, categoryName }: ContentProps) {
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