from rest_framework import serializers
from .models import Question_Model, Disease_Model, Symptom_Model, User_History_Model

class Question_Model_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Question_Model
        fields = '__all__'

class Disease_Model_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Disease_Model
        fields = '__all__'
        
class Symptom_Model_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Symptom_Model
        fields = '__all__'

class User_History_Model_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User_History_Model
        fields = '__all__'

