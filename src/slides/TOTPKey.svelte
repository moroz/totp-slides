<script lang="ts">
  import { base32 } from "@scure/base";

  const secret = "VXYLMUZAMMRWT5LFWBVDXCLYPJAMPZ5A";

  const decodedHex = [...base32.decode(secret)];

  let time = $state(Math.floor(Date.now() / 1000));

  $effect(() => {
    const interval = setInterval(() => {
      time = Math.floor(Date.now() / 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<p>{time}</p>

<table class="mapping">
  <tbody>
    <tr>
      {#each decodedHex as byte}
        <td>{byte.toString(16).padStart(2, "0")}</td>
      {/each}
    </tr>
  </tbody>
</table>
