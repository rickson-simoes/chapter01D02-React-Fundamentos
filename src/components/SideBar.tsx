import { HtmlHTMLAttributes } from "react";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({children}:HtmlHTMLAttributes<GenreResponseProps>) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {children}
    </div>

  </nav>
  )
}