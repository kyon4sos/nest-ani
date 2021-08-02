import { computed, onMounted, onUnmounted, ref } from 'vue';

export default function useWindowSize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const isMobile = computed(() => {
    return width.value < 768;
  });
  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };
  onMounted(() => {
    window.addEventListener('resize', update);
  }),
    onUnmounted(() => {
      window.removeEventListener('resize', update);
    });

  return { width, height, isMobile };
}

// export default useMobile;
