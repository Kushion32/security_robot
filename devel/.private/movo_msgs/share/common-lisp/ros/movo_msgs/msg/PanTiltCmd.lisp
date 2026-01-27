; Auto-generated. Do not edit!


(cl:in-package movo_msgs-msg)


;//! \htmlinclude PanTiltCmd.msg.html

(cl:defclass <PanTiltCmd> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (pan_cmd
    :reader pan_cmd
    :initarg :pan_cmd
    :type movo_msgs-msg:PVA
    :initform (cl:make-instance 'movo_msgs-msg:PVA))
   (tilt_cmd
    :reader tilt_cmd
    :initarg :tilt_cmd
    :type movo_msgs-msg:PVA
    :initform (cl:make-instance 'movo_msgs-msg:PVA)))
)

(cl:defclass PanTiltCmd (<PanTiltCmd>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <PanTiltCmd>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'PanTiltCmd)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name movo_msgs-msg:<PanTiltCmd> is deprecated: use movo_msgs-msg:PanTiltCmd instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <PanTiltCmd>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:header-val is deprecated.  Use movo_msgs-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'pan_cmd-val :lambda-list '(m))
(cl:defmethod pan_cmd-val ((m <PanTiltCmd>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:pan_cmd-val is deprecated.  Use movo_msgs-msg:pan_cmd instead.")
  (pan_cmd m))

(cl:ensure-generic-function 'tilt_cmd-val :lambda-list '(m))
(cl:defmethod tilt_cmd-val ((m <PanTiltCmd>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:tilt_cmd-val is deprecated.  Use movo_msgs-msg:tilt_cmd instead.")
  (tilt_cmd m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <PanTiltCmd>) ostream)
  "Serializes a message object of type '<PanTiltCmd>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'pan_cmd) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'tilt_cmd) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <PanTiltCmd>) istream)
  "Deserializes a message object of type '<PanTiltCmd>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'pan_cmd) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'tilt_cmd) istream)
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<PanTiltCmd>)))
  "Returns string type for a message object of type '<PanTiltCmd>"
  "movo_msgs/PanTiltCmd")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'PanTiltCmd)))
  "Returns string type for a message object of type 'PanTiltCmd"
  "movo_msgs/PanTiltCmd")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<PanTiltCmd>)))
  "Returns md5sum for a message object of type '<PanTiltCmd>"
  "1c8fd5bfa9f9bb5673655828791c82ce")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'PanTiltCmd)))
  "Returns md5sum for a message object of type 'PanTiltCmd"
  "1c8fd5bfa9f9bb5673655828791c82ce")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<PanTiltCmd>)))
  "Returns full string definition for message of type '<PanTiltCmd>"
  (cl:format cl:nil "Header header~%PVA pan_cmd~%PVA tilt_cmd~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%================================================================================~%MSG: movo_msgs/PVA~%float32 pos_rad~%float32 vel_rps~%float32 acc_rps2~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'PanTiltCmd)))
  "Returns full string definition for message of type 'PanTiltCmd"
  (cl:format cl:nil "Header header~%PVA pan_cmd~%PVA tilt_cmd~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%================================================================================~%MSG: movo_msgs/PVA~%float32 pos_rad~%float32 vel_rps~%float32 acc_rps2~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <PanTiltCmd>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'pan_cmd))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'tilt_cmd))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <PanTiltCmd>))
  "Converts a ROS message object to a list"
  (cl:list 'PanTiltCmd
    (cl:cons ':header (header msg))
    (cl:cons ':pan_cmd (pan_cmd msg))
    (cl:cons ':tilt_cmd (tilt_cmd msg))
))
