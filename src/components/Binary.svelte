<script lang="ts">
  export interface Props {
    binary: Uint8Array | number[];
    label: string;
  }

  let { label, binary }: Props = $props();
</script>

<table class="mapping">
  <thead>
    <tr>
      <th colspan="20">{label}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {#each binary as byte}
        <td>{byte.toString(16).padStart(2, "0").toUpperCase()}</td>
      {/each}
    </tr>
  </tbody>
</table>
