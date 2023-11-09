interface HeaderProps {
  children: string;
  title: string;
}

export const Header = (props: HeaderProps) => (
  <header className="">
    <h2>{props.title}</h2>
    <p>{props.children}</p>
  </header>
);
