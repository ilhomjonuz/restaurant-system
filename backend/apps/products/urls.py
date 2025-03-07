from django.urls import path

from . import views

urlpatterns = [
    path('menu/', views.products_list, name='menu'),
    path('cart/', views.cart_view, name='cart'),
    path('profile/', views.my_profile_view, name='profile'),
    path('orders/', views.my_orders_view, name='orders'),
]
