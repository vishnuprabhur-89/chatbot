from django.conf.urls import include, url
from django.contrib import admin
from backend.views import Question_Warehouse, Question_Operation, user_pattern_access, Symptom_Access, Delete_User_History, disease_access_user

urlpatterns = [
    url(r'', admin.site.urls),
    url(r'^question/creation', Question_Warehouse, name='Question Access and Insertion'),
    url(r'^question/update/(?P<pk>[0-9]+)$', Question_Operation, name='Question Deletion And Updation'),
    url(r'^user/question/access', user_pattern_access, name='User pattern indentifier'),
    url(r'^access/sym', Symptom_Access, name='Symptom Access Method'),
    url(r'^delete/user/(?P<pk>[0-9]+)$', Delete_User_History, name='User Deletion And Updation'),
    url(r'^access/user/(?P<pk>[0-9]+)$', disease_access_user, name='Disease Access Method'),
]