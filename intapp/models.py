from django.db import models
from froala_editor.fields import FroalaField
from autoslug import AutoSlugField

# Create your models here.

class Contacting_form(models.Model):
    name=models.CharField(max_length=200)
    emial=models.EmailField()
    phone=models.CharField(max_length=13)
    desc=models.TextField()
    date=models.DateField(auto_now_add=True)

    
    def __str__(self) -> str:
        return self.name
    

class Blog(models.Model):
    blog_image=models.ImageField(upload_to="letestblog/", max_length=500)
    blog_title=models.CharField(max_length=250)
    blog_alt_name=models.CharField(max_length=500)
    blog_meta_discreption=models.CharField(max_length=500,null=True)
    blog_meta_keyword=models.CharField(max_length=500,null=True)
    blog_content=FroalaField(null=True)
    slug=AutoSlugField(populate_from='blog_title', unique=True, max_length=1000)
    date=models.DateTimeField(auto_now=True)

    # date=models.DateField(auto_now_add=True)

    def __str__(self):
        return self.blog_title

  
class Caller_request(models.Model):
    name=models.CharField(max_length=200)
    email=models.EmailField()
    phone=models.CharField(max_length=13)
    date=models.CharField(max_length=200)
    time=models.CharField(max_length=200)