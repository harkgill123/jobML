from django.contrib import admin
from django.urls import path, include
from .views import JobPostingListView, JobPostingCreateView, search_applicants


urlpatterns = [
    path('jobPostingListView/', JobPostingListView.as_view(), name='jobPostingListView'),
    path('jobPostingCreateView/', JobPostingCreateView.as_view(), name='jobPostingCreateView'),
    path('search_applicants/', search_applicants, name='search_applicants')

]
