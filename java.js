/*Pra colocar o java script, ele carrega sempre por ultimo e no fim do codigo*/
    /*window.alert('Minha primeira mensagem');
    window.confirm('Está gostando do JS');  */
    var nome = window.prompt('Qual seu nome?');
    window.alert('É um grande prazer em te conhecer, ' + nome + '!') //o + serve para atribuir ou adicionar um valor ao que você estava fazendo antes, chamamos isso de concatenação

    // no js o = n significa igual, e sim recebe, como var nome = 'edu' (variavel nome recebe edu)

    /* 
    
    var n1 = window.prompt('Digite um numero aleatorio');
    var n2 = window.prompt('Digite outro numero');

    //var $ = n1 + n2; n funciona pq n converteu

    funç~eos do + [adição] e [concatenação], se tiver 2 numeros entre ele, ele age como forma de adição numerica, se tiver string ele age como concatenação
    o proprio prompt retorna um numero string, ent tem que converter para number (Number.parseInt(n) para inteiros, Number.parseFloat(n) para real) 
 
    pra resolver vamos tentar...
    */
    var n1 = Number.parseInt(window.prompt('Digite um numero aleatorio'));
    var n2 = Number(window.prompt('Digite outro numero')); // se quiser numero quebrado use o parseFloat, ou a forma simplificada que é o Number(n)

    var $ = n1 + n2; 
    window.alert ('A soma de ambos é: ' + String($))

    // pra converter numero para string usa o String(n) ou n.toString()[o 'n' ali serve para colcoar direto o que você quer converter]


    //pra facilitar na concatenação tem ${(var)}

    window.alert (`Olá novamente ${nome} `)

    /*
    outros comandos usando a var $ como exemplo
    
    $.length    diz quantos caracteres tem a string
    $.toUpperCase()   Deixa todas as letras maiuculas
    $.toLowerCase()  deixa todas as letras minusculas
    
    
    */

    document.writeln(` Seu nome tem ${nome.length} letras`)  //comando pra escrever na tela
    document.writeln(' Seu nome em maisculo fica' + nome.toUpperCase() )
    document.writeln(`E em minusculo fica ${nome.toLowerCase()} !`)


    /*
    para arrumar numeros podemos usar

    n1.toFixed(2) = coloca em duas casas, se for 15,5 ele exibe 15,50
    n1.fixed(2).replace('.' , ',')
    
    */

    document.writeln(`o numero quebrado fica assim ${n1.toFixed(2).replace('.' , ',')} `)

    document.writeln(`em salario exibe assim ${n1.toLocaleString('pt-BR' ,{style: 'currency', currency: 'BRL'})} `)

        //Operadores do JS


        //aritméticos, como soma, subtração, multiplicação, divisão, porcentagem(soq serve como resto da divisão, sem usar a inteira, só numero sem virgula, exemplo, 5 dividido por dois, sebemos que 2X2=4, pra chegar no 5 falta 1, ent é 1 o resutado, n é porcentagem e sim o resto dela, o resto dadivisão inteira) e potencia(**), ent 5**2=25.

        // ordem de precendência é 
        //()
        // **
        //* / %
        // + -
        // se estiverem na mesma linha se faz da esquerda pra direita
        // n = n + 4 > n += 4 auto atribuição e simplificação
        // n -- é o mesmo de n -= 1, tem  ++ e tals que pode ser colocado antes e depois


        // operadores relacionais, como >, <, >=, !=(! é não igual, ou seja, diferente), ==( o igual é ==, pq = é recebe), essa expressão só retorna true false, o boolean, como 5>2= true
        //o === serve como identidade, ele identifica o tipo, como numero e string, ele avalia isso

        //operadores logicos, !(negação[não]), &&(conjução [e]), ||(disjunção [ou])
        //! só dá resutado de true e false
        // && tbm só tem 2 valores, mas só restorna se for tudo certo, 1 errado retorna false
        // || 2 valores como true e false, mas basta 1 só uqe seja verdadeiro para retonrar o true, e se os dois for true ele continua true mesmo, só retorna false se n tiver nada true

        //ordem de precedencia: aritmeticos > relacionais > logicos > ternario

        //ternario ? e :
        // (teste)?(true):(false)
        // nota é maior que 7? ([?]aprovado), ([:] reprovado)


    // DOM
    //No dom existe uma arvore que começa no Window, que é a janela uqe aparece no navegador
    //tem também o location, document, e o history
    //dentro do document tem o famoso HTML, e dentro do html tem o head e o body
    //funciona como uma arvore genealogica, abaixo de qualquer opção é sempre um child, e acima do child sempre tem um parent, uqe é os pais e os filhos.

    //você pode usar o ODM pra selecionar algo, isso existe  de 5 maneiras, por marca, por id, por nome, por classe e por seletor

        // por marca: "getElementsByTagName()", pode selecionar mais de um elementro
        //exemplo: var p1 = window.document.getElementsByTagName('p')[0] {o '[]' serve para selecionar especificamente qual voce quer, se é o priemiro, segundo etc..}

        // o id, nome e a classe é o mesmo só mudar o tagname.

        //por seletor: " querySelector()" e "querySelectorAll()"
        //exemplo: window.document.querySelector('div.msg')
    