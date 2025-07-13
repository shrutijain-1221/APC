from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import filters
from rest_framework.response import Response
from rest_framework import status
from .models import Blog, Product, ProductType, Contact
from .serializers import BlogSerializer, ProductSerializer, ContactSerializer

# Create your views here.

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-created_date')
    serializer_class = BlogSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        types_param = self.request.query_params.get('types')
        if types_param:
            type_names = [t.strip() for t in types_param.split(',')]
            queryset = queryset.filter(types__name__in=type_names).distinct()
        return queryset

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Contact form submitted successfully!',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'message': 'Error submitting contact form',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
