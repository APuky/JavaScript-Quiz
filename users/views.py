from django.shortcuts import render
from .models import CustomUser
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
# Create your views here.

@api_view(['GET'])
def scoreboard(request):
    if request.method == 'GET':
        score_list = CustomUser.objects.all()

        serializer = UserSerializer(score_list, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def account(request):
    if request.method == 'GET':
        user = request.user

        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)