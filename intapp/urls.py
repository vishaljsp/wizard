from django.contrib import admin
from django.urls import path,include
from .views import *
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',home,name="home"),
    path("blockchain",blockchain,name="blockchain"),
    path('web-development',webdevelopment,name="webdevelopment"),
    path('about-us',about,name="about-us"),
    path('analytics',analystick,name="analystick"),
    path('benking',benking,name="benking"),
    path('company',company,name="company"),
    path('contact-us',contact,name="contact-us"),
    path('creative-services',createservise,name="create-servise"),
    path('digital-marketing',digitalmarketing,name="digital-marketing"),
    path('financial-services',finaly,name="finaly"),
    path('healthcare',healthcare,name="healthcare"),
    path('industries',industries,name="industries"),
    path('insurance',insorance,name="insorance"),

    path('Ed-tuch',edtuch,name="Ed-tuch"),
    path('phone-devlopment',phonedevlopment,name="phone-devlopment"),
    path('service',service,name="service"),
    path('blog',blog,name="blog"),
    path('blogs/<slug>',blogs,name="blogs"),
    path('team',team,name="team"),
    path('discoverycall',call,name="call"),
    path('privacy-policy',privacypolicy,name="privacy-policy/")

]
# handler404 = 'Blogpost.views.error_400'

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)