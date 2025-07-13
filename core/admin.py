from django.contrib import admin
from .models import Blog, Product, ProductType, Contact

# Register your models here.
admin.site.register(Blog)
admin.site.register(Product)
admin.site.register(ProductType)
admin.site.register(Contact)
