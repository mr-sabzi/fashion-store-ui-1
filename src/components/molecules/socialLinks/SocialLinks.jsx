import React from "react";
import H6 from "../../atoms/h6/H6";
import Icon from "../../atoms/icon/Icon";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 whitespace-nowrap">
      <H6>Follow Us :</H6>
      <a href="">
        <Icon name="instagram" />
      </a>
      <a href="">
        <Icon name="youtube" />
      </a>
      <a href="">
        <Icon name="facebook" />
      </a>
      <a href="">
        <Icon name="twitter" />
      </a>
    </div>
  );
}
