from django.urls import path
from djoser.views import TokenCreateView, TokenDestroyView, UserViewSet

from .views import CustomerRecordView, AddRecordView, UpdateRecordView, DeleteRecordView



urlpatterns = [
     path('records/<int:pk>/', CustomerRecordView.as_view(), name='record-list'),
    path('records/add/', AddRecordView.as_view(), name='record-add'),
    path('records/update/<int:pk>/', UpdateRecordView.as_view(), name='record-update'),
    path('records/delete/<int:pk>/', DeleteRecordView.as_view(), name='record-delete'),

    # Map Djoser's authentication endpoints to views
    path('users/', UserViewSet.as_view({'get': 'list', 'post': 'create'}), name='user-list'),
    path('users/me/', UserViewSet.as_view({'get': 'me'}), name='user-me'),
    path('users/confirm/', UserViewSet.as_view({'post': 'activation'}), name='user-activation'),
    path('users/resend_activation/', UserViewSet.as_view({'post': 'resend_activation'}), name='user-resend-activation'),
    path('users/set_password/', UserViewSet.as_view({'post': 'set_password'}), name='user-set-password'),
    path('users/reset_password/', UserViewSet.as_view({'post': 'reset_password'}), name='user-reset-password'),
    path('users/reset_password_confirm/', UserViewSet.as_view({'post': 'reset_password_confirm'}), name='user-reset-password-confirm'),
    path('users/set_username/', UserViewSet.as_view({'post': 'set_username'}), name='user-set-username'),
    path('users/reset_username/', UserViewSet.as_view({'post': 'reset_username'}), name='user-reset-username'),
    path('users/reset_username_confirm/', UserViewSet.as_view({'post': 'reset_username_confirm'}), name='user-reset-username-confirm'),
    path('token/login/', TokenCreateView.as_view(), name='token-login'),
    path('token/logout/', TokenDestroyView.as_view(), name='token-logout'),
    # You can also add JWT endpoints if you're using JWT authentication
    # path('jwt/create/', YourJWTCreateView.as_view(), name='jwt-create'),
    # path('jwt/refresh/', YourJWTRefreshView.as_view(), name='jwt-refresh'),
    # path('jwt/verify/', YourJWTVerifyView.as_view(), name='jwt-verify'),
]
