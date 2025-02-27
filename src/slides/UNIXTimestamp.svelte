<script>
  import useUNIXTime from "../lib/useUNIXTime.svelte";
  let unix = useUNIXTime();
</script>

<h2>2. Get current UNIX timestamp</h2>

<pre><code
    >#include &lt;time.h&gt;
#include &lt;stdio.h&gt;

time_t unixepoch() &#123;
  struct timespec tp;
  clock_gettime(CLOCK_REALTIME, &amp;tp);
  return tp.tv_sec;
&#125;

int main() &#123;
  time_t now = unixepoch();
  printf("%ld\n", now); // {unix.time}
  return 0;
&#125;
  </code></pre>
