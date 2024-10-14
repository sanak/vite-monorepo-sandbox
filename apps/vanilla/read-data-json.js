export function setupReadDataJson(element) {
  const readDataJson = async () => {
    const response = await fetch(`${import.meta.env.VITE_DATA_URL}/data.json`)
    const json = await response.json()
    alert(`JSON contents is "${json.data}"`)
  }
  element.addEventListener('click', () => readDataJson())
}
