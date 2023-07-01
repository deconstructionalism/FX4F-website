document.addEventListener("DOMContentLoaded", () => {
  let scrolled = false

  const leftButton = document.querySelector('div.two-part-set-order > div.left-button')
  const rightButton = document.querySelector('div.two-part-set-order > div.right-button')
  const scrollingSetOrder = document.querySelector('div.two-part-set-order')

  leftButton.addEventListener('click', () => {
    if (!scrolled) { return }
    scrollingSetOrder.scrollLeft = 0
    scrolled = false
  })

  rightButton.addEventListener('click', () => {
    if (scrolled) { return }
    const { width } = scrollingSetOrder.getBoundingClientRect()
    scrollingSetOrder.scrollLeft += width
    scrolled = true
  })
})
