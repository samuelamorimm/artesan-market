# Artisan Market - Marektplace de artesanato

### Este projeto trata-se de um e-commerce totalmente focado no artesanato, de fácil usabilidade. Permitindo cadastro e acesso de consumidores ou vendedores do ramo.

# Funcionalidades
- Autenticação via token
- Cadastro e gerencimento de produtos por vendedores
- Vizualizações do produto detalhadamente
- Busca global por nome do produto
- Carrinho de compras dinâmico
- Vendas para consumidores

# Tecnologias usadas

## Front-end
- React
- React-router-dom
- Axios
- Hooks

## Back-end
- Django DRF
- ViewSets
- Django Auth Token
- Permissões por usuário

# Rode localmente:

 1. Clone o projeto
    
    ```js
    git clone https://github.com/samuelamorimm/artesan-market.git
    ```

2. Acesse o backend:

  ```js
    cd backend
  ```

3. Start o ambiente e instale as dependências:

   ```js
    python -m venv venv
    venv\Scripts\activate
    pip install -r requirements.txt
   ```
   
4. Rode as migrações e start o servidor:

    ```js
      python manage.py migrate
      python manage.py runserver 0.0.0.0:8000
    ```



