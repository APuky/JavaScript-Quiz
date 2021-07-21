from django.shortcuts import render
from .models import CustomUser
from .serializers import UserSerializer, UserAccountSerializer
from rest_framework.decorators import api_view
from django.http.response import JsonResponse

from django.contrib.auth.models import AnonymousUser
from django.http import HttpResponse
# Create your views here.

@api_view(['GET'])
def scoreboard(request):
    if request.method == 'GET':
        score_list = CustomUser.objects.filter(score__isnull=False)

        serializer = UserAccountSerializer(score_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    else :
        return HttpResponse('Permission denied!')


# @api_view(['GET'])
# def account(request):
#     # if request.user.is_authenticated and request.method == 'GET':
#     # if True:
#     #     print(request)

#     #     user = CustomUser.objects.get(username = request.user.username)

#     #     serializer = UserAccountSerializer(user)
#     #     return JsonResponse(serializer.data, safe=False)
#     # else:
#     #     user = AnonymousUser
#     #     serializer = UserAccountSerializer(user)
#     #     return JsonResponse(serializer.data)