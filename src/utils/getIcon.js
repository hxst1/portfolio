import { icons } from "../data/icons.js";

export function getIcon(iconName, text = "", position = "left") {
  const iconSvg = icons[iconName] || "Icono no encontrado";
  const iconHtml = `<span class='getIcon.icon'>${iconSvg}</span>`;
  const textHtml = text ? `<span class='getIcon.text'>${text}</span>` : "";

  if (position === "left") {
    return iconHtml + textHtml;
  } else if (position === "right") {
    return textHtml + iconHtml;
  }

  return iconHtml;
}
