import cv2


faceDetect=cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

class Video(object):
    def __init__(self):
        self.video=cv2.VideoCapture(0)
        #self.video=cv2.VideoCapture("Video_test_2.mp4")
    def __del__(self):
        self.video.release()
    def get_frame(self):
        ret,frame=self.video.read()
        ret,jpg=cv2.imencode('.jpg',frame)
        return jpg.tobytes()