from django.contrib import admin
from django.urls import path, include
from .views import ResumeCreateView, ResumeUploadView, search_jobs, recommended_jobs, update_feedback, sendRecommendationsToFrontEnd, get_recommendations


urlpatterns = [
    path('upload-resume/', ResumeUploadView.as_view(), name='upload-resume'),
    path('create-resume/', ResumeCreateView.as_view(), name='create-resume'),
    path('search-jobs/', search_jobs, name='search-jobs'),
    path('recommend-jobs/', recommended_jobs, name='recommend-jobs'),
    path('send-recommendations/', sendRecommendationsToFrontEnd, name='send-recommendations'),
    path('get-recommendations/', get_recommendations, name='get-recommendations'),
    path('update-feedback/', update_feedback, name='update-feedback')
]
