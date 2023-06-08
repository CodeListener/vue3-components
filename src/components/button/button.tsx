import { defineComponent } from "vue";
import "uno.css";

export default defineComponent({
  name: "ButtonJsx",
  setup(props, ctx) {
    return () => {
      return <button class="bg-blue">{ctx.slots?.default?.()}</button>;
    };
  },
});
