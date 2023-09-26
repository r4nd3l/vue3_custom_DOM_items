import {
  ref,
  shallowRef,
  onMounted,
  onBeforeUnmount,
  onBeforeUpdate,
} from "vue";

export function useDimension(dimension = "width") {
  // const elements = ref([]);
  const elements = ref<Array<HTMLElement | null>>([]);

  // const getRef = (index: number) => (el: any) => {
  const getRef = (index: number) => (el: HTMLElement | null | any) => {
    (elements.value as any)[index] = el;
    console.log({ index, el });
  };

  onBeforeUpdate(() => (elements.value = []));

  // const observers = shallowRef([]);
  const observers = shallowRef<Array<ResizeObserver | undefined>>([]);

  onMounted(() => {
    elements.value.forEach((element) => {
      if (element) {
        const observer = new ResizeObserver((entries) => {
          element.textContent = (entries[0].contentRect as any)[dimension];
          console.log("element.textContent => ", element.textContent);
        });
        observer.observe(element);
        observers.value.push(observer);
      }
    });
  });

  onBeforeUnmount(() => {
    observers.value.forEach((observer) => {
      if (observer) {
        observer.disconnect();
      }
    });
  });

  return getRef;
}
