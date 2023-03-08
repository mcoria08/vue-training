import { ref } from "vue";

const useIncrement = () => {
  const count = ref<number>(0);

  const increment<number>( value: number ){
    count.value += value;
  }

  return {
      //State properties
      count,

      //Getters

      //Actions
      increment,

  }
}

export default useIncrement;
