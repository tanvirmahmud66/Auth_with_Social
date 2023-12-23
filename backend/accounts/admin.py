from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.
#=========================== List View
class UserAdminView(admin.ModelAdmin):
    list_display = ('id','email', 'first_name', 'last_name', 'is_staff', 'is_active')
    ordering = ('email',)


admin.site.register(User, UserAdminView)