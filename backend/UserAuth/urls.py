
from django.contrib import admin
from django.urls import path, include
from .views import SignUpView, LoginView, LogoutView, UpdatePasswordView, UpdateEmailView
urlpatterns = [
    path('Signup/', SignUpView.as_view(), name='Signup'),
    path('Login/', LoginView.as_view(), name='Login'),
    path('Logout/', LogoutView.as_view(), name = 'Logout'),
    path('update-email/', UpdateEmailView.as_view(), name = 'update-email'),
    path('update-password/', UpdatePasswordView.as_view(), name = 'update-password')
]
