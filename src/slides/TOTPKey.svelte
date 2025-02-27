<script lang="ts">
  import { base32 } from "@scure/base";
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

<table class="mapping">
  <thead>
    <tr>
      <th colspan="20">Shared secret</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {#each SHARED_SECRET_BIN as byte}
        <td>{byte.toString(16).padStart(2, "0")}</td>
      {/each}
    </tr>
  </tbody>
</table>

<p>UNIX timestamp: {time}</p>
<p>T = UNIX timestamp / 30 = {T}</p>

<table class="mapping">
  <tbody>
    <tr>
      {#each Tbytes as byte}
        <td>{byte.toString(16).padStart(2, "0")}</td>
      {/each}
    </tr>
  </tbody>
</table>

<style>
  .arrow {
    font-size: 2.75rem;
    line-height: 1;
    margin: 0;
  }
</style>
