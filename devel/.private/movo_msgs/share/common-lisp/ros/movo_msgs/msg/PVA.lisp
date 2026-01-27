; Auto-generated. Do not edit!


(cl:in-package movo_msgs-msg)


;//! \htmlinclude PVA.msg.html

(cl:defclass <PVA> (roslisp-msg-protocol:ros-message)
  ((pos_rad
    :reader pos_rad
    :initarg :pos_rad
    :type cl:float
    :initform 0.0)
   (vel_rps
    :reader vel_rps
    :initarg :vel_rps
    :type cl:float
    :initform 0.0)
   (acc_rps2
    :reader acc_rps2
    :initarg :acc_rps2
    :type cl:float
    :initform 0.0))
)

(cl:defclass PVA (<PVA>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <PVA>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'PVA)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name movo_msgs-msg:<PVA> is deprecated: use movo_msgs-msg:PVA instead.")))

(cl:ensure-generic-function 'pos_rad-val :lambda-list '(m))
(cl:defmethod pos_rad-val ((m <PVA>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:pos_rad-val is deprecated.  Use movo_msgs-msg:pos_rad instead.")
  (pos_rad m))

(cl:ensure-generic-function 'vel_rps-val :lambda-list '(m))
(cl:defmethod vel_rps-val ((m <PVA>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:vel_rps-val is deprecated.  Use movo_msgs-msg:vel_rps instead.")
  (vel_rps m))

(cl:ensure-generic-function 'acc_rps2-val :lambda-list '(m))
(cl:defmethod acc_rps2-val ((m <PVA>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:acc_rps2-val is deprecated.  Use movo_msgs-msg:acc_rps2 instead.")
  (acc_rps2 m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <PVA>) ostream)
  "Serializes a message object of type '<PVA>"
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
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'acc_rps2))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <PVA>) istream)
  "Deserializes a message object of type '<PVA>"
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
    (cl:setf (cl:slot-value msg 'acc_rps2) (roslisp-utils:decode-single-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<PVA>)))
  "Returns string type for a message object of type '<PVA>"
  "movo_msgs/PVA")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'PVA)))
  "Returns string type for a message object of type 'PVA"
  "movo_msgs/PVA")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<PVA>)))
  "Returns md5sum for a message object of type '<PVA>"
  "4bd83bfa12f6251a7bb7637ad4ccd5d0")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'PVA)))
  "Returns md5sum for a message object of type 'PVA"
  "4bd83bfa12f6251a7bb7637ad4ccd5d0")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<PVA>)))
  "Returns full string definition for message of type '<PVA>"
  (cl:format cl:nil "float32 pos_rad~%float32 vel_rps~%float32 acc_rps2~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'PVA)))
  "Returns full string definition for message of type 'PVA"
  (cl:format cl:nil "float32 pos_rad~%float32 vel_rps~%float32 acc_rps2~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <PVA>))
  (cl:+ 0
     4
     4
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <PVA>))
  "Converts a ROS message object to a list"
  (cl:list 'PVA
    (cl:cons ':pos_rad (pos_rad msg))
    (cl:cons ':vel_rps (vel_rps msg))
    (cl:cons ':acc_rps2 (acc_rps2 msg))
))
