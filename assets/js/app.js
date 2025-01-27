import { formatTime } from './modules/timeFormatter.js'
import { formatDate, capitalizeFirstLetter } from './modules/dateFormatter.js'
import { ClockUpdater } from './modules/clockUpdater.js'

class App {
  constructor() {
    this.clockElement = document.getElementById('clock')
    this.dateElement = document.getElementById('date')
    this.clockUpdater = null
  }

  init() {
    // Verifica se os elementos existem
    if (!this.clockElement || !this.dateElement) {
      console.error('Elementos do relógio não encontrados!')
      return
    }

    // Inicializa o atualizador do relógio
    this.clockUpdater = new ClockUpdater(this.clockElement, this.dateElement)

    // Inicia a atualização com os formatadores
    this.clockUpdater.update(formatTime, date =>
      capitalizeFirstLetter(formatDate(date))
    )

    // Adiciona listener para quando a página ficar invisível
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.clockUpdater.stop()
      } else {
        this.clockUpdater.update(formatTime, formatDate)
      }
    })
  }
}

// Inicializa o app quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  app.init()
})
