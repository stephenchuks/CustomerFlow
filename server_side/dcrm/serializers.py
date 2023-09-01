# serializers.py

from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from .models import CustomUser

class CustomUserCreateSerializer(UserCreateSerializer):
    password = serializers.CharField(style={"input_type": "password"}, write_only=True)
    class Meta(UserCreateSerializer.Meta):
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'username', 'password')


