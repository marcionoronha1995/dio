
## Github - Adicionando uma chave SSH
## GitHub

Gustavo Souza
05/10/2023 01:51
Aprenda como adicionar uma chave SSH passo a passo a sua conta do GitHub.

1 – Primeiro abra o seu terminal e digite o comando abaixo.

Será criado uma chave SSH, usando o seu email como rótulo.
É preciso que o e-mail informado seja o mesmo que você utilizou para criar a sua conta no GitHub. 
```bash
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
```

2 – Durante o processo irá aparecer escrito no terminal ‘Enter a file in which to save the key’, basta pressione Enter para aceitar a localização padrão /home/you/.ssh/id_rsa
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]

3 – Agora, ele pedirá para digitar uma senha segura e depois você digita novamente a mesma senha para confirmar.
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]

4 – Ele criará duas chaves SSH dentro do arquivo cd ./ssh, uma chave privada id_rsa e outra pública id_rsa.pub

Depois é necessário você adicionar a sua chave ao ssh-agent, que é uma espécie de porteiro que possui as chaves de comunicação usando ssh.

5 – Para isso digite o comando no seu terminal para iniciar o ssh-agent:
```bash
eval "$(ssh-agent -s)"
```
Ele irá retornar o processo no qual está rodando o nosso porteiro.

Agent pid numero_do_seu_processo

6 – Depois devemos dizer ao porteiro que nossa chave privada é válida, e para isso digitamos o comando:
```bash
ssh-add ~/.ssh/id_rsa
```

Caso você já esteja dentro da pasta da chave basta digitar:
```bash
ssh-add id_rsa
```
7 – Adicionando a chave SSH na sua conta do GitHub:

* No linux usamos um comando para copiar nossa chave. Funciona como um Ctrl+C e Ctrl+V. Que é o xclip, para instalá-lo digitamos o comando no terminal do linux:
```bash
sudo apt-get install xclip
```
* Devemos copiar é a chave pública, a id_rsa.pub. E para isso, abra um novo terminal, e digite o comando:
```bash
xclip -sel clip < ~/.ssh/id_rsa.pub
```
8 – Agora entre sua conta do GitHub, no canto superior direito clique na sua foto de perfil e vá até settings.

9 – Você será redirecionado para uma outra página, desça e clique em SSH e GPG Keys.

10 – Vá até SSH Keys e clique no botão verde New SSH Key.

11 – Dê um nome para sua chave e no outro campo, cole lá a sua chave que você copiou. Basta apertar as teclas Ctrl+V, ou o botão direito do mouse e colar.

12 – Pronto depois é só clicar no botão verde para adicionar a sua chave a sua conta do github.

13 – A partir de agora quando você for clonar um repositório, vá em Code > SSH e não mais em Code > Https:

[By]
(https://web.dio.me/articles/github-adicionando-uma-chave-ssh?back=%2Fhome&page=1&order=oldest)
Por
Gustavo Souza