from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('djoser.urls')),  # Include Djoser URLs under /api/auth/
    path('api/', include('user_api.urls')),  # Assuming you want your other APIs under /api/
]
