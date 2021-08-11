
## Bem vindo ao sistema de agendamento para Barbeiro!
Desenvolvi este sistema na intenção de demostrar meus conhecimentos embora foi pensado para um caso real.

### Arquitetura limpa?
Na tentativa de criar um sistema mais desacoplado possível, segundo o "Clean architecture", fiz uma divisão de  4 camadas dentro do que pra mim faz sentido, que são:
> **Domain** - Onde ficam as Entidades e os casos de uso.
> 
> **Adapters** - Onde ficam as implementações abstratas e os controles
> 
> **External** - Lugar de biblioteca de terceiros, bando de dados...
> 
> **Main** - Onde tudo se junta e acontece o maior acoplamento.

Dessa forma, uma vez que a base já está pronta, torna-se muito fácil trocar qualquer biblioteca de terceiros, inclusive o Express, já que o acoplamento é minimo.

### SOLID-  Clean code
Também nesse projeto tentei aplicar os princípios do SOLID e clean code.
Uma vez aplicado tais princípios o código se torna mais legivel, organizado e, embora não o fiz nesse projeto, facíl de testar.

### O que mais aprendi com esse projeto?
Depois de finalizado, quando minha mente já estava em total sintonia sobre como todas minhas classes, pastas e regras em geral faziam sentido nesse projeto, vi que, se fosse necessário adicionar talvez um nova feature isso seria simples.
Um exemplo foi a ideia de adicionar um envio de e-mail toda vez que fosse feito um novo agendamento. 
Minha cabeça começou ligar os pontos e mesmo sem mexer no código eu já tinha tudo pronto na mente, e isso foi incrível

#### Posso testar a aplicação?
Sim, é claro, ela está disponível aqui. 
> **OBS**: Ela está hospedada em um conta free da heroku, então a primeira requisição deve demorar por volta de 10 segundos. 
> https://schedule-barbershop.herokuapp.com/api-docs

### Contato
> Email: gilmar.aquino@live.com
>
> Linkedin: https://www.linkedin.com/in/fernandes-gilmar/
> 
###### A Deus toda Glória
