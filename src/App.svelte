<script lang="ts">
  import Enrolment from "./slides/Enrolment.svelte";
  import TOTPKey from "./slides/TOTPKey.svelte";

  const slides = [Enrolment, TOTPKey];

  let active = $state(0);
  let Component = $derived(slides[active]);

  function onKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault();
        if (active >= slides.length - 1) return;
        active++;
        break;

      case "ArrowUp":
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        if (active <= 0) return;
        active--;
        break;
    }
  }
</script>

<section>
  <Component />
</section>

<svelte:window onkeydown={onKeyDown} />
