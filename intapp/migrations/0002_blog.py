# Generated by Django 4.1.6 on 2023-03-03 08:27

import autoslug.fields
from django.db import migrations, models
import froala_editor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('intapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_image', models.ImageField(max_length=500, upload_to='letestblog/')),
                ('blog_title', models.CharField(max_length=250)),
                ('blog_alt_name', models.CharField(max_length=500)),
                ('blog_meta_discreption', models.CharField(max_length=500, null=True)),
                ('blog_meta_keyword', models.CharField(max_length=500, null=True)),
                ('blog_content', froala_editor.fields.FroalaField(null=True)),
                ('slug', autoslug.fields.AutoSlugField(editable=False, max_length=1000, populate_from='blog_title', unique=True)),
                ('date', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
