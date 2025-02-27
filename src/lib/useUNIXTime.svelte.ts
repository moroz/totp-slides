export default function useUNIXTime() {
  let time = $state(Math.floor(Date.now() / 1000));

  $effect(() => {
    const interval = setInterval(() => {
      time = Math.floor(Date.now() / 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return {
    get time() {
      return time;
    },
  };
}
