from rest_framework.serializers import ModelSerializer
from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'name',
            'email',
            'password',
            'phone_number',
            'user_type',  
        )
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user_type = validated_data.pop('user_type', User.UserType.APPLICANT) 
        instance = self.Meta.model(**validated_data, user_type=user_type)
        if password:
            instance.set_password(password)
        instance.save()
        return instance