# urls.py

from django.urls import path, include
from djoser.views import TokenCreateView, TokenDestroyView
from dcrm.views import CustomUserCreateView  # Import your custom view
from django.urls import path
from .views import CustomUserCreateView, CustomTokenCreateView, CustomLogoutView
from . import views



urlpatterns = [
    path('api/auth/register/', CustomUserCreateView.as_view(), name='user_create'),
    path('api/auth/token/', CustomTokenCreateView.as_view(), name='token_create'),
    path('api/auth/login/', CustomTokenCreateView.as_view(), name='login'),  # Add a separate view for login
    path('api/auth/logout/', CustomLogoutView.as_view(), name='logout'),
    path('api/auth/check-authentication/', views.check_authentication, name='check-authentication'),
    # Add more URL patterns if needed
]




