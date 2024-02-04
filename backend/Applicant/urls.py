from django.contrib import admin
from django.urls import path, include
from .views import ResumeCreateView, ResumeUploadView


urlpatterns = [
    path('upload-resume/', ResumeUploadView.as_view(), name='upload-resume'),
    path('create-resume/', ResumeCreateView.as_view(), name='create-resume'),
]
