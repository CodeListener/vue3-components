import { App } from "vue";
import ButtonJsx from "./button/button";
import ButtonSfc from "./button/button.vue";
export default function (app: App) {
  console.log(ButtonJsx.name, ButtonSfc.name);
  app.component(ButtonJsx.name, ButtonJsx);
  app.component(ButtonSfc.name, ButtonSfc);
}

export { ButtonSfc, ButtonJsx };
