from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Record
from .serializers import RecordSerializer



class AllRecordsView(generics.ListAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer

class CustomerRecordView(generics.RetrieveAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        # Retrieve the customer record by primary key
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class DeleteRecordView(generics.DestroyAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        # Delete the customer record by primary key
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

class AddRecordView(generics.CreateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    permission_classes = [permissions.IsAuthenticated]

class UpdateRecordView(generics.UpdateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    permission_classes = [permissions.IsAuthenticated]

