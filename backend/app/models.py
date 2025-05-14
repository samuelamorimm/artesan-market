from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Perfil(models.Model):
    STATUS_CHOICES = [
        ('C', 'Consumidor'),
        ('V', 'Vendedor'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cpf = models.CharField(max_length=11)
    nome = models.CharField(max_length=200)
    cidade = models.CharField(max_length=200)
    data_nascimento = models.DateField(blank=False)
    status = models.CharField(max_length=1, default='C', choices=STATUS_CHOICES)

    def __str__(self):
        return self.nome

class Categoria(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    nome = models.CharField(max_length=200)

    def __str__(self):
        return self.nome

class Produto(models.Model):
    vendedor = models.ForeignKey(User, on_delete=models.CASCADE)
    nome = models.CharField(max_length=200)
    imagem = models.ImageField(upload_to='produtos/', blank=True, null=True)
    preco = models.FloatField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    descricao = models.TextField()

    def __str__(self):
        return self.nome

class Venda(models.Model):
    vendedor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='vendedor')
    comprador = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comprador')
    total = models.FloatField(default=0)

    def __str__(self):
        return f'{self.vendedor.nome} -> {self.comprador}'

class ItemVenda(models.Model):
    venda = models.ForeignKey(Venda, on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.produto.nome} x{self.quantidade}'
    
class Pagamento(models.Model):
    CHOICE_STATUS = [
        ('P', 'Pendente'),
        ('C', 'Concluído'),
    ]

    venda = models.ForeignKey(Venda, on_delete=models.CASCADE)
    status= models.CharField(max_length=1, default='P', choices=CHOICE_STATUS)
