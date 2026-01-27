; Auto-generated. Do not edit!


(cl:in-package movo_msgs-msg)


;//! \htmlinclude MotionTestCmd.msg.html

(cl:defclass <MotionTestCmd> (roslisp-msg-protocol:ros-message)
  ((test_type
    :reader test_type
    :initarg :test_type
    :type cl:integer
    :initform 0)
   (duration_sec
    :reader duration_sec
    :initarg :duration_sec
    :type cl:integer
    :initform 0)
   (magnitude
    :reader magnitude
    :initarg :magnitude
    :type cl:float
    :initform 0.0))
)

(cl:defclass MotionTestCmd (<MotionTestCmd>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <MotionTestCmd>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'MotionTestCmd)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name movo_msgs-msg:<MotionTestCmd> is deprecated: use movo_msgs-msg:MotionTestCmd instead.")))

(cl:ensure-generic-function 'test_type-val :lambda-list '(m))
(cl:defmethod test_type-val ((m <MotionTestCmd>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:test_type-val is deprecated.  Use movo_msgs-msg:test_type instead.")
  (test_type m))

(cl:ensure-generic-function 'duration_sec-val :lambda-list '(m))
(cl:defmethod duration_sec-val ((m <MotionTestCmd>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:duration_sec-val is deprecated.  Use movo_msgs-msg:duration_sec instead.")
  (duration_sec m))

(cl:ensure-generic-function 'magnitude-val :lambda-list '(m))
(cl:defmethod magnitude-val ((m <MotionTestCmd>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader movo_msgs-msg:magnitude-val is deprecated.  Use movo_msgs-msg:magnitude instead.")
  (magnitude m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <MotionTestCmd>) ostream)
  "Serializes a message object of type '<MotionTestCmd>"
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'test_type)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'test_type)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'test_type)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'test_type)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'duration_sec)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'duration_sec)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'duration_sec)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'duration_sec)) ostream)
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'magnitude))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <MotionTestCmd>) istream)
  "Deserializes a message object of type '<MotionTestCmd>"
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'test_type)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'test_type)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'test_type)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'test_type)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'duration_sec)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'duration_sec)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'duration_sec)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'duration_sec)) (cl:read-byte istream))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'magnitude) (roslisp-utils:decode-single-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<MotionTestCmd>)))
  "Returns string type for a message object of type '<MotionTestCmd>"
  "movo_msgs/MotionTestCmd")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'MotionTestCmd)))
  "Returns string type for a message object of type 'MotionTestCmd"
  "movo_msgs/MotionTestCmd")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<MotionTestCmd>)))
  "Returns md5sum for a message object of type '<MotionTestCmd>"
  "f60142650ddadc978bbd697beb24a04f")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'MotionTestCmd)))
  "Returns md5sum for a message object of type 'MotionTestCmd"
  "f60142650ddadc978bbd697beb24a04f")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<MotionTestCmd>)))
  "Returns full string definition for message of type '<MotionTestCmd>"
  (cl:format cl:nil "uint32 test_type~%uint32 duration_sec~%float32 magnitude~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'MotionTestCmd)))
  "Returns full string definition for message of type 'MotionTestCmd"
  (cl:format cl:nil "uint32 test_type~%uint32 duration_sec~%float32 magnitude~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <MotionTestCmd>))
  (cl:+ 0
     4
     4
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <MotionTestCmd>))
  "Converts a ROS message object to a list"
  (cl:list 'MotionTestCmd
    (cl:cons ':test_type (test_type msg))
    (cl:cons ':duration_sec (duration_sec msg))
    (cl:cons ':magnitude (magnitude msg))
))
