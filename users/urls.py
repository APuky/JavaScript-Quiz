from django.urls import include, path
from . import views

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    path('scoreboard/', views.scoreboard),
    path('update/', views.updateScore),
    #path('account/', views.account)
]