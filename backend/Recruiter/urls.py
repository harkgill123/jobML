from django.contrib import admin
from django.urls import path, include
from .views import JobPostingListView, JobPostingCreateView, search_applicants, sendRecommendationsToFrontEnd, DisplayUserInfo


urlpatterns = [
    path('jobPostingListView/', JobPostingListView.as_view(), name='jobPostingListView'),
    path('jobPostingCreateView/', JobPostingCreateView.as_view(), name='jobPostingCreateView'),
    path('search_applicants/', search_applicants, name='search_applicants'),
    path('candidate-recommendations/', sendRecommendationsToFrontEnd, name='candidate-recommendations'),
    path('user/<int:user_id>/', DisplayUserInfo.as_view(), name='display_user_info'),

]
