from django.urls import path

from . import views

urlpatterns = [
    path('products-list/', views.products_list, name='products-list')
]
