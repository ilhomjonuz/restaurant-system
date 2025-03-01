from django.shortcuts import render


def products_list(request):
    return render(request, 'products/products_list.html')


def cart_view(request):
    return render(request, 'products/cart.html')


def my_profile_view(request):
    return render(request, 'products/profile.html')


def my_orders_view(request):
    return render(request, 'products/orders.html')
