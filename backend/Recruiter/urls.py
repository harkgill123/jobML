from django.contrib import admin
from django.urls import path, include
from .views import JobPostingListView, JobPostingCreateView, search_applicants


urlpatterns = [
    path('home/', JobPostingListView.as_view(), name='home'),
    path('new_job_posting/', JobPostingCreateView.as_view(), name='create-job-posting'),
    path('search_applicants/', search_applicants, name='search_applicants')

]
