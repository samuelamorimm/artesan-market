
from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import PerfilViewSet, CategoriaViewSet, ProdutoViewSet, VendaViewSet, ItemVendaViewSet, CustomObtainAuthToken, RegisterView, PagamentoViewSet, VerificaPerfil

router = DefaultRouter()
router.register(r'perfil', PerfilViewSet, basename='perfil') #cria e busca perfil pelo usuário logado
router.register(r'categorias', CategoriaViewSet, basename='categoria')
router.register(r'produtos', ProdutoViewSet, basename='produto') #cria produto com base no usuário logado, get e etc.. normal
router.register(r'vendas', VendaViewSet, basename='venda')
router.register(r'itens-venda', ItemVendaViewSet, basename='itens')
router.register(r'pagamentos', PagamentoViewSet, basename='pagamento')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', CustomObtainAuthToken.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('verificar-perfil/', VerificaPerfil.as_view())
]