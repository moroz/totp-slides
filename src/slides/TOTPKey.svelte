<script lang="ts">
  import Binary from "../components/Binary.svelte";
  import { SHARED_SECRET, SHARED_SECRET_BIN } from "../lib/config";

  let time = $state(Math.floor(Date.now() / 1000));
  let T = $derived(Math.floor(time / 30));

  let Tbytes = $derived.by(() => {
    const buf = new ArrayBuffer(8);
    const view = new DataView(buf);
    view.setUint32(4, T, false);
    return Array.from(new Uint8Array(buf));
  });

  $effect(() => {
    const interval = setInterval(() => {
      time = Math.floor(Date.now() / 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<h2>1. Decode shared secret</h2>

<p>
  The secret is provided to the user in Base32, but we only really care about
  its binary form:
</p>

<table class="mapping">
  <thead>
    <tr>
      <th colspan="32">Shared secret (Base32)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {#each SHARED_SECRET.split("") as char}
        <td>{char}</td>
      {/each}
    </tr>
  </tbody>
</table>

<div class="transition">👇 <code> base32_decode() </code>👇</div>

<Binary binary={SHARED_SECRET_BIN} label="Shared secret (binary):" />

<!---->
<!-- <p>UNIX timestamp: {time}</p> -->
<!-- <p>T = UNIX timestamp / 30 = {T}</p> -->
<!---->
<!-- <table class="mapping"> -->
<!--   <tbody> -->
<!--     <tr> -->
<!--       {#each Tbytes as byte} -->
<!--         <td>{byte.toString(16).padStart(2, "0")}</td> -->
<!--       {/each} -->
<!--     </tr> -->
<!--   </tbody> -->
<!-- </table> -->
