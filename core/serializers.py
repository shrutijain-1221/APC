from rest_framework import serializers
from .models import Blog, Product, ProductType, Contact

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    types = ProductTypeSerializer(many=True, read_only=True)
    type_ids = serializers.PrimaryKeyRelatedField(
        queryset=ProductType.objects.all(), many=True, write_only=True, source='types')

    class Meta:
        model = Product
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__' 