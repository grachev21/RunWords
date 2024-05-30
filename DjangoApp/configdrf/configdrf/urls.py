from django.contrib import admin
from django.urls import path

from worsa.views import WorsaAPIView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/worsalist/', WorsaAPIView.as_view())
]
