# NavigationApp - React Native

Este projeto é uma aplicação React Native que demonstra o uso de navegação avançada (Tabs + Stack), Deep Linking e boas práticas de UX no tratamento de estados da interface.

## 🚀 Estrutura de Navegação

O aplicativo utiliza uma combinação de **Bottom Tabs** e **Native Stack Navigator**:

- **Navegação Principal (Tabs):**

  - **HomeTab:** Contém uma pilha (Stack) de navegação para as telas de início e detalhes.
  - **Profile:** Tela de perfil do usuário.
- **Navegação Interna (Home Stack):**

  - **Home:** Tela inicial com listagem de itens.
  - **Details:** Tela de detalhes que recebe parâmetros via rota.

## 🛠️ Tratamento de Estados (UX)

Para garantir uma boa experiência de usuário, o app trata os três estados obrigatórios em todas as telas de carregamento de dados:

1. **Loading (Carregando):**

   - Implementado em `HomeScreen.js` e `DetailsScreen.js`.
   - Exibe o componente `LoadingState` (de `src/components/FeedbackStates.js`) enquanto os dados mockados são "buscado".
2. **Empty (Vazio):**

   - Implementado em `HomeScreen.js`.
   - Se a lista de dados estiver vazia ou nula, exibe o componente `EmptyState`.
3. **Error (Erro):**

   - Implementado em `DetailsScreen.js`.
   - Simula um erro aleatório no carregamento (50% de chance).
   - Quando o erro ocorre, exibe o componente `ErrorState` com um botão de **"Tentar novamente"** que reinicia o processo de carga.

## 🔗 Deep Linking

O app está configurado para responder ao esquema `localhost:8081/`.

- **Link Suportado:** `localhost:8081/details/1`
- **Comportamento:** Ao acessar este link, o app abre diretamente a tela de detalhes do item correspondente.

## 📦 Tecnologias Utilizadas

- React Native
- React Navigation (Native Stack, Bottom Tabs)
- Expo
- React Native Web (Suporte para Web)

---

Projeto desenvolvido como atividade prática de Navegação Avançada e UX.
