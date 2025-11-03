// utils/observeSections.js
export function observeSections(sections, models, currentModel, state) {
  // 建立 observer
  const observer = new IntersectionObserver(
    (entries) => {
      // 找到目前在 viewport 內最靠上的那個 section
      // rootMargin 可以微調觸發位置
      let visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

      if (visible.length > 0) {
        const el = visible[0].target
        const idx = Number(el.dataset.index)

        if (idx !== state.index) {
          state.index = idx
          currentModel.value = models[idx % models.length]
        }
      }
    },
    {
      root: null,              // 觀察整個 viewport
      threshold: 0.5,          // 超過一半高度時才算「可見」
      rootMargin: '0px 0px 20% 0px' // 可加快/延遲觸發
    }
  )

  // 將每個 section 加入觀察
  sections.forEach((id, i) => {
    const el = document.getElementById(id)
    if (el) {
      // 加上 dataset.index 方便回傳
      el.dataset.index = i
      observer.observe(el)
    }
  })

  return observer // 方便外部在 onBeforeUnmount 時停止
}
