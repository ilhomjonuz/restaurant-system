from django.urls import path

from . import views

urlpatterns = [
    path('products-list/', views.products_list, name='products-list'),
    path('cart/', views.cart_view, name='cart'),
    path('profile/', views.my_profile_view, name='my-profile'),
    path('orders/', views.my_orders_view, name='my-orders'),
]
