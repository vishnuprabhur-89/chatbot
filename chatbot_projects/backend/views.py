from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Question_Model, Disease_Model, Symptom_Model, User_History_Model 
from backend.serializers import Question_Model_Serializer, Symptom_Model_Serializer, Disease_Model_Serializer, User_History_Model_Serializer
from backend.warehouse import Question, Symptom, Disease, User_Patters

@api_view(['GET', 'POST'])
def Question_Warehouse(request):
    """
    Access the question from database
    """
    if request.method == 'GET':
        print("welcome to django GET Method")
        result_set=Question()
        for i in range(0,len(result_set)):
            storage=Question_Model(Id=result_set[i]['Id'],EleId=result_set[i]['EleId'],Question=result_set[i]['Question'],Option1=result_set[i]['Option1'],Option2=result_set[i]['Option2'],Option3=result_set[i]['Option3'],Disabled=result_set[i]['Disabled'],Disease_Id=result_set[i]['Disease_Id'],Sym_Id=result_set[i]['Sym_Id'])
            storage.save()

        result_set1=Symptom()
        for i in range(0,len(result_set1)):
            storage1=Symptom_Model(Id=result_set1[i]['Id'],Name=result_set1[i]['Name'],Sym_Id=result_set1[i]['Sym_Id'],Disease_Id=result_set1[i]['Disease_Id'],Sym_Type=result_set1[i]['Sym_Type'])
            storage1.save()

        result_set2=Disease()
        for i in range(0,len(result_set2)):
            storage2=Disease_Model(Name=result_set2[i]['Name'],Sym_Id=result_set2[i]['Sym_Id'])
            storage2.save()
        
        result_set3=User_Patters()
        for i in range(0,len(result_set3)):
            storage3=User_History_Model(Ids=result_set3[i]['Id'],Name=result_set3[i]['Name'],Sym_Id=result_set3[i]['Sym_Id'],Disease_Id=result_set3[i]['Disease_Id'],Sym_Type=result_set3[i]['Sym_Type'])
            storage3.save()

        snippets = Question_Model.objects.all()
        serializer = Question_Model_Serializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        print("welcome to django POST Method")
        serializer = Question_Model_Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def Question_Operation(request, pk):
    """
    Retrieve, update or delete a question
    """
    try:
        print("PK value",pk)
        snippet = Question_Model.objects.get(Sym_Id=pk)
    except Question_Model.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Question_Model_Serializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = Question_Model_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def user_pattern_access(request):
    """
    Access the question patterns
    """
    if request.method == 'GET':
        snippets = User_History_Model.objects.all()
        serializer = User_History_Model_Serializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = User_History_Model_Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def Symptom_Access(request):
    """
    Access the symptom details
    """
    if request.method == 'GET':
        snippets = Symptom_Model.objects.all()
        serializer = Symptom_Model_Serializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = Symptom_Model_Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def Delete_User_History(request, pk):
    """
    Retrieve, update or delete a question
    """
    try:
        print("PK value",pk)
        snippet = User_History_Model.objects.filter(Ids=pk)
    except User_History_Model.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = User_History_Model_Serializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = User_History_Model_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def disease_access_user(request, pk):
    """
    Retrieve, update or delete a question
    """
    try:
        print("PK value",pk)
        snippet = Disease_Model.objects.filter(Sym_Id=pk)
    except Disease_Model.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Disease_Model_Serializer(snippet, many=True)
        return Response(serializer.data)

