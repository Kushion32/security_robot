; Auto-generated. Do not edit!


(cl:in-package movo_msgs-msg)


;//! \htmlinclude PanTiltFdbk.msg.html

(cl:defclass <PanTiltFdbk> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (pan
    :reader pan
    :initarg :pan
    :type movo_msgs-msg:PanTiltActuatorFdbk
    :initform (cl:make-instance 'movo_msgs-msg:PanTiltActuatorFdbk))
   (tilt
    :reader tilt
    :initarg :tilt
    :type movo_msgs-msg:PanTiltActuatorFdbk
    :initform (cl:make-instance 'movo_msgs-msg:PanTiltActuatorFdbk)))
)

(cl:defclass PanTiltFdbk (<PanTiltFdbk>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <PanTiltFdbk>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'PanTiltFdbk)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name movo_msgs-msg:<PanTiltFdbk> is deprecated: use movo_msgs-msg:PanTiltFdbk instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <PanTiltFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:header-val is deprecated.  Use movo_msgs-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'pan-val :lambda-list '(m))
(cl:defmethod pan-val ((m <PanTiltFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:pan-val is deprecated.  Use movo_msgs-msg:pan instead.")
  (pan m))

(cl:ensure-generic-function 'tilt-val :lambda-list '(m))
(cl:defmethod tilt-val ((m <PanTiltFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:tilt-val is deprecated.  Use movo_msgs-msg:tilt instead.")
  (tilt m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <PanTiltFdbk>) ostream)
  "Serializes a message object of type '<PanTiltFdbk>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'pan) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'tilt) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <PanTiltFdbk>) istream)
  "Deserializes a message object of type '<PanTiltFdbk>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'pan) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'tilt) istream)
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<PanTiltFdbk>)))
  "Returns string type for a message object of type '<PanTiltFdbk>"
  "movo_msgs/PanTiltFdbk")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'PanTiltFdbk)))
  "Returns string type for a message object of type 'PanTiltFdbk"
  "movo_msgs/PanTiltFdbk")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<PanTiltFdbk>)))
  "Returns md5sum for a message object of type '<PanTiltFdbk>"
  "c294813db952ac45feb2086fe22222ab")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'PanTiltFdbk)))
  "Returns md5sum for a message object of type 'PanTiltFdbk"
  "c294813db952ac45feb2086fe22222ab")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<PanTiltFdbk>)))
  "Returns full string definition for message of type '<PanTiltFdbk>"
  (cl:format cl:nil "Header header~%PanTiltActuatorFdbk pan~%PanTiltActuatorFdbk tilt~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%================================================================================~%MSG: movo_msgs/PanTiltActuatorFdbk~%Header header~%float32 current~%float32 pos_rad~%float32 vel_rps~%float32 torque_nm~%float32 pwm~%float32 encoder_rad~%geometry_msgs/Vector3 accel~%float32 temperature_degC~%~%================================================================================~%MSG: geometry_msgs/Vector3~%# This represents a vector in free space. ~%# It is only meant to represent a direction. Therefore, it does not~%# make sense to apply a translation to it (e.g., when applying a ~%# generic rigid transformation to a Vector3, tf2 will only apply the~%# rotation). If you want your data to be translatable too, use the~%# geometry_msgs/Point message instead.~%~%float64 x~%float64 y~%float64 z~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'PanTiltFdbk)))
  "Returns full string definition for message of type 'PanTiltFdbk"
  (cl:format cl:nil "Header header~%PanTiltActuatorFdbk pan~%PanTiltActuatorFdbk tilt~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%================================================================================~%MSG: movo_msgs/PanTiltActuatorFdbk~%Header header~%float32 current~%float32 pos_rad~%float32 vel_rps~%float32 torque_nm~%float32 pwm~%float32 encoder_rad~%geometry_msgs/Vector3 accel~%float32 temperature_degC~%~%================================================================================~%MSG: geometry_msgs/Vector3~%# This represents a vector in free space. ~%# It is only meant to represent a direction. Therefore, it does not~%# make sense to apply a translation to it (e.g., when applying a ~%# generic rigid transformation to a Vector3, tf2 will only apply the~%# rotation). If you want your data to be translatable too, use the~%# geometry_msgs/Point message instead.~%~%float64 x~%float64 y~%float64 z~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <PanTiltFdbk>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'pan))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'tilt))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <PanTiltFdbk>))
  "Converts a ROS message object to a list"
  (cl:list 'PanTiltFdbk
    (cl:cons ':header (header msg))
    (cl:cons ':pan (pan msg))
    (cl:cons ':tilt (tilt msg))
))
