from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


#products
class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


#categories
class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


#custom view
class CategoryProductsAPIView(APIView):
    def get(self, request, id):
        products = Product.objects.filter(category_id=id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)