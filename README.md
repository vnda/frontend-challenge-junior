# Desafio Técnico Vnda
:octocat: Desafio técnico de Front-End proposto pela Vnda, cujo objetivo era realizar uma página a partir de um [wireframe](https://drive.google.com/file/d/10xpr_7qaEXNBT4v2dOKqanS4_tOcgEJs/view).
A página foi desenvolvida usando **Vue.JS**, **SASS**, **Swiper** (biblioteca) e **Laravel** (como backend).

<img src='./Print.png'>

### Algumas ressalvas
1. O senhor(a) deve ter notado a desnecessidade de utilizar Laravel, Jetstream e Inertia neste projeto de Front-End. Acontece que, para seguir a regra de compilar com o ***Gulp*** tentei iniciar um projeto com o **@vue/cli**, isto é, um projeto quase 100% front-end. Entretanto, por alguns erros de dependências, não consegui utilizar o **@vue/cli**. Para não perder tempo, fui para o **Laravel**, onde utilizei o Inertia junto co o Jetstream (porque a instalação é mais fácil). Caso queira uma explicação mais detalhada dessa dificuldade, estarei completamente aberto à esclarecimentos;   
2. Então por que não compilei com ***Gulp***? O Laravel conta com o ***webpack.mix.js*** e ele já utiliza o **Laravel Mix** para realizar está compilação. Inclusive, é **desaconselhável** o uso do ***Gulp*** a partir do Laravel 6.x. Entretanto, o efeito é o mesmo com ambas as ferramentas.
3. Meu código e este arquivo estão em português porque não vi a necessidade de utilizar língua estrangeira se meu avaliador é brasileiro. Caso percorra meus repositórios no GitHub, perceberá alguma proficiência em inglês.

### :smiley: Declaração pessoal
Agradeço pela oportunidade de mostrar minhas habilidades técnicas para o time da Vnda.<br> Durante este projeto tive maior proximidade com temas como minificação, conclusão de projeto, gerenciamento de dependências e a descoberta de novas funcionalidades do Vue. <br>Obrigado por avaliar meu projeto e caso seja possível, eu gostaria muito de saber a opinião de um desenvolvedor mais experiente.


# :bulb: Rodando a aplicação
Como a aplicação usa Laravel, ***é necessário rodar um servidor para a aplicação funcionar***. 
- Caso esteja usando VSCode, basta abrir o terminar na pasta src ou dist e rodar um `php artisan serve`;
- Realizei mudanças para que o banco de dados não cause problemas. O banco de dados é um .`sqlite` em `database/` e o arquivo *.env* define o *DB_CONNECTION* como **sqlite**. Caso ocorra algum problema, possivelmente basta dar `um php artisan migrate:fresh` em *src* e *dist*;
<br>
<br>
<br>
<br>

## :mortar_board: Eu
- Angelo Schuler Piletti, +55 51 982505194;

