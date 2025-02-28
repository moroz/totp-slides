<script lang="ts">
  import Binary from "../components/Binary.svelte";
  import { SHARED_SECRET, SHARED_SECRET_BIN } from "../lib/config";
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
