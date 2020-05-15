import React from "react";

interface ButtonProps {
  label: string;
}

export function Button(props: ButtonProps): any {
  let link: string;

  switch (props.label) {
    case "fcc_facebook":
      link = "https://www.facebook.com/groups/1667915316820460/?ref=bookmarks";
      break;
    case "fcac_facebook":
      link = "https://www.facebook.com/groups/838147516272852/";
      break;
    case "instagram":
      link = "https://www.instagram.com/n9d0g/";
      break;
    case "youtube":
      link =
        "https://www.youtube.com/channel/UCwfnmKKZ8giVd3wtI-p7qvQ?view_as=subscriber";
      break;
    default:
      link = "https://www.google.ca";
      break;
  }

  return (
    <button>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {props.label}
      </a>
    </button>
  );
}
