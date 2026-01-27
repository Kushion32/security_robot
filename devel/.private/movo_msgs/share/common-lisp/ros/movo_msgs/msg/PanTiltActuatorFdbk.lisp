; Auto-generated. Do not edit!


(cl:in-package movo_msgs-msg)


;//! \htmlinclude PanTiltActuatorFdbk.msg.html

(cl:defclass <PanTiltActuatorFdbk> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (current
    :reader current
    :initarg :current
    :type cl:float
    :initform 0.0)
   (pos_rad
    :reader pos_rad
    :initarg :pos_rad
    :type cl:float
    :initform 0.0)
   (vel_rps
    :reader vel_rps
    :initarg :vel_rps
    :type cl:float
    :initform 0.0)
   (torque_nm
    :reader torque_nm
    :initarg :torque_nm
    :type cl:float
    :initform 0.0)
   (pwm
    :reader pwm
    :initarg :pwm
    :type cl:float
    :initform 0.0)
   (encoder_rad
    :reader encoder_rad
    :initarg :encoder_rad
    :type cl:float
    :initform 0.0)
   (accel
    :reader accel
    :initarg :accel
    :type geometry_msgs-msg:Vector3
    :initform (cl:make-instance 'geometry_msgs-msg:Vector3))
   (temperature_degC
    :reader temperature_degC
    :initarg :temperature_degC
    :type cl:float
    :initform 0.0))
)

(cl:defclass PanTiltActuatorFdbk (<PanTiltActuatorFdbk>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <PanTiltActuatorFdbk>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'PanTiltActuatorFdbk)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name movo_msgs-msg:<PanTiltActuatorFdbk> is deprecated: use movo_msgs-msg:PanTiltActuatorFdbk instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:header-val is deprecated.  Use movo_msgs-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'current-val :lambda-list '(m))
(cl:defmethod current-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:current-val is deprecated.  Use movo_msgs-msg:current instead.")
  (current m))

(cl:ensure-generic-function 'pos_rad-val :lambda-list '(m))
(cl:defmethod pos_rad-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:pos_rad-val is deprecated.  Use movo_msgs-msg:pos_rad instead.")
  (pos_rad m))

(cl:ensure-generic-function 'vel_rps-val :lambda-list '(m))
(cl:defmethod vel_rps-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:vel_rps-val is deprecated.  Use movo_msgs-msg:vel_rps instead.")
  (vel_rps m))

(cl:ensure-generic-function 'torque_nm-val :lambda-list '(m))
(cl:defmethod torque_nm-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:torque_nm-val is deprecated.  Use movo_msgs-msg:torque_nm instead.")
  (torque_nm m))

(cl:ensure-generic-function 'pwm-val :lambda-list '(m))
(cl:defmethod pwm-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:pwm-val is deprecated.  Use movo_msgs-msg:pwm instead.")
  (pwm m))

(cl:ensure-generic-function 'encoder_rad-val :lambda-list '(m))
(cl:defmethod encoder_rad-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:encoder_rad-val is deprecated.  Use movo_msgs-msg:encoder_rad instead.")
  (encoder_rad m))

(cl:ensure-generic-function 'accel-val :lambda-list '(m))
(cl:defmethod accel-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:accel-val is deprecated.  Use movo_msgs-msg:accel instead.")
  (accel m))

(cl:ensure-generic-function 'temperature_degC-val :lambda-list '(m))
(cl:defmethod temperature_degC-val ((m <PanTiltActuatorFdbk>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:temperature_degC-val is deprecated.  Use movo_msgs-msg:temperature_degC instead.")
  (temperature_degC m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <PanTiltActuatorFdbk>) ostream)
  "Serializes a message object of type '<PanTiltActuatorFdbk>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'current))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'pos_rad))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'vel_rps))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'torque_nm))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'pwm))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'encoder_rad))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'accel) ostream)
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'temperature_degC))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <PanTiltActuatorFdbk>) istream)
  "Deserializes a message object of type '<PanTiltActuatorFdbk>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'current) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'pos_rad) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'vel_rps) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'torque_nm) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'pwm) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'encoder_rad) (roslisp-utils:decode-single-float-bits bits)))
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'accel) istream)
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'temperature_degC) (roslisp-utils:decode-single-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<PanTiltActuatorFdbk>)))
  "Returns string type for a message object of type '<PanTiltActuatorFdbk>"
  "movo_msgs/PanTiltActuatorFdbk")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'PanTiltActuatorFdbk)))
  "Returns string type for a message object of type 'PanTiltActuatorFdbk"
  "movo_msgs/PanTiltActuatorFdbk")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<PanTiltActuatorFdbk>)))
  "Returns md5sum for a message object of type '<PanTiltActuatorFdbk>"
  "ff9a650d0514b0eeb8ec92950681d6cb")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'PanTiltActuatorFdbk)))
  "Returns md5sum for a message object of type 'PanTiltActuatorFdbk"
  "ff9a650d0514b0eeb8ec92950681d6cb")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<PanTiltActuatorFdbk>)))
  "Returns full string definition for message of type '<PanTiltActuatorFdbk>"
  (cl:format cl:nil "Header header~%float32 current~%float32 pos_rad~%float32 vel_rps~%float32 torque_nm~%float32 pwm~%float32 encoder_rad~%geometry_msgs/Vector3 accel~%float32 temperature_degC~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%================================================================================~%MSG: geometry_msgs/Vector3~%# This represents a vector in free space. ~%# It is only meant to represent a direction. Therefore, it does not~%# make sense to apply a translation to it (e.g., when applying a ~%# generic rigid transformation to a Vector3, tf2 will only apply the~%# rotation). If you want your data to be translatable too, use the~%# geometry_msgs/Point message instead.~%~%float64 x~%float64 y~%float64 z~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'PanTiltActuatorFdbk)))
  "Returns full string definition for message of type 'PanTiltActuatorFdbk"
  (cl:format cl:nil "Header header~%float32 current~%float32 pos_rad~%float32 vel_rps~%float32 torque_nm~%float32 pwm~%float32 encoder_rad~%geometry_msgs/Vector3 accel~%float32 temperature_degC~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%================================================================================~%MSG: geometry_msgs/Vector3~%# This represents a vector in free space. ~%# It is only meant to represent a direction. Therefore, it does not~%# make sense to apply a translation to it (e.g., when applying a ~%# generic rigid transformation to a Vector3, tf2 will only apply the~%# rotation). If you want your data to be translatable too, use the~%# geometry_msgs/Point message instead.~%~%float64 x~%float64 y~%float64 z~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <PanTiltActuatorFdbk>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     4
     4
     4
     4
     4
     4
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'accel))
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <PanTiltActuatorFdbk>))
  "Converts a ROS message object to a list"
  (cl:list 'PanTiltActuatorFdbk
    (cl:cons ':header (header msg))
    (cl:cons ':current (current msg))
    (cl:cons ':pos_rad (pos_rad msg))
    (cl:cons ':vel_rps (vel_rps msg))
    (cl:cons ':torque_nm (torque_nm msg))
    (cl:cons ':pwm (pwm msg))
    (cl:cons ':encoder_rad (encoder_rad msg))
    (cl:cons ':accel (accel msg))
    (cl:cons ':temperature_degC (temperature_degC msg))
))
