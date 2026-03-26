from django.urls import path
from .views import products_list, product_detail, categories_list, category_detail, products_by_category

urlpatterns = [
    path('products/', products_list),

    path('products/<int:id>/', product_detail),

    path('categories/', categories_list),

    path('categories/<int:id>/products/', products_by_category),
]