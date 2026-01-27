;; Auto-generated. Do not edit!


(when (boundp 'movo_msgs::PanTiltActuatorFdbk)
  (if (not (find-package "MOVO_MSGS"))
    (make-package "MOVO_MSGS"))
  (shadow 'PanTiltActuatorFdbk (find-package "MOVO_MSGS")))
(unless (find-package "MOVO_MSGS::PANTILTACTUATORFDBK")
  (make-package "MOVO_MSGS::PANTILTACTUATORFDBK"))

(in-package "ROS")
;;//! \htmlinclude PanTiltActuatorFdbk.msg.html
(if (not (find-package "GEOMETRY_MSGS"))
  (ros::roseus-add-msgs "geometry_msgs"))
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass movo_msgs::PanTiltActuatorFdbk
  :super ros::object
  :slots (_header _current _pos_rad _vel_rps _torque_nm _pwm _encoder_rad _accel _temperature_degC ))

(defmethod movo_msgs::PanTiltActuatorFdbk
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:current __current) 0.0)
    ((:pos_rad __pos_rad) 0.0)
    ((:vel_rps __vel_rps) 0.0)
    ((:torque_nm __torque_nm) 0.0)
    ((:pwm __pwm) 0.0)
    ((:encoder_rad __encoder_rad) 0.0)
    ((:accel __accel) (instance geometry_msgs::Vector3 :init))
    ((:temperature_degC __temperature_degC) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _current (float __current))
   (setq _pos_rad (float __pos_rad))
   (setq _vel_rps (float __vel_rps))
   (setq _torque_nm (float __torque_nm))
   (setq _pwm (float __pwm))
   (setq _encoder_rad (float __encoder_rad))
   (setq _accel __accel)
   (setq _temperature_degC (float __temperature_degC))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:current
   (&optional __current)
   (if __current (setq _current __current)) _current)
  (:pos_rad
   (&optional __pos_rad)
   (if __pos_rad (setq _pos_rad __pos_rad)) _pos_rad)
  (:vel_rps
   (&optional __vel_rps)
   (if __vel_rps (setq _vel_rps __vel_rps)) _vel_rps)
  (:torque_nm
   (&optional __torque_nm)
   (if __torque_nm (setq _torque_nm __torque_nm)) _torque_nm)
  (:pwm
   (&optional __pwm)
   (if __pwm (setq _pwm __pwm)) _pwm)
  (:encoder_rad
   (&optional __encoder_rad)
   (if __encoder_rad (setq _encoder_rad __encoder_rad)) _encoder_rad)
  (:accel
   (&rest __accel)
   (if (keywordp (car __accel))
       (send* _accel __accel)
     (progn
       (if __accel (setq _accel (car __accel)))
       _accel)))
  (:temperature_degC
   (&optional __temperature_degC)
   (if __temperature_degC (setq _temperature_degC __temperature_degC)) _temperature_degC)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float32 _current
    4
    ;; float32 _pos_rad
    4
    ;; float32 _vel_rps
    4
    ;; float32 _torque_nm
    4
    ;; float32 _pwm
    4
    ;; float32 _encoder_rad
    4
    ;; geometry_msgs/Vector3 _accel
    (send _accel :serialization-length)
    ;; float32 _temperature_degC
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float32 _current
       (sys::poke _current (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _pos_rad
       (sys::poke _pos_rad (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _vel_rps
       (sys::poke _vel_rps (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _torque_nm
       (sys::poke _torque_nm (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _pwm
       (sys::poke _pwm (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _encoder_rad
       (sys::poke _encoder_rad (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; geometry_msgs/Vector3 _accel
       (send _accel :serialize s)
     ;; float32 _temperature_degC
       (sys::poke _temperature_degC (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float32 _current
     (setq _current (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _pos_rad
     (setq _pos_rad (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _vel_rps
     (setq _vel_rps (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _torque_nm
     (setq _torque_nm (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _pwm
     (setq _pwm (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _encoder_rad
     (setq _encoder_rad (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; geometry_msgs/Vector3 _accel
     (send _accel :deserialize buf ptr-) (incf ptr- (send _accel :serialization-length))
   ;; float32 _temperature_degC
     (setq _temperature_degC (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get movo_msgs::PanTiltActuatorFdbk :md5sum-) "ff9a650d0514b0eeb8ec92950681d6cb")
(setf (get movo_msgs::PanTiltActuatorFdbk :datatype-) "movo_msgs/PanTiltActuatorFdbk")
(setf (get movo_msgs::PanTiltActuatorFdbk :definition-)
      "Header header
float32 current
float32 pos_rad
float32 vel_rps
float32 torque_nm
float32 pwm
float32 encoder_rad
geometry_msgs/Vector3 accel
float32 temperature_degC

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



(provide :movo_msgs/PanTiltActuatorFdbk "ff9a650d0514b0eeb8ec92950681d6cb")


