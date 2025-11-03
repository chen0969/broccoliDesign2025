// src/utils/handleScroll.js
export const handleScroll = (
  sections,      // 例如 ['sec1','sec2','sec3']
  models,
  currentModel,
  state          // { index, lastTriggerY }
) => () => {
  // 取得每個 section 的 DOM 與觸發位置
  const offsets = sections.map(id => {
    const el = document.getElementById(id)
    if (!el) return null
    return {
      id,
      top: el.offsetTop * 0.6   // 這裡的 0.6 可依需求調整
    }
  }).filter(Boolean)

  if (offsets.length === 0) {
    console.warn('No valid sections found')
    return
  }

  const y = window.scrollY || document.documentElement.scrollTop

  // 找到距離目前 scroll 最近的一個 section
  // 這裡的邏輯可以依需求修改：例如進入哪個範圍就切換
  for (let i = 0; i < offsets.length; i++) {
    const targetY = offsets[i].top

    if (y - state.lastTriggerY >= targetY) {
      state.index = (state.index + 1) % models.length
      currentModel.value = models[state.index]
      state.lastTriggerY = y
      break
    } else if (y < state.lastTriggerY - targetY) {
      state.index = (state.index - 1 + models.length) % models.length
      currentModel.value = models[state.index]
      state.lastTriggerY = y
      break
    }
  }
}
