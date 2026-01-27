;; Auto-generated. Do not edit!


(when (boundp 'movo_msgs::MotionTestCmd)
  (if (not (find-package "MOVO_MSGS"))
    (make-package "MOVO_MSGS"))
  (shadow 'MotionTestCmd (find-package "MOVO_MSGS")))
(unless (find-package "MOVO_MSGS::MOTIONTESTCMD")
  (make-package "MOVO_MSGS::MOTIONTESTCMD"))

(in-package "ROS")
;;//! \htmlinclude MotionTestCmd.msg.html


(defclass movo_msgs::MotionTestCmd
  :super ros::object
  :slots (_test_type _duration_sec _magnitude ))

(defmethod movo_msgs::MotionTestCmd
  (:init
   (&key
    ((:test_type __test_type) 0)
    ((:duration_sec __duration_sec) 0)
    ((:magnitude __magnitude) 0.0)
    )
   (send-super :init)
   (setq _test_type (round __test_type))
   (setq _duration_sec (round __duration_sec))
   (setq _magnitude (float __magnitude))
   self)
  (:test_type
   (&optional __test_type)
   (if __test_type (setq _test_type __test_type)) _test_type)
  (:duration_sec
   (&optional __duration_sec)
   (if __duration_sec (setq _duration_sec __duration_sec)) _duration_sec)
  (:magnitude
   (&optional __magnitude)
   (if __magnitude (setq _magnitude __magnitude)) _magnitude)
  (:serialization-length
   ()
   (+
    ;; uint32 _test_type
    4
    ;; uint32 _duration_sec
    4
    ;; float32 _magnitude
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint32 _test_type
       (write-long _test_type s)
     ;; uint32 _duration_sec
       (write-long _duration_sec s)
     ;; float32 _magnitude
       (sys::poke _magnitude (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint32 _test_type
     (setq _test_type (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _duration_sec
     (setq _duration_sec (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; float32 _magnitude
     (setq _magnitude (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get movo_msgs::MotionTestCmd :md5sum-) "f60142650ddadc978bbd697beb24a04f")
(setf (get movo_msgs::MotionTestCmd :datatype-) "movo_msgs/MotionTestCmd")
(setf (get movo_msgs::MotionTestCmd :definition-)
      "uint32 test_type
uint32 duration_sec
float32 magnitude

")



(provide :movo_msgs/MotionTestCmd "f60142650ddadc978bbd697beb24a04f")


