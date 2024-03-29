import { memo } from "react"
import { AutoSizer, List, ListRowRenderer } from 'react-virtualized'
import { Button } from "./Button"

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

function SideBarComponent({ genres, selectedGenreId, handleClickButton }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">

        {genres.map(genre =>
          <Button
            id={String(genre.id)}
            key={genre.id}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        )}
      </div>
    </nav>
  )
}

export const SideBar = memo(SideBarComponent)