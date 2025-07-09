Projeto A/B Test - Página de Produto

Este projeto simula um experimento de Teste A/B focado em Otimização da Taxa de Conversão (CRO). 
A página exibe dinamicamente duas variações de um card de produto, escolhidas aleatoriamente a cada carregamento. 
O sistema mede qual das versões recebe mais cliques no botão de ação.

Tecnologias utilizadas:
- HTML5
- CSS3
- JavaScript (sem frameworks)
- LocalStorage (para armazenar os cliques localmente)
- Lógica de CRO (Conversion Rate Optimization)

Funcionalidades:
- Sorteio aleatório da variação A ou B toda vez que a página é carregada
- Registro de cliques por variação no LocalStorage
- Dashboard simples exibindo a contagem de cliques por variação
- Recarregamento automático da página após o clique, para novo sorteio

Exemplo de variações:

Variação A:
- Título: "Tênis Esportivo Pro X"
- Botão: "Compre agora"
- Cor do botão: Azul

Variação B:
- Título: "Super Tênis para Atletas"
- Botão: "Garanta o seu!"
- Cor do botão: Verde

Como rodar o projeto:
1. Baixe os arquivos e extraia todos em uma pasta
2. Clique duas vezes no arquivo index.html para abrir no navegador
3. Uma das variações (A ou B) será exibida aleatoriamente
4. Clique no botão para simular uma conversão
5. Veja os cliques acumulados no painel (dashboard) abaixo do produto

Resetando os dados:
1. Pressione F12 no navegador para abrir o DevTools
2. Vá até a aba Application > Local Storage
3. Exclua as chaves:
   - clicks-A
   - clicks-B
4. Recarregue a página para reiniciar os testes

Como isso se aplica ao CRO:
- Permite testar visuais e textos diferentes em um mesmo produto
- Coleta dados reais sobre a interação do usuário
- Ajuda a descobrir qual versão gera mais conversões (cliques)
- Suporte para decisões baseadas em dados


