from django.db import models

class Question_Model(models.Model):
    Id = models.CharField(max_length=255)
    EleId = models.CharField(max_length=255)
    Question = models.CharField(max_length=255)
    Option1 = models.CharField(max_length=255)
    Option2 = models.CharField(max_length=255)
    Option3 = models.CharField(max_length=255)
    Disabled = models.BooleanField(default=False)
    Disease_Id = models.CharField(max_length=255, blank=True)
    Sym_Id = models.CharField(max_length=255, blank=True)

class Symptom_Model(models.Model):
    Id = models.CharField(max_length=255)
    Name = models.CharField(max_length=255)
    Sym_Id = models.CharField(max_length=255)
    Disease_Id = models.CharField(max_length=255)
    Sym_Type = models.CharField(max_length=255)

class Disease_Model(models.Model):
    Name = models.CharField(max_length=255)
    Sym_Id = models.CharField(max_length=255)

class User_History_Model(models.Model):
    Ids = models.IntegerField()
    Name = models.CharField(max_length=255)
    Sym_Id = models.CharField(max_length=255)
    Disease_Id = models.CharField(max_length=255)
    Sym_Type = models.CharField(max_length=255)



