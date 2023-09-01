from django.shortcuts import render
from djoser.views import UserViewSet
from rest_framework import generics, status
from .serializers import CustomUserCreateSerializer  # Import your custom serializer
from rest_framework.response import Response
from django.contrib.auth.views import LogoutView
from djoser.views import TokenCreateView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_authentication(request):
    return Response({'isAuthenticated': True}, status=status.HTTP_200_OK)

from rest_framework import status

class CustomUserCreateView(generics.CreateAPIView):
    serializer_class = CustomUserCreateSerializer

    def perform_create(self, serializer):
        user = serializer.save()

        # Generate an authentication token for the user
        token, created = Token.objects.get_or_create(user=user)

        # Return the token as part of the response
        response_data = {
            "auth_token": token.key,
            "message": "Registration successful"
        }
        return Response(response_data, status=status.HTTP_201_CREATED)


class CustomTokenCreateView(TokenCreateView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == status.HTTP_200_OK:
            user = self.request.user  # Use self.request.user to access the authenticated user
            # Additional logic if needed after successful login
            # For example, logging login history
        return response

class CustomLogoutView(LogoutView):
    def post(self, request, *args, **kwargs):
        self.logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
