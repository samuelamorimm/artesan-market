from django.contrib import admin
from .models import Perfil, Produto, Categoria, Venda, ItemVenda

# Register your models here.
admin.site.register(Perfil)
admin.site.register(Produto)
admin.site.register(Categoria)
admin.site.register(Venda)
admin.site.register(ItemVenda)