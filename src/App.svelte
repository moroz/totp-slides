<script lang="ts">
  import Enrolment from "./slides/Enrolment.svelte";
  import UNIXTimestamp from "./slides/UNIXTimestamp.svelte";
  import TOTPKey from "./slides/TOTPKey.svelte";
  import HMAC1 from "./slides/HMAC1.svelte";
  import HMAC2 from "./slides/HMAC2.svelte";
  import OTP from "./slides/OTP.svelte";
  import Screenshots from "./slides/Screenshots.svelte";
  import Requirements from "./slides/Requirements.svelte";
  import style from "svelte-highlight/styles/horizon-dark";
  import hljs from "highlight.js/lib/core";
  import c from "highlight.js/lib/languages/c";

  const slides = [
    Screenshots,
    Enrolment,
    Requirements,
    TOTPKey,
    UNIXTimestamp,
    HMAC1,
    HMAC2,
    OTP,
  ];

  const qs = new URLSearchParams(location.search);
  const activeIndex = (() => {
    const param = Number(qs.get("active") ?? "0");
    if (param < 0) return 0;
    if (param >= slides.length - 1) return slides.length - 1;
    return param;
  })();

  let active = $state(activeIndex);
  let Component = $derived(slides[active]);
  hljs.registerLanguage("c", c);

  function setActive(index: number) {
    if (index < 0 || index >= slides.length) return;
    active = index;
    const qs = new URLSearchParams({ active: String(index) });
    history.pushState(null, "", `${location.pathname}?${qs}`);
  }

  function onKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault();
        setActive(active + 1);
        break;

      case "ArrowUp":
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        setActive(active - 1);
        break;
    }
  }
</script>

<svelte:head>
  {@html style}
</svelte:head>

<section>
  <Component />
</section>

<svelte:window onkeydown={onKeyDown} />
