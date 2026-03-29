import React from "react";
import Icon from "./icon";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3 text-white">
      <Icon name="icon-[ri--linkedin-fill]" />
      <Icon name="icon-[ri--facebook-fill]" />
      <Icon name="icon-[ri--twitter-x-line]" />
    </div>
  );
}
