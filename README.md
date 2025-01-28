# Horário Agora

[![Licença: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Uma aplicação web moderna e responsiva que exibe o horário e a data atual em tempo real, otimizada para usuários brasileiros. Construída com JavaScript puro e tecnologias web modernas.

## 🌟 Funcionalidades

- Exibição do relógio em tempo real com precisão de segundos
- Exibição da data atual no formato brasileiro
- Design responsivo que funciona em todos os dispositivos
- Suporte a PWA para funcionamento offline
- Detecção automática de fuso horário (Horário de Brasília)
- Interface moderna com efeito de vidro
- Otimizado para SEO
- Em conformidade com diretrizes de acessibilidade

## 🚀 Demonstração

Acesse a aplicação em: [https://horarioagora.vercel.app/](https://horarioagora.vercel.app/)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com propriedades customizadas e animações)
- JavaScript (ES6+)
- Bootstrap 5.3.2
- Font Awesome 6.5.1
- Google Fonts (Poppins)
- Service Workers para funcionalidade PWA

## 📁 Estrutura do Projeto

```
.
├── assets/
│   ├── css/
│   │   ├── animations.css
│   │   ├── clock.css
│   │   ├── main.css
│   │   └── variables.css
│   ├── img/
│   │   └── favicon/
│   └── js/
│       ├── app.js
│       └── modules/
│           ├── clockUpdater.js
│           ├── dateFormatter.js
│           └── timeFormatter.js
├── index.html
├── LICENSE
├── robots.txt
├── sitemap.xml
└── sw.js
```

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/LuisT-ls/Horario-Agora.git
```

2. Navegue até o diretório do projeto:

```bash
cd Horario-Agora
```

3. Abra o `index.html` no seu navegador ou use um servidor local:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js
npx serve
```

## 💻 Uso

A aplicação começa automaticamente a exibir o horário e a data atual quando carregada. Não é necessária nenhuma configuração adicional. O relógio atualiza a cada segundo e se ajusta automaticamente ao horário de verão.

### Componentes Principais

- `app.js`: Ponto de entrada principal da aplicação
- `clockUpdater.js`: Gerencia a lógica de atualização do relógio
- `dateFormatter.js`: Utilitários para formatação de data
- `timeFormatter.js`: Utilitários para formatação de hora

## 🎨 Personalização

A aplicação usa propriedades CSS customizadas para facilitar a personalização. As principais variáveis podem ser encontradas em `assets/css/variables.css`:

```css
:root {
  /* Cores principais */
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;

  /* Gradientes */
  --gradient-primary: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  --gradient-hover: linear-gradient(
    135deg,
    var(--secondary-color),
    var(--accent-color)
  );

  /* Cores de texto */
  --text-primary: #ecf0f1;
  --text-secondary: #bdc3c7;

  /* Sombras */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);

  /* Transições */
  --transition-fast: 200ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;

  /* Espaçamento */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
}

/* Modo escuro */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #1a1a2e;
    --secondary-color: #16213e;
    --accent-color: #e94560;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
  }
}
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request. Para mudanças significativas, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/RecursoIncrivel`)
3. Faça commit de suas alterações (`git commit -m 'Adiciona algum RecursoIncrivel'`)
4. Faça push para a branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Autor

**Luís Antonio Souza Teixeira**

- GitHub: [@LuisT-ls](https://github.com/LuisT-ls)

## 🙏 Agradecimentos

- [Bootstrap](https://getbootstrap.com/) pelo sistema de grid responsivo
- [Font Awesome](https://fontawesome.com/) pelos ícones
- [Google Fonts](https://fonts.google.com/) pela fonte Poppins

## 📝 Observações

- A aplicação requer JavaScript habilitado no navegador
- Para melhor experiência, use um navegador web moderno
- O PWA pode ser instalado em dispositivos compatíveis para acesso offline
