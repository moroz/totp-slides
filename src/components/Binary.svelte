<script lang="ts">
  export interface Props {
    binary: Uint8Array | number[];
    label?: string;
    highlighted?: number[];
    indexed?: boolean;
  }

  let { label, binary, indexed = false, highlighted = [] }: Props = $props();
</script>

<table class="mapping">
  {#if label}
    <thead>
      <tr>
        <th colspan="20">{label}</th>
      </tr>
    </thead>
  {/if}
  <tbody>
    <tr>
      {#each binary as byte, index}
        <td class:hl={highlighted.includes(index)}
          >{byte.toString(16).padStart(2, "0").toUpperCase()}</td
        >
      {/each}
    </tr>
    {#if indexed}
      <tr class="index"
        >{#each binary as _, index}
          <td>0x{index.toString(16).toUpperCase()}</td>
        {/each}</tr
      >
    {/if}
  </tbody>
</table>

<style>
  :global(.mapping + .mapping) {
    margin-top: 1.5rem;
  }

  .hl {
    background: oklch(0.841 0.238 128.85);
    color: black;
  }

  .index {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.75em;
  }
</style>
