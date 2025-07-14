from django.db import models

# Create your models here.

class Blog(models.Model):
    blog_image = models.ImageField(upload_to='blog_images/')
    blog_title = models.CharField(max_length=255)
    blog_content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.blog_title

class ProductType(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    product_specifications = models.TextField()
    size = models.CharField(max_length=100, blank=True, null=True)
    feature = models.CharField(max_length=255, blank=True, null=True)
    material_used = models.CharField(max_length=255, blank=True, null=True)
    custom_design_possible = models.BooleanField(default=False)
    product_image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    types = models.ManyToManyField(ProductType, related_name='products')

    def __str__(self):
        return self.product_name

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"

    class Meta:
        ordering = ['-created_date']
