export class ClockUpdater {
  constructor(clockElement, dateElement) {
    this.clockElement = clockElement
    this.dateElement = dateElement
    this.animationFrame = null
  }

  update(timeFormatter, dateFormatter) {
    const updateDisplay = () => {
      const now = new Date()

      // Atualiza o relógio
      if (this.clockElement) {
        this.clockElement.textContent = timeFormatter(now)
      }

      // Atualiza a data
      if (this.dateElement) {
        const formattedDate = dateFormatter(now)
        this.dateElement.textContent = formattedDate
      }

      // Agenda a próxima atualização
      this.animationFrame = requestAnimationFrame(updateDisplay)
    }

    // Inicia a atualização
    updateDisplay()
  }

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
    }
  }
}
