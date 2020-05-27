import React from "react";

export const navTabs = ["about", "contact", "sermons", "ministries", "beliefs"];

interface NavBarProps {
  link: string;
}

export function NavBarItem(props: NavBarProps): any {
  return <li>{props.link}</li>;
}

export function NavBar(): any {
  return (
    <div>
      {navTabs.map((link) => {
        return <NavBarItem link={link} />;
      })}
    </div>
  );
}
