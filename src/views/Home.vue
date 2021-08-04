<template>
  <h1>Quadratics Solver</h1>
  <h2>Ax+bx+C=0</h2>

  <form @keypress.enter.prevent="handleSubmit">
    <input type="text" v-model="a" placeholder="Ax^2" required />
    <input type="text" v-model="b" placeholder="BX" required />
    <input type="text" v-model="c" placeHolder="C" required />
    <button type="submit" @click.prevent="handleSubmit">Solve</button>
  </form>
  <div>
    <h2>{{ a }}x^2 + {{ b }}x+{{ c }}=0</h2>

    <h2>The discriminant is {{ discriminant }}</h2>
    <p>That means that ....</p>
    <p ref="p"></p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { quadratic } from '../composables/Algebra'
import { sqrt } from 'mathjs'
import { computed } from '@vue/runtime-core'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  setup() {
    const a = ref(null)
    const b = ref(null)
    const c = ref(null)
    const p = ref(null)

    const discriminant = ref(null)

    const handleSubmit = () => {
      discriminant.value = quadratic(a.value, b.value, c.value)
      if (discriminant.value == 0) {
        p.textContent = 'There exist 1 real root'
      } else if (discriminant > 0) {
        p.textContent = 'There exist 2 real roots'
      } else if (discriminant < 0) {
        p.textContent = 'there exist 2 complex roots'
      }
    }

    return { a, b, c, discriminant, handleSubmit, p }
  },
}
</script>
