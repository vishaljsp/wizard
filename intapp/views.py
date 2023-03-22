from django.shortcuts import render

from .models import *

def home(request):
    
    if request.method=="POST":
        fullname=request.POST.get('fullname')
        email=request.POST.get('Emailid')
        phone=request.POST.get('phone')
        text=request.POST.get('desc')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
    return render(request,"home.html")

def call(request):
    if request.method=="POST":
        fullname=request.POST.get('fullname')
        email1=request.POST.get('idemail')
        phone=request.POST.get('phone')
        dt=request.POST.get('dt')
        tym=request.POST.get('tym')
        Caller_request(name=fullname,email=email1,phone=phone,date=dt,time=tym).save()
    
    return render(request,"call.html",)

def about(request):
    if request.method=="POST":
        fullname=request.POST.get('fullname')
        email=request.POST.get('Emailid00')
        phone=request.POST.get('phone')
        text=request.POST.get('desc')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
    return render(request,"about.html")

def analystick(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"analystick.html",{"mesej":mesej})

def benking(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"benking.html",{"mesej":mesej})


def createservise(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"creativ_service.html",{"mesej":mesej})



def digitalmarketing(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"digital_markiting.html",{"mesej":mesej})


def contact(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"contact.html",{"mesej":mesej})


def finaly(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"final_insorance_service.html",{"mesej":mesej})

def healthcare(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"healthcare.html",{"mesej":mesej})

def insorance(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"insorance.html",{"mesej":mesej})

def edtuch(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"ed_tuch.html",{"mesej":mesej})

def phonedevlopment(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"phone_devlopment.html",{"mesej":mesej})

def service(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"service.html",{"mesej":mesej})


def blog(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    blogs=Blog.objects.all()
    return render(request,"blog.html",{"blog":blogs,"mesej":mesej})

def blogs(request,slug):

    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    blogsfl=Blog.objects.filter(slug=slug).first()
    print(blogsfl)
    return render(request,"blogs.html",{"blog_obj":blogsfl,"mesej":mesej})
def team(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"team.html",{"mesej":mesej})

 
def company(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"company.html",{"mesej":mesej})

def blockchain(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"black.html",{"mesej":mesej})

def webdevelopment(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"web_devlopment.html",{"mesej":mesej})

def industries(request):
    mesej=""
    if request.method=="POST":
        fullname=request.POST.get('fullnamej')
        email=request.POST.get('Email_id')
        phone=request.POST.get('phonen')
        text=request.POST.get('textform')
        Contacting_form(name=fullname,emial=email,phone=phone,desc=text).save()
        mesej="Thenks For Contact US"
    return render(request,"industries.html",{"mesej":mesej})

def privacypolicy(request):
    return render(request,"privacypolicy.html")