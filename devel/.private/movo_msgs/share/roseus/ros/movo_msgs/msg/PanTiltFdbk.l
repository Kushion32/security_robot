;; Auto-generated. Do not edit!


(when (boundp 'movo_msgs::PanTiltFdbk)
  (if (not (find-package "MOVO_MSGS"))
    (make-package "MOVO_MSGS"))
  (shadow 'PanTiltFdbk (find-package "MOVO_MSGS")))
(unless (find-package "MOVO_MSGS::PANTILTFDBK")
  (make-package "MOVO_MSGS::PANTILTFDBK"))

(in-package "ROS")
;;//! \htmlinclude PanTiltFdbk.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass movo_msgs::PanTiltFdbk
  :super ros::object
  :slots (_header _pan _tilt ))

(defmethod movo_msgs::PanTiltFdbk
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:pan __pan) (instance movo_msgs::PanTiltActuatorFdbk :init))
    ((:tilt __tilt) (instance movo_msgs::PanTiltActuatorFdbk :init))
    )
   (send-super :init)
   (setq _header __header)
   (setq _pan __pan)
   (setq _tilt __tilt)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:pan
   (&rest __pan)
   (if (keywordp (car __pan))
       (send* _pan __pan)
     (progn
       (if __pan (setq _pan (car __pan)))
       _pan)))
  (:tilt
   (&rest __tilt)
   (if (keywordp (car __tilt))
       (send* _tilt __tilt)
     (progn
       (if __tilt (setq _tilt (car __tilt)))
       _tilt)))
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; movo_msgs/PanTiltActuatorFdbk _pan
    (send _pan :serialization-length)
    ;; movo_msgs/PanTiltActuatorFdbk _tilt
    (send _tilt :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; movo_msgs/PanTiltActuatorFdbk _pan
       (send _pan :serialize s)
     ;; movo_msgs/PanTiltActuatorFdbk _tilt
       (send _tilt :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; movo_msgs/PanTiltActuatorFdbk _pan
     (send _pan :deserialize buf ptr-) (incf ptr- (send _pan :serialization-length))
   ;; movo_msgs/PanTiltActuatorFdbk _tilt
     (send _tilt :deserialize buf ptr-) (incf ptr- (send _tilt :serialization-length))
   ;;
   self)
  )

(setf (get movo_msgs::PanTiltFdbk :md5sum-) "c294813db952ac45feb2086fe22222ab")
(setf (get movo_msgs::PanTiltFdbk :datatype-) "movo_msgs/PanTiltFdbk")
(setf (get movo_msgs::PanTiltFdbk :definition-)
      "Header header
PanTiltActuatorFdbk pan
PanTiltActuatorFdbk tilt

================================================================================
MSG: std_msgs/Header
# Standard metadata for higher-level stamped data types.
# This is generally used to communicate timestamped data 
# in a particular coordinate frame.
# 
# sequence ID: consecutively increasing ID 
uint32 seq
#Two-integer timestamp that is expressed as:
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
# time-handling sugar is provided by the client library
time stamp
#Frame this data is associated with
string frame_id

================================================================================
MSG: movo_msgs/PanTiltActuatorFdbk
Header header
float32 current
float32 pos_rad
float32 vel_rps
float32 torque_nm
float32 pwm
float32 encoder_rad
geometry_msgs/Vector3 accel
float32 temperature_degC

================================================================================
MSG: geometry_msgs/Vector3
# This represents a vector in free space. 
# It is only meant to represent a direction. Therefore, it does not
# make sense to apply a translation to it (e.g., when applying a 
# generic rigid transformation to a Vector3, tf2 will only apply the
# rotation). If you want your data to be translatable too, use the
# geometry_msgs/Point message instead.

float64 x
float64 y
float64 z
")



(provide :movo_msgs/PanTiltFdbk "c294813db952ac45feb2086fe22222ab")


