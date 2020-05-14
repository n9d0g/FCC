import React from "react";

interface ButtonProps {
  label: string;
}

export function Button(props: ButtonProps): any {
  let link: string;

  if (props.label === "facebook") {
    link = "https://www.facebook.com/groups/1667915316820460/?ref=bookmarks";
  } else if (props.label === "instagram") {
    link = "https://www.instagram.com/n9d0g/";
  } else {
    link = "google.ca";
  }

  return (
    <button>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {props.label}
      </a>
    </button>
  );
}
