# Como?
1 - Instala o [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) e o [Node](https://nodejs.org/en/download) porra!
2 - Acessa o [Visual Code](https://code.visualstudio.com/Download) ou instala antes caso não tenha essa bagaça.
3 - Abre a porcaria do terminal e roda o comando ´´´yarn add cypress --dev´´´ pra baixar as depêndencias do projeto, você só precisa fazer isso 1 vez na vida (A principio).
4 - Acessa o arquivo "bot_env.json", que ta dentro de "cypress/fixtures" e preenche com as informações que vc precisa, nunca com " ou espaços em branco, exceto a senha caso ela tenha.
    4.1 - Detalhando um pouco mais isso as variáveis desse arquivo e dando exemplos:
        - **user_url_nick_comma_separated**: Basicamente aqui você bota os nicks que precisam ser aceitos nas CMMs, um exemplo seria:
            -´´´"user_url_nick_comma_separated": "filhodaputa1,filhodaputa2,filhodaputa3,filhodaputa4"´´´
        - **user_admin_email**: O email ou nick que tem permissão de admin nas comunidades
        - **user_admin_password**: Preciso mesmo falar que é a senha do login do admin?
        - **communities_id_comma_separated**: Agora aqui é o ID das comunidades separado com , assim como no user_url_nick_comma_separated, exemplo:
            -´´´"communities_id_comma_separated": "55555,44444,1111"´´´
5 - Agora o comando que você vai executar para executar é ´´´cypress run --headless´´´ e sempre que for executar tenha ciência se os dados do arquivo bot_env.json estão salvos!