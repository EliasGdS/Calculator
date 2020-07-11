# Calculadora

**Nível: 1** - Iniciante

As calculadoras não são apenas uma das ferramentas mais úteis disponíveis, mas também são uma ótima maneira de entender o processamento de UI e eventos em um aplicativo. Nesse problema, você criará uma calculadora que suporta cálculos aritméticos básicos em números inteiros.

O estilo é com você, então use sua imaginação e seja criativo! Você também pode achar que vale a pena experimentar o aplicativo da calculadora em seu dispositivo móvel para entender melhor a funcionalidade básica e os casos extremos.

**Restrições**

- Você não pode usar a função eval() para executar cálculos

## Exigências dos Usuários

- [x] O usuário pode ver uma tela mostrando o número atual digitado ou o resultado da última operação.
- [x] O usuário pode ver um teclado de entrada contendo botões para os dígitos de 0 a 9, operações - '+', '-', '/' e '=', um botão 'C' (para limpar) e um botão 'AC' (para limpar tudo).
- [x] O usuário pode inserir números como seqüências de até 8 dígitos, clicando nos dígitos no painel de entrada. A entrada de qualquer dígito acima de 8 será ignorada.
- [x] O usuário pode clicar em um botão de operação para exibir o resultado dessa operação em:
  - o resultado da operação anterior e o último número digitado OU
  - os dois últimos números digitados em OR
  - o último número digitado
- [x] O usuário pode clicar no botão 'C' para limpar o último número ou a última operação. Se a última entrada do usuário foi uma operação, a exibição será atualizada para o valor que a precedeu.
- [x] O usuário pode clicar no botão 'CA' para limpar todas as áreas de trabalho internas e ajustar a exibição para 0.
- [ ] O usuário pode ver 'ERR' exibido se qualquer operação exceder o máximo de 8 dígitos.

## Recursos Bônus

- [x] O usuário pode clicar no botão '+/-' para alterar o sinal do número exibido no momento.
- [x] O usuário pode ver um botão de ponto decimal ('.') No teclado de entrada para permitir a inserção de números de ponto flutuante de até 3 casas e a execução de operações com o número máximo de casas decimais inseridas para qualquer número.
