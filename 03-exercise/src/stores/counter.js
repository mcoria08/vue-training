import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

/**
 * Store con options API
 *
 */
// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0,
//   }),
//   actions: {
//     increment() {
//       this.count ++;
//     }
//   },
//   getters: {
//     double: (state) => state.count * 2,
//   }
// });


/**
 * Store con Composition API
 *
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const increment = () => count.value ++;
  const double = computed(() => count.value * 2);

  return {
    count,
    double,
    increment,
  }
});