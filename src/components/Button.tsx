import React from "react";

export const socialMediaButtons = [
  "FCC Facebook Page",
  "FCAC Facebook Page",
  "FCC Instagram",
  "FCC YouTube",
];

interface ButtonProps {
  label: string;
}

export function SocialButtonItem(props: ButtonProps): any {
  let link: string;

  switch (props.label) {
    case "FCC Facebook Page":
      link = "https://www.facebook.com/groups/1667915316820460/?ref=bookmarks";
      break;
    case "FCAC Facebook Page":
      link = "https://www.facebook.com/groups/838147516272852/";
      break;
    case "FCC Instagram":
      link = "https://www.instagram.com/n9d0g/";
      break;
    case "FCC YouTube":
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

export function SocialButtons(): any {
  return (
    <div>
      {socialMediaButtons.map((label) => {
        return <SocialButtonItem label={label} />;
      })}
    </div>
  );
}
