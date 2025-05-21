import headerColor from "./headercolor";
import { imageChanger } from "./imagechanger";
import nameChanger from "./namechanger";

export function refreshUI() {
  headerColor();
  nameChanger();
  imageChanger();
}
