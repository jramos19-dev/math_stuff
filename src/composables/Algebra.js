import { ref } from 'vue'

export const quadratic = (a, b, c) => {
  const discriminant = b ** 2 - 4 * a * c
  const message = ref('')

  console.log(discriminant)
  if (discriminant == 0) {
    message.value = 'discriminant is 0'
  } else if (discriminant > 0) {
    message.value = 'discriminant is bigger than 0'
  } else if (discriminant < 0) {
    message.value = 'discriminant is less than 0'
  }

  console.log(message.value)
  return discriminant
}
