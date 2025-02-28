<script lang="ts">
  import useDigest from "../lib/useDigest.svelte";
  import Binary from "../components/Binary.svelte";

  interface Props {
    timeStep: Uint8Array;
    secret: Uint8Array;
    label: string;
  }

  const { timeStep, secret, label }: Props = $props();

  const digest = useDigest(secret, timeStep);

  $effect(() => {
    digest.update(timeStep);
  });
</script>

<Binary {label} binary={digest.digest} />
